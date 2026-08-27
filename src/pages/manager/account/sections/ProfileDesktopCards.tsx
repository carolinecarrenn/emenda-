import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import {
  MANAGER_IDENTITY,
  PROFILE_DESKTOP_ROW_1,
  PROFILE_DESKTOP_ROW_2,
  type ProfileCard,
  type ProfileCardId,
} from "../accountData";
import { AccountDesktopKeyValueCard } from "./AccountDesktopCard";

/* MD-18E workspace cards (1223:95…1223:117): four 250px cards on the first
   row (Manager ID · Organization · Current facility · Open work) and a
   330/330/360 row underneath (Language · Timezone · Session). Open work and
   Session carry a second, quieter meta line. */
export function ProfileDesktopCards() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  const label: Record<ProfileCardId, string> = {
    ...c.profile.rows,
    openWork: c.profile.openWorkLabel,
    session: c.profile.sessionLabel,
  };

  const value: Record<ProfileCardId, string> = {
    managerId: MANAGER_IDENTITY.managerId,
    organization: MANAGER_IDENTITY.organization,
    currentFacility: MANAGER_IDENTITY.facility,
    language: MANAGER_IDENTITY.languages,
    timezone: MANAGER_IDENTITY.timezone,
    openWork: c.profile.openWorkValue,
    session: c.profile.sessionValue,
  };

  const meta: Partial<Record<ProfileCardId, string>> = {
    openWork: c.profile.openWorkMeta,
    session: c.profile.sessionMeta,
  };

  const card = (item: ProfileCard) => (
    <AccountDesktopKeyValueCard
      key={item.id}
      className={item.widthClass}
      label={label[item.id]}
      value={value[item.id]}
      meta={meta[item.id]}
    />
  );

  return (
    <div className="hidden lg:block">
      <div className="flex gap-[20px]">
        {PROFILE_DESKTOP_ROW_1.map(card)}
      </div>
      <div className="mt-[26px] flex gap-[20px]">
        {PROFILE_DESKTOP_ROW_2.map(card)}
      </div>
    </div>
  );
}
