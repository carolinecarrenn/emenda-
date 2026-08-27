import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationSummary } from "../communicationData";
import { useConversationTime } from "./communicationTime";

/* MD-07 conversation column (1225:106–118): 300x620 white card, radius 12,
   #dbe3de hairline — a 14px #083d2d "Conversations" heading, a 260x36
   #f1f6f3 radius-9 mini search with a 10px #65746d placeholder, then 260x64
   radius-9 rows (open thread mint #e3f0e8, the rest white on #dbe3de)
   carrying a 12px #083d2d name over a 10px #65746d "14:23 · unread" meta.
   Desktop only — EM-07 is a single-column thread reached from EM-06. */
export function ThreadMiniList({
  conversations,
  activeId,
}: {
  conversations: ConversationSummary[];
  activeId: string;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const time = useConversationTime();

  return (
    <aside className="hidden lg:block lg:w-[300px] lg:shrink-0">
      <div className="h-[620px] rounded-[12px] border border-[#dbe3de] bg-white px-[20px] py-[22px]">
        <h2 className="text-[14px] font-semibold text-brand-deep">
          {c.thread.conversationsTitle}
        </h2>
        <div className="mt-[11px] flex h-[36px] items-center rounded-[9px] bg-[#f1f6f3] px-[16px]">
          <p className="text-[10px] text-[#65746d]">
            {c.thread.miniSearchPlaceholder}
          </p>
        </div>
        <div className="mt-[20px] space-y-[12px]">
          {conversations.map((conversation) => {
            const active = conversation.id === activeId;
            return (
              <Link
                key={conversation.id}
                to={`/manager/communication/${conversation.id}`}
                aria-current={active ? "page" : undefined}
                className={`block h-[64px] rounded-[9px] border px-[16px] py-[12px] ${
                  active
                    ? "border-[#e3f0e8] bg-[#e3f0e8]"
                    : "border-[#dbe3de] bg-white hover:border-brand"
                }`}
              >
                <p className="text-[12px] font-semibold text-brand-deep">
                  {conversation.name}
                </p>
                <p className="mt-[3px] text-[10px] text-[#65746d]">
                  {conversation.unreadCount > 0
                    ? fillCopy(c.thread.miniMetaUnread, {
                        time: time(conversation.timestamp),
                      })
                    : time(conversation.timestamp)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
