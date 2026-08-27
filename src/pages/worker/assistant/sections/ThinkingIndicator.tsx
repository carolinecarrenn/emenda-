import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "../assistant.copy";

/* Streaming placeholder. Desktop (WD-59B · 1186:778): a small 180x42 pill
   bubble on the tint fill with a 13px muted "Thinking…" label. Mobile
   (W-59B · 1084:718): a bare "Thinking" label under the sent user bubble. */
export function ThinkingIndicator() {
  const c = useSectionCopy(ASSISTANT_COPY);

  return (
    <>
      <p className="text-[13px] text-lp-muted lg:hidden">{c.thinkingMobile}</p>
      <div className="hidden h-[42px] w-[180px] items-center rounded-[21px] border border-lp-line bg-lp-tint px-[16px] text-[13px] text-lp-muted lg:flex">
        {c.thinking}
      </div>
    </>
  );
}
