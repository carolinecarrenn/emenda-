import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { LOGS_COPY } from "../logs.copy";
import { STRESS_CHECKS } from "../logsMock";
import { LogRow } from "./LogRow";
import { LogsAction } from "./LogsAction";
import { LogsHeader } from "./LogsHeader";
import { StateBanner } from "./StateBanner";

/* W-61M3 (1196:527) — offline, a stress check cannot be stored safely, so the
   frame replaces the questionnaire with the amber notice, the last cached
   check-in row and a disabled "Coba setelah reconnect" action. */
export function StressOfflineScreen() {
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();

  const latest = STRESS_CHECKS[0];

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={c.health.title}
        crumbTo="/worker/logs/health"
        title={c.stress.title}
        subtitle={c.stress.offlineSubtitle}
      />

      <StateBanner
        className="mt-[12px] lg:mt-[26px]"
        tone="amber"
        title={c.stress.offlineTitle}
        body={c.stress.offlineBody}
      />

      <div className="mt-[12px] lg:mt-[24px]">
        <LogRow
          height={68}
          to={`/worker/logs/health/stress-check/${latest.id}`}
          title={`${formatDisplayDate(latest.date, language)} · ${
            c.stress.stressOptions[latest.stress]
          }`}
          meta={c.stress.cachedMeta}
        />
      </div>

      <div className="mt-[12px] lg:mt-[24px]">
        <LogsAction
          label={c.stress.offlineRetryCta}
          variant="outline"
          disabled
          widthClass="lg:w-[260px]"
        />
      </div>
    </div>
  );
}
