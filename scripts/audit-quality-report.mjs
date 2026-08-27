// Quality gate on the audit agents' own returns, run BEFORE their verdicts are
// allowed to move any row to COMPLETE.
//
// An agent reports what it claims to have compared. That claim is only worth
// something if it names a real Figma node and a viewport it actually looked at,
// and if the screen it names is one the matrix was actually asking about.
// This script re-derives all three from the journals and the matrix, and prints
// what would be rejected and why.
//
// usage: node scripts/audit-quality-report.mjs <scratchpad> <journal-dir>...
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import {
  hasNodeId,
  viewportsOf,
  codeOf,
  loadableRoute,
  isSectionLevelEvidence,
} from "./lib/verdict-rules.mjs";

// The scratchpad path is accepted for call-site symmetry with the other
// scripts; this report reads only the journals and the matrix.
const [, ...journalDirs] = process.argv.slice(2);
const VALID = new Set(["match", "fixed", "deviation-documented"]);

/** What the matrix was asking each section to settle, per viewport. */
const asked = new Map(); // `${viewport}|${code}` -> true
const known = new Set(); // every code the matrix tracks, whatever its status
const askedRoute = new Map(); // `${viewport}|${url}` -> code
if (existsSync("docs/parity-matrix.md")) {
  for (const line of readFileSync("docs/parity-matrix.md", "utf8").split("\n")) {
    if (!line.startsWith("|") || line.includes("---|")) continue;
    const c = line.trim().replace(/^\||\|$/g, "").split("|").map((x) => x.trim());
    if (c[0] === "Section" || c.length < 12) continue;
    const code = /^((?:W|EM|MD|LP|AD)-[A-Z]*\d+[A-Z0-9]*)/.exec(c[2])?.[1];
    if (!code) continue;
    known.add(code);
    const url = loadableRoute(c[3]);
    for (const [viewport, verdict] of [
      ["mobile", c[5]],
      ["desktop", c[7]],
    ]) {
      if (verdict !== "needs-audit" && verdict !== "pending") continue;
      asked.set(`${viewport}|${code}`, true);
      askedRoute.set(`${viewport}|${url}`, code);
    }
  }
}

const entries = [];
for (const dir of journalDirs) {
  const file = join(dir, "journal.jsonl");
  if (!existsSync(file)) {
    console.warn(`! no journal at ${file}`);
    continue;
  }
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (!line.trim()) continue;
    let entry;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }
    if (entry.type !== "result") continue;
    for (const sc of entry.result?.screensChecked ?? []) {
      entries.push({ ...sc, dir });
    }
  }
}

const verdict = { accepted: [], rejected: [], newCoverage: [], sectionLevel: [] };
const reasons = {};
const bump = (r) => (reasons[r] = (reasons[r] ?? 0) + 1);

for (const e of entries) {
  const problems = [];
  if (!VALID.has(e.verdict)) problems.push("verdict not one of match/fixed/deviation-documented");
  if (!hasNodeId(e.figmaNode)) problems.push("no real Figma node id");
  const vp = viewportsOf(e.route ?? "", e.figmaNode ?? "");
  if (!vp.mobile && !vp.desktop) problems.push("no viewport can be established");
  const code = codeOf(e.figmaNode ?? "");
  // A missing code is only a problem when the entry does not explain itself.
  // Where Figma has no frame for a state, the agent cites the section node and
  // says so — that is a documented absence, classified here rather than
  // dropped, because a silent drop looks exactly like a bad citation.
  const sectionLevel = !code && isSectionLevelEvidence(e.figmaNode);
  if (!code && !sectionLevel) problems.push("no screen code in figmaNode");

  // Did the matrix actually ask for this screen on this viewport? An agent that
  // re-reports screens nobody asked about is padding its list; an agent that
  // reports the right screens on the wrong viewport audited the wrong thing.
  //
  // This only applies to screens the matrix already tracks. A build workstream
  // produces screens that are new by definition — the Company Admin areas had
  // no rows at all — and rejecting those would punish exactly the work that was
  // commissioned. Those are counted separately as new coverage.
  let newCoverage = false;
  if (code && (vp.mobile || vp.desktop) && asked.size) {
    if (!known.has(code)) {
      newCoverage = true;
    } else {
      const claimed = ["mobile", "desktop"].filter((v) => vp[v]);
      const url = loadableRoute(e.route ?? "");
      const wanted = claimed.some(
        (v) => asked.has(`${v}|${code}`) || askedRoute.get(`${v}|${url}`) === code,
      );
      if (!wanted) problems.push("already settled — not a screen/viewport the matrix asked about");
    }
  }

  if (problems.length) {
    verdict.rejected.push({ ...e, problems });
    for (const p of problems) bump(p);
  } else {
    verdict.accepted.push(e);
    if (newCoverage) verdict.newCoverage.push(e);
    if (sectionLevel) verdict.sectionLevel.push(e);
  }
}

console.log(`entries returned : ${entries.length}`);
console.log(`  accepted       : ${verdict.accepted.length}`);
console.log(`  rejected       : ${verdict.rejected.length}`);
for (const [r, n] of Object.entries(reasons).sort((a, b) => b[1] - a[1])) {
  console.log(`     ${String(n).padStart(4)}  ${r}`);
}

const byVerdict = verdict.accepted.reduce(
  (m, e) => ((m[e.verdict] = (m[e.verdict] ?? 0) + 1), m),
  {},
);
console.log(`  accepted by verdict: ${JSON.stringify(byVerdict)}`);
console.log(`  of which NEW coverage (no prior matrix row): ${verdict.newCoverage.length}`);
console.log(
  `  of which SECTION-LEVEL (Figma draws no frame for that state): ${verdict.sectionLevel.length}`,
);
for (const e of verdict.sectionLevel) {
  console.log(`     ${String(e.route).slice(0, 52).padEnd(52)} | ${e.figmaNode}`);
}

if (verdict.rejected.length) {
  console.log("\nrejected entries:");
  for (const r of verdict.rejected.slice(0, 30)) {
    console.log(`  - ${String(r.route).slice(0, 56).padEnd(56)} | ${String(r.figmaNode).slice(0, 26).padEnd(26)} | ${r.problems.join("; ")}`);
  }
  if (verdict.rejected.length > 30) console.log(`  … and ${verdict.rejected.length - 30} more`);
}

// A wave that returns almost nothing usable is a harness problem, not a result.
const ratio = entries.length ? verdict.accepted.length / entries.length : 0;
console.log(`\nusable ratio: ${(ratio * 100).toFixed(1)}%`);
if (entries.length && ratio < 0.6) {
  console.error("✗ fewer than 60% of returned entries are usable — investigate before trusting this wave");
  process.exit(1);
}
console.log("✓ audit returns look usable");
