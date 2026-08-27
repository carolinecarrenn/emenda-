import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillLogsCopy, LOGS_COPY } from "./logs.copy";
import { HEALTH_PROVIDER } from "./logsMock";
import { ConsentProviderRow } from "./sections/ConsentProviderRow";
import { ConsentRevokeCard } from "./sections/ConsentRevokeCard";
import { ConsentStatusCard } from "./sections/ConsentStatusCard";
import { DetailField } from "./sections/DetailField";
import { InfoCard } from "./sections/InfoCard";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { SectionLabel } from "./sections/SectionLabel";
import { StateBanner } from "./sections/StateBanner";

type ConsentStep =
  | "manage"
  | "grant-review"
  | "granted"
  | "active"
  | "revoke"
  | "revoked"
  | "failed"
  | "expired";

const STEPS: ConsentStep[] = [
  "manage",
  "grant-review",
  "granted",
  "active",
  "revoke",
  "revoked",
  "failed",
  "expired",
];

/** Health Access & Consent — Figma WD-61O (1187:1131) and the WD-61O1–O7
 *  lifecycle: grant review (1187:1702) → granted (1187:1763) → active → revoke
 *  review → revoked → grant failed → expired; mobile W-61O–W-61O7.
 *  Access is always explicit: data, recipient and duration are shown before
 *  anything is granted, and the worker can revoke at any time. */
export function HealthAccessPage() {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  const initial = STEPS.includes(state as ConsentStep)
    ? (state as ConsentStep)
    : "manage";
  const [step, setStep] = useState<ConsentStep>(initial);

  const activeUntil = formatDisplayDate(HEALTH_PROVIDER.activeUntil, language);
  const expiredOn = formatDisplayDate(HEALTH_PROVIDER.expiredOn, language);

  const headings: Record<ConsentStep, { title: string; subtitle: string }> = {
    manage: { title: c.consent.accessTitle, subtitle: c.consent.accessSubtitle },
    "grant-review": {
      title: c.consent.reviewTitle,
      subtitle: c.consent.reviewSubtitle,
    },
    granted: {
      title: c.consent.grantedTitle,
      subtitle: c.consent.grantedSubtitle,
    },
    active: { title: c.consent.accessTitle, subtitle: c.consent.activeSubtitle },
    revoke: {
      title: c.consent.revokeTitle,
      subtitle: c.consent.revokeSubtitle,
    },
    revoked: {
      title: c.consent.revokedTitle,
      subtitle: c.consent.revokedSubtitle,
    },
    failed: {
      title: c.consent.grantFailedScreenTitle,
      subtitle: c.consent.grantFailedSubtitle,
    },
    expired: {
      title: c.consent.accessTitle,
      subtitle: c.consent.expiredSubtitle,
    },
  };

  /* WD-61O1 / O3 — the data, recipient and duration the worker is agreeing to. */
  const reviewRows = [
    {
      label: c.consent.recipientLabel,
      /* W-61O1 prints the provider qualifier after the raw clinic name. */
      value: `${HEALTH_PROVIDER.name} · ${HEALTH_PROVIDER.role}`,
    },
    { label: c.consent.sharedLabel, value: c.consent.sharedValue },
    {
      label: c.consent.durationLabel,
      value: fillLogsCopy(c.consent.durationValue, { date: activeUntil }),
    },
  ];

  const reviewFields = (
    <>
      {/* Mobile W-61O1 — each consent fact as its own captioned field. */}
      <div className="lg:hidden">
        <div className="mt-[12px] lg:mt-[50px] grid gap-[12px] lg:gap-[24px]">
          {reviewRows.map((row) => (
            <DetailField key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
        {/* W-61O1 keeps the "NOT SHARED" note on the shared card chassis. */}
        <div className="mt-[12px] rounded-[16px] border border-lp-line bg-lp-mint px-[14px] py-[12px] lg:mt-[20px] lg:min-h-[84px] lg:rounded-[12px] lg:bg-lp-tint lg:px-[17px] lg:py-[14px]">
          <p className="text-[10px] leading-[14px] text-lp-muted lg:text-[12px] lg:leading-[18px]">
            {c.consent.notShared}
          </p>
        </div>
      </div>

      {/* WD-61O1 (1187:1746) — one 1012x360 consent card wrapping three
          972x76 boxes (caption inside the box) and the mint NOT SHARED strip. */}
      <div className="mt-[12px] lg:mt-[50px] hidden min-h-[360px] rounded-[16px] border border-lp-line bg-white p-[20px] lg:block">
        {reviewRows.map((row, index) => (
          <div
            key={row.label}
            className={`min-h-[76px] rounded-[12px] border border-lp-line px-[16px] pt-[10px] pb-[8px] ${
              index === 0 ? "" : "mt-[14px]"
            }`}
          >
            <p className="text-[11px] leading-[18px] font-semibold text-lp-green">
              {row.label}
            </p>
            <p className="mt-[4px] text-[14px] leading-[24px] text-lp-ink">
              {row.value}
            </p>
          </div>
        ))}
        <div className="mt-[14px] min-h-[54px] rounded-[12px] border border-lp-line bg-lp-tint px-[16px] py-[14px]">
          <p className="text-[12px] leading-[18px] text-lp-muted">
            {c.consent.notShared}
          </p>
        </div>
      </div>
    </>
  );

  const header = (
    <LogsHeader
      crumb={c.health.title}
      crumbTo="/worker/logs/health"
      title={headings[step].title}
      subtitle={headings[step].subtitle}
    />
  );

  if (step === "failed") {
    /* W-61O5 (1196:498) — nothing was shared: the frame shows the red card
       and the retry / back pair, never the consent fields. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <StateBanner
          className="mt-[12px] lg:mt-[26px]"
          tone="red"
          title={c.consent.grantFailedTitle}
          body={c.consent.grantFailedBody}
        />
        <div className="mt-[12px] lg:mt-[32px] flex flex-col gap-3 lg:flex-row lg:gap-4">
          <LogsAction
            label={c.consent.grantFailedRetry}
            onClick={() => setStep("granted")}
            widthClass="lg:w-[260px]"
          />
          <LogsAction
            label={c.consent.grantFailedBack}
            variant="outline"
            onClick={() => setStep("manage")}
            widthClass="lg:w-[180px]"
          />
        </div>
      </div>
    );
  }

  if (step === "grant-review") {
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        {reviewFields}
        <div className="mt-[12px] lg:mt-[24px] flex flex-col gap-3 lg:mt-[30px] lg:flex-row lg:gap-4">
          <LogsAction
            label={c.consent.allow}
            onClick={() => setStep("granted")}
            widthClass="lg:w-[260px]"
          />
          <LogsAction
            label={common.action.cancel}
            variant="outline"
            onClick={() => setStep("manage")}
            widthClass="lg:w-[180px]"
          />
        </div>
      </div>
    );
  }

  if (step === "granted") {
    /* WD-61O2 — granted confirmation; access ends automatically. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <div className="mt-[12px] lg:mt-[50px]">
          <ConsentStatusCard
            eyebrow={c.consent.activeEyebrow}
            body={fillLogsCopy(c.consent.activeBody, {
              provider: HEALTH_PROVIDER.name,
              date: activeUntil,
            })}
          />
        </div>
        {/* W-61O2 (1187:1763) pairs "Cabut akses" with "Selesai" — revoking
            stays one click away from the confirmation. */}
        <div className="mt-[12px] lg:mt-[24px] flex flex-col gap-3 lg:flex-row lg:gap-4">
          <LogsAction
            label={c.consent.grantedDoneCta}
            onClick={() => setStep("active")}
            widthClass="lg:w-[200px]"
          />
          <LogsAction
            label={c.consent.revokeCta}
            variant="danger-outline"
            onClick={() => setStep("revoke")}
            widthClass="lg:w-[220px]"
          />
        </div>
      </div>
    );
  }

  if (step === "revoke") {
    /* WD-61O3 — revoke review: the same three facts before switching access off. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <ConsentRevokeCard
          className="mt-[12px] lg:mt-[50px]"
          provider={HEALTH_PROVIDER.name}
          access={fillLogsCopy(c.consent.revokeCardAccess, {
            shared: c.consent.sharedValue,
          })}
          body={c.consent.revokeCardBody}
        />
        <div className="mt-[12px] lg:mt-[24px] flex flex-col gap-3 lg:flex-row lg:gap-4">
          <LogsAction
            label={c.consent.keepAccess}
            variant="outline"
            onClick={() => setStep("active")}
            widthClass="lg:w-[240px]"
          />
          <LogsAction
            label={c.consent.revokeCta}
            onClick={() => setStep("revoked")}
            widthClass="lg:w-[240px]"
          />
        </div>
      </div>
    );
  }

  if (step === "revoked") {
    /* WD-61O4 — revoked; the records are fully private again. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <div className="mt-[12px] lg:mt-[50px]">
          <ConsentStatusCard
            heading={c.consent.revokedCardTitle}
            body={fillLogsCopy(c.consent.revokedCardBody, {
              provider: HEALTH_PROVIDER.name,
            })}
          />
        </div>
        <div className="mt-[12px] lg:mt-[24px]">
          <LogsAction
            label={c.consent.grantedDoneCta}
            onClick={() => setStep("manage")}
            widthClass="lg:w-[200px]"
          />
        </div>
      </div>
    );
  }

  const isActive = step === "active";
  const isExpired = step === "expired";

  /* WD-61O base / O6 active / O7 expired — the same shell with a different
     provider status line and trailing card. */
  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      {header}

      <InfoCard
        className="mt-[12px] lg:mt-[50px]"
        title={c.consent.defaultTitle}
        body={c.consent.defaultBody}
      />

      <SectionLabel className="mt-[12px] lg:mt-[28px]">
        {c.consent.providersLabel}
      </SectionLabel>
      <div className="mt-[12px]">
        <ConsentProviderRow
          name={HEALTH_PROVIDER.name}
          status={
            isActive
              ? fillLogsCopy(c.consent.activeUntil, { date: activeUntil })
              : isExpired
                ? fillLogsCopy(c.consent.expiredOn, { date: expiredOn })
                : c.consent.noAccess
          }
          action={
            isActive ? (
              <LogsAction
                label={c.consent.revokeCta}
                variant="outline"
                onClick={() => setStep("revoke")}
                heightClass="h-[42px]"
                widthClass="lg:w-[160px]"
              />
            ) : (
              <LogsAction
                label={c.consent.setAccess}
                onClick={() => setStep("grant-review")}
                heightClass="h-[42px]"
                widthClass="lg:w-[160px]"
              />
            )
          }
        />
      </div>

      {isActive ? (
        <div className="mt-[12px] lg:mt-[24px]">
          <ConsentStatusCard
            eyebrow={c.consent.activeEyebrow}
            heading={fillLogsCopy(c.consent.activeHeading, {
              date: activeUntil,
            })}
            body={fillLogsCopy(c.consent.activeBody, {
              provider: HEALTH_PROVIDER.name,
            })}
          />
        </div>
      ) : isExpired ? (
        <div className="mt-[12px] lg:mt-[24px]">
          <ConsentStatusCard
            tone="white"
            eyebrow={c.consent.expiredTitle}
            heading={fillLogsCopy(c.consent.expiredBody, {
              provider: HEALTH_PROVIDER.name,
              date: expiredOn,
            })}
            body={c.consent.revokedBody}
          />
        </div>
      ) : null}

      <InfoCard
        className="mt-[12px] lg:mt-[24px]"
        fill="white"
        tone="ink"
        title={c.consent.explicitTitle}
        body={c.consent.explicitBody}
      />
    </div>
  );
}
