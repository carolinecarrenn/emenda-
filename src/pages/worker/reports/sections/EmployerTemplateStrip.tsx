/**
 * W-54J / W-54K "Employer report template" strip (1024:2202 / 1024:2261) —
 * sits directly under the hub heading, above the today card. Figma: 350x62,
 * radius 13, mint fill, 12px/10px padding, an 11px/15px semibold green title
 * ("Warehouse template · ABC Logistics") over a 10px/14px muted line.
 */
export function EmployerTemplateStrip({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[13px] border border-lp-line bg-lp-tint px-[12px] py-[10px] lg:rounded-[14px] lg:px-[17px] lg:py-[14px]">
      <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:text-[13px] lg:leading-[18px]">
        {title}
      </p>
      <p className="mt-[3px] text-[10px] leading-[14px] text-lp-muted lg:mt-[6px] lg:text-[12px] lg:leading-[18px]">
        {body}
      </p>
    </div>
  );
}
