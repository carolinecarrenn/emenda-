import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import { CommunicationPageHeader } from "./CommunicationPageHeader";
import { CommunicationPrivacyBand } from "./CommunicationPrivacyBand";

/* Guard surface for an unknown :threadId. The manager permission model never
   invents a conversation the current facility context does not carry, so the
   route falls back to a neutral card rather than an empty thread.

   Section 04 has no dedicated Figma frame for the guard, so the desktop
   presentation follows the manager desktop boundary vocabulary of
   MD-STATE-03 Permission Restricted (1252:14139): the 30px title + 13px
   subtitle page chrome, one white radius-14 card at the MD-07C geometry
   (920px, 80px into the 1060 grid), a tinted notice band with a 20px
   semibold headline over an 11px #65746d line, the mint boundary band, then
   a 42px radius-9 CTA below the card. Mobile keeps the EM-scale card. */
export function ConversationNotFoundCard() {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="max-w-[1060px]">
      <CommunicationPageHeader
        tone="record"
        title={c.thread.notFoundTitle}
        subtitle={c.thread.notFoundSubtitle}
      />

      {/* EM · mobile */}
      <div className="mt-[18px] lg:hidden">
        <div className="rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[26px] text-center">
          <p className="text-[12px] font-semibold text-[#094033]">
            {c.thread.notFound}
          </p>
          <p className="mx-auto mt-[8px] max-w-[300px] text-[10px] leading-[16px] text-[#6e8a82]">
            {c.thread.notFoundBody}
          </p>
          <Link
            to="/manager/communication"
            className="mx-auto mt-[16px] flex h-[42px] w-[200px] items-center justify-center rounded-[12px] bg-[#06634f] text-[12px] font-semibold text-white hover:bg-brand-deep"
          >
            {c.thread.notFoundBack}
          </Link>
        </div>
        <p className="mt-[10px] text-[9px] leading-[14px] text-[#6e8a82]">
          {c.thread.notFoundBoundary}
        </p>
      </div>

      {/* MD-STATE-03 · desktop */}
      <div className="hidden lg:mt-[50px] lg:block">
        <div className="ml-[80px] max-w-[920px] rounded-[14px] border border-[#dbe3de] bg-white px-[40px] pt-[36px] pb-[34px]">
          <div className="rounded-[12px] bg-[#f1f6f3] px-[24px] pt-[22px] pb-[24px]">
            <p className="text-[20px] leading-[24px] font-semibold text-brand-deep">
              {c.thread.notFound}
            </p>
            <p className="mt-[7px] text-[11px] leading-[18px] text-[#65746d]">
              {c.thread.notFoundBody}
            </p>
          </div>

          <div className="mt-[28px]">
            <CommunicationPrivacyBand tone="record">
              {c.thread.notFoundBoundary}
            </CommunicationPrivacyBand>
          </div>
        </div>

        <div className="mt-[30px] ml-[80px]">
          <Link
            to="/manager/communication"
            className="flex h-[42px] w-[220px] items-center justify-start rounded-[9px] border border-[#dbe3de] bg-white px-4 text-[12px] font-semibold text-[#083d2d] hover:border-brand"
          >
            {c.thread.notFoundBack}
          </Link>
        </div>
      </div>
    </div>
  );
}
