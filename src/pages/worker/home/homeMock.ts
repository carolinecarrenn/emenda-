/**
 * Headless Home state machine data (Figma WD-18 base + A..L, section 712:5;
 * mobile 529:2). One screen, thirteen states: the default render (no ?state=)
 * is Employer Connected (WD-18J); the other twelve variants carry a
 * ?state=<name> URL. Several are also reached by acting: W-12 "Do this later"
 * and W-17E "Continue to Home" land on new-user, W-17 pending lands on
 * identity-pending, W-17G on needs-attention, W-17D on headless, and the
 * offline banner's "Try again" returns to the connected default. Strings live
 * in home.copy.ts — this file holds the non-copy data a real API would supply.
 */

/** Emenda Coin balance shown in the mobile-only W-18 Coin card. */
export const HOME_COIN_BALANCE = "1,240";

/** ?state= values (the 12 non-default WD-18 variants). */
export const HOME_STATES = [
  "headless",
  "new-user",
  "identity-pending",
  "needs-attention",
  "profile-incomplete",
  "employer-not-connected",
  "offline",
  "loading",
  "invite-received",
  "profile-complete",
  "connected-offline",
  "access-ended",
] as const;

export type HomeScreenState = (typeof HOME_STATES)[number];

/** "connected" = the WD-18J default when no ?state= is set. */
export type HomeStateName = HomeScreenState | "connected";

export function resolveHomeState(param: string | null): HomeStateName {
  return param !== null &&
    (HOME_STATES as readonly string[]).includes(param)
    ? (param as HomeScreenState)
    : "connected";
}

/** WD-18 profile completeness per state (drives the green progress bar). */
export const PROFILE_PERCENTS: Partial<Record<HomeStateName, number>> = {
  headless: 65,
  "new-user": 20,
  "identity-pending": 45,
  "needs-attention": 45,
  "profile-incomplete": 45,
  "employer-not-connected": 65,
  offline: 65,
  "invite-received": 65,
  "access-ended": 65,
};

/** WD-18F "Last synced 09:38" — the sync timestamp is mock data. */
export const LAST_SYNCED_TIME = "09:38";
