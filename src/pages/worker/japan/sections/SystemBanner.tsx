import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/** Section 06 system-status card (offline / save failed / updating).
 *
 *  Mobile is the canonical frame (W-32E `626:509`, W-33G `626:1074`,
 *  W-34E `628:339`): a 350×72 card — 16px radius, `#f2f6f4` fill,
 *  `#d5e0db` hairline — with a 12px title at 14/12, an 11px body clipped to
 *  the left 220px, and the action parked as an 84×36 pill at 250/18.
 *  Desktop (WD-33G `1014:1519`) keeps the taller 520×116 band with the
 *  180×36 pill stacked at the bottom-right, so the action slot switches from
 *  absolute to static at `lg`.
 */
export interface BannerAction {
  label: string;
  to?: string;
  onClick?: () => void;
}

function BannerPill({ label, to, onClick }: BannerAction) {
  const className =
    "flex h-[36px] w-auto min-w-[84px] items-center justify-center rounded-[13px] border border-[#d5e0db] bg-white px-[12px] text-[13px] font-semibold whitespace-nowrap text-[#08664d] hover:border-[#08664d] lg:w-[180px] lg:px-0 lg:rounded-[12px]";
  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  );
}

export function SystemBanner({
  title,
  body,
  action,
  tone = "system",
  children,
}: {
  title: string;
  body: string;
  action?: BannerAction;
  /** W-33F / W-36F draw the save-failure banner in the red error tint. */
  tone?: "system" | "danger";
  /** Extra line that flows under the body (status tag, quiet text link). */
  children?: ReactNode;
}) {
  const clamp = action ? "max-w-[220px] lg:max-w-none" : "";
  const shell =
    tone === "danger"
      ? "border-[#f0c4bf] bg-[#fdecea] lg:border-[#e7b6b3] lg:bg-[#fcebea]"
      : "border-[#d5e0db] bg-[#f2f6f4]";
  const titleTone =
    tone === "danger" ? "text-[#c7261f] lg:text-[#131f1a]" : "text-[#131f1a]";

  return (
    <div
      className={`relative min-h-[72px] rounded-[16px] border px-[14px] py-[12px] lg:min-h-[116px] lg:rounded-[14px] lg:p-[15px] lg:pb-[11px] ${shell}`}
    >
      <p
        className={`text-[12px] leading-[18px] font-semibold lg:text-[15px] lg:leading-[22px] ${titleTone} ${clamp}`}
      >
        {title}
      </p>
      <p
        className={`mt-[4px] text-[11px] leading-[14px] text-[#5e7066] lg:mt-[6px] lg:text-[13px] lg:leading-[22px] ${clamp}`}
      >
        {body}
      </p>
      {children}
      {action && (
        <div className="absolute top-[18px] right-[16px] lg:static lg:mt-[2px] lg:flex lg:justify-end">
          <BannerPill {...action} />
        </div>
      )}
    </div>
  );
}
