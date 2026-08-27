import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";

/* Section 08 system states (?state=loading / ?state=offline).
   Section 09 (759:1304) defines the manager app-wide resilience pattern the
   OJT + HRDD screens inherit: skeleton tiles while permitted records load,
   and a read-only offline surface with an explicit "no silent writes" note. */

export function OjtLoadingState() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="mt-[20px]" aria-busy="true">
      <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-4">
        {[0, 1, 2, 3].map((tile) => (
          <div
            key={tile}
            className="min-h-[52px] animate-pulse rounded-[12px] border border-[#ccded6] bg-[#eef3ef]"
          />
        ))}
      </div>
      <div className="mt-[24px] space-y-[14px]">
        {[0, 1, 2].map((card) => (
          <div
            key={card}
            className="h-[58px] animate-pulse rounded-[12px] border border-[#ccded6] bg-[#eef3ef]"
          />
        ))}
      </div>
      <p className="mt-[16px] text-[9px] text-[#667a73] lg:text-[11px]">
        {c.states.loadingNote}
      </p>
    </div>
  );
}

export function OjtOfflineState() {
  const c = useSectionCopy(OJT_COPY);
  const common = useCommonCopy();

  return (
    <div className="mt-[20px] space-y-[14px]">
      <div className="rounded-[12px] border border-[#d5e0da] bg-[#f3f7f5] px-[14px] py-[12px]">
        <p className="text-[10px] font-semibold text-[#083d2d] lg:text-[13px]">
          {c.states.offlineTitle}
        </p>
        <p className="mt-[6px] text-[9px] text-[#667a73] lg:text-[11px]">
          {c.states.offlineBody}
        </p>
        <button
          type="button"
          className="mt-[10px] flex h-[30px] w-[143px] items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[10px] font-semibold text-[#0b5842] hover:border-brand lg:text-[12px]"
        >
          {common.action.retry}
        </button>
      </div>
      <div className="rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px]">
        <p className="text-[9px] text-[#667a73] lg:text-[11px]">
          {c.states.offlineNote}
        </p>
      </div>
    </div>
  );
}
