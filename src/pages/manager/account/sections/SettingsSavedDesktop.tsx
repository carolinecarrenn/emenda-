import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY, SAVED_ROWS } from "../accountData";
import { AccountDesktopLinkButton } from "./AccountButtons";
import {
  OutcomeDesktopActions,
  OutcomeDesktopCard,
  OutcomeDesktopPill,
} from "./OutcomeDesktopCard";

/* MD-18C Settings Saved (1252:13933…1252:13948): one 840x430 white card
   centred in the content column — the 296x38 mint "SAVED" pill (1252:13934),
   the 24px centred outcome headline (1252:13936), the centred body line
   (1252:13937), the label/value rows on a 38px pitch inset 70px
   (1252:13938…1252:13945), the centred boundary sentence (1252:13946) and the
   dark 170x40 "Back to Settings" pill 26px under the card (1252:13947).
   The workspace line and the display-only footnote come from the canonical
   EM-18C content, which the desktop frame folds into the same card. */
export function SettingsSavedDesktop() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden lg:block">
      <OutcomeDesktopCard
        width="w-[840px]"
        minHeight="min-h-[430px]"
        padding="px-[70px]"
      >
        <OutcomeDesktopPill>{c.saved.desktopBadge}</OutcomeDesktopPill>

        <h2 className="mt-[30px] text-center text-[24px] leading-[30px] font-bold text-brand-deep">
          {c.saved.title}
        </h2>
        <p className="mt-[20px] text-center text-[13px] leading-[19px] text-[#65746d]">
          {MANAGER_IDENTITY.organization} · {MANAGER_IDENTITY.facility} ·{" "}
          {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
        </p>

        <p className="mt-[34px] text-center text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#65746d] uppercase">
          {c.saved.updatedPreferences}
        </p>
        <dl className="mt-[12px]">
          {SAVED_ROWS.map((row) => (
            <div
              key={row.id}
              className="flex h-[38px] items-center justify-between gap-6"
            >
              <dt className="text-[12px] leading-[18px] text-[#65746d]">
                {c.saved.rows[row.id]}
              </dt>
              <dd className="text-right text-[12px] leading-[18px] text-brand-deep">
                {row.value ??
                  (row.id === "notifications"
                    ? c.saved.notificationsValue
                    : c.saved.reportDefaultsValue)}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-[26px] text-center text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#0c513b] uppercase">
          {c.saved.boundaryTitle}
        </p>
        <p className="mt-[8px] text-center text-[12px] leading-[18px] font-semibold text-brand-deep">
          {c.saved.boundaryBody}
        </p>
        <p className="mt-[10px] text-center text-[11px] leading-[16px] text-[#65746d]">
          {c.saved.footnote}
        </p>
      </OutcomeDesktopCard>

      <OutcomeDesktopActions className="mx-auto mt-[26px] w-[840px] justify-start px-[60px]">
        <AccountDesktopLinkButton
          to="/manager/settings"
          tone="dark"
          className="w-[170px]"
        >
          {c.saved.backToSettings}
        </AccountDesktopLinkButton>
      </OutcomeDesktopActions>
    </div>
  );
}
