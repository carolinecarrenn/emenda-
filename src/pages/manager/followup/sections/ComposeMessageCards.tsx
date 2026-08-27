import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";

/* EM-09B message pair. Figma sets the label caps itself and leaves the
   language name in its own case, so the headings are not CSS-uppercased.
   ORIGINAL MESSAGE · Bahasa Indonesia (1030:199): white card, radius 14,
   #d6e3de hairline, 82px, 12px #094033 body on a 15px leading.
   TRANSLATION PREVIEW · 日本語 (1030:202): mint #e8f5f0 card, radius 14, no
   hairline, 72px, 11px #094033 body on a 14px leading. Both frames centre the
   body in a fixed-height box, so the cards hold 82 / 72px whatever the mock
   text measures. Bodies are content, kept raw. */
export function ComposeMessageCards({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="space-y-[16px]">
      <section>
        <h2 className="text-[10px] font-semibold text-[#094033] lg:text-[11px]">
          {c.compose.originalLabel}
        </h2>
        <div className="mt-[5px] flex min-h-[82px] items-center rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[14px]">
          <p className="text-[12px] leading-[15px] font-semibold text-[#094033] lg:text-[13px]">
            {signal.originalMessage}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[10px] font-semibold text-[#094033] lg:text-[11px]">
          {c.compose.translationLabel}
        </h2>
        <div className="mt-[5px] flex min-h-[72px] items-center rounded-[14px] bg-[#e8f5f0] px-[14px] py-[14px]">
          <p className="text-[11px] leading-[14px] text-[#094033] lg:text-[13px]">
            {signal.translationPreview}
          </p>
        </div>
      </section>
    </div>
  );
}
