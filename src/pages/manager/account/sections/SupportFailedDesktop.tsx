import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { PRESERVED_ROWS } from "../accountData";
import { AccountDesktopLinkButton } from "./AccountButtons";
import {
  OutcomeDesktopActions,
  OutcomeDesktopCard,
  OutcomeDesktopPanel,
} from "./OutcomeDesktopCard";

/* MD-19B Support Request Failed (1252:14092…1252:14103): one 840x360 white
   card centred in the content column — the 756x92 peach summary panel titled
   with the EM-19B outcome badge (1252:14093…1252:14095), so the badge leads
   and the canonical summary title/body follow under it; the preserved-draft
   caps label (1252:14096) over
   the kept entries (1252:14097), the mint retry-rule panel (1252:14098/14099)
   and the outlined "Back to Support" / dark "Try Again" 160x40 pair 38px
   under the card (1252:14100…1252:14103). */
export function SupportFailedDesktop() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden lg:block">
      <OutcomeDesktopCard width="w-[840px]" minHeight="min-h-[360px]">
        <OutcomeDesktopPanel tone="alert">
          <p className="text-[18px] leading-[24px] font-semibold text-[#c74a3d]">
            {c.supportFailed.badge}
          </p>
          <p className="mt-[10px] text-[13px] leading-[19px] font-semibold text-brand-deep">
            {c.supportFailed.summaryTitle}
          </p>
          <p className="mt-[4px] text-[13px] leading-[19px] text-[#65746d]">
            {c.supportFailed.summaryBody}
          </p>
        </OutcomeDesktopPanel>

        <p className="mt-[32px] text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#65746d] uppercase">
          {c.supportFailed.detailsPreserved}
        </p>
        <div className="mt-[16px] space-y-[3px] text-[13px] leading-[19px] text-brand-deep">
          {PRESERVED_ROWS.map((id) => (
            <p key={id}>
              {c.supportFailed.rows[id]} · {c.supportFailed.values[id]}
            </p>
          ))}
        </div>

        <OutcomeDesktopPanel tone="caution" className="mt-[28px]">
          <p className="text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#0c513b] uppercase">
            {c.supportFailed.retryTitle}
          </p>
          <ul className="mt-[8px] space-y-[3px] text-[13px] leading-[19px] text-[#65746d]">
            {c.supportFailed.retryBullets.map((bullet) => (
              <li key={bullet}>· {bullet}</li>
            ))}
          </ul>
        </OutcomeDesktopPanel>
      </OutcomeDesktopCard>

      <OutcomeDesktopActions className="mx-auto mt-[38px] w-[840px] px-[42px]">
        <AccountDesktopLinkButton
          to="/manager/support"
          tone="outline"
          className="w-[160px]"
        >
          {c.supportFailed.backToSupport}
        </AccountDesktopLinkButton>
        <AccountDesktopLinkButton
          to="/manager/support?state=submitting"
          tone="dark"
          className="w-[160px]"
        >
          {c.supportFailed.tryAgain}
        </AccountDesktopLinkButton>
      </OutcomeDesktopActions>

      <p className="mx-auto mt-[16px] w-[840px] px-[42px] text-[11px] leading-[16px] text-[#65746d]">
        {c.supportFailed.footnote}
      </p>
    </div>
  );
}
