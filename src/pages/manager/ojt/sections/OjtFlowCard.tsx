import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";
import { OjtSectionHeading } from "./OjtSectionHeading";

/* EM-14 (761:2552) "HUMAN-CONTROLLED FLOW": bordered white card, 54px tall,
   spelling out the pipeline in a 10px semibold #083d2d line that wraps onto
   a second 12px line. */
export function OjtFlowCard() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <section>
      <OjtSectionHeading>{c.hub.flowHeading}</OjtSectionHeading>
      <div className="mt-[9px] flex min-h-[54px] items-center rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[11px] lg:mt-[11px]">
        <p className="text-[10px] leading-[12px] font-semibold text-[#083d2d] lg:text-[13px] lg:leading-[15px]">
          {c.hub.flowLine}
        </p>
      </div>
    </section>
  );
}
