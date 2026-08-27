/**
 * Mock data for the Company Admin Daily Reports area
 * (Figma AD-06 1223:2373 · AD-06B 1226:1078 · AD-06C 1226:3690 ·
 *  AD-06D 1239:511).
 *
 * Everything here is DATA and stays raw in every language: counts, team and
 * employee names, clock times, and the company reminder template body. Every
 * label around this data comes from daily-reports.copy.ts; enum-like record
 * values (Late / Missing / Submitted) render through localizeTerm.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin — one
 * company's own daily-report operations only.
 */

/* ---------------------------------------------------------- stat quad ---- */

export type DailyStatKey = "expected" | "submitted" | "late" | "missing";

export type DailyStatTone = "blue" | "mint" | "amber" | "red";

export interface DailyStat {
  key: DailyStatKey;
  /** The single-letter glyph drawn in the pastel tile (AD-06 1223:2657 …). */
  badge: string;
  value: string;
  tone: DailyStatTone;
}

/** AD-06 "stat" cards (1223:2656 / :2662 / :2668 / :2674). */
export const DAILY_STATS: DailyStat[] = [
  { key: "expected", badge: "E", value: "186", tone: "blue" },
  { key: "submitted", badge: "S", value: "164", tone: "mint" },
  { key: "late", badge: "L", value: "13", tone: "amber" },
  { key: "missing", badge: "M", value: "22", tone: "red" },
];

/** Interpolated into the "{percent}% completion" caption (1223:2667). */
export const SUBMITTED_PERCENT = 88;

/* --------------------------------------------------- team health card ---- */

export interface TeamHealthRow {
  team: string;
  percent: number;
  /** Figma bar width in px; the track behind it is TEAM_BAR_TRACK_PX wide. */
  barPx: number;
}

/** AD-06 "Daily report health" rows (1223:2683 … 1223:2702). */
export const TEAM_HEALTH: TeamHealthRow[] = [
  { team: "Team Ops A", percent: 92, barPx: 230 },
  { team: "Team Ops B", percent: 87, barPx: 210 },
  { team: "Team Ops C", percent: 81, barPx: 170 },
  { team: "Dormitory Support", percent: 73, barPx: 110 },
  { team: "Japanese Class", percent: 66, barPx: 90 },
];

/** Width of the #d6e3de rule behind each bar (1223:2684). */
export const TEAM_BAR_TRACK_PX = 260;

/* --------------------------------------------- late & missing table ---- */

export interface LateMissingRow {
  id: string;
  employee: string;
  team: string;
  /** Raw record value — localized for display through localizeTerm. */
  status: string;
  /** Clock time, or the em dash Figma draws when nothing arrived. */
  submitted: string;
}

/** AD-06 "Late & missing submissions" rows (1223:2711 … 1223:2730). */
export const LATE_MISSING_ROWS: LateMissingRow[] = [
  {
    id: "DR-2411",
    employee: "Rina Sato",
    team: "Team Ops B",
    status: "Missing",
    submitted: "—",
  },
  {
    id: "DR-2412",
    employee: "Budi Haryanto",
    team: "Unassigned",
    status: "Missing",
    submitted: "—",
  },
  {
    id: "DR-2413",
    employee: "Kenji Mori",
    team: "Team Ops B",
    status: "Late",
    submitted: "09:18",
  },
  {
    id: "DR-2414",
    employee: "Salsa Amira",
    team: "Team Ops C",
    status: "Late",
    submitted: "09:27",
  },
  {
    id: "DR-2415",
    employee: "Lilis Wati",
    team: "Dormitory",
    status: "Missing",
    submitted: "—",
  },
];

/* ------------------------------------------------- reminder composer ---- */

/** AD-06B "Send reminder" / AD-06D "Compose reminder" field values. */
export const REMINDER_DRAFT = {
  /** Recipient count behind "22 missing employees". */
  missingCount: 22,
  /** The company reminder template body, as drawn (1226:1093 / 1239:528). */
  message: "Please submit today’s daily report.",
  /** Clock half of "Today · 11:00 WIB" (1226:1096 / 1239:531). */
  dueTime: "11:00 WIB",
} as const;

/** AD-06B "Reminder sent" acknowledgment counts (1226:1108 … 1226:1113). */
export const REMINDER_SENT = {
  notifiedCount: 22,
  deliveredCount: 20,
  pendingCount: 2,
} as const;

/** AD-06D "Reminder delivery result" counts (1239:547 … 1239:553). */
export const REMINDER_DELIVERY = {
  deliveredCount: 20,
  pendingCount: 1,
  failedCount: 1,
} as const;

/* ------------------------------------------------ submission detail ---- */

/** AD-06D "Employee submission detail" record (1239:571 … 1239:581). */
export const SUBMISSION_DETAIL = {
  employee: "Kenji Mori",
  team: "Team Ops B",
  /** Raw record value — localized through localizeTerm. */
  status: "Late",
  submittedAt: "09:18",
  reminderSentAt: "08:45",
} as const;

/* ------------------------------------------------------ flow board ---- */

export type FlowStepKey =
  | "monitor"
  | "inspect"
  | "remind"
  | "delivery"
  | "arrives";

export type FlowChipTone = "mint" | "amber" | "blue";

export interface FlowStepMeta {
  key: FlowStepKey;
  /** Two-digit chip glyph drawn in AD-06C (1226:3698 …). */
  number: string;
  tone: FlowChipTone;
}

/** AD-06C "steps" (1226:3694) — chip glyph and tint per step. */
export const FLOW_STEPS: FlowStepMeta[] = [
  { key: "monitor", number: "01", tone: "mint" },
  { key: "inspect", number: "02", tone: "mint" },
  { key: "remind", number: "03", tone: "amber" },
  { key: "delivery", number: "04", tone: "blue" },
  { key: "arrives", number: "05", tone: "mint" },
];
