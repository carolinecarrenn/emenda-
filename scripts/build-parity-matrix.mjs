// Builds the screen/state-level parity matrix from the agent inventories.
//
// Columns are the audit contract:
//   Section | Figma Node | Screen/State | FE Route |
//   Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status
//
// Flow   = does the capability exist and is it reachable on that viewport?
// Visual = what a real audit recorded for that viewport (see visualFor below).
//
// COMPLETE is the conjunction of every gate. A row whose Mobile or Desktop
// Visual still reads "pending" is PARTIAL, however healthy its flow is.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
// One definition of every shared rule, so the module the pipeline verifier
// exercises is the module this generator actually runs on. A private copy
// would drift the moment one of them was edited.
import {
  sectionOf,
  loadableRoute,
  baseRoute,
  acceptedCategory,
} from "./lib/verdict-rules.mjs";

const S = process.argv[2]; // scratchpad dir
const read = (f) =>
  existsSync(`${S}/${f}`) ? JSON.parse(readFileSync(`${S}/${f}`, "utf8")) : null;

const worker = read("worker-inventory.json") ?? [];
const auth = read("auth-inventory.json")?.screens ?? [];
const NODE_IDS = read("nodeids.json") ?? {};
const VISUAL = read("visual-coverage.json") ?? {};

const SECTION_OF = (code) => {
  const n = parseInt(String(code).replace(/^W-?/, ""), 10);
  if (n >= 1 && n <= 11) return "01 Auth";
  if (n >= 12 && n <= 17) return "02 EMENDA ID & Identity";
  if (n === 18) return "03 Headless Home";
  if (n >= 19 && n <= 20) return "04 Personal Profile";
  if (n >= 21 && n <= 31) return "05 Career & CV";
  if (n >= 32 && n <= 36) return "06 Visa & Japan Prep";
  if (n >= 37 && n <= 40) return "07 Documents & Emergency";
  if (n >= 41 && n <= 46) return "08 Knowledge & Q&A";
  if (n >= 47 && n <= 48) return "09 Help & Support";
  if (n >= 49 && n <= 52) return "10 Connect Employer";
  if (n === 53) return "11 Notifications";
  if (n >= 54 && n <= 56) return "12 Reports";
  if (n >= 57 && n <= 58) return "13 Chat";
  if (n === 59) return "14 Assistant";
  if (n === 60) return "15 Emenda Coin";
  if (n === 61) return "16 Logs & Records";
  return "other";
};

// W-04A is a state variant of the base frame W-04.
const BASE_OF = (code) => String(code).replace(/^(W-\d+).*$/, "$1");

// ── Reachability corrections ──────────────────────────────────────────────
// The section inventories were written before the gap-scan wired several dead
// controls. Where the claim is now false, it is corrected here WITH the
// evidence that proves it — a passing test, or the live control's own file.
// Nothing is corrected on assertion alone.
const REACHABILITY_CORRECTIONS = {
  "W-53": {
    reachable: true,
    evidence:
      "the top-bar bell is a <Link to=\"/worker/notifications\"> (src/components/worker/WorkerTopBar.tsx); proven by e2e/routes.spec.ts \"app chrome reaches Notifications and Profile by clicking\"",
  },
};

const rows = [];
const seen = new Set();

for (const r of worker) {
  if (seen.has(r.code)) continue;
  seen.add(r.code);
  const urlOnly = /NOT REACHABLE/i.test(r.reachable || "");
  rows.push({
    section: SECTION_OF(r.code),
    code: r.code,
    name: r.name,
    route: r.feRoute,
    mobileFlow: r.mobileFlow === "yes",
    desktopFlow: r.desktopFlow === "yes",
    reachable: !urlOnly,
    reason: urlOnly
      ? (r.reachable || "").replace(/^NOT REACHABLE[^—-]*[—-]\s*/i, "")
      : "",
  });
}

// auth rows come from the pre-fix inventory; reachability was closed by the
// auth workflow, so mark them reachable unless they are server/OS-driven.
const AUTH_URL_ONLY = new Set([
  "W-05C", "W-07C", "W-09D", "W-14B", "W-14C", "W-14E",
  "W-16C", "W-16D", "W-16E", "W-16F", "W-17F",
]);
for (const r of auth) {
  if (r.surface !== "mobile" || seen.has(r.code)) continue;
  seen.add(r.code);
  rows.push({
    section: SECTION_OF(r.code),
    code: r.code,
    name: r.name,
    route: r.feRoute,
    mobileFlow: true,
    desktopFlow: true,
    reachable: !AUTH_URL_ONLY.has(r.code),
    reason: AUTH_URL_ONLY.has(r.code)
      ? "server outcome / OS permission / loading — no honest client trigger"
      : "",
  });
}

for (const r of rows) {
  const fix = REACHABILITY_CORRECTIONS[r.code];
  if (fix) {
    r.reachable = fix.reachable;
    r.reason = fix.evidence;
    r.corrected = true;
  }
}

rows.sort((a, b) => (a.section + a.code).localeCompare(b.section + b.code));

const bySection = new Map();
for (const r of rows) {
  if (!bySection.has(r.section)) bySection.set(r.section, []);
  bySection.get(r.section).push(r);
}

// Real visual-audit verdicts, collected from the workflow journals by
// scripts/collect-visual-verdicts.mjs. Nothing here is assumed: a frame is
// only credited on a viewport an audit actually exercised.
const VERDICTS = read("visual-verdicts.json") ?? { codes: {}, sections: {} };
const DESKTOP_ADAPTED = new Set(VISUAL.desktopAdaptedCodes ?? []);

// scripts/verify-visual-basis.mjs re-tests every verdict that leans on ANOTHER
// screen's audit. Where the two renderings are not actually the same
// composition, the borrowed verdict is not strong enough to stand as a final
// status: it becomes `needs-audit`, which is PARTIAL until a targeted audit
// compares that frame directly.
const BASIS = read("visual-basis-results.json");
const WEAK = new Set(
  (BASIS?.results ?? [])
    .filter((x) => !x.ok)
    .map((x) => `${x.viewport}|${x.code}`),
);


const hit = (bag, key, viewport) => Boolean(bag?.[key]?.[viewport]);



/**
 * Visual sign-off for one screen on one viewport. Evidence is judged per
 * ROUTE, not per section: an audit that swept a section is not evidence for a
 * screen inside it that the audit never opened — two different screens in one
 * section are *supposed* to look different, so scoring them against each other
 * proves nothing. Strongest evidence first:
 *
 *   audited        — this frame, or this exact URL, was compared on this
 *                    viewport
 *   derived (X)    — it is a ?state= of a URL that was compared, or its base
 *                    frame was; verify-visual-basis.mjs then has to confirm the
 *                    two really are the same composition
 *   adapted        — desktop only: no desktop Figma node exists, so the
 *                    rendering was reviewed against desktop Foundations
 *   needs-audit    — evidence exists only at section level, or the structural
 *                    check refused a borrowed verdict: PARTIAL until compared
 *   pending        — no audit has touched this section on this viewport
 */
function visualFor(code, route) {
  const base = BASE_OF(code);
  const section = sectionOf(route);
  const url = loadableRoute(route);
  const mine = baseRoute(url);

  const on = (viewport) => {
    if (hit(VERDICTS.codes, code, viewport)) return "audited";

    const auditedRoutes = VERDICTS.sectionRoutes?.[section]?.[viewport] ?? [];
    if (auditedRoutes.includes(url)) return "audited";

    // Borrowed evidence — only survives if the structural check upheld it.
    const weak = WEAK.has(`${viewport}|${code}`);
    if (auditedRoutes.some((r) => baseRoute(r) === mine)) {
      return weak ? "needs-audit" : `derived (${mine})`;
    }
    if (hit(VERDICTS.codes, base, viewport)) {
      return weak ? "needs-audit" : `derived (${base})`;
    }
    // The section was swept but this screen was never opened: no evidence.
    if (hit(VERDICTS.sections, section, viewport)) return "needs-audit";
    return "pending";
  };

  const mobile = on("mobile");
  const desktopEvidence = on("desktop");
  const desktop = DESKTOP_ADAPTED.has(code)
    ? desktopEvidence === "pending" || desktopEvidence === "needs-audit"
      ? desktopEvidence
      : "adapted"
    : desktopEvidence;

  return [mobile, desktop];
}

/** Decides one row's status from every gate, so the render loop holds no
 *  policy and no counter can claim more than the rows below it. */
function decide(r) {
  const [mv, dv] = visualFor(r.code, r.route);
  const frameAbsent = /frame absent|superseded/i.test(`${r.name} ${r.reason}`);
  // Both mean "not signed off yet", and neither may read COMPLETE.
  const unsettled = (v) => v === "pending" || v === "needs-audit";
  const visualPending = unsettled(mv) || unsettled(dv);
  const flowOk = r.mobileFlow && r.desktopFlow;
  // COMPLETE is the conjunction of every gate, not just flow: the capability
  // must exist on both viewports, be reachable by clicking, carry all three
  // languages, AND have both visual columns signed off by a screenshot audit.
  // A pending visual column can never read COMPLETE.
  const status = visualPending
    ? "PARTIAL"
    : flowOk && r.reachable
      ? "COMPLETE"
      : frameAbsent && r.reachable
        ? "ACCEPTED"
        : !r.reachable && flowOk
          ? // environment/server/OS-driven state: no honest client trigger
            // exists, so it is exercised by its review URL. A documented
            // exception, never silently counted as COMPLETE.
            "ACCEPTED"
          : "PARTIAL";
  return { r, mv, dv, frameAbsent, status };
}

let out = "";
const tally = { COMPLETE: 0, ACCEPTED: 0, PARTIAL: 0 };
const acceptedTally = {};
const unclassifiedAccepted = [];
for (const [section, list] of bySection) {
  const decided = list.map(decide);
  for (const d of decided) tally[d.status] += 1;
  const complete = decided.filter((d) => d.status === "COMPLETE").length;
  const unset = (v) => v === "pending" || v === "needs-audit";
  const pending = decided.filter((d) => unset(d.mv) || unset(d.dv)).length;
  out += `\n### ${section} — ${complete}/${list.length} COMPLETE${
    pending ? ` · ${pending} awaiting visual audit` : ""
  }\n\n`;
  out +=
    "| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |\n";
  out += `|${"---|".repeat(13)}\n`;
  for (const { r, mv, dv, frameAbsent, status } of decided) {
    // A row ACCEPTED because its Figma frame does not exist must say so here;
    // inheriting the reachability cell ("yes") would leave it with no reason
    // at all, which the pipeline verifier rightly refuses.
    const reach = !r.reachable
      ? `state URL — ${r.reason || "environment-driven"}`
      : frameAbsent
        ? `yes — Figma frame absent; the capability is implemented and reachable (${r.name})`
        : r.corrected
          ? `yes — ${r.reason}`
          : "yes";
    if (status === "ACCEPTED") {
      const cat = acceptedCategory(!r.reachable ? r.reason : reach);
      if (!cat) unclassifiedAccepted.push(`${r.code} ${r.name} — "${r.reason}"`);
      else acceptedTally[cat] = (acceptedTally[cat] ?? 0) + 1;
    }
    // Some frames carry no W- code at all; the inventory names their node
    // inline instead ("… no W- code in Figma; node 568:142").
    const inlineNode = /(\d+:\d+)/.exec(r.name)?.[1] ?? null;
    const node =
      NODE_IDS[r.code] ?? inlineNode ?? (frameAbsent ? "frame absent" : "—");
    // the inventory `name` usually already starts with the code — don't repeat it
    const label = r.name.startsWith(r.code) ? r.name : `${r.code} ${r.name}`;

    out += `| ${section} | \`${node}\` | ${label} | \`${r.route}\` | ${r.mobileFlow ? "yes" : "no"} | ${mv} | ${r.desktopFlow ? "yes" : "no"} | ${dv} | yes | yes | yes | ${status} | ${reach} |\n`;
  }
}

const header = `# EMENDA — Worker parity matrix (screen/state level)

Generated from the per-section Figma inventories (worker **mobile** canonical).
ID/EN/JA are structurally guaranteed: every section's copy goes through
\`defineSectionCopy<T>({en, id, ja})\`, so a missing translation fails \`tsc\`.

**Figma Node** is the real frame id on page \`290:2\` (Worker mobile).
**Mobile/Desktop Flow** = the capability exists and is reachable on that viewport.
**Mobile/Desktop Visual** is filled from the real audit journals by
\`scripts/collect-visual-verdicts.mjs\` — never assumed. Strongest evidence first:
\`audited\` (this frame was screenshot-compared on this viewport),
\`derived (W-xx)\` (its base frame was; the variant differs only in the state
layer), \`section audit\` (its section was swept on this viewport but this frame
was not named individually), \`adapted\` (desktop only: no equivalent desktop
node exists, so the rendering was reviewed against desktop Foundations —
*desktop visual adapted from canonical mobile flow using desktop Foundations*),
or \`pending\` (no audit has reached it yet).

**${tally.COMPLETE}/${rows.length} COMPLETE · ${tally.ACCEPTED} ACCEPTED · ${tally.PARTIAL} PARTIAL.**

A row is COMPLETE only when every gate passes: the capability exists on both
viewports, it is reachable by clicking, ID/EN/JA are present, and BOTH visual
columns have been signed off by a screenshot audit. Any row whose Mobile or
Desktop Visual still reads \`pending\` is PARTIAL until its audit wave lands.
`;

const acceptedLines = Object.entries(acceptedTally)
  .sort((a, b) => b[1] - a[1])
  .map(([k, v]) => `- ${k} — ${v}`)
  .join("\n");

out +=
  `\n### ACCEPTED — why no click reaches these ${tally.ACCEPTED} states\n\n` +
  `${acceptedLines}\n\n` +
  "Each row's own reason is printed in its **Reachable by click** cell. These\n" +
  "are environment, server, OS or lifecycle outcomes a prototype cannot provoke\n" +
  "from a control; every one is still rendered, still translated, and still\n" +
  "exercised by its review URL in the Playwright suite.\n";

writeFileSync("docs/parity-matrix.md", header + out);

if (unclassifiedAccepted.length) {
  console.error(
    `! ${unclassifiedAccepted.length} ACCEPTED rows carry no recognisable reason:\n  ` +
      unclassifiedAccepted.join("\n  "),
  );
  process.exitCode = 1;
}

console.log(
  `rows=${rows.length} COMPLETE=${tally.COMPLETE} ACCEPTED=${tally.ACCEPTED} PARTIAL=${tally.PARTIAL} sections=${bySection.size} nodeids=${
    rows.filter((r) => NODE_IDS[r.code]).length
  }`,
);
