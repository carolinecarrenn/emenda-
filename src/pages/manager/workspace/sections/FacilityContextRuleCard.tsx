import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* EM-02A mint "Facility context rule" card: switching facility never mixes
   worker, report, follow-up or audit data. Carried on the desktop MD-02A as
   well so the rule is stated before the manager enters the workspace. */
export function FacilityContextRuleCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#c9ded4] bg-[#e8f5f0] px-[18px] py-[14px] lg:px-[24px] lg:py-[18px]">
      <p className="text-[12px] font-semibold text-[#083d2d] lg:text-[13px]">
        {c.context.contextRuleTitle}
      </p>
      <p className="mt-[6px] text-[11px] leading-[17px] text-[#6b8f80] lg:text-[12px]">
        {c.context.contextRuleBody}
      </p>
    </section>
  );
}
