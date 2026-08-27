import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { CAREER_COPY, fillCopy } from "../career.copy";
import {
  CV_OWNER,
  CV_UPDATED_DATE,
  WORK_PREFERENCES_SUMMARY,
} from "../careerMock";

/** WD-21 base hub content: mint readiness banner, My CV card, Career profile
 *  counts card, Work preferences row, amber verified-update banner.
 *  Desktop = two 520px columns · 40px gutter · 18px row gaps; mobile stacks
 *  in the W-21 order (banner → My CV → profile → prefs → update). */
export function HubBaseView() {
  const c = useSectionCopy(CAREER_COPY);
  const { language } = useLanguage();

  const profileRows = [
    {
      label: c.hub.rowExperience,
      value: c.hub.countExperience,
      to: "/worker/career/experience",
    },
    {
      label: c.hub.rowEducation,
      value: c.hub.countEducation,
      to: "/worker/career/education",
    },
    {
      label: c.hub.rowSkills,
      value: c.hub.countSkills,
      to: "/worker/career/skills",
    },
    {
      label: c.hub.rowQualifications,
      value: c.hub.countQualifications,
      to: "/worker/career/qualifications",
    },
  ];

  return (
    <div className="mt-[36px] flex max-w-[1080px] flex-col gap-[10px] lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      {/* Left column — the two columns flow independently in WD-21, so each
          is its own stack rather than a row-aligned grid. `contents` lets the
          cards fall back into the single mobile column in the W-21 order. */}
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
      {/* Application readiness */}
      <div className="order-1 min-h-[70px] rounded-[16px] border border-[#cfe2d9] bg-[#eaf4ef] px-[16px] lg:px-[23px] pt-[14px] pb-[17px]">
        <p className="text-[14px] leading-[17px] font-semibold text-[#0b5842]">
          {c.hub.readyTitle}
        </p>
        <p className="mt-[7px] text-[12px] leading-[15px] text-[#65746d]">
          {c.hub.readyBody}
        </p>
      </div>

      {/* Career profile counts */}
      <div className="order-3 rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[14px] pb-[15px] lg:min-h-[190px]">
        <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
          {c.hub.profileTitle}
        </p>
        <div className="mt-[7px]">
          {profileRows.map((row) => (
            <Link
              key={row.to}
              to={row.to}
              className="-mx-[9px] flex h-[31px] items-center justify-between rounded-[8px] px-[9px] hover:bg-lp-tint"
            >
              <span className="text-[13px] text-[#65746d]">{row.label}</span>
              <span className="text-[13px] text-[#17231f]">{row.value}</span>
            </Link>
          ))}
        </div>
        <p className="text-[11px] leading-[13px] text-[#65746d]">
          {c.hub.profileHint}
        </p>
      </div>

      {/* CV sources — the hub's fan-out into the W-22 upload/import pipeline
          and the W-30 "create from profile" flow. W-21 only draws these two
          entry points inside its "No CV yet" variant, but both capabilities
          belong to the worker at any time, so the hub keeps them reachable. */}
      <div className="order-6 rounded-[16px] border border-[#d5e0da] bg-white px-[16px] pt-[14px] pb-[15px] lg:px-[23px]">
        <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
          {c.hub.sources.title}
        </p>
        <p className="mt-[7px] text-[12px] leading-[16px] text-[#65746d]">
          {c.hub.sources.body}
        </p>
        <div className="mt-[12px] flex gap-[18px] lg:gap-[27px]">
          <Link
            to="/worker/career/upload"
            className="flex h-[32px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
          >
            {c.hub.sources.uploadCta}
          </Link>
          <Link
            to="/worker/career/create"
            className="flex h-[32px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
          >
            {c.hub.sources.createCta}
          </Link>
        </div>
      </div>
      </div>

      {/* Right column */}
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
      {/* My CV */}
      <div className="order-2 min-h-[112px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] pt-[14px] pb-0 lg:px-[23px]">
        <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
          {c.hub.myCvTitle}
        </p>
        <p className="mt-[8px] text-[13px] leading-[16px] font-semibold text-[#17231f]">
          {CV_OWNER.name} · {CV_OWNER.headline}
        </p>
        <p className="mt-[7px] text-[12px] leading-[15px] text-[#65746d]">
          {fillCopy(c.hub.updatedOn, {
            date: formatDisplayDate(CV_UPDATED_DATE, language),
          })}
        </p>
        <div className="mt-[3px] flex gap-[18px] lg:gap-[27px]">
          <Link
            to="/worker/career/cv"
            className="flex h-[32px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
          >
            {c.hub.viewCv}
          </Link>
          <Link
            to="/worker/career/edit"
            className="flex h-[32px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
          >
            {c.hub.editCv}
          </Link>
        </div>
      </div>

      {/* Work preferences row */}
      <Link
        to="/worker/career/preferences"
        className="relative order-4 block min-h-[76px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[14px] pb-[22px] hover:bg-lp-tint"
      >
        <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
          {c.hub.workPrefsTitle}
        </p>
        <p className="mt-[8px] text-[12px] leading-[15px] text-[#65746d]">
          {WORK_PREFERENCES_SUMMARY}
        </p>
        <ChevronRight
          size={16}
          strokeWidth={1.5}
          className="absolute top-1/2 right-[17px] -translate-y-1/2 text-[#65746d]"
        />
      </Link>

      {/* Verified work update */}
      {/* Verified work update — the Review pill is pinned to the card's
          right edge in both mocks (W-21 120×26 at y=48 · WD-21 168×34 at
          y=38), not stacked under the body copy. */}
      <div className="relative order-5 min-h-[78px] rounded-[16px] border border-[#ead9a2] bg-[#fff6d8] px-[16px] pt-[13px] pb-[6px] lg:px-[23px]">
        <p className="text-[13px] leading-[16px] font-semibold text-[#8a5b00]">
          {c.hub.updateTitle}
        </p>
        <p className="mt-[7px] max-w-[280px] text-[11px] leading-[16px] text-[#806c43]">
          {c.hub.updateBody}
        </p>
        <Link
          to="/worker/career/cv?state=update-available"
          className="absolute top-[48px] right-[16px] flex h-[26px] w-[120px] shrink-0 items-center justify-center rounded-[13px] border border-[#d5e0da] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-lp-tint lg:top-[38px] lg:right-[23px] lg:h-[34px] lg:w-[168px] lg:rounded-[17px] lg:text-[13px]"
        >
          {c.hub.reviewUpdate}
        </Link>
      </div>
      </div>
    </div>
  );
}
