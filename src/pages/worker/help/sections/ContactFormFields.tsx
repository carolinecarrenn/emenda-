import { ChevronDown } from "lucide-react";
import { useHelpCopy } from "../help.copy";
import type { SupportTopicId } from "../helpMock";

/* Contact Support form column.

   Mobile is canonical (W-48 nodes 899:116–899:129): 10px semibold #65746d
   uppercase labels, a 46px topic dropdown and two 88px multi-line inputs, all
   radius 12 / border #d7e2dc / 12px value inset 13px, 6px under their label
   and 12px apart. W-48A (node 899:164) turns the ISSUE box border #a5382b and
   prints "Describe the issue." as 10px #a5382b copy 4px BELOW the field.

   Desktop keeps WD-48 (nodes 1182:156–1182:164): 700px wide, 11px labels,
   52px fields radius 10 / border #d1ded6 / 14px value inset 15px, a 96px
   DETAILS textarea, and the validation message inside the empty field. */
interface ContactFormFieldsProps {
  topic: SupportTopicId;
  issue: string;
  details: string;
  issueError: boolean;
  disabled: boolean;
  onOpenTopic: () => void;
  onIssueChange: (value: string) => void;
  onDetailsChange: (value: string) => void;
}

const LABEL_CLASS =
  "text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-[20px]";

const FIELD_CLASS =
  "w-full rounded-[12px] border bg-white px-[13px] text-[12px] text-lp-ink lg:rounded-[10px] lg:px-[15px] lg:text-[14px]";

export function ContactFormFields({
  topic,
  issue,
  details,
  issueError,
  disabled,
  onOpenTopic,
  onIssueChange,
  onDetailsChange,
}: ContactFormFieldsProps) {
  const c = useHelpCopy();

  return (
    <div>
      <p className={LABEL_CLASS}>{c.contact.topicLabel}</p>
      <button
        type="button"
        disabled={disabled}
        onClick={onOpenTopic}
        className={`${FIELD_CLASS} mt-[6px] flex h-[46px] items-center justify-between border-[#d7e2dc] text-left hover:border-lp-green disabled:cursor-not-allowed max-lg:disabled:opacity-55 lg:h-[52px] lg:border-lp-line`}
      >
        {c.contact.topics[topic]}
        <ChevronDown
          size={20}
          strokeWidth={1.8}
          className="text-lp-green lg:hidden"
        />
      </button>

      <p className={`${LABEL_CLASS} mt-[12px]`}>{c.contact.issueLabel}</p>
      {/* W-48 draws ISSUE as an 88px multi-line box; WD-48 keeps the 52px
          single-line field, so one textarea covers both heights. */}
      <textarea
        value={issue}
        disabled={disabled}
        aria-invalid={issueError}
        placeholder={issueError ? c.contact.issueError : undefined}
        onChange={(event) => onIssueChange(event.target.value)}
        className={`${FIELD_CLASS} mt-[6px] block h-[88px] resize-none py-[13px] leading-[19px] outline-none focus:border-lp-green lg:h-[52px] lg:py-[15px] lg:leading-[21px] ${
          issueError
            ? "border-[#a5382b] placeholder:text-transparent lg:border-[#d12924] lg:placeholder:text-[#c72924]"
            : "border-[#d7e2dc] lg:border-lp-line"
        }`}
      />
      {issueError && (
        <p className="mt-[4px] text-[10px] leading-[16px] text-[#a5382b] lg:hidden">
          {c.contact.issueError}
        </p>
      )}

      <p className={`${LABEL_CLASS} mt-[12px]`}>{c.contact.detailsLabel}</p>
      {/* `block` keeps the inline-baseline gap out of the column height so the
          submit button lands 100px under the field, as WD-48 draws it. */}
      <textarea
        value={details}
        disabled={disabled}
        onChange={(event) => onDetailsChange(event.target.value)}
        className={`${FIELD_CLASS} mt-[6px] block h-[88px] resize-none border-[#d7e2dc] py-[13px] leading-[19px] outline-none focus:border-lp-green lg:h-[96px] lg:border-lp-line lg:py-[14px] lg:leading-[22px]`}
      />
    </div>
  );
}
