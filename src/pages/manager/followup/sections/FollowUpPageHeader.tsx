import { Link } from "react-router-dom";

/* Section 05 page chrome.
   MD-09 (1226:1253/1254) / MD-12 (1226:1559/1560): 30px #083d2d title over a
   13px #65746d subtitle. The 390px mocks use their own smaller pair —
   EM-09/09A/09B 20px #094033 + 11px #6e8a82, EM-10/EM-12 18px #083d2d +
   10px #65746d, EM-09C 19px #0d4a3e + 11px #6f8881. EM-09 pairs the mobile
   "sub" scale with the MD-09 desktop colours, hence the "center" tone. */
export function FollowUpPageHeader({
  title,
  desktopTitle,
  subtitle,
  desktopSubtitle,
  tone = "hub",
  backTo,
  backLabel,
}: {
  title: string;
  /** MD-09 renames the mobile "Follow-up" hub to "Follow-up Center". */
  desktopTitle?: string;
  subtitle: string;
  desktopSubtitle?: string;
  tone?: "hub" | "center" | "sub" | "record" | "failed";
  backTo?: string;
  backLabel?: string;
}) {
  const titleTone = {
    hub: "text-[18px] text-[#083d2d] lg:text-[30px]",
    center: "text-[20px] text-[#094033] lg:text-[30px] lg:text-[#083d2d]",
    sub: "text-[20px] text-[#094033] lg:text-[30px]",
    record: "text-[18px] text-[#083d2d] lg:text-[30px]",
    failed: "text-[19px] text-[#0d4a3e] lg:text-[30px] lg:text-[#083d2d]",
  }[tone];
  const subtitleTone = {
    hub: "text-[10px] text-[#65746d] lg:text-[13px]",
    center: "text-[11px] text-[#6e8a82] lg:text-[13px] lg:text-[#65746d]",
    sub: "text-[11px] text-[#6e8a82] lg:text-[13px]",
    record: "text-[10px] text-[#65746d] lg:text-[13px]",
    failed: "text-[11px] text-[#6f8881] lg:text-[13px] lg:text-[#65746d]",
  }[tone];

  return (
    <div>
      {backTo && backLabel && (
        <Link
          to={backTo}
          className="text-[11px] font-semibold text-brand hover:text-brand-deep lg:hidden"
        >
          {backLabel}
        </Link>
      )}
      <h1
        className={`${backTo && backLabel ? "mt-[8px] lg:mt-0 " : ""}font-bold lg:mt-[8px] ${titleTone}`}
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
      <p className={`mt-[14px] lg:mt-[-2px] ${subtitleTone}`}>
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
