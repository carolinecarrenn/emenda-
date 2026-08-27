import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { BlockAction } from "../sections/HubCard";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { REGISTRATION_COPY } from "./registration.copy";
import {
  REGISTRATION_ADD_DRAFT,
  REGISTRATION_RECORD,
  type RegistrationRecord,
} from "./registrationMock";
import {
  DateFieldButton,
  SelectFieldButton,
  SheetDateInput,
  SheetOptionButton,
  TextField,
} from "./sections/FormField";
import {
  ConfirmSheet,
  JapanSubPageHeader,
  PillButton,
  PrimaryButton,
  SheetShell,
  SystemBanner,
} from "./sections/primitives";

const BASE_PATH = "/worker/japan/registration";
const EDIT_STATES = new Set([
  "edit",
  "validation",
  "saving",
  "save-failed",
  "offline",
  "unsaved",
]);
const ADD_STATES = new Set(["add", "add-unsaved"]);

type FormKind = "edit" | "add" | null;
type SheetKind = "status" | "moveIn" | "registeredOn" | null;

/** Resident registration record (Figma WD-35, node 1017:1064).
 *  Mint summary card with municipality / move-in / registered-on rows and
 *  an Edit pill; Not Started, Add/Edit forms, Validation, Saving,
 *  Save Failed, Offline, Unsaved Changes and the three selector sheets
 *  (WD-35A..L). */
export function RegistrationPage() {
  const c = useSectionCopy(REGISTRATION_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const state = useScreenState();
  const navigate = useNavigate();

  const [mode, setMode] = useState<FormKind>(null);
  /* The saved municipal record — edits made in the form land here so the
     summary card reflects what was just saved. */
  const [record, setRecord] = useState<RegistrationRecord>(REGISTRATION_RECORD);
  const [values, setValues] = useState<RegistrationRecord>(
    REGISTRATION_RECORD,
  );
  const [dirty, setDirty] = useState(false);
  const [localInvalid, setLocalInvalid] = useState(false);
  const [localDiscard, setLocalDiscard] = useState(false);
  /* Interactive counterpart of ?state=saving (W-35D). */
  const [localSaving, setLocalSaving] = useState(false);
  const [sheet, setSheet] = useState<SheetKind>(null);
  const [sheetDate, setSheetDate] = useState("");

  const formKind: FormKind =
    state !== null && EDIT_STATES.has(state)
      ? "edit"
      : state !== null && ADD_STATES.has(state)
        ? "add"
        : mode;

  /* (Re-)seed the form when entering it — never on language switches.
     Adjusted during render (React's "derive state from a change" pattern)
     rather than in an effect, so no cascading render is triggered. */
  const seedKey = `${formKind ?? ""}:${state ?? ""}`;
  /* `null` so a direct load of ?state=validation seeds too — initialising
     this to `seedKey` skipped the very first render and W-35C came up with
     the record intact and no error. */
  const [seededFor, setSeededFor] = useState<string | null>(null);
  if (formKind !== null && seedKey !== seededFor) {
    setSeededFor(seedKey);
    setValues(
      formKind === "add"
        ? { ...REGISTRATION_ADD_DRAFT }
        : state === "validation"
          ? { ...record, municipality: "" }
          : { ...record },
    );
    setDirty(false);
    setLocalInvalid(false);
    setLocalDiscard(false);
    setLocalSaving(false);
    setSheet(null);
  }

  const update = (patch: Partial<RegistrationRecord>) => {
    setValues((v) => ({ ...v, ...patch }));
    setDirty(true);
  };

  const showValidation =
    (state === "validation" || localInvalid) &&
    values.municipality.trim() === "";
  const saving = state === "saving" || localSaving;
  const discardOpen =
    state === "unsaved" || state === "add-unsaved" || localDiscard;

  const exitForm = () => {
    setMode(null);
    setLocalDiscard(false);
    setLocalSaving(false);
    if (state !== null) navigate(BASE_PATH);
  };

  const keepEditing = () => {
    setLocalDiscard(false);
    if (state === "unsaved") navigate(`${BASE_PATH}?state=edit`);
    else if (state === "add-unsaved") navigate(`${BASE_PATH}?state=add`);
  };

  const handleSave = () => {
    if (saving) return;
    if (values.municipality.trim() === "") {
      /* W-35C Validation Error */
      setLocalInvalid(true);
      return;
    }
    /* W-35D Saving → the summary card shows what was just stored. */
    setLocalSaving(true);
    window.setTimeout(() => {
      setRecord({ ...values });
      exitForm();
    }, 800);
  };

  const saveLabel = saving
    ? c.savingEllipsis
    : state === "save-failed"
      ? c.trySavingAgain
      : c.saveRegistration;

  /* ---- form view (WD-35B edit / WD-35H add) ---- */
  if (formKind !== null) {
    const isAdd = formKind === "add";
    return (
      <div className="max-w-[1080px] pt-[20px] lg:pt-0">
        <JapanSubPageHeader
          backLabel={c.japanPreparation}
          title={isAdd ? c.addTitle : c.pageTitle}
          subtitle={
            state === "save-failed"
              ? c.saveFailedSubtitle
              : state === "saving"
                ? c.savingSubtitle
                : state === "offline"
                  ? c.offlineSubtitle
                  : isAdd
                    ? c.addSubtitle
                    : c.editSubtitle
          }
          onBackClick={(e) => {
            if (dirty) {
              e.preventDefault();
              setLocalDiscard(true);
            }
          }}
        />
        <div className="mt-[18px] grid gap-y-[14px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[26px]">
          <TextField
            label={c.fieldMunicipality}
            value={values.municipality}
            onChange={(municipality) => update({ municipality })}
            error={showValidation ? c.validationMunicipality : undefined}
          />
          <DateFieldButton
            label={c.fieldMoveIn}
            value={formatDisplayDate(values.moveInDate, language)}
            onClick={() => {
              setSheetDate(values.moveInDate);
              setSheet("moveIn");
            }}
          />
          <DateFieldButton
            label={c.fieldRegisteredOn}
            value={formatDisplayDate(values.registeredOn, language)}
            onClick={() => {
              setSheetDate(values.registeredOn);
              setSheet("registeredOn");
            }}
          />
          <SelectFieldButton
            label={c.fieldStatus}
            value={c.status[values.status]}
            onClick={() => setSheet("status")}
          />
          <div>
            <PrimaryButton
              label={saveLabel}
              onClick={handleSave}
              /* W-35F mutes the save action while offline. */
              disabled={saving || showValidation || state === "offline"}
              busy={saving}
            />
          </div>
          {state === "save-failed" && (
            <SystemBanner
              tone="danger"
              title={c.saveFailedTitle}
              body={c.saveFailedBody}
            />
          )}
          {state === "offline" && (
            <SystemBanner
              title={c.offlineTitle}
              body={c.offlineBody}
              action={{
                label: common.action.retry,
                onClick: () =>
                  navigate(`${BASE_PATH}?state=${isAdd ? "add" : "edit"}`),
              }}
            />
          )}
        </div>

        {/* WD-35J status selector sheet */}
        {sheet === "status" && (
          <SheetShell onScrimClick={() => setSheet(null)}>
            <p className="text-[22px] leading-[30px] font-semibold text-[#131f1a]">
              {c.statusSheetTitle}
            </p>
            <p className="mt-[8px] text-[13px] leading-[22px] text-[#5e7066] lg:min-h-[44px]">
              {c.statusSheetBody}
            </p>
            <div className="mt-[16px]">
              {(["notStarted", "inProgress", "registered"] as const).map(
                (key) => (
                  <SheetOptionButton
                    key={key}
                    label={c.status[key]}
                    onClick={() => {
                      update({ status: key });
                      setSheet(null);
                    }}
                  />
                ),
              )}
            </div>
          </SheetShell>
        )}

        {/* WD-35K move-in / WD-35L registered-on date pickers */}
        {(sheet === "moveIn" || sheet === "registeredOn") && (
          <SheetShell onScrimClick={() => setSheet(null)}>
            <p className="text-[22px] leading-[30px] font-semibold text-[#131f1a]">
              {sheet === "moveIn" ? c.moveInSheetTitle : c.registeredSheetTitle}
            </p>
            <p className="mt-[8px] text-[13px] leading-[22px] text-[#5e7066] lg:min-h-[44px]">
              {sheet === "moveIn" ? c.moveInSheetBody : c.registeredSheetBody}
            </p>
            <SheetDateInput
              label={
                sheet === "moveIn" ? c.moveInSheetTitle : c.registeredSheetTitle
              }
              value={sheetDate}
              onChange={setSheetDate}
            />
            {sheet === "registeredOn" && (
              <p className="mt-[12px] text-[13px] leading-[22px] text-[#5e7066]">
                {c.registeredSheetOptional}
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                if (sheet === "moveIn") update({ moveInDate: sheetDate });
                else update({ registeredOn: sheetDate });
                setSheet(null);
              }}
              className="mt-[14px] flex h-[44px] w-full items-center justify-center rounded-[11px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-lp-button lg:mt-[16px]"
            >
              {common.action.done}
            </button>
          </SheetShell>
        )}

        {/* WD-35G / WD-35I unsaved-changes sheets */}
        {discardOpen && (
          <ConfirmSheet
            title={isAdd ? c.discardAddTitle : c.discardEditTitle}
            body={<p>{isAdd ? c.discardAddBody : c.discardEditBody}</p>}
            primaryLabel={c.keepEditing}
            secondaryLabel={c.discardChanges}
            onPrimary={keepEditing}
            onSecondary={exitForm}
          />
        )}
      </div>
    );
  }

  /* ---- WD-35A not-started record ---- */
  if (state === "not-started") {
    return (
      <div className="max-w-[1080px] pt-[20px] lg:pt-0">
        <JapanSubPageHeader
          backLabel={c.japanPreparation}
          title={c.pageTitle}
          subtitle={c.pageSubtitle}
        />
        <div className="mt-[18px] grid gap-y-[14px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
          {/* W-35A 628:615 — 350×172 card: 17px title, 13px body, then a
              318×42 solid action inside the card. */}
          <div className="min-h-[172px] rounded-[16px] border border-[#d5e0db] bg-white px-[16px] py-[16px] lg:min-h-[104px] lg:rounded-[14px] lg:px-[15px] lg:py-[15px]">
            <p className="text-[17px] leading-[24px] font-semibold text-[#131f1a] lg:text-[15px] lg:leading-[22px]">
              {c.notStartedTitle}
            </p>
            <p className="mt-[10px] text-[13px] leading-[22px] text-[#5e7066] lg:mt-[6px]">
              {c.notStartedBody}
            </p>
            <BlockAction
              label={c.notStartedAction}
              onClick={() => navigate(`${BASE_PATH}?state=add`)}
              heightClass="h-[42px]"
            />
          </div>
        </div>
      </div>
    );
  }

  /* ---- WD-35 base summary ---- */
  return (
    <div className="max-w-[1080px] pt-[20px] lg:pt-0">
      <JapanSubPageHeader
        backLabel={c.japanPreparation}
        title={c.pageTitle}
        subtitle={c.pageSubtitle}
      />
      <div className="mt-[18px] grid gap-y-[14px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        {/* W-35 628:602 — 350×220 mint card: 15px status headline, then
            label / value pairs with the value column starting at x180 and
            the 104×34 Edit pill parked bottom-right. */}
        <div className="relative min-h-[220px] rounded-[16px] border border-[#c9ded4] bg-[#eaf5f0] px-[15px] py-[15px] lg:min-h-0 lg:rounded-[14px]">
          <p className="text-[15px] leading-[24px] font-semibold text-[#131f1a] lg:leading-[22px]">
            {c.status[record.status]}
          </p>
          <dl className="mt-[20px] space-y-[16px] lg:mt-[6px] lg:space-y-0">
            {[
              [c.municipalityLabel, record.municipality],
              [c.moveInLabel, formatDisplayDate(record.moveInDate, language)],
              [
                c.registeredOnLabel,
                formatDisplayDate(record.registeredOn, language),
              ],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-[12px] lg:block">
                <dt className="w-[150px] shrink-0 text-[11px] leading-[18px] font-semibold text-[#5e7066] lg:w-auto lg:text-[13px] lg:leading-[24px] lg:font-normal">
                  {label}
                </dt>
                <dd className="text-[12px] leading-[18px] text-[#131f1a] lg:text-[13px] lg:leading-[24px] lg:text-[#5e7066]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="absolute right-[16px] bottom-[20px] lg:static lg:mt-[8px] lg:flex lg:justify-end">
            <PillButton
              label={common.action.edit}
              onClick={() => {
                setValues({ ...record });
                setMode("edit");
              }}
            />
          </div>
        </div>
      </div>
      <p className="mt-[26px] text-[11px] leading-[20px] text-[#5e7066] lg:mt-[24px] lg:text-[12px] lg:leading-[17px]">
        {c.privacyNote}
      </p>
    </div>
  );
}
