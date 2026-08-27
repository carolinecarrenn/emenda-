/**
 * Mock records for the Company Admin employees area — Figma AD-02 (1223:535),
 * AD-02B (1226:2), AD-02C (1226:2585) and AD-02D (1239:196).
 *
 * Everything here is DATA and stays raw in every language: employee names,
 * team names, EMENDA IDs, emails, phone numbers, report IDs, percentages and
 * clock times. Every label around this data comes from employees.copy.ts, and
 * enum-like display values (status, role, team placeholder) are localized at
 * render time through i18n/terms.ts localizeTerm().
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin — these are
 * one company's own employees, with no cross-tenant records.
 */

/* --------------------------------------------------------- directory ----- */

/** Enum-like status value drawn in AD-02 / AD-02B / AD-02D — localizeTerm(). */
export type EmployeeStatus =
  | "Active"
  | "Pending profile"
  | "Invited"
  | "Incomplete"
  | "Inactive";

/** The four filter pills of AD-02 (1223:821 – 1223:827). */
export type EmployeeFilterKey = "all" | "active" | "invited" | "incomplete";

/** Which pill a row answers to — "all" always matches. */
export type EmployeeGroup = Exclude<EmployeeFilterKey, "all">;

/**
 * "Last active" is a relative moment, not a string: AD-02 draws "10 min ago",
 * "1 h ago", "Just now" and "—". The shape stays raw, the wording is a copy
 * template so ID/JA read naturally.
 */
export type LastActive =
  | { kind: "justNow" }
  | { kind: "minutes"; value: number }
  | { kind: "hours"; value: number }
  | { kind: "never" };

export interface AdminEmployee {
  /** EMENDA ID — AD-02B 1226:37. */
  id: string;
  name: string;
  /** Avatar glyph drawn in AD-02 1223:894 / AD-02B 1226:31. */
  initial: string;
  role: string;
  team: string;
  status: EmployeeStatus;
  group: EmployeeGroup;
  lastActive: LastActive;
  email: string;
  phone: string;
  /** Preferred language, drawn raw in AD-02D 1239:235. */
  language: string;
  manager: string;
  /** Profile completeness percent — AD-02B 1226:43. */
  profileComplete: number;
  /** Clock time of the latest daily report, or null when none exists. */
  dailyReportTime: string | null;
  openReportCount: number;
  openReportId: string | null;
  openReportSubject: string | null;
}

/** The five rows drawn in the AD-02 employee directory (1223:829). */
export const ADMIN_EMPLOYEES: AdminEmployee[] = [
  {
    id: "EMD-00171",
    name: "Dimas Pratama",
    initial: "D",
    role: "Worker",
    team: "Team Ops A",
    status: "Active",
    group: "active",
    lastActive: { kind: "minutes", value: 10 },
    email: "dimas@sakuranusantara.co.id",
    phone: "+62 812-3344-5566",
    language: "Bahasa Indonesia",
    manager: "Ayu Lestari",
    profileComplete: 100,
    dailyReportTime: "07:52",
    openReportCount: 0,
    openReportId: null,
    openReportSubject: null,
  },
  {
    id: "EMD-00184",
    name: "Rina Sato",
    initial: "R",
    role: "Worker",
    team: "Team Ops B",
    status: "Pending profile",
    group: "incomplete",
    lastActive: { kind: "hours", value: 1 },
    email: "rina.sato@sakuranusantara.co.id",
    phone: "+81 80-1234-5678",
    language: "日本語",
    manager: "Ayu Lestari",
    profileComplete: 80,
    dailyReportTime: "08:04",
    openReportCount: 1,
    openReportId: "RPT-1064",
    openReportSubject: "Document support",
  },
  {
    id: "EMD-00092",
    name: "Ayu Lestari",
    initial: "A",
    role: "Manager",
    team: "Team Ops A",
    status: "Active",
    group: "active",
    lastActive: { kind: "justNow" },
    email: "ayu.lestari@sakuranusantara.co.id",
    phone: "+62 811-9087-2210",
    language: "Bahasa Indonesia",
    manager: "—",
    profileComplete: 100,
    dailyReportTime: "07:40",
    openReportCount: 0,
    openReportId: null,
    openReportSubject: null,
  },
  {
    id: "EMD-00203",
    name: "Budi Haryanto",
    initial: "B",
    role: "Worker",
    team: "Unassigned",
    status: "Invited",
    group: "invited",
    lastActive: { kind: "never" },
    email: "budi@example.com",
    phone: "—",
    language: "Bahasa Indonesia",
    manager: "—",
    profileComplete: 20,
    dailyReportTime: null,
    openReportCount: 0,
    openReportId: null,
    openReportSubject: null,
  },
  {
    id: "EMD-00158",
    name: "Kenji Mori",
    initial: "K",
    role: "Worker",
    team: "Team Ops B",
    status: "Active",
    group: "active",
    lastActive: { kind: "minutes", value: 35 },
    email: "kenji.mori@sakuranusantara.co.id",
    phone: "+81 90-8765-4321",
    language: "日本語",
    manager: "Ayu Lestari",
    profileComplete: 100,
    dailyReportTime: "08:12",
    openReportCount: 0,
    openReportId: null,
    openReportSubject: null,
  },
];

/** The row AD-02 draws in the "Selected employee" card (1223:890). */
export const DEFAULT_SELECTED_EMPLOYEE_ID = "EMD-00184";

/* ------------------------------------------------------------- stats ----- */

export type EmployeeStatKey = "employees" | "incomplete";

export interface EmployeeStat {
  key: EmployeeStatKey;
  /** Letter mark drawn inside the pastel tile (AD-02 1223:880 / 1223:886). */
  glyph: string;
  value: string;
  captionCount: number;
  tone: "mint" | "amber";
}

/** The two stat cards of AD-02 (1223:878 and 1223:884). */
export const EMPLOYEE_STATS: EmployeeStat[] = [
  {
    key: "employees",
    glyph: "E",
    value: "186",
    captionCount: 8,
    tone: "mint",
  },
  {
    key: "incomplete",
    glyph: "I",
    value: "24",
    captionCount: 24,
    tone: "amber",
  },
];

/* --------------------------------------------- needs admin action -------- */

export type AdminActionReason = "inviteNotAccepted" | "missingContact";

export interface AdminActionRow {
  name: string;
  reason: AdminActionReason;
  /** Days interpolated into the "Invite not accepted after {days} days" line. */
  days?: number;
  status: EmployeeStatus;
}

/** The two rows of "Needs admin action" (AD-02 1223:909). */
export const ADMIN_ACTION_ROWS: AdminActionRow[] = [
  {
    name: "Budi Haryanto",
    reason: "inviteNotAccepted",
    days: 3,
    status: "Invited",
  },
  { name: "Salsa Amira", reason: "missingContact", status: "Incomplete" },
];

/* ------------------------------------------------------ invite draft ----- */

/** The values typed into the invite form in AD-02B (1226:6) and AD-02D (1239:200). */
export const INVITE_DRAFT = {
  fullName: "Budi Haryanto",
  email: "budi@example.com",
  role: "Worker",
  team: "Unassigned",
} as const;

/** The manager reassignment drawn in AD-02D "Edit employee detail" (1239:241). */
export const EDIT_DRAFT = {
  nextManager: "Teguh Saputra",
} as const;

/* ---------------------------------------------------- lifecycle flow ----- */

export type LifecycleStepKey =
  | "invite"
  | "pending"
  | "accepts"
  | "assign"
  | "deactivate";

export interface LifecycleStep {
  key: LifecycleStepKey;
  /** Two-digit chip glyph — 01 … 05. */
  chip: string;
  tone: "mint" | "red";
}

/** The five steps of AD-02C "Employee lifecycle" (1226:2589). */
export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    key: "invite",
    chip: "01",
    tone: "mint",
  },
  {
    key: "pending",
    chip: "02",
    tone: "mint",
  },
  {
    key: "accepts",
    chip: "03",
    tone: "mint",
  },
  {
    key: "assign",
    chip: "04",
    tone: "mint",
  },
  {
    key: "deactivate",
    chip: "05",
    tone: "red",
  },
];
