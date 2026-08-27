import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { FOCUS_REPORT } from "../reports.mock";

/* AD-04 "Selected report" (1223:1688): 352x232 white card, radius 12, 1px
   #d6e3de — 13px bold title over the 8px "{id} quick summary" caption, four
   label/value rows on a 24px pitch (9px semibold #65746d label at x15, 9px
   #17362e value at x119), then the "Open detail" (#083d2d) / "Assign owner"
   (white) 32px button pair. */
export function SelectedReportCard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  const rows = [
    { key: "issue", label: c.selected.issue, value: FOCUS_REPORT.issue },
    {
      key: "reporter",
      label: c.selected.reporter,
      value: FOCUS_REPORT.reporter,
    },
    {
      key: "owner",
      label: c.selected.owner,
      value: FOCUS_REPORT.owner ?? c.selected.unassigned,
    },
    {
      key: "nextAction",
      label: c.selected.nextAction,
      value: c.selected.nextActionValue,
    },
  ];

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] lg:h-[232px]">
      <p className="text-[13px] leading-[16px] font-bold text-[#17362e]">
        {c.selected.title}
      </p>
      <p className="mt-[2px] text-[9px] leading-[11px] text-[#65746d] lg:text-[8px]">
        {c.selected.subtitle.replace("{id}", FOCUS_REPORT.id)}
      </p>

      <div className="mt-[12px] flex flex-col gap-[8px] lg:gap-0">
        {rows.map((row) => (
          <div key={row.key} className="flex items-start lg:h-[24px]">
            <p className="w-[104px] shrink-0 text-[9px] leading-[12px] font-semibold text-[#65746d]">
              {row.label}
            </p>
            <p className="min-w-0 text-[9px] leading-[12px] text-[#17362e]">
              {row.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[24px] flex flex-wrap items-center gap-[20px]">
        <Link
          to="/admin/reports?state=detail"
          className="flex h-[32px] items-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white"
        >
          {c.selected.openDetail}
        </Link>
        <Link
          to="/admin/reports?state=assign-owner"
          className="flex h-[32px] items-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d]"
        >
          {c.selected.assignOwner}
        </Link>
      </div>
    </div>
  );
}
