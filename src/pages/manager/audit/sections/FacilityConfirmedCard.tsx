import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { fill } from "../auditFormat";

/* EM-STATE-02 mint facility-confirmed card (1109:144-146): the original
   organization / facility context is preserved for pending actions. */
export function FacilityConfirmedCard() {
  const c = useSectionCopy(AUDIT_COPY).reconnected;

  return (
    <section className="min-h-[72px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px] lg:min-h-0 lg:px-5 lg:py-4">
      <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[15px]">
        {fill(c.contextTitle, { facility: EMPLOYER.facility })}
      </p>
      <p className="mt-[8px] text-[9px] leading-[14px] text-[#667a73] lg:text-[11px] lg:leading-[18px]">
        {c.contextBody}
      </p>
    </section>
  );
}
