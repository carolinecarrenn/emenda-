import { Link } from "react-router-dom";

/* Section 08 page chrome (EM-14 / 14A / 14B / 14C / 15 / 15A):
   bold title in near-black green over a one-line grey subtitle.
   Hub frames use 18px/#083d2d + 10px #65746d (title box 22px tall, subtitle
   baseline 42px under the title top), sub-frames 19px/#0d4a3e + 11px
   #6f8881. The 390px frames carry no breadcrumb — every sub-frame ships an
   explicit "Back to …" CTA instead — so the desktop-only breadcrumb link
   (the manager house pattern above the 1060px column) is hidden on mobile. */
export function OjtPageHeader({
  title,
  subtitle,
  variant = "hub",
  backTo,
  backLabel,
}: {
  title: string;
  subtitle: string;
  variant?: "hub" | "sub";
  backTo?: string;
  backLabel?: string;
}) {
  const isHub = variant === "hub";

  return (
    <div>
      {backTo && backLabel && (
        <Link
          to={backTo}
          className="hidden text-[11px] font-semibold text-brand hover:text-brand-deep lg:block"
        >
          {backLabel}
        </Link>
      )}
      <h1
        className={
          isHub
            ? "text-[18px] leading-[22px] font-bold text-[#083d2d] lg:text-[30px] lg:leading-[38px]"
            : "text-[19px] leading-[23px] font-bold text-[#0d4a3e] lg:mt-[8px] lg:text-[26px] lg:leading-[33px]"
        }
      >
        {title}
      </h1>
      <p
        className={
          isHub
            ? "mt-[20px] text-[10px] leading-[12px] text-[#65746d] lg:mt-[10px] lg:text-[13px] lg:leading-[17px]"
            : "mt-[19px] text-[11px] leading-[13px] text-[#6f8881] lg:mt-[10px] lg:text-[13px] lg:leading-[17px]"
        }
      >
        {subtitle}
      </p>
    </div>
  );
}
