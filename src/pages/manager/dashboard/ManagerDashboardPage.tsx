import { DashboardHeader } from "./sections/DashboardHeader";
import { KpiRow } from "./sections/KpiRow";
import { WorkerActivityCard } from "./sections/WorkerActivityCard";
import { AttentionCard } from "./sections/AttentionCard";
import { RecentCommunicationCard } from "./sections/RecentCommunicationCard";
import { PrivacyFooter } from "./sections/PrivacyFooter";

/** Manager Dashboard (Figma MD-03, node 1213:217).
 *  KPI 2×4 grid · WORKER ACTIVITY (680) + right rail (360) · privacy strip. */
export function ManagerDashboardPage() {
  return (
    <div className="max-w-[1060px]">
      <DashboardHeader />
      <div className="mt-[24px] lg:mt-[30px]">
        <KpiRow />
      </div>
      <div className="mt-[26px] grid gap-5 lg:grid-cols-[680px_1fr]">
        <WorkerActivityCard />
        <div className="flex flex-col gap-4">
          <AttentionCard />
          <RecentCommunicationCard />
        </div>
      </div>
      <div className="mt-[46px] lg:mt-[40px]">
        <PrivacyFooter />
      </div>
    </div>
  );
}
