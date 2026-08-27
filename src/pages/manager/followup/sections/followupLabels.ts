import type { Language } from "@/i18n/language";
import type { FollowUpCopy } from "../followup.copy";
import { formatSignalTime } from "./followupTime";
import type {
  AlertSeverity,
  FollowUpSignal,
  HistoryNextKind,
  HistorySignalKind,
  HistoryStatusKind,
  ManagerAlert,
  SignalLogEntry,
  SignalPriority,
} from "../followupMock";

/** Replaces {token} placeholders in a copy template with mock values. */
export function fill(
  template: string,
  values: Record<string, string>,
): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  );
}

export function priorityLabel(
  c: FollowUpCopy,
  priority: SignalPriority,
): string {
  if (priority === "HIGH") return c.priority.high;
  if (priority === "MEDIUM") return c.priority.medium;
  return c.priority.low;
}

/** EM-09B "Priority · High · human review" — title case, not the pill caps. */
export function priorityTitleLabel(
  c: FollowUpCopy,
  priority: SignalPriority,
): string {
  if (priority === "HIGH") return c.priorityTitle.high;
  if (priority === "MEDIUM") return c.priorityTitle.medium;
  return c.priorityTitle.low;
}

export function severityLabel(
  c: FollowUpCopy,
  severity: AlertSeverity,
): string {
  if (severity === "HIGH") return c.alerts.severity.high;
  if (severity === "MEDIUM") return c.alerts.severity.medium;
  return c.alerts.severity.low;
}

export function signalTitle(c: FollowUpCopy, signal: FollowUpSignal): string {
  return c.signalTitles[signal.kind];
}

export function signalMetaDesktop(
  c: FollowUpCopy,
  signal: FollowUpSignal,
): string {
  return fill(c.signalMetaDesktop[signal.kind], { value: signal.metaValue });
}

export function signalMetaMobile(
  c: FollowUpCopy,
  signal: FollowUpSignal,
): string {
  return fill(c.signalMetaMobile[signal.kind], { value: signal.metaValue });
}

export function signalExpected(
  c: FollowUpCopy,
  signal: FollowUpSignal,
): string {
  return fill(c.signalExpected[signal.expectedKind], {
    value: signal.expectedValue,
  });
}

export function signalCurrent(
  c: FollowUpCopy,
  signal: FollowUpSignal,
): string {
  return c.signalCurrent[signal.currentKind];
}

/** EM-09A prints the same fact lower case ("Current · not submitted"). */
export function signalCurrentLower(
  c: FollowUpCopy,
  signal: FollowUpSignal,
): string {
  return c.signalCurrentLower[signal.currentKind];
}

/** EM-09A mini-log line — displayed timestamp + localized event label. */
export function signalLogLine(
  c: FollowUpCopy,
  entry: SignalLogEntry,
  language: Language,
): string {
  return `${formatSignalTime(entry.time, c, language)} · ${
    c.review.logLabels[entry.kind]
  }`;
}

export function templateLabel(
  c: FollowUpCopy,
  template: FollowUpSignal["template"],
): string {
  return c.compose.templates[template];
}

/** EM-09B "Reason · Missing report". */
export function composeReasonShort(
  c: FollowUpCopy,
  signal: FollowUpSignal,
): string {
  return c.compose.reasonsShort[signal.kind];
}

/** EM-09B subtitle tail — "Putri Rahayu · missing Daily Report". */
export function composeReasonLong(
  c: FollowUpCopy,
  signal: FollowUpSignal,
): string {
  return c.compose.reasonsLong[signal.kind];
}

export function alertTitle(c: FollowUpCopy, alert: ManagerAlert): string {
  return c.alerts.titles[alert.kind];
}

export function alertMetaDesktop(
  c: FollowUpCopy,
  alert: ManagerAlert,
): string {
  return fill(c.alerts.metaDesktop[alert.kind], { value: alert.metaValue });
}

export function alertMetaMobile(c: FollowUpCopy, alert: ManagerAlert): string {
  return fill(c.alerts.metaMobile[alert.kind], { value: alert.metaValue });
}

export function alertActionLabel(
  c: FollowUpCopy,
  alert: ManagerAlert,
): string {
  return c.alerts.actions[alert.action];
}

/** MD-12 SELECTED ALERT "Expected · 08:00 today". */
export function alertExpected(c: FollowUpCopy, alert: ManagerAlert): string {
  return fill(c.alerts.expectedValues[alert.kind], { value: alert.metaValue });
}

/** MD-12 SELECTED ALERT "Status · Not submitted". */
export function alertStatus(c: FollowUpCopy, alert: ManagerAlert): string {
  return c.alerts.statusValues[alert.kind];
}

/* MD-10 FOLLOW-UP HISTORY rows — the stored kinds are enum-like data, so the
   label lookup lives here beside the other kind → copy maps. */
export function historySignalLabel(
  c: FollowUpCopy,
  kind: HistorySignalKind,
): string {
  return c.sent.historySignals[kind];
}

export function historyStatusLabel(
  c: FollowUpCopy,
  kind: HistoryStatusKind,
): string {
  return c.sent.historyStatus[kind];
}

export function historyNextLabel(
  c: FollowUpCopy,
  kind: HistoryNextKind,
): string {
  return c.sent.historyNext[kind];
}
