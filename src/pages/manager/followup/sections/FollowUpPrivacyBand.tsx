/* MD-09 (1226:1320) / MD-12 (1226:1626) privacy band: full 1060px mint
   #e3f0e8 strip, radius 10, 64px tall, 11px semibold #083d2d line at 20px
   inset. Desktop only — the 390px mocks close with a plain 9px footer line. */
export function FollowUpPrivacyBand({ children }: { children: string }) {
  return (
    <div className="hidden lg:flex lg:h-[64px] lg:items-center lg:rounded-[10px] lg:bg-[#e3f0e8] lg:px-[20px]">
      <p className="text-[11px] font-semibold text-[#083d2d]">{children}</p>
    </div>
  );
}

/* EM-09 (1030:163) / EM-09A (1030:185) / EM-09B (1030:214) / EM-12 (1030:287)
   closing line: 9px #6e8a82, flush to the content edge. Mobile only. */
export function FollowUpFooterNote({ children }: { children: string }) {
  return <p className="text-[9px] text-[#6e8a82] lg:hidden">{children}</p>;
}
