import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import { COMPOSE_CONTEXT, type ConversationSummary } from "../communicationData";

/* MD-08 context quad (1225:165 · 169 · 173 · 177): four 86px white cards,
   radius 10, #dbe3de hairline — a 10px semibold #65746d caps label, a 21px
   #083d2d value and a 10px #65746d caption. RECIPIENT carries the worker
   name and roster role, LANGUAGE the raw pair, MESSAGE TYPE "Direct" and
   CONTEXT the unread count. Desktop only. */
export function ComposeContextCards({
  conversation,
}: {
  conversation: ConversationSummary;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  const cards = [
    {
      label: c.compose.context.recipientLabel,
      value: conversation.name,
      caption: conversation.role,
    },
    {
      label: c.compose.context.languageLabel,
      value: conversation.languagePair,
      caption: c.compose.context.languageCaption,
    },
    {
      label: c.compose.context.messageTypeLabel,
      value: c.compose.context.messageTypeValue,
      caption: c.compose.context.messageTypeCaption,
    },
    {
      label: c.compose.context.contextLabel,
      value: fillCopy(c.compose.context.contextValue, {
        count: COMPOSE_CONTEXT.unreadCount,
      }),
      caption: c.compose.context.contextCaption,
    },
  ];

  return (
    <div className="hidden lg:grid lg:grid-cols-[250fr_250fr_250fr_262fr] lg:gap-[16px]">
      {cards.map((card) => (
        <div
          key={card.label}
          className="h-[86px] rounded-[10px] border border-[#dbe3de] bg-white px-[14px] py-[12px]"
        >
          <p className="text-[10px] font-semibold text-[#65746d] uppercase">
            {card.label}
          </p>
          <p className="mt-[6px] truncate text-[21px] leading-[24px] font-semibold text-brand-deep">
            {card.value}
          </p>
          <p className="mt-[2px] text-[10px] text-[#65746d]">{card.caption}</p>
        </div>
      ))}
    </div>
  );
}
