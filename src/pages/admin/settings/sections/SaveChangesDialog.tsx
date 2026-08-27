import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { PENDING_CHANGES, SETTINGS_ORG, changeArrow } from "../settings.mock";
import { SettingsButton } from "./SettingsCard";
import { SettingsDialog } from "./SettingsDialog";

/* AD-09B "Save company changes?" (1226:1179): the 320px confirmation the
   AD-09 "Save changes" button opens. Three before/after rows on a 46px pitch
   — the 9px semibold #65746d rule name at left, the 9px #17362e new value at
   the 144px column — then Cancel + Save changes. */
export function SaveChangesDialog({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);
  const { language } = useLanguage();

  const rows = [
    {
      label: c.confirmSave.escalationWindow,
      value: changeArrow(PENDING_CHANGES.escalationWindow),
    },
    {
      label: c.confirmSave.dailyReminder,
      value: changeArrow(PENDING_CHANGES.dailyReminder),
    },
    {
      label: c.confirmSave.evidenceRequired,
      value: localizeTerm(PENDING_CHANGES.evidenceRequired, language),
    },
  ];

  return (
    <SettingsDialog
      title={c.confirmSave.title}
      subtitle={c.confirmSave.subtitle.replace("{org}", SETTINGS_ORG)}
      width="max-w-[320px] lg:w-[320px]"
      onClose={onCancel}
      actions={
        <>
          <SettingsButton tone="outline" onClick={onCancel}>
            {c.confirmSave.cancel}
          </SettingsButton>
          <SettingsButton tone="dark" onClick={onConfirm}>
            {c.confirmSave.saveChanges}
          </SettingsButton>
        </>
      }
    >
      <dl className="mt-[39px] flex flex-col gap-[37px]">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start">
            <dt className="w-[144px] shrink-0 text-[10px] leading-none font-semibold text-[#65746d] lg:text-[9px]">
              {row.label}
            </dt>
            <dd className="min-w-0 text-[10px] leading-none text-[#17362e] lg:text-[9px]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </SettingsDialog>
  );
}
