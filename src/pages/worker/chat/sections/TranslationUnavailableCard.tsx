import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { DRAFT_MESSAGE } from "../chatMock";
import { ChatPrimaryButton } from "./chatUi";

/* W-58N — Translation Unavailable (1053:715). On mobile the untranslated
   draft stays in its own bubble (MessageBubble `untranslatedNote`) and this
   card is the 350px #fbe9e8 explanation docked above the composer, with the
   mint full-width "Retry translation" under it.
   Desktop WD-58N (1182:7824) keeps the single 716x220 mint panel. */
export function TranslationUnavailableCard({
  onRetry,
}: {
  onRetry?: () => void;
}) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <>
      <div className="flex flex-col gap-[12px] lg:hidden">
        <div className="rounded-[14px] bg-[#fbe9e8] px-[12px] py-[10px]">
          <p className="text-[12px] leading-[16px] font-semibold text-[#131f1a]">
            {c.unavailable.subtitle}
          </p>
          <p className="mt-[4px] text-[11px] leading-[15px] text-[#596b61]">
            {c.unavailable.body}
          </p>
        </div>
        <button
          type="button"
          onClick={onRetry}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#d9e1dc] bg-lp-tint text-[14px] leading-[18px] font-semibold text-[#0c5941] hover:bg-lp-mint"
        >
          {c.unavailable.retryTranslation}
        </button>
      </div>

      <div className="hidden min-h-[220px] rounded-[14px] border border-lp-line bg-[#f0f7f2] px-[17px] py-[12px] lg:block">
        <p className="text-[15px] leading-[24px] font-semibold text-[#0a4738]">
          {c.unavailable.title}
        </p>
        <p className="mt-[6px] text-[13px] leading-[22px] text-[#0a4738]">
          {DRAFT_MESSAGE}
        </p>
        <p className="mt-[2px] text-[11px] leading-[18px] font-semibold text-[#0a4738]">
          {c.unavailable.draftPreserved}
        </p>
        <p className="mt-[8px] text-[14px] leading-[22px] font-semibold text-[#0a4738]">
          {c.unavailable.subtitle}
        </p>
        <p className="mt-[8px] max-w-[650px] text-[12px] leading-[19px] text-lp-muted">
          {c.unavailable.body}
        </p>
        <ChatPrimaryButton
          onClick={onRetry}
          className="mt-[12px] h-[38px] w-full max-w-[180px]"
        >
          {c.unavailable.retryTranslation}
        </ChatPrimaryButton>
      </div>
    </>
  );
}
