/* MD-09 KPI quad (1226:1258 · 1262 · 1266 · 1270) and the identical MD-12 row
   (1226:1564 · 1568 · 1572 · 1576): 86px white cards, radius 10, #dbe3de
   hairline — 10px caps label #65746d, 21px value #083d2d, 10px caption.
   Figma sizes the first three at 240px and lets the fourth take the rest of
   the 1060px column (292px). Desktop only; the 390px mocks use count chips. */
export function FollowUpKpiRow({
  kpis,
  values,
}: {
  kpis: { label: string; caption: string }[];
  values: readonly string[];
}) {
  return (
    <div className="hidden lg:grid lg:grid-cols-[240px_240px_240px_minmax(0,1fr)] lg:gap-4">
      {kpis.map((kpi, index) => (
        <div
          key={kpi.label}
          className="h-[86px] rounded-[10px] border border-[#dbe3de] bg-white px-[14px] py-[12px]"
        >
          <p className="text-[10px] font-semibold text-[#65746d] uppercase">
            {kpi.label}
          </p>
          <p className="mt-[6px] text-[21px] leading-[26px] font-semibold text-brand-deep">
            {values[index]}
          </p>
          <p className="mt-[2px] text-[10px] text-[#65746d]">{kpi.caption}</p>
        </div>
      ))}
    </div>
  );
}
