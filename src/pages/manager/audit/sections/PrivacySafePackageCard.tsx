import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-17 mint "PRIVACY-SAFE PACKAGE" card (1109:91-93). */
export function PrivacySafePackageCard() {
  const c = useSectionCopy(AUDIT_COPY).ready;

  return (
    <AuditNoteCard tone="mint" title={c.privacyTitle}>
      <p>{c.privacyBody}</p>
    </AuditNoteCard>
  );
}
