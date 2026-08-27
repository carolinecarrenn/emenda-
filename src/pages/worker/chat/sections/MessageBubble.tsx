import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { LANG_JA } from "../chatMock";
import type { ChatMessage } from "../chatMock";

/* Bilingual chat bubble — W-58 incoming 1051:455 / outgoing 1051:463.
   Mobile: the incoming bubble is a 326px white card (radius 16, #d9e1dc
   hairline) inset 24px from the right; the outgoing one is a 306px solid
   #08563f block inset 44px from the left. Both use px 12 / pt 10 / pb 9,
   a 3px stack gap, 8/11 semibold provenance labels, 11/15 message lines and
   a 1px translation rule (#d1dbd6bf incoming, #338066bf outgoing).
   Desktop WD-58 (1182:6477 / 1182:6483): manager #f2f9f5, worker #e8f5ed. */
export function MessageBubble({
  message,
  failed = false,
  cached = false,
  speakerLabel,
  /** W-58N 1053:715 — the draft that came back untranslated. */
  untranslatedNote,
  hiddenOnMobile = false,
}: {
  message: ChatMessage;
  failed?: boolean;
  cached?: boolean;
  speakerLabel?: string;
  untranslatedNote?: string;
  /** W-58I/W-58N set the worker turn aside while WD-58I/WD-58N keep it. */
  hiddenOnMobile?: boolean;
}) {
  const c = useSectionCopy(CHAT_COPY);
  const isWorker = message.side === "worker";

  const row = isWorker ? "justify-end" : "justify-start";
  const bubble = isWorker
    ? "w-[306px] max-w-full border-transparent bg-[#08563f] lg:w-[540px] lg:max-w-[540px] lg:border-lp-line lg:bg-lp-mint"
    : "w-[326px] max-w-full border-[#d9e1dc] bg-white lg:w-[520px] lg:max-w-[520px] lg:border-transparent lg:bg-lp-tint";

  const label = isWorker
    ? "text-[#dbf5e8] lg:text-lp-green"
    : "text-[#596b61] lg:text-lp-green";
  const translatedLabel = isWorker
    ? "text-[#dbf5e8] lg:text-lp-muted"
    : "text-[#596b61] lg:text-lp-muted";
  const bodyText = isWorker ? "text-white lg:text-lp-ink" : "text-[#131f1a]";
  const metaText = isWorker
    ? "text-[#dbf5e8] lg:text-lp-muted"
    : "text-[#596b61] lg:text-lp-muted";
  const divider = isWorker
    ? "bg-[rgba(51,128,102,0.75)] lg:bg-transparent"
    : "bg-[rgba(209,219,214,0.75)] lg:bg-transparent";

  const speaker =
    speakerLabel ?? (isWorker ? c.thread.labelWorker : c.thread.labelManager);
  const jp = (language: string) => (language === LANG_JA ? "ja" : undefined);

  const receipt = failed
    ? c.thread.notSent
    : cached
      ? c.thread.cached
      : c.thread.read;

  return (
    <div
      className={`flex w-full ${row} ${hiddenOnMobile ? "hidden lg:flex" : ""}`}
    >
      <div
        className={`rounded-[16px] border px-[12px] pt-[10px] pb-[9px] lg:rounded-[14px] lg:px-[14px] lg:pt-[9px] lg:pb-[7px] ${bubble}`}
      >
        <p className={`text-[8px] leading-[11px] font-semibold lg:text-[10px] lg:leading-[16px] ${label}`}>
          {speaker} · {c.thread.labelOriginal} · {message.originalLanguage}
        </p>
        <p
          lang={jp(message.originalLanguage)}
          className={`mt-[3px] text-[11px] leading-[15px] lg:mt-[2px] lg:text-[13px] lg:leading-[20px] ${bodyText}`}
        >
          {message.original}
        </p>

        <div className={`mt-[3px] h-px lg:mt-[8px] ${divider}`} aria-hidden />

        <p
          className={`mt-[3px] text-[8px] leading-[11px] font-semibold lg:mt-[8px] lg:text-[10px] lg:leading-[16px] ${translatedLabel}`}
        >
          {untranslatedNote === undefined
            ? `${c.thread.labelTranslated} · ${message.translatedLanguage}`
            : c.thread.labelTranslation}
        </p>
        <p
          lang={untranslatedNote === undefined ? jp(message.translatedLanguage) : undefined}
          className={`mt-[3px] text-[11px] leading-[15px] lg:mt-[2px] lg:text-[13px] lg:leading-[20px] ${bodyText}`}
        >
          {untranslatedNote ?? message.translated}
        </p>
        {untranslatedNote !== undefined && (
          <p className={`mt-[3px] text-[8px] leading-[11px] ${metaText}`}>
            {c.unavailable.draftPreserved}
          </p>
        )}

        {untranslatedNote === undefined && (
          <p
            className={`mt-[3px] text-[8px] leading-[11px] lg:mt-[6px] lg:text-[10px] lg:leading-[14px] ${metaText} ${
              isWorker ? "text-right" : ""
            }`}
          >
            {message.time} · {receipt}
          </p>
        )}
      </div>
    </div>
  );
}
