import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/* EM-R2-04 Professional Records Access — Restricted (node 761:3711,
   Manager 11 · Access / Empty Boundaries). Red caps label → mint worker card
   (#f0f9f5 / #c7dbd1) → pink reason card (#ffe5de) → bullet lists → yellow
   never-receives card (#fff6c7) → outline + solid #0c513b CTAs. Every card
   in the mock is 14px above its first line and ~28px under its last, and all
   body copy and bullets run on the tight 12px leading (mint card 82px, pink
   94px, requires 104px, yellow 82px). Desktop keeps the normal 1.5 leading.
   Desktop (no MD twin — section 1192:952 holds only MD-13): the cards fill
   the same max-w-[1060px] manager content column as the four EM-R2 record
   screens and the 350px CTA stack caps at lg:max-w-[350px], so flipping
   this state on a /records route does not move the column. */
export function RecordsRestrictedState({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <div className="max-w-[1060px]">
      <h1 className="text-[19px] font-semibold text-[#083d2d] lg:mt-[8px] lg:text-[30px]">
        {c.restricted.title}
      </h1>
      <p className="mt-[12px] text-[10px] text-[#65746d] lg:mt-[-2px] lg:text-[13px]">
        {c.restricted.subtitle}
      </p>

      <p className="mt-[24px] pl-[4px] text-[10px] font-semibold text-[#b83826] uppercase lg:text-[12px]">
        {c.restricted.label}
      </p>

      <div className="mt-[14px] space-y-[14px]">
        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#f0f9f5] px-[12px] pt-[14px] pb-[28px] lg:py-[14px]">
          <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[14px]">
            {worker.name} · {worker.emendaId}
          </p>
          <p className="mt-[8px] text-[9px] leading-[12px] text-[#65746d] lg:text-[11px] lg:leading-normal">
            {c.restricted.workerLine.replace("{employer}", worker.employer)}
          </p>
        </div>

        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#ffe5de] px-[12px] pt-[14px] pb-[28px] lg:py-[14px]">
          <p className="text-[12px] font-semibold text-[#083d2d] lg:text-[15px]">
            {c.restricted.reasonTitle}
          </p>
          <p className="mt-[8px] text-[10px] leading-[12px] text-[#65746d] lg:text-[12px] lg:leading-normal">
            {c.restricted.reasonBody}
          </p>
        </div>

        <section className="pt-[6px]">
          <h2 className="text-[10px] font-semibold text-[#0c513b] uppercase lg:text-[12px]">
            {c.restricted.mayBeRestrictedTitle}
          </h2>
          <ul className="mt-[10px] pl-[12px] text-[10px] leading-[12px] text-[#083d2d] lg:space-y-[2px] lg:text-[12px] lg:leading-normal">
            {c.restricted.mayBeRestricted.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </section>

        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#f0f9f5] px-[12px] pt-[14px] pb-[28px] lg:py-[14px]">
          <p className="text-[10px] font-semibold text-[#0c513b] uppercase lg:text-[12px]">
            {c.restricted.requiresTitle}
          </p>
          <ul className="mt-[10px] text-[10px] leading-[12px] text-[#083d2d] lg:space-y-[2px] lg:text-[12px] lg:leading-normal">
            {c.restricted.requires.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[10px] border border-[#c7dbd1] bg-[#fff6c7] px-[12px] pt-[14px] pb-[28px] lg:py-[14px]">
          <p className="text-[10px] font-semibold text-[#083d2d] uppercase lg:text-[12px]">
            {c.restricted.neverTitle}
          </p>
          <p className="mt-[8px] text-[9px] leading-[12px] text-[#65746d] lg:text-[11px] lg:leading-normal">
            {c.restricted.neverBody}
          </p>
        </div>

        <div className="space-y-[8px] pt-[6px] lg:max-w-[350px]">
          <Link
            to="/manager/workers"
            className="flex h-[44px] items-center justify-center rounded-[8px] border border-[#c7dbd1] bg-white px-4 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
          >
            {c.restricted.backToWorker}
          </Link>
          <Link
            to={`/manager/workers/${worker.id}/records`}
            className="flex h-[44px] items-center justify-center rounded-[8px] border border-[#0c513b] bg-[#0c513b] px-4 text-center text-[11px] font-semibold text-white hover:bg-brand-deep"
          >
            {c.restricted.backToRecords}
          </Link>
        </div>
      </div>
    </div>
  );
}
