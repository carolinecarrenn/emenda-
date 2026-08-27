import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";

/* EM-02A (761:38) scope-confirmation hero — the single solid dark-green
   #0c5941 card in section 02, white type: the organisation in uppercase
   letter-spaced caps, the facility below it, then the manager and role.
   Desktop MD-02A replaces it with the mint CURRENT WORKSPACE banner. */
export function FacilityContextHero() {
  const common = useCommonCopy();

  return (
    <section className="rounded-[16px] bg-[#0c5941] px-[18px] py-[20px] lg:hidden">
      <p className="text-[10px] font-semibold tracking-[0.12em] text-[#cfe4d9] uppercase">
        {EMPLOYER.name}
      </p>
      <p className="mt-[8px] text-[20px] leading-[1.15] font-bold text-white">
        {EMPLOYER.facility}
      </p>
      <p className="mt-[10px] text-[11px] text-[#d8ece2]">
        {EMPLOYER.manager} · {common.manager.facilityManager}
      </p>
    </section>
  );
}
