import { EMPLOYER } from "@/data/caregiverReport";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import type { RosterWorker } from "../workspaceMock";
import { useWorkerLabels } from "./workerLabels";

/* MD-05A worker header (1213:552…554): a 1060x86 mint banner — 20px
   semibold "{name} · {EMENDA ID}" over the 11px "{facility} · {role} ·
   Connected" line. EM-05A adds the residence status, the "Current status
   active" line, the expiry and the peach "{n} days remaining" pill.
   Residence-status labels and dates are DATA and stay raw. */
export function VisaWorkerHeader({ worker }: { worker: RosterWorker }) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const labels = useWorkerLabels();
  const { language } = useLanguage();

  return (
    <section className="rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[18px] py-[16px] lg:h-[86px] lg:px-[24px] lg:py-[20px]">
      <div className="flex items-start justify-between gap-[12px]">
        <div className="min-w-0">
          <h2 className="text-[16px] leading-[1.2] font-semibold text-[#083d2d] lg:text-[20px]">
            {worker.name} · {worker.emendaId}
          </h2>
          <p className="mt-[8px] text-[10px] text-[#66736b] lg:text-[11px]">
            {fill(c.visa.heroMeta, {
              facility: EMPLOYER.facility,
              role: labels.role[worker.role],
              connection: labels.connection[worker.connection],
            })}
          </p>
        </div>
        {worker.visaDaysRemaining !== null && (
          <span className="shrink-0 rounded-[10px] bg-[#ffe8e0] px-[10px] py-[4px] text-[9px] font-semibold text-[#a04b2c] lg:text-[10px]">
            {fill(c.visa.daysRemaining, { days: worker.visaDaysRemaining })}
          </span>
        )}
      </div>

      <p className="mt-[10px] text-[10px] text-[#6b8f80] lg:hidden">
        {worker.residenceStatus} · {c.visa.statusActive} ·{" "}
        {fill(c.visa.expiryLine, {
          date: formatDisplayDate(worker.visaValidUntilShort, language),
        })}
      </p>
    </section>
  );
}
