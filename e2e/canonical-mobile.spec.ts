import { test, expect, type Page } from "@playwright/test";

/**
 * Worker mobile Figma is the canonical source of truth for flow and content;
 * desktop Figma governs presentation only. These assertions lock the places
 * where the desktop mock is thinner than the canonical mobile frame, so a
 * later desktop-led edit cannot quietly drop mobile-only capability again.
 */

/** How many matches are actually rendered to the user at this viewport.
 *  Both the mobile and the desktop composition are in the DOM at once, one
 *  hidden by a breakpoint, so a DOM-level assertion answers the wrong question. */
async function expectVisible(page: Page, text: RegExp) {
  const count = await page
    .getByText(text)
    .evaluateAll((nodes) => nodes.filter((n) => (n as HTMLElement).offsetParent !== null).length);
  expect(count, `nothing matching ${text} is visible at this viewport`).toBeGreaterThan(0);
}

test.describe("Canonical mobile content survives on desktop", () => {
  test("W-60B How to earn keeps the active-program rule, the HOW/LIMIT/WHEN lines and the notice", async ({
    page,
  }) => {
    await page.goto("/worker/coin/earn");

    // 1182:2033 — the mint card naming the rule in force, absent from WD-60B
    await expect(page.getByText(/ACTIVE PROGRAM ·/)).toBeVisible();
    // 1179:364 etc — each rule states how, how often and when it lands
    await expect(page.getByText(/^HOW:/).first()).toBeVisible();
    await expect(page.getByText(/^LIMIT:/).first()).toBeVisible();
    await expect(page.getByText(/^WHEN ADDED:/).first()).toBeVisible();
    // Count what is VISIBLE, not what is in the DOM. The section now ships a
    // mobile card and a desktop card, one hidden per viewport, so a DOM count
    // reads 8 for four rules. The contract is still "every rule states how it
    // is earned" — it just has to be asked per viewport.
    const visibleHow = await page
      .getByText(/^HOW:/)
      .evaluateAll((nodes) => nodes.filter((n) => n.offsetParent !== null).length);
    expect(visibleHow).toBe(4);
    // 1179:388 — the amber closing notice
    await expect(page.getByText("Rules are visible before you earn")).toBeVisible();
  });

  test("W-60D empty state uses the canonical mobile wording", async ({ page }) => {
    await page.goto("/worker/coin?state=empty");

    await expect(page.getByText("Your reward activity will appear here.")).toBeVisible();
    await expect(page.getByText("No Emenda Coin yet")).toBeVisible();
    await expect(
      page.getByText(/When you complete an eligible activity/),
    ).toBeVisible();
  });

  test("W-50D failed connect still shows the employer and the full access scope", async ({
    page,
  }) => {
    await page.goto("/worker/employer/review?state=failed");

    // Assert the CONTENT is VISIBLE, not that an exact label exists somewhere
    // in the DOM. Two things broke the naive version:
    //   - desktop condenses the mobile EMPLOYER card and the ACCESS SCOPE pair
    //     into one ScopeDetailsCard reading "EMPLOYER · <legal name>", so an
    //     exact-match on the bare word finds nothing;
    //   - both compositions ship together with one hidden per viewport, so
    //     `.first()` picks the hidden mobile copy and reports it invisible.
    // Counting visible matches asks the question the rule actually cares about:
    // does this content reach the user at this width?
    await expectVisible(page, /EMPLOYER/);
    await expectVisible(page, /EMPLOYER CAN ACCESS/);
    await expectVisible(page, /STAYS PRIVATE/);
    await expectVisible(page, /Connection failed\./);
  });

  test("W-51D failed disconnect still shows the employer and the full access scope", async ({
    page,
  }) => {
    await page.goto("/worker/employer?state=failed");

    // Assert the CONTENT is VISIBLE, not that an exact label exists somewhere
    // in the DOM. Two things broke the naive version:
    //   - desktop condenses the mobile EMPLOYER card and the ACCESS SCOPE pair
    //     into one ScopeDetailsCard reading "EMPLOYER · <legal name>", so an
    //     exact-match on the bare word finds nothing;
    //   - both compositions ship together with one hidden per viewport, so
    //     `.first()` picks the hidden mobile copy and reports it invisible.
    // Counting visible matches asks the question the rule actually cares about:
    // does this content reach the user at this width?
    await expectVisible(page, /EMPLOYER/);
    await expectVisible(page, /EMPLOYER CAN ACCESS/);
    await expectVisible(page, /STAYS PRIVATE/);
    // The targeted audit replaced my placeholder wording with the frame's own,
    // which names the employer: "Couldn't disconnect {employer}. Check your
    // connection and try again." Matching the employer-agnostic shape keeps
    // the assertion true when the mock employer changes.
    await expectVisible(page, /Couldn[’']t disconnect .+\. Check your connection/);
  });
});

test.describe("Click paths the mocks require", () => {
  test("Home reaches Knowledge & Q&A and Help & support without a typed URL", async ({
    page,
  }) => {
    await page.goto("/worker");
    await page.getByRole("link", { name: "Knowledge & Q&A" }).click();
    await expect(page).toHaveURL(/\/worker\/knowledge$/);

    await page.goto("/worker");
    await page.getByRole("link", { name: "Help & support" }).click();
    await expect(page).toHaveURL(/\/worker\/help$/);
  });
});
