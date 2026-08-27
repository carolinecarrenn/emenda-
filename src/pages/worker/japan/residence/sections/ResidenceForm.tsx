import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { JAPAN_COPY } from "../../japan.copy";
import {
  RESIDENCE_RECORD,
  RESIDENCE_STATUS_OPTIONS,
  WORK_PERMISSION_OPTIONS,
} from "../../japanMock";
import { DateField, SelectField, TextField } from "../../sections/FormFields";
import { OptionSheet, DateSheet } from "../../sections/Overlays";
import { PrimaryButton } from "../../sections/PrimaryButton";
import { SystemBanner } from "../../sections/SystemBanner";

type SheetKind = "status" | "work" | "date";

/** WD-33B Add / WD-33C Edit residence form, incl. WD-33D validation,
 *  WD-33E saving, WD-33F save-failed banner, WD-33G offline banner and
 *  the WD-33S/T/U selector overlays. */
export function ResidenceForm({ state }: { state: string }) {
  const c = useSectionCopy(JAPAN_COPY);
  const cc = useCommonCopy();
  const navigate = useNavigate();

  const [draft, setDraft] = useState(RESIDENCE_RECORD);
  const [phase, setPhase] = useState<"idle" | "saving">("idle");

  const urlSheet: SheetKind | null =
    state === "status-sheet"
      ? "status"
      : state === "work-sheet"
        ? "work"
        : state === "date-sheet"
          ? "date"
          : null;
  const [sheetOverride, setSheetOverride] = useState<SheetKind | "none" | null>(
    null,
  );
  const sheet = sheetOverride === null ? urlSheet : sheetOverride === "none" ? null : sheetOverride;
  const closeSheet = () => setSheetOverride("none");

  /* W-33D Validation Error — reachable both via ?state=validation-error and
     by clearing a required field in the overlays and pressing Save. */
  const [localInvalid, setLocalInvalid] = useState(false);
  const urlInvalid = state === "validation-error";
  const statusMissing = draft.status.trim() === "";
  const dateMissing = draft.validUntil.trim() === "";
  const statusError =
    urlInvalid || (localInvalid && statusMissing)
      ? c.residence.errorStatus
      : undefined;
  const dateError =
    urlInvalid || (localInvalid && dateMissing)
      ? c.residence.errorValidUntil
      : undefined;
  const hasErrors = Boolean(statusError || dateError);

  const saving = phase === "saving" || state === "saving";
  const saveLabel = saving
    ? c.visaPlan.saving
    : state === "save-failed"
      ? c.visaPlan.tryAgain
      : c.residence.save;

  const handleSave = () => {
    if (saving) return;
    if (statusMissing || dateMissing) {
      setLocalInvalid(true);
      return;
    }
    /* W-33E Saving → back to the saved record. */
    setPhase("saving");
    window.setTimeout(() => navigate("/worker/japan/residence"), 900);
  };

  return (
    /* Mobile (Figma 626:595) puts the Save action directly under the last
       field and the planning-record helper below it; the WD-33B desktop
       frame keeps the helper above the button. */
    <div className="flex flex-col lg:block">
      <div className="grid items-start gap-y-[10px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[26px]">
        <SelectField
          label={c.residence.labelStatus}
          value={draft.status}
          onOpen={() => setSheetOverride("status")}
          error={statusError}
          labelError
        />
        {/* WD-33E drops the calendar affordance and the helper line while
            the record is in flight. */}
        <DateField
          label={c.residence.labelValidUntil}
          value={draft.validUntil}
          onOpen={() => setSheetOverride("date")}
          helper={c.residence.helperValidUntil}
          error={dateError}
          labelError
          busy={saving}
        />
        <SelectField
          label={c.residence.labelWorkPermission}
          value={draft.workPermission}
          onOpen={() => setSheetOverride("work")}
        />
        <TextField
          label={c.residence.labelNote}
          value={draft.note}
          onChange={(note) => setDraft({ ...draft, note })}
        />
      </div>

      <p className="order-3 mt-[16px] text-[11px] leading-[18px] text-[#5e7066] lg:order-none lg:mt-[26px] lg:min-h-[34px] lg:text-[12px] lg:leading-[17px]">
        {c.residence.formDisclaimer}
      </p>
      <div className="order-2 mt-[10px] grid items-start gap-y-[16px] lg:order-none lg:mt-[16px] lg:grid-cols-2 lg:gap-x-[40px]">
        <PrimaryButton
          label={saveLabel}
          onClick={handleSave}
          disabled={saving || hasErrors}
          busy={saving}
          sizeClass="h-[48px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]"
        />
        {state === "save-failed" && (
          <SystemBanner
            tone="danger"
            title={c.residence.saveFailedTitle}
            body={c.residence.saveFailedBody}
          />
        )}
        {state === "offline" && (
          <SystemBanner
            title={c.hub.offlineTitle}
            body={c.residence.offlineBody}
            action={{
              label: cc.action.retry,
              to: "/worker/japan/residence?state=edit",
            }}
          />
        )}
      </div>

      {sheet === "status" && (
        <OptionSheet
          title={c.residence.sheetStatusTitle}
          description={c.residence.sheetStatusDesc}
          options={RESIDENCE_STATUS_OPTIONS}
          onSelect={(status) => {
            setDraft({ ...draft, status });
            closeSheet();
          }}
          onClose={closeSheet}
        />
      )}
      {sheet === "work" && (
        <OptionSheet
          title={c.residence.sheetWorkTitle}
          description={c.residence.sheetWorkDesc}
          options={WORK_PERMISSION_OPTIONS}
          onSelect={(workPermission) => {
            setDraft({ ...draft, workPermission });
            closeSheet();
          }}
          onClose={closeSheet}
        />
      )}
      {sheet === "date" && (
        <DateSheet
          title={c.residence.sheetValidTitle}
          description={c.residence.sheetValidDesc}
          hint={c.residence.sheetValidHint}
          value={draft.validUntil}
          onChange={(validUntil) => setDraft({ ...draft, validUntil })}
          onDone={closeSheet}
          onClose={closeSheet}
        />
      )}
    </div>
  );
}
