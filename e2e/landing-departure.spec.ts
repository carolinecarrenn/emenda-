import { test, expect } from "@playwright/test";

/**
 * The public landing at `/` is a USER-CONFIRMED INTENTIONAL DEPARTURE from
 * Figma LP-01 (1053:855): a promotional / product-entry page with its own
 * structure. It is therefore NOT audited frame-to-frame, and differences from
 * LP-01 are not counted as visual deviations.
 *
 * The departure is from the FRAME only. Four requirements survive it — global
 * ID/EN/JA, responsive desktop/mobile, accessibility, and test coverage — and
 * with the frame comparison gone, this file is the only net over them.
 *
 * Every assertion here is deliberately CONTENT-AGNOSTIC. The landing's copy,
 * sections and imagery are owned by whoever is redesigning it and are expected
 * to keep changing; a test that pinned marketing strings would fail on their
 * next edit and teach everyone to ignore it. These assert the contracts
 * instead: a heading exists, the language control works, the choice persists,
 * the page reflows, nothing overflows, and the document is navigable.
 */

/**
 * The section vocabulary, in the order the brief prescribes. These are
 * STRUCTURAL identifiers carried on `data-section`, not copy: they are the
 * same byte-for-byte in ID, EN and 日本語, and they are never translated.
 *
 * Taken from the landing composition itself (LandingPage.tsx), so the contract
 * describes the brief rather than inventing a parallel one.
 */
const BRIEF_ORDER = [
  "home-hero",
  "home-platform",
  "home-why",
  "home-journey",
  "home-workers",
  "home-organizations",
  "home-resolution",
  "home-assistant",
  "home-moments",
  "home-cta",
];

/**
 * The one ordering claim that carries meaning rather than layout.
 *
 * The brief repositioned EMENDA from "an AI assistant" to "a platform, with an
 * assistant as one capability inside it". That argument only lands if the page
 * makes it in that order: the platform, who it serves and what it resolves,
 * and THEN the assistant. An assistant section that drifts up near the hero
 * quietly restores the old positioning while every block is still present, so
 * a count or a full-order check alone would not catch the regression that
 * actually matters here.
 */
const ASSISTANT_MUST_FOLLOW = [
  "home-hero",
  "home-platform",
  "home-why",
  "home-journey",
  "home-workers",
  "home-organizations",
  "home-resolution",
];

/**
 * How much of the page the order contract must actually recognise.
 *
 * Without this the contract dies quietly: when `/` was rebuilt as a marketing
 * homepage every block was renamed from `hero` to `home-hero`, every
 * identifier fell outside BRIEF_ORDER, the ordered intersection became empty —
 * and an empty list trivially equals an empty list, so the test passed while
 * checking nothing. It had already happened once before that, when four of
 * twelve names were guessed wrong and were silently skipped.
 *
 * A renamed vocabulary is fine and expected; a renamed vocabulary that nobody
 * notices is not. Falling below this share fails loudly and says what to do.
 */
const MIN_RECOGNISED = 0.8;

const LANGUAGES = [
  { button: "English", htmlLang: "en" },
  { button: "Bahasa", htmlLang: "id" },
  { button: "日本語", htmlLang: "ja" },
];

test.describe("Landing (departed from LP-01) — contracts that outlive the redesign", () => {
  test("exposes exactly one language control, and it switches all three", async ({
    page,
  }) => {
    await page.goto("/");

    for (const { button, htmlLang } of LANGUAGES) {
      // Strict mode on purpose: a second button-role switcher anywhere on the
      // page would break e2e/i18n.spec.ts too, and there the failure reads as
      // an i18n regression rather than a landing change.
      const control = page.getByRole("button", { name: button });
      await expect(control).toHaveCount(1);
      await control.click();
      await expect(page.locator("html")).toHaveAttribute("lang", htmlLang);
    }
  });

  test("the chosen language survives a reload", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "日本語" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
  });

  test("carries a document heading and a main landmark", async ({ page }) => {
    await page.goto("/");
    // A promotional page still needs a heading: it is the first thing a screen
    // reader announces and the only structural anchor on a long scrolling page.
    await expect(page.locator("h1:visible").first()).toBeVisible();
    await expect(page.getByRole("main")).toHaveCount(1);
  });

  test("every image carries alt text", async ({ page }) => {
    await page.goto("/");
    const missing = await page
      .locator("img:not([alt])")
      .evaluateAll((nodes) => nodes.map((n) => (n as HTMLImageElement).src));
    expect(missing, `images without an alt attribute: ${missing.join(", ")}`).toEqual([]);
  });

  test("reflows at 390 and 1440 without a horizontal scrollbar", async ({
    page,
  }) => {
    for (const viewport of [
      { width: 390, height: 844 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      await expect(page.locator("h1:visible").first()).toBeVisible();

      // A landing page that scrolls sideways on a phone is broken however good
      // its copy is; this catches a fixed-width section escaping the column.
      //
      // Measured with the root's `overflow-x: clip` neutralised first. That
      // clip is a legitimate safety net, but it also SUPPRESSES the growth of
      // documentElement.scrollWidth — so measuring through it would report a
      // clean page whether or not anything actually overflowed, and the test
      // would pass for the rest of its life without ever being able to fail.
      // The clip is restored immediately; nothing about the shipped page
      // changes. (Technique reported by the session that rebuilt the landing,
      // which used it to find two real overflows: grid items defaulting to
      // min-width:auto, and a 64-bar flex waveform with its own min-content
      // width.)
      const overflow = await page.evaluate(() => {
        const probe = document.createElement("style");
        // The clip sits on the app shell INSIDE the React root (#root > div),
        // not on `body > div`, so the selector has to name that chain. Getting
        // this wrong is silent: the probe applies, nothing is neutralised, and
        // the measurement returns 0 for a page that overflows by 500px.
        // Verified by injecting a 900px block — un-neutralised it reads 0,
        // neutralised it reads 510.
        probe.textContent =
          "html,body,#root,#root > div{overflow-x:visible !important}";
        document.head.append(probe);
        const delta =
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth;
        probe.remove();
        return delta;
      });
      expect(
        overflow,
        `horizontal overflow at ${viewport.width}px: ${overflow}px`,
      ).toBeLessThanOrEqual(1);
    }
  });

  test("every in-page nav anchor resolves to a section that exists", async ({
    page,
  }) => {
    // The strongest structural contract available without pinning copy: the
    // navbar states which sections the brief promises, so the page must
    // actually contain them. Derived from the rendered nav rather than from a
    // hardcoded list, so it follows the brief instead of freezing it — but a
    // section deleted from under its own nav link fails immediately.
    await page.goto("/");
    const anchors = await page
      .getByRole("banner")
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links.map((l) => (l as HTMLAnchorElement).getAttribute("href") ?? ""),
      );

    // The header may navigate by in-page anchor or by route — the marketing
    // site moved from one to the other. What must never happen is this test
    // finding nothing at all and reporting a pass by vacuity, which is what it
    // did when the nav switched to route links.
    const routeLinks = await page
      .getByRole("banner")
      .locator('a[href^="/"]')
      .count();
    expect(
      anchors.length + routeLinks,
      "the header offers no navigation of either kind — nothing for this contract to check",
    ).toBeGreaterThan(0);

    const broken: string[] = [];
    for (const href of anchors) {
      // Attribute selector rather than `#id`: this runs in Node, where
      // CSS.escape does not exist, and an id can legally contain characters
      // that would need escaping in a selector.
      const id = href.slice(1);
      if ((await page.locator(`[id="${id}"]`).count()) === 0) broken.push(href);
    }
    expect(
      broken,
      `the header links to sections that do not exist: ${broken.join(", ")}`,
    ).toEqual([]);
  });

  test("keeps the briefed section order", async ({ page }) => {
    // The brief prescribes an argument, not just a set of blocks: state the
    // promise, show the problem, show the solution, demonstrate it, prove it,
    // then ask for the click. Order is the content here — a page with all the
    // right sections in the wrong sequence is a different page.
    //
    // Asserted on `data-section` identifiers rather than headings, so the
    // contract is independent of copy AND identical in ID / EN / 日本語. The
    // identifiers are structural names, never translated.
    await page.goto("/");

    const found = await page
      .getByRole("main")
      .locator("[data-section]")
      .evaluateAll((nodes) =>
        nodes.map((n) => n.getAttribute("data-section") ?? ""),
      );

    expect(
      found.length,
      "no [data-section] hooks on the landing — the order contract cannot see the structure. " +
        "Add one per top-level block using the vocabulary in BRIEF_ORDER below.",
    ).toBeGreaterThan(0);

    // Only the blocks that are present are ordered; a section may be dropped
    // from the brief later without this test dictating product decisions, but
    // the ones that exist must appear in the briefed sequence.
    const expected = BRIEF_ORDER.filter((name) => found.includes(name));
    const actual = found.filter((name) => BRIEF_ORDER.includes(name));

    expect(
      actual,
      `landing sections are out of the briefed order.\n  expected: ${expected.join(" → ")}\n  actual:   ${actual.join(" → ")}`,
    ).toEqual(expected);

    // A few unknown hooks are fine — new blocks appear. Most of the page being
    // unknown means the vocabulary was renamed and this contract has quietly
    // stopped checking anything, which is the failure mode it exists to avoid.
    const unknown = found.filter((name) => !BRIEF_ORDER.includes(name));
    const recognised = (found.length - unknown.length) / found.length;
    expect(
      recognised,
      `the order contract recognises only ${Math.round(recognised * 100)}% of the page ` +
        `(${found.length - unknown.length}/${found.length}). The section vocabulary has ` +
        `drifted, so this test is no longer checking order. Update BRIEF_ORDER to the ` +
        `current identifiers: ${found.join(", ")}`,
    ).toBeGreaterThanOrEqual(MIN_RECOGNISED);

    if (unknown.length) {
      // eslint-disable-next-line no-console
      console.log(`note: data-section values outside the brief: ${unknown.join(", ")}`);
    }
  });

  test("the assistant is presented as part of the platform, not as the product", async ({
    page,
  }) => {
    await page.goto("/");
    const found = await page
      .getByRole("main")
      .locator("[data-section]")
      .evaluateAll((nodes) =>
        nodes.map((n) => n.getAttribute("data-section") ?? ""),
      );

    const assistantAt = found.indexOf("home-assistant");
    if (assistantAt === -1) return; // the block may be renamed or dropped; the order test covers that

    const tooLate = ASSISTANT_MUST_FOLLOW.filter((name) => {
      const at = found.indexOf(name);
      return at !== -1 && at > assistantAt;
    });
    expect(
      tooLate,
      `the assistant section appears before ${tooLate.join(", ")}, which reads as ` +
        `"EMENDA is an assistant" rather than "EMENDA is a platform with an assistant in it"`,
    ).toEqual([]);
  });

  test("section identifiers are stable across all three languages", async ({
    page,
  }) => {
    // The identifiers are structural, so switching language must not change
    // them. If a translation ever reached them the order contract would pass
    // in EN and collapse in ID/JA.
    await page.goto("/");
    const read = () =>
      page
        .getByRole("main")
        .locator("[data-section]")
        .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("data-section")));

    const inEnglish = await read();
    for (const button of ["Bahasa", "日本語"]) {
      await page.getByRole("button", { name: button }).click();
      expect(await read(), `data-section changed under ${button}`).toEqual(inEnglish);
    }
  });

  test("keeps the main structure — a deletion cannot pass unnoticed", async ({
    page,
  }) => {
    await page.goto("/");

    // The brief lays out a long multi-section page (hero → value strip →
    // problem → solution → assistant showcase → features → use cases →
    // product experience → continuity → safety/control → audiences → final
    // CTA → footer). The floor is set below that count on purpose: sections
    // may merge or be renamed as the marketing evolves, but the page collapsing
    // back to a stub is caught.
    const sections = page.getByRole("main").locator("> section, > div > section");
    expect(
      await sections.count(),
      "the landing has collapsed to a handful of blocks",
    ).toBeGreaterThanOrEqual(6);

    // A promotional page ends by asking for the click.
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
  });

  test("keeps a way into the product on both viewports", async ({ page }) => {
    // Whatever the marketing structure becomes, the page has to hand a visitor
    // to the app — otherwise the product entry point is gone.
    for (const viewport of [
      { width: 390, height: 844 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      const entries = page.locator(
        'a[href="/signin"], a[href="/welcome"], a[href^="/auth"]',
      );
      expect(
        await entries.count(),
        `no link into the product at ${viewport.width}px`,
      ).toBeGreaterThan(0);
    }
  });
});
