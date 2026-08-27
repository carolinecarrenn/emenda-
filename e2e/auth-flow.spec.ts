import { test, expect } from "@playwright/test";

/**
 * Auth journey coverage. The canonical mobile flow (W-01..W-11 + W-12..W-17)
 * must be walkable by CLICKING on both viewports, and the language chosen on
 * W-02 must survive the whole chain and a reload.
 */

test.describe("Auth journey", () => {
  test("Sign in exposes Create Account and it opens Register", async ({
    page,
  }) => {
    await page.goto("/");
    // The marketing header labels this entry "Sign in" (was "Log in" on the
    // pre-redesign landing page).
    await page.getByRole("link", { name: "Sign in" }).first().click();
    await expect(page).toHaveURL(/\/signin$/);

    const createAccount = page.getByRole("link", {
      name: "Create new account",
    });
    await expect(createAccount).toBeVisible();
    await createAccount.click();
    await expect(page).toHaveURL(/\/auth\/register$/);
    await expect(page.locator("h1:visible").first()).toBeVisible();
  });

  test("Register → OTP → Create PIN → onboarding by clicking only", async ({
    page,
  }) => {
    await page.goto("/signin");
    await page.getByRole("link", { name: "Create new account" }).click();

    await page
      .getByRole("button", { name: "Continue to verification" })
      .click();
    await expect(page).toHaveURL(/\/auth\/otp/, { timeout: 5000 });

    // W-06H: typing all six digits enables Verify
    const boxes = page.getByRole("textbox");
    const digits = "482913".split("");
    for (let i = 0; i < digits.length; i++) {
      await boxes.nth(i).fill(digits[i]);
    }
    await page.getByRole("button", { name: "Verify" }).click();
    await expect(page).toHaveURL(/\/auth\/create-pin$/, { timeout: 5000 });

    await page.getByRole("button", { name: "Create PIN" }).click();
    // W-07 hands off to the EMENDA ID funnel (W-12), not straight to /worker
    await expect(page).toHaveURL(/\/onboarding\/id$/, { timeout: 5000 });
    await expect(page.locator("h1:visible").first()).toBeVisible();
  });

  test("back paths return to Welcome from both fork branches", async ({
    page,
  }) => {
    await page.goto("/auth/register");
    await page.getByRole("button", { name: "Back to welcome" }).click();
    await expect(page).toHaveURL(/\/auth\/welcome$/);

    await page.getByRole("button", { name: "Log in", exact: true }).click();
    await expect(page).toHaveURL(/\/auth\/login$/);
    await page.getByRole("button", { name: "Back to welcome" }).click();
    await expect(page).toHaveURL(/\/auth\/welcome$/);
  });

  test("language chosen in the funnel persists through it and a reload", async ({
    page,
  }) => {
    await page.goto("/auth/language");
    await page.getByRole("button", { name: /Bahasa Indonesia/ }).click();
    await page.getByRole("button", { name: /Lanjut|Continue/ }).click();
    await expect(page).toHaveURL(/\/auth\/welcome$/);

    // still Indonesian after moving deeper into the chain
    await page.getByRole("button", { name: "Buat akun baru" }).click();
    await expect(page).toHaveURL(/\/auth\/register$/);

    await page.reload();
    const stored = await page.evaluate(() =>
      localStorage.getItem("emenda-language"),
    );
    expect(stored).toBe("id");
  });

  test("worker sidebar Log out reaches the logout confirmation", async ({
    page,
  }) => {
    await page.goto("/worker");
    await page
      .getByRole("complementary")
      .getByRole("link", { name: "Log out" })
      .click();
    await expect(page).toHaveURL(/\/auth\/logout$/);
    await expect(page.locator("h1:visible").first()).toBeVisible();
  });

  test("mobile: the signup door and chain work at 390px", async ({
    browser,
  }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();

    await page.goto("/signin");
    const createAccount = page.getByRole("link", {
      name: "Create new account",
    });
    await expect(createAccount).toBeVisible();
    await createAccount.click();
    await expect(page).toHaveURL(/\/auth\/register$/);
    // no app chrome on auth screens
    await expect(page.getByRole("navigation")).toHaveCount(0);
    await expect(page.locator("h1:visible").first()).toBeVisible();

    await context.close();
  });
});
