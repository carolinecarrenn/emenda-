import { useState, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, Camera, ChevronDown, FileText, Image as ImageIcon } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { DOCUMENTS_COPY } from "./documents.copy";
import {
  ISSUE_REPORT_DRAFT,
  READY_FILE,
  REPLACEMENT_FILE_NAME,
  findDocument,
  type DocTypeKey,
  type VaultFile,
} from "./documentsMock";
import { BackLink, PageHeading } from "./sections/PageChrome";
import { DetailRow, FilePreviewCard } from "./sections/DetailBlocks";
import { PickerField, TextField } from "./sections/Fields";
import { ConfirmModal, OverlaySheet } from "./sections/Overlays";
import { DateSheet } from "./sections/DateSheet";
import {
  AmberBanner,
  ErrorBanner,
  OfflineBanner,
  SuccessPanel,
} from "./sections/StateCards";
import {
  CenteredCard,
  PreviewCanvas,
  UploadProgressCard,
  VerifiedReferenceCard,
} from "./sections/CenteredCards";
import { ActionButton, SecondaryButton } from "./sections/ActionButtons";

/** Every standalone state frame shares the same shell: back-link, 22px
 *  title, 12px subtitle, then the state's own body. */
function Screen({
  backTo,
  backLabel,
  backGuard,
  backMuted,
  title,
  pageSubtitle,
  children,
}: {
  backTo: string;
  backLabel: string;
  backGuard?: () => boolean;
  backMuted?: boolean;
  title: string;
  pageSubtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <BackLink
        to={backTo}
        label={backLabel}
        onGuard={backGuard}
        muted={backMuted}
      />
      <PageHeading title={title} subtitle={pageSubtitle} />
      {children}
    </div>
  );
}

const DOC_TYPE_ORDER: DocTypeKey[] = [
  "passport",
  "residenceCard",
  "visaCoe",
  "employment",
  "qualification",
  "other",
];

type Phase =
  | "view"
  | "edit"
  | "issue"
  | "issue-submitted"
  | "deleted"
  | "replacing"
  | "replace-failed"
  | "replacement-rejected"
  | "replace-permission"
  | "file-preview"
  | "file-replaced";

type Overlay = null | "type" | "issue-date" | "expiry-date" | "replace-source";

interface EditForm {
  typeKey: DocTypeKey;
  name: string;
  number: string;
  issued: string | null;
  expiry: string | null;
  note: string;
}

/** Document detail (Figma WD-39 1025:2 · mobile W-39 759:2).
 *
 *  The mobile frames make most of the lettered states their own screens, each
 *  with its own back-link, title and subtitle rather than a layer over the
 *  record: W-39B/N/O/P Edit document (759:132, 777:66/124/185), W-39C
 *  Replacing document file (759:203), W-39D Couldn't replace file (759:254),
 *  W-39H..V Report incorrect information (759:463, 803:447/479/514), W-39I
 *  Issue submitted (759:521), W-39M Document preview (777:2), W-39R Camera
 *  permission needed (803:348), W-39S Replacement file rejected (803:378),
 *  W-39W File replaced (863:229) and W-39X Document deleted (863:260).
 *  Only the two confirmations (W-39E delete, W-39F discard) and the four
 *  picker sheets (W-39J/K/L/Q) stay as overlays. */
export function DocumentDetailPage() {
  const { documentId } = useParams();
  /* Key the stateful body so edit/replace/delete state resets per document. */
  return <DocumentDetailBody key={documentId} />;
}

function DocumentDetailBody() {
  const { documentId } = useParams();
  const c = useSectionCopy(DOCUMENTS_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const sv = useScreenState();
  const doc = findDocument(documentId);

  const [phase, setPhase] = useState<Phase>("view");
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);
  const [editForm, setEditForm] = useState<EditForm>(() => ({
    typeKey: doc?.self?.typeKey ?? "other",
    name: doc?.name ?? "",
    number: doc?.self?.number ?? "",
    issued: doc?.self?.issued ?? null,
    expiry: doc?.self?.expiry ?? null,
    note: doc?.self?.note ?? "",
  }));
  const [editDirty, setEditDirty] = useState(false);
  const [issueWhat, setIssueWhat] = useState(ISSUE_REPORT_DRAFT.what);
  const [issueNote, setIssueNote] = useState(ISSUE_REPORT_DRAFT.note);
  const [file, setFile] = useState<VaultFile | null>(doc?.self?.file ?? null);
  /* Interactive counterparts of ?state=replacing / edit-saving /
     issue-submitting (W-39C, W-39N, W-39T). */
  const [savingEdit, setSavingEdit] = useState(false);
  const [submittingIssue, setSubmittingIssue] = useState(false);

  if (!doc) {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <BackLink to="/worker/documents" label={c.shared.myDocuments} />
        <div className="mt-[22px] rounded-[14px] border border-[#d7e2dc] bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-[#17231f]">
            {c.detail.notFound}
          </p>
        </div>
      </div>
    );
  }

  const isVerified = doc.provenance !== "self";
  const detailPath = `/worker/documents/${doc.id}`;

  const svPhase: Phase | null =
    sv === "edit" ||
    sv === "edit-saving" ||
    sv === "edit-save-failed" ||
    sv === "edit-offline" ||
    sv === "unsaved-changes"
      ? "edit"
      : sv === "report-issue" ||
          sv === "issue-submitting" ||
          sv === "issue-submit-failed" ||
          sv === "issue-offline"
        ? "issue"
        : sv === "issue-submitted"
          ? "issue-submitted"
          : sv === "deleted"
            ? "deleted"
            : sv === "replacing"
              ? "replacing"
              : sv === "replace-failed"
                ? "replace-failed"
                : sv === "replacement-rejected"
                  ? "replacement-rejected"
                  : sv === "replace-permission"
                    ? "replace-permission"
                    : sv === "file-preview"
                      ? "file-preview"
                      : sv === "file-replaced"
                        ? "file-replaced"
                        : null;
  const activePhase = svPhase ?? phase;

  const updateEdit = (patch: Partial<EditForm>) => {
    setEditForm((f) => ({ ...f, ...patch }));
    setEditDirty(true);
  };

  /* W-39Q Replace document file (803:337) — three icon rows, same chassis as
     the add flow's W-38N sheet. */
  const replaceSourceSheet = (
    <OverlaySheet
      title={c.detail.replaceSourceTitle}
      helper={c.detail.replaceSourceHelper}
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
          /* W-39R Camera permission needed */
          setOverlay(null);
          setPhase("replace-permission");
        } else {
          startReplace();
        }
      }}
      onClose={() => setOverlay(null)}
    />
  );

  const subtitle = !isVerified
    ? c.detail.subtitleSelf
    : doc.provenance === "verified"
      ? c.detail.subtitleVerified
      : c.detail.subtitleLinked;

  /* ── W-39X Document deleted (863:260) ──────────────────────────────── */
  if (activePhase === "deleted") {
    return (
      <Screen
        backTo="/worker/documents"
        backLabel={c.shared.myDocuments}
        title={c.detail.deletedTitle}
        pageSubtitle={c.detail.deletedSubtitle}
      >
        {/* WD-39X 1025:2693/2700 — panel in column 1, pill in column 2. */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[24px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <SuccessPanel
            title={c.detail.deletedPanelTitle}
            body={c.detail.deletedBody}
          />
          <ActionButton
            label={c.detail.backToDocuments}
            onClick={() => navigate("/worker/documents")}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
          />
        </div>
      </Screen>
    );
  }

  /* ── W-39W File replaced (863:229) ─────────────────────────────────── */
  if (activePhase === "file-replaced") {
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backDocumentDetail}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        title={c.detail.fileReplacedTitle}
        pageSubtitle={c.detail.fileReplacedSubtitle}
      >
        {/* WD-39W 1025:2632/2639 — panel in column 1, pill in column 2. */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[24px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <SuccessPanel
            title={c.detail.fileReplacedPanelTitle}
            body={c.detail.fileReplacedBody}
          />
          <ActionButton
            label={c.detail.backToDocument}
            onClick={() => setPhase("view")}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
          />
        </div>
      </Screen>
    );
  }

  /* ── W-39I Issue submitted (759:521) ───────────────────────────────── */
  if (activePhase === "issue-submitted") {
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backVerifiedDocument}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        title={c.detail.issueSubmittedTitle}
        pageSubtitle={c.detail.issueSubmittedSubtitle}
      >
        {/* WD-39I 1025:680/687 — panel in column 1, pill in column 2. */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[24px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <SuccessPanel
            title={c.detail.issueSubmittedPanelTitle}
            body={c.detail.issueSubmittedBody}
          />
          <ActionButton
            label={c.detail.backToDocument}
            onClick={() => setPhase("view")}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
          />
        </div>
      </Screen>
    );
  }

  /* ── W-39C Replacing document file (759:203) ───────────────────────── */
  if (activePhase === "replacing") {
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backDocumentDetail}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        title={c.detail.replacingTitle}
        pageSubtitle={c.detail.replacingSubtitle}
      >
        <div className="mt-[26px] max-w-[520px]">
          <UploadProgressCard
            title={c.detail.replacingCardTitle}
            fileName={REPLACEMENT_FILE_NAME}
            helper={c.detail.replacingHelper}
            percent={62}
          />
        </div>
      </Screen>
    );
  }

  /* ── W-39D Couldn't replace file (759:254) ─────────────────────────── */
  if (activePhase === "replace-failed") {
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backDocumentDetail}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        title={c.detail.replaceFailedTitle}
        pageSubtitle={c.detail.replaceFailedSubtitle}
      >
        {/* WD-39D 1025:308/310/312 — the rose banner runs the full 1080px
            width, then Try again (column 1) and Back to document (column 2). */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[12px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-[18px]">
          <ErrorBanner
            body={c.detail.replaceFailed}
            className="mb-[18px] lg:col-span-2 lg:mb-0 lg:min-h-[72px]"
          />
          <ActionButton
            label={c.detail.tryAgain}
            onClick={() => setOverlay("replace-source")}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
          />
          <SecondaryButton
            label={c.detail.backToDocument}
            onClick={() => setPhase("view")}
            className="lg:h-[44px] lg:self-start"
          />
        </div>
        {overlay === "replace-source" && replaceSourceSheet}
      </Screen>
    );
  }

  /* ── W-39S Replacement file rejected (803:378) ─────────────────────── */
  if (activePhase === "replacement-rejected") {
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backDocumentDetail}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        title={c.detail.rejectedTitle}
        pageSubtitle={c.detail.rejectedSubtitle}
      >
        {/* WD-39S 1025:1998..2004 — rose card column 1, "Choose another
            file" column 2, then the return pill back in column 1. */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[12px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <ErrorBanner
            title={c.detail.rejectedCardTitle}
            body={c.detail.replacementRejected}
            meta={c.detail.rejectedMeta}
            className="mb-[18px] lg:mb-0 lg:min-h-[136px] lg:self-start"
          />
          <ActionButton
            label={c.detail.chooseAnotherFile}
            onClick={() => setOverlay("replace-source")}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
          />
          <SecondaryButton
            label={c.detail.backToDocument}
            tone="brand"
            onClick={() => setPhase("view")}
            className="lg:h-[46px] lg:self-start"
          />
        </div>
        {overlay === "replace-source" && replaceSourceSheet}
      </Screen>
    );
  }

  /* ── W-39R Camera permission needed (803:348) ──────────────────────── */
  if (activePhase === "replace-permission") {
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backDocumentDetail}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        title={c.detail.replacePermissionTitle}
        pageSubtitle={c.detail.replacePermissionSubtitle}
      >
        {/* WD-39R 1025:1939..1945 — permission card column 1, "Open
            settings" column 2, "Choose existing file" back in column 1. */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[12px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          {/* 803:352 draws this card without the icon tile the add flow uses. */}
          <CenteredCard
            title={c.detail.replacePermissionCardTitle}
            body={c.detail.replacePermissionBody}
            className="mb-[16px] lg:mb-0 lg:min-h-[164px] lg:self-start lg:py-[68px]"
          />
          <ActionButton
            label={c.detail.replacePermissionSettings}
            onClick={() => setPhase("view")}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
          />
          <SecondaryButton
            label={c.detail.chooseExistingFile}
            onClick={startReplace}
            className="lg:self-start"
          />
        </div>
      </Screen>
    );
  }

  /* ── W-39M Document preview (777:2) ────────────────────────────────── */
  if (activePhase === "file-preview" && file) {
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backDocumentDetail}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        title={c.detail.filePreviewTitle}
        pageSubtitle={c.detail.filePreviewSubtitle}
      >
        {/* WD-39M 1025:1514/1518 — 420px canvas column 1, pill column 2. */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[24px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <PreviewCanvas
            fileName={file.fileName}
            fileMeta={file.fileMeta}
            note={c.detail.filePreviewBody}
          />
          <ActionButton
            label={c.detail.backToDocument}
            onClick={() => setPhase("view")}
            className="lg:h-[48px] lg:self-start lg:rounded-[14px]"
          />
        </div>
      </Screen>
    );
  }

  /* ── W-39H / T / U / V Report incorrect information ────────────────── */
  if (activePhase === "issue") {
    const submitting = sv === "issue-submitting" || submittingIssue;
    const offline = sv === "issue-offline";
    const failed = sv === "issue-submit-failed";
    const submitIssue = () => {
      if (submitting || offline) return;
      setSubmittingIssue(true);
      window.setTimeout(() => {
        setSubmittingIssue(false);
        setPhase("issue-submitted");
      }, 800);
    };
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backVerifiedDocument}
        backGuard={() => {
          setPhase("view");
          return false;
        }}
        backMuted={submitting}
        title={c.detail.reportIncorrect}
        pageSubtitle={c.detail.issueSubtitle}
      >
        {/* WD-39H 1025:608 — the verified reference and the note field take
            column 1, the issue field and Submit issue column 2; WD-39V
            1025:2203 moves the offline banner to a full-width row below. */}
        <div className="mt-[26px] flex max-w-[520px] flex-col gap-[16px] lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          {offline && (
            <div className="order-first lg:order-9 lg:col-span-2">
              <OfflineBanner body={c.detail.issueOfflineBody} />
            </div>
          )}
          <VerifiedReferenceCard
            title={`${doc.name} · ${common.status.verified}`}
            body={c.detail.issueRecordLine
              .replace("{number}", doc.verified?.number ?? "—")
              .replace(
                "{date}",
                formatDisplayDate(doc.verified?.validUntil ?? "", language),
              )}
          />
          <div className="lg:order-2">
            <TextField
              label={c.detail.issueLabel}
              value={issueWhat}
              onChange={setIssueWhat}
              placeholder={c.detail.issuePlaceholder}
            />
          </div>
          <div className="lg:order-3">
            <TextField
              label={c.detail.issueNoteLabel}
              value={issueNote}
              onChange={setIssueNote}
              placeholder={c.detail.issueNotePlaceholder}
              multiline
            />
          </div>
          {failed && (
            <ErrorBanner
              body={c.detail.issueSubmitFailed}
              className="lg:order-5 lg:min-h-[56px] lg:self-start"
            />
          )}
          <button
            type="button"
            disabled={submitting || offline}
            onClick={submitIssue}
            className={`flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white lg:order-4 lg:self-start ${
              submitting || offline
                ? "cursor-not-allowed opacity-45"
                : "hover:bg-brand-deep"
            }`}
          >
            {submitting
              ? c.detail.issueSubmitting
              : failed
                ? c.detail.tryAgain
                : c.detail.issueSubmit}
          </button>
        </div>
      </Screen>
    );
  }

  /* ── W-39B / N / O / P Edit document ───────────────────────────────── */
  if (activePhase === "edit") {
    const saving = sv === "edit-saving" || savingEdit;
    const offline = sv === "edit-offline";
    const failed = sv === "edit-save-failed";
    const leaveOpen = showDiscard || sv === "unsaved-changes";
    const saveEdit = () => {
      if (saving || offline) return;
      setSavingEdit(true);
      window.setTimeout(() => {
        setSavingEdit(false);
        setEditDirty(false);
        setPhase("view");
      }, 800);
    };
    return (
      <Screen
        backTo={detailPath}
        backLabel={c.detail.backDocumentDetail}
        backMuted={saving}
        backGuard={() => {
          if (editDirty) {
            setShowDiscard(true);
            return false;
          }
          setPhase("view");
          return false;
        }}
        title={c.detail.editTitle}
        pageSubtitle={
          saving ? c.detail.editSavingSubtitle : c.detail.editSubtitle
        }
      >
        {/* WD-39B 1025:162.. — desktop reads name · number / issue · expiry /
            note · Save changes / Replace file · Document type, while mobile
            (759:132) opens with the type picker, so each cell carries an
            explicit lg: order. WD-39P 1025:1784 drops the offline banner to a
            full-width row at the bottom. */}
        <div className="mt-[26px] grid gap-[10px] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          {offline && (
            <div className="order-first lg:order-10 lg:col-span-2">
              <OfflineBanner body={c.detail.editOfflineBody} />
            </div>
          )}
          <div className="lg:order-8">
            <PickerField
              label={c.add.labelType}
              display={c.docType[editForm.typeKey]}
              icon={<ChevronDown size={20} strokeWidth={1.5} />}
              disabled={saving || offline}
              onClick={() => setOverlay("type")}
            />
          </div>
          <div className="lg:order-1">
            <TextField
              label={c.add.labelName}
              value={editForm.name}
              onChange={(name) => updateEdit({ name })}
            />
          </div>
          <div className="lg:order-2">
            <TextField
              label={c.add.labelNumber}
              value={editForm.number}
              onChange={(number) => updateEdit({ number })}
            />
          </div>
          <div className="lg:order-3">
            <PickerField
              label={c.add.labelIssueDate}
              display={
                editForm.issued
                  ? formatDisplayDate(editForm.issued, language)
                  : c.add.noDate
              }
              isPlaceholder={!editForm.issued}
              icon={<Calendar size={20} strokeWidth={1.5} />}
              disabled={saving || offline}
              onClick={() => setOverlay("issue-date")}
            />
          </div>
          <div className="lg:order-4">
            <PickerField
              label={c.add.labelExpiryDate}
              display={
                editForm.expiry
                  ? formatDisplayDate(editForm.expiry, language)
                  : c.add.noExpiry
              }
              isPlaceholder={!editForm.expiry}
              icon={<Calendar size={20} strokeWidth={1.5} />}
              disabled={saving || offline}
              onClick={() => setOverlay("expiry-date")}
            />
          </div>
          <div className="lg:order-5">
            <TextField
              label={c.detail.labelPrivateNote}
              value={editForm.note}
              onChange={(note) => updateEdit({ note })}
            />
          </div>
          {failed && (
            <div className="lg:order-9 lg:self-start">
              <ErrorBanner
                body={c.detail.editSaveFailed}
                className="lg:min-h-[56px]"
              />
            </div>
          )}
          <div className="lg:order-6 lg:self-start">
            <button
              type="button"
              disabled={saving || offline}
              onClick={saveEdit}
              className={`flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white ${
                saving || offline
                  ? "cursor-not-allowed opacity-45"
                  : "hover:bg-brand-deep"
              }`}
            >
              {saving
                ? c.shared.saving
                : failed
                  ? c.detail.trySavingAgain
                  : c.detail.saveChanges}
            </button>
          </div>
          {/* 759:139 keeps Replace file beside Save changes; W-39O drops it
              while the save error is on screen. */}
          {!failed && (
            <SecondaryButton
              label={c.detail.replaceFile}
              className={`lg:order-7 lg:h-[44px] lg:self-start ${saving || offline ? "opacity-45" : ""}`}
              onClick={() => setOverlay("replace-source")}
            />
          )}
        </div>

        {overlay === "type" && typeSheet(editForm.typeKey)}
        {overlay === "issue-date" && (
          /* W-39K Issue Date Picker (849:380) */
          <DateSheet
            title={c.add.issueDateOverlayTitle}
            helper={c.add.dateOverlayHelper}
            value={editForm.issued}
            placeholder={c.add.noDate}
            onChange={(issued) => updateEdit({ issued })}
            onClose={() => setOverlay(null)}
          />
        )}
        {overlay === "expiry-date" && (
          /* W-39L Expiry Date Picker (849:392) */
          <DateSheet
            title={c.add.expiryDateOverlayTitle}
            helper={c.add.dateOverlayHelper}
            value={editForm.expiry}
            placeholder={c.add.noExpiry}
            onChange={(expiry) => updateEdit({ expiry })}
            onClose={() => setOverlay(null)}
          />
        )}
        {overlay === "replace-source" && replaceSourceSheet}
        {leaveOpen && (
          /* W-39F Discard document changes? (759:359) */
          <ConfirmModal
            title={c.detail.unsavedTitle}
            body={c.detail.unsavedBody}
            safeLabel={c.shared.keepEditing}
            onSafe={() => setShowDiscard(false)}
            dangerLabel={c.shared.discardChanges}
            dangerTone="solid"
            onDanger={() => {
              setShowDiscard(false);
              setEditDirty(false);
              setPhase("view");
            }}
            onClose={() => setShowDiscard(false)}
          />
        )}
      </Screen>
    );
  }

  /* ── W-39 / W-39A / W-39G view ─────────────────────────────────────── */
  const offline = sv === "offline";

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <BackLink to="/worker/documents" label={c.shared.myDocuments} />
      <PageHeading
        title={editForm.name || doc.name}
        subtitle={offline ? c.detail.offlineSubtitle : subtitle}
      />

      {offline && (
        /* WD-39G 1025:550 runs this banner across the full 1080px content
           width; unlike the hub and add-form offline frames, W-39G 759:411 carries no
           Retry pill — editing is simply unavailable. */
        <div className="mt-[26px] max-w-[520px] lg:max-w-none">
          <OfflineBanner body={c.detail.offlineBody} />
        </div>
      )}

      {isVerified && doc.verified ? (
        /* W-39A Verified — read-only rows + report path */
        <div className="mt-[26px] grid gap-[8px] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <FilePreviewCard
            kind="verified"
            title={
              doc.verified.recordKind === "passport"
                ? c.detail.passportRecord
                : c.detail.residenceRecord
            }
            meta={
              doc.verified.recordKind === "passport"
                ? c.detail.linkedFromEmendaId
                : c.detail.linkedFromResidenceStatus
            }
          />
          {doc.verified.number && (
            <DetailRow label={c.detail.rowNumber} value={doc.verified.number} />
          )}
          <DetailRow
            label={c.detail.rowValidUntil}
            value={formatDisplayDate(doc.verified.validUntil, language)}
          />
          <DetailRow
            label={c.detail.rowSource}
            value={
              doc.verified.recordKind === "passport"
                ? c.detail.sourceVerifiedIdentity
                : c.detail.sourceResidenceStatus
            }
          />
          <AmberBanner
            title={c.detail.readOnlyTitle}
            body={c.detail.readOnlyBody}
            /* Figma 1025:105 — 90px read-only note, not stretched to its row. */
            className="mt-[10px] lg:mt-0 lg:min-h-[90px] lg:self-start"
          />
          <SecondaryButton
            label={c.detail.reportIncorrect}
            className="mt-[10px] lg:mt-0 lg:self-start"
            onClick={() => setPhase("issue")}
          />
        </div>
      ) : (
        /* W-39 Self-added — file card, rows, actions */
        <div className="mt-[26px] flex flex-col gap-[8px] lg:grid lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
          <div className="order-1 lg:order-none">
            <FilePreviewCard
              kind="document"
              title={file?.fileName ?? ""}
              meta={
                offline
                  ? `${c.detail.cachedPrefix} ${file?.fileMeta ?? ""}`
                  : `${file?.fileMeta} · ${c.detail.added} ${formatDisplayDate(file?.addedOn ?? "", language)}`
              }
              onClick={offline ? undefined : () => setPhase("file-preview")}
            />
          </div>
          <div className="order-7 mt-[10px] lg:order-none lg:mt-0 lg:self-start">
            <button
              type="button"
              disabled={offline}
              onClick={() => setPhase("edit")}
              className={`flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white ${
                offline ? "cursor-not-allowed opacity-45" : "hover:bg-brand-deep"
              }`}
            >
              {c.detail.editDetails}
            </button>
          </div>
          {!offline && (
            <div className="order-8 lg:order-none lg:self-start">
              <button
                type="button"
                onClick={() => setOverlay("replace-source")}
                className="flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d7e2dc] bg-white text-[12px] font-semibold text-brand hover:border-brand"
              >
                {c.detail.replaceFile}
              </button>
            </div>
          )}
          {!offline && (
            <button
              type="button"
              onClick={() => setShowDelete(true)}
              className="order-9 flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d7e2dc] bg-white text-[12px] font-semibold text-brand hover:bg-[#fdecea] lg:order-none lg:self-start lg:border-[#d6382e] lg:bg-transparent lg:text-[#c7261f]"
            >
              {c.detail.deleteDocument}
            </button>
          )}
          <div className="order-2 lg:order-none">
            <DetailRow
              label={c.detail.rowType}
              value={c.docType[editForm.typeKey]}
            />
          </div>
          <div className="order-3 lg:order-none">
            <DetailRow
              label={c.detail.rowNumber}
              value={editForm.number || "—"}
            />
          </div>
          {!offline && (
            <>
              <div className="order-4 lg:order-none">
                <DetailRow
                  label={c.detail.rowIssued}
                  value={
                    editForm.issued
                      ? formatDisplayDate(editForm.issued, language)
                      : c.add.noDate
                  }
                />
              </div>
              <div className="order-5 lg:order-none">
                <DetailRow
                  label={c.detail.rowExpiry}
                  value={
                    editForm.expiry
                      ? formatDisplayDate(editForm.expiry, language)
                      : c.add.noExpiry
                  }
                />
              </div>
              <div className="order-6 lg:order-none">
                <DetailRow
                  label={c.detail.rowNote}
                  value={editForm.note || "—"}
                />
              </div>
            </>
          )}
        </div>
      )}

      {overlay === "replace-source" && replaceSourceSheet}
      {(showDelete || sv === "delete-confirm") && (
        /* W-39E Delete this document? (759:311) */
        <ConfirmModal
          title={c.detail.deleteModalTitle}
          body={c.detail.deleteModalBody}
          safeLabel={c.detail.keepDocument}
          onSafe={() => setShowDelete(false)}
          dangerLabel={c.detail.deleteDocument}
          dangerTone="solid"
          onDanger={() => {
            setShowDelete(false);
            setPhase("deleted");
          }}
          onClose={() => setShowDelete(false)}
        />
      )}
    </div>
  );

  /* ── Shared overlays ───────────────────────────────────────────────── */
  function startReplace() {
    setOverlay(null);
    setPhase("replacing");
    window.setTimeout(() => {
      setFile(READY_FILE);
      setPhase("file-replaced");
    }, 1100);
  }

  function typeSheet(selected: DocTypeKey) {
    /* W-39J Document type (849:361) — its helper differs from the add sheet. */
    return (
      <OverlaySheet
        title={c.add.typeOverlayTitle}
        helper={c.detail.detailTypeOverlayHelper}
        options={DOC_TYPE_ORDER.map((key) => ({ key, label: c.docType[key] }))}
        selectedKey={selected}
        onSelect={(key) => {
          updateEdit({ typeKey: key as DocTypeKey });
          setOverlay(null);
        }}
        onClose={() => setOverlay(null)}
      />
    );
  }
}
