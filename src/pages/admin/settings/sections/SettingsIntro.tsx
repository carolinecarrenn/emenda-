import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { SettingsButton } from "./SettingsCard";

/* AD-09 "Frame" intro row (1225:963): a 44px row inside the 1144 column —
   "Manage company profile, rules, and access" 22px bold #17362e over the 9px
   #65746d scope line, with the white "Reset rules" and dark "Save changes"
   buttons pinned right (radius 10, 32px tall, 11px semibold).

   When the form is dirty the AD-09D "Unsaved changes" note (1239:766) is
   raised here, which is the indicator AD-09C step 02 requires. */
export function SettingsIntro({
  dirty,
  onResetRules,
  onSaveChanges,
}: {
  dirty: boolean;
  onResetRules: () => void;
  onSaveChanges: () => void;
}) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-center">
        <div className="flex min-w-0 flex-1 flex-col gap-[7px]">
          <p className="text-[22px] leading-none font-bold text-[#17362e]">
            {c.intro.title}
          </p>
          <p className="text-[11px] leading-none text-[#65746d] lg:text-[9px]">
            {c.intro.subtitle}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-[12px] lg:mr-[33px]">
          <SettingsButton tone="outline" onClick={onResetRules}>
            {c.intro.resetRules}
          </SettingsButton>
          <SettingsButton tone="dark" onClick={onSaveChanges}>
            {c.intro.saveChanges}
          </SettingsButton>
        </div>
      </div>

      {dirty && (
        <div className="rounded-[10px] bg-[#fff5db] px-[11px] py-[11px]">
          <p className="text-[11px] leading-none font-semibold text-[#13332b]">
            {c.unsaved.noteTitle}
          </p>
          <p className="mt-[9px] text-[10px] leading-[14px] text-[#63756e]">
            {c.unsaved.noteBody}
          </p>
        </div>
      )}
    </div>
  );
}
