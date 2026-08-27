import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import {
  UPLOAD_FILE_NAME,
  UPLOAD_PROGRESS_PERCENT,
} from "../../careerMock";

export type UploadState =
  | "base"
  | "uploading"
  | "failed"
  | "unsupported"
  | "offline";

/** WD-22 "CV file" picker card and its 22A/22B/22C/22D variants:
 *  uploading progress bar, inline red error + Retry upload, unsupported-file
 *  error, offline error. "Choose file" / "Retry upload" run the real upload
 *  → review-import transition (W-22 → W-22A → W-23). */
export function CvFileCard({
  state,
  onChooseFile,
}: {
  state: UploadState;
  onChooseFile?: () => void;
}) {
  const c = useSectionCopy(CAREER_COPY);

  if (state === "uploading") {
    return (
      <div className="min-h-[156px] rounded-[16px] border border-line bg-[#f0f4f2] px-4 py-[14px] lg:h-[153px] lg:px-[16px]">
        <p className="text-[13px] leading-[16px] font-semibold text-ink">
          {UPLOAD_FILE_NAME}
        </p>
        <p className="mt-[7px] text-[12px] leading-[15px] text-ink-muted">
          {c.upload.uploadingStatus}
        </p>
        <div className="mt-[8px] h-[5px] w-full overflow-hidden rounded-full bg-[#dfe7e2]">
          <div
            className="h-full rounded-full bg-[#0c664b]"
            style={{ width: `${UPLOAD_PROGRESS_PERCENT}%` }}
          />
        </div>
        <p className="mt-[12px] text-[11px] leading-[13px] text-ink-muted">
          {c.upload.uploadingHint}
        </p>
      </div>
    );
  }

  const offline = state === "offline";
  const error =
    state === "failed"
      ? c.upload.failedError
      : state === "unsupported"
        ? c.upload.unsupportedError
        : null;

  const buttonLabel = offline
    ? c.upload.reconnectToUpload
    : state === "failed"
      ? c.upload.retryUpload
      : c.upload.chooseFile;

  /* W-22B/22D: the recovery action is a full-width 52px primary — solid green
     when a retry is possible, disabled sage while offline. W-22/22C keep the
     white outline "Choose file" pill. */
  const solid = offline || state === "failed";

  return (
    <div
      className={`rounded-[16px] border border-line px-4 py-[14px] ${
        offline ? "bg-[#eff4f1]" : "bg-white"
      } ${error || offline ? "min-h-[190px]" : "min-h-[176px]"}`}
    >
      <p className="text-[14px] font-semibold text-ink">
        {c.upload.fileCardTitle}
      </p>
      <p className="mt-[7px] text-[11px] text-ink-muted">{c.upload.fileMeta}</p>
      {error && <p className="mt-[7px] text-[11px] text-signal">{error}</p>}
      {offline && (
        <>
          <p className="mt-[7px] text-[11px] leading-[14px] text-ink">
            {c.upload.offlineStatusTitle}
          </p>
          <p className="text-[11px] leading-[14px] text-ink">
            {c.upload.offlineStatusBody}
          </p>
        </>
      )}
      <button
        type="button"
        disabled={offline}
        onClick={onChooseFile}
        className={`mt-[13px] flex w-full items-center justify-center rounded-[14px] text-[14px] font-semibold ${
          solid
            ? offline
              ? "h-[52px] cursor-not-allowed bg-[#7fa596] text-white"
              : "h-[52px] bg-[#0c664b] text-white hover:bg-lp-green"
            : "h-[46px] border border-line bg-white text-brand-deep hover:bg-lp-tint"
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
