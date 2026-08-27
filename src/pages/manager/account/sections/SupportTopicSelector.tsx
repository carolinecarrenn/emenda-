import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { SUPPORT_TOPICS, type SupportTopicId } from "../accountData";

/* EM-19 form Topic line (1133:81) made selectable: the mock's
   "Topic · Access / workflow question" stays verbatim and opens the manager
   mobile bottom sheet (390px variant) or the desktop dropdown. */
export function SupportTopicSelector({
  value,
  onChange,
  disabled = false,
  variant = "inline",
}: {
  value: SupportTopicId;
  onChange: (topic: SupportTopicId) => void;
  disabled?: boolean;
  /** MD-19 renders the selector inside its own labelled 44px field, so the
   *  "Topic ·" prefix moves out of the control (1252:14025…1252:14027). */
  variant?: "inline" | "field";
}) {
  const [open, setOpen] = useState(false);
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  const choose = (topic: SupportTopicId) => {
    onChange(topic);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 text-left disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span
          className={
            variant === "field"
              ? "truncate text-[13px] leading-[19px] text-brand-deep"
              : "text-[10px] font-semibold text-[#083d2d] lg:text-[12px]"
          }
        >
          {variant === "field"
            ? c.support.topicOptions[value]
            : `${c.support.topicLabel} · ${c.support.topicOptions[value]}`}
        </span>
        <ChevronDown size={14} strokeWidth={2} className="text-[#0c513b]" />
      </button>

      {open && (
        <>
          {/* Desktop dropdown */}
          <div
            className={`absolute z-20 hidden rounded-[10px] border border-[#d1e0d9] bg-white py-[6px] shadow-[0_10px_28px_rgba(8,61,45,0.14)] lg:block ${
              variant === "field"
                ? /* MD-19 gives the selector its own 406px labelled field
                     (1252:14026), so the list opens flush with the field
                     rather than floating off its right edge. */
                  "top-[36px] left-[-16px] w-[406px]"
                : "top-[26px] right-0 w-[280px]"
            }`}
          >
            {SUPPORT_TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => choose(topic)}
                className={`block w-full px-[14px] py-[9px] text-left text-[12px] hover:bg-[#e6f4ed] ${
                  topic === value
                    ? "font-semibold text-brand-deep"
                    : "text-[#65746d]"
                }`}
              >
                {c.support.topicOptions[topic]}
              </button>
            ))}
          </div>

          {/* Mobile bottom sheet (EM-xx 390px variant) */}
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              aria-label={c.support.chooseTopic}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-[#083d2d]/30"
            />
            <div className="absolute inset-x-0 bottom-0 rounded-t-[16px] border-t border-[#d1e0d9] bg-white px-[20px] pt-[12px] pb-[26px]">
              <span className="mx-auto block h-[4px] w-[44px] rounded-full bg-[#d1e0d9]" />
              <p className="mt-[14px] text-[10px] font-bold text-[#094033] uppercase">
                {c.support.chooseTopic}
              </p>
              <div className="mt-[12px] flex flex-col gap-[8px]">
                {SUPPORT_TOPICS.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => choose(topic)}
                    className={`flex min-h-[44px] items-center rounded-[10px] border px-[14px] text-left text-[11px] ${
                      topic === value
                        ? "border-[#0c513b] bg-[#e6f4ed] font-semibold text-brand-deep"
                        : "border-[#d1e0d9] bg-white text-[#65746d]"
                    }`}
                  >
                    {c.support.topicOptions[topic]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
