import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "./shell/AdminShell";
import { DashboardIntro } from "./sections/DashboardIntro";
import { AdminKpiRow } from "./sections/AdminKpiRow";
import { ReportLifecycleCard } from "./sections/ReportLifecycleCard";
import { NeedsAttentionCard } from "./sections/NeedsAttentionCard";
import { DailyReportHealthCard } from "./sections/DailyReportHealthCard";
import { RecentAdminActivityCard } from "./sections/RecentAdminActivityCard";
import { AdminDashboardSkeleton } from "./sections/AdminDashboardSkeleton";

/** Company Admin Dashboard — Overview (Figma AD-01, node 1182:5692 on page
 *  06 · Company Admin Experience, 1182:5690).
 *
 *  "Dashboard Content" (1182:5788): a 1144px column, 16px between blocks —
 *  intro row, KPI row, the "Core operations" 676/452 pair, and the
 *  "Bottom operations" 396/732 pair. AD-01 is the only Company Admin frame in
 *  Figma, so this page owns its whole chrome (shell:"none") via AdminShell.
 *
 *  Scope (Figma AD-SCOPE board): Company Admin ≠ Super Admin — nothing here
 *  reaches across tenants, billing, or platform configuration. */
export function AdminDashboardPage() {
  const state = useScreenState();

  return (
    <AdminShell>
      {state === "loading" ? (
        <AdminDashboardSkeleton />
      ) : (
        <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
          <DashboardIntro />
          <AdminKpiRow />
          <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start">
            <ReportLifecycleCard />
            <NeedsAttentionCard />
          </div>
          <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start">
            <DailyReportHealthCard />
            <RecentAdminActivityCard />
          </div>
        </div>
      )}
    </AdminShell>
  );
}
