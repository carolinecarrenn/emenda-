import { useReports } from "@/data/reportsContext";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* MD-03 KPI cards: 250x96, radius 12, first card mint #e3f0e8, others
   white with #dbe3de border; 10px caps label, 22px value, 10px caption. */
const KPI_VALUES = (completion: number) => [
  "4",
  `${completion}%`,
  "4",
  "3",
  "2",
  "41%",
  "18 min",
  "3",
];

export function KpiRow() {
  const { todayReport } = useReports();
  const c = useSectionCopy(MANAGER_COPY);
  const submitted = todayReport ? 3 : 2;
  const values = KPI_VALUES(Math.round((submitted / 4) * 100));

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-x-5">
      {c.dashboard.kpis.map((kpi, index) => (
        <div
          key={kpi.label}
          className={`h-[96px] rounded-[12px] px-4 py-[14px] ${
            index === 0 ? "bg-brand-soft" : "border border-[#dbe3de] bg-white"
          }`}
        >
          <p className="text-[10px] font-semibold text-[#66736b] uppercase">
            {kpi.label}
          </p>
          <p className="mt-[6px] text-[22px] font-semibold text-brand-deep lg:mt-[12px] lg:leading-[26px]">
            {values[index]}
          </p>
          <p className="mt-[2px] text-[10px] text-[#66736b]">{kpi.caption}</p>
        </div>
      ))}
    </div>
  );
}
