import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ManagerSidebar } from "@/components/manager/ManagerSidebar";
import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { WorkspacePageHeader } from "./WorkspacePageHeader";

/* Chrome for the three pre-workspace facility screens (MD-02 / MD-02A /
   MD-02B · EM-02 / 02A / 02B). MD-02 (1213:4…18) draws the same 248px
   #083d2d sidebar as every other manager desktop frame, with the 1060px
   content column starting at x=280 and the right-aligned
   "{org} · Facility Manager / Operational access only · Profile" identity
   block set on the same row as the H1 (1213:19…22). The 390px surface keeps
   no bottom nav — facility scope is chosen before the tabbed shell — so the
   EMENDA wordmark stands in for the sidebar there. */
export function WorkspaceScreenLayout({
  title,
  subtitle,
  mobileTitle,
  mobileSubtitle,
  contextLine,
  children,
}: {
  title: string;
  subtitle: string;
  mobileTitle?: string;
  mobileSubtitle?: string;
  /** MD-04/MD-05 swap the second identity line for the facility scope. */
  contextLine?: string;
  children: ReactNode;
}) {
  const common = useCommonCopy();

  return (
    <div className="flex min-h-screen bg-canvas">
      <ManagerSidebar />
      <div className="min-w-0 flex-1">
        <div className="relative mx-auto w-full max-w-[430px] px-5 pt-[11px] pb-14 lg:mx-0 lg:max-w-[1124px] lg:px-8 lg:pt-10 lg:pb-16">
          {/* EM-02 761:5 / EM-02A 761:40 / EM-02B 761:1127 / EM-02C 761:1008
              all seat the wordmark and the H1 on a white 390x64 band that
              stops above the scope line; below it the canvas takes over.
              Desktop has no band. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[64px] bg-white lg:hidden"
          />
          <div className="relative lg:max-w-[1060px]">
            <Link
              to="/"
              className="block text-[11px] leading-[13px] font-bold text-brand-deep lg:hidden"
            >
              EMENDA
            </Link>

            <div className="mt-[2px] flex items-start justify-between gap-[24px] lg:mt-0">
              <WorkspacePageHeader
                title={title}
                subtitle={subtitle}
                mobileTitle={mobileTitle}
                mobileSubtitle={mobileSubtitle}
              />
              <div className="hidden shrink-0 text-right lg:block">
                <p className="text-[13px] font-semibold text-[#083d2d]">
                  {EMPLOYER.name} · {common.manager.facilityManager}
                </p>
                <p className="mt-[6px] text-[11px] text-[#66736b]">
                  {contextLine ?? common.manager.contextLine}
                </p>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
