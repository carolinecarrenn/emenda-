import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Camera,
  ChevronDown,
  FileText,
  FilePlus,
  Image as ImageIcon,
} from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { DOCUMENTS_COPY } from "./documents.copy";
import {
  READY_FILE,
  UNSUPPORTED_FILE_NAME,
  type DocTypeKey,
  type VaultFile,
} from "./documentsMock";
import { BackLink, PageHeading } from "./sections/PageChrome";
import { PickerField, TextField } from "./sections/Fields";
import { ConfirmModal, OverlaySheet } from "./sections/Overlays";
import { DateSheet } from "./sections/DateSheet";
import { SuccessPanel } from "./sections/StateCards";
import { OfflineRetryBanner, SaveErrorBanner } from "./sections/RetryBanners";
import { CenteredCard } from "./sections/CenteredCards";
import { ActionButton, SecondaryButton } from "./sections/ActionButtons";
import { LinkedRecordCard } from "./sections/LinkedRecordCard";

const DOC_TYPE_ORDER: DocTypeKey[] = [
  "passport",
  "residenceCard",
  "visaCoe",
  "employment",
  "qualification",
  "other",
];

type Overlay = null | "type" | "issue-date" | "expiry-date" | "file-source";

interface AddForm {
  typeKey: DocTypeKey;
  name: string;
  number: string;
  issued: string | null;
  expiry: string | null;
  note: string;
  file: VaultFile | null;
}

const INITIAL_FORM: AddForm = {
  typeKey: "qualification",
  name: "JLPT N3 certificate",
  number: "N3-2026-08421",
  issued: "12 Aug 2026",
  expiry: null,
  note: "Japanese language certificate.",
  file: null,
};

/** Add document (Figma WD-38, node 1024:494 · mobile W-38 758:235).
 *  Seven-field form on a 76px row pitch, then the Save pill — desaturated to
 *  45% until a file is attached (W-38F 758:687).
 *
 *  Three of the lettered states are NOT modals over this form, they are their
 *  own screens with their own back-link, title and subtitle:
 *  W-38E 758:634 "Camera permission needed", W-38O 803:53 "Already linked"
 *  and W-38P 863:194 "Document saved". The rest layer onto the form:
 *  W-38A validation, W-38B uploading (pickers drop to 45%), W-38C/W-38D file
 *  errors, W-38G saving, W-38H save failed (rose retry banner + "Try saving
 *  again"), W-38I offline (amber banner with Retry), W-38J discard modal, and
 *  the K/L/M/N picker sheets. */
export function AddDocumentPage() {
  const c = useSectionCopy(DOCUMENTS_COPY);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const sv = useScreenState();

  const [form, setForm] = useState<AddForm>(INITIAL_FORM);
  const [dirty, setDirty] = useState(false);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [showGuard, setShowGuard] = useState(false);
  const [showPermission, setShowPermission] = useState(false);
  const [showLeave, setShowLeave] = useState(false);
  const [savedInteractive, setSavedInteractive] = useState(false);
  /* Interactive counterparts of ?state=validation-error / uploading / saving
     (W-38A, W-38B, W-38G) so the whole add flow works by clicking. */
  const [localInvalid, setLocalInvalid] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [savingLocal, setSavingLocal] = useState(false);

  const update = (patch: Partial<AddForm>) => {
    setForm((f) => ({ ...f, ...patch }));
    setDirty(true);
  };

  const isValidationError = sv === "validation-error";
  const isUploading = sv === "uploading" || uploading;
  const isSaving = sv === "saving" || savingLocal;
  const isSaveFailed = sv === "save-failed";
  const saved = sv === "saved" || savedInteractive;
  const alreadyLinked = sv === "existing-verified" || showGuard;
  const permissionScreen = sv === "permission-required" || showPermission;

  const nameValue = isValidationError ? "" : form.name;
  /* W-38F/G/H/J all render the form with the picked file already attached. */
  const stateHasFile =
    sv === "file-ready" ||
    sv === "saving" ||
    sv === "save-failed" ||
    sv === "unsaved-changes";
  const file = stateHasFile ? READY_FILE : form.file;
  const nameMissing = nameValue.trim() === "";
  const nameError =
    isValidationError || (localInvalid && nameMissing) ? c.add.nameError : null;
  const fileError =
    isValidationError || (localInvalid && !file)
      ? c.add.fileError
      : sv === "upload-failed"
        ? c.add.uploadFailed
        : sv === "unsupported-file"
          ? c.add.unsupportedFile
          : null;

  /* Figma 758:306 / 758:466 / 758:596 / 758:690 — the file field carries the
     whole upload story, not just a name. */
  const fileDisplay = isUploading
    ? c.add.uploadingFile.replace("{file}", READY_FILE.fileName)
    : sv === "upload-failed"
      ? c.add.fileUploadFailed
      : sv === "unsupported-file"
        ? `${UNSUPPORTED_FILE_NAME} · ${c.add.unsupportedSuffix}`
        : file
          ? `${file.fileName} · ${file.fileSize}`
          : c.add.noFileSelected;

  /* The button keeps its desaturated look until the form is complete
     (W-38F) but stays pressable, so pressing it reveals W-38A. */
  const isComplete = !!file && !nameMissing;
  const canSave = !isSaving && !isUploading;

  const handleSave = () => {
    if (!canSave) return;
    if (!isComplete) {
      setLocalInvalid(true);
      return;
    }
    setSavingLocal(true);
    window.setTimeout(() => {
      setSavingLocal(false);
      setSavedInteractive(true);
    }, 800);
  };

  /* W-38B Uploading → W-38F File Ready. */
  const pickFile = () => {
    setOverlay(null);
    setUploading(true);
    window.setTimeout(() => {
      setUploading(false);
      update({ file: READY_FILE });
    }, 900);
  };

  const backToForm = () => {
    setShowPermission(false);
    setShowGuard(false);
  };

  if (saved) {
    /* W-38P Add Document — Saved (863:194) */
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <BackLink to="/worker/documents" label={c.shared.myDocuments} />
        <PageHeading
          title={c.add.savedPageTitle}
          subtitle={c.add.savedPageSubtitle}
        />
        {/* WD-38P 1024:2140 — the mint panel runs the full 1080px content
            width; the 520px "View document" pill sits 18px under it. */}
        <div className="mt-[26px] max-w-[520px] space-y-[24px] lg:max-w-none lg:space-y-[18px]">
          <SuccessPanel title={c.add.savedTitle} body={c.add.savedBody} />
          <div className="lg:max-w-[520px]">
            <ActionButton
              label={c.add.viewDocument}
              className="lg:h-[48px] lg:rounded-[14px]"
              onClick={() => navigate("/worker/documents/jlpt-n3-certificate")}
            />
          </div>
        </div>
      </div>
    );
  }

  if (alreadyLinked) {
    /* W-38O Add Document — Existing Verified Document (803:53) */
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <BackLink
          to="/worker/documents/add"
          label={c.add.title}
          onGuard={() => {
            backToForm();
            return false;
          }}
        />
        <PageHeading
          title={c.add.existingVerifiedTitle}
          subtitle={c.add.existingVerifiedSubtitle}
        />
        <div className="mt-[26px] max-w-[520px] space-y-[12px]">
          <LinkedRecordCard
            label={c.add.existingVerifiedLabel}
            title={c.docType[form.typeKey]}
            body={c.add.existingVerifiedBody}
            className="mb-[18px]"
          />
          <ActionButton
            label={c.add.chooseAnotherType}
            onClick={() => {
              backToForm();
              setOverlay("type");
            }}
          />
          <SecondaryButton
            label={c.add.backToDocuments}
            tone="brand"
            onClick={() => navigate("/worker/documents")}
          />
        </div>
      </div>
    );
  }

  if (permissionScreen) {
    /* W-38E Add Document — Permission Required (758:634) */
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <BackLink
          to="/worker/documents/add"
          label={c.add.title}
          onGuard={() => {
            backToForm();
            return false;
          }}
        />
        <PageHeading
          title={c.add.permissionTitle}
          subtitle={c.add.permissionSubtitle}
        />
        <div className="mt-[26px] max-w-[520px] space-y-[12px]">
          <CenteredCard
            icon={<Camera size={22} strokeWidth={1.5} className="text-brand" />}
            title={c.add.permissionCardTitle}
            body={c.add.permissionBody}
            className="mb-[16px]"
          />
          <ActionButton label={c.add.permissionSettings} onClick={backToForm} />
          <SecondaryButton
            label={c.add.permissionChooseFile}
            onClick={() => {
              setShowPermission(false);
              pickFile();
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <BackLink
        to="/worker/documents"
        label={c.shared.myDocuments}
        muted={isSaving}
        onGuard={() => {
          if (dirty) {
            setShowLeave(true);
            return false;
          }
          return true;
        }}
      />
      <PageHeading
        title={c.add.title}
        subtitle={sv === "offline" ? c.add.subtitleOffline : c.add.subtitle}
      />

      {sv === "offline" && (
        <div className="mt-[26px] max-w-[520px]">
          <OfflineRetryBanner body={c.add.offlineBody} />
        </div>
      )}

      {/* Figma 758:280.. — 76px row pitch on mobile, 520px columns on desktop. */}
      <div className="mt-[26px] grid gap-[10px] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-[31px]">
        <PickerField
          label={c.add.labelType}
          display={c.docType[form.typeKey]}
          icon={<ChevronDown size={20} strokeWidth={1.5} />}
          disabled={isUploading}
          onClick={() => setOverlay("type")}
        />
        <TextField
          label={c.add.labelName}
          value={nameValue}
          onChange={(name) => update({ name })}
          error={nameError}
        />
        <TextField
          label={c.add.labelNumber}
          value={form.number}
          onChange={(number) => update({ number })}
        />
        <PickerField
          label={c.add.labelIssueDate}
          display={
            form.issued ? formatDisplayDate(form.issued, language) : c.add.noDate
          }
          isPlaceholder={!form.issued}
          icon={<Calendar size={20} strokeWidth={1.5} />}
          disabled={isUploading}
          onClick={() => setOverlay("issue-date")}
        />
        <PickerField
          label={c.add.labelExpiryDate}
          display={
            form.expiry
              ? formatDisplayDate(form.expiry, language)
              : c.add.noExpiry
          }
          isPlaceholder={!form.expiry}
          icon={<Calendar size={20} strokeWidth={1.5} />}
          disabled={isUploading}
          onClick={() => setOverlay("expiry-date")}
        />
        <PickerField
          label={c.add.labelFile}
          display={fileDisplay}
          isPlaceholder={!file && !isUploading}
          icon={<FilePlus size={20} strokeWidth={1.5} />}
          disabled={isUploading}
          onClick={() => setOverlay("file-source")}
          error={fileError}
        />
        <TextField
          label={c.add.labelNote}
          value={form.note}
          onChange={(note) => update({ note })}
        />
        {isSaveFailed && (
          <div className="lg:col-span-2">
            <SaveErrorBanner body={c.add.saveFailed} />
          </div>
        )}
        <div className="lg:self-start">
          <button
            type="button"
            disabled={!canSave}
            onClick={handleSave}
            className={`flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white ${
              canSave && isComplete ? "hover:bg-brand-deep" : "opacity-45"
            }`}
          >
            {isSaving
              ? c.shared.saving
              : isSaveFailed
                ? c.add.trySavingAgain
                : c.add.save}
          </button>
        </div>
      </div>

      {overlay === "type" && (
        /* W-38K Document Type Overlay (758:1098) */
        <OverlaySheet
          title={c.add.typeOverlayTitle}
          helper={c.add.typeOverlayHelper}
          options={DOC_TYPE_ORDER.map((key) => ({
            key,
            label: c.docType[key],
          }))}
          selectedKey={form.typeKey}
          onSelect={(key) => {
            const typeKey = key as DocTypeKey;
            update({ typeKey });
            setShowGuard(typeKey === "passport" || typeKey === "residenceCard");
            setOverlay(null);
          }}
          onClose={() => setOverlay(null)}
        />
      )}
      {overlay === "issue-date" && (
        /* W-38L Issue Date Picker (758:1118) — free date, not a preset list. */
        <DateSheet
          title={c.add.issueDateOverlayTitle}
          helper={c.add.dateOverlayHelper}
          value={form.issued}
          placeholder={c.add.noDate}
          onChange={(issued) => update({ issued })}
          onClose={() => setOverlay(null)}
        />
      )}
      {overlay === "expiry-date" && (
        /* W-38M Expiry Date Picker (758:1129) */
        <DateSheet
          title={c.add.expiryDateOverlayTitle}
          helper={c.add.dateOverlayHelper}
          value={form.expiry}
          placeholder={c.add.noExpiry}
          onChange={(expiry) => update({ expiry })}
          onClose={() => setOverlay(null)}
        />
      )}
      {overlay === "file-source" && (
        /* W-38N File Source Overlay (758:1140) — icon rows, three sources. */
        <OverlaySheet
          title={c.add.fileSourceOverlayTitle}
          helper={c.add.fileSourceOverlayHelper}
          options={[
            {
              key: "camera",
              label: c.add.fileSourceCamera,
              icon: <Camera size={20} strokeWidth={1.5} />,
            },
            {
              key: "photos",
              label: c.add.fileSourcePhotos,
              icon: <ImageIcon size={20} strokeWidth={1.5} />,
            },
            {
              key: "files",
              label: c.add.fileSourceFiles,
              icon: <FileText size={20} strokeWidth={1.5} />,
            },
          ]}
          onSelect={(key) => {
            if (key === "camera") {
              /* W-38E Camera permission needed */
              setOverlay(null);
              setShowPermission(true);
            } else {
              pickFile();
            }
          }}
          onClose={() => setOverlay(null)}
        />
      )}
      {(showLeave || sv === "unsaved-changes") && (
        /* W-38J Unsaved Changes (758:1091) — the discard pill is solid green. */
        <ConfirmModal
          title={c.add.discardTitle}
          body={c.add.unsavedBody}
          safeLabel={c.shared.keepEditing}
          onSafe={() => setShowLeave(false)}
          dangerLabel={c.shared.discardChanges}
          dangerTone="solid"
          onDanger={() => navigate("/worker/documents")}
          onClose={() => setShowLeave(false)}
        />
      )}
    </div>
  );
}
