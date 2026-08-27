import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { QUALIFICATIONS_COPY } from "../qualifications.copy";
import { PillButton, PrimaryButton } from "../../experience/careerUi";
import {
  COMPANY_QUALIFICATION,
  EMPLOYER_CREDENTIAL,
  EMPLOYER_TRAINING,
  EXTERNAL_QUALIFICATION,
} from "../qualificationsMock";

const eyebrowClass =
  "text-[11px] leading-[16px] font-semibold tracking-[0.06em] text-[#0b5842] uppercase";
/* WD-28 record card: 520×124, 23px side inset, 14px top/bottom inset. */
const cardClass = "min-h-[124px] rounded-[16px] border px-[16px] lg:px-[23px] py-[14px]";
const titleClass = "mt-[8px] text-[16px] leading-[22px] font-semibold text-[#17231f]";
const metaClass = "mt-[8px] text-[13px] leading-[18px] text-[#65746d]";
const statusClass = "mt-[8px] text-[12px] leading-[16px] text-[#65746d]";

/** WD-28 base — provenance-eyebrow record cards: white EXTERNAL (Edit pill),
 *  white COMPANY-ISSUED, mint EMPLOYER-VERIFIED; "Add qualification or
 *  training" primary + self-added fine print. WD-28D adds the amber
 *  employer-credential banner above the mint card. */
export function QualificationsList({
  readOnly = false,
  credentialAvailable = false,
  onEdit,
  onAdd,
  onReviewCredential,
  onDismissCredential,
}: {
  readOnly?: boolean;
  credentialAvailable?: boolean;
  onEdit?: () => void;
  onAdd?: () => void;
  onReviewCredential?: () => void;
  onDismissCredential?: () => void;
}) {
  const c = useSectionCopy(QUALIFICATIONS_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  return (
    /* WD-28 desktop: two fixed 520px columns, 40px gutter, 18px row rhythm.
       Record cards are 124px tall (14px insets, 8px between rows). */
    <div className="grid items-start gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
      <div className="flex flex-col gap-[18px]">
        {/* External qualification — self-added, editable */}
        <div className={`relative ${cardClass} border-[#d1ddd7] bg-white`}>
          <p className={eyebrowClass}>{c.eyebrowExternal}</p>
          {!readOnly && (
            <div className="mt-[12px] lg:absolute lg:top-[10px] lg:right-[23px] lg:mt-0 lg:w-[95px]">
              <PillButton compact label={common.action.edit} onClick={onEdit} />
            </div>
          )}
          <p className={titleClass}>{EXTERNAL_QUALIFICATION.name}</p>
          <p className={metaClass}>
            {EXTERNAL_QUALIFICATION.issuer} · {c.addedByYou}
          </p>
          <p className={statusClass}>{c.proofAttached}</p>
        </div>

        {/* Company-issued qualification — no edit action (WD-28 draws this
            one 12px shorter than the other record cards). */}
        <div
          className={`${cardClass} border-[#d1ddd7] bg-white lg:min-h-[112px] lg:pb-[2px]`}
        >
          <p className={eyebrowClass}>{c.eyebrowCompany}</p>
          <p className={titleClass}>{COMPANY_QUALIFICATION.name}</p>
          <p className={metaClass}>
            {COMPANY_QUALIFICATION.issuer} · {c.internalQualification}
          </p>
          <p className={statusClass}>{c.companyIssuedRecord}</p>
        </div>
      </div>

      <div className="flex flex-col gap-[18px]">
        {credentialAvailable && (
          <div className="rounded-[16px] border border-[#eadfb8] bg-[#fbf3d8] px-[16px] lg:px-[23px] py-[17px]">
            <p className="text-[14px] font-semibold text-[#8a6116]">
              {c.credentialAvailableTitle}
            </p>
            <p className="mt-[7px] text-[13px] leading-[20px] text-[#65746d]">
              {c.credentialAvailableBody(
                EMPLOYER_CREDENTIAL.provider,
                EMPLOYER_CREDENTIAL.training,
              )}
            </p>
            {!readOnly && (
              /* W-28D pairs "Review credential" with a "Not now" dismissal;
                 dismissing returns the plain W-28 list. */
              <div className="mt-[12px] flex flex-col gap-[10px] lg:flex-row lg:items-center">
                <PillButton
                  label={common.status.review}
                  onClick={onReviewCredential}
                />
                <button
                  type="button"
                  onClick={onDismissCredential}
                  className="h-[30px] shrink-0 rounded-[12px] border border-[#e2d7ae] bg-transparent px-[18px] text-[12px] font-semibold text-[#8a6116] hover:bg-[#f6ecd0]"
                >
                  {c.notNow}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Employer-verified training — view-only mint card */}
        <div className={`${cardClass} border-[#cfe2d9] bg-[#eaf4ef]`}>
          <p className={eyebrowClass}>{c.eyebrowEmployerVerified}</p>
          <p className={titleClass}>{EMPLOYER_TRAINING.name}</p>
          <p className={metaClass}>
            {EMPLOYER_TRAINING.provider} ·{" "}
            {c.completedOn(
              formatDisplayDate(EMPLOYER_TRAINING.completedOn, language),
            )}
          </p>
          <p className="mt-[8px] text-[12px] leading-[16px] font-semibold text-[#0b5842]">
            {c.verifiedBy(EMPLOYER_TRAINING.provider)}
          </p>
        </div>

        {!readOnly && (
          <>
            <PrimaryButton label={c.addButton} onClick={onAdd} tall />
            <p className="text-[12px] leading-[21px] text-[#65746d]">
              {c.selfAddedNote}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
