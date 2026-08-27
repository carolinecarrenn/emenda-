/** Mock data for WD-26 Education. Record content is user data — raw. */
export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  fieldOfStudy: string;
  country: string;
  startYear: string;
  endYear: string;
}

export const EDUCATION_ENTRY: EducationEntry = {
  id: "edu-1",
  degree: "Bachelor’s degree",
  institution: "University in Indonesia",
  fieldOfStudy: "Information Technology",
  country: "Indonesia",
  startYear: "2022",
  endYear: "2026",
};

/** W-26C validation-error variant field values (school empty, start > end). */
export const ERROR_FORM_VALUES = {
  institution: "",
  degree: "Bachelor’s degree",
  fieldOfStudy: "Information Technology",
  country: "Indonesia",
  startYear: "2027",
  endYear: "2026",
};
