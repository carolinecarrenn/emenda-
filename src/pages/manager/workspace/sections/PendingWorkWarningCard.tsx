import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* EM-02B peach warning above the switch CTA: "Pending work stays bound —
   Actions created in one facility are not mixed into another facility
   context." The frame draws the card as text only, with no warning glyph in
   front of the title. The desktop MD-02B states the same rule at the top of
   its SWITCH RULES rail; the card is kept on both surfaces so the boundary
   is visible at the moment of the switch. */
export function PendingWorkWarningCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#ffe8e0] bg-[#ffe8e0] px-[16px] py-[14px]">
      <p className="text-[12px] font-semibold text-[#a04b2c]">
        {c.switchFacility.warningTitle}
      </p>
      <p className="mt-[6px] text-[11px] leading-[17px] text-[#8a5b48]">
        {c.switchFacility.warningBody}
      </p>
    </section>
  );
}
