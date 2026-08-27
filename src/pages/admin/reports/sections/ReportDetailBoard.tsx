import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";
import { FOCUS_REPORT, RESOLUTION_HISTORY } from "../reports.mock";
import { StateBoard } from "./StateBoard";

/* AD-04B · Report Detail & Actions (1226:96) — ?state=detail.
   A 672x690 white card, radius 12, 1px #d6e3de: the 17px bold
   "{id} · {issue}" heading, the High (#fdf0ef / #b04139) and Need follow-up
   (#fdf7ec / #b57023) pills, the 9px reporter line, five label/value rows on
   a 48px pitch (9px semibold #65746d label at x19, 9px #17362e value at
   x131), the #f7faf8 "Resolution history" block (radius 10) and the
   Assign owner / Request evidence / Mark resolved button row.

   In the frame the eyebrow and title overlap at y22–24; they are stacked
   here so both stay readable. */

export function ReportDetailBoard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  const rows = [
    { key: "summary", label: c.detail.summary, value: FOCUS_REPORT.summary },
    {
      key: "owner",
      label: c.detail.owner,
      value: FOCUS_REPORT.owner ?? c.detail.unassigned,
    },
    {
      key: "created",
      label: c.detail.created,
      value: c.detail.createdValue
        .replace("{date}", FOCUS_REPORT.createdDate)
        .replace("{time}", FOCUS_REPORT.createdTime),
    },
    {
      key: "sla",
      label: c.detail.sla,
      value: c.detail.slaValue.replace(
        "{hours}",
        String(FOCUS_REPORT.slaHoursRemaining),
      ),
    },
    {
      key: "evidence",
      label: c.detail.evidence,
      value: c.detail.evidenceValue
        .replace("{attachments}", String(FOCUS_REPORT.evidenceAttachments))
        .replace("{conversations}", String(FOCUS_REPORT.evidenceConversations)),
    },
  ];

  return (
    <StateBoard
      eyebrow={c.detail.eyebrow}
      title={c.detail.title}
      description={c.detail.description}
      trailing={
        <Link
          to="/admin/reports?state=flow"
          className="flex h-[32px] w-fit shrink-0 items-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d]"
        >
          {c.boards.lifecycle}
        </Link>
      }
    >
      <div className="rounded-[12px] border border-[#d6e3de] bg-white px-[19px] pt-[19px] pb-[19px] lg:w-[672px]">
        <p className="text-[17px] leading-[21px] font-bold text-[#17362e]">
          {c.detail.heading
            .replace("{id}", FOCUS_REPORT.id)
            .replace("{issue}", FOCUS_REPORT.issue)}
        </p>

        <div className="mt-[11px] flex flex-wrap items-center gap-[15px]">
          <span className="flex h-[24px] items-center rounded-full bg-[#fdf0ef] px-[10px] text-[10px] font-semibold text-[#b04139]">
            {c.priority[FOCUS_REPORT.priority]}
          </span>
          <span className="flex h-[24px] items-center rounded-full bg-[#fdf7ec] px-[10px] text-[10px] font-semibold text-[#b57023]">
            {c.detail.needFollowUp}
          </span>
        </div>

        <p className="mt-[16px] text-[9px] leading-[12px] text-[#65746d]">
          {c.detail.reporterLine
            .replace("{name}", FOCUS_REPORT.reporter)
            .replace("{team}", FOCUS_REPORT.team)}
        </p>

        <div className="mt-[16px] flex flex-col gap-[12px] lg:gap-0">
          {rows.map((row) => (
            <div key={row.key} className="flex flex-col lg:h-[48px] lg:flex-row">
              <p className="w-[112px] shrink-0 text-[9px] leading-[12px] font-semibold text-[#65746d]">
                {row.label}
              </p>
              <p className="min-w-0 text-[9px] leading-[12px] text-[#17362e]">
                {row.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[16px] rounded-[10px] bg-[#f7faf8] px-[14px] pt-[12px] pb-[14px] lg:h-[150px]">
          <p className="text-[10px] leading-[12px] font-bold text-[#17362e]">
            {c.detail.history.title}
          </p>
          <div className="mt-[16px] flex flex-col gap-[18px]">
            {RESOLUTION_HISTORY.map((entry) => (
              <div key={entry.time} className="flex items-start">
                <p className="w-[66px] shrink-0 text-[9px] leading-[12px] font-semibold text-[#65746d]">
                  {entry.time}
                </p>
                <p className="min-w-0 text-[9px] leading-[12px] text-[#17362e]">
                  {c.detail.history[entry.event]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[24px] flex flex-wrap items-center gap-[19px]">
          <Link
            to="/admin/reports?state=assign-owner"
            className="flex h-[32px] items-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white"
          >
            {c.detail.assignOwner}
          </Link>
          <Link
            to="/admin/reports?state=request-evidence"
            className="flex h-[32px] items-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d]"
          >
            {c.detail.requestEvidence}
          </Link>
          <Link
            to="/admin/reports?state=outcome"
            className="flex h-[32px] items-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d]"
          >
            {c.detail.markResolved}
          </Link>
        </div>
      </div>
    </StateBoard>
  );
}
