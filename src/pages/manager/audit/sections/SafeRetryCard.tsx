import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-16B yellow "SAFE RETRY" card (1109:109-111): never show a success
   state until the export is actually confirmed. */
export function SafeRetryCard() {
  const c = useSectionCopy(AUDIT_COPY).failed;

  return (
    <AuditNoteCard tone="caution" title={c.retryTitle}>
      <p>{c.retryBody}</p>
    </AuditNoteCard>
  );
}
