import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { FOLLOW_UP_FILTERS, type FollowUpFilter } from "./followupFilters";

/* MD-09 filter pills (1226:1274 · 1276 · 1278 · 1280): 32px, radius 16, 10px
   gaps — active on #e3f0e8 with a matching border and #083d2d label, inactive
   white on #dbe3de with a #65746d label. Figma draws them 82 / 62 / 82 / 104
   wide, which an 18px inset reproduces on the live labels. Desktop only;
   EM-09 uses count chips. */
export function FollowUpFilterChips({
  filter,
  onFilter,
}: {
  filter: FollowUpFilter;
  onFilter: (value: FollowUpFilter) => void;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const labels: Record<FollowUpFilter, string> = {
    Pending: c.filters.pending,
    Sent: c.filters.sent,
    Resolved: c.filters.resolved,
    "High priority": c.filters.highPriority,
  };

  return (
    <div className="hidden lg:flex lg:flex-wrap lg:gap-[10px]">
      {FOLLOW_UP_FILTERS.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={filter === option}
          onClick={() => onFilter(option)}
          className={`flex h-[32px] items-center justify-center rounded-[16px] border px-[18px] text-[10px] font-semibold ${
            filter === option
              ? "border-[#e3f0e8] bg-[#e3f0e8] text-[#083d2d]"
              : "border-[#dbe3de] bg-white text-[#65746d] hover:border-brand"
          }`}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
}
