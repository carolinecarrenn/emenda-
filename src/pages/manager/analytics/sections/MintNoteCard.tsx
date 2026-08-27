import type { ReactNode } from "react";

/* Shared mint note card used by the section's boundary/scope callouts
   (EM-13 1107:124, EM-R2-01 1107:157, EM-R2-02 1107:203, EM-R2-03 1107:223 &
   1107:230, EM-R2-05 1107:263): bg #e8f5f0, border #ccded6, radius 12 —
   9px caps title #0c5941 over a 10px #667a73 body set tight on the 390px
   mocks' 12px leading. The mocks draw these cards at 56–60px for a two-line
   body and 76px for EM-R2-01's three-line one, which is 8px above the title
   ink, 8px between title and body, and only 4px under the last line — with a
   58px floor for the single-line variant (EM-R2-03 1107:230). Desktop keeps
   the roomier 10px/9px rhythm. */
export function MintNoteCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-[58px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] pt-[8px] pb-[4px] lg:min-h-0 lg:py-[10px]">
      <p className="text-[9px] font-semibold text-brand uppercase lg:text-[10px]">
        {title}
      </p>
      <div className="mt-[8px] space-y-[6px] text-[10px] leading-[12px] text-[#667a73] lg:mt-[9px] lg:space-y-[3px] lg:text-[12px] lg:leading-[18px]">
        {children}
      </div>
    </div>
  );
}
