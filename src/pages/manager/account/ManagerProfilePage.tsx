import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { ProfileIdentityCard } from "./sections/ProfileIdentityCard";
import { ProfileDetailRows } from "./sections/ProfileDetailRows";
import { ProfileAccountActions } from "./sections/ProfileAccountActions";
import { ProfileDesktopHero } from "./sections/ProfileDesktopHero";
import { ProfileDesktopCards } from "./sections/ProfileDesktopCards";
import { ProfileDesktopActions } from "./sections/ProfileDesktopActions";
import { OfflineNotice } from "./sections/OfflineNotice";

/** Manager Profile — Figma EM-18E (761:1073) on mobile and MD-18E
 *  (1223:69) on desktop. Mobile keeps the compact mint identity card with
 *  five key-value rows and the ACCOUNT & SESSION actions; desktop widens into
 *  the initials hero, the two workspace card rows, the ACCOUNT & WORKSPACE
 *  button row and the access-boundary panel. `?state=offline` disables the
 *  writes. */
export function ManagerProfilePage() {
  const state = useScreenState();
  const offline = state === "offline";
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.profile.title}
        subtitle={c.profile.subtitle}
        desktopSubtitle={c.profile.desktopSubtitle}
      />

      {offline && (
        <div className="mt-[16px]">
          <OfflineNotice />
        </div>
      )}

      <div className="mt-[21px] lg:mt-[27px]">
        <div className="lg:hidden">
          <ProfileIdentityCard />
        </div>
        <ProfileDesktopHero />
      </div>

      <div className="mt-[17px] lg:mt-[30px]">
        <div className="lg:hidden">
          <ProfileDetailRows />
        </div>
        <ProfileDesktopCards />
      </div>

      <div className="mt-[22px] lg:mt-[42px]">
        <div className="lg:hidden">
          <ProfileAccountActions disabled={offline} />
        </div>
        <ProfileDesktopActions disabled={offline} />
      </div>
    </div>
  );
}
