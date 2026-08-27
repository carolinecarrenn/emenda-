import type { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/** Sub-page chrome shared by WD-37..WD-40: green back-link (13px semibold,
 *  #0b684f, 18px arrow) + 22px semibold #083d2d H1 + 12px #65746d subtitle.
 *  Figma metrics (frames 1024:235 / 1024:494 / 1025:82 / 1025:734): title top
 *  sits 40px under the back link, subtitle top 48px under the title top, and
 *  the first content block 110px under the title top — hence the 22px top and
 *  44px desktop bottom margins on the subtitle. The bottom margin collapses
 *  with the `mt-[26px]` every following content block carries, so 44 wins for
 *  the first block while block-to-block gaps stay at 26; mobile keeps 26 to
 *  match the tighter W-37..W-40 frames.
 *  Mobile keeps the same back-link (shell drops nav chrome on sub-pages). */

export function BackLink({
  to,
  label,
  onGuard,
  muted,
}: {
  to: string;
  label: string;
  /** Return false to block navigation (unsaved-changes guard). */
  onGuard?: () => boolean;
  /** W-38G 758:772 fades the back link while a save is in flight. */
  muted?: boolean;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onGuard && !onGuard()) e.preventDefault();
  };
  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-[13px] font-semibold text-[#0b684f] hover:text-brand ${
        muted ? "opacity-45" : ""
      }`}
    >
      <ArrowLeft size={18} strokeWidth={1.5} />
      {label}
    </Link>
  );
}

export function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) {
  return (
    <>
      <h1 className="mt-[14px] font-sans text-[22px] leading-[1.2] font-semibold text-brand-deep">
        {title}
      </h1>
      <p className="mt-[22px] mb-[26px] text-[12px] text-[#65746d] lg:mb-[44px]">
        {subtitle}
      </p>
    </>
  );
}
