import type { ReactNode } from "react";

interface ConsentProviderRowProps {
  /** Raw clinic name — never translated. */
  name: string;
  status: string;
  action: ReactNode;
}

/* WD-61O provider row: 1012x94 white card, radius 14, 15px semibold clinic name
   over a 12px access-status line, with the 160x42 access button on the right.
   Mobile (W-61O · 1167:737) splits the two: a 350x66 white row at radius 14
   with a 12px name at y=11 and a 10px status at y=33, and the access button
   sitting underneath as its own full-width action. */
export function ConsentProviderRow({
  name,
  status,
  action,
}: ConsentProviderRowProps) {
  return (
    <div className="contents lg:flex lg:min-h-[94px] lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:rounded-[14px] lg:border lg:border-lp-line lg:bg-white lg:px-[17px] lg:py-[16px]">
      <div className="h-[66px] min-w-0 rounded-[14px] border border-lp-line bg-white pt-[11px] pl-[13px] lg:h-auto lg:rounded-none lg:border-0 lg:p-0">
        <p className="truncate text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[15px] lg:leading-normal">
          {name}
        </p>
        <p className="mt-[6px] truncate text-[10px] leading-[14px] text-lp-muted lg:mt-[9px] lg:text-[12px] lg:leading-normal">
          {status}
        </p>
      </div>
      <div className="mt-[12px] shrink-0 lg:mt-0">{action}</div>
    </div>
  );
}
