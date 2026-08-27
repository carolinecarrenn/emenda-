import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "./followup.copy";
import {
  ALERT_KPI_VALUES,
  DEFAULT_SIGNAL_ID,
  findSignal,
  MANAGER_ALERTS,
  MOBILE_ALERTS,
} from "./followupMock";
import { FollowUpPageHeader } from "./sections/FollowUpPageHeader";
import { FollowUpKpiRow } from "./sections/FollowUpKpiRow";
import { AlertFilterChips } from "./sections/AlertFilterChips";
import { AlertChipRow } from "./sections/AlertChipRow";
import { AlertSummaryTiles } from "./sections/AlertSummaryTiles";
import { AlertQueueCard } from "./sections/AlertQueueCard";
import { AlertCards } from "./sections/AlertCards";
import { SelectedAlertRail } from "./sections/SelectedAlertRail";
import { AlertPrivacyCard } from "./sections/AlertPrivacyCard";
import { FollowUpPrivacyBand } from "./sections/FollowUpPrivacyBand";
import {
  FollowUpEmptyState,
  FollowUpLoadingState,
  FollowUpOfflineState,
} from "./sections/FollowUpScreenStates";
import { FollowUpSentView } from "./sections/FollowUpSentView";
import { FollowUpNotSentView } from "./sections/FollowUpNotSentView";
import { filterAlerts, type AlertFilter } from "./sections/followupFilters";

/** Alerts (Figma MD-12, node 1226:1542 · EM-12, node 761:1830).
 *  Desktop: KPI quad → filter pills → ALERT QUEUE card + SELECTED ALERT rail
 *  with the "Attention, not punishment" note → privacy band. Mobile: count
 *  chips → HIGH PRIORITY / DUE SOON tiles → OPEN ALERTS cards with deep-link
 *  actions → privacy card, resolved line and the two mint CTAs.
 *  States: ?state=loading · empty · offline · sent (EM-10) · not-sent (EM-09C). */
export function ManagerAlertsPage() {
  const [filter, setFilter] = useState<AlertFilter>("Open");
  const [selectedId, setSelectedId] = useState(MANAGER_ALERTS[0].id);
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

  const desktopAlerts = filterAlerts(MANAGER_ALERTS, filter);
  const mobileAlerts = filterAlerts(MOBILE_ALERTS, filter);
  const selected =
    desktopAlerts.find((alert) => alert.id === selectedId) ??
    desktopAlerts[0] ??
    MANAGER_ALERTS[0];

  return (
    <div className="max-w-[1060px]">
      <FollowUpPageHeader
        title={common.managerNav.alerts}
        subtitle={c.alerts.subtitleMobile}
        desktopSubtitle={c.alerts.subtitleDesktop}
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
          <div className="mt-[20px] lg:mt-[25px]">
            <FollowUpKpiRow kpis={c.alerts.kpis} values={ALERT_KPI_VALUES} />
          </div>
          <div className="mt-[6px] lg:mt-[20px]">
            <AlertChipRow filter={filter} onFilter={setFilter} />
            <AlertFilterChips filter={filter} onFilter={setFilter} />
          </div>
          <div className="mt-[16px] lg:hidden">
            <AlertSummaryTiles />
          </div>

          {state === "empty" ? (
            <div className="mt-[20px]">
              <FollowUpEmptyState
                title={c.alerts.emptyTitle}
                body={c.alerts.emptyBody}
              />
            </div>
          ) : (
            <>
              <div className="mt-[14px] lg:mt-[22px] lg:flex lg:gap-[20px]">
                <div className="lg:min-w-0 lg:flex-1">
                  <AlertQueueCard
                    alerts={desktopAlerts}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />
                  <AlertCards alerts={mobileAlerts} />
                </div>
                <SelectedAlertRail alert={selected} />
              </div>

              <div className="mt-[16px]">
                <AlertPrivacyCard />
              </div>
            </>
          )}

          <div className="mt-[16px] lg:mt-[38px]">
            <FollowUpPrivacyBand>{c.alerts.footer}</FollowUpPrivacyBand>
          </div>
        </>
      )}
    </div>
  );
}
