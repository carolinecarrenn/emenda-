import { ArrowRight, MapPin } from "lucide-react";

/**
 * The "what to do next" card that closes an answer — the single most
 * important thing the landing page has to show, because it is what separates
 * EMENDA from a search result.
 */
export function ActionCard({
  label,
  title,
  meta,
  cta,
}: {
  label: string;
  title: string;
  meta: string;
  cta: string;
}) {
  return (
    <div className="rounded-[18px] border border-lp-line bg-white p-3.5 shadow-lp-sm">
      <p className="text-[10px] font-semibold tracking-[0.08em] text-lp-green uppercase">
        {label}
      </p>
      <div className="mt-2.5 flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[12px] bg-lp-mint text-lp-green">
          <MapPin size={17} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[13px] leading-[1.4] font-semibold text-lp-ink">
            {title}
          </p>
          <p className="mt-1 text-[11.5px] text-lp-muted">{meta}</p>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-lp-button px-3.5 py-1.5 text-[11.5px] font-semibold text-white">
          {cta}
          <ArrowRight size={13} strokeWidth={2.25} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
