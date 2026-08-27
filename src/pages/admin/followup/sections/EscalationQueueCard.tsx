import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY, type AdminFollowUpCopy } from "../followup.copy";
import {
  ESCALATION_QUEUE,
  type QueueCase,
  type QueuePriority,
} from "../followup.mock";
import { AdminPlaybookPanel } from "./AdminPlaybookPanel";

/* AD-05 "Escalation queue" (1223:2343): 320x512 white card, radius 12,
   1px #d6e3de — 13px bold title over its 8px caption, three 48px #f7faf8
   rows (radius 9) each carrying the report id, its escalation reason and a
   High (#fdf0ef / #b04139) or Medium (#fdf7ec / #b57023) pill, then the
   Admin playbook panel. */

const PRIORITY_PILL: Record<QueuePriority, string> = {
  high: "bg-[#fdf0ef] text-[#b04139]",
  medium: "bg-[#fdf7ec] text-[#b57023]",
};

function reasonLine(item: QueueCase, reasons: AdminFollowUpCopy["queue"]["reasons"]) {
  switch (item.reason) {
    case "escalatedFromTeam":
      return reasons.escalatedFromTeam.replace("{team}", item.team ?? "");
    case "noProgressDays":
      return reasons.noProgressDays.replace("{days}", String(item.days ?? 0));
    case "awaitingApproval":
      return reasons.awaitingApproval;
  }
}

export function EscalationQueueCard() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  return (
    <section className="flex flex-col gap-[16px] rounded-[12px] border border-[#d6e3de] bg-white p-[15px] lg:h-[512px] lg:w-[320px] lg:shrink-0">
      <div className="flex flex-col gap-[3px]">
        <h3 className="text-[13px] leading-none font-bold text-[#17362e]">
          {c.queue.title}
        </h3>
        <p className="text-[10px] leading-[14px] text-[#65746d] lg:text-[8px] lg:leading-none">
          {c.queue.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-[8px]">
        {ESCALATION_QUEUE.map((item) => (
          <article
            key={item.id}
            className="flex h-[48px] items-center gap-[8px] rounded-[9px] bg-[#f7faf8] px-[12px]"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
              <p className="truncate text-[10px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                {item.id}
              </p>
              <p className="truncate text-[9px] leading-none text-[#65746d] lg:text-[8px]">
                {reasonLine(item, c.queue.reasons)}
              </p>
            </div>
            <div
              className={`flex h-[24px] shrink-0 items-center rounded-full px-[10px] ${PRIORITY_PILL[item.priority]}`}
            >
              <span className="text-[10px] leading-none font-semibold whitespace-nowrap">
                {c.queue.priority[item.priority]}
              </span>
            </div>
          </article>
        ))}
      </div>

      <AdminPlaybookPanel />
    </section>
  );
}
