import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINACCESS_COPY } from "../access.copy";
import { ADMIN_ACCESS_ADMIN, ADMIN_ACCESS_ORG } from "../access.mock";
import { accessHref } from "../accessStates";
import {
  AccessBrand,
  AccessCard,
  AccessField,
  AccessFieldLabel,
  AccessFooterNote,
  AccessNote,
  AccessPrimaryButton,
  AccessSecondaryButton,
  AccessSubtitle,
  AccessTitle,
} from "./AccessPrimitives";

/** AD-00D card 3 · First-time Admin setup (1239:96), the executable form of
 *  AD-00 step 03: the read-only company row, the admin profile, the
 *  notification preference, the "Terms & consent" gate, then "Sign out" /
 *  "Complete setup". Completing lands on AD-01, as the card footer states. */
export function FirstTimeSetupCard() {
  const navigate = useNavigate();
  const c = useSectionCopy(ADMINACCESS_COPY).setup;

  const profile = [
    ADMIN_ACCESS_ADMIN.name,
    ADMIN_ACCESS_ADMIN.phone,
    ADMIN_ACCESS_ADMIN.preferredLanguage,
  ].join(" · ");

  return (
    <AccessCard width={580}>
      <AccessBrand />
      <div className="mt-[28px] lg:mt-[39px]">
        <AccessTitle>{c.title}</AccessTitle>
      </div>
      <div className="mt-[8px] lg:mt-[7px]">
        <AccessSubtitle>{c.subtitle}</AccessSubtitle>
      </div>

      <div className="mt-[28px] flex flex-col gap-[8px] lg:mt-[43px]">
        <AccessFieldLabel>
          <label htmlFor="admin-access-company">{c.companyLabel}</label>
        </AccessFieldLabel>
        <AccessField
          id="admin-access-company"
          readOnly
          defaultValue={c.companyValue.replace("{company}", ADMIN_ACCESS_ORG)}
        />
      </div>

      <div className="mt-[20px] flex flex-col gap-[8px]">
        <AccessFieldLabel>
          <label htmlFor="admin-access-profile">{c.profileLabel}</label>
        </AccessFieldLabel>
        <AccessField id="admin-access-profile" defaultValue={profile} />
      </div>

      <div className="mt-[20px] flex flex-col gap-[8px]">
        <AccessFieldLabel>
          <label htmlFor="admin-access-notifications">
            {c.notificationLabel}
          </label>
        </AccessFieldLabel>
        <AccessField
          id="admin-access-notifications"
          defaultValue={c.notificationValue}
        />
      </div>

      <div className="mt-[20px]">
        <AccessNote tone="mint" title={c.termsTitle} body={c.termsBody} />
      </div>

      <div className="mt-[18px]">
        <AccessSecondaryButton
          className="w-full lg:w-[190px]"
          onClick={() => navigate(accessHref("signin"))}
        >
          {c.signOut}
        </AccessSecondaryButton>
      </div>

      <div className="mt-[20px]">
        <AccessPrimaryButton
          className="w-full"
          onClick={() => navigate("/admin")}
        >
          {c.completeSetup}
        </AccessPrimaryButton>
      </div>

      <div className="mt-[22px]">
        <AccessFooterNote>{c.footer}</AccessFooterNote>
      </div>
    </AccessCard>
  );
}
