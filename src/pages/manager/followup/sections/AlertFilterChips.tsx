import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { ALERT_FILTERS, type AlertFilter } from "./followupFilters";

/* MD-12 filter pills (1226:1580 · 1582 · 1584 · 1586): 32px, radius 16, 10px
   gaps — active on #e3f0e8 with a matching border and #083d2d label, inactive
   white on #dbe3de with a #65746d label. Figma draws them 60 / 70 / 86 / 70
   wide, which an 18px inset reproduces on the live labels. Desktop only;
   EM-12 uses count chips. */
export function AlertFilterChips({
  filter,
  onFilter,
}: {
  filter: AlertFilter;
  onFilter: (value: AlertFilter) => void;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const labels: Record<AlertFilter, string> = {
    Open: c.alerts.filters.open,
    Urgent: c.alerts.filters.urgent,
    Reporting: c.alerts.filters.reporting,
    Admin: c.alerts.filters.admin,
  };

  return (
    <div className="hidden lg:flex lg:flex-wrap lg:gap-[10px]">
      {ALERT_FILTERS.map((option) => (
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
