import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { DATES_COPY } from "./dates.copy";
import {
  CUSTOM_REMINDER_DEFAULT,
  LINKED_REMINDER_DATE,
  PERSONAL_REMINDERS,
  REMINDER_FORM_DRAFT,
  type PersonalReminder,
  type RemindDays,
} from "./datesMock";
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

const BASE_PATH = "/worker/japan/dates";
const ADD_STATES = new Set(["add", "add-saving", "add-unsaved"]);
const EDIT_STATES = new Set([
  "edit",
  /* WD-36D titles the validation frame "Edit important date". */
  "validation",
  "saving",
  "save-failed",
  "offline",
  "unsaved",
  "delete-confirm",
]);
/** Query states whose Figma frames omit the Delete reminder button. */
const NO_DELETE_STATES = new Set([
  "saving",
  "save-failed",
  "offline",
  "validation",
]);

type FormKind = "edit" | "add" | null;
type SheetKind = "date" | "remind" | null;

interface ReminderFormValues {
  title: string;
  date: string;
  remindDays: RemindDays;
  note: string;
}

/** Important dates — private reminders (Figma WD-36, node 1017:1685).
 *  Amber linked reminder vs white personal reminder, Add/Edit reminder
 *  forms, date/reminder selector sheets, delete confirmation and the
 *  Reminder Saved · Notifications Off system banner (WD-36A..N). */
export function DatesPage() {
  const c = useSectionCopy(DATES_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const state = useScreenState();
  const navigate = useNavigate();

  const [reminders, setReminders] =
    useState<PersonalReminder[]>(PERSONAL_REMINDERS);
  const [mode, setMode] = useState<FormKind>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [values, setValues] = useState<ReminderFormValues>({
    ...REMINDER_FORM_DRAFT,
  });
  const [dirty, setDirty] = useState(false);
  const [localInvalid, setLocalInvalid] = useState(false);
  const [localDiscard, setLocalDiscard] = useState(false);
  const [localDelete, setLocalDelete] = useState(false);
  /* Interactive counterparts of ?state=saving / add-saving (W-36E, W-36N)
     and of ?state=notifications-off (W-36M, shown after a real save). */
  const [localSaving, setLocalSaving] = useState(false);
  const [savedBanner, setSavedBanner] = useState(false);
  const [sheet, setSheet] = useState<SheetKind>(null);
  const [sheetDate, setSheetDate] = useState("");
  const [customDays, setCustomDays] = useState(CUSTOM_REMINDER_DEFAULT);

  const formKind: FormKind =
    state !== null && ADD_STATES.has(state)
      ? "add"
      : state !== null && EDIT_STATES.has(state)
        ? "edit"
        : mode;

  /* (Re-)seed the form when entering it — never on language switches. */
  useEffect(() => {
    if (formKind === null) return;
    if (state !== null) {
      setValues(
        state === "validation"
          ? { ...REMINDER_FORM_DRAFT, title: "", date: "" }
          : { ...REMINDER_FORM_DRAFT },
      );
      setEditingId(null);
    } else if (formKind === "edit" && editingId !== null) {
      const reminder = reminders.find((r) => r.id === editingId);
      if (reminder)
        setValues({
          title: reminder.title,
          date: reminder.date,
          remindDays: reminder.remindDays,
          note: reminder.note,
        });
    } else {
      setValues({ ...REMINDER_FORM_DRAFT });
    }
    setDirty(false);
    setLocalInvalid(false);
    setLocalDiscard(false);
    setLocalDelete(false);
    setLocalSaving(false);
    setSavedBanner(false);
    setSheet(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formKind, state, editingId]);

  const update = (patch: Partial<ReminderFormValues>) => {
    setValues((v) => ({ ...v, ...patch }));
    setDirty(true);
  };

  const remindLabel = (days: RemindDays) =>
    days === null
      ? c.remindOnDate
      : c.daysBeforeTemplate.replace("{n}", String(days));

  const exitForm = () => {
    setMode(null);
    setEditingId(null);
    setLocalDiscard(false);
    setLocalDelete(false);
    setLocalSaving(false);
    if (state !== null) navigate(BASE_PATH);
  };

  const keepEditing = () => {
    setLocalDiscard(false);
    setLocalDelete(false);
    if (state === "unsaved" || state === "delete-confirm")
      navigate(`${BASE_PATH}?state=edit`);
    else if (state === "add-unsaved") navigate(`${BASE_PATH}?state=add`);
  };

  const validation = state === "validation" || localInvalid;
  const saving = state === "saving" || state === "add-saving" || localSaving;
  const isAdd = formKind === "add";
  const showDelete =
    formKind === "edit" && (state === null || !NO_DELETE_STATES.has(state));
  const discardOpen =
    state === "unsaved" || state === "add-unsaved" || localDiscard;
  const deleteOpen = state === "delete-confirm" || localDelete;

  const handleSave = () => {
    if (saving) return;
    if (values.title.trim() === "" || values.date.trim() === "") {
      setLocalInvalid(true);
      return;
    }
    /* W-36E Saving / W-36N Add Saving before the list returns. */
    const editId = editingId;
    const kind = formKind;
    setLocalSaving(true);
    window.setTimeout(() => {
      if (state === null) {
        if (kind === "edit" && editId !== null) {
          setReminders((rs) =>
            rs.map((r) => (r.id === editId ? { ...r, ...values } : r)),
          );
        } else if (kind === "add") {
          setReminders((rs) => [
            ...rs,
            { id: `reminder-${Date.now()}`, ...values },
          ]);
        }
        /* W-36M Reminder Saved · Notifications Off follows a real save. */
        setSavedBanner(true);
      }
      exitForm();
    }, 800);
  };

  const handleDelete = () => {
    if (state === null && editingId !== null)
      setReminders((rs) => rs.filter((r) => r.id !== editingId));
    exitForm();
  };

  const saveLabel = saving
    ? c.savingEllipsis
    : state === "save-failed"
      ? c.trySavingAgain
      : c.saveImportantDate;

  /* ---- reminder form (WD-36B add / WD-36C edit) ---- */
  if (formKind !== null) {
    return (
      <div className="max-w-[1080px] pt-[20px] lg:pt-0">
        <JapanSubPageHeader
          backLabel={c.japanPreparation}
          title={
            /* W-36J heads the add-unsaved frame with the edit title too. */
            state === "delete-confirm"
              ? c.deleteTitle
              : isAdd && state !== "add-unsaved"
                ? c.addTitle
                : c.editTitle
          }
          subtitle={
            state === "delete-confirm"
              ? c.deleteSubtitle
              : state === "save-failed"
                ? c.subtitleSaveFailed
                : state === "saving" || state === "add-saving"
                  ? c.subtitleSaving
                  : state === "offline"
                    ? c.subtitleOffline
                    : state === "unsaved" || state === "add-unsaved"
                      ? c.subtitleUnsaved
                      : c.addSubtitle
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
            label={c.fieldTitle}
            value={values.title}
            onChange={(title) => update({ title })}
            error={
              validation && values.title.trim() === ""
                ? c.validationTitle
                : undefined
            }
          />
          <DateFieldButton
            label={c.fieldDate}
            value={formatDisplayDate(values.date, language)}
            onClick={() => {
              setSheetDate(values.date);
              setSheet("date");
            }}
            error={
              validation && values.date.trim() === ""
                ? c.validationDate
                : undefined
            }
          />
          <SelectFieldButton
            label={c.fieldRemind}
            value={remindLabel(values.remindDays)}
            onClick={() => setSheet("remind")}
          />
          <TextField
            label={c.fieldNote}
            value={values.note}
            onChange={(note) => update({ note })}
          />
          <div>
            {/* W-36D 628:1151 mutes the save action while the form is
                showing validation errors. */}
            <PrimaryButton
              label={saveLabel}
              onClick={handleSave}
              /* W-36G mutes the save action while offline. */
              disabled={saving || validation || state === "offline"}
            />
          </div>
          {showDelete && (
            /* W-36C 628:841 sets the destructive action apart and draws it
               in the red outline treatment. */
            <button
              type="button"
              onClick={() => setLocalDelete(true)}
              className="mt-[62px] flex h-[46px] w-full items-center justify-center rounded-[13px] border border-[#e0a9a3] bg-white text-[13px] font-semibold text-[#c7261f] hover:bg-[#fdecea] lg:mt-0 lg:h-[52px] lg:rounded-[12px] lg:border-[#d6e0da] lg:text-[#08664d] lg:hover:bg-lp-tint"
            >
              {c.deleteReminder}
            </button>
          )}
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
                onClick: () => navigate(`${BASE_PATH}?state=edit`),
              }}
            />
          )}
        </div>

        {/* WD-36K important-date picker */}
        {sheet === "date" && (
          <SheetShell
            onScrimClick={() => setSheet(null)}
            bottomClass="lg:pb-[69px]"
          >
            <p className="text-[22px] leading-[30px] font-semibold text-[#131f1a]">
              {c.datePickerTitle}
            </p>
            <p className="mt-[8px] text-[13px] leading-[22px] text-[#5e7066] lg:min-h-[44px]">
              {c.datePickerBody}
            </p>
            <SheetDateInput
              label={c.datePickerTitle}
              value={sheetDate}
              onChange={setSheetDate}
            />
            <button
              type="button"
              onClick={() => {
                update({ date: sheetDate });
                setSheet(null);
              }}
              className="mt-[14px] flex h-[44px] w-full items-center justify-center rounded-[11px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-lp-button lg:h-[46px]"
            >
              {common.action.done}
            </button>
          </SheetShell>
        )}

        {/* WD-36L reminder selector */}
        {sheet === "remind" && (
          <SheetShell onScrimClick={() => setSheet(null)}>
            <p className="text-[22px] leading-[30px] font-semibold text-[#131f1a]">
              {c.remindSheetTitle}
            </p>
            <p className="mt-[8px] text-[13px] leading-[22px] text-[#5e7066]">
              {c.remindSheetBody}
            </p>
            <div className="mt-[16px]">
              <SheetOptionButton
                label={c.remindOnDate}
                onClick={() => {
                  update({ remindDays: null });
                  setSheet(null);
                }}
              />
              {[7, 30, 90].map((days) => (
                <SheetOptionButton
                  key={days}
                  label={remindLabel(days)}
                  onClick={() => {
                    update({ remindDays: days });
                    setSheet(null);
                  }}
                />
              ))}
            </div>
            <p className="mt-[16px] text-[10px] leading-[16px] font-semibold text-[#5e7066] uppercase">
              {c.customReminderLabel}
            </p>
            <div className="mt-[8px] flex h-[52px] w-full items-center gap-[16px] rounded-[12px] border border-[#d6e0da] bg-white px-[16px]">
              <input
                aria-label={c.customReminderLabel}
                value={customDays}
                onChange={(e) =>
                  setCustomDays(e.target.value.replace(/[^0-9]/g, ""))
                }
                className="w-[60px] border-0 bg-transparent p-0 text-[13px] text-[#131f1a] focus:ring-0 focus:outline-none"
              />
              <span className="text-[13px] text-[#131f1a]">
                {c.customSuffix}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                const days = Number(customDays);
                if (customDays !== "" && !Number.isNaN(days)) {
                  update({ remindDays: days });
                  setSheet(null);
                }
              }}
              className="mt-[14px] flex h-[44px] w-full items-center justify-center rounded-[11px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-lp-button"
            >
              {c.useCustomReminder}
            </button>
          </SheetShell>
        )}

        {/* WD-36H / WD-36J unsaved-changes sheets */}
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

        {/* WD-36I delete confirmation */}
        {deleteOpen && !discardOpen && (
          <ConfirmSheet
            title={c.deleteConfirmTitle}
            body={
              <>
                <p>
                  {values.title} ·{" "}
                  {formatDisplayDate(values.date, language)}
                </p>
                <p className="mt-[4px] lg:mt-0">{c.deleteConfirmBody}</p>
              </>
            }
            primaryLabel={c.keepReminder}
            secondaryLabel={c.deleteReminder}
            secondaryTone="quiet"
            onPrimary={keepEditing}
            onSecondary={handleDelete}
          />
        )}
      </div>
    );
  }

  /* ---- WD-36A empty list ---- */
  if (state === "empty") {
    return (
      <div className="max-w-[1080px] pt-[20px] lg:pt-0">
        <JapanSubPageHeader
          backLabel={c.japanPreparation}
          title={c.pageTitle}
          subtitle={c.subtitleEmpty}
        />
        {/* W-36A 628:1083 — 350×168 card with a 318×42 solid action. */}
        <div className="mt-[18px] grid gap-y-[14px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[26px]">
          <div className="min-h-[168px] rounded-[16px] border border-[#d5e0db] bg-white px-[16px] py-[16px] lg:min-h-[104px] lg:rounded-[14px] lg:px-[15px] lg:pt-[15px] lg:pb-[13px]">
            <p className="text-[15px] leading-[24px] font-semibold text-[#131f1a] lg:leading-[22px]">
              {c.emptyTitle}
            </p>
            <p className="mt-[10px] text-[13px] leading-[22px] text-[#5e7066] lg:mt-[6px]">
              {c.emptyBody}
            </p>
            <button
              type="button"
              onClick={() => navigate(`${BASE_PATH}?state=add`)}
              className="mt-[14px] flex h-[42px] w-full items-center justify-center rounded-[11px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-lp-button lg:mt-[2px] lg:h-auto lg:justify-start lg:rounded-none lg:bg-transparent lg:text-[13px] lg:leading-[22px] lg:font-normal lg:text-[#5e7066] lg:hover:bg-transparent lg:hover:text-[#08664d]"
            >
              {c.addImportantDate}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---- WD-36 base list (plus WD-36M notifications-off banner) ---- */
  return (
    <div className="max-w-[1080px] pt-[20px] lg:pt-0">
      <JapanSubPageHeader
        backLabel={c.japanPreparation}
        title={c.pageTitle}
        subtitle={c.pageSubtitle}
      />
      {/* W-36M 638:283 mobile order: reminder cards → notifications-off
          banner → Add important date → planning note. */}
      <div className="flex flex-col lg:block">
        <div className="mt-[18px] grid items-start gap-y-[14px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
          <div className="relative min-h-[108px] rounded-[16px] border border-[#e9c86b] bg-[#fff5dd] px-[15px] py-[15px] lg:min-h-0 lg:rounded-[14px]">
            <p className="text-[15px] leading-[22px] font-semibold text-[#131f1a]">
              {c.linkedTitle}
            </p>
            <p className="mt-[8px] text-[13px] leading-[20px] text-[#131f1a] lg:mt-[6px] lg:leading-[22px] lg:text-[#5e7066]">
              {formatDisplayDate(LINKED_REMINDER_DATE, language)}
            </p>
            <p className="mt-[4px] max-w-[220px] text-[12px] leading-[18px] text-[#5e7066] lg:mt-0 lg:max-w-none lg:text-[13px] lg:leading-[22px]">
              {c.linkedMeta}
            </p>
            <div className="absolute right-[16px] bottom-[16px] lg:static lg:mt-[8px] lg:flex lg:justify-end">
              <PillButton
                label={c.manage}
                onClick={() => navigate("/worker/japan/residence")}
              />
            </div>
          </div>
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="relative min-h-[100px] rounded-[16px] border border-[#d5e0db] bg-white px-[15px] py-[15px] lg:min-h-0 lg:rounded-[14px]"
            >
              <p className="text-[15px] leading-[22px] font-semibold text-[#131f1a]">
                {reminder.title}
              </p>
              <p className="mt-[8px] max-w-[220px] text-[12px] leading-[18px] text-[#5e7066] lg:mt-[6px] lg:max-w-none lg:text-[13px] lg:leading-[22px]">
                {formatDisplayDate(reminder.date, language)} ·{" "}
                {c.personalReminder}
              </p>
              <div className="absolute right-[16px] bottom-[16px] lg:static lg:mt-[8px] lg:flex lg:justify-end">
                <PillButton
                  label={common.action.edit}
                  onClick={() => {
                    setValues({
                      title: reminder.title,
                      date: reminder.date,
                      remindDays: reminder.remindDays,
                      note: reminder.note,
                    });
                    setEditingId(reminder.id);
                    setMode("edit");
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="order-3 mt-[24px] grid lg:order-none lg:grid-cols-2 lg:gap-x-[40px]">
          <PrimaryButton
            label={c.addImportantDate}
            onClick={() => setMode("add")}
          />
        </div>
        <p className="order-4 mt-[18px] text-[11px] leading-[20px] text-[#5e7066] lg:order-none lg:mt-[24px] lg:text-[12px] lg:leading-[17px]">
          {c.remindersNote}
        </p>
        {(state === "notifications-off" || savedBanner) && (
          <div className="order-2 mt-[16px] grid lg:order-none lg:grid-cols-2 lg:gap-x-[40px]">
            <SystemBanner
              title={c.notifOffTitle}
              body={c.notifOffBody}
              action={{ label: c.managePermission }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
