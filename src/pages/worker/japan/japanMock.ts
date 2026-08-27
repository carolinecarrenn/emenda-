/** Mock data for 06 · Visa, Residence & Japan Preparation (WD-32..WD-33).
 *  Record values (statuses, dates, notes) are worker-entered / document data —
 *  they are NOT translated. UI strings live in japan.copy.ts. */

export const RESIDENCE_STATUS_NAME =
  "Engineer / Specialist in Humanities / International Services";

/** WD-32M / WD-33S status overlay options (official categories — raw data). */
export const RESIDENCE_STATUS_OPTIONS = [
  RESIDENCE_STATUS_NAME,
  "Student",
  "Specified Skilled Worker",
  "Dependent",
] as const;

/** WD-32N entry-document status overlay options. */
export const ENTRY_STATUS_OPTIONS = [
  "Not started",
  "COE in progress",
  "COE issued",
  "Visa issued",
] as const;

/** WD-33T work-permission overlay options. */
export const WORK_PERMISSION_OPTIONS = [
  "As stated on residence record",
  "Permitted with restrictions",
  "Permission required / unsure",
] as const;

export interface ResidenceRecord {
  status: string;
  /** Raw display date, e.g. "18 May 2027" — formatted per language at render. */
  validUntil: string;
  workPermission: string;
  note: string;
}

/** WD-33 self-added residence record. */
export const RESIDENCE_RECORD: ResidenceRecord = {
  status: RESIDENCE_STATUS_NAME,
  validUntil: "18 May 2027",
  workPermission: "As stated on residence record",
  note: "No additional note",
};

/** WD-33M verified-source record (after applying the WD-33K update). */
export const VERIFIED_RESIDENCE_RECORD: ResidenceRecord = {
  status: RESIDENCE_STATUS_NAME,
  validUntil: "18 May 2028",
  workPermission: "As stated on residence record",
  note: "No additional note",
};

/** WD-33K compare cards truncate the long status name exactly like the mock. */
export const COMPARE_STATUS_SHORT = "Engineer / Specialist…";

/** WD-33N personal note draft. */
export const PERSONAL_NOTE = "Waiting for employer guidance on renewal timing.";

export interface VisaPlan {
  plannedStatus: string;
  entryDocument: string;
  /** Raw display date, e.g. "15 Mar 2027". */
  plannedArrival: string;
  note: string;
}

/** WD-32F pre-arrival visa plan. */
export const VISA_PLAN: VisaPlan = {
  plannedStatus: RESIDENCE_STATUS_NAME,
  entryDocument: "COE in progress",
  plannedArrival: "15 Mar 2027",
  note: "Employer is preparing the COE application.",
};

/** WD-32 hub summaries. */
export const JAPAN_HUB = {
  registrationCity: "Tokyo",
  nextReminderDate: "18 May 2027",
  /** WD-32E offline cached-data timestamp. */
  cachedUpdatedDate: "23 Aug 2026",
} as const;
