import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";

/* Section 04 system states (?state=loading / empty / offline). Section 09
   (759:1304) defines the manager resilience pattern the inbox inherits:
   skeletons while the permitted conversations load, a neutral empty surface,
   and a read-only offline surface that states nothing is marked as sent
   while delivery status is unknown.

   Section 04 has no dedicated desktop frame for any of the three, so the
   1440 presentation is taken from the manager desktop vocabulary:
   MD-06 (1225:23–83) for the skeleton geometry, MD-R2-06 Professional
   Records Empty (1252:14223) for the empty surface, and MD-STATE-01 Offline
   Read-only (1252:2932) for the offline banner. Mobile keeps the EM scale. */

export function CommunicationLoadingState() {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div aria-busy="true">
      {/* EM-06 · mobile */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-[10px]">
          {[0, 1, 2, 3].map((tile) => (
            <div
              key={tile}
              className="h-[58px] animate-pulse rounded-[12px] border border-[#d6e3de] bg-[#eef3ef]"
            />
          ))}
        </div>
        <div className="mt-[24px] space-y-[12px]">
          {[0, 1, 2, 3].map((row) => (
            <div
              key={row}
              className="h-[88px] animate-pulse rounded-[14px] border border-[#d6e3de] bg-[#eef3ef]"
            />
          ))}
        </div>
        <p className="mt-[16px] text-[9px] text-[#6e8a82]">
          {c.states.loadingLabel}
        </p>
      </div>

      {/* MD-06 geometry: the 240/240/240/292 metric quad, the 620px search +
          chip + Send row, then the 610px conversation column beside the
          420x340 preview pane, closed by the 1060x64 boundary band. */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-[240px_240px_240px_minmax(0,1fr)] gap-4">
          {[0, 1, 2, 3].map((tile) => (
            <div
              key={tile}
              className="h-[86px] animate-pulse rounded-[10px] border border-[#dbe3de] bg-[#eef3ef]"
            />
          ))}
        </div>

        <div className="mt-[20px] flex items-center gap-[10px]">
          <div className="h-[44px] w-[620px] max-w-full animate-pulse rounded-[10px] border border-[#dbe3de] bg-white" />
          <div className="flex flex-1 items-center justify-end gap-[10px]">
            <div className="h-[32px] w-[60px] animate-pulse rounded-[16px] border border-[#dbe3de] bg-white" />
            <div className="h-[32px] w-[72px] animate-pulse rounded-[16px] border border-[#dbe3de] bg-white" />
            <div className="h-[32px] w-[92px] animate-pulse rounded-[16px] border border-[#dbe3de] bg-white" />
            <div className="h-[32px] w-[84px] animate-pulse rounded-[16px] border border-[#dbe3de] bg-white" />
          </div>
          <div className="h-[42px] w-[72px] shrink-0 animate-pulse rounded-[9px] bg-[#dbe3de]" />
        </div>

        <div className="mt-[28px] h-[14px] w-[130px] animate-pulse rounded-[4px] bg-[#e3ebe6]" />

        <div className="mt-[10px] flex items-start gap-[30px]">
          <div className="min-w-0 flex-1 space-y-[12px]">
            {[0, 1, 2, 3].map((row) => (
              <div
                key={row}
                className="h-[76px] animate-pulse rounded-[10px] border border-[#dbe3de] bg-[#eef3ef]"
              />
            ))}
          </div>
          <div className="h-[340px] w-[420px] shrink-0 animate-pulse rounded-[12px] border border-[#dbe3de] bg-white" />
        </div>

        <div className="mt-[56px] h-[64px] animate-pulse rounded-[10px] bg-[#e3f0e8]" />

        <p className="mt-[16px] text-[11px] text-[#65746d]">
          {c.states.loadingLabel}
        </p>
      </div>
    </div>
  );
}

export function CommunicationEmptyState() {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div>
      {/* MD-R2-06 (1252:14223): the desktop empty card is left-aligned with a
          19px #083d2d headline over a 13px #65746d line, and puts its CTA
          below the card rather than centred inside it. */}
      <div className="rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[26px] text-center lg:rounded-[12px] lg:border-[#dbe3de] lg:px-[24px] lg:py-[28px] lg:text-left">
        <p className="text-[12px] font-semibold text-[#094033] lg:text-[19px] lg:leading-[26px] lg:text-[#083d2d]">
          {c.states.emptyTitle}
        </p>
        <p className="mx-auto mt-[8px] max-w-[420px] text-[10px] leading-[16px] text-[#6e8a82] lg:mx-0 lg:mt-[12px] lg:max-w-[620px] lg:text-[13px] lg:leading-[20px] lg:text-[#65746d]">
          {c.states.emptyBody}
        </p>
        <Link
          to="/manager/communication/compose"
          className="mx-auto mt-[16px] flex h-[42px] w-[180px] items-center justify-center rounded-[12px] bg-[#06634f] text-[12px] font-semibold text-white hover:bg-brand-deep lg:hidden"
        >
          {c.states.emptyCta}
        </Link>
      </div>
      <Link
        to="/manager/communication/compose"
        className="hidden h-[42px] w-[180px] items-center justify-start rounded-[9px] bg-brand px-4 text-[12px] font-semibold text-white hover:bg-brand-deep lg:mt-[20px] lg:flex"
      >
        {c.states.emptyCta}
      </Link>
    </div>
  );
}

export function CommunicationOfflineState() {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const common = useCommonCopy();

  return (
    <div className="space-y-[14px] lg:space-y-[18px]">
      {/* MD-STATE-01 (1252:2933–2935): a 940x96 #fcf0d1 radius-12 banner with
          a 17px semibold heading over a 12px #65746d line, and a 42px
          radius-9 action below it. */}
      <div className="rounded-[14px] border border-[#d6e3de] bg-[#f3f7f5] px-[14px] py-[12px] lg:rounded-[12px] lg:border-transparent lg:bg-[#fcf0d1] lg:px-[24px] lg:py-[22px]">
        <p className="text-[11px] font-semibold text-[#094033] lg:text-[17px] lg:leading-[24px] lg:text-[#083d2d]">
          {c.states.offlineTitle}
        </p>
        <p className="mt-[6px] text-[10px] leading-[15px] text-[#6e8a82] lg:mt-[8px] lg:text-[12px] lg:leading-[18px] lg:text-[#65746d]">
          {c.states.offlineBody}
        </p>
        <button
          type="button"
          className="mt-[12px] flex h-[30px] w-[143px] items-center justify-center rounded-[14px] border border-[#d6e3de] bg-white text-[10px] font-semibold text-[#06634f] hover:border-brand lg:mt-[18px] lg:h-[42px] lg:w-[150px] lg:justify-start lg:rounded-[9px] lg:border-[#dbe3de] lg:px-4 lg:text-[12px] lg:text-[#083d2d]"
        >
          {common.action.retry}
        </button>
      </div>
      <div className="rounded-[14px] bg-[#e8f5f0] px-[14px] py-[12px] lg:flex lg:min-h-[64px] lg:items-center lg:rounded-[10px] lg:bg-[#e3f0e8] lg:px-[20px] lg:py-[14px]">
        <p className="text-[10px] text-[#6e8a82] lg:text-[11px] lg:leading-[18px] lg:font-semibold lg:text-[#083d2d]">
          {c.states.offlineNote}
        </p>
      </div>
    </div>
  );
}
