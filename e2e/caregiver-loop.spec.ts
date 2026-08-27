import { test, expect } from "@playwright/test";

test.describe("Caregiver Daily Report loop", () => {
  test("worker submits a caregiver report and manager verifies it", async ({
    page,
  }) => {
    // Worker: Reports hub — WD-54I not-submitted state
    await page.goto("/worker/reports");
    await expect(
      page.getByText("Today · Caregiver report not submitted"),
    ).toBeVisible();
    await expect(
      page.getByText("Caregiver template · Sakura Care"),
    ).toBeVisible();

    // Fill the caregiver form — WD-55H
    await page.getByRole("link", { name: "New Daily Report" }).click();
    await expect(
      page.getByRole("heading", { name: "New Daily Report" }),
    ).toBeVisible();

    await page
      .getByLabel("Resident", { exact: true })
      .fill("Tanaka-san · 田中さん");
    await page.getByRole("button", { name: "Needs attention" }).nth(1).click();
    await page.getByLabel("Meal").fill("Half portion · Setengah porsi");
    await page
      .getByLabel("Care notes")
      .fill("Assisted with morning routine. Appetite lower than usual.");
    await page.getByRole("button", { name: "Meal reduced" }).click();
    await page.getByRole("button", { name: "Monitor", exact: true }).click();

    // Review — WD-55I — and submit
    await page.getByRole("button", { name: "Review report" }).click();
    await expect(page.getByText("Ready to submit")).toBeVisible();
    await page.getByRole("button", { name: "Submit Daily Report" }).click();

    // Worker detail — WD-56 submitted state
    await expect(
      page.getByRole("heading", { name: "Daily Report", exact: true }),
    ).toBeVisible();
    await expect(page.getByText("Read-only report")).toBeVisible();

    // Manager: reports list — EM-11 pattern
    await page.goto("/manager/reports");
    await expect(page.getByText("Putri Rahayu").first()).toBeVisible();
    await page.getByText("Putri Rahayu").first().click();

    // Manager detail — EM-11A — acknowledge
    await expect(
      page.getByRole("heading", { name: "Daily Report Detail" }),
    ).toBeVisible();
    await expect(
      page.getByText("Tanaka-san · 田中さん").first(),
    ).toBeVisible();
    await page.getByRole("button", { name: "Acknowledge" }).click();
    await expect(page.getByText(/Verified · 25 Aug 2026/)).toBeVisible();

    // Worker hub reflects verification — WD-54G state
    await page.goto("/worker/reports");
    await expect(
      page.getByText("Today · Report verified").first(),
    ).toBeVisible();
  });

  test("worker hub shows submitted state and history pills", async ({
    page,
  }) => {
    await page.goto("/worker/reports");
    await expect(
      page.getByText("Recent work history", { exact: false }),
    ).toBeVisible();
    await expect(page.getByText("Verified · Supervisor").first()).toBeVisible();
    await expect(
      page.getByText(
        "Assigned automatically from your active employer connection.",
      ),
    ).toBeVisible();
  });

  test("manager dashboard shows MD-03 blocks", async ({ page }) => {
    await page.goto("/manager");
    await expect(
      page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible();
    await expect(page.getByText("WORKER ACTIVITY")).toBeVisible();
    await expect(page.getByText("NEEDS ATTENTION")).toBeVisible();
    await expect(page.getByText("RECENT COMMUNICATION")).toBeVisible();
    await expect(
      page.getByText(/Operational access only · Private Health/),
    ).toBeVisible();
  });

  test("manager reports page shows EM-11 blocks", async ({ page }) => {
    await page.goto("/manager/reports");
    await expect(
      page.getByLabel("Search worker / report"),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Today" })).toBeVisible();
    await expect(page.getByText("COMPLETION")).toBeVisible();
    await expect(page.getByText("Andi Pratama")).toBeVisible();
    await expect(
      page.getByText("Expected 08:00 · no submission"),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Open report generator" }),
    ).toBeVisible();
  });

  test("worker home shows WD-18J blocks", async ({ page }) => {
    await page.goto("/worker");
    await expect(
      page.getByRole("heading", { name: "Good morning, Putri" }),
    ).toBeVisible();
    await expect(page.getByText("MY EMENDA ID")).toBeVisible();
    await expect(page.getByText("Employer connected").first()).toBeVisible();
    await expect(page.getByText("Work tools unlocked")).toBeVisible();
    await expect(page.getByText("Explore")).toBeVisible();
    await expect(page.getByText("Recent updates")).toBeVisible();
  });

  test("mobile: hub keeps bottom nav, report form drops it", async ({
    browser,
  }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();

    await page.goto("/worker/reports");
    await expect(
      page.getByRole("navigation").getByRole("link", { name: "Reports" }),
    ).toBeVisible();

    await page.goto("/worker/reports/new");
    await expect(
      page.getByRole("navigation").getByRole("link", { name: "Reports" }),
    ).toHaveCount(0);
    await expect(
      page.getByRole("link", { name: "Reports", exact: true }),
    ).toBeVisible();

    await context.close();
  });
});
