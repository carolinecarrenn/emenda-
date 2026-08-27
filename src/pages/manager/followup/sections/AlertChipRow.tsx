import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { ALERT_CHIP_COUNTS } from "../followupMock";
import { fill } from "./followupLabels";
import type { AlertFilter } from "./followupFilters";

/* EM-12 status chips (1030:249 · 251 · 253 · 255): 28px pills, radius 14,
   #d6e3de hairline — Open on mint #e8f5f0, Urgent on peach #ffe8de with
   #b54a32 text, Reporting and Admin white. Each carries its live count and
   filters the queue; EM-12 draws no selected treatment — the frame's active
   "Open 5" chip keeps the same #d6e3de hairline as the rest — so selection
   rides on aria-pressed alone. Mobile only. */
export function AlertChipRow({
  filter,
  onFilter,
}: {
  filter: AlertFilter;
  onFilter: (value: AlertFilter) => void;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  const chips: {
    key: AlertFilter;
    label: string;
    tone: "mint" | "peach" | "white";
  }[] = [
    {
      key: "Open",
      label: fill(c.alerts.chipCounts.open, { count: ALERT_CHIP_COUNTS.open }),
      tone: "mint",
    },
    {
      key: "Urgent",
      label: fill(c.alerts.chipCounts.urgent, {
        count: ALERT_CHIP_COUNTS.urgent,
      }),
      tone: "peach",
    },
    {
      key: "Reporting",
      label: fill(c.alerts.chipCounts.reporting, {
        count: ALERT_CHIP_COUNTS.reporting,
      }),
      tone: "white",
    },
    {
      key: "Admin",
      label: fill(c.alerts.chipCounts.admin, {
        count: ALERT_CHIP_COUNTS.admin,
      }),
      tone: "white",
    },
  ];

  const tones = {
    mint: "bg-[#e8f5f0] text-[#094033]",
    peach: "bg-[#ffe8de] text-[#b54a32]",
    white: "bg-white text-[#094033]",
  };

  return (
    <div className="flex flex-wrap gap-[8px] lg:hidden">
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          aria-pressed={filter === chip.key}
          onClick={() => onFilter(chip.key)}
          className={`flex h-[28px] items-center justify-center rounded-[14px] border border-[#d6e3de] px-[14px] text-[10px] font-semibold ${
            tones[chip.tone]
          }`}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
