import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { CAREER_COPY, fillCopy } from "../../career.copy";
import { CV_OWNER, type CvSnapshot } from "../../careerMock";

/** WD-24F/24G locked submitted snapshot for one employer: read-only CV copy
 *  with "cannot be edited" caption, Download submitted PDF and a solid
 *  Back to CV history. */
export function SnapshotView({ snapshot }: { snapshot: CvSnapshot }) {
  const c = useSectionCopy(CAREER_COPY);
  const { language } = useLanguage();
  const date = formatDisplayDate(snapshot.date, language);

  const rows = [
    { label: c.cv.rowExperience, value: c.cv.countExperience },
    { label: c.cv.rowEducation, value: c.cv.countEducation },
    { label: c.cv.rowSkills, value: c.cv.countSkills },
    { label: c.cv.rowLanguages, value: c.cv.countLanguages },
  ];

  return (
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      {/* Submitted snapshot */}
      <div className="rounded-[16px] border border-[#d1ddd7] bg-white px-[16px] py-[17px] lg:col-start-1 lg:row-start-1 lg:min-h-[300px] lg:px-[23px]">
        <p className="text-[18px] font-semibold text-[#17231f]">
          {CV_OWNER.displayName}
        </p>
        <p className="mt-[11px] text-[13px] text-[#65746d]">
          {CV_OWNER.headlineLocation}
        </p>
        <p className="mt-[9px] text-[12px] text-[#65746d]">
          {fillCopy(c.cv.snapshot.submittedLine, {
            date,
            employer: snapshot.employer,
          })}
        </p>
        <div className="mt-[14px]">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid h-[34px] grid-cols-[187px_1fr] items-center"
            >
              <span className="text-[13px] text-[#17231f]">{row.label}</span>
              <span className="text-[13px] text-[#17231f]">{row.value}</span>
            </div>
          ))}
        </div>
        <p className="mt-[10px] text-[12px] font-semibold text-[#0b5842]">
          {c.cv.snapshot.caption}
        </p>
      </div>

      <div className="contents lg:col-start-2 lg:row-start-1 lg:flex lg:flex-col lg:gap-[21px]">
        {/* System action — not wired in the prototype */}
        <div className="flex h-[48px] w-full items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842]">
          {c.cv.snapshot.downloadPdf}
        </div>
        <Link
          to="/worker/career/cv?state=history"
          className="flex h-[46px] w-full items-center justify-center rounded-[12px] bg-[#0c664b] text-[12px] font-semibold text-white hover:bg-lp-green"
        >
          {c.cv.snapshot.backToHistory}
        </Link>
      </div>
    </div>
  );
}
