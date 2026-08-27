import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

/**
 * Submitted → Reviewed → Follow-up → Resolved, with the current position
 * marked. The single most important still for the platform argument: it shows
 * that EMENDA keeps hold of something after it has been sent, which is what
 * separates it from a form and from a chat.
 */
export function LifecycleTrail({
  orientation = "vertical",
  resolved = false,
  className = "",
}: {
  orientation?: "vertical" | "horizontal";
  /** Show the thread closed — every stage complete, nothing in progress. */
  resolved?: boolean;
  className?: string;
}) {
  const copy = useSectionCopy(PLATFORM_MOCKS_COPY).lifecycle;
  const m = resolved
    ? { ...copy, activeIndex: copy.steps.length }
    : copy;

  if (orientation === "horizontal") {
    return (
      <div className={`rounded-[18px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}>
        <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
          {m.label}
        </p>
        <ol className="mt-3.5 flex items-start">
          {m.steps.map((step, index) => {
            const done = index < m.activeIndex;
            const active = index === m.activeIndex;
            return (
              <li key={step.label} className="relative flex-1 text-center">
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className={`absolute top-3 right-1/2 left-0 h-px ${
                      done || active ? "bg-lp-green/40" : "bg-lp-line"
                    }`}
                  />
                ) : null}
                <span
                  className={`relative mx-auto flex size-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    done
                      ? "bg-lp-button text-white"
                      : active
                        ? "border-2 border-lp-button bg-white text-lp-green"
                        : "border border-lp-line bg-white text-lp-muted"
                  }`}
                >
                  {done ? (
                    <Check size={11} strokeWidth={3} aria-hidden="true" />
                  ) : (
                    index + 1
                  )}
                </span>
                <span
                  className={`mt-2 block text-[11px] font-semibold ${
                    done || active ? "text-lp-ink" : "text-lp-muted"
                  }`}
                >
                  {step.label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  return (
    <div
      className={`rounded-[18px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}
    >
      <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
        {m.label}
      </p>
      <ol className="relative mt-3.5 space-y-3">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[11px] w-px bg-lp-line"
        />
        {m.steps.map((step, index) => {
          const done = index < m.activeIndex;
          const active = index === m.activeIndex;
          return (
            <li key={step.label} className="relative flex items-center gap-3">
              <span
                className={`relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  done
                    ? "bg-lp-button text-white"
                    : active
                      ? "border-2 border-lp-button bg-white text-lp-green"
                      : "border border-lp-line bg-white text-lp-muted"
                }`}
              >
                {done ? (
                  <Check size={11} strokeWidth={3} aria-hidden="true" />
                ) : (
                  index + 1
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={`block text-[12.5px] font-semibold ${
                    done || active ? "text-lp-ink" : "text-lp-muted"
                  }`}
                >
                  {step.label}
                </span>
                <span className="text-[10.5px] text-lp-muted">{step.meta}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
