import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthPrimaryButton } from "./ManagerAuthButtons";

interface ManagerUpdatedDesktopCardProps {
  onBackToLogin: () => void;
}

/** MD-AUTH-04 Password Updated card body (nodes 1193:85-90): the 160x42 mint
 *  "UPDATED" badge, the 26px confirmation headline, the grey follow-up line
 *  and the 439px "Return to Manager Login" pill — all centred in the card. */
export function ManagerUpdatedDesktopCard({
  onBackToLogin,
}: ManagerUpdatedDesktopCardProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).updated;

  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-[42px] w-[160px] items-center justify-center rounded-[12px] bg-[#e7f2ec] text-[12px] font-bold text-[#0b4f3f]">
        {c.badge}
      </span>
      <p className="mt-[35px] font-display text-[26px] leading-[31px] font-bold text-[#0b4f3f]">
        {c.desktopHeadline}
      </p>
      <p className="mt-[13px] text-[14px] leading-[17px] text-[#6d7d75]">
        {c.desktopBody}
      </p>
      <ManagerAuthPrimaryButton
        className="mt-[40px]"
        heightClass="h-[44px] lg:h-[49px]"
        tone="card"
        onClick={onBackToLogin}
      >
        {c.desktopCta}
      </ManagerAuthPrimaryButton>
    </div>
  );
}
