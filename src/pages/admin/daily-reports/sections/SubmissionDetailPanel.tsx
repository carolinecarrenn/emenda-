import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { SUBMISSION_DETAIL } from "../daily-reports.mock";
import {
  DetailButton,
  DetailButtonRow,
  DetailField,
  DetailNote,
  DetailPanel,
} from "./DetailPanelParts";

/* AD-06D "Employee submission detail" (1239:565): the SUBMISSION pill, the
   read-only employee / status / content / reminder-history fields, the blue
   #ebf5fc "Automatic dashboard update" note, the Open employee / View report
   pair and the monitor-but-never-rewrite footnote. */
export function SubmissionDetailPanel() {
  const c = useSectionCopy(DAILY_REPORTS_COPY);
  const { language } = useLanguage();
  const d = c.detail.submission;

  return (
    <DetailPanel
      pill={d.pill}
      title={d.title}
      subtitle={d.subtitle}
      footnote={d.footnote}
    >
      <DetailField
        label={d.employee}
        value={`${SUBMISSION_DETAIL.employee} · ${SUBMISSION_DETAIL.team}`}
      />
      <DetailField
        label={d.status}
        value={d.statusValue
          .replace("{status}", localizeTerm(SUBMISSION_DETAIL.status, language))
          .replace("{time}", SUBMISSION_DETAIL.submittedAt)}
      />
      <DetailField label={d.content} value={d.contentValue} />
      <DetailField
        label={d.reminderHistory}
        value={d.reminderHistoryValue.replace(
          "{time}",
          SUBMISSION_DETAIL.reminderSentAt,
        )}
      />
      <DetailNote title={d.noteTitle} body={d.noteBody} />
      <DetailButtonRow>
        <DetailButton label={d.openEmployee} tone="outline" />
        <DetailButton label={d.viewReport} tone="solid" />
      </DetailButtonRow>
    </DetailPanel>
  );
}
