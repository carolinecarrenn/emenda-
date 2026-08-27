import type { RegistrationStatusKey } from "./registration.copy";

export interface RegistrationRecord {
  /** User-entered place, raw data (WD-35 shows "Shinjuku, Tokyo"). */
  municipality: string;
  /** Raw "10 Apr 2026"-style date strings, formatted at render time. */
  moveInDate: string;
  registeredOn: string;
  status: RegistrationStatusKey;
}

/** Saved record backing the WD-35 mint summary card and the edit form. */
export const REGISTRATION_RECORD: RegistrationRecord = {
  municipality: "Shinjuku, Tokyo",
  moveInDate: "10 Apr 2026",
  registeredOn: "12 Apr 2026",
  status: "registered",
};

/** Prefilled values of the WD-35H Add form frame. */
export const REGISTRATION_ADD_DRAFT: RegistrationRecord = {
  municipality: "Shinjuku, Tokyo",
  moveInDate: "10 Apr 2026",
  registeredOn: "12 Apr 2026",
  status: "notStarted",
};
