import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { REPORT_STATS } from "../reports.mock";

/* AD-04 stat pair (1223:1664 / 1223:1670): two 168x112 white cards, radius
   12, 1px #d6e3de — a 30px tinted tile (radius 9) carrying the report-state
   glyph beside the 10px semibold #65746d label, then the 24px bold #17362e
   value with its 9px #65746d caption. Open is amber (#fdf7ec / #b57023),
   Resolved is mint (#e8f5f0 / #083d2d). */

function StatCard({
  glyph,
  tone,
  label,
  value,
  caption,
}: {
  glyph: string;
  tone: string;
  label: string;
  value: number;
  caption: string;
}) {
  return (
    <div className="flex h-[112px] flex-1 flex-col rounded-[12px] border border-[#d6e3de] bg-white p-[13px] lg:w-[168px] lg:flex-none">
      <div className="flex h-[30px] items-center gap-[8px]">
        <div
          className={`flex size-[30px] shrink-0 items-center justify-center rounded-[9px] ${tone}`}
          aria-hidden="true"
        >
          <span className="text-[14px] leading-none font-bold">{glyph}</span>
        </div>
        <p className="truncate text-[10px] font-semibold text-[#65746d]">
          {label}
        </p>
      </div>
      <div className="mt-[16px] flex items-center gap-[10px]">
        <p className="text-[24px] leading-none font-bold text-[#17362e]">
          {value}
        </p>
        <p className="text-[9px] leading-[12px] text-[#65746d]">{caption}</p>
      </div>
    </div>
  );
}

export function ReportStatCards() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <div className="flex gap-[16px]">
      <StatCard
        glyph={REPORT_STATS.open.glyph}
        tone="bg-[#fdf7ec] text-[#b57023]"
        label={c.stats.openLabel}
        value={REPORT_STATS.open.value}
        caption={c.stats.openCaption.replace(
          "{count}",
          String(REPORT_STATS.open.followUpCount),
        )}
      />
      <StatCard
        glyph={REPORT_STATS.resolved.glyph}
        tone="bg-[#e8f5f0] text-[#083d2d]"
        label={c.stats.resolvedLabel}
        value={REPORT_STATS.resolved.value}
        caption={c.stats.resolvedCaption}
      />
    </div>
  );
}
