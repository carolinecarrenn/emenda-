import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import { CURRENT_FACILITY, WORKSPACE_SUMMARY } from "../workspaceMock";

/* EM-02B current-facility mint card — the 390px counterpart of the MD-02B
   CURRENT FACILITY / OPEN WORK / ACCESSIBLE FACILITIES KPI row. The frame
   sets it as a single 13px semibold "Current · {facility}" line over the
   11px worker / follow-up / unread caption — it carries neither the
   uppercase CURRENT FACILITY eyebrow nor the large facility name those
   belong to the desktop KPI card. */
export function CurrentFacilityCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[16px] py-[14px] lg:hidden">
      <p className="text-[13px] font-semibold text-[#083d2d]">
        {fill(c.switchFacility.mobileCurrentTitle, {
          facility: CURRENT_FACILITY.name,
        })}
      </p>
      <p className="mt-[8px] text-[11px] leading-[16px] text-[#6b8f80]">
        {fill(c.switchFacility.mobileCurrentCaption, {
          workers: CURRENT_FACILITY.workers,
          followUp: CURRENT_FACILITY.followUp,
          unread: WORKSPACE_SUMMARY.unread,
        })}
      </p>
    </section>
  );
}
