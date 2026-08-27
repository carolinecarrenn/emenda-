import { useState } from "react";
import { EMPLOYER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "./workspace.copy";
import {
  CURRENT_FACILITY,
  FACILITIES,
  WORKSPACE_SUMMARY,
} from "./workspaceMock";
import { WorkspaceScreenLayout } from "./sections/WorkspaceScreenLayout";
import { WorkspaceKpiRow } from "./sections/WorkspaceKpiRow";
import { CurrentFacilityCard } from "./sections/CurrentFacilityCard";
import { SwitchFacilityRows } from "./sections/SwitchFacilityRows";
import { SwitchRulesRail } from "./sections/SwitchRulesRail";
import { PendingWorkWarningCard } from "./sections/PendingWorkWarningCard";
import { WorkspaceLinkButton } from "./sections/WorkspaceButtons";
import {
  WorkspaceLoadingState,
  WorkspaceOfflineState,
} from "./sections/WorkspaceScreenStates";

/** Switch Facility — MD-02B (1213:114) · EM-02B (761:1125). In-session
 *  facility change without logging out: the current-facility / open-work /
 *  accessible-facilities KPI row (mint card at 390px), the selectable
 *  facility list with CURRENT / SELECTED / AVAILABLE labels, the peach
 *  "Pending work stays bound" warning, the SWITCH RULES rail on desktop, and
 *  the "Switch to {facility}" + Cancel pair.
 *  States: ?state=loading · offline. */
export function SwitchFacilityPage() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();
  const state = useScreenState();

  /* MD-02B lands with the last alternative (Support Center) preselected and
     the row above it left AVAILABLE. */
  const alternatives = FACILITIES.filter((facility) => !facility.isCurrent);
  const defaultTarget = alternatives.at(-1) ?? CURRENT_FACILITY;
  const [selectedId, setSelectedId] = useState(defaultTarget.id);

  const selected =
    FACILITIES.find((facility) => facility.id === selectedId) ?? defaultTarget;

  const kpis = [
    {
      key: "current",
      label: c.switchFacility.kpiCurrentFacility,
      value: CURRENT_FACILITY.shortName,
      caption: fill(c.switchFacility.kpiCurrentFacilityCaption, {
        workers: CURRENT_FACILITY.workers,
        followUp: CURRENT_FACILITY.followUp,
      }),
      tone: "mint" as const,
    },
    {
      key: "open-work",
      label: c.switchFacility.kpiOpenWork,
      value: fill(c.switchFacility.kpiOpenWorkValue, {
        count: WORKSPACE_SUMMARY.openWork,
      }),
      caption: c.switchFacility.kpiOpenWorkCaption,
    },
    {
      key: "facilities",
      label: c.switchFacility.kpiAccessibleFacilities,
      value: String(FACILITIES.length),
      caption: fill(c.switchFacility.kpiAccessibleFacilitiesCaption, {
        org: EMPLOYER.name,
      }),
    },
  ];

  return (
    <WorkspaceScreenLayout
      title={c.switchFacility.title}
      subtitle={c.switchFacility.subtitle}
      mobileSubtitle={c.switchFacility.mobileSubtitle}
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
          <div className="mt-[18px] lg:mt-[36px]">
            <CurrentFacilityCard />
            <div className="hidden lg:block">
              <WorkspaceKpiRow kpis={kpis} columns={3} />
            </div>
          </div>

          <div className="mt-[20px] lg:mt-[30px] lg:grid lg:grid-cols-[760px_270px] lg:items-start lg:gap-[30px]">
            <SwitchFacilityRows
              facilities={FACILITIES}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />

            <div className="mt-[16px] lg:mt-[34px]">
              <SwitchRulesRail />
              {/* EM-02B states the boundary again above the CTA; MD-02B
                  carries it as the first SWITCH RULES paragraph instead. */}
              <div className="mt-[14px] lg:hidden">
                <PendingWorkWarningCard />
              </div>
              <WorkspaceLinkButton
                to="/manager"
                tone="dark"
                className="mt-[14px] w-full lg:mt-[24px]"
              >
                {fill(c.switchFacility.switchTo, {
                  facility: selected.shortName,
                })}
              </WorkspaceLinkButton>
              {/* EM-02B draws Cancel as a plain text link under the CTA. */}
              <WorkspaceLinkButton
                to="/manager/facility/context"
                mobileText
                className="mt-[6px] w-full lg:mt-[12px]"
              >
                {common.action.cancel}
              </WorkspaceLinkButton>
            </div>
          </div>
        </>
      )}
    </WorkspaceScreenLayout>
  );
}
