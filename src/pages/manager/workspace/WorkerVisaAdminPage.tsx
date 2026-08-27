import { useState } from "react";
import { useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "./workspace.copy";
import { findWorker } from "./workspaceMock";
import { WorkspacePageHeader } from "./sections/WorkspacePageHeader";
import { VisaWorkerHeader } from "./sections/VisaWorkerHeader";
import { WorkspaceKpiRow } from "./sections/WorkspaceKpiRow";
import { VisaFactRows } from "./sections/VisaFactRows";
import { AdminChecklistCard } from "./sections/AdminChecklistCard";
import { AdministrativeScopeCard } from "./sections/AdministrativeScopeCard";
import { ManagerActionCard } from "./sections/ManagerActionCard";
import { WorkspaceEmptyState } from "./sections/WorkspaceEmptyState";
import {
  WorkspaceButton,
  WorkspaceLinkButton,
} from "./sections/WorkspaceButtons";
import {
  WorkspaceLoadingState,
  WorkspaceOfflineState,
} from "./sections/WorkspaceScreenStates";

/** Visa / Administrative Detail — MD-05A (1213:532) · EM-05A (761:953).
 *  Administrative employment context only: the mint worker header, the
 *  RESIDENCE STATUS / VALID UNTIL / DOCUMENT STATUS / RESPONSIBLE PIC KPI
 *  row, the EM-05A key-value facts, the ADMIN CHECKLIST with its checked and
 *  open items, the cream manager-action card, the ADMINISTRATIVE SCOPE rail
 *  and the "Create Follow-up" CTA that hands off to the follow-up workflow.
 *  States: ?state=loading · offline; an unknown :workerId renders the
 *  "Worker not found" recovery card. */
export function WorkerVisaAdminPage() {
  const { workerId } = useParams();
  const c = useSectionCopy(WORKSPACE_COPY);
  const { language } = useLanguage();
  const state = useScreenState();
  const [created, setCreated] = useState(false);
  const worker = findWorker(workerId);

  if (!worker) {
    return (
      <div className="max-w-[1060px]">
        <WorkspacePageHeader title={c.visa.title} subtitle={c.visa.subtitle} />
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
      key: "residence",
      label: c.visa.kpiResidenceStatus,
      value: worker.residenceStatus,
      caption: c.visa.kpiResidenceStatusCaption,
      tone: "mint" as const,
    },
    {
      key: "valid-until",
      label: c.visa.kpiValidUntil,
      value: formatDisplayDate(worker.visaValidUntilShort, language),
      caption: c.visa.kpiValidUntilCaption,
      tone:
        worker.visaDaysRemaining !== null
          ? ("attention" as const)
          : ("plain" as const),
    },
    {
      key: "document",
      label: c.visa.kpiDocumentStatus,
      value: c.visa.valueOnFile,
      caption: c.visa.kpiDocumentStatusCaption,
    },
    {
      key: "pic",
      label: c.visa.kpiResponsiblePic,
      value: c.visa.valueFacilityPic,
      caption: c.visa.kpiResponsiblePicCaption,
    },
  ];

  return (
    <div className="max-w-[1060px]">
      <WorkspacePageHeader
        title={c.visa.title}
        subtitle={c.visa.subtitle}
        mobileTitle={c.visa.mobileTitle}
        mobileSubtitle={fill(c.visa.mobileSubtitle, { worker: worker.name })}
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
            <VisaWorkerHeader worker={worker} />
          </div>

          <div className="mt-[16px] lg:mt-[28px]">
            <WorkspaceKpiRow kpis={kpis} />
          </div>

          <div className="mt-[16px] lg:mt-[30px] lg:grid lg:grid-cols-[650px_380px] lg:items-start lg:gap-[30px]">
            {/* MD-05A shows the checklist alone beside the scope rail; the
                key-value facts and the cream manager-action card are the
                390px surface (EM-05A). */}
            <div className="space-y-[14px] lg:space-y-0">
              <div className="lg:hidden">
                <VisaFactRows worker={worker} />
              </div>
              <AdminChecklistCard />
              <div className="lg:hidden">
                <ManagerActionCard />
              </div>
            </div>

            <div className="mt-[14px] lg:mt-0">
              <AdministrativeScopeCard
                action={
                  <>
                    <WorkspaceButton
                      tone="dark"
                      onClick={() => setCreated(true)}
                      className="w-full lg:h-[40px] lg:w-[170px]"
                    >
                      {c.visa.createFollowUp}
                    </WorkspaceButton>
                    {created && (
                      <p
                        role="status"
                        className="mt-[10px] text-[11px] font-semibold text-[#0c5941]"
                      >
                        {c.visa.followUpToast}
                      </p>
                    )}
                  </>
                }
              />
            </div>
          </div>

          {/* EM-05A closes on a plain "Back to Worker Detail" text link. */}
          <WorkspaceLinkButton
            to={`/manager/workers/${worker.id}`}
            mobileText
            className="mt-[10px] w-full lg:mt-[38px] lg:w-[210px]"
          >
            {c.visa.backToWorkerDetail}
          </WorkspaceLinkButton>
        </>
      )}
    </div>
  );
}
