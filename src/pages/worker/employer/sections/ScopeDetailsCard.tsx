import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "../employer.copy";
import { EMPLOYER_CONNECTION } from "../employerMock";

interface ScopeDetailsCardProps {
  /** Closing line: WD-50D 1203:46 consent note · WD-51D 1203:49 fail note. */
  note: string;
  className?: string;
}

/* Desktop-only scope recap for the two failure frames — WD-50D "Failed
   connection details" (node 1203:44, with its ACCESS SCOPE label 1223:9) and
   WD-51D "Failed disconnect details" (node 1203:47, label 1223:6). Both fold
   the mobile EMPLOYER card, the ACCESS SCOPE pair and the note strip into one
   820x168 tinted radius-14 card: an 11px green "EMPLOYER · <legal name>"
   eyebrow at y27 over a 13px ink block on a 16px rhythm — EMPLOYER CAN ACCESS
   and its bullet, a blank line, STAYS PRIVATE and its bullet, a blank line,
   then the note. Mobile keeps the expanded stack, so this card is lg-only. */
export function ScopeDetailsCard({
  note,
  className = "",
}: ScopeDetailsCardProps) {
  const c = useSectionCopy(EMPLOYER_COPY);

  return (
    <div className={`hidden lg:block ${className}`}>
      <p className="text-[11px] leading-[18px] font-semibold text-lp-green">
        {c.scope.accessScope}
      </p>
      <div className="min-h-[168px] rounded-[14px] border border-lp-line bg-lp-tint px-[19px] pt-[17px] pb-[8px]">
        <p className="text-[11px] leading-[20px] font-semibold text-lp-green">
          {`${c.scope.employerLabel} · ${EMPLOYER_CONNECTION.legalName}`}
        </p>
        <div className="mt-[10px] text-[13px] leading-[16px] text-lp-ink">
          <p>{c.scope.canAccessTitle}</p>
          <p>{`• ${c.scope.canAccessItems.join(" · ")}`}</p>
          <p className="mt-[16px]">{c.scope.staysPrivateTitle}</p>
          <p>{`• ${c.scope.staysPrivateItems.join(" · ")}`}</p>
          <p className="mt-[16px]">{note}</p>
        </div>
      </div>
    </div>
  );
}
