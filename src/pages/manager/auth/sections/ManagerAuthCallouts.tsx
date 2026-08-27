interface CalloutProps {
  title: string;
  body: string;
  className?: string;
}

/** Tone of the 350x78 (or x84) mobile status banner every EM-AUTH state
 *  uses: amber #fff2c7 for connectivity / throttling, peach #fde5da for
 *  errors, mint #e5f4ef for confirmations. */
export type ManagerAuthBannerTone = "amber" | "peach" | "mint";

const BANNER_TONE: Record<
  ManagerAuthBannerTone,
  { fill: string; title: string }
> = {
  amber: { fill: "bg-[#fff2c7]", title: "text-[#17362f]" },
  peach: { fill: "bg-[#fde5da]", title: "text-[#b84a3a]" },
  mint: { fill: "bg-[#e5f4ef]", title: "text-[#0b6b57]" },
};

interface ManagerAuthBannerProps extends CalloutProps {
  tone: ManagerAuthBannerTone;
  /** 78px on every frame except 02D / 02E, which are 84px. */
  heightClass?: string;
}

/** EM-AUTH mobile status banner (842:1507 / 1527 / 1541 / 1555 / 1597 /
 *  1695 / 1732 / 1746 / 1775 / 1788 / 1801 / 1889 / 1903): a borderless r14
 *  card, 12px semibold title inset 16/18 and a 10px #6f8781 body 24px under
 *  it. */
export function ManagerAuthBanner({
  tone,
  title,
  body,
  className = "",
  heightClass = "min-h-[78px]",
}: ManagerAuthBannerProps) {
  const palette = BANNER_TONE[tone];

  return (
    <div
      className={`${heightClass} ${palette.fill} rounded-[14px] px-[16px] pt-[18px] pb-[12px] ${className}`}
    >
      <p className={`text-[12px] font-semibold ${palette.title}`}>{title}</p>
      <p className="mt-[6px] text-[10px] leading-[12px] text-[#6f8781]">
        {body}
      </p>
    </div>
  );
}

/** Mint info card (node 908:6 "Mobile access" / 908:9 "Security"): #e3efe8
 *  fill, 1px #dce4df, r12, 14/12 padding, 13px #083d2d title + 10px #65746d
 *  body. */
export function ManagerAuthMintCard({
  title,
  body,
  className = "",
}: CalloutProps) {
  return (
    <div
      className={`rounded-[12px] border border-[#dce4df] bg-[#e3efe8] px-[14px] py-[12px] ${className}`}
    >
      <p className="text-[13px] font-semibold text-[#083d2d] lg:text-[14px]">
        {title}
      </p>
      <p className="mt-[4px] text-[10px] leading-[12px] text-[#65746d] lg:text-[12px] lg:leading-[18px]">
        {body}
      </p>
    </div>
  );
}

/** Pale-mint tinted panel (#e5f4ef): EM-AUTH-03 "Password requirements"
 *  (842:1638) and EM-AUTH-04 "Update complete" banner (842:1801). */
export function ManagerAuthTintPanel({
  title,
  body,
  className = "",
  radiusClass = "rounded-[12px]",
  titleClass = "text-[11px] font-semibold text-[#17362f] lg:text-[13px]",
}: CalloutProps & { radiusClass?: string; titleClass?: string }) {
  return (
    <div
      className={`${radiusClass} bg-[#e5f4ef] px-[16px] py-[16px] ${className}`}
    >
      <p className={titleClass}>{title}</p>
      <p className="mt-[4px] text-[10px] leading-[12px] text-[#6f8781] lg:mt-[6px] lg:text-[12px] lg:leading-[18px]">
        {body}
      </p>
    </div>
  );
}

/** Peach/salmon error card (EM-AUTH-01B "Email or password is incorrect." and
 *  the 03B-03E reset errors): ~#fbe9e2 fill with a red-orange title. */
export function ManagerAuthAlertCard({
  title,
  body,
  className = "",
}: CalloutProps) {
  return (
    <div
      className={`rounded-[12px] border border-[#f2d5c9] bg-[#fbe9e2] px-[14px] py-[12px] ${className}`}
    >
      <p className="text-[12px] font-semibold text-[#c04a2f] lg:text-[13px]">
        {title}
      </p>
      <p className="mt-[4px] text-[10px] leading-[15px] text-[#8b6153] lg:text-[12px] lg:leading-[18px]">
        {body}
      </p>
    </div>
  );
}

/** Cream/yellow caution card (EM-AUTH-02E "Your access stays protected"). */
export function ManagerAuthCautionCard({
  title,
  body,
  className = "",
}: CalloutProps) {
  return (
    <div
      className={`rounded-[12px] border border-[#efe0b4] bg-[#fdf3d7] px-[14px] py-[12px] ${className}`}
    >
      <p className="text-[12px] font-semibold text-[#7a5c14] lg:text-[13px]">
        {title}
      </p>
      <p className="mt-[4px] text-[10px] leading-[15px] text-[#6f8781] lg:text-[12px] lg:leading-[18px]">
        {body}
      </p>
    </div>
  );
}

/** MD-AUTH-03A soft-red alert panel (1193:70-72): 459x81 #fce8e1 fill, 18px
 *  red heading, 12px grey explanation — the only red accent in the desktop
 *  flow. */
export function ManagerAuthSoftRedPanel({
  title,
  body,
  className = "",
}: CalloutProps) {
  return (
    <div
      className={`rounded-[12px] bg-[#fce8e1] px-[20px] pt-[16px] pb-[16px] lg:px-[24px] lg:pt-[19px] lg:pb-[17px] ${className}`}
    >
      <p className="text-[14px] leading-[18px] font-bold text-[#c74b3e] lg:text-[18px] lg:leading-[22px]">
        {title}
      </p>
      <p className="mt-[8px] text-[11px] leading-[14px] text-[#6d7d75] lg:text-[12px] lg:leading-[15px]">
        {body}
      </p>
    </div>
  );
}

interface OfflineBannerProps {
  title: string;
  action: string;
  onAction?: () => void;
  className?: string;
}

/** Offline banner used by every network-dependent step (01D / 02C / 03F). */
export function ManagerAuthOfflineBanner({
  title,
  action,
  onAction,
  className = "",
}: OfflineBannerProps) {
  return (
    <div
      className={`flex h-[52px] items-center justify-between rounded-[12px] border border-[#bdd9e8] bg-[#eef6fb] px-[14px] ${className}`}
    >
      <p className="text-[12px] font-semibold text-[#17362f] lg:text-[13px]">
        {title}
      </p>
      <button
        type="button"
        onClick={onAction}
        className="cursor-pointer text-[12px] font-semibold text-[#0b6b57] hover:text-brand-deep lg:text-[13px]"
      >
        {action}
      </button>
    </div>
  );
}
