import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import type {
  ConversationSummary,
  MessageTemplate,
} from "../communicationData";
import { CommunicationPageHeader } from "./CommunicationPageHeader";
import {
  CommunicationButtonRow,
  CommunicationPrimaryLink,
  CommunicationSecondaryLink,
} from "./CommunicationButtons";
import { CommunicationPrivacyBand } from "./CommunicationPrivacyBand";

/* EM-07C Message Send Failed (797:289) · mobile: an outline "Failed" pill
   over the peach #fff0e9 "Delivery failed" card, the white "Draft preserved"
   card, the unbordered #fee8df "No success recorded" card whose title alone
   is #b83826, and the yellow #fff7d6 "Before retry" card, closing on three
   stacked CTAs — Retry from draft / Back to Conversation / Create Follow-up
   instead.

   MD-07C (1225:327–343) · desktop: a 920x440 white card, radius 14, opening
   on an 840x86 #fce8e0 banner whose 20px #c74a3d headline is "Message was
   not sent", then the "DRAFT PRESERVED" label over an 840x90 #f1f6f3 draft
   box, the "BEFORE RETRY" line, the three 42px CTAs, and the 920x72 mint
   boundary band. Nothing here reads as success. */
export function MessageFailedView({
  conversation,
  template,
}: {
  conversation: ConversationSummary;
  template: MessageTemplate;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="max-w-[1060px]">
      <CommunicationPageHeader
        tone="failed"
        title={c.failed.title}
        desktopTitle={c.failed.titleDesktop}
        subtitle={c.failed.subtitle}
        desktopSubtitle={c.failed.subtitleDesktop}
      />

      {/* EM-07C · mobile */}
      <div className="mt-[30px] lg:hidden">
        {/* 994:2941/2942 · the pill is a plain outline chip, its label in the
            same regular #094033 as the other 390px chips. */}
        <span className="flex h-[28px] w-fit min-w-[82px] items-center justify-center rounded-[14px] border border-[#d6e3de] bg-white px-[14px] text-[10px] text-[#094033]">
          {c.failed.chip}
        </span>

        <div className="mt-[16px] min-h-[88px] rounded-[14px] border border-[#d6e3de] bg-[#fff0e9] px-[14px] pt-[14px] pb-[16px]">
          <p className="text-[13px] leading-[17px] font-semibold text-[#094033]">
            {c.failed.failedTitle}
          </p>
          <p className="mt-[9px] text-[10px] leading-[14px] text-[#6e8a82]">
            {c.failed.failedBody}
          </p>
        </div>

        {/* 1021:18–20 · the 390px card states that the draft is kept; the
            draft itself is only printed in the MD-07C box below. */}
        <div className="mt-[24px] min-h-[88px] rounded-[12px] border border-[#d6e3de] bg-white px-[14px] pt-[12px] pb-[10px]">
          <p className="text-[11px] leading-[20px] font-semibold text-[#094033]">
            {c.failed.draftTitle}
          </p>
          <p className="mt-[4px] text-[10px] leading-[21px] text-[#6e8a82]">
            {c.failed.draftBody}
          </p>
        </div>

        <div className="mt-[12px] min-h-[76px] rounded-[12px] bg-[#fee8df] px-[14px] pt-[10px] pb-[12px]">
          <p className="text-[11px] leading-[20px] font-semibold text-[#b83826]">
            {c.failed.noSuccessTitle}
          </p>
          <p className="mt-[4px] text-[10px] leading-[19px] text-[#6e8a82]">
            {c.failed.noSuccessBody}
          </p>
        </div>

        <div className="mt-[12px] min-h-[86px] rounded-[14px] border border-[#d6e3de] bg-[#fff7d6] px-[14px] pt-[14px] pb-[14px]">
          <p className="text-[13px] leading-[17px] font-semibold text-[#094033]">
            {c.failed.beforeRetryTitle}
          </p>
          <p className="mt-[9px] text-[10px] leading-[14px] text-[#6e8a82]">
            {c.failed.beforeRetryLine1}
          </p>
          <p className="text-[10px] leading-[14px] text-[#6e8a82]">
            {c.failed.beforeRetryLine2}
          </p>
        </div>

        <div className="mt-[14px]">
          <CommunicationPrimaryLink
            to={`/manager/communication/compose?to=${conversation.id}`}
            mobile="h-[46px] text-[11px]"
          >
            {c.failed.retry}
          </CommunicationPrimaryLink>
          <div className="mt-[12px]">
            <CommunicationSecondaryLink
              to={`/manager/communication/${conversation.id}`}
              mobile="h-[46px] text-[11px]"
            >
              {c.failed.backToConversation}
            </CommunicationSecondaryLink>
          </div>
          <div className="mt-[10px]">
            <CommunicationSecondaryLink
              to="/manager/follow-up"
              mobile="h-[42px] text-[10px]"
            >
              {c.failed.followUpInstead}
            </CommunicationSecondaryLink>
          </div>
        </div>
      </div>

      {/* MD-07C · desktop */}
      <div className="hidden lg:mt-[50px] lg:block">
        <div className="ml-[80px] max-w-[920px] rounded-[14px] border border-[#dbe3de] bg-white px-[40px] pt-[36px] pb-[20px]">
          <div className="h-[86px] rounded-[12px] bg-[#fce8e0] px-[24px] pt-[22px]">
            <p className="text-[20px] leading-[24px] font-semibold text-[#c74a3d]">
              {c.failed.bannerTitle}
            </p>
            <p className="mt-[7px] text-[11px] text-[#65746d]">
              {c.failed.bannerBody}
            </p>
          </div>

          <p className="mt-[38px] text-[11px] font-semibold text-brand uppercase">
            {c.failed.draftLabelDesktop}
          </p>
          <div className="mt-[6px] h-[90px] rounded-[10px] bg-[#f1f6f3] px-[20px] py-[20px]">
            {template.originalLines.map((line) => (
              <p key={line} className="text-[12px] leading-[15px] text-[#141f1a]">
                {line}
              </p>
            ))}
          </div>

          <p className="mt-[28px] text-[11px] font-semibold text-brand uppercase">
            {c.failed.beforeRetryLabelDesktop}
          </p>
          <p className="mt-[8px] text-[11px] text-[#65746d]">
            {c.failed.beforeRetryDesktop}
          </p>

          <div className="mt-[38px]">
            <CommunicationButtonRow>
              <CommunicationPrimaryLink
                to={`/manager/communication/compose?to=${conversation.id}`}
              >
                {c.failed.retry}
              </CommunicationPrimaryLink>
              <CommunicationSecondaryLink
                to={`/manager/communication/${conversation.id}`}
              >
                {c.failed.backToConversation}
              </CommunicationSecondaryLink>
              <CommunicationSecondaryLink
                to="/manager/follow-up"
                desktopWidth="lg:w-[260px]"
              >
                {c.failed.followUpInstead}
              </CommunicationSecondaryLink>
            </CommunicationButtonRow>
          </div>
        </div>

        <div className="mt-[30px] ml-[80px] max-w-[920px]">
          <CommunicationPrivacyBand tone="record">
            {c.failed.boundaryDesktop}
          </CommunicationPrivacyBand>
        </div>
      </div>
    </div>
  );
}
