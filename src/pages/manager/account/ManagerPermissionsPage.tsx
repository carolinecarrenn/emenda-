import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { PermissionsRoleCard } from "./sections/PermissionsRoleCard";
import { PermissionsAllowedList } from "./sections/PermissionsAllowedList";
import { PermissionsPrivateDataCard } from "./sections/PermissionsPrivateDataCard";
import { PermissionsFutureRolesCard } from "./sections/PermissionsFutureRolesCard";
import {
  PermissionsDesktopHero,
  PermissionsDesktopPanels,
} from "./sections/PermissionsDesktopPanels";
import { AccountLinkButton } from "./sections/AccountButtons";
import { AccountDesktopBoundaryStrip } from "./sections/AccountDesktopCard";
import { OfflineNotice } from "./sections/OfflineNotice";

/** Role & permissions — Figma EM-18A (761:1212) on mobile and MD-18A
 *  (1223:178) on desktop. The permission contract, read-only: the mint role
 *  card, the ALLOWED checklist, the peach "Private worker data" NOT AVAILABLE
 *  panel and the future-roles note — stacked on mobile, set side by side on
 *  desktop next to the policy-control boundary strip. */
export function ManagerPermissionsPage() {
  const state = useScreenState();
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.permissions.title}
        subtitle={c.permissions.subtitle}
        desktopTitle={c.permissions.desktopTitle}
        desktopSubtitle={c.permissions.desktopSubtitle}
      />

      {state === "offline" && (
        <div className="mt-[16px]">
          <OfflineNotice />
        </div>
      )}

      <div className="mt-[21px] lg:mt-[27px]">
        <div className="lg:hidden">
          <PermissionsRoleCard />
        </div>
        <PermissionsDesktopHero />
      </div>

      <div className="mt-[18px] lg:mt-[28px]">
        <div className="lg:hidden">
          <PermissionsAllowedList />
        </div>
        <PermissionsDesktopPanels />
      </div>

      <div className="mt-[71px] lg:hidden">
        <PermissionsPrivateDataCard />
      </div>

      <div className="mt-[18px] lg:hidden">
        <PermissionsFutureRolesCard />
      </div>

      <div className="mt-[23px] flex flex-col lg:mt-[38px] lg:flex-row lg:items-start lg:gap-[20px]">
        <AccountLinkButton
          to="/manager/settings"
          tone="outline"
          className="lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[220px]"
        >
          {c.permissions.backToSettings}
        </AccountLinkButton>
        <AccountDesktopBoundaryStrip className="hidden h-[64px] w-[820px] lg:flex">
          {c.permissions.boundary}
        </AccountDesktopBoundaryStrip>
      </div>
    </div>
  );
}
