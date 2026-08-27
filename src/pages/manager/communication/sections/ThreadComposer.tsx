import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationSummary, ConversationThread } from "../communicationData";
import { useConversationTime } from "./communicationTime";

/* EM-07 reply composer (797:90): a white radius-14 card on a #d6e3de
   hairline titled "Reply to Putri Rahayu", holding the bilingual field
   "メッセージを入力… / Ketik pesan…", a 34px outline record key, a 30px
   #06634f chevron key, and the "Read · 14:23 · original preserved …" note
   inside the same card.
   MD-07 (1225:133–136): a 690x74 #f1f6f3 radius-12 field with the same
   placeholder and a 134x42 #0c5941 radius-9 "Send" button pinned right.
   Sending never fakes delivery — it routes to the human review step, which
   is where MD-08A puts the final check. */
export function ThreadComposer({
  conversation,
  thread,
}: {
  conversation: ConversationSummary;
  thread?: ConversationThread;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const [draft, setDraft] = useState("");
  const navigate = useNavigate();
  const time = useConversationTime();

  const label = fillCopy(c.thread.replyTo, { name: conversation.name });

  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`/manager/communication/review?to=${conversation.id}`);
  };

  return (
    <form onSubmit={submit}>
      {/* EM-07 · mobile */}
      <div className="rounded-[16px] border border-[#d6e3de] bg-white pt-[13px] pr-[10px] pb-[12px] pl-[14px] lg:hidden">
        <p className="text-[10px] leading-[14px] font-semibold text-[#094033]">
          {label}
        </p>
        <div className="mt-[15px] flex items-center gap-[10px]">
          <input
            type="text"
            aria-label={label}
            placeholder={c.thread.replyPlaceholder}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            className="h-[48px] min-w-0 flex-1 rounded-[12px] border border-[#d6e3de] bg-[#f8fbf9] px-[14px] text-[10px] text-[#094033] placeholder:text-[#6e8a82] focus:border-brand focus:outline-none"
          />
          <button
            type="button"
            aria-label={c.thread.recordLabel}
            className="flex h-[48px] w-[36px] shrink-0 items-center justify-center rounded-[12px] border border-[#d6e3de] bg-white text-[#06634f] hover:border-brand"
          >
            {/* 994:2781 · the record key is the ◉ ring-and-dot mark, not a
                solid disc. */}
            <span
              aria-hidden="true"
              className="flex size-[14px] items-center justify-center rounded-full border-[1.5px] border-current"
            >
              <span className="size-[6px] rounded-full bg-current" />
            </span>
          </button>
          <button
            type="submit"
            aria-label={c.thread.sendLabel}
            className="flex h-[48px] w-[28px] shrink-0 items-center justify-center rounded-[12px] bg-[#06634f] text-white hover:bg-brand-deep"
          >
            <ChevronRight aria-hidden="true" className="size-[15px]" />
          </button>
        </div>
        <p className="text-[9px] leading-[13px] text-[#6e8a82]">
          {fillCopy(c.thread.footnoteMobile, {
            time: thread ? time(thread.lastActivity) : "",
          })}
        </p>
      </div>

      {/* MD-07 · desktop */}
      <div className="hidden lg:flex lg:items-center lg:gap-[16px] lg:rounded-[12px] lg:bg-[#f1f6f3] lg:px-[20px] lg:py-[16px]">
        <input
          type="text"
          aria-label={label}
          placeholder={c.thread.replyPlaceholder}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          className="h-[42px] min-w-0 flex-1 bg-transparent text-[12px] text-[#141f1a] placeholder:text-[#65746d] focus:outline-none"
        />
        <button
          type="submit"
          className="flex h-[42px] w-[134px] shrink-0 items-center justify-start rounded-[9px] bg-brand px-[16px] text-[12px] font-semibold text-white hover:bg-brand-deep"
        >
          {c.thread.sendLabel}
        </button>
      </div>
    </form>
  );
}
