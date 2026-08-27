import { ArrowUp, Mic, Plus, Send } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";

/* Composer pill — W-58 "Chat composer · Native mobile" (1117:366): a 350x52
   white pill, radius 26, #d6e0d9 hairline and a 0 3px 8px rgba(0,0,0,.1)
   shadow. The "+" (28px, x=9) and the mic (28px, x=269) are bare #0c5941
   glyphs — no disc behind them — and the send key is a 36px #2f6a53 disc at
   x=305 carrying an up arrow. W-58C/58D grey the whole bar to 58%.
   Desktop WD-58 (1182:6489) keeps the mint circles and the paper plane. */
export function Composer({
  placeholder,
  value,
  onChange,
  onAdd,
  onMic,
  onSend,
  disabled = false,
  canSend = true,
  desktopPlaceholder,
  desktopValue,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onAdd?: () => void;
  onMic?: () => void;
  onSend?: () => void;
  disabled?: boolean;
  /** The send button stays inert until there is something to send. */
  canSend?: boolean;
  /** WD-58C/58L keep the plain "Message …" prompt while W-58C/58L swap it for
   *  "Draft preserved"; supplying either splits the field per viewport. */
  desktopPlaceholder?: string;
  /** WD-58A/58N leave the pill empty and echo the draft above it, while
   *  W-58A/58N keep the draft inside the field. */
  desktopValue?: string;
}) {
  const c = useSectionCopy(CHAT_COPY);
  const split = desktopPlaceholder !== undefined || desktopValue !== undefined;
  const field =
    "min-w-0 flex-1 bg-transparent text-[12px] leading-[16px] text-lp-ink placeholder:text-[#6b7d73] focus:outline-none lg:text-[13px] lg:placeholder:text-lp-muted";
  return (
    <div
      className={`flex h-[52px] items-center gap-[8px] rounded-[26px] border border-[#d6e0d9] bg-white pr-[7px] pl-[9px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)] lg:gap-[10px] lg:border-lp-line lg:pr-[13px] lg:shadow-none ${
        disabled ? "opacity-[0.58] lg:bg-lp-tint lg:opacity-100" : ""
      }`}
    >
      <button
        type="button"
        onClick={onAdd}
        disabled={disabled}
        aria-label={c.attach.menuTitle}
        className="flex size-[28px] shrink-0 items-center justify-center rounded-[14px] text-[#0c5941] disabled:cursor-not-allowed lg:size-[36px] lg:rounded-[18px] lg:bg-lp-mint lg:text-lp-green"
      >
        <Plus size={16} strokeWidth={2.4} className="lg:hidden" />
        <Plus size={18} strokeWidth={1.8} className="hidden lg:block" />
      </button>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`${field} ${split ? "lg:hidden" : ""}`}
      />
      {split && (
        <input
          value={desktopValue ?? value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={desktopPlaceholder ?? placeholder}
          disabled={disabled}
          className={`${field} hidden lg:block`}
        />
      )}
      <button
        type="button"
        onClick={onMic}
        disabled={disabled}
        aria-label={c.composer.recordVoice}
        className="flex size-[28px] shrink-0 items-center justify-center rounded-[14px] text-[#0c5941] disabled:cursor-not-allowed lg:size-[36px] lg:rounded-[18px] lg:bg-lp-mint lg:text-lp-green"
      >
        <Mic size={14} strokeWidth={2} className="lg:hidden" />
        <Mic size={18} strokeWidth={1.8} className="hidden lg:block" />
      </button>
      <button
        type="button"
        onClick={onSend}
        disabled={disabled || !canSend}
        aria-label={c.composer.send}
        /* WD-58 keeps the send disc solid even with an empty pill; only the
           offline/read-only composer greys it to #8ca699 (WD-58C 1182:6775). */
        className={`flex size-[36px] shrink-0 items-center justify-center rounded-[15px] bg-[#2f6a53] text-white disabled:cursor-not-allowed lg:rounded-[18px] ${
          disabled ? "lg:bg-[#8ca699]" : "lg:bg-[#056b54]"
        }`}
      >
        <ArrowUp size={16} strokeWidth={2.4} className="lg:hidden" />
        <Send size={18} strokeWidth={1.8} className="hidden lg:block" />
      </button>
    </div>
  );
}
