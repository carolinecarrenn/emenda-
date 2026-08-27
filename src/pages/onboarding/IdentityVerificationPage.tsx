import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { ONBOARDING_ID_COPY } from "./onboarding.copy";
import { OnboardingShell } from "./sections/OnboardingShell";
import { PrimaryButton, SecondaryButton } from "./sections/OnboardingButtons";

type VerificationState =
  | "gate"
  | "submitting"
  | "pending"
  | "verified"
  | "needs-review"
  | "failed"
  | "offline";

/** W-16 Identity Verification (468:107) / WD-16 (817:719) + async states A Submitting (817:734),
 *  B Pending (817:749), C Verified (817:764), D Needs Review (817:779),
 *  E Failed (817:794), F Offline (817:809). Clicking "Start verification"
 *  runs Submitting → Pending for real; Verified / Needs Review / Failed /
 *  Offline are review outcomes the server pushes, so they keep a ?state= URL
 *  (W-16C/D/E/F). Every state carries the "Back to EMENDA ID" escape hatch
 *  the mocks give it, including Submitting and Pending. */
export function IdentityVerificationPage() {
  const navigate = useNavigate();
  const screenState = useScreenState();
  const c = useSectionCopy(ONBOARDING_ID_COPY);
  const v = c.verification;

  const [flowing, setFlowing] = useState(false);
  const timerRef = useRef<number | null>(null);

  const state: VerificationState =
    screenState === "submitting" ||
    screenState === "pending" ||
    screenState === "verified" ||
    screenState === "needs-review" ||
    screenState === "failed" ||
    screenState === "offline"
      ? screenState
      : "gate";

  const startFlow = () => {
    setFlowing(true);
    navigate("/onboarding/id/verification?state=submitting");
  };

  useEffect(() => {
    if (flowing && state === "submitting") {
      timerRef.current = window.setTimeout(() => {
        setFlowing(false);
        navigate("/onboarding/id/verification?state=pending", {
          replace: true,
        });
      }, 1400);
      return () => {
        if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      };
    }
  }, [flowing, state, navigate]);

  const screen = {
    gate: {
      title: v.gateTitle,
      subtitle: v.gateSubtitle,
      heading: v.whatYoullNeedTitle,
      body: v.whatYoullNeedBody,
      primary: { label: v.startVerification, disabled: false, onClick: startFlow },
      backTo: "/onboarding/id/my-id",
    },
    submitting: {
      title: v.title,
      subtitle: v.submittingSubtitle,
      heading: v.submittingHeading,
      body: v.submittingBody,
      primary: {
        label: v.submittingButton,
        disabled: true,
        onClick: undefined,
      },
      backTo: "/onboarding/id/my-id",
    },
    pending: {
      title: v.title,
      subtitle: v.pendingSubtitle,
      heading: v.pendingHeading,
      body: v.pendingBody,
      primary: {
        label: v.continueToMyId,
        disabled: false,
        onClick: () => navigate("/onboarding/id/my-id"),
      },
      backTo: "/onboarding/id/my-id",
    },
    verified: {
      title: v.title,
      subtitle: v.verifiedSubtitle,
      heading: v.verifiedHeading,
      body: v.verifiedBody,
      primary: {
        label: v.viewMyId,
        disabled: false,
        onClick: () => navigate("/onboarding/id/my-id?state=verified"),
      },
      backTo: "/onboarding/id/my-id?state=verified",
    },
    "needs-review": {
      title: v.title,
      subtitle: v.needsReviewSubtitle,
      heading: v.needsReviewHeading,
      body: v.needsReviewBody,
      primary: {
        label: v.reviewDocument,
        disabled: false,
        onClick: () => navigate("/onboarding/id/reference"),
      },
      backTo: "/onboarding/id/my-id?state=needs-review",
    },
    failed: {
      title: v.title,
      subtitle: v.failedSubtitle,
      heading: v.failedHeading,
      body: v.failedBody,
      primary: { label: v.tryAgain, disabled: false, onClick: startFlow },
      backTo: "/onboarding/id/my-id?state=failed",
    },
    offline: {
      title: v.title,
      subtitle: v.offlineSubtitle,
      heading: null,
      body: null,
      primary: { label: v.tryAgain, disabled: false, onClick: startFlow },
      backTo: "/onboarding/id/my-id",
    },
  }[state];

  return (
    <OnboardingShell
      title={screen.title}
      subtitle={screen.subtitle}
      railClassName="lg:pt-[238px]"
      subtitleGapClassName="mt-[18px]"
      subtitleClassName="min-h-[40px] lg:min-h-0"
      railGapClassName={
        state === "offline" ? "mt-[22px] lg:mt-0" : "mt-[26px] lg:mt-0"
      }
    >
      {state === "offline" ? (
        <div className="mb-[24px] h-[84px] rounded-[14px] border border-line bg-[#f0f2f2] px-[15px] pt-[14px] lg:mb-[33px] lg:h-auto lg:border-0 lg:bg-[#eef2ef] lg:px-5 lg:py-[15px]">
          <p className="text-[14px] leading-[20px] font-semibold text-ink lg:text-[14.7px] lg:leading-[19px]">
            {v.offlineTitle}
          </p>
          <p className="mt-[8px] text-[12px] leading-[19px] text-ink-muted lg:mt-[9px] lg:text-[14px]">
            {v.offlineBody}
          </p>
        </div>
      ) : (
        <div className="h-[104px] lg:h-[112px]">
          <p className="text-[16px] leading-[21px] font-semibold text-ink lg:text-[17.3px]">
            {screen.heading}
          </p>
          <p className="mt-[12px] text-[13px] leading-[19px] text-ink-muted lg:mt-[18px] lg:text-[14px]">
            {screen.body}
          </p>
        </div>
      )}
      <PrimaryButton
        label={screen.primary.label}
        disabled={screen.primary.disabled}
        onClick={screen.primary.onClick}
      />
      {/* W-16..W-16F all keep the "Back to EMENDA ID" escape hatch, each
          returning to the W-17 badge variant that matches this outcome. */}
      <div className="mt-[14px] lg:mt-[19px]">
        <SecondaryButton
          label={v.backToEmendaId}
          onClick={() => navigate(screen.backTo)}
        />
      </div>
    </OnboardingShell>
  );
}
