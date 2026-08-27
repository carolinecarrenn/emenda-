/** Mock auth data for Section 01 · Worker Auth & Account Access.
 *  Raw data — never translated; a real API replaces this later. */

export interface AuthPhone {
  /** Country of the verified number as shown in the country select. */
  country: string;
  /** Dial-code chip label, exact mock text (double space per Figma). */
  dialCode: string;
  /** Local number placeholder shown in the phone field. */
  number: string;
  /** Masked display used in the OTP subtitle. */
  masked: string;
}

export const AUTH_PHONE: AuthPhone = {
  country: "Indonesia",
  dialCode: "ID  +62",
  number: "812 3456 7890",
  masked: "+62 812••••7890",
};

/** WD-06 base shows the first three digits typed: 4 8 2. */
export const OTP_PREFILL = ["4", "8", "2", "", "", ""];
/** Fully-entered code used by the code-entered / loading variants. */
export const OTP_FULL = ["4", "8", "2", "9", "1", "3"];

/** Countdown seeds (seconds) from the mocks. */
export const OTP_COUNTDOWN_SECONDS = 42; // "00:42"
export const OTP_RESEND_SECONDS = 59; // "00:59"
export const LOCKOUT_SECONDS = 14 * 60 + 32; // "14:32"

/** Mock PIN prefilled into the login PIN field (renders as six dots). */
export const MOCK_PIN = "482913";
