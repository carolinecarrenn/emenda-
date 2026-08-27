import type { ReactNode } from "react";
import { EmendaIdCard } from "@/components/marketing/mockups/EmendaIdCard";
import { WorkerHomeCard } from "@/components/marketing/mockups/WorkerHomeCard";
import { DailyReportCard } from "@/components/marketing/mockups/DailyReportCard";
import { NotificationsCard } from "@/components/marketing/mockups/NotificationsCard";
import { AssistantConversation } from "@/components/marketing/mockups/AssistantConversation";
import { ReportReviewCard } from "@/components/marketing/mockups/ReportReviewCard";
import { LifecycleTrail } from "@/components/marketing/mockups/LifecycleTrail";

/**
 * One product still per lifecycle stage. Six of the seven show platform
 * surfaces rather than conversation — the assistant appears once, at stage
 * four, which is the proportion the page is arguing for.
 */
export function JourneyStepVisual({ index }: { index: number }) {
  const visuals: ReactNode[] = [
    <EmendaIdCard key="join" />,
    <WorkerHomeCard key="connect" />,
    <div key="work" className="space-y-4">
      <DailyReportCard />
      <NotificationsCard />
    </div>,
    <AssistantConversation key="support" />,
    <ReportReviewCard key="action" />,
    <LifecycleTrail key="follow-up" />,
    <LifecycleTrail key="resolve" resolved />,
  ];

  return (
    <div className="rounded-[22px] border border-lp-line bg-lp-bg p-5">
      {visuals[index]}
    </div>
  );
}
