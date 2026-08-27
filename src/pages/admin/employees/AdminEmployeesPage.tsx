import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { AdminShell } from "../shell/AdminShell";
import { ADMINEMPLOYEES_COPY } from "./employees.copy";
import { filterEmployees } from "./employees.format";
import {
  ADMIN_EMPLOYEES,
  DEFAULT_SELECTED_EMPLOYEE_ID,
  type AdminEmployee,
  type EmployeeFilterKey,
} from "./employees.mock";
import { EmployeesIntro } from "./sections/EmployeesIntro";
import { EmployeesFilterBar } from "./sections/EmployeesFilterBar";
import { EmployeeDirectoryCard } from "./sections/EmployeeDirectoryCard";
import { EmployeeStatsRow } from "./sections/EmployeeStatsRow";
import { SelectedEmployeeCard } from "./sections/SelectedEmployeeCard";
import { NeedsAdminActionCard } from "./sections/NeedsAdminActionCard";
import { EmployeeOverlay } from "./sections/EmployeeOverlay";
import { InviteEmployeeModal } from "./sections/InviteEmployeeModal";
import { EmployeeDetailPanel } from "./sections/EmployeeDetailPanel";
import { InviteEmployeeForm } from "./sections/InviteEmployeeForm";
import { EditEmployeeForm } from "./sections/EditEmployeeForm";
import { DeactivateEmployeePanel } from "./sections/DeactivateEmployeePanel";
import { EmployeeLifecycleFlow } from "./sections/EmployeeLifecycleFlow";
import { EmployeeDetailedStates } from "./sections/EmployeeDetailedStates";

/** Company Admin — Employee Management (Figma page "06 · Company Admin
 *  Experience", 1182:5690).
 *
 *  AD-02  Employee Management — Directory   (1223:535)  — the base screen:
 *         header row, filter bar, the 760px directory card and the 368px rail
 *         of stat pair, Selected employee and Needs admin action.
 *  AD-02B Employee Interaction States       (1226:2)    — ?state=invite and
 *         ?state=detail, the two panels the header button and each row's
 *         "View" open.
 *  AD-02D Employee Detailed States          (1239:196)  — ?state=invite-form,
 *         ?state=edit and ?state=deactivate reached from those panels, plus
 *         ?state=forms for the whole board as drawn.
 *  AD-02C Employee Lifecycle Flow           (1226:2585) — ?state=lifecycle.
 *
 *  Scope (Figma AD-SCOPE board): Company Admin ≠ Super Admin — this screen
 *  manages one company's own employees only, and AD-02C's rule holds: no hard
 *  delete, deactivation preserves operational history.
 */
export function AdminEmployeesPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);

  const [filter, setFilter] = useState<EmployeeFilterKey>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(DEFAULT_SELECTED_EMPLOYEE_ID);

  const go = useCallback(
    (next: string | null) => {
      navigate(next ? `/admin/employees?state=${next}` : "/admin/employees");
    },
    [navigate],
  );

  const close = useCallback(() => go(null), [go]);

  const selected: AdminEmployee =
    ADMIN_EMPLOYEES.find((employee) => employee.id === selectedId) ??
    ADMIN_EMPLOYEES[0];

  const rows = filterEmployees(ADMIN_EMPLOYEES, filter, query);

  function openDetail(employee: AdminEmployee) {
    setSelectedId(employee.id);
    go("detail");
  }

  const overlay = (() => {
    switch (state) {
      case "invite":
        return (
          <EmployeeOverlay
            label={c.inviteModal.title}
            size="invite"
            onClose={close}
          >
            <InviteEmployeeModal
              onCancel={close}
              onSendInvite={() => go("invite-form")}
            />
          </EmployeeOverlay>
        );
      case "invite-form":
        return (
          <EmployeeOverlay
            label={c.inviteForm.title}
            size="wide"
            onClose={close}
          >
            <InviteEmployeeForm onCancel={close} onSendInvite={close} />
          </EmployeeOverlay>
        );
      case "detail":
        return (
          <EmployeeOverlay
            label={c.detail.title}
            size="detail"
            onClose={close}
          >
            <EmployeeDetailPanel
              employee={selected}
              onEdit={() => go("edit")}
              onResendInvite={close}
              onDeactivate={() => go("deactivate")}
            />
          </EmployeeOverlay>
        );
      case "edit":
        return (
          <EmployeeOverlay label={c.editForm.title} size="wide" onClose={close}>
            <EditEmployeeForm
              employee={selected}
              onDiscard={() => go("detail")}
              onSave={() => go("detail")}
            />
          </EmployeeOverlay>
        );
      case "deactivate":
        return (
          <EmployeeOverlay
            label={c.accessForm.title}
            size="wide"
            onClose={close}
          >
            <DeactivateEmployeePanel
              employee={selected}
              onCancel={() => go("detail")}
              onDeactivate={close}
              onReactivate={close}
            />
          </EmployeeOverlay>
        );
      default:
        return null;
    }
  })();

  if (state === "lifecycle") {
    return (
      <AdminShell>
        <div className="w-full max-w-[1144px]">
          <EmployeeLifecycleFlow />
        </div>
      </AdminShell>
    );
  }

  if (state === "forms") {
    return (
      <AdminShell>
        <div className="w-full max-w-[1144px]">
          <EmployeeDetailedStates employee={selected} onDismiss={close} />
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
        <EmployeesIntro onInvite={() => go("invite")} />

        <EmployeesFilterBar
          filter={filter}
          onFilterChange={setFilter}
          query={query}
          onQueryChange={setQuery}
        />

        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start">
          <EmployeeDirectoryCard employees={rows} onView={openDetail} />

          <div className="flex flex-col gap-[16px] lg:w-[368px] lg:shrink-0">
            <EmployeeStatsRow />
            <SelectedEmployeeCard
              employee={selected}
              onEdit={() => go("edit")}
              onResendInvite={() => go("detail")}
            />
            <NeedsAdminActionCard />
          </div>
        </div>
      </div>

      {overlay}
    </AdminShell>
  );
}
