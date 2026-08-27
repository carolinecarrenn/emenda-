import { usePublicCopy } from "../public.copy";
import { HOW_STEPS } from "../publicMock";

/**
 * LP-04 "YOUR EMENDA JOURNEY — A simple flow built around continuity." with
 * the five 1268x150 step cards (Figma 1147:251–1147:287): first card at
 * y=650 on a 174px pitch, 54px number circle at x=24 and the 220x40 mint tag
 * pill whose right edge lands at x=1274.
 */
export function HowStepList() {
  const c = usePublicCopy();

  return (
    <section className="mt-[60px]">
      <p className="flex min-h-[26px] items-center text-[12px] font-semibold tracking-[0.04em] text-[#055240]">
        {c.how.journeyEyebrow}
      </p>
      <h2 className="mt-[8px] flex min-h-[48px] max-w-[760px] items-center text-[24px] leading-[1.22] font-bold text-[#0e1f18] lg:text-[30px]">
        {c.how.journeyTitle}
      </h2>

      <div className="mt-[28px] flex flex-col gap-[24px]">
        {HOW_STEPS.map((step) => {
          const item = c.how.steps[step.key];

          return (
            <article
              key={step.key}
              className="flex flex-col gap-[18px] rounded-[18px] border border-[#d1ded6] bg-white p-[23px] lg:h-[150px] lg:flex-row lg:items-start lg:gap-[26px]"
            >
              {/* Number (1147:254) */}
              <span className="flex size-[54px] shrink-0 items-center justify-center rounded-[27px] bg-[#e8f6f0] text-[13px] font-semibold text-[#055240]">
                {step.number}
              </span>

              <div className="lg:mt-[-4px] lg:flex-1">
                <p className="flex min-h-[36px] max-w-[580px] items-center text-[18px] font-semibold text-[#0e1f18]">
                  {item.title}
                </p>
                <p className="mt-[2px] flex min-h-[44px] max-w-[660px] items-center text-[13px] leading-[16px] text-[#63756b]">
                  {item.body}
                </p>
              </div>

              {/* Status pill (1147:258) */}
              <span className="flex h-[40px] w-[220px] shrink-0 items-center justify-center rounded-[20px] bg-[#f2f9f5] px-[12px] text-center text-[12px] font-semibold text-[#055240] lg:mt-[20px] lg:mr-[34px]">
                {item.tag}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
