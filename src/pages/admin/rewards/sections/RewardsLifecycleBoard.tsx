import { Fragment } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";

/* AD-07C "Rewards & Coin Lifecycle" (1226:3785): a white board, radius 12,
   1px #d6e3de, 24px padding, 18px between blocks — "END-TO-END FLOW" eyebrow,
   22px bold title, the 10px scope line, then five 278x620 step cards
   (radius 12, 1px #d6e3de, 16px padding, 10px gaps) separated by 24px bold
   #083d2d arrows, and the #e8f5f0 flow-rule strip.

   Each step is a numbered chip (mint / amber / blue / red / mint) beside its
   14px bold title and 8px subtitle, over three #f7faf8 detail blocks.

   The five drawn cards are 1598px wide against the 1144px admin column, so
   the step row scrolls horizontally on desktop rather than being resized;
   below lg it stacks and the arrows turn to point down. */

const CHIP_TONES = [
  "bg-[#e8f5f0] text-[#083d2d]",
  "bg-[#fdf7ec] text-[#b57023]",
  "bg-[#eff5fc] text-[#083d2d]",
  "bg-[#fdf0ef] text-[#b04139]",
  "bg-[#e8f5f0] text-[#083d2d]",
];

export function RewardsLifecycleBoard() {
  const c = useSectionCopy(ADMINREWARDS_COPY);

  return (
    <div className="flex w-full flex-col gap-[18px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:p-[24px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.lifecycle.eyebrow}
      </p>
      <h2 className="text-[20px] leading-[26px] font-bold text-[#17362e] lg:text-[22px]">
        {c.lifecycle.title}
      </h2>
      <p className="text-[10px] leading-[15px] text-[#65746d]">
        {c.lifecycle.description}
      </p>

      <div className="flex flex-col gap-[18px] lg:flex-row lg:items-start lg:overflow-x-auto lg:pb-[8px]">
        {c.lifecycle.steps.map((step, index) => (
          <Fragment key={step.title}>
            {index > 0 && (
              <div className="flex justify-center lg:h-[620px] lg:shrink-0 lg:items-center lg:px-[18px]">
                <span
                  aria-hidden="true"
                  className="rotate-90 text-[24px] leading-none font-bold text-[#083d2d] lg:rotate-0"
                >
                  →
                </span>
              </div>
            )}
            <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px] lg:shrink-0">
              <div className="flex w-full items-start gap-[10px]">
                <span
                  className={`shrink-0 rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold ${CHIP_TONES[index]}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
                  <p className="text-[14px] leading-[18px] font-bold text-[#17362e]">
                    {step.title}
                  </p>
                  <p className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {step.details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-[5px] rounded-[12px] bg-[#f7faf8] p-[10px]"
                >
                  <p className="text-[9px] leading-none font-semibold text-[#17362e]">
                    {detail.label}
                  </p>
                  <p className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>

      <div className="w-fit max-w-full rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px]">
        <p className="text-[9px] leading-[13px] font-semibold text-[#083d2d]">
          {c.lifecycle.flowRule}
        </p>
      </div>
    </div>
  );
}
