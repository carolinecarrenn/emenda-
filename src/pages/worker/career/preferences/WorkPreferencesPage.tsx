import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, ChevronDown } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { PREFERENCES_COPY } from "./preferences.copy";
import {
  INDUSTRY_KEYS,
  LOCATION_KEYS,
  WORK_PREFERENCES,
  WORK_TYPE_KEYS,
  toMonthYear,
} from "./preferencesMock";
import type { WorkPreferences } from "./preferencesMock";
import { PreferencesSummaryCard } from "./sections/PreferencesSummaryCard";
import { SelectorSheet } from "./sections/SelectorSheet";
import { AvailabilitySheet } from "./sections/AvailabilitySheet";
import { UnsavedChangesSheet } from "./sections/UnsavedChangesSheet";
import { SaveErrorCard } from "./sections/SaveErrorCard";
import { OfflineBanner } from "./sections/OfflineBanner";

type SheetKind = "location" | "workType" | "industry" | "availability";
type Flow = null | "saving" | "save-failed" | "unsaved";

const PATH = "/worker/career/preferences";

/** WD-29 Work Preferences (Figma 995:4533) + edit (WD-29A) with selector
 *  sheets (29E-H) and save-failed / offline / unsaved / saving states
 *  (29B / 29C / 29D / 29I). Summary view by default; edit is interactive. */
export function WorkPreferencesPage() {
  const c = useSectionCopy(PREFERENCES_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const forced = useScreenState();
  const navigate = useNavigate();

  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const [mode, setMode] = useState<"view" | "edit">("view");
  const [prefs, setPrefs] = useState<WorkPreferences>(WORK_PREFERENCES);
  const [draft, setDraft] = useState<WorkPreferences>(WORK_PREFERENCES);
  const [sheet, setSheet] = useState<SheetKind | null>(null);
  const [flow, setFlow] = useState<Flow>(null);

  const isForcedEdit =
    forced === "save-failed" ||
    forced === "offline" ||
    forced === "unsaved" ||
    forced === "saving";
  const editing = mode === "edit" || isForcedEdit;
  const saving = forced === "saving" || flow === "saving";
  const saveFailed = forced === "save-failed" || flow === "save-failed";
  const offline = forced === "offline";
  const unsavedOpen = forced === "unsaved" || flow === "unsaved";
  const dirty = JSON.stringify(draft) !== JSON.stringify(prefs);

  const availabilityEditValue = draft.availabilityDate
    ? formatDisplayDate(draft.availabilityDate, language)
    : c.availableImmediately;
  const availabilitySummary = prefs.availabilityDate
    ? c.fromTemplate.replace("{date}", toMonthYear(prefs.availabilityDate))
    : c.availableImmediately;

  const clearForced = () => navigate(PATH);

  const handleBack = (event: MouseEvent) => {
    if (editing && (dirty || unsavedOpen)) {
      event.preventDefault();
      if (isForcedEdit) return;
      setFlow("unsaved");
    }
  };

  const handleSave = () => {
    if (saving) return;
    setFlow("saving");
    timerRef.current = window.setTimeout(() => {
      setPrefs(draft);
      setFlow(null);
      setMode("view");
    }, 900);
  };

  const handleTryAgain = () => {
    setFlow(null);
    setMode("edit");
    if (forced) clearForced();
    handleSave();
  };

  const handleCancelError = () => {
    setFlow(null);
    setMode("view");
    setDraft(prefs);
    if (forced) clearForced();
  };

  const handleKeepEditing = () => {
    setFlow(null);
    setMode("edit");
    if (forced) clearForced();
  };

  const handleDiscard = () => {
    setDraft(prefs);
    setFlow(null);
    navigate("/worker/career");
  };

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <Link
        to="/worker/career"
        onClick={handleBack}
        className="inline-flex items-center gap-[6px] py-[4px] text-[13px] font-semibold text-[#0b684f] hover:text-[#0c664b]"
      >
        <ArrowLeft size={18} strokeWidth={2} />
        {c.back}
      </Link>
      <h1 className="mt-[12px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px] lg:leading-[40px]">
        {editing ? c.editTitle : c.title}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {editing
          ? saving
            ? c.savingSubtitle
            : offline
              ? c.offline.subtitle
              : c.editSubtitle
          : c.subtitle}
      </p>

      {!editing ? (
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <PreferencesSummaryCard
            rows={[
              { label: c.rows.targetRole, value: prefs.targetRole },
              {
                label: c.rows.preferredLocation,
                value: c.locations[prefs.locationKey],
              },
              { label: c.rows.workType, value: c.workTypes[prefs.workTypeKey] },
              { label: c.rows.availability, value: availabilitySummary },
              {
                label: c.rows.industry,
                value: c.industries[prefs.industryKey],
              },
            ]}
            privacy={c.privacy}
          />
          <div>
            <button
              type="button"
              onClick={() => {
                setDraft(prefs);
                setMode("edit");
              }}
              className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
            >
              {c.editButton}
            </button>
          </div>
        </div>
      ) : (
        <>
          {offline && (
            <div className="mt-[36px] lg:hidden">
              <OfflineBanner
                title={c.offline.title}
                body={c.offline.body}
                onRetry={() => {
                  setMode("edit");
                  clearForced();
                }}
              />
            </div>
          )}

          <div
            className={`grid gap-y-[12px] lg:mt-[38px] lg:grid-cols-[520px_520px] lg:gap-x-[40px] lg:gap-y-[24px] ${
              offline ? "mt-[14px]" : "mt-[38px]"
            }`}
          >
            <Field label={c.fields.targetRole}>
              <input
                type="text"
                value={draft.targetRole}
                disabled={saving}
                onChange={(event) =>
                  setDraft({ ...draft, targetRole: event.target.value })
                }
                className="h-[52px] w-full rounded-[16px] border border-[#d5e0da] bg-white px-[20px] text-[13px] text-[#17231f] outline-none focus:border-[#0c664b]"
              />
            </Field>
            <Field label={c.fields.preferredLocation}>
              <SelectInput
                value={c.locations[draft.locationKey]}
                ariaLabel={c.fields.preferredLocation}
                disabled={saving}
                onClick={() => setSheet("location")}
              />
            </Field>
            <Field label={c.fields.workType}>
              <SelectInput
                value={c.workTypes[draft.workTypeKey]}
                ariaLabel={c.fields.workType}
                disabled={saving}
                onClick={() => setSheet("workType")}
              />
            </Field>
            <Field label={c.fields.availability}>
              <button
                type="button"
                aria-label={c.fields.availability}
                disabled={saving}
                onClick={() => setSheet("availability")}
                className="relative h-[52px] w-full rounded-[16px] border border-[#d5e0da] bg-white pr-[44px] pl-[20px] text-left text-[13px] text-[#17231f] hover:border-[#0c664b] disabled:cursor-default disabled:hover:border-[#d5e0da]"
              >
                {availabilityEditValue}
                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute top-[16px] right-[15px] text-[#65746d]"
                />
              </button>
            </Field>
            <Field label={c.fields.industry}>
              <SelectInput
                value={c.industries[draft.industryKey]}
                ariaLabel={c.fields.industry}
                disabled={saving}
                onClick={() => setSheet("industry")}
              />
            </Field>
          </div>

          <div className="mt-[22px] grid gap-4 lg:mt-[40px] lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
            {saveFailed ? (
              <>
                <SaveErrorCard title={c.error.title} body={c.error.body} />
                <div>
                  <button
                    type="button"
                    onClick={handleTryAgain}
                    className="flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
                  >
                    {c.tryAgain}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelError}
                    className="mt-[16px] flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
                  >
                    {common.action.cancel}
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  disabled={saving || offline}
                  onClick={handleSave}
                  className={`flex h-[52px] w-full items-center justify-center rounded-[14px] text-[13px] font-semibold text-white ${
                    saving || offline
                      ? "cursor-default bg-[#9dbbad]"
                      : "bg-[#0c664b] hover:bg-[#0b5842]"
                  }`}
                >
                  {saving ? c.saving : c.save}
                </button>
                {offline && (
                  <div className="hidden lg:block">
                    <OfflineBanner
                      title={c.offline.title}
                      body={c.offline.body}
                      onRetry={() => {
                        setMode("edit");
                        clearForced();
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}

      {sheet === "location" && (
        <SelectorSheet
          title={c.locationSheet.title}
          body={c.locationSheet.body}
          options={LOCATION_KEYS.map((key) => ({
            key,
            label: c.locations[key],
          }))}
          onSelect={(key) => {
            setDraft({
              ...draft,
              locationKey: key as typeof draft.locationKey,
            });
            setSheet(null);
          }}
          onCancel={() => setSheet(null)}
        />
      )}
      {sheet === "workType" && (
        <SelectorSheet
          title={c.workTypeSheet.title}
          body={c.workTypeSheet.body}
          options={WORK_TYPE_KEYS.map((key) => ({
            key,
            label: c.workTypes[key],
          }))}
          onSelect={(key) => {
            setDraft({
              ...draft,
              workTypeKey: key as typeof draft.workTypeKey,
            });
            setSheet(null);
          }}
          onCancel={() => setSheet(null)}
        />
      )}
      {sheet === "industry" && (
        <SelectorSheet
          title={c.industrySheet.title}
          body={c.industrySheet.body}
          options={INDUSTRY_KEYS.map((key) => ({
            key,
            label: c.industries[key],
          }))}
          onSelect={(key) => {
            setDraft({
              ...draft,
              industryKey: key as typeof draft.industryKey,
            });
            setSheet(null);
          }}
          onCancel={() => setSheet(null)}
        />
      )}
      {sheet === "availability" && (
        <AvailabilitySheet
          initialDate={draft.availabilityDate ?? ""}
          onDone={(date) => {
            setDraft({ ...draft, availabilityDate: date });
            setSheet(null);
          }}
          onImmediately={() => {
            setDraft({ ...draft, availabilityDate: null });
            setSheet(null);
          }}
          onCancel={() => setSheet(null)}
        />
      )}
      {unsavedOpen && (
        <UnsavedChangesSheet
          title={c.unsaved.title}
          body={c.unsaved.body}
          keepLabel={c.unsaved.keepEditing}
          discardLabel={c.unsaved.discard}
          onKeep={handleKeepEditing}
          onDiscard={handleDiscard}
        />
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[11px] leading-[18px] font-semibold tracking-[0.04em] text-[#65746d]">
        {label}
      </p>
      <div className="mt-[6px]">{children}</div>
    </div>
  );
}

/* WD-29A dropdown input: white rounded-16 pill with a 16px chevron. The mock
   places the chevron at x=251 on desktop; mobile right-aligns it. */
function SelectInput({
  value,
  ariaLabel,
  disabled,
  onClick,
}: {
  value: string;
  ariaLabel: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className="relative h-[52px] w-full rounded-[16px] border border-[#d5e0da] bg-white pr-[36px] pl-[20px] text-left text-[13px] text-[#17231f] hover:border-[#0c664b] disabled:cursor-default disabled:hover:border-[#d5e0da]"
    >
      {value}
      <ChevronDown
        size={16}
        className="pointer-events-none absolute top-[18px] right-[16px] text-[#65746d] lg:right-auto lg:left-[251px]"
      />
    </button>
  );
}
