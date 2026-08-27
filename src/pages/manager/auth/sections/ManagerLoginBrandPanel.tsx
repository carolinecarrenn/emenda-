import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "../managerAuthMock";

/** MD-AUTH-01 brand split panel (nodes 1193:5-13): 520px deep-green #083d2d
 *  column with the 46px white EMENDA wordmark at x=56 y=109, the 24px mint
 *  tagline, the organization name and the privacy-boundary line. Desktop
 *  only — EM-AUTH-01 has no brand panel. */
export function ManagerLoginBrandPanel() {
  const c = useSectionCopy(MANAGER_AUTH_COPY).login;

  return (
    <aside className="hidden w-[520px] shrink-0 bg-brand-deep px-[56px] pt-[109px] pb-[80px] lg:block">
      <p className="font-display text-[46px] leading-[56px] font-bold text-white">
        EMENDA
      </p>
      <p className="mt-[22px] max-w-[340px] text-[24px] leading-[29px] font-bold text-brand-soft">
        {c.brandTagline}
      </p>
      <p className="mt-[69px] text-[18px] leading-[22px] font-bold text-white">
        {MANAGER_AUTH_ACCOUNT.organization}
      </p>
      <p className="mt-[16px] max-w-[368px] text-[14px] leading-[17px] text-brand-soft">
        {c.brandBoundary}
      </p>
    </aside>
  );
}
