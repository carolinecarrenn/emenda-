import { EMPLOYER, TODAY, WORKER } from "@/data/caregiverReport";

/**
 * Mock data for the Reports state variants (WD-54/55/56) and the
 * employer-assigned template previews (WD-55 / WD-55J / WD-55L).
 * The mocks' "ABC Japan" employer is unified to EMPLOYER.name (Sakura Care)
 * per app data policy; other template employers stay as the mocks show them.
 * Values are report content (data) and are never translated.
 */

/** General work report draft shown by the WD-55C/E/F/G state variants. */
export const GENERAL_DRAFT = {
  employer: EMPLOYER.name,
  date: TODAY,
  shift: "Afternoon shift",
  reportFlag: "Normal",
  workSummary:
    "Prepared outbound inventory and completed the warehouse handover for the afternoon shift.",
  followUp: "Two damaged cartons need supervisor review tomorrow morning.",
} as const;

export const REPORT_STATUS_OPTIONS = [
  "Normal",
  "Needs attention",
  "Urgent",
] as const;

/** WD-55J — Warehouse template preview (ABC Logistics). */
export const WAREHOUSE_PREVIEW = {
  employer: "ABC Logistics",
  date: TODAY,
  shift: "Afternoon shift",
  workArea: "Outbound zone B",
  quantity: "128 boxes",
  notes:
    "Prepared outbound inventory, completed picking verification, and handed over the loading queue.",
  quickNotes: ["Safety clear", "Damage noted", "Labels checked", "Follow-up"],
} as const;

/** WD-55H / WD-55N — Caregiver template values (read-only preview only;
 *  the interactive caregiver form keeps its own draft in the reports store). */
export const CAREGIVER_PREVIEW = {
  employer: EMPLOYER.name,
  date: TODAY,
  shift: WORKER.shift,
  resident: "Tanaka-san · 田中さん",
  meal: "Half portion · Setengah porsi",
  careNotes:
    "Assisted with the morning routine. Appetite lower than usual at lunch, fluid intake normal.",
  quickNotes: ["Condition normal", "Meal reduced", "Looks tired", "Monitor"],
} as const;

/** WD-55L — Food service template preview. */
export const FOOD_PREVIEW = {
  employer: "ABC Dining",
  date: TODAY,
  shift: "Afternoon shift",
  stationArea: "Lunch line · Station 2",
  stockStatus: "Rice and soup stock refilled for the evening service.",
  handoverNotes:
    "Completed lunch service and prepared the handover for the evening team.",
  quickNotes: ["Service normal", "Stock low", "Guest request", "Follow-up"],
} as const;

/** Cached Daily Report record used by the offline detail states. */
export interface CachedReportRecord {
  /** "25 Aug · Warehouse preparation" — the mock's own record title. */
  title: string;
  statusLine: string;
  statusValue: "submitted" | "verified";
  workSummary: string;
  followUp: string;
}

/** WD-56B — Daily Report Detail · Submitted · Offline. */
export const DETAIL_SUBMITTED_CACHED: CachedReportRecord = {
  title: "25 Aug · Warehouse preparation",
  statusLine: "Submitted · 25 Aug 17:42",
  statusValue: "submitted",
  workSummary:
    "Prepared outbound inventory and completed the warehouse handover for the afternoon shift.",
  followUp: "Two damaged cartons need supervisor review tomorrow morning.",
};

/** WD-56C — Daily Report Detail · Verified · Offline. */
export const DETAIL_VERIFIED_CACHED: CachedReportRecord = {
  title: "23 Aug · Shift handover",
  statusLine: "Verified · Supervisor · 24 Aug 09:10",
  statusValue: "verified",
  workSummary:
    "Completed the shift handover and confirmed the outstanding tasks with the incoming team.",
  followUp: "",
};
