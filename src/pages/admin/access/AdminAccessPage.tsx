import { useScreenState } from "@/hooks/useScreenState";
import { resolveAccessState } from "./accessStates";
import { AccessCanvas } from "./sections/AccessPrimitives";
import { AccessFlowBoard } from "./sections/AccessFlowBoard";
import { AccessStatesBoard } from "./sections/AccessStatesBoard";
import { AdminSignInCard } from "./sections/AdminSignInCard";
import { ChooseLanguageCard } from "./sections/ChooseLanguageCard";
import { FirstTimeSetupCard } from "./sections/FirstTimeSetupCard";
import { PasswordRecoveryCard } from "./sections/PasswordRecoveryCard";
import { PermissionMismatchCard } from "./sections/PermissionMismatchCard";

/** Company Admin access — AD-00 (1226:2426), AD-00A (1249:4862), AD-00B
 *  (1249:4928) and AD-00D (1239:45) on Figma page "06 · Company Admin
 *  Experience" (1182:5690).
 *
 *  Every access frame is drawn as a card centred on the bare #f7faf8 canvas
 *  with no sidebar and no top bar — the admin has not been admitted yet — so
 *  this route deliberately renders outside AdminShell, the way /auth/* and
 *  /manager/auth do. Entering the workspace (AD-00 step 04) is what hands the
 *  session over to the shell at /admin.
 *
 *  States follow the app's ?state= convention; see accessStates.ts for the
 *  frame each one comes from. Everything is reachable from the drawn controls:
 *  sign in → "Lupa kata sandi" → recovery → "Update password" → success →
 *  "Return to sign in"; "Ubah bahasa · ID" → the language card and its
 *  "Lanjutkan" back; setup's "Sign out" → sign in, "Complete setup" → /admin.
 *
 *  Scope (Figma AD-SCOPE board): the sign-in card states the tenant is fixed
 *  to the company — no tenant switcher, no Super Admin controls. */
export function AdminAccessPage() {
  const state = resolveAccessState(useScreenState());

  if (state === "flow" || state === "states") {
    return (
      <div className="min-h-screen bg-[#f7faf8] px-4 py-8 lg:px-[32px] lg:py-[32px]">
        {state === "flow" ? <AccessFlowBoard /> : <AccessStatesBoard />}
      </div>
    );
  }

  return <AccessCanvas>{renderAccessCard(state)}</AccessCanvas>;
}

function renderAccessCard(state: string) {
  switch (state) {
    case "language":
      return <ChooseLanguageCard />;
    case "error":
      return <AdminSignInCard invalid />;
    case "reset":
      return <PasswordRecoveryCard variant="sent" />;
    case "expired":
      return <PasswordRecoveryCard variant="expired" />;
    case "reset-success":
      return <PasswordRecoveryCard variant="success" />;
    case "setup":
      return <FirstTimeSetupCard />;
    case "denied":
      return <PermissionMismatchCard />;
    default:
      return <AdminSignInCard />;
  }
}
