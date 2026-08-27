import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { PACKAGE_GROUPS } from "../auditData";
import { fill } from "../auditFormat";
import { AuditSectionHeading } from "./AuditSectionHeading";
import { AuditKeyValueRow } from "./AuditKeyValueRow";

/* EM-16A "PACKAGE CONTENTS" (761:2960 · rows 1109:49-60): Communication 42,
   Daily Reports 46 submitted + 2 missing, Follow-up 12, Support 3. */
export function PackageContentsRows() {
  const c = useSectionCopy(AUDIT_COPY).confirm;

  return (
    <section>
      <AuditSectionHeading>{c.contentsHeading}</AuditSectionHeading>
      <div className="mt-[10px] space-y-[8px]">
        {PACKAGE_GROUPS.map((group) => (
          <AuditKeyValueRow
            key={group.key}
            label={c.groupLabels[group.key]}
            value={fill(c.groupValues[group.key], group.counts)}
            emphasis="value"
          />
        ))}
      </div>
    </section>
  );
}
