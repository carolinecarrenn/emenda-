import type { ReactNode } from "react";

/* The mint privacy boundary strip that closes MD-04 (1213:375/376) and
   MD-05 (1213:529/530): 1060x58, radius 10, #e3f0e8 fill and border, 12px
   semibold #083d2d. EM-04 (761:184/185) restates it as a softer footer card
   on the same mint, in regular 11px #66736b, so the strip stays full-width
   on both surfaces while only the type weight changes. */
export function WorkspacePrivacyBanner({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-[10px] border border-[#e3f0e8] bg-[#e3f0e8] px-[16px] py-[14px] lg:h-[58px] lg:px-[24px] lg:py-[19px]">
      <p className="text-[11px] leading-[17px] text-[#66736b] lg:text-[12px] lg:leading-[20px] lg:font-semibold lg:text-[#083d2d]">
        {children}
      </p>
    </section>
  );
}
