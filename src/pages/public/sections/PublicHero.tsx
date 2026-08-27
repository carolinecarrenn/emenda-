import type { ReactNode } from "react";

/**
 * Rounded mint hero card shared by the three public inner pages
 * (Figma 1147:48 · 1147:151 · 1147:247). `aside` carries the LP-02
 * identity preview card; LP-03 / LP-04 render copy only.
 *
 * Figma places every text run inside a fixed box and centres it vertically,
 * so each block here gets the box height from the mock (`min-h`) plus the
 * `leading` measured off the render (Inter auto ≈ 1.22em).
 */
export function PublicHero({
  eyebrow,
  title,
  body,
  minHeight = "lg:min-h-[330px]",
  titleClassName = "lg:min-h-[108px] lg:text-[40px] lg:leading-[49px]",
  bodyClassName = "lg:min-h-[70px] lg:max-w-[820px]",
  aside,
}: {
  eyebrow: string;
  title: string;
  body: string;
  minHeight?: string;
  titleClassName?: string;
  bodyClassName?: string;
  aside?: ReactNode;
}) {
  const copy = (
    <div>
      <p className="flex min-h-[26px] items-center text-[12px] font-semibold tracking-[0.04em] text-[#055240]">
        {eyebrow}
      </p>
      <h1
        className={`mt-[14px] text-[30px] leading-[1.22] font-bold text-[#0e1f18] lg:flex lg:items-center ${titleClassName}`}
      >
        {title}
      </h1>
      <p
        className={`mt-[14px] text-[16px] leading-[20px] text-[#63756b] lg:flex lg:items-center ${bodyClassName}`}
      >
        {body}
      </p>
    </div>
  );

  return (
    <section
      className={`rounded-[28px] border border-[#d1ded6] bg-[#f2f9f5] px-[24px] py-[27px] lg:pr-[47px] lg:pb-[31px] lg:pl-[31px] ${minHeight}`}
    >
      {aside ? (
        <div className="grid gap-[32px] lg:grid-cols-[650px_450px] lg:gap-[88px]">
          {copy}
          <div className="lg:mt-[28px]">{aside}</div>
        </div>
      ) : (
        copy
      )}
    </section>
  );
}
