import { useState } from "react";
import { Link } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { COIN_COPY } from "../coin.copy";
import { formatLedgerMonth, formatSignedCoin } from "../coinFormat";
import {
  COIN_LEDGER,
  LEDGER_FILTERS,
  LEDGER_MONTH,
  type LedgerEntry,
  type LedgerFilter,
} from "../coinMock";

/* W-60A (1151:296). Mobile: a 36px filter row of 82/86px chips at radius 18
   (9px/12 semibold — the active chip mint with a green border and label, the
   rest white with a #d9e1dc border and an ink label), then a white 350px card
   at radius 14 with 14px padding holding the 10px "AUGUST 2026" label and the
   58px activity rows on the card's own white ground (11px/15 title, 10px/14
   date line, 12px/16 green amount; the pending row is a link into W-60K and
   sits one step smaller). Desktop WD-60A (1186:1471) keeps its 18px card
   title, mint rows and red used amounts. */
export function HistoryLedgerCard() {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const [filter, setFilter] = useState<LedgerFilter>("all");

  const rows = COIN_LEDGER.filter(
    (entry) => filter === "all" || entry.kind === filter,
  );

  const metaText = (entry: LedgerEntry): string => {
    if (entry.metaId === "pendingEligibility")
      return c.ledgerMeta.pendingEligibility;
    if (entry.metaId === "streak")
      return c.ledgerMeta.streak(String(entry.metaValue ?? 0));
    if (entry.metaId === "personalProfile") return c.ledgerMeta.personalProfile;
    if (entry.metaId === "partnerBenefit") return c.ledgerMeta.partnerBenefit;
    if (entry.metaId === "emendaId") return c.ledgerMeta.emendaId;
    return EMPLOYER.name;
  };

  const amountText = (entry: LedgerEntry): string => {
    const value = formatSignedCoin(entry.amount, language);
    return entry.kind === "pending" ? c.pendingAmount(value) : value;
  };

  /* W-60A draws every amount green except the used row, which is ink; the
     desktop frame keeps its amber/red accents. */
  const amountColor = (entry: LedgerEntry): string =>
    entry.kind === "pending"
      ? "text-lp-green lg:text-[#804d0d]"
      : entry.kind === "used"
        ? "text-lp-ink lg:text-[#c72924]"
        : "text-lp-green";

  return (
    <>
      <div className="flex gap-[6px] lg:hidden">
        {LEDGER_FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={`flex h-[36px] flex-1 items-center justify-center rounded-[18px] border text-[9px] leading-[12px] font-semibold ${
              option === filter
                ? "border-lp-green bg-lp-tint text-lp-green"
                : "border-lp-line bg-white text-lp-ink"
            }`}
          >
            {c.ledgerFilter[option]}
          </button>
        ))}
      </div>

      <div className="mt-[12px] rounded-[14px] border border-lp-line bg-white p-[14px] lg:mt-0 lg:min-h-[520px] lg:rounded-[18px] lg:px-[17px] lg:py-[17px]">
        <p className="hidden px-[4px] text-[18px] font-semibold text-lp-ink lg:block">
          {c.history.cardTitle}
        </p>

        <div className="hidden flex-wrap items-center justify-between gap-3 px-[4px] lg:mt-[14px] lg:flex">
          <div className="flex flex-wrap gap-[8px]">
            {LEDGER_FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={`flex h-[26px] items-center rounded-[13px] px-[12px] text-[11px] font-semibold ${
                  option === filter
                    ? "bg-lp-mint text-lp-green"
                    : "border border-lp-line bg-white text-lp-muted hover:border-lp-green"
                }`}
              >
                {c.ledgerFilter[option]}
              </button>
            ))}
          </div>
          <p className="text-[11px] font-semibold tracking-[0.02em] text-lp-green">
            {formatLedgerMonth(LEDGER_MONTH, language)}
          </p>
        </div>

        {/* W-60A node 1151:314 — the month label heads the list on mobile */}
        <p className="text-[10px] leading-[13px] font-semibold text-lp-muted lg:hidden">
          {formatLedgerMonth(LEDGER_MONTH, language)}
        </p>

        <div className="mt-[6px] space-y-[6px] lg:mt-[12px] lg:space-y-[4px]">
          {rows.map((entry) => {
            const content = (
              <>
                <div>
                  <p
                    className={`font-semibold text-lp-ink ${entry.compact ? "text-[10px] leading-[13px] lg:text-[12px]" : "text-[11px] leading-[15px] lg:text-[13px]"} lg:leading-normal`}
                  >
                    {entry.titleEmployer
                      ? `${c.ledgerTitle[entry.titleId]} · ${EMPLOYER.name}`
                      : c.ledgerTitle[entry.titleId]}
                  </p>
                  <p
                    className={`${entry.compact ? "mt-[2px] text-[9px] leading-[12px]" : "mt-[3px] text-[10px] leading-[14px]"} text-lp-muted lg:mt-[5px] lg:text-[11px] lg:leading-normal`}
                  >
                    {`${formatDisplayDate(entry.date, language)} · ${metaText(entry)}`}
                  </p>
                </div>
                <p
                  className={`shrink-0 text-right font-semibold ${entry.compact ? "text-[10px] leading-[14px] lg:text-[12px]" : "text-[12px] leading-[16px] lg:text-[13px]"} lg:leading-normal ${amountColor(entry)}`}
                >
                  {amountText(entry)}
                </p>
              </>
            );

            const rowClass = `flex items-center justify-between gap-4 rounded-[10px] px-0 lg:bg-lp-tint lg:px-[14px] lg:py-[12px] ${
              entry.compact ? "h-[54px] lg:h-[52px]" : "h-[58px] lg:h-[68px]"
            }`;

            /* 1179:551 — the pending row opens W-60K */
            return entry.kind === "pending" ? (
              <Link
                key={entry.id}
                to="/worker/coin?state=pending-reward"
                className={rowClass}
              >
                {content}
              </Link>
            ) : (
              <div key={entry.id} className={rowClass}>
                {content}
              </div>
            );
          })}
          {rows.length === 0 && (
            <p className="py-[18px] text-[10px] leading-[14px] text-lp-muted lg:px-[14px] lg:text-[13px]">
              {c.history.emptyFilter}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
