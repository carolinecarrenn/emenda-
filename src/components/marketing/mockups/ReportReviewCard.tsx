import { Check, MessageSquare } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

/**
 * The organization side of a submitted report: who sent it, when, and the two
 * responses that close or continue it. This is the still that shows the loop
 * has a second party — a report goes somewhere and someone answers.
 */
export function ReportReviewCard({ className = "" }: { className?: string }) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).review;

  return (
    <div
      className={`rounded-[18px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}
    >
      <p className="text-[9.5px] font-semibold tracking-[0.08em] text-gold">
        {m.label}
      </p>
      <p className="mt-1.5 text-[14px] leading-[1.35] font-semibold text-lp-ink">
        {m.worker}
      </p>
      <p className="mt-1 text-[11px] text-lp-muted">{m.meta}</p>

      <div className="mt-3.5 grid grid-cols-2 gap-2">
        <span className="flex items-center justify-center gap-1.5 rounded-[12px] border border-lp-line bg-white py-2.5 text-[12px] font-semibold text-lp-muted">
          <MessageSquare size={13} strokeWidth={1.9} aria-hidden="true" />
          {m.secondary}
        </span>
        <span className="flex items-center justify-center gap-1.5 rounded-[12px] bg-lp-button py-2.5 text-[12px] font-semibold text-white">
          <Check size={13} strokeWidth={2.6} aria-hidden="true" />
          {m.primary}
        </span>
      </div>
    </div>
  );
}
