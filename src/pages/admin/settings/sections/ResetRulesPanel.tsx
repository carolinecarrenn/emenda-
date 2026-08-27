import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { StateButton, StateField, StateNote, StatePanel } from "./StatePanel";

/* AD-09D "Reset operational rules" (1239:802) — ?state=reset-rules.
   The destructive state drawn in full: what the reset targets, the red
   "Will change" note against the blue "Will NOT delete" note that protects
   employees, reports, daily reports, reward transactions and the Activity
   Log, the Keep settings / Reset rules pair, then the downstream effect and
   the audit record. The footnote repeats the AD-SCOPE boundary. */
export function ResetRulesPanel() {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  return (
    <StatePanel
      pill={c.resetPanel.pill}
      title={c.resetPanel.title}
      subtitle={c.resetPanel.subtitle}
      footnote={c.resetPanel.footnote}
    >
      <StateField
        label={c.resetPanel.resetTarget}
        value={c.resetPanel.resetTargetValue}
      />
      <StateNote
        tone="red"
        title={c.resetPanel.willChangeTitle}
        body={c.resetPanel.willChangeBody}
      />
      <StateNote
        tone="blue"
        title={c.resetPanel.willNotDeleteTitle}
        body={c.resetPanel.willNotDeleteBody}
      />
      <div className="flex items-center gap-[16px]">
        <StateButton tone="outline">{c.resetPanel.keepSettings}</StateButton>
        <StateButton tone="danger">{c.resetPanel.resetRules}</StateButton>
      </div>
      <StateField
        label={c.resetPanel.afterReset}
        value={c.resetPanel.afterResetValue}
      />
      <StateField label={c.resetPanel.audit} value={c.resetPanel.auditValue} />
    </StatePanel>
  );
}
