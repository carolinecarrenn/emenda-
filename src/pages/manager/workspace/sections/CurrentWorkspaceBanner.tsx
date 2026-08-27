import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import { WorkspaceLinkButton } from "./WorkspaceButtons";

/* MD-02A (1213:81…86): the 11px uppercase "CURRENT WORKSPACE" eyebrow above
   a 1060x92 mint #e3f0e8 banner, radius 12 — 24px semibold "{org} ·
   {facility}", an 11px #66736b role line, and the white outline "Change
   facility" button pinned right. Desktop only; EM-02A uses the dark-green
   hero instead. */
export function CurrentWorkspaceBanner() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();

  return (
    <section className="hidden lg:block">
      <p className="text-[11px] font-semibold text-[#083d2d] uppercase">
        {c.context.currentWorkspace}
      </p>
      <div className="mt-[7px] flex h-[92px] items-center justify-between gap-[20px] rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[24px]">
        <div className="min-w-0 pt-[12px]">
          <p className="text-[24px] leading-[1.15] font-semibold text-[#083d2d]">
            {EMPLOYER.name} · {EMPLOYER.facility}
          </p>
          <p className="mt-[8px] text-[11px] text-[#66736b]">
            {fill(c.context.workspaceMeta, {
              role: common.manager.facilityManager,
            })}
          </p>
        </div>
        <WorkspaceLinkButton
          to="/manager/facility/switch"
          className="w-[172px] shrink-0"
        >
          {c.context.changeFacility}
        </WorkspaceLinkButton>
      </div>
    </section>
  );
}
