import { ArrowUp, Mic, Plus, Send } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "../assistant.copy";
import { MicIcon } from "./MicIcon";

/* Pinned composer (Figma WD-59 · 1186:624 desktop and W-59 · 1084:496 mobile).
   Desktop: a 746x52 white pill (radius 26, border #d1ded6) with a 36px mint
   "+" circle at inset 8, the "Ask Emenda" placeholder, a mint mic circle at
   x=654 and a #056b54 round paper-plane send button at x=700.
   Mobile: the same pill fixed 24px above the bottom navigation, with a bare
   green plus, a mic glyph and a #0c5941 circular up-arrow send.
   The send button keeps full saturation in every Figma state — WD-59 with an
   empty composer, WD-59F offline and WD-59G after a failed send all draw it
   solid — so `sendDisabled` / `flatSend` only drop the hover affordance. */
export function AssistantComposer({
  placeholder,
  value,
  onValueChange,
  onSend,
  sendDisabled = false,
  flatSend = false,
  onAddAttachment,
  onVoiceInput,
  className = "",
}: {
  placeholder: string;
  value: string;
  onValueChange: (next: string) => void;
  onSend: () => void;
  /** Nothing typed yet — the button cannot submit. */
  sendDisabled?: boolean;
  /** WD-59F / W-59F offline: the send button keeps its flat, unlit treatment
   *  but still submits, which is what surfaces WD-59G / W-59G. */
  flatSend?: boolean;
  onAddAttachment: () => void;
  onVoiceInput: () => void;
  className?: string;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!sendDisabled) onSend();
      }}
      className={`fixed inset-x-0 bottom-[85px] z-20 px-5 lg:static lg:z-auto lg:px-[34px] lg:pb-[22px] ${className}`}
    >
      <div className="flex h-[52px] items-center gap-[2px] rounded-[26px] border border-lp-line bg-white pr-[11px] pl-[3px] lg:max-w-[746px] lg:gap-[10px] lg:pr-[9px] lg:pl-[7px]">
        <button
          type="button"
          onClick={onAddAttachment}
          aria-label={c.addAttachment}
          className="flex size-[36px] shrink-0 items-center justify-center rounded-[18px] text-[#0c5941] lg:bg-lp-mint lg:text-lp-green lg:hover:bg-brand-soft"
        >
          <Plus size={18} strokeWidth={1.5} />
        </button>
        <input
          type="text"
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[13px] text-lp-ink outline-none placeholder:text-lp-muted"
        />
        <button
          type="button"
          onClick={onVoiceInput}
          aria-label={c.micLabel}
          className="flex size-[36px] shrink-0 items-center justify-center rounded-[18px] text-[#0c5941] lg:bg-lp-mint lg:text-lp-green lg:hover:bg-brand-soft"
        >
          <Mic size={18} strokeWidth={1.5} className="lg:hidden" />
          <MicIcon size={18} className="hidden lg:block" />
        </button>
        <button
          type="submit"
          disabled={sendDisabled}
          aria-label={c.sendLabel}
          className={`flex size-[36px] shrink-0 items-center justify-center rounded-[18px] bg-[#0c5941] text-white lg:bg-lp-button ${
            sendDisabled || flatSend ? "" : "hover:bg-lp-green"
          }`}
        >
          <ArrowUp size={18} strokeWidth={1.5} className="lg:hidden" />
          <Send size={18} strokeWidth={1.5} className="hidden lg:block" />
        </button>
      </div>
    </form>
  );
}
