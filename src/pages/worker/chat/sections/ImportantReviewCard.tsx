import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { IMPORTANT_REVIEW, LANG_ID, LANG_JA } from "../chatMock";
import { ChatGhostButton, ChatPrimaryButton } from "./chatUi";

/* W-58J — Important Translation Review (1035:963): the consent gate replaces
   the thread body and docks at the bottom. Mobile is a 350x66 mint context
   card (1051:899) over a 350px white card (1051:902) holding the
   "ORIGINAL · Bahasa Indonesia" / "TRANSLATION · 日本語" pair at 9/12 labels
   and 12/17 lines, then a 154px "Edit original" beside a 164px
   "Send translated", both 44px tall.
   Desktop WD-58J (1182:7405) is the 656x320 centred gate. */
export function ImportantReviewCard({
  onEdit,
  onSend,
  original = IMPORTANT_REVIEW.original,
  translation = IMPORTANT_REVIEW.translation,
}: {
  onEdit: () => void;
  onSend: () => void;
  /** The pair under review — defaults to the W-58J mock pair. */
  original?: string;
  translation?: string;
}) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <div className="w-full lg:mx-auto lg:max-w-[656px]">
      {/* Mobile context banner — W-58J 1051:899 */}
      <div className="rounded-[14px] border border-[#d9e1dc] bg-lp-tint px-[12px] py-[10px] lg:hidden">
        <p className="text-[12px] leading-[15px] font-semibold text-[#131f1a]">
          {c.review.title}
        </p>
        <p className="mt-[4px] text-[11px] leading-[14px] text-[#596b61]">
          {c.review.body}
        </p>
      </div>

      <div className="mt-[10px] rounded-[16px] border border-[#d9e1dc] bg-white px-[12px] py-[10px] lg:mt-0 lg:border-lp-line lg:px-[24px] lg:py-[20px]">
        <p className="hidden text-[18px] leading-[30px] font-semibold text-lp-ink lg:block">
          {c.review.title}
        </p>
        <p className="hidden text-[13px] leading-[20px] text-lp-muted lg:mt-[4px] lg:block">
          {c.review.body}
        </p>

        <div className="lg:mt-[16px] lg:min-h-[70px] lg:rounded-[12px] lg:bg-lp-tint lg:px-[14px] lg:py-[8px]">
          <p className="text-[9px] leading-[12px] font-semibold text-[#596b61] lg:text-[10px] lg:leading-[16px] lg:text-lp-green">
            {c.thread.labelOriginal} · {LANG_ID}
          </p>
          <p className="mt-[4px] text-[12px] leading-[17px] text-[#131f1a] lg:text-[14px] lg:leading-[24px]">
            {original}
          </p>
        </div>

        <div className="mt-[4px] h-px bg-[rgba(209,219,214,0.75)] lg:hidden" aria-hidden />

        <div className="mt-[4px] lg:mt-[12px] lg:min-h-[70px] lg:rounded-[12px] lg:bg-lp-tint lg:px-[14px] lg:py-[8px]">
          <p className="text-[9px] leading-[12px] font-semibold text-[#596b61] lg:text-[10px] lg:leading-[16px]">
            {c.thread.labelTranslation} · {LANG_JA}
          </p>
          <p
            lang="ja"
            className="mt-[4px] text-[12px] leading-[17px] text-[#131f1a] lg:text-[14px] lg:leading-[24px]"
          >
            {translation}
          </p>
        </div>

        <div className="mt-[14px] flex gap-[8px] lg:mt-[16px] lg:justify-between lg:gap-0">
          <ChatGhostButton
            onClick={onEdit}
            className="h-[44px] w-[154px] shrink-0 lg:h-[40px] lg:w-[180px]"
          >
            {c.review.editOriginal}
          </ChatGhostButton>
          <ChatPrimaryButton
            onClick={onSend}
            className="h-[44px] min-w-0 flex-1 lg:h-[40px] lg:w-[216px] lg:flex-none"
          >
            {c.review.sendTranslated}
          </ChatPrimaryButton>
        </div>
      </div>
    </div>
  );
}
