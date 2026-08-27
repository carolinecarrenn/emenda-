import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-02B right rail (1213:159…161): 270x344 white card, radius 12 — 14px
   semibold #083d2d "SWITCH RULES" over three 12px #66736b paragraphs.
   Pending work stays with its origin facility, counts refresh after the
   switch, and no switch ever widens private worker data. Desktop only. */
export function SwitchRulesRail() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="hidden rounded-[12px] border border-[#dbe3de] bg-white px-[24px] py-[24px] lg:block lg:h-[344px]">
      <h2 className="text-[14px] font-semibold text-[#083d2d]">
        {c.switchFacility.rulesTitle}
      </h2>
      <div className="mt-[16px] space-y-[16px] text-[12px] leading-[18px] text-[#66736b]">
        {c.switchFacility.rulesLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
