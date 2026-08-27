import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";

/* AD-08 intro row (1225:621): a 44px band — "Review who changed what and when"
   22px bold #17362e over the 9px #65746d "Company workspace audit trail" line,
   with the outline "Export log" (1225:624) and dark-green "View details"
   (1225:626) buttons pinned right, both radius 10 / 11px semibold. */
export function ActivityLogIntro({
  onViewDetails,
}: {
  onViewDetails: () => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
        <p className="text-[22px] leading-none font-bold text-[#17362e]">
          {c.intro.title}
        </p>
        <p className="text-[11px] leading-[16px] text-[#65746d] lg:text-[9px] lg:leading-none">
          {c.intro.subtitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-[12px]">
        <button
          type="button"
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5]"
        >
          {c.intro.exportLog}
        </button>
        <button
          type="button"
          onClick={onViewDetails}
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941]"
        >
          {c.intro.viewDetails}
        </button>
      </div>
    </div>
  );
}
