import { test, expect } from "@playwright/test";

/**
 * Global language behavior: selection applies app-wide, persists across
 * navigation and reload, and never resets route/state/drafts.
 */
test.describe("Global i18n", () => {
  test("Bahasa Indonesia applies across pages and persists", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Bahasa" }).click();
    await expect(
      page.getByRole("link", { name: "Masuk" }).first(),
    ).toBeVisible();

    await page.goto("/manager");
    await expect(page.getByText("Dasbor").first()).toBeVisible();
    await expect(page.getByText("AKTIVITAS PEKERJA")).toBeVisible();

    await page.goto("/worker/reports");
    await expect(
      page.getByRole("navigation").getByText("Laporan").first(),
    ).toBeVisible();
  });

  test("English applies across pages", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "English" }).click();
    await page.goto("/manager");
    await expect(page.getByText("WORKER ACTIVITY")).toBeVisible();
  });

  test("日本語 applies across pages", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "日本語" }).click();
    await page.goto("/manager");
    await expect(page.getByText("ダッシュボード").first()).toBeVisible();
    await page.goto("/manager/reports");
    await expect(page.getByText("日報").first()).toBeVisible();
  });

  test("language persists after reload", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "日本語" }).click();
    await page.reload();
    await expect(
      page.getByRole("link", { name: "ログイン" }).first(),
    ).toBeVisible();
    const stored = await page.evaluate(() =>
      localStorage.getItem("emenda-language"),
    );
    expect(stored).toBe("ja");
  });

  test("switching language on a report detail keeps route and data", async ({
    page,
  }) => {
    await page.goto("/manager/reports/rpt-2026-08-24");
    await expect(
      page.getByRole("heading", { name: "Daily Report Detail" }),
    ).toBeVisible();

    // Switch language without navigating (simulates a settings change from
    // another surface; the provider reads localStorage on mount, so switch
    // in-page via the landing switcher pattern is covered above — here we
    // assert re-render behavior via storage + soft reload on same URL).
    await page.evaluate(() => localStorage.setItem("emenda-language", "ja"));
    await page.reload();
    await expect(page).toHaveURL(/\/manager\/reports\/rpt-2026-08-24$/);
    await expect(
      page.getByRole("heading", { name: "日報詳細" }),
    ).toBeVisible();
    // User content is NOT auto-translated:
    await expect(
      page.getByText("Tanaka-san · 田中さん").first(),
    ).toBeVisible();
    await expect(
      page.getByText("Morning mobility exercise completed", { exact: false }),
    ).toBeVisible();
  });

  test("switching language keeps an unsaved draft", async ({ page }) => {
    await page.goto("/worker/reports/new");
    await page
      .getByLabel("Resident", { exact: true })
      .fill("Tanaka-san · 田中さん");

    // Client-side navigate to the landing switcher and back — SPA state
    // (the in-memory draft) must survive the language change.
    await page.getByRole("link", { name: "EMENDA" }).first().click();
    await page.getByRole("button", { name: "Bahasa" }).click();
    await page.goBack();

    await expect(page).toHaveURL(/\/worker\/reports\/new$/);
    // The caregiver form now localizes too, so the field answers to its
    // Indonesian label — while the typed draft value is untouched.
    await expect(page.getByLabel("Penghuni", { exact: true })).toHaveValue(
      "Tanaka-san · 田中さん",
    );
    // Shell now renders in Indonesian while the draft is intact.
    await expect(
      page.getByRole("navigation").getByText("Beranda"),
    ).toBeVisible();
  });

  test("the caregiver Daily Report loop renders in all three languages", async ({
    page,
  }) => {
    // The core caregiver flow was built before the i18n layer and carried
    // hardcoded English; it now goes through CAREGIVER_COPY like every other
    // section, so hub, form and review must follow the active language.
    await page.goto("/");
    await page.getByRole("button", { name: "Bahasa" }).click();
    await page.goto("/worker/reports");
    await expect(page.getByText("Riwayat kerja terbaru")).toBeVisible();
    await page.goto("/worker/reports/new");
    await expect(page.getByText("Status laporan")).toBeVisible();
    await expect(page.getByText("Visibilitas pemberi kerja")).toBeVisible();

    await page.goto("/");
    await page.getByRole("button", { name: "日本語" }).click();
    await page.goto("/worker/reports");
    await expect(page.getByText("最近の業務履歴")).toBeVisible();
    await page.goto("/worker/reports/new");
    await expect(page.getByText("レポートの状態")).toBeVisible();
    await expect(page.getByText("雇用主への公開範囲")).toBeVisible();
  });
});
