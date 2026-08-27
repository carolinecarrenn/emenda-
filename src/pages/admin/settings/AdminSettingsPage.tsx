import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "../shell/AdminShell";
import {
  COMPANY_PROFILE,
  OPERATIONAL_DEFAULTS,
  type CompanyProfileKey,
  type OperationalDefaultKey,
} from "./settings.mock";
import { SettingsIntro } from "./sections/SettingsIntro";
import { CompanyProfileCard } from "./sections/CompanyProfileCard";
import { OperationalDefaultsCard } from "./sections/OperationalDefaultsCard";
import { AdminAccessCard } from "./sections/AdminAccessCard";
import { SaveChangesDialog } from "./sections/SaveChangesDialog";
import { ResetRulesDialog } from "./sections/ResetRulesDialog";
import { SettingsStatesBoard } from "./sections/StatePanel";
import { UnsavedSettingsPanel } from "./sections/UnsavedSettingsPanel";
import { ConfirmApplyPanel } from "./sections/ConfirmApplyPanel";
import { ResetRulesPanel } from "./sections/ResetRulesPanel";
import { SettingsChangeFlow } from "./sections/SettingsChangeFlow";
import { LanguageSettingsCard } from "./sections/LanguageSettingsCard";

type SettingsDialogKind = "save" | "reset" | null;

/** Company Settings — Figma page 06 · Company Admin Experience (1182:5690).
 *
 *  AD-09  (1225:687)   the base screen: intro row + the 360 / 368 / 384 card
 *                      triple that fills the 1144 admin column.
 *  AD-09B (1226:1175)  ?state=confirm-save · ?state=confirm-reset — the two
 *                      confirmations, also opened by the real buttons.
 *  AD-09C (1226:3975)  ?state=flow — edit → validate → confirm → apply.
 *  AD-09D (1239:748)   ?state=unsaved · ?state=confirm-apply ·
 *                      ?state=reset-rules — the detailed operational states.
 *  AD-09E (1249:4994)  ?state=language — the global app-language screen.
 *
 *  Scope (AD-SCOPE board, AD-09C flow rule 1226:4069): nothing here alters
 *  global roles, tenants, billing, licenses or platform feature flags.
 */
export function AdminSettingsPage() {
  const state = useScreenState();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(COMPANY_PROFILE);
  const [operations, setOperations] = useState(OPERATIONAL_DEFAULTS);
  // The last saved configuration. AD-09C step 04 only clears the dirty state
  // on a successful save, so it is tracked separately from the live form.
  const [saved, setSaved] = useState({
    profile: COMPANY_PROFILE,
    operations: OPERATIONAL_DEFAULTS,
  });
  const [openedDialog, setOpenedDialog] = useState<SettingsDialogKind>(null);

  // Each AD-09B card has a stable URL; a dialog opened from the URL closes by
  // returning to the plain settings route, one opened by a button closes in
  // component state.
  const urlDialog: SettingsDialogKind =
    state === "confirm-save"
      ? "save"
      : state === "confirm-reset"
        ? "reset"
        : null;
  const dialog = openedDialog ?? urlDialog;

  function closeDialog() {
    setOpenedDialog(null);
    if (urlDialog) navigate("/admin/settings");
  }

  const dirty =
    JSON.stringify(profile) !== JSON.stringify(saved.profile) ||
    JSON.stringify(operations) !== JSON.stringify(saved.operations);

  /** AD-09C step 04 — persist the edits and clear the dirty state. */
  function applyChanges() {
    setSaved({ profile, operations });
    closeDialog();
  }

  /** AD-09B "Reset rules" — operational defaults return to company defaults;
   *  nothing else in the workspace is touched (AD-09D 1239:813). */
  function resetRules() {
    setOperations(OPERATIONAL_DEFAULTS);
    setSaved((current) => ({
      profile: current.profile,
      operations: OPERATIONAL_DEFAULTS,
    }));
    closeDialog();
  }

  let body;
  if (state === "unsaved") {
    body = (
      <SettingsStatesBoard>
        <UnsavedSettingsPanel />
      </SettingsStatesBoard>
    );
  } else if (state === "confirm-apply") {
    body = (
      <SettingsStatesBoard>
        <ConfirmApplyPanel />
      </SettingsStatesBoard>
    );
  } else if (state === "reset-rules") {
    body = (
      <SettingsStatesBoard>
        <ResetRulesPanel />
      </SettingsStatesBoard>
    );
  } else if (state === "flow") {
    body = <SettingsChangeFlow />;
  } else if (state === "language") {
    body = (
      <LanguageSettingsCard
        onCancel={() => navigate("/admin/settings")}
        onApplied={() => navigate("/admin/settings")}
      />
    );
  } else {
    body = (
      <div className="flex flex-col gap-[12px]">
        <SettingsIntro
          dirty={dirty}
          onResetRules={() => setOpenedDialog("reset")}
          onSaveChanges={() => setOpenedDialog("save")}
        />
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start">
          <CompanyProfileCard
            values={profile}
            onChange={(key: CompanyProfileKey, next) =>
              setProfile((current) => ({ ...current, [key]: next }))
            }
            onSave={() => setOpenedDialog("save")}
            onCancel={() => setProfile(saved.profile)}
          />
          <OperationalDefaultsCard
            values={operations}
            onChange={(key: OperationalDefaultKey, next) =>
              setOperations((current) => ({ ...current, [key]: next }))
            }
          />
          <AdminAccessCard
            onResetRules={() => setOpenedDialog("reset")}
            onChangeLanguage={() => navigate("/admin/settings?state=language")}
          />
        </div>
      </div>
    );
  }

  return (
    <AdminShell>
      <div className="w-full max-w-[1144px]">{body}</div>

      {dialog === "save" && (
        <SaveChangesDialog onCancel={closeDialog} onConfirm={applyChanges} />
      )}
      {dialog === "reset" && (
        <ResetRulesDialog onKeep={closeDialog} onReset={resetRules} />
      )}
    </AdminShell>
  );
}
