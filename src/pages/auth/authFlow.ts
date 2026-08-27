import { AUTH_PHONE, MOCK_PIN, OTP_FULL } from "./authMock";

/** Flow rules for Section 01 · Worker Auth & Account Access.
 *
 *  The W-xx mocks define the error states (W-04B Invalid PIN, W-04C Too Many
 *  Attempts, W-05B Invalid Phone, W-06B Incorrect code, W-08B Phone Not Found)
 *  but not the server that produces them. These helpers stand in for that
 *  server so each of those states is reached by real input in the UI instead
 *  of only by a `?state=` URL. Environment-driven states (offline, server
 *  failure) stay on `?state=` — nothing in the UI can trigger them honestly.
 *
 *  Raw comparison values live in authMock.ts — never translated. */

/** Digits only, so "812 3456 7890" and "81234567890" compare equal. */
export function phoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/** True for the mock account's verified number — the one Log in and Forgot
 *  PIN accept. Any other number is "no account found" (W-08B). */
export function isAccountPhone(value: string): boolean {
  return phoneDigits(value) === phoneDigits(AUTH_PHONE.number);
}

/** Shape check used by Register (W-05B Invalid Phone). */
export function isPlausiblePhone(value: string): boolean {
  const digits = phoneDigits(value);
  return digits.length >= 9 && digits.length <= 15;
}

/** True when the typed PIN matches the account PIN (W-04B otherwise). */
export function isAccountPin(value: string): boolean {
  return value === MOCK_PIN;
}

/** True when the six OTP boxes hold the code that was "sent" (W-06B otherwise). */
export function isValidOtp(digits: readonly string[]): boolean {
  return digits.join("") === OTP_FULL.join("");
}

/** Wrong PINs allowed before W-04C Too Many Attempts locks the button. */
export const MAX_PIN_ATTEMPTS = 3;

/** "Resend code" presses allowed before W-06F Too Many Requests. */
export const MAX_OTP_RESENDS = 3;
