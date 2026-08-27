import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINACCESS_COPY } from "../access.copy";
import {
  ADMIN_ACCESS_ADMIN,
  ADMIN_ACCESS_ORG,
  ADMIN_ACCESS_PASSWORD_MASK,
} from "../access.mock";
import { accessHref } from "../accessStates";

/** AD-00D · Concrete Access States (1239:45): the #fafcfb board holding the
 *  three 760x720 spec cards — Company Admin sign in, Password recovery and
 *  First-time Admin setup — each with its fields, its action pair and the
 *  tinted state notes that name the edge cases.
 *
 *  AD-00D uses its own slightly cooler green ramp (#0a5740 / #13332b /
 *  #63756e / #d1e3db) rather than AD-00A/AD-00B's; both are kept verbatim.
 *  Each card's action pair navigates to the live state it describes, so the
 *  board doubles as the index for the executable screens its subtitle
 *  promises. */

function BoardCard({
  pill,
  title,
  subtitle,
  footer,
  children,
}: {
  pill: string;
  title: string;
  subtitle: string;
  footer: string;
  children: ReactNode;
}) {
  return (
    <div className="flex shrink-0 flex-col rounded-[14px] border border-[#d1e3db] bg-white p-[19px] lg:h-[720px] lg:w-[760px]">
      <span className="self-start rounded-[12px] bg-[#edf7f2] px-[9px] py-[5px] text-[10px] font-semibold text-[#0a5740]">
        {pill}
      </span>
      <p className="mt-[16px] text-[19px] font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="mt-[5px] text-[11px] text-[#63756e]">{subtitle}</p>
      <div className="mt-[33px] flex flex-col gap-[15px]">{children}</div>
      <p className="mt-[24px] text-[10px] text-[#63756e] lg:mt-auto">
        {footer}
      </p>
    </div>
  );
}

function BoardField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="text-[11px] font-semibold text-[#13332b]">{label}</p>
      <p className="flex h-[42px] items-center rounded-[8px] bg-[#edf7f2] px-[11px] text-[11px] text-[#63756e]">
        {value}
      </p>
    </div>
  );
}

const BOARD_NOTE_TONE = {
  mint: "bg-[#edf7f2]",
  blue: "bg-[#ebf5fc]",
  amber: "bg-[#fff5db]",
  red: "bg-[#fcebe8]",
} as const;

function BoardNote({
  tone,
  title,
  body,
}: {
  tone: keyof typeof BOARD_NOTE_TONE;
  title: string;
  body: string;
}) {
  return (
    <div
      className={`flex flex-col gap-[9px] rounded-[10px] p-[11px] ${BOARD_NOTE_TONE[tone]}`}
    >
      <p className="text-[11px] font-semibold text-[#13332b]">{title}</p>
      <p className="text-[10px] leading-[1.4] text-[#63756e]">{body}</p>
    </div>
  );
}

function BoardActions({
  secondary,
  primary,
}: {
  secondary: { label: string; onClick: () => void };
  primary: { label: string; onClick: () => void };
}) {
  return (
    <div className="flex flex-wrap items-center gap-[15px]">
      <button
        type="button"
        onClick={secondary.onClick}
        className="flex h-[34px] items-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b] hover:bg-[#f4f9f7]"
      >
        {secondary.label}
      </button>
      <button
        type="button"
        onClick={primary.onClick}
        className="flex h-[34px] items-center rounded-[8px] border border-[#0a5740] bg-[#0a5740] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#083d2d]"
      >
        {primary.label}
      </button>
    </div>
  );
}

export function AccessStatesBoard() {
  const navigate = useNavigate();
  const copy = useSectionCopy(ADMINACCESS_COPY);
  const c = copy.board;

  const profile = [
    ADMIN_ACCESS_ADMIN.name,
    ADMIN_ACCESS_ADMIN.phone,
    ADMIN_ACCESS_ADMIN.preferredLanguage,
  ].join(" · ");

  return (
    <div className="flex w-full flex-col rounded-[16px] border border-[#d1e3db] bg-[#fafcfb] p-[16px] lg:p-[23px]">
      <p className="text-[10px] font-semibold text-[#0a5740]">{c.eyebrow}</p>
      {/* This board IS the page under ?state=states, so its title carries the
          document heading — the access route renders outside AdminShell and
          has no header above it. */}
      <h1 className="mt-[16px] text-[20px] font-semibold text-[#13332b] lg:text-[23px]">
        {c.title}
      </h1>
      <p className="mt-[8px] text-[11px] text-[#63756e]">{c.subtitle}</p>

      <div className="mt-[20px] flex flex-col gap-[24px] lg:mt-[36px] lg:flex-row lg:gap-[60px] lg:overflow-x-auto lg:pb-[8px]">
        <BoardCard
          pill={c.signIn.pill}
          title={c.signIn.title}
          subtitle={c.signIn.subtitle}
          footer={c.signIn.footer}
        >
          <BoardField
            label={copy.signIn.emailLabel}
            value={ADMIN_ACCESS_ADMIN.email}
          />
          <BoardField
            label={copy.signIn.passwordLabel}
            value={ADMIN_ACCESS_PASSWORD_MASK}
          />
          <BoardNote
            tone="mint"
            title={copy.signIn.tenantTitle}
            body={copy.signIn.tenantBody.replace("{company}", ADMIN_ACCESS_ORG)}
          />
          <BoardActions
            secondary={{
              label: copy.signIn.forgotPassword,
              onClick: () => navigate(accessHref("reset")),
            }}
            primary={{
              label: copy.signIn.signIn,
              onClick: () => navigate("/admin"),
            }}
          />
          <BoardNote
            tone="red"
            title={copy.signIn.validationTitle}
            body={copy.signIn.validationBody}
          />
        </BoardCard>

        <BoardCard
          pill={c.reset.pill}
          title={c.reset.title}
          subtitle={c.reset.subtitle}
          footer={c.reset.footer}
        >
          <BoardField
            label={copy.recovery.accountEmailLabel}
            value={ADMIN_ACCESS_ADMIN.email}
          />
          <BoardNote
            tone="blue"
            title={copy.recovery.sentTitle}
            body={copy.recovery.sentBody}
          />
          <BoardField
            label={copy.recovery.newPasswordLabel}
            value={copy.recovery.newPasswordHint}
          />
          <BoardField
            label={copy.recovery.confirmPasswordLabel}
            value={copy.recovery.confirmPasswordHint}
          />
          <BoardActions
            secondary={{
              label: copy.recovery.resendLink,
              onClick: () => navigate(accessHref("expired")),
            }}
            primary={{
              label: copy.recovery.updatePassword,
              onClick: () => navigate(accessHref("reset-success")),
            }}
          />
          <BoardNote
            tone="amber"
            title={copy.recovery.expiredTitle}
            body={copy.recovery.expiredBody}
          />
        </BoardCard>

        <BoardCard
          pill={c.firstLogin.pill}
          title={c.firstLogin.title}
          subtitle={c.firstLogin.subtitle}
          footer={c.firstLogin.footer}
        >
          <BoardField
            label={copy.setup.companyLabel}
            value={copy.setup.companyValue.replace(
              "{company}",
              ADMIN_ACCESS_ORG,
            )}
          />
          <BoardField label={copy.setup.profileLabel} value={profile} />
          <BoardField
            label={copy.setup.notificationLabel}
            value={copy.setup.notificationValue}
          />
          <BoardNote
            tone="mint"
            title={copy.setup.termsTitle}
            body={copy.setup.termsBody}
          />
          <BoardActions
            secondary={{
              label: copy.setup.signOut,
              onClick: () => navigate(accessHref("signin")),
            }}
            primary={{
              label: copy.setup.completeSetup,
              onClick: () => navigate("/admin"),
            }}
          />
          <BoardNote
            tone="red"
            title={copy.setup.mismatchTitle}
            body={copy.setup.mismatchBody}
          />
        </BoardCard>
      </div>
    </div>
  );
}
