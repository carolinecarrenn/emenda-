import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import {
  COMPANY_PROFILE_ORDER,
  type CompanyProfileKey,
} from "../settings.mock";
import { SettingsButton, SettingsCard, SettingsField } from "./SettingsCard";

/* AD-09 "Company profile" (1225:970): the 360px left column — five 36px
   inputs on a 78px pitch (Company name, Industry, Address, Primary contact,
   Timezone) with the dark "Save profile" and outline "Cancel" buttons at the
   foot of the card. */
export function CompanyProfileCard({
  values,
  onChange,
  onSave,
  onCancel,
}: {
  values: Record<CompanyProfileKey, string>;
  onChange: (key: CompanyProfileKey, next: string) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  return (
    <SettingsCard
      title={c.profile.title}
      subtitle={c.profile.subtitle}
      className="lg:w-[360px] lg:shrink-0 lg:pb-[49px]"
    >
      <div className="mt-[20px] flex flex-col gap-[24px]">
        {COMPANY_PROFILE_ORDER.map((key) => (
          <SettingsField
            key={key}
            label={c.profile.labels[key]}
            value={values[key]}
            onChange={(next) => onChange(key, next)}
          />
        ))}
      </div>

      <div className="mt-[24px] flex items-center gap-[21px] lg:mt-auto">
        <SettingsButton tone="dark" onClick={onSave}>
          {c.profile.saveProfile}
        </SettingsButton>
        <SettingsButton tone="outline" onClick={onCancel}>
          {c.profile.cancel}
        </SettingsButton>
      </div>
    </SettingsCard>
  );
}
