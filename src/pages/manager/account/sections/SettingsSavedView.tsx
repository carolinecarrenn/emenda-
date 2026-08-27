import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY, SAVED_ROWS } from "../accountData";
import { AccountPageHeader } from "./AccountPageHeader";
import { OutcomeHeadline } from "./OutcomeHeadline";
import { NoteCard } from "./NoteCard";
import { SectionLabel } from "./SectionLabel";
import { KeyValueRow } from "./KeyValueRow";
import { AccountLinkButton } from "./AccountButtons";
import { SettingsSavedDesktop } from "./SettingsSavedDesktop";

/* EM-18C Settings Saved (761:3107 · SEC10 layer 1133:2…1133:29): the
   "Settings Saved" page header, the ✓ outcome badge, the mint workspace card
   (350x76), the UPDATED PREFERENCES rows (350x50 on a 58px pitch with the
   value column at x=160), the "ACCESS BOUNDARY UNCHANGED" mint card, an
   outlined "Back to Settings" and the display-only footnote. */
export function SettingsSavedView() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.saved.pageTitle}
        subtitle={c.saved.subtitle}
      />

      <div className="mt-[26px] lg:hidden">
        <OutcomeHeadline title={c.saved.title} />
      </div>

      <div className="lg:mt-[68px]">
        <SettingsSavedDesktop />
      </div>

      <div className="lg:hidden">
        <div className="mt-[16px]">
          <NoteCard
            tone="mint"
            className="min-h-[76px] lg:min-h-0"
            title={`${MANAGER_IDENTITY.organization} · ${MANAGER_IDENTITY.facility}`}
          >
            <p>
              {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
            </p>
          </NoteCard>
        </div>

        <div className="mt-[24px]">
          <SectionLabel>{c.saved.updatedPreferences}</SectionLabel>
          <div className="mt-[11px] flex flex-col gap-[8px]">
            {SAVED_ROWS.map((row) => (
              <KeyValueRow
                key={row.id}
                label={c.saved.rows[row.id]}
                keyWidth="w-[120px] lg:w-[160px]"
                minHeight="min-h-[50px]"
                value={
                  row.value ??
                  (row.id === "notifications"
                    ? c.saved.notificationsValue
                    : c.saved.reportDefaultsValue)
                }
              />
            ))}
          </div>
        </div>

        <div className="mt-[14px]">
          <NoteCard
            tone="mint"
            className="min-h-[66px] lg:min-h-0"
            label={c.saved.boundaryTitle}
          >
            <p>{c.saved.boundaryBody}</p>
          </NoteCard>
        </div>

        <AccountLinkButton
          to="/manager/settings"
          tone="outline"
          className="mt-[18px] lg:max-w-[350px]"
        >
          {c.saved.backToSettings}
        </AccountLinkButton>

        <p className="mt-[14px] text-[9px] text-[#65746d] lg:text-[11px]">
          {c.saved.footnote}
        </p>
      </div>
    </div>
  );
}
