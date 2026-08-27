import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { STATES_DEACTIVATION_SUBJECT } from "../states.mock";
import { StateActionButton } from "./StateActionButton";
import { StateScreenCard, StateScreenNote } from "./StateScreenCard";

/* ?state=destructive-success — where AD-10C step 05 sends a confirmed
   destructive action ("Result · Success state + Activity Log entry",
   1226:4162) and what AD-10D's boundary panel spells out (1239:892):
   "Show the resulting state and link to Activity Log / related object.",
   with the Return / View activity pair (1239:895 / 1239:897).

   The reversibility note from the AD-10B confirmation (1226:1231) stays on
   screen so the result never reads as irreversible. */
export function StatesSuccessState() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <StateScreenCard
      glyph="✓"
      glyphClassName="bg-[#e8f5f0] text-[#083d2d]"
      title={c.detail.boundary.success.label}
      body={c.detail.boundary.success.detail}
      actions={
        <>
          <StateActionButton to="/admin/states" variant="outline">
            {c.detail.boundary.returnAction}
          </StateActionButton>
          <StateActionButton to="/admin/activity-log" variant="primary">
            {c.detail.boundary.viewActivity}
          </StateActionButton>
        </>
      }
    >
      <StateScreenNote
        label={c.detail.boundary.destructiveAction.label}
        detail={c.systemStates.confirm.body.replace(
          "{name}",
          STATES_DEACTIVATION_SUBJECT,
        )}
        toneClassName="bg-[#e8f5f0]"
      />
      <StateScreenNote
        label={c.detail.boundary.confirmation.label}
        detail={c.systemStates.confirm.note}
        toneClassName="bg-[#eff5fc]"
      />
    </StateScreenCard>
  );
}
