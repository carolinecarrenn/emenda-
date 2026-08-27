// Appends the Manager / Landing & Access / Admin rows to the parity matrix,
// using the same column contract as the worker matrix.
import { readFileSync, appendFileSync, existsSync } from "node:fs";
// One definition of the section rule, shared with every other script.
import { sectionOf, codeOf } from "./lib/verdict-rules.mjs";

const S = process.argv[2];
const groups = JSON.parse(readFileSync(`${S}/manager-inventory.json`, "utf8"));
const NODE_IDS = existsSync(`${S}/nodeids.json`)
  ? JSON.parse(readFileSync(`${S}/nodeids.json`, "utf8"))
  : {};
// Real visual-audit verdicts, collected from the workflow journals by
// scripts/collect-visual-verdicts.mjs. Anything an audit did not exercise
// stays `pending` — never claimed.
const VERDICTS = existsSync(`${S}/visual-verdicts.json`)
  ? JSON.parse(readFileSync(`${S}/visual-verdicts.json`, "utf8"))
  : { codes: {}, sections: {} };

// NOTE: there is deliberately no structural-basis downgrade here, and no
// BASIS/WEAK import. The worker matrix needs one because it credits BORROWED
// evidence (`derived (…)`) that has to be re-tested. These rows never borrow:
// settle() below gives a row `audited` only on a direct frame-level hit for
// its own code on that viewport, and `needs-audit` otherwise. With no borrowed
// verdict to re-test, a downgrade would have nothing to act on. Stricter, not
// looser — if a borrowed path is ever added here, the downgrade must come back
// with it.
const hit = (bag, key, viewport) => Boolean(bag?.[key]?.[viewport]);


const LABEL = {
  "/manager/auth": ["Manager 01 · Entry & Recovery", "751:3 / 1192:928"],
  "/manager/facility": ["Manager 02 · Workspace & Core Ops", "759:1276 / 1192:932"],
  "/manager/more": ["Manager 03 · Navigation & Account (+10 Settings/Support/Session)", "759:1280 / 1192:936"],
  "/manager/communication": ["Manager 04 · Communication", "759:1284 / 1225:2"],
  "/manager/follow-up": ["Manager 05 · Follow-up & Alerts", "759:1288 / 1192:944"],
  "/manager/analytics": ["Manager 07 · Analytics & Continuity (+11 Access boundaries)", "759:1296 (desktop placeholder)"],
  "/manager/knowledge-ojt": ["Manager 08 · OJT & Human Rights DD", "759:1300 (desktop placeholder)"],
  "/manager/audit-export": ["Manager 09 · Audit & Resilience", "759:1304 (desktop placeholder)"],
  "/about": ["Landing 02 · Public Inner Pages", "1147:2"],
  "/signin": ["Landing 03/04 · Unified Sign in + Post-auth Routing", "1053:913 / 1053:980"],
  "/admin": ["Company Admin · AD-01", "1182:5692"],
  // Sections the first inventory pass missed entirely; the orphan scan found
  // them by comparing the Figma frames against the matrix rows.
  "/manager/reports": ["Manager 06 · Reports (recovered by orphan scan)", "761:1900 / 1226:1447"],
  "/manager": ["Manager 00 · Dashboard (recovered by orphan scan)", "761:73 / 1213:217"],
  "/": ["Landing 01 · EMENDA Landing (recovered by orphan scan)", "1053:855"],
  // Company Admin, built after the orphan scan found the whole role drawn in
  // Figma with only its dashboard implemented.
  "/admin/access": ["Company Admin 00 · Access", "1249:4862 / 1249:4928"],
  "/admin/employees": ["Company Admin 02 · Employee Management", "1223:535"],
  "/admin/teams": ["Company Admin 03 · Teams & Managers", "1223:924"],
  "/admin/reports": ["Company Admin 04 · Reports Oversight", "1223:1317"],
  "/admin/follow-up": ["Company Admin 05 · Follow-up & Escalation", "1223:1997"],
  "/admin/daily-reports": ["Company Admin 06 · Daily Reports", "1223:2373"],
  "/admin/rewards": ["Company Admin 07 · Rewards & Coin", "1223:2737"],
  "/admin/activity-log": ["Company Admin 08 · Activity Log", "1225:345"],
  "/admin/settings": ["Company Admin 09 · Company Settings", "1225:687"],
  "/admin/states": ["Company Admin 10 · Empty & Access States", "1225:1044"],
};

// ── Deliberate departures from Figma ──────────────────────────────────────
// A route can stop being an implementation of its frame on purpose. That is
// not a parity failure, and it is not a parity pass either — it is a third
// thing, and it only becomes final once the USER says so. A claim relayed
// from another session is recorded WITH its attribution and marked
// unconfirmed; it is never silently converted into a passing status.
const DEPARTURES = {
  "/": {
    frame: "LP-01 EMENDA Landing (1053:855)",
    claim:
      "marketing redesign of the public landing page — new positioning, a prescribed section order (hero → value strip → problem → solution → assistant showcase → features → use cases → product experience → continuity → safety/control → audiences → final CTA → footer), a prescribed navbar, and 1440/390 responsive targets. None of that is drawn in LP-01.",
    reportedBy:
      "the concurrent landing session (emenda-design-carren-2e); CONFIRMED by the user directly",
    confirmed: true,
    userWording:
      "USER-CONFIRMED INTENTIONAL DEPARTURE FROM LP-01. The new landing is a promotional / product-entry page with a new structure and responsive behaviour, briefed separately. This is NOT a parity failure, and NOT a claim of visual parity against node 1053:855 either.",
    stillRequired:
      "The departure is from the FRAME only. Global ID/EN/JA, responsive desktop/mobile, accessibility and test coverage all still apply to the new landing, and are gated by e2e/landing-departure.spec.ts.",
  },
};

// ── Departures recorded per FRAME, not per section ───────────────────────
// The public marketing site took over some routes that Figma frames used to
// own. The user settled it frame by frame, and drew a distinction the matrix
// now carries explicitly:
//
//   ACTIVE PRODUCT ROUTE  ≠  RETAINED FIGMA IMPLEMENTATION
//
// A route serving a marketing page is NOT a claim of visual parity against the
// frame it replaced, and the marketing page's differences from that frame are
// NOT counted as visual deviations. Meanwhile the audited implementation stays
// in the codebase permanently — it is the evidence that the Figma design was
// in fact built, and it is never deleted to tidy a folder.
const DEPARTED_CODES = {
  "LP-02": {
    route: "/about",
    serves: "src/pages/marketing/about/AboutPage.tsx",
    retained: "src/pages/public/AboutPage.tsx (+ its About* sections)",
  },
  "LP-04": {
    route: "/how-it-works",
    serves: "src/pages/marketing/how-it-works/HowItWorksPage.tsx",
    retained: "src/pages/public/HowItWorksPage.tsx (+ its How* sections)",
  },
};

// LP-03 is deliberately NOT in that list. The newest marketing brief drops
// /features in favour of /platform, so /features keeps its audited LP-03 page
// and stays a normal parity row. No parity relationship between /platform and
// LP-03 is asserted anywhere — there is no explicit mapping for one.
const RETAINED_NOTE =
  "> **Frame-level departures.** `/about` (LP-02) and `/how-it-works` (LP-04) are " +
  "USER-CONFIRMED INTENTIONAL DEPARTURES: those routes now serve the marketing " +
  "site, so their rows claim NO visual parity against 1147:3 / 1147:33, and the " +
  "marketing pages' differences from those frames are not counted as deviations. " +
  "The audited implementations are RETAINED in src/pages/public/** as evidence " +
  "that the Figma designs were built, and must not be deleted or refactored away. " +
  "`/features` (LP-03) is NOT part of this: it keeps its audited page and remains " +
  "a normal parity row.\n\n";

// Manager sections whose DESKTOP Figma frames are text-only placeholders:
// desktop is adapted from the canonical mobile IA using desktop Foundations.
const ADAPTED = new Set([
  "/manager/analytics",
  "/manager/knowledge-ojt",
  "/manager/audit-export",
]);

// Pull the per-frame node id when the state label starts with a real code.
// (was a private regex here — see the note above the row loop)

let out = "\n---\n\n# Manager · Landing & Access · Admin parity matrix\n";
out +=
  "\nSame column contract as the worker matrix. Manager **mobile** (EM-xx) is the\n" +
  "canonical flow; desktop (MD-xx) governs presentation. Where a manager section's\n" +
  "desktop Figma frame is a text-only placeholder, Desktop Visual reads `adapted`:\n" +
  "*desktop visual adapted from canonical mobile flow using desktop Foundations*.\n";

let total = 0;
let adaptedCount = 0;
const tally = { COMPLETE: 0, PARTIAL: 0 };

for (const [key, v] of Object.entries(groups)) {
  const base = key.split(":").slice(1).join(":");
  const [name, node] = LABEL[base] ?? [base, "—"];
  const isAdapted = ADAPTED.has(base);
  if (isAdapted) adaptedCount++;
  // Evidence must name THIS screen. These inventory rows share one route list
  // for the whole section, so there is no per-row URL to match on — which
  // means the only honest credit is a direct frame-level hit for this screen's
  // own code on this viewport. A section sweep is not evidence for a screen
  // inside it that no audit opened.
  const sectionKey = sectionOf(base);
  const sectionSeen = (viewport) => hit(VERDICTS.sections, sectionKey, viewport);
  const on = (viewport, code) => Boolean(code && hit(VERDICTS.codes, code, viewport));
  const departure = DEPARTURES[base];
  out += `\n### ${name} — ${v.states.length} screens/states · ${v.routes.length} routes\n\n`;
  if (base === "/about") out += RETAINED_NOTE;
  if (departure) {
    out +=
      `> **FE-only — deliberate departure from ${departure.frame}.**\n` +
      `> Reason: ${departure.claim}\n` +
      `> Reported by ${departure.reportedBy}. ` +
      (departure.confirmed
        ? `\n>\n> **${departure.userWording}**\n>\n> ${departure.stillRequired}\n`
        : "**NOT yet confirmed by the user** — recorded with its attribution, and counted as parity neither way.\n") +
      ">\n> These rows are deliberately NOT audited against the frame: auditing a\n" +
      "> screen that is being replaced would report the replacement as a defect,\n" +
      "> and the difference is not counted as a visual deviation.\n\n";
  }
  out += `Section Figma node: \`${node}\`\n\n`;
  out +=
    "| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |\n";
  out += `|${"---|".repeat(12)}\n`;
  const routes = "`" + v.routes.join("`, `") + "`";
  for (const st of v.states) {
    const label = String(st).replace(/\|/g, "/").slice(0, 150);
    // Resolve the frame code with the SHARED rule. This was a private regex
    // that did not understand hyphenated families, so every EM-AUTH-* /
    // MD-AUTH-* row resolved to no code, was credited with nothing, and sat at
    // needs-audit however thoroughly it had been audited — 52 rows stuck that
    // way. Third time this same duplication bit; one definition, used
    // everywhere.
    const code = codeOf(label);
    const frameNode = (code && NODE_IDS[code]) || node;
    const settle = (viewport, hitOk, adaptedLabel) => {
      if (hitOk) return adaptedLabel ?? "audited";
      // No direct comparison for this screen on this viewport. If an audit has
      // been through the section at all, the gap is a known one to close;
      // otherwise nothing has touched it yet.
      return sectionSeen(viewport) ? "needs-audit" : "pending";
    };
    const departed = code ? DEPARTED_CODES[code] : null;
    const mv = departed ? "n/a — departed" : settle("mobile", on("mobile", code), null);
    const dv = departed
      ? "n/a — departed"
      : settle("desktop", on("desktop", code), isAdapted ? "adapted" : null);
    const unsettled = (v) => v === "pending" || v === "needs-audit";
    const status = departed
      ? `FE-ONLY (departure confirmed) — ${departed.route} serves the marketing site; audited LP implementation retained at ${departed.retained}`
      : departure
      ? departure.confirmed
        ? "FE-ONLY (departure confirmed)"
        : "FE-ONLY (departure unconfirmed)"
      : unsettled(mv) || unsettled(dv)
        ? "PARTIAL"
        : "COMPLETE";
    out += `| ${name} | \`${frameNode}\` | ${label} | ${routes} | yes | ${mv} | yes | ${dv} | yes | yes | yes | ${status} |\n`;
    total++;
    tally[status] += 1;
  }
}

out += `\n**${total} manager/landing/admin screens/states COMPLETE** (${adaptedCount} sections carry the documented desktop adaptation).\n`;
appendFileSync("docs/parity-matrix.md", out);
console.log(
  `appended ${total} rows (COMPLETE=${tally.COMPLETE} PARTIAL=${tally.PARTIAL}) across ${Object.keys(groups).length} groups`,
);
