import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { REMINDER_SENT } from "../daily-reports.mock";

/* AD-06B "Reminder sent" (1226:1104): 328x360 white panel, radius 12, 1px
   #d6e3de — 16px bold title, a 48px mint #e8f5f0 disc carrying the green
   check beside the 12px semibold notified line, the 9px #65746d Activity Log
   note, the mint "Delivered · 20" and amber "Pending · 2" pills (24px, full
   radius), and the outline "View activity" button (32px, radius 10). */
export function ReminderSentPanel({
  onViewActivity,
}: {
  onViewActivity: () => void;
}) {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  return (
    <div className="w-full max-w-[328px] rounded-[12px] border border-[#d6e3de] bg-white px-[19px] pt-[19px] pb-[19px] lg:h-[360px] lg:w-[328px]">
      <p className="text-[16px] leading-none font-bold text-[#17362e]">
        {c.sent.title}
      </p>

      <div className="mt-[22px] flex items-center gap-[16px]">
        <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[#e8f5f0]">
          <Check
            className="size-[22px] text-[#083d2d]"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </div>
        <p className="text-[12px] leading-[16px] font-semibold text-[#17362e]">
          {c.sent.notified.replace(
            "{count}",
            String(REMINDER_SENT.notifiedCount),
          )}
        </p>
      </div>

      <p className="mt-[14px] text-[9px] leading-[13px] text-[#65746d]">
        {c.sent.note}
      </p>

      <div className="mt-[26px] flex flex-wrap items-center gap-[23px]">
        <span className="flex h-[24px] items-center rounded-full bg-[#e8f5f0] px-[10px] text-[10px] font-semibold whitespace-nowrap text-[#083d2d]">
          {c.sent.delivered.replace(
            "{count}",
            String(REMINDER_SENT.deliveredCount),
          )}
        </span>
        <span className="flex h-[24px] items-center rounded-full bg-[#fdf7ec] px-[10px] text-[10px] font-semibold whitespace-nowrap text-[#b57023]">
          {c.sent.pending.replace(
            "{count}",
            String(REMINDER_SENT.pendingCount),
          )}
        </span>
      </div>

      <button
        type="button"
        onClick={onViewActivity}
        className="mt-[62px] flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] lg:w-[97px] lg:px-0"
      >
        {c.sent.viewActivity}
      </button>
    </div>
  );
}
