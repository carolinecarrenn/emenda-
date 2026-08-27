import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { PROFILE_ROWS } from "../accountData";
import { KeyValueRow } from "./KeyValueRow";

/* EM-18E key-value rows (761:1102…761:1116): five 51px white rows on a 62px
   pitch — Manager ID, Organization, Current facility, Language, Timezone. */
export function ProfileDetailRows() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="flex flex-col gap-[11px]">
      {PROFILE_ROWS.map((row) => (
        <KeyValueRow
          key={row.id}
          label={c.profile.rows[row.id]}
          value={row.value ?? ""}
        />
      ))}
    </div>
  );
}
