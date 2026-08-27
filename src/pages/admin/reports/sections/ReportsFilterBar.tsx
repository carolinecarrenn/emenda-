import { useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";

/* AD-04 filter bar (1223:1600): a 1144x44 white card, radius 12, 1px
   #d6e3de — a 240x36 search field (radius 10) then the five 24px status
   pills. "All status" is the selected pill (#e8f5f0 / #083d2d), "High
   priority" carries the red tint (#fdf0ef / #b04139), the rest are quiet
   (#f7faf8 / #65746d). Below lg the row stacks so no pill is lost. */

type FilterKey =
  | "allStatus"
  | "open"
  | "needFollowUp"
  | "resolved"
  | "highPriority";

const FILTER_KEYS: FilterKey[] = [
  "allStatus",
  "open",
  "needFollowUp",
  "resolved",
  "highPriority",
];

export function ReportsFilterBar() {
  const c = useSectionCopy(ADMINREPORTS_COPY);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<FilterKey>("allStatus");

  function pillClass(key: FilterKey): string {
    if (key === active) return "bg-[#e8f5f0] text-[#083d2d]";
    if (key === "highPriority") return "bg-[#fdf0ef] text-[#b04139]";
    return "bg-[#f7faf8] text-[#65746d]";
  }

  return (
    <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[12px] lg:h-[44px] lg:flex-row lg:items-center lg:gap-[16px] lg:p-0 lg:px-[16px]">
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label={c.filters.searchLabel}
        placeholder={c.filters.searchPlaceholder}
        className="h-[36px] w-full shrink-0 rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[11px] text-[#17362e] outline-none placeholder:text-[#65746d] lg:w-[240px] lg:text-[10px]"
      />

      <div
        role="group"
        aria-label={c.filters.groupLabel}
        className="flex flex-wrap items-center gap-[12px] lg:gap-[16px]"
      >
        {FILTER_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={key === active}
            onClick={() => setActive(key)}
            className={`flex h-[24px] items-center rounded-full px-[10px] text-[10px] font-semibold whitespace-nowrap ${pillClass(key)}`}
          >
            {c.filters[key]}
          </button>
        ))}
      </div>
    </div>
  );
}
