import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { JAPAN_COPY } from "../../japan.copy";
import { PERSONAL_NOTE } from "../../japanMock";
import { FieldLabel } from "../../sections/FormFields";
import { PrimaryButton, SecondaryButton } from "../../sections/PrimaryButton";

/** WD-33N personal-note editor (+ WD-33O saving, WD-33P save-failed,
 *  WD-33Q offline button states). Lives on top of the verified record. */
export function ResidenceNoteForm({ state }: { state: string }) {
  const c = useSectionCopy(JAPAN_COPY);
  const cc = useCommonCopy();
  const navigate = useNavigate();

  const [note, setNote] = useState(PERSONAL_NOTE);
  const [phase, setPhase] = useState<"idle" | "saving">("idle");

  const saving = phase === "saving" || state === "note-saving";
  const saveLabel = saving
    ? c.visaPlan.saving
    : state === "note-save-failed"
      ? c.visaPlan.tryAgain
      : state === "note-offline"
        ? c.visaPlan.saveWhenOnline
        : c.residence.saveNote;

  const handleSave = () => {
    setPhase("saving");
    window.setTimeout(
      () => navigate("/worker/japan/residence?state=verified-source"),
      900,
    );
  };

  return (
    <div>
      <FieldLabel text={c.residence.noteLabel} />
      {/* W-33N 636:306 — 350×120 note field, 48px Save note, 44px Cancel. */}
      <div className="mt-[8px] grid items-start gap-y-[26px] lg:mt-[34px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[16px]">
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className="h-[120px] w-full resize-none rounded-[12px] border border-[#d6e0da] bg-white p-[14px] text-[13px] leading-[20px] font-normal text-[#131f1a] outline-none focus:border-[#08664d] lg:h-[104px] lg:p-[15px] lg:text-[14px] lg:leading-[22px] lg:font-semibold"
        />
        <PrimaryButton
          label={saveLabel}
          onClick={handleSave}
          disabled={saving}
          busy={saving}
          sizeClass="h-[48px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]"
        />
      </div>
      <SecondaryButton
        label={cc.action.cancel}
        to="/worker/japan/residence?state=verified-source"
        sizeClass="mt-[12px] h-[44px] rounded-[13px] lg:mt-[24px] lg:h-[52px] lg:rounded-[12px]"
      />
    </div>
  );
}
