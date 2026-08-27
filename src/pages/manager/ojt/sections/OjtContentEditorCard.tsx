import { useLayoutEffect, useRef } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";
import type { OjtGuidanceSection } from "../ojtMock";
import { OjtSectionHeading } from "./OjtSectionHeading";

/* EM-14B "CONTENT EDITOR" (1108:72): white card, #ccded6 hairline, radius
   12, 182px tall in the frame. Three draft sections — 9px semibold #083d2d
   headings
   (01 · BEFORE STARTING THE SHIFT, 02 · BLOCKED ACCESS / EQUIPMENT,
   03 · ESCALATION & REPORTING) each over 9px #667a73 bulleted draft text.
   The draft body is genuinely editable: this is the manager's edit gate, so
   each block is a textarea the Manager can rewrite before approving. Each
   one is sized to its own wrapped content — the frame shows every draft
   line in full, with no trailing blank row and nothing clipped. Draft body
   lines run on the frame's 11px pitch; the card grows the ~13px the frame
   itself is short by, since 1108:72 clips its own last line at y=400. */
function DraftField({
  index,
  value,
  onChange,
}: {
  index: number;
  value: string;
  onChange: (value: string) => void;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const fit = () => {
      node.style.height = "auto";
      node.style.height = `${node.scrollHeight}px`;
    };
    fit();
    // Re-fit once the webfont lands and whenever the column is re-laid out:
    // fallback metrics wrap differently, which would otherwise clip a line.
    void document.fonts?.ready.then(fit);
    // Re-fit on width changes only: reacting to the height this very effect
    // writes would feed the observer back into itself.
    const parent = node.parentElement;
    if (!parent) return;
    let lastWidth = parent.clientWidth;
    const observer = new ResizeObserver(() => {
      if (parent.clientWidth === lastWidth) return;
      lastWidth = parent.clientWidth;
      fit();
    });
    observer.observe(parent);
    return () => observer.disconnect();
  }, [value]);

  return (
    <textarea
      ref={ref}
      id={`ojt-editor-${index}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={1}
      spellCheck={false}
      className="mt-[6px] block w-full resize-none overflow-hidden rounded-[8px] border border-transparent bg-transparent px-[2px] py-[2px] text-[9px] leading-[11px] text-[#667a73] hover:border-[#e0eae5] focus:border-brand focus:outline-none lg:text-[11px] lg:leading-[14px]"
    />
  );
}

export function OjtContentEditorCard({
  sections,
  drafts,
  onChangeDraft,
}: {
  sections: OjtGuidanceSection[];
  /** Editable body per section, keyed by index — owned by the review page. */
  drafts: string[];
  onChangeDraft: (index: number, value: string) => void;
}) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <section>
      <OjtSectionHeading>{c.review.editorHeading}</OjtSectionHeading>
      <div className="mt-[9px] min-h-[182px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] pt-[12px] pb-[6px] lg:mt-[11px] lg:pb-[12px]">
        {sections.map((section, index) => (
          <div key={section.heading} className={index === 0 ? "" : "mt-[10px]"}>
            <label
              htmlFor={`ojt-editor-${index}`}
              className="block text-[9px] leading-[12px] font-semibold text-[#083d2d] lg:text-[11px] lg:leading-[15px]"
            >
              {section.heading}
            </label>
            <DraftField
              index={index}
              value={drafts[index] ?? ""}
              onChange={(value) => onChangeDraft(index, value)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
