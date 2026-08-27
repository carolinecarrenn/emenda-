import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { ONBOARDING_ID_COPY } from "./onboarding.copy";
import { IDENTITY, IDENTITY_DOCUMENT } from "./onboardingIdMock";
import { OnboardingShell } from "./sections/OnboardingShell";
import { PrimaryButton, SecondaryButton } from "./sections/OnboardingButtons";

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <p className="w-[116px] shrink-0 text-[12px] leading-[15px] text-ink-muted lg:w-[180px] lg:text-[12.6px]">
        {label}
      </p>
      <p className="text-[13px] leading-[17px] font-semibold text-ink lg:text-[13.7px]">
        {value}
      </p>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-line" />;
}

/** W-15 Identity Review (468:87) / WD-15 (817:672): two summary cards with hairline rows,
 *  "Private by default" note, Submit for verification + Edit identity details. */
export function IdentityReviewPage() {
  const navigate = useNavigate();
  const c = useSectionCopy(ONBOARDING_ID_COPY);
  const { language } = useLanguage();

  return (
    <OnboardingShell
      title={c.review.title}
      subtitle={c.review.subtitle}
      railClassName="lg:pt-[53px]"
      subtitleGapClassName="mt-[20px] lg:mt-[18px]"
      railGapClassName="mt-[20px] lg:mt-0"
    >
      <div className="flex flex-col gap-[10px] rounded-[16px] border border-line bg-white p-4">
        <p className="text-[13px] leading-[17px] font-semibold text-brand-deep lg:text-[13.7px]">
          {c.review.personalDetails}
        </p>
        <ReviewRow label={c.review.legalNameRow} value={IDENTITY.legalName} />
        <Divider />
        <ReviewRow
          label={c.review.dobRow}
          value={formatDisplayDate(IDENTITY.dateOfBirth, language)}
        />
        <Divider />
        <ReviewRow
          label={c.review.nationalityRow}
          value={IDENTITY.nationality}
        />
      </div>

      <div className="mt-[20px] flex flex-col gap-[10px] rounded-[16px] border border-line bg-white p-4 lg:mt-[23px]">
        <p className="text-[13px] leading-[17px] font-semibold text-brand-deep lg:text-[13.7px]">
          {c.review.identityDocument}
        </p>
        <ReviewRow
          label={c.review.documentTypeRow}
          value={c.reference.passport}
        />
        <Divider />
        <ReviewRow
          label={c.review.documentNumberRow}
          value={IDENTITY_DOCUMENT.maskedNumber}
        />
        <Divider />
        <ReviewRow
          label={c.review.expiryDateRow}
          value={formatDisplayDate(IDENTITY_DOCUMENT.expiryDate, language)}
        />
        <Divider />
        <ReviewRow
          label={c.review.documentPhotoRow}
          value={c.review.addedValue}
        />
      </div>

      <div className="mt-[20px] flex flex-col gap-[6px] py-[2px] lg:mt-6">
        <p className="text-[14px] leading-[18px] font-semibold text-brand-deep lg:text-[14.7px]">
          {c.review.privateByDefaultTitle}
        </p>
        <p className="text-[12px] leading-[15px] text-ink-muted lg:text-[12.6px]">
          {c.review.privateByDefaultBody}
        </p>
      </div>

      <div className="mt-[20px] flex flex-col gap-3 lg:mt-[41px]">
        <PrimaryButton
          label={c.review.submitForVerification}
          onClick={() => navigate("/onboarding/id/verification")}
        />
        <SecondaryButton
          tone="tinted"
          label={c.review.editIdentityDetails}
          onClick={() => navigate("/onboarding/id/details")}
        />
      </div>
    </OnboardingShell>
  );
}
