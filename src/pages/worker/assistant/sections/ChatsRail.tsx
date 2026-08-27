import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { ASSISTANT_COPY } from "../assistant.copy";
import { ASSISTANT_CHATS } from "../assistantMock";
import { chatDateLabel } from "../chatDate";

/* Desktop "Chats" history rail (Figma WD-59 · node 1186:595): 300x744 white
   card, radius 16, border #d1ded6, 18px inset. 17px semibold "Chats" title,
   88x34 white "New" pill at y=12, 264x40 #f2f9f5 search field at y=60, then
   264x82 history cards from y=120, 10px apart — each with a 12px inset,
   an 18px title box, a 34px two-line preview and a 14px date. The active chat is
   highlighted mint (WD-59A). While the workspace shows chat history the rail
   adds the "Back" link beside the title and tags the newest chat RECENT
   (WD-59C · nodes 1204:320 / 1204:321). Desktop only — mobile demotes this to
   the separate chat-history screen behind the "Chats" button (W-59C). */
export function ChatsRail({
  activeChatId,
  historyView = false,
  onOpenChat,
  onNewChat,
  onSearch,
  onBack,
}: {
  activeChatId: string | null;
  /** WD-59C: the workspace is showing chat history. */
  historyView?: boolean;
  onOpenChat: (chatId: string) => void;
  onNewChat: () => void;
  onSearch: () => void;
  onBack: () => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  return (
    <aside className="hidden w-[300px] shrink-0 rounded-[16px] border border-lp-line bg-white lg:block lg:h-[744px]">
      <div className="px-[18px] pt-[12px]">
        <div className="flex h-[34px] items-center justify-between">
          <div className="flex items-baseline gap-[10px]">
            <h2 className="text-[17px] font-semibold text-lp-ink">{c.chats}</h2>
            {historyView && (
              <button
                type="button"
                onClick={onBack}
                className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
              >
                {common.action.back}
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onNewChat}
            className="h-[34px] w-[88px] rounded-[12px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:bg-lp-tint"
          >
            {c.newChat}
          </button>
        </div>

        <button
          type="button"
          onClick={onSearch}
          className="mt-[14px] flex h-[40px] w-full items-center rounded-[12px] border border-lp-line bg-lp-tint px-[11px] text-left text-[12px] text-lp-muted hover:border-lp-green"
        >
          {c.searchChats}
        </button>

        <div className="mt-[20px] space-y-[10px]">
          {ASSISTANT_CHATS.map((chat, index) => (
            <button
              key={chat.id}
              type="button"
              onClick={() => onOpenChat(chat.id)}
              className={`flex h-[82px] w-full flex-col rounded-[12px] border border-lp-line px-[12px] pt-[6px] text-left hover:border-lp-green ${
                activeChatId === chat.id ? "bg-lp-mint" : "bg-white"
              }`}
            >
              <p className="text-[13px] leading-[18px] font-semibold text-lp-ink">
                {chat.title}
              </p>
              {/* 264x34 preview slot — Figma centres one- and two-line
                  previews inside it so the date never moves. */}
              <span className="mt-[3px] flex h-[34px] items-center">
                <span className="line-clamp-2 text-[11px] leading-[13px] text-lp-muted">
                  {chat.preview}
                </span>
              </span>
              <span className="flex w-full items-center justify-between">
                <span className="text-[10px] leading-[14px] text-lp-muted">
                  {chatDateLabel(chat, c, language)}
                </span>
                {historyView && index === 0 && (
                  <span className="text-[11px] leading-[14px] font-semibold tracking-[0.02em] text-lp-green">
                    {c.recent}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
