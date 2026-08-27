import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { StateActionButton } from "./StateActionButton";
import { StateScreenCard, StateScreenNote } from "./StateScreenCard";

/* ?state=no-results — the "No results" row of the AD-10 coverage card
   (1225:1359, "Keep filters visible and provide clear reset action") drawn
   with AD-10D's concrete rule (1239:843/1239:844, "Keep query and filters +
   Reset filters action") and its Reset filters / Primary action pair
   (1239:848 / 1239:850).

   AD-10C step 02 also asks a resolved-empty result to stay positive without
   losing navigation, so its note (1239:845) is carried here. */
export function StatesNoResultsState() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <StateScreenCard
      title={c.detail.read.rows[2].label}
      body={c.coverage.rows.noResults.detail}
      actions={
        <>
          <StateActionButton to="/admin/states" variant="outline">
            {c.detail.read.resetFilters}
          </StateActionButton>
          <StateActionButton to="/admin/employees" variant="primary">
            {c.detail.read.primaryAction}
          </StateActionButton>
        </>
      }
    >
      <StateScreenNote
        label={c.detail.read.rows[2].label}
        detail={c.detail.read.rows[2].detail}
        toneClassName="bg-[#e8f5f0]"
      />
      <StateScreenNote
        label={c.detail.read.note.label}
        detail={c.detail.read.note.detail}
        toneClassName="bg-[#eff5fc]"
      />
    </StateScreenCard>
  );
}
