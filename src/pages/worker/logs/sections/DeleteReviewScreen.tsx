import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "../logs.copy";
import { LogsAction } from "./LogsAction";
import { LogsHeader } from "./LogsHeader";

interface DeleteReviewScreenProps {
  crumb: string;
  crumbTo: string;
  /** Raw record title — never translated. */
  recordTitle: string;
  /** Which record class is being deleted (career / health / life). */
  body: string;
  onKeep: () => void;
  onConfirm: () => void;
}

/* WD-61S1 (1187:2133) / WD-61S2 (1187:2189) / WD-61S3 (1187:2245) — deleting a
   private note is its own review page, not an overlay: the eyebrow + "Hapus
   catatan?" H1 over a 1012x160 red review card (raw record title in a 28px box
   at y=20, the red warning line in a 54px box at y=56), then the 230x46 "Keep
   note" outline button and the 220x46 solid-red "Delete permanently" button
   38px below the card with a 16px gutter. */
export function DeleteReviewScreen({
  crumb,
  crumbTo,
  recordTitle,
  body,
  onKeep,
  onConfirm,
}: DeleteReviewScreenProps) {
  const c = useSectionCopy(LOGS_COPY);

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={crumb}
        crumbTo={crumbTo}
        title={c.deleteReview.title}
        subtitle={c.deleteReview.subtitle}
      />

      <div className="mt-[26px] rounded-[16px] border border-[#e6a9a2] bg-[#fdf2f1] px-[16px] py-[16px] lg:mt-[56px] lg:min-h-[160px] lg:px-[22px] lg:pt-[20px]">
        <p className="text-[15px] leading-[28px] font-semibold text-lp-ink lg:text-[16px]">
          {recordTitle}
        </p>
        <p className="mt-[8px] text-[12px] leading-[20px] text-[#c0392b] lg:mt-[8px] lg:text-[13px]">
          {body}
        </p>
      </div>

      <div className="mt-[24px] flex flex-col gap-3 lg:mt-[38px] lg:flex-row lg:gap-4">
        <LogsAction
          label={c.deleteReview.keep}
          variant="outline"
          onClick={onKeep}
          heightClass="h-[46px]"
          widthClass="lg:w-[230px]"
        />
        <LogsAction
          label={c.deleteReview.confirm}
          variant="danger"
          onClick={onConfirm}
          heightClass="h-[46px]"
          widthClass="lg:w-[220px]"
        />
      </div>
    </div>
  );
}
