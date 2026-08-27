import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";

/* AD-08C · Activity Audit Flow (1226:3880): white board, radius 12, 24px
   padding, 18px stack — "END-TO-END FLOW" eyebrow, the 22px title, the 10px
   scope line, five 278px step cards (1226:3885…1226:3957) separated by 24px
   "→" glyphs, and the mint flow rule (1226:3973).

   Step 04's number chip is the blue #eff5fc variant in the frame; the other
   four are mint #e8f5f0. Below lg the row becomes a column and the arrows
   rotate a quarter turn, since no mobile frame exists for this board. */

const STEP_CHIP = ["01", "02", "03", "04", "05"];

/** Step 04 "Trace request" carries the blue chip in the frame (1226:3941). */
const BLUE_CHIP_INDEX = 3;

export function ActivityAuditFlow() {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  return (
    <section className="flex flex-col gap-[18px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:p-[24px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.flow.eyebrow}
      </p>
      <h2 className="text-[18px] leading-[26px] font-bold text-[#17362e] lg:text-[22px] lg:leading-none">
        {c.flow.title}
      </h2>
      <p className="text-[10px] leading-[14px] text-[#65746d]">
        {c.flow.subtitle}
      </p>

      <ol className="flex flex-col items-stretch gap-[18px] lg:-mx-[24px] lg:flex-row lg:items-start lg:overflow-x-auto lg:px-[24px] lg:pb-[8px]">
        {c.flow.steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col items-stretch gap-[18px] lg:flex-row lg:items-start"
          >
            <div className="flex w-full flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px] lg:shrink-0">
              <div className="flex w-full items-start gap-[10px]">
                <span
                  className={`flex shrink-0 items-center rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold text-[#083d2d] ${
                    index === BLUE_CHIP_INDEX ? "bg-[#eff5fc]" : "bg-[#e8f5f0]"
                  }`}
                >
                  {STEP_CHIP[index]}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
                  <span className="text-[14px] leading-[18px] font-bold text-[#17362e]">
                    {step.title}
                  </span>
                  <span className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
                    {step.subtitle}
                  </span>
                </span>
              </div>
              {step.details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-[3px] rounded-[12px] bg-[#f7faf8] p-[10px]"
                >
                  <span className="text-[9px] leading-[12px] font-semibold text-[#17362e]">
                    {detail.label}
                  </span>
                  <span className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
            {index < c.flow.steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="self-center rotate-90 text-[24px] leading-none font-bold text-[#083d2d] lg:self-start lg:rotate-0 lg:pt-[280px]"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="w-fit rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px] text-[9px] leading-[14px] font-semibold text-[#083d2d]">
        {c.flow.rule}
      </p>
    </section>
  );
}
