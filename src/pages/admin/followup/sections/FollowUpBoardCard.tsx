import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY, type AdminFollowUpCopy } from "../followup.copy";
import {
  BOARD_COLUMNS,
  type BoardCase,
  type BoardPillKey,
} from "../followup.mock";

/* AD-05 "Follow-up board" (1223:2304): 808x512 white card, radius 12,
   1px #d6e3de — 13px bold title over its 8px caption, then three 242x432
   #f7faf8 columns (radius 10, 16px apart) whose 11px bold headers sit above
   white 48px case cards (radius 9) carrying the report id, its reason line
   and the status pill. */

const PILL_TONE: Record<BoardPillKey, string> = {
  pending: "bg-[#e8f5f0] text-[#083d2d]",
  inProgress: "bg-[#e8f5f0] text-[#083d2d]",
  high: "bg-[#fdf0ef] text-[#b04139]",
};

function reasonLine(item: BoardCase, reasons: AdminFollowUpCopy["board"]["reasons"]) {
  switch (item.reason) {
    case "noOwner":
      return reasons.noOwner.replace("{hours}", String(item.hoursLeft ?? 0));
    case "missingEvidence":
      return reasons.missingEvidence.replace(
        "{days}",
        String(item.daysLeft ?? 0),
      );
    case "ownerAssigned":
      return reasons.ownerAssigned.replace("{name}", item.owner ?? "");
    case "waitingEmployee":
      return reasons.waitingEmployee;
    case "harassmentConcern":
      return reasons.harassmentConcern;
    case "repeatedNoProgress":
      return reasons.repeatedNoProgress;
  }
}

export function FollowUpBoardCard() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  return (
    <section className="flex min-w-0 flex-1 flex-col gap-[16px] rounded-[12px] border border-[#d6e3de] bg-white p-[15px] lg:h-[512px]">
      <div className="flex flex-col gap-[3px]">
        <h3 className="text-[13px] leading-none font-bold text-[#17362e]">
          {c.board.title}
        </h3>
        <p className="text-[10px] leading-[14px] text-[#65746d] lg:text-[8px] lg:leading-none">
          {c.board.subtitle}
        </p>
      </div>

      <div className="grid gap-[16px] lg:grid-cols-3">
        {BOARD_COLUMNS.map((column) => (
          <div
            key={column.key}
            className="flex flex-col gap-[16px] rounded-[10px] bg-[#f7faf8] p-[12px] lg:h-[432px]"
          >
            <p className="text-[11px] leading-none font-bold text-[#17362e]">
              {c.board.columns[column.key]}
            </p>
            <div className="flex flex-col gap-[10px] px-[4px] lg:gap-[38px]">
              {column.cases.map((item) => (
                <article
                  key={item.id}
                  className="flex h-[48px] items-center gap-[8px] rounded-[9px] bg-white px-[12px]"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                    <p className="truncate text-[10px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                      {item.id}
                    </p>
                    <p className="truncate text-[9px] leading-none text-[#65746d] lg:text-[8px]">
                      {reasonLine(item, c.board.reasons)}
                    </p>
                  </div>
                  <div
                    className={`flex h-[24px] shrink-0 items-center rounded-full px-[10px] ${PILL_TONE[item.pill]}`}
                  >
                    <span className="text-[10px] leading-none font-semibold whitespace-nowrap">
                      {c.board.pills[item.pill]}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
