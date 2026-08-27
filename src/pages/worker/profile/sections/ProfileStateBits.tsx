import { useProfileCopy } from "../profile.copy";

/** WD-19C / W-19C success toast — mint pill "Profile updated".
 *  Desktop: floats top-right of the content column; mobile: full-width strip
 *  at the top of the body. */
export function ProfileUpdatedToast() {
  const c = useProfileCopy();
  return (
    <div className="mb-[10px] flex h-[48px] w-full items-center rounded-[12px] border border-[#bfd8cc] bg-[#e5f3ed] px-[17px] lg:absolute lg:top-0 lg:right-0 lg:z-10 lg:mb-0 lg:w-[372px]">
      <p className="text-[13px] font-semibold text-brand-deep">
        {c.profileUpdated}
      </p>
    </div>
  );
}

/** WD-19A / W-19A loading skeleton — pale-mint rounded rectangles inherit the
 *  exact card positions and radii; the H1/subtitle stay as real text. */
export function ProfileSkeleton() {
  return (
    <div className="mt-[14px] flex flex-col gap-[14px] lg:mt-[28px] lg:flex-row lg:gap-8">
      <div className="flex w-full flex-col gap-[14px] lg:w-[620px] lg:gap-5">
        <div className="h-[126px] rounded-[16px] bg-brand-soft" />
        <div className="h-[216px] rounded-[16px] bg-brand-soft" />
      </div>
      <div className="flex w-full flex-col gap-[14px] lg:w-[460px] lg:gap-5">
        <div className="h-[92px] rounded-[16px] bg-brand-soft lg:h-[116px]" />
        <div className="h-[82px] rounded-[16px] bg-brand-soft lg:h-[104px]" />
      </div>
    </div>
  );
}
