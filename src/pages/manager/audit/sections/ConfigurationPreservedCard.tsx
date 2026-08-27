import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { AUDIT_COPY } from "../audit.copy";
import { AUDIT_PACKAGE } from "../auditData";
import { fill, formatCompactRange } from "../auditFormat";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-16B mint "CONFIGURATION PRESERVED" card (1109:106-108): facility and
   period/worker/record counts survive the failure untouched. */
export function ConfigurationPreservedCard() {
  const { language } = useLanguage();
  const c = useSectionCopy(AUDIT_COPY).failed;

  return (
    <AuditNoteCard tone="mint" title={c.preservedTitle}>
      <p>{fill(c.preservedFacility, { facility: EMPLOYER.facility })}</p>
      <p>
        {fill(c.preservedPeriod, {
          period: formatCompactRange(
            AUDIT_PACKAGE.periodStart,
            AUDIT_PACKAGE.periodEnd,
            language,
          ),
          workers: AUDIT_PACKAGE.workers,
          records: AUDIT_PACKAGE.records,
        })}
      </p>
    </AuditNoteCard>
  );
}
