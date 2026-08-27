import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CREATE_CV_COPY } from "../createCv.copy";

/* WD-30A Missing Data: two amber requirement cards (#fff9e8 / #e8d39a,
   #8a5a00 titles) with 36px action pills, then the availability hint and
   an outline "Back to Career & CV" pill. */
export function MissingDataState() {
  const c = useSectionCopy(CREATE_CV_COPY);

  return (
    <>
      <div className="mt-[38px] grid gap-[12px] lg:grid-cols-[520px_520px] lg:gap-4 lg:gap-x-[40px]">
        <div className="rounded-[16px] border border-[#e8d39a] bg-[#fff9e8] px-[16px] pt-[14px] pb-[14px] lg:px-[23px] lg:pt-[13px] lg:pb-[15px]">
          <p className="text-[14px] leading-[20px] font-semibold text-[#8a5a00]">
            {c.missing.experienceTitle}
          </p>
          <p className="mt-[8px] text-[12px] leading-[18px] text-[#65746d]">
            {c.missing.experienceBody}
          </p>
          <div className="mt-[10px] flex flex-row gap-[18px] lg:mt-[26px]">
            <Link
              to="/worker/career/experience"
              className="flex h-[36px] min-h-[36px] flex-1 items-center justify-center rounded-[12px] bg-[#0c664b] text-[12px] font-semibold text-white hover:bg-[#0b5842]"
            >
              {c.missing.addExperience}
            </Link>
            <Link
              to="/worker/career/education"
              className="flex h-[36px] min-h-[36px] flex-1 items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
            >
              {c.missing.addEducation}
            </Link>
          </div>
        </div>
        <div className="rounded-[16px] border border-[#e8d39a] bg-[#fff9e8] px-[16px] pt-[14px] pb-[14px] lg:px-[23px] lg:pt-[13px] lg:pb-[15px]">
          <p className="text-[14px] leading-[20px] font-semibold text-[#8a5a00]">
            {c.missing.skillsTitle}
          </p>
          <p className="mt-[8px] text-[12px] leading-[18px] text-[#65746d]">
            {c.missing.skillsBody}
          </p>
          <Link
            to="/worker/career/skills"
            className="mt-[10px] flex h-[36px] min-h-[36px] w-full items-center justify-center rounded-[12px] bg-[#0c664b] text-[12px] font-semibold text-white hover:bg-[#0b5842] lg:mt-[26px]"
          >
            {c.missing.addSkills}
          </Link>
        </div>
      </div>
      <div className="mt-[24px] grid gap-[18px] lg:mt-[18px] lg:grid-cols-[520px_520px] lg:gap-4 lg:gap-x-[40px]">
        <p className="text-[12px] leading-[18px] text-[#65746d]">
          {c.missing.hint}
        </p>
        <div>
          <Link
            to="/worker/career"
            className="flex h-[46px] w-full items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
          >
            {c.missing.backToCareer}
          </Link>
        </div>
      </div>
    </>
  );
}
