import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditNoteCard } from "./AuditNoteCard";

/* EM-16 yellow "REVIEW BEFORE GENERATE" checklist (1109:30-32): three
   ✓-marked confirmations before the generate CTA. */
export function ReviewChecklistCard() {
  const c = useSectionCopy(AUDIT_COPY).export;

  return (
    <AuditNoteCard tone="caution" title={c.checklistTitle}>
      <ul>
        {c.checklistItems.map((item) => (
          <li key={item} className="flex items-start gap-[4px]">
            <Check
              size={9}
              strokeWidth={2}
              className="mt-[1px] shrink-0 text-[#0c5941] lg:mt-[3px] lg:size-[13px]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </AuditNoteCard>
  );
}
