import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { RESOLUTION_DRAFT } from "../reports.mock";
import {
  StateActions,
  StateCard,
  StateField,
  StateNote,
} from "./DetailedStateCard";
import { StateBoard } from "./StateBoard";

/* AD-04D · "Resolve / reopen report" (1239:407) — ?state=outcome.
   Outcome * / Resolution summary * / Evidence * / Reporter follow-up fields,
   the Keep open + Mark resolved row, then the amber "Reopen path" note. */
export function ResolveReopenBoard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <StateBoard
      eyebrow={c.states.eyebrow}
      title={c.states.title}
      description={c.states.description}
      titleClassName="text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px]"
    >
      <StateCard
        pill={c.outcome.pill}
        title={c.outcome.title}
        subtitle={c.outcome.subtitle}
        footnote={c.outcome.footnote}
      >
        <StateField label={c.outcome.outcome} value={c.outcome.outcomeValue} />
        <StateField
          label={c.outcome.summary}
          value={RESOLUTION_DRAFT.summary}
        />
        <StateField
          label={c.outcome.evidence}
          value={c.outcome.evidenceValue.replace(
            "{count}",
            String(RESOLUTION_DRAFT.evidenceAttachments),
          )}
        />
        <StateField
          label={c.outcome.reporterFollowUp}
          value={c.outcome.reporterFollowUpValue}
        />
        <StateActions
          secondaryLabel={c.outcome.keepOpen}
          secondaryTo="/admin/reports?state=detail"
          primaryLabel={c.outcome.submit}
          primaryTo="/admin/reports"
        />
        <StateNote
          tone="warning"
          title={c.outcome.noteTitle}
          body={c.outcome.noteBody}
        />
      </StateCard>
    </StateBoard>
  );
}
