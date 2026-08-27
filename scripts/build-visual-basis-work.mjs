// Builds the worklist for verify-visual-basis.mjs: every (row, viewport) whose
// visual verdict rests on ANOTHER screen's audit — `derived (W-xx)` or
// `section audit` — paired with the audited reference it is leaning on.
//
// Rows verdicted `audited` need nothing: they were compared directly.
// Rows verdicted `adapted` have no desktop Figma node to compare against, so
// they are checked against their own canonical mobile route instead — the
// thing the desktop rendering is supposed to be an adaptation of.
//
// usage: node scripts/build-visual-basis-work.mjs <scratchpad>
import { readFileSync, writeFileSync } from "node:fs";

const scratch = process.argv[2];
const verdicts = JSON.parse(readFileSync(`${scratch}/visual-verdicts.json`, "utf8"));
const matrix = readFileSync("docs/parity-matrix.md", "utf8");

/** The matrix prints routes as `/worker/x?state=y` or `/worker/x (state=y)` or
 *  a `·`-separated pair. Reduce that to one loadable URL. */
function loadable(cell) {
  let route = cell.replace(/`/g, "").split("·")[0].trim();
  const paren = /^(\S+)\s*\((?:state=)?([a-z0-9-]+)\)/i.exec(route);
  if (paren) {
    route = paren[1].includes("?")
      ? `${paren[1]}&state=${paren[2]}`
      : `${paren[1]}?state=${paren[2]}`;
  }
  route = route.split(/\s/)[0];
  return route.startsWith("/") ? route : null;
}

const work = [];
const skipped = [];

for (const line of matrix.split("\n")) {
  if (!line.startsWith("|") || line.includes("---|")) continue;
  const c = line.trim().replace(/^\||\|$/g, "").split("|").map((x) => x.trim());
  if (c[0] === "Section" || c.length < 12) continue;

  const [, , screen, routeCell, , mv, , dv] = c;
  const code = /^((?:W|EM|MD|LP|AD)-[A-Z]*\d+[A-Z0-9]*)/.exec(screen)?.[1] ?? screen.slice(0, 14);
  const route = loadable(routeCell);
  if (!route) {
    skipped.push(`${code} — no loadable route in "${routeCell}"`);
    continue;
  }

  for (const [viewport, verdict] of [
    ["mobile", mv],
    ["desktop", dv],
  ]) {
    if (verdict === "audited") continue;

    let reference = null;
    if (verdict.startsWith("derived")) {
      // The matrix now names either the audited URL this screen is a ?state=
      // of, or the audited base frame's code.
      const from = /derived \(([^)]+)\)/.exec(verdict)?.[1];
      reference = from?.startsWith("/") ? from : from ? verdicts.codeRoutes?.[from] : null;
    } else if (verdict === "needs-audit" || verdict === "pending") {
      // No borrowed claim to test — these go straight to the targeted audit.
      continue;
    } else if (verdict === "adapted") {
      // No desktop node exists; the claim is that desktop adapts the canonical
      // mobile flow, so the mobile rendering of this very screen is the thing
      // it must still be recognisably the same composition as.
      reference = route;
    }

    if (!reference) {
      skipped.push(`${code}/${viewport} — verdict "${verdict}" has no reference route`);
      continue;
    }
    if (reference === route && verdict !== "adapted") continue;

    work.push({ code, screen, route, reference, viewport, verdict });
  }
}

writeFileSync(`${scratch}/visual-basis-work.json`, `${JSON.stringify(work, null, 1)}\n`);
console.log(`work=${work.length} skipped=${skipped.length}`);
for (const s of skipped.slice(0, 20)) console.log(`  skip ${s}`);
if (skipped.length > 20) console.log(`  … and ${skipped.length - 20} more`);
