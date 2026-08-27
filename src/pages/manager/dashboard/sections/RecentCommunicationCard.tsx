import { Link } from "react-router-dom";
import { WORKER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* MD-03 "RECENT COMMUNICATION": the quoted message is user content and
   stays raw; labels localize. */
export function RecentCommunicationCard() {
  const c = useSectionCopy(MANAGER_COPY);

  return (
    <div className="rounded-[12px] border border-[#dbe3de] bg-white px-6 py-[26px] lg:h-[190px]">
      <h2 className="text-[14px] font-semibold text-brand-deep">
        {c.dashboard.recentCommunication}
      </h2>
      <div className="mt-[18px] text-[13px] leading-[16px] text-[#66736b]">
        <p>{WORKER.name} · ID → JA</p>
        <p>"Shift handover completed."</p>
        <p>{c.dashboard.readAt}</p>
      </div>
      <Link
        to="/manager/communication"
        className="mt-[20px] flex h-[42px] w-[160px] items-center justify-center rounded-[10px] bg-brand text-[12px] font-semibold text-white hover:bg-brand-deep"
      >
        {c.dashboard.openMessages}
      </Link>
    </div>
  );
}
