import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { StateActionButton } from "./StateActionButton";

/* AD-10B "Couldn’t load reports" (1226:1220): a 328x250 white card, radius 12,
   1px #d6e3de — 15px bold title at (19,19), the 9px #65746d "Your filters are
   preserved…" line at y49, and the Retry / Reset filters pair at y153, 23px
   apart. Both actions return to the loaded screen, which is exactly the
   context-preserving behaviour AD-10C step 03 requires. */
export function LoadErrorCard() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[19px] lg:h-[250px] lg:w-[328px]">
      <p className="text-[15px] leading-none font-bold text-[#17362e]">
        {c.systemStates.loadError.title}
      </p>
      <p className="mt-[15px] text-[11px] leading-[16px] text-[#65746d] lg:text-[9px] lg:leading-[13px]">
        {c.systemStates.loadError.body}
      </p>
      <div className="mt-[24px] flex items-center gap-[23px] lg:mt-[78px]">
        <StateActionButton to="/admin/states" variant="primary">
          {c.systemStates.loadError.retry}
        </StateActionButton>
        <StateActionButton to="/admin/states" variant="outline">
          {c.systemStates.loadError.resetFilters}
        </StateActionButton>
      </div>
    </div>
  );
}
