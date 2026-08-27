// Turns the weak rows from verify-visual-basis.mjs into the `args` payload for
// the targeted-visual-audit workflow: one group per section, each carrying the
// exact screens that must be compared against their own Figma frame.
//
// usage: node scripts/build-targeted-audit-args.mjs <scratchpad>
import { readFileSync, writeFileSync } from "node:fs";
// One definition of the section rule, shared with every other script.
import { sectionOf, loadableRoute } from "./lib/verdict-rules.mjs";

const scratch = process.argv[2];
const nodeIds = JSON.parse(readFileSync(`${scratch}/nodeids.json`, "utf8"));
const matrix = readFileSync("docs/parity-matrix.md", "utf8");

/** Largest list one agent should own; bigger sections are split across two or
 *  more agents so no single agent carries an unreviewable pile. */
const MAX_PER_GROUP = 36;


// A few inventory routes carry a placeholder instead of a real value. Give
// the agent a URL that actually produces the state the frame is about.
const ROUTE_REPAIRS = {
  "/worker/knowledge/search?q=<unmatched>":
    "/worker/knowledge/search?q=zzzzzz", // W-42x: the no-results state
};

/** One loadable URL per row, with the placeholder repairs applied. Uses the
 *  shared rule so a fix there reaches every script at once. */
function loadable(cell) {
  const route = ROUTE_REPAIRS[loadableRoute(cell)] ?? loadableRoute(cell);
  return route.startsWith("/") ? route : null;
}

// Read the unsettled rows straight out of the matrix, so the worklist can
// never drift from what the matrix is actually reporting.
const weak = [];
for (const line of matrix.split("\n")) {
  if (!line.startsWith("|") || line.includes("---|")) continue;
  const c = line.trim().replace(/^\||\|$/g, "").split("|").map((x) => x.trim());
  if (c[0] === "Section" || c.length < 12) continue;
  const route = loadable(c[3]);
  if (!route) continue;
  const code =
    /^((?:W|EM|MD|LP|AD)-[A-Z]*\d+[A-Z0-9]*)/.exec(c[2])?.[1] ?? c[2].slice(0, 14);
  for (const [viewport, verdict] of [
    ["mobile", c[5]],
    ["desktop", c[7]],
  ]) {
    if (verdict !== "needs-audit" && verdict !== "pending") continue;
    weak.push({ code, screen: c[2], route, viewport, verdict });
  }
}

const bySection = new Map();
for (const w of weak) {
  const section = sectionOf(w.route);
  if (!bySection.has(section)) bySection.set(section, []);
  bySection.get(section).push({
    code: w.code,
    screen: w.screen,
    route: w.route,
    viewport: w.viewport,
    nodeId: nodeIds[w.code] ?? null,
    verdictWas: w.verdict,
  });
}

// Dev-server ports, one per concurrent agent, well clear of 4173/5173.
let port = 4310;
const groups = [];
for (const [section, screens] of [...bySection.entries()].sort(
  (a, b) => b[1].length - a[1].length,
)) {
  const sorted = screens.sort(
    (a, b) => a.viewport.localeCompare(b.viewport) || a.code.localeCompare(b.code),
  );
  const parts = Math.ceil(sorted.length / MAX_PER_GROUP);
  const size = Math.ceil(sorted.length / parts);
  for (let i = 0; i < parts; i += 1) {
    groups.push({
      section: parts > 1 ? `${section} [${i + 1}/${parts}]` : section,
      port: port++,
      screens: sorted.slice(i * size, (i + 1) * size),
    });
  }
}

writeFileSync(
  `${scratch}/targeted-audit-args.json`,
  `${JSON.stringify({ groups }, null, 1)}\n`,
);

console.log(
  `weak=${weak.length} groups=${groups.length} (ports ${groups[0]?.port}..${port - 1})`,
);
for (const g of groups) {
  const m = g.screens.filter((s) => s.viewport === "mobile").length;
  const d = g.screens.length - m;
  console.log(`  ${g.section.padEnd(28)} ${String(g.screens.length).padStart(3)} screens (${m} mobile, ${d} desktop)`);
}
