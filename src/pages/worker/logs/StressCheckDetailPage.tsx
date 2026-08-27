import { Link, useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillLogsCopy, LOGS_COPY } from "./logs.copy";
import { STRESS_CHECKS } from "./logsMock";
import { DetailField } from "./sections/DetailField";
import { InfoCard } from "./sections/InfoCard";
import { LogsHeader } from "./sections/LogsHeader";
import { StateBanner } from "./sections/StateBanner";
import { StressQuestionRow } from "./sections/StressQuestionRow";

/** Stress check detail — Figma WD-61M6 / WD-61M7 dated self-check screens;
 *  mobile W-61M6 / W-61M7. Read-only chips plus the worker's private note. */
export function StressCheckDetailPage() {
  const { checkId } = useParams();
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();

  const check = STRESS_CHECKS.find((item) => item.id === checkId);

  if (!check) {
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        <Link
          to="/worker/logs/health/stress-check/history"
          className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
        >
          {c.stress.historyTitle}
        </Link>
        <div className="mt-[12px] lg:mt-[22px] rounded-[14px] border border-lp-line bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-lp-ink">
            {c.record.notFound}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={c.stress.historyTitle}
        crumbTo="/worker/logs/health/stress-check/history"
        title={c.stress.detailTitle}
        subtitle={c.stress.detailSubtitle}
      />

      {state === "offline" && (
        <StateBanner
          className="mt-[12px] lg:mt-[26px]"
          tone="amber"
          title={c.states.offlineTitle}
          body={c.states.offlineBody}
        />
      )}

      {/* W-61M (1167:619) is the canonical mobile stress layout: a flat
          12px-rhythm column with the mint PRIVAT · SELF CHECK card on top.
          WD-61M6 wraps the same content in a white card, radius 18. */}
      <div className="mt-[12px] lg:mt-[50px] lg:rounded-[18px] lg:border lg:border-lp-line lg:bg-white lg:px-[19px] lg:py-[18px]">
        <div className="rounded-[16px] border border-lp-line bg-lp-mint px-[14px] py-[12px] lg:contents">
          <p className="text-[11px] leading-[15px] font-semibold text-lp-green">
            {c.stress.eyebrow}
          </p>
          <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[16px] lg:text-[12px]">
            {`${formatDisplayDate(check.date, language)} · ${c.privateLabel}`}
          </p>
        </div>

        <div className="mt-[12px] space-y-[12px] lg:mt-[17px] lg:space-y-[46px]">
          <StressQuestionRow
            readOnly
            question={c.stress.q1}
            options={c.stress.stressOptions}
            selected={check.stress}
            onSelect={() => undefined}
          />
          <StressQuestionRow
            readOnly
            question={c.stress.q2}
            options={c.stress.energyOptions}
            selected={check.energy}
            onSelect={() => undefined}
          />
          <StressQuestionRow
            readOnly
            question={c.stress.q3}
            options={c.stress.sleepOptions}
            selected={check.sleep}
            onSelect={() => undefined}
          />
        </div>

        <div className="mt-[12px] lg:mt-[50px]">
          <DetailField
            label={c.stress.detailNoteLabel}
            value={check.note}
            multiline
          />
        </div>
      </div>

      <p className="mt-[12px] lg:mt-[24px] text-[13px] leading-[20px] text-lp-muted">
        {fillLogsCopy(c.stress.historySummary, {
          stress: c.stress.stressOptions[check.stress].toLowerCase(),
          energy: c.stress.energyOptions[check.energy].toLowerCase(),
          sleep: c.stress.sleepOptions[check.sleep].toLowerCase(),
        })}
      </p>

      <InfoCard
        className="mt-[12px] lg:mt-[20px]"
        size="sm"
        title={c.stress.notDiagnosis}
        body={c.stress.resultDisclaimer}
      />
    </div>
  );
}
