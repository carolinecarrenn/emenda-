import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import {
  OPERATIONAL_DEFAULT_ORDER,
  type OperationalDefaultKey,
} from "../settings.mock";
import { SettingsCard, SettingsField } from "./SettingsCard";

/* AD-09 "Operational defaults" (1225:992): the 368px middle column — the five
   rules this company applies to its own reports (default report owner,
   escalation window, daily reminder time, outcome-before-close, evidence on
   resolution). The card has no buttons of its own in the frame; the intro
   row's "Save changes" / "Reset rules" pair governs it.

   Values are enum-like configuration, so they render through localizeTerm();
   anything not in the shared term table falls back to the raw string. */
export function OperationalDefaultsCard({
  values,
  onChange,
}: {
  values: Record<OperationalDefaultKey, string>;
  onChange: (key: OperationalDefaultKey, next: string) => void;
}) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);
  const { language } = useLanguage();

  return (
    <SettingsCard
      title={c.operations.title}
      subtitle={c.operations.subtitle}
      className="lg:w-[368px] lg:shrink-0"
    >
      <div className="mt-[20px] flex flex-col gap-[24px]">
        {OPERATIONAL_DEFAULT_ORDER.map((key) => (
          <SettingsField
            key={key}
            label={c.operations.labels[key]}
            value={localizeTerm(values[key], language)}
            onChange={(next) => onChange(key, next)}
          />
        ))}
      </div>
    </SettingsCard>
  );
}
