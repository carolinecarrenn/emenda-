// Two-way orphan scan between the Figma product frames and the FE.
//
//   Figma → FE : a product frame with no row in the matrix is a screen the
//                design specifies and the app does not have.
//   FE → Figma : a route the router serves that no matrix row covers is a
//                screen the app invented, or one the inventory missed.
//
// Both directions matter. The first is missing work; the second is unbacked
// work — a page nobody can point at a frame for.
//
// Non-screen frames are excluded by name, not by guesswork: the Figma pages
// carry component/spec/label frames alongside the real screens.
//
// usage: node scripts/orphan-scan.mjs <scratchpad>
import { readFileSync, existsSync, appendFileSync } from "node:fs";
import { loadableRoute } from "./lib/verdict-rules.mjs";

const scratch = process.argv[2];
const nodeIds = existsSync(`${scratch}/nodeids.json`)
  ? JSON.parse(readFileSync(`${scratch}/nodeids.json`, "utf8"))
  : {};

/* ── What the matrix covers ─────────────────────────────────────────────── */

const rowCodes = new Set();
const rowRoutes = new Set();
for (const line of readFileSync("docs/parity-matrix.md", "utf8").split("\n")) {
  if (!line.startsWith("|") || line.includes("---|")) continue;
  const c = line.trim().replace(/^\||\|$/g, "").split("|").map((x) => x.trim());
  if (c[0] === "Section" || c.length < 12) continue;
  // Manager and landing rows label their state in prose rather than leading
  // with the code, so scan the WHOLE row for codes, not just the screen cell.
  // Missing one would invent an orphan that does not exist.
  for (const m of line.matchAll(/\b((?:WD|MD|EM|LP|AD|W)-[A-Z]*\d+[A-Z0-9]*)\b/g)) {
    rowCodes.add(m[1].replace(/^WD-/, "W-"));
  }
  // Likewise a row can name several URLs; keep every path the row mentions.
  for (const m of line.matchAll(/\/[A-Za-z0-9\-/:]+/g)) {
    rowRoutes.add(m[0].replace(/`/g, "").split("?")[0].replace(/\/$/, ""));
  }
  rowRoutes.add(loadableRoute(c[3]).split("?")[0].replace(/\/$/, ""));
}

/* ── Direction 1: Figma frames with no matrix row ───────────────────────── */

// WD-xx is the desktop twin of W-xx and is not a separate screen.
const figmaCodes = new Set(
  Object.keys(nodeIds).map((c) => c.replace(/^WD-/, "W-")),
);
const figmaOrphans = [...figmaCodes].filter((c) => !rowCodes.has(c)).sort();

/* ── Direction 2: routes the router serves with no matrix row ───────────── */

const router = readFileSync("src/app/router.tsx", "utf8");
// Collect literal `path:` values, then rebuild the absolute paths by walking
// the nesting the file expresses through its `children` arrays.
const routePaths = new Set();
for (const m of router.matchAll(/path:\s*"([^"]+)"/g)) routePaths.add(m[1]);

// The router nests, so a child path is relative. Reconstruct absolute paths by
// pairing each child with the nearest preceding absolute parent.
const absolute = new Set();
let parent = "";
for (const line of router.split("\n")) {
  const m = /path:\s*"([^"]+)"/.exec(line);
  if (!m) continue;
  const p = m[1];
  if (p.startsWith("/")) {
    parent = p.replace(/\/$/, "");
    absolute.add(parent || "/");
  } else if (p === "*") {
    continue;
  } else {
    absolute.add(`${parent}/${p}`.replace(/\/+/g, "/"));
  }
}

// A router path with a dynamic segment is covered when the matrix names ANY
// concrete instance of it — the matrix documents `/worker/logs/work/wn-jlpt`
// where the router declares `/worker/logs/work/:id`. Comparing the two as
// literal strings would invent an orphan for every detail screen in the app.
const shape = (r) => r.replace(/:[A-Za-z0-9]+/g, ":id").replace(/\/$/, "");
const rowShapes = new Set([...rowRoutes].map(shape));

const covers = (routerPath) => {
  const s = shape(routerPath);
  if (rowShapes.has(s)) return true;
  if (!s.includes(":id")) return false;
  // `/a/:id/edit` → matches `/a/<anything-but-a-slash>/edit`
  const re = new RegExp(
    `^${s.split(":id").map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("[^/]+")}$`,
  );
  return [...rowRoutes].some((r) => re.test(r));
};

const routeOrphans = [...absolute]
  .map(shape)
  .filter((r) => r && r !== "/" && !covers(r))
  .sort();

/* ── Report ─────────────────────────────────────────────────────────────── */

console.log(`Figma product frames indexed : ${figmaCodes.size}`);
console.log(`matrix rows with a code      : ${rowCodes.size}`);
console.log(`router paths (absolute)      : ${absolute.size}`);
console.log(`matrix route shapes          : ${rowShapes.size}`);

console.log(`\n① Figma frame with NO matrix row — ${figmaOrphans.length}`);
for (const c of figmaOrphans) console.log(`   ${c}  (node ${nodeIds[c] ?? nodeIds[`WD-${c.slice(2)}`] ?? "?"})`);

console.log(`\n② Router path with NO matrix row — ${routeOrphans.length}`);
for (const r of routeOrphans) console.log(`   ${r}`);

const total = figmaOrphans.length + routeOrphans.length;
console.log(`\ntotal orphans: ${total}`);

/* ── Write the findings into the matrix, so nothing stays invisible ─────── */

if (process.argv.includes("--append")) {
  const nodeOf = (c) => nodeIds[c] ?? nodeIds[`WD-${c.slice(2)}`] ?? "?";
  const group = (prefix) => figmaOrphans.filter((c) => c.startsWith(prefix));
  const ad = group("AD-");
  const em = group("EM-");
  const md = group("MD-");
  const lp = group("LP-");

  let out = "\n---\n\n# Orphan scan — Figma ↔ FE, both directions\n\n";
  out +=
    "A frame with no row is a screen the design specifies and the app does not\n" +
    "have. A route with no row is a screen the app serves that no frame backs.\n" +
    "Both are reported; neither is hidden by omission.\n";

  out += `\n## ① Figma product frames with no FE row — ${figmaOrphans.length} · NOT IMPLEMENTED\n`;

  if (ad.length) {
    out += `\n### Company Admin — ${ad.length} frames, one \`/admin\` route in the FE\n\n`;
    out +=
      "The whole Company Admin role is drawn in Figma (AD-00 access → AD-10\n" +
      "empty/access states, plus flow and state companions) and the FE implements\n" +
      "only AD-01, the dashboard. This is missing product, not a visual deviation.\n\n";
    out += "| Figma Node | Frame | Status |\n|---|---|---|\n";
    for (const c of ad) out += `| \`${nodeOf(c)}\` | ${c} | NOT IMPLEMENTED |\n`;
  }

  const rest = [...em, ...md, ...lp];
  if (rest.length) {
    out += `\n### Manager and landing frames the inventory missed — ${rest.length}\n\n`;
    out +=
      "These have FE routes or shipped pages but no matrix row, so they were\n" +
      "never audited. The inventory, not the app, is what is incomplete here.\n\n";
    out += "| Figma Node | Frame | Status |\n|---|---|---|\n";
    for (const c of rest) out += `| \`${nodeOf(c)}\` | ${c} | NOT INVENTORIED |\n`;
  }

  out += `\n## ② FE routes with no Figma row — ${routeOrphans.length} · NEEDS A DECISION\n\n`;
  out +=
    "Each is either a frame the inventory missed, or a screen the app invented.\n" +
    "Until one of those is established the route is unbacked.\n\n";
  out += "| FE Route | Status |\n|---|---|\n";
  for (const r of routeOrphans) out += `| \`${r}\` | UNBACKED — needs a Figma frame or a documented reason |\n`;

  appendFileSync("docs/parity-matrix.md", out);
  console.log(`\nappended the orphan report to docs/parity-matrix.md`);
}

if (total > 0) process.exitCode = 2; // reportable, not fatal — each needs a decision
