import { AccessHeader } from "./sections/AccessHeader";
import { SignInIntro } from "./sections/SignInIntro";
import { SignInCard } from "./sections/SignInCard";

/** LP-05 Unified Sign in (Figma node 1060:43) — the single credential gate for
 *  every EMENDA role. 1440x900 split: explanatory column left (x=64, 500px),
 *  544px auth card right (x=700, y=156), on the #f8faf7 canvas. Submitting the
 *  card lands on the post-auth routing interstitial at /welcome; the card's
 *  "Create new account" door opens the worker account-creation flow at
 *  /auth/register (Register -> OTP -> Create PIN). Below lg this becomes the
 *  mobile stack — intro, then card — at its own type and spacing scale, never
 *  a shrunken 1440 frame. */
export function SignInPage() {
  return (
    <div className="min-h-screen bg-lp-bg">
      <AccessHeader variant="signin" />
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 pb-16 lg:flex lg:items-start lg:gap-[136px] lg:px-[64px] lg:pt-[51px] lg:pb-[120px]">
        <SignInIntro />
        <div className="mt-10 lg:mt-[8px]">
          <SignInCard />
        </div>
      </div>
    </div>
  );
}
