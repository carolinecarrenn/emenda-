import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_ORG } from "../../admin.mock";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import type { ActivityLogRow } from "../activity-log.mock";
import {
  actionLabel,
  actorLabel,
  targetLabel,
  whenLabel,
} from "../activityText";
import { ActivityLogNoResults } from "./ActivityLogNoResults";

/* AD-08 "Company activity log" (1225:641): 1144x580 white card, radius 12,
   1px #d6e3de. 15px inner padding — 13px bold title over the 8px subtitle,
   the 8px semibold column header row (Action 0 / Actor 524 / Target 744 /
   When 994 inside the 1114 content width), a 1px #d6e3de rule, then 70px
   audit rows separated by 1px #f7faf8 lines, and the "Export CSV" /
   "Filter by date" / "View details" footer buttons (1225:679…1225:683).

   Every row opens AD-08B; the audit trail itself is append-only, so a row
   offers inspection only — no edit, delete or hide affordance exists. */

const COLUMNS =
  "lg:grid-cols-[minmax(0,524fr)_minmax(0,220fr)_minmax(0,250fr)_minmax(0,120fr)]";

export function ActivityLogTable({
  rows,
  onOpenRow,
  onResetFilters,
}: {
  rows: ActivityLogRow[];
  onOpenRow: (row: ActivityLogRow) => void;
  onResetFilters: () => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  return (
    <section className="rounded-[12px] border border-[#d6e3de] bg-white px-[12px] pt-[15px] pb-[19px] lg:px-[15px]">
      <h2 className="text-[13px] leading-none font-bold text-[#17362e]">
        {c.table.title}
      </h2>
      <p className="mt-[5px] text-[10px] leading-[14px] text-[#65746d] lg:text-[8px] lg:leading-none">
        {c.table.subtitle.replace("{org}", ADMIN_ORG)}
      </p>

      <div
        aria-hidden="true"
        className={`mt-[19px] hidden border-b border-[#d6e3de] pb-[9px] text-[8px] font-semibold text-[#65746d] lg:grid ${COLUMNS}`}
      >
        <span>{c.table.columns.action}</span>
        <span>{c.table.columns.actor}</span>
        <span>{c.table.columns.target}</span>
        <span>{c.table.columns.when}</span>
      </div>

      {rows.length === 0 ? (
        <ActivityLogNoResults onResetFilters={onResetFilters} />
      ) : (
        <ul className="mt-[12px] flex flex-col lg:mt-0">
          {rows.map((row) => (
            <li key={row.id} className="border-b border-[#f7faf8]">
              <button
                type="button"
                onClick={() => onOpenRow(row)}
                aria-label={`${c.table.openDetail} — ${actionLabel(row, c)}`}
                className={`flex w-full flex-col gap-[4px] rounded-[8px] px-[6px] py-[10px] text-left hover:bg-[#f7faf8] focus-visible:ring-2 focus-visible:ring-[#083d2d] focus-visible:outline-none lg:h-[70px] lg:grid lg:items-center lg:gap-0 lg:rounded-none lg:px-0 lg:py-0 ${COLUMNS}`}
              >
                <span className="text-[11px] leading-[15px] font-semibold text-[#17362e] lg:text-[9px] lg:leading-none">
                  {actionLabel(row, c)}
                </span>
                <span className="text-[10px] leading-[14px] text-[#65746d] lg:text-[9px] lg:leading-none">
                  <span className="lg:hidden">
                    {c.table.columns.actor}:{" "}
                  </span>
                  {actorLabel(row, c)}
                </span>
                <span className="text-[10px] leading-[14px] text-[#65746d] lg:text-[9px] lg:leading-none">
                  <span className="lg:hidden">
                    {c.table.columns.target}:{" "}
                  </span>
                  {targetLabel(row, c)}
                </span>
                <span className="text-[10px] leading-[14px] text-[#65746d] lg:text-[9px] lg:leading-none">
                  {whenLabel(row, c)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-[32px] flex flex-wrap items-center gap-[12px] lg:gap-[16px]">
        <button
          type="button"
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5]"
        >
          {c.table.exportCsv}
        </button>
        <button
          type="button"
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5]"
        >
          {c.table.filterByDate}
        </button>
        <button
          type="button"
          onClick={() => rows[0] && onOpenRow(rows[0])}
          disabled={rows.length === 0}
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941] disabled:opacity-50"
        >
          {c.table.viewDetails}
        </button>
      </div>
    </section>
  );
}
