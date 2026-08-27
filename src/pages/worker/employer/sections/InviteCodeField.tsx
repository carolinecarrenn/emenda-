import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "../employer.copy";

interface InviteCodeFieldProps {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

/* INVITE CODE field — WD-49 nodes 1182:641 / 1182:642: 11px semibold muted
   uppercase label over a 680px, 52px-tall white input, radius 10, 1px
   #d1ded6 border, 14px #0f1f1a value inset 15px. Mobile W-49 (nodes
   917:25 / 917:26) shrinks the label to 10px and the 46px input to radius
   12 with a 12px value inset 13px. */
export function InviteCodeField({
  value,
  onChange,
  disabled = false,
  className = "",
}: InviteCodeFieldProps) {
  const c = useSectionCopy(EMPLOYER_COPY);

  return (
    <div className={className}>
      <label
        htmlFor="employer-invite-code"
        className="text-[10px] font-semibold text-lp-muted lg:text-[11px]"
      >
        {c.connect.inviteCodeLabel}
      </label>
      <input
        id="employer-invite-code"
        type="text"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.value)}
        className="mt-[3px] block h-[46px] w-full rounded-[12px] border border-lp-line bg-white px-[13px] text-[12px] text-lp-ink outline-none focus:border-lp-green disabled:text-lp-muted lg:mt-[6px] lg:h-[52px] lg:rounded-[10px] lg:px-[15px] lg:text-[14px]"
      />
    </div>
  );
}
