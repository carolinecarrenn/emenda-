import { Check, ClipboardList } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

/**
 * A submitted daily report (WD-56). The everyday unit of work inside EMENDA —
 * the thing a worker sends, an organization receives, and follow-up hangs off.
 */
export function DailyReportCard({ className = "" }: { className?: string }) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).report;

  return (
    <div
      className={`rounded-[18px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[12px] bg-lp-mint text-lp-green">
          <ClipboardList size={17} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
            {m.label}
          </p>
          <p className="mt-1 text-[14px] leading-[1.35] font-semibold text-lp-ink">
            {m.title}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-success-bg px-2.5 py-1 text-[10.5px] font-semibold text-success-ink">
          <Check size={11} strokeWidth={3} aria-hidden="true" />
          {m.statusValue}
        </span>
      </div>

      <dl className="mt-3.5 space-y-1.5 border-t border-lp-line pt-3.5">
        {m.rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-3">
            <dt className="shrink-0 text-[11.5px] text-lp-muted">
              {row.label}
            </dt>
            <dd className="min-w-0 truncate text-right text-[12px] font-medium text-lp-ink">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-3 text-[10.5px] text-lp-muted">{m.submitted}</p>
    </div>
  );
}
