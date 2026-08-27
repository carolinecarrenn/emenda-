import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-16A yellow "CONFIRM EXPORT" card (1109:64-66). */
export function ConfirmExportCard() {
  const c = useSectionCopy(AUDIT_COPY).confirm;

  return (
    <AuditNoteCard tone="caution" title={c.confirmTitle}>
      <p>{c.confirmBody}</p>
    </AuditNoteCard>
  );
}
