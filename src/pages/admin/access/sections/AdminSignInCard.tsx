import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { ADMINACCESS_COPY } from "../access.copy";
import {
  ADMIN_ACCESS_ADMIN,
  ADMIN_ACCESS_LANGUAGE_TAG,
  ADMIN_ACCESS_ORG,
  ADMIN_ACCESS_PASSWORD_MASK,
} from "../access.mock";
import { accessHref } from "../accessStates";
import {
  AccessBrand,
  AccessCard,
  AccessField,
  AccessFieldLabel,
  AccessNote,
  AccessPrimaryButton,
  AccessSecondaryButton,
  AccessSubtitle,
  AccessTitle,
} from "./AccessPrimitives";

/** AD-00B · Admin Sign In (1249:4928) — 580px card at y=120: EMENDA, "Masuk
 *  sebagai Company Admin", the 44px email and password fields, the 190px
 *  "Lupa kata sandi" door, the full-width "Masuk" action, the 220px
 *  "Ubah bahasa · ID" door and the mint tenant-scope block.
 *
 *  `invalid` is AD-00D card 1 "Validation state" (1239:67): a wrong password
 *  keeps the email value and offers a retry instead of clearing the form, so
 *  the fields stay populated and the red note joins the card. */
export function AdminSignInCard({ invalid = false }: { invalid?: boolean }) {
  const navigate = useNavigate();
  const c = useSectionCopy(ADMINACCESS_COPY).signIn;
  const { language } = useLanguage();

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
          <label htmlFor="admin-access-email">{c.emailLabel}</label>
        </AccessFieldLabel>
        <AccessField
          id="admin-access-email"
          type="email"
          autoComplete="username"
          defaultValue={ADMIN_ACCESS_ADMIN.email}
        />
      </div>

      <div className="mt-[20px] flex flex-col gap-[8px]">
        <AccessFieldLabel>
          <label htmlFor="admin-access-password">{c.passwordLabel}</label>
        </AccessFieldLabel>
        <AccessField
          id="admin-access-password"
          type="password"
          autoComplete="current-password"
          defaultValue={ADMIN_ACCESS_PASSWORD_MASK}
        />
      </div>

      <div className="mt-[18px]">
        <AccessSecondaryButton
          className="w-full lg:w-[190px]"
          onClick={() => navigate(accessHref("reset"))}
        >
          {c.forgotPassword}
        </AccessSecondaryButton>
      </div>

      <div className="mt-[20px]">
        <AccessPrimaryButton className="w-full" onClick={() => navigate("/admin")}>
          {c.signIn}
        </AccessPrimaryButton>
      </div>

      <div className="mt-[18px]">
        <AccessSecondaryButton
          className="w-full lg:w-[220px]"
          onClick={() => navigate(accessHref("language"))}
        >
          {`${c.changeLanguage} · ${ADMIN_ACCESS_LANGUAGE_TAG[language]}`}
        </AccessSecondaryButton>
      </div>

      {invalid ? (
        <div className="mt-[18px]">
          <AccessNote
            tone="red"
            title={c.validationTitle}
            body={c.validationBody}
          />
        </div>
      ) : null}

      <div className="mt-[22px]">
        <AccessNote
          tone="mint"
          title={c.scopeTitle.replace("{company}", ADMIN_ACCESS_ORG)}
          body={c.scopeBody}
        />
      </div>
    </AccessCard>
  );
}
