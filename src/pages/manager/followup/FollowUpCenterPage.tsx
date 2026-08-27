import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "./followup.copy";
import {
  DEFAULT_DESKTOP_SIGNAL_ID,
  DEFAULT_SIGNAL_ID,
  FOLLOW_UP_KPI_VALUES,
  findSignal,
  signalsForSurface,
} from "./followupMock";
import { FollowUpPageHeader } from "./sections/FollowUpPageHeader";
import { FollowUpKpiRow } from "./sections/FollowUpKpiRow";
import { FollowUpFilterChips } from "./sections/FollowUpFilterChips";
import { FollowUpChipRow } from "./sections/FollowUpChipRow";
import { FollowUpQueueCard } from "./sections/FollowUpQueueCard";
import { FollowUpQueueCards } from "./sections/FollowUpQueueCards";
import { SelectedSignalRail } from "./sections/SelectedSignalRail";
import { HumanReviewCard } from "./sections/HumanReviewCard";
import {
  FollowUpFooterNote,
  FollowUpPrivacyBand,
} from "./sections/FollowUpPrivacyBand";
import {
  FollowUpEmptyState,
  FollowUpLoadingState,
  FollowUpOfflineState,
} from "./sections/FollowUpScreenStates";
import { FollowUpSentView } from "./sections/FollowUpSentView";
import { FollowUpNotSentView } from "./sections/FollowUpNotSentView";
import { filterSignals, type FollowUpFilter } from "./sections/followupFilters";

/** Follow-up Center (Figma MD-09, node 1226:1236 · EM-09, node 761:1588).
 *  Desktop: KPI quad → filter pills → FOLLOW-UP QUEUE card + SELECTED SIGNAL
 *  rail → privacy band. Mobile: count chips → stacked queue cards → the mint
 *  "Human review only" card → footer line.
 *  States: ?state=loading · empty · offline · sent (EM-10) · not-sent (EM-09C). */
export function FollowUpCenterPage() {
  const [filter, setFilter] = useState<FollowUpFilter>("Pending");
  const [selectedId, setSelectedId] = useState(DEFAULT_DESKTOP_SIGNAL_ID);
  const common = useCommonCopy();
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const state = useScreenState();

  const defaultSignal = findSignal(DEFAULT_SIGNAL_ID);

  if (state === "sent" && defaultSignal) {
    return <FollowUpSentView signal={defaultSignal} />;
  }
  if (state === "not-sent" && defaultSignal) {
    return <FollowUpNotSentView signal={defaultSignal} />;
  }

  const desktopSignals = filterSignals(signalsForSurface("desktop"), filter);
  const mobileSignals = filterSignals(signalsForSurface("mobile"), filter);
  const selected =
    findSignal(selectedId) ?? desktopSignals[0] ?? findSignal(DEFAULT_SIGNAL_ID);

  return (
    <div className="max-w-[1060px]">
      <FollowUpPageHeader
        tone="center"
        title={common.managerNav.followUp}
        desktopTitle={c.center.titleDesktop}
        subtitle={c.center.subtitleMobile}
        desktopSubtitle={c.center.subtitleDesktop}
      />

      {state === "loading" ? (
        <div className="mt-[20px]">
          <FollowUpLoadingState />
        </div>
      ) : state === "offline" ? (
        <div className="mt-[20px]">
          <FollowUpOfflineState />
        </div>
      ) : (
        <>
          <div className="mt-[6px] lg:mt-[25px]">
            <FollowUpKpiRow kpis={c.center.kpis} values={FOLLOW_UP_KPI_VALUES} />
          </div>
          <div className="mt-[22px] lg:mt-[20px]">
            <FollowUpChipRow filter={filter} onFilter={setFilter} />
            <FollowUpFilterChips filter={filter} onFilter={setFilter} />
          </div>

          {state === "empty" ? (
            <div className="mt-[20px]">
              <FollowUpEmptyState
                title={c.states.emptyTitle}
                body={c.states.emptyBody}
              />
            </div>
          ) : (
            <>
              <div className="mt-[14px] lg:mt-[22px] lg:flex lg:gap-[20px]">
                <div className="lg:min-w-0 lg:flex-1">
                  <FollowUpQueueCard
                    signals={desktopSignals}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />
                  <FollowUpQueueCards signals={mobileSignals} />
                </div>
                {selected && <SelectedSignalRail signal={selected} />}
              </div>

              <div className="mt-[24px] lg:mt-[16px]">
                <HumanReviewCard />
              </div>
            </>
          )}

          <div className="mt-[16px] lg:mt-[38px]">
            <FollowUpFooterNote>{c.center.footerMobile}</FollowUpFooterNote>
            <FollowUpPrivacyBand>{c.center.footerDesktop}</FollowUpPrivacyBand>
          </div>
        </>
      )}
    </div>
  );
}
