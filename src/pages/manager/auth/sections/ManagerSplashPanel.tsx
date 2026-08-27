import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";

/** EM-AUTH-00 centre block (842:1456-1458 + 908:3-4): the 34px green EMENDA
 *  wordmark at y=300, the caps tagline, the privacy subline, and the distinct
 *  "MANAGER WORKSPACE / Facility management workspace" label that separates
 *  the employer surface from the worker app. */
export function ManagerSplashPanel() {
  const c = useSectionCopy(MANAGER_AUTH_COPY).splash;

  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-display text-[34px] leading-none font-bold text-[#0b6b57] lg:text-[52px]">
        EMENDA
      </p>
      <p className="mt-[12px] text-[11px] font-semibold text-[#17362f] lg:text-[14px]">
        {c.tagline}
      </p>
      <p className="mt-[9px] text-[12px] text-[#6f8781] lg:text-[15px]">
        {c.subline}
      </p>
      <p className="mt-[8px] text-[10px] font-semibold text-[#6f8781] lg:text-[12px]">
        {c.workspaceLabel}
      </p>
      <p className="mt-[12px] text-[11px] text-[#6f8781] lg:text-[13px]">
        {c.workspaceCaption}
      </p>
    </div>
  );
}
