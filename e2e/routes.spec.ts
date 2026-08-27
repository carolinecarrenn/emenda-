import { test, expect } from "@playwright/test";

/**
 * Route coverage: every implemented Figma screen must render its own page
 * (an <h1>) without hitting the router error boundary. Assertions are
 * language-independent so the suite is unaffected by the active locale.
 */

const STANDALONE_ROUTES = [
  "/about",
  "/features",
  "/how-it-works",
  "/signin",
  "/welcome",
  // Company Admin — the whole role, found missing by the orphan scan and built
  // from AD-00…AD-10. Every area is its own route now, not a nav item that
  // pointed back at the dashboard.
  "/admin",
  "/admin/access",
  "/admin/employees",
  "/admin/teams",
  "/admin/reports",
  "/admin/follow-up",
  "/admin/daily-reports",
  "/admin/rewards",
  "/admin/activity-log",
  "/admin/settings",
  "/admin/states",
  "/manager/auth",
  "/manager/auth/forgot",
  "/manager/auth/reset",
  "/manager/auth/updated",
  "/manager/state/offline",
  "/manager/state/reconnected",
  "/manager/state/restricted",
  "/manager/facility",
  "/manager/facility/context",
  "/manager/facility/switch",
  "/auth/language",
  "/auth/welcome",
  "/auth/login",
  "/auth/register",
  "/auth/otp",
  "/auth/create-pin",
  "/auth/forgot-pin",
  "/auth/reset-pin",
  "/auth/session-expired",
  "/auth/logout",
  "/onboarding/id",
  "/onboarding/id/details",
  "/onboarding/id/reference",
  "/onboarding/id/review",
  "/onboarding/id/verification",
  "/onboarding/id/my-id",
];

const WORKER_ROUTES = [
  "/worker",
  "/worker/profile",
  "/worker/profile/edit",
  "/worker/career",
  "/worker/career/upload",
  "/worker/career/import",
  "/worker/career/cv",
  "/worker/career/experience",
  "/worker/career/education",
  "/worker/career/skills",
  "/worker/career/qualifications",
  "/worker/career/preferences",
  "/worker/career/create",
  "/worker/career/edit",
  "/worker/japan",
  "/worker/japan/visa-plan",
  "/worker/japan/residence",
  "/worker/japan/readiness",
  "/worker/japan/readiness/health-insurance",
  "/worker/japan/registration",
  "/worker/japan/dates",
  "/worker/documents",
  "/worker/documents/add",
  "/worker/documents/emergency",
  "/worker/knowledge",
  "/worker/knowledge/search",
  "/worker/knowledge/ask",
  "/worker/knowledge/questions",
  "/worker/notifications",
  "/worker/reports",
  "/worker/reports/new",
  "/worker/chat",
  "/worker/assistant",
  "/worker/help",
  "/worker/help/contact",
  "/worker/help/contact/sent",
  "/worker/employer",
  "/worker/employer/connect",
  "/worker/employer/review",
  "/worker/employer/history",
  "/worker/coin",
  "/worker/coin/check-in",
  "/worker/coin/history",
  "/worker/coin/earn",
  "/worker/coin/use",
  "/worker/coin/rewards",
  "/worker/coin/rules",
  "/worker/logs",
  "/worker/logs/work",
  "/worker/logs/work/new",
  "/worker/logs/health",
  "/worker/logs/health/access",
  "/worker/logs/health/new",
  "/worker/logs/health/stress-check",
  "/worker/logs/health/stress-check/history",
  "/worker/logs/life",
  "/worker/logs/life/new",
  "/worker/logs/sync",
];

const MANAGER_ROUTES = [
  "/manager",
  "/manager/reports",
  "/manager/follow-up",
  "/manager/alerts",
  "/manager/analytics",
  "/manager/audit-export",
  "/manager/audit-export/confirm",
  "/manager/audit-export/ready",
  "/manager/more",
  "/manager/profile",
  "/manager/settings",
  "/manager/settings/permissions",
  "/manager/settings/locale",
  "/manager/support",
  "/manager/support/sent",
  "/manager/logout",
  "/manager/workers",
  "/manager/workers/invite",
  "/manager/communication",
  "/manager/communication/compose",
  "/manager/communication/review",
  "/manager/knowledge-ojt",
  "/manager/human-rights-dd",
  "/manager/human-rights-dd/evidence",
];

const ALL_ROUTES = [
  ...STANDALONE_ROUTES,
  ...WORKER_ROUTES,
  ...MANAGER_ROUTES,
];

test.describe("Route coverage", () => {
  for (const route of ALL_ROUTES) {
    test(`renders ${route}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));

      await page.goto(route);
      await expect(page.locator("h1:visible").first()).toBeVisible();
      await expect(page.getByText("Unexpected Application Error")).toHaveCount(
        0,
      );
      expect(errors).toEqual([]);
    });
  }

  test("app chrome reaches Notifications and Profile by clicking", async ({
    page,
  }) => {
    await page.goto("/worker");
    await page.getByRole("banner").getByRole("link").nth(0).click();
    await expect(page).toHaveURL(/\/worker\/notifications$/);

    await page.goto("/worker");
    await page.getByRole("banner").getByRole("link").nth(1).click();
    await expect(page).toHaveURL(/\/worker\/profile$/);
  });

  test("worker sidebar navigation reaches every tab", async ({ page }) => {
    await page.goto("/worker");
    const nav = page.getByRole("complementary");
    for (const label of ["Reports", "Chat", "Assistant", "Profile", "Home"]) {
      await nav.getByRole("link", { name: label, exact: true }).click();
      await expect(page.locator("h1:visible").first()).toBeVisible();
    }
  });
});

test.describe("Figma state variants", () => {
  const STATE_ROUTES = [
    "/worker?state=headless",
    "/worker?state=new-user",
    "/worker?state=needs-attention",
    "/worker?state=loading",
    "/worker?state=invite-received",
    "/worker?state=access-ended",
    "/worker/profile?state=incomplete",
    "/worker/profile/edit?state=offline",
    "/worker/career?state=loading",
    "/worker/career?state=offline",
    "/worker/japan?state=needs-attention",
    "/worker/japan?state=offline",
    "/worker/documents?state=empty",
    "/worker/documents?state=offline",
    "/worker/knowledge?state=offline",
    "/worker/notifications?state=empty",
    "/worker/notifications?state=offline",
    "/auth/login?state=lockout",
    "/auth/otp?state=expired",
    "/worker/reports?state=headless",
    "/worker/reports?state=loading",
    "/worker/reports?state=access-ended",
    "/worker/reports/new?state=validation-error",
    "/worker/reports/new?state=offline-draft",
    "/worker/reports/new?template=warehouse",
    "/worker/chat?state=headless",
    "/worker/chat?state=offline",
    "/worker/assistant?state=thinking",
    "/worker/assistant?state=send-failed",
    "/worker/help?state=offline",
    "/worker/help/contact?state=submit-failed",
    "/worker/employer/connect?state=invalid",
    "/worker/coin?state=offline",
    "/worker/coin?state=personal-headless",
    "/worker/logs?state=headless",
    "/worker/logs?state=offline",
    "/worker/logs/health/stress-check?state=result",
    "/worker/logs/sync?state=failed",
    "/welcome?account=work",
    "/welcome?account=employee",
    "/manager/auth?state=invalid",
    "/manager/auth?state=verified",
    "/manager/auth/reset?state=code-expired",
    "/manager/follow-up?state=sent",
    "/manager/follow-up?state=not-sent",
    "/manager/audit-export?state=failed",
    "/manager/settings?state=settings-saved",
    "/manager/settings?state=save-failed",
    "/manager/workers?state=no-results",
    "/manager/facility?state=no-results",
    "/manager/communication?state=empty",
    "/manager/communication?state=offline",
    "/manager/knowledge-ojt?state=loading",
    "/manager/human-rights-dd?state=offline",
  ];

  for (const route of STATE_ROUTES) {
    test(`renders ${route}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));

      await page.goto(route);
      await expect(page.locator("h1:visible").first()).toBeVisible();
      expect(errors).toEqual([]);
    });
  }
});

test.describe("Mobile chrome rules", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("tab-chrome hubs keep the bottom nav", async ({ page }) => {
    for (const route of [
      "/worker",
      "/worker/reports",
      "/worker/career",
      "/worker/japan",
      "/worker/notifications",
      "/worker/profile",
    ]) {
      await page.goto(route);
      await expect(
        page.getByRole("navigation").getByRole("link", { name: "Home" }),
      ).toBeVisible();
    }
  });

  test("sub-pages and no-nav sections drop the bottom nav", async ({
    page,
  }) => {
    for (const route of [
      "/worker/career/experience",
      "/worker/japan/residence",
      "/worker/profile/edit",
      // Sections whose mocks have no bottom navigation at all:
      "/worker/documents",
      "/worker/documents/add",
      "/worker/knowledge",
    ]) {
      await page.goto(route);
      await expect(
        page.getByRole("navigation").getByRole("link", { name: "Home" }),
      ).toHaveCount(0);
      await expect(page.locator("h1:visible").first()).toBeVisible();
    }
  });

  test("auth screens render single-column without app chrome", async ({
    page,
  }) => {
    await page.goto("/auth/login");
    await expect(page.getByRole("navigation")).toHaveCount(0);
    await expect(page.locator("h1:visible").first()).toBeVisible();
  });
});
