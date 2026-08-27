/** WD-29 Work Preferences — mock data (raw stored values, never translated). */

export type LocationKey = "japan" | "tokyo" | "osaka" | "fukuoka" | "remote";
export type WorkTypeKey = "fullTime" | "contract" | "partTime" | "internship";
export type IndustryKey =
  | "it"
  | "manufacturing"
  | "hospitality"
  | "logistics"
  | "other";

export interface WorkPreferences {
  /** Free-text user data — rendered raw, never localized. */
  targetRole: string;
  locationKey: LocationKey;
  workTypeKey: WorkTypeKey;
  /** Raw "01 Apr 2027" style date, or null when "Available immediately". */
  availabilityDate: string | null;
  industryKey: IndustryKey;
}

export const WORK_PREFERENCES: WorkPreferences = {
  targetRole: "Software Engineer",
  locationKey: "japan",
  workTypeKey: "fullTime",
  availabilityDate: "01 Apr 2027",
  industryKey: "it",
};

export const LOCATION_KEYS: LocationKey[] = [
  "japan",
  "tokyo",
  "osaka",
  "fukuoka",
  "remote",
];

export const WORK_TYPE_KEYS: WorkTypeKey[] = [
  "fullTime",
  "contract",
  "partTime",
  "internship",
];

export const INDUSTRY_KEYS: IndustryKey[] = [
  "it",
  "manufacturing",
  "hospitality",
  "logistics",
  "other",
];

/** "01 Apr 2027" → "Apr 2027" for the summary "From Apr 2027" row. */
export function toMonthYear(raw: string): string {
  const parts = raw.split(" ");
  return parts.length === 3 ? `${parts[1]} ${parts[2]}` : raw;
}
