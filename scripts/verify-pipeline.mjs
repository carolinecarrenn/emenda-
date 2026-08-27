// Proves the parity pipeline actually behaves as documented, instead of
// trusting that each generator printed "ok".
//
// Two halves:
//   1. BEHAVIOUR — exercise the evidence rules directly. A script edit that
//      silently fails to apply leaves the old logic running and still exits 0;
//      only running the rules catches it.
//   2. INVARIANTS — re-derive the matrix's own claims from the matrix text and
//      the verdict file, and fail if the document says anything the evidence
//      does not support.
//
// Exits non-zero on the first violation class found. Nothing here reads a log.
//
// usage: node scripts/verify-pipeline.mjs <scratchpad>
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import {
  hasNodeId,
  viewportsOf,
  codeOf,
  sectionOf,
  loadableRoute,
  SETTLED_VISUAL,
  acceptedCategory,
  placeholderLangs,
} from "./lib/verdict-rules.mjs";

const scratch = process.argv[2];
const failures = [];
const notes = [];

const check = (name, cond, detail = "") => {
  if (!cond) failures.push(`${name}${detail ? ` — ${detail}` : ""}`);
};

/* ── 1. Behaviour of the evidence rules ─────────────────────────────────── */

// A node id is mandatory evidence.
check("hasNodeId accepts a real id", hasNodeId("WD-32 · 1014:2"));
check("hasNodeId accepts a parenthesised id", hasNodeId("1147:3 (LP-02)"));
check("hasNodeId rejects a bare code", !hasNodeId("WD-32"));
check("hasNodeId rejects empty", !hasNodeId(""));

// Inference credits exactly one viewport, never both.
const desktopFamilies = ["WD-32 · 1014:2", "MD-03 1213:217", "1147:3 (LP-02)", "1182:5692 (AD-01)"];
for (const node of desktopFamilies) {
  const vp = viewportsOf("/x", node);
  check(`${node} credits desktop only`, vp.desktop && !vp.mobile, JSON.stringify(vp));
}
for (const node of ["W-41 · 852:3", "EM-04 · 761:142"]) {
  const vp = viewportsOf("/x", node);
  check(`${node} credits mobile only`, vp.mobile && !vp.desktop, JSON.stringify(vp));
}
check(
  "an unrecognisable frame credits nothing",
  (() => {
    const vp = viewportsOf("/x", "1234:5");
    return !vp.mobile && !vp.desktop;
  })(),
);

// An explicit marker overrides the family, in both directions.
check(
  "explicit mobile marker beats a desktop frame family",
  (() => {
    const vp = viewportsOf("/worker/x (mobile 390)", "WD-32 · 1014:2");
    return vp.mobile && !vp.desktop;
  })(),
);
check(
  "a dual marker credits both",
  (() => {
    const vp = viewportsOf("/manager/x (390 + 1440)", "EM-14 · 761:2552");
    return vp.mobile && vp.desktop;
  })(),
);

// Code extraction normalises the desktop twin onto the canonical mobile code.
check("WD- normalises to W-", codeOf("WD-54I · 1182:4787") === "W-54I");
check("EM- is kept", codeOf("EM-16A 761:2960") === "EM-16A");
check("code is found after the id", codeOf("1147:3 (LP-02)") === "LP-02");
// Hyphenated families exist and must not be dropped as "no screen code".
check("MD-AUTH-01 is a code", codeOf("MD-AUTH-01 · 1193:3") === "MD-AUTH-01");
check("EM-STATE-01 is a code", codeOf("EM-STATE-01 761:3013") === "EM-STATE-01");
check("W-61M1 still parses", codeOf("W-61M1 · 1187:2077") === "W-61M1");

check("sectionOf groups worker routes", sectionOf("/worker/coin?state=empty") === "/worker/coin");
check("sectionOf groups manager routes", sectionOf("/manager/workers/x") === "/manager/workers");
check("sectionOf handles annotated routes", sectionOf("/auth/login (state=loading)") === "/auth");

check(
  "loadableRoute turns a parenthesised state into a query",
  loadableRoute("`/auth/login (state=loading)`") === "/auth/login?state=loading",
);
check(
  "loadableRoute strips a comma-separated list to its first route",
  loadableRoute('`/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`') ===
    "/manager/auth",
  loadableRoute('`/manager/auth`, `/manager/auth/forgot`'),
);
check(
  "loadableRoute keeps the first of a pair",
  loadableRoute("`/auth/otp` · `/auth/otp?flow=recovery`") === "/auth/otp",
);

// Only settled verdicts may support a final status.
for (const v of ["audited", "derived (W-04)", "derived (/worker/coin)", "adapted"]) {
  check(`"${v}" counts as settled`, SETTLED_VISUAL.test(v));
}
for (const v of ["pending", "needs-audit", "section audit", ""]) {
  check(`"${v}" does NOT count as settled`, !SETTLED_VISUAL.test(v));
}

check("an ACCEPTED reason is categorised", acceptedCategory("network offline, ?state= only") !== null);
check("an empty ACCEPTED reason is refused", acceptedCategory("") === null);

/* ── 1b. The scripts themselves are intact ─────────────────────────────── */

// A shell heredoc can turn `\b` in a regex into a literal backspace (0x08),
// leaving a script that parses, runs, exits 0 and silently never matches. That
// happened once here. Any stray control character in a generator is a bug.
for (const file of readdirSync("scripts", { recursive: true })) {
  const path = `scripts/${String(file).replace(/\\/g, "/")}`;
  if (!path.endsWith(".mjs") || !statSync(path).isFile()) continue;
  const src = readFileSync(path, "utf8");
  const stray = [...src].filter((ch) => ch.charCodeAt(0) < 32 && !"\n\r\t".includes(ch));
  check(
    `${path} has no stray control characters`,
    stray.length === 0,
    stray.length ? `${stray.length}× ${[...new Set(stray.map((c) => `0x${c.charCodeAt(0).toString(16)}`))].join(", ")}` : "",
  );
}

// A generator that keeps a PRIVATE copy of a shared rule is worse than one
// with no rule at all: this file tests the shared module while the generator
// runs on its own copy, so the tests pass and the output is still wrong. That
// happened once here — the ACCEPTED taxonomy was duplicated and only the
// shared copy got the new category.
const SHARED_RULES = [
  "viewportsOf",
  "codeOf",
  "sectionOf",
  "loadableRoute",
  "acceptedCategory",
  "ACCEPTED_CATEGORIES",
  "placeholderLangs",
];
for (const file of readdirSync("scripts")) {
  const path = `scripts/${file}`;
  if (!path.endsWith(".mjs") || !statSync(path).isFile()) continue;
  const src = readFileSync(path, "utf8");
  const redefined = SHARED_RULES.filter((name) =>
    new RegExp(`^(?:function ${name}\\(|const ${name}\\s*=)`, "m").test(src),
  );
  check(
    `${path} does not redefine a shared rule`,
    redefined.length === 0,
    redefined.join(", "),
  );
}

/* ── 1c. No scaffold may reach a final status ──────────────────────────── */

// The Company Admin areas were scaffolded so their routes would resolve while
// the real screens were built. A scaffold renders, type-checks and passes a
// route test — so nothing but an explicit check stops one being counted as
// finished work.

/** Every source file under a directory, recursively. */
function sourceFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = `${dir}/${name}`;
    if (statSync(path).isDirectory()) sourceFiles(path, out);
    else if (/\.(ts|tsx)$/.test(path)) out.push(path);
  }
  return out;
}

const srcFiles = existsSync("src") ? sourceFiles("src") : [];

const scaffolded = srcFiles.filter((f) => {
  const s = readFileSync(f, "utf8");
  return /SCAFFOLD|NOT YET IMPLEMENTED|TODO: implement/.test(s);
});
check(
  "no source file still carries a scaffold marker",
  scaffolded.length === 0,
  scaffolded.map((f) => f.replace("src/pages/", "")).join(", "),
);

// A scaffold's ID/JA were copied from EN so the file would type-check. Real
// translations differ; identical blocks mean nobody translated it.
//
// The detector is proved against synthetic input first. A checker that
// silently matches nothing would pass this whole section in silence.
const PLACEHOLDER_SAMPLE = `
export const X_COPY = defineSectionCopy({
  en: { title: "Employee Management", subtitle: "Directory of every employee" },
  id: { title: "Employee Management", subtitle: "Directory of every employee" },
  ja: { title: "従業員管理", subtitle: "全従業員のディレクトリ" },
});`;
const TRANSLATED_SAMPLE = `
export const X_COPY = defineSectionCopy({
  en: { title: "Employee Management", subtitle: "Directory of every employee" },
  id: { title: "Manajemen Karyawan", subtitle: "Direktori seluruh karyawan" },
  ja: { title: "従業員管理", subtitle: "全従業員のディレクトリ" },
});`;
check(
  "the placeholder detector catches an untranslated block",
  JSON.stringify(placeholderLangs(PLACEHOLDER_SAMPLE)) === JSON.stringify(["id"]),
  JSON.stringify(placeholderLangs(PLACEHOLDER_SAMPLE)),
);
check(
  "the placeholder detector passes a real translation",
  placeholderLangs(TRANSLATED_SAMPLE).length === 0,
  JSON.stringify(placeholderLangs(TRANSLATED_SAMPLE)),
);

const placeholderCopy = [];
for (const file of srcFiles.filter((f) => f.endsWith(".copy.ts"))) {
  for (const lang of placeholderLangs(readFileSync(file, "utf8"))) {
    placeholderCopy.push(`${file} (${lang} identical to en)`);
  }
}
check(
  "no copy file ships a placeholder translation",
  placeholderCopy.length === 0,
  placeholderCopy.slice(0, 6).join("; "),
);

// Every Admin route the router serves must be covered by a matrix row whose
// visual columns are settled — a built route with no verdict is a scaffold
// that happens to render.
if (existsSync("src/app/router.tsx") && existsSync("docs/parity-matrix.md")) {
  const routerSrc = readFileSync("src/app/router.tsx", "utf8");
  const adminRoutes = [...routerSrc.matchAll(/path:\s*"(\/admin[^"]*)"/g)].map((m) => m[1]);
  const matrixText = readFileSync("docs/parity-matrix.md", "utf8");
  const settledRoutes = new Set();
  for (const line of matrixText.split("\n")) {
    if (!line.startsWith("|") || line.includes("---|")) continue;
    const c = line.trim().replace(/^\||\|$/g, "").split("|").map((x) => x.trim());
    if (c[0] === "Section" || c.length < 12) continue;
    if (!SETTLED_VISUAL.test(c[5]) || !SETTLED_VISUAL.test(c[7])) continue;
    for (const m of line.matchAll(/\/admin[A-Za-z0-9\-/]*/g)) settledRoutes.add(m[0]);
  }
  const unverified = adminRoutes.filter((r) => !settledRoutes.has(r));
  check(
    "every Admin route has a settled visual verdict on both viewports",
    unverified.length === 0,
    unverified.join(", "),
  );
}

/* ── 2. Invariants of the generated documents ───────────────────────────── */

const MATRIX = "docs/parity-matrix.md";
check(`${MATRIX} exists`, existsSync(MATRIX));

if (existsSync(MATRIX)) {
  const text = readFileSync(MATRIX, "utf8");
  const verdicts = existsSync(`${scratch}/visual-verdicts.json`)
    ? JSON.parse(readFileSync(`${scratch}/visual-verdicts.json`, "utf8"))
    : { codes: {}, sections: {}, sectionRoutes: {} };

  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("|") || line.includes("---|")) continue;
    const c = line.trim().replace(/^\||\|$/g, "").split("|").map((x) => x.trim());
    if (c[0] === "Section" || c.length < 12) continue;
    rows.push({
      section: c[0],
      node: c[1].replace(/`/g, ""),
      screen: c[2],
      route: c[3],
      mobileFlow: c[4],
      mv: c[5],
      desktopFlow: c[6],
      dv: c[7],
      status: c[11],
      reach: c[12] ?? "",
      code:
        /^((?:W|EM|MD|LP|AD)-[A-Z]*\d+[A-Z0-9]*)/.exec(c[2])?.[1] ?? null,
    });
  }
  check("the matrix has rows", rows.length > 0, `${rows.length}`);
  notes.push(`rows parsed: ${rows.length}`);

  // Every COMPLETE row must satisfy every gate — this is the claim the whole
  // document rests on, so it is re-derived rather than trusted.
  const badComplete = rows.filter(
    (r) =>
      r.status === "COMPLETE" &&
      !(
        r.mobileFlow === "yes" &&
        r.desktopFlow === "yes" &&
        SETTLED_VISUAL.test(r.mv) &&
        SETTLED_VISUAL.test(r.dv) &&
        (r.reach === "" || r.reach.startsWith("yes"))
      ),
  );
  check(
    "every COMPLETE row passes every gate",
    badComplete.length === 0,
    badComplete
      .slice(0, 5)
      .map((r) => `${r.code} mv=${r.mv} dv=${r.dv} reach=${r.reach.slice(0, 30)}`)
      .join("; "),
  );

  // No row may read COMPLETE while a visual column is unsettled.
  const completeUnsettled = rows.filter(
    (r) =>
      r.status === "COMPLETE" &&
      (["pending", "needs-audit", "section audit"].includes(r.mv) ||
        ["pending", "needs-audit", "section audit"].includes(r.dv)),
  );
  check(
    "no COMPLETE row carries an unsettled visual column",
    completeUnsettled.length === 0,
    completeUnsettled.slice(0, 5).map((r) => r.code).join(", "),
  );

  // Every `audited` cell must trace back to real evidence for that viewport.
  const unbacked = [];
  for (const r of rows) {
    if (!r.code) continue;
    for (const [viewport, v] of [
      ["mobile", r.mv],
      ["desktop", r.dv],
    ]) {
      if (v !== "audited") continue;
      const byCode = verdicts.codes?.[r.code]?.[viewport];
      const url = loadableRoute(r.route);
      const byRoute = (verdicts.sectionRoutes?.[sectionOf(url)]?.[viewport] ?? []).includes(url);
      if (!byCode && !byRoute) unbacked.push(`${r.code}/${viewport}`);
    }
  }
  check(
    "every `audited` cell is backed by a collected verdict",
    unbacked.length === 0,
    `${unbacked.length}: ${unbacked.slice(0, 8).join(", ")}`,
  );

  // Every ACCEPTED row must carry a reason that classifies.
  const unreasoned = rows.filter(
    (r) => r.status === "ACCEPTED" && acceptedCategory(r.reach) === null,
  );
  check(
    "every ACCEPTED row carries a classifiable reason",
    unreasoned.length === 0,
    unreasoned.slice(0, 5).map((r) => `${r.code}: "${r.reach.slice(0, 40)}"`).join("; "),
  );

  // The headline count must equal what the rows actually say.
  const claimed = /\*\*(\d+)\/(\d+) COMPLETE/.exec(text);
  if (claimed) {
    const workerRows = rows.filter((r) => !r.section.startsWith("Manager") && !r.section.startsWith("Landing") && !r.section.startsWith("Company"));
    const actual = workerRows.filter((r) => r.status === "COMPLETE").length;
    check(
      "the headline COMPLETE count matches the rows",
      Number(claimed[1]) === actual,
      `header says ${claimed[1]}, rows say ${actual}`,
    );
  } else {
    failures.push("the matrix has no headline COMPLETE count to check");
  }

  // Nothing may quietly lose its Figma node.
  const nodeless = rows.filter((r) => r.node === "—");
  check(
    "every row names a Figma node or says the frame is absent",
    nodeless.length === 0,
    `${nodeless.length}: ${nodeless.slice(0, 6).map((r) => r.code).join(", ")}`,
  );

  const byStatus = rows.reduce((m, r) => ((m[r.status] = (m[r.status] ?? 0) + 1), m), {});
  notes.push(`status tally: ${JSON.stringify(byStatus)}`);
  notes.push(
    `visual settled: mobile ${rows.filter((r) => SETTLED_VISUAL.test(r.mv)).length}/${rows.length}, desktop ${rows.filter((r) => SETTLED_VISUAL.test(r.dv)).length}/${rows.length}`,
  );
}

/* ── Report ─────────────────────────────────────────────────────────────── */

for (const n of notes) console.log(`  ${n}`);
if (failures.length) {
  console.error(`\n✗ pipeline verification FAILED — ${failures.length} violation(s):`);
  for (const f of failures) console.error(`   - ${f}`);
  process.exit(1);
}
console.log("\n✓ pipeline verification passed");
