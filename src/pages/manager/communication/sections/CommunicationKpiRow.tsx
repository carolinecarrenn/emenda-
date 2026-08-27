import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import { COMMUNICATION_METRICS } from "../communicationData";

/* MD-06 KPI cards (1225:23 · 27 · 31 · 35): 86px tall, radius 10, white on
   #dbe3de border — 10px caps label #65746d, 21px value #083d2d, 10px caption. */
export function CommunicationKpiRow() {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const values = [
    COMMUNICATION_METRICS.workerInitiated,
    COMMUNICATION_METRICS.managerResponse,
    COMMUNICATION_METRICS.unread,
    COMMUNICATION_METRICS.openFollowUp,
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-[240fr_240fr_240fr_292fr] lg:gap-x-4">
      {c.list.kpis.map((kpi, index) => (
        <div
          key={kpi.label}
          className="h-[86px] rounded-[10px] border border-[#dbe3de] bg-white px-[14px] py-[12px]"
        >
          <p className="text-[10px] font-semibold text-[#65746d] uppercase">
            {kpi.label}
          </p>
          <p className="mt-[6px] text-[21px] leading-[24px] font-semibold text-brand-deep">
            {values[index]}
          </p>
          <p className="mt-[2px] text-[10px] text-[#65746d]">{kpi.caption}</p>
        </div>
      ))}
    </div>
  );
}
