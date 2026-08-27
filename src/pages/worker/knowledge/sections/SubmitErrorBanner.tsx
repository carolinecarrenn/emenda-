interface SubmitErrorBannerProps {
  message: string;
  className?: string;
}

/* Submit-failed banner (W-44C / WD-44C). Mobile: #fff1ef fill on a 12px
   radius with an 11px #a5382b message and no glyph, sitting under the privacy
   note and above the "Try again" button. */
export function SubmitErrorBanner({
  message,
  className = "",
}: SubmitErrorBannerProps) {
  return (
    <div
      className={`flex min-h-[62px] items-center rounded-[12px] bg-[#fff1ef] px-[13px] py-[12px] lg:min-h-[64px] lg:bg-error-bg lg:px-5 lg:py-3 ${className}`}
    >
      <p className="text-[11px] leading-[19px] text-[#a5382b] lg:text-[13px] lg:leading-normal lg:font-medium lg:text-error-ink">
        {message}
      </p>
    </div>
  );
}
