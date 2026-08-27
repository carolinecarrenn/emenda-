import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";
import { OjtSectionHeading } from "./OjtSectionHeading";

/* EM-14A (761:2620) "DRAFT LEARNING GUIDANCE": white 116px card holding the
   four numbered draft rules, ending on the privacy rule. Draft text is
   record content and stays in the source language. */
export function OjtGuidanceCard({ module }: { module: OjtModule }) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <section>
      <OjtSectionHeading>{c.detail.guidanceHeading}</OjtSectionHeading>
      <div className="mt-[9px] min-h-[116px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[12px] lg:mt-[11px] lg:min-h-[136px]">
        <div className="text-[9px] leading-[11px] text-[#667a73] lg:text-[11px] lg:leading-[14px]">
          {module.guidance.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
