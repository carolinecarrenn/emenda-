import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";

/* AD-08D "No results" note (1239:694): the amber #fff5db block that governs
   an emptied audit trail — "Keep every selected filter visible and offer
   reset; do not hide the query." The filter bar above therefore stays exactly
   as the admin left it and only this block plus a reset action appear. */
export function ActivityLogNoResults({
  onResetFilters,
}: {
  onResetFilters: () => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  return (
    <div className="mt-[20px] flex flex-col gap-[12px]">
      <div className="rounded-[10px] bg-[#fff5db] px-[11px] py-[11px]">
        <p className="text-[11px] leading-none font-semibold text-[#13332b]">
          {c.noResults.title}
        </p>
        <p className="mt-[9px] text-[10px] leading-[14px] text-[#63756e]">
          {c.noResults.body}
        </p>
      </div>
      <button
        type="button"
        onClick={onResetFilters}
        className="flex h-[32px] w-fit items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5]"
      >
        {c.noResults.resetFilters}
      </button>
    </div>
  );
}
