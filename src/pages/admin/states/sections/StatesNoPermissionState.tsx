import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { StateActionButton } from "./StateActionButton";
import { StateScreenCard, StateScreenNote } from "./StateScreenCard";

/* ?state=no-permission — AD-10's "Permission boundary" card (1225:1342) at
   screen scale: the blue #eff5fc / #2f5e9b circle, "Permission boundary", and
   "Company Admin only sees company data, not cross-company platform data."

   AD-10D's boundary panel (1239:875) supplies the two rules that must travel
   with it — the "Not authorized for this company action" message and the
   Privacy note that forbids leaking cross-company data, counts, identifiers,
   or existence — and AD-10C step 04 supplies the recovery: return to the
   allowed previous screen. */
export function StatesNoPermissionState() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <StateScreenCard
      glyph="!"
      glyphClassName="bg-[#eff5fc] text-[#2f5e9b]"
      title={c.cards.boundary.title}
      body={c.cards.boundary.body}
      actions={
        <>
          <StateActionButton to="/admin/states" variant="outline">
            {c.detail.boundary.returnAction}
          </StateActionButton>
          <StateActionButton to="/admin/access" variant="primary">
            {c.cards.boundary.action}
          </StateActionButton>
        </>
      }
    >
      <StateScreenNote
        label={c.detail.boundary.noPermission.label}
        detail={c.detail.boundary.noPermission.detail}
        toneClassName="bg-[#fdf0ef]"
      />
      <StateScreenNote
        label={c.detail.boundary.privacy.label}
        detail={c.detail.boundary.privacy.detail}
        toneClassName="bg-[#fdf0ef]"
      />
    </StateScreenCard>
  );
}
