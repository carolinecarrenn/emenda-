import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "./managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "./managerAuthMock";
import { ManagerAuthRecoveryShell } from "./sections/ManagerAuthRecoveryShell";
import { ManagerUpdatedMobilePanel } from "./sections/ManagerUpdatedMobilePanel";
import { ManagerUpdatedDesktopCard } from "./sections/ManagerUpdatedDesktopCard";

/** Password Updated — EM-AUTH-04 (842:1794) / MD-AUTH-04 (1193:78): the
 *  terminal success screen of the recovery loop. Permissions are unchanged;
 *  the only way forward is signing in again. */
export function ManagerPasswordUpdatedPage() {
  const navigate = useNavigate();
  const c = useSectionCopy(MANAGER_AUTH_COPY);

  const context = fillManagerAuthCopy(c.forgot.context, {
    org: MANAGER_AUTH_ACCOUNT.organization,
  });
  const backToLogin = () => navigate("/manager/auth");

  return (
    <ManagerAuthRecoveryShell
      context={context}
      title={c.updated.title}
      subtitle={c.updated.subtitle}
      desktopTitle={c.updated.desktopTitle}
      desktopSubtitle={c.updated.desktopSubtitle}
      mobileBodyClass="mt-[22px]"
      cardWidthClass="lg:w-[519px]"
      cardTopClass="mt-[92px]"
      cardPaddingClass="px-[40px] pt-[39px] pb-[52px]"
      mobile={<ManagerUpdatedMobilePanel onBackToLogin={backToLogin} />}
      desktop={<ManagerUpdatedDesktopCard onBackToLogin={backToLogin} />}
    />
  );
}
