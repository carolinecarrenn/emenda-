import type { ActivityCategory } from "./activity-log.mock";

/** The AD-08 filter row (1225:631…1225:640): "All actions" then the four
 *  category pills, left to right. */
export type ActivityFilterKey = "all" | ActivityCategory;

export const ACTIVITY_FILTER_KEYS: ActivityFilterKey[] = [
  "all",
  "people",
  "reports",
  "rewards",
  "settings",
];
