import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { AUDIT_COPY } from "../audit.copy";
import { AUDIT_PACKAGE } from "../auditData";
import { fill, formatFullRange } from "../auditFormat";
import { AuditSectionHeading } from "./AuditSectionHeading";
import { AuditKeyValueRow } from "./AuditKeyValueRow";

/* EM-16 "EXPORT SCOPE" (761:2892 · rows 1109:15-26): Date range,
   Worker scope, Record types, Package estimate. */
export function ExportScopeRows() {
  const { language } = useLanguage();
  const c = useSectionCopy(AUDIT_COPY).export;

  const rows = [
    {
      label: c.dateRange,
      value: formatFullRange(
        AUDIT_PACKAGE.periodStart,
        AUDIT_PACKAGE.periodEnd,
        language,
      ),
    },
    {
      label: c.workerScope,
      value: fill(c.workerScopeValue, {
        lead: AUDIT_PACKAGE.workerScopeLead,
        count: AUDIT_PACKAGE.workerScopeExtra,
      }),
    },
    { label: c.recordTypes, value: c.recordTypesValue },
    {
      label: c.packageEstimate,
      value: fill(c.packageEstimateValue, { count: AUDIT_PACKAGE.records }),
    },
  ];

  return (
    <section>
      <AuditSectionHeading>{c.scopeHeading}</AuditSectionHeading>
      <div className="mt-[7px] space-y-[8px] lg:mt-[10px]">
        {rows.map((row) => (
          <AuditKeyValueRow
            key={row.label}
            label={row.label}
            value={row.value}
            emphasis="label"
          />
        ))}
      </div>
    </section>
  );
}
