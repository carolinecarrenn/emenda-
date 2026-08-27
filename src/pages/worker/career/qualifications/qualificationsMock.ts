import { EMPLOYER } from "@/data/caregiverReport";

/** Mock data for WD-28 Qualifications & Training. Record content is user /
 *  employer data — raw. The mock's "ABC Japan" is unified to Sakura Care. */
export type RecordTypeKey =
  | "external"
  | "company"
  | "training"
  | "certification"
  | "other";

export interface QualificationRecord {
  id: string;
  type: RecordTypeKey;
  name: string;
  issuer: string;
  proofAttached: boolean;
}

export const EXTERNAL_QUALIFICATION: QualificationRecord = {
  id: "qual-external",
  type: "external",
  name: "JLPT N3",
  issuer: "JEES",
  proofAttached: true,
};

export const COMPANY_QUALIFICATION: QualificationRecord = {
  id: "qual-company",
  type: "company",
  name: "Machine Operation Level 1",
  issuer: EMPLOYER.name,
  proofAttached: false,
};

export const EMPLOYER_TRAINING = {
  id: "qual-training",
  name: "Workplace Safety Training",
  provider: EMPLOYER.name,
  completedOn: "14 Aug 2026",
} as const;

/** WD-28D/E pending employer credential (same training pre-acceptance). */
export const EMPLOYER_CREDENTIAL = {
  training: EMPLOYER_TRAINING.name,
  provider: EMPLOYER_TRAINING.provider,
  completedOn: EMPLOYER_TRAINING.completedOn,
} as const;

/** WD-28B Add-form sample values. */
export const ADD_FORM_VALUES = {
  name: "JLPT N3",
  issuer: "JEES",
  issuedDate: "Aug 2026",
  expiryDate: "No expiry",
};

export const PROOF_FILE_NAME = "certificate_jlpt.pdf";
