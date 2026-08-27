import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";
import { REPORTS_FILTERS, type ReportsFilter } from "./reportsFilter";

/* EM-11: search field (42px, radius 10, border #c9ded4) + 28px filter
   pills — active = #e8f5f0 fill #083d2d text, inactive white #1f473b.
   Filter identity is language-independent; only labels localize. */
export function ReportsFilterBar({
  search,
  onSearch,
  filter,
  onFilter,
}: {
  search: string;
  onSearch: (value: string) => void;
  filter: ReportsFilter;
  onFilter: (value: ReportsFilter) => void;
}) {
  const c = useSectionCopy(MANAGER_COPY);
  const labels: Record<ReportsFilter, string> = {
    Today: c.reports.filters.today,
    Submitted: c.reports.filters.submitted,
    Missing: c.reports.filters.missing,
    "Needs follow-up": c.reports.filters.needsFollowUp,
  };

  return (
    <div>
      <input
        type="search"
        aria-label="Search worker / report"
        placeholder={c.reports.searchPlaceholder}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="h-[42px] w-full rounded-[10px] border border-[#c9ded4] bg-white px-4 text-[12px] text-[#1f473b] placeholder:text-[#6b8f80] focus:border-brand focus:outline-none"
      />
      <div className="mt-[8px] flex flex-wrap gap-[8px]">
        {REPORTS_FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={() => onFilter(option)}
            className={`flex h-[28px] items-center justify-center rounded-[14px] border border-[#c9ded4] px-[14px] text-[10px] font-semibold ${
              filter === option
                ? "bg-[#e8f5f0] text-brand-deep"
                : "bg-white text-[#1f473b] hover:border-brand"
            }`}
          >
            {labels[option]}
          </button>
        ))}
      </div>
    </div>
  );
}
