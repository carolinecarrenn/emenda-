import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* Section 02 system states (?state=loading / offline). The manager
   resilience pattern from section 09 (759:1304) applies here too: facility
   scope is confirmed before anything is painted, and offline stays strictly
   read-only — no facility switch, no invite, no follow-up is written. */

export function WorkspaceLoadingState() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <div aria-busy="true">
      {/* The 390px frames open on a single tinted summary card, never on the
          desktop KPI quad, so the skeleton mirrors the surface it is
          standing in for at each width. */}
      <div className="h-[90px] animate-pulse rounded-[14px] border border-[#dbe3de] bg-[#eef3ef] lg:hidden" />
      <div className="hidden gap-4 lg:grid lg:grid-cols-4">
        {[0, 1, 2, 3].map((tile) => (
          <div
            key={tile}
            className="h-[96px] animate-pulse rounded-[12px] border border-[#dbe3de] bg-[#eef3ef]"
          />
        ))}
      </div>
      <div className="mt-[18px] space-y-[12px] lg:mt-[24px] lg:space-y-[14px]">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="h-[86px] animate-pulse rounded-[12px] border border-[#dbe3de] bg-[#eef3ef] lg:h-[98px] lg:rounded-[10px]"
          />
        ))}
      </div>
      <p className="mt-[16px] text-[10px] font-semibold text-[#083d2d] lg:text-[11px]">
        {c.state.loadingTitle}
      </p>
      <p className="mt-[4px] text-[10px] text-[#66736b] lg:text-[11px]">
        {c.state.loadingBody}
      </p>
    </div>
  );
}

export function WorkspaceOfflineState() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();

  return (
    <div className="space-y-[14px]">
      <div className="rounded-[12px] border border-[#dbe3de] bg-white px-[16px] py-[14px]">
        <p className="text-[12px] font-semibold text-[#083d2d] lg:text-[13px]">
          {c.state.offlineTitle}
        </p>
        <p className="mt-[6px] text-[11px] leading-[17px] text-[#66736b] lg:text-[12px]">
          {c.state.offlineBody}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-[14px] flex h-[42px] w-[170px] items-center justify-center rounded-[10px] border border-[#dbe3de] bg-white text-[12px] font-semibold text-[#083d2d] hover:border-brand"
        >
          {common.action.retry}
        </button>
      </div>
      <div className="rounded-[10px] border border-[#e3f0e8] bg-[#e3f0e8] px-[16px] py-[14px]">
        <p className="text-[11px] leading-[17px] font-semibold text-[#083d2d] lg:text-[12px]">
          {c.facility.railExcludedBody}
        </p>
      </div>
    </div>
  );
}
