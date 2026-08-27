import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "../assistant.copy";
import type { AssistantSource } from "../assistantMock";
import { AssistantSheet } from "./AssistantSheet";

/* Official source citation.
   Desktop WD-59H · 1186:1268 — a 690x218 white card, radius 16, hairline
   #d1ded6, 19px side padding, 12px top/bottom inside the hairline. Its rows sit on the Figma
   centres: kicker box 13-31 (10px semibold #054d3d, no tracking), title
   39-65 (18px semibold), URL 69-89 (12px), the 620px-wide disclaimer
   114-146 (13px/16px, two lines) and the 180x34 outline "Back to chat"
   button at 171-205.
   Mobile W-59H · 1084:1373 — the same rows in a bottom sheet.
   Desktop drops the composer while the citation is open. */
export function SourceDetail({
  source,
  onBack,
}: {
  source: AssistantSource;
  onBack: () => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);

  const body = (
    <>
      <p className="text-[10px] font-semibold tracking-[0.06em] text-lp-green lg:leading-[18px] lg:tracking-normal">
        {c.officialSource}
      </p>
      <p className="mt-[10px] text-[18px] font-semibold text-lp-ink lg:mt-[8px] lg:leading-[26px]">
        {source.title}
      </p>
      <p className="mt-[6px] text-[12px] text-lp-muted lg:mt-[4px] lg:leading-[20px]">
        {source.domain}
      </p>
      <p className="mt-[20px] text-[13px] leading-[20px] text-lp-muted lg:mt-[25px] lg:max-w-[620px] lg:leading-[16px]">
        {c.sourceDisclaimer}
      </p>
      <button
        type="button"
        onClick={onBack}
        className="mt-[18px] flex h-[44px] w-full items-center justify-center rounded-[12px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:border-lp-green lg:mt-[25px] lg:h-[34px] lg:w-[180px]"
      >
        {c.backToChat}
      </button>
    </>
  );

  return (
    <>
      {/* Desktop WD-59H — 690x218 white card inline in the thread. */}
      <div className="hidden max-w-[690px] rounded-[16px] border border-lp-line bg-white px-[19px] pt-[12px] pb-[12px] lg:block">
        {body}
      </div>

      {/* Mobile W-59H — scrim + bottom sheet. */}
      <AssistantSheet onClose={onBack}>{body}</AssistantSheet>
    </>
  );
}
