/* WD-61J (1215:186) / WD-61X (1215:296) empty notice — the desktop empty
   states are not the centred WD-61Y card: they are a 1012x84 mint strip with a
   13px semibold ink title in a 22px box 10px down and a 12px muted body in a
   44px box under it, 18px in from the left, with the category's CTAs on their
   own row below. */
export function EmptyNotice({
  title,
  body,
  className = "",
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`min-h-[84px] rounded-[12px] border border-lp-line bg-lp-tint px-[18px] pt-[10px] pb-[8px] ${className}`}
    >
      <p className="text-[13px] leading-[22px] font-semibold text-lp-ink">
        {title}
      </p>
      <p className="text-[12px] leading-[44px] text-lp-muted">{body}</p>
    </div>
  );
}
