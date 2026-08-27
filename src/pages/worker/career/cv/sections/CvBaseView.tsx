import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { CvPreviewCard } from "./CvPreviewCard";

/** WD-24 base My CV content: CV preview on the left; snapshot note with
 *  View history, solid Edit CV, Download PDF and Back pills on the right. */
export function CvBaseView() {
  const c = useSectionCopy(CAREER_COPY);

  return (
    /* WD-24 desktop: two 520px columns flowing independently on an 18px
       rhythm — the right stack sits directly under the snapshot note instead
       of stretching to the height of the CV preview. */
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <CvPreviewCard />
      </div>

      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        {/* Applications use a snapshot */}
        <div className="relative flex items-center justify-between gap-3 rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-[16px] pt-[14px] pb-[14px] lg:block lg:min-h-[94px] lg:px-[23px]">
          <div>
            <p className="text-[13px] leading-[16px] font-semibold text-[#0b5842]">
              {c.cv.snapshotTitle}
            </p>
            <p className="mt-[9px] max-w-[294px] text-[11px] leading-[13px] text-[#65746d]">
              {c.cv.snapshotBody}
            </p>
          </div>
          <Link
            to="/worker/career/cv?state=history"
            className="flex h-[32px] w-[112px] shrink-0 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint lg:absolute lg:right-[24px] lg:bottom-[14px] lg:mt-0 lg:h-[28px] lg:w-[160px]"
          >
            {c.cv.viewHistory}
          </Link>
        </div>

        {/* W-24: Edit CV and Download PDF share one row on mobile. */}
        <div className="flex gap-[14px] lg:contents">
          <Link
            to="/worker/career/edit"
            className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green"
          >
            {c.cv.editCv}
          </Link>
          {/* System action — not wired in the prototype */}
          <div className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842]">
            {c.cv.downloadPdf}
          </div>
        </div>
        <Link
          to="/worker/career"
          className="flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
        >
          {c.cv.backToCareer}
        </Link>
      </div>
    </div>
  );
}
