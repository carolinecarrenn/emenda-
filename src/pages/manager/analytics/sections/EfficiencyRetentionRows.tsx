import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { AnalyticsSnapshot } from "../analytics.mock";

/* EM-13 (1107:108–120) "EFFICIENCY & RETENTION": 350×40 rows, radius 12,
   border #ccded6 — D6/D7/D8 white, D9 the yellow signal row (#fff5c7).
   10px semibold label left, 10px semibold value right. */
export function EfficiencyRetentionRows({
  snapshot,
}: {
  snapshot: AnalyticsSnapshot;
}) {
  const c = useSectionCopy(ANALYTICS_COPY);

  const rows = [
    {
      label: c.analytics.rows.d6,
      value: snapshot.templateUsage,
      highlighted: false,
    },
    {
      label: c.analytics.rows.d7,
      value: c.analytics.valueCases.replace(
        "{count}",
        String(snapshot.reworkCases),
      ),
      highlighted: false,
    },
    {
      label: c.analytics.rows.d8,
      value: `${snapshot.tenureDays} ${c.units.days} · ${snapshot.retention}`,
      highlighted: false,
    },
    {
      label: c.analytics.rows.d9,
      value: c.analytics.valueWorkers.replace(
        "{count}",
        String(snapshot.followUpWorkers),
      ),
      highlighted: true,
    },
  ];

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-brand uppercase lg:text-[11px]">
        {c.analytics.efficiencyTitle}
      </h2>
      <div className="mt-[10px] space-y-[7px]">
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex min-h-[40px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] px-[14px] py-[10px] ${
              row.highlighted ? "bg-[#fff5c7]" : "bg-white"
            }`}
          >
            <p className="text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
              {row.label}
            </p>
            <p className="shrink-0 text-right text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
              {row.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
