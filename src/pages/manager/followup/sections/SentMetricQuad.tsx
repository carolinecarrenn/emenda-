import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { formatSignalTime } from "./followupTime";

/* MD-10 metric quad (1226:1472 / 1475 / 1478 / 1481): four white 86px cards,
   radius 10 on a #dbe3de hairline, 250 / 250 / 250 / 262 wide with a 16px
   gutter — a 10px semibold #65746d caps label over a 21px semibold #083d2d
   value. Carries the record the 390px EM-10 card lists as Template / Sent /
   Manager / Status. Desktop only. */
export function SentMetricQuad({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const { language } = useLanguage();

  const cards = [
    { label: c.sent.metrics.template, value: signal.sentTemplateName },
    {
      label: c.sent.metrics.sent,
      value: formatSignalTime(signal.sentAt, c, language),
    },
    { label: c.sent.metrics.manager, value: EMPLOYER.manager },
    { label: c.sent.metrics.status, value: c.sent.statusValue },
  ];

  return (
    <div className="grid grid-cols-[250px_250px_250px_minmax(0,1fr)] gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="h-[86px] rounded-[10px] border border-[#dbe3de] bg-white px-[14px] py-[12px]"
        >
          <p className="text-[10px] font-semibold text-[#65746d] uppercase">
            {card.label}
          </p>
          <p className="mt-[6px] text-[21px] leading-[26px] font-semibold text-[#083d2d]">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}
