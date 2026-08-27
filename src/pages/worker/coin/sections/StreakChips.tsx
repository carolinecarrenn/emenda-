import { STREAK_LENGTH } from "../coinMock";

interface StreakChipsProps {
  /** Days already checked in. */
  filled: number;
  /** W-60F/W-60G mark the day after the streak as the one that is open next;
   *  W-60D starts from zero and draws every chip inactive. */
  highlightNext?: boolean;
  className?: string;
}

/* W-60F / W-60G streak calendar (1158:384 / 1158:476): seven 30x28 chips at
   radius 14 spread across the 322px body — a claimed day is filled #0c5941
   with a white 10px/12 numeral, the day that is open next is #f0f8f3 with a
   #0c5941 border and numeral, and the rest are white with a #d9e1dc border
   and a muted numeral. Desktop WD-60F (1186:1772–1785) keeps the softer
   38px mint chips. */
export function StreakChips({
  filled,
  highlightNext = true,
  className = "",
}: StreakChipsProps) {
  const days = Array.from({ length: STREAK_LENGTH }, (_, index) => index + 1);

  return (
    <div
      className={`flex justify-between gap-[8px] lg:justify-start lg:gap-[16px] ${className}`}
    >
      {days.map((day) => {
        const done = day <= filled;
        const next = highlightNext && day === filled + 1;
        const tone = done
          ? "border-lp-green bg-lp-green text-white lg:border-lp-line lg:bg-lp-mint lg:text-lp-green"
          : next
            ? "border-lp-green bg-lp-tint text-lp-green lg:border-lp-line lg:bg-white lg:text-lp-muted"
            : "border-lp-line bg-white text-lp-muted";

        return (
          <span
            key={day}
            className={`flex h-[28px] w-[30px] items-center justify-center rounded-[14px] border text-[10px] leading-[12px] font-semibold lg:size-[38px] lg:rounded-[19px] lg:text-[11px] ${tone}`}
          >
            {day}
          </span>
        );
      })}
    </div>
  );
}
