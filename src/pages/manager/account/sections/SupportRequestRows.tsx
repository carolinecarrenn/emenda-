import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { SENT_ROWS } from "../accountData";
import { KeyValueRow } from "./KeyValueRow";
import { SectionLabel } from "./SectionLabel";

/* EM-19A "REQUEST DETAILS" (1133:94…1133:109): Topic, Subject, Organization,
   Facility and Manager role on 350x48 white rows with a 56px pitch and the
   value column at x=144. */
export function SupportRequestRows({ label }: { label: string }) {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-[11px] flex flex-col gap-[8px]">
        {SENT_ROWS.map((row) => (
          <KeyValueRow
            key={row.id}
            label={c.supportSent.rows[row.id]}
            keyWidth="w-[102px] lg:w-[150px]"
            minHeight="min-h-[48px]"
            value={
              row.value ??
              (row.id === "topic"
                ? c.supportSent.topicValue
                : c.supportSent.subjectValue)
            }
          />
        ))}
      </div>
    </section>
  );
}
