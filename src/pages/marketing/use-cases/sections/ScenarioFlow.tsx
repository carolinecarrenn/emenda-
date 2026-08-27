import { ArrowDown, Building2, Users } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { USE_CASES_COPY } from "../useCases.copy";

type Actor = "worker" | "organization" | "both";

const TONES: Record<Actor, string> = {
  worker: "border-lp-green/25 bg-lp-mint text-lp-green",
  organization: "border-lp-line bg-lp-tint text-lp-green",
  both: "border-lp-green/25 bg-lp-button text-white",
};

/**
 * A scenario's relay, with every step labelled by who takes it. Used instead
 * of a chat transcript on purpose: most of these scenarios have nothing to do
 * with the assistant, and showing them as conversations would flatten the
 * platform back into a chatbot.
 */
export function ScenarioFlow({
  steps,
}: {
  steps: { actor: Actor; label: string }[];
}) {
  const c = useSectionCopy(USE_CASES_COPY);

  return (
    <div className="rounded-[22px] border border-lp-line bg-white p-5 shadow-lp-md lg:p-6">
      <p className="text-[10px] font-semibold tracking-[0.1em] text-lp-muted uppercase">
        {c.flowLabel}
      </p>

      <ol className="mt-4 space-y-2">
        {steps.map((step, index) => (
          <li key={step.label}>
            <div className="flex items-start gap-3 rounded-[16px] border border-lp-line bg-lp-bg p-3.5">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full border ${TONES[step.actor]}`}
              >
                {step.actor === "organization" ? (
                  <Building2 size={13} strokeWidth={1.9} aria-hidden="true" />
                ) : (
                  <Users size={13} strokeWidth={1.9} aria-hidden="true" />
                )}
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold tracking-[0.08em] text-lp-green uppercase">
                  {c.actorLabels[step.actor]}
                </span>
                <span className="mt-0.5 block text-[13.5px] leading-[1.45] text-lp-ink">
                  {step.label}
                </span>
              </span>
            </div>

            {index < steps.length - 1 ? (
              <ArrowDown
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="mx-auto my-1 text-lp-line"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
