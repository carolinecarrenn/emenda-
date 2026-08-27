import { WORKER } from "@/data/caregiverReport";

/** Personal Profile mock data (Figma WD-19..WD-20 / W-19..W-20).
 *  Data only — a real API can replace this module later.
 *  Person names, locations, and the coin balance are mock DATA, not UI copy. */
export interface WorkerProfile {
  displayName: string;
  initials: string;
  email: string;
  country: string;
  city: string;
  aboutMe: string;
}

export const PROFILE: WorkerProfile = {
  displayName: WORKER.name,
  initials: "PR",
  email: "putri.rahayu@example.com",
  country: "Japan",
  city: "Tokyo",
  aboutMe: "Living and working in Japan.",
};

/** "Tokyo, Japan" style display location. */
export function profileLocation(profile: WorkerProfile): string {
  return `${profile.city}, ${profile.country}`;
}

/** Country list from the Select Country overlay (Japan pre-selected). */
export const PROFILE_COUNTRIES = [
  "Japan",
  "Indonesia",
  "Philippines",
  "Vietnam",
  "Nepal",
] as const;

/** Emenda Coin balance shown in the mobile Coin strip (W-19). */
export const COIN_BALANCE = "1,240";

/** WD-20A seed: the exact invalid draft shown in the Validation Error mock. */
export const INVALID_PROFILE_DRAFT: WorkerProfile = {
  displayName: WORKER.name,
  initials: "PR",
  email: "putri@",
  country: "",
  city: "",
  aboutMe: "Living and working in Japan.",
};
