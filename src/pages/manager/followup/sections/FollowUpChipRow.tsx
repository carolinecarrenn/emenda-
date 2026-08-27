import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { FOLLOW_UP_CHIP_COUNTS } from "../followupMock";
import { fill } from "./followupLabels";
import type { FollowUpFilter } from "./followupFilters";

/* EM-09 status chips (1030:130 · 132 · 134 · 136): 28px pills, radius 14,
   #d6e3de hairline — Pending / Sent / Resolved on mint #e8f5f0 with #094033
   text, High on peach #ffe8de with #b54a32 text. Each chip carries its live
   count and doubles as the queue filter; EM-09 draws no selected treatment,
   so every chip keeps the same hairline. Mobile only. */
export function FollowUpChipRow({
  filter,
  onFilter,
}: {
  filter: FollowUpFilter;
  onFilter: (value: FollowUpFilter) => void;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  const chips: {
    key: FollowUpFilter;
    label: string;
    tone: "mint" | "peach";
  }[] = [
    {
      key: "Pending",
      label: fill(c.chipCounts.pending, { count: FOLLOW_UP_CHIP_COUNTS.pending }),
      tone: "mint",
    },
    {
      key: "High priority",
      label: fill(c.chipCounts.high, { count: FOLLOW_UP_CHIP_COUNTS.high }),
      tone: "peach",
    },
    {
      key: "Sent",
      label: fill(c.chipCounts.sent, { count: FOLLOW_UP_CHIP_COUNTS.sent }),
      tone: "mint",
    },
    {
      key: "Resolved",
      label: fill(c.chipCounts.resolved, {
        count: FOLLOW_UP_CHIP_COUNTS.resolved,
      }),
      tone: "mint",
    },
  ];

  return (
    <div className="flex flex-wrap gap-[8px] lg:hidden">
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          aria-pressed={filter === chip.key}
          onClick={() => onFilter(chip.key)}
          className={`flex h-[28px] items-center justify-center rounded-[14px] border px-[14px] text-[10px] font-semibold ${
            chip.tone === "peach"
              ? "bg-[#ffe8de] text-[#b54a32]"
              : "bg-[#e8f5f0] text-[#094033]"
          } border-[#d6e3de]`}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
