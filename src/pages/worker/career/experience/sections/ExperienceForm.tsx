import { useEffect, useRef, useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { EXPERIENCE_COPY } from "../experience.copy";
import {
  CareerSubHeader,
  ConfirmDialog,
  DangerButton,
  FieldInput,
  InlineErrorCard,
  OfflineBanner,
  PrimaryButton,
} from "../careerUi";
import {
  ERROR_FORM_VALUES,
  SELF_EXPERIENCE,
  monthYearValue,
} from "../experienceMock";

export type ExperienceFormPhase =
  | "editing"
  | "error"
  | "saving"
  | "save-failed"
  | "unsaved"
  | "delete-confirm"
  | "offline";

interface FormValues {
  role: string;
  employer: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string;
}

const EMPTY_VALUES: FormValues = {
  role: "",
  employer: "",
  country: "",
  startDate: "",
  endDate: "",
  description: "",
};

/** WD-25B/J Add-Edit form — 2-col grid of uppercase-eyebrow fields, Save
 *  (52px primary) + Delete (44px red outline); WD-25C validation, WD-25D
 *  saving, WD-25E save-failed, WD-25G unsaved, WD-25H delete-confirm. */
export function ExperienceForm({
  mode,
  initialPhase = "editing",
  onExit,
}: {
  mode: "add" | "edit";
  initialPhase?: ExperienceFormPhase;
  onExit: () => void;
}) {
  const c = useSectionCopy(EXPERIENCE_COPY);

  const initialValues: FormValues =
    initialPhase === "error"
      ? ERROR_FORM_VALUES
      : mode === "edit"
        ? {
            role: SELF_EXPERIENCE.role,
            employer: SELF_EXPERIENCE.employer,
            country: SELF_EXPERIENCE.country,
            startDate: SELF_EXPERIENCE.startDate,
            endDate: SELF_EXPERIENCE.endDate,
            description: SELF_EXPERIENCE.description,
          }
        : EMPTY_VALUES;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [phase, setPhase] = useState<ExperienceFormPhase>(
    initialPhase === "error" ? "editing" : initialPhase,
  );
  const [attempted, setAttempted] = useState(initialPhase === "error");
  const [initialSnapshot] = useState(initialValues);
  const timerRef = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const start = monthYearValue(values.startDate);
  const end = monthYearValue(values.endDate);
  const errors = {
    role: attempted && values.role.trim() === "" ? c.roleError : undefined,
    endDate:
      attempted && start !== null && end !== null && end < start
        ? c.endDateError
        : undefined,
  };
  const hasErrors = errors.role !== undefined || errors.endDate !== undefined;
  const dirty =
    JSON.stringify(values) !== JSON.stringify(initialSnapshot);

  const save = () => {
    setAttempted(true);
    const invalid =
      values.role.trim() === "" ||
      (start !== null && end !== null && end < start);
    if (invalid) return;
    setPhase("saving");
    timerRef.current = window.setTimeout(onExit, 900);
  };

  const set = (patch: Partial<FormValues>) =>
    setValues((v) => ({ ...v, ...patch }));

  const title =
    phase === "saving"
      ? c.savingTitle
      : mode === "add"
        ? c.addTitle
        : c.editTitle;

  const subtitle =
    phase === "saving"
      ? c.savingSubtitle
      : phase === "save-failed"
        ? c.saveFailedSubtitle
        : phase === "offline"
          ? c.offlineFormSubtitle
          : attempted && hasErrors
            ? c.errorSubtitle
            : mode === "add"
              ? c.addSubtitle
              : c.editSubtitle;

  const placeholders: Partial<FormValues> =
    mode === "add"
      ? {
          role: c.placeholderRole,
          employer: c.placeholderEmployer,
          country: c.placeholderCountry,
          startDate: c.placeholderStartDate,
          endDate: c.placeholderEndDate,
          description: c.placeholderDescription,
        }
      : {};

  return (
    <div>
      <CareerSubHeader
        backLabel={c.backLink}
        title={title}
        subtitle={subtitle}
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

      <div
        className={`grid gap-x-[22px] gap-y-[12px] lg:mt-[38px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px] ${
          phase === "offline" ? "mt-[13px]" : "mt-[38px]"
        }`}
      >
        <FieldInput
          label={c.labelRole}
          value={values.role}
          placeholder={placeholders.role}
          onChange={(role) => set({ role })}
          error={errors.role}
        />
        <FieldInput
          label={c.labelEmployer}
          value={values.employer}
          placeholder={placeholders.employer}
          onChange={(employer) => set({ employer })}
        />
        <FieldInput
          label={c.labelCountry}
          value={values.country}
          placeholder={placeholders.country}
          onChange={(country) => set({ country })}
        />
        <FieldInput
          label={c.labelStartDate}
          value={values.startDate}
          placeholder={placeholders.startDate}
          onChange={(startDate) => set({ startDate })}
        />
        <FieldInput
          label={c.labelEndDate}
          value={values.endDate}
          placeholder={placeholders.endDate}
          onChange={(endDate) => set({ endDate })}
          error={errors.endDate}
        />
        <FieldInput
          label={c.labelDescription}
          value={values.description}
          placeholder={placeholders.description}
          onChange={(description) => set({ description })}
        />
      </div>

      <div className="mt-[10px] lg:mt-[44px]">
        {phase === "save-failed" ? (
          /* WD-25E: retry primary in the left column, inline failure notice
             beside it in the right column (stacked on mobile). */
          <div className="grid gap-[12px] lg:grid-cols-2 lg:gap-x-[40px]">
            <div className="lg:col-start-2 lg:row-start-1">
              <InlineErrorCard
                title={c.saveFailedTitle}
                body={c.saveFailedBody}
              />
            </div>
            <div className="lg:col-start-1 lg:row-start-1">
              <PrimaryButton label={c.trySavingAgain} onClick={save} tall />
            </div>
          </div>
        ) : (
          <div className="grid gap-[10px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-4">
            <PrimaryButton
              label={phase === "saving" ? c.saving : c.saveExperience}
              onClick={save}
              disabled={
                phase === "saving" ||
                phase === "offline" ||
                (attempted && hasErrors)
              }
              tall
            />
            {phase === "offline" ? (
              <div className="hidden lg:block">
                <OfflineBanner
                  title={c.offlineBannerTitle}
                  body={c.offlineBannerBody}
                  retryLabel={c.offlineBannerRetry}
                />
              </div>
            ) : (
              mode === "edit" &&
              phase !== "saving" &&
              phase !== "delete-confirm" && (
                <DangerButton
                  label={c.deleteExperience}
                  onClick={() => setPhase("delete-confirm")}
                />
              )
            )}
          </div>
        )}
      </div>

      {phase === "unsaved" && (
        <ConfirmDialog
          title={c.unsavedTitle}
          body={c.unsavedBody}
          onScrimClick={() => setPhase("editing")}
        >
          <PrimaryButton
            label={c.keepEditing}
            onClick={() => setPhase("editing")}
          />
          <DangerButton label={c.discardChanges} onClick={onExit} medium />
        </ConfirmDialog>
      )}

      {phase === "delete-confirm" && (
        <ConfirmDialog
          title={c.deleteConfirmTitle}
          body={c.deleteConfirmBody}
          onScrimClick={() => setPhase("editing")}
        >
          <PrimaryButton
            label={c.keepRecord}
            onClick={() => setPhase("editing")}
          />
          <DangerButton label={c.deleteShort} onClick={onExit} />
        </ConfirmDialog>
      )}
    </div>
  );
}
