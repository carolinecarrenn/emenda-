import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { QUALIFICATIONS_COPY } from "../qualifications.copy";
import {
  CareerSubHeader,
  DangerButton,
  OutlineButton,
  PrimaryButton,
} from "../../experience/careerUi";
import { EMPLOYER_CREDENTIAL } from "../qualificationsMock";

const labelClass =
  "text-[10px] font-semibold tracking-[0.06em] text-[#65746d] uppercase";

/** WD-28E Review Employer Credential — credential detail card (TYPE /
 *  TRAINING / PROVIDER / COMPLETED), source note, "Add to my work record" /
 *  "Not now" / red "Report incorrect information". */
export function ReviewCredential({
  onAccept,
  onNotNow,
  onReport,
}: {
  onAccept: () => void;
  onNotNow: () => void;
  onReport: () => void;
}) {
  const c = useSectionCopy(QUALIFICATIONS_COPY);
  const { language } = useLanguage();

  return (
    <div>
      <CareerSubHeader
        backLabel={c.backLink}
        title={c.reviewTitle}
        subtitle={c.reviewSubtitle(EMPLOYER_CREDENTIAL.provider)}
        bold
      />

      <div className="mt-[38px] grid items-start gap-4 lg:grid-cols-2 lg:gap-x-[40px]">
        <div className="min-h-[270px] rounded-[16px] border border-[#d1ddd7] bg-white px-[16px] lg:px-[23px] py-[15px]">
          <p className={labelClass}>{c.labelType}</p>
          <p className="mt-[6px] text-[13px] text-[#17231f]">
            {c.typeValueEmployerTraining}
          </p>
          <p className={`mt-[18px] ${labelClass}`}>{c.labelTraining}</p>
          <p className="mt-[6px] text-[13px] font-semibold text-[#17231f]">
            {EMPLOYER_CREDENTIAL.training}
          </p>
          <p className={`mt-[20px] ${labelClass}`}>{c.labelProvider}</p>
          <p className="mt-[6px] text-[13px] text-[#17231f]">
            {EMPLOYER_CREDENTIAL.provider}
          </p>
          <p className={`mt-[20px] ${labelClass}`}>{c.labelCompleted}</p>
          <p className="mt-[6px] text-[13px] text-[#17231f]">
            {formatDisplayDate(EMPLOYER_CREDENTIAL.completedOn, language)}
          </p>
        </div>

        <div>
          <p className="text-[11px] leading-[18px] text-[#65746d]">
            {c.sourceNote(EMPLOYER_CREDENTIAL.provider)}
          </p>
          <div className="mt-[18px] flex flex-col gap-[22px]">
            <PrimaryButton label={c.addToRecord} onClick={onAccept} tall />
            <OutlineButton label={c.notNow} onClick={onNotNow} />
            <DangerButton
              label={c.reportIncorrect}
              onClick={onReport}
              small
            />
          </div>
        </div>
      </div>
    </div>
  );
}
