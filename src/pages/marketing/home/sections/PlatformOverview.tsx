import {
  BookOpenCheck,
  ClipboardList,
  IdCard,
  MessagesSquare,
  Plane,
  Repeat,
  Sparkles,
} from "lucide-react";
import { LearnMoreLink } from "@/components/marketing/LearnMoreLink";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import {
  PlatformMap,
  type PlatformModule,
} from "@/components/marketing/mockups/PlatformMap";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

const ICONS = [
  ClipboardList,
  MessagesSquare,
  Repeat,
  Plane,
  IdCard,
  Sparkles,
];

/**
 * The ecosystem, stated once and early. The assistant is the sixth module of
 * six — present, named, and no larger than work, communication, follow-up,
 * life or identity. That ordering is the positioning.
 */
export function PlatformOverview() {
  const c = useSectionCopy(HOME_COPY);

  const modules: PlatformModule[] = c.platform.modules.map((module, index) => ({
    ...module,
    icon: ICONS[index] ?? BookOpenCheck,
  }));

  return (
    <Section
      dataSection="home-platform"
      className="border-y border-lp-line bg-lp-tint"
    >
      <SectionHeading
        eyebrow={c.platform.eyebrow}
        title={c.platform.title}
        body={c.platform.body}
      />

      <div className="mt-14">
        <PlatformMap
          centerLabel={c.platform.centerLabel}
          centerCaption={c.platform.centerCaption}
          modules={modules}
        />
      </div>

      <Reveal delay={200} className="mt-12 flex justify-center">
        <LearnMoreLink to="/platform">{c.platform.cta}</LearnMoreLink>
      </Reveal>
    </Section>
  );
}
