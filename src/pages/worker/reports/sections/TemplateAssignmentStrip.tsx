import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "../caregiver.copy";

/* WD-54I bottom strip: #f2f9f5, radius 12, two 13px muted lines. */
export function TemplateAssignmentStrip() {
  const c = useSectionCopy(CAREGIVER_COPY);

  return (
    <div className="rounded-[12px] border border-lp-line bg-lp-tint px-[17px] py-[19px] text-[13px] leading-[16px] text-lp-muted">
      <p>{c.hub.assignedAutomatically}</p>
      <p>{c.hub.templateReady(EMPLOYER.name)}</p>
    </div>
  );
}
