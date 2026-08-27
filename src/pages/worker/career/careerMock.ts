import { EMPLOYER, WORKER } from "@/data/caregiverReport";

/**
 * Mock data for Career & CV hub + CV pipeline (Figma WD-21..WD-24 / W-21..W-24).
 * Data only (names, employers, dates, extracted CV content) — UI copy lives in
 * career.copy.ts. Raw dates use the "DD Mon YYYY" store format and are
 * localized at render time via formatDisplayDate.
 */

export const CV_OWNER = {
  name: WORKER.name,
  displayName: "PUTRI RAHAYU",
  headline: "Software Engineer",
  headlineLocation: "Software Engineer · Tokyo, Japan",
} as const;

export const CV_UPDATED_DATE = "24 Aug 2026";

/** Work preference values chosen by the worker (data, not UI copy). */
export const WORK_PREFERENCES_SUMMARY = "Software roles · Japan · Full-time";

export interface ExtractedExperience {
  id: string;
  role: string;
  employer: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const EXTRACTED_EXPERIENCES: ExtractedExperience[] = [
  {
    id: "exp-1",
    role: "Software Engineer",
    employer: EMPLOYER.name,
    period: "2024–Present",
    startDate: "2024",
    endDate: "Present",
    description: "Software engineering and IT project delivery.",
  },
  {
    id: "exp-2",
    role: "IT Project Intern",
    employer: "Previous employer",
    period: "2024",
    startDate: "2024",
    endDate: "2024",
    description: "Internship project work in Indonesia.",
  },
];

export interface ExtractedEducation {
  id: string;
  degree: string;
  school: string;
  fieldOfStudy: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const EXTRACTED_EDUCATION: ExtractedEducation[] = [
  {
    id: "edu-1",
    degree: "Bachelor's degree",
    school: "University in Indonesia",
    fieldOfStudy: "Information Technology",
    period: "2022–2026",
    startDate: "2022",
    endDate: "2026",
    description: "Undergraduate study in Indonesia.",
  },
];

/** WD-23 base summary lines (data extracted from the uploaded CV). */
export const IMPORT_EXAMPLES = {
  experience: `Software Engineer · ${EMPLOYER.name} · 2024–Present`,
  education: "Bachelor's degree · Indonesia",
  skills: "JavaScript · Project management · Japanese · +12",
  qualifications: "JLPT N3 · AWS Cloud Practitioner",
} as const;

/** WD-23E extracted skills & languages — each entry is shown as its own
 *  check-marked chip inside the card (WD-23E / W-23E). */
export const EXTRACTED_SKILL = "JavaScript";
export const EXTRACTED_SKILLS = [
  "JavaScript",
  "Project management",
  "React",
  "UI/UX",
  "Team coordination",
];
export const EXTRACTED_LANGUAGES = ["Japanese", "English", "Indonesian"];
export const EXTRACTED_LANGUAGE = "Japanese · Conversational";

export interface ExtractedQualification {
  id: string;
  /** Provenance eyebrow shown on the WD-23J review card. */
  type: "external" | "certification";
  name: string;
  issuer: string;
}

export const EXTRACTED_QUALIFICATIONS: ExtractedQualification[] = [
  { id: "q-1", type: "external", name: "JLPT N3", issuer: "JEES" },
  { id: "q-2", type: "certification", name: "AWS Cloud Practitioner", issuer: "AWS" },
];

export interface CvSnapshot {
  id: string;
  employer: string;
  date: string;
}

/** WD-24E/F/G immutable application snapshots. */
export const CV_SNAPSHOTS: CvSnapshot[] = [
  { id: "sakura", employer: EMPLOYER.name, date: "12 Aug 2026" },
  { id: "sample", employer: "Sample employer", date: "03 Jul 2026" },
];

/** WD-24A/B verified employer work update proposed for the master CV. */
export const VERIFIED_UPDATE = {
  employer: EMPLOYER.name,
  role: "Software Engineer",
  period: "Apr 2025 – Mar 2026",
  experienceSummary: `${EMPLOYER.name} · Software Engineer · Apr 2025–Mar 2026`,
  skillsSummary: "Project coordination · Japanese workplace communication",
} as const;

/** WD-22A uploading state file. */
export const UPLOAD_FILE_NAME = "putri_rahayu_cv.pdf";
export const UPLOAD_PROGRESS_PERCENT = 44;
