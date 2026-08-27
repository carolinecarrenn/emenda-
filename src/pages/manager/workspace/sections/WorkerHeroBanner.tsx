import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import type { RosterWorker } from "../workspaceMock";
import { useWorkerLabels } from "./workerLabels";

/* MD-05 worker header (1213:490…492): a 1060x108 mint #e3f0e8 banner,
   radius 12 — 25px semibold #083d2d name over the 12px #66736b identity line
   "EMENDA ID · {id} · {role} · Connected". EM-05 (761:212…215) keeps the mint
   identity card at 390px but splits the line in two — the worker-owned ID
   over the role / facility / connection clause. The EMENDA ID stays raw in
   every language. */
export function WorkerHeroBanner({ worker }: { worker: RosterWorker }) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const labels = useWorkerLabels();

  return (
    <section className="rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[18px] py-[16px] lg:h-[108px] lg:px-[24px] lg:py-[24px]">
      <h2 className="text-[15px] leading-[1.15] font-bold text-[#083d2d] lg:text-[25px] lg:font-semibold">
        {worker.name}
      </h2>

      <div className="mt-[8px] space-y-[2px] text-[11px] leading-[17px] text-[#66736b] lg:hidden">
        <p>{fill(c.worker.heroMetaId, { id: worker.emendaId })}</p>
        <p>
          {fill(c.worker.heroMetaRole, {
            role: labels.role[worker.role],
            facility: EMPLOYER.facility,
            connection: labels.connection[worker.connection],
          })}
        </p>
      </div>

      <p className="mt-[8px] hidden text-[12px] text-[#66736b] lg:block">
        {fill(c.worker.heroMeta, {
          id: worker.emendaId,
          role: labels.role[worker.role],
          connection: labels.connection[worker.connection],
        })}
      </p>
    </section>
  );
}
