import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { SKILLS_COPY, levelLabel } from "../skills.copy";
import {
  DangerButton,
  SheetCancel,
  SheetOption,
  SheetOverlay,
} from "../../experience/careerUi";
import { PROFICIENCY_LEVELS, type ProficiencyLevel } from "../skillsMock";

function SheetPrimary({
  label,
  onClick,
  disabled = false,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`h-[48px] w-full shrink-0 rounded-[12px] text-[13px] font-semibold text-white lg:h-[42px] lg:text-[12px] ${
        disabled
          ? "cursor-not-allowed bg-[#9dbbad]"
          : "bg-[#0c664b] hover:bg-[#0b5842]"
      }`}
    >
      {label}
    </button>
  );
}

const sheetInputClass =
  "h-[52px] w-full rounded-[12px] border border-[#d1ddd7] bg-white px-[16px] text-[13px] text-[#17231f] outline-none placeholder:text-[#65746d] focus:border-[#0b684f] lg:h-[42px]";

const sheetLabelClass =
  "text-[10px] font-semibold tracking-[0.06em] text-[#65746d] uppercase";

/** WD-27D/F — Add / Edit Skill sheet. */
export function SkillSheet({
  mode,
  initialValue = "",
  onSave,
  onRemove,
  onClose,
}: {
  mode: "add" | "edit";
  initialValue?: string;
  onSave: (value: string) => void;
  onRemove?: () => void;
  onClose: () => void;
}) {
  const c = useSectionCopy(SKILLS_COPY);
  const common = useCommonCopy();
  const [value, setValue] = useState(initialValue);

  return (
    <SheetOverlay
      title={mode === "add" ? c.addSkillTitle : c.editSkillTitle}
      subtitle={mode === "add" ? c.addSkillSubtitle : c.editSkillSubtitle}
      onClose={onClose}
    >
      <p className={sheetLabelClass}>{c.skillLabel}</p>
      <input
        type="text"
        value={value}
        placeholder={c.skillPlaceholder}
        onChange={(e) => setValue(e.target.value)}
        className={sheetInputClass}
      />
      <div className="mt-[8px]" />
      <SheetPrimary
        label={mode === "add" ? c.addSkillAction : c.saveSkill}
        onClick={() => {
          if (value.trim() !== "") onSave(value.trim());
        }}
      />
      {mode === "edit" && onRemove && (
        <DangerButton label={c.removeSkill} onClick={onRemove} small />
      )}
      <SheetCancel label={common.action.cancel} onClick={onClose} />
    </SheetOverlay>
  );
}

/** WD-27E/G — Add / Edit Language sheet with the proficiency selector row. */
export function LanguageSheet({
  mode,
  name,
  level,
  onNameChange,
  onOpenProficiency,
  onSave,
  onRemove,
  onClose,
}: {
  mode: "add" | "edit";
  name: string;
  level: ProficiencyLevel;
  onNameChange: (name: string) => void;
  onOpenProficiency: () => void;
  onSave: () => void;
  onRemove?: () => void;
  onClose: () => void;
}) {
  const c = useSectionCopy(SKILLS_COPY);
  const common = useCommonCopy();

  return (
    <SheetOverlay
      title={mode === "add" ? c.addLanguageTitle : c.editLanguageTitle}
      subtitle={
        mode === "add" ? c.addLanguageSubtitle : c.editLanguageSubtitle
      }
      onClose={onClose}
    >
      <p className={sheetLabelClass}>{c.languageLabel}</p>
      {mode === "edit" ? (
        <div className="flex h-[42px] w-full items-center rounded-[12px] border border-[#dce5e0] bg-[#eff3f0] px-[16px] text-[13px] text-[#17231f]">
          {name}
        </div>
      ) : (
        <input
          type="text"
          value={name}
          placeholder={c.languagePlaceholder}
          onChange={(e) => onNameChange(e.target.value)}
          className={sheetInputClass}
        />
      )}
      {mode === "edit" && (
        <>
          <p className={`mt-[6px] ${sheetLabelClass}`}>{c.proficiencyLabel}</p>
          <button
            type="button"
            onClick={onOpenProficiency}
            className="flex h-[42px] w-full items-center justify-between rounded-[12px] border border-[#d1ddd7] bg-white px-[16px] text-[13px] text-[#17231f] hover:bg-[#f4f8f5]"
          >
            {levelLabel(c, level)}
            <ChevronDown size={16} className="text-[#65746d]" />
          </button>
        </>
      )}
      <div className="mt-[6px]" />
      <SheetPrimary
        label={mode === "add" ? c.addLanguageCta : c.saveLanguage}
        disabled={name.trim() === ""}
        onClick={onSave}
      />
      {mode === "edit" && onRemove ? (
        <DangerButton label={c.removeLanguage} onClick={onRemove} small />
      ) : (
        <SheetCancel label={common.action.cancel} onClick={onClose} />
      )}
    </SheetOverlay>
  );
}

/** WD-27H — Proficiency selector sheet (verbatim options + Cancel). */
export function ProficiencySheet({
  selected,
  onSelect,
  onClose,
}: {
  selected: ProficiencyLevel;
  onSelect: (level: ProficiencyLevel) => void;
  onClose: () => void;
}) {
  const c = useSectionCopy(SKILLS_COPY);
  const common = useCommonCopy();

  return (
    <SheetOverlay
      title={c.proficiencyTitle}
      subtitle={c.proficiencySubtitle}
      onClose={onClose}
    >
      {PROFICIENCY_LEVELS.map((level) => (
        <SheetOption
          key={level}
          label={levelLabel(c, level)}
          selected={level === selected}
          onClick={() => onSelect(level)}
        />
      ))}
      <SheetCancel label={common.action.cancel} onClick={onClose} />
    </SheetOverlay>
  );
}
