import { Fragment } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { StateBoard } from "./StateBoard";

/* AD-04C · Report Resolution Flow (1226:2775) — ?state=flow.
   Five 278x620 white step cards, radius 12, 1px #d6e3de, separated by the
   #083d2d "→" glyph at their vertical centre. Each card holds a mint 01–05
   chip (#e8f5f0 / #083d2d, pill), a 14px bold title over its 8px caption,
   and three hug-width #f7faf8 detail tiles (radius 12, 10px padding, 9px
   semibold label over an 8px value). The board closes on the mint
   "flow rule" pill (#e8f5f0, radius 12, 9px semibold #083d2d).

   The five-card row is 1626px wide — wider than the 1144px admin content
   column — so it scrolls horizontally at its Figma size on desktop and
   stacks into one column below lg, with the arrow turned to point down. */
export function ReportLifecycleFlowBoard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <StateBoard
      eyebrow={c.flow.eyebrow}
      title={c.flow.title}
      description={c.flow.description}
      titleClassName="text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px]"
    >
      <div className="-mx-[16px] overflow-x-auto px-[16px] lg:-mx-[23px] lg:px-[23px]">
        <div className="flex flex-col items-stretch gap-[10px] lg:w-[1626px] lg:flex-row lg:items-stretch lg:gap-0">
          {c.flow.steps.map((step, index) => (
            <Fragment key={step.title}>
              {index > 0 && (
                <div className="flex shrink-0 items-center justify-center lg:w-[59px]">
                  <span
                    className="rotate-90 text-[22px] leading-none text-[#083d2d] lg:rotate-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              )}
              <div className="flex flex-col items-start gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px] lg:shrink-0">
                <div className="flex w-full items-start gap-[10px]">
                  <span className="flex shrink-0 items-center rounded-full bg-[#e8f5f0] px-[9px] py-[5px] text-[9px] leading-[11px] font-semibold text-[#083d2d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] leading-[17px] font-bold text-[#17362e]">
                      {step.title}
                    </p>
                    <p className="mt-[3px] text-[8px] leading-[10px] text-[#65746d]">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                {step.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-[12px] bg-[#f7faf8] p-[10px]"
                  >
                    <p className="text-[9px] leading-[11px] font-semibold text-[#17362e]">
                      {detail.label}
                    </p>
                    <p className="mt-[3px] text-[8px] leading-[10px] text-[#65746d]">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mt-[18px] w-fit rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px]">
        <p className="text-[9px] leading-[11px] font-semibold text-[#083d2d]">
          {c.flow.rule}
        </p>
      </div>
    </StateBoard>
  );
}
