import { useState } from "react";
import { EMPLOYER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "./workspace.copy";
import {
  CURRENT_FACILITY,
  FACILITIES,
  NO_RESULT_FACILITY_SEARCH,
  WORKSPACE_SUMMARY,
} from "./workspaceMock";
import { WorkspaceScreenLayout } from "./sections/WorkspaceScreenLayout";
import { WorkspaceKpiRow } from "./sections/WorkspaceKpiRow";
import { ManagerAccessCard } from "./sections/ManagerAccessCard";
import { FacilitySearchField } from "./sections/FacilitySearchField";
import { FacilityRows } from "./sections/FacilityRows";
import { AccessBeforeEntryRail } from "./sections/AccessBeforeEntryRail";
import { AccessBoundaryRail } from "./sections/AccessBoundaryRail";
import { AccessBoundaryCard } from "./sections/AccessBoundaryCard";
import { FacilityContextNote } from "./sections/FacilityContextNote";
import { WorkspaceEmptyState } from "./sections/WorkspaceEmptyState";
import {
  WorkspaceLoadingState,
  WorkspaceOfflineState,
} from "./sections/WorkspaceScreenStates";
import {
  WorkspaceButton,
  WorkspaceLinkButton,
} from "./sections/WorkspaceButtons";

/** Facility Selection — MD-02 (1213:3) on desktop, EM-02 (761:3) at 390px.
 *  Facility scope is chosen before the manager shell exists, so this route
 *  carries no sidebar and no bottom nav. Desktop: KPI quad (mint
 *  "Accessible facilities" first) → FACILITY SEARCH + three selectable rows
 *  beside the ACCESS BEFORE ENTRY rail → dark "Continue with {facility}".
 *  Mobile: mint "Manager access" card → search → stacked facility cards →
 *  "Facility context" note → full-width CTA.
 *  States: ?state=no-results (MD-02C) · loading · offline. Typing a search
 *  with no match reaches the same MD-02C surface interactively. */
export function FacilitySelectionPage() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();
  const state = useScreenState();
  /* MD-02C / EM-02C paint the field with a keyword that matches nothing, so
     the static ?state=no-results surface opens with the same query typed. */
  const [search, setSearch] = useState(
    state === "no-results" ? NO_RESULT_FACILITY_SEARCH : "",
  );
  const [selectedId, setSelectedId] = useState(CURRENT_FACILITY.id);

  const query = search.trim().toLowerCase();
  const matches = query
    ? FACILITIES.filter((facility) =>
        `${facility.name} ${facility.shortName}`.toLowerCase().includes(query),
      )
    : FACILITIES;
  const noResults = matches.length === 0;

  const selected =
    FACILITIES.find((facility) => facility.id === selectedId) ??
    CURRENT_FACILITY;

  const kpis = [
    {
      key: "facilities",
      label: c.facility.kpiAccessibleFacilities,
      value: String(FACILITIES.length),
      caption: fill(c.facility.kpiAccessibleFacilitiesCaption, {
        org: EMPLOYER.name,
      }),
      tone: "mint" as const,
    },
    {
      key: "role",
      label: c.facility.kpiCurrentRole,
      value: common.manager.facilityManager,
      caption: c.facility.kpiCurrentRoleCaption,
    },
    {
      key: "open-work",
      label: c.facility.kpiOpenWork,
      value: fill(c.facility.kpiOpenWorkValue, {
        count: WORKSPACE_SUMMARY.openWork,
      }),
      caption: fill(c.facility.kpiOpenWorkCaption, {
        followUp: WORKSPACE_SUMMARY.followUp,
        unread: WORKSPACE_SUMMARY.unread,
        admin: WORKSPACE_SUMMARY.admin,
      }),
    },
    {
      key: "last-used",
      label: c.facility.kpiLastUsed,
      value: CURRENT_FACILITY.shortName,
      caption: fill(c.facility.kpiLastUsedCaption, {
        time: WORKSPACE_SUMMARY.lastUsedTime,
      }),
    },
  ];

  return (
    <WorkspaceScreenLayout
      title={c.facility.title}
      /* MD-02C / EM-02C rewrite the scope line while the search matches
         nothing — the default line counts facilities that are not listed. */
      subtitle={noResults ? c.facility.emptySubtitle : c.facility.subtitle}
      mobileTitle={c.facility.mobileTitle}
      mobileSubtitle={
        noResults
          ? c.facility.mobileEmptySubtitle
          : fill(c.facility.mobileSubtitle, {
              workers: WORKSPACE_SUMMARY.totalWorkers,
              facilities: FACILITIES.length,
            })
      }
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
          <div className="mt-[24px] lg:mt-[36px]">
            <ManagerAccessCard />
            <div className="hidden lg:block">
              <WorkspaceKpiRow kpis={kpis} />
            </div>
          </div>

          <div className="mt-[12px] lg:mt-[22px] lg:grid lg:grid-cols-[700px_330px] lg:items-start lg:gap-[30px]">
            <div>
              <FacilitySearchField value={search} onChange={setSearch} />

              <p className="mt-[18px] text-[10px] font-semibold text-[#66736b] uppercase lg:hidden">
                {c.facility.facilitiesLabel}
              </p>

              <div
                className={`mt-[13px] ${noResults ? "lg:mt-[28px]" : "lg:mt-[18px]"}`}
              >
                {noResults ? (
                  <WorkspaceEmptyState
                    variant="facility"
                    title={c.facility.emptyTitle}
                    body={c.facility.emptyBody}
                    desktopBody={fill(c.facility.emptyBodyDesktop, {
                      query: search.trim(),
                    })}
                    actions={
                      <>
                        {/* EM-02C (949:4) closes the card on one full-width
                            dark "Clear search" and nothing else — its "Back
                            to facilities" link sits outside the card, below
                            the peach boundary note. MD-02C keeps the pair
                            side by side inside the card. */}
                        <WorkspaceButton
                          tone="dark"
                          onClick={() => setSearch("")}
                        >
                          {c.facility.clearSearch}
                        </WorkspaceButton>
                        <WorkspaceLinkButton
                          to="/manager/facility"
                          className="hidden lg:flex"
                        >
                          {c.facility.backToFacilities}
                        </WorkspaceLinkButton>
                      </>
                    }
                  />
                ) : (
                  <FacilityRows
                    facilities={matches}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />
                )}
              </div>

              {/* MD-02C drops the switch helper — no facility is selectable
                  while the search matches nothing. */}
              {!noResults && (
                <p className="hidden text-[10px] text-[#66736b] lg:mt-[55px] lg:block">
                  {c.facility.switchNote}
                </p>
              )}
            </div>

            <div className="mt-[25px] lg:mt-[21px]">
              {/* MD-02C (1213:213) swaps the 410px ACCESS BEFORE ENTRY panel
                  for the 374px ACCESS BOUNDARY rail. */}
              <div className="hidden lg:block">
                {noResults ? <AccessBoundaryRail /> : <AccessBeforeEntryRail />}
              </div>

              {/* EM-02C / MD-02C drop the facility-context note and the
                  Continue CTA while the search matches nothing — there is
                  no facility to continue into — and state the scope rule in
                  the peach "Access boundary" card instead. */}
              {noResults ? (
                <>
                  <AccessBoundaryCard />
                  <WorkspaceLinkButton
                    to="/manager/facility"
                    mobileText
                    className="mt-[18px] w-full lg:hidden"
                  >
                    {c.facility.backToFacilities}
                  </WorkspaceLinkButton>
                </>
              ) : (
                <>
                  <FacilityContextNote />

                  <WorkspaceLinkButton
                    to="/manager"
                    tone="dark"
                    className="mt-[24px] min-h-[46px] w-full lg:mt-[24px] lg:min-h-[42px]"
                  >
                    <span className="lg:hidden">
                      {c.facility.mobileContinue}
                    </span>
                    <span className="hidden lg:inline">
                      {fill(c.facility.continueWith, {
                        facility: selected.shortName,
                      })}
                    </span>
                  </WorkspaceLinkButton>

                  <p className="mt-[16px] text-center text-[10px] text-[#66736b] lg:hidden">
                    {c.facility.switchNote}
                  </p>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </WorkspaceScreenLayout>
  );
}
