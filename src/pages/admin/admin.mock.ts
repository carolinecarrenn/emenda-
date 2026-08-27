/**
 * Mock data for Figma AD-01 Company Admin Dashboard · Overview (1182:5692).
 *
 * Everything here is DATA and stays raw in every language: the company name,
 * the admin persona, employee / team names, report IDs, counts and clock
 * times. Every label around this data comes from admin.copy.ts.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin. This file
 * deliberately carries no cross-tenant, billing or platform-configuration
 * records — only one company's own operational data.
 */

/** The company tenant drawn in AD-01. */
export const ADMIN_ORG = "PT Sakura Nusantara";

/** The signed-in Company Admin persona; `initial` is the avatar glyph. */
export const ADMIN_USER = {
  name: "Nadia",
  initial: "A",
} as const;

/** Raw date behind the dated meta line — formatted via formatDisplayDate(). */
export const ADMIN_TODAY = "25 Aug 2026";

/* ------------------------------------------------------------ KPI row ---- */

export type AdminTone = "mint" | "blue" | "amber" | "red";

export type AdminKpiKey =
  | "employees"
  | "managers"
  | "openReports"
  | "overdueFollowUp";

export interface AdminKpi {
  key: AdminKpiKey;
  value: string;
  /** Number interpolated into the KPI caption template. */
  captionCount: number;
  tone: AdminTone;
}

export const ADMIN_KPIS: AdminKpi[] = [
  { key: "employees", value: "186", captionCount: 8, tone: "mint" },
  { key: "managers", value: "12", captionCount: 9, tone: "blue" },
  { key: "openReports", value: "34", captionCount: 8, tone: "amber" },
  { key: "overdueFollowUp", value: "7", captionCount: 3, tone: "red" },
];

/* --------------------------------------------------- report lifecycle ---- */

export type LifecycleStageKey =
  | "new"
  | "inProgress"
  | "needFollowUp"
  | "resolvedToday";

export type LifecycleTone = "blue" | "mint" | "amber" | "mintDeep";

export interface LifecycleStage {
  key: LifecycleStageKey;
  count: number;
  tone: LifecycleTone;
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  { key: "new", count: 8, tone: "blue" },
  { key: "inProgress", count: 18, tone: "mint" },
  { key: "needFollowUp", count: 8, tone: "amber" },
  { key: "resolvedToday", count: 11, tone: "mintDeep" },
];

export const REPORT_LIFECYCLE = {
  openCount: 34,
  slaPercent: 82,
  slaTarget: 90,
  slaExceededThisWeek: 5,
} as const;

/* ----------------------------------------------------- needs attention ---- */

export type AttentionPriority = "high" | "medium";

export type AttentionReason =
  | "escalationOverdue"
  | "noManagerAssigned"
  | "slaRemaining";

export interface AttentionItem {
  /** Report ID — data, never translated. */
  id: string;
  /** Report subject — content, never translated. */
  subject: string;
  reason: AttentionReason;
  /** Only for `escalationOverdue`. */
  overdueDays?: number;
  /** Only for `slaRemaining`. */
  slaHours?: number;
  priority: AttentionPriority;
}

export const ATTENTION_ITEMS: AttentionItem[] = [
  {
    id: "RPT-1048",
    subject: "Harassment concern",
    reason: "escalationOverdue",
    overdueDays: 2,
    priority: "high",
  },
  {
    id: "RPT-1061",
    subject: "Work schedule dispute",
    reason: "noManagerAssigned",
    priority: "high",
  },
  {
    id: "RPT-1064",
    subject: "Document support request",
    reason: "slaRemaining",
    slaHours: 3,
    priority: "medium",
  },
];

/** The panel pill counts the whole queue, not just the three listed rows. */
export const ATTENTION_TOTAL = 7;

/* ------------------------------------------------ daily report health ---- */

export type DailyHealthLegendKey = "onTime" | "late" | "missing";

export interface DailyHealthLegendRow {
  key: DailyHealthLegendKey;
  count: number;
}

export const DAILY_REPORT_HEALTH = {
  expected: 186,
  percent: "88%",
  submitted: 164,
  pending: 22,
  legend: [
    { key: "onTime", count: 151 },
    { key: "late", count: 13 },
    { key: "missing", count: 22 },
  ] as DailyHealthLegendRow[],
} as const;

/* ----------------------------------------------- recent admin activity ---- */

export type ActivityActionKey =
  | "managerAssigned"
  | "employeeAccountActivated"
  | "reportReassigned"
  | "rewardRuleUpdated";

/** Target column: a person, a manager scoped to a team, or a company policy. */
export type ActivityTarget =
  | { kind: "person"; name: string }
  | { kind: "managerTeam"; team: string }
  | { kind: "companyRewardPolicy" };

export interface ActivityRow {
  id: string;
  action: ActivityActionKey;
  /** Raw suffix after the action ("Team Ops A", "RPT-1061", "Daily check-in"). */
  detail?: string;
  /** Raw person name. */
  actor: string;
  target: ActivityTarget;
  /** Raw clock time. */
  time: string;
}

export const ACTIVITY_ROWS: ActivityRow[] = [
  {
    id: "act-2012",
    action: "managerAssigned",
    detail: "Team Ops A",
    actor: "Nadia",
    target: { kind: "person", name: "Dimas Pratama" },
    time: "20:12",
  },
  {
    id: "act-1948",
    action: "employeeAccountActivated",
    actor: "Nadia",
    target: { kind: "person", name: "Rina Sato" },
    time: "19:48",
  },
  {
    id: "act-1835",
    action: "reportReassigned",
    detail: "RPT-1061",
    actor: "Nadia",
    target: { kind: "managerTeam", team: "Team Ops A" },
    time: "18:35",
  },
  {
    id: "act-1710",
    action: "rewardRuleUpdated",
    detail: "Daily check-in",
    actor: "Nadia",
    target: { kind: "companyRewardPolicy" },
    time: "17:10",
  },
];
