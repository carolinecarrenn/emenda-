import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { QUALIFICATIONS_COPY } from "../qualifications.copy";
import {
  CareerSubHeader,
  ConfirmDialog,
  ConfirmSheet,
  DangerButton,
  FieldInput,
  OfflineBanner,
  OutlineButton,
  PrimaryButton,
  SheetCancel,
  SheetOption,
  SheetOverlay,
} from "../../experience/careerUi";
import { SaveFailedState } from "./SaveFailedState";
import {
  ADD_FORM_VALUES,
  EXTERNAL_QUALIFICATION,
  PROOF_FILE_NAME,
  type RecordTypeKey,
} from "../qualificationsMock";

export type QualificationFormPhase =
  | "editing"
  | "saving"
  | "save-failed"
  | "unsaved"
  | "remove-confirm"
  | "offline";

export type ProofState =
  | "none"
  | "chooser"
  | "uploading"
  | "ready"
  | "failed"
  | "unsupported";

/** WD-28B/L Add-Edit qualification form — RECORD TYPE selector (WD-28F sheet),
 *  2-col 10px-eyebrow fields, PROOF · OPTIONAL block with the WD-28G–K upload
 *  states, right-column proof helper + "Save record"; edit adds "Remove
 *  record" with the WD-28M confirmation; plus WD-28C/P/R form states. */
export function QualificationForm({
  mode,
  initialPhase = "editing",
  initialProof,
  initialSheetOpen = false,
  onExit,
}: {
  mode: "add" | "edit";
  initialPhase?: QualificationFormPhase;
  initialProof?: ProofState;
  initialSheetOpen?: boolean;
  onExit: () => void;
}) {
  const c = useSectionCopy(QUALIFICATIONS_COPY);
  const common = useCommonCopy();

  const initialValues =
    mode === "edit"
      ? {
          name: EXTERNAL_QUALIFICATION.name,
          issuer: EXTERNAL_QUALIFICATION.issuer,
          issuedDate: ADD_FORM_VALUES.issuedDate,
          expiryDate: ADD_FORM_VALUES.expiryDate,
        }
      : ADD_FORM_VALUES;

  const [values, setValues] = useState(initialValues);
  const [recordType, setRecordType] = useState<RecordTypeKey | null>(
    mode === "edit" ? "external" : null,
  );
  const [phase, setPhase] = useState<QualificationFormPhase>(initialPhase);
  const [proof, setProof] = useState<ProofState>(
    initialProof ?? "none",
  );
  const [sheetOpen, setSheetOpen] = useState(initialSheetOpen);
  const [initialSnapshot] = useState(initialValues);
  const timerRef = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const dirty =
    JSON.stringify(values) !== JSON.stringify(initialSnapshot);

  const save = () => {
    setPhase("saving");
    timerRef.current = window.setTimeout(onExit, 900);
  };
  const uploadProof = () => {
    setProof("uploading");
    timerRef.current = window.setTimeout(() => setProof("ready"), 1200);
  };
  const set = (patch: Partial<typeof values>) =>
    setValues((v) => ({ ...v, ...patch }));

  const RECORD_TYPE_LABELS: Record<RecordTypeKey, string> = {
    external: c.recordTypeExternal,
    company: c.recordTypeCompany,
    training: c.recordTypeTraining,
    certification: c.recordTypeCertification,
    other: c.recordTypeOther,
  };

  const recordTypeLabel =
    recordType === null
      ? c.recordTypePlaceholder
      : RECORD_TYPE_LABELS[recordType];

  const recordTypeLabelFor =
    recordType === null || recordType === "external"
      ? c.summarySelfAdded
      : RECORD_TYPE_LABELS[recordType];

  if (phase === "save-failed") {
    return (
      <div>
        <CareerSubHeader
          backLabel={c.backLink}
          title={mode === "add" ? c.addTitle : c.editTitle}
          subtitle={c.saveFailedSubtitle}
          bold
        />
        <SaveFailedState
          name={values.name}
          issuer={values.issuer}
          recordTypeLabel={recordTypeLabelFor}
          proofAttached={proof === "ready"}
          onTryAgain={save}
          onCancel={onExit}
        />
      </div>
    );
  }

  return (
    <div>
      <CareerSubHeader
        backLabel={c.backLink}
        title={mode === "add" ? c.addTitle : c.editTitle}
        subtitle={
          phase === "saving"
            ? c.savingSubtitle
            : phase === "offline"
              ? c.offlineFormSubtitle
              : mode === "add"
                ? c.addSubtitle
                : c.editSubtitle
        }
        bold
        onBackClick={(e) => {
          if (dirty && phase === "editing") {
            e.preventDefault();
            setPhase("unsaved");
          }
        }}
      />

      {phase === "offline" && (
        <div className="mt-[36px] lg:hidden">
          <OfflineBanner
            title={c.offlineBannerTitle}
            body={c.offlineBannerBody}
            retryLabel={c.offlineBannerRetry}
          />
        </div>
      )}

      <div className="mt-[38px] grid gap-x-[24px] gap-y-[6px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        {/* RECORD TYPE — selector opens the WD-28F sheet */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.06em] text-[#65746d] uppercase">
            {c.labelRecordType}
          </p>
          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className="mt-[6px] flex h-[50px] w-full items-center justify-between rounded-[12px] border border-[#d1ddd7] bg-white px-[20px] text-[13px] text-[#65746d] hover:bg-[#f4f8f5]"
          >
            {recordTypeLabel}
            <ChevronDown size={16} className="text-[#65746d]" />
          </button>
        </div>
        <FieldInput
          label={c.labelName}
          value={values.name}
          onChange={(name) => set({ name })}
          compact
        />
        <FieldInput
          label={c.labelIssuer}
          value={values.issuer}
          onChange={(issuer) => set({ issuer })}
          compact
        />
        <FieldInput
          label={c.labelIssuedDate}
          value={values.issuedDate}
          onChange={(issuedDate) => set({ issuedDate })}
          compact
        />
        <FieldInput
          label={c.labelExpiryDate}
          value={values.expiryDate}
          onChange={(expiryDate) => set({ expiryDate })}
          compact
        />
      </div>

      <div className="mt-[14px] grid gap-x-[24px] gap-y-[14px] lg:mt-[42px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        {/* PROOF · OPTIONAL — WD-28G/H/I/J/K upload states */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.06em] text-[#65746d] uppercase">
            {c.labelProof}
          </p>
          <div className="mt-[6px]">
            {proof === "none" ? (
              <button
                type="button"
                onClick={() => setProof("chooser")}
                className="h-[50px] w-full rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
              >
                {c.addProof}
              </button>
            ) : proof === "chooser" ? (
              <button
                type="button"
                onClick={() => setProof("none")}
                className="h-[50px] w-full rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
              >
                {c.addProof}
              </button>
            ) : proof === "uploading" ? (
              <div className="flex h-[50px] w-full items-center justify-center rounded-[14px] border border-[#dfe7e3] bg-white text-[13px] font-semibold text-[#9aa9a1]">
                {c.uploadingProof}
              </div>
            ) : proof === "ready" ? (
              <button
                type="button"
                onClick={() => setProof("none")}
                className="h-[50px] w-full rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
              >
                {c.proofReady(PROOF_FILE_NAME)}
              </button>
            ) : proof === "failed" ? (
              <button
                type="button"
                onClick={uploadProof}
                className="h-[50px] w-full rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
              >
                {c.retryProofUpload}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setProof("chooser")}
                className="h-[50px] w-full rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
              >
                {c.chooseAnotherFile}
              </button>
            )}
          </div>
        </div>

        {/* Right column — helper + actions per phase */}
        <div>
          {
            <div>
              <p
                className={`text-[11px] leading-[18px] ${
                  proof === "unsupported" || proof === "failed"
                    ? "text-[#b42318]"
                    : "text-[#65746d]"
                }`}
              >
                {proof === "unsupported"
                  ? c.unsupportedLine
                  : proof === "failed"
                    ? c.uploadFailedHelper
                    : c.proofHelper}
              </p>
              <div className="mt-[16px] flex flex-col gap-[18px]">
                <PrimaryButton
                  label={phase === "saving" ? c.saving : c.saveRecord}
                  onClick={save}
                  disabled={phase === "saving" || phase === "offline"}
                />
                {mode === "edit" &&
                  phase !== "saving" &&
                  phase !== "offline" &&
                  phase !== "remove-confirm" && (
                    <DangerButton
                      label={c.removeRecord}
                      onClick={() => setPhase("remove-confirm")}
                    />
                  )}
                {phase === "offline" && (
                  <div className="hidden lg:block">
                    <OfflineBanner
                      title={c.offlineBannerTitle}
                      body={c.offlineBannerBody}
                      retryLabel={c.offlineBannerRetry}
                    />
                  </div>
                )}
              </div>
            </div>
          }

          {phase === "remove-confirm" && (
            <ConfirmDialog
              title={c.removeConfirmTitle}
              body={c.removeConfirmBody(values.name)}
              tinted
              onScrimClick={() => setPhase("editing")}
            >
              <PrimaryButton
                label={c.keepRecord}
                onClick={() => setPhase("editing")}
              />
              <DangerButton label={c.removeShort} onClick={onExit} medium />
            </ConfirmDialog>
          )}
        </div>
      </div>

      {/* WD-28R unsaved changes — centred modal over the edit form */}
      {phase === "unsaved" && (
        <ConfirmDialog
          title={c.unsavedTitle}
          body={c.unsavedBody}
          tinted
          onScrimClick={() => setPhase("editing")}
        >
          <PrimaryButton
            label={c.keepEditing}
            onClick={() => setPhase("editing")}
          />
          <DangerButton label={c.discardChanges} onClick={onExit} medium />
        </ConfirmDialog>
      )}

      {/* W-28G Add proof sheet */}
      {proof === "chooser" && (
        <ConfirmSheet
          title={c.addProofSheetTitle}
          body={c.addProofSheetBody}
          onScrimClick={() => setProof("none")}
        >
          <PrimaryButton label={c.chooseFile} onClick={uploadProof} tall />
          <OutlineButton label={c.choosePhoto} onClick={uploadProof} />
          <OutlineButton
            label={common.action.cancel}
            onClick={() => setProof("none")}
          />
        </ConfirmSheet>
      )}

      {/* WD-28F Record Type selector sheet */}
      {sheetOpen && (
        <SheetOverlay
          title={c.recordTypeSheetTitle}
          subtitle={c.recordTypeSheetSubtitle}
          onClose={() => setSheetOpen(false)}
        >
          {(
            [
              ["external", c.recordTypeExternal],
              ["training", c.recordTypeTraining],
              ["certification", c.recordTypeCertification],
              ["other", c.recordTypeOther],
            ] as [RecordTypeKey, string][]
          ).map(([key, label]) => (
            <SheetOption
              key={key}
              label={label}
              selected={key === recordType}
              onClick={() => {
                setRecordType(key);
                setSheetOpen(false);
              }}
            />
          ))}
          <SheetCancel
            label={common.action.cancel}
            onClick={() => setSheetOpen(false)}
          />
        </SheetOverlay>
      )}
    </div>
  );
}
