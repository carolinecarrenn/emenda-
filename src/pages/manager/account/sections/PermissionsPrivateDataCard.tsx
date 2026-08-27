import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { NoteCard } from "./NoteCard";
import { SectionLabel } from "./SectionLabel";

/* EM-18A "NOT AVAILABLE" (761:1227…761:1229): the large 350x118 peach card
   headed by the red "Private worker data" — Health / Stress / Life logs,
   family data and private eCoin are outside the manager boundary. */
export function PermissionsPrivateDataCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.permissions.notAvailable}</SectionLabel>
      <div className="mt-[9px]">
        <NoteCard
          tone="peach"
          className="h-[118px]"
          title={c.permissions.privateTitle}
        >
          {c.permissions.privateLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </NoteCard>
      </div>
    </section>
  );
}
