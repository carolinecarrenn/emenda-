import { useNavigate, useSearchParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { ONBOARDING_ID_COPY } from "./onboarding.copy";
import { IDENTITY } from "./onboardingIdMock";
import { OnboardingShell } from "./sections/OnboardingShell";
import { EmendaIdCard } from "./sections/EmendaIdCard";
import { QrCard } from "./sections/QrCard";
import {
  PrimaryButton,
  SecondaryButton,
  TextLinkButton,
} from "./sections/OnboardingButtons";

type IdState =
  | "pending"
  | "verified"
  | "not-verified"
  | "loading"
  | "needs-review"
  | "failed";

/** W-17 badge state → the W-18 Home variant whose ID card tells the same
 *  story, so "Continue to Home" never lands on a Home that contradicts the
 *  identity screen the worker just left. */
const HOME_FOR_STATE = {
  pending: "/worker?state=identity-pending",
  verified: "/worker?state=headless",
  "not-verified": "/worker?state=new-user",
  "needs-review": "/worker?state=needs-attention",
  failed: "/worker?state=needs-attention",
} as const;

/** W-17 My EMENDA ID hub (468:124) / WD-17 (817:931) with badge states D Verified (817:1156),
 *  E Not Verified (817:1183), F Loading (817:1211), G Needs Review (817:1233),
 *  H Verification Failed (817:1261) via ?state=…, and in-page views
 *  A Show QR (817:957), B Share (817:1110), C Share Confirmation (817:1135)
 *  via ?view=qr|share|shared. Every one of those views is driven by a real
 *  control: "Show QR" and "Share ID" open A and B, B's "Share EMENDA ID"
 *  confirms into C, and "Done"/"Cancel" return to the hub. Home's "View ID"
 *  link opens the badge variant matching that Home state. */
export function MyEmendaIdPage() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const c = useSectionCopy(ONBOARDING_ID_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  const rawState = params.get("state");
  const state: IdState =
    rawState === "verified" ||
    rawState === "not-verified" ||
    rawState === "loading" ||
    rawState === "needs-review" ||
    rawState === "failed"
      ? rawState
      : "pending";
  const view = params.get("view");

  const setView = (next: "qr" | "share" | "shared" | null) => {
    const nextParams = new URLSearchParams(params);
    if (next) nextParams.set("view", next);
    else nextParams.delete("view");
    setParams(nextParams);
  };

  /* ---- WD-17A · Show EMENDA ID (QR) ---- */
  if (view === "qr") {
    return (
      <OnboardingShell
        soft
        title={c.qr.title}
        subtitle={c.qr.subtitle}
        railClassName="lg:pt-[163px]"
        subtitleGapClassName="mt-[18px]"
        railGapClassName="mt-[18px] lg:mt-0"
      >
        <QrCard caption={`${IDENTITY.emendaId} · ${c.qr.idOnly}`} />
        <div className="mt-[18px] lg:mt-[43px]">
          <PrimaryButton
            label={common.action.done}
            onClick={() => setView(null)}
          />
        </div>
      </OnboardingShell>
    );
  }

  /* ---- WD-17B · Share EMENDA ID ---- */
  if (view === "share") {
    return (
      <OnboardingShell
        soft
        title={c.share.title}
        subtitle={c.share.subtitle}
        railClassName="lg:pt-[183px]"
        subtitleGapClassName="mt-[18px]"
        railGapClassName="mt-[18px] lg:mt-0"
      >
        {/* W-17B 471:315 reserves a 214px summary block above the actions. */}
        <div className="min-h-[214px] lg:min-h-0">
          <p className="text-[15px] leading-5 font-semibold text-brand lg:text-[15.8px]">
            {c.share.youllShare}
          </p>
          <div className="mt-[10px] text-[14px] leading-[22px] text-[#18231f] lg:text-[14.7px]">
            <p>• {c.emendaIdLabel}</p>
            <p>• {IDENTITY.holder}</p>
            <p>• {c.share.verificationResult}</p>
          </div>
          <p className="mt-5 text-[15px] leading-5 font-semibold text-brand lg:text-[15.8px]">
            {c.share.staysPrivate}
          </p>
          <p className="mt-[10px] text-[13px] leading-5 text-[#65746d] lg:text-[13.7px]">
            {c.share.staysPrivateBody}
          </p>
        </div>
        <div className="mt-[18px] lg:mt-[36px]">
          <PrimaryButton
            label={c.share.shareEmendaId}
            onClick={() => setView("shared")}
          />
        </div>
        <div className="mt-[18px] lg:mt-6">
          <SecondaryButton
            tone="white"
            label={common.action.cancel}
            onClick={() => setView(null)}
          />
        </div>
      </OnboardingShell>
    );
  }

  /* ---- WD-17C · Share Confirmation ---- */
  if (view === "shared") {
    return (
      <OnboardingShell
        soft
        title={c.shared.title}
        subtitle={c.shared.subtitle}
        railClassName="lg:pt-[229px]"
        subtitleGapClassName="mt-[18px]"
        railGapClassName="mt-[18px] lg:mt-0"
      >
        <div className="min-h-[176px] rounded-[18px] bg-[#ecf5f0] p-7 lg:min-h-0">
          <p className="text-[18px] leading-6 font-semibold text-[#18231f] lg:text-[18.9px]">
            {c.shared.successTitle}
          </p>
          <p className="mt-[14px] text-[13px] leading-5 text-[#65746d] lg:text-[13.7px]">
            {c.shared.successBody}
          </p>
        </div>
        <div className="mt-[18px] lg:mt-[33px]">
          <PrimaryButton
            label={common.action.done}
            onClick={() => setView(null)}
          />
        </div>
      </OnboardingShell>
    );
  }

  /* ---- WD-17F · Loading skeleton ---- */
  if (state === "loading") {
    return (
      <OnboardingShell
        title={c.myId.title}
        subtitle={c.myId.loadingSubtitle}
        railClassName="lg:pt-[180px]"
      >
        <div className="h-[139px] rounded-[16px] bg-[#e8f0eb] p-[16px] lg:bg-subtle lg:p-[17px]">
          <div className="h-[10px] w-[82px] rounded-full bg-[#dbe5e0] lg:w-[122px] lg:bg-brand-soft" />
          <div className="mt-[16px] h-[22px] w-[190px] max-w-full rounded-full bg-[#dbe5e0] lg:mt-[18px] lg:w-[282px] lg:bg-brand-soft" />
          <div className="mt-[14px] h-3 w-[144px] max-w-full rounded-full bg-[#dbe5e0] lg:mt-[17px] lg:w-[214px] lg:bg-brand-soft" />
          <div className="mt-[14px] h-[10px] w-[118px] rounded-full bg-[#dbe5e0] lg:mt-4 lg:w-[175px] lg:bg-brand-soft" />
        </div>
        <div className="mt-[14px] flex gap-[10px] lg:mt-[26px]">
          <div className="h-[43px] flex-1 rounded-[12px] bg-[#e8f0eb] lg:rounded-[14px] lg:bg-brand-soft" />
          <div className="h-[43px] flex-1 rounded-[12px] bg-[#e8f0eb] lg:rounded-[14px] lg:bg-brand-soft" />
        </div>
        <div className="relative mt-[14px] h-[51px] lg:mt-[21px]">
          <div className="absolute inset-0 rounded-[16px] bg-[#e8f0eb] lg:rounded-[12px] lg:bg-subtle" />
          <div className="absolute top-[2px] left-0 h-3 w-[205px] max-w-full rounded-full bg-[#dbe5e0] lg:w-[305px] lg:bg-brand-soft" />
          <div className="absolute top-[25px] left-0 h-[9px] w-[286px] max-w-full rounded-full bg-[#dbe5e0] lg:top-[27px] lg:w-[425px] lg:bg-brand-soft" />
          <div className="absolute top-[40px] left-0 h-[9px] w-[226px] max-w-full rounded-full bg-[#dbe5e0] lg:top-[43px] lg:w-[336px] lg:bg-brand-soft" />
        </div>
        <div className="mt-[14px] h-[54px] rounded-[14px] bg-[#dbe5e0] lg:mt-[19px] lg:bg-brand-soft" />
      </OnboardingShell>
    );
  }

  /* ---- WD-17 hub (base pending / verified / not-verified / needs-review / failed) ---- */
  const subtitle = {
    pending: c.myId.pendingSubtitle,
    verified: c.myId.verifiedSubtitle,
    "not-verified": c.myId.notVerifiedSubtitle,
    "needs-review": c.myId.needsReviewSubtitle,
    failed: c.myId.failedSubtitle,
  }[state as Exclude<IdState, "loading">];

  const contextualPrimary =
    state === "not-verified"
      ? {
          label: c.myId.verifyIdentity,
          onClick: () => navigate("/onboarding/id/verification"),
        }
      : state === "needs-review"
        ? {
            label: c.myId.reviewDocument,
            onClick: () => navigate("/onboarding/id/reference"),
          }
        : state === "failed"
          ? {
              label: c.myId.tryVerificationAgain,
              onClick: () =>
                navigate("/onboarding/id/verification?state=submitting"),
            }
          : null;

  const homeHref = HOME_FOR_STATE[state as Exclude<IdState, "loading">];

  const railClassName = {
    pending: "lg:pt-[180px]",
    verified: "lg:pt-[168px]",
    "not-verified": "lg:pt-[146px]",
    "needs-review": "lg:pt-[146px]",
    failed: "lg:pt-[146px]",
  }[state as Exclude<IdState, "loading">];

  return (
    <OnboardingShell
      title={c.myId.title}
      subtitle={subtitle}
      railClassName={railClassName}
    >
      <EmendaIdCard
        eyebrow={c.emendaIdLabel}
        id={IDENTITY.emendaId}
        verifiedLine={state === "verified" ? c.myId.identityVerified : undefined}
        name={IDENTITY.holder}
        created={`${c.myId.createdLabel} ${formatDisplayDate(IDENTITY.createdDate, language)}`}
      />

      {contextualPrimary ? (
        <div className="mt-[14px] lg:mt-[36px]">
          <PrimaryButton
            label={contextualPrimary.label}
            onClick={contextualPrimary.onClick}
          />
        </div>
      ) : null}

      <div
        className={`mt-[14px] flex gap-[10px] ${
          contextualPrimary
            ? "lg:mt-[19px]"
            : state === "verified"
              ? "lg:mt-[38px]"
              : "lg:mt-[36px]"
        }`}
      >
        <button
          type="button"
          onClick={() => setView("qr")}
          className="flex-1 rounded-[14px] border border-line bg-brand-soft p-3 text-center text-[13px] leading-[19px] font-semibold text-brand-deep hover:border-brand lg:text-[13.7px] lg:leading-[17px]"
        >
          {c.myId.showQr}
        </button>
        <button
          type="button"
          onClick={() => setView("share")}
          className="flex-1 rounded-[14px] border border-line bg-brand-soft p-3 text-center text-[13px] leading-[19px] font-semibold text-brand-deep hover:border-brand lg:text-[13.7px] lg:leading-[17px]"
        >
          {c.myId.shareId}
        </button>
      </div>

      <div className="mt-[14px] flex flex-col gap-[6px] lg:mt-[21px]">
        <p className="text-[12px] leading-[15px] font-semibold text-brand-deep lg:text-[12.6px]">
          {c.myId.privateDocsTitle}
        </p>
        <p className="text-[12px] leading-[15px] text-ink-muted lg:text-[12.6px]">
          {c.myId.privateDocsBody}
        </p>
      </div>

      <div className="mt-[14px] lg:mt-[19px]">
        {contextualPrimary ? (
          <SecondaryButton
            label={c.myId.continueToHome}
            onClick={() => navigate(homeHref)}
          />
        ) : (
          <PrimaryButton
            label={c.myId.continueToHome}
            onClick={() => navigate(homeHref)}
          />
        )}
      </div>
      {/* W-11 Logout Confirmation is raised from inside a signed-in session,
          and W-17 is the first signed-in screen the funnel reaches. The worker
          shell's own Log out control is inert, so this is the live door to it
          — and W-11's "Cancel" comes straight back here. */}
      <div className="mt-[14px] lg:mt-[19px]">
        <TextLinkButton
          label={common.nav.logOut}
          onClick={() => navigate("/auth/logout")}
        />
      </div>
    </OnboardingShell>
  );
}
