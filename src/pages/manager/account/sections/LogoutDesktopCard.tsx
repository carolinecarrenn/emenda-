import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY } from "../accountData";
import { AccountDesktopLinkButton } from "./AccountButtons";
import {
  OutcomeDesktopActions,
  OutcomeDesktopCard,
  OutcomeDesktopPanel,
} from "./OutcomeDesktopCard";

/* MD-20 Logout Confirmation (1252:14127…1252:14136): one 700x360 white card
   centred in the content column — the 24px centred "Sign out of …?" headline
   (1252:14128), the centred intro (1252:14129), the 600x94 mint session
   boundary panel (1252:14130…1252:14132) and the Cancel / Sign Out 180x40
   pair inside the card (1252:14133…1252:14136).
   The canonical EM-20 CURRENT SESSION identity, the WHEN YOU SIGN OUT
   effects and the cancel footnote all stay — the desktop frame folds them
   into the same card. */
export function LogoutDesktopCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden lg:block">
      <OutcomeDesktopCard
        width="w-[700px]"
        minHeight="min-h-[360px]"
        padding="px-[50px]"
      >
        <h2 className="text-center text-[24px] leading-[30px] font-bold text-brand-deep">
          {c.logout.heading}
        </h2>
        <p className="mt-[20px] text-center text-[13px] leading-[19px] text-[#65746d]">
          {c.logout.intro}
        </p>

        <p className="mt-[24px] text-center text-[13px] leading-[19px] font-semibold text-brand-deep">
          {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
        </p>
        <p className="mt-[4px] text-center text-[11px] leading-[16px] text-[#65746d]">
          {MANAGER_IDENTITY.organization} · {MANAGER_IDENTITY.facility} ·{" "}
          {c.logout.sessionStatus}
        </p>

        <OutcomeDesktopPanel tone="mint" className="mt-[26px]">
          <p className="text-center text-[13px] leading-[20px] font-semibold text-brand-deep">
            {c.logout.boundaryTitle}
          </p>
          <p className="mt-[8px] text-center text-[11px] leading-[16px] text-[#65746d]">
            {c.logout.boundaryBody}
          </p>
        </OutcomeDesktopPanel>

        <p className="mt-[24px] text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#0c513b] uppercase">
          {c.logout.whenYouSignOut}
        </p>
        <ul className="mt-[8px] space-y-[3px] text-[13px] leading-[19px] text-[#65746d]">
          {c.logout.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>

        <OutcomeDesktopActions className="mt-[32px]">
          <AccountDesktopLinkButton
            to="/manager"
            tone="outline"
            className="w-[180px]"
          >
            {c.logout.cancel}
          </AccountDesktopLinkButton>
          <AccountDesktopLinkButton
            to="/manager/auth"
            tone="dark"
            className="w-[180px]"
          >
            {c.logout.signOut}
          </AccountDesktopLinkButton>
        </OutcomeDesktopActions>

        <p className="mt-[16px] text-center text-[11px] leading-[16px] text-[#65746d]">
          {c.logout.footnote}
        </p>
      </OutcomeDesktopCard>
    </div>
  );
}
