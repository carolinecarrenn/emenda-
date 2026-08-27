/* WD-18: 28px bold #141f1a heading, 12px #596b61 state-driven subline. */
export function GreetingHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h1 className="text-[28px] leading-[34px] font-bold text-ink">{title}</h1>
      <p className="mt-2 text-[12px] leading-[17px] text-ink-muted lg:mt-[14px]">
        {subtitle}
      </p>
    </div>
  );
}
