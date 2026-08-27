import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { PACKAGE_GROUPS } from "../auditData";
import { fill } from "../auditFormat";
import { AuditSectionHeading } from "./AuditSectionHeading";
import { AuditKeyValueRow } from "./AuditKeyValueRow";

/* EM-17 "PACKAGE SUMMARY" (1109:78-90): the same four record groups with
   green right-aligned counts. */
export function PackageSummaryRows() {
  const c = useSectionCopy(AUDIT_COPY).ready;

  return (
    <section>
      <AuditSectionHeading>{c.summaryHeading}</AuditSectionHeading>
      <div className="mt-[10px] space-y-[8px]">
        {PACKAGE_GROUPS.map((group) => (
          <AuditKeyValueRow
            key={group.key}
            label={c.summaryLabels[group.key]}
            value={fill(c.summaryValues[group.key], group.counts)}
            emphasis="both"
          />
        ))}
      </div>
    </section>
  );
}
