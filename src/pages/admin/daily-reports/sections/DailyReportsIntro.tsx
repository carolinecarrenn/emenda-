import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";

/* AD-06 "Screen Content" intro row (1223:2649): a 1144x44 row — the 22px
   bold #17362e headline over its 9px #65746d line, then the outline
   "Export daily status" and dark-green "Send reminder" buttons (32px tall,
   radius 10, 11px semibold), matching AD-01's DashboardIntro button pair.
   Below lg the row stacks and the buttons keep their intrinsic padding. */
export function DailyReportsIntro({
  onSendReminder,
}: {
  onSendReminder: () => void;
}) {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <p className="text-[22px] leading-[28px] font-bold text-[#17362e] lg:leading-none">
          {c.intro.title}
        </p>
        <p className="text-[11px] leading-[16px] text-[#65746d] lg:text-[9px] lg:leading-none">
          {c.intro.subtitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-[4px] lg:mr-[30px]">
        <button
          type="button"
          className="flex items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] lg:h-[32px] lg:w-[128px] lg:px-0 lg:py-0"
        >
          {c.intro.exportDailyStatus}
        </button>
        <button
          type="button"
          onClick={onSendReminder}
          className="flex items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941] lg:h-[32px] lg:w-[106px] lg:px-0 lg:py-0"
        >
          {c.intro.sendReminder}
        </button>
      </div>
    </div>
  );
}
