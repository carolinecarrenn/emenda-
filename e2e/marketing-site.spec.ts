import { test, expect } from "@playwright/test";

/**
 * The marketing site as a whole: nine routes, one chrome.
 *
 * The homepage has its own spec. This one covers what only exists because the
 * site is multi-page — every route renders, the nav and footer are genuinely
 * shared, cross-page links resolve, and the per-page contracts (one language
 * control, one main, one footer, a product entry) hold everywhere.
 */
const ROUTES = [
  { path: "/", heading: "One connected platform" },
  { path: "/platform", heading: "The EMENDA Platform" },
  { path: "/workers", heading: "Your life and work in Japan, connected." },
  { path: "/assistant", heading: "Guidance when you need it." },
  {
    path: "/how-it-works",
    heading: "How a worker, an organization and EMENDA stay connected.",
  },
  { path: "/use-cases", heading: "What EMENDA is actually used for." },
  { path: "/organizations", heading: "Better support for international teams." },
  { path: "/about", heading: "Making life in Japan easier to navigate." },
  { path: "/help", heading: "How can we help?" },
] as const;

const NAV = [
  ["Platform", "/platform"],
  ["For Workers", "/workers"],
  ["For Organizations", "/organizations"],
  ["How It Works", "/how-it-works"],
  ["Use Cases", "/use-cases"],
  ["About", "/about"],
] as const;

test.describe("Marketing site", () => {
  test("every route renders its own hero", async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route.path);
      const h1 = page.getByRole("heading", { level: 1 });
      await expect(h1, `h1 on ${route.path}`).toHaveCount(1);
      await expect(h1).toContainText(route.heading);
    }
  });

  test("chrome is identical on every route", async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route.path);
      await expect(page.locator("main"), route.path).toHaveCount(1);
      await expect(page.getByRole("contentinfo"), route.path).toHaveCount(1);

      // One button-role language control per page — the contract the i18n
      // suite depends on, held across all nine routes.
      for (const name of ["English", "日本語", "Bahasa"]) {
        await expect(
          page.getByRole("button", { name }),
          `${name} switcher on ${route.path}`,
        ).toHaveCount(1);
      }

      await expect(
        page.getByRole("link", { name: "Try EMENDA" }).first(),
        `product entry on ${route.path}`,
      ).toBeVisible();
    }
  });

  test("the header navigates the whole site", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    for (const [label, target] of NAV) {
      await page.goto("/");
      await page
        .locator("header nav")
        .getByRole("link", { name: label, exact: true })
        .click();
      await expect(page).toHaveURL(new RegExp(`${target}$`));
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });

  test("the header does not give the assistant a top-level slot", async ({
    page,
  }) => {
    // Positioning, enforced: EMENDA Assistant is one capability inside the
    // platform. Promoting it into the primary nav would say otherwise.
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    const nav = page.locator("header nav");
    await expect(nav.getByRole("link")).toHaveCount(NAV.length);
    await expect(nav.getByRole("link", { name: /assistant/i })).toHaveCount(0);

    // It is still reachable — from the footer.
    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: "EMENDA Assistant" })
      .click();
    await expect(page).toHaveURL(/\/assistant$/);
  });

  test("the footer reaches the pages the header does not", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Help Center" })
      .click();
    await expect(page).toHaveURL(/\/help$/);
    await expect(
      page.getByRole("heading", { name: "How can we help?" }),
    ).toBeVisible();
  });

  test("a new page starts at its own hero, not mid-scroll", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 3000));
    await page
      .locator("header nav")
      .getByRole("link", { name: "Use Cases", exact: true })
      .click();
    await expect(page).toHaveURL(/\/use-cases$/);
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeLessThan(80);
  });

  test("help search filters the FAQ", async ({ page }) => {
    await page.goto("/help");

    const beforeCount = await page.locator("details").count();
    expect(beforeCount).toBeGreaterThan(8);

    await page.getByLabel("Search help articles").fill("voice");
    await expect(page.locator("details")).not.toHaveCount(beforeCount);
    await expect(
      page.getByRole("heading", { name: "Using EMENDA Assistant" }),
    ).toBeVisible();

    await page.getByLabel("Search help articles").fill("zzzzzz");
    await expect(page.locator("details")).toHaveCount(0);
    await expect(page.getByText("No answers matched that.")).toBeVisible();
  });

  test("in-page anchors from other pages resolve", async ({ page }) => {
    await page.goto("/organizations");
    await page.getByRole("link", { name: "Talk to us" }).first().click();
    await expect(page).toHaveURL(/\/help#contact$/);
    await expect(page.locator("#contact")).toHaveCount(1);

    // Scoped to the footer and exact: /help also has a "Privacy & permissions"
    // FAQ topic, and a loose match would hit that instead.
    await page.goto("/");
    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Privacy", exact: true })
      .click();
    await expect(page).toHaveURL(/\/help#privacy$/);
    await expect(page.locator("#privacy")).toHaveCount(1);
  });

  test("no horizontal overflow on any route at 390, 768 or 1440", async ({
    page,
  }) => {
    for (const width of [390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of ROUTES) {
        await page.goto(route.path);
        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));
        expect(scrollWidth, `${route.path} at ${width}`).toBeLessThanOrEqual(
          clientWidth + 1,
        );
      }
    }
  });

  test("mobile navigation reaches every page", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.getByRole("dialog", { name: "Site menu" });

    for (const label of [
      "Home",
      ...NAV.map(([navLabel]) => navLabel),
      "EMENDA Assistant",
      "Help",
    ]) {
      await expect(
        menu.getByRole("link", { name: label, exact: true }),
      ).toBeVisible();
    }

    await menu.getByRole("link", { name: "EMENDA Assistant" }).click();
    await expect(page).toHaveURL(/\/assistant$/);
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveCount(
      0,
    );
  });
});
