import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { EVIDENCE_REQUEST, FOCUS_REPORT } from "../reports.mock";
import {
  StateActions,
  StateCard,
  StateField,
  StateNote,
} from "./DetailedStateCard";
import { StateBoard } from "./StateBoard";

/* AD-04D · "Request evidence" (1239:382) — ?state=request-evidence.
   Request to * / Evidence needed * / Due by / Message fields, then the
   Cancel + Send request row, then the blue "After send" note — the frame
   places the buttons above the note on this card. */
export function RequestEvidenceBoard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <StateBoard
      eyebrow={c.states.eyebrow}
      title={c.states.title}
      description={c.states.description}
      titleClassName="text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px]"
    >
      <StateCard
        pill={c.evidence.pill}
        title={c.evidence.title}
        subtitle={c.evidence.subtitle}
        footnote={c.evidence.footnote}
      >
        <StateField
          label={c.evidence.requestTo}
          value={c.evidence.requestToValue.replace(
            "{name}",
            FOCUS_REPORT.reporter,
          )}
        />
        <StateField
          label={c.evidence.evidenceNeeded}
          value={EVIDENCE_REQUEST.evidenceNeeded}
        />
        <StateField label={c.evidence.dueBy} value={EVIDENCE_REQUEST.dueBy} />
        <StateField
          label={c.evidence.message}
          value={EVIDENCE_REQUEST.message}
        />
        <StateActions
          secondaryLabel={c.states.cancel}
          secondaryTo="/admin/reports?state=detail"
          primaryLabel={c.evidence.submit}
          primaryTo="/admin/reports?state=detail"
        />
        <StateNote
          tone="info"
          title={c.evidence.noteTitle}
          body={c.evidence.noteBody}
        />
      </StateCard>
    </StateBoard>
  );
}
