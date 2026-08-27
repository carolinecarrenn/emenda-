import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { STATES_DEACTIVATION_SUBJECT } from "../states.mock";
import { StateActionButton } from "./StateActionButton";

/* AD-10B "Deactivate employee?" (1226:1227): a 672x260 white card, radius 12,
   1px #d6e3de — 16px bold title at (19,19), the 9px consequence line at y49,
   a 632x74 #fdf0ef panel at y101 carrying the 10px semibold #b04139
   reversibility note, and the Cancel / Deactivate employee pair at y203.

   Both buttons are drawn as outline buttons in the frame — the destructive
   action is not tinted red — so both are rendered that way here. Confirming
   lands on the destructive success state AD-10C step 05 and AD-10D
   (1239:892) require. */
export function DeactivateConfirmCard() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[19px] lg:h-[260px] lg:w-[672px]">
      <p className="text-[16px] leading-none font-bold text-[#17362e]">
        {c.systemStates.confirm.title}
      </p>
      <p className="mt-[14px] text-[11px] leading-[16px] text-[#65746d] lg:text-[9px] lg:leading-[13px]">
        {c.systemStates.confirm.body.replace(
          "{name}",
          STATES_DEACTIVATION_SUBJECT,
        )}
      </p>
      <div className="mt-[20px] rounded-[10px] bg-[#fdf0ef] p-[12px] pt-[16px] lg:mt-[26px] lg:h-[74px]">
        <p className="text-[10px] leading-[14px] font-semibold text-[#b04139]">
          {c.systemStates.confirm.note}
        </p>
      </div>
      <div className="mt-[20px] flex items-center gap-[27px] lg:mt-[28px]">
        <StateActionButton to="/admin/states" variant="outline">
          {c.systemStates.confirm.cancel}
        </StateActionButton>
        <StateActionButton
          to="/admin/states?state=destructive-success"
          variant="outline"
        >
          {c.systemStates.confirm.deactivate}
        </StateActionButton>
      </div>
    </div>
  );
}
