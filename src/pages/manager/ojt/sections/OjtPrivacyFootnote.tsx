/* Section 08 footnote: tiny 9px/12px #667a73 line 12px under the CTAs — the privacy
   / no-auto-publish invariant restated on EM-14, EM-14B and EM-14C. */
export function OjtPrivacyFootnote({ children }: { children: string }) {
  return (
    <p className="text-[9px] leading-[12px] text-[#667a73] lg:text-[11px] lg:leading-[15px]">{children}</p>
  );
}
