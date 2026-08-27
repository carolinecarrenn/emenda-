import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { PRESERVED_ROWS } from "../accountData";
import { KeyValueRow } from "./KeyValueRow";
import { SectionLabel } from "./SectionLabel";

/* EM-19B "PRESERVED REQUEST" (1133:121…1133:133): Topic, Subject, Context and
   Privacy on 350x48 white rows with a 56px pitch and the value column at
   x=144. These are the entries the Manager can retry with — no support record
   was created, so no ticket id is shown. */
export function SupportPreservedRows() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.supportFailed.detailsPreserved}</SectionLabel>
      <div className="mt-[11px] flex flex-col gap-[8px]">
        {PRESERVED_ROWS.map((id) => (
          <KeyValueRow
            key={id}
            label={c.supportFailed.rows[id]}
            value={c.supportFailed.values[id]}
            keyWidth="w-[102px] lg:w-[150px]"
            minHeight="min-h-[48px]"
          />
        ))}
      </div>
    </section>
  );
}
