import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { EDIT_DRAFT, type AdminEmployee } from "../employees.mock";
import {
  OperationalPanel,
  PanelButton,
  PanelField,
  PanelFootnote,
  PanelHeader,
  PanelNote,
} from "./OperationalPanel";

/* AD-02D "Edit employee detail" (1239:225): the EDIT panel — Identity,
   Phone / language, Team and Manager read-backs (the manager row drawn as the
   "Ayu Lestari → Teguh Saputra" reassignment), the amber #fff5db "Assignment
   impact" note, the outlined "Discard" (86x34) beside the filled #0a5740
   "Save changes" (112x34), and the save-outcome footnote. */
export function EditEmployeeForm({
  employee,
  onDiscard,
  onSave,
}: {
  employee: AdminEmployee;
  onDiscard: () => void;
  onSave: () => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  return (
    <OperationalPanel>
      <PanelHeader
        pill={c.editForm.pill}
        title={c.editForm.title}
        subtitle={c.editForm.subtitle}
      />

      <div className="mt-[33px] flex flex-col gap-[15px]">
        <PanelField
          label={c.editForm.identity}
          value={`${employee.name} · ${employee.id} · ${localizeTerm(employee.status, language)}`}
        />
        <PanelField
          label={c.editForm.phoneLanguage}
          value={`${employee.phone} · ${employee.language}`}
        />
        <PanelField
          label={c.editForm.team}
          value={localizeTerm(employee.team, language)}
        />
        <PanelField
          label={c.editForm.manager}
          value={`${employee.manager} → ${EDIT_DRAFT.nextManager}`}
        />
      </div>

      <div className="mt-[14px]">
        <PanelNote
          tone="amber"
          title={c.editForm.noteTitle}
          body={c.editForm.noteBody}
        />
      </div>

      <div className="mt-[14px] flex flex-wrap items-center gap-[24px]">
        <PanelButton
          tone="ghost"
          label={c.editForm.discard}
          onClick={onDiscard}
        />
        <PanelButton
          tone="primary"
          label={c.editForm.saveChanges}
          onClick={onSave}
        />
      </div>

      <PanelFootnote>{c.editForm.outcome}</PanelFootnote>
    </OperationalPanel>
  );
}
