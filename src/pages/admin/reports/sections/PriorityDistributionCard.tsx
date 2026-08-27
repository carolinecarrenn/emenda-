import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { PRIORITY_DISTRIBUTION, type ReportPriority } from "../reports.mock";

/* AD-04 "Priority distribution" (1223:1676): 352x204 white card, radius 12,
   1px #d6e3de. Each of the three rows is a 10px semibold #17362e label at
   x15, a 1px 170px rule at x83 tinted per priority (#b04139 / #b57023 /
   #083d2d) and the 9px #65746d open count at x265, on a 42px pitch. The
   frame draws the rule as a hairline of fixed length — it is a legend of the
   priority tones, not a proportional bar, so it is reproduced as drawn. */

const BAR_TONE: Record<ReportPriority, string> = {
  high: "bg-[#b04139]",
  medium: "bg-[#b57023]",
  low: "bg-[#083d2d]",
};

export function PriorityDistributionCard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] lg:h-[204px] lg:pb-0">
      <p className="text-[13px] leading-[16px] font-bold text-[#17362e]">
        {c.distribution.title}
      </p>
      <p className="mt-[2px] text-[9px] leading-[11px] text-[#65746d] lg:text-[8px]">
        {c.distribution.subtitle}
      </p>

      <div className="mt-[16px] flex flex-col gap-[14px] lg:gap-0">
        {PRIORITY_DISTRIBUTION.map((bar) => (
          <div key={bar.key} className="flex items-start lg:h-[42px]">
            <p className="w-[68px] shrink-0 text-[10px] leading-[12px] font-semibold text-[#17362e]">
              {c.priority[bar.key]}
            </p>
            <span
              className={`mt-[8px] h-px min-w-0 flex-1 lg:w-[170px] lg:flex-none ${BAR_TONE[bar.key]}`}
              aria-hidden="true"
            />
            <p className="ml-[12px] shrink-0 text-[9px] leading-[12px] whitespace-nowrap text-[#65746d]">
              {c.distribution.openCount.replace(
                "{count}",
                String(bar.openCount),
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
