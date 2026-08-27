/* Section 02 page heading. MD-02 (1213:19/20) … MD-05A (1213:548/549) all
   place a 30px #083d2d Bold H1 at x=280 y=38 over a 13px #66736b subtitle.
   The 390px mocks (EM-02 761:6/8 … EM-05A) use the smaller 20px / 11px pair
   and drop the grey scope line 16px clear of the title, below the white
   header band the mobile frames set behind the wordmark and H1. */
export function WorkspacePageHeader({
  title,
  subtitle,
  mobileTitle,
  mobileSubtitle,
}: {
  title: string;
  subtitle: string;
  mobileTitle?: string;
  mobileSubtitle?: string;
}) {
  return (
    <div>
      <h1 className="text-[20px] leading-[24px] font-bold text-[#083d2d] lg:text-[30px] lg:leading-[1.15]">
        {mobileTitle ? (
          <>
            <span className="lg:hidden">{mobileTitle}</span>
            <span className="hidden lg:inline">{title}</span>
          </>
        ) : (
          title
        )}
      </h1>
      <p className="mt-[16px] text-[11px] leading-[16px] text-[#66736b] lg:mt-[4px] lg:text-[13px]">
        {mobileSubtitle ? (
          <>
            <span className="lg:hidden">{mobileSubtitle}</span>
            <span className="hidden lg:inline">{subtitle}</span>
          </>
        ) : (
          subtitle
        )}
      </p>
    </div>
  );
}
