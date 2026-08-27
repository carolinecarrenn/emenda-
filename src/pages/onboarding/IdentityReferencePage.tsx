import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useScreenState } from "@/hooks/useScreenState";
import { ONBOARDING_ID_COPY } from "./onboarding.copy";
import { IDENTITY_DOCUMENT, type DocumentTypeId } from "./onboardingIdMock";
import { OnboardingShell } from "./sections/OnboardingShell";
import { PrimaryButton, TextLinkButton } from "./sections/OnboardingButtons";

type ReferencePhase =
  | "base"
  | "uploading"
  | "failed"
  | "invalid"
  | "ready"
  | "permission";

/** W-14 Identity Reference (468:54) / WD-14 (816:72) + states A Uploading (816:105),
 *  B Upload Failed (816:140), C Invalid/Expired (816:174), D Document Ready
 *  (816:208), E Permission Required (816:241). "Choose file" runs the real
 *  upload — W-14 → W-14A Uploading (progress bar) → W-14D Document Ready —
 *  and "Retry upload" re-runs it, so the happy path never needs a URL.
 *  W-14B (upload failure), W-14C (server rejects the document) and W-14E
 *  (OS photo permission denied) are environment outcomes a click cannot
 *  produce, so they keep ?state=failed|invalid|permission. */
export function IdentityReferencePage() {
  const navigate = useNavigate();
  const screenState = useScreenState();
  const c = useSectionCopy(ONBOARDING_ID_COPY);
  const common = useCommonCopy();

  const [docType, setDocType] = useState<DocumentTypeId>("passport");
  const [docReady, setDocReady] = useState(false);
  const [uploading, setUploading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const phase: ReferencePhase =
    screenState === "uploading" ||
    screenState === "failed" ||
    screenState === "invalid" ||
    screenState === "ready" ||
    screenState === "permission"
      ? screenState
      : docReady
        ? "ready"
        : "base";

  const clearState = () => navigate("/onboarding/id/reference");
  const resetDocument = () => {
    setDocReady(false);
    clearState();
  };
  /** W-14 → W-14A: the upload runs for real, then settles on W-14D. */
  const startUpload = () => {
    setUploading(true);
    navigate("/onboarding/id/reference?state=uploading");
  };

  useEffect(() => {
    if (uploading && phase === "uploading") {
      timerRef.current = window.setTimeout(() => {
        setUploading(false);
        setDocReady(true);
        navigate("/onboarding/id/reference", { replace: true });
      }, 1400);
      return () => {
        if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      };
    }
  }, [uploading, phase, navigate]);

  const isPermission = phase === "permission";

  const uploadCard = {
    base: {
      title: c.reference.addPhotoRequiredTitle,
      body: c.reference.addPhotoRequiredBody,
      action: c.reference.chooseFile,
      onAction: startUpload,
    },
    uploading: {
      title: c.reference.addPhotoTitle,
      body: c.reference.photoSpecBody,
      action: c.reference.uploadingAction,
      onAction: undefined,
    },
    failed: {
      title: c.reference.addPhotoTitle,
      body: c.reference.photoSpecBody,
      action: c.reference.retryUpload,
      onAction: startUpload,
    },
    invalid: {
      title: c.reference.addPhotoTitle,
      body: c.reference.photoSpecBody,
      action: c.reference.chooseFile,
      onAction: startUpload,
    },
    ready: {
      title: c.reference.documentReadyTitle,
      body: `${IDENTITY_DOCUMENT.fileName} · ${c.reference.readyToReview}`,
      action: c.reference.replaceDocument,
      onAction: resetDocument,
    },
    permission: {
      title: c.reference.photoAccessOffTitle,
      body: c.reference.photoAccessOffBody,
      action: c.reference.chooseAnotherMethod,
      onAction: clearState,
    },
  }[phase];

  const primary =
    phase === "ready"
      ? {
          label: common.action.continue,
          disabled: false,
          onClick: () => navigate("/onboarding/id/review"),
        }
      : phase === "invalid"
        ? {
            label: c.reference.chooseAnotherDocument,
            disabled: false,
            onClick: resetDocument,
          }
        : phase === "permission"
          ? {
              label: c.reference.openSettings,
              disabled: false,
              onClick: clearState,
            }
          : phase === "uploading"
            ? {
                label: c.reference.uploadingButton,
                disabled: true,
                onClick: undefined,
              }
            : phase === "failed"
              ? {
                  label: common.action.continue,
                  disabled: true,
                  onClick: undefined,
                }
              : {
                  label: c.reference.addDocToContinue,
                  disabled: true,
                  onClick: undefined,
                };

  return (
    <OnboardingShell
      title={isPermission ? c.reference.permissionTitle : c.reference.title}
      subtitle={
        isPermission ? c.reference.permissionSubtitle : c.reference.subtitle
      }
      railClassName="lg:pt-[83px]"
    >
      {/* DOCUMENT TYPE tiles */}
      <div className="rounded-[16px] border border-line bg-white p-[14px]">
        <p className="text-[11px] leading-[14px] font-semibold text-ink-muted uppercase lg:text-[11.6px]">
          {c.reference.documentTypeLabel}
        </p>
        <div className="mt-[10px] flex gap-2">
          {(
            [
              {
                id: "passport" as DocumentTypeId,
                title: c.reference.passport,
                meta: null,
              },
              {
                id: "residence" as DocumentTypeId,
                title: c.reference.residenceCard,
                meta: c.reference.japanMeta,
              },
            ] as const
          ).map((tile) => {
            const selected = docType === tile.id;
            return (
              <button
                key={tile.id}
                type="button"
                onClick={() => setDocType(tile.id)}
                className={`flex w-[151px] flex-col gap-[3px] rounded-[12px] border p-[10px] text-left lg:h-[53px] lg:w-auto lg:flex-1 ${
                  selected
                    ? "border-brand bg-brand-soft"
                    : "border-line bg-white"
                }`}
              >
                <span className="text-[13px] leading-[17px] font-semibold text-ink lg:text-[13.7px]">
                  {tile.title}
                </span>
                <span
                  className={`text-[10px] leading-[13px] lg:text-[10.5px] ${
                    selected ? "text-brand-deep" : "text-ink-muted"
                  }`}
                >
                  {selected ? c.reference.selectedMeta : tile.meta}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DOCUMENT NUMBER */}
      <div className="mt-[14px] lg:mt-[35px]">
        <p className="text-[11px] leading-[14px] font-semibold text-ink-muted uppercase lg:text-[11.6px]">
          {c.reference.documentNumberLabel}
        </p>
        <div className="mt-[6px] flex h-[54px] items-center rounded-[14px] border border-line bg-white px-[14px] lg:px-5">
          <p className="text-[14px] text-ink lg:text-[14.7px]">
            {IDENTITY_DOCUMENT.maskedNumber}
          </p>
        </div>
      </div>

      {/* EXPIRY DATE */}
      <div className="mt-[14px] lg:mt-[25px]">
        <p className="text-[11px] leading-[14px] font-semibold text-ink-muted uppercase lg:text-[11.6px]">
          {c.reference.expiryDateLabel}
        </p>
        <div
          className={`mt-[6px] flex h-[54px] items-center rounded-[14px] border bg-white px-[14px] lg:px-5 ${
            phase === "invalid" ? "border-[#c94f3d]" : "border-line"
          }`}
        >
          <p className="text-[14px] text-ink lg:text-[14.7px]">
            {IDENTITY_DOCUMENT.expiryDate}
          </p>
        </div>
        {phase === "invalid" ? (
          <p className="mt-[6px] text-[11px] text-[#c94f3d] lg:text-[11.6px]">
            {c.reference.invalidDocHelper}
          </p>
        ) : null}
      </div>

      {/* Document photo card */}
      <div className="mt-[14px] rounded-[16px] border border-line bg-white p-[14px] lg:mt-[25px]">
        <p className="text-[13px] leading-[17px] font-semibold text-ink lg:text-[13.7px]">
          {uploadCard.title}
        </p>
        <p className="mt-[6px] text-[11px] leading-[14px] text-ink-muted lg:text-[11.6px]">
          {uploadCard.body}
        </p>
        {uploadCard.onAction ? (
          <button
            type="button"
            onClick={uploadCard.onAction}
            className="mt-[6px] block text-left text-[12px] leading-[15px] font-semibold text-brand-deep hover:text-brand lg:text-[12.6px]"
          >
            {uploadCard.action}
          </button>
        ) : (
          <p className="mt-[6px] text-[12px] leading-[15px] font-semibold text-brand-deep lg:text-[12.6px]">
            {uploadCard.action}
          </p>
        )}
        {phase === "uploading" ? (
          <div className="mt-[6px] h-[6px] w-full overflow-hidden rounded-full bg-brand-soft">
            <div
              className="h-full rounded-full bg-brand"
              style={{ width: `${IDENTITY_DOCUMENT.uploadProgress}%` }}
            />
          </div>
        ) : null}
        {phase === "failed" ? (
          <p className="mt-[6px] text-[11px] text-[#c94f3d] lg:text-[11.6px]">
            {c.reference.uploadFailedHelper}
          </p>
        ) : null}
      </div>

      <div className="mt-[14px] lg:mt-[32px]">
        <PrimaryButton
          label={primary.label}
          disabled={primary.disabled}
          onClick={primary.onClick}
        />
      </div>
      <div className="mt-[14px] lg:mt-5">
        <TextLinkButton
          label={common.action.back}
          onClick={() => navigate("/onboarding/id/details")}
        />
      </div>
    </OnboardingShell>
  );
}
