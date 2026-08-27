import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../career.copy";

/** WD-21B "No CV Yet": amber readiness banner, mint Upload-CV card with solid
 *  primary, white Create-CV card, grey-tinted privacy note. Each desktop
 *  column stacks on its own with a 20px gap — the cards are not tied to a
 *  shared grid row, so the Create card sits right under the amber banner. */
export function HubNoCvState() {
  const c = useSectionCopy(CAREER_COPY);

  return (
    <div className="mt-[36px] flex max-w-[1080px] flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:col-start-1 lg:flex lg:flex-col lg:gap-[20px]">
        {/* CV readiness (amber) */}
        <div className="rounded-[16px] border border-[#ead9a2] bg-[#fff6d8] px-[16px] py-[13px] lg:min-h-[70px] lg:px-[23px]">
          <p className="text-[14px] font-semibold text-[#8a5b00]">
            {c.hub.noCv.bannerTitle}
          </p>
          <p className="mt-[8px] text-[12px] leading-[16px] text-[#806c43]">
            {c.hub.noCv.bannerBody}
          </p>
        </div>

        {/* Create from career profile */}
        <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] py-[13px] lg:min-h-[124px] lg:px-[23px]">
          <p className="text-[14px] font-semibold text-[#17231f]">
            {c.hub.noCv.createTitle}
          </p>
          <p className="mt-[9px] text-[12px] leading-[16px] text-[#65746d]">
            {c.hub.noCv.createBody}
          </p>
          <Link
            to="/worker/career/create"
            className="mt-[14px] flex h-[38px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
          >
            {c.hub.noCv.createCta}
          </Link>
        </div>
      </div>

      <div className="contents lg:col-start-2 lg:flex lg:flex-col lg:gap-[20px]">
        {/* Start with existing CV (mint) */}
        <div className="rounded-[16px] border border-[#cfe2d9] bg-[#eaf4ef] px-[16px] py-[13px] lg:min-h-[124px] lg:px-[23px]">
          <p className="text-[14px] font-semibold text-[#0b5842]">
            {c.hub.noCv.uploadTitle}
          </p>
          <p className="mt-[9px] text-[12px] leading-[16px] text-[#65746d]">
            {c.hub.noCv.uploadBody}
          </p>
          <Link
            to="/worker/career/upload"
            className="mt-[14px] flex h-[38px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green"
          >
            {c.hub.noCv.uploadCta}
          </Link>
        </div>

        {/* Privacy note */}
        <div className="rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-[16px] py-[13px] lg:min-h-[76px] lg:px-[23px]">
          <p className="text-[13px] font-semibold text-[#0b5842]">
            {c.hub.noCv.privacyTitle}
          </p>
          <p className="mt-[8px] text-[11px] leading-[16px] text-[#65746d]">
            {c.hub.noCv.privacyBody}
          </p>
        </div>
      </div>
    </div>
  );
}
