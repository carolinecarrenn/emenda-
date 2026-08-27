import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import { ROSTER_FILTER_COUNTS } from "../workspaceMock";
import { ROSTER_FILTERS, type RosterFilter } from "./rosterFilters";

/* MD-04 controls (1213:314…327): a 500x44 white search field, radius 10,
   #dbe3de hairline with the 12px placeholder "Search worker, EMENDA ID,
   role, or status" set 20px in — MD-04 carries NO magnifier glyph, so the
   field is text-only — then five 100x44 filter chips (1213:316…325) that
   share the rest of the 1060px row on an 8px pitch and left-align their
   facility-wide counts. MD-04 / MD-04A keep every count on ONE line, so the
   chip label never wraps at any width.
   EM-04 (761:142) restates the same controls at 390px: the sentence-case
   "Search worker" label over a mint #e3f0e8 field with the shorter "Name or
   EMENDA ID" placeholder, and fully rounded chips with the active one
   filled mint. The invite action is a header affordance on both surfaces,
   so it never sits in this row. */
export function RosterFilterBar({
  search,
  onSearch,
  filter,
  onFilter,
}: {
  search: string;
  onSearch: (value: string) => void;
  filter: RosterFilter;
  onFilter: (value: RosterFilter) => void;
}) {
  const c = useSectionCopy(WORKSPACE_COPY);

  const labels: Record<RosterFilter, string> = {
    all: fill(c.roster.filterAll, { count: ROSTER_FILTER_COUNTS.all }),
    needsReview: fill(c.roster.filterNeedsReview, {
      count: ROSTER_FILTER_COUNTS.needsReview,
    }),
    unread: fill(c.roster.filterUnread, { count: ROSTER_FILTER_COUNTS.unread }),
    visaAdmin: fill(c.roster.filterVisaAdmin, {
      count: ROSTER_FILTER_COUNTS.visaAdmin,
    }),
    disconnected: fill(c.roster.filterDisconnected, {
      count: ROSTER_FILTER_COUNTS.disconnected,
    }),
  };

  return (
    <div className="flex flex-col gap-[14px] lg:flex-row lg:items-center lg:gap-[16px]">
      <div className="lg:w-[500px] lg:shrink-0">
        <p className="text-[12px] text-[#66736b] lg:hidden">
          {c.roster.mobileSearchLabel}
        </p>
        <input
          type="search"
          aria-label={c.roster.searchPlaceholder}
          placeholder={c.roster.searchPlaceholder}
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          className="hidden h-[44px] w-full rounded-[10px] border border-[#dbe3de] bg-white px-[20px] text-[12px] text-[#17241f] placeholder:text-[#66736b] focus:border-brand focus:outline-none lg:block"
        />
        <input
          type="search"
          aria-label={c.roster.mobileSearchPlaceholder}
          placeholder={c.roster.mobileSearchPlaceholder}
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          className="mt-[8px] h-[44px] w-full rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[14px] text-[12px] text-[#17241f] placeholder:text-[#66736b] focus:border-brand focus:outline-none lg:hidden"
        />
      </div>

      <div className="flex flex-wrap gap-[8px] lg:flex-1 lg:flex-nowrap">
        {ROSTER_FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={() => onFilter(option)}
            className={`flex h-[30px] items-center justify-center rounded-full border px-[14px] text-[10px] font-semibold whitespace-nowrap lg:h-[44px] lg:min-w-0 lg:flex-1 lg:justify-start lg:rounded-[10px] lg:px-[10px] lg:text-left lg:text-[11px] ${
              filter === option
                ? "border-[#e3f0e8] bg-[#e3f0e8] text-[#083d2d] lg:border-[#0c5941]"
                : "border-[#dbe3de] bg-white text-[#083d2d] hover:border-brand"
            }`}
          >
            {labels[option]}
          </button>
        ))}
      </div>
    </div>
  );
}
