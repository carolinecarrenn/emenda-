import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { SAVE_FAILED_ROWS } from "../accountData";
import { AccountDesktopLinkButton } from "./AccountButtons";
import {
  OutcomeDesktopActions,
  OutcomeDesktopCard,
  OutcomeDesktopPanel,
} from "./OutcomeDesktopCard";

/* MD-18D Settings Save Failed (1252:13972…1252:13983): one 840x360 white card
   centred in the content column — the 756x92 peach summary panel with its
   18px red title (1252:13973…1252:13975), the "UNSAVED CHANGES" caps label
   (1252:13976) over the pending preference lines (1252:13977), the mint
   no-partial-success panel (1252:13978/13979) and the outlined 170x40
   "Return to Settings" / dark 170x40 "Retry Save" pair 38px under the card
   on the card's own 42px inset (1252:13980…1252:13983).
   The frame titles the peach panel with the EM-18D outcome badge, so the
   badge leads and the canonical summary title/body follow under it.
   The four canonical EM-18D rows and the cream SAFE RETRY rule are kept —
   the desktop frame only relayouts them. */
export function SettingsSaveFailedDesktop() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden lg:block">
      <OutcomeDesktopCard width="w-[840px]" minHeight="min-h-[360px]">
        <OutcomeDesktopPanel tone="alert">
          <p className="text-[18px] leading-[24px] font-semibold text-[#c74a3d]">
            {c.saveFailed.badge}
          </p>
          <p className="mt-[10px] text-[13px] leading-[19px] font-semibold text-brand-deep">
            {c.saveFailed.summaryTitle}
          </p>
          <p className="mt-[4px] text-[13px] leading-[19px] text-[#65746d]">
            {c.saveFailed.summaryBody}
          </p>
        </OutcomeDesktopPanel>

        <p className="mt-[32px] text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#65746d] uppercase">
          {c.saveFailed.unsavedChanges}
        </p>
        <dl className="mt-[16px]">
          {SAVE_FAILED_ROWS.map((row) => (
            <div
              key={row.id}
              className="flex h-[30px] items-center justify-between gap-6"
            >
              <dt className="text-[13px] leading-[19px] text-brand-deep">
                {c.saveFailed.rows[row.id]}
              </dt>
              <dd className="text-[12px] leading-[18px] font-semibold text-[#c74a3d]">
                {c.saveFailed.notSavedValue}
              </dd>
            </div>
          ))}
        </dl>

        <OutcomeDesktopPanel tone="caution" className="mt-[28px]">
          <p className="text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#0c513b] uppercase">
            {c.saveFailed.retryTitle}
          </p>
          <ul className="mt-[8px] space-y-[3px] text-[13px] leading-[19px] text-[#65746d]">
            {c.saveFailed.retryBullets.map((bullet) => (
              <li key={bullet}>· {bullet}</li>
            ))}
          </ul>
        </OutcomeDesktopPanel>

        <OutcomeDesktopPanel tone="mint" className="mt-[16px]">
          <p className="text-[13px] leading-[19px] text-[#65746d]">
            {c.saveFailed.privacyBody}
          </p>
        </OutcomeDesktopPanel>
      </OutcomeDesktopCard>

      <OutcomeDesktopActions className="mx-auto mt-[38px] w-[840px] px-[42px]">
        <AccountDesktopLinkButton
          to="/manager/settings"
          tone="outline"
          className="w-[170px]"
        >
          {c.saveFailed.returnToSettings}
        </AccountDesktopLinkButton>
        <AccountDesktopLinkButton
          to="/manager/settings?state=settings-saved"
          tone="dark"
          className="w-[170px]"
        >
          {c.saveFailed.retrySave}
        </AccountDesktopLinkButton>
      </OutcomeDesktopActions>
    </div>
  );
}
