import type { ReactNode } from "react";
import { PublicHeader } from "./PublicHeader";
import { PublicFooter } from "./PublicFooter";
import type { PublicNavKey } from "../publicMock";

/**
 * Full-screen chrome for the public inner pages (Figma section 1147:2):
 * header + the 1268px content column that runs x=64 → x=1332 inside the
 * 1440px frame + footer. The first section starts at y=150 (53px under the
 * 96px header divider); `bottomSpace` carries the gap Figma leaves between the
 * last section and the footer divider at y=2140 (40px on LP-02/LP-04,
 * 190px on LP-03).
 */
export function PublicPageShell({
  current,
  bottomSpace = "pb-[40px]",
  children,
}: {
  current: PublicNavKey;
  bottomSpace?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9faf8] font-sans text-[#0e1f18]">
      <PublicHeader current={current} />
      <main
        className={`mx-auto w-full max-w-[1440px] flex-1 px-6 pt-[53px] lg:pr-[108px] lg:pl-16 ${bottomSpace}`}
      >
        {children}
      </main>
      <PublicFooter />
    </div>
  );
}
