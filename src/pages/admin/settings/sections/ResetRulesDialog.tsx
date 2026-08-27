import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { SettingsButton } from "./SettingsCard";
import { SettingsDialog } from "./SettingsDialog";

/* AD-09B "Reset operational rules?" (1226:1192): the 328px confirmation the
   "Reset rules" buttons open. A 106px #fdf0ef panel (radius 10) carries the
   10px bold #b04139 "Destructive configuration change" headline over the 9px
   #65746d consequence line; both actions are outline buttons, so the
   destructive one is never the easy default. */
export function ResetRulesDialog({
  onKeep,
  onReset,
}: {
  onKeep: () => void;
  onReset: () => void;
}) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  return (
    <SettingsDialog
      title={c.confirmReset.title}
      subtitle={c.confirmReset.subtitle}
      width="max-w-[328px] lg:w-[328px]"
      onClose={onKeep}
      actions={
        <>
          <SettingsButton tone="outline" onClick={onKeep}>
            {c.confirmReset.keepSettings}
          </SettingsButton>
          <SettingsButton tone="outline" onClick={onReset}>
            {c.confirmReset.resetRules}
          </SettingsButton>
        </>
      }
    >
      <div className="mt-[24px] rounded-[10px] bg-[#fdf0ef] px-[12px] pt-[12px] pb-[16px] lg:h-[106px]">
        <p className="text-[11px] leading-none font-bold text-[#b04139] lg:text-[10px]">
          {c.confirmReset.alertTitle}
        </p>
        <p className="mt-[12px] text-[10px] leading-[15px] text-[#65746d] lg:text-[9px]">
          {c.confirmReset.alertBody}
        </p>
      </div>
    </SettingsDialog>
  );
}
