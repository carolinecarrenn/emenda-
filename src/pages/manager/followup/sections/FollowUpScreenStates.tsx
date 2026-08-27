import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";

/* Section 05 system states (?state=loading / empty / offline). Section 09
   (759:1304) defines the manager resilience pattern the follow-up and alert
   queues inherit: skeletons while the permitted queue loads, a neutral empty
   surface, and a read-only offline surface that states follow-up cannot be
   sent and that queue items stay open. */

export function FollowUpLoadingState() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div aria-busy="true">
      <div className="grid grid-cols-2 gap-[10px] lg:grid-cols-[240px_240px_240px_minmax(0,1fr)] lg:gap-4">
        {[0, 1, 2, 3].map((tile) => (
          <div
            key={tile}
            className="h-[52px] animate-pulse rounded-[12px] border border-[#d6e3de] bg-[#eef3ef] lg:h-[86px] lg:rounded-[10px] lg:border-[#dbe3de]"
          />
        ))}
      </div>

      <div className="mt-[24px] space-y-[14px] lg:hidden">
        {[0, 1, 2, 3].map((row) => (
          <div
            key={row}
            className="h-[94px] animate-pulse rounded-[14px] border border-[#d6e3de] bg-[#eef3ef]"
          />
        ))}
      </div>

      {/* MD-09 geometry: the 710px queue card beside the 330px rail. */}
      <div className="mt-[22px] hidden lg:flex lg:gap-[20px]">
        <div className="min-w-0 flex-1 rounded-[12px] border border-[#dbe3de] bg-white p-[24px] pb-[36px]">
          <div className="h-[17px] w-[160px] animate-pulse rounded-[4px] bg-[#eef3ef]" />
          <div className="mt-[17px] space-y-[12px]">
            {[0, 1, 2, 3].map((row) => (
              <div
                key={row}
                className="h-[64px] animate-pulse rounded-[9px] bg-[#f1f6f3]"
              />
            ))}
          </div>
        </div>
        <div className="w-[330px] shrink-0 animate-pulse rounded-[12px] border border-[#dbe3de] bg-white" />
      </div>
      <p className="mt-[16px] text-[9px] text-[#6e8a82] lg:text-[11px] lg:text-[#65746d]">
        {c.states.loadingTitle}
      </p>
      <p className="mt-[4px] text-[9px] text-[#6e8a82] lg:text-[11px] lg:text-[#65746d]">
        {c.states.loadingBody}
      </p>
    </div>
  );
}

export function FollowUpEmptyState({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[26px] text-center lg:rounded-[12px] lg:border-[#dbe3de] lg:py-[40px]">
      <p className="text-[12px] font-semibold text-[#094033] lg:text-[14px] lg:text-[#083d2d]">
        {title}
      </p>
      <p className="mx-auto mt-[8px] max-w-[420px] text-[10px] leading-[16px] text-[#6e8a82] lg:text-[11px] lg:text-[#65746d]">
        {body}
      </p>
    </div>
  );
}

export function FollowUpOfflineState() {
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const common = useCommonCopy();

  return (
    <div className="space-y-[14px]">
      <div className="rounded-[14px] border border-[#d6e3de] bg-[#f3f7f5] px-[14px] py-[12px] lg:rounded-[12px] lg:border-[#dbe3de]">
        <p className="text-[11px] font-semibold text-[#094033] lg:text-[13px] lg:text-[#083d2d]">
          {c.states.offlineTitle}
        </p>
        <p className="mt-[6px] text-[10px] leading-[15px] text-[#6e8a82] lg:text-[11px] lg:text-[#65746d]">
          {c.states.offlineBody}
        </p>
        <button
          type="button"
          className="mt-[12px] flex h-[30px] w-[143px] items-center justify-center rounded-[14px] border border-[#d6e3de] bg-white text-[10px] font-semibold text-[#06634f] hover:border-brand lg:text-[12px]"
        >
          {common.action.retry}
        </button>
      </div>
      <div className="rounded-[14px] bg-[#e8f5f0] px-[14px] py-[12px] lg:rounded-[10px] lg:bg-[#e3f0e8]">
        <p className="text-[10px] text-[#6e8a82] lg:text-[11px] lg:font-semibold lg:text-[#083d2d]">
          {c.center.footerDesktop}
        </p>
      </div>
    </div>
  );
}
