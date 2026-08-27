import { useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { EXPERIENCE_COPY } from "../experience.copy";
import {
  CareerSubHeader,
  FieldInput,
  OutlineButton,
  PrimaryButton,
} from "../careerUi";
import { VERIFIED_EXPERIENCE } from "../experienceMock";

/** WD-25I Employer Verified detail — locked mint-grey fields (#f1f5f2,
 *  "· VERIFIED" eyebrows), editable personal note, "Save personal note"
 *  primary + "Use in CV" outline pill. */
export function VerifiedExperienceDetail({ onExit }: { onExit: () => void }) {
  const c = useSectionCopy(EXPERIENCE_COPY);
  const [note, setNote] = useState("");

  return (
    <div>
      <CareerSubHeader
        backLabel={c.backLink}
        title={c.verifiedDetailTitle}
        subtitle={c.verifiedDetailSubtitle}
      />

      <div className="mt-[38px] grid gap-x-[22px] gap-y-[12px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[22px]">
        <FieldInput
          label={c.labelRoleVerified}
          value={VERIFIED_EXPERIENCE.role}
          locked
        />
        <FieldInput
          label={c.labelEmployerVerified}
          value={VERIFIED_EXPERIENCE.employer}
          locked
        />
        <FieldInput
          label={c.labelCountryVerified}
          value={VERIFIED_EXPERIENCE.country}
          locked
        />
        <FieldInput
          label={c.labelStartDateVerified}
          value={VERIFIED_EXPERIENCE.startDate}
          locked
        />
        <FieldInput
          label={c.labelEndDateVerified}
          value={VERIFIED_EXPERIENCE.endDate}
          locked
        />
        <FieldInput
          label={c.labelPersonalNote}
          value={note}
          onChange={setNote}
          placeholder={c.personalNotePlaceholder}
        />
      </div>

      <div className="mt-[10px] grid gap-[12px] lg:mt-[40px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-4">
        <PrimaryButton label={c.savePersonalNote} onClick={onExit} tall />
        <OutlineButton label={c.useInCv} height={46} />
      </div>
    </div>
  );
}
