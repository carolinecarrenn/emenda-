import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { CAREER_COPY, fillCopy } from "../career.copy";
import { CV_OWNER, CV_UPDATED_DATE } from "../careerMock";

/** WD-21C offline: grey banner with Retry, cached My CV card with
 *  "View cached CV", cached career profile rows and a reconnect note. */
export function HubOfflineState() {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  return (
    <div className="mt-[36px] flex max-w-[1080px] flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        {/* Offline banner */}
        <div className="min-h-[106px] rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-[16px] lg:px-[23px] py-[13px] max-lg:order-1 lg:h-[106px]">
          <p className="text-[13px] font-semibold text-[#17231f]">
            {c.hub.offline.bannerTitle}
          </p>
          <p className="mt-[8px] text-[11px] text-[#65746d]">
            {c.hub.offline.bannerBody}
          </p>
          {/* Retry re-requests the hub, i.e. drops back to the connected W-21. */}
          <Link
            to="/worker/career"
            className="mt-[9px] flex h-[30px] w-[143px] items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
          >
            {common.action.retry}
          </Link>
        </div>

        {/* Cached career profile */}
        <div className="min-h-[162px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] py-[13px] max-lg:order-3 lg:h-[162px]">
          <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
            {c.hub.offline.cachedProfileTitle}
          </p>
          <div className="mt-[15px] text-[13px] leading-[16px] text-[#65746d]">
            <p>{c.hub.offline.cachedExperience}</p>
            <p>{c.hub.offline.cachedEducation}</p>
            <p>{c.hub.offline.cachedSkills}</p>
          </div>
        </div>
      </div>

      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        {/* Cached My CV */}
        <div className="min-h-[118px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] py-[13px] max-lg:order-2 lg:h-[118px]">
          <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
            {c.hub.myCvTitle}
          </p>
          <p className="mt-[10px] text-[13px] leading-[16px] font-semibold text-[#17231f]">
            {CV_OWNER.name} · {CV_OWNER.headline}
          </p>
          <p className="mt-[9px] text-[11px] leading-[13px] text-[#65746d]">
            {fillCopy(c.hub.offline.lastSynced, {
              date: formatDisplayDate(CV_UPDATED_DATE, language),
            })}
          </p>
          <Link
            to="/worker/career/cv?state=offline"
            className="mt-[3px] flex h-[24px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
          >
            {c.hub.offline.viewCachedCv}
          </Link>
        </div>

        {/* Offline note (plain text, no card) */}
        <p className="px-[16px] text-[11px] text-[#65746d] max-lg:order-4 lg:px-0">
          {c.hub.offline.note}
        </p>
      </div>
    </div>
  );
}
