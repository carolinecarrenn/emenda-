import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-STATE-01 yellow "NO SILENT WRITES" card (1109:137-139). */
export function NoSilentWritesCard() {
  const c = useSectionCopy(AUDIT_COPY).offline;

  return (
    <AuditNoteCard tone="caution" title={c.noSilentWritesTitle}>
      <p>{c.noSilentWritesBody}</p>
    </AuditNoteCard>
  );
}
