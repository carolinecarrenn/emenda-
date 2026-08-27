import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "../managerAuthMock";

/**
 * MD-AUTH-00 Splash (1235:2) — the desktop splash is a two-column brand
 * moment, not a centred stack: a 520x900 #083d2d column carrying the 54px
 * wordmark at y=270, the caps tagline, the operations line and the
 * organization block, beside a right column at x=720 that states the manager
 * scope. Mobile keeps its own centred EM-AUTH-00 panel.
 */
export function ManagerSplashDesktopPanel() {
  const c = useSectionCopy(MANAGER_AUTH_COPY).splash;

  return (
    <div className="relative hidden min-h-screen bg-[#f8faf8] lg:block">
      <div className="absolute inset-y-0 left-0 w-[520px] bg-brand-deep" />

      <p className="absolute top-[270px] left-[56px] font-display text-[54px] leading-[65px] font-bold text-white">
        EMENDA
      </p>
      <p className="absolute top-[342px] left-[56px] text-[16px] leading-[19px] font-semibold text-[#e3f0e8]">
        {c.tagline}
      </p>
      <p className="absolute top-[388px] left-[56px] w-[390px] text-[22px] leading-[27px] font-semibold text-white">
        {c.desktopBrandLine}
      </p>
      <p className="absolute top-[500px] left-[56px] w-[390px] text-[18px] leading-[22px] font-semibold text-white">
        {MANAGER_AUTH_ACCOUNT.organization}
      </p>
      <p className="absolute top-[532px] left-[56px] w-[390px] text-[14px] leading-[17px] text-[#e3f0e8]">
        {c.workspaceCaption}
      </p>

      <p className="absolute top-[315px] left-[720px] w-[500px] text-[18px] leading-[22px] font-semibold text-[#0c5941]">
        {c.desktopLabel}
      </p>
      <p className="absolute top-[360px] left-[720px] w-[520px] font-display text-[36px] leading-[44px] font-bold text-brand-deep">
        {c.desktopHeadline}
      </p>
      <p className="absolute top-[416px] left-[720px] w-[520px] text-[16px] leading-[19px] text-[#65746d]">
        {c.desktopBody}
      </p>
      <p className="absolute top-[720px] left-[720px] w-[520px] text-[13px] leading-[16px] text-[#65746d]">
        {c.desktopFooter}
      </p>
    </div>
  );
}
