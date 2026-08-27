import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatSignedCoin } from "../coinFormat";
import { DAILY_CHECK_IN_REWARD } from "../coinMock";
import { StreakChips } from "./StreakChips";

/* W-60D (1151:382) is the canonical frame: a 350x190 white "No Emenda Coin
   yet" card at radius 14 (a left-aligned 16px/22 title over an 11px/16 muted
   body), the full-width 350x46 "See how to earn" action beneath it, then the
   mint 350x146 daily check-in card with an untouched streak — so a brand-new
   account still has both first steps in reach. Body items sit at a 12px gap.
   The desktop twin WD-60D (1186:1649) draws only the card plus a "Daily
   check-in" button and words it "No Coin activity yet"; mobile is canonical
   for what a screen says and offers, so its content is used on both viewports
   and desktop supplies the presentation (18px radius, 300px action width). */
export function EmptyCoinCard() {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();

  return (
    <div className="space-y-[12px] lg:space-y-[24px]">
      {/* WD-60D (1186:1649) centres title, body and action inside the
          1012x250 card; mobile keeps the card and the action apart. */}
      <div className="rounded-[14px] border border-lp-line bg-white p-[14px] lg:flex lg:min-h-[250px] lg:flex-col lg:items-center lg:justify-center lg:rounded-[18px] lg:px-[28px] lg:py-[28px] lg:text-center">
        <p className="text-[16px] leading-[22px] font-semibold text-lp-ink lg:text-[20px] lg:leading-normal">
          {c.empty.title}
        </p>
        <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted lg:mt-[17px] lg:text-[14px] lg:leading-normal">
          {c.empty.body}
        </p>
        <Link
          to="/worker/coin/earn"
          className="mt-[24px] hidden h-[48px] w-[300px] items-center justify-center rounded-[12px] bg-lp-button text-[13px] font-semibold text-white hover:bg-lp-green lg:flex"
        >
          {c.empty.seeHowToEarn}
        </Link>
      </div>

      {/* W-60D node 1151:395 — the first action a new account can take */}
      <Link
        to="/worker/coin/earn"
        className="flex h-[46px] w-full items-center justify-center rounded-[14px] bg-lp-button text-[12px] leading-[16px] font-semibold text-white hover:bg-lp-green lg:hidden"
      >
        {c.empty.seeHowToEarn}
      </Link>

      {/* W-60D node 1158:285 — check-in stays available with a zero streak */}
      <Link
        to="/worker/coin/check-in"
        className="block rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[12px] hover:border-lp-green lg:rounded-[16px] lg:p-[17px]"
      >
        <div className="flex h-[20px] items-center justify-between gap-3 lg:h-auto lg:items-start">
          <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[16px] lg:leading-normal">
            {c.overview.dailyCheckIn}
          </p>
          <p className="text-[11px] leading-[14px] font-semibold text-lp-green lg:text-[13px] lg:leading-normal">
            {c.overview.dailyReward(
              formatSignedCoin(DAILY_CHECK_IN_REWARD, language),
            )}
          </p>
        </div>
        <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[12px] lg:text-[12px] lg:leading-normal">
          {c.empty.zeroStreak}
        </p>
        <StreakChips
          filled={0}
          highlightNext={false}
          className="mt-[6px] lg:mt-[14px]"
        />
        <span className="mt-[6px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[11px] leading-[14px] font-semibold text-white lg:mt-[18px] lg:w-[300px] lg:text-[13px] lg:leading-normal">
          {c.overview.checkInToday}
        </span>
      </Link>
    </div>
  );
}
