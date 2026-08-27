import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { QUALIFICATIONS_COPY } from "../qualifications.copy";
import { OutlineButton, PrimaryButton } from "../../experience/careerUi";

/** W-28C save failed — the form is replaced by a recovery screen. Mobile
 *  stacks failure card → read-only record recap → "Try saving again" /
 *  "Cancel"; desktop (WD-28C) keeps the recap in a second 520px column. */
export function SaveFailedState({
  name,
  issuer,
  recordTypeLabel,
  proofAttached,
  onTryAgain,
  onCancel,
}: {
  name: string;
  issuer: string;
  recordTypeLabel: string;
  proofAttached: boolean;
  onTryAgain: () => void;
  onCancel: () => void;
}) {
  const c = useSectionCopy(QUALIFICATIONS_COPY);
  const common = useCommonCopy();

  return (
    <div className="mt-[34px] grid gap-[18px] lg:mt-[38px] lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="rounded-[14px] border border-[#f0c5bf] bg-[#fdf1ef] px-[19px] pt-[13px] pb-[12px] lg:col-start-1 lg:row-start-1 lg:h-[61px]">
        <p className="text-[13px] leading-[16px] font-semibold text-[#b42318]">
          {c.saveFailedTitle}
        </p>
        <p className="mt-[6px] text-[12px] leading-[15px] text-[#65746d]">
          {c.saveFailedBody}
        </p>
      </div>

      {/* Record that was not saved — read-only recap */}
      <div className="rounded-[16px] border border-[#d1ddd7] bg-white px-[16px] py-[20px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-[187px] lg:px-[23px]">
        <p className="text-[18px] leading-[22px] font-semibold text-[#17231f]">
          {name}
        </p>
        <p className="mt-[11px] text-[13px] leading-[16px] text-[#65746d]">
          {issuer}
        </p>
        <p className="mt-[13px] text-[13px] leading-[16px] text-[#65746d]">
          {recordTypeLabel}
        </p>
        {proofAttached && (
          <p className="mt-[14px] text-[13px] leading-[16px] text-[#65746d]">
            {c.summaryProofAttached}
          </p>
        )}
        <p className="mt-[16px] text-[13px] leading-[16px] font-semibold text-[#17231f]">
          {c.summaryNotVerified}
        </p>
      </div>

      <div className="mt-[10px] flex flex-col gap-[12px] lg:col-start-1 lg:row-start-2 lg:mt-0 lg:gap-[23px]">
        <PrimaryButton label={c.trySavingAgain} onClick={onTryAgain} tall />
        <OutlineButton
          label={common.action.cancel}
          onClick={onCancel}
          height={46}
        />
      </div>
    </div>
  );
}
