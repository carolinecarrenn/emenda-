import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* EM-05 (761:244…246) peach "Employer access" card — no glyph, a bold 15px
   title over the boundary sentence: operational records plus
   worker-approved professional evidence — Health / Stress / Life / private
   personal data / eCoin unavailable. The desktop MD-05 states the same
   boundary in its mint footer strip, so this card is the 390px surface. */
export function EmployerAccessCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[14px] border border-[#ffe8e0] bg-[#ffe8e0] px-[18px] py-[16px] lg:hidden">
      <p className="text-[15px] font-bold text-[#a04b2c]">
        {c.worker.employerAccessTitle}
      </p>
      <p className="mt-[10px] text-[11px] leading-[17px] text-[#8a5b48]">
        {c.worker.employerAccessBody}
      </p>
    </section>
  );
}
