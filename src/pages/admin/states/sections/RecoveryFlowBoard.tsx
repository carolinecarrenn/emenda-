import { Fragment } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY, type StatesCopy } from "../states.copy";

/* AD-10C "Global State Recovery Flow" (1226:4070): a white card, radius 12,
   1px #d6e3de, 24px padding, 18px between blocks — the "END-TO-END FLOW"
   eyebrow, the 22px title, its 10px line, then five 278x620 step cards joined
   by 24px "→" arrows, and the mint #e8f5f0 flow rule at the bottom.

   Each step is a numbered chip beside a 14px title / 8px subtitle pair, over
   three #f7faf8 detail blocks (9px semibold label, 8px value).

   The drawn row is ~1638px wide — wider than the 1144 Company Admin content
   column — so the five steps share the column instead of overflowing it. The
   arrow turns a quarter-turn below lg where the steps stack. */

const FLOW_STEPS: {
  key: keyof StatesCopy["flow"]["steps"];
  index: string;
  chip: string;
}[] = [
  { key: "loading", index: "01", chip: "bg-[#eff5fc] text-[#083d2d]" },
  { key: "empty", index: "02", chip: "bg-[#e8f5f0] text-[#083d2d]" },
  { key: "error", index: "03", chip: "bg-[#fdf0ef] text-[#b04139]" },
  { key: "permission", index: "04", chip: "bg-[#fdf7ec] text-[#b57023]" },
  { key: "destructive", index: "05", chip: "bg-[#fdf0ef] text-[#b04139]" },
];

export function RecoveryFlowBoard() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <section className="rounded-[12px] border border-[#d6e3de] bg-white p-[24px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.flow.eyebrow}
      </p>
      <h3 className="mt-[18px] text-[19px] leading-[26px] font-bold text-[#17362e] lg:text-[22px] lg:leading-none">
        {c.flow.title}
      </h3>
      <p className="mt-[18px] text-[11px] leading-[16px] text-[#65746d] lg:text-[10px] lg:leading-none">
        {c.flow.subtitle}
      </p>

      <div className="mt-[18px] flex flex-col items-stretch gap-[18px] lg:flex-row lg:items-start">
        {FLOW_STEPS.map((step, position) => (
          <Fragment key={step.key}>
            {position > 0 ? (
              <div className="flex justify-center lg:shrink-0 lg:pt-[280px]">
                <span
                  className="rotate-90 text-[24px] leading-none font-bold text-[#083d2d] lg:rotate-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            ) : null}
            <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:min-w-0 lg:flex-1 lg:h-[620px]">
              <div className="flex items-start gap-[10px]">
                <span
                  className={`shrink-0 rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold ${step.chip}`}
                >
                  {step.index}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                  <p className="text-[14px] leading-[18px] font-bold text-[#17362e]">
                    {c.flow.steps[step.key].title}
                  </p>
                  <p className="text-[9px] leading-[13px] text-[#65746d] lg:text-[8px] lg:leading-[11px]">
                    {c.flow.steps[step.key].subtitle}
                  </p>
                </div>
              </div>
              {c.flow.steps[step.key].details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-[3px] rounded-[12px] bg-[#f7faf8] p-[10px]"
                >
                  <p className="text-[10px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                    {detail.label}
                  </p>
                  <p className="text-[9px] leading-[13px] text-[#65746d] lg:text-[8px] lg:leading-[11px]">
                    {detail.detail}
                  </p>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>

      <div className="mt-[18px] inline-flex rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px]">
        <p className="text-[10px] leading-[15px] font-semibold text-[#083d2d] lg:text-[9px] lg:leading-[13px]">
          {c.flow.rule}
        </p>
      </div>
    </section>
  );
}
