import { useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "./workspace.copy";
import { findWorker } from "./workspaceMock";
import { WorkspacePageHeader } from "./sections/WorkspacePageHeader";
import { WorkerHeroBanner } from "./sections/WorkerHeroBanner";
import { WorkerActionPills } from "./sections/WorkerActionPills";
import { WorkspaceKpiRow } from "./sections/WorkspaceKpiRow";
import { TodaySummaryCard } from "./sections/TodaySummaryCard";
import { WorkAdministrationCard } from "./sections/WorkAdministrationCard";
import { EmployerAccessCard } from "./sections/EmployerAccessCard";
import { WorkspacePrivacyBanner } from "./sections/WorkspacePrivacyBanner";
import { WorkspaceEmptyState } from "./sections/WorkspaceEmptyState";
import { WorkspaceLinkButton } from "./sections/WorkspaceButtons";
import { useWorkerLabels } from "./sections/workerLabels";
import {
  WorkspaceLoadingState,
  WorkspaceOfflineState,
} from "./sections/WorkspaceScreenStates";

/** Worker Detail — MD-05 (1213:470) · EM-05 (761:208). The mint identity
 *  hero, the Message / Follow-up / View report / Career / Work Log /
 *  Visa / Admin pill row, the DAILY REPORT / UNREAD / FOLLOW-UP / VISA-ADMIN
 *  KPI row, the TODAY SUMMARY event log beside the WORK & ADMINISTRATION
 *  facts card, and the employer-access boundary (peach card at 390px, mint
 *  strip on desktop).
 *  States: ?state=loading · offline; an unknown :workerId renders the
 *  "Worker not found" recovery card. */
export function WorkerDetailPage() {
  const { workerId } = useParams();
  const c = useSectionCopy(WORKSPACE_COPY);
  const { language } = useLanguage();
  const labels = useWorkerLabels();
  const state = useScreenState();
  const worker = findWorker(workerId);

  if (!worker) {
    return (
      <div className="max-w-[1060px]">
        <WorkspacePageHeader
          title={c.worker.title}
          subtitle={c.worker.subtitle}
          mobileSubtitle={c.worker.mobileSubtitle}
        />
        <div className="mt-[20px]">
          <WorkspaceEmptyState
            title={c.worker.notFound}
            body={c.roster.emptyBanner}
            actions={
              <WorkspaceLinkButton to="/manager/workers" mobileText>
                {c.worker.backToWorkers}
              </WorkspaceLinkButton>
            }
          />
        </div>
      </div>
    );
  }

  const kpis = [
    {
      key: "daily-report",
      label: c.worker.kpiDailyReport,
      value:
        worker.reports === "done"
          ? c.worker.valueCompleted
          : c.worker.valueMissing,
      caption: fill(c.worker.kpiDailyReportCaption, {
        time: worker.reportTime ?? "—",
      }),
      tone: worker.reports === "done" ? ("mint" as const) : ("attention" as const),
    },
    {
      key: "unread",
      label: c.worker.kpiUnread,
      value: String(worker.unread),
      caption: c.worker.kpiUnreadCaption,
      mobileTone:
        worker.unread > 0 ? ("attention" as const) : ("mint" as const),
    },
    {
      key: "follow-up",
      label: c.worker.kpiFollowUp,
      value: String(worker.followUp),
      caption: c.worker.kpiFollowUpCaption,
      mobileTone: "mint" as const,
    },
    {
      key: "visa-admin",
      label: c.worker.kpiVisaAdmin,
      value: labels.visa[worker.visaAdmin],
      caption: fill(c.worker.kpiVisaAdminCaption, {
        date: formatDisplayDate(worker.visaValidUntil, language),
      }),
      tone:
        worker.visaAdmin === "clear" ? ("plain" as const) : ("attention" as const),
      mobileTone:
        worker.visaAdmin === "clear" ? ("mint" as const) : ("attention" as const),
    },
  ];

  return (
    <div className="max-w-[1060px]">
      <WorkspacePageHeader
        title={c.worker.title}
        subtitle={c.worker.subtitle}
        mobileSubtitle={c.worker.mobileSubtitle}
      />

      {state === "loading" ? (
        <div className="mt-[20px]">
          <WorkspaceLoadingState />
        </div>
      ) : state === "offline" ? (
        <div className="mt-[20px]">
          <WorkspaceOfflineState />
        </div>
      ) : (
        <>
          <div className="mt-[18px] lg:mt-[26px]">
            <WorkerHeroBanner worker={worker} />
          </div>

          {/* MD-05 runs the pill row directly under the hero and the KPI
              quad below it; EM-05 (761:216…233) reverses the pair, so the
              2x2 tiles sit above the QUICK ACTIONS strip at 390px. */}
          <div className="mt-[14px] flex flex-col gap-[16px] lg:mt-[20px] lg:gap-[26px]">
            <div className="order-2 lg:order-1">
              <WorkerActionPills workerId={worker.id} />
            </div>
            <div className="order-1 lg:order-2">
              <WorkspaceKpiRow kpis={kpis} />
            </div>
          </div>

          <div className="mt-[16px] lg:mt-[26px] lg:grid lg:grid-cols-[560px_470px] lg:items-start lg:gap-[30px]">
            <TodaySummaryCard worker={worker} />
            <div className="mt-[14px] lg:mt-0">
              <WorkAdministrationCard worker={worker} />
            </div>
          </div>

          {/* EM-05 (761:241…243) sets Career / Work Log and Visa / Admin as
              an outline pair under the work-and-administration card; MD-05
              carries both as header pills instead. */}
          <div className="mt-[12px] flex gap-[10px] lg:hidden">
            <WorkspaceLinkButton
              to={`/manager/workers/${worker.id}/records`}
              className="flex-1"
            >
              {c.worker.actionCareerWorkLog}
            </WorkspaceLinkButton>
            <WorkspaceLinkButton
              to={`/manager/workers/${worker.id}/visa`}
              className="flex-1"
            >
              {c.worker.actionVisaAdmin}
            </WorkspaceLinkButton>
          </div>

          <div className="mt-[16px] lg:mt-[44px]">
            <EmployerAccessCard />
            <div className="hidden lg:block">
              <WorkspacePrivacyBanner>
                {c.worker.privacyBanner}
              </WorkspacePrivacyBanner>
            </div>
          </div>

        </>
      )}
    </div>
  );
}
