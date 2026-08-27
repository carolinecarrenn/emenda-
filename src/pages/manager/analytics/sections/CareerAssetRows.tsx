import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import { CAREER_ASSET_ROWS, type CareerAssetRow } from "../analytics.mock";

/* EM-R2-05 (1107:237–252) asset rows: 350×56, radius 12, border #ccded6 —
   white except the mint-highlighted "Career continuity" row (#e8f5f0).
   10px semibold #083d2d label left, right-aligned 10px semibold #083d2d value
   over a 9px semibold #0c5941 status. Label and value share the row's first
   line (1107:238/239 both sit at y=208), so the row is top-aligned rather
   than centred and the 56px floor leaves its slack under the status. */
export function CareerAssetRows() {
  const common = useCommonCopy();
  const c = useSectionCopy(ANALYTICS_COPY);

  const value = (row: CareerAssetRow) => {
    if (row.key === "certificates") {
      return c.careerAssets.valueAvailable.replace(
        "{count}",
        String(row.count ?? 0),
      );
    }
    if (row.key === "skills") {
      return c.careerAssets.valueRecords.replace(
        "{count}",
        String(row.count ?? 0),
      );
    }
    if (row.key === "currentRole") {
      return row.rawValue ?? "";
    }
    return c.careerAssets.valueWorkerOwned;
  };

  return (
    <div className="space-y-[8px]">
      {CAREER_ASSET_ROWS.map((row) => (
        <div
          key={row.key}
          className={`flex min-h-[56px] items-start justify-between gap-4 rounded-[12px] border border-[#ccded6] px-[14px] py-[6px] lg:items-center lg:py-[10px] ${
            row.highlighted ? "bg-[#e8f5f0]" : "bg-white"
          }`}
        >
          <p className="text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
            {c.careerAssets.rows[row.key]}
          </p>
          <div className="shrink-0 text-right">
            <p className="text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
              {value(row)}
            </p>
            <p className="mt-[6px] text-[9px] font-semibold text-brand lg:mt-[2px] lg:text-[11px]">
              {row.status === "verified"
                ? common.status.verified
                : common.status.active}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
