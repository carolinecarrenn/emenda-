import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "../assistant.copy";
import type { AssistantMessage } from "../assistantMock";

/* Conversation thread (Figma WD-59A · 1186:695–700 / W-59A · 1084:608).
   Desktop: user bubble right-aligned, 520px, mint #e8f5ed with a #d1ded6
   hairline, radius 16; assistant bubble left-aligned, 690px, #f2f9f5, with a
   white 90x22 "1 source" pill (10px semibold #054d3d) under the text.
   Mobile inverts both: the user bubble is solid dark green #0c5941 with white
   text, and the assistant answer is plain body text on the canvas with a
   pale-blue source chip. */
export function MessageThread({
  messages,
  onOpenSource,
}: {
  messages: AssistantMessage[];
  onOpenSource: (sourceId: string) => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);

  return (
    <div className="space-y-[18px] lg:space-y-[24px]">
      {messages.map((message) => {
        const sourceId = message.sourceId;
        return message.role === "user" ? (
          <div key={message.id} className="flex justify-end lg:pr-[22px]">
            <p className="max-w-[300px] rounded-[16px] bg-[#0c5941] px-[16px] py-[12px] text-[14px] leading-[20px] text-white lg:flex lg:min-h-[72px] lg:w-[520px] lg:max-w-[520px] lg:items-center lg:border lg:border-lp-line lg:bg-[#e8f5ed] lg:px-[17px] lg:py-[10px] lg:text-lp-ink">
              {message.text}
            </p>
          </div>
        ) : (
          <div
            key={message.id}
            className="lg:max-w-[690px] lg:rounded-[16px] lg:border lg:border-lp-line lg:bg-lp-tint lg:px-[17px] lg:pt-[28px] lg:pb-[7px]"
          >
            <p className="text-[14px] leading-[22px] text-lp-ink">
              {message.text}
            </p>
            {sourceId && (
              <button
                type="button"
                onClick={() => onOpenSource(sourceId)}
                className="mt-[10px] flex h-[22px] items-center justify-center rounded-[11px] bg-[#e8f1f8] px-[12px] text-[10px] font-semibold text-[#1c4e80] lg:mt-[7px] lg:w-[90px] lg:border lg:border-lp-line lg:bg-white lg:px-0 lg:text-lp-green lg:hover:border-lp-green"
              >
                {c.sourceChip}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
