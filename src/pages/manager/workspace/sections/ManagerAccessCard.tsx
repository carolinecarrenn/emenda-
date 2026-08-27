import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import { FACILITIES, WORKSPACE_SUMMARY } from "../workspaceMock";

/* EM-02 (761:3) mint "Manager access" summary card with the outlined
   "Current" pill — the 390px counterpart of the MD-02 KPI quad. Desktop
   renders the four cards instead, so this card is mobile-only. */
export function ManagerAccessCard() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();

  return (
    <section className="relative rounded-[14px] bg-[#e3f0e8] px-[13px] pt-[12px] pb-[6px] lg:hidden">
      {/* EM-02 (761:9…13) keeps the card to 58px: an 11px title on a 13px
          line, a 9px gap and two 10px/12px meta lines. The "Current" pill
          (761:12, 69x27) is drawn over the block rather than inside the
          title row, so it never adds height. */}
      <p className="pr-[80px] text-[11px] leading-[13px] font-semibold text-[#083d2d]">
        {c.facility.managerAccess}
      </p>
      <span className="absolute top-[10px] right-[13px] rounded-[10px] border border-[#c9ded4] px-[16px] py-[7px] text-[10px] leading-[12px] font-semibold text-[#083d2d]">
        {c.facility.currentPill}
      </span>
      {/* EM-02 sets the org/role clause and the facility counts on two
          separate lines inside the card, never as one wrapping sentence. */}
      <div className="mt-[9px] pr-[80px] text-[10px] leading-[12px] text-[#6b8f80]">
        <p>
          {fill(c.facility.managerAccessMeta, {
            org: EMPLOYER.name,
            role: common.manager.facilityManager,
          })}
        </p>
        <p>
          {fill(c.facility.managerAccessCounts, {
            facilities: FACILITIES.length,
            workers: WORKSPACE_SUMMARY.totalWorkers,
            open: WORKSPACE_SUMMARY.openWork,
          })}
        </p>
      </div>
    </section>
  );
}
