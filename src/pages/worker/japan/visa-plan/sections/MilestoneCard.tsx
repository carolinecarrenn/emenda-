import { useSectionCopy } from "@/i18n/copy";
import { JAPAN_COPY } from "../../japan.copy";

/** W-32F amber milestone callout (Figma 636:26): 90px band, 12px amber
 *  title, 11px grey body. */
export function MilestoneCard({ className = "" }: { className?: string }) {
  const c = useSectionCopy(JAPAN_COPY);

  return (
    <div
      className={`min-h-[90px] rounded-[16px] border border-[#e9c86b] bg-[#fff5dd] p-[15px] lg:min-h-[104px] lg:rounded-[14px] ${className}`}
    >
      <p className="text-[12px] leading-[18px] font-semibold text-[#8a5a00] lg:text-[15px] lg:leading-[22px]">
        {c.visaPlan.milestoneTitle}
      </p>
      <p className="mt-[6px] max-w-[250px] text-[11px] leading-[18px] text-[#5e7066] lg:max-w-none lg:text-[13px] lg:leading-[22px]">
        {c.visaPlan.milestoneBody}
      </p>
    </div>
  );
}
