import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY } from "../reports.copy";

/* WD-55G / 55N / 55O / 55P "Unsaved Changes": #0a140f scrim at 34% over the
   form, then a 520px white card (border #d1ded6, radius 18) with a 21px
   title, 14px muted body and two stacked 46px buttons — the safe action
   ("Keep editing", #056b54) on top, the destructive one ("Discard changes",
   white with a #c72924 border and label) below.
   Mobile (W-55G node 973:434) centres a 330px card instead: radius 16, 24px
   padding, a 17px/22 bold title, 12px/17 muted body and two 46px buttons. */
export function UnsavedChangesDialog({
  onKeepEditing,
  onDiscard,
}: {
  onKeepEditing: () => void;
  onDiscard: () => void;
}) {
  const c = useSectionCopy(REPORTS_STATES_COPY);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={c.unsaved.title}
      className="fixed inset-0 z-40 flex items-center justify-center px-[30px] lg:px-0"
    >
      <div className="absolute inset-0 bg-[#0a140f] opacity-[0.34]" />
      <div className="relative w-full rounded-[16px] border border-lp-line bg-white px-[24px] py-[24px] lg:w-[520px] lg:rounded-[18px] lg:px-[27px] lg:pt-[27px] lg:pb-[21px]">
        <p className="text-[17px] leading-[22px] font-bold text-lp-ink lg:text-[21px] lg:leading-normal lg:font-semibold">
          {c.unsaved.title}
        </p>
        <p className="mt-[10px] text-[12px] leading-[17px] text-lp-muted lg:mt-[29px] lg:text-[14px] lg:leading-[22px]">
          {c.unsaved.body}
        </p>
        <button
          type="button"
          onClick={onKeepEditing}
          className="mt-[20px] flex h-[46px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[12px] font-semibold text-white hover:bg-lp-green lg:mt-[47px] lg:text-[13px]"
        >
          {c.unsaved.keepEditing}
        </button>
        <button
          type="button"
          onClick={onDiscard}
          className="mt-[12px] flex h-[46px] w-full items-center justify-center rounded-[12px] border border-[#c72924] bg-white text-[12px] font-semibold text-[#c72924] hover:bg-[#fff2f2] lg:mt-[14px] lg:text-[13px]"
        >
          {c.unsaved.discard}
        </button>
      </div>
    </div>
  );
}
