// Collects the real visual-audit verdicts out of the workflow journals and
// writes the two visual-coverage files the matrix generators read.
//
// The audits return, per checked screen, { route, figmaNode, verdict } where
// verdict is one of match | fixed | deviation-documented — all three mean the
// render was put side by side with its Figma frame and the difference was
// resolved. Nothing else counts as a visual sign-off: a frame that no agent
// listed stays `pending`, and a pending column can never read COMPLETE.
//
// usage: node scripts/collect-visual-verdicts.mjs <scratchpad> <journal-dir>...
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import {
  hasNodeId,
  viewportsOf,
  codeOf,
  sectionOf,
} from "./lib/verdict-rules.mjs";

const [scratch, ...journalDirs] = process.argv.slice(2);
if (!scratch || journalDirs.length === 0) {
  console.error(
    "usage: node scripts/collect-visual-verdicts.mjs <scratchpad> <journal-dir>...",
  );
  process.exit(1);
}

const VERDICTS = new Set(["match", "fixed", "deviation-documented"]);




const codes = new Map(); // code -> {mobile, desktop}
const codeRoutes = new Map(); // code -> clean FE route the audit loaded
const sections = new Map(); // section -> {mobile, desktop}
// section -> {mobile:[route], desktop:[route]} — the routes an audit actually
// opened, so a later structural check has something concrete to compare with.
const sectionRoutes = new Map();
const routes = new Set();
let checked = 0;
let skipped = 0;
let nodeless = 0;
let viewportless = 0;

const mark = (map, key, vp) => {
  const cur = map.get(key) ?? { mobile: false, desktop: false };
  cur.mobile ||= vp.mobile;
  cur.desktop ||= vp.desktop;
  map.set(key, cur);
};

for (const dir of journalDirs) {
  const file = join(dir, "journal.jsonl");
  if (!existsSync(file)) {
    console.warn(`! no journal at ${file} — skipping`);
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
      if (!VERDICTS.has(sc.verdict)) {
        skipped += 1;
        continue;
      }
      // A verdict is only evidence if it names the Figma node that was put
      // beside the render. "I checked this screen" without a node id is a
      // claim, not a comparison.
      if (!hasNodeId(sc.figmaNode)) {
        nodeless += 1;
        continue;
      }
      const vp = viewportsOf(sc.route ?? "", sc.figmaNode ?? "");
      if (!vp.mobile && !vp.desktop) {
        viewportless += 1;
        continue;
      }
      checked += 1;
      const clean = String(sc.route ?? "")
        .split(/\s*[(@]/)[0]
        .trim();
      const code = codeOf(sc.figmaNode ?? "");
      if (code) {
        mark(codes, code, vp);
        if (clean.startsWith("/") && !codeRoutes.has(code)) codeRoutes.set(code, clean);
      }
      const section = sectionOf(sc.route ?? "");
      mark(sections, section, vp);
      if (clean.startsWith("/")) {
        const bag = sectionRoutes.get(section) ?? { mobile: [], desktop: [] };
        for (const vpName of ["mobile", "desktop"]) {
          if (vp[vpName] && !bag[vpName].includes(clean)) bag[vpName].push(clean);
        }
        sectionRoutes.set(section, bag);
      }
      routes.add(section);
    }
  }
}

const out = {
  generatedFrom: journalDirs,
  screensChecked: checked,
  skippedNonVerdict: skipped,
  rejectedNoNodeId: nodeless,
  rejectedNoViewport: viewportless,
  codes: Object.fromEntries([...codes].sort()),
  codeRoutes: Object.fromEntries([...codeRoutes].sort()),
  sections: Object.fromEntries([...sections].sort()),
  sectionRoutes: Object.fromEntries([...sectionRoutes].sort()),
};

writeFileSync(
  `${scratch}/visual-verdicts.json`,
  `${JSON.stringify(out, null, 1)}\n`,
);
console.log(
  `screensChecked=${checked} skipped=${skipped} rejected(noNodeId)=${nodeless} rejected(noViewport)=${viewportless} codes=${codes.size} sections=${sections.size}`,
);
for (const [s, vp] of [...sections].sort()) {
  console.log(`  ${s} mobile=${vp.mobile ? "y" : "-"} desktop=${vp.desktop ? "y" : "-"}`);
}
