import { useState } from "react";
import { Link } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "./workspace.copy";
import {
  NO_RESULT_ROSTER_SEARCH,
  ROSTER,
  ROSTER_FILTER_COUNTS,
} from "./workspaceMock";
import { WorkspacePageHeader } from "./sections/WorkspacePageHeader";
import { RosterFilterBar } from "./sections/RosterFilterBar";
import { RosterTable } from "./sections/RosterTable";
import { RosterCards } from "./sections/RosterCards";
import { WorkspaceEmptyState } from "./sections/WorkspaceEmptyState";
import { WorkspacePrivacyBanner } from "./sections/WorkspacePrivacyBanner";
import {
  WorkspaceButton,
  WorkspaceLinkButton,
} from "./sections/WorkspaceButtons";
import {
  WorkspaceLoadingState,
  WorkspaceOfflineState,
} from "./sections/WorkspaceScreenStates";
import { filterRoster, type RosterFilter } from "./sections/rosterFilters";

/** Workers roster — MD-04 (1213:294) · EM-04 (761:142). Desktop is the white
 *  table card (WORKER / ROLE / CONNECTION / REPORTS / FOLLOW-UP / VISA-ADMIN
 *  / ACTION) under the search field, the five counted filter chips and the
 *  dark "Invite worker" button; the 390px surface swaps the table for mint /
 *  peach worker cards. Both close on the worker-owned identity banner.
 *  States: ?state=no-results (MD-04A) · loading · offline. A search or
 *  filter with no match reaches the same MD-04A surface interactively. */
export function WorkerRosterPage() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const state = useScreenState();
  const [filter, setFilter] = useState<RosterFilter>("all");
  /* MD-04A (1213:399) / EM-04A (932:5) show the search field carrying the
     keyword that matched nothing, so the static state opens with it typed. */
  const [search, setSearch] = useState(
    state === "no-results" ? NO_RESULT_ROSTER_SEARCH : "",
  );

  const workers = filterRoster(ROSTER, filter, search);
  const noResults = workers.length === 0;

  const clearFilters = () => {
    setFilter("all");
    setSearch("");
  };

  return (
    <div className="max-w-[1060px]">
      <div className="flex items-end justify-between gap-[16px]">
        <WorkspacePageHeader
          title={c.roster.title}
          subtitle={noResults ? c.roster.emptySubtitle : c.roster.subtitle}
          mobileSubtitle={
            noResults
              ? c.roster.mobileEmptySubtitle
              : fill(c.roster.mobileSubtitle, {
                  workers: ROSTER_FILTER_COUNTS.all,
                })
          }
        />
        {/* MD-04 (1213:311/312) hangs the dark invite action off the page
            header, right-aligned on the 1060px column; MD-04A drops it
            entirely, so the no-results surface carries no invite affordance.
            EM-04 states it as the mint pill on the WORKERS label row. */}
        {!noResults && (
          <Link
            to="/manager/workers/invite"
            className="hidden h-[40px] w-[151px] shrink-0 items-center justify-center rounded-[10px] border border-[#0c5941] bg-[#0c5941] text-[12px] font-semibold text-white hover:border-brand-deep hover:bg-brand-deep lg:flex"
          >
            {c.roster.inviteWorker}
          </Link>
        )}
      </div>

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
            <RosterFilterBar
              search={search}
              onSearch={setSearch}
              filter={filter}
              onFilter={setFilter}
            />
          </div>

          {/* EM-04 (761:160/161) sets a bold WORKERS label over the card
              list with the mint "Invite worker" pill on its right; the
              desktop table needs neither. */}
          {/* EM-04A (932:5) keeps the WORKERS label over the empty card and
              drops only the invite pill. */}
          <div className="mt-[18px] flex items-center justify-between gap-[12px] lg:hidden">
            <p className="text-[13px] font-bold text-[#083d2d]">
              {c.roster.mobileWorkersLabel}
            </p>
            {!noResults && (
              <Link
                to="/manager/workers/invite"
                className="flex h-[30px] shrink-0 items-center rounded-full bg-[#e3f0e8] px-[16px] text-[11px] font-semibold text-[#0b6b57]"
              >
                {c.roster.inviteWorker}
              </Link>
            )}
          </div>

          {/* MD-04A opens a 40px gutter under the controls before the empty
              card; MD-04 sets the table 24px down. */}
          <div
            className={`mt-[10px] ${noResults ? "lg:mt-[40px]" : "lg:mt-[24px]"}`}
          >
            {noResults ? (
              <WorkspaceEmptyState
                title={c.roster.emptyTitle}
                body={fill(c.roster.emptyBody, {
                  facility: EMPLOYER.facility,
                })}
                actions={
                  <>
                    <WorkspaceButton tone="dark" onClick={clearFilters}>
                      {c.roster.clearFilters}
                    </WorkspaceButton>
                    <WorkspaceLinkButton to="/manager/workers" mobileText>
                      {c.roster.backToRoster}
                    </WorkspaceLinkButton>
                  </>
                }
              />
            ) : (
              <>
                <RosterTable workers={workers} />
                <RosterCards workers={workers} />
              </>
            )}
          </div>

          {/* MD-04A swaps the roster banner for the no-results boundary line;
              MD-04 / EM-04 keep the worker-owned identity statement. */}
          {/* MD-04A (1213:415) pins the privacy boundary 170px below the
              410px empty card; MD-04 keeps it tight under the table. */}
          <div
            className={`mt-[16px] ${noResults ? "lg:mt-[170px]" : "lg:mt-[24px]"}`}
          >
            {/* EM-04A closes on a centred grey line, not the mint strip. */}
            {noResults && (
              <p className="px-[10px] text-center text-[11px] leading-[17px] text-[#66736b] lg:hidden">
                {c.roster.mobileEmptyFooter}
              </p>
            )}
            <div className={noResults ? "hidden lg:block" : ""}>
            <WorkspacePrivacyBanner>
              {noResults ? (
                c.roster.emptyBanner
              ) : (
                <>
                  <span className="lg:hidden">
                    {c.roster.mobilePrivacyBannerLines.map((line) => (
                      <span key={line} className="mt-[10px] block first:mt-0">
                        {fill(line, { count: ROSTER_FILTER_COUNTS.all })}
                      </span>
                    ))}
                  </span>
                  <span className="hidden lg:inline">
                    {c.roster.privacyBanner}
                  </span>
                </>
              )}
            </WorkspacePrivacyBanner>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
