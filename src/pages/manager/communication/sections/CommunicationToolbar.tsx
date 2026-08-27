import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import {
  DESKTOP_FILTERS,
  MOBILE_FILTERS,
  type ConversationFilter,
} from "./conversationFilter";

/* MD-06 toolbar (1225:39–50): 620x44 search radius 10, four 32px radius-16
   filter chips (active #e3f0e8 / inactive white on #dbe3de) and a 72x42
   #0c5941 "Send" button. EM-06 (994:2686–2693) inverts the order and drops
   the Send key: three 28px counted chips above a 350x44 radius-12 search
   field. */
export function CommunicationToolbar({
  search,
  onSearch,
  filter,
  onFilter,
  counts,
  offline = false,
}: {
  search: string;
  onSearch: (value: string) => void;
  filter: ConversationFilter;
  onFilter: (value: ConversationFilter) => void;
  counts: { all: number; unread: number; followUp: number };
  /** MD-STATE-01 lists "Send Message" as unavailable while offline, so the
      Send key stays on the row but cannot be actioned. */
  offline?: boolean;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  const desktopLabels: Record<(typeof DESKTOP_FILTERS)[number], string> = {
    all: c.list.filters.all,
    unread: c.list.filters.unread,
    "needs-reply": c.list.filters.needsReply,
    broadcast: c.list.filters.broadcast,
  };

  const mobileLabels: Record<(typeof MOBILE_FILTERS)[number], string> = {
    all: fillCopy(c.list.mobileFilters.all, { count: counts.all }),
    unread: fillCopy(c.list.mobileFilters.unread, { count: counts.unread }),
    "follow-up": fillCopy(c.list.mobileFilters.followUp, {
      count: counts.followUp,
    }),
  };

  return (
    <div>
      {/* EM-06 · mobile: counted chips, then the search field */}
      <div className="lg:hidden">
        <div className="flex flex-wrap items-center gap-[8px]">
          {MOBILE_FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => onFilter(option)}
              className={`flex h-[28px] items-center justify-center rounded-[14px] border border-[#d6e3de] px-[20px] text-[10px] ${
                filter === option
                  ? "bg-[#e8f5f0] font-semibold text-[#094033]"
                  : "bg-white text-[#094033]"
              }`}
            >
              {mobileLabels[option]}
            </button>
          ))}
        </div>
        <input
          type="search"
          aria-label={c.list.searchPlaceholderMobile}
          placeholder={c.list.searchPlaceholderMobile}
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          className="mt-[14px] h-[44px] w-full rounded-[12px] border border-[#d6e3de] bg-white px-[18px] text-[12px] text-[#094033] placeholder:text-[#6e8a82] focus:border-brand focus:outline-none"
        />
      </div>

      {/* MD-06 · desktop: search + chips + Send on one row */}
      <div className="hidden items-center gap-[10px] lg:flex">
        <input
          type="search"
          aria-label={c.list.searchPlaceholder}
          placeholder={c.list.searchPlaceholder}
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          className="h-[44px] w-[620px] max-w-full rounded-[10px] border border-[#dbe3de] bg-white px-[20px] text-[12px] text-[#141f1a] placeholder:text-[#65746d] focus:border-brand focus:outline-none"
        />
        <div className="flex flex-1 flex-wrap items-center justify-end gap-[10px]">
          {DESKTOP_FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => onFilter(option)}
              className={`flex h-[32px] min-w-[60px] items-center justify-start rounded-[16px] border px-[16px] text-[10px] font-semibold ${
                filter === option
                  ? "border-[#e3f0e8] bg-[#e3f0e8] text-brand-deep"
                  : "border-[#dbe3de] bg-white text-[#65746d] hover:border-brand"
              }`}
            >
              {desktopLabels[option]}
            </button>
          ))}
        </div>
        {offline ? (
          <span
            aria-disabled="true"
            title={c.states.offlineTitle}
            className="flex h-[42px] w-[72px] shrink-0 cursor-not-allowed items-center justify-start rounded-[9px] bg-[#b9cdc4] px-[16px] text-[12px] font-semibold text-white"
          >
            {c.list.send}
          </span>
        ) : (
          <Link
            to="/manager/communication/compose"
            className="flex h-[42px] w-[72px] shrink-0 items-center justify-start rounded-[9px] bg-brand px-[16px] text-[12px] font-semibold text-white hover:bg-brand-deep"
          >
            {c.list.send}
          </Link>
        )}
      </div>
    </div>
  );
}
