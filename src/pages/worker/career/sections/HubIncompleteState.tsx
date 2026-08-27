import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../career.copy";
import { CV_OWNER } from "../careerMock";

/** WD-21D "CV Incomplete": amber attention banner with solid CTA, draft
 *  My CV card, missing-details list card and a reassurance note. Each desktop
 *  column stacks independently (20px gap) — the reassurance line sits right
 *  under the amber banner instead of on a shared grid row. */
export function HubIncompleteState() {
  const c = useSectionCopy(CAREER_COPY);

  return (
    <div className="mt-[36px] flex max-w-[1080px] flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:col-start-1 lg:flex lg:flex-col lg:gap-[20px]">
        {/* Readiness attention (amber) */}
        <div className="rounded-[16px] border border-[#ead9a2] bg-[#fff6d8] px-[16px] py-[13px] lg:min-h-[114px] lg:px-[23px]">
          <p className="text-[14px] font-semibold text-[#8a5b00]">
            {c.hub.incomplete.bannerTitle}
          </p>
          <p className="mt-[9px] text-[12px] leading-[16px] text-[#806c43]">
            {c.hub.incomplete.bannerBody}
          </p>
          <Link
            to="/worker/career/experience"
            className="mt-[13px] flex h-[32px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green"
          >
            {c.hub.incomplete.completeCta}
          </Link>
        </div>

        {/* Reassurance note (plain text, no card) */}
        <p className="px-[16px] text-[11px] leading-[16px] text-[#65746d] lg:px-0">
          {c.hub.incomplete.note}
        </p>
      </div>

      <div className="contents lg:col-start-2 lg:flex lg:flex-col lg:gap-[20px]">
        {/* Current CV (draft) */}
        <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] pt-[13px] pb-[13px] lg:px-[23px] lg:pb-0">
          <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
            {c.hub.myCvTitle}
          </p>
          <p className="mt-[9px] text-[13px] leading-[16px] font-semibold text-[#17231f]">
            {CV_OWNER.name} · {c.hub.incomplete.draftLabel}
          </p>
          <p className="mt-[9px] text-[11px] leading-[14px] text-[#a46a00]">
            {c.hub.incomplete.notReady}
          </p>
          <Link
            to="/worker/career/edit"
            className="mt-[13px] flex h-[30px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint lg:mt-0"
          >
            {c.hub.editCv}
          </Link>
        </div>

        {/* Missing details */}
        <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] py-[13px] lg:min-h-[172px] lg:px-[23px]">
          <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
            {c.hub.incomplete.missingTitle}
          </p>
          <div className="mt-[16px] text-[13px] leading-[16px] text-[#65746d]">
            <p>• {c.hub.incomplete.missing1}</p>
            <p>• {c.hub.incomplete.missing2}</p>
            <p>• {c.hub.incomplete.missing3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
