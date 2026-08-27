import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatCoinNumber, formatSignedCoin } from "../coinFormat";

interface BalanceCardProps {
  balance: number;
  earnedThisMonth: number;
}

/* WD-60 "Balance card" (1186:1403): mint #f2f9f5 card, radius 18, 1012x154 —
   11px uppercase eyebrow, 40px numeral in the body face, 14px unit, monthly
   earned row with a right-aligned green amount. Mobile "Coin balance" (W-60
   node 1179:306) is the same card at 350x112, radius 14: 14px padding, a
   10px eyebrow, a 38px row holding the 28px numeral and an 11px regular
   unit, then a 20px row with a 10px label and an 11px amount. */
export function BalanceCard({ balance, earnedThisMonth }: BalanceCardProps) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();

  return (
    <div className="h-[112px] rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[12px] lg:h-[154px] lg:rounded-[18px] lg:px-[23px] lg:py-[18px]">
      <p className="text-[10px] leading-[13px] font-semibold text-lp-muted lg:text-[11px] lg:leading-normal lg:text-lp-green">
        {c.overview.availableBalance}
      </p>
      <div className="mt-[5px] flex h-[38px] flex-wrap items-center gap-y-[2px] lg:mt-[18px] lg:h-auto lg:items-end">
        <span className="min-w-[212px] text-[28px] leading-[32px] font-bold text-lp-green lg:min-w-[294px] lg:text-[40px] lg:leading-[1]">
          {formatCoinNumber(balance, language)}
        </span>
        <span className="text-[11px] leading-[15px] text-lp-muted lg:pb-[11px] lg:text-[14px] lg:font-semibold">
          {c.unit}
        </span>
      </div>
      <div className="mt-[5px] flex h-[20px] items-center justify-between gap-4 lg:mt-[15px] lg:h-auto">
        <p className="text-[10px] leading-[14px] text-lp-muted lg:text-[12px] lg:leading-normal">
          {c.overview.earnedThisMonth}
        </p>
        <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:mr-[28px] lg:text-[13px] lg:leading-normal">
          {formatSignedCoin(earnedThisMonth, language)}
        </p>
      </div>
    </div>
  );
}
