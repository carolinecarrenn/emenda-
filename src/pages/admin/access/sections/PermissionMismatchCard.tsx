import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINACCESS_COPY } from "../access.copy";
import { accessHref } from "../accessStates";
import {
  AccessBrand,
  AccessCard,
  AccessNote,
  AccessSecondaryButton,
  AccessTitle,
} from "./AccessPrimitives";

/** AD-00D card 3 "Permission mismatch" (1239:117): if the account loses Admin
 *  permission, access is denied WITHOUT showing company data — so this card
 *  deliberately carries no tenant name, no e-mail and no profile row, only the
 *  denial and the "Sign out" way back. */
export function PermissionMismatchCard() {
  const navigate = useNavigate();
  const c = useSectionCopy(ADMINACCESS_COPY).setup;

  return (
    <AccessCard width={580}>
      <AccessBrand />
      <div className="mt-[28px] lg:mt-[39px]">
        <AccessTitle>{c.mismatchTitle}</AccessTitle>
      </div>

      <div className="mt-[24px]">
        <AccessNote tone="red" body={c.mismatchBody} />
      </div>

      <div className="mt-[20px]">
        <AccessSecondaryButton
          className="w-full lg:w-[190px]"
          onClick={() => navigate(accessHref("signin"))}
        >
          {c.signOut}
        </AccessSecondaryButton>
      </div>
    </AccessCard>
  );
}
