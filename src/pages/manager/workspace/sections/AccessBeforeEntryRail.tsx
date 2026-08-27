import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-02 right rail (1213:54…56): 330x410 white card, radius 12, #dbe3de
   hairline. 15px semibold #083d2d "ACCESS BEFORE ENTRY" heading over four
   11px #66736b blocks — ROLE, PERMITTED MODULES, FACILITY-BOUND ACTIONS and
   the EXCLUDED clause that keeps private Health / Stress / Life data and
   private eCoin permanently out of manager reach. */
export function AccessBeforeEntryRail() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();

  return (
    <section className="rounded-[12px] border border-[#dbe3de] bg-white pt-[22px] pr-[38px] pb-[22px] pl-[24px] lg:h-[410px]">
      <h2 className="text-[14px] font-semibold text-[#083d2d] lg:text-[15px]">
        {c.facility.railTitle}
      </h2>

      <div className="mt-[13px] space-y-[13px] text-[11px] leading-[13px] text-[#66736b]">
        <div>
          <p className="uppercase">
            {c.facility.railRoleLabel}
          </p>
          <p>{common.manager.facilityManager}</p>
        </div>

        <div>
          <p className="uppercase">
            {c.facility.railModulesLabel}
          </p>
          {c.facility.railModules.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div>
          <p className="uppercase">
            {c.facility.railBoundLabel}
          </p>
          <p>{c.facility.railBoundBody}</p>
        </div>

        <div>
          <p className="uppercase">
            {c.facility.railExcludedLabel}
          </p>
          <p>{c.facility.railExcludedBody}</p>
        </div>
      </div>
    </section>
  );
}
