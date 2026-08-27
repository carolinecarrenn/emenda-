import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { CAREER_COPY, fillCopy } from "../../career.copy";
import { CV_OWNER, CV_UPDATED_DATE } from "../../careerMock";

/** WD-24 CV preview card: PUTRI RAHAYU · headline · updated date ·
 *  label/value rows · green readiness caption. `cached` renders the smaller
 *  WD-24D offline variant without the caption. */
export function CvPreviewCard({ cached = false }: { cached?: boolean }) {
  const c = useSectionCopy(CAREER_COPY);
  const { language } = useLanguage();

  const rows = [
    { label: c.cv.rowExperience, value: c.cv.countExperience },
    { label: c.cv.rowEducation, value: c.cv.countEducation },
    { label: c.cv.rowSkills, value: c.cv.countSkills },
    { label: c.cv.rowLanguages, value: c.cv.countLanguages },
  ];

  return (
    <div
      className={`rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[16px] pb-[15px] ${
        cached ? "min-h-[254px] lg:h-[250px]" : "min-h-[286px]"
      }`}
    >
      <p className="text-[20px] leading-[24px] font-semibold text-[#17231f]">
        {CV_OWNER.displayName}
      </p>
      <p className="mt-[8px] text-[13px] leading-[16px] text-[#65746d]">
        {CV_OWNER.headlineLocation}
      </p>
      <p className="mt-[10px] text-[12px] leading-[15px] text-[#65746d]">
        {fillCopy(c.cv.updatedOn, {
          date: formatDisplayDate(CV_UPDATED_DATE, language),
        })}
      </p>
      <div className={cached ? "mt-[10px]" : "mt-[12px]"}>
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex items-center justify-between ${
              cached ? "h-[30px] lg:h-[37px]" : "h-[39px]"
            }`}
          >
            <span className="text-[13px] text-[#65746d]">{row.label}</span>
            <span className="text-[13px] text-[#17231f]">{row.value}</span>
          </div>
        ))}
      </div>
      {!cached && (
        <p className="mt-[2px] text-[11px] leading-[13px] font-semibold text-[#0b5842]">
          {c.cv.readyCaption}
        </p>
      )}
    </div>
  );
}
