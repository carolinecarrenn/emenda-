import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/** Which EM-R2 screen the identity card sits on — each one carries a
 *  different third line (and EM-R2-02 drops the "Worker-Owned" line). */
export type IdentityVariant = "continuity" | "log" | "detail" | "assets";

/* EM-R2-01/02/03/05 mint identity card (1107:131, 1107:168, 1107:209,
   1107:233): bg #e8f5f0, border #ccded6, radius 12 — 11–12px semibold
   #083d2d name line over 9–10px #667a73 context lines. */
export function RecordsIdentityCard({
  worker,
  variant,
}: {
  worker: ManagedWorker;
  variant: IdentityVariant;
}) {
  const c = useSectionCopy(ANALYTICS_COPY);

  if (variant === "log") {
    return (
      <div className="rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] pt-[12px] pb-[6px] lg:pb-[12px]">
        <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[14px]">
          {worker.name} · {worker.emendaId}
        </p>
        <p className="mt-[6px] text-[9px] text-[#667a73] lg:text-[11px]">
          {c.workLog.currentEmployer.replace("{facility}", worker.facility)}
        </p>
      </div>
    );
  }

  const nameSize =
    variant === "continuity"
      ? "text-[12px] lg:text-[15px]"
      : "text-[11px] lg:text-[14px]";
  /* EM-R2-01 sets the two context lines at 10px; EM-R2-03 / EM-R2-05 at 9px. */
  const contextSize =
    variant === "continuity"
      ? "text-[10px] lg:text-[12px]"
      : "text-[9px] lg:text-[11px]";
  const ownedLine =
    variant === "continuity"
      ? c.continuity.workerOwned
      : variant === "detail"
        ? c.recordDetail.workerOwned
        : c.careerAssets.workerOwned;

  const contextLine =
    variant === "continuity"
      ? c.continuity.tenureLine
          .replace("{employer}", worker.employer)
          .replace("{count}", String(worker.tenureDays))
          .replace("{days}", c.units.daysLong)
      : variant === "detail"
        ? c.recordDetail.currentEmployment.replace(
            "{facility}",
            worker.facility,
          )
        : c.careerAssets.portableLine;

  return (
    <div className="rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px]">
      <p className={`font-semibold text-[#083d2d] ${nameSize}`}>
        {worker.name} · {worker.role}
      </p>
      <p className={`mt-[6px] text-[#667a73] ${contextSize}`}>
        {worker.emendaId} · {ownedLine}
      </p>
      <p className={`mt-[4px] text-[#667a73] ${contextSize}`}>{contextLine}</p>
    </div>
  );
}
