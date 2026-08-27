// The rules that decide what counts as visual evidence.
//
// These live in their own module so they can be exercised directly by
// scripts/verify-pipeline.mjs. A generator that prints "ok" proves nothing —
// an edit can fail to apply and the script will still run to completion on the
// old logic. Testing the behaviour catches that; reading the log does not.

/** A verdict is only evidence if it names the Figma node put beside the
 *  render. "I checked this screen" without a node id is a claim, not a
 *  comparison. */
export function hasNodeId(figmaNode) {
  return /\d+:\d+/.test(String(figmaNode ?? ""));
}

/**
 * Which viewport a comparison actually covered.
 *
 * An explicit marker in the route wins. Failing that, the SURFACE OF THE FIGMA
 * NODE decides: comparing a render against WD-32 is by definition a desktop
 * comparison, because WD-32 is a desktop frame. That is evidence about this
 * screen on this viewport — not a similarity argument about its neighbours.
 *
 * Exactly ONE viewport is ever credited by inference. A frame drawn on a
 * desktop canvas says nothing about how the same route renders at 390px, so
 * the other viewport stays uncredited and that row keeps needing an audit.
 * Landing (LP-) and admin (AD-) frames sit on the 1440 canvas like every other
 * desktop frame, so they credit desktop only, however responsive the shipped
 * page is.
 */
export function viewportsOf(route, figmaNode) {
  const hay = `${route} ${figmaNode}`;
  const mobile = /390|mobile/i.test(hay);
  const desktop = /1440|desktop/i.test(hay);
  if (mobile || desktop) return { mobile, desktop };
  if (/\b(WD|MD|LP|AD)-/.test(figmaNode)) return { mobile: false, desktop: true };
  if (/\b(W|EM)-/.test(figmaNode)) return { mobile: true, desktop: false };
  // Nothing recognisable: credit nothing rather than guess. The row stays
  // needs-audit, which is the safe failure.
  return { mobile: false, desktop: false };
}

/** Pulls the screen code out of "WD-54I · 1182:4787" / "1147:3 (LP-02)".
 *  Worker desktop WD-xx and worker mobile W-xx are one screen on two
 *  surfaces; the matrix is keyed by the canonical mobile code. */
export function codeOf(figmaNode) {
  // Some families carry a hyphenated word segment before the number —
  // MD-AUTH-01, EM-AUTH-01, EM-STATE-01, AD-GLOBAL. Without the optional
  // `(?:[A-Z]+-)?` those codes match nothing, the entry is dropped as
  // "no screen code", and the screens it audited stay needing an audit for
  // ever. That silently discarded 56 real verdicts once.
  // Segments may be alphabetic, numeric or mixed, and there may be several:
  //   W-04A · LP-02 · W-61M1 · MD-AUTH-01 · EM-R2-01 · EM-MORE · AD-GLOBAL
  // Earlier versions demanded a digit block and silently dropped EM-MORE /
  // MD-MORE (word-only) and EM-R2-01 (digit inside a word segment), taking
  // eleven real verdicts with them.
  const m = /\b((?:WD|MD|EM|LP|AD|W)-[A-Z0-9]+(?:-[A-Z0-9]+)*)\b/.exec(
    String(figmaNode),
  );
  return m ? m[1].replace(/^WD-/, "W-") : null;
}

/**
 * An audit can legitimately have no screen code: where Figma draws no frame
 * for a state, the agent cites the SECTION node and says so. That is evidence
 * about a documented absence, not a missing citation, so it is classified
 * rather than discarded — the two look identical if nobody separates them.
 */
export function isSectionLevelEvidence(figmaNode) {
  const s = String(figmaNode ?? "");
  return (
    /\d+:\d+/.test(s) &&
    /\bsection\b/i.test(s) &&
    /\bno\b[^.]*\bframe\b/i.test(s)
  );
}

/** Section key for a route — one rule, shared by every script that needs it. */
export function sectionOf(route) {
  const path = String(route).split(/[\s?(]/)[0];
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "worker") return `/worker/${parts[1] ?? ""}`;
  if (parts[0] === "manager") return `/manager/${parts[1] ?? ""}`;
  return `/${parts[0] ?? ""}`;
}

/** The route with its query stripped — the screen a `?state=` sits on. */
export function baseRoute(route) {
  return String(route).split("?")[0];
}

/** Inventory routes read like "/worker/x (state=y)" or "/a · /b"; reduce to
 *  one loadable URL so route-level evidence can be matched exactly. */
export function loadableRoute(cell) {
  // A cell can list several routes separated by "·" OR by commas — the manager
  // groups share one route list across their rows. Take the first, and strip
  // the separator: a trailing comma silently breaks every startsWith() match
  // downstream, including the filter each audit agent uses to find its work.
  let route = String(cell)
    .replace(/`/g, "")
    .split(/[·,]/)[0]
    .trim();
  const paren = /^(\S+)\s*\((?:state=)?([a-z0-9-]+)\)/i.exec(route);
  if (paren) {
    route = paren[1].includes("?")
      ? `${paren[1]}&state=${paren[2]}`
      : `${paren[1]}?state=${paren[2]}`;
  }
  return route.split(/\s/)[0];
}

/** Visual verdicts that count as settled for a final status. Anything else —
 *  `pending`, `needs-audit` — keeps the row PARTIAL. */
export const SETTLED_VISUAL = /^(audited|derived \(.+\)|adapted)$/;

/** Every ACCEPTED row must name WHY no click can reach it. */
export const ACCEPTED_CATEGORIES = [
  [/offline|no internet|network/i, "network offline"],
  [/permission/i, "OS permission"],
  [/loading|skeleton/i, "loading state"],
  [/empty data set|no reports yet|no conversations/i, "empty data set"],
  [
    /owned by|lifecycle|push event|revocation|termination|access ended/i,
    "lifecycle owned elsewhere",
  ],
  [
    /server|submission failure|send failure|rejection|review outcome|failure|failed|already registered/i,
    "server outcome",
  ],
  [/frame absent|superseded/i, "Figma frame absent"],
  [/data variant|no Figma control produces/i, "data variant"],
  [/headless|no-employer/i, "no-employer environment"],
];

export function acceptedCategory(reason) {
  for (const [re, label] of ACCEPTED_CATEGORIES) if (re.test(reason)) return label;
  return null;
}

/** The `en: { … }` / `id: { … }` / `ja: { … }` body of a defineSectionCopy
 *  call, flattened to one line. Returns null when the block is absent. */
export function copyBlock(src, lang) {
  const start = src.indexOf(`\n  ${lang}: {`);
  if (start < 0) return null;
  let depth = 0;
  for (let i = src.indexOf("{", start); i < src.length; i += 1) {
    if (src[i] === "{") depth += 1;
    else if (src[i] === "}") {
      depth -= 1;
      if (depth === 0) {
        return src
          .slice(src.indexOf("{", start), i + 1)
          .replace(/\s+/g, " ")
          .trim();
      }
    }
  }
  return null;
}

/**
 * Languages whose copy is byte-identical to English — the signature of a
 * scaffold whose ID/JA were duplicated from EN so the file would type-check.
 * A real translation always differs. Blocks too small to be meaningful are
 * ignored so a genuinely tiny shared value cannot raise a false alarm.
 */
export function placeholderLangs(src, minLength = 40) {
  const en = copyBlock(src, "en");
  if (!en || en.length < minLength) return [];
  return ["id", "ja"].filter((lang) => copyBlock(src, lang) === en);
}
