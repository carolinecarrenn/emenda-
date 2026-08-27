import { EMPLOYER, WORKER } from "@/data/caregiverReport";

/**
 * Data for LP-05 Unified Sign in and LP-06/07/08 Post-auth Routing.
 * Never translated: person names, organization names, roles, EMENDA IDs.
 */

/** LP-06/07/08 render the account ID drawn in the mocks (EMD-ID-004821). */
export const ROUTING_EMENDA_ID = "EMD-ID-004821";

/** "Welcome back, Putri" — first name only, from the shared worker record. */
export const WORKER_FIRST_NAME = WORKER.name.split(" ")[0];

/** LP-05 draws the password field pre-filled with dots. */
export const SIGN_IN_SEED = {
  accountId: "",
  password: "emenda2026",
} as const;

export type AccountRoute = "headless" | "work" | "employee";

export const ACCOUNT_ROUTES: readonly AccountRoute[] = [
  "headless",
  "work",
  "employee",
] as const;

export function isAccountRoute(value: string | null): value is AccountRoute {
  return value !== null && (ACCOUNT_ROUTES as readonly string[]).includes(value);
}

export interface RoutingAccount {
  variant: AccountRoute;
  emendaId: string;
  firstName: string;
  /** Worker role shown on the LP-07 employer block. */
  role: string;
  /** Facility (LP-07) or organization (LP-08); headless has none. */
  organization: string | null;
  /** Facility manager shown on the LP-07 role line. */
  manager: string | null;
  /** Where the primary button sends the person. */
  primaryTo: string;
  /** Where the secondary button sends the person. */
  secondaryTo: string;
}

export const ROUTING_ACCOUNTS: Record<AccountRoute, RoutingAccount> = {
  // LP-06 — worker with no employer connection.
  headless: {
    variant: "headless",
    emendaId: ROUTING_EMENDA_ID,
    firstName: WORKER_FIRST_NAME,
    role: WORKER.role,
    organization: null,
    manager: null,
    primaryTo: "/worker",
    secondaryTo: "/worker/employer/connect",
  },
  // LP-07 — worker with an active employer connection.
  work: {
    variant: "work",
    emendaId: ROUTING_EMENDA_ID,
    firstName: WORKER_FIRST_NAME,
    role: WORKER.role,
    organization: EMPLOYER.facility,
    manager: EMPLOYER.manager,
    primaryTo: "/worker",
    secondaryTo: "/worker/employer",
  },
  // LP-08 — employee / organization account.
  employee: {
    variant: "employee",
    emendaId: ROUTING_EMENDA_ID,
    firstName: WORKER_FIRST_NAME,
    role: WORKER.role,
    organization: EMPLOYER.name,
    manager: null,
    primaryTo: "/manager",
    secondaryTo: "/worker/employer",
  },
};
