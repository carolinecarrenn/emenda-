import { useCommonCopy } from "@/i18n/common";
import { useHelpCopy } from "../help.copy";

/* Contact Support — Unsaved Changes.

   Mobile is canonical (W-48E node 899:360): a CENTERED 334×300 white card at
   inset 28, radius 18, borderless, over the 28% scrim — 18px semibold #17231f
   title at 19/21, 12px #65746d body, then the safe action first as an
   outlined #d7e2dc / #0c5941 "Keep editing" (node 899:363) above the filled
   #0c5941 "Discard changes" (node 899:365), both 294×48 radius 14 with 12px
   labels and 10px apart.

   Desktop keeps WD-48E (node 1182:471): centered 520×300 card, radius 18,
   border #d1ded6, inset 27px — 22px title, 14px body, the filled #056b54
   "Keep editing" above the red-outlined (#c72924) "Discard changes". */
interface DiscardSupportRequestModalProps {
  onKeepEditing: () => void;
  onDiscard: () => void;
}

const ACTION_CLASS =
  "flex h-[48px] w-full items-center justify-center rounded-[14px] border text-[12px] font-semibold lg:rounded-[12px] lg:text-[14px]";

export function DiscardSupportRequestModal({
  onKeepEditing,
  onDiscard,
}: DiscardSupportRequestModalProps) {
  const c = useHelpCopy();
  const common = useCommonCopy();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={onKeepEditing}
        className="absolute inset-0 bg-[#141f1a]/28"
      />
      <div className="relative flex min-h-[300px] w-[334px] flex-col rounded-[18px] border border-white bg-white p-[19px] lg:min-h-0 lg:w-[520px] lg:border-lp-line lg:p-[27px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#17231f] lg:text-[22px] lg:text-lp-ink">
          {c.discard.title}
        </p>
        <p className="mt-[10px] text-[12px] leading-[19px] text-lp-muted lg:text-[14px] lg:leading-[20px]">
          {c.discard.body}
        </p>
        <div className="mt-auto space-y-[10px] lg:mt-[28px]">
          <button
            type="button"
            onClick={onKeepEditing}
            className={`${ACTION_CLASS} border-[#d7e2dc] bg-white text-[#0c5941] hover:border-lp-green lg:border-transparent lg:bg-lp-button lg:text-white lg:hover:bg-lp-green`}
          >
            {c.discard.keep}
          </button>
          <button
            type="button"
            onClick={onDiscard}
            className={`${ACTION_CLASS} border-brand bg-brand text-white hover:bg-lp-green lg:border-[#c72924] lg:bg-white lg:text-[#c72924] lg:hover:bg-[#fff2f2]`}
          >
            {c.discard.discard}
          </button>
        </div>
      </div>
    </div>
  );
}
