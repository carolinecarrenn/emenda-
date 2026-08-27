import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { INVITE_DRAFT } from "../employees.mock";

/* AD-02B "Invite employee modal" (1226:6): a 320x520 white card, radius 12,
   1px #d6e3de, 20px inset — 16px bold title over a 9px #65746d line, then five
   stacked fields (9px semibold label above a 36px input, radius 10, 1px
   #d6e3de, 10px #65746d value), closed by the outlined "Cancel" (65x32) and
   the filled #083d2d "Send invite" (88x32), 27px apart. */
export function InviteEmployeeModal({
  onCancel,
  onSendInvite,
}: {
  onCancel: () => void;
  onSendInvite: () => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  const fields: { label: string; value: string; placeholder?: boolean }[] = [
    { label: c.inviteModal.fullName, value: INVITE_DRAFT.fullName },
    { label: c.inviteModal.email, value: INVITE_DRAFT.email },
    { label: c.inviteModal.role, value: localizeTerm(INVITE_DRAFT.role, language) },
    { label: c.inviteModal.team, value: localizeTerm(INVITE_DRAFT.team, language) },
    {
      label: c.inviteModal.manager,
      value: c.inviteModal.managerPlaceholder,
      placeholder: true,
    },
  ];

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[20px]">
      <p className="pr-[32px] text-[16px] leading-none font-bold text-[#17362f]">
        {c.inviteModal.title}
      </p>
      <p className="mt-[9px] text-[11px] leading-none text-[#65746d] lg:text-[9px]">
        {c.inviteModal.subtitle}
      </p>

      <div className="mt-[22px] flex flex-col gap-[14px]">
        {fields.map((field) => (
          <label key={field.label} className="flex flex-col gap-[7px]">
            <span className="text-[9px] font-semibold text-[#65746d]">
              {field.label}
            </span>
            <input
              type="text"
              defaultValue={field.placeholder ? "" : field.value}
              placeholder={field.placeholder ? field.value : undefined}
              className="h-[36px] w-full rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[10px] text-[#65746d] outline-none placeholder:text-[#65746d]"
            />
          </label>
        ))}
      </div>

      <div className="mt-[48px] flex flex-wrap items-center gap-[27px]">
        <button
          type="button"
          onClick={onCancel}
          className="h-[32px] rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold text-[#083d2d]"
        >
          {c.inviteModal.cancel}
        </button>
        <button
          type="button"
          onClick={onSendInvite}
          className="h-[32px] rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold text-white"
        >
          {c.inviteModal.sendInvite}
        </button>
      </div>
    </div>
  );
}
