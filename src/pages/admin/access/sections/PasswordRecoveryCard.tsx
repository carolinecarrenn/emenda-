import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINACCESS_COPY } from "../access.copy";
import { ADMIN_ACCESS_ADMIN } from "../access.mock";
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

export type RecoveryVariant = "sent" | "expired" | "success";

/** AD-00D card 2 · Password recovery (1239:71) as the executable screen the
 *  frame's own subtitle asks for, drawn in the AD-00B card idiom.
 *
 *  sent     — blue "Reset email sent" (1239:79); the secure link is live.
 *  expired  — amber "Expired link" (1239:92); "Update password" is dead, so
 *             "Resend link" is the single clear path the note demands.
 *  success  — AD-00 step 02 "Success · Return to sign in" (1226:2464); the
 *             card footer's promise that no dashboard session is created. */
export function PasswordRecoveryCard({
  variant,
}: {
  variant: RecoveryVariant;
}) {
  const navigate = useNavigate();
  const c = useSectionCopy(ADMINACCESS_COPY).recovery;

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
          <label htmlFor="admin-access-account-email">
            {c.accountEmailLabel}
          </label>
        </AccessFieldLabel>
        <AccessField
          id="admin-access-account-email"
          type="email"
          autoComplete="username"
          defaultValue={ADMIN_ACCESS_ADMIN.email}
        />
      </div>

      <div className="mt-[20px]">
        {variant === "sent" ? (
          <AccessNote tone="blue" title={c.sentTitle} body={c.sentBody} />
        ) : null}
        {variant === "expired" ? (
          <AccessNote tone="amber" title={c.expiredTitle} body={c.expiredBody} />
        ) : null}
        {variant === "success" ? (
          <AccessNote tone="mint" title={c.successTitle} body={c.successBody} />
        ) : null}
      </div>

      {variant === "success" ? (
        <div className="mt-[20px]">
          <AccessPrimaryButton
            className="w-full"
            onClick={() => navigate(accessHref("signin"))}
          >
            {c.backToSignIn}
          </AccessPrimaryButton>
        </div>
      ) : (
        <>
          <div className="mt-[20px] flex flex-col gap-[8px]">
            <AccessFieldLabel>
              <label htmlFor="admin-access-new-password">
                {c.newPasswordLabel}
              </label>
            </AccessFieldLabel>
            <AccessField
              id="admin-access-new-password"
              type="password"
              autoComplete="new-password"
              defaultValue=""
              placeholder={c.newPasswordHint}
            />
          </div>

          <div className="mt-[20px] flex flex-col gap-[8px]">
            <AccessFieldLabel>
              <label htmlFor="admin-access-confirm-password">
                {c.confirmPasswordLabel}
              </label>
            </AccessFieldLabel>
            <AccessField
              id="admin-access-confirm-password"
              type="password"
              autoComplete="new-password"
              defaultValue=""
              placeholder={c.confirmPasswordHint}
            />
          </div>

          <div className="mt-[18px]">
            <AccessSecondaryButton
              className="w-full lg:w-[190px]"
              onClick={() => navigate(accessHref("reset"))}
            >
              {c.resendLink}
            </AccessSecondaryButton>
          </div>

          <div className="mt-[20px]">
            <AccessPrimaryButton
              className="w-full"
              disabled={variant === "expired"}
              onClick={() => navigate(accessHref("reset-success"))}
            >
              {c.updatePassword}
            </AccessPrimaryButton>
          </div>
        </>
      )}

      <div className="mt-[22px]">
        <AccessFooterNote>{c.footer}</AccessFooterNote>
      </div>
    </AccessCard>
  );
}
