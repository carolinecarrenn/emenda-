import { useSyncExternalStore } from "react";

/**
 * Employer connection status (Figma W-49…W-52 / WD-49…WD-52).
 *
 * The consent flow is what flips the app between headless and
 * employer-connected mode, so the outcome of W-50 (connect) and W-51
 * (disconnect / access ended) has to survive a navigation: the manage screen
 * must stay on "Employer disconnected" after a disconnect, the access &
 * consent history must switch to its W-52A "Ended" variant, and Emenda Coin
 * must render its personal (W-60U) or access-ended (W-60V) overview instead
 * of the employer-connected one (W-60).
 *
 * Mock-only module store — same values on mobile and desktop, no persistence.
 */

export type EmployerLinkStatus = "connected" | "headless" | "access-ended";

export interface EmployerLinkState {
  status: EmployerLinkStatus;
  /** True once a grant has been revoked — drives the W-52A history variant. */
  hasEndedGrant: boolean;
}

const INITIAL_STATE: EmployerLinkState = {
  status: "connected",
  hasEndedGrant: false,
};

let snapshot: EmployerLinkState = INITIAL_STATE;
const listeners = new Set<() => void>();

function set(next: EmployerLinkState): EmployerLinkState {
  if (
    next.status === snapshot.status &&
    next.hasEndedGrant === snapshot.hasEndedGrant
  ) {
    return snapshot;
  }
  snapshot = next;
  for (const listener of listeners) listener();
  return snapshot;
}

export function subscribeEmployerLink(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getEmployerLinkSnapshot(): EmployerLinkState {
  return snapshot;
}

/** W-50C — the consent was given and the connection became active. */
export function connectEmployer(): EmployerLinkState {
  return set({ status: "connected", hasEndedGrant: snapshot.hasEndedGrant });
}

/** W-51C — the worker disconnected the employer from this device. */
export function disconnectEmployer(): EmployerLinkState {
  return set({ status: "headless", hasEndedGrant: true });
}

/** W-51F — the employer ended the connection on their side. */
export function endEmployerAccess(): EmployerLinkState {
  return set({ status: "access-ended", hasEndedGrant: true });
}

export function useEmployerLink(): EmployerLinkState {
  return useSyncExternalStore(
    subscribeEmployerLink,
    getEmployerLinkSnapshot,
    getEmployerLinkSnapshot,
  );
}
