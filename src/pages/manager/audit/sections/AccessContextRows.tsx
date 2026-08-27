import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { ACCESS_CONTEXT_KEYS, type AccessContextKey } from "../auditData";

/* EM-STATE-03 "CURRENT ACCESS CONTEXT" rows (1137:8-20): 48px white cards,
   radius 8, 1px #c7dbd1 — Manager role / Organization / Facility / Access
   scope. Org + facility come from EMPLOYER (Sakura Care unification). */
export function AccessContextRows() {
  const common = useCommonCopy();
  const c = useSectionCopy(AUDIT_COPY).restricted;

  const values: Record<AccessContextKey, string> = {
    managerRole: common.manager.facilityManager,
    organization: EMPLOYER.name,
    facility: EMPLOYER.facility,
    accessScope: c.accessScopeValue,
  };

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-[#0c513b] uppercase lg:text-[12px]">
        {c.contextHeading}
      </h2>
      <div className="mt-[10px] space-y-[8px]">
        {ACCESS_CONTEXT_KEYS.map((key) => (
          <div
            key={key}
            className="flex min-h-[48px] items-center justify-between gap-4 rounded-[8px] border border-[#c7dbd1] bg-white px-[12px] py-[10px] lg:px-5 lg:py-[14px]"
          >
            <p className="text-[10px] text-[#65746d] lg:text-[12px]">
              {c.contextLabels[key]}
            </p>
            <p className="text-right text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
              {values[key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
