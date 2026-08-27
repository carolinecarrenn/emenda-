import { usePublicCopy } from "../public.copy";
import { FEATURE_FLOW } from "../publicMock";

/**
 * LP-03 mint panel "DESIGNED TO WORK TOGETHER — Your information stays
 * connected across the product." with the three numbered cards
 * (Figma 1147:217–1147:232): panel 1268x380 at y=1335, 370x128 cards at
 * y=1535 with a 24px gutter.
 */
export function FeaturesConnectedPanel() {
  const c = usePublicCopy();

  return (
    <section className="mt-[57px] rounded-[24px] border border-[#d1ded6] bg-[#f2f9f5] px-[27px] pt-[23px] pb-[27px] lg:h-[380px]">
      <p className="flex min-h-[26px] items-center text-[11px] font-semibold tracking-[0.04em] text-[#055240]">
        {c.features.connectedEyebrow}
      </p>
      <h2 className="mt-[6px] flex min-h-[44px] max-w-[760px] items-center text-[22px] leading-[1.22] font-bold text-[#0e1f18] lg:text-[26px]">
        {c.features.connectedTitle}
      </h2>
      <p className="mt-[8px] flex min-h-[48px] max-w-[850px] items-center text-[14px] leading-[17px] text-[#63756b]">
        {c.features.connectedBody}
      </p>

      <div className="mt-[44px] grid gap-[24px] lg:grid-cols-[repeat(3,370px)]">
        {FEATURE_FLOW.map((flow) => (
          <article
            key={flow.key}
            className="rounded-[18px] border border-[#d1ded6] bg-white p-[17px] lg:h-[128px]"
          >
            <span className="flex size-[36px] items-center justify-center rounded-full bg-[#e8f6f0] text-[12px] font-semibold text-[#055240]">
              {flow.number}
            </span>
            <p className="mt-[14px] flex min-h-[36px] items-center text-[15px] font-semibold text-[#0e1f18]">
              {c.features.flow[flow.key]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
