import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { ManagerAlert } from "../followupMock";
import { alertMetaDesktop, severityLabel } from "./followupLabels";

/* MD-12 "ALERT QUEUE" card (1226:1588): white, radius 12, #dbe3de hairline,
   24px padding, 11px #0c5941 caps heading. Rows (1226:1590 …) on #f1f6f3,
   radius 9, 64px — 12px #083d2d worker over an 11px #65746d alert line, a
   severity tag (HIGH #c74a3d, MEDIUM / LOW #0c5941) and a 110x42 white
   "Review" button, inset 26px from the row edge, that deep-links into the
   owning section. Figma draws no selected-row treatment, so selection only
   drives the rail. Desktop only. */
export function AlertQueueCard({
  alerts,
  selectedId,
  onSelect,
}: {
  alerts: ManagerAlert[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <section className="hidden rounded-[12px] border border-[#dbe3de] bg-white p-[24px] lg:block lg:h-full">
      <h2 className="text-[11px] font-semibold text-[#0c5941] uppercase">
        {c.alerts.queueTitle}
      </h2>
      <div className="mt-[17px] space-y-[12px]">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            role="button"
            tabIndex={0}
            aria-pressed={selectedId === alert.id}
            onClick={() => onSelect(alert.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(alert.id);
              }
            }}
            className="flex h-[64px] cursor-pointer items-center gap-[10px] rounded-[9px] bg-[#f1f6f3] pr-[26px] pl-[16px] hover:ring-1 hover:ring-[#dbe3de]"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-[#083d2d]">
                {alert.workerName}
              </p>
              <p className="mt-[2px] text-[11px] text-[#65746d]">
                {alertMetaDesktop(c, alert)}
              </p>
            </div>
            <p
              className={`w-[90px] shrink-0 text-[10px] font-semibold ${
                alert.severity === "HIGH" ? "text-[#c74a3d]" : "text-[#0c5941]"
              }`}
            >
              {severityLabel(c, alert.severity)}
            </p>
            <Link
              to={alert.actionTo}
              onClick={(event) => event.stopPropagation()}
              className="flex h-[42px] w-[110px] shrink-0 items-center justify-center rounded-[9px] border border-[#dbe3de] bg-white text-[12px] font-semibold text-[#083d2d] hover:border-brand"
            >
              {c.alerts.reviewButton}
            </Link>
          </div>
        ))}
        {alerts.length === 0 && (
          <div className="rounded-[9px] bg-[#f1f6f3] px-[16px] py-[22px] text-center text-[11px] text-[#65746d]">
            {c.alerts.emptyTitle}
          </div>
        )}
      </div>
    </section>
  );
}
