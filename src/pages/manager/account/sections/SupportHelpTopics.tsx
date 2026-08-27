import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { HELP_TOPICS } from "../accountData";
import { ChevronRow } from "./ChevronRow";
import { SectionLabel } from "./SectionLabel";

/* EM-19 "HELP TOPICS" (1133:58…1133:74): four 350x58 white chevron cards on
   a 64px pitch — Using Communication, Daily Reports, Follow-up, Audit Export.
   Each row deep-links to the module it explains. */
export function SupportHelpTopics() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.support.helpTopics}</SectionLabel>
      <div className="mt-[9px] flex flex-col gap-[6px]">
        {HELP_TOPICS.map((topic) => (
          <ChevronRow
            key={topic.id}
            to={topic.to}
            size="topic"
            title={c.support.topics[topic.id].title}
            description={c.support.topics[topic.id].body}
          />
        ))}
      </div>
    </section>
  );
}
