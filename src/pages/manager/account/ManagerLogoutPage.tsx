import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { LogoutSessionCard } from "./sections/LogoutSessionCard";
import { LogoutEffectsCard } from "./sections/LogoutEffectsCard";
import { LogoutDesktopCard } from "./sections/LogoutDesktopCard";
import { NoteCard } from "./sections/NoteCard";
import { AccountLinkButton } from "./sections/AccountButtons";
import { OfflineNotice } from "./sections/OfflineNotice";

/** Manager sign-out — Figma EM-20 (761:3364) on mobile and MD-20
 *  (1252:14105) on desktop. Mobile stacks the mint CURRENT SESSION card, the
 *  white WHEN YOU SIGN OUT bullets, the mint privacy-safe boundary card and
 *  the Sign out / Cancel pair; desktop folds the same content into the
 *  centred 700px confirmation card of the MD frame, Cancel left of Sign Out.
 *  Signing out returns to the Manager Login; the worker session stays
 *  separate. */
export function ManagerLogoutPage() {
  const state = useScreenState();
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader title={c.logout.title} subtitle={c.logout.subtitle} />

      {state === "offline" && (
        <div className="mt-[16px]">
          <OfflineNotice />
        </div>
      )}

      <div className="lg:mt-[68px]">
        <LogoutDesktopCard />
      </div>

      <div className="lg:hidden">
        <h2 className="mt-[33px] ml-[4px] text-[20px] font-semibold text-brand-deep">
          {c.logout.heading}
        </h2>
        <p className="mt-[8px] ml-[4px] text-[10px] text-[#65746d]">
          {c.logout.intro}
        </p>

        <div className="mt-[20px]">
          <LogoutSessionCard />
        </div>

        <div className="mt-[24px]">
          <LogoutEffectsCard />
        </div>

        <div className="mt-[20px]">
          <NoteCard tone="mint" label={c.logout.boundaryTitle}>
            <p>{c.logout.boundaryBody}</p>
          </NoteCard>
        </div>

        <AccountLinkButton to="/manager/auth" tone="dark" className="mt-[30px]">
          {c.logout.signOut}
        </AccountLinkButton>
        <AccountLinkButton to="/manager" tone="outline" className="mt-[10px]">
          {c.logout.cancel}
        </AccountLinkButton>

        <p className="mt-[18px] text-[9px] text-[#65746d]">
          {c.logout.footnote}
        </p>
      </div>
    </div>
  );
}
