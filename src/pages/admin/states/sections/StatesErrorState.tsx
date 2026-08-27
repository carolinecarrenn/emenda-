import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { StateActionButton } from "./StateActionButton";
import { StateScreenCard, StateScreenNote } from "./StateScreenCard";

/* ?state=error — the "Error" row of the AD-10 coverage card (1225:1355,
   "Retry and preserve filters/context") drawn with the concrete copy AD-10B
   gives it (1226:1220): "Couldn’t load reports", "Your filters are preserved.
   Try again without losing context.", Retry / Reset filters.

   AD-10D's "Retry contract" note (1239:867) rides along because the frame
   makes it part of the same contract: a retry must not duplicate work that
   already succeeded. */
export function StatesErrorState() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <StateScreenCard
      title={c.systemStates.loadError.title}
      body={c.systemStates.loadError.body}
      actions={
        <>
          <StateActionButton to="/admin/states" variant="primary">
            {c.systemStates.loadError.retry}
          </StateActionButton>
          <StateActionButton to="/admin/states" variant="outline">
            {c.systemStates.loadError.resetFilters}
          </StateActionButton>
        </>
      }
    >
      <StateScreenNote
        label={c.detail.error.rows[0].label}
        detail={c.detail.error.rows[0].detail}
        toneClassName="bg-[#fdf0ef]"
      />
      <StateScreenNote
        label={c.detail.error.note.label}
        detail={c.detail.error.note.detail}
        toneClassName="bg-[#fdf7ec]"
      />
    </StateScreenCard>
  );
}
