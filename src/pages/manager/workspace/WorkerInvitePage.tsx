import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "./workspace.copy";
import { INVITE } from "./workspaceMock";
import { WorkspacePageHeader } from "./sections/WorkspacePageHeader";
import { InviteWorkspaceBanner } from "./sections/InviteWorkspaceBanner";
import { WorkspaceKpiRow } from "./sections/WorkspaceKpiRow";
import { InviteWorkerCard } from "./sections/InviteWorkerCard";
import { ConnectionBoundaryCard } from "./sections/ConnectionBoundaryCard";
import { WorkspaceLinkButton } from "./sections/WorkspaceButtons";
import {
  WorkspaceLoadingState,
  WorkspaceOfflineState,
} from "./sections/WorkspaceScreenStates";

/** Worker Invite & Employment Connection — MD-04B (1213:418) · EM-04B
 *  (932:81). The employer side of connecting a worker: the mint workspace
 *  banner, the ACTIVE CONNECTIONS / PENDING INVITE / INVITE VALIDITY /
 *  CONNECTION SCOPE KPI row, the INVITE WORKER card with its code and the
 *  Copy / Regenerate pair, and the CONNECTION BOUNDARY rail.
 *  States: ?state=loading · offline. */
export function WorkerInvitePage() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const state = useScreenState();

  const kpis = [
    {
      key: "connections",
      label: c.invite.kpiActiveConnections,
      value: String(INVITE.activeConnections),
      caption: c.invite.kpiActiveConnectionsCaption,
      tone: "mint" as const,
    },
    {
      key: "pending",
      label: c.invite.kpiPendingInvite,
      value: String(INVITE.pendingInvite),
      caption: c.invite.kpiPendingInviteCaption,
    },
    {
      key: "validity",
      label: c.invite.kpiInviteValidity,
      value: fill(c.invite.kpiInviteValidityValue, {
        hours: INVITE.validityHours,
      }),
      caption: c.invite.kpiInviteValidityCaption,
    },
    {
      key: "scope",
      label: c.invite.kpiConnectionScope,
      value: c.invite.kpiConnectionScopeValue,
      caption: c.invite.kpiConnectionScopeCaption,
    },
  ];

  return (
    <div className="max-w-[1060px]">
      <WorkspacePageHeader
        title={c.invite.title}
        subtitle={c.invite.subtitle}
        mobileTitle={c.invite.mobileTitle}
        mobileSubtitle={c.invite.mobileSubtitle}
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
            <InviteWorkspaceBanner />
          </div>

          <div className="mt-[16px] lg:mt-[28px]">
            <WorkspaceKpiRow kpis={kpis} />
          </div>

          {/* MD-04B (1213:445/456) runs both cards to the same 366→645
              floor, so the boundary rail stretches to the invite card. */}
          <div className="mt-[16px] lg:mt-[26px] lg:grid lg:grid-cols-[650px_386px] lg:items-stretch lg:gap-[24px]">
            {/* EM-04B (932:81) sets the full "WORKER INVITE & EMPLOYMENT
                CONNECTION" name as an uppercase eyebrow above the card and
                opens the card itself on INVITE CODE; MD-04B carries the
                shorter "INVITE WORKER" heading inside the card instead. */}
            <h2 className="mb-[10px] text-[10px] font-semibold tracking-[0.04em] text-[#083d2d] uppercase lg:hidden">
              {c.invite.title}
            </h2>
            <InviteWorkerCard />
            <div className="mt-[14px] lg:mt-0">
              <ConnectionBoundaryCard />
            </div>
          </div>

          {/* EM-04B (932:81) closes on a plain "Back to workers" text link
              below the dark CTA; MD-04B keeps the 210px outline pill. */}
          <WorkspaceLinkButton
            to="/manager/workers"
            mobileText
            className="mt-[10px] w-full lg:mt-[58px] lg:w-[210px]"
          >
            {c.invite.backToWorkers}
          </WorkspaceLinkButton>
        </>
      )}
    </div>
  );
}
