import { formatDisplayDate } from "@/i18n/format";
import type { Language } from "@/i18n/language";
import type { ActivityLogCopy } from "./activity-log.copy";
import type {
  ActivityCategory,
  ActivityChangeValue,
  ActivityLogRow,
} from "./activity-log.mock";

/**
 * Composition helpers shared by the AD-08 sections. Every one of them joins a
 * translated label from activity-log.copy.ts with raw record data from
 * activity-log.mock.ts — the record itself is never rewritten per language.
 */

/** "Manager assigned · Team Ops A" (AD-08 "Action" column, 1225:649). */
export function actionLabel(row: ActivityLogRow, c: ActivityLogCopy): string {
  const name = c.actions[row.action];
  return row.detail ? `${name} · ${row.detail}` : name;
}

/** "Nadia" / "System" (AD-08 "Actor" column, 1225:650 and 1225:675). */
export function actorLabel(row: ActivityLogRow, c: ActivityLogCopy): string {
  return row.actor.kind === "system" ? c.actors.system : row.actor.name;
}

/** "Nadia · Company Admin" (AD-08B actor row, 1226:1154). */
export function actorDetailLabel(
  row: ActivityLogRow,
  c: ActivityLogCopy,
): string {
  return row.actor.kind === "system"
    ? c.actors.system
    : `${row.actor.name} · ${c.detail.companyAdmin}`;
}

/** "Dimas Pratama" / "Manager · Team Ops A" / "22 employees" (1225:651…677). */
export function targetLabel(row: ActivityLogRow, c: ActivityLogCopy): string {
  switch (row.target.kind) {
    case "person":
      return row.target.name;
    case "managerTeam":
      return c.targets.managerTeam.replace("{team}", row.target.team);
    case "companyRewardPolicy":
      return c.targets.companyRewardPolicy;
    case "company":
      return row.target.name;
    case "employeeCount":
      return c.targets.employeeCount.replace(
        "{count}",
        String(row.target.count),
      );
  }
}

/** "Today 20:12" (AD-08 "When" column, 1225:652). */
export function whenLabel(row: ActivityLogRow, c: ActivityLogCopy): string {
  return `${c.table.today} ${row.time}`;
}

/** "25 Aug 2026 · 18:35 WIB" (AD-08B time row, 1226:1156). */
export function timestampLabel(
  row: ActivityLogRow,
  language: Language,
): string {
  return `${formatDisplayDate(row.date, language)} · ${row.time} ${row.timeZone}`;
}

/** "Reports Oversight" (AD-08B source row, 1226:1160). */
export function sourceLabel(row: ActivityLogRow, c: ActivityLogCopy): string {
  return c.detail.sources[row.source];
}

/** Filter pill label for a record's category (AD-08 pills 1225:631…1225:640). */
export function categoryLabel(
  category: ActivityCategory,
  c: ActivityLogCopy,
): string {
  return c.filters[category];
}

function changeValueLabel(
  value: ActivityChangeValue,
  c: ActivityLogCopy,
): string {
  return value.kind === "unassigned" ? c.detail.values.unassigned : value.text;
}

/** "Owner: Unassigned" (AD-08B change block, 1226:1166). */
export function changeBeforeLabel(
  row: ActivityLogRow,
  c: ActivityLogCopy,
): string {
  return `${c.detail.fields[row.change.field]}: ${changeValueLabel(row.change.before, c)}`;
}

/** "Owner: Team Ops A" (AD-08B change block, 1226:1168). */
export function changeAfterLabel(
  row: ActivityLogRow,
  c: ActivityLogCopy,
): string {
  return `${c.detail.fields[row.change.field]}: ${changeValueLabel(row.change.after, c)}`;
}

/** "Owner: Unassigned → Team Ops A" (AD-08D "Before → after", 1239:711). */
export function changeInlineLabel(
  row: ActivityLogRow,
  c: ActivityLogCopy,
): string {
  const field = c.detail.fields[row.change.field];
  const before = changeValueLabel(row.change.before, c);
  const after = changeValueLabel(row.change.after, c);
  return `${field}: ${before} → ${after}`;
}

/** AD-08C step 3 — the primary button follows the related object. */
export function openObjectLabel(
  row: ActivityLogRow,
  c: ActivityLogCopy,
): string {
  return c.detail.open[row.relatedObject];
}

/** Free-text match behind the AD-08 "Search actor, target, or action" field. */
export function matchesQuery(
  row: ActivityLogRow,
  query: string,
  c: ActivityLogCopy,
): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  return [
    actionLabel(row, c),
    actorLabel(row, c),
    targetLabel(row, c),
    row.id,
  ].some((field) => field.toLowerCase().includes(needle));
}
