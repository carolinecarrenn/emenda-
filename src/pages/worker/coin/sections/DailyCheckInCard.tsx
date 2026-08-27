import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatSignedCoin } from "../coinFormat";
import { DAILY_CHECK_IN_REWARD } from "../coinMock";

interface DailyCheckInCardProps {
  /** Already claimed today (WD-60G) — the CTA becomes an inert pill. */
  checkedIn: boolean;
  /** WD-60E offline: the CTA stays visible but cannot be used. */
  offline?: boolean;
}

/* WD-60 "Daily check-in" (1186:1409): white card 492x150, radius 16 —
   16px title, right-aligned "+10 today" in green, 12px rule line and a
   220x38 #056b54 "Check in today" pill. Mobile (W-60 node 1179:314) is the
   mint 350x118 card at radius 14: 14px padding, a 24px header with a 12px
   title and an 11px reward, a 10px/14 rule line and a full-width 36px pill
   with an 11px label. */
export function DailyCheckInCard({
  checkedIn,
  offline = false,
}: DailyCheckInCardProps) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const reward = formatSignedCoin(DAILY_CHECK_IN_REWARD, language);
  const action = offline ? c.checkIn.offlineButton : c.overview.checkedInToday;

  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[14px] pt-[12px] pb-[6px] lg:h-[150px] lg:rounded-[16px] lg:bg-white lg:p-[17px] lg:pt-[15px] lg:pb-[9px]">
      <div className="flex h-[24px] items-center justify-between gap-3 lg:h-auto lg:items-start">
        <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[16px] lg:leading-normal">
          {c.overview.dailyCheckIn}
        </p>
        <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:mr-[4px] lg:text-[13px] lg:leading-normal">
          {c.overview.dailyReward(reward)}
        </p>
      </div>
      <p className="mt-[5px] text-[10px] leading-[14px] text-lp-muted lg:mt-[20px] lg:text-[12px] lg:leading-[18px]">
        {c.overview.dailyRule}
      </p>
      {checkedIn || offline ? (
        <div className="mt-[5px] flex h-[36px] w-full items-center justify-center rounded-[12px] border border-lp-line bg-lp-mint text-[11px] font-semibold text-lp-muted lg:mt-[24px] lg:h-[38px] lg:w-[220px] lg:text-[13px]">
          {action}
        </div>
      ) : (
        <Link
          to="/worker/coin/check-in"
          className="mt-[5px] flex h-[36px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[11px] font-semibold text-white hover:bg-lp-green lg:mt-[24px] lg:h-[38px] lg:w-[220px] lg:text-[13px]"
        >
          {c.overview.checkInToday}
        </Link>
      )}
    </div>
  );
}
