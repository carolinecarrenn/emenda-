import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "./workspace.copy";
import { CURRENT_FACILITY, WORKSPACE_SUMMARY } from "./workspaceMock";
import { WorkspaceScreenLayout } from "./sections/WorkspaceScreenLayout";
import { FacilityContextHero } from "./sections/FacilityContextHero";
import { CurrentWorkspaceBanner } from "./sections/CurrentWorkspaceBanner";
import { WorkspaceKpiRow } from "./sections/WorkspaceKpiRow";
import { OperationalScopeCard } from "./sections/OperationalScopeCard";
import { AvailableModulesCard } from "./sections/AvailableModulesCard";
import { FacilityContextRuleCard } from "./sections/FacilityContextRuleCard";
import { AccessPrivacyCard } from "./sections/AccessPrivacyCard";
import { WorkspaceLinkButton } from "./sections/WorkspaceButtons";
import {
  WorkspaceLoadingState,
  WorkspaceOfflineState,
} from "./sections/WorkspaceScreenStates";

/** Organization / Facility Context — MD-02A (1213:61) · EM-02A (761:38).
 *  The scope-confirmation interstitial between sign-in and the dashboard:
 *  the workspace identity (dark-green hero at 390px, mint CURRENT WORKSPACE
 *  banner on desktop), the OPERATIONAL SCOPE 2x2 stat tiles, the available
 *  module map, the mint facility-context rule and the ACCESS & PRIVACY card,
 *  closing on "Continue to Dashboard" + "Change facility".
 *  States: ?state=loading · offline. */
export function FacilityContextPage() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const state = useScreenState();

  const kpis = [
    {
      key: "workers",
      label: c.context.kpiWorkers,
      value: String(CURRENT_FACILITY.workers),
      caption: c.context.kpiWorkersCaption,
    },
    {
      key: "reports",
      label: c.context.kpiReports,
      value: `${CURRENT_FACILITY.reportsPct}%`,
      caption: c.context.kpiReportsCaption,
    },
    {
      key: "follow-up",
      /* EM-02A prints the FOLLOW-UP tile as "4 open"; MD-02A prints "4". */
      label: c.context.kpiFollowUp,
      value: String(CURRENT_FACILITY.followUp),
      mobileValue: fill(c.context.mobileKpiFollowUpValue, {
        count: CURRENT_FACILITY.followUp,
      }),
      caption: c.context.kpiFollowUpCaption,
    },
    {
      key: "unread-admin",
      label: c.context.kpiUnreadAdmin,
      value: `${WORKSPACE_SUMMARY.unread} / ${WORKSPACE_SUMMARY.admin}`,
      caption: c.context.kpiUnreadAdminCaption,
    },
  ];

  return (
    <WorkspaceScreenLayout
      title={c.context.title}
      subtitle={c.context.subtitle}
      mobileTitle={c.context.mobileTitle}
      mobileSubtitle={c.context.mobileSubtitle}
    >
      {state === "loading" ? (
        <div className="mt-[22px]">
          <WorkspaceLoadingState />
        </div>
      ) : state === "offline" ? (
        <div className="mt-[22px]">
          <WorkspaceOfflineState />
        </div>
      ) : (
        <>
          <div className="mt-[18px] lg:mt-[31px]">
            <FacilityContextHero />
            <CurrentWorkspaceBanner />
          </div>

          {/* EM-02A states OPERATIONAL SCOPE as a micro-label over the 2x2
              tiles and drops the MD-02A tile captions; the scope detail card
              belongs to the desktop column. */}
          <div className="mt-[16px] lg:mt-[26px]">
            <p className="text-[10px] font-semibold tracking-[0.06em] text-[#66736b] uppercase lg:hidden">
              {c.context.operationalScope}
            </p>
            <div className="mt-[10px] lg:mt-0">
              <WorkspaceKpiRow kpis={kpis} mobileCaption={false} />
            </div>
          </div>

          <div className="mt-[18px] lg:mt-[30px] lg:grid lg:grid-cols-[640px_396px] lg:items-start lg:gap-[24px]">
            {/* MD-02A carries only the two scope cards; the module map and
                the mint context rule are EM-02A surfaces. */}
            <div>
              <div className="hidden lg:block">
                <OperationalScopeCard />
              </div>
              <div className="lg:hidden">
                <AvailableModulesCard />
              </div>
            </div>
            {/* EM-02A sets the mint rule above the peach privacy card. */}
            <div className="mt-[16px] flex flex-col gap-[14px] lg:mt-0">
              <div className="lg:hidden">
                <FacilityContextRuleCard />
              </div>
              <AccessPrivacyCard />
            </div>
          </div>

          <div className="mt-[18px] flex flex-col gap-[4px] lg:mt-[38px] lg:flex-row lg:items-center lg:gap-[20px]">
            <WorkspaceLinkButton
              to="/manager"
              tone="dark"
              className="w-full lg:order-2 lg:w-[360px]"
            >
              {c.context.continueToDashboard}
            </WorkspaceLinkButton>
            {/* EM-02A draws "Change facility" as a plain text link. */}
            <WorkspaceLinkButton
              to="/manager/facility/switch"
              mobileText
              className="w-full lg:order-1 lg:w-[210px]"
            >
              {c.context.changeFacility}
            </WorkspaceLinkButton>
          </div>
        </>
      )}
    </WorkspaceScreenLayout>
  );
}
