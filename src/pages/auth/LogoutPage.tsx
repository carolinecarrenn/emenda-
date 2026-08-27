import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useScreenState } from "@/hooks/useScreenState";
import { AUTH_COPY } from "./auth.copy";
import { useOffline } from "./useOffline";
import { AuthLayout } from "./components/AuthLayout";
import {
  AuthPrimaryButton,
  AuthSecondaryButton,
} from "./components/AuthButtons";
import { OfflineBanner } from "./components/AuthCallouts";
import { WorkerOwnedCard } from "./WelcomePage";

/** WD-11 Logout Confirmation (761:3245) + 11A Loading · 11B Offline Pending
 *  (761:3267 — "You're signed out" with a pending server-sync banner over
 *  the Welcome content). W-11 mobile: same single column.
 *
 *  11B is the outcome of confirming the log out with no connection, so it is
 *  raised by pressing "Log out" while the browser is offline as well as by
 *  ?state=offline-pending; its "Auto retry" finishes the queued server
 *  sign-out and lands on W-03 Welcome.
 *
 *  Desktop frames 761:3245/3256: the amber card is 132 tall (14px top, 56px
 *  foot) so the two buttons land at y=420 and y=492. */
export function LogoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = useScreenState();
  const c = useSectionCopy(AUTH_COPY);
  const common = useCommonCopy();
  const [loggingOut, setLoggingOut] = useState(false);

  const offline = useOffline();
  const loading = state === "loading" || loggingOut;

  /* W-11B is the *outcome* of confirming a log out with no connection, so it
     is entered by pressing "Log out" while the browser is offline — not only
     by ?state=offline-pending. */
  if (state === "offline-pending") {
    return (
      <AuthLayout
        title={c.logout.signedOutTitle}
        subtitle={c.logout.signedOutSubtitle}
        railTopClass="lg:pt-[190px]"
        railMobileTopClass="mt-[12px]"
        subtitleSizeClass="text-[13px] leading-[18px] lg:text-[18px] lg:leading-[27px]"
      >
        <OfflineBanner
          title={c.logout.pendingTitle}
          action={c.logout.pendingAction}
          /* Retry: once the connection is back the queued server sign-out
             finishes and the device lands on W-03 Welcome. */
          onAction={() => {
            if (!offline) navigate("/auth/welcome");
          }}
        />
        <div className="mt-[30px] lg:mt-[32px]">
          <WorkerOwnedCard heightClass="h-[162px] lg:h-[178px]" />
        </div>
        <div className="mt-[34px] lg:mt-[36px]">
          <AuthPrimaryButton onClick={() => navigate("/auth/login")}>
            {common.action.logIn}
          </AuthPrimaryButton>
        </div>
        <div className="mt-[14px] lg:mt-[16px]">
          <AuthSecondaryButton onClick={() => navigate("/auth/register")}>
            {c.welcome.createAccount}
          </AuthSecondaryButton>
        </div>
        <p className="mt-[28px] text-center text-[12px] leading-[18px] text-[#7c918b] lg:mt-[26px] lg:text-[14px]">
          {c.welcome.footnote}
        </p>
      </AuthLayout>
    );
  }

  const logOut = () => {
    if (loading) return;
    setLoggingOut(true);
    setTimeout(
      () =>
        navigate(
          offline ? "/auth/logout?state=offline-pending" : "/auth/welcome",
        ),
      900,
    );
  };

  /* "Cancel" means "stay where I was". On a direct hit there is no history
     entry to go back to, so fall through to the signed-in surface. */
  const cancel = () => {
    if (loading) return;
    if (location.key !== "default") navigate(-1);
    else navigate("/worker");
  };

  return (
    <AuthLayout
      title={c.logout.title}
      subtitle={c.logout.subtitle}
      railTopClass="lg:pt-[248px]"
      railMobileTopClass="mt-[44px]"
      headTopClass="pt-[24px] lg:pt-0"
      subtitleGapClass="mt-[7px] lg:mt-[15px]"
      titleSizeClass="text-[26px] leading-[31px] lg:text-[44px] lg:leading-[1.12]"
      subtitleSizeClass="text-[12px] leading-[18px] lg:text-[18px] lg:leading-[27px]"
    >
      <div className="rounded-[16px] bg-[#fff7e1] px-[16px] pt-[14px] pb-[36px] lg:pb-[56px]">
        <p className="text-[13px] leading-[16px] font-semibold text-[#845c10]">
          {c.logout.cardTitle}
        </p>
        <p className="mt-[10px] text-[12px] leading-[18px] text-[#7c918b]">
          {c.logout.cardBody}
        </p>
      </div>

      <div className="mt-[30px] lg:mt-[40px]">
        <AuthPrimaryButton
          onClick={logOut}
          disabled={loading}
          className="rounded-[14px] bg-[#0b5d4c] hover:bg-brand-deep"
          disabledClass="rounded-[14px] bg-[#c2d1c9]"
          heightClass="h-[50px] lg:h-[56px]"
        >
          {loading ? c.logout.loggingOut : common.nav.logOut}
        </AuthPrimaryButton>
      </div>
      <div className="mt-[12px] lg:mt-[16px]">
        <AuthSecondaryButton
          onClick={cancel}
          disabled={loading}
          className="rounded-[14px] border-[#d4e1dd] text-[#0b5d4c]"
          heightClass="h-[50px] lg:h-[56px]"
        >
          {common.action.cancel}
        </AuthSecondaryButton>
      </div>
    </AuthLayout>
  );
}
