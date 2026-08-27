/** Mock data for 07 · Documents & Emergency Information
 *  (Figma WD-37..WD-40, section 1024:234 · mobile W-37..W-40, 758:2).
 *  Raw record data (names, ids, file names, dates) is never translated —
 *  presentation-layer copy lives in documents.copy.ts. */

export type DocumentProvenance = "verified" | "linked" | "self";

export type DocTypeKey =
  | "passport"
  | "residenceCard"
  | "visaCoe"
  | "employment"
  | "qualification"
  | "other";

export interface VaultFile {
  fileName: string; // e.g. "jlpt_n3_certificate.pdf"
  fileSize: string; // e.g. "1.2 MB" — shown after the name in file fields
  fileMeta: string; // e.g. "PDF · 1.2 MB"
  addedOn: string; // raw date, e.g. "24 Aug 2026"
}

export interface SelfDocDetail {
  typeKey: DocTypeKey;
  number: string | null;
  issued: string | null; // raw date
  expiry: string | null; // null = no expiry
  note: string | null; // user content, raw
  file: VaultFile;
}

export interface VerifiedDocDetail {
  recordKind: "passport" | "residence";
  number: string | null; // masked, e.g. "TR••••567"
  validUntil: string; // raw date
}

export interface VaultDocument {
  id: string;
  name: string;
  provenance: DocumentProvenance;
  expires: string | null; // raw date shown on the hub meta line
  selfAddedBy?: string; // e.g. "JEES"
  addedMonth?: string; // e.g. "Aug 2026"
  self?: SelfDocDetail;
  verified?: VerifiedDocDetail;
}

export const DOCUMENTS: VaultDocument[] = [
  {
    id: "passport",
    name: "Passport",
    provenance: "verified",
    expires: "12 Feb 2032",
    verified: {
      recordKind: "passport",
      number: "TR••••567",
      validUntil: "12 Feb 2032",
    },
  },
  {
    id: "residence-card",
    name: "Residence card",
    provenance: "linked",
    expires: "18 May 2027",
    verified: {
      recordKind: "residence",
      number: null,
      validUntil: "18 May 2027",
    },
  },
  {
    id: "jlpt-n3-certificate",
    name: "JLPT N3 certificate",
    provenance: "self",
    expires: null,
    selfAddedBy: "JEES",
    addedMonth: "Aug 2026",
    self: {
      typeKey: "qualification",
      number: "N3-2026-08421",
      issued: "12 Aug 2026",
      expiry: null,
      note: "Japanese language certificate.",
      file: {
        fileName: "jlpt_n3_certificate.pdf",
        fileSize: "1.2 MB",
        fileMeta: "PDF · 1.2 MB",
        addedOn: "24 Aug 2026",
      },
    },
  },
];

export function findDocument(id: string | undefined): VaultDocument | undefined {
  return DOCUMENTS.find((d) => d.id === id);
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  countryCode: string;
  phone: string; // full display number
  preferredLanguage: string;
  note: string; // free-text emergency note, raw user content
}

export const EMERGENCY_CONTACT: EmergencyContact = {
  name: "Siti Rahayu",
  relationship: "Mother",
  countryCode: "+62",
  phone: "+62 812 3456 7890",
  preferredLanguage: "Bahasa Indonesia",
  note: "Contact if I cannot respond directly.",
};

/** Quick-pick dates offered by the Issue/Expiry date picker overlays. */
export const ISSUE_DATE_OPTIONS = ["12 Aug 2026", "24 Aug 2026", "25 Aug 2026"];
export const EXPIRY_DATE_OPTIONS = ["18 May 2027", "12 Feb 2032"];

/** File the mock picker "selects" (WD-38F File Ready). */
export const READY_FILE: VaultFile = {
  fileName: "jlpt_n3_certificate.pdf",
  fileSize: "1.2 MB",
  fileMeta: "PDF · 1.2 MB",
  addedOn: "25 Aug 2026",
};

/** File the picker rejects (W-38D Unsupported File, 758:554). */
export const UNSUPPORTED_FILE_NAME = "certificate.exe";

/** Report draft prefilled in W-39H..W-39V (759:463 et al.). Raw user
 *  content — never translated. */
export const ISSUE_REPORT_DRAFT = {
  what: "The expiry date shown here is incorrect.",
  note: "Please compare with the passport image used for verification.",
};

/** File name the replacement upload shows in W-39C (759:203). */
export const REPLACEMENT_FILE_NAME = "jlpt_n3_certificate_new.pdf";
