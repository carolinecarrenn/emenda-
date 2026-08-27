import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import {
  ACTIVITY_FILTER_KEYS,
  type ActivityFilterKey,
} from "../activityFilters";

/* AD-08 filter bar (1225:628): 1144x44 white card, radius 12, 1px #d6e3de —
   a 260x36 search input (1225:629) then the pill row (1225:631…1225:640),
   24px tall, radius 999, 10px semibold. The selected pill is #e8f5f0 /
   #083d2d; the rest are #f7faf8 / #65746d. */
export function ActivityLogFilterBar({
  query,
  onQueryChange,
  filter,
  onFilterChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  filter: ActivityFilterKey;
  onFilterChange: (value: ActivityFilterKey) => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  return (
    <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[10px] lg:h-[44px] lg:flex-row lg:items-center lg:gap-[16px] lg:px-[16px] lg:py-[4px]">
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        aria-label={c.filters.searchPlaceholder}
        placeholder={c.filters.searchPlaceholder}
        className="h-[36px] w-full rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[12px] text-[#17362e] outline-none placeholder:text-[#65746d] focus:border-[#083d2d] lg:w-[260px] lg:text-[10px]"
      />
      <div
        role="group"
        aria-label={c.filters.all}
        className="-mx-[10px] flex items-center gap-[10px] overflow-x-auto px-[10px] lg:mx-0 lg:gap-[16px] lg:overflow-visible lg:px-0"
      >
        {ACTIVITY_FILTER_KEYS.map((key) => {
          const selected = key === filter;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={selected}
              onClick={() => onFilterChange(key)}
              className={`flex h-[24px] shrink-0 items-center rounded-full px-[10px] text-[10px] font-semibold whitespace-nowrap ${
                selected
                  ? "bg-[#e8f5f0] text-[#083d2d]"
                  : "bg-[#f7faf8] text-[#65746d] hover:bg-[#eef4f1]"
              }`}
            >
              {c.filters[key]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
