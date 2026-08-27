import { StreakChips } from "./StreakChips";

interface CheckInHeroCardProps {
  dateLabel: string;
  rewardLabel: string;
  streakLabel: string;
  filled: number;
  note: string;
  cta: string;
  disabled?: boolean;
  onCheckIn?: () => void;
}

/* W-60F "Card · Daily check-in hero" (1158:379): a mint #f0f8f3 350x238 card
   at radius 14 with 14/12px padding and a 6px gap — a 22px header row pairing
   a 12px/16 "Today · 25 Aug" with a right-aligned green "+10 Coin", an 11px/15
   semibold streak line, the seven-day chip row, a 10px/14 muted note and the
   322x38 primary button at radius 12 with an 11px/14 label. Desktop WD-60F
   (1186:1768) keeps the white 1012x240 card at radius 18. */
export function CheckInHeroCard({
  dateLabel,
  rewardLabel,
  streakLabel,
  filled,
  note,
  cta,
  disabled = false,
  onCheckIn,
}: CheckInHeroCardProps) {
  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[12px] lg:rounded-[18px] lg:bg-white lg:px-[25px] lg:py-[20px] lg:pt-[17px] lg:pb-[13px] lg:min-h-[240px]">
      <div className="flex h-[22px] items-center justify-between gap-4 lg:h-auto lg:items-start">
        <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[18px] lg:leading-normal">
          {dateLabel}
        </p>
        <p className="text-[12px] leading-[16px] font-semibold text-lp-green lg:mr-[16px] lg:text-[18px] lg:leading-normal">
          {rewardLabel}
        </p>
      </div>
      <p className="mt-[6px] text-[11px] leading-[15px] font-semibold text-lp-ink lg:mt-[14px] lg:text-[14px] lg:leading-normal lg:font-normal lg:text-lp-muted">
        {streakLabel}
      </p>
      <StreakChips filled={filled} className="mt-[6px] lg:mt-[18px]" />
      <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[14px] lg:text-[12px] lg:leading-[19px]">
        {note}
      </p>
      {disabled ? (
        <div className="mt-[6px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-[#b8cfc4] text-[11px] leading-[14px] font-semibold text-white opacity-55 lg:mt-[15px] lg:h-[42px] lg:w-[300px] lg:text-[13px] lg:leading-normal">
          {cta}
        </div>
      ) : (
        <button
          type="button"
          onClick={onCheckIn}
          className="mt-[6px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[11px] leading-[14px] font-semibold text-white hover:bg-lp-green lg:mt-[15px] lg:h-[42px] lg:w-[300px] lg:text-[13px] lg:leading-normal"
        >
          {cta}
        </button>
      )}
    </div>
  );
}
