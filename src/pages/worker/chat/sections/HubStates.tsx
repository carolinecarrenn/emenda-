import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { ChatBlockAction } from "./chatUi";

/* W-57B — Loading (1034:310-313): four 350x78 skeleton rows on the body's
   12px rhythm. Desktop WD-57B keeps its taller 1012x92 rows. */
export function HubSkeletonList() {
  return (
    <div className="flex flex-col gap-[12px] lg:mt-[45px] lg:gap-[22px]" aria-hidden="true">
      {[0, 1, 2, 3].map((row) => (
        <div
          key={row}
          className="h-[78px] animate-pulse rounded-[14px] bg-[#eef1ee] lg:h-[90px]"
        />
      ))}
    </div>
  );
}

/* W-57C — No Conversations (1034:365-370): a 350x82 mint card carrying the
   scope sentence, then the full-width "Message manager" primary and the
   outlined "Employer support" secondary, each 350x46 on the 12px rhythm.
   Desktop WD-57C (1182:6280) keeps the centred 1012x240 white card. */
export function NoConversationsCard() {
  const c = useSectionCopy(CHAT_COPY);
  return (
    /* WD-57C 1182:6280 — one 1012x240 white card that also holds the CTAs
       (Message manager 1223:1706 sits at x=120 y=176 inside it); mobile keeps
       the mint card with the two full-width actions below it. */
    <div className="flex flex-col gap-[12px] lg:mt-[102px] lg:min-h-[240px] lg:gap-0 lg:rounded-[18px] lg:border lg:border-lp-line lg:bg-white lg:px-[28px] lg:pt-[60px] lg:pb-[22px]">
      <div className="rounded-[14px] border border-[#d9e1dc] bg-lp-tint px-[14px] pt-[12px] pb-[19px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
        <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-center lg:text-[20px] lg:leading-[34px]">
          {c.hub.emptyTitle}
        </p>
        <p className="mt-[5px] hidden text-[14px] leading-[22px] text-lp-muted lg:mx-auto lg:mt-[12px] lg:block lg:max-w-[772px] lg:text-center">
          {c.hub.emptyBody}
        </p>
        <p className="mt-[5px] text-[11px] leading-[15px] text-lp-muted lg:mx-auto lg:mt-[12px] lg:max-w-[772px] lg:text-[13px] lg:leading-[20px]">
          {c.hub.emptyHelper}
        </p>
      </div>

      <div className="contents lg:mx-auto lg:mt-[18px] lg:block lg:w-[772px] lg:max-w-full">
        <ChatBlockAction to="/worker/chat?c=sato" className="lg:h-[42px] lg:max-w-[210px]">
          {c.hub.messageManager}
        </ChatBlockAction>
        <ChatBlockAction
          to="/worker/chat?c=support"
          tone="secondary"
          className="lg:mt-[12px] lg:h-[42px] lg:max-w-[210px]"
        >
          {c.hub.employerSupport}
        </ChatBlockAction>
      </div>
    </div>
  );
}
