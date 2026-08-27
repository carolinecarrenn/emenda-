import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-STATE-01 mint "READ-ONLY MODE" card (1109:131-133). */
export function ReadOnlyModeCard() {
  const c = useSectionCopy(AUDIT_COPY).offline;

  return (
    <AuditNoteCard tone="mint" title={c.readOnlyTitle}>
      <p>{c.readOnlyBody}</p>
    </AuditNoteCard>
  );
}
