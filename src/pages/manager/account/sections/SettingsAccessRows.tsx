import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { SETTINGS_LINKS } from "../accountData";
import { ChevronRow } from "./ChevronRow";
import { SectionLabel } from "./SectionLabel";

/* EM-18 "ACCESS & ACCOUNT" (761:1196…761:1202): two 51px chevron rows —
   "Role & permissions" (EM-18A) and "Language / locale / timezone" (EM-18B),
   13px below the caps label (761:1196 bottom 497.6 / 761:1197 top 510.5). */
export function SettingsAccessRows() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.settings.accessAccount}</SectionLabel>
      <div className="mt-[13px] flex flex-col gap-[11px]">
        {SETTINGS_LINKS.map((link) => (
          <ChevronRow key={link.id} to={link.to} title={c.settings[link.id]} />
        ))}
      </div>
    </section>
  );
}
