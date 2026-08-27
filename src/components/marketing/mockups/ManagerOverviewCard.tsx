import { TriangleAlert, Users } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

/**
 * The manager overview (MD-03): four counts and the short list of what needs a
 * person today. Drawn as coordination rather than surveillance — the numbers
 * are about work reaching its end, not about watching individuals.
 */
export function ManagerOverviewCard({
  className = "",
}: {
  className?: string;
}) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).manager;

  return (
    <div
      className={`overflow-hidden rounded-[22px] border border-lp-line bg-lp-bg shadow-lp-md ${className}`}
    >
      <div className="flex items-center gap-2.5 border-b border-lp-line bg-white px-5 py-4">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-lp-mint text-lp-green">
          <Users size={16} strokeWidth={1.85} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
            {m.label}
          </p>
          <p className="text-[14px] font-semibold text-lp-ink">{m.title}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {m.kpis.map((kpi, index) => (
            <div
              key={kpi.label}
              className={`rounded-[14px] px-3.5 py-3 ${
                index === 0
                  ? "border border-lp-green/20 bg-lp-mint"
                  : "border border-lp-line bg-white"
              }`}
            >
              <p className="text-[9px] font-semibold tracking-[0.06em] text-lp-muted">
                {kpi.label}
              </p>
              <p className="mt-1.5 font-display text-[20px] leading-none font-bold text-lp-green">
                {kpi.value}
              </p>
              <p className="mt-1 text-[10px] text-lp-muted">{kpi.caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[16px] border border-lp-line bg-white p-3.5">
          <p className="flex items-center gap-1.5 text-[9.5px] font-semibold tracking-[0.08em] text-lp-green">
            <TriangleAlert size={12} strokeWidth={2} aria-hidden="true" />
            {m.attentionLabel}
          </p>
          <ul className="mt-2 space-y-1.5">
            {m.attentionItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[12px] leading-[1.5] text-lp-ink"
              >
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-lp-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
