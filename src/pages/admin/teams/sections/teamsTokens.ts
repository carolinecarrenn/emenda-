import type { TeamsTone } from "../teams.mock";

/* Non-component half of the AD-03 primitives: the pastel tone maps and the
   copy interpolation helper, kept out of teamsUi.tsx so that file exports
   components only (react/only-export-components). Colours are the Company
   Admin palette already built for AD-01. */

/** 30px stat tile fills — AD-03 stat row (1223:1208 … 1223:1227). */
export const TONE_TILE: Record<TeamsTone, string> = {
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  blue: "bg-[#eff5fc] text-[#2f5e9b]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
  red: "bg-[#fdf0ef] text-[#b04139]",
};

/** Rounded pill fills — "No owner" (1223:1252), High / Medium (1223:1292). */
export const TONE_PILL: Record<TeamsTone, string> = {
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  blue: "bg-[#eff5fc] text-[#2f5e9b]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
  red: "bg-[#fdf0ef] text-[#b04139]",
};

/** Interpolates {token} slots in a copy template with raw mock data. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return Object.entries(values).reduce(
    (text, [token, value]) => text.replaceAll(`{${token}}`, String(value)),
    template,
  );
}
