import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { PENDING_CHANGES, SETTINGS_ORG } from "../settings.mock";
import { StateButton, StateField, StateNote, StatePanel } from "./StatePanel";

/* AD-09D "Confirm and apply changes" (1239:777) — ?state=confirm-apply.
   The save state: four consequence rows scoped to this company only, the
   Cancel + Confirm save pair, and the red "Save failed" note that fixes the
   failure contract — keep every edited value, offer retry, never revert the
   form silently (AD-09C step 04). */
export function ConfirmApplyPanel() {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  return (
    <StatePanel
      pill={c.confirmApply.pill}
      title={c.confirmApply.title}
      subtitle={c.confirmApply.subtitle}
      footnote={c.confirmApply.footnote}
    >
      <StateField
        label={c.confirmApply.company}
        value={c.confirmApply.companyValue.replace("{org}", SETTINGS_ORG)}
      />
      <StateField
        label={c.confirmApply.reports}
        value={c.confirmApply.reportsValue.replace(
          "{hours}",
          String(PENDING_CHANGES.escalationHours),
        )}
      />
      <StateField
        label={c.confirmApply.dailyReports}
        value={c.confirmApply.dailyReportsValue.replace(
          "{time}",
          PENDING_CHANGES.reminderTime,
        )}
      />
      <StateField
        label={c.confirmApply.resolution}
        value={c.confirmApply.resolutionValue}
      />
      <div className="flex items-center gap-[24px]">
        <StateButton tone="outline">{c.confirmApply.cancel}</StateButton>
        <StateButton tone="primary">{c.confirmApply.confirmSave}</StateButton>
      </div>
      <StateNote
        tone="red"
        title={c.confirmApply.failedTitle}
        body={c.confirmApply.failedBody}
      />
    </StatePanel>
  );
}
