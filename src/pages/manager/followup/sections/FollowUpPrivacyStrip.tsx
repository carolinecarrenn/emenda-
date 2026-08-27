/* MD-10 (1255:2907/2908) / MD-09C (1255:2909/2910) closing privacy strip:
   a 1030x54 #e8f5ed panel, radius 10, inset 50px from the content edge, with
   an 11px #0d4736 line at 20px padding. Desktop only — the 390px records
   close with their own mint "Privacy boundary" card instead. */
export function FollowUpPrivacyStrip({ children }: { children: string }) {
  return (
    <div className="hidden lg:block">
      <div className="ml-[50px] flex min-h-[54px] w-[1030px] items-center rounded-[10px] bg-[#e8f5ed] px-[20px] py-[12px]">
        <p className="text-[11px] leading-[18px] text-[#0d4736]">{children}</p>
      </div>
    </div>
  );
}
