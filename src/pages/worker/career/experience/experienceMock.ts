import { EMPLOYER } from "@/data/caregiverReport";

/** Mock data for WD-25 Experience. Record content is user data — not
 *  translated. The mock's "ABC Japan" employer is unified to Sakura Care. */
export interface ExperienceEntry {
  id: string;
  role: string;
  employer: string;
  period: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string;
  verified: boolean;
}

export const VERIFIED_EXPERIENCE: ExperienceEntry = {
  id: "exp-verified",
  role: "Software Engineer",
  employer: EMPLOYER.name,
  period: "Apr 2025 – Mar 2026",
  country: "Japan",
  startDate: "Apr 2025",
  endDate: "Mar 2026",
  description: "",
  verified: true,
};

export const SELF_EXPERIENCE: ExperienceEntry = {
  id: "exp-self",
  role: "IT Project Intern",
  employer: "Previous employer",
  period: "2024",
  country: "Indonesia",
  startDate: "Jan 2024",
  endDate: "Dec 2024",
  description: "Supported internal IT projects and documentation.",
  verified: false,
};

/** WD-25C validation-error variant field values (role empty, end < start). */
export const ERROR_FORM_VALUES = {
  role: "",
  employer: EMPLOYER.name,
  country: "Japan",
  startDate: "Apr 2025",
  endDate: "Mar 2024",
  description: "",
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Parses "Mar 2024" → comparable number; null when not month-year shaped. */
export function monthYearValue(raw: string): number | null {
  const match = raw.trim().match(/^([A-Za-z]{3}) (\d{4})$/);
  if (!match) return null;
  const month = MONTHS.indexOf(match[1]);
  if (month === -1) return null;
  return Number(match[2]) * 12 + month;
}
