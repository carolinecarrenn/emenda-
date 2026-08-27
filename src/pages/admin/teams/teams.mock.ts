/**
 * Mock records behind the Company Admin Teams & Managers area — Figma AD-03
 * (1223:924), AD-03B (1226:57), AD-03C (1226:2680) and AD-03D (1239:274).
 *
 * Everything here is DATA and stays raw in every language: team names,
 * manager names, member counts, thresholds, report counts. Every label around
 * this data comes from teams.copy.ts.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin — these are
 * one company's own teams, never cross-tenant or platform structures.
 */

export type TeamsTone = "mint" | "blue" | "amber" | "red";

/* ---------------------------------------------------------- stat row ----- */

export type TeamStatKey = "teams" | "managers" | "unassigned" | "workloadAlert";

export interface TeamStat {
  key: TeamStatKey;
  value: string;
  /** Number interpolated into the caption template ({count} / {limit}). */
  captionValue: number;
  tone: TeamsTone;
}

/** AD-03 stat row (1223:1207 … 1223:1225). */
export const TEAM_STATS: TeamStat[] = [
  { key: "teams", value: "6", captionValue: 2, tone: "blue" },
  { key: "managers", value: "12", captionValue: 9, tone: "mint" },
  { key: "unassigned", value: "14", captionValue: 14, tone: "amber" },
  { key: "workloadAlert", value: "3", captionValue: 15, tone: "red" },
];

/* -------------------------------------------------- team directory ------- */

export interface DirectoryTeam {
  id: string;
  /** Team name — data, never translated. */
  name: string;
  members: number;
  /** Raw manager name; null for the unassigned pool row (drawn "Manager: —"). */
  manager: string | null;
  /** Open reports owned by the team, shown in the Selected team panel. */
  openReports: number;
  /** Workers the panel offers to move out of the unassigned pool. */
  movePoolCount: number;
  /** Overdue follow-up cases the panel offers to review. */
  overdueFollowUps: number;
}

/** AD-03 "Team directory" rows (1223:1234 … 1223:1249). */
export const DIRECTORY_TEAMS: DirectoryTeam[] = [
  {
    id: "team-ops-a",
    name: "Team Ops A",
    members: 28,
    manager: "Ayu Lestari",
    openReports: 2,
    movePoolCount: 3,
    overdueFollowUps: 2,
  },
  {
    id: "team-ops-b",
    name: "Team Ops B",
    members: 24,
    manager: "Teguh",
    openReports: 1,
    movePoolCount: 2,
    overdueFollowUps: 1,
  },
  {
    id: "team-ops-c",
    name: "Team Ops C",
    members: 19,
    manager: "Mira",
    openReports: 1,
    movePoolCount: 2,
    overdueFollowUps: 0,
  },
  {
    id: "dormitory-support",
    name: "Dormitory Support",
    members: 11,
    manager: "Rani",
    openReports: 0,
    movePoolCount: 1,
    overdueFollowUps: 1,
  },
  {
    id: "japanese-class",
    name: "Japanese Class",
    members: 9,
    manager: "Hanif",
    openReports: 1,
    movePoolCount: 1,
    overdueFollowUps: 0,
  },
  {
    id: "unassigned-pool",
    name: "Unassigned pool",
    members: 14,
    manager: null,
    openReports: 0,
    movePoolCount: 14,
    overdueFollowUps: 0,
  },
];

/** The team drawn in the "Selected team" panel (1223:1306). */
export const DEFAULT_SELECTED_TEAM_ID = "team-ops-a";

/* ---------------------------------------------- manager assignment ------- */

export type ManagerLoadStatus = "healthy" | "lowLoad";

export interface ManagerAssignmentRow {
  id: string;
  /** Manager name — data, never translated. */
  name: string;
  /** Primary team name — data. */
  team: string;
  members: number;
  status: ManagerLoadStatus;
}

/** AD-03 "Manager assignment" table (1223:1262 … 1223:1281). */
export const MANAGER_ASSIGNMENTS: ManagerAssignmentRow[] = [
  {
    id: "mgr-ayu",
    name: "Ayu Lestari",
    team: "Team Ops A",
    members: 28,
    status: "healthy",
  },
  {
    id: "mgr-teguh",
    name: "Teguh Saputra",
    team: "Team Ops B",
    members: 24,
    status: "healthy",
  },
  {
    id: "mgr-mira",
    name: "Mira Putri",
    team: "Team Ops C",
    members: 19,
    status: "healthy",
  },
  {
    id: "mgr-hanif",
    name: "Hanif Noor",
    team: "Japanese Class",
    members: 9,
    status: "lowLoad",
  },
  {
    id: "mgr-rani",
    name: "Rani Kusuma",
    team: "Dormitory",
    members: 11,
    status: "healthy",
  },
];

/* ------------------------------------------------- coverage issues ------- */

export type CoverageIssueKind =
  | "unassignedEmployees"
  | "workloadNearLimit"
  | "noBackupManager";

export type CoverageSeverity = "high" | "medium";

export interface CoverageIssue {
  id: string;
  kind: CoverageIssueKind;
  /** Raw team name for the team-scoped issues; absent for the pool issue. */
  team?: string;
  /** People count for the unassigned-employees issue. */
  count?: number;
  severity: CoverageSeverity;
}

/** AD-03 "Coverage issues" rows (1223:1289 … 1223:1303). */
export const COVERAGE_ISSUES: CoverageIssue[] = [
  {
    id: "cov-unassigned",
    kind: "unassignedEmployees",
    count: 14,
    severity: "high",
  },
  {
    id: "cov-ops-a-load",
    kind: "workloadNearLimit",
    team: "Team Ops A",
    severity: "medium",
  },
  {
    id: "cov-dorm-backup",
    kind: "noBackupManager",
    team: "Dormitory Support",
    severity: "medium",
  },
];

/* ----------------------------------------- AD-03B assignment dialogs ----- */

/** AD-03B "Assign manager" (1226:61) — the instance drawn in Figma. */
export const ASSIGN_MANAGER_DRAFT = {
  team: "Team Ops A",
  primaryManager: "Ayu Lestari",
  /** First name used in the capacity warning line. */
  primaryManagerShortName: "Ayu",
  workersAfterAssignment: 28,
  recommendedLimit: 25,
} as const;

/** AD-03B "Reassign employees" (1226:80) — the instance drawn in Figma. */
export const REASSIGN_EMPLOYEES_DRAFT = {
  selectedCount: 3,
  newTeam: "Team Ops B",
  newManager: "Teguh Saputra",
} as const;

/* --------------------------------------------- AD-03D detailed states ---- */

/** AD-03D "Create team" (1239:278). */
export const CREATE_TEAM_DRAFT = {
  name: "Night Shift Support",
  purpose: "Support workers assigned to night shifts",
  initialMemberCount: 0,
} as const;

/** AD-03D "Assign / change manager" (1239:303). */
export const CHANGE_MANAGER_DRAFT = {
  team: "Team Ops A",
  teamMembers: 28,
  currentManager: "Ayu Lestari",
  newManager: "Teguh Saputra",
  /** First name used in the capacity warning body. */
  newManagerShortName: "Teguh",
  workersAfterAssignment: 31,
  companyThreshold: 25,
} as const;

/** AD-03D "Archive team" (1239:328). */
export const ARCHIVE_TEAM_DRAFT = {
  team: "Japanese Class",
  teamMembers: 9,
  activeMembers: 9,
  openReports: 1,
  moveMembersTo: "Team Ops B",
  openReportOwner: "Teguh Saputra",
} as const;

/* ------------------------------------------------ AD-03C lifecycle ------- */

/** Chip tone per lifecycle step (1226:2687 / 2741 / 2759). */
export const LIFECYCLE_STEP_TONES: TeamsTone[] = [
  "mint",
  "mint",
  "mint",
  "blue",
  "red",
];
