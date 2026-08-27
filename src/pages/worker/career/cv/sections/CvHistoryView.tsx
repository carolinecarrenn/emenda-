import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { CAREER_COPY, fillCopy } from "../../career.copy";
import { CV_SNAPSHOTS, CV_UPDATED_DATE } from "../../careerMock";

/** WD-24E CV history: mint current-master card and the immutable
 *  application-snapshots list with per-snapshot View pills. */
export function CvHistoryView() {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  return (
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      {/* WD-24E left column stacks on its own with a 19px gap. */}
      <div className="contents lg:col-start-1 lg:flex lg:flex-col lg:gap-[19px]">
      {/* Current master CV */}
      <div className="rounded-[16px] border border-[#cfe2d9] bg-[#eaf4ef] px-[16px] py-[13px] lg:min-h-[114px] lg:px-[23px]">
        <p className="text-[14px] font-semibold text-[#0b5842]">
          {c.cv.history.currentTitle}
        </p>
        <p className="mt-[11px] text-[12px] text-[#65746d]">
          {fillCopy(c.cv.updatedOn, {
            date: formatDisplayDate(CV_UPDATED_DATE, language),
          })}
        </p>
        <p className="mt-[11px] text-[12px] font-semibold text-[#0b5842]">
          {c.cv.history.usedFor}
        </p>
      </div>

      <Link
        to="/worker/career/cv"
        className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
      >
        {c.cv.history.backToMyCv}
      </Link>
      </div>

      {/* Application snapshots */}
      <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] py-[13px] lg:col-start-2 lg:row-start-1 lg:min-h-[212px] lg:px-[23px]">
        <p className="text-[14px] font-semibold text-[#17231f]">
          {c.cv.history.snapshotsTitle}
        </p>
        {CV_SNAPSHOTS.map((snapshot) => (
          <div
            key={snapshot.id}
            className="mt-[20px] flex items-start justify-between gap-3"
          >
            <div>
              <p className="text-[13px] font-semibold text-[#17231f]">
                {snapshot.employer} ·{" "}
                {formatDisplayDate(snapshot.date, language)}
              </p>
              <p className="mt-[7px] text-[11px] text-[#65746d]">
                {c.cv.history.snapshotMeta}
              </p>
            </div>
            <Link
              to={`/worker/career/cv?state=snapshot-${snapshot.id}`}
              className="flex h-[30px] w-[110px] shrink-0 items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-lp-tint"
            >
              {common.action.view}
            </Link>
          </div>
        ))}
        <p className="mt-[20px] text-[11px] text-[#65746d]">
          {c.cv.history.footer}
        </p>
      </div>
    </div>
  );
}
