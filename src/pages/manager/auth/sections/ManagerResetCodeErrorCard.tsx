import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { ManagerAuthSoftRedPanel } from "./ManagerAuthCallouts";
import {
  ManagerAuthOutlineButton,
  ManagerAuthPrimaryButton,
} from "./ManagerAuthButtons";

interface ManagerResetCodeErrorCardProps {
  title: string;
  body: string;
  onRequestNewCode: () => void;
  onBackToLogin: () => void;
}

/** MD-AUTH-03A Reset Code Invalid / Expired (1193:63): the pale #f9e5de alert
 *  panel with its red heading, then the dark-green "Request new code" pill and
 *  the white "Back to login" outline button. */
export function ManagerResetCodeErrorCard({
  title,
  body,
  onRequestNewCode,
  onBackToLogin,
}: ManagerResetCodeErrorCardProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY).reset;

  return (
    <div>
      <ManagerAuthSoftRedPanel title={title} body={body} />
      <ManagerAuthPrimaryButton
        className="mt-[26px] lg:mt-[35px]"
        heightClass="h-[44px] lg:h-[49px]"
        tone="card"
        onClick={onRequestNewCode}
      >
        {c.requestNewCode}
      </ManagerAuthPrimaryButton>
      <ManagerAuthOutlineButton
        className="mt-[15px]"
        heightClass="h-[44px] lg:h-[41px]"
        onClick={onBackToLogin}
      >
        {c.backToLogin}
      </ManagerAuthOutlineButton>
    </div>
  );
}
