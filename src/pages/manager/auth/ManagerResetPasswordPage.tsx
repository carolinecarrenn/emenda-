import { useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { MANAGER_AUTH_COPY, fillManagerAuthCopy } from "./managerAuth.copy";
import { MANAGER_AUTH_ACCOUNT } from "./managerAuthMock";
import { ManagerAuthRecoveryShell } from "./sections/ManagerAuthRecoveryShell";
import { ManagerResetMobileForm } from "./sections/ManagerResetMobileForm";
import { ManagerResetDesktopCard } from "./sections/ManagerResetDesktopCard";
import { ManagerResetCodeErrorCard } from "./sections/ManagerResetCodeErrorCard";
import { ManagerResendPendingForm } from "./sections/ManagerResendPendingForm";
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

/** Reset Password — EM-AUTH-03 (842:1622) / MD-AUTH-03 (1193:44) with the
 *  03A Saving · 03B Invalid Code · 03C Code Expired · 03D Mismatch · 03E
 *  Update Failed · 03F Offline · 03G Resend Pending · 03H New Code Sent ·
 *  03I Too Many Requests variants. On desktop every one of those draws its
 *  own MD-AUTH-03x slab, except the invalid code, which keeps the dedicated
 *  MD-AUTH-03B (1193:63) soft-red card. */
export function ManagerResetPasswordPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(MANAGER_AUTH_COPY);
  const [code, setCode] = useState(MANAGER_AUTH_ACCOUNT.verificationCode);
  /** MD-AUTH-03 seeds its own digits (1193:54) — EM-AUTH-03 keeps 123456. */
  const [desktopCode, setDesktopCode] = useState(
    MANAGER_AUTH_ACCOUNT.desktopVerificationCode,
  );
  const [newPassword, setNewPassword] = useState(
    MANAGER_AUTH_ACCOUNT.newPassword,
  );
  const [confirmPassword, setConfirmPassword] = useState(
    MANAGER_AUTH_ACCOUNT.newPassword,
  );
  const [submitting, setSubmitting] = useState(false);
  const [localMismatch, setLocalMismatch] = useState(false);
  const [resending, setResending] = useState(false);
  const [resentCode, setResentCode] = useState(false);

  const offline = state === "offline";
  const invalidCode = state === "invalid-code";
  const codeExpired = state === "code-expired";
  const updateFailed = state === "update-failed";
  const tooManyRequests = state === "too-many-requests";
  const mismatch = state === "mismatch" || localMismatch;
  const resendPending = state === "resend-pending" || resending;
  const newCodeSent = state === "new-code-sent" || resentCode;
  const saving = state === "saving" || submitting;
  const disabled = saving || offline;

  const context = fillManagerAuthCopy(c.forgot.context, {
    org: MANAGER_AUTH_ACCOUNT.organization,
  });

  const backToLogin = () => navigate("/manager/auth");
  const restart = () => navigate("/manager/auth/reset");
  /** "Back to reset password" (03H / 03I) returns to the editable form. */
  const backToResetForm = () => {
    setLocalMismatch(false);
    setResending(false);
    setResentCode(false);
    restart();
  };

  const lockoutBody = fillManagerAuthCopy(c.reset.tooManyRequestsBody, {
    time: MANAGER_AUTH_ACCOUNT.lockoutRemaining,
  });

  /* Mobile heading pair — 03C / 03E / 03G / 03H / 03I each relabel it. */
  const mobileTitle = codeExpired
    ? c.reset.expiredPageTitle
    : updateFailed
      ? c.reset.failedPageTitle
      : newCodeSent
        ? c.reset.newCodeSentTitle
        : tooManyRequests
          ? c.reset.tooManyRequestsPageTitle
          : c.reset.title;
  const mobileSubtitle = codeExpired
    ? c.reset.expiredPageSubtitle
    : updateFailed
      ? c.reset.failedPageSubtitle
      : newCodeSent
        ? c.reset.newCodeSentSubtitle
        : tooManyRequests
          ? c.reset.tooManyRequestsPageSubtitle
          : offline
            ? c.reset.offlineSubtitle
            : resendPending
              ? c.reset.resendPendingSubtitle
              : c.reset.subtitle;
  const mobileBodyClass =
    codeExpired || updateFailed || offline
      ? "mt-[18px]"
      : newCodeSent || tooManyRequests
        ? "mt-[22px]"
        : resendPending
          ? "mt-[41px]"
          : "mt-[13px]";

  /** The desktop states that replace the MD-AUTH-03 card with a slab. The
   *  invalid code is absent — it owns the MD-AUTH-03B frame instead. */
  const panelState: ManagerRecoveryPanelState | null = saving
    ? "saving"
    : offline
      ? "resetOffline"
      : resendPending
        ? "resendPending"
        : tooManyRequests
          ? "tooManyRequests"
          : codeExpired
            ? "codeExpired"
            : updateFailed
              ? "updateFailed"
              : mismatch
                ? "mismatch"
                : newCodeSent
                  ? "newCodeSent"
                  : null;

  const submit = () => {
    if (disabled) return;
    if (newPassword !== confirmPassword) {
      setLocalMismatch(true);
      return;
    }
    setLocalMismatch(false);
    setSubmitting(true);
    window.setTimeout(() => navigate("/manager/auth/updated"), 700);
  };

  const resend = () => {
    if (resendPending || tooManyRequests || offline) return;
    setResentCode(false);
    setResending(true);
    window.setTimeout(() => {
      setResending(false);
      setResentCode(true);
    }, 700);
  };

  const panelPrimary = () => {
    if (panelState === "codeExpired") navigate("/manager/auth/forgot");
    else {
      setLocalMismatch(false);
      setResentCode(false);
      restart();
    }
  };

  const panelSecondary = () => {
    setLocalMismatch(false);
    setResentCode(false);
    backToLogin();
  };

  const banner = offline ? (
    <ManagerAuthOfflineBanner
      title={c.offline.title}
      action={c.offline.tryAgain}
      onAction={restart}
    />
  ) : null;

  const alerts: ReactNode[] = [];
  if (invalidCode)
    alerts.push(
      <ManagerAuthAlertCard
        key="invalid-code"
        title={c.reset.invalidCodeTitle}
        body={c.reset.invalidCodeBody}
      />,
    );
  if (codeExpired)
    alerts.push(
      <ManagerAuthAlertCard
        key="code-expired"
        title={c.reset.expiredTitle}
        body={c.reset.expiredBody}
      />,
    );
  if (mismatch)
    alerts.push(
      <ManagerAuthAlertCard
        key="mismatch"
        title={c.reset.mismatchTitle}
        body={c.reset.mismatchBody}
      />,
    );
  if (updateFailed)
    alerts.push(
      <ManagerAuthAlertCard
        key="update-failed"
        title={c.reset.failedTitle}
        body={c.reset.failedBody}
      />,
    );
  if (tooManyRequests)
    alerts.push(
      <ManagerAuthAlertCard
        key="too-many-requests"
        title={c.reset.tooManyRequestsTitle}
        body={c.reset.tooManyRequestsBody}
      />,
    );
  if (newCodeSent)
    alerts.push(
      <ManagerAuthMintCard
        key="new-code-sent"
        title={c.reset.newCodeSentTitle}
        body={c.reset.newCodeSentBody}
      />,
    );

  const alert = alerts.length ? (
    <div className="flex flex-col gap-[12px]">{alerts}</div>
  ) : null;

  return (
    <ManagerAuthRecoveryShell
      context={context}
      title={mobileTitle}
      subtitle={mobileSubtitle}
      desktopTitle={
        invalidCode ? c.reset.desktopErrorTitle : c.reset.desktopTitle
      }
      desktopSubtitle={
        invalidCode ? c.reset.desktopErrorSubtitle : c.reset.desktopSubtitle
      }
      cardWidthClass={
        invalidCode ? "lg:h-[360px] lg:w-[540px]" : "lg:w-[600px]"
      }
      cardTopClass={invalidCode ? "mt-[82px]" : "mt-[52px]"}
      mobileBodyClass={mobileBodyClass}
      desktopPanel={
        panelState ? (
          <ManagerRecoveryStatePanel
            state={panelState}
            onPrimary={panelPrimary}
            onSecondary={panelSecondary}
          />
        ) : undefined
      }
      mobile={
        codeExpired ? (
          /* EM-AUTH-03C (842:1695-1700). */
          <ManagerAuthResultPanel
            tone="peach"
            bannerTitle={c.reset.expiredTitle}
            bannerBody={c.reset.expiredBody}
            ctaGapClass="mt-[28px]"
            ctaLabel={c.reset.sendNewCode}
            onCta={() => navigate("/manager/auth/forgot")}
            linkLabel={c.reset.cancelReset}
            onLink={backToLogin}
          />
        ) : updateFailed ? (
          /* EM-AUTH-03E (842:1732-1737). */
          <ManagerAuthResultPanel
            tone="peach"
            bannerTitle={c.reset.failedTitle}
            bannerBody={c.reset.failedBody}
            ctaGapClass="mt-[28px]"
            ctaLabel={c.offline.tryAgain}
            onCta={backToResetForm}
            linkLabel={c.reset.cancelReset}
            onLink={backToLogin}
          />
        ) : offline ? (
          /* EM-AUTH-03F (842:1746-1751). */
          <ManagerAuthResultPanel
            tone="amber"
            bannerTitle={c.offline.title}
            bannerBody={c.reset.offlineBannerBody}
            ctaGapClass="mt-[28px]"
            ctaLabel={c.offline.tryAgain}
            onCta={backToResetForm}
            linkLabel={c.reset.cancelReset}
            onLink={backToLogin}
          />
        ) : newCodeSent ? (
          /* EM-AUTH-03H (842:1775-1779). */
          <ManagerAuthResultPanel
            tone="mint"
            bannerTitle={c.reset.newCodeSentTitle}
            bannerBody={c.reset.newCodeSentBody}
            ctaLabel={c.reset.backToReset}
            onCta={backToResetForm}
          />
        ) : tooManyRequests ? (
          /* EM-AUTH-03I (842:1788-1792) — the CTA is the outline pill. */
          <ManagerAuthResultPanel
            tone="amber"
            bannerTitle={c.reset.tooManyRequestsTitle}
            bannerBody={lockoutBody}
            ctaVariant="outline"
            ctaLabel={c.reset.backToReset}
            onCta={backToResetForm}
          />
        ) : resendPending ? (
          /* EM-AUTH-03G (842:1761-1766). */
          <ManagerResendPendingForm code="" onCode={setCode} />
        ) : (
          <ManagerResetMobileForm
            code={code}
            onCode={setCode}
            newPassword={newPassword}
            onNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            onConfirmPassword={setConfirmPassword}
            codeInvalid={invalidCode}
            mismatch={mismatch}
            saving={saving}
            onSubmit={submit}
            onResend={resend}
            onCancel={backToLogin}
          />
        )
      }
      desktop={
        invalidCode ? (
          <ManagerResetCodeErrorCard
            title={c.reset.alertTitle}
            body={c.reset.alertBody}
            onRequestNewCode={() => navigate("/manager/auth/forgot")}
            onBackToLogin={backToLogin}
          />
        ) : (
          <ManagerResetDesktopCard
            code={desktopCode}
            onCode={setDesktopCode}
            newPassword={newPassword}
            onNewPassword={setNewPassword}
            loading={saving}
            disabled={disabled}
            banner={banner}
            alert={alert}
            onSubmit={submit}
            onDemoInvalid={() =>
              navigate("/manager/auth/reset?state=invalid-code")
            }
          />
        )
      }
    />
  );
}
