import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { JAPAN_COPY } from "../../japan.copy";
import {
  ENTRY_STATUS_OPTIONS,
  RESIDENCE_STATUS_OPTIONS,
  VISA_PLAN,
} from "../../japanMock";
import { DateField, SelectField, TextField } from "../../sections/FormFields";
import { OptionSheet, DateSheet } from "../../sections/Overlays";
import { PrimaryButton } from "../../sections/PrimaryButton";

type SheetKind = "status" | "entry" | "arrival";

/** WD-32G edit form (+ WD-32H/I/J/L button & error states, WD-32M/N/O
 *  selector overlays). Non-interactive variants arrive via `state`. */
export function VisaPlanForm({ state }: { state: string }) {
  const c = useSectionCopy(JAPAN_COPY);
  const navigate = useNavigate();

  const [draft, setDraft] = useState(VISA_PLAN);
  const [phase, setPhase] = useState<"idle" | "saving">("idle");

  const urlSheet: SheetKind | null =
    state === "planned-status"
      ? "status"
      : state === "entry-status"
        ? "entry"
        : state === "arrival-date"
          ? "arrival"
          : null;
  const [sheetOverride, setSheetOverride] = useState<SheetKind | "none" | null>(
    null,
  );
  const sheet = sheetOverride === null ? urlSheet : sheetOverride === "none" ? null : sheetOverride;
  const closeSheet = () => setSheetOverride("none");

  /* W-32L Validation Error — reachable via ?state=validation-error and by
     clearing the planned status / arrival date and pressing Save. */
  const [localInvalid, setLocalInvalid] = useState(false);
  const urlInvalid = state === "validation-error";
  const statusMissing = draft.plannedStatus.trim() === "";
  const arrivalMissing = draft.plannedArrival.trim() === "";
  const statusError =
    urlInvalid || (localInvalid && statusMissing)
      ? c.visaPlan.errorStatus
      : undefined;
  const arrivalError =
    urlInvalid || (localInvalid && arrivalMissing)
      ? c.visaPlan.errorArrival
      : undefined;
  const hasErrors = Boolean(statusError || arrivalError);

  const saving = phase === "saving" || state === "saving";
  const saveLabel = saving
    ? c.visaPlan.saving
    : state === "save-failed"
      ? c.visaPlan.tryAgain
      : state === "offline"
        ? c.visaPlan.saveWhenOnline
        : c.visaPlan.save;

  const handleSave = () => {
    if (saving) return;
    if (statusMissing || arrivalMissing) {
      setLocalInvalid(true);
      return;
    }
    /* W-32H Saving → back to the saved plan. */
    setPhase("saving");
    window.setTimeout(() => navigate("/worker/japan/visa-plan"), 900);
  };

  return (
    <div>
      <div className="grid items-start gap-y-[14px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[26px]">
        <SelectField
          label={c.visaPlan.labelPlannedStatus}
          value={draft.plannedStatus}
          onOpen={() => setSheetOverride("status")}
          error={statusError}
        />
        {/* WD-32H drops the calendar affordance and the helper line while the
            plan is in flight. */}
        <DateField
          label={c.visaPlan.labelPlannedArrival}
          value={draft.plannedArrival}
          onOpen={() => setSheetOverride("arrival")}
          helper={c.visaPlan.helperPlannedArrival}
          error={arrivalError}
          busy={saving}
        />
        <SelectField
          label={c.visaPlan.labelEntryStatus}
          value={draft.entryDocument}
          onOpen={() => setSheetOverride("entry")}
        />
        <TextField
          label={c.visaPlan.labelNote}
          value={draft.note}
          onChange={(note) => setDraft({ ...draft, note })}
        />
      </div>

      <p className="mt-[14px] text-[11px] leading-[18px] text-[#5e7066] lg:mt-[26px] lg:min-h-[34px] lg:text-[12px] lg:leading-[17px]">
        {c.visaPlan.formDisclaimer}
      </p>
      <PrimaryButton
        label={saveLabel}
        onClick={handleSave}
        disabled={saving || hasErrors || state === "offline"}
        busy={saving}
        sizeClass="mt-[18px] h-[48px] rounded-[14px] lg:mt-[16px] lg:h-[52px] lg:rounded-[12px]"
      />
      {hasErrors && (
        <p className="mt-[18px] text-[11px] leading-[18px] text-[#c7261f] lg:mt-[24px] lg:text-[12px]">
          {c.visaPlan.validationHelper}
        </p>
      )}

      {sheet === "status" && (
        <OptionSheet
          title={c.visaPlan.sheetStatusTitle}
          description={c.visaPlan.sheetStatusDesc}
          options={RESIDENCE_STATUS_OPTIONS}
          onSelect={(plannedStatus) => {
            setDraft({ ...draft, plannedStatus });
            closeSheet();
          }}
          onClose={closeSheet}
        />
      )}
      {sheet === "entry" && (
        <OptionSheet
          title={c.visaPlan.sheetEntryTitle}
          description={c.visaPlan.sheetEntryDesc}
          options={ENTRY_STATUS_OPTIONS}
          onSelect={(entryDocument) => {
            setDraft({ ...draft, entryDocument });
            closeSheet();
          }}
          onClose={closeSheet}
        />
      )}
      {sheet === "arrival" && (
        <DateSheet
          title={c.visaPlan.sheetArrivalTitle}
          description={c.visaPlan.sheetArrivalDesc}
          hint={c.visaPlan.sheetArrivalHint}
          value={draft.plannedArrival}
          onChange={(plannedArrival) => setDraft({ ...draft, plannedArrival })}
          onDone={closeSheet}
          onClose={closeSheet}
        />
      )}
    </div>
  );
}
