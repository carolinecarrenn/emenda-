import { EMPLOYER } from "@/data/caregiverReport";

/** Section 10 · Connect Employer & Consent (WD-49..WD-52 / W-49..W-52).
 *  Record data only — never localized. The mocks print "ABC Japan Co., Ltd.";
 *  the shared caregiver fixture supplies the employer name instead. */

export interface EmployerConnectionRecord {
  /** Legal name shown in the EMPLOYER card and the history entry. */
  legalName: string;
  /** Short name used inside sentences ("Connected to …"). */
  shortName: string;
  /** Invite code pre-filled in the WD-49 INVITE CODE field. */
  inviteCode: string;
  /** A second code the mock treats as expired / revoked (WD-49D). */
  expiredInviteCode: string;
}

export const EMPLOYER_CONNECTION: EmployerConnectionRecord = {
  legalName: `${EMPLOYER.name} Co., Ltd.`,
  shortName: EMPLOYER.name,
  inviteCode: "ABCJ-7K2M",
  expiredInviteCode: "ABCJ-0000",
};

export type AccessHistoryKind = "approved" | "ended";

export interface AccessHistoryEntry {
  id: string;
  kind: AccessHistoryKind;
  employerName: string;
}

/** WD-52 — one approved grant, status Active. */
export const ACCESS_HISTORY_ACTIVE: AccessHistoryEntry[] = [
  {
    id: "grant-2026-08",
    kind: "approved",
    employerName: EMPLOYER_CONNECTION.legalName,
  },
];

/** WD-52A / W-52A — the same grant with an Ended status plus the revocation. */
export const ACCESS_HISTORY_ENDED: AccessHistoryEntry[] = [
  {
    id: "grant-2026-08",
    kind: "approved",
    employerName: EMPLOYER_CONNECTION.legalName,
  },
  {
    id: "revoke-2026-08",
    kind: "ended",
    employerName: EMPLOYER_CONNECTION.legalName,
  },
];
