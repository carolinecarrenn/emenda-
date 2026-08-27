import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { CvPreviewCard } from "./CvPreviewCard";

/** WD-24D offline: no-connection banner, the snapshot reassurance card and a
 *  disabled Download in the left column; the cached CV preview and "Back to
 *  Career & CV" in the right one. */
export function CvOfflineView() {
  const c = useSectionCopy(CAREER_COPY);

  return (
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <div className="min-h-[82px] rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-4 py-[14px] max-lg:order-1 lg:h-[70px]">
          <p className="text-[13px] leading-[16px] font-semibold text-[#17231f]">
            {c.cv.offline.bannerTitle}
          </p>
          <p className="mt-[7px] text-[11px] leading-[13px] text-[#65746d]">
            {c.cv.offline.bannerBody}
          </p>
        </div>

        {/* Snapshot reassurance — applications already sent stay untouched */}
        <div className="min-h-[82px] rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-4 py-[14px] max-lg:order-3 lg:h-[82px]">
          <p className="text-[13px] leading-[16px] font-semibold text-[#17231f]">
            {c.cv.snapshotTitle}
          </p>
          <p className="mt-[7px] text-[11px] leading-[13px] text-[#65746d]">
            {c.cv.offline.snapshotBody}
          </p>
        </div>

        <button
          type="button"
          disabled
          className="flex h-[50px] w-full cursor-not-allowed items-center justify-center rounded-[16px] border border-[#dde5e0] bg-[#eef2ef] text-[13px] font-semibold text-[#9aa9a1] max-lg:order-4"
        >
          {c.cv.offline.downloadUnavailable}
        </button>
      </div>

      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <div className="max-lg:order-2">
          <CvPreviewCard cached />
        </div>
        <Link
          to="/worker/career"
          className="flex h-[50px] w-full items-center justify-center rounded-[16px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#17231f] hover:bg-lp-tint max-lg:order-5"
        >
          {c.cv.backToCareer}
        </Link>
      </div>
    </div>
  );
}
