import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { AccountActionButton, AccountLinkButton } from "./AccountButtons";
import { AccountDesktopNotePanel } from "./AccountDesktopCard";
import { SectionLabel } from "./SectionLabel";

/* MD-18E "ACCOUNT & WORKSPACE" (1223:118…1223:129): a 42px button row —
   filled "Open Settings" (220), outlined "Switch Facility" (220),
   "Offline / recovery states" (260) and "Logout" (200) — over the 1060x92
   white access-boundary panel. Desktop labels start 18px in from the button
   edge (1223:120/122/124/126), not centred as on the EM-18E pills. */
export function ProfileDesktopActions({ disabled }: { disabled?: boolean }) {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section className="hidden lg:block">
      <SectionLabel>{c.profile.accountWorkspace}</SectionLabel>

      <div className="mt-[4px] flex gap-[20px]">
        <AccountLinkButton
          to="/manager/settings"
          tone="dark"
          className="lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[220px]"
        >
          {c.profile.openSettings}
        </AccountLinkButton>
        <AccountActionButton
          tone="outline"
          disabled={disabled}
          className="lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[220px]"
        >
          {c.profile.switchFacility}
        </AccountActionButton>
        <AccountLinkButton
          to="/manager/profile?state=offline"
          tone="outline"
          className="lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[260px]"
        >
          {c.profile.offlineRecovery}
        </AccountLinkButton>
        <AccountLinkButton
          to="/manager/logout"
          tone="outline"
          className="lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[200px]"
        >
          {c.profile.logout}
        </AccountLinkButton>
      </div>

      <AccountDesktopNotePanel
        className="mt-[38px]"
        heightClass="h-[92px]"
        tone="white"
        title={c.profile.boundaryTitle}
        body={c.profile.boundaryBody}
      />
    </section>
  );
}
