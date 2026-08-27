import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useScreenState } from "@/hooks/useScreenState";
import { ONBOARDING_ID_COPY } from "./onboarding.copy";
import { IDENTITY } from "./onboardingIdMock";
import { OnboardingShell } from "./sections/OnboardingShell";
import { PrimaryButton, TextLinkButton } from "./sections/OnboardingButtons";

/** W-13 Identity Details (468:26) / WD-13 (816:23) + W-13A Validation Error
 *  (471:2) / WD-13A (816:47): LEGAL NAME / DATE OF BIRTH / NATIONALITY over
 *  Continue + Back. ?state=error forces the W-13A inline helper under Legal
 *  name and turns that field's border Signal Red. */
export function IdentityDetailsPage() {
  const navigate = useNavigate();
  const screenState = useScreenState();
  const c = useSectionCopy(ONBOARDING_ID_COPY);
  const common = useCommonCopy();

  const [legalName, setLegalName] = useState<string>(IDENTITY.legalName);
  const [dateOfBirth, setDateOfBirth] = useState<string>(IDENTITY.dateOfBirth);
  const [touchedInvalid, setTouchedInvalid] = useState(false);

  const showError = screenState === "error" || touchedInvalid;

  const handleContinue = () => {
    if (legalName.trim() === "") {
      setTouchedInvalid(true);
      return;
    }
    navigate("/onboarding/id/reference");
  };

  return (
    <OnboardingShell
      title={c.details.title}
      subtitle={c.details.subtitle}
      railClassName="lg:pt-[162px]"
    >
      <div>
        <p className="text-[11px] leading-[14px] font-semibold text-ink-muted uppercase lg:text-[11.6px]">
          {c.details.legalNameLabel}
        </p>
        <div
          className={`mt-[6px] flex h-[54px] items-center rounded-[14px] border bg-white px-[14px] lg:px-5 ${
            showError ? "border-[#c94f3d]" : "border-line"
          }`}
        >
          <input
            type="text"
            value={legalName}
            onChange={(e) => {
              setLegalName(e.target.value);
              if (e.target.value.trim() !== "") setTouchedInvalid(false);
            }}
            className="w-full bg-transparent text-[14px] text-ink outline-none lg:text-[14.7px]"
          />
        </div>
        {showError ? (
          <p className="mt-[6px] text-[11px] text-[#c94f3d] lg:text-[11.6px]">
            {c.details.legalNameError}
          </p>
        ) : null}
      </div>
      <div className="mt-[14px] lg:mt-[25px]">
        <p className="text-[11px] leading-[14px] font-semibold text-ink-muted uppercase lg:text-[11.6px]">
          {c.details.dobLabel}
        </p>
        <div className="mt-[6px] flex h-[54px] items-center rounded-[14px] border border-line bg-white px-[14px] lg:px-5">
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full bg-transparent text-[14px] text-ink outline-none lg:text-[14.7px]"
          />
        </div>
      </div>
      <div className="mt-[14px] lg:mt-[25px]">
        <p className="text-[11px] leading-[14px] font-semibold text-ink-muted uppercase lg:text-[11.6px]">
          {c.details.nationalityLabel}
        </p>
        <button
          type="button"
          className="mt-[6px] flex h-[54px] w-full items-center gap-[6px] rounded-[14px] border border-line bg-white px-[14px] lg:justify-between lg:px-5"
        >
          <span className="text-[14px] text-ink lg:text-[14.7px]">
            {IDENTITY.nationality}
          </span>
          <ChevronDown className="size-[14px] shrink-0 text-ink-muted lg:size-4" />
        </button>
      </div>
      <div className="mt-[14px] lg:mt-[25px]">
        <PrimaryButton label={common.action.continue} onClick={handleContinue} />
      </div>
      <div className="mt-[14px] lg:mt-5">
        <TextLinkButton
          label={common.action.back}
          onClick={() => navigate("/onboarding/id")}
        />
      </div>
    </OnboardingShell>
  );
}
