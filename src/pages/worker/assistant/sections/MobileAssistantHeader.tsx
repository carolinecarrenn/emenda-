import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "../assistant.copy";

/* Mobile Assistant top row (Figma W-59 · 1084:496): 72x38 white pill "Chats"
   button left, bold "Emenda Assistant" title centred, 80x38 white pill "New"
   right. On the chat-history screen (W-59C · 1084:912–918) the same row keeps
   its geometry but swaps the left pill to "Back" and the title to
   "Chat history". Mobile only — desktop carries the same actions inside the
   WD-59 rail card. */
export function MobileAssistantHeader({
  historyView = false,
  onOpenHistory,
  onNewChat,
  onBack,
}: {
  /** W-59C: the chat-history screen is showing. */
  historyView?: boolean;
  onOpenHistory: () => void;
  onNewChat: () => void;
  onBack: () => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);
  const common = useCommonCopy();

  const pill =
    "flex h-[38px] shrink-0 items-center justify-center rounded-[19px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green";

  return (
    <div className="flex items-center justify-between gap-2 lg:hidden">
      <button
        type="button"
        onClick={historyView ? onBack : onOpenHistory}
        className={`${pill} w-[72px]`}
      >
        {historyView ? common.action.back : c.chats}
      </button>
      <h1 className="truncate text-[17px] font-bold text-brand-deep">
        {historyView ? c.historyTitle : c.workspaceTitle}
      </h1>
      <button type="button" onClick={onNewChat} className={`${pill} w-[80px]`}>
        {c.newChat}
      </button>
    </div>
  );
}
