import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-16 mint "INCLUDED / EXCLUDED" card (1109:27-29). */
export function IncludedExcludedCard() {
  const c = useSectionCopy(AUDIT_COPY).export;

  return (
    <AuditNoteCard tone="mint" title={c.includedExcludedTitle}>
      <p>{c.includedLine}</p>
      <p>{c.excludedLine}</p>
    </AuditNoteCard>
  );
}
