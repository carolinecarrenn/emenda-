import type { AdminemployeesCopy } from "./employees.copy";
import type {
  AdminEmployee,
  EmployeeFilterKey,
  EmployeeStatus,
  LastActive,
} from "./employees.mock";

/**
 * Shared presentation helpers for the AD-02 employees area. Kept out of the
 * section components so every file under sections/ exports components only.
 */

/** AD-02 "Last active" column (1223:842 … 1223:874). */
export function formatLastActive(
  value: LastActive,
  c: AdminemployeesCopy["lastActive"],
): string {
  switch (value.kind) {
    case "justNow":
      return c.justNow;
    case "minutes":
      return c.minutesAgo.replace("{n}", String(value.value));
    case "hours":
      return c.hoursAgo.replace("{n}", String(value.value));
    case "never":
      return c.never;
  }
}

/**
 * Status pill tones exactly as the frames draw them: mint for Active / Invited
 * / Incomplete (AD-02B 1226:34, AD-02 1223:915 and 1223:920), amber for the
 * Pending profile pill of the Selected employee card (AD-02 1223:897), and the
 * red register for the Inactive result described in AD-02D (1239:270).
 */
export const STATUS_PILL: Record<EmployeeStatus, string> = {
  Active: "bg-[#e8f5f0] text-[#083d2d]",
  Invited: "bg-[#e8f5f0] text-[#083d2d]",
  Incomplete: "bg-[#e8f5f0] text-[#083d2d]",
  "Pending profile": "bg-[#fdf7ec] text-[#b57023]",
  Inactive: "bg-[#fdf0ef] text-[#b04139]",
};

/** Applies the AD-02 filter bar (search field + the four pills). */
export function filterEmployees(
  employees: AdminEmployee[],
  filter: EmployeeFilterKey,
  query: string,
): AdminEmployee[] {
  const needle = query.trim().toLowerCase();
  return employees.filter((employee) => {
    if (filter !== "all" && employee.group !== filter) return false;
    if (!needle) return true;
    return (
      employee.name.toLowerCase().includes(needle) ||
      employee.email.toLowerCase().includes(needle) ||
      employee.id.toLowerCase().includes(needle)
    );
  });
}
