import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ONBOARDING_ID_COPY } from "./onboarding.copy";
import { IDENTITY } from "./onboardingIdMock";
import { OnboardingShell } from "./sections/OnboardingShell";
import { EmendaIdCard } from "./sections/EmendaIdCard";
import { PrimaryButton, TextLinkButton } from "./sections/OnboardingButtons";

/** WD-12 EMENDA ID Ready (node 816:2): ID card → mint ownership note →
 *  "Continue identity setup" → "Do this later" skip link. Skipping lands on
 *  Home in its W-18A New User state, whose ID card reads "Identity setup not
 *  finished" — the exact situation the skip creates. */
export function IdReadyPage() {
  const navigate = useNavigate();
  const c = useSectionCopy(ONBOARDING_ID_COPY);

  return (
    <OnboardingShell
      title={c.ready.title}
      subtitle={c.ready.subtitle}
      railClassName="lg:pt-[194px]"
      titleBlockClassName="lg:min-h-[100px]"
    >
      <EmendaIdCard
        eyebrow={c.emendaIdLabel}
        id={IDENTITY.emendaId}
        ownerNote={c.ready.createdFor.replace("{name}", IDENTITY.holder)}
      />
      <div className="mt-[14px] flex flex-col gap-[7px] rounded-[16px] bg-brand-soft p-4 lg:mt-[32px]">
        <p className="text-[14.7px] leading-[18px] font-semibold text-brand-deep">
          {c.ready.staysWithYouTitle}
        </p>
        <p className="text-[12.6px] leading-[15px] text-ink-muted">
          {c.ready.staysWithYouBody}
        </p>
      </div>
      <div className="mt-[14px] lg:mt-[26px]">
        <PrimaryButton
          label={c.ready.continueIdentitySetup}
          onClick={() => navigate("/onboarding/id/details")}
        />
      </div>
      <div className="mt-[14px] lg:mt-5">
        <TextLinkButton
          label={c.ready.doThisLater}
          onClick={() => navigate("/worker?state=new-user")}
        />
      </div>
    </OnboardingShell>
  );
}
