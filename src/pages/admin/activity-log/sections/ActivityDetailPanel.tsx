import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import type { ActivityLogRow } from "../activity-log.mock";
import {
  actionLabel,
  actorDetailLabel,
  categoryLabel,
  changeAfterLabel,
  changeBeforeLabel,
  openObjectLabel,
  sourceLabel,
  targetLabel,
  timestampLabel,
} from "../activityText";

/* AD-08B "Activity detail" card (1226:1148): 552x640 white panel, radius 12,
   1px #d6e3de, 23px inner padding — 17px bold title, the mint category pill
   (1226:1150), the 15px bold action line, five 9px label/value rows on a
   42px pitch with values at x143, the #f7faf8 "Change" block (1226:1163) and
   the "Close" / "Open report" buttons (1226:1171, 1226:1173).

   Read-only by design (AD-08C step 4, "No mutation — audit detail is
   read-only"): the primary button navigates to the related object, it never
   edits the event. */
export function ActivityDetailPanel({
  row,
  onClose,
}: {
  row: ActivityLogRow;
  onClose: () => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);
  const { language } = useLanguage();

  const rows: { label: string; value: string }[] = [
    { label: c.detail.labels.actor, value: actorDetailLabel(row, c) },
    { label: c.detail.labels.time, value: timestampLabel(row, language) },
    { label: c.detail.labels.target, value: targetLabel(row, c) },
    { label: c.detail.labels.source, value: sourceLabel(row, c) },
    { label: c.detail.labels.requestId, value: row.id },
  ];

  const changeRows: { label: string; value: string }[] = [
    { label: c.detail.change.before, value: changeBeforeLabel(row, c) },
    { label: c.detail.change.after, value: changeAfterLabel(row, c) },
  ];
  if (row.change.reason) {
    changeRows.push({
      label: c.detail.change.reason,
      value: c.detail.reasons[row.change.reason],
    });
  }

  return (
    <div className="flex w-full flex-col rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:w-[552px] lg:p-[23px]">
      <p className="text-[17px] leading-none font-bold text-[#17362e]">
        {c.detail.title}
      </p>

      <div className="mt-[13px] flex h-[24px] w-fit items-center rounded-full bg-[#e8f5f0] px-[10px]">
        <span className="text-[10px] leading-none font-semibold text-[#083d2d]">
          {categoryLabel(row.category, c)}
        </span>
      </div>

      <p className="mt-[16px] text-[15px] leading-[20px] font-bold text-[#17362e]">
        {actionLabel(row, c)}
      </p>

      <dl className="mt-[24px] flex flex-col gap-[31px]">
        {rows.map((entry) => (
          <div key={entry.label} className="flex items-start gap-[12px]">
            <dt className="w-[96px] shrink-0 text-[9px] leading-[12px] font-semibold text-[#65746d] lg:w-[120px]">
              {entry.label}
            </dt>
            <dd className="min-w-0 text-[9px] leading-[12px] text-[#17362e]">
              {entry.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-[40px] rounded-[10px] bg-[#f7faf8] p-[12px]">
        <p className="text-[10px] leading-none font-bold text-[#17362e]">
          {c.detail.change.title}
        </p>
        <dl className="mt-[20px] flex flex-col gap-[21px]">
          {changeRows.map((entry) => (
            <div key={entry.label} className="flex items-start gap-[12px]">
              <dt className="w-[70px] shrink-0 text-[9px] leading-[12px] font-semibold text-[#65746d] lg:w-[82px]">
                {entry.label}
              </dt>
              <dd className="min-w-0 text-[9px] leading-[12px] text-[#17362e]">
                {entry.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-[40px] flex items-center gap-[12px]">
        <button
          type="button"
          onClick={onClose}
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5]"
        >
          {c.detail.close}
        </button>
        <button
          type="button"
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941]"
        >
          {openObjectLabel(row, c)}
        </button>
      </div>
    </div>
  );
}
