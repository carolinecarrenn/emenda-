import { useState, type MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useProfileCopy } from "./profile.copy";
import {
  INVALID_PROFILE_DRAFT,
  PROFILE,
  type WorkerProfile,
} from "./profileMock";
import { CountryField, ProfileField } from "./sections/ProfileField";
import { OfflineBanner, SaveErrorBanner } from "./sections/EditBanners";
import { CountrySelectorOverlay } from "./sections/CountrySelectorOverlay";
import { UnsavedChangesDialog } from "./sections/UnsavedChangesDialog";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Edit Personal Profile — Figma WD-20 (desktop, node 966:320) / W-20
 *  (mobile, node 544:169). Two 520px form columns on desktop, single column
 *  on mobile (sub-page: no bottom nav, "← Personal profile" back link).
 *  States via ?state=: validation-error (WD-20A), saving (WD-20B),
 *  save-failed (WD-20C), offline (WD-20D), unsaved-changes (WD-20E).
 *  Country selector and the discard-changes guard are interactive. */
export function EditPersonalProfilePage() {
  const navigate = useNavigate();
  const screenState = useScreenState();
  const c = useProfileCopy();
  const common = useCommonCopy();

  const validationSeed = screenState === "validation-error";
  const saveFailed = screenState === "save-failed";
  const offline = screenState === "offline";
  const unsavedSeed = screenState === "unsaved-changes";

  // Seed captured once so a language switch never resets the form.
  const [initial] = useState<WorkerProfile>(() =>
    validationSeed ? INVALID_PROFILE_DRAFT : PROFILE,
  );
  const [draft, setDraft] = useState<WorkerProfile>(initial);
  const [showErrors, setShowErrors] = useState(validationSeed);
  const [countryOpen, setCountryOpen] = useState(false);
  const [discardOpen, setDiscardOpen] = useState(false);
  const [seedDialogDismissed, setSeedDialogDismissed] = useState(false);
  const [localSaving, setLocalSaving] = useState(false);

  const saving = screenState === "saving" || localSaving;

  const emailError = !EMAIL_PATTERN.test(draft.email.trim())
    ? c.errorEmail
    : undefined;
  const cityError = draft.city.trim() === "" ? c.errorCity : undefined;
  const countryError = draft.country === "" ? c.errorCountry : undefined;
  const hasErrors = Boolean(emailError || cityError || countryError);

  const dirty =
    draft.displayName !== initial.displayName ||
    draft.email !== initial.email ||
    draft.country !== initial.country ||
    draft.city !== initial.city ||
    draft.aboutMe !== initial.aboutMe;

  const saveDisabled = (showErrors && hasErrors) || offline || saving;

  const handleSave = () => {
    if (hasErrors) {
      setShowErrors(true);
      return;
    }
    setLocalSaving(true);
    window.setTimeout(() => {
      navigate("/worker/profile?state=updated");
    }, 700);
  };

  const handleCancel = () => {
    if (dirty) {
      setDiscardOpen(true);
    } else {
      navigate("/worker/profile");
    }
  };

  /** The "← Personal profile" back link leaves the form too, so it raises the
   *  same WD-20E guard as Cancel instead of dropping unsaved edits. */
  const handleBack = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!dirty) return;
    event.preventDefault();
    setDiscardOpen(true);
  };

  const dialogVisible = discardOpen || (unsavedSeed && !seedDialogDismissed);

  return (
    <div className="max-w-[1096px] pt-2 lg:pt-0">
      <Link
        to="/worker/profile"
        onClick={handleBack}
        className="inline-flex items-center gap-[6px] py-1 text-[#0b684f] hover:text-brand"
      >
        <span className="w-[18px] text-[16px] leading-5 font-semibold">←</span>
        <span className="text-[13px] leading-5 font-semibold">
          {c.pageTitle}
        </span>
      </Link>
      <h1 className="mt-[10px] text-[30px] leading-[1.2] font-bold text-ink lg:mt-2 lg:text-[32px]">
        {c.editTitle}
      </h1>
      <p className="mt-2 text-[13px] leading-[18px] text-ink-muted lg:mt-[6px] lg:text-[16px] lg:leading-[28px]">
        {c.editSubtitle}
      </p>

      {offline && (
        <div className="mt-2">
          <OfflineBanner onRetry={() => navigate("/worker/profile/edit")} />
        </div>
      )}

      <div
        className={`${offline ? "mt-2" : "mt-4"} lg:mt-6 lg:flex lg:gap-14`}
      >
        <div className="lg:w-[520px]">
          <ProfileField
            label={c.labelDisplayName}
            value={draft.displayName}
            onChange={(displayName) => setDraft({ ...draft, displayName })}
            helper={c.helperDisplayName}
          />
          <div className="mt-2 lg:mt-5">
            <ProfileField
              label={c.labelEmail}
              value={draft.email}
              onChange={(email) => setDraft({ ...draft, email })}
              error={showErrors ? emailError : undefined}
            />
          </div>
          <div className="mt-3 lg:mt-11">
            <CountryField
              label={c.labelCountry}
              value={draft.country}
              placeholder={c.selectCountryPlaceholder}
              error={showErrors ? countryError : undefined}
              onOpen={() => setCountryOpen(true)}
            />
          </div>
        </div>
        <div className="mt-[10px] lg:mt-0 lg:w-[520px]">
          <ProfileField
            label={c.labelCity}
            value={draft.city}
            onChange={(city) => setDraft({ ...draft, city })}
            error={showErrors ? cityError : undefined}
          />
          <div className="mt-3 lg:mt-[42px]">
            <ProfileField
              label={c.labelAboutMe}
              value={draft.aboutMe}
              onChange={(aboutMe) => setDraft({ ...draft, aboutMe })}
              textarea
            />
          </div>
          {saveFailed && (
            <div className="mt-5 lg:mt-[34px]">
              <SaveErrorBanner />
            </div>
          )}
          <button
            type="button"
            disabled={saveDisabled}
            onClick={handleSave}
            className={`flex h-[52px] w-full items-center justify-center rounded-[14px] text-[14px] font-semibold ${
              saveDisabled
                ? "cursor-not-allowed bg-[#e3ede8] text-[#80948a]"
                : "bg-brand text-white hover:bg-brand-deep"
            } ${saveFailed ? "mt-4" : "mt-6 lg:mt-[42px]"}`}
          >
            {saving
              ? c.savingLabel
              : saveFailed
                ? c.trySavingAgain
                : c.saveChanges}
          </button>
          {/* W-20B dims Cancel to 50% while the save is in flight. */}
          <button
            type="button"
            disabled={saving}
            onClick={handleCancel}
            className={`mt-3 flex h-[32px] w-full items-center justify-center rounded-[14px] text-[14px] font-semibold text-[#0b684f] lg:mt-[14px] ${
              saving ? "cursor-not-allowed opacity-50" : "hover:text-brand"
            }`}
          >
            {common.action.cancel}
          </button>
        </div>
      </div>

      {countryOpen && (
        <CountrySelectorOverlay
          selected={draft.country}
          onSelect={(country) => {
            setDraft({ ...draft, country });
            setCountryOpen(false);
          }}
          onClose={() => setCountryOpen(false)}
        />
      )}
      {dialogVisible && (
        <UnsavedChangesDialog
          onKeepEditing={() => {
            setDiscardOpen(false);
            setSeedDialogDismissed(true);
          }}
          onDiscard={() => navigate("/worker/profile")}
        />
      )}
    </div>
  );
}
