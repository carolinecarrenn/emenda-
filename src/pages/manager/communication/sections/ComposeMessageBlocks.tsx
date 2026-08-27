import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import type { MessageTemplate } from "../communicationData";

/* EM-08 message pair (797:139), mobile only.
   MESSAGE (994:2817–2821) → a white radius-14 card on a #d6e3de hairline
   headed by a 10px semibold #6e8a82 "MANAGER ORIGINAL · 日本語", carrying the
   drafted Japanese at 15px/19 semibold #094033 and closing on the 9px
   #6e8a82 note "Original text is preserved."
   TRANSLATION PREVIEW (994:2822–2825) → an unbordered mint #e8f5f0 radius-14
   block, 84px tall, with the Indonesian rendering at 13px/17 #094033 under a
   10px semibold #094033 "Bahasa Indonesia · preview" caption. Its last 14px
   sit behind the "Before sending" card the page stacks on top. Both bodies
   are raw content. */
export function ComposeMessageBlocks({
  template,
}: {
  template: MessageTemplate;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="lg:hidden">
      <section>
        <h2 className="text-[10px] leading-[14px] font-semibold text-[#094033] uppercase">
          {c.compose.messageLabel}
        </h2>
        <div className="mt-[4px] rounded-[14px] border border-[#d6e3de] bg-white px-[14px] pt-[14px] pb-[18px]">
          <p className="text-[10px] leading-[14px] font-semibold text-[#6e8a82] uppercase">
            {c.compose.managerOriginal}
          </p>
          <div className="mt-[23px] space-y-[4px]">
            {(template.mobileOriginalLines ?? template.originalLines).map((line) => (
              <p
                key={line}
                className="text-[15px] leading-[19px] font-semibold text-[#094033]"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-[25px] text-[9px] leading-[13px] text-[#6e8a82]">
            {c.compose.originalPreserved}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[10px] leading-[14px] font-semibold text-[#094033] uppercase">
          {c.compose.translationPreviewLabel}
        </h2>
        <div className="mt-[4px] min-h-[84px] rounded-[14px] bg-[#e8f5f0] px-[14px] pt-[13px] pb-[25px]">
          <p className="text-[10px] leading-[14px] font-semibold text-[#094033]">
            {c.compose.previewCaption}
          </p>
          <div className="mt-[15px] space-y-[4px]">
            {(
              template.mobileTranslationLines ?? template.translationLines
            ).map((line) => (
              <p
                key={line}
                className="text-[13px] leading-[17px] text-[#094033]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
