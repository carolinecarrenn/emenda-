import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import {
  ADMIN_ACCESS_ROWS,
  MISSING_DAILY_REPORTS_THRESHOLD,
  NOTIFICATION_ORDER,
} from "../settings.mock";
import { AppLanguageCard } from "./AppLanguageCard";
import { SettingsButton, SettingsCard } from "./SettingsCard";

/* AD-09 "Admin access & notifications" (1225:1010): the 384px right column —
   three 48px #f7faf8 access rows (radius 9) each carrying the person's name,
   their role line and the mint Owner / Manager pill; the 180px #f7faf8
   notification block with four 7px #083d2d dots; the dark "Add manager
   access" and outline "Reset rules" buttons; and the AD-09E entry card.

   Scope (AD-SCOPE / AD-09C flow rule): this grants manager access inside this
   company only — it is not global role administration. */
export function AdminAccessCard({
  onResetRules,
  onChangeLanguage,
}: {
  onResetRules: () => void;
  onChangeLanguage: () => void;
}) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  const notificationLabels = {
    highPriorityReport: c.access.notificationItems.highPriorityReport,
    overdueFollowUp: c.access.notificationItems.overdueFollowUp,
    missingDailyReports: c.access.notificationItems.missingDailyReports.replace(
      "{count}",
      String(MISSING_DAILY_REPORTS_THRESHOLD),
    ),
    manualRewardAdjustment: c.access.notificationItems.manualRewardAdjustment,
  };

  return (
    <SettingsCard
      title={c.access.title}
      subtitle={c.access.subtitle}
      className="lg:w-[384px] lg:shrink-0"
    >
      <div className="mt-[14px] flex flex-col gap-[8px]">
        {ADMIN_ACCESS_ROWS.map((row) => (
          <div
            key={row.id}
            className="flex h-[48px] items-center gap-[10px] rounded-[9px] bg-[#f7faf8] px-[12px]"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
              <p className="truncate text-[11px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                {row.name}
              </p>
              <p className="truncate text-[10px] leading-none text-[#65746d] lg:text-[8px]">
                {c.access.roleLine[row.role]}
              </p>
            </div>
            <span className="flex h-[24px] shrink-0 items-center rounded-full bg-[#e8f5f0] px-[10px] text-[10px] font-semibold whitespace-nowrap text-[#083d2d]">
              {c.access.pill[row.role]}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[20px] rounded-[10px] bg-[#f7faf8] px-[12px] pt-[14px] pb-[20px] lg:h-[180px]">
        <p className="text-[10px] leading-none font-semibold text-[#65746d]">
          {c.access.notifications}
        </p>
        <ul className="mt-[20px] flex flex-col gap-[19px]">
          {NOTIFICATION_ORDER.map((key) => (
            <li key={key} className="flex items-center gap-[9px]">
              <span
                className="size-[7px] shrink-0 rounded-full bg-[#083d2d]"
                aria-hidden="true"
              />
              <span className="text-[10px] leading-none text-[#17362e] lg:text-[9px]">
                {notificationLabels[key]}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[26px] flex flex-wrap items-center gap-[6px]">
        <SettingsButton tone="dark">{c.access.addManagerAccess}</SettingsButton>
        <SettingsButton tone="outline" onClick={onResetRules}>
          {c.access.resetRules}
        </SettingsButton>
      </div>

      <div className="mt-[20px]">
        <AppLanguageCard onChange={onChangeLanguage} />
      </div>
    </SettingsCard>
  );
}
