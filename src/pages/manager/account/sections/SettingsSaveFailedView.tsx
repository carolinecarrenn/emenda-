import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { SAVE_FAILED_ROWS } from "../accountData";
import { AccountPageHeader } from "./AccountPageHeader";
import { StatusBadge } from "./StatusBadge";
import { UnsavedChangeRow } from "./UnsavedChangeRow";
import { NoteCard } from "./NoteCard";
import { SectionLabel } from "./SectionLabel";
import { AccountLinkButton } from "./AccountButtons";
import { SettingsSaveFailedDesktop } from "./SettingsSaveFailedDesktop";

/* EM-18D Settings Save Failed (761:3148 · SEC10 layer 1133:30…1133:55): the
   "Settings Not Saved" page header, the red "!" outcome badge, the peach
   summary card (350x82), the UNSAVED CHANGES rows (350x48 on a 56px pitch,
   each marked "Pending"), the cream SAFE RETRY bullets (350x90), the mint
   access-boundary note (350x54) and "Return to Settings". Previous
   preferences stay active — nothing is claimed as saved. */
export function SettingsSaveFailedView() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.saveFailed.title}
        subtitle={c.saveFailed.subtitle}
      />

      <div className="lg:mt-[68px]">
        <SettingsSaveFailedDesktop />
      </div>

      <div className="lg:hidden">
        <div className="mt-[26px]">
          <StatusBadge label={c.saveFailed.badge} />
        </div>

        <div className="mt-[16px]">
          <NoteCard
            tone="alert"
            className="min-h-[82px] lg:min-h-0"
            title={c.saveFailed.summaryTitle}
          >
            <p>{c.saveFailed.summaryBody}</p>
          </NoteCard>
        </div>

        <div className="mt-[24px]">
          <SectionLabel>{c.saveFailed.unsavedChanges}</SectionLabel>
          <div className="mt-[11px] flex flex-col gap-[8px]">
            {SAVE_FAILED_ROWS.map((row) => (
              <UnsavedChangeRow
                key={row.id}
                label={c.saveFailed.rows[row.id]}
                marker={c.saveFailed.notSavedValue}
              />
            ))}
          </div>
        </div>

        <div className="mt-[16px]">
          <NoteCard
            tone="caution"
            className="min-h-[90px] lg:min-h-0"
            label={c.saveFailed.retryTitle}
            bodyClassName="leading-[13px] lg:leading-[19px]"
          >
            <ul>
              {c.saveFailed.retryBullets.map((bullet) => (
                <li key={bullet}>· {bullet}</li>
              ))}
            </ul>
          </NoteCard>
        </div>

        <div className="mt-[12px]">
          <NoteCard tone="mint" className="min-h-[54px] lg:min-h-0">
            <p>{c.saveFailed.privacyBody}</p>
          </NoteCard>
        </div>

        <AccountLinkButton
          to="/manager/settings"
          tone="outline"
          className="mt-[16px]"
        >
          {c.saveFailed.returnToSettings}
        </AccountLinkButton>
      </div>
    </div>
  );
}
