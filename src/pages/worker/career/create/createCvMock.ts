import { WORKER } from "@/data/caregiverReport";

/** WD-30 Create CV — mock data (raw, never translated). */

export type CvSourceKey =
  | "personalProfile"
  | "experience"
  | "education"
  | "skills"
  | "qualifications";

/** Checklist order in the "Include in your CV" card. */
export const CV_SOURCE_KEYS: CvSourceKey[] = [
  "personalProfile",
  "experience",
  "education",
  "skills",
  "qualifications",
];

/** Created-CV identity line (WD-30C body): user data, rendered raw. */
export const CREATED_CV = {
  name: WORKER.name,
  headline: "Software Engineer",
} as const;
