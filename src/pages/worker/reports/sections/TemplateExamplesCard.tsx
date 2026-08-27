import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import type { TemplateKey } from "../reportTemplate";

/**
 * Hub entry points into each employer-assigned template flow
 * (W-54I caregiver · W-54J warehouse · W-54K food service, plus the general
 * report of W-55). Templates are assigned by the employer — the worker never
 * picks one — so the row for the assigned template is marked and the others
 * open the same hub with that template applied.
 */
export function TemplateExamplesCard({ current }: { current: TemplateKey }) {
  const c = useSectionCopy(REPORTS_STATES_COPY);

  const entries: { key: TemplateKey; name: string; to: string }[] = [
    {
      key: "general",
      name: c.templateNames.general,
      to: "/worker/reports?template=general",
    },
    {
      key: "caregiver",
      name: c.templateNames.caregiver,
      to: "/worker/reports",
    },
    {
      key: "warehouse",
      name: c.templateNames.warehouse,
      to: "/worker/reports?template=warehouse",
    },
    {
      key: "food",
      name: c.templateNames.food,
      to: "/worker/reports?template=food",
    },
  ];

  return (
    <section>
      <h2 className="text-[11px] font-semibold text-lp-green uppercase">
        {c.templateExamples.label}
      </h2>
      <p className="mt-[9px] max-w-[900px] text-[13px] leading-[20px] text-lp-muted">
        {c.templateExamples.body}
      </p>
      <div className="mt-[14px] grid gap-[12px] lg:grid-cols-2 lg:gap-x-7">
        {entries.map((entry) => (
          <Link
            key={entry.key}
            to={entry.to}
            className="flex min-h-[56px] items-center justify-between gap-4 rounded-[12px] border border-lp-line bg-white px-[17px] py-[12px] hover:border-lp-green"
          >
            <span className="text-[13px] font-semibold text-lp-ink">
              {fillCopy(c.templateExamples.reportOf, { template: entry.name })}
            </span>
            {entry.key === current && (
              <span className="flex h-[26px] shrink-0 items-center justify-center rounded-[13px] border border-lp-line bg-lp-mint px-[12px] text-[11px] font-semibold text-lp-green">
                {c.templateExamples.current}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
