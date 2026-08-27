import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import type { AdminEmployee } from "../employees.mock";
import { InviteEmployeeForm } from "./InviteEmployeeForm";
import { EditEmployeeForm } from "./EditEmployeeForm";
import { DeactivateEmployeePanel } from "./DeactivateEmployeePanel";

/* AD-02D "Employees — invite, edit, deactivate, reactivate" (1239:196): the
   CONCRETE OPERATIONAL STATES board — a 19px title over its 11px line, then
   the three 760x720 panels (INVITE / EDIT / ACCESS) laid 60px apart. Below lg
   they stack into one column; the board exists only on the desktop canvas. */
export function EmployeeDetailedStates({
  employee,
  onDismiss,
}: {
  employee: AdminEmployee;
  onDismiss: () => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);

  return (
    <section className="rounded-[14px] border border-[#d1e3db] bg-white p-[24px]">
      <p className="text-[10px] font-semibold tracking-[0.04em] text-[#0a5740]">
        {c.detailedStates.eyebrow}
      </p>
      <h2 className="mt-[14px] text-[20px] leading-[1.2] font-semibold text-[#13332b]">
        {c.detailedStates.title}
      </h2>
      <p className="mt-[12px] text-[11px] text-[#63756e]">
        {c.detailedStates.subtitle}
      </p>

      <div className="mt-[22px] flex flex-col gap-[24px] lg:-mx-[4px] lg:flex-row lg:flex-nowrap lg:gap-[60px] lg:overflow-x-auto lg:px-[4px] lg:pb-[8px]">
        <InviteEmployeeForm onCancel={onDismiss} onSendInvite={onDismiss} />
        <EditEmployeeForm
          employee={employee}
          onDiscard={onDismiss}
          onSave={onDismiss}
        />
        <DeactivateEmployeePanel
          employee={employee}
          onCancel={onDismiss}
          onDeactivate={onDismiss}
          onReactivate={onDismiss}
        />
      </div>
    </section>
  );
}
