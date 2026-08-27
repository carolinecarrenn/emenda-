import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { ASSIGN_OWNER_CANDIDATE, FOCUS_REPORT } from "../reports.mock";
import {
  StateActions,
  StateCard,
  StateField,
  StateNote,
} from "./DetailedStateCard";
import { StateBoard } from "./StateBoard";

/* AD-04D · "Assign report owner" (1239:357) — ?state=assign-owner.
   Report / Current owner / New owner * / SLA fields, then the blue Impact
   note, then Cancel + Assign owner. Cancel returns to the report detail the
   assignment was opened from. */
export function AssignOwnerBoard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <StateBoard
      eyebrow={c.states.eyebrow}
      title={c.states.title}
      description={c.states.description}
      titleClassName="text-[20px] leading-[26px] lg:text-[22px] lg:leading-[28px]"
    >
      <StateCard
        pill={c.assign.pill}
        title={c.assign.title}
        subtitle={c.assign.subtitle}
        footnote={c.assign.footnote}
      >
        <StateField
          label={c.assign.report}
          value={c.assign.reportValue
            .replace("{id}", FOCUS_REPORT.id)
            .replace("{issue}", FOCUS_REPORT.issue)
            .replace("{priority}", c.priority[FOCUS_REPORT.priority])}
        />
        <StateField
          label={c.assign.currentOwner}
          value={FOCUS_REPORT.owner ?? c.assign.unassigned}
        />
        <StateField
          label={c.assign.newOwner}
          value={ASSIGN_OWNER_CANDIDATE}
        />
        <StateField
          label={c.assign.sla}
          value={c.assign.slaValue.replace(
            "{hours}",
            String(FOCUS_REPORT.slaHoursRemaining),
          )}
        />
        <StateNote
          tone="info"
          title={c.assign.noteTitle}
          body={c.assign.noteBody}
        />
        <StateActions
          secondaryLabel={c.states.cancel}
          secondaryTo="/admin/reports?state=detail"
          primaryLabel={c.assign.submit}
          primaryTo="/admin/reports?state=detail"
        />
      </StateCard>
    </StateBoard>
  );
}
