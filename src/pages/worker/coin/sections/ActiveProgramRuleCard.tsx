import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatSignedCoin } from "../coinFormat";
import { EARN_RULES } from "../coinMock";

/* W-60B node 1182:2033 — the mint card that names the rule in force right
   now, above the generic rule list. Figma writes the employer as "ABC Japan";
   the app uses the connected EMPLOYER so the screen agrees with every other
   surface (the shared-data rule).

   Desktop WD-60B closes the page with the same card as "Detailed earning
   rules" (1205:1153): the ACTIVE PROGRAM eyebrow over a 1012x150 two-column
   split (1205:1155 / 1205:1156) that spells out HOW / LIMIT / WHEN ADDED for
   every rule, with "Added automatically…" (1205:1304) under the right
   column. */
export function ActiveProgramRuleCard({
  className = "",
}: {
  className?: string;
}) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const reportRule = EARN_RULES.find((r) => r.id === "eligibleDailyReport");

  if (!reportRule) return null;

  const ruleLine = c.earn.activeProgram.rule(
    formatSignedCoin(reportRule.amount, language),
  );
  const columns = [
    { id: "left", rules: EARN_RULES.slice(0, 2), note: false },
    { id: "right", rules: EARN_RULES.slice(2), note: true },
  ];

  return (
    <div
      className={`rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[10px] lg:min-h-[150px] lg:px-[18px] lg:py-[10px] ${className}`}
    >
      <p className="text-[10px] leading-[14px] font-semibold text-lp-green lg:text-[11px]">
        {c.earn.activeProgram.eyebrow(EMPLOYER.name)}
      </p>

      {/* mobile W-60B keeps the single active-rule line */}
      <p className="mt-[3px] text-[10px] leading-[14px] font-semibold text-lp-ink lg:hidden">
        {ruleLine}
      </p>
      <p className="mt-[3px] text-[9px] leading-[13px] text-lp-muted lg:hidden">
        {c.earn.activeProgram.note}
      </p>

      {/* WD-60B detailed two-column breakdown */}
      <div className="mt-[10px] hidden gap-[22px] lg:grid lg:grid-cols-2">
        {columns.map((column) => (
          <div key={column.id} className="space-y-[10px]">
            {column.rules.map((rule) => (
              <div key={rule.id}>
                <p className="text-[11px] leading-[17px] font-semibold text-lp-ink">
                  {rule.id === "eligibleDailyReport"
                    ? ruleLine
                    : c.earnRule[rule.id].title}
                </p>
                <p className="text-[11px] leading-[17px] text-lp-ink">
                  {c.earnRule[rule.id].how}
                </p>
                <p className="text-[11px] leading-[17px] text-lp-muted">
                  {c.earnRule[rule.id].limit}
                </p>
                <p className="text-[11px] leading-[17px] text-lp-muted">
                  {c.earnRule[rule.id].whenAdded}
                </p>
              </div>
            ))}
            {column.note && (
              <p className="text-[11px] leading-[17px] text-lp-muted">
                {c.earn.activeProgram.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
