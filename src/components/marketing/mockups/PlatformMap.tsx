import type { LucideIcon } from "lucide-react";
import { BrandMark } from "../BrandMark";
import { Reveal } from "../Reveal";

export interface PlatformModule {
  title: string;
  body: string;
  icon: LucideIcon;
}

/**
 * The ecosystem diagram: six modules, three above and three below, joined
 * through an EMENDA band across the middle.
 *
 * Drawn as a band rather than a ring because a ring of six cards either
 * collapses into a list on mobile or needs absolute positioning that breaks at
 * awkward widths. The band keeps the same claim — these are not six products,
 * they meet in one place — and survives 390px as a plain stack.
 */
export function PlatformMap({
  centerLabel,
  centerCaption,
  modules,
}: {
  centerLabel: string;
  centerCaption: string;
  modules: PlatformModule[];
}) {
  const top = modules.slice(0, 3);
  const bottom = modules.slice(3, 6);

  return (
    <div className="space-y-4">
      <ModuleRow modules={top} connector="down" />

      <Reveal delay={120}>
        <div className="relative flex items-center gap-4 overflow-hidden rounded-[22px] bg-[linear-gradient(120deg,#04352a_0%,#0a5b45_58%,#053b2e_100%)] px-6 py-5 shadow-lp-lg">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(143,220,182,0.2), transparent 55%)",
            }}
          />
          <BrandMark size={40} className="relative shrink-0" />
          <div className="relative min-w-0">
            <p className="font-display text-[19px] font-bold tracking-[-0.01em] text-white lg:text-[22px]">
              {centerLabel}
            </p>
            <p className="mt-1 text-[13px] leading-[1.5] text-lp-onDark">
              {centerCaption}
            </p>
          </div>
        </div>
      </Reveal>

      <ModuleRow modules={bottom} connector="up" />
    </div>
  );
}

function ModuleRow({
  modules,
  connector,
}: {
  modules: PlatformModule[];
  connector: "up" | "down";
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {modules.map((module, index) => {
        const Icon = module.icon;
        return (
          <Reveal key={module.title} delay={index * 70} className="h-full">
            <article className="relative flex h-full flex-col rounded-[20px] border border-lp-line bg-white p-5 shadow-lp-sm transition-shadow duration-200 ease-standard hover:shadow-lp-md lg:p-6">
              <span className="flex size-10 items-center justify-center rounded-[13px] bg-lp-mint text-lp-green">
                <Icon size={18} strokeWidth={1.85} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[15.5px] leading-[1.3] font-semibold text-lp-ink">
                {module.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-lp-muted">
                {module.body}
              </p>

              {/* Each module reaches the band; only drawn where there is room
                  for it to mean anything. */}
              <span
                aria-hidden="true"
                className={`absolute left-1/2 hidden h-4 w-px -translate-x-1/2 border-l border-dashed border-lp-line sm:block ${
                  connector === "down" ? "-bottom-4" : "-top-4"
                }`}
              />
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
