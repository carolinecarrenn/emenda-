import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { ManagerAlert } from "../followupMock";
import { alertExpected, alertStatus, alertTitle, fill } from "./followupLabels";
import {
  RailButtonRow,
  RailPrimaryLink,
  RailSecondaryLink,
} from "./FollowUpButtons";

/* MD-12 "SELECTED ALERT" rail (1226:1614): 330px white card, radius 12,
   #dbe3de hairline, 24px padding — 11px #0c5941 caps heading, 16px #083d2d
   worker, 12px #083d2d alert title, three 11px #65746d fact lines set tight
   on a 13px leading, the mint #e3f0e8 "Attention, not punishment" note, and
   the "Open Reports" / "Create follow-up" pair that fills the 282px inner
   width. Desktop only. */
export function SelectedAlertRail({ alert }: { alert: ManagerAlert }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <aside className="hidden rounded-[12px] border border-[#dbe3de] bg-white p-[24px] lg:block lg:w-[330px] lg:shrink-0 lg:pb-[23px]">
      <h2 className="text-[11px] font-semibold text-[#0c5941] uppercase">
        {c.alerts.selectedTitle}
      </h2>
      <p className="mt-[18px] text-[16px] font-semibold text-[#083d2d]">
        {alert.workerName}
      </p>
      <p className="mt-[2px] text-[12px] font-semibold text-[#083d2d]">
        {alertTitle(c, alert)}
      </p>
      <div className="mt-[18px] text-[11px] leading-[13px] text-[#65746d]">
        <p>
          {fill(c.alerts.factExpected, { value: alertExpected(c, alert) })}
        </p>
        <p>{fill(c.alerts.factStatus, { value: alertStatus(c, alert) })}</p>
        <p>
          {fill(c.alerts.factRecommended, {
            value: c.alerts.recommendedValue,
          })}
        </p>
      </div>

      <div className="mt-[45px] rounded-[10px] bg-[#e3f0e8] px-[16px] py-[16px]">
        <p className="text-[12px] font-semibold text-[#083d2d]">
          {c.alerts.noteTitle}
        </p>
        <p className="mt-[7px] max-w-[240px] text-[10px] leading-[16px] text-[#65746d]">
          {c.alerts.noteBody}
        </p>
      </div>

      <div className="mt-[26px]">
        <RailButtonRow>
          <RailPrimaryLink to="/manager/reports">
            {c.alerts.openReports}
          </RailPrimaryLink>
          <RailSecondaryLink to="/manager/follow-up">
            {c.alerts.createFollowUp}
          </RailSecondaryLink>
        </RailButtonRow>
      </div>
    </aside>
  );
}
