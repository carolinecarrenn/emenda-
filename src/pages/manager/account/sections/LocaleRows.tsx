import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { LOCALE_ROWS } from "../accountData";
import { KeyValueRow } from "./KeyValueRow";
import { LocaleLanguageRow } from "./LocaleLanguageRow";

/* EM-18B rows (761:1245…761:1259): Language (live switch), Timezone
   Asia/Tokyo (UTC+9), Date format 2026/08/11, Time format 24-hour and
   Phone format Japan +81 / Indonesia +62 — five 51px white rows. */
export function LocaleRows() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="flex flex-col gap-[11px]">
      {LOCALE_ROWS.map((row) =>
        row.id === "language" ? (
          <LocaleLanguageRow key={row.id} label={c.locale.rows.language} />
        ) : (
          <KeyValueRow
            key={row.id}
            label={c.locale.rows[row.id]}
            value={row.value ?? c.locale.timeFormatValue}
          />
        ),
      )}
    </div>
  );
}
