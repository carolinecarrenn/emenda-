import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "./managerAuth.copy";
import { ManagerAuthMobileChrome } from "./sections/ManagerAuthMobileChrome";
import { ManagerSplashPanel } from "./sections/ManagerSplashPanel";
import { ManagerSplashDesktopPanel } from "./sections/ManagerSplashDesktopPanel";

/** EM-AUTH-00 Splash (842:1451) — the manager brand moment on the #f7faf8
 *  canvas: status bar + small wordmark header, the centred workspace block and
 *  the "Manager Mobile Experience" footer caption. No buttons; auto-advances
 *  to the manager sign-in screen. Desktop is MD-AUTH-00 (1235:2) instead:
 *  a 520px deep-green brand column beside a scope column at x=720. */
export function ManagerAuthSplashPage() {
  const navigate = useNavigate();
  const c = useSectionCopy(MANAGER_AUTH_COPY).splash;

  useEffect(() => {
    const timer = setTimeout(() => navigate("/manager/auth"), 2200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      onClick={() => navigate("/manager/auth")}
      className="relative flex min-h-screen cursor-pointer flex-col bg-[#f7faf8] px-[20px] pt-[6px] lg:px-0 lg:pt-0"
    >
      <ManagerSplashDesktopPanel />

      <div className="lg:hidden">
        <ManagerAuthMobileChrome />
      </div>
      <div className="flex flex-1 flex-col justify-start pt-[244px] lg:hidden">
        <ManagerSplashPanel />
      </div>
      <p className="absolute inset-x-0 bottom-[70px] text-center text-[10px] text-[#6f8781] lg:hidden">
        {c.footer}
      </p>
    </div>
  );
}
