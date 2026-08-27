import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "../assistant.copy";

/* New-chat / empty state.
   Desktop (WD-59 · 1186:616–623): 28px bold "How can I help you today?" in a
   44px box at 40/114, a 14px muted subtitle in a 46px box at 40/160, then
   three 650x52 #f2f9f5 suggestion chips at 40/238 (radius 14, 14px semibold
   #054d3d, 12px apart).
   Mobile (W-59 · 1084:584–592): the heading + subtitle sit inside a WHITE hero
   card (350x100, radius 18, no border, 16px inset — a 28px greeting box then
   the 32px sub box 8px under it), followed by three full-width white 42px pill
   chips with a hairline border and a 12px label 14px in, 12px apart. */
export function EmptyState({ onPrompt }: { onPrompt: () => void }) {
  const c = useSectionCopy(ASSISTANT_COPY);
  const prompts = [c.promptExplain, c.promptPrepare, c.promptReply];

  return (
    <div className="lg:px-[6px] lg:pt-[10px]">
      <div className="rounded-[18px] bg-white p-[16px] lg:rounded-none lg:bg-transparent lg:p-0">
        <p className="font-display text-[21px] leading-[28px] font-bold text-lp-ink lg:font-sans lg:text-[28px] lg:leading-[44px]">
          {c.greeting}
        </p>
        <p className="mt-[8px] text-[11px] leading-[16px] text-lp-muted lg:mt-[2px] lg:text-[14px] lg:leading-[46px]">
          {c.greetingSub}
        </p>
      </div>

      <div className="mt-[12px] space-y-[12px] lg:mt-[32px]">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={onPrompt}
            className="flex h-[42px] w-full items-center rounded-[21px] border border-[#e5e8e5] bg-white px-[14px] text-left text-[12px] text-lp-ink hover:border-lp-green lg:h-[52px] lg:max-w-[650px] lg:rounded-[14px] lg:border-lp-line lg:bg-lp-tint lg:px-[18px] lg:text-[14px] lg:font-semibold lg:text-lp-green"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
