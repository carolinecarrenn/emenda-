import { Link } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { CHAT_COPY } from "../chat.copy";
import { CONVERSATIONS } from "../chatMock";
import type { ConversationId } from "../chatMock";
import { ChatAvatar, ChatBadge } from "./chatUi";

/* WD-58 left pane (1182:6453): 350x744 white "Conversations" card holding the
   two 330x104 thread rows; the open thread is highlighted mint. Desktop only —
   mobile W-58 replaces this pane with the Chat back-link. */
export function ConversationListCard({
  activeId,
  state,
}: {
  activeId: ConversationId;
  state: string | null;
}) {
  const c = useSectionCopy(CHAT_COPY);
  const common = useCommonCopy();
  const suffix = state ? `&state=${state}` : "";

  return (
    <div className="hidden rounded-[16px] border border-lp-line bg-white px-[10px] pt-[18px] pb-[10px] lg:block lg:h-[744px]">
      <p className="px-[10px] text-[18px] leading-[28px] font-semibold text-lp-ink">
        {c.hub.conversationsTitle}
      </p>
      <div className="mt-[13px] space-y-[12px]">
        {CONVERSATIONS.map((conversation) => {
          const active = conversation.id === activeId;
          const title = conversation.personName ?? c.hub.employerSupportDesk;
          const meta =
            conversation.id === "support"
              ? `${EMPLOYER.name} · ${c.hub.workAdminSupport}`
              : `${common.manager.facilityManager} · ${conversation.language}`;
          return (
            <Link
              key={conversation.id}
              to={`/worker/chat?c=${conversation.id}${suffix}`}
              className={`relative flex h-[104px] items-start gap-[14px] rounded-[14px] border border-lp-line px-[13px] pt-[11px] ${
                active ? "bg-lp-mint" : "bg-white hover:bg-lp-tint"
              }`}
            >
              <span className="mt-[8px]">
                <ChatAvatar
                  initials={conversation.initials}
                  size={42}
                  text={12}
                />
              </span>
              <span className="mt-[2px] min-w-0 flex-1 pr-[6px]">
                <span className="block truncate text-[14px] leading-[22px] font-semibold text-lp-ink">
                  {title}
                </span>
                <span className="block truncate text-[11px] leading-[18px] text-lp-muted">
                  {meta}
                </span>
                <span className="mt-[4px] block truncate text-[12px] leading-[26px] text-lp-ink">
                  {conversation.preview}
                </span>
              </span>
              <span className="absolute top-[12px] right-[14px]">
                <ChatBadge tone={conversation.badge} size="list">
                  {conversation.badge === "needs-reply"
                    ? c.hub.needsReply
                    : c.hub.oneUnread}
                </ChatBadge>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
