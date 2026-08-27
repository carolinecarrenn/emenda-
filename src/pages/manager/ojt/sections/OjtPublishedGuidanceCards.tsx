import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";
import { OjtSectionHeading } from "./OjtSectionHeading";

/* EM-14C "PUBLISHED GUIDANCE" (1108:97 · 100 · 103): three white 64px cards,
   radius 12 on a #ccded6 hairline — a 9px semibold #083d2d numbered heading
   over the final worker-facing 9px #667a73 sentence. */
export function OjtPublishedGuidanceCards({ module }: { module: OjtModule }) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <section>
      <OjtSectionHeading>{c.published.guidanceHeading}</OjtSectionHeading>
      <div className="mt-[9px] space-y-[10px] lg:mt-[11px]">
        {module.publishedGuidance.map((item) => (
          <div
            key={item.heading}
            className="min-h-[64px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[10px]"
          >
            <p className="text-[9px] leading-[13px] font-semibold text-[#083d2d] lg:text-[11px] lg:leading-[16px]">
              {item.heading}
            </p>
            <p className="mt-[6px] text-[9px] leading-[12px] text-[#667a73] lg:text-[11px] lg:leading-[15px]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
