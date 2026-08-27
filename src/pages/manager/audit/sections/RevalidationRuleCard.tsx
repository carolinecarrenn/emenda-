import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-STATE-02 white "REVALIDATION RULE" card (1109:160-162): pending
   actions never auto-complete after reconnect. */
export function RevalidationRuleCard() {
  const c = useSectionCopy(AUDIT_COPY).reconnected;

  return (
    <AuditNoteCard tone="plain" title={c.ruleTitle}>
      <p>{c.ruleBody}</p>
    </AuditNoteCard>
  );
}
