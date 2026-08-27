import { useSectionCopy } from "@/i18n/copy";
import { CREATE_CV_COPY } from "../createCv.copy";
import { CV_SOURCE_KEYS } from "../createCvMock";

/* WD-30 "Include in your CV" checklist card: 14px semibold title, five
   13px "✓ …" rows on a 34px pitch, 11px muted hint. */
export function CvSourcesCard() {
  const c = useSectionCopy(CREATE_CV_COPY);

  return (
    <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[13px] pb-[21px]">
      <p className="text-[14px] font-semibold text-[#17231f]">
        {c.sourcesTitle}
      </p>
      <div className="mt-[18px] space-y-[16px]">
        {CV_SOURCE_KEYS.map((key) => (
          <p key={key} className="text-[13px] leading-[18px] text-[#17231f]">
            ✓ {c.sources[key]}
          </p>
        ))}
      </div>
      <p className="mt-[24px] text-[11px] leading-[17px] text-[#65746d]">
        {c.sourcesHint}
      </p>
    </div>
  );
}
