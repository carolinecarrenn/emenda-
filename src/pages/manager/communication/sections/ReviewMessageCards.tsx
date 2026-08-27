import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import type { MessageTemplate } from "../communicationData";

/* MD-08A original / preview pair (1225:243–250): two white cards, radius 12,
   #dbe3de hairline, set side by side at 500px and 540px — each headed by a
   10px semibold #0c5941 label (MANAGER ORIGINAL · 日本語 / WORKER PREVIEW ·
   Bahasa Indonesia), carrying its body at 14px #141f1a and closing on a 10px
   #65746d caption ("Original preserved for audit." / "Translation reviewed
   by manager before send.").
   EM-08A (994:2862–2869) stacks the same pair but hangs each label outside
   its card as a 10px semibold #6e8a82 line: a 350x74 white "Japanese
   original" card above a 350x72 unbordered mint #e8f5f0 "Indonesian preview"
   card, each heading 13px/17 semibold #094033 over the sentence at 10px/14
   #6e8a82. The audit captions belong to MD-08A only. */
export function ReviewMessageCards({
  template,
}: {
  template: MessageTemplate;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="lg:flex lg:items-stretch lg:gap-[20px]">
      <div className="lg:w-[500px] lg:shrink-0">
        <p className="text-[10px] leading-[14px] font-semibold text-[#6e8a82] lg:hidden">
          {c.review.originalLabel}
        </p>
        <section className="mt-[4px] min-h-[74px] rounded-[14px] border border-[#d6e3de] bg-white px-[14px] pt-[13px] pb-[17px] lg:mt-0 lg:flex lg:h-[260px] lg:flex-col lg:rounded-[12px] lg:border-[#dbe3de] lg:px-[24px] lg:pt-[24px] lg:pb-[30px]">
          <p className="hidden lg:block lg:text-[10px] lg:font-semibold lg:text-brand">
            {c.review.originalLabelDesktop}
          </p>
          <p className="text-[13px] leading-[17px] font-semibold text-[#094033] lg:hidden">
            {c.review.originalHeading}
          </p>
          <div className="mt-[9px] space-y-[4px] lg:mt-[19px] lg:flex-1 lg:space-y-0">
            {(template.mobileOriginalLines ?? template.originalLines).map(
              (line) => (
                <p
                  key={line}
                  className="text-[10px] leading-[14px] text-[#6e8a82] lg:hidden"
                >
                  {line}
                </p>
              ),
            )}
            {template.originalLines.map((line) => (
              <p
                key={line}
                className="hidden lg:block lg:text-[14px] lg:leading-[18px] lg:text-[#141f1a]"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="hidden lg:mt-[24px] lg:block lg:text-[10px] lg:text-[#65746d]">
            {c.review.originalCaption}
          </p>
        </section>
      </div>

      <div className="mt-[18px] lg:mt-0 lg:min-w-0 lg:flex-1">
        <p className="text-[10px] leading-[14px] font-semibold text-[#6e8a82] lg:hidden">
          {c.review.translationLabel}
        </p>
        <section className="mt-[4px] min-h-[72px] rounded-[14px] bg-[#e8f5f0] px-[14px] pt-[13px] pb-[15px] lg:mt-0 lg:flex lg:h-[260px] lg:flex-col lg:rounded-[12px] lg:border lg:border-[#dbe3de] lg:bg-white lg:px-[24px] lg:pt-[24px] lg:pb-[30px]">
          <p className="hidden lg:block lg:text-[10px] lg:font-semibold lg:text-brand">
            {c.review.workerPreviewLabel}
          </p>
          <p className="text-[13px] leading-[17px] font-semibold text-[#094033] lg:hidden">
            {c.review.translationHeading}
          </p>
          <div className="mt-[9px] space-y-[4px] lg:mt-[19px] lg:flex-1 lg:space-y-0">
            {(template.mobileTranslationLines ?? template.translationLines).map(
              (line) => (
                <p
                  key={line}
                  className="text-[10px] leading-[14px] text-[#6e8a82] lg:hidden"
                >
                  {line}
                </p>
              ),
            )}
            {template.translationLines.map((line) => (
              <p
                key={line}
                className="hidden lg:block lg:text-[14px] lg:leading-[17px] lg:text-[#141f1a]"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="hidden lg:mt-[24px] lg:block lg:text-[10px] lg:text-[#65746d]">
            {c.review.workerPreviewCaption}
          </p>
        </section>
      </div>
    </div>
  );
}
