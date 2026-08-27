import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* EM-02C (949:4) peach "Access boundary" card, drawn below the empty-state
   card whenever the facility search returns nothing: the frame swaps the
   mint "Facility context" note for this warning so the manager is told the
   empty result is a scope statement, not a missing facility. MD-02C states
   the same rule in its ACCESS BOUNDARY rail, so this card is the 390px
   surface only. Same peach pair as EM-02B's "Pending work stays bound". */
export function AccessBoundaryCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#ffe8e0] bg-[#ffe8e0] px-[16px] py-[14px] lg:hidden">
      <p className="text-[12px] font-semibold text-[#a04b2c]">
        {c.facility.boundaryTitle}
      </p>
      <p className="mt-[6px] text-[11px] leading-[17px] text-[#8a5b48]">
        {c.facility.boundaryBody}
      </p>
    </section>
  );
}
