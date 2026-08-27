import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { NoteCard } from "./NoteCard";

/* EM-18A "Future roles" card (761:1233…761:1235): 349x73 white card —
   Facility Admin and Organization Admin are deliberately out of this MVP. */
export function PermissionsFutureRolesCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <NoteCard
      tone="white"
      className="h-[73px]"
      title={c.permissions.futureTitle}
    >
      <p>{c.permissions.futureBody}</p>
    </NoteCard>
  );
}
