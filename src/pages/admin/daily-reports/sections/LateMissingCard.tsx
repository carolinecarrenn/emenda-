import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { LATE_MISSING_ROWS } from "../daily-reports.mock";

/* AD-06 "Late & missing submissions" (1223:2703): 568x512 white card,
   radius 12, 1px #d6e3de — 13px bold title over its 8px #65746d line, an
   8px semibold column strip on 194/140/112/90 columns, a 536px #d6e3de rule,
   then five 68px-pitch rows (9px semibold #17362e employee, 9px #65746d for
   the rest). The card closes with the dark "Send reminder" and outline
   "Export status" buttons (32px, radius 10).

   Each row opens the AD-06D "Employee submission detail" panel — AD-06C
   step 02 ("Inspect employee · Open submission status detail").
   Below lg the 536px table scrolls horizontally, the AD-01 convention. */
export function LateMissingCard({
  onSendReminder,
  onOpenRow,
}: {
  onSendReminder: () => void;
  onOpenRow: () => void;
}) {
  const c = useSectionCopy(DAILY_REPORTS_COPY);
  const { language } = useLanguage();

  return (
    <div className="flex flex-col rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] lg:h-[512px] lg:w-[568px] lg:pb-[27px]">
      <p className="text-[13px] leading-none font-bold text-[#17362e]">
        {c.table.title}
      </p>
      <p className="mt-[5px] text-[10px] leading-none text-[#65746d] lg:text-[8px]">
        {c.table.subtitle}
      </p>

      <div className="-mx-[15px] mt-[16px] overflow-x-auto px-[15px]">
        <div className="min-w-[536px]">
          <div className="flex items-center text-[9px] font-semibold text-[#65746d] lg:text-[8px]">
            <p className="w-[194px] shrink-0">{c.table.columns.employee}</p>
            <p className="w-[140px] shrink-0">{c.table.columns.team}</p>
            <p className="w-[112px] shrink-0">{c.table.columns.status}</p>
            <p className="w-[90px] shrink-0">{c.table.columns.submitted}</p>
          </div>

          <div className="mt-[12px] h-px w-[536px] bg-[#d6e3de]" />

          {LATE_MISSING_ROWS.map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={onOpenRow}
              aria-label={`${row.employee} — ${c.table.openDetail}`}
              className="flex h-[52px] w-full items-center rounded-[8px] text-left text-[9px] hover:bg-[#f7faf8] lg:h-[68px]"
            >
              <span className="w-[194px] shrink-0 truncate pr-[8px] font-semibold text-[#17362e]">
                {row.employee}
              </span>
              <span className="w-[140px] shrink-0 truncate pr-[8px] text-[#65746d]">
                {row.team}
              </span>
              <span className="w-[112px] shrink-0 truncate pr-[8px] text-[#65746d]">
                {localizeTerm(row.status, language)}
              </span>
              <span className="w-[90px] shrink-0 text-[#65746d]">
                {row.submitted}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-[16px] flex items-center gap-[10px] lg:mt-auto">
        <button
          type="button"
          onClick={onSendReminder}
          className="flex items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941] lg:h-[32px] lg:w-[106px] lg:px-0 lg:py-0"
        >
          {c.table.sendReminder}
        </button>
        <button
          type="button"
          className="flex items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] lg:h-[32px] lg:w-[100px] lg:px-0 lg:py-0"
        >
          {c.table.exportStatus}
        </button>
      </div>
    </div>
  );
}
