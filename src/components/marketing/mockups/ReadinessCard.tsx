import { Check, Plane } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

/**
 * Japan readiness: the setup steps a new arrival has to get through, with what
 * is already done. Shows that EMENDA tracks a state over weeks, not a single
 * exchange.
 */
export function ReadinessCard({ className = "" }: { className?: string }) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).readiness;

  return (
    <div
      className={`rounded-[18px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[12px] bg-lp-mint text-lp-green">
          <Plane size={16} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
            {m.label}
          </p>
          <p className="mt-1 text-[13.5px] font-semibold text-lp-ink">
            {m.title}
          </p>
        </div>
        <span className="shrink-0 font-display text-[16px] font-bold text-lp-green">
          {m.progress}
        </span>
      </div>

      <div
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-lp-tint"
        aria-hidden="true"
      >
        <span
          className="block h-full rounded-full bg-lp-button"
          style={{ width: m.progress }}
        />
      </div>

      <ul className="mt-3.5 space-y-1.5">
        {m.items.map((item) => (
          <li key={item.label} className="flex items-center gap-2.5">
            <span
              className={`flex size-4 shrink-0 items-center justify-center rounded-full ${
                item.done
                  ? "bg-lp-mint text-lp-green"
                  : "border border-lp-line bg-white"
              }`}
            >
              {item.done ? (
                <Check size={10} strokeWidth={3} aria-hidden="true" />
              ) : null}
            </span>
            <span
              className={`text-[12px] ${
                item.done ? "text-lp-muted line-through" : "text-lp-ink"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
