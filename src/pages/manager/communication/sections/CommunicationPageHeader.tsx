import { Link } from "react-router-dom";

/* Section 04 page chrome.
   Desktop (MD-06 1225:18/19 · MD-07 1225:101/102 · MD-08 1225:160/161 ·
   MD-08A 1225:235/236 · MD-07B 1225:278/279 · MD-07C 1225:322/323): a 30px
   #083d2d title over a 13px #65746d subtitle, both flush to the 280px content
   gutter.
   Mobile is one pair across every 390px frame — EM-06 994:2684/2685,
   EM-07 994:2750/2751, EM-08 994:2810/2811, EM-08A 994:2857/2858,
   EM-07B 994:2902/2903 and EM-07C 994:2939/2940 all set a 20px/24 semibold
   #094033 title centred on y42 over an 11px/15 #6e8a82 subtitle centred on
   y80, so the tones only diverge on desktop. The negative top margin pulls
   the title box back to y30: the shared manager chrome adds 12px of main
   padding under the EMENDA eyebrow where the mocks leave 3.5px. */
export function CommunicationPageHeader({
  title,
  desktopTitle,
  subtitle,
  desktopSubtitle,
  tone = "hub",
  backTo,
  backLabel,
}: {
  title: string;
  /** Desktop renames several screens ("Messages" → "Communication"). */
  desktopTitle?: string;
  subtitle: string;
  desktopSubtitle?: string;
  tone?: "hub" | "sub" | "record" | "failed";
  backTo?: string;
  backLabel?: string;
}) {
  const titleTone = {
    hub: "lg:text-[#083d2d]",
    sub: "lg:text-[#094033]",
    record: "lg:text-[#083d2d]",
    failed: "lg:text-[#0d4a3e]",
  }[tone];
  const subtitleTone = {
    hub: "lg:text-[#65746d]",
    sub: "lg:text-[#65746d]",
    record: "lg:text-[#65746d]",
    failed: "lg:text-[#65746d]",
  }[tone];

  return (
    <div>
      {backTo && backLabel && (
        <Link
          to={backTo}
          className="text-[11px] font-semibold text-brand hover:text-brand-deep"
        >
          {backLabel}
        </Link>
      )}
      <h1
        className={`${
          backTo ? "mt-[8px]" : "-mt-[9px]"
        } text-[20px] leading-[24px] font-semibold text-[#094033] lg:mt-[8px] lg:text-[30px] lg:leading-[34px] lg:font-bold ${titleTone}`}
      >
        {desktopTitle ? (
          <>
            <span className="lg:hidden">{title}</span>
            <span className="hidden lg:inline">{desktopTitle}</span>
          </>
        ) : (
          title
        )}
      </h1>
      <p
        className={`mt-[18px] text-[11px] leading-[15px] text-[#6e8a82] lg:mt-[4px] lg:text-[13px] lg:leading-normal ${subtitleTone}`}
      >
        {desktopSubtitle ? (
          <>
            <span className="lg:hidden">{subtitle}</span>
            <span className="hidden lg:inline">{desktopSubtitle}</span>
          </>
        ) : (
          subtitle
        )}
      </p>
    </div>
  );
}
