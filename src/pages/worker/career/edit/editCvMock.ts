/** WD-31 Edit My CV — mock data (raw stored values, never translated). */

export type CvSectionKey =
  | "experience"
  | "education"
  | "skills"
  | "qualifications";

export interface CvDraft {
  /** Free-text user data — rendered raw, never localized. */
  headline: string;
  professionalSummary: string;
  /** Section order for the master CV (top → bottom). */
  order: CvSectionKey[];
  /** Section visibility (true = Included). */
  visibility: Record<CvSectionKey, boolean>;
}

export const CV_DRAFT: CvDraft = {
  headline: "Software Engineer",
  professionalSummary:
    "IT professional with experience across Indonesia and Japan.",
  order: ["experience", "education", "skills", "qualifications"],
  visibility: {
    experience: true,
    education: true,
    skills: true,
    qualifications: true,
  },
};
