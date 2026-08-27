import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import {
  LIFECYCLE_DETAIL_KEYS,
  type LifecycleChipTone,
  type LifecycleStep,
} from "../followup.mock";

/* One AD-05C step card (1226:2875 … 1226:2947): 278x620 white card, radius
   12, 1px #d6e3de, 16px padding — the ordinal chip beside the 14px bold step
   title and its 8px caption, then three #f7faf8 detail boxes (radius 12,
   10px padding) each pairing a 9px semibold label with its 8px rule. */

const CHIP_TONE: Record<LifecycleChipTone, string> = {
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  red: "bg-[#fdf0ef] text-[#b04139]",
  blue: "bg-[#eff5fc] text-[#083d2d]",
};

export function LifecycleStepCard({ step }: { step: LifecycleStep }) {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);
  const stepCopy = c.lifecycle.steps[step.key];

  return (
    <article className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px] lg:shrink-0">
      <div className="flex w-full items-start gap-[10px]">
        <span
          className={`shrink-0 rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold ${CHIP_TONE[step.tone]}`}
        >
          {step.ordinal}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
          <h3 className="text-[14px] leading-[18px] font-bold text-[#17362e]">
            {stepCopy.title}
          </h3>
          <p className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
            {stepCopy.subtitle}
          </p>
        </div>
      </div>

      {LIFECYCLE_DETAIL_KEYS.map((detailKey) => {
        const detail = stepCopy.details[detailKey];
        return (
          <div
            key={detailKey}
            className="flex flex-col gap-[3px] rounded-[12px] bg-[#f7faf8] p-[10px]"
          >
            <p className="text-[9px] leading-[12px] font-semibold text-[#17362e]">
              {detail.label}
            </p>
            <p className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
              {detail.text}
            </p>
          </div>
        );
      })}
    </article>
  );
}
