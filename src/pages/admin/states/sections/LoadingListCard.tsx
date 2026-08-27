import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { STATES_SKELETON_ROWS } from "../states.mock";

/* AD-10B "Loading list" (1226:1206): a 320x250 white card, radius 12, 1px
   #d6e3de — "Loading list" 15px bold at (19,19), then four 280x26 #f7faf8
   rows on a 40px pitch (y61…y181). Each row carries a 110x8 #d6e3de bar 10px
   in and an 80x8 bar 36px after it, both radius 4. */
export function LoadingListCard() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[19px] lg:h-[250px] lg:w-[320px]">
      <p className="text-[15px] leading-none font-bold text-[#17362e]">
        {c.systemStates.loadingList}
      </p>
      <div className="mt-[27px] flex animate-pulse flex-col gap-[14px]">
        {STATES_SKELETON_ROWS.map((row) => (
          <div
            key={row}
            className="flex h-[26px] items-center rounded-[7px] bg-[#f7faf8] px-[10px]"
          >
            <span className="h-[8px] w-[110px] rounded-[4px] bg-[#d6e3de]" />
            <span className="ml-[36px] h-[8px] w-[80px] rounded-[4px] bg-[#d6e3de]" />
          </div>
        ))}
      </div>
    </div>
  );
}
