import { EMPLOYER } from "@/data/caregiverReport";
import type { Language } from "@/i18n/language";

/**
 * Mock account + device data for Manager 01 · Entry & Recovery.
 * The Figma mocks read "Kitahara Healthcare / manager@kitahara.example"; this
 * app unified the employer as Sakura Care, so org/manager/facility come from
 * EMPLOYER. Nothing here is translated — it is data, not UI copy.
 */
export interface ManagerAuthAccount {
  /** EM-AUTH-01 "Work email" field value (842:1469). */
  workEmail: string;
  /** Rendered as 10 dots by the password input, matching the mock. */
  password: string;
  /** MD-AUTH-01 "Manager / HR ID" card value (1193:18). */
  managerId: string;
  /** MD-AUTH-01 "Organization / Company" card value (1193:21). */
  organization: string;
  /** MD-AUTH-01E "Ready for facility selection" line (1235:180). */
  managerRole: string;
  facility: string;
  /** EM-AUTH-03 "Verification code" field value (842:1631). */
  verificationCode: string;
  /** MD-AUTH-03 mint-grey code field (1193:54) — the field's tracking
   *  supplies the spacing the mock draws between the digits. */
  desktopVerificationCode: string;
  /** Seeded new/confirm password — 10 characters, as in the mock. */
  newPassword: string;
  /** EM-AUTH-02D types an address the directory does not know (842:1888). */
  unknownWorkEmail: string;
  /** EM-AUTH-01C lockout / 03I resend lock countdown (842:1529 / 1790). */
  lockoutRemaining: string;
  /** EM-AUTH-03G "Resend available in 00:59" countdown (842:1764). */
  resendCountdown: string;
}

export const MANAGER_AUTH_ACCOUNT: ManagerAuthAccount = {
  workEmail: "manager@sakuracare.example",
  password: "Sakura2026",
  managerId: EMPLOYER.manager,
  organization: EMPLOYER.name,
  managerRole: EMPLOYER.managerRole,
  facility: EMPLOYER.facility,
  verificationCode: "123456",
  desktopVerificationCode: "248196",
  newPassword: "Sakura2026",
  unknownWorkEmail: "manager@unknown.example",
  lockoutRemaining: "14:32",
  resendCountdown: "00:59",
};

/** iOS status bar time printed on every 390x844 manager auth frame. */
export const MANAGER_AUTH_STATUS_TIME = "9:41";

export interface ManagerAuthLanguageOption {
  code: Language;
  /** Endonym as written in the mock — never translated. */
  label: string;
}

/** "Language · 日本語 / Bahasa Indonesia / English" (nodes 914:3 / 1193:24). */
export const MANAGER_AUTH_LANGUAGES: ManagerAuthLanguageOption[] = [
  { code: "ja", label: "日本語" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "en", label: "English" },
];
