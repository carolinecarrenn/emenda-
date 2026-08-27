import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* MD-03 "NEEDS ATTENTION": white card, 14px semibold header,
   13px #66736b lines. */
export function AttentionCard() {
  const c = useSectionCopy(MANAGER_COPY);

  return (
    <div className="rounded-[12px] border border-[#dbe3de] bg-white px-6 py-[26px] lg:h-[174px]">
      <h2 className="text-[14px] font-semibold text-brand-deep">
        {c.dashboard.needsAttention}
      </h2>
      <div className="mt-[19px] text-[13px] leading-[16px] text-[#66736b]">
        {c.dashboard.attentionLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
