import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import {
  MANAGER_IDENTITY,
  PREFERENCE_ROWS,
  SETTINGS_LINKS,
  type PreferenceRowId,
  type SettingsLinkId,
} from "../accountData";
import { AccountDesktopKeyValueCard } from "./AccountDesktopCard";
import { SectionLabel } from "./SectionLabel";

/* MD-18 account banner (1223:151…1223:153): 1060x90 mint panel with the 18px
   "name · role" line over the 12px "facility · timezone" caption. */
export function SettingsDesktopBanner() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden h-[90px] rounded-[12px] bg-[#e3f0e8] px-[24px] pt-[23px] lg:block">
      <p className="text-[18px] leading-[24px] font-semibold text-brand-deep">
        {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
      </p>
      <p className="mt-[3px] text-[12px] leading-[16px] text-[#65746d]">
        {c.settings.identityCaption.replace(
          "{facility}",
          MANAGER_IDENTITY.facility,
        )}
      </p>
    </div>
  );
}

const PREFERENCE_WIDTH: Record<PreferenceRowId, string> = {
  language: "w-[510px]",
  timezone: "w-[530px]",
  notifications: "w-[510px]",
  defaultFacility: "w-[530px]",
};

/* MD-18 "PREFERENCES" (1223:154…1223:166): a 2x2 grid of 74px cards —
   510/530 wide, 20px column gutter, 16px row gutter. */
export function SettingsDesktopPreferences() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section className="hidden lg:block">
      <SectionLabel>{c.settings.preferences}</SectionLabel>
      <div className="mt-[2px] flex flex-wrap gap-x-[20px] gap-y-[16px]">
        {PREFERENCE_ROWS.map((row) => (
          <AccountDesktopKeyValueCard
            key={row.id}
            className={PREFERENCE_WIDTH[row.id]}
            label={c.settings.rows[row.id]}
            value={row.value ?? c.settings.notificationsValue}
          />
        ))}
      </div>
    </section>
  );
}

/* MD-18 "ACCESS & ACCOUNT" (1223:167…1223:173): two 1060x62 white rows, the
   13px title at 20px in and the 11px scope note at the 500px column. No
   chevron — the desktop frame states the scope instead. */
export function SettingsDesktopAccessRows() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  const meta: Record<SettingsLinkId, string> = {
    rolePermissions: c.settings.rolePermissionsMeta,
    languageLocaleTimezone: c.settings.languageLocaleTimezoneMeta,
  };

  return (
    <section className="hidden lg:block">
      <SectionLabel>{c.settings.accessAccount}</SectionLabel>
      <div className="mt-[2px] flex flex-col gap-[14px]">
        {SETTINGS_LINKS.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className="grid h-[62px] grid-cols-[480px_1fr] items-center rounded-[10px] border border-[#dbe3de] bg-white px-[20px] hover:border-brand"
          >
            <span className="text-[13px] leading-[18px] font-semibold text-brand-deep">
              {c.settings[link.id]}
            </span>
            <span className="text-[11px] leading-[16px] text-[#65746d]">
              {meta[link.id]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
