import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";

/* MD-04B / EM-04B "Current workspace" mint banner: the organisation and
   facility the invite will bind to, plus the reminder that the connection is
   employment-scoped rather than an identity transfer. MD-04B (1213:427…429)
   runs it as a bare 1060x92 band — 20px title over the 11px role line, with
   the eyebrow and the manager name left to the 390px surface. */
export function InviteWorkspaceBanner() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const common = useCommonCopy();

  return (
    <section className="rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[16px] py-[14px] lg:h-[92px] lg:px-[24px] lg:py-[22px]">
      <p className="text-[10px] font-semibold tracking-[0.04em] text-[#66736b] uppercase lg:hidden">
        {c.invite.currentWorkspace}
      </p>
      <p className="mt-[8px] text-[15px] leading-[1.2] font-semibold text-[#083d2d] lg:mt-0 lg:text-[20px]">
        {EMPLOYER.name} · {EMPLOYER.facility}
      </p>
      <p className="mt-[6px] text-[10px] text-[#66736b] lg:mt-[8px] lg:text-[11px]">
        <span className="lg:hidden">{EMPLOYER.manager} · </span>
        {fill(c.invite.workspaceMeta, {
          role: common.manager.facilityManager,
        })}
      </p>
    </section>
  );
}
