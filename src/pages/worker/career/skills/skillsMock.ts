/** Mock data for WD-27 Skills & Languages. Skill and language names are
 *  user data — raw. Proficiency levels are UI enum keys (translated). */
export type ProficiencyLevel =
  | "basic"
  | "conversational"
  | "working"
  | "native";

export interface LanguageEntry {
  name: string;
  level: ProficiencyLevel;
}

/** WD-27 base card shows five chips + "+7 more" out of 12 total. */
export const VISIBLE_SKILLS = [
  "JavaScript",
  "Project management",
  "React",
  "Team coordination",
  "UI/UX",
];

export const TOTAL_SKILLS = 12;

/** WD-27B edit card shows exactly these four removable chips. */
export const EDITOR_SKILLS = [
  "JavaScript",
  "React",
  "Project management",
  "UI/UX",
];

export const LANGUAGES: LanguageEntry[] = [
  { name: "Japanese", level: "conversational" },
  { name: "English", level: "working" },
  { name: "Indonesian", level: "native" },
];

export const PROFICIENCY_LEVELS: ProficiencyLevel[] = [
  "basic",
  "conversational",
  "working",
  "native",
];
