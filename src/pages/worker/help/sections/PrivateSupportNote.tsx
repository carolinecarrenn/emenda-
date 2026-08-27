import { ShieldCheck } from "lucide-react";
import { useHelpCopy } from "../help.copy";

/* Mobile W-48 privacy note (node 899:130): 350×78, radius 12, #eef5f1 fill
   with a #c7ded3 stroke, the 20px shield glyph at inset 13/17 and 10px
   #65746d copy starting at 45. It is the phone counterpart of the desktop
   PRIVATE SUPPORT rail (WD-48), sits directly under the DETAILS field and is
   hidden from the lg breakpoint up. */
export function PrivateSupportNote() {
  const c = useHelpCopy();

  return (
    <div className="flex min-h-[78px] gap-[12px] rounded-[12px] border border-[#c7ded3] bg-[#eef5f1] px-[13px] py-[11px] lg:hidden">
      <ShieldCheck
        size={20}
        strokeWidth={1.8}
        className="mt-[6px] shrink-0 text-lp-green"
      />
      <p className="text-[10px] leading-[16px] text-lp-muted">
        {c.contact.railBody}
      </p>
    </div>
  );
}
