import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import type { AdminEmployee } from "../employees.mock";
import {
  OperationalPanel,
  PanelButton,
  PanelField,
  PanelFootnote,
  PanelHeader,
  PanelNote,
} from "./OperationalPanel";

/* AD-02D "Deactivate / reactivate" (1239:250): the ACCESS panel — the employee
   read-back and the required Reason field, the mint "Preserved data" note, the
   outlined "Cancel" (86x34) beside the destructive #fcebe8 / #8c1f1a
   "Deactivate employee" (161x34), the blue #ebf5fc "After deactivate" note,
   the filled #0a5740 "Reactivate" (98x34), and the reactivation footnote. */
export function DeactivateEmployeePanel({
  employee,
  onCancel,
  onDeactivate,
  onReactivate,
}: {
  employee: AdminEmployee;
  onCancel: () => void;
  onDeactivate: () => void;
  onReactivate: () => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  return (
    <OperationalPanel>
      <PanelHeader
        pill={c.accessForm.pill}
        title={c.accessForm.title}
        subtitle={c.accessForm.subtitle}
      />

      <div className="mt-[33px] flex flex-col gap-[15px]">
        <PanelField
          label={c.accessForm.employee}
          value={`${employee.name} · ${localizeTerm(employee.status, language)}`}
        />
        <PanelField
          label={c.accessForm.reason}
          value={c.accessForm.reasonValue}
        />
      </div>

      <div className="mt-[15px]">
        <PanelNote
          tone="mint"
          title={c.accessForm.preservedTitle}
          body={c.accessForm.preservedBody}
        />
      </div>

      <div className="mt-[14px] flex flex-wrap items-center gap-[24px]">
        <PanelButton
          tone="ghost"
          label={c.accessForm.cancel}
          onClick={onCancel}
        />
        <PanelButton
          tone="danger"
          label={c.accessForm.deactivate}
          onClick={onDeactivate}
        />
      </div>

      <div className="mt-[16px]">
        <PanelNote
          tone="blue"
          title={c.accessForm.afterTitle}
          body={c.accessForm.afterBody}
        />
      </div>

      <div className="mt-[14px] flex">
        <PanelButton
          tone="primary"
          label={c.accessForm.reactivate}
          onClick={onReactivate}
        />
      </div>

      <PanelFootnote>{c.accessForm.outcome}</PanelFootnote>
    </OperationalPanel>
  );
}
