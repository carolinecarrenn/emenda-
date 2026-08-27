import { test, expect } from "@playwright/test";

/**
 * Homepage of the EMENDA marketing site (route `/`).
 *
 * The positioning this spec protects: EMENDA is a platform and the assistant
 * is one capability inside it. Several assertions here exist specifically to
 * stop the page drifting back into an AI demo — the section order test and the
 * ecosystem-in-the-hero test would both fail if it did.
 */
test.describe("Marketing homepage", () => {
  test("hero presents a platform, not a chatbot", async ({ page }) => {
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("One connected platform");
    await expect(heading).toContainText("life and work");

    // The hero visual is the ecosystem composition: both sides of the
    // platform, labelled. If it were a chat mockup these would be gone.
    const hero = page.locator('[data-section="home-hero"]');
    await expect(hero.getByText("WORKER", { exact: true })).toBeVisible();
    await expect(hero.getByText("ORGANIZATION", { exact: true })).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Explore EMENDA" }).first(),
    ).toBeVisible();
  });

  test("tells the platform story before the AI one", async ({ page }) => {
    await page.goto("/");

    for (const heading of [
      "Everything connected in one EMENDA experience.",
      "Work and support shouldn't live in disconnected places.",
      "Connect, work, communicate, get support, follow up.",
      "One place for your journey in Japan.",
      "Support your people with better visibility and follow-through.",
      "From information to resolution.",
      "And when you don't know what to do, ask EMENDA.",
      "One platform. Different moments.",
    ]) {
      await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    }
  });

  test("the assistant comes after the platform, not before it", async ({
    page,
  }) => {
    await page.goto("/");
    const order = await page
      .locator("[data-section]")
      .evaluateAll((nodes) =>
        nodes.map((n) => n.getAttribute("data-section") ?? ""),
      );

    const assistantAt = order.indexOf("home-assistant");
    expect(assistantAt).toBeGreaterThan(-1);

    // Everything that establishes EMENDA as a platform must precede it.
    for (const before of [
      "home-hero",
      "home-platform",
      "home-why",
      "home-journey",
      "home-workers",
      "home-organizations",
      "home-resolution",
    ]) {
      const at = order.indexOf(before);
      expect(at, `${before} should exist`).toBeGreaterThan(-1);
      expect(at, `${before} should come before home-assistant`).toBeLessThan(
        assistantAt,
      );
    }
  });

  test("every preview block links to the page that owns the detail", async ({
    page,
  }) => {
    const exits = [
      ["Explore the EMENDA platform", "/platform"],
      ["See how EMENDA works", "/how-it-works"],
      ["Explore EMENDA for workers", "/workers"],
      ["Explore EMENDA for organizations", "/organizations"],
      ["Meet EMENDA Assistant", "/assistant"],
    ] as const;

    for (const [label, target] of exits) {
      await page.goto("/");
      await page.getByRole("link", { name: label }).click();
      await expect(page).toHaveURL(new RegExp(`${target}$`));
    }
  });

  test("both conversion paths work", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Explore EMENDA" }).first().click();
    await expect(page).toHaveURL(/\/platform$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Try EMENDA" }).first().click();
    await expect(page).toHaveURL(/\/signin$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Sign in" }).first().click();
    await expect(page).toHaveURL(/\/signin$/);
  });

  test("the language switcher is the page's only one, and it works", async ({
    page,
  }) => {
    await page.goto("/");

    // The i18n suite selects these by accessible name with no `.first()`, so a
    // second button-role switcher anywhere on this page would break it.
    for (const name of ["English", "日本語", "Bahasa"]) {
      await expect(page.getByRole("button", { name })).toHaveCount(1);
    }

    const ja = page.getByRole("button", { name: "日本語" });
    await ja.click();
    await expect(ja).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("html")).toHaveAttribute("lang", "ja");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "暮らしと仕事",
    );
    await expect(
      page.getByRole("link", { name: "ログイン" }).first(),
    ).toBeVisible();

    await page.getByRole("button", { name: "Bahasa" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "id");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "hidup dan bekerja",
    );
    await expect(
      page.getByRole("link", { name: "Masuk" }).first(),
    ).toBeVisible();

    await page.getByRole("button", { name: "English" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "One connected platform",
    );
  });

  test("no horizontal overflow at 390 or 1440", async ({ page }) => {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    }
  });
});
