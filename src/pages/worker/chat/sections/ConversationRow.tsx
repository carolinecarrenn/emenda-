import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import type { ChatConversation } from "../chatMock";
import { ChatAvatar, ChatBadge } from "./chatUi";

/* Hub conversation card (W-57A 1034:241 / 1034:250, read-only twin W-57E
   1034:498; desktop WD-57A 1182:6174 / 1182:6181).
   Mobile: 350x78 card, radius 14, px 12 / py 11, 10px gap, a 40px mint disc
   and a 56px summary block — 12/16 semibold name, 10/14 meta, 10/14 preview —
   with the 62x28 status pill centred on the right.
   Desktop: 1012x104 white card, bare 46px initials, 15px name, 12px meta,
   13px preview, 130px pill. */
export function ConversationRow({
  conversation,
  title,
  meta,
  to,
  interactive = true,
  badgeDesktopOnly = false,
}: {
  conversation: ChatConversation;
  title: string;
  meta: string;
  to: string;
  interactive?: boolean;
  /** W-57E drops the pill once the thread is read-only history; WD-57E keeps
   *  it, so on those rows the pill is hidden below lg only. */
  badgeDesktopOnly?: boolean;
}) {
  const c = useSectionCopy(CHAT_COPY);
  const badgeLabel =
    conversation.badge === "needs-reply" ? c.hub.needsReply : c.hub.oneUnread;

  const body = (
    <>
      <span className="lg:mt-[13px] lg:self-start">
        <ChatAvatar initials={conversation.initials} hubRow />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[15px] lg:leading-[22px]">
          {title}
        </span>
        <span className="mt-[2px] block truncate text-[10px] leading-[14px] text-lp-muted lg:text-[12px] lg:leading-[20px]">
          {meta}
        </span>
        <span className="mt-[2px] block truncate text-[10px] leading-[14px] text-lp-ink lg:mt-[5px] lg:text-[13px] lg:leading-[22px]">
          {conversation.preview}
        </span>
      </span>
      <span
        className={`lg:self-start lg:pt-[3px] ${
          badgeDesktopOnly ? "hidden lg:block" : ""
        }`}
      >
        <ChatBadge tone={conversation.badge}>{badgeLabel}</ChatBadge>
      </span>
    </>
  );

  const shell =
    "flex h-[78px] items-center gap-[10px] rounded-[14px] border border-[#d9e1dc] bg-white px-[12px] py-[11px] lg:h-[104px] lg:min-h-[104px] lg:items-start lg:gap-[16px] lg:border-lp-line lg:px-[19px] lg:pt-[14px] lg:pr-[41px] lg:pb-[16px]";

  if (!interactive) {
    return <div className={shell}>{body}</div>;
  }
  return (
    <Link to={to} className={`${shell} hover:border-lp-green`}>
      {body}
    </Link>
  );
}
