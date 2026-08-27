import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";
import type { RosterWorker } from "../workspaceMock";
import { STATUS_TONE, useWorkerLabels } from "./workerLabels";

/* MD-04 roster table (1213:328…374): one 1060px white card, radius 12,
   #dbe3de hairline — a 50px header band of 10px uppercase #66736b labels
   (no rule beneath it), then 72px rows whose 12px text sits 13px under the
   #dbe3de divider that opens each row. Columns are fixed at
   217/169/135/106/109/160/164 so WORKER … ACTION land on the MD-04 grid, the
   card keeps 60px of quiet space below the last row, exception words show in
   red and the action reads #0c5941 "Open". The dividers stop 24px short of
   both card edges (1213:340 runs 304 -> 1316), so the table sits inside a
   24px gutter and the columns carry no padding of their own.
   Desktop only; EM-04 renders worker cards instead. */
const COLUMN_WIDTHS = [215, 171, 133, 107, 110, 159, 117];

export function RosterTable({ workers }: { workers: RosterWorker[] }) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();
  const labels = useWorkerLabels();

  return (
    <div className="hidden overflow-x-auto rounded-[12px] border border-[#dbe3de] bg-white lg:block lg:pb-[60px]">
      <div className="px-[24px]">
        <table className="w-full min-w-[1012px] table-fixed border-collapse">
        <colgroup>
          {COLUMN_WIDTHS.map((width, index) => (
            <col key={index} style={{ width: `${width}px` }} />
          ))}
        </colgroup>
        <thead>
          <tr className="text-left">
            {[
              c.roster.colWorker,
              c.roster.colRole,
              c.roster.colConnection,
              c.roster.colReports,
              c.roster.colFollowUp,
              c.roster.colVisaAdmin,
              c.roster.colAction,
            ].map((column) => (
              <th
                key={column}
                scope="col"
                className="pt-[22px] pb-[15px] text-[10px] font-semibold text-[#66736b] uppercase"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr
              key={worker.id}
              className="h-[72px] align-top [&:not(:first-child)]:border-t [&:not(:first-child)]:border-[#dbe3de]"
            >
              <td className="pt-[10px] text-[12px] font-semibold text-[#17241f]">
                {worker.name}
              </td>
              <td className="pt-[10px] text-[12px] text-[#17241f]">
                {labels.role[worker.role]}
              </td>
              <td
                className={`pt-[10px] text-[12px] ${STATUS_TONE[labels.connectionTone[worker.connection]]}`}
              >
                {labels.connection[worker.connection]}
              </td>
              <td
                className={`pt-[10px] text-[12px] ${STATUS_TONE[labels.reportsTone[worker.reports]]}`}
              >
                {labels.reports[worker.reports]}
              </td>
              <td className="pt-[10px] text-[12px] text-[#17241f]">
                {worker.followUp}
              </td>
              <td
                className={`pt-[10px] text-[12px] ${STATUS_TONE[labels.visaTone[worker.visaAdmin]]}`}
              >
                {labels.visa[worker.visaAdmin]}
              </td>
              <td className="pt-[10px] text-[12px]">
                <Link
                  to={`/manager/workers/${worker.id}`}
                  className="text-[#0c5941] hover:text-brand-deep"
                >
                  {common.status.open}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
