import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { DeactivateConfirmCard } from "./DeactivateConfirmCard";
import { LoadErrorCard } from "./LoadErrorCard";
import { LoadingListCard } from "./LoadingListCard";

/* AD-10B "System states" (1226:1202): a 720-wide #f7faf8 panel, radius 14,
   1px #d6e3de — the "INTERACTION STATES" eyebrow, the 18px "System states"
   title, its 10px subtitle, then the 320 Loading list / 328 error pair 24px
   apart and the 672 confirmation card below them.

   In the frame the eyebrow (y21) and the title (y23) overlap; they are
   stacked here so both stay readable, and the panel stops at its content
   instead of reproducing the frame's 900px of trailing canvas. */
export function SystemStatesBoard() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <section className="rounded-[14px] border border-[#d6e3de] bg-[#f7faf8] p-[23px] lg:w-[720px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.systemStates.eyebrow}
      </p>
      <h3 className="mt-[8px] text-[18px] leading-none font-bold text-[#17362e]">
        {c.systemStates.title}
      </h3>
      <p className="mt-[8px] text-[11px] leading-[16px] text-[#65746d] lg:text-[10px] lg:leading-none">
        {c.systemStates.subtitle}
      </p>

      <div className="mt-[29px] flex flex-col gap-[24px] lg:flex-row lg:items-start">
        <LoadingListCard />
        <LoadErrorCard />
      </div>
      <div className="mt-[28px]">
        <DeactivateConfirmCard />
      </div>
    </section>
  );
}
