import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/* EM-R2-06 Professional Records — Empty (node 761:3748, Manager 11 · Access /
   Empty Boundaries). "NO RECORDS AVAILABLE" caps label (#0c513b) → mint worker
   card (#f0f9f5 / #c7dbd1) → white reason card with bullets → mint EMPLOYER MAY
   RECEIVE → yellow EMPLOYER NEVER RECEIVES (#fff6c7) → mint footer card →
   outline + solid #0c513b CTAs. Every card in the mock is 14px above its
   first line and ~22px under its last, and all body copy and bullets run on
   the tight 12px leading (mint worker card 77px, reason card 109px).
   Desktop keeps the normal 1.5 leading.
   Desktop (no MD twin — section 1192:952 holds only MD-13): the cards fill
   the same max-w-[1060px] manager content column as the four EM-R2 record
   screens and the 350px CTA stack caps at lg:max-w-[350px], so flipping
   this state on a /records route does not move the column. */
export function RecordsEmptyState({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <div className="max-w-[1060px]">
      <h1 className="text-[19px] font-semibold text-[#083d2d] lg:mt-[8px] lg:text-[30px]">
        {c.empty.title}
      </h1>
      <p className="mt-[12px] text-[10px] text-[#65746d] lg:mt-[-2px] lg:text-[13px]">
        {c.empty.subtitle}
      </p>

      <p className="mt-[24px] pl-[4px] text-[10px] font-semibold text-[#0c513b] uppercase lg:text-[12px]">
        {c.empty.label}
      </p>

      <div className="mt-[14px] space-y-[14px]">
        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#f0f9f5] px-[12px] pt-[14px] pb-[22px] lg:py-[14px]">
          <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[14px]">
            {worker.name} · {worker.emendaId}
          </p>
          <p className="mt-[8px] text-[9px] leading-[12px] text-[#65746d] lg:text-[11px] lg:leading-normal">
            {c.empty.workerLine.replace("{employer}", worker.employer)}
          </p>
        </div>

        <div className="rounded-[10px] border border-[#c7dbd1] bg-white px-[12px] pt-[14px] pb-[22px] lg:py-[14px]">
          <p className="text-[12px] font-semibold text-[#083d2d] lg:text-[15px]">
            {c.empty.reasonTitle}
          </p>
          <p className="mt-[8px] text-[9px] leading-[12px] text-[#65746d] lg:text-[11px] lg:leading-normal">
            {c.empty.reasonIntro}
          </p>
          <ul className="mt-[2px] text-[9px] leading-[12px] text-[#65746d] lg:space-y-[2px] lg:text-[11px] lg:leading-normal">
            {c.empty.reasons.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#f0f9f5] px-[12px] pt-[14px] pb-[22px] lg:py-[14px]">
          <p className="text-[10px] font-semibold text-[#0c513b] uppercase lg:text-[12px]">
            {c.empty.mayReceiveTitle}
          </p>
          <p className="mt-[8px] text-[9px] leading-[12px] text-[#083d2d] lg:text-[11px] lg:leading-normal">
            {c.empty.mayReceiveBody}
          </p>
        </div>

        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#fff6c7] px-[12px] pt-[14px] pb-[22px] lg:py-[14px]">
          <p className="text-[10px] font-semibold text-[#083d2d] uppercase lg:text-[12px]">
            {c.empty.neverTitle}
          </p>
          <p className="mt-[8px] text-[9px] leading-[12px] text-[#65746d] lg:text-[11px] lg:leading-normal">
            {c.empty.neverBody}
          </p>
        </div>

        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#f0f9f5] px-[12px] pt-[14px] pb-[22px] lg:py-[14px]">
          <p className="text-[9px] leading-[12px] text-[#65746d] lg:text-[11px] lg:leading-normal">
            {c.empty.footer}
          </p>
        </div>

        <div className="space-y-[8px] pt-[6px] lg:max-w-[350px]">
          <Link
            to="/manager/workers"
            className="flex h-[44px] items-center justify-center rounded-[8px] border border-[#c7dbd1] bg-white px-4 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
          >
            {c.empty.backToWorkerDetail}
          </Link>
          <Link
            to={`/manager/workers/${worker.id}/records?state=restricted`}
            className="flex h-[44px] items-center justify-center rounded-[8px] border border-[#0c513b] bg-[#0c513b] px-4 text-center text-[11px] font-semibold text-white hover:bg-brand-deep"
          >
            {c.empty.reviewAccessScope}
          </Link>
        </div>
      </div>
    </div>
  );
}
