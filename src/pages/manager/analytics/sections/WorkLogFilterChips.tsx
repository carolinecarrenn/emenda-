import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import { WORK_LOG_FILTERS, type WorkLogFilter } from "./workLogFilter";

/* EM-R2-02 (1107:171–176) filter chips: 30px pill, radius 15, border #ccded6,
   8px gaps and fixed 100 / 100 / 114 widths (the mock's row runs x=20→350,
   stopping 20px short of the 350px card column). The selected chip is
   #e8f5f0 + semibold, the rest white + regular. Desktop lets the chips size
   to their own label. */
export function WorkLogFilterChips({
  filter,
  onFilter,
}: {
  filter: WorkLogFilter;
  onFilter: (next: WorkLogFilter) => void;
}) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <div className="flex gap-[8px] lg:flex-wrap">
      {WORK_LOG_FILTERS.map((option, index) => {
        const selected = option === filter;
        const trailing = index === WORK_LOG_FILTERS.length - 1;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onFilter(option)}
            className={`flex h-[30px] items-center justify-center rounded-[15px] border border-[#ccded6] px-[6px] text-center text-[9px] text-[#083d2d] lg:h-[34px] lg:w-auto lg:min-w-[120px] lg:flex-none lg:px-[16px] lg:text-[11px] ${
              trailing ? "w-[114px]" : "w-[100px]"
            } ${
              selected
                ? "bg-[#e8f5f0] font-semibold"
                : "bg-white font-normal hover:border-brand"
            }`}
          >
            {c.workLog.filters[option]}
          </button>
        );
      })}
    </div>
  );
}
