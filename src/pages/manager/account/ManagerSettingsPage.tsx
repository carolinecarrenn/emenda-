import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { SettingsIdentityCard } from "./sections/SettingsIdentityCard";
import { SettingsPreferenceRows } from "./sections/SettingsPreferenceRows";
import { SettingsAccessRows } from "./sections/SettingsAccessRows";
import {
  SettingsDesktopAccessRows,
  SettingsDesktopBanner,
  SettingsDesktopPreferences,
} from "./sections/SettingsDesktopSections";
import { SettingsSavedView } from "./sections/SettingsSavedView";
import { SettingsSaveFailedView } from "./sections/SettingsSaveFailedView";
import { AccountActionButton } from "./sections/AccountButtons";
import { AccountDesktopBoundaryStrip } from "./sections/AccountDesktopCard";
import { OfflineNotice } from "./sections/OfflineNotice";

/** Manager Settings — Figma EM-18 (761:1154) on mobile and MD-18 (1223:130)
 *  on desktop. Identity banner, PREFERENCES (stacked rows on mobile, a 2x2
 *  card grid on desktop), the ACCESS & ACCOUNT rows into EM-18A / EM-18B and
 *  the "Save settings" pill — paired on desktop with the access-boundary
 *  strip. Outcome variants: `?state=settings-saved` (EM-18C),
 *  `?state=save-failed` (EM-18D), `?state=offline`. */
export function ManagerSettingsPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  if (state === "settings-saved") return <SettingsSavedView />;
  if (state === "save-failed") return <SettingsSaveFailedView />;

  const offline = state === "offline";

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.settings.title}
        subtitle={c.settings.subtitle}
        desktopSubtitle={c.settings.desktopSubtitle}
      />

      {offline && (
        <div className="mt-[16px]">
          <OfflineNotice />
        </div>
      )}

      <div className="mt-[21px] lg:mt-[27px]">
        <div className="lg:hidden">
          <SettingsIdentityCard />
        </div>
        <SettingsDesktopBanner />
      </div>

      <div className="mt-[18px] lg:mt-[28px]">
        <div className="lg:hidden">
          <SettingsPreferenceRows />
        </div>
        <SettingsDesktopPreferences />
      </div>

      <div className="mt-[26px] lg:mt-[36px]">
        <div className="lg:hidden">
          <SettingsAccessRows />
        </div>
        <SettingsDesktopAccessRows />
      </div>

      <div className="mt-[22px] flex flex-col lg:mt-[40px] lg:flex-row lg:items-start lg:gap-[20px]">
        <AccountActionButton
          tone="dark"
          disabled={offline}
          onClick={() => navigate("/manager/settings?state=settings-saved")}
          className="lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[260px]"
        >
          {c.settings.saveSettings}
        </AccountActionButton>
        <AccountDesktopBoundaryStrip className="hidden h-[64px] w-[780px] lg:flex">
          {c.settings.boundary}
        </AccountDesktopBoundaryStrip>
      </div>
    </div>
  );
}
