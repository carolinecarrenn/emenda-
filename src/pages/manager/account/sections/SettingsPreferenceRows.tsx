import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { PREFERENCE_ROWS } from "../accountData";
import { KeyValueRow } from "./KeyValueRow";
import { SectionLabel } from "./SectionLabel";

/* EM-18 "PREFERENCES" (761:1183…761:1195): four 51px white key-value rows on
   a 62px pitch — Language, Timezone, Notifications, Default facility. The
   caps label sits 13px above the first row (761:1183 bottom 209.6 against
   761:1184 top 222.5), not 25px. */
export function SettingsPreferenceRows() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.settings.preferences}</SectionLabel>
      <div className="mt-[13px] flex flex-col gap-[11px]">
        {PREFERENCE_ROWS.map((row) => (
          <KeyValueRow
            key={row.id}
            label={c.settings.rows[row.id]}
            value={row.value ?? c.settings.notificationsValue}
          />
        ))}
      </div>
    </section>
  );
}
