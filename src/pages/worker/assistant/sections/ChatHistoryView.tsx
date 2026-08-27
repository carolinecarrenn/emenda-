import { useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { ASSISTANT_COPY } from "../assistant.copy";
import { ASSISTANT_CHATS } from "../assistantMock";
import { chatDateLabel } from "../chatDate";

/* Chat history (Figma WD-59C · 1186:848 desktop and W-59C · 1084:831 mobile).
   Desktop: the workspace title becomes "Chat history" and the body shows a
   24px bold "Your chats" heading, a 746x44 #f2f9f5 "Search conversations"
   field and 746x92 white conversation rows (15px semibold title · 13px muted
   preview · right-aligned 11px relative date).
   Mobile (1102:423–438): the same list as its own screen behind the "Chats"
   button — 22px bold "Your chats", a 350x44 WHITE radius-22 pill holding the
   same "Search conversations" placeholder, a muted RECENT group label, then
   350x76 radius-14 rows that stack title (12px semibold) · preview (10px) ·
   date (9px) in one left-aligned column, 3px apart, 12px between rows. */
export function ChatHistoryView({
  onOpenChat,
}: {
  onOpenChat: (chatId: string) => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);
  const { language } = useLanguage();
  const [query, setQuery] = useState("");

  const needle = query.trim().toLowerCase();
  const chats = needle
    ? ASSISTANT_CHATS.filter(
        (chat) =>
          chat.title.toLowerCase().includes(needle) ||
          chat.preview.toLowerCase().includes(needle),
      )
    : ASSISTANT_CHATS;

  return (
    <div>
      <h2 className="text-[22px] leading-[28px] font-bold text-lp-ink lg:text-[24px] lg:leading-[34px]">
        {c.yourChats}
      </h2>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={c.searchConversations}
        aria-label={c.searchConversations}
        className="mt-[12px] h-[44px] w-full rounded-[22px] border border-lp-line bg-white px-[14px] text-[11px] text-lp-ink outline-none placeholder:text-lp-muted focus:border-lp-green lg:mt-[14px] lg:max-w-[746px] lg:rounded-[12px] lg:bg-lp-tint lg:text-[13px]"
      />

      <p className="mt-[20px] text-[10px] leading-[13px] font-semibold text-lp-muted lg:hidden">
        {c.recent}
      </p>

      <div className="mt-[9px] space-y-[12px] lg:mt-[36px] lg:space-y-[16px]">
        {chats.map((chat) => (
          <button
            key={chat.id}
            type="button"
            onClick={() => onOpenChat(chat.id)}
            className="flex h-[76px] w-full flex-col items-start gap-[3px] rounded-[14px] border border-lp-line bg-white px-[12px] pt-[11px] pb-[10px] text-left hover:border-lp-green lg:h-auto lg:min-h-[92px] lg:max-w-[746px] lg:flex-row lg:justify-between lg:gap-4 lg:px-[18px] lg:py-[12px] lg:pr-[26px]"
          >
            <div className="min-w-0">
              <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[15px] lg:leading-[22px]">
                {chat.title}
              </p>
              <p className="mt-[3px] text-[10px] leading-[14px] text-lp-muted lg:mt-[4px] lg:text-[13px] lg:leading-[24px]">
                {chat.preview}
              </p>
            </div>
            <span className="shrink-0 text-[9px] leading-[12px] text-lp-muted lg:mt-[8px] lg:text-[11px] lg:leading-[20px]">
              {chatDateLabel(chat, c, language)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
