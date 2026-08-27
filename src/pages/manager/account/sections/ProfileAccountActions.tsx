import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { AccountActionButton, AccountLinkButton } from "./AccountButtons";
import { SectionLabel } from "./SectionLabel";

/* EM-18E "ACCOUNT & SESSION" (761:1117…761:1123): filled green "Open
   Settings" beside the outlined "Switch Facility" (165x46 each, 20px gutter),
   then the full-width outlined "Logout". */
export function ProfileAccountActions({ disabled }: { disabled?: boolean }) {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.profile.accountSession}</SectionLabel>

      <div className="mt-[15px] grid grid-cols-2 gap-[20px] lg:max-w-[350px]">
        <AccountLinkButton to="/manager/settings" tone="dark">
          {c.profile.openSettings}
        </AccountLinkButton>
        <AccountActionButton tone="outline" disabled={disabled}>
          {c.profile.switchFacility}
        </AccountActionButton>
      </div>

      <AccountLinkButton
        to="/manager/logout"
        tone="outline"
        className="mt-[13px] lg:max-w-[350px]"
      >
        {c.profile.logout}
      </AccountLinkButton>
    </section>
  );
}
