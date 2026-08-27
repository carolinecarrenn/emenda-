import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { ManagerAlert } from "../followupMock";
import {
  alertActionLabel,
  alertMetaMobile,
  alertTitle,
  severityLabel,
} from "./followupLabels";

/* EM-12 "OPEN ALERTS" cards (1030:264 · 269 · 274 · 279): full-width 66px
   cards, radius 12, #d6e3de hairline — the HIGH card on peach #ffe8de, the
   rest white. 11px #094033 "alert · worker" title, 9px #6e8a82 detail line,
   a 9px #06634f deep-link action, and an 8px severity tag right-aligned
   (HIGH #b54a32, MEDIUM / LOW #6e8a82). Mobile only. */
export function AlertCards({ alerts }: { alerts: ManagerAlert[] }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <section className="lg:hidden">
      <h2 className="text-[10px] font-semibold text-[#094033] uppercase">
        {c.alerts.openAlertsTitle}
      </h2>
      <div className="mt-[10px] space-y-[10px]">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`min-h-[66px] rounded-[12px] border border-[#d6e3de] px-[14px] py-[7px] ${
              alert.severity === "HIGH" ? "bg-[#ffe8de]" : "bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-[11px] font-semibold text-[#094033]">
                {alertTitle(c, alert)} · {alert.mobileWorker}
              </p>
              <span
                className={`shrink-0 text-[8px] font-semibold ${
                  alert.severity === "HIGH"
                    ? "text-[#b54a32]"
                    : "text-[#6e8a82]"
                }`}
              >
                {severityLabel(c, alert.severity)}
              </span>
            </div>
            <p className="mt-[3px] text-[9px] text-[#6e8a82]">
              {alertMetaMobile(c, alert)}
            </p>
            <Link
              to={alert.actionTo}
              className="mt-[3px] block w-fit text-[9px] leading-[13px] font-semibold text-[#06634f] hover:text-brand-deep"
            >
              {alertActionLabel(c, alert)}
            </Link>
          </div>
        ))}
        {alerts.length === 0 && (
          <div className="rounded-[12px] border border-[#d6e3de] bg-white px-[14px] py-[22px] text-center text-[10px] text-[#6e8a82]">
            {c.alerts.emptyTitle}
          </div>
        )}
      </div>
    </section>
  );
}
