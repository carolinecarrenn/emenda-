import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import { MANAGER_IDENTITY } from "./accountData";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { MoreIdentityBanner } from "./sections/MoreIdentityBanner";
import { MoreLinkCards } from "./sections/MoreLinkCards";
import { MoreLogoutCard } from "./sections/MoreLogoutCard";
import { MoreBoundaryBanner } from "./sections/MoreBoundaryBanner";
import { OfflineNotice } from "./sections/OfflineNotice";

/** Manager More / Navigation & Account hub — Figma MD-MORE (1223:14) on
 *  desktop and EM-MORE (761:1005) on mobile. Mint identity banner, the
 *  operations + governance link cards, the standalone logout card and the
 *  desktop footer privacy banner. `?state=offline` adds the read-only strip. */
export function ManagerMorePage() {
  const state = useScreenState();
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.more.titleMobile}
        subtitle={c.more.subtitleMobile.replace(
          "{facility}",
          MANAGER_IDENTITY.facility,
        )}
        desktopTitle={c.more.titleDesktop}
        desktopSubtitle={c.more.subtitleDesktop}
      />

      {state === "offline" && (
        <div className="mt-[16px]">
          <OfflineNotice />
        </div>
      )}

      <div className="mt-[21px] lg:mt-[27px]">
        <MoreIdentityBanner />
      </div>

      <div className="mt-[16px] lg:mt-[36px]">
        <MoreLinkCards />
      </div>

      <div className="mt-[7px] lg:mt-[46px]">
        <MoreLogoutCard />
      </div>

      <div className="lg:mt-[40px]">
        <MoreBoundaryBanner />
      </div>
    </div>
  );
}
