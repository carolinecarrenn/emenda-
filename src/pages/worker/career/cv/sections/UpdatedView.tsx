import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY, fillCopy } from "../../career.copy";
import { VERIFIED_UPDATE } from "../../careerMock";

/** WD-24C updated: mint success card naming the added record, then the
 *  "View updated CV" primary with "Back to Career & CV" 18px under it. */
export function UpdatedView() {
  const c = useSectionCopy(CAREER_COPY);

  return (
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="rounded-[16px] border border-[#cfe2d9] bg-[#eaf4ef] px-4 py-[14px] lg:col-start-1 lg:row-start-1 lg:min-h-[110px]">
        <p className="text-[15px] leading-[20px] font-semibold text-[#0b5842]">
          {c.cv.updated.title}
        </p>
        <p className="mt-[7px] text-[12px] leading-[16px] text-[#65746d]">
          {fillCopy(c.cv.updated.body, {
            item: `${VERIFIED_UPDATE.employer} · ${VERIFIED_UPDATE.role}`,
          })}
        </p>
      </div>
      <div className="contents lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-[18px]">
        <Link
          to="/worker/career/cv"
          className="flex h-[52px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[14px] font-semibold text-white hover:bg-lp-green"
        >
          {c.cv.updated.viewCta}
        </Link>
        <Link
          to="/worker/career"
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[14px] font-semibold text-[#0b5842] hover:bg-lp-tint"
        >
          {c.cv.backToCareer}
        </Link>
      </div>
    </div>
  );
}
