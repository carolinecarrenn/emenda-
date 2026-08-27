/* The 96px KPI card used across MD-02 (1213:23…38), MD-02A (1213:87…102),
   MD-02B (1213:134…145), MD-04B, MD-05 (1213:503…518) and MD-05A
   (1213:555…570): radius 12, 10px uppercase #66736b label, 22px semibold
   #083d2d value, 10px #66736b caption. The first card of every row is the
   mint #e3f0e8 highlight; the rest are white on a #dbe3de hairline.
   MD-02 sizes the four-up row 250/250/250/rest at gap 16 and MD-02B the
   three-up row 330/330/rest at gap 18, so the trailing card always closes
   on the 1060px column. A two-line value (MD-05A "Specified Skilled
   Worker") grows the row instead of spilling past the card edge.
   The 390px mocks stack the same tiles two-up. */
export interface WorkspaceKpi {
  key: string;
  label: string;
  value: string;
  caption: string;
  /** MD-02 highlights the leading card; MD-04A/EM-05 tint exceptions peach. */
  tone?: WorkspaceKpiTone;
  /** EM-05 (761:216…226) never leaves a 390px tile white: every tile is
      mint, peach when the value is the exception. */
  mobileTone?: WorkspaceKpiTone;
  /** EM-02A spells its FOLLOW-UP tile "4 open" where MD-02A prints "4". */
  mobileValue?: string;
}

export type WorkspaceKpiTone = "mint" | "plain" | "attention";

const TONE = {
  mint: "border-[#e3f0e8] bg-[#e3f0e8]",
  plain: "border-[#dbe3de] bg-white",
  attention: "border-[#ffe8e0] bg-[#ffe8e0]",
} as const;

const LG_TONE = {
  mint: "lg:border-[#e3f0e8] lg:bg-[#e3f0e8]",
  plain: "lg:border-[#dbe3de] lg:bg-white",
  attention: "lg:border-[#ffe8e0] lg:bg-[#ffe8e0]",
} as const;

export function WorkspaceKpiRow({
  kpis,
  columns = 4,
  mobileCaption = true,
}: {
  kpis: WorkspaceKpi[];
  /** MD-02B runs a three-card row; every other screen runs four. */
  columns?: 3 | 4;
  /** EM-02A (761:38) draws its 2x2 scope tiles as label + value only —
      the MD-02A captions belong to the desktop row. */
  mobileCaption?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-[10px] ${
        columns === 3
          ? "lg:grid-cols-[330px_330px_1fr] lg:gap-[18px]"
          : "lg:grid-cols-[250px_250px_250px_1fr] lg:gap-[16px]"
      }`}
    >
      {kpis.map((kpi) => (
        <div
          key={kpi.key}
          className={`rounded-[12px] border px-[14px] py-[12px] lg:min-h-[96px] lg:px-[16px] ${
            TONE[kpi.mobileTone ?? kpi.tone ?? "plain"]
          } ${LG_TONE[kpi.tone ?? "plain"]}`}
        >
          <p className="text-[9px] font-semibold tracking-[0.04em] text-[#66736b] uppercase lg:text-[10px] lg:tracking-normal">
            {kpi.label}
          </p>
          <p className="mt-[6px] text-[16px] leading-[1.15] font-semibold text-[#083d2d] lg:mt-[13px] lg:text-[22px]">
            {kpi.mobileValue ? (
              <>
                <span className="lg:hidden">{kpi.mobileValue}</span>
                <span className="hidden lg:inline">{kpi.value}</span>
              </>
            ) : (
              kpi.value
            )}
          </p>
          <p
            className={`mt-[4px] text-[9px] leading-[13px] text-[#66736b] lg:text-[10px] ${
              mobileCaption ? "" : "hidden lg:block"
            }`}
          >
            {kpi.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
