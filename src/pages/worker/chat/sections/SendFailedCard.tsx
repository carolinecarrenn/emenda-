import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { ChatPrimaryButton } from "./chatUi";

/* W-58B — Send Failed (1035:306): under the "Not sent" bubble sits a 350px
   #fbe9e8 card, radius 14, with a 12/16 semibold lead and the 11/15
   idempotency promise. The recovery lives at the bottom of the thread, so
   "Retry send" is its own docked control (SendFailedRetry).
   Desktop WD-58B (1182:6669) keeps both inside one red-bordered alert. */
export function SendFailedCard({ onRetry }: { onRetry?: () => void }) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <>
      <div className="rounded-[14px] bg-[#fbe9e8] px-[12px] py-[10px] lg:hidden">
        <p className="text-[12px] leading-[16px] font-semibold text-[#131f1a]">
          {c.sendFailed.title}
        </p>
        <p className="mt-[4px] text-[11px] leading-[15px] text-[#596b61]">
          {c.sendFailed.body}
        </p>
      </div>

      <div className="hidden min-h-[76px] rounded-[14px] border border-[#c72924] bg-[#fdedec] px-[16px] py-[10px] lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="text-[15px] leading-[22px] font-semibold text-[#c72924]">
            {c.sendFailed.title}
          </p>
          <p className="mt-[2px] max-w-[500px] text-[12px] leading-[17px] text-lp-muted">
            {c.sendFailed.body}
          </p>
        </div>
        <ChatPrimaryButton onClick={onRetry} className="h-[42px] w-[154px] shrink-0">
          {c.sendFailed.retrySend}
        </ChatPrimaryButton>
      </div>
    </>
  );
}

/** W-58B 1035:xxx — the mint full-width "Retry send" docked above the
 *  composer. Mobile only; WD-58B keeps its retry inside the alert. */
export function SendFailedRetry({ onRetry }: { onRetry?: () => void }) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <button
      type="button"
      onClick={onRetry}
      className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#d9e1dc] bg-lp-tint text-[14px] leading-[18px] font-semibold text-[#0c5941] hover:bg-lp-mint lg:hidden"
    >
      {c.sendFailed.retrySend}
    </button>
  );
}
