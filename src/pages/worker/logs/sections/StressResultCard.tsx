interface StressResultCardProps {
  eyebrow: string;
  summary: string;
}

/* W-61N result card (1167:697): a 350px mint (#e8f5ed) card at radius 16 with
   14/12px padding, the 11px CHECK-IN SAVED eyebrow and the 10px summary of the
   answers. Desktop keeps the WD-61N 1012x180 panel. The "not a medical
   assessment" disclaimer is its own white card underneath (1167:700). */
export function StressResultCard({ eyebrow, summary }: StressResultCardProps) {
  return (
    <div className="rounded-[16px] border border-lp-line bg-lp-mint px-[14px] py-[12px] lg:min-h-[180px] lg:px-[21px] lg:py-[19px]">
      <p className="text-[11px] leading-[15px] font-semibold text-lp-green">
        {eyebrow}
      </p>
      <p className="mt-[6px] max-w-[940px] text-[10px] leading-[14px] text-lp-muted lg:mt-[30px] lg:text-[15px] lg:leading-[22px] lg:font-semibold lg:text-lp-ink">
        {summary}
      </p>
    </div>
  );
}
