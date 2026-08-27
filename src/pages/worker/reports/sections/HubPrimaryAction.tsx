import { Link } from "react-router-dom";

/**
 * Full-width hub call to action — "Connect employer" (W-54 972:132) and
 * "New Daily Report" (W-54C 972:356 / W-54J 1024:2208). Figma: 350x48,
 * radius 14, #0c5941 fill, 13px semibold white label, and the W-54H offline
 * twin (975:117) renders the same button at 45% opacity with no target.
 * Desktop caps the width at the WD-54 300px button.
 */
export function HubPrimaryAction({
  to,
  label,
  disabled = false,
}: {
  to: string;
  label: string;
  disabled?: boolean;
}) {
  const base =
    "flex h-[48px] w-full items-center justify-center rounded-[14px] bg-lp-button text-[13px] font-semibold text-white lg:w-[300px] lg:text-[14px]";

  if (disabled) {
    return (
      <div aria-disabled="true" className={`${base} opacity-45`}>
        {label}
      </div>
    );
  }

  return (
    <Link to={to} className={`${base} hover:bg-lp-green`}>
      {label}
    </Link>
  );
}
