import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "./ojt.copy";
import { HRDD_METRICS, HRDD_PERIOD } from "./ojtMock";
import { OjtPageHeader } from "./sections/OjtPageHeader";
import { HrddFilterChips } from "./sections/HrddFilterChips";
import { OjtStatTiles } from "./sections/OjtStatTiles";
import { HrddCoverageList } from "./sections/HrddCoverageList";
import { HrddOpenGapCard } from "./sections/HrddOpenGapCard";
import { HrddScopeCard } from "./sections/HrddScopeCard";
import { OjtActionRow, OjtLinkButton } from "./sections/OjtButtons";
import { OjtLoadingState, OjtOfflineState } from "./sections/OjtScreenStates";
import { OJT_RAIL_ALIGN } from "./sections/OjtSectionHeading";

/** Human Rights DD (Figma EM-15, node 761:2821) — the D12 evidence
 *  dashboard computed only from permitted operational records. Period +
 *  facility chips → 2x2 metric tiles with the yellow OPEN GAPS tile →
 *  EVIDENCE COVERAGE rows → yellow open-gap card → mint INCLUDED / EXCLUDED
 *  card → Evidence Drill-down / Open Audit Export.
 *  Desktop derives from this mobile IA inside the MD shell (manager desktop
 *  section 1192:956 is a Figma placeholder): tiles run 4-across and the
 *  gap + scope cards move into a 320px governance rail.
 *  States: ?state=loading · ?state=offline. */
export function HumanRightsDdPage() {
  const common = useCommonCopy();
  const c = useSectionCopy(OJT_COPY);
  const state = useScreenState();
  const [periodActive, setPeriodActive] = useState(true);
  const [facilityActive, setFacilityActive] = useState(false);

  const tiles = [
    { label: c.hrdd.tileEvidence, value: HRDD_METRICS.evidence },
    { label: c.hrdd.tileFollowUp, value: HRDD_METRICS.followUp },
    {
      label: c.hrdd.tileOpenGaps,
      value: HRDD_METRICS.openGaps,
      tone: "attention" as const,
    },
    { label: c.hrdd.tilePeriod, value: HRDD_METRICS.period },
  ];

  return (
    <div className="max-w-[1060px]">
      <OjtPageHeader
        title={common.managerNav.humanRightsDd}
        subtitle={c.hrdd.subtitle}
      />

      {state === "loading" ? (
        <OjtLoadingState />
      ) : state === "offline" ? (
        <OjtOfflineState />
      ) : (
        <>
          <div className="mt-[24px]">
            <HrddFilterChips
              period={HRDD_PERIOD}
              periodActive={periodActive}
              facilityActive={facilityActive}
              onTogglePeriod={() => setPeriodActive((value) => !value)}
              onToggleFacility={() => setFacilityActive((value) => !value)}
            />
          </div>
          <div className="mt-[14px]">
            <OjtStatTiles tiles={tiles} scale="metric" />
          </div>

          <div className="mt-[22px] lg:mt-[26px] lg:flex lg:items-start lg:gap-[20px]">
            <div className="lg:min-w-0 lg:flex-1">
              <HrddCoverageList />
            </div>
            <div
              className={`mt-[18px] space-y-[14px] lg:w-[320px] lg:shrink-0 ${OJT_RAIL_ALIGN}`}
            >
              <HrddOpenGapCard />
              <HrddScopeCard />
            </div>
          </div>

          <div className="mt-[14px]">
            <OjtActionRow>
              <OjtLinkButton to="/manager/human-rights-dd/evidence" variant="primary">
                {c.hrdd.drilldown}
              </OjtLinkButton>
              <OjtLinkButton to="/manager/audit-export">
                {c.hrdd.openAuditExport}
              </OjtLinkButton>
            </OjtActionRow>
          </div>
        </>
      )}
    </div>
  );
}
