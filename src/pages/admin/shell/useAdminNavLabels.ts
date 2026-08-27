import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import type { AdminPrimaryNavKey, AdminUtilityNavKey } from "./adminNav";

/* Dashboard / Reports / Follow-up / Log out already exist in the shared
   vocabulary (useCommonCopy) — the admin sidebar reuses them so the three
   shells stay terminologically identical; the admin-only items come from
   admin.copy.ts. */
export function useAdminNavLabels(): Record<
  AdminPrimaryNavKey | AdminUtilityNavKey,
  string
> {
  const common = useCommonCopy();
  const c = useSectionCopy(ADMIN_COPY);

  return {
    dashboard: common.managerNav.dashboard,
    employees: c.nav.employees,
    teamsManagers: c.nav.teamsManagers,
    reports: common.managerNav.reports,
    followUp: common.managerNav.followUp,
    dailyReports: c.nav.dailyReports,
    rewardsCoin: c.nav.rewardsCoin,
    activityLog: c.nav.activityLog,
    companySettings: c.nav.companySettings,
    logOut: common.nav.logOut,
  };
}
