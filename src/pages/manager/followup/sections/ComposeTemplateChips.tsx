import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { TemplateId } from "../followupMock";

/* EM-09B "TEMPLATE" chips (1030:192 · 194 · 196): 28px pills, radius 14,
   #d6e3de hairline — the selected template on mint #e8f5f0, the rest white,
   all with 10px #094033 labels. Interactive: picking a chip re-labels the
   sent record and the manager note. */
const TEMPLATE_IDS: TemplateId[] = ["daily", "checkin", "documentation"];

export function ComposeTemplateChips({
  template,
  onTemplate,
}: {
  template: TemplateId;
  onTemplate: (value: TemplateId) => void;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-[#094033] uppercase lg:text-[11px]">
        {c.compose.templateLabel}
      </h2>
      <div className="mt-[5px] flex flex-wrap gap-[8px]">
        {TEMPLATE_IDS.map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={template === id}
            onClick={() => onTemplate(id)}
            className={`flex h-[28px] items-center justify-center rounded-[14px] border border-[#d6e3de] px-[14px] text-[10px] font-semibold text-[#094033] ${
              template === id ? "bg-[#e8f5f0]" : "bg-white hover:border-brand"
            }`}
          >
            {c.compose.templates[id]}
          </button>
        ))}
      </div>
    </section>
  );
}
