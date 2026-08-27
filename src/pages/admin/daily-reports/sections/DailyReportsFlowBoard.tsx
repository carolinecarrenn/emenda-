import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { FLOW_STEPS, type FlowChipTone } from "../daily-reports.mock";
import { StateBoard } from "./StateBoard";

/* AD-06C "Daily Report Operational Flow" (1226:3690): five 278x620 white
   step cards (radius 12, 1px #d6e3de, 16px padding, 10px gaps) separated by
   59px arrow gutters, then the mint #e8f5f0 flow-rule bar.
   Each card opens with a pill chip (01 mint · 02 mint · 03 amber · 04 blue ·
   05 mint) beside a 14px bold title and its 8px line, then hugging #f7faf8
   detail tiles (9px semibold label over an 8px body).

   The 1626px step row scrolls horizontally inside the 1144px admin content
   column, as the frame is wider than the shell. Below lg the steps stack and
   the arrows turn to point down. */

const CHIP_TONE: Record<FlowChipTone, string> = {
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
  blue: "bg-[#eff5fc] text-[#083d2d]",
};

export function DailyReportsFlowBoard() {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  return (
    <StateBoard
      eyebrow={c.flow.eyebrow}
      title={c.flow.title}
      subtitle={c.flow.subtitle}
      titleClassName="text-[22px] leading-[28px] font-bold text-[#17362e]"
    >
      <div className="-mx-4 overflow-x-auto px-4 lg:-mx-[32px] lg:px-[32px]">
        <div className="flex flex-col items-stretch lg:w-[1626px] lg:flex-row lg:items-start">
          {FLOW_STEPS.map((step, index) => {
            const copy = c.flow.steps[step.key];
            return (
              <div
                key={step.key}
                className="flex flex-col items-center lg:flex-row lg:items-stretch"
              >
                <div className="flex w-full flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px]">
                  <div className="flex items-start gap-[10px]">
                    <span
                      className={`shrink-0 rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold ${CHIP_TONE[step.tone]}`}
                    >
                      {step.number}
                    </span>
                    <div className="flex min-w-0 flex-col gap-[3px]">
                      <p className="text-[14px] leading-none font-bold text-[#17362e]">
                        {copy.title}
                      </p>
                      <p className="text-[9px] leading-none text-[#65746d] lg:text-[8px]">
                        {copy.subtitle}
                      </p>
                    </div>
                  </div>

                  {copy.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex flex-col gap-[3px] self-start rounded-[12px] bg-[#f7faf8] p-[10px]"
                    >
                      <p className="text-[9px] leading-none font-semibold text-[#17362e]">
                        {detail.label}
                      </p>
                      <p className="text-[9px] leading-none text-[#65746d] lg:text-[8px]">
                        {detail.body}
                      </p>
                    </div>
                  ))}
                </div>

                {index < FLOW_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="flex w-[59px] shrink-0 rotate-90 items-center justify-center py-[10px] text-[24px] leading-none text-[#083d2d] lg:rotate-0 lg:py-0"
                  >
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="self-start rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px]">
        <p className="text-[9px] leading-[14px] font-semibold text-[#083d2d]">
          {c.flow.rule}
        </p>
      </div>
    </StateBoard>
  );
}
