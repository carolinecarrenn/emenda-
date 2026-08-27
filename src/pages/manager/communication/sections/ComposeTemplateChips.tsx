import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import {
  MESSAGE_TEMPLATES,
  type MessageTemplateId,
} from "../communicationData";

/* EM-08 TEMPLATE chip row (797:139): a 10px caps "TEMPLATE" label over three
   28px radius-14 pills on a #d6e3de hairline — the selected one mint
   #e8f5f0, the rest white. MD-08 (1225:188–193) keeps the same three under a
   10px #65746d "Template" field label at 32px / radius 16, with the inactive
   chips in #65746d text. Picking a chip swaps the drafted Japanese and its
   Indonesian preview. */
export function ComposeTemplateChips({
  template,
  onTemplate,
  surface,
}: {
  template: MessageTemplateId;
  onTemplate: (value: MessageTemplateId) => void;
  /** "mobile" renders the EM-08 chip row, "desktop" the MD-08 field. */
  surface: "mobile" | "desktop";
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  const labels: Record<MessageTemplateId, string> = {
    "daily-report-reminder": c.compose.templates.dailyReportReminder,
    "shift-confirm": c.compose.templates.shiftConfirm,
    understanding: c.compose.templates.understanding,
  };

  if (surface === "desktop") {
    return (
      <section>
        <h2 className="text-[10px] font-semibold text-[#65746d]">
          {c.compose.card.template}
        </h2>
        <div className="mt-[3px] flex flex-wrap gap-[8px]">
          {MESSAGE_TEMPLATES.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={template === option.id}
              onClick={() => onTemplate(option.id)}
              className={`flex h-[32px] items-center justify-start rounded-[16px] border pr-[30px] pl-[14px] text-[10px] font-semibold ${
                template === option.id
                  ? "border-[#e3f0e8] bg-[#e3f0e8] text-brand-deep"
                  : "border-[#dbe3de] bg-white text-[#65746d] hover:border-brand"
              }`}
            >
              {labels[option.id]}
            </button>
          ))}
        </div>
      </section>
    );
  }

  /* 1001:3–5 · 1021:3–6 — EM-08 states the chosen template as 11px medium
     text inside a 42px mint row on a #d6e3de hairline and offers the other
     two as 9px medium white pills pinned right, top-aligned to the row
     rather than centred in it. */
  return (
    <section className="lg:hidden">
      <h2 className="text-[10px] leading-[14px] font-semibold text-[#094033] uppercase">
        {c.compose.templateLabel}
      </h2>
      <div className="mt-[2px] flex h-[42px] items-center gap-[2px] rounded-[12px] border border-[#d6e3de] bg-[#e8f5f0] pr-[4px] pl-[14px]">
        <p className="min-w-0 flex-1 truncate text-[11px] font-medium text-[#094033]">
          {labels[template]}
        </p>
        {MESSAGE_TEMPLATES.filter((option) => option.id !== template).map(
          (option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onTemplate(option.id)}
              className="flex h-[28px] shrink-0 items-center justify-center self-start rounded-[14px] border border-[#d6e3de] bg-white px-[20px] text-[9px] font-medium text-[#094033]"
            >
              {labels[option.id]}
            </button>
          ),
        )}
      </div>
    </section>
  );
}
