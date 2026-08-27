import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";
import type { RosterWorker } from "../workspaceMock";
import { WorkspaceLinkButton } from "./WorkspaceButtons";
import { useWorkerLabels } from "./workerLabels";

/* MD-05 WORK & ADMINISTRATION (1213:524…528): a 470x280 white card listing
   Facility · Connection · Visa/Admin · Latest report · Professional records,
   closing on "Private personal categories are not available." and the
   "Open Visa / Admin" outline button. EM-05 (761:238…243) runs the same
   facts as a mint #e3f0e8 card headed "Work & administration" and hands the
   Career / Work Log and Visa / Admin buttons to the pair below it. */
export function WorkAdministrationCard({ worker }: { worker: RosterWorker }) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const labels = useWorkerLabels();

  const rows = [
    { label: c.worker.rowFacility, value: EMPLOYER.facility },
    { label: c.worker.rowConnection, value: c.worker.valueActive },
    { label: c.worker.rowVisaAdmin, value: labels.visa[worker.visaAdmin] },
    {
      label: c.worker.rowLatestReport,
      value:
        worker.reports === "done"
          ? c.worker.valueCompleted
          : c.worker.valueMissing,
    },
    {
      label: c.worker.rowProfessionalRecords,
      value: c.worker.valueWorkerApproved,
    },
  ];

  return (
    <section className="rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[18px] py-[18px] lg:flex lg:h-[280px] lg:flex-col lg:border-[#dbe3de] lg:bg-white lg:px-[24px] lg:pt-[24px] lg:pb-[18px]">
      <h2 className="text-[15px] font-bold text-[#083d2d] lg:text-[14px] lg:font-semibold">
        <span className="lg:hidden">{c.worker.mobileWorkAdmin}</span>
        <span className="hidden lg:inline">{c.worker.workAdmin}</span>
      </h2>

      <ul className="mt-[16px] space-y-[6px] text-[12px] leading-[19px] text-[#66736b] lg:space-y-0 lg:text-[13px] lg:leading-[16px]">
        {rows.map((row) => (
          <li key={row.label}>
            {row.label} · {row.value}
          </li>
        ))}
      </ul>

      <p className="mt-[16px] text-[12px] leading-[19px] text-[#66736b] lg:text-[13px] lg:leading-[16px]">
        {c.worker.workAdminFooter}
      </p>

      <WorkspaceLinkButton
        to={`/manager/workers/${worker.id}/visa`}
        className="mt-[18px] hidden w-full lg:mt-auto lg:flex lg:h-[40px] lg:w-[180px]"
      >
        {c.worker.openVisaAdmin}
      </WorkspaceLinkButton>
    </section>
  );
}
