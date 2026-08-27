/**
 * AD-00 access states. Every state the four access frames specify has a stable
 * `?state=` URL, following the app-wide convention in src/hooks/useScreenState.
 *
 *   (none)         AD-00B · Company Admin sign in
 *   error          AD-00D card 1 "Validation state" — wrong password
 *   language       AD-00A · Choose language
 *   reset          AD-00D card 2 · Password recovery, reset email sent
 *   expired        AD-00D card 2 "Expired link"
 *   reset-success  AD-00 step 02 "Success · Return to sign in"
 *   setup          AD-00D card 3 · First-time Admin setup (AD-00 step 03)
 *   denied         AD-00D card 3 "Permission mismatch"
 *   flow           AD-00 · Admin Access End-to-End board
 *   states         AD-00D · Concrete Access States board
 */
export const ADMIN_ACCESS_STATES = [
  "signin",
  "error",
  "language",
  "reset",
  "expired",
  "reset-success",
  "setup",
  "denied",
  "flow",
  "states",
] as const;

export type AdminAccessState = (typeof ADMIN_ACCESS_STATES)[number];

export function resolveAccessState(raw: string | null): AdminAccessState {
  const match = ADMIN_ACCESS_STATES.find((state) => state === raw);
  return match ?? "signin";
}

/** Sign in is the bare route; every other state carries its `?state=` key. */
export function accessHref(state: AdminAccessState): string {
  return state === "signin" ? "/admin/access" : `/admin/access?state=${state}`;
}
