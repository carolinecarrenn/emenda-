import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../career.copy";
import { CvFileCard, type UploadState } from "./sections/CvFileCard";
import { UploadPrivacyCard } from "./sections/UploadPrivacyCard";

/** Upload CV (Figma WD-22, node 994:521 · mobile W-22, 547:187).
 *  Sparse import screen: CV file picker card, grey privacy note, Cancel pill.
 *  "Choose file" runs the real W-22 → W-22A (uploading) → W-23 (review
 *  import) transition; the failure variants stay reachable at
 *  ?state=uploading (22A) · failed (22B) · unsupported (22C) · offline (22D)
 *  because they cannot be provoked from the prototype UI. */
export function UploadCvPage() {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();
  const raw = useScreenState();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const forced: UploadState | null =
    raw === "uploading" ||
    raw === "failed" ||
    raw === "unsupported" ||
    raw === "offline"
      ? raw
      : null;
  const state: UploadState = forced ?? (uploading ? "uploading" : "base");

  const handleChooseFile = () => {
    if (uploading) return;
    setUploading(true);
    timerRef.current = window.setTimeout(
      () => navigate("/worker/career/import"),
      1100,
    );
  };

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-3">
      <h1 className="text-[30px] leading-[1.25] font-bold text-ink lg:text-[32px]">
        {c.upload.title}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-ink-muted lg:text-[16px] lg:leading-[24px]">
        {state === "uploading"
          ? c.upload.uploadingSubtitle
          : state === "base"
            ? c.upload.subtitle
            : c.upload.chooseSubtitle}
      </p>

      {/* WD-22 desktop: two 520px columns that flow independently (18px row
          gaps), so the Cancel pill sits right under the privacy note rather
          than aligning with the taller file-picker column. */}
      <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
        <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
          <CvFileCard state={state} onChooseFile={handleChooseFile} />
        </div>
        <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
          {state === "uploading" ? (
            /* WD-22A right column: disabled uploading action */
            <button
              type="button"
              disabled
              className="flex h-[50px] w-full cursor-not-allowed items-center justify-center rounded-[14px] border border-[#dde5e0] bg-[#eef2ef] text-[14px] font-semibold text-[#9aa9a1]"
            >
              {c.upload.uploadingButton}
            </button>
          ) : (
            <>
              <UploadPrivacyCard />
              <Link
                to="/worker/career"
                className="flex h-[52px] w-full items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-lp-tint"
              >
                {common.action.cancel}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
