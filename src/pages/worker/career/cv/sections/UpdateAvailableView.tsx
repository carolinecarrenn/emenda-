import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { VERIFIED_UPDATE } from "../../careerMock";

/** WD-24A update available: amber verified-update card — sentence-case
 *  eyebrow, the proposed employer/role line, supporting body and a solid
 *  Review update primary; white "Not now" beside it. */
export function UpdateAvailableView() {
  const c = useSectionCopy(CAREER_COPY);

  return (
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="rounded-[16px] border border-[#ead9a2] bg-[#fff6d8] px-4 py-[14px] lg:col-start-1 lg:row-start-1 lg:min-h-[158px]">
        <p className="text-[12px] leading-[16px] font-semibold text-[#9e6314]">
          {c.cv.updateAvailable.eyebrow}
        </p>
        <p className="mt-[5px] text-[15px] leading-[20px] font-semibold text-[#17231f]">
          {VERIFIED_UPDATE.employer} · {VERIFIED_UPDATE.role}
        </p>
        <p className="mt-[5px] text-[12px] leading-[16px] text-[#806c43]">
          {c.cv.updateAvailable.body}
        </p>
        <Link
          to="/worker/career/cv?state=review-update"
          className="mt-[6px] flex h-[46px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[14px] font-semibold text-white hover:bg-lp-green"
        >
          {c.cv.updateAvailable.reviewUpdate}
        </Link>
      </div>
      <Link
        to="/worker/career/cv"
        className="flex h-[52px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[14px] font-semibold text-[#0b5842] hover:bg-lp-tint lg:col-start-2 lg:row-start-1"
      >
        {c.cv.updateAvailable.notNow}
      </Link>
    </div>
  );
}
