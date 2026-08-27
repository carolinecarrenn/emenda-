interface StressQuestionRowProps {
  question: string;
  options: readonly [string, string, string];
  selected: 0 | 1 | 2;
  onSelect: (index: 0 | 1 | 2) => void;
  readOnly?: boolean;
}

/* WD-61M question row: 14px semibold prompt on the left, three 118x34 pill
   chips (radius 17) on the right. Selected chip fills #e8f5ed with #054d3d
   label; the rest stay white with #63756b.
   Mobile (W-61M · 1167:641) stacks them: a 12px semibold #141f1a prompt over
   three 111x36 chips at radius 18 with 8px gutters and a 10px semibold label,
   #141f1a when unselected and #096145 on the mint selected chip. */
export function StressQuestionRow({
  question,
  options,
  selected,
  onSelect,
  readOnly = false,
}: StressQuestionRowProps) {
  return (
    <div className="lg:grid lg:h-[34px] lg:grid-cols-[500px_378px] lg:items-center">
      <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[14px] lg:leading-[24px]">
        {question}
      </p>
      <div className="mt-[12px] flex gap-[8px] lg:mt-0 lg:gap-[12px]">
        {options.map((option, index) => {
          const isSelected = index === selected;
          const classes = `flex h-[36px] flex-1 items-center justify-center rounded-[18px] border text-[10px] font-semibold lg:h-[34px] lg:w-[118px] lg:flex-none lg:rounded-[17px] lg:text-[11px] ${
            isSelected
              ? "border-lp-green bg-lp-mint text-lp-green lg:border-lp-line"
              : "border-lp-line bg-white text-lp-ink lg:text-lp-muted"
          }`;
          if (readOnly) {
            return (
              <span key={option} className={classes}>
                {option}
              </span>
            );
          }
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(index as 0 | 1 | 2)}
              className={`${classes} ${isSelected ? "" : "hover:border-lp-green hover:text-lp-green"}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
