import { Fragment } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import { LIFECYCLE_STEPS } from "../followup.mock";
import { BackToBoardLink } from "./BackToBoardLink";
import { LifecycleStepCard } from "./LifecycleStepCard";

/* AD-05C "Escalation & Recovery Flow" (1226:2870): a white card, radius 12,
   1px #d6e3de, 24px padding, 18px between blocks — the "END-TO-END FLOW"
   eyebrow, the 22px bold lifecycle title and its 10px caption, the five step
   cards separated by 24px "→" arrows, and the mint flow-rule chip
   (#e8f5f0, radius 12).

   The five 278px steps plus their arrows are wider than the 1144px admin
   content column, so the step row scrolls horizontally on desktop and stacks
   on mobile with the arrows turned a quarter turn. */
export function EscalationFlowView() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  return (
    <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
      <BackToBoardLink />

      <div className="flex flex-col gap-[18px] rounded-[12px] border border-[#d6e3de] bg-white p-[24px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
            {c.lifecycle.eyebrow}
          </p>
          <h2 className="text-[20px] leading-[26px] font-bold text-[#17362e] lg:text-[22px] lg:leading-[28px]">
            {c.lifecycle.title}
          </h2>
          <p className="text-[10px] leading-[14px] text-[#65746d]">
            {c.lifecycle.subtitle}
          </p>
        </div>

        <div className="-mx-[24px] overflow-x-auto px-[24px] lg:pb-[6px]">
          <div className="flex flex-col items-stretch gap-[18px] lg:w-max lg:flex-row lg:items-start">
            {LIFECYCLE_STEPS.map((step, index) => (
              <Fragment key={step.key}>
                {index > 0 ? (
                  <div
                    className="flex justify-center lg:pt-[280px]"
                    aria-hidden="true"
                  >
                    <span className="rotate-90 text-[24px] leading-none font-bold text-[#083d2d] lg:rotate-0">
                      →
                    </span>
                  </div>
                ) : null}
                <LifecycleStepCard step={step} />
              </Fragment>
            ))}
          </div>
        </div>

        <div className="w-fit rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px]">
          <p className="text-[9px] leading-[13px] font-semibold text-[#083d2d]">
            {c.lifecycle.flowRule}
          </p>
        </div>
      </div>
    </div>
  );
}
