import type { ReactNode } from "react";

/* Section 09 screen header (EM-16 761:2896-2898 and twins): Sora/display
   title over a 10px #65746d subtitle, with the optional status chip that
   EM-17 / EM-16B / EM-STATE-01 / EM-STATE-02 place directly beneath it. */
export function AuditPageHeader({
  title,
  subtitle,
  chip,
}: {
  title: string;
  subtitle: string;
  chip?: ReactNode;
}) {
  return (
    <header>
      <h1 className="text-[18px] font-bold text-brand-deep lg:text-[30px]">
        {title}
      </h1>
      <p className="mt-[16px] text-[10px] text-[#65746d] lg:mt-[10px] lg:text-[13px]">
        {subtitle}
      </p>
      {chip ? <div className="mt-[21px] lg:mt-[16px]">{chip}</div> : null}
    </header>
  );
}
