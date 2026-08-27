import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";

/* EM-STATE-03 yellow "PRIVACY BOUNDARY" card (1137:24-26): #fff6c7 on
   #c7dbd1 — private worker surfaces stay unavailable while explaining the
   restriction. */
export function PrivacyBoundaryCard() {
  const c = useSectionCopy(AUDIT_COPY).restricted;

  return (
    <section className="rounded-[10px] border border-[#c7dbd1] bg-[#fff6c7] px-[12px] py-[12px] lg:px-5 lg:py-[18px]">
      <h2 className="text-[10px] font-semibold text-[#083d2d] uppercase lg:text-[12px]">
        {c.boundaryTitle}
      </h2>
      <p className="mt-[8px] text-[9px] leading-[12px] text-[#65746d] lg:text-[11px] lg:leading-[18px]">
        {c.boundaryBody}
      </p>
    </section>
  );
}
