import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "./managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "./managerAuthMock";
import { ManagerAuthRecoveryShell } from "./sections/ManagerAuthRecoveryShell";
import { ManagerForgotMobileForm } from "./sections/ManagerForgotMobileForm";
import { ManagerForgotDesktopCard } from "./sections/ManagerForgotDesktopCard";
import { ManagerNoWorkEmailPanel } from "./sections/ManagerNoWorkEmailPanel";
import { ManagerAuthResultPanel } from "./sections/ManagerAuthResultPanel";
import {
  ManagerRecoveryStatePanel,
  type ManagerRecoveryPanelState,
} from "./sections/ManagerRecoveryStatePanel";
import {
  ManagerAuthAlertCard,
  ManagerAuthMintCard,
  ManagerAuthOfflineBanner,
} from "./sections/ManagerAuthCallouts";

/** Forgot Password — EM-AUTH-02 (842:1562) / MD-AUTH-02 (1193:27), with 02A
 *  Loading · 02B Reset Code Sent · 02C Offline · 02D Email Not Found · 02E No
 *  Work Email Access. Mobile layers its banners on the form; desktop swaps the
 *  card for the matching MD-AUTH-02x slab. Sending the code hands off to the
 *  reset step. */
export function ManagerForgotPasswordPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(MANAGER_AUTH_COPY);
  const [email, setEmail] = useState(
    /* EM-AUTH-02D types an address the directory rejects (842:1888). */
    state === "email-not-found"
      ? MANAGER_AUTH_ACCOUNT.unknownWorkEmail
      : MANAGER_AUTH_ACCOUNT.workEmail,
  );
  const [sending, setSending] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

  const offline = state === "offline";
  const notFound = state === "email-not-found";
  const noWorkEmail = state === "no-work-email";
  const loading = state === "loading" || sending;
  const sent = state === "code-sent" || codeSent;
  const disabled = loading || offline;

  const context = fillManagerAuthCopy(c.forgot.context, {
    org: MANAGER_AUTH_ACCOUNT.organization,
  });

  /* 02B and 02D relabel the mobile heading pair (842:1595 / 842:1885). */
  const mobileTitle = sent ? c.forgot.sentPageTitle : c.forgot.title;
  const mobileSubtitle = sent
    ? fillManagerAuthCopy(c.forgot.sentPageSubtitle, { email })
    : notFound
      ? c.forgot.notFoundSubtitle
      : c.forgot.subtitle;

  const backToLogin = () => navigate("/manager/auth");
  const restart = () => navigate("/manager/auth/forgot");

  /** The desktop states that replace the MD-AUTH-02 card with a slab. */
  const panelState: ManagerRecoveryPanelState | null = loading
    ? "sendingRequest"
    : offline
      ? "forgotOffline"
      : notFound
        ? "emailNotFound"
        : noWorkEmail
          ? "noWorkEmail"
          : sent
            ? "codeSent"
            : null;

  const panelPrimary = () => {
    if (panelState === "codeSent") navigate("/manager/auth/reset");
    else if (panelState === "noWorkEmail") navigate("/manager/support");
    else restart();
  };

  const submit = () => {
    if (disabled) return;
    if (sent) {
      navigate("/manager/auth/reset");
      return;
    }
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setCodeSent(true);
    }, 700);
  };

  const banner = offline ? (
    <ManagerAuthOfflineBanner
      title={c.offline.title}
      action={c.offline.tryAgain}
      onAction={restart}
    />
  ) : null;

  const alert = notFound ? (
    <ManagerAuthAlertCard
      title={c.forgot.notFoundTitle}
      body={c.forgot.notFoundBody}
    />
  ) : null;

  const notice = sent ? (
    <ManagerAuthMintCard title={c.forgot.sentTitle} body={c.forgot.sentBody} />
  ) : null;

  const desktopPanel = panelState ? (
    <ManagerRecoveryStatePanel
      state={panelState}
      onPrimary={panelPrimary}
      onSecondary={backToLogin}
    />
  ) : undefined;

  if (noWorkEmail) {
    return (
      <ManagerAuthRecoveryShell
        context={context}
        title={c.forgot.noEmailTitle}
        subtitle={c.forgot.noEmailSubtitle}
        desktopTitle={c.forgot.noEmailTitle}
        desktopSubtitle={c.forgot.noEmailSubtitle}
        mobileBodyClass="mt-[24px]"
        desktopPanel={desktopPanel}
        mobile={
          <ManagerNoWorkEmailPanel
            onOpenSupport={() => navigate("/manager/support")}
            onBack={backToLogin}
          />
        }
        desktop={
          <ManagerNoWorkEmailPanel
            onOpenSupport={() => navigate("/manager/support")}
          />
        }
      />
    );
  }

  return (
    <ManagerAuthRecoveryShell
      context={context}
      title={mobileTitle}
      subtitle={mobileSubtitle}
      desktopTitle={c.forgot.desktopTitle}
      desktopSubtitle={c.forgot.desktopSubtitle}
      cardPaddingClass="px-[40px] pt-[36px] pb-[81px]"
      mobileBodyClass={sent ? "mt-[24px]" : "mt-[57px]"}
      desktopPanel={desktopPanel}
      mobile={
        sent ? (
          /* EM-AUTH-02B (842:1597-1602) drops the form for the mint receipt. */
          <ManagerAuthResultPanel
            tone="mint"
            bannerTitle={c.forgot.sentTitle}
            bannerBody={c.forgot.sentBody}
            ctaGapClass="mt-[28px]"
            ctaLabel={c.forgot.continueToReset}
            onCta={() => navigate("/manager/auth/reset")}
            linkLabel={c.forgot.resendCode}
            onLink={restart}
          />
        ) : (
          <ManagerForgotMobileForm
            email={email}
            onEmail={setEmail}
            loading={loading}
            offline={offline}
            notFound={notFound}
            onSubmit={submit}
            onBack={backToLogin}
          />
        )
      }
      desktop={
        <ManagerForgotDesktopCard
          email={email}
          onEmail={setEmail}
          loading={loading}
          disabled={disabled}
          primaryLabel={
            sent ? c.forgot.continueToReset : c.forgot.sendVerificationCode
          }
          banner={banner}
          alert={alert}
          notice={notice}
          onSubmit={submit}
          onBack={backToLogin}
        />
      }
    />
  );
}
