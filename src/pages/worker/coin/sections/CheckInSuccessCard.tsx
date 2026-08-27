import { StreakChips } from "./StreakChips";

interface CheckInSuccessCardProps {
  eyebrow: string;
  amount: string;
  coinAdded: string;
  streakLabel: string;
  filled: number;
  /** W-60G ends the card with its own "Done" button (1158:491). */
  doneLabel: string;
  onDone: () => void;
}

/* W-60G "Card · Daily check-in success" (1158:471): a mint #f0f8f3 350x244
   card at radius 14, 14/12px padding, 6px gap — a 10px/13 green "CHECKED IN"
   eyebrow, the 32px/38 green "+10", an 11px/15 muted "Emenda Coin added", the
   13px/17 ink streak line, the chip row and the 322x38 "Done" button. Desktop
   WD-60G (1186:1836) keeps the wider 1012x230 card with the chips on the
   right and Done as a separate pill. */
export function CheckInSuccessCard({
  eyebrow,
  amount,
  coinAdded,
  streakLabel,
  filled,
  doneLabel,
  onDone,
}: CheckInSuccessCardProps) {
  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[12px] lg:flex lg:min-h-[230px] lg:items-center lg:justify-between lg:gap-6 lg:rounded-[18px] lg:bg-lp-mint lg:px-[25px] lg:py-[22px]">
      <div>
        <p className="text-[10px] leading-[13px] font-semibold tracking-[0.02em] text-lp-green lg:text-[11px] lg:leading-normal">
          {eyebrow}
        </p>
        <p className="mt-[6px] font-display text-[32px] leading-[38px] font-bold text-lp-green lg:mt-[16px] lg:text-[38px] lg:leading-[1]">
          {amount}
        </p>
        <p className="mt-[6px] text-[11px] leading-[15px] text-lp-muted lg:mt-[14px] lg:text-[14px] lg:leading-normal lg:font-semibold lg:text-lp-ink">
          {coinAdded}
        </p>
        <p className="mt-[6px] text-[13px] leading-[17px] font-semibold text-lp-ink lg:mt-[10px] lg:text-[13px] lg:leading-normal lg:font-normal lg:text-lp-muted">
          {streakLabel}
        </p>
        <StreakChips
          filled={filled}
          className="mt-[6px] lg:hidden"
          highlightNext
        />
        {/* 1158:491 — the mobile frame closes the card with Done */}
        <button
          type="button"
          onClick={onDone}
          className="mt-[6px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[11px] leading-[14px] font-semibold text-white hover:bg-lp-green lg:hidden"
        >
          {doneLabel}
        </button>
      </div>
      {/* WD-60G 1186:1841-1853 — the chip row starts 394px into the card */}
      <div className="hidden lg:block lg:mr-[210px]">
        <StreakChips filled={filled} />
      </div>
    </div>
  );
}
