import { useSectionCopy } from "@/i18n/copy";
import { COIN_COPY } from "../coin.copy";

/* W-60B node 1179:388 — the amber card that closes the rule list: EMENDA
   always shows the active rule before the worker does the activity. The
   #fef6da fill is the section's own notice tone, kept verbatim. */
export function ProgramRuleNoticeCard({
  className = "",
}: {
  className?: string;
}) {
  const c = useSectionCopy(COIN_COPY);

  return (
    <div
      className={`rounded-[14px] border border-lp-line bg-[#fef6da] px-[14px] py-[12px] lg:min-h-[62px] lg:bg-lp-tint lg:px-[18px] lg:py-[10px] ${className}`}
    >
      <p className="text-[10px] leading-[14px] font-semibold text-lp-ink lg:text-[12px]">
        {c.earn.programNotice.title}
      </p>
      <p className="mt-[5px] text-[9px] leading-[13px] text-lp-muted lg:text-[11px]">
        {c.earn.programNotice.body}
      </p>
    </div>
  );
}
