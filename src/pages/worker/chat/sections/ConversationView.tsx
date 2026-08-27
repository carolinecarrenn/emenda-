import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { CHAT_COPY, fill } from "../chat.copy";
import type { ChatConversation } from "../chatMock";
import { ConversationListCard } from "./ConversationListCard";
import { ThreadCard } from "./ThreadCard";

/** Conversation screen — W-58 (1035:130) and its lettered variants.
 *  Mobile keeps the 170x28 "Chat ‹" back row (1035:170) above the 350px body:
 *  a 28/34 bold "Conversation" title, the 11/15 employer scope line and then
 *  the thread, which stretches so the composer stays docked at the bottom.
 *  Desktop WD-58 (1182:6412) is the two-pane messenger: a 350px Conversations
 *  card next to the 764px thread card. */
export function ConversationView({
  conversation,
  state,
}: {
  conversation: ChatConversation;
  state: string | null;
}) {
  const c = useSectionCopy(CHAT_COPY);
  const common = useCommonCopy();

  const subtitle =
    conversation.id === "support"
      ? fill(c.hub.subtitleSupport, { employer: EMPLOYER.name })
      : fill(c.hub.subtitle, { employer: EMPLOYER.name });

  return (
    <div className="flex min-h-[calc(100dvh-200px)] max-w-[1132px] flex-col pt-2 lg:block lg:min-h-0 lg:pt-0">
      {/* Back row + page title — W-58 1035:170 / 1051:446 / 1051:447 */}
      <div className="lg:hidden">
        <Link
          to="/worker/chat"
          className="flex h-[28px] w-[170px] items-center gap-[6px] py-[4px] text-[13px] font-semibold text-[#0b684f] hover:text-lp-button"
        >
          <span className="w-[142px]">{common.nav.chat}</span>
          <ChevronLeft size={20} strokeWidth={2} aria-hidden />
        </Link>
        <h1 className="mt-[10px] text-[28px] leading-[34px] font-bold text-lp-ink">
          {c.thread.title}
        </h1>
        <p className="mt-[10px] text-[11px] leading-[15px] text-lp-muted">
          {subtitle}
        </p>
      </div>

      <div className="mt-[10px] flex flex-1 flex-col lg:mt-0 lg:grid lg:grid-cols-[350px_minmax(0,764px)] lg:gap-[18px]">
        <ConversationListCard activeId={conversation.id} state={state} />
        <ThreadCard
          key={`${conversation.id}-${state ?? "base"}`}
          conversation={conversation}
          state={state}
        />
      </div>
    </div>
  );
}
