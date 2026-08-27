import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import type { EmployeeFilterKey } from "../employees.mock";

/* AD-02 filter bar (1223:818): a 1144x44 white card, radius 12, 1px #d6e3de,
   16px inset — the 260x36 search input (radius 10, 10px #65746d placeholder)
   then the four 24px pills, 18px apart. The selected pill is #e8f5f0 /
   #083d2d, the rest #f7faf8 / #65746d. Below lg the row wraps. */

const FILTERS: EmployeeFilterKey[] = ["all", "active", "invited", "incomplete"];

export function EmployeesFilterBar({
  filter,
  onFilterChange,
  query,
  onQueryChange,
}: {
  filter: EmployeeFilterKey;
  onFilterChange: (filter: EmployeeFilterKey) => void;
  query: string;
  onQueryChange: (query: string) => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);

  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-[#d6e3de] bg-white p-[12px] lg:h-[44px] lg:flex-row lg:items-center lg:gap-[18px] lg:p-0 lg:px-[16px]">
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        aria-label={c.filters.searchPlaceholder}
        placeholder={c.filters.searchPlaceholder}
        className="h-[36px] w-full rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[12px] text-[#17362f] outline-none placeholder:text-[#65746d] lg:w-[260px] lg:shrink-0 lg:text-[10px]"
      />

      <div className="flex flex-wrap items-center gap-[8px] lg:gap-[18px]">
        {FILTERS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={filter === key}
            onClick={() => onFilterChange(key)}
            className={`flex h-[24px] items-center rounded-full px-[10px] text-[10px] font-semibold whitespace-nowrap ${
              filter === key
                ? "bg-[#e8f5f0] text-[#083d2d]"
                : "bg-[#f7faf8] text-[#65746d]"
            }`}
          >
            {c.filters[key]}
          </button>
        ))}
      </div>
    </div>
  );
}
