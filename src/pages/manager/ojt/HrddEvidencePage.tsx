import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "./ojt.copy";
import { HRDD_EVIDENCE_METRICS } from "./ojtMock";
import { OjtPageHeader } from "./sections/OjtPageHeader";
import { OjtStatTiles } from "./sections/OjtStatTiles";
import { HrddEvidenceRecords } from "./sections/HrddEvidenceRecords";
import { HrddPrivacyCard } from "./sections/HrddPrivacyCard";
import { OjtActionRow, OjtLinkButton } from "./sections/OjtButtons";
import { OjtLoadingState, OjtOfflineState } from "./sections/OjtScreenStates";
import { OJT_RAIL_ALIGN } from "./sections/OjtSectionHeading";

/** HRDD Evidence Drill-down (Figma EM-15A, node 761:2771) — traceability
 *  from the EM-15 summary metrics down to individual permitted records.
 *  2x2 mint tiles → EVIDENCE RECORDS rows with their status chips (the
 *  follow-up row awaiting human review sits on the pale-yellow fill) →
 *  mint PRIVACY BOUNDARY card → Back to HRDD / Open Audit Export.
 *  Desktop derives from this mobile IA inside the MD shell (manager desktop
 *  section 1192:956 is a Figma placeholder): the record list keeps the main
 *  column and the privacy boundary moves into a 320px rail.
 *  States: ?state=loading · ?state=offline. */
export function HrddEvidencePage() {
  const common = useCommonCopy();
  const c = useSectionCopy(OJT_COPY);
  const state = useScreenState();

  const tiles = [
    {
      label: c.evidence.tileWorkerQuestions,
      value: HRDD_EVIDENCE_METRICS.workerQuestions,
    },
    {
      label: c.evidence.tileManagerResponse,
      value: HRDD_EVIDENCE_METRICS.managerResponse,
    },
    {
      label: c.evidence.tileTwoWay,
      value: HRDD_EVIDENCE_METRICS.twoWayEvidence,
    },
    { label: c.evidence.tileFollowUp, value: HRDD_EVIDENCE_METRICS.followUp },
  ];

  return (
    <div className="max-w-[1060px]">
      <OjtPageHeader
        variant="sub"
        backTo="/manager/human-rights-dd"
        backLabel={common.managerNav.humanRightsDd}
        title={c.evidence.title}
        subtitle={c.evidence.subtitle}
      />

      {state === "loading" ? (
        <OjtLoadingState />
      ) : state === "offline" ? (
        <OjtOfflineState />
      ) : (
        <>
          <div className="mt-[22px]">
            <OjtStatTiles tiles={tiles} scale="metric" />
          </div>

          <div className="mt-[22px] lg:mt-[26px] lg:flex lg:items-start lg:gap-[20px]">
            <div className="lg:min-w-0 lg:flex-1">
              <HrddEvidenceRecords />
            </div>
            <div
              className={`mt-[20px] lg:w-[320px] lg:shrink-0 ${OJT_RAIL_ALIGN}`}
            >
              <HrddPrivacyCard />
            </div>
          </div>

          <div className="mt-[16px]">
            <OjtActionRow>
              <OjtLinkButton to="/manager/human-rights-dd">
                {c.evidence.backToHrdd}
              </OjtLinkButton>
              <OjtLinkButton to="/manager/audit-export" variant="primary">
                {c.evidence.openAuditExport}
              </OjtLinkButton>
            </OjtActionRow>
          </div>
        </>
      )}
    </div>
  );
}
