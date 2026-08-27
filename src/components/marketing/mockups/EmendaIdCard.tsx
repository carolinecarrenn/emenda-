import { BadgeCheck } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

/**
 * The EMENDA ID card as the worker sees it on Home (WD-18). It is the anchor
 * of the whole platform story — one identity that the work, the records and
 * the organization connection all hang off — so it appears wherever the site
 * needs to say "this is more than a chat".
 */
export function EmendaIdCard({ className = "" }: { className?: string }) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).worker;

  return (
    <div
      className={`rounded-[16px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}
    >
      <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
        {m.idLabel}
      </p>
      <div className="mt-1.5 flex items-center justify-between gap-3">
        <p className="truncate font-display text-[17px] font-bold tracking-[-0.01em] text-lp-ink">
          {m.idValue}
        </p>
        <span className="shrink-0 text-[10.5px] font-semibold text-lp-green">
          {m.viewId}
        </span>
      </div>
      <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-lp-green">
        <BadgeCheck size={13} strokeWidth={2} aria-hidden="true" />
        {m.idStatus}
      </p>
    </div>
  );
}
