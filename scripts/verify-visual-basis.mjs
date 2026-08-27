// Tests whether a `derived` / `section audit` visual verdict is actually
// strong enough to stand in for its own audit.
//
// The claim behind both verdicts is the same: "this screen renders through the
// layout that WAS compared against Figma, and differs only in state or data".
// That claim is checkable. For each row we load the screen and its audited
// reference in the same viewport, reduce each to a structural signature — the
// ordered skeleton of its main region, stripped of text — and score them.
//
// A row that scores below the threshold is NOT differing "only in state": it
// is a materially different composition and needs its own frame-to-frame
// audit. Those are written out as the targeted-audit worklist.
//
// usage: node scripts/verify-visual-basis.mjs <scratchpad> [--base-url=...]
import { chromium } from "@playwright/test";
import { readFileSync, writeFileSync } from "node:fs";

const scratch = process.argv[2];
const baseUrl =
  process.argv.find((a) => a.startsWith("--base-url="))?.split("=")[1] ??
  "http://localhost:4173";

// How much of the AUDITED layout must survive in the variant for the borrowed
// verdict to hold. A state variant legitimately ADDS things — an error banner,
// a countdown, a spinner — so a symmetric similarity score would punish
// exactly the difference a state is allowed to make. What must not happen is
// the audited composition being replaced: a loading skeleton or an alternate
// body means the screen was never really compared. So the test is coverage of
// the reference, not likeness to it.
const THRESHOLD = 0.9;

const work = JSON.parse(readFileSync(`${scratch}/visual-basis-work.json`, "utf8"));

const VIEWPORTS = {
  mobile: { width: 390, height: 844 },
  desktop: { width: 1440, height: 900 },
};

/**
 * Structural signature of the rendered page: the skeleton of the main content
 * region — tag name, landmark role, nesting depth and a coarse WIDTH bucket —
 * with all text removed, so wording and data cannot influence the score while
 * a different composition immediately does.
 *
 * Height is deliberately excluded. A state that adds a banner or an error line
 * grows every ancestor that contains it, so height would make each of those
 * ancestors read as a different element and the added banner would erase its
 * own parents from the match. Width is what identifies a composition — the
 * column, the rail, the full-bleed card — and it is stable under content
 * volume, which is exactly the thing a state is allowed to change.
 */
const SIGNATURE = `(() => {
  const root = document.querySelector("main") ?? document.body;
  const bucket = (n) => Math.round(n / 24);
  const out = [];
  const walk = (el, depth) => {
    if (depth > 4) return;
    for (const child of el.children) {
      const cs = getComputedStyle(child);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      const r = child.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) continue;
      out.push(
        [
          child.tagName,
          child.getAttribute("role") ?? "",
          depth,
          bucket(r.width),
        ].join(":"),
      );
      walk(child, depth + 1);
    }
  };
  walk(root, 0);
  return out;
})()`;

const count = (xs) => {
  const m = new Map();
  for (const x of xs) m.set(x, (m.get(x) ?? 0) + 1);
  return m;
};

/**
 * `coverage` — the fraction of the reference's structure still present in the
 * variant. This is the number the verdict turns on: it answers "is the audited
 * layout still here?" and is deliberately blind to anything the state adds.
 * `likeness` — the symmetric score, reported alongside so a variant that adds a
 * great deal is still visible in the data.
 */
function score(variant, reference) {
  if (!reference.length) return { coverage: variant.length ? 0 : 1, likeness: 1 };
  const mv = count(variant);
  const mr = count(reference);
  let shared = 0;
  for (const [k, v] of mr) shared += Math.min(v, mv.get(k) ?? 0);
  return {
    coverage: shared / reference.length,
    likeness: (2 * shared) / (variant.length + reference.length),
  };
}

// One navigation per unique (viewport, route) — references repeat heavily, so
// capturing signatures first and scoring afterwards cuts the page loads by ~3x.
const targets = new Map();
for (const item of work) {
  for (const route of [item.route, item.reference]) {
    targets.set(`${item.viewport}|${route}`, { viewport: item.viewport, route });
  }
}

const browser = await chromium.launch();
const cache = new Map();
const failures = new Map();

const PAGES = 4;
const jobs = [...targets.entries()];
let cursor = 0;

async function worker() {
  const page = await browser.newPage();
  for (;;) {
    const i = cursor++;
    if (i >= jobs.length) break;
    const [key, { viewport, route }] = jobs[i];
    try {
      await page.setViewportSize(VIEWPORTS[viewport]);
      await page.goto(`${baseUrl}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 20000,
      });
      // The app renders client-side; wait for the page's own heading rather
      // than for the network, which never truly idles behind a dev preview.
      await page
        .locator("h1:visible")
        .first()
        .waitFor({ state: "visible", timeout: 8000 })
        .catch(() => {});
      cache.set(key, await page.evaluate(SIGNATURE));
    } catch (err) {
      failures.set(key, String(err).slice(0, 160));
    }
    if (i % 100 === 0) console.log(`  captured ${i}/${jobs.length}`);
  }
  await page.close();
}

console.log(`capturing ${jobs.length} unique (viewport, route) signatures…`);
await Promise.all(Array.from({ length: PAGES }, worker));
await browser.close();

const results = work.map((item) => {
  const a = cache.get(`${item.viewport}|${item.route}`);
  const b = cache.get(`${item.viewport}|${item.reference}`);
  if (!a || !b) {
    return {
      ...item,
      score: 0,
      ok: false,
      error:
        failures.get(`${item.viewport}|${item.route}`) ??
        failures.get(`${item.viewport}|${item.reference}`) ??
        "no signature captured",
    };
  }
  const { coverage, likeness } = score(a, b);
  return {
    ...item,
    score: Number(coverage.toFixed(3)),
    likeness: Number(likeness.toFixed(3)),
    ok: coverage >= THRESHOLD,
  };
});

const weak = results.filter((r) => !r.ok);
writeFileSync(
  `${scratch}/visual-basis-results.json`,
  `${JSON.stringify({ threshold: THRESHOLD, results }, null, 1)}\n`,
);

console.log(
  `checked=${results.length} upheld=${results.length - weak.length} weak=${weak.length} (reference coverage >= ${THRESHOLD})`,
);
for (const w of weak.slice(0, 40)) {
  console.log(
    `  WEAK cov=${w.score} lik=${w.likeness ?? "-"} ${w.viewport.padEnd(7)} ${w.code} ${w.route}  vs  ${w.reference}${w.error ? ` [${w.error}]` : ""}`,
  );
}
if (weak.length > 40) console.log(`  … and ${weak.length - 40} more`);
