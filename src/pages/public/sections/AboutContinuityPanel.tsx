import { ArrowRight, CircleCheck } from "lucide-react";
import { usePublicCopy } from "../public.copy";

/**
 * LP-02 signature panel: "What stays with you—and what can change safely."
 * mint checklist vs. arrow list (Figma 1147:88–1147:115). Panel 1268x430 at
 * y=990, columns 576 / 608 wide and 260 tall, list rows on a 54px pitch with
 * the circled-check glyph (1147:93) on the left column.
 */
export function AboutContinuityPanel() {
  const c = usePublicCopy();

  return (
    <section className="mt-[60px] rounded-[24px] border border-[#d1ded6] bg-white px-[27px] pt-[21px] pb-[27px] lg:h-[430px]">
      <p className="flex min-h-[26px] items-center text-[11px] font-semibold tracking-[0.04em] text-[#055240]">
        {c.about.continuityEyebrow}
      </p>
      <h2 className="mt-[6px] flex min-h-[48px] max-w-[800px] items-center text-[22px] leading-[1.22] font-bold text-[#0e1f18] lg:text-[27px]">
        {c.about.continuityTitle}
      </h2>

      <div className="mt-[24px] grid gap-[28px] lg:grid-cols-[576px_608px]">
        {/* Column · Stays (1147:91) */}
        <div className="rounded-[18px] bg-[#f6fbf9] px-[22px] pt-[17px] pb-[22px] lg:h-[260px]">
          <p className="flex min-h-[30px] items-center text-[17px] font-semibold text-[#055240]">
            {c.about.staysTitle}
          </p>
          <ul className="mt-[14px] space-y-[26px]">
            {c.about.staysItems.map((item) => (
              <li key={item} className="flex min-h-[28px] items-center gap-[12px]">
                <CircleCheck
                  className="size-[20px] shrink-0 text-[#055240]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-[13px] text-[#0e1f18]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column · Changes (1147:105) */}
        <div className="rounded-[18px] bg-[#f2f9f5] px-[22px] pt-[17px] pb-[22px] lg:h-[260px]">
          <p className="flex min-h-[30px] items-center text-[17px] font-semibold text-[#055240]">
            {c.about.changesTitle}
          </p>
          <ul className="mt-[14px] space-y-[26px]">
            {c.about.changesItems.map((item) => (
              <li key={item} className="flex min-h-[28px] items-center gap-[14px]">
                <ArrowRight
                  className="size-[18px] shrink-0 text-[#055240]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-[13px] text-[#0e1f18]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
