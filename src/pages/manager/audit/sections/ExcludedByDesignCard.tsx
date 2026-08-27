import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-16A mint "EXCLUDED BY DESIGN" card (1109:61-63). */
export function ExcludedByDesignCard() {
  const c = useSectionCopy(AUDIT_COPY).confirm;

  return (
    <AuditNoteCard tone="mint" title={c.excludedTitle}>
      <p>{c.excludedBody}</p>
    </AuditNoteCard>
  );
}
