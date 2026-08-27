/* EM-18 761:1159 / MD-MORE 1223:30 page header: 20px bold #094033 title +
   11px #6e8a82 subtitle on mobile, 30px + 13px #65746d on desktop. Screens
   whose desktop frame carries different wording pass the desktop pair. */
export function AccountPageHeader({
  title,
  subtitle,
  desktopTitle,
  desktopSubtitle,
}: {
  title: string;
  subtitle: string;
  desktopTitle?: string;
  desktopSubtitle?: string;
}) {
  return (
    <header>
      <h1 className="text-[20px] font-bold text-brand-deep lg:text-[30px] lg:leading-[41px]">
        <span className={desktopTitle ? "lg:hidden" : undefined}>{title}</span>
        {desktopTitle && (
          <span className="hidden lg:inline">{desktopTitle}</span>
        )}
      </h1>
      <p className="mt-[15px] text-[11px] text-[#6e8a82] lg:mt-0 lg:text-[13px] lg:text-[#65746d]">
        <span className={desktopSubtitle ? "lg:hidden" : undefined}>
          {subtitle}
        </span>
        {desktopSubtitle && (
          <span className="hidden lg:inline">{desktopSubtitle}</span>
        )}
      </p>
    </header>
  );
}
