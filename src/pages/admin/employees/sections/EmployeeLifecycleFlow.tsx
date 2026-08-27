import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { LIFECYCLE_STEPS } from "../employees.mock";

/* AD-02C "Employee lifecycle: invite → active → inactive" (1226:2585): the
   END-TO-END FLOW board — a 22px bold title over its 12px line, then five
   278x620 white step cards (radius 12, 1px #d6e3de, 16px inset, 10px gaps)
   separated by "→" glyphs, and the mint #e8f5f0 flow rule at the foot.

   Each card carries a numbered chip (mint, or #fdf0ef / #b04139 on step 05)
   beside its 14px bold title and 8px caption, over three #f7faf8 detail
   blocks (radius 12) of a 9px semibold line and its 8px body.

   Below lg the row becomes a single column and the arrows turn downward —
   this board is drawn only on the desktop canvas. */

const CHIP_TONE = {
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  red: "bg-[#fdf0ef] text-[#b04139]",
} as const;

export function EmployeeLifecycleFlow() {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);

  return (
    <section className="rounded-[14px] border border-[#d6e3de] bg-white p-[24px]">
      <p className="text-[10px] font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.lifecycle.eyebrow}
      </p>
      <h2 className="mt-[18px] text-[20px] leading-[1.2] font-bold text-[#17362f] lg:text-[22px]">
        {c.lifecycle.title}
      </h2>
      <p className="mt-[14px] text-[12px] text-[#65746d]">
        {c.lifecycle.subtitle}
      </p>

      <div className="mt-[18px] flex flex-col items-stretch gap-[12px] lg:-mx-[4px] lg:flex-row lg:items-start lg:gap-0 lg:overflow-x-auto lg:px-[4px] lg:pb-[8px]">
        {LIFECYCLE_STEPS.map((step, index) => {
          const stepCopy = c.lifecycle.steps[step.key];
          return (
            <div
              key={step.key}
              className="contents lg:flex lg:items-start lg:gap-0"
            >
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="self-center text-[22px] leading-none text-[#17362f] lg:mx-[18px] lg:mt-[280px] lg:self-start lg:text-[24px]"
                >
                  <span className="inline-block rotate-90 lg:rotate-0">→</span>
                </span>
              ) : null}

              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px] lg:shrink-0">
                <div className="flex items-start gap-[10px]">
                  <span
                    className={`shrink-0 rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold ${CHIP_TONE[step.tone]}`}
                  >
                    {step.chip}
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                    <p className="text-[14px] leading-[1.2] font-bold text-[#17362f]">
                      {stepCopy.title}
                    </p>
                    <p className="text-[9px] leading-[1.3] text-[#65746d] lg:text-[8px]">
                      {stepCopy.caption}
                    </p>
                  </div>
                </div>

                {stepCopy.details.map((detail) => (
                  <div
                    key={detail.title}
                    className="flex flex-col gap-[3px] rounded-[12px] bg-[#f7faf8] p-[10px] lg:self-start"
                  >
                    <p className="text-[9px] leading-[1.3] font-semibold text-[#17362f]">
                      {detail.title}
                    </p>
                    <p className="text-[9px] leading-[1.3] text-[#65746d] lg:text-[8px]">
                      {detail.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-[18px] inline-block rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px] text-[9px] font-semibold text-[#083d2d]">
        {c.lifecycle.rule}
      </p>
    </section>
  );
}
