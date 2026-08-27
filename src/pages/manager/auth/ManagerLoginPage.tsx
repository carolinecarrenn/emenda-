import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "./managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "./managerAuthMock";
import { ManagerAuthMobileChrome } from "./sections/ManagerAuthMobileChrome";
import { ManagerLoginBrandPanel } from "./sections/ManagerLoginBrandPanel";
import { ManagerLoginMobileForm } from "./sections/ManagerLoginMobileForm";
import { ManagerLoginDesktopForm } from "./sections/ManagerLoginDesktopForm";
import { ManagerAccessVerifiedPanel } from "./sections/ManagerAccessVerifiedPanel";
import {
  ManagerLoginStatePanel,
  type ManagerLoginPanelState,
} from "./sections/ManagerLoginStatePanel";
import { ManagerAuthResultPanel } from "./sections/ManagerAuthResultPanel";
import {
  ManagerAuthAlertCard,
  ManagerAuthOfflineBanner,
} from "./sections/ManagerAuthCallouts";

/** Manager Login — EM-AUTH-01 (842:1460) single column on mobile and
 *  MD-AUTH-01 (1193:3) brand split on desktop, plus 01A Loading · 01B Invalid
 *  Credentials · 01C Too Many Attempts · 01D Offline · 01E Access Verified.
 *  A successful sign-in hands off to facility selection. */
export function ManagerLoginPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(MANAGER_AUTH_COPY);
  const [email, setEmail] = useState(MANAGER_AUTH_ACCOUNT.workEmail);
  const [password, setPassword] = useState(MANAGER_AUTH_ACCOUNT.password);
  const [managerId, setManagerId] = useState(MANAGER_AUTH_ACCOUNT.managerId);
  const [organization, setOrganization] = useState(
    MANAGER_AUTH_ACCOUNT.organization,
  );
  const [submitting, setSubmitting] = useState(false);

  const verified = state === "verified";
  const offline = state === "offline";
  const invalid = state === "invalid";
  const tooMany = state === "too-many-attempts";
  const loading = state === "loading" || submitting;
  const blocked = loading || offline || tooMany;

  /** MD-AUTH-01A…01E each cover the desktop form with their own slab. */
  const panelState: ManagerLoginPanelState | null = loading
    ? "loading"
    : invalid
      ? "invalid"
      : tooMany
        ? "too-many-attempts"
        : offline
          ? "offline"
          : verified
            ? "verified"
            : null;

  const signIn = () => {
    if (blocked) return;
    setSubmitting(true);
    window.setTimeout(() => navigate("/manager/facility"), 700);
  };

  const context = fillManagerAuthCopy(c.login.context, {
    org: MANAGER_AUTH_ACCOUNT.organization,
  });
  const lockoutCta = fillManagerAuthCopy(c.login.tooManyCta, {
    time: MANAGER_AUTH_ACCOUNT.lockoutRemaining,
  });
  const lockoutBody = fillManagerAuthCopy(c.login.tooManyBody, {
    time: MANAGER_AUTH_ACCOUNT.lockoutRemaining,
  });

  /* Mobile heading block — EM-AUTH-01 H1 y=76 / subtitle y=116 / context
     y=154 (914:2). 01D and 01E replace the pair; 01E drops the context. */
  const mobileTitle = verified
    ? c.login.verifiedTitle
    : offline
      ? c.login.offlineTitle
      : c.login.title;
  const mobileSubtitle = verified
    ? c.login.verifiedSubtitle
    : offline
      ? c.login.offlineSubtitle
      : c.login.subtitle;
  const mobileBodyClass = verified
    ? "mt-[51px]"
    : offline
      ? "mt-[10px]"
      : "mt-[33px]";

  /* Desktop keeps the MD-AUTH-01 inline callouts. */
  const desktopBanner = offline ? (
    <ManagerAuthOfflineBanner
      title={c.offline.title}
      action={c.offline.tryAgain}
      onAction={() => navigate("/manager/auth")}
    />
  ) : null;
  const desktopAlert = invalid ? (
    <ManagerAuthAlertCard
      title={c.login.invalidTitle}
      body={c.login.invalidBody}
    />
  ) : tooMany ? (
    <ManagerAuthAlertCard title={c.login.tooManyTitle} body={lockoutBody} />
  ) : null;

  return (
    <div className="min-h-screen bg-[#f7faf8] lg:flex">
      <ManagerLoginBrandPanel />

      <div className="flex-1 px-[20px] pt-[6px] pb-[48px] lg:bg-canvas lg:px-0 lg:pt-0 lg:pb-0">
        <ManagerAuthMobileChrome />

        <div className="lg:hidden">
          <h1 className="mt-[18px] font-display text-[27px] leading-[1.1] font-bold tracking-[-0.035em] text-[#17362f]">
            {mobileTitle}
          </h1>
          <p className="mt-[6px] text-[12px] text-[#6f8781]">
            {mobileSubtitle}
          </p>
          {verified ? null : (
            <p className="mt-[20px] text-[10px] font-semibold text-[#6f8781]">
              {context}
            </p>
          )}

          <div className={mobileBodyClass}>
            {verified ? (
              <ManagerAccessVerifiedPanel
                onContinue={() => navigate("/manager/facility")}
              />
            ) : offline ? (
              <ManagerAuthResultPanel
                tone="amber"
                bannerTitle={c.offline.title}
                bannerBody={c.login.offlineBannerBody}
                ctaLabel={c.offline.tryAgain}
                onCta={() => navigate("/manager/auth")}
                linkLabel={c.login.backToSignIn}
                onLink={() => navigate("/manager/auth")}
              />
            ) : (
              <ManagerLoginMobileForm
                email={email}
                onEmail={setEmail}
                password={password}
                onPassword={setPassword}
                invalid={invalid}
                tooMany={tooMany}
                loading={loading}
                lockoutCta={lockoutCta}
                lockoutBody={lockoutBody}
                onSubmit={signIn}
                onForgot={() => navigate("/manager/auth/forgot")}
              />
            )}
          </div>
        </div>

        {/* Desktop state slab — MD-AUTH-01x panel at x=610 y=150, i.e. 90px
            past the 520px brand column. */}
        {panelState ? (
          <div className="hidden lg:mt-[150px] lg:ml-[90px] lg:block">
            <ManagerLoginStatePanel
              state={panelState}
              onRetry={() => navigate("/manager/auth")}
              onForgot={() => navigate("/manager/auth/forgot")}
              onContinue={() => navigate("/manager/facility")}
            />
          </div>
        ) : (
          /* Desktop form column — MD-AUTH-01 right side at x=684. */
          <div className="hidden lg:block lg:pt-[219px] lg:pr-[114px] lg:pl-[164px]">
            <ManagerLoginDesktopForm
              managerId={managerId}
              onManagerId={setManagerId}
              organization={organization}
              onOrganization={setOrganization}
              invalid={invalid}
              loading={loading}
              disabled={blocked}
              banner={desktopBanner}
              alert={desktopAlert}
              onSubmit={signIn}
              onForgot={() => navigate("/manager/auth/forgot")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
