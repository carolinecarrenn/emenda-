import { Link } from "react-router-dom";
import { WORKER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

/* WD-18 "My EMENDA ID": white card, border #d9e1dc, radius 14, p-12.
   The status line is the only element that changes across states —
   green when identity is verified, quiet gray otherwise (no red).
   "View ID" opens W-17 My EMENDA ID on the badge variant that matches
   this state's status line. */
export function EmendaIdCard({
  status,
  tone,
  to,
}: {
  status: string;
  tone: "verified" | "muted";
  to: string;
}) {
  const c = useSectionCopy(HOME_COPY);

  return (
    <div className="flex flex-col gap-[5px] rounded-[14px] border border-line bg-white p-3 lg:min-h-[108px]">
      <p className="text-[10px] leading-[14px] font-semibold text-ink-muted">
        {c.idCard.label}
      </p>
      <div className="flex h-[28px] items-center justify-between">
        <p className="text-[17px] leading-[22px] font-bold text-ink">
          {WORKER.emendaId}
        </p>
        <Link
          to={to}
          className="text-[11px] leading-[16px] font-semibold text-brand-deep hover:text-brand"
        >
          {c.idCard.viewId}
        </Link>
      </div>
      <p
        className={`text-[11px] leading-[16px] font-semibold ${
          tone === "verified" ? "text-brand" : "text-ink-muted"
        }`}
      >
        {status}
      </p>
    </div>
  );
}
