import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-17 yellow "PROTOTYPE STATE" card (1109:94-96). */
export function PrototypeStateCard() {
  const c = useSectionCopy(AUDIT_COPY).ready;

  return (
    <AuditNoteCard tone="caution" title={c.prototypeTitle}>
      <p>{c.prototypeBody}</p>
    </AuditNoteCard>
  );
}
