import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";

/* MD-02A OPERATIONAL SCOPE card (1213:103…105): 640x280 white card, radius
   12, #dbe3de hairline — 14px semibold #083d2d heading over five 13px
   #66736b scope lines and the closing "All actions remain bound to
   {facility}." clause. */
export function OperationalScopeCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#dbe3de] bg-white px-[18px] py-[18px] lg:h-[280px] lg:px-[24px] lg:py-[24px]">
      <h2 className="text-[13px] font-semibold text-[#083d2d] lg:text-[14px]">
        {c.context.operationalScope}
      </h2>
      <ul className="mt-[16px] space-y-[6px] text-[12px] leading-[19px] text-[#66736b] lg:space-y-0 lg:text-[13px] lg:leading-[16px]">
        {c.context.scopeLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p className="mt-[16px] text-[12px] leading-[19px] text-[#66736b] lg:text-[13px] lg:leading-[16px]">
        {fill(c.context.scopeFooter, { facility: EMPLOYER.facility })}
      </p>
    </section>
  );
}
