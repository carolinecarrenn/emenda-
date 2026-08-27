import type { FollowUpSignal, ManagerAlert } from "../followupMock";

/* MD-09 / EM-09 filter chips and MD-12 / EM-12 alert chips.
   Filter identity is language-independent; only labels localize. */
export const FOLLOW_UP_FILTERS = [
  "Pending",
  "Sent",
  "Resolved",
  "High priority",
] as const;
export type FollowUpFilter = (typeof FOLLOW_UP_FILTERS)[number];

export const ALERT_FILTERS = ["Open", "Urgent", "Reporting", "Admin"] as const;
export type AlertFilter = (typeof ALERT_FILTERS)[number];

/** MD-09 chips: Pending is the default (mint active) chip in the mock. */
export function filterSignals(
  signals: FollowUpSignal[],
  filter: FollowUpFilter,
): FollowUpSignal[] {
  if (filter === "High priority") {
    return signals.filter((signal) => signal.priority === "HIGH");
  }
  if (filter === "Sent") {
    return signals.filter((signal) => signal.status === "sent");
  }
  if (filter === "Resolved") {
    return signals.filter((signal) => signal.status === "resolved");
  }
  return signals.filter((signal) => signal.status === "pending");
}

/** MD-12 chips: Open is the default (mint active) chip in the mock. */
export function filterAlerts(
  alerts: ManagerAlert[],
  filter: AlertFilter,
): ManagerAlert[] {
  if (filter === "Urgent") return alerts.filter((alert) => alert.urgent);
  if (filter === "Reporting") {
    return alerts.filter((alert) => alert.category === "reporting");
  }
  if (filter === "Admin") {
    return alerts.filter((alert) => alert.category === "admin");
  }
  return alerts;
}
