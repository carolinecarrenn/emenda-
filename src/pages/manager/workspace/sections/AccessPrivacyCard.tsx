import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-02A ACCESS & PRIVACY card (1213:106…108) — white on desktop with the
   uppercase heading, the "Never available" list and the closing
   merge clause. EM-02A (761:38) draws the same boundary as the peach
   #ffe8e0 privacy-limit card: a sentence-case "Access & privacy" title over
   two compact clauses — what the Manager does see, and what is never
   available — with no uppercase heading and no bulleted list. */
export function AccessPrivacyCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#ffe8e0] bg-[#ffe8e0] px-[16px] py-[14px] lg:h-[280px] lg:border-[#dbe3de] lg:bg-white lg:px-[24px] lg:py-[24px]">
      <h2 className="text-[12px] font-semibold text-[#a04b2c] lg:text-[14px] lg:text-[#083d2d]">
        <span className="lg:hidden">{c.context.mobileAccessPrivacy}</span>
        <span className="hidden lg:inline">{c.context.accessPrivacy}</span>
      </h2>

      <div className="mt-[10px] space-y-[8px] text-[11px] leading-[17px] text-[#8a5b48] lg:hidden">
        {c.context.mobilePrivacyLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="hidden lg:block">
        <p className="mt-[16px] text-[13px] leading-[16px] text-[#66736b]">
          {c.context.privacyIntro}
        </p>
        <p className="mt-[16px] text-[13px] leading-[16px] text-[#66736b]">
          {c.context.neverAvailable}
        </p>
        <ul className="text-[13px] leading-[16px] text-[#66736b]">
          {c.context.neverLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-[16px] text-[13px] leading-[16px] text-[#66736b]">
          {c.context.privacyFooter}
        </p>
      </div>
    </section>
  );
}
