import { useCommonCopy } from "@/i18n/common";
import { ActionButton } from "./ActionButton";

interface ConfirmDialogProps {
  title: string;
  body: string;
  /** Safe action — WD-51A fills it, W-51A / W-50E outline it on mobile. */
  safeLabel: string;
  destructiveLabel: string;
  onSafe: () => void;
  onDestructive: () => void;
}

/* Confirmation modal — WD-51A nodes 1182:1295-1302 (reused by the WD-50E
   decline confirmation): #0d1712 scrim at 34%, centered 520px white card,
   radius 18, 27px inset, 22px semibold title, 14px muted body, then the safe
   filled "Keep connected" above the red-outlined destructive action.
   Mobile (W-50E nodes 943:82/943:83, W-51A nodes 938:238/938:239) draws a
   334px card at a 28px gutter over a 28% black scrim: an 18px title, a 12px
   muted body and — the other way round from desktop — the outlined safe
   action above the filled destructive one. */
export function ConfirmDialog({
  title,
  body,
  safeLabel,
  destructiveLabel,
  onSafe,
  onDestructive,
}: ConfirmDialogProps) {
  const common = useCommonCopy();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-[28px] lg:px-[20px]">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={onSafe}
        className="absolute inset-0 bg-black/[28%] lg:bg-[#0d1712]/[34%]"
      />
      <div className="relative w-full rounded-[18px] border border-lp-line bg-white px-[19px] pt-[21px] pb-[18px] lg:w-[520px] lg:px-[27px] lg:pt-[27px] lg:pb-[27px]">
        <p className="text-[18px] font-semibold text-lp-ink lg:text-[22px]">
          {title}
        </p>
        <p className="mt-[10px] min-h-[70px] text-[12px] leading-[16px] text-lp-muted lg:mt-[14px] lg:min-h-0 lg:text-[14px] lg:leading-normal">
          {body}
        </p>
        <div className="mt-[46px] space-y-[10px] lg:mt-[30px]">
          <ActionButton
            tone="confirmSafe"
            width={464}
            mobileHeight={48}
            onClick={onSafe}
          >
            {safeLabel}
          </ActionButton>
          <ActionButton
            tone="confirmDestructive"
            width={464}
            mobileHeight={48}
            onClick={onDestructive}
          >
            {destructiveLabel}
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
