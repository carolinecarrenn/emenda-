import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationSummary, ConversationThread } from "../communicationData";
import { useConversationTime } from "./communicationTime";

/* MD-07 chat-pane header (1225:120–124): an 18px #083d2d name over an 11px
   #65746d "Care Assistant · Bahasa Indonesia · Sakura Care Facility" line,
   a 104x32 radius-16 #e3f0e8 "Translate ON" pill pinned right, and a 10px
   #65746d meta line "1 unread · Last worker activity 14:23 · Response target
   < 30 min". Desktop only — EM-07 collapses all of it into the status
   strip. */
export function ThreadHeader({
  conversation,
  thread,
}: {
  conversation: ConversationSummary;
  thread: ConversationThread;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const time = useConversationTime();

  return (
    <div className="hidden lg:block">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[18px] font-semibold text-brand-deep">
            {conversation.name}
          </p>
          <p className="text-[11px] text-[#65746d]">
            {fillCopy(c.thread.contextLine, {
              role: conversation.role,
              language: conversation.language,
              facility: EMPLOYER.facility,
            })}
          </p>
        </div>
        <span className="flex h-[32px] w-[104px] shrink-0 items-center justify-start rounded-[16px] border border-[#e3f0e8] bg-[#e3f0e8] px-[14px] text-[10px] font-semibold text-brand-deep">
          {c.thread.translateOn}
        </span>
      </div>
      <p className="mt-[13px] text-[10px] text-[#65746d]">
        {fillCopy(c.thread.desktopMeta, {
          count: thread.unreadCount,
          time: time(thread.lastActivity),
        })}
      </p>
    </div>
  );
}
