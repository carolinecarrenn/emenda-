import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationThread } from "../communicationData";
import { useConversationTime } from "./communicationTime";

/* EM-07 status strip (797:90): a full-width mint #e8f5f0 bar, radius 12,
   printing "1 unread · last activity 14:23" left and
   "JA ↔ ID · Translate ON" right (994:2752–2754), both 10px semibold #094033
   on a 40px bar at a 12px inset — the pair itself is data, only the wrapper
   wording localizes. Mobile only. */
export function ThreadStatusStrip({ thread }: { thread: ConversationThread }) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const time = useConversationTime();

  return (
    <div className="flex min-h-[40px] flex-wrap items-center justify-between gap-x-[10px] gap-y-[4px] rounded-[12px] bg-[#e8f5f0] px-[12px] py-[6px] lg:hidden">
      <p className="text-[10px] leading-[14px] font-semibold text-[#094033]">
        {fillCopy(c.thread.statusLeft, {
          count: thread.unreadCount,
          time: time(thread.lastActivity),
        })}
      </p>
      <p className="text-[10px] leading-[14px] font-semibold text-[#094033]">
        {fillCopy(c.thread.statusRight, { pair: thread.languagePair })}
      </p>
    </div>
  );
}
