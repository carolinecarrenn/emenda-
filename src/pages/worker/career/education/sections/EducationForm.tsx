import { useEffect, useRef, useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { EDUCATION_COPY } from "../education.copy";
import {
  CareerSubHeader,
  ConfirmDialog,
  DangerButton,
  FieldInput,
  InlineErrorCard,
  OfflineBanner,
  PrimaryButton,
} from "../../experience/careerUi";
import { EDUCATION_ENTRY, ERROR_FORM_VALUES } from "../educationMock";

export type EducationFormPhase =
  | "editing"
  | "error"
  | "saving"
  | "save-failed"
  | "unsaved"
  | "delete-confirm"
  | "offline";

interface FormValues {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  country: string;
  startYear: string;
  endYear: string;
}

const EMPTY_VALUES: FormValues = {
  institution: "",
  degree: "",
  fieldOfStudy: "",
  country: "",
  startYear: "",
  endYear: "",
};

function yearValue(raw: string): number | null {
  const match = raw.trim().match(/^\d{4}$/);
  return match ? Number(raw.trim()) : null;
}

/** W-26B/I Add-Edit education form — School / Degree / Field of study /
 *  Country / Start year / End year (88px field pitch), 52px Save primary +
 *  44px Delete red outline; W-26C validation, W-26D saving, W-26E
 *  save-failed, W-26F offline, W-26G unsaved, W-26H delete dialog. */
export function EducationForm({
  mode,
  initialPhase = "editing",
  onExit,
}: {
  mode: "add" | "edit";
  initialPhase?: EducationFormPhase;
  onExit: () => void;
}) {
  const c = useSectionCopy(EDUCATION_COPY);
  const common = useCommonCopy();

  const initialValues: FormValues =
    initialPhase === "error"
      ? ERROR_FORM_VALUES
      : mode === "edit"
        ? {
            institution: EDUCATION_ENTRY.institution,
            degree: EDUCATION_ENTRY.degree,
            fieldOfStudy: EDUCATION_ENTRY.fieldOfStudy,
            country: EDUCATION_ENTRY.country,
            startYear: EDUCATION_ENTRY.startYear,
            endYear: EDUCATION_ENTRY.endYear,
          }
        : EMPTY_VALUES;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [phase, setPhase] = useState<EducationFormPhase>(
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

  const start = yearValue(values.startYear);
  const end = yearValue(values.endYear);
  const errors = {
    institution:
      attempted && values.institution.trim() === ""
        ? c.schoolError
        : undefined,
    startYear:
      attempted && start !== null && end !== null && start > end
        ? c.startYearError
        : undefined,
  };
  const hasErrors =
    errors.institution !== undefined || errors.startYear !== undefined;
  const dirty = JSON.stringify(values) !== JSON.stringify(initialSnapshot);

  const save = () => {
    setAttempted(true);
    const invalid =
      values.institution.trim() === "" ||
      (start !== null && end !== null && start > end);
    if (invalid) return;
    setPhase("saving");
    timerRef.current = window.setTimeout(onExit, 900);
  };

  const set = (patch: Partial<FormValues>) =>
    setValues((v) => ({ ...v, ...patch }));

  const placeholders: Partial<FormValues> =
    mode === "add" && !attempted
      ? {
          institution: c.placeholderSchool,
          degree: c.placeholderDegree,
          fieldOfStudy: c.placeholderFieldOfStudy,
          country: c.placeholderCountry,
          startYear: c.placeholderStartYear,
          endYear: c.placeholderEndYear,
        }
      : {};

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
            retryLabel={common.action.retry}
          />
        </div>
      )}

      <div
        className={`grid gap-x-[22px] gap-y-[12px] lg:mt-[38px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px] ${
          phase === "offline" ? "mt-[14px]" : "mt-[38px]"
        }`}
      >
        <FieldInput
          label={c.labelInstitution}
          value={values.institution}
          placeholder={placeholders.institution}
          onChange={(institution) => set({ institution })}
          error={errors.institution}
        />
        <FieldInput
          label={c.labelDegree}
          value={values.degree}
          placeholder={placeholders.degree}
          onChange={(degree) => set({ degree })}
        />
        <FieldInput
          label={c.labelFieldOfStudy}
          value={values.fieldOfStudy}
          placeholder={placeholders.fieldOfStudy}
          onChange={(fieldOfStudy) => set({ fieldOfStudy })}
        />
        <FieldInput
          label={c.labelCountry}
          value={values.country}
          placeholder={placeholders.country}
          onChange={(country) => set({ country })}
        />
        <FieldInput
          label={c.labelStartYear}
          value={values.startYear}
          placeholder={placeholders.startYear}
          onChange={(startYear) => set({ startYear })}
          error={errors.startYear}
        />
        <FieldInput
          label={c.labelEndYear}
          value={values.endYear}
          placeholder={placeholders.endYear}
          onChange={(endYear) => set({ endYear })}
        />
      </div>

      <div className="mt-[10px] lg:mt-[40px]">
        {phase === "save-failed" ? (
          /* WD-26E: retry sits in the left column, the failure notice in the
             right one — never stacked, never a toast. */
          <div className="flex flex-col-reverse gap-[12px] lg:grid lg:grid-cols-2 lg:gap-x-[40px]">
            <PrimaryButton label={c.trySavingAgain} onClick={save} tall />
            <InlineErrorCard title={c.saveFailedTitle} body={c.saveFailedBody} />
          </div>
        ) : (
          <div className="grid gap-[10px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-4">
            <PrimaryButton
              label={phase === "saving" ? c.saving : c.saveEducation}
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
                  retryLabel={common.action.retry}
                />
              </div>
            ) : (
              mode === "edit" &&
              phase !== "saving" &&
              phase !== "unsaved" &&
              phase !== "delete-confirm" && (
                <DangerButton
                  label={c.deleteEducation}
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
          <DangerButton label={c.deleteShort} onClick={onExit} medium />
        </ConfirmDialog>
      )}
    </div>
  );
}
