export const RESIDENT_CONDITIONS = [
  "Stable",
  "Needs attention",
  "Urgent",
] as const;
export type ResidentCondition = (typeof RESIDENT_CONDITIONS)[number];

export const REPORT_STATUSES = ["Normal", "Needs attention", "Urgent"] as const;
export type ReportStatusFlag = (typeof REPORT_STATUSES)[number];

export const QUICK_NOTES = [
  "Condition normal",
  "Meal reduced",
  "Looks tired",
  "Monitor",
] as const;
export type QuickNote = (typeof QUICK_NOTES)[number];

export type ReportLifecycle = "submitted" | "verified";

export interface CaregiverReportDraft {
  reportFlag: ReportStatusFlag;
  resident: string;
  residentCondition: ResidentCondition;
  meal: string;
  careNotes: string;
  quickNotes: QuickNote[];
  followUp: string;
}

export interface CaregiverReport extends CaregiverReportDraft {
  id: string;
  workerName: string;
  workerRole: string;
  date: string;
  shift: string;
  submittedAt: string;
  status: ReportLifecycle;
  verifiedAt?: string;
  /** EM-11A "TRANSLATED · Bahasa Indonesia" block (seed data only). */
  careNotesTranslated?: string;
}

export const EMPLOYER = {
  name: "Sakura Care",
  facility: "Sakura Care Facility",
  manager: "Sato Kenji",
  managerRole: "Facility Manager",
} as const;

export const WORKER = {
  name: "Putri Rahayu",
  role: "Care Assistant",
  emendaId: "EMD-26-8F4K2A",
  shift: "Day shift",
} as const;

export const TODAY = "25 Aug 2026";

export const EMPTY_DRAFT: CaregiverReportDraft = {
  reportFlag: "Normal",
  resident: "",
  residentCondition: "Stable",
  meal: "",
  careNotes: "",
  quickNotes: [],
  followUp: "",
};
