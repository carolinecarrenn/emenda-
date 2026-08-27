import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";
import { ADJUSTMENT_HISTORY } from "../rewards.mock";

/* AD-07 "Adjustment history" (1223:3072): 568x512 white card, radius 12, 1px
   #d6e3de — 13px bold title over the 8px subtitle, an 8px semibold column
   header row (Employee 0 / Reason 164 / Delta 380 / By 454 across the 536px
   inner width) closed by a 1px #d6e3de rule, then five 68px rows of 9px text
   with the employee semibold #17362e and the rest #65746d. The card foot
   carries the #083d2d "Manual adjustment" (130x32) and white "View policy"
   (90x32) buttons.

   A row opens AD-07D's ledger panel (?state=transaction); this card's
   "Manual adjustment" opens AD-07D's detailed adjust panel
   (?state=adjust-detail) while the intro button opens AD-07B's interaction
   state; "View policy" opens the AD-07C lifecycle (?state=lifecycle). Below
   lg each row becomes a stacked block so no column is dropped. */

const COLUMNS = "lg:grid lg:grid-cols-[164px_216px_74px_82px]";

export function AdjustmentHistoryCard() {
  const c = useSectionCopy(ADMINREWARDS_COPY);

  return (
    <div className="flex flex-col rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] lg:h-[512px] lg:w-[568px]">
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-[13px] leading-none font-bold text-[#17362e]">
          {c.history.title}
        </h3>
        <p className="text-[10px] leading-none text-[#65746d] lg:text-[8px]">
          {c.history.subtitle}
        </p>
      </div>

      <div
        className={`mt-[16px] hidden text-[8px] leading-none font-semibold text-[#65746d] ${COLUMNS}`}
      >
        <span>{c.history.columns.employee}</span>
        <span>{c.history.columns.reason}</span>
        <span>{c.history.columns.delta}</span>
        <span>{c.history.columns.by}</span>
      </div>
      <div className="mt-[12px] hidden h-px bg-[#d6e3de] lg:block" />

      <div className="mt-[10px] flex flex-col gap-[10px] lg:mt-0 lg:gap-0">
        {ADJUSTMENT_HISTORY.map((record) => (
          <Link
            key={record.id}
            to="/admin/rewards?state=transaction"
            aria-label={`${c.history.openTransactionAction} — ${record.id}`}
            className={`rounded-[9px] bg-[#f7faf8] p-[10px] hover:bg-[#eef5f1] lg:h-[68px] lg:items-start lg:rounded-none lg:bg-transparent lg:p-0 lg:pt-[20px] lg:hover:bg-[#f7faf8] ${COLUMNS}`}
          >
            <span className="block text-[11px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
              {record.employee}
            </span>
            <span className="mt-[6px] block text-[10px] leading-none text-[#65746d] lg:mt-0 lg:text-[9px]">
              {record.reason}
            </span>
            <span className="mt-[6px] block text-[10px] leading-none text-[#65746d] lg:mt-0 lg:text-[9px]">
              <span className="lg:hidden">{c.history.columns.delta}: </span>
              {record.delta}
            </span>
            <span className="mt-[6px] block text-[10px] leading-none text-[#65746d] lg:mt-0 lg:text-[9px]">
              <span className="lg:hidden">{c.history.columns.by}: </span>
              {record.by}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-[24px] flex items-center gap-[16px] lg:mt-[36px]">
        <Link
          to="/admin/rewards?state=adjust-detail"
          className="flex h-[32px] flex-1 items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white lg:w-[130px] lg:flex-none lg:justify-start"
        >
          {c.intro.manualAdjustment}
        </Link>
        <Link
          to="/admin/rewards?state=lifecycle"
          className="flex h-[32px] flex-1 items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] lg:w-[90px] lg:flex-none lg:justify-start"
        >
          {c.history.viewPolicy}
        </Link>
      </div>
    </div>
  );
}
