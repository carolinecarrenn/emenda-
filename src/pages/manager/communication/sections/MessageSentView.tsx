import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import { DELIVERY_RECORD, type ConversationSummary } from "../communicationData";
import { CommunicationPageHeader } from "./CommunicationPageHeader";
import {
  CommunicationButtonRow,
  CommunicationPrimaryLink,
  CommunicationSecondaryLink,
} from "./CommunicationButtons";
import { CommunicationPrivacyBand } from "./CommunicationPrivacyBand";

/* EM-07B Message Sent (797:237) · mobile: a mint "Sent" pill above four
   stacked cards — the mint recipient record ("Japanese original preserved /
   Indonesian translation delivered · 14:24"), a white "Delivery" card, the
   mint "Message record" card and the white "Next step" card — then the
   "Open Conversation" / "Create Follow-up if operationally needed" pair.

   MD-07B (1225:283–305) · desktop: one 920x390 white card, radius 14, with a
   280x40 mint #e3f0e8 radius-20 "SENT · DELIVERED" badge, a 24px #083d2d
   headline, a 13px #65746d line and three 230x86 metric cards (DELIVERED
   14:25 · ORIGINAL Preserved · TRANSLATION Delivered), followed by the CTA
   pair and the 920x72 mint boundary band. */
export function MessageSentView({
  conversation,
}: {
  conversation: ConversationSummary;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  const metrics = c.sent.metrics.map((metric, index) =>
    index === 0
      ? { ...metric, value: DELIVERY_RECORD.deliveredAtDesktop }
      : metric,
  );

  return (
    <div className="max-w-[1060px]">
      <CommunicationPageHeader
        tone="record"
        title={c.sent.title}
        desktopTitle={c.sent.titleDesktop}
        subtitle={c.sent.subtitle}
        desktopSubtitle={c.sent.subtitleDesktop}
      />

      {/* EM-07B · mobile */}
      <div className="mt-[30px] lg:hidden">
        <span className="flex h-[28px] w-fit min-w-[76px] items-center justify-center rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] text-[10px] font-semibold text-[#094033]">
          {c.sent.chip}
        </span>

        {/* 994:2906–2908 · the mint record card runs its two lines as one
            10px/14 #6e8a82 block under the 13px/17 name. */}
        <div className="mt-[16px] min-h-[92px] rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] pt-[14px] pb-[14px]">
          <p className="text-[13px] leading-[17px] font-semibold text-[#094033]">
            {conversation.name}
          </p>
          <p className="mt-[7px] text-[10px] leading-[14px] text-[#6e8a82]">
            {c.sent.deliveredLine1}
          </p>
          <p className="text-[10px] leading-[14px] text-[#6e8a82]">
            {fillCopy(c.sent.deliveredLine2, {
              time: DELIVERY_RECORD.deliveredAt,
            })}
          </p>
        </div>

        <div className="mt-[20px] min-h-[82px] rounded-[12px] border border-[#d6e3de] bg-white px-[14px] pt-[10px] pb-[12px]">
          <p className="text-[11px] leading-[20px] font-semibold text-[#094033]">
            {c.sent.deliveryTitle}
          </p>
          <p className="mt-[2px] text-[10px] leading-[19px] text-[#6e8a82]">
            {fillCopy(c.sent.deliveryLine1, {
              time: DELIVERY_RECORD.deliveredAt,
            })}
          </p>
          <p className="text-[10px] leading-[19px] text-[#6e8a82]">
            {c.sent.deliveryLine2}
          </p>
        </div>

        <div className="mt-[14px] min-h-[92px] rounded-[12px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] pt-[12px] pb-[12px]">
          <p className="text-[11px] leading-[20px] font-semibold text-[#094033]">
            {c.sent.recordTitle}
          </p>
          <p className="mt-[4px] text-[10px] leading-[22px] text-[#6e8a82]">
            {c.sent.recordBody}
          </p>
        </div>

        <div className="mt-[4px] min-h-[88px] rounded-[14px] border border-[#d6e3de] bg-white px-[14px] pt-[14px] pb-[14px]">
          <p className="text-[13px] leading-[17px] font-semibold text-[#094033]">
            {c.sent.nextStepTitle}
          </p>
          <p className="mt-[9px] text-[10px] leading-[14px] text-[#6e8a82]">
            {c.sent.nextStepBody}
          </p>
        </div>

        <div className="mt-[28px]">
          <CommunicationPrimaryLink
            to={`/manager/communication/${conversation.id}`}
            mobile="h-[46px] text-[11px]"
          >
            {c.sent.openConversation}
          </CommunicationPrimaryLink>
          <div className="mt-[22px]">
            <CommunicationSecondaryLink
              to="/manager/follow-up"
              mobile="h-[44px] text-[10px]"
            >
              {c.sent.createFollowUp}
            </CommunicationSecondaryLink>
          </div>
        </div>
      </div>

      {/* MD-07B · desktop */}
      <div className="hidden lg:mt-[60px] lg:block">
        {/* 1225:283–303 · the card opens 80px into the 1060 grid; only the
            badge is centred — headline, body, metrics and CTAs run from a
            140px inset. */}
        <div className="ml-[80px] max-w-[920px] rounded-[14px] border border-[#dbe3de] bg-white px-[40px] pt-[36px] pb-[34px]">
          <span className="mx-auto flex h-[40px] w-[280px] items-center justify-center rounded-[20px] bg-[#e3f0e8] text-[12px] font-semibold text-brand">
            {c.sent.badge}
          </span>
          <p className="mt-[34px] ml-[170px] text-[24px] leading-[36px] font-semibold text-brand-deep">
            {fillCopy(c.sent.headline, { name: conversation.name })}
          </p>
          <p className="mt-[5px] ml-[100px] max-w-[560px] text-[13px] leading-[20px] text-[#65746d]">
            {c.sent.body}
          </p>

          {/* 1225:288–299 · three 230px metric cards, not a full-width grid. */}
          <div className="mt-[9px] ml-[100px] grid w-[722px] max-w-full grid-cols-3 gap-[16px]">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="h-[86px] rounded-[10px] border border-[#dbe3de] bg-white px-[14px] py-[12px]"
              >
                <p className="text-[10px] font-semibold text-[#65746d] uppercase">
                  {metric.label}
                </p>
                <p className="mt-[6px] text-[21px] leading-[24px] font-semibold text-brand-deep">
                  {metric.value}
                </p>
                <p className="mt-[2px] text-[10px] text-[#65746d]">
                  {metric.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-[28px] ml-[100px] flex">
            <CommunicationButtonRow>
              <CommunicationPrimaryLink
                to={`/manager/communication/${conversation.id}`}
              >
                {c.sent.openConversation}
              </CommunicationPrimaryLink>
              <CommunicationSecondaryLink
                to="/manager/follow-up"
                desktopWidth="lg:w-[260px]"
              >
                {c.sent.createFollowUpDesktop}
              </CommunicationSecondaryLink>
            </CommunicationButtonRow>
          </div>
        </div>

        <div className="mt-[40px] ml-[80px] max-w-[920px]">
          <CommunicationPrivacyBand tone="record">
            {c.sent.boundaryDesktop}
          </CommunicationPrivacyBand>
        </div>
      </div>
    </div>
  );
}
