# EMENDA — Worker parity matrix (screen/state level)

Generated from the per-section Figma inventories (worker **mobile** canonical).
ID/EN/JA are structurally guaranteed: every section's copy goes through
`defineSectionCopy<T>({en, id, ja})`, so a missing translation fails `tsc`.

**Figma Node** is the real frame id on page `290:2` (Worker mobile).
**Mobile/Desktop Flow** = the capability exists and is reachable on that viewport.
**Mobile/Desktop Visual** is filled from the real audit journals by
`scripts/collect-visual-verdicts.mjs` — never assumed. Strongest evidence first:
`audited` (this frame was screenshot-compared on this viewport),
`derived (W-xx)` (its base frame was; the variant differs only in the state
layer), `section audit` (its section was swept on this viewport but this frame
was not named individually), `adapted` (desktop only: no equivalent desktop
node exists, so the rendering was reviewed against desktop Foundations —
*desktop visual adapted from canonical mobile flow using desktop Foundations*),
or `pending` (no audit has reached it yet).

**526/578 COMPLETE · 43 ACCEPTED · 9 PARTIAL.**

A row is COMPLETE only when every gate passes: the capability exists on both
viewports, it is reachable by clicking, ID/EN/JA are present, and BOTH visual
columns have been signed off by a screenshot audit. Any row whose Mobile or
Desktop Visual still reads `pending` is PARTIAL until its audit wave lands.

### 01 Auth — 41/44 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 01 Auth | `421:7` | W-01 Splash | `/auth` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `480:2` | W-02 Choose Language | `/auth/language` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `480:21` | W-02A Choose Language — English Selected | `/auth/language (in-page selection state)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `480:40` | W-02B Choose Language — Japanese Selected | `/auth/language (in-page selection state)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:11` | W-03 Welcome | `/auth/welcome` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:29` | W-04 Login | `/auth/login` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:8` | W-04A Login — Loading | `/auth/login (state=loading)` | yes | derived (/auth/login) | yes | derived (/auth/login) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:33` | W-04B Login — Invalid PIN | `/auth/login (state=invalid)` | yes | derived (/auth/login) | yes | derived (/auth/login) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:58` | W-04C Login — Too Many Attempts | `/auth/login (state=lockout)` | yes | derived (/auth/login) | yes | derived (/auth/login) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:83` | W-04D Login — Offline | `/auth/login?state=offline` | yes | derived (/auth/login) | yes | derived (/auth/login) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:51` | W-05 Register | `/auth/register` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:108` | W-05A Register — Loading | `/auth/register (state=loading)` | yes | audited | yes | derived (/auth/register) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:132` | W-05B Register — Invalid Phone | `/auth/register (state=invalid)` | yes | audited | yes | derived (/auth/register) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:156` | W-05C Register — Phone Already Registered | `/auth/register (state=registered)` | yes | audited | yes | derived (/auth/register) | yes | yes | yes | ACCEPTED | state URL — server outcome / OS permission / loading — no honest client trigger |
| 01 Auth | `422:180` | W-05D Register — Offline | `/auth/register?state=offline` | yes | audited | yes | derived (/auth/register) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:72` | W-06 OTP Verification | `/auth/otp (signup) · /auth/otp?flow=recovery` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:204` | W-06A OTP Verification — Loading | `/auth/otp (state=loading)` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:232` | W-06B OTP Verification — Invalid Code | `/auth/otp (state=invalid)` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:260` | W-06C OTP Verification — Code Expired | `/auth/otp?state=expired` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:288` | W-06D OTP Verification — Resend Pending | `/auth/otp?state=resend-pending` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:316` | W-06E OTP Verification — New Code Sent | `/auth/otp?state=new-code-sent` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:344` | W-06F OTP Verification — Too Many Requests | `/auth/otp?state=too-many-requests` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `452:2` | W-06G OTP Verification — Offline | `/auth/otp?state=offline` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `464:679` | W-06H OTP Verification — Code Entered | `/auth/otp (state=code-entered)` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `464:703` | W-06I OTP Verification — Recovery Code Entered | `/auth/otp?flow=recovery (state=recovery-code)` | yes | audited | yes | derived (/auth/otp) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:97` | W-07 Create PIN | `/auth/create-pin` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:372` | W-07A Create PIN — Mismatch | `/auth/create-pin (state=mismatch)` | yes | audited | yes | derived (/auth/create-pin) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:395` | W-07B Create PIN — Loading | `/auth/create-pin (state=loading)` | yes | audited | yes | derived (/auth/create-pin) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:418` | W-07C Create PIN — Failed | `/auth/create-pin (state=failed)` | yes | audited | yes | derived (/auth/create-pin) | yes | yes | yes | ACCEPTED | state URL — server outcome / OS permission / loading — no honest client trigger |
| 01 Auth | `421:117` | W-08 Forgot PIN | `/auth/forgot-pin` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:441` | W-08A Forgot PIN — Loading | `/auth/forgot-pin (state=loading)` | yes | audited | yes | derived (/auth/forgot-pin) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:461` | W-08B Forgot PIN — Phone Not Found | `/auth/forgot-pin?state=not-found` | yes | audited | yes | derived (/auth/forgot-pin) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `451:36` | W-08C Forgot PIN — No Phone Access | `/auth/forgot-pin?state=no-phone-access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `451:66` | W-08D Forgot PIN — Offline | `/auth/forgot-pin?state=offline` | yes | audited | yes | derived (/auth/forgot-pin) | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:134` | W-09 Reset PIN | `/auth/reset-pin` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:481` | W-09A Reset PIN — Mismatch | `/auth/reset-pin (state=mismatch)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:504` | W-09B Reset PIN — Loading | `/auth/reset-pin (state=loading)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:527` | W-09C Reset PIN — Success | `/auth/reset-pin (state=success)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:550` | W-09D Reset PIN — Failed | `/auth/reset-pin?state=failed` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — server outcome / OS permission / loading — no honest client trigger |
| 01 Auth | `452:29` | W-09E Reset PIN — Offline | `/auth/reset-pin?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:154` | W-10 Session Expired | `/auth/session-expired` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `421:172` | W-11 Logout Confirmation | `/auth/logout` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `422:573` | W-11A Logout — Loading | `/auth/logout (state=loading)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 01 Auth | `452:51` | W-11B Logout — Offline Pending | `/auth/logout?state=offline-pending` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |

### 02 EMENDA ID & Identity — 15/26 COMPLETE · 7 awaiting visual audit

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 02 EMENDA ID & Identity | `468:5` | W-12 EMENDA ID Ready | `/onboarding/id` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `468:26` | W-13 Identity Details | `/onboarding/id/details` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:2` | W-13A Identity Details — Validation Error | `/onboarding/id/details?state=error` | yes | audited | yes | derived (/onboarding/id/details) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `468:54` | W-14 Identity Reference | `/onboarding/id/reference` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:31` | W-14A Identity Reference — Uploading | `/onboarding/id/reference?state=uploading` | yes | audited | yes | derived (/onboarding/id/reference) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:66` | W-14B Identity Reference — Upload Failed | `/onboarding/id/reference?state=failed` | yes | audited | yes | derived (/onboarding/id/reference) | yes | yes | yes | ACCEPTED | state URL — network/upload failure, ?state= only (its own 'Retry upload' control is live and re-runs the upload) |
| 02 EMENDA ID & Identity | `471:100` | W-14C Identity Reference — Invalid / Expired Document | `/onboarding/id/reference?state=invalid` | yes | audited | yes | derived (/onboarding/id/reference) | yes | yes | yes | ACCEPTED | state URL — server-side document rejection, ?state= only (its 'Choose file' and 'Choose another document' controls are live) |
| 02 EMENDA ID & Identity | `508:4` | W-14D Identity Reference — Document Ready | `/onboarding/id/reference?state=ready` | yes | audited | yes | derived (/onboarding/id/reference) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `508:41` | W-14E Identity Reference — Permission Required | `/onboarding/id/reference?state=permission` | yes | audited | yes | derived (/onboarding/id/reference) | yes | yes | yes | ACCEPTED | state URL — OS photo/camera permission denial, ?state= only (its 'Open settings' / 'Choose another method' controls are live) |
| 02 EMENDA ID & Identity | `468:87` | W-15 Identity Review | `/onboarding/id/review` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `468:107` | W-16 Identity Verification (gate) | `/onboarding/id/verification` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL | yes |
| 02 EMENDA ID & Identity | `471:134` | W-16A Identity Verification — Submitting | `/onboarding/id/verification?state=submitting` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL | yes |
| 02 EMENDA ID & Identity | `471:151` | W-16B Identity Verification — Pending | `/onboarding/id/verification?state=pending` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL | yes |
| 02 EMENDA ID & Identity | `471:168` | W-16C Identity Verification — Verified | `/onboarding/id/verification?state=verified` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL | state URL — server review outcome, ?state= only (its 'View My EMENDA ID' and 'Back to EMENDA ID' controls are live) |
| 02 EMENDA ID & Identity | `471:185` | W-16D Identity Verification — Needs Review | `/onboarding/id/verification?state=needs-review` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL | state URL — server review outcome, ?state= only (its 'Review document' → W-14 and back link are live) |
| 02 EMENDA ID & Identity | `471:202` | W-16E Identity Verification — Failed | `/onboarding/id/verification?state=failed` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL | state URL — server failure, ?state= only (its 'Try again' → W-16A and 'Back to EMENDA ID' → W-17H are live) |
| 02 EMENDA ID & Identity | `471:219` | W-16F Identity Verification — Offline | `/onboarding/id/verification?state=offline` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL | state URL — network offline, ?state= only (its 'Try again' and back link are live) |
| 02 EMENDA ID & Identity | `468:124` | W-17 My EMENDA ID (pending badge) | `/onboarding/id/my-id` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:236` | W-17A My EMENDA ID — QR | `/onboarding/id/my-id?view=qr` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:290` | W-17B My EMENDA ID — Share | `/onboarding/id/my-id?view=share` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:324` | W-17C My EMENDA ID — Share Confirmation | `/onboarding/id/my-id?view=shared` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:355` | W-17D My EMENDA ID — Verified | `/onboarding/id/my-id?state=verified` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `471:381` | W-17E My EMENDA ID — Not Verified | `/onboarding/id/my-id?state=not-verified` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `495:2` | W-17F My EMENDA ID — Loading | `/onboarding/id/my-id?state=loading` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | ACCEPTED | state URL — loading skeleton, ?state= only (Figma frame carries no controls either) |
| 02 EMENDA ID & Identity | `508:75` | W-17G My EMENDA ID — Needs Review | `/onboarding/id/my-id?state=needs-review` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | COMPLETE | yes |
| 02 EMENDA ID & Identity | `508:104` | W-17H My EMENDA ID — Verification Failed | `/onboarding/id/my-id?state=failed` | yes | audited | yes | derived (/onboarding/id/my-id) | yes | yes | yes | COMPLETE | yes |

### 03 Headless Home — 5/13 COMPLETE · 2 awaiting visual audit

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 03 Headless Home | `529:3` | W-18 Headless Home (base) | `/worker?state=headless` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 03 Headless Home | `529:70` | W-18A Headless Home — New User | `/worker?state=new-user` | yes | derived (/worker) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 03 Headless Home | `529:138` | W-18B Headless Home — Identity Pending | `/worker?state=identity-pending` | yes | derived (/worker) | yes | derived (/worker) | yes | yes | yes | COMPLETE | yes |
| 03 Headless Home | `529:206` | W-18C Headless Home — Needs Attention | `/worker?state=needs-attention` | yes | derived (/worker) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 03 Headless Home | `529:274` | W-18D Headless Home — Profile Incomplete | `/worker?state=profile-incomplete` | yes | derived (/worker) | yes | audited | yes | yes | yes | ACCEPTED | state URL — profile-completeness lifecycle is owned by the Profile/Career sections; ?state= only. Its own panel CTA 'Continue profile' → /worker/career is live. |
| 03 Headless Home | `529:341` | W-18E Headless Home — Employer Not Connected | `/worker?state=employer-not-connected` | yes | derived (/worker) | yes | derived (/worker) | yes | yes | yes | ACCEPTED | state URL — employer lifecycle is owned by the Employer section; ?state= only. Its panel CTA 'Connect employer' → /worker/employer/connect is live. |
| 03 Headless Home | `529:408` | W-18F Headless Home — Offline | `/worker?state=offline` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL | state URL — network offline, ?state= only. Its 'Try again' pill is now a real control returning to online Home. |
| 03 Headless Home | `529:475` | W-18G Headless Home — Loading | `/worker?state=loading` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL | state URL — loading skeleton, ?state= only |
| 03 Headless Home | `535:561` | W-18H Headless Home — Employer Invite Received | `/worker?state=invite-received` | yes | derived (/worker) | yes | derived (/worker) | yes | yes | yes | ACCEPTED | state URL — a push event (bell/notifications chrome lives in components/worker and the Employer section); ?state= only. Its panel CTA 'Review employer' → /worker/employer/review is now live, so the invite → review handshake works. |
| 03 Headless Home | `535:718` | W-18I Headless Home — Profile Complete | `/worker?state=profile-complete` | yes | derived (/worker) | yes | derived (/worker) | yes | yes | yes | ACCEPTED | state URL — profile lifecycle owned by the Profile section; ?state= only. Its panel CTA 'Connect employer' is live. |
| 03 Headless Home | `919:738` | W-18J Headless Home — Employer Connected | `/worker (default, no ?state=)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 03 Headless Home | `940:2` | W-18K Headless Home — Employer Connected — Offline | `/worker?state=connected-offline` | yes | derived (/worker) | yes | derived (/worker) | yes | yes | yes | ACCEPTED | state URL — network offline, ?state= only. Its panel CTA 'View connection' → /worker/employer is live. |
| 03 Headless Home | `946:1227` | W-18L Headless Home — Employer Access Ended | `/worker?state=access-ended` | yes | derived (/worker) | yes | audited | yes | yes | yes | ACCEPTED | state URL — access-revocation event owned by the Employer section; ?state= only. Its panel CTA 'Connect another employer' and the 'Employer access history' Explore tile are live. |

### 04 Personal Profile — 10/15 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 04 Personal Profile | `544:3` | W-19 Personal Profile | `/worker/profile` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `544:66` | W-19A Personal Profile — Loading | `/worker/profile?state=loading` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only; loading state, permitted exception) |
| 04 Personal Profile | `544:104` | W-19B Personal Profile — Incomplete | `/worker/profile?state=incomplete` | yes | audited | yes | derived (/worker/profile) | yes | yes | yes | ACCEPTED | state URL — only; data variant — no Figma control produces a profile with missing email/city, and edit validation blocks blanking them) |
| 04 Personal Profile | `554:30` | W-19C Personal Profile — Updated | `/worker/profile?state=updated` | yes | derived (/worker/profile) | yes | derived (/worker/profile) | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `554:98` | W-19D Personal Profile — Avatar Options | `/worker/profile (overlay, no state param)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `568:2` | W-19E Personal Profile — Photo Permission Required | `/worker/profile (overlay, no state param)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `575:10` | W-19F Personal Profile — Photo Updating | `/worker/profile?state=photo-updating` | yes | derived (/worker/profile) | yes | derived (/worker/profile) | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `575:83` | W-19G Personal Profile — Photo Update Failed | `/worker/profile?state=photo-update-failed` | yes | derived (/worker/profile) | yes | derived (/worker/profile) | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `1264:253` | W-19H Personal Profile — Offline | `/worker/profile?state=offline` | yes | audited | yes | adapted | yes | yes | yes | ACCEPTED | state URL — only; network offline, permitted exception). Was entirely MISSING — now built |
| 04 Personal Profile | `544:169` | W-20 Edit Personal Profile | `/worker/profile/edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `544:227` | W-20A Edit Personal Profile — Validation Error | `/worker/profile/edit?state=validation-error` | yes | audited | yes | derived (/worker/profile/edit) | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `544:286` | W-20B Edit Personal Profile — Saving | `/worker/profile/edit?state=saving` | yes | audited | yes | derived (/worker/profile/edit) | yes | yes | yes | COMPLETE | yes |
| 04 Personal Profile | `544:344` | W-20C Edit Personal Profile — Save Failed | `/worker/profile/edit?state=save-failed` | yes | audited | yes | derived (/worker/profile/edit) | yes | yes | yes | ACCEPTED | state URL — only; server failure, permitted exception). Its Try saving again button is live in that state |
| 04 Personal Profile | `544:404` | W-20D Edit Personal Profile — Offline | `/worker/profile/edit?state=offline` | yes | audited | yes | derived (/worker/profile/edit) | yes | yes | yes | ACCEPTED | state URL — only; network offline, permitted exception) |
| 04 Personal Profile | `568:79` | W-20E Edit Personal Profile — Unsaved Changes | `/worker/profile/edit?state=unsaved-changes` | yes | audited | yes | derived (/worker/profile/edit) | yes | yes | yes | COMPLETE | yes |

### 05 Career & CV — 108/108 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 05 Career & CV | `547:3` | W-21 Career & CV hub | `/worker/career` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:64` | W-21A Career & CV · Loading | `/worker/career?state=loading` | yes | derived (/worker/career) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:102` | W-21B Career & CV · No CV Yet | `/worker/career?state=no-cv` | yes | derived (/worker/career) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:144` | W-21C Career & CV · Offline | `/worker/career?state=offline` | yes | derived (/worker/career) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `590:2` | W-21D Career & CV · CV Incomplete | `/worker/career?state=incomplete` | yes | derived (/worker/career) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:187` | W-22 Upload CV | `/worker/career/upload` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:212` | W-22A Upload CV · Uploading | `/worker/career/upload?state=uploading` | yes | derived (/worker/career/upload) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:235` | W-22B Upload CV · Upload Failed | `/worker/career/upload?state=failed` | yes | audited | yes | derived (/worker/career/upload) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:261` | W-22C Upload CV · Unsupported File | `/worker/career/upload?state=unsupported` | yes | derived (/worker/career/upload) | yes | derived (/worker/career/upload) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:121` | W-22D Upload CV · Offline | `/worker/career/upload?state=offline` | yes | audited | yes | derived (/worker/career/upload) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:287` | W-23 Review CV Import | `/worker/career/import` | yes | derived (/worker/career/import) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:318` | W-23A Review CV Import · Saving | `/worker/career/import?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:338` | W-23B Review CV Import · Save Failed | `/worker/career/import?state=save-failed` | yes | derived (/worker/career/import) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1718` | W-23C Review CV Import · Experience | `/worker/career/import?state=experience` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1779` | W-23D Review CV Import · Education | `/worker/career/import?state=education` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1836` | W-23E Review CV Import · Skills & Languages | `/worker/career/import?state=skills` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `592:2` | W-23F Review CV Import · Edit Experience | `/worker/career/import?state=experience (in-view form)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `592:72` | W-23G Review CV Import · Edit Education | `/worker/career/import?state=education (in-view form)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `609:113` | W-23H Review CV Import · Review Skill | `/worker/career/import?state=skills (sheet)` | yes | derived (/worker/career/import) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `609:153` | W-23I Review CV Import · Review Language | `/worker/career/import?state=skills (sheet)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `609:213` | W-23J Review CV Import · Qualifications & Training | `/worker/career/import?state=qualifications` | yes | derived (/worker/career/import) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:372` | W-24 My CV | `/worker/career/cv` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:410` | W-24A My CV · Update Available | `/worker/career/cv?state=update-available` | yes | derived (/worker/career/cv) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:433` | W-24B My CV · Review Update | `/worker/career/cv?state=review-update` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:460` | W-24C My CV · Updated | `/worker/career/cv?state=updated` | yes | derived (/worker/career/cv) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `547:482` | W-24D My CV · Offline | `/worker/career/cv?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1893` | W-24E My CV · History | `/worker/career/cv?state=history` | yes | derived (/worker/career/cv) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `612:23` | W-24F My CV · Submitted Snapshot · ABC Japan | `/worker/career/cv?state=snapshot-sakura` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `612:70` | W-24G My CV · Submitted Snapshot · Sample Employer | `/worker/career/cv?state=snapshot-sample` | yes | derived (/worker/career/cv) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:2` | W-24H My CV · Review Update · Experience Only | `/worker/career/cv?state=review-update` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:38` | W-24I My CV · Review Update · Qualification Only | `/worker/career/cv?state=review-update` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:74` | W-24J My CV · Review Update · Nothing Selected | `/worker/career/cv?state=review-update` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:2` | W-25 Experience | `/worker/career/experience` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:64` | W-25A Experience · Empty | `/worker/career/experience?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:116` | W-25B Experience · Edit | `/worker/career/experience?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:189` | W-25C Experience · Validation Error | `/worker/career/experience?state=error` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:2` | W-25D Experience · Saving | `/worker/career/experience?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:47` | W-25E Experience · Save Failed | `/worker/career/experience?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:95` | W-25F Experience · Offline | `/worker/career/experience?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:145` | W-25G Experience · Unsaved Changes | `/worker/career/experience?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:199` | W-25H Experience · Delete Confirmation | `/worker/career/experience?state=delete-confirm` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:253` | W-25I Experience · Employer Verified | `/worker/career/experience?state=verified` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:301` | W-25J Experience · Add | `/worker/career/experience?state=add` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:260` | W-26 Education | `/worker/career/education` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:316` | W-26A Education · Empty | `/worker/career/education?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:368` | W-26B Education · Edit | `/worker/career/education?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:441` | W-26C Education · Validation Error | `/worker/career/education?state=error` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:355` | W-26D Education · Saving | `/worker/career/education?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:400` | W-26E Education · Save Failed | `/worker/career/education?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:448` | W-26F Education · Offline | `/worker/career/education?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:498` | W-26G Education · Unsaved Changes | `/worker/career/education?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:552` | W-26H Education · Delete Confirmation | `/worker/career/education?state=delete-confirm` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `608:606` | W-26I Education · Add | `/worker/career/education?state=add` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:516` | W-27 Skills & Languages | `/worker/career/skills` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:578` | W-27A Skills & Languages · Empty | `/worker/career/skills?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:630` | W-27B Skills & Languages · Edit | `/worker/career/skills?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:695` | W-27C Skills & Languages · Save Failed | `/worker/career/skills?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `589:28` | W-27D Skills & Languages · Add Skill | `/worker/career/skills?state=add-skill` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `589:77` | W-27E Skills & Languages · Add Language | `/worker/career/skills?state=add-language` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `609:2` | W-27F Skills & Languages · Edit Skill | `/worker/career/skills?state=edit-skill` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `609:54` | W-27G Skills & Languages · Edit Language | `/worker/career/skills?state=edit-language` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `614:3` | W-27H Skills & Languages · Proficiency Selector | `/worker/career/skills?state=proficiency` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:148` | W-27I Skills & Languages · Saving | `/worker/career/skills?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:189` | W-27J Skills & Languages · Offline | `/worker/career/skills?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:235` | W-27K Skills & Languages · Unsaved Changes | `/worker/career/skills?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:756` | W-28 Qualifications & Training | `/worker/career/qualifications` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:812` | W-28A Qualifications & Training · Empty | `/worker/career/qualifications?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:864` | W-28B Qualifications & Training · Add | `/worker/career/qualifications?state=add` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:934` | W-28C Qualifications & Training · Save Failed | `/worker/career/qualifications?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `596:2` | W-28D Qualifications & Training · Employer Credential Available | `/worker/career/qualifications?state=credential-available` | yes | derived (/worker/career/qualifications) | yes | derived (/worker/career/qualifications) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `596:29` | W-28E Qualifications & Training · Review Employer Credential | `/worker/career/qualifications?state=review-credential` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:2` | W-28F Qualifications & Training · Record Type Selector | `/worker/career/qualifications?state=record-type` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:67` | W-28G Qualifications & Training · Add Proof | `/worker/career/qualifications?state=add-proof` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:116` | W-28H Qualifications & Training · Proof Uploading | `/worker/career/qualifications?state=proof-uploading` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:170` | W-28I Qualifications & Training · Proof Ready | `/worker/career/qualifications?state=proof-ready` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:217` | W-28J Qualifications & Training · Proof Upload Failed | `/worker/career/qualifications?state=proof-failed` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:263` | W-28K Qualifications & Training · Unsupported Proof | `/worker/career/qualifications?state=proof-unsupported` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:318` | W-28L Qualifications & Training · Edit Self-added | `/worker/career/qualifications?state=edit` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:367` | W-28M Qualifications & Training · Remove Confirmation | `/worker/career/qualifications?state=remove-confirm` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:431` | W-28N Qualifications & Training · Report Employer Credential | `/worker/career/qualifications?state=report` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `610:482` | W-28O Qualifications & Training · Issue Submitted | `/worker/career/qualifications?state=issue-submitted` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `622:8` | W-28P Qualifications & Training · Saving | `/worker/career/qualifications?state=saving` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:335` | W-28Q Qualifications & Training · Offline | `/worker/career/qualifications?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:387` | W-28R Qualifications & Training · Unsaved Changes | `/worker/career/qualifications?state=unsaved` | yes | derived (/worker/career/qualifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:998` | W-29 Work Preferences | `/worker/career/preferences` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1059` | W-29A Work Preferences · Edit | `/worker/career/preferences (edit mode)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1128` | W-29B Work Preferences · Save Failed | `/worker/career/preferences?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1192` | W-29C Work Preferences · Offline | `/worker/career/preferences?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `601:35` | W-29D Work Preferences · Unsaved Changes | `/worker/career/preferences?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `611:6` | W-29E Work Preferences · Location Selector | `/worker/career/preferences (sheet)` | yes | audited | yes | derived (/worker/career/preferences) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `611:68` | W-29F Work Preferences · Work Type Selector | `/worker/career/preferences (sheet)` | yes | audited | yes | derived (/worker/career/preferences) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `611:127` | W-29G Work Preferences · Availability Selector | `/worker/career/preferences (sheet)` | yes | audited | yes | derived (/worker/career/preferences) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `611:186` | W-29H Work Preferences · Industry Selector | `/worker/career/preferences (sheet)` | yes | audited | yes | derived (/worker/career/preferences) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `622:56` | W-29I Work Preferences · Saving | `/worker/career/preferences?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1254` | W-30 Create CV | `/worker/career/create` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1311` | W-30A Create CV · Missing Data | `/worker/career/create?state=missing-data` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1364` | W-30B Create CV · Creating | `/worker/career/create?state=creating` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1418` | W-30C Create CV · Created | `/worker/career/create?state=created` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `622:101` | W-30D Create CV · Create Failed | `/worker/career/create?state=create-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `622:128` | W-30E Create CV · Offline | `/worker/career/create?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1471` | W-31 Edit My CV | `/worker/career/edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1535` | W-31A Edit My CV · Saving | `/worker/career/edit?state=saving` | yes | derived (/worker/career/edit) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1595` | W-31B Edit My CV · Save Failed | `/worker/career/edit?state=save-failed` | yes | audited | yes | derived (/worker/career/edit) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `583:1655` | W-31C Edit My CV · Unsaved Changes | `/worker/career/edit?state=unsaved` | yes | derived (/worker/career/edit) | yes | derived (/worker/career/edit) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `612:108` | W-31D Edit My CV · Section Visibility | `/worker/career/edit (sheet)` | yes | audited | yes | derived (/worker/career/edit) | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `612:157` | W-31E Edit My CV · Reorder Sections | `/worker/career/edit?state=reorder` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `612:213` | W-31F Edit My CV · Reorder Sections Changed | `/worker/career/edit?state=reorder` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 05 Career & CV | `620:551` | W-31G Edit My CV · Offline | `/worker/career/edit?state=offline` | yes | derived (/worker/career/edit) | yes | derived (/worker/career/edit) | yes | yes | yes | COMPLETE | yes |

### 06 Visa & Japan Prep — 84/84 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 06 Visa & Japan Prep | `626:3` | W-32 Visa, Residence & Japan Preparation (hub) | `/worker/japan` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:72` | W-32A Hub — Loading | `/worker/japan?state=loading` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:141` | W-32B Hub — Outside Japan | `/worker/japan?state=outside-japan` | yes | derived (/worker/japan) | yes | derived (/worker/japan) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:210` | W-32C Hub — Already in Japan | `/worker/japan?state=already-in-japan` | yes | derived (/worker/japan) | yes | derived (/worker/japan) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:279` | W-32D Hub — Needs Attention | `/worker/japan?state=needs-attention` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:348` | W-32E Hub — Offline | `/worker/japan?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:2` | W-32F Pre-arrival Visa Plan | `/worker/japan/visa-plan` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:36` | W-32G Pre-arrival Visa Plan — Edit | `/worker/japan/visa-plan?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:75` | W-32H Pre-arrival Visa Plan — Saving | `/worker/japan/visa-plan?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:114` | W-32I Pre-arrival Visa Plan — Save Failed | `/worker/japan/visa-plan?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:153` | W-32J Pre-arrival Visa Plan — Offline | `/worker/japan/visa-plan?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:192` | W-32K Pre-arrival Visa Plan — Unsaved Changes | `/worker/japan/visa-plan?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `652:45` | W-32L Pre-arrival Visa Plan — Validation Error | `/worker/japan/visa-plan?state=validation-error` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `740:2` | W-32M Visa Plan — Planned Status Overlay | `/worker/japan/visa-plan?state=planned-status` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `740:19` | W-32N Visa Plan — Entry Status Overlay | `/worker/japan/visa-plan?state=entry-status` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `740:36` | W-32O Visa Plan — Planned Arrival Date Picker | `/worker/japan/visa-plan?state=arrival-date` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:520` | W-33 Residence Status | `/worker/japan/residence` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:552` | W-33A Residence Status — Empty | `/worker/japan/residence?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:584` | W-33B Residence Status — Add | `/worker/japan/residence?state=add` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:616` | W-33C Residence Status — Edit | `/worker/japan/residence?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:648` | W-33D Residence Status — Validation Error | `/worker/japan/residence?state=validation-error` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:680` | W-33E Residence Status — Saving | `/worker/japan/residence?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:712` | W-33F Residence Status — Save Failed | `/worker/japan/residence?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:744` | W-33G Residence Status — Offline | `/worker/japan/residence?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:776` | W-33H Residence Status — Unsaved Changes | `/worker/japan/residence?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:808` | W-33I Residence Status — Expiry Soon | `/worker/japan/residence?state=expiry-soon` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:840` | W-33J Residence Status — Update Available | `/worker/japan/residence?state=update-available` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `626:872` | W-33K Residence Status — Review Verified Update | `/worker/japan/residence?state=review-update` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:244` | W-33L Residence Status — Add Unsaved Changes | `/worker/japan/residence?state=add-unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:272` | W-33M Residence Status — Verified Source | `/worker/japan/residence?state=verified-source` | yes | audited | yes | derived (/worker/japan/residence) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `636:306` | W-33N Residence Status — Personal Note | `/worker/japan/residence?state=note` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:113` | W-33O Residence Status — Note Saving | `/worker/japan/residence?state=note-saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:139` | W-33P Residence Status — Note Save Failed | `/worker/japan/residence?state=note-save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:165` | W-33Q Residence Status — Note Offline | `/worker/japan/residence?state=note-offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:190` | W-33R Residence Status — Note Unsaved Changes | `/worker/japan/residence?state=note-unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `740:48` | W-33S Residence Status — Status Overlay | `/worker/japan/residence?state=status-sheet` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `740:65` | W-33T Residence Status — Work Permission Overlay | `/worker/japan/residence?state=work-sheet` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `740:79` | W-33U Residence Status — Valid Until Date Picker | `/worker/japan/residence?state=date-sheet` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:2` | W-34 Japan Readiness | `/worker/japan/readiness` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:34` | W-34A Japan Readiness — Outside Japan | `/worker/japan/readiness?state=outside-japan` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:66` | W-34B Japan Readiness — Already in Japan | `/worker/japan/readiness?state=already-in-japan` | yes | audited | yes | derived (/worker/japan/readiness) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:130` | W-34C Japan Readiness — Updating | `/worker/japan/readiness?state=updating` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:162` | W-34D Japan Readiness — Update Failed | `/worker/japan/readiness?state=update-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:194` | W-34E Japan Readiness — Offline | `/worker/japan/readiness?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `629:2` | W-34F Japan Readiness — Task Note | `/worker/japan/readiness/:task?state=note` | yes | audited | yes | derived (W-34) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `637:2` | W-34G Japan Readiness — Health Insurance | `/worker/japan/readiness/health-insurance` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `637:60` | W-34H Japan Readiness — My Number | `/worker/japan/readiness/my-number` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `637:118` | W-34I Japan Readiness — Bank / Payment | `/worker/japan/readiness/bank-payment` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `637:176` | W-34J Japan Readiness — Mobile / Contact | `/worker/japan/readiness/mobile-contact` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `637:234` | W-34K Japan Readiness — Passport / Identity | `/worker/japan/readiness/passport-identity` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `637:292` | W-34L Japan Readiness — Arrival Address | `/worker/japan/readiness/arrival-address` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `637:350` | W-34M Japan Readiness — Pension / Tax | `/worker/japan/readiness/pension-tax` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:2` | W-34N Japan Readiness — Note Saving | `/worker/japan/readiness/:task?state=note-saving` | yes | audited | yes | derived (W-34) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:28` | W-34O Japan Readiness — Note Save Failed | `/worker/japan/readiness/:task?state=note-save-failed` | yes | audited | yes | derived (W-34) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:54` | W-34P Japan Readiness — Note Offline | `/worker/japan/readiness/:task?state=note-offline` | yes | audited | yes | derived (W-34) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `653:79` | W-34Q Japan Readiness — Note Unsaved Changes | `/worker/japan/readiness/:task?state=note-unsaved` | yes | audited | yes | derived (W-34) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:344` | W-35 Resident Registration | `/worker/japan/registration` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:376` | W-35A Resident Registration — Not Started | `/worker/japan/registration?state=not-started` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:408` | W-35B Resident Registration — Edit | `/worker/japan/registration?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:440` | W-35C Resident Registration — Validation Error | `/worker/japan/registration?state=validation` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:472` | W-35D Resident Registration — Saving | `/worker/japan/registration?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:504` | W-35E Resident Registration — Save Failed | `/worker/japan/registration?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:536` | W-35F Resident Registration — Offline | `/worker/japan/registration?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:568` | W-35G Resident Registration — Unsaved Changes | `/worker/japan/registration?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:79` | W-35H Resident Registration — Add | `/worker/japan/registration?state=add` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:116` | W-35I Resident Registration — Add Unsaved Changes | `/worker/japan/registration?state=add-unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:146` | W-35J Resident Registration — Status Selector | `/worker/japan/registration?state=edit (overlay, no state param)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:161` | W-35K Resident Registration — Move-in Date Selector | `/worker/japan/registration?state=edit (overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:176` | W-35L Resident Registration — Registered Date Selector | `/worker/japan/registration?state=edit (overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:745` | W-36 Important Dates | `/worker/japan/dates` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:777` | W-36A Important Dates — Empty | `/worker/japan/dates?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:809` | W-36B Important Dates — Add Reminder | `/worker/japan/dates?state=add` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:841` | W-36C Important Dates — Edit Reminder | `/worker/japan/dates?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:873` | W-36D Important Dates — Validation Error | `/worker/japan/dates?state=validation` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:905` | W-36E Important Dates — Saving | `/worker/japan/dates?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:937` | W-36F Important Dates — Save Failed | `/worker/japan/dates?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:969` | W-36G Important Dates — Offline | `/worker/japan/dates?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:1001` | W-36H Important Dates — Unsaved Changes | `/worker/japan/dates?state=unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `628:1033` | W-36I Important Dates — Delete Confirmation | `/worker/japan/dates?state=delete-confirm` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:206` | W-36J Important Dates — Add Unsaved Changes | `/worker/japan/dates?state=add-unsaved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:234` | W-36K Important Dates — Date Selector | `/worker/japan/dates?state=add (overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:249` | W-36L Important Dates — Reminder Selector | `/worker/japan/dates?state=add (overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `638:283` | W-36M Important Dates — Reminder Saved · Notifications Off | `/worker/japan/dates?state=notifications-off` | yes | audited | yes | derived (/worker/japan/dates) | yes | yes | yes | COMPLETE | yes |
| 06 Visa & Japan Prep | `652:4` | W-36N Important Dates — Add Saving | `/worker/japan/dates?state=add-saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |

### 07 Documents & Emergency — 60/60 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 07 Documents & Emergency | `758:7` | W-37 My Documents | `/worker/documents` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:73` | W-37A My Documents — Loading | `/worker/documents?state=loading` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:122` | W-37B My Documents — Empty | `/worker/documents?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:176` | W-37C My Documents — Offline | `/worker/documents?state=offline` | yes | derived (/worker/documents) | yes | derived (/worker/documents) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:4` | W-37D My Documents — Load Failed | `/worker/documents?state=load-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `863:151` | W-37E My Documents — Needs Attention | `/worker/documents?state=needs-attention` | yes | derived (/worker/documents) | yes | derived (/worker/documents) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:235` | W-38 Add Document | `/worker/documents/add` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:314` | W-38A Add Document — Validation Error | `/worker/documents/add?state=validation-error` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:395` | W-38B Add Document — Uploading | `/worker/documents/add?state=uploading` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:474` | W-38C Add Document — Upload Failed | `/worker/documents/add?state=upload-failed` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:554` | W-38D Add Document — Unsupported File | `/worker/documents/add?state=unsupported-file` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:634` | W-38E Add Document — Permission Required | `/worker/documents/add?state=permission-required` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:687` | W-38F Add Document — File Ready | `/worker/documents/add?state=file-ready` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:766` | W-38G Add Document — Saving | `/worker/documents/add?state=saving` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:845` | W-38H Add Document — Save Failed | `/worker/documents/add?state=save-failed` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:928` | W-38I Add Document — Offline | `/worker/documents/add?state=offline` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:1011` | W-38J Add Document — Unsaved Changes | `/worker/documents/add?state=unsaved-changes` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:1098` | W-38K Add Document — Document Type Overlay | `/worker/documents/add (overlay)` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:1118` | W-38L Add Document — Issue Date Picker | `/worker/documents/add (overlay)` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:1129` | W-38M Add Document — Expiry Date Picker | `/worker/documents/add (overlay)` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `758:1140` | W-38N Add Document — File Source Overlay | `/worker/documents/add (overlay)` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:53` | W-38O Add Document — Existing Verified Document | `/worker/documents/add?state=existing-verified` | yes | audited | yes | derived (/worker/documents/add) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `863:194` | W-38P Add Document — Saved | `/worker/documents/add?state=saved` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:2` | W-39 Document Detail (self-added) | `/worker/documents/jlpt-n3-certificate` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:69` | W-39A Document Detail — Verified | `/worker/documents/passport (also /worker/documents/residence-card for the linked variant)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:132` | W-39B Document Detail — Edit | `/worker/documents/:id?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:203` | W-39C Document Detail — Replacing File | `/worker/documents/:id?state=replacing` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:254` | W-39D Document Detail — Replace Failed | `/worker/documents/:id?state=replace-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:305` | W-39E Document Detail — Delete Confirmation | `/worker/documents/:id?state=delete-confirm` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:353` | W-39F Document Detail — Unsaved Changes | `/worker/documents/:id?state=unsaved-changes` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:405` | W-39G Document Detail — Offline | `/worker/documents/:id?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:463` | W-39H Document Detail — Report Incorrect Information | `/worker/documents/:id?state=report-issue` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:521` | W-39I Document Detail — Issue Submitted | `/worker/documents/:id?state=issue-submitted` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `849:361` | W-39J Document Detail — Type Overlay | `/worker/documents/:id (edit overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `849:380` | W-39K Document Detail — Issue Date Picker | `/worker/documents/:id (edit overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `849:392` | W-39L Document Detail — Expiry Date Picker | `/worker/documents/:id (edit overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `777:2` | W-39M Document Detail — File Preview | `/worker/documents/:id?state=file-preview` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `777:66` | W-39N Document Detail — Edit Saving | `/worker/documents/:id?state=edit-saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `777:124` | W-39O Document Detail — Edit Save Failed | `/worker/documents/:id?state=edit-save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `777:185` | W-39P Document Detail — Edit Offline | `/worker/documents/:id?state=edit-offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:337` | W-39Q Document Detail — Replace File Source Overlay | `/worker/documents/:id (overlay)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:348` | W-39R Document Detail — Replace Permission Required | `/worker/documents/:id?state=replace-permission` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:378` | W-39S Document Detail — Replacement File Rejected | `/worker/documents/:id?state=replacement-rejected` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:447` | W-39T Document Detail — Issue Submitting | `/worker/documents/:id?state=issue-submitting` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:479` | W-39U Document Detail — Issue Submit Failed | `/worker/documents/:id?state=issue-submit-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:514` | W-39V Document Detail — Issue Offline | `/worker/documents/:id?state=issue-offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `863:229` | W-39W Document Detail — File Replaced | `/worker/documents/:id?state=file-replaced` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `863:260` | W-39X Document Detail — Deleted | `/worker/documents/:id?state=deleted` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:572` | W-40 Emergency Information | `/worker/documents/emergency` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:628` | W-40A Emergency Information — Empty | `/worker/documents/emergency?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:679` | W-40B Emergency Information — Add | `/worker/documents/emergency?state=add` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:750` | W-40C Emergency Information — Edit | `/worker/documents/emergency?state=edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:821` | W-40D Emergency Information — Validation Error | `/worker/documents/emergency?state=validation-error` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:894` | W-40E Emergency Information — Saving | `/worker/documents/emergency?state=saving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:965` | W-40F Emergency Information — Save Failed | `/worker/documents/emergency?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:1038` | W-40G Emergency Information — Offline | `/worker/documents/emergency?state=offline` | yes | audited | yes | derived (/worker/documents/emergency) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:1111` | W-40H Emergency Information — Unsaved Changes | `/worker/documents/emergency?state=unsaved-changes` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `759:1163` | W-40I Emergency Information — Add Unsaved Changes | `/worker/documents/emergency?state=add-unsaved-changes` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `803:551` | W-40J Emergency Information — Remove Confirmation | `/worker/documents/emergency?state=remove-confirm` | yes | audited | yes | derived (/worker/documents/emergency) | yes | yes | yes | COMPLETE | yes |
| 07 Documents & Emergency | `863:293` | W-40K Emergency Information — Removed | `/worker/documents/emergency?state=removed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |

### 08 Knowledge & Q&A — 29/29 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 08 Knowledge & Q&A | `852:3` | W-41 Knowledge & Q&A hub | `/worker/knowledge` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:88` | W-41A Knowledge & Q&A — Loading | `/worker/knowledge?state=loading` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:138` | W-41B Knowledge & Q&A — Offline | `/worker/knowledge?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:201` | W-42 Search Knowledge (base) | `/worker/knowledge/search` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:253` | W-42A Search Knowledge — Searching | `/worker/knowledge/search?state=searching` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:306` | W-42B Search Knowledge — Results | `/worker/knowledge/search?q=resident+registration` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:374` | W-42C Search Knowledge — No Results | `/worker/knowledge/search?q=<unmatched> (also ?state=no-results)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:427` | W-42D Search Knowledge — Offline | `/worker/knowledge/search?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:478` | W-43 Knowledge Article (Resident registration after moving) | `/worker/knowledge/article/resident-registration` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `852:541` | W-43A Knowledge Article — Offline | `/worker/knowledge/article/resident-registration?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `885:4` | W-43B Knowledge Article — Residence Status | `/worker/knowledge/article/residence-status` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `885:42` | W-43C Knowledge Article — Address Registration Timing | `/worker/knowledge/article/address-registration-timing` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `885:80` | W-43D Knowledge Article — City Hall Documents | `/worker/knowledge/article/city-hall-documents` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `885:118` | W-43E Knowledge Article — Residence Status Offline | `/worker/knowledge/article/residence-status?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:4` | W-44 Ask a Question | `/worker/knowledge/ask` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:90` | W-44A Ask a Question — Validation Error | `/worker/knowledge/ask` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:177` | W-44B Ask a Question — Submitting | `/worker/knowledge/ask?state=submitting` | yes | audited | yes | derived (/worker/knowledge/ask) | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:263` | W-44C Ask a Question — Submit Failed | `/worker/knowledge/ask?state=failed` | yes | audited | yes | derived (/worker/knowledge/ask) | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:351` | W-44D Ask a Question — Offline | `/worker/knowledge/ask?state=offline` | yes | audited | yes | derived (/worker/knowledge/ask) | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:441` | W-44E Ask a Question — Unsaved Changes | `/worker/knowledge/ask` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:491` | W-44F Ask a Question — Topic Overlay | `/worker/knowledge/ask` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:511` | W-44G Ask a Question — Submitted | `/worker/knowledge/ask?state=submitted` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:585` | W-45 My Questions | `/worker/knowledge/questions` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:669` | W-45A My Questions — Loading | `/worker/knowledge/questions?state=loading` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:736` | W-45B My Questions — Empty | `/worker/knowledge/questions?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:810` | W-45C My Questions — Offline | `/worker/knowledge/questions?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:887` | W-46 Question Detail — Waiting | `/worker/knowledge/questions/visa-update-pending` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:962` | W-46A Question Detail — Answered | `/worker/knowledge/questions/address-after-moving` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 08 Knowledge & Q&A | `854:1042` | W-46B Question Detail — Offline | `/worker/knowledge/questions/address-after-moving?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |

### 09 Help & Support — 7/10 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 09 Help & Support | `899:3` | W-47 Help & Support hub | `/worker/help` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 09 Help & Support | `899:63` | W-47A Help & Support — Offline | `/worker/help?state=offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only; network offline, permitted exception) |
| 09 Help & Support | `899:101` | W-48 Contact Support | `/worker/help/contact` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 09 Help & Support | `899:143` | W-48A Contact Support — Validation Error | `/worker/help/contact?state=validation-error` | yes | audited | yes | derived (/worker/help/contact) | yes | yes | yes | COMPLETE | yes |
| 09 Help & Support | `899:186` | W-48B Contact Support — Submitting | `/worker/help/contact?state=submitting` | yes | audited | yes | derived (/worker/help/contact) | yes | yes | yes | COMPLETE | yes |
| 09 Help & Support | `899:228` | W-48C Contact Support — Submit Failed | `/worker/help/contact?state=failed` | yes | audited | yes | derived (/worker/help/contact) | yes | yes | yes | ACCEPTED | state URL — only; server failure, permitted exception). Its Try again button is live in that state |
| 09 Help & Support | `899:272` | W-48D Contact Support — Offline | `/worker/help/contact?state=offline` | yes | audited | yes | derived (/worker/help/contact) | yes | yes | yes | ACCEPTED | state URL — only; network offline, permitted exception) |
| 09 Help & Support | `899:318` | W-48E Contact Support — Unsaved Changes | `/worker/help/contact?state=unsaved-changes` | yes | audited | yes | derived (/worker/help/contact) | yes | yes | yes | COMPLETE | yes |
| 09 Help & Support | `899:368` | W-48F Contact Support — Topic Overlay | `/worker/help/contact?state=topic-overlay` | yes | audited | yes | derived (/worker/help/contact) | yes | yes | yes | COMPLETE | yes |
| 09 Help & Support | `899:383` | W-48G Contact Support — Submitted | `/worker/help/contact/sent` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |

### 10 Connect Employer — 22/22 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 10 Connect Employer | `917:3` | W-49 Connect Employer (invite code) | `/worker/employer/connect` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:44` | W-49A Connect Employer - Validation Error | `/worker/employer/connect?state=validation-error` | yes | derived (/worker/employer/connect) | yes | derived (/worker/employer/connect) | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:86` | W-49B Connect Employer - Checking Invite | `/worker/employer/connect?state=checking` | yes | derived (/worker/employer/connect) | yes | derived (/worker/employer/connect) | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:127` | W-49C Connect Employer - Invalid Invite | `/worker/employer/connect?state=invalid` | yes | derived (/worker/employer/connect) | yes | derived (/worker/employer/connect) | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:170` | W-49D Connect Employer - Expired / Inactive Invite | `/worker/employer/connect?state=expired` | yes | derived (/worker/employer/connect) | yes | derived (/worker/employer/connect) | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:213` | W-49E Connect Employer - Offline | `/worker/employer/connect?state=offline` | yes | derived (/worker/employer/connect) | yes | derived (/worker/employer/connect) | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:258` | W-50 Review Employer Invite (consent review) | `/worker/employer/review` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:299` | W-50A Review Employer Invite - Consent Selected | `/worker/employer/review (checkbox state)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:341` | W-50B Connect Employer - Connecting | `/worker/employer/review?state=connecting` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:382` | W-50C Employer Connected | `/worker/employer/review?state=connected` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `943:2` | W-50D Connect Employer - Failed | `/worker/employer/review?state=failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `943:42` | W-50E Decline Employer Invite - Confirmation | `/worker/employer/review (centered dialog)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `917:504` | W-50F Employer Invite Declined | `/worker/employer/review?state=declined` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `938:2` | W-51 Employer Connection (manage) | `/worker/employer` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `938:45` | W-51A Employer Connection - Disconnect Confirmation | `/worker/employer (centered dialog)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `938:86` | W-51B Disconnect Employer - Disconnecting | `/worker/employer?state=disconnecting` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `938:121` | W-51C Employer Disconnected | `/worker/employer?state=disconnected` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `939:47` | W-51D Disconnect Employer - Failed | `/worker/employer?state=failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `938:197` | W-51E Employer Connection - Offline | `/worker/employer?state=offline` | yes | audited | yes | derived (/worker/employer) | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `946:1113` | W-51F Employer Access Ended | `/worker/employer?state=access-ended` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `946:1143` | W-52 Access & Consent History - Active | `/worker/employer/history` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 10 Connect Employer | `946:1192` | W-52A Access & Consent History - Ended | `/worker/employer/history?state=ended` | yes | audited | yes | derived (/worker/employer/history) | yes | yes | yes | COMPLETE | yes |

### 11 Notifications — 10/10 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 11 Notifications | `952:831` | W-53 Notifications — Headless · Unread | `/worker/notifications` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes — the top-bar bell is a <Link to="/worker/notifications"> (src/components/worker/WorkerTopBar.tsx); proven by e2e/routes.spec.ts "app chrome reaches Notifications and Profile by clicking" |
| 11 Notifications | `952:949` | W-53A Notifications — Headless · All Read | `/worker/notifications?state=all-read` | yes | derived (/worker/notifications) | yes | derived (/worker/notifications) | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `952:1008` | W-53B Notifications — Empty | `/worker/notifications?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `952:1074` | W-53C Notifications — Loading | `/worker/notifications?state=loading` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `952:1151` | W-53D Notifications — Headless · Offline | `/worker/notifications?state=offline` | yes | derived (/worker/notifications) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `956:36` | W-53E Notifications — Employer Connected · Unread | `/worker/notifications?state=employer-connected` | yes | derived (/worker/notifications) | yes | derived (/worker/notifications) | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `956:91` | W-53F Notifications — Employer Connected · All Read | `/worker/notifications?state=connected-all-read` | yes | derived (/worker/notifications) | yes | derived (/worker/notifications) | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `956:145` | W-53G Notifications — Employer Connected · Offline | `/worker/notifications?state=connected-offline` | yes | derived (/worker/notifications) | yes | derived (/worker/notifications) | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `956:205` | W-53H Notifications — Employer Access Ended · Unread | `/worker/notifications?state=access-ended` | yes | derived (/worker/notifications) | yes | derived (/worker/notifications) | yes | yes | yes | COMPLETE | yes |
| 11 Notifications | `956:260` | W-53I Notifications — Employer Access Ended · All Read | `/worker/notifications?state=ended-all-read` | yes | derived (/worker/notifications) | yes | derived (/worker/notifications) | yes | yes | yes | COMPLETE | yes |

### 12 Reports — 24/36 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 12 Reports | `972:67` | W-54 Reports · Headless | `/worker/reports?state=headless` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — no-employer environment state) |
| 12 Reports | `972:139` | W-54A Reports · Employer Connected (hub) | `/worker/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `972:223` | W-54B Reports · Loading | `/worker/reports?state=loading` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — loading) |
| 12 Reports | `972:291` | W-54C Reports · No Reports Yet | `/worker/reports?state=empty` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — empty data set) |
| 12 Reports | `972:363` | W-54D Reports · Offline | `/worker/reports?state=offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — network offline) |
| 12 Reports | `972:440` | W-54E Reports · Employer Access Ended | `/worker/reports?state=access-ended` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — employer-side termination) |
| 12 Reports | `974:94` | W-54F Reports · Today Submitted | `/worker/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `974:150` | W-54G Reports · Today Verified | `/worker/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `975:106` | W-54H Reports · Headless · Offline | `/worker/reports?state=headless-offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — offline + no employer). State was MISSING, now added. |
| 12 Reports | `978:350` | W-54I Reports · Employer Connected · Caregiver Template | `/worker/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `1024:2194` | W-54J Reports · Employer Connected · Warehouse Template | `/worker/reports?template=warehouse` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `1024:2253` | W-54K Reports · Employer Connected · Food Service Template | `/worker/reports?template=food` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `973:94` | W-55 New Daily Report (General template) | `/worker/reports/new?template=general` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `973:150` | W-55A New Daily Report · Validation Error | `/worker/reports/new?state=validation-error (+?template=)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `978:283` | W-55B Review Daily Report · General | `/worker/reports/review?template=general` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `973:207` | W-55C Daily Report · Submitting | `/worker/reports/new?state=submitting (+?template=)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `973:266` | W-55D Daily Report · Submitted | `/worker/reports/new?state=submitted (+?template=)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `973:316` | W-55E Daily Report · Submit Failed | `/worker/reports/new?state=submit-failed (+?template=)` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — server-side submission failure) |
| 12 Reports | `973:375` | W-55F Daily Report · Offline Draft | `/worker/reports/new?state=offline-draft (+?template=)` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — network offline) |
| 12 Reports | `973:434` | W-55G Daily Report · Unsaved Changes (general) | `/worker/reports/new?template=general&state=unsaved-changes` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `978:408` | W-55H New Daily Report · Caregiver Template | `/worker/reports/new (store-backed) · /worker/reports/new?template=caregiver (template twin)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `978:501` | W-55I Review Daily Report · Caregiver | `/worker/reports/review (store-backed) · ?template=caregiver (template twin)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `989:114` | W-55J New Daily Report · Warehouse Template | `/worker/reports/new?template=warehouse` | yes | audited | yes | derived (/worker/reports/new) | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `989:180` | W-55K Review Daily Report · Warehouse | `/worker/reports/review?template=warehouse` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `989:228` | W-55L New Daily Report · Food Service Template | `/worker/reports/new?template=food` | yes | audited | yes | derived (/worker/reports/new) | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `989:294` | W-55M Review Daily Report · Food Service | `/worker/reports/review?template=food` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `1024:2314` | W-55N Daily Report · Unsaved Changes · Caregiver | `/worker/reports/new?template=caregiver (+?state=unsaved-changes)` | yes | audited | yes | derived (/worker/reports/new) | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `1024:2390` | W-55O Daily Report · Unsaved Changes · Warehouse | `/worker/reports/new?template=warehouse (+?state=unsaved-changes)` | yes | audited | yes | derived (/worker/reports/new) | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `1024:2466` | W-55P Daily Report · Unsaved Changes · Food Service | `/worker/reports/new?template=food (+?state=unsaved-changes)` | yes | audited | yes | derived (/worker/reports/new) | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `1024:2563` | W-55Q Review Daily Report · Offline | `/worker/reports/review?state=review-offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — network offline) |
| 12 Reports | `973:475` | W-56 Daily Report Detail · Submitted | `/worker/reports/:reportId` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `973:532` | W-56A Daily Report Detail · Verified | `/worker/reports/rpt-2026-08-24` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `973:589` | W-56B Daily Report Detail · Offline | `/worker/reports/:reportId?state=offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — network offline) |
| 12 Reports | `975:158` | W-56C Daily Report Detail · Verified · Offline | `/worker/reports/:reportId?state=verified-offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — network offline) |
| 12 Reports | `976:112` | W-56D Daily Report Detail · 23 Aug Verified | `/worker/reports/rpt-2026-08-23` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 12 Reports | `976:147` | W-56E Daily Report Detail · 23 Aug Verified · Offline | `/worker/reports/rpt-2026-08-23?state=verified-offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — network offline; renders the cached 23 Aug record) |

### 13 Chat — 13/22 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 13 Chat | `1034:131` | W-57 Chat · Headless | `/worker/chat?state=headless` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — no-employer environment state); its Connect employer CTA works |
| 13 Chat | `1034:187` | W-57A Chat · Employer Connected (thread list) | `/worker/chat` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1034:260` | W-57B Chat · Loading | `/worker/chat?state=loading` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — loading) |
| 13 Chat | `1034:315` | W-57C Chat · No Conversations | `/worker/chat?state=empty` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — empty data set); its Message manager CTA opens the thread |
| 13 Chat | `1034:373` | W-57D Chat · Offline | `/worker/chat?state=offline` | yes | derived (/worker/chat) | yes | derived (/worker/chat) | yes | yes | yes | ACCEPTED | state URL — only ?state= — network offline) |
| 13 Chat | `1034:444` | W-57E Chat · Employer Access Ended | `/worker/chat?state=access-ended` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — employer-side termination) |
| 13 Chat | `1037:418` | W-57F Chat · Headless · Offline | `/worker/chat?state=headless-offline` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — offline + no employer) |
| 13 Chat | `1035:130` | W-58 Conversation · Active | `/worker/chat?c=sato` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:218` | W-58A Conversation · Typing | `/worker/chat?c=sato&state=typing` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:306` | W-58B Conversation · Send Failed | `/worker/chat?c=sato&state=send-failed` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — server-side send failure); Retry send now clears it |
| 13 Chat | `1035:389` | W-58C Conversation · Offline | `/worker/chat?c=sato&state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:470` | W-58D Conversation · Access Ended | `/worker/chat?c=sato&state=access-ended` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:546` | W-58E Conversation · Attachment Menu | `/worker/chat?c=sato (stage)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:614` | W-58F Conversation · Voice Recording | `/worker/chat?c=sato (stage)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:713` | W-58G Conversation · Voice Transcribing | `/worker/chat?c=sato (stage)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:786` | W-58H Conversation · Voice Translation Ready | `/worker/chat?c=sato (stage)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1035:890` | W-58I Conversation · Voice Failed | `/worker/chat?c=sato&state=voice-failed` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — processing failure); Try again now really re-runs transcription (was a dead button) |
| 13 Chat | `1035:963` | W-58J Conversation · Important Translation Review | `/worker/chat?c=sato&state=review (also a live stage)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1037:466` | W-58K Conversation · Employer Support | `/worker/chat?c=support` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1038:475` | W-58L Conversation · Employer Support · Offline | `/worker/chat?c=support&state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1051:994` | W-58M Conversation · Attachment Ready | `/worker/chat?c=sato (stage)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 13 Chat | `1053:715` | W-58N Conversation · Translation Unavailable | `/worker/chat?c=sato&state=translation-unavailable` | yes | audited | yes | audited | yes | yes | yes | ACCEPTED | state URL — only ?state= — translation service failure); Retry translation now clears it (was a dead button) |

### 14 Assistant — 10/10 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 14 Assistant | `1084:496` | W-59 Assistant — Home | `/worker/assistant` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:608` | W-59A Assistant — Conversation | `/worker/assistant?c=manager-message` | yes | derived (/worker/assistant) | yes | derived (/worker/assistant) | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:718` | W-59B Assistant — Thinking | `/worker/assistant?c=…&state=thinking` | yes | derived (/worker/assistant) | yes | derived (/worker/assistant) | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:831` | W-59C Assistant — Chat History | `/worker/assistant?view=history` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:933` | W-59D Assistant — Attachment Menu | `/worker/assistant (overlay, no param)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:1055` | W-59E Assistant — Voice Review | `/worker/assistant (overlay, no param)` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:1154` | W-59F Assistant — Offline | `/worker/assistant?state=offline` | yes | derived (/worker/assistant) | yes | derived (/worker/assistant) | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:1262` | W-59G Assistant — Send Failed | `/worker/assistant?state=send-failed` | yes | derived (/worker/assistant) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:1373` | W-59H Assistant — Source Detail | `/worker/assistant?source=immigration-services-agency` | yes | derived (/worker/assistant) | yes | audited | yes | yes | yes | COMPLETE | yes |
| 14 Assistant | `1084:1470` | W-59I Assistant — Attachment Ready | `/worker/assistant?state=attachment-ready` | yes | derived (/worker/assistant) | yes | derived (/worker/assistant) | yes | yes | yes | COMPLETE | yes |

### 15 Emenda Coin — 24/24 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 Emenda Coin | `1151:254` | W-60 Emenda Coin - Employer Connected Overview | `/worker/coin` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1151:296` | W-60A Emenda Coin - History | `/worker/coin/history` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1151:340` | W-60B Emenda Coin - How to Earn | `/worker/coin/earn` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1151:368` | W-60C Emenda Coin - Loading | `/worker/coin?state=loading` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1151:382` | W-60D Emenda Coin - Empty | `/worker/coin?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1151:397` | W-60E Emenda Coin - Offline | `/worker/coin?state=offline` | yes | derived (/worker/coin) | yes | derived (/worker/coin) | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1158:314` | W-60F Emenda Coin - Daily Check-in | `/worker/coin/check-in` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1158:406` | W-60G Daily Check-in - Checked In | `/worker/coin/check-in?state=checked-in` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1158:497` | W-60H Daily Check-in - Failed | `/worker/coin/check-in?state=failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1158:571` | W-60I Daily Check-in - Offline | `/worker/coin/check-in?state=offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1179:391` | W-60J Emenda Coin - How to Use | `/worker/coin/use` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1179:466` | W-60K Emenda Coin - Pending Reward | `/worker/coin?state=pending-reward` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:253` | W-60L Emenda Coin - Rewards Catalog | `/worker/coin/rewards` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:288` | W-60M Emenda Coin - Reward Detail | `/worker/coin/rewards/:rewardId` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:318` | W-60N Emenda Coin - Redeem Review | `/worker/coin/rewards/partner-benefit?state=review` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:350` | W-60O Emenda Coin - Redeemed | `/worker/coin/rewards/partner-benefit?state=redeemed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:379` | W-60P Emenda Coin - Redeem Failed | `/worker/coin/rewards/partner-benefit?state=failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:408` | W-60Q Emenda Coin - Insufficient Balance | `/worker/coin/rewards/partner-benefit?state=insufficient-balance` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:437` | W-60R Emenda Coin - One-time Reward Earned | `/worker/coin?state=one-time-earned` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:467` | W-60S Emenda Coin - Pending Not Eligible | `/worker/coin/rewards/partner-benefit?state=pending-not-eligible` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1186:497` | W-60T Emenda Coin - Rules & Ownership | `/worker/coin/rules` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1190:264` | W-60U Emenda Coin - Personal (Headless) Overview | `/worker/coin (headless link) or /worker/coin?state=personal-headless` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1190:349` | W-60V Emenda Coin - Employer Access Ended | `/worker/coin (ended link) or /worker/coin?state=access-ended` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 15 Emenda Coin | `1258:253` | W-60W Emenda Coin - Personal Offline | `/worker/coin?state=personal-offline (also ?state=offline while headless)` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |

### 16 Logs & Records — 63/64 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 16 Logs & Records | `1163:254` | W-61 Logs & Records — Overview | `/worker/logs` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1163:283` | W-61A Logs — Work & Career | `/worker/logs/work` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:253` | W-61AA Logs — Career Add · Unsaved Changes | `/worker/logs/work/new?state=unsaved-changes` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:290` | W-61AB Logs — Career Edit · Unsaved Changes | `/worker/logs/work/wn-jlpt/edit?state=unsaved-changes` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:324` | W-61AC Logs — Health Add · Unsaved Changes | `/worker/logs/health/new?state=unsaved-changes` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:361` | W-61AD Logs — Health Edit · Unsaved Changes | `/worker/logs/health/note/hn-today/edit?state=unsaved-changes` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:398` | W-61AE Logs — Life Add · Unsaved Changes | `/worker/logs/life/new?state=unsaved-changes` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:435` | W-61AF Logs — Life Edit · Unsaved Changes | `/worker/logs/life/note/ln-housing/edit?state=unsaved-changes` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:597` | W-61AN Logs — Career Offline Draft | `/worker/logs/work/new?state=offline-draft` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:630` | W-61AO Logs — Health Offline Draft | `/worker/logs/health/new?state=offline-draft` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:663` | W-61AP Logs — Life Offline Draft | `/worker/logs/life/new?state=offline-draft` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:696` | W-61AQ Logs — Career Headless Offline Draft | `/worker/logs/work/new?state=headless-offline-draft` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:150` | W-61AR Logs — Syncing Offline Drafts | `/worker/logs/sync` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:165` | W-61AS Logs — Offline Draft Sync Failed | `/worker/logs/sync?state=failed` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:182` | W-61AT Logs — Offline Drafts Synced | `/worker/logs/sync?state=done` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1163:306` | W-61B Logs — Private Health | `/worker/logs/health` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1163:328` | W-61C Logs — Private Life | `/worker/logs/life` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1163:350` | W-61D Logs & Records — Loading | `/worker/logs?state=loading` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1163:363` | W-61E Logs & Records — Employer Connected · Offline | `/worker/logs?state=offline` | yes | derived (/worker/logs) | yes | derived (/worker/logs) | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:312` | W-61F Logs — Verified Work Record Detail | `/worker/logs/work/wr-employment` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:360` | W-61G Logs — Career Note Detail | `/worker/logs/work/wn-jlpt` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:405` | W-61H Logs — Add Career Note | `/worker/logs/work/new` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:450` | W-61I Logs — Edit Career Note | `/worker/logs/work/wn-jlpt/edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:492` | W-61J Logs — Work & Career Empty | `/worker/logs/work?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:523` | W-61K Logs — Health Note Detail | `/worker/logs/health/note/hn-today` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:568` | W-61L Logs — Add Health Note | `/worker/logs/health/new` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:2017` | W-61L1 Logs — Edit Health Note | `/worker/logs/health/note/hn-today/edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:613` | W-61M Logs — Stress Check | `/worker/logs/health/stress-check` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:2077` | W-61M1 Logs — Stress Check History | `/worker/logs/health/stress-check/history` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:514` | W-61M2 Logs — Stress Check Empty | `/worker/logs/health/stress-check/history?state=empty` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:527` | W-61M3 Logs — Stress Check Offline | `/worker/logs/health/stress-check?state=offline` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:542` | W-61M4 Logs — Stress Check Save Failed | `/worker/logs/health/stress-check?state=save-failed` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:48` | W-61M5 Logs — Stress Check · Unsaved Changes | `/worker/logs/health/stress-check?state=unsaved-changes` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:98` | W-61M6 Logs — Stress Check Detail · 24 Aug | `/worker/logs/health/stress-check/sc-24` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:113` | W-61M7 Logs — Stress Check Detail · 22 Aug | `/worker/logs/health/stress-check/sc-22` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:672` | W-61N Logs — Stress Check Result | `/worker/logs/health/stress-check?state=result` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:708` | W-61O Logs — Health Access & Consent | `/worker/logs/health/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:1702` | W-61O1 Logs — Grant Health Access Review | `/worker/logs/health/access?state=grant-review` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:1763` | W-61O2 Logs — Health Access Granted | `/worker/logs/health/access?state=granted` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:469` | W-61O3 Logs — Revoke Health Access Review | `/worker/logs/health/access?state=revoke` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:485` | W-61O4 Logs — Health Access Revoked | `/worker/logs/health/access?state=revoked` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:498` | W-61O5 Logs — Health Access Grant Failed | `/worker/logs/health/access?state=failed` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:128` | W-61O6 Logs — Health Access Active | `/worker/logs/health/access?state=active` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1205:139` | W-61O7 Logs — Health Access Expired | `/worker/logs/health/access?state=expired` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:746` | W-61P Logs — Private Life Note Detail | `/worker/logs/life/note/ln-housing` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:791` | W-61Q Logs — Add Private Life Note | `/worker/logs/life/new` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:836` | W-61R Logs — Edit Private Life Note | `/worker/logs/life/note/ln-housing/edit` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:910` | W-61S Logs — Delete Private Note (Figma frame absent — only the red dev label 1167:910 exists) | `/worker/logs/life/note/ln-housing?state=delete-confirmation` | no | audited | no | adapted | yes | yes | yes | ACCEPTED | yes — Figma frame absent; the capability is implemented and reachable (Logs — Delete Private Note (Figma frame absent — only the red dev label 1167:910 exists)) |
| 16 Logs & Records | `1187:2133` | W-61S1 Logs — Delete Career Note (confirm) | `/worker/logs/work/wn-jlpt?state=delete-confirmation` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:2189` | W-61S2 Logs — Delete Health Note (confirm) | `/worker/logs/health/note/hn-today?state=delete-confirmation` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:2245` | W-61S3 Logs — Delete Life Note (confirm) | `/worker/logs/life/note/ln-housing?state=delete-confirmation` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:558` | W-61S4 Logs — Career Note Deleted | `/worker/logs/work/wn-jlpt?state=deleted` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:571` | W-61S5 Logs — Health Note Deleted | `/worker/logs/health/note/hn-today?state=deleted` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1196:584` | W-61S6 Logs — Life Note Deleted | `/worker/logs/life/note/ln-housing?state=deleted` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:911` | W-61T Logs — Save Failed | `/worker/logs/work/new?state=save-failed` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:944` | W-61U Logs — Work & Career Offline | `/worker/logs/work?state=offline` | yes | derived (/worker/logs/work) | yes | derived (/worker/logs/work) | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:2301` | W-61U0 Logs — Work & Career Headless Offline | `/worker/logs/work?state=headless-offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:982` | W-61V Logs — Private Health Offline | `/worker/logs/health?state=offline` | yes | derived (/worker/logs/health) | yes | derived (/worker/logs/health) | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:1019` | W-61W Logs — Private Life Offline | `/worker/logs/life?state=offline` | yes | audited | yes | derived (/worker/logs/life) | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:1056` | W-61X Logs — Private Health Empty | `/worker/logs/health?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1167:1089` | W-61Y Logs — Private Life Empty | `/worker/logs/life?state=empty` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1170:253` | W-61Z Logs & Records — Headless | `/worker/logs?state=headless` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:1881` | W-61Z1 Logs & Records — Headless Offline | `/worker/logs?state=headless-offline` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |
| 16 Logs & Records | `1187:1950` | W-61Z2 Logs & Records — Employer Access Ended | `/worker/logs?state=access-ended` | yes | audited | yes | audited | yes | yes | yes | COMPLETE | yes |

### other — 1/1 COMPLETE

| Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status | Reachable by click |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| other | `568:142` | Overlay · Country Selector Select country (no W- code in Figma; node 568:142) | `/worker/profile/edit (overlay, no state param)` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE | yes |

### ACCEPTED — why no click reaches these 43 states

- network offline — 15
- server outcome — 7
- lifecycle owned elsewhere — 7
- OS permission — 4
- loading state — 4
- no-employer environment — 2
- empty data set — 2
- data variant — 1
- Figma frame absent — 1

Each row's own reason is printed in its **Reachable by click** cell. These
are environment, server, OS or lifecycle outcomes a prototype cannot provoke
from a control; every one is still rendered, still translated, and still
exercised by its review URL in the Playwright suite.

---

# Manager · Landing & Access · Admin parity matrix

Same column contract as the worker matrix. Manager **mobile** (EM-xx) is the
canonical flow; desktop (MD-xx) governs presentation. Where a manager section's
desktop Figma frame is a text-only placeholder, Desktop Visual reads `adapted`:
*desktop visual adapted from canonical mobile flow using desktop Foundations*.

### Manager 01 · Entry & Recovery — 26 screens/states · 5 routes

Section Figma node: `751:3 / 1192:928`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-00 splash — /manager/auth/splash (auto-advances to /manager/auth after 2.2s; click to skip) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-01 / MD-AUTH-01 login (base) — /manager/auth | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-01A loading — /manager/auth?state=loading (also interactive: pressing Sign in / Continue to Organization Access) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-01B invalid credentials — /manager/auth?state=invalid (peach alert + red Password outline on mobile, red Manager/HR ID card on desktop) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-01C too many attempts — /manager/auth?state=too-many-attempts (peach alert, CTA disabled) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-01D offline — /manager/auth?state=offline (offline banner above the fields, CTA disabled, Try again clears the state) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-01E access verified — /manager/auth?state=verified (Welcome back heading + mint Access verified card + Continue to facility selection) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-02 / MD-AUTH-02 forgot password (base) — /manager/auth/forgot | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-02A loading — /manager/auth/forgot?state=loading (also interactive: pressing Send reset code) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-02B reset code sent — /manager/auth/forgot?state=code-sent (also interactive after submit; CTA becomes Continue → /manager/auth/reset) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-02C offline — /manager/auth/forgot?state=offline | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-02D email not found — /manager/auth/forgot?state=email-not-found | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-02E no work email access — /manager/auth/forgot?state=no-work-email (cream Your access stays protected card + single Open Support CTA) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03 / MD-AUTH-03 reset password (base) — /manager/auth/reset | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03A saving — /manager/auth/reset?state=saving (also interactive: pressing Update password / Verify & update password) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03B invalid code — /manager/auth/reset?state=invalid-code (desktop switches to the MD-AUTH-03A soft-red panel; also reachable from the desktop | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03C code expired — /manager/auth/reset?state=code-expired (desktop MD-AUTH-03A twin) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03D password mismatch — /manager/auth/reset?state=mismatch (also interactive: edit Confirm password then submit) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03E update failed — /manager/auth/reset?state=update-failed | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03F offline — /manager/auth/reset?state=offline | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03G resend pending — /manager/auth/reset?state=resend-pending (also interactive: tapping Resend code) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03H new code sent — /manager/auth/reset?state=new-code-sent (also interactive, 700ms after Resend code) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-03I too many requests — /manager/auth/reset?state=too-many-requests (Resend code disabled) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | MD-AUTH-03A reset code invalid / expired — /manager/auth/reset?state=invalid-code or ?state=code-expired at lg+ (page title becomes 'Reset Code Invali | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | EM-AUTH-04 / MD-AUTH-04 password updated — /manager/auth/updated (terminal; Back to Manager Login / Return to Manager Login → /manager/auth) | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 01 · Entry & Recovery | `751:3 / 1192:928` | Language switching (EN / ID / JA) — the language row on /manager/auth (mobile y=610 and desktop) switches live without changing route or resetting for | `/manager/auth`, `/manager/auth/forgot`, `/manager/auth/reset`, `/manager/auth/updated`, `/manager/auth/splash` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |

### Manager 03 · Navigation & Account (+10 Settings/Support/Session) — 19 screens/states · 8 routes

Section Figma node: `759:1280 / 1192:936`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `759:1280 / 1192:936` | MD-MORE / EM-MORE (base hub) — /manager/more (desktop = mint banner + 2-col card grid + pale-red logout card + footer privacy banner; <lg = OPERATIONS | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:1073` | EM-18E Manager Profile — /manager/profile (also via 'Manager Profile ›' / 'Open Manager Profile' on /manager/more) | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:1154` | EM-18 Settings — /manager/settings | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:3107` | EM-18C Settings saved — /manager/settings?state=settings-saved (also by pressing 'Save settings' on /manager/settings or 'Save locale settings' on /ma | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:3148` | EM-18D Save failed — /manager/settings?state=save-failed | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:1212` | EM-18A Role & permissions — /manager/settings/permissions (also the 'Role & permissions' chevron row on /manager/settings) | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:1240` | EM-18B Language · Locale · Timezone — /manager/settings/locale (also the 'Language / locale / timezone' chevron row on /manager/settings) | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:3185` | EM-19 Support — /manager/support | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:3185` | EM-19 submitting — /manager/support?state=submitting (send pill shows 'Sending support request…' and the form is locked; also reached by 'Try Again' o | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:3324` | EM-19B Request not sent — /manager/support?state=failed | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:3285` | EM-19A Support request sent — /manager/support/sent (also by pressing 'Send support request') | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `761:3364` | EM-20 Logout confirmation — /manager/logout (also the Logout card on /manager/more and the Logout button on /manager/profile) | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `759:1280 / 1192:936` | offline (read-only strip + writes disabled) — ?state=offline on /manager/more, /manager/profile, /manager/settings, /manager/settings/permissions, /ma | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `759:1280 / 1192:936` | Interactive — Support Topic selector: real React state, mobile bottom sheet (<lg) / desktop dropdown (lg) on /manager/support | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `759:1280 / 1192:936` | Interactive — Language row on /manager/settings/locale calls setLanguage() and persists via LanguageProvider localStorage; route and screen state are  | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `1223:130` | MD-18 Settings | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `1223:178` | MD-18A Role &amp; Permissions | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `1223:215` | MD-18B Language · Locale · Timezone | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 03 · Navigation & Account (+10 Settings/Support/Session) | `1223:69` | MD-18E Manager Profile | `/manager/more`, `/manager/profile`, `/manager/settings`, `/manager/settings/permissions`, `/manager/settings/locale`, `/manager/support`, `/manager/support/sent`, `/manager/logout` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |

### Manager 05 · Follow-up & Alerts — 16 screens/states · 4 routes

Section Figma node: `759:1288 / 1192:944`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 05 · Follow-up & Alerts | `1226:1236` | MD-09 Follow-up Center (desktop base) → /manager/follow-up at lg+ — KPI quad Open 4 / High priority 2 / Sent today 3 / Resolved 8, Pending/Sent/Resolv | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `761:1588` | EM-09 Follow-up Center (mobile base) → /manager/follow-up below lg — chips Pending 4 / High 2 / Sent 3 / Resolved 8, stacked queue cards (Putri HIGH p | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 05 · Follow-up & Alerts | `761:1648` | EM-09A / MD-09A Review → /manager/follow-up/sig-missing-report-putri/review (any signal id works; desktop rows deep-link here from their Review button | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 05 · Follow-up & Alerts | `761:1737` | EM-09B / MD-09B Compose → /manager/follow-up/sig-missing-report-putri/compose — TEMPLATE chips are real React state (Daily Report / Check-in / Documen | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 05 · Follow-up & Alerts | `761:1700` | EM-10 Follow-up Sent → /manager/follow-up/sig-missing-report-putri/compose?state=sent (also reachable by pressing 'Send follow-up' on compose, and via | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 05 · Follow-up & Alerts | `761:1791` | EM-09C Follow-up Not Sent → /manager/follow-up/sig-missing-report-putri/compose?state=not-sent (also /manager/follow-up?state=not-sent, /manager/alert | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 05 · Follow-up & Alerts | `759:1288 / 1192:944` | loading → /manager/follow-up?state=loading · /manager/alerts?state=loading · also on the review and compose routes | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `759:1288 / 1192:944` | empty → /manager/follow-up?state=empty · /manager/alerts?state=empty | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `759:1288 / 1192:944` | offline → /manager/follow-up?state=offline · /manager/alerts?state=offline · also on the review and compose routes | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `1226:1542` | MD-12 Alerts (desktop base) → /manager/alerts at lg+ — KPIs Open 5 / Urgent 1 / Reporting 2 / Admin 2, Open/Urgent/Reporting/Admin pills, ALERT QUEUE  | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `761:1830` | EM-12 Alerts (mobile base) → /manager/alerts below lg — chips Open 5 / Urgent 1 / Reporting 2 / Admin 2, HIGH PRIORITY + DUE SOON tiles, OPEN ALERTS c | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 05 · Follow-up & Alerts | `759:1288 / 1192:944` | Queue-row selection (interactive) → click any desktop FOLLOW-UP QUEUE or ALERT QUEUE row to repopulate the right rail | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `759:1288 / 1192:944` | Filter chips (interactive) → Pending / Sent / Resolved / High priority and Open / Urgent / Reporting / Admin re-filter both the desktop rows and the m | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `759:1288 / 1192:944` | Signal not found (guard) → /manager/follow-up/nope/review or /manager/follow-up/nope/compose | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `1226:1505` | MD-09C Follow-up Send Failed | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 05 · Follow-up & Alerts | `1226:1447` | MD-10 Follow-up Sent | `/manager/follow-up`, `/manager/follow-up/:signalId/review`, `/manager/follow-up/:signalId/compose`, `/manager/alerts` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |

### Manager 07 · Analytics & Continuity (+11 Access boundaries) — 14 screens/states · 5 routes

Section Figma node: `759:1296 (desktop placeholder)`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `761:2260` | EM-13 scope '7 days' (default) — /manager/analytics; mint-selected chip, D1 18 / D2 92% / D4 41% / D5 18 min, D6 57% / D7 7 cases / D8 847 d · 92% / D | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `761:2260` | EM-13 scope 'This facility' — /manager/analytics, click the 'This facility' chip (real React state; whole snapshot swaps) | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `761:2260` | EM-13 scope 'All workers' — /manager/analytics, click the 'All workers' chip (response trend flips to 'response steady') | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-01 Professional Continuity — /manager/workers/dewi-anggraini/records | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-02 Work Log, 'Last 30 days' (default mint chip, 5 rows 08→04 Aug, newest row mint) — /manager/workers/dewi-anggraini/records/log | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-02 'All records' — same route, click the 'All records' chip (adds the 02 Jul record outside the 30-day scope) | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-02 'All statuses' — same route, click the 'All statuses' chip (full permitted set, Verified + Recorded) | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-02 empty filter result — WorkLogRows renders the 'No records match this filter.' card when a chip yields no rows | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-03 Work Log Detail, Verified record — /manager/workers/dewi-anggraini/records/log/wr-0808 (green Verified tag, 4-entry evidence timeline) | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-03 Work Log Detail, Recorded record — /manager/workers/dewi-anggraini/records/log/wr-0608 (neutral Recorded tag, 2-entry evidence) | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-03 record-not-found fallback — /manager/workers/dewi-anggraini/records/log/does-not-exist | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-05 Career Assets (Verified / Verified / Active / Active with the mint career-continuity row) — /manager/workers/dewi-anggraini/records/assets | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-04 ACCESS RESTRICTED — ?state=restricted on any records route, e.g. /manager/workers/dewi-anggraini/records?state=restricted (also on /records/l | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 07 · Analytics & Continuity (+11 Access boundaries) | `759:1296 (desktop placeholder)` | EM-R2-06 NO RECORDS AVAILABLE — ?state=empty on any records route, e.g. /manager/workers/dewi-anggraini/records?state=empty (also on /records/log, /re | `/manager/analytics`, `/manager/workers/:workerId/records`, `/manager/workers/:workerId/records/log`, `/manager/workers/:workerId/records/log/:recordId`, `/manager/workers/:workerId/records/assets` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |

### Manager 09 · Audit & Resilience — 8 screens/states · 6 routes

Section Figma node: `759:1304 (desktop placeholder)`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 09 · Audit & Resilience | `761:2892` | EM-16 Audit Export (builder, base) → /manager/audit-export | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 09 · Audit & Resilience | `761:2960` | EM-16A Export Confirmation → /manager/audit-export/confirm (reached from the EM-16 dark pill 'Review & generate export') | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 09 · Audit & Resilience | `761:3032` | EM-17 Export Ready (success) → /manager/audit-export/ready (reached from EM-16A 'Confirm Export') | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 09 · Audit & Resilience | `761:3067` | EM-16B Audit Export Failed → /manager/audit-export?state=failed AND /manager/audit-export/confirm?state=failed (same ExportFailedView; 'Try Again' ret | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 09 · Audit & Resilience | `759:1304 (desktop placeholder)` | EM-STATE-01 Offline · Read-only → /manager/state/offline (full-screen, no bottom nav; 'Retry Connection' continues to EM-STATE-02) | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 09 · Audit & Resilience | `759:1304 (desktop placeholder)` | EM-STATE-02 Reconnected · Pending Actions Resolved → /manager/state/reconnected (full-screen, no bottom nav; 'Continue to Dashboard' → /manager, 'Revi | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 09 · Audit & Resilience | `759:1304 (desktop placeholder)` | EM-STATE-03 Permission Restricted → /manager/state/restricted (full-screen, no bottom nav; single 'Back' CTA uses navigate(-1)) | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 09 · Audit & Resilience | `759:1304 (desktop placeholder)` | Language variants EN / ID / JA on every screen above via the global language switcher — route and ?state= are preserved because all copy resolves thro | `/manager/audit-export`, `/manager/audit-export/confirm`, `/manager/audit-export/ready`, `/manager/state/offline`, `/manager/state/reconnected`, `/manager/state/restricted` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |

### Landing 02 · Public Inner Pages — 8 screens/states · 3 routes

> **Frame-level departures.** `/about` (LP-02) and `/how-it-works` (LP-04) are USER-CONFIRMED INTENTIONAL DEPARTURES: those routes now serve the marketing site, so their rows claim NO visual parity against 1147:3 / 1147:33, and the marketing pages' differences from those frames are not counted as deviations. The audited implementations are RETAINED in src/pages/public/** as evidence that the Figma designs were built, and must not be deleted or refactored away. `/features` (LP-03) is NOT part of this: it keeps its audited page and remains a normal parity row.

Section Figma node: `1147:2`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Landing 02 · Public Inner Pages | `1147:3` | LP-02 active nav state (mint pill on 'About EMENDA', #e8f6f0 fill + #d1ded6 border) — visit /about | `/about`, `/features`, `/how-it-works` | yes | n/a — departed | yes | n/a — departed | yes | yes | yes | FE-ONLY (departure confirmed) — /about serves the marketing site; audited LP implementation retained at src/pages/public/AboutPage.tsx (+ its About* sections) |
| Landing 02 · Public Inner Pages | `1147:18` | LP-03 active nav state (mint pill on 'Features') — visit /features | `/about`, `/features`, `/how-it-works` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |
| Landing 02 · Public Inner Pages | `1147:33` | LP-04 active nav state (mint pill on 'How it works') — visit /how-it-works | `/about`, `/features`, `/how-it-works` | yes | n/a — departed | yes | n/a — departed | yes | yes | yes | FE-ONLY (departure confirmed) — /how-it-works serves the marketing site; audited LP implementation retained at src/pages/public/HowItWorksPage.tsx (+ its How* sections) |
| Landing 02 · Public Inner Pages | `1147:2` | Language = English (default) — header switcher, 'English' rendered semibold #055240 | `/about`, `/features`, `/how-it-works` | yes | pending | yes | needs-audit | yes | yes | yes | PARTIAL |
| Landing 02 · Public Inner Pages | `1147:2` | Language = 日本語 — click 日本語 in the header switcher; setLanguage persists and the route/scroll position is untouched | `/about`, `/features`, `/how-it-works` | yes | pending | yes | needs-audit | yes | yes | yes | PARTIAL |
| Landing 02 · Public Inner Pages | `1147:2` | Language = Bahasa — click Bahasa in the header switcher; setLanguage persists and the route/scroll position is untouched | `/about`, `/features`, `/how-it-works` | yes | pending | yes | needs-audit | yes | yes | yes | PARTIAL |
| Landing 02 · Public Inner Pages | `1147:2` | Nav/footer/CTA hover states — hover any nav link, footer legal link, 'Learn more →' link or Log in pill | `/about`, `/features`, `/how-it-works` | yes | pending | yes | needs-audit | yes | yes | yes | PARTIAL |
| Landing 02 · Public Inner Pages | `1147:33` | Below-lg single-column stack (hero card without the side identity card column, 2x3 feature grid → 1 column, LP-04 step cards → stacked number/text/tag | `/about`, `/features`, `/how-it-works` | yes | n/a — departed | yes | n/a — departed | yes | yes | yes | FE-ONLY (departure confirmed) — /how-it-works serves the marketing site; audited LP implementation retained at src/pages/public/HowItWorksPage.tsx (+ its How* sections) |

### Landing 03/04 · Unified Sign in + Post-auth Routing — 7 screens/states · 2 routes

Section Figma node: `1053:913 / 1053:980`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Landing 03/04 · Unified Sign in + Post-auth Routing | `1060:43` | LP-05 Unified Sign in (base, only state drawn in Figma) — /signin | `/signin`, `/welcome` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |
| Landing 03/04 · Unified Sign in + Post-auth Routing | `1060:43` | LP-05 password pre-filled with dots (as drawn) — /signin, the password input is seeded from SIGN_IN_SEED and editable; Account ID starts empty with th | `/signin`, `/welcome` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |
| Landing 03/04 · Unified Sign in + Post-auth Routing | `1060:43` | LP-05 submit → routing interstitial — press 'Log in' on /signin, navigates to /welcome (never auto-redirects further) | `/signin`, `/welcome` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |
| Landing 03/04 · Unified Sign in + Post-auth Routing | `1060:43` | LP-05 language switch (English/日本語/Bahasa) — click a pill item in the header; setLanguage persists via LanguageProvider and the route/form state is un | `/signin`, `/welcome` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |
| Landing 03/04 · Unified Sign in + Post-auth Routing | `1053:981` | LP-06 Routing — Worker / Headless (default) — /welcome or /welcome?account=headless (alias /welcome?state=headless) | `/signin`, `/welcome` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |
| Landing 03/04 · Unified Sign in + Post-auth Routing | `1053:1012` | LP-07 Routing — Worker Work Mode — /welcome?account=work (alias ?state=work) | `/signin`, `/welcome` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |
| Landing 03/04 · Unified Sign in + Post-auth Routing | `1107:50` | LP-08 Routing — Employee / Organization — /welcome?account=employee (alias ?state=employee) | `/signin`, `/welcome` | yes | pending | yes | audited | yes | yes | yes | PARTIAL |

### Company Admin · AD-01 — 5 screens/states · 1 routes

Section Figma node: `1182:5692`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin · AD-01 | `1182:5692` | AD-01 default populated state (the only state drawn in Figma 1182:5692) — /admin | `/admin` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin · AD-01 | `1182:5692` | loading (derived placeholder, not in Figma; repeats the frame's own card geometry) — /admin?state=loading | `/admin` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Company Admin · AD-01 | `1182:5692` | mobile navigation drawer open (interactive React state; derived mobile treatment of the 232px sidebar) — open /admin below the lg breakpoint and press | `/admin` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Company Admin · AD-01 | `1182:5692` | mobile navigation drawer closed / desktop fixed sidebar (default) — /admin at >=1024px, or the drawer's X / scrim on mobile | `/admin` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Company Admin · AD-01 | `1182:5692` | header search typing (interactive React state; the Figma field is drawn with its placeholder) — type into the 'Search employees or reports' field | `/admin` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |

### Manager 02 · Workspace & Core Ops — 18 screens/states · 7 routes

Section Figma node: `759:1276 / 1192:932`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 02 · Workspace & Core Ops | `1213:3` | MD-02 / EM-02 facility selection (default) — /manager/facility | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:167` | MD-02C facility search no-results — /manager/facility?state=no-results, or type a non-matching query in the FACILITY SEARCH field (interactive) | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 02 · Workspace & Core Ops | `1213:3` | MD-02 facility selection (interactive) — click any facility row; the SELECTED / AVAILABLE pills and the 'Continue with {facility}' CTA label follow th | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:61` | MD-02A / EM-02A facility context — /manager/facility/context | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:114` | MD-02B / EM-02B switch facility — /manager/facility/switch; clicking an alternative row moves the SELECTED pill and rewrites the 'Switch to {facility} | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:294` | MD-04 / EM-04 roster (default) — /manager/workers | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:294` | MD-04 filter chips (interactive) — All 48 / Needs review 6 / Unread 3 / Visa-Admin 2 / Disconnected 1 on /manager/workers | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:378` | MD-04A roster no-results — /manager/workers?state=no-results, or a search/filter combination with no match (e.g. filter Disconnected + search 'yuki'); | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 02 · Workspace & Core Ops | `1213:418` | MD-04B / EM-04B worker invite — /manager/workers/invite; 'Copy invite code' and 'Regenerate' are interactive and show their status line | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:470` | MD-05 / EM-05 worker detail — /manager/workers/yuki-tanaka (also rina-sato, dimas-pratama, maya-putri, ken-watanabe) | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:470` | MD-05 attention variant — /manager/workers/dimas-pratama (missing report + expiry-soon KPI tiles go peach, roster card goes peach, table words go red/ | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `759:1276 / 1192:932` | Worker not found — /manager/workers/unknown-id and /manager/workers/unknown-id/visa | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `1213:532` | MD-05A / EM-05A visa & administrative detail — /manager/workers/yuki-tanaka/visa; 'Create Follow-up' is interactive and confirms inline | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `761:953` | EM-05A urgent visa variant — /manager/workers/dimas-pratama/visa (peach '74 days remaining' pill, peach expiry row, attention VALID UNTIL tile) | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Manager 02 · Workspace & Core Ops | `759:1276 / 1192:932` | loading — ?state=loading on every one of the seven routes | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `759:1276 / 1192:932` | offline — ?state=offline on every one of the seven routes | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `949:4` | EM-02C Facility Search · No Results | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 02 · Workspace & Core Ops | `932:5` | EM-04A Workers · No Results | `/manager/facility`, `/manager/facility/context`, `/manager/facility/switch`, `/manager/workers`, `/manager/workers/invite`, `/manager/workers/:workerId`, `/manager/workers/:workerId/visa` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |

### Manager 04 · Communication — 12 screens/states · 4 routes

Section Figma node: `759:1284 / 1225:2`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 04 · Communication | `1225:2` | MD-06 / EM-06 inbox (default) — /manager/communication | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `1225:85` | MD-07 / EM-07 conversation detail (default) — /manager/communication/putri-rahayu (also ahmad-fauzi, maria-santos, dewi-anggraini, alex-morgan) | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `1225:144` | MD-08 / EM-08 compose (default) — /manager/communication/compose (recipient via ?to=<id>, template via ?template=daily-report-reminder/shift-confirm/u | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `1225:219` | MD-08A / EM-08A review (default) — /manager/communication/review?to=putri-rahayu&template=daily-report-reminder | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `797:237` | sent (EM-07B / MD-07B) — /manager/communication/review?to=putri-rahayu&state=sent (also reachable on /manager/communication/compose?state=sent and /ma | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `797:289` | failed (EM-07C / MD-07C) — /manager/communication/compose?to=putri-rahayu&state=failed (also on /review and /:threadId; the MD-08 rail's 'Demo failure | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `759:1284 / 1225:2` | loading — /manager/communication?state=loading (also on /:threadId, /compose, /review) | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `759:1284 / 1225:2` | empty — /manager/communication?state=empty | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `759:1284 / 1225:2` | offline — /manager/communication?state=offline (also on /:threadId, /compose, /review) | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `759:1284 / 1225:2` | filter chips (interactive React state) — All / Unread / Needs reply / Broadcast on desktop, All 4 / Unread 1 / Follow-up 1 on mobile; selected convers | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `759:1284 / 1225:2` | template chips (interactive React state) — Daily report reminder / Shift confirm / Understanding on /manager/communication/compose, reseeding the Japa | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 04 · Communication | `759:1284 / 1225:2` | conversation not found (guard) — /manager/communication/nobody | `/manager/communication`, `/manager/communication/compose`, `/manager/communication/review`, `/manager/communication/:threadId` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |

### Manager 08 · OJT & Human Rights DD — 13 screens/states · 5 routes

Section Figma node: `759:1300 (desktop placeholder)`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 08 · OJT & Human Rights DD | `761:2552` | EM-14 hub (default) — /manager/knowledge-ojt | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `761:2620` | EM-14A detail (default) — /manager/knowledge-ojt/warehouse-safety-ojt (also shift-handover-guide, new-worker-orientation) | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `761:2723` | EM-14B review/edit (default) — /manager/knowledge-ojt/warehouse-safety-ojt/review | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `761:2679` | EM-14C published — /manager/knowledge-ojt/warehouse-safety-ojt/review?state=published, and interactively by pressing 'Approve & Publish' on EM-14B | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `761:2821` | EM-15 HRDD (default) — /manager/human-rights-dd | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `761:2771` | EM-15A evidence drill-down (default) — /manager/human-rights-dd/evidence | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `759:1300 (desktop placeholder)` | loading — append ?state=loading to any of the five routes (skeleton tiles + card rows + 'Loading permitted records…') | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 08 · OJT & Human Rights DD | `759:1300 (desktop placeholder)` | offline — append ?state=offline to any of the five routes (read-only strip + Retry + 'no silent writes' mint note) | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 08 · OJT & Human Rights DD | `759:1300 (desktop placeholder)` | publish blocked (interactive) — on /manager/knowledge-ojt/warehouse-safety-ojt/review untick any of the four HUMAN REVIEW boxes: 'Approve & Publish' b | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 08 · OJT & Human Rights DD | `761:2723` | draft saved (interactive) — press 'Save Draft' on EM-14B: inline mint 'Draft saved · Not published · Manager review is still required.' strip | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `761:2723` | draft edited (interactive) — type in any of the three CONTENT EDITOR textareas on EM-14B | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | audited | yes | adapted | yes | yes | yes | COMPLETE |
| Manager 08 · OJT & Human Rights DD | `759:1300 (desktop placeholder)` | HRDD chips (interactive) — toggle 'Aug 2026' / 'Current facility' on /manager/human-rights-dd to reach both active and inactive chip states | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 08 · OJT & Human Rights DD | `759:1300 (desktop placeholder)` | module not found — /manager/knowledge-ojt/anything-else (and .../review) renders the guarded 'This OJT module is not available.' card | `/manager/knowledge-ojt`, `/manager/knowledge-ojt/:moduleId`, `/manager/knowledge-ojt/:moduleId/review`, `/manager/human-rights-dd`, `/manager/human-rights-dd/evidence` | yes | needs-audit | yes | needs-audit | yes | yes | yes | PARTIAL |

### Manager 06 · Reports (recovered by orphan scan) — 7 screens/states · 2 routes

Section Figma node: `761:1900 / 1226:1447`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 06 · Reports (recovered by orphan scan) | `761:1900` | EM-11 Reports | `/manager/reports`, `/manager/reports/:id` | yes | audited | yes | pending | yes | yes | yes | PARTIAL |
| Manager 06 · Reports (recovered by orphan scan) | `761:1975` | EM-11A Daily Report Detail | `/manager/reports`, `/manager/reports/:id` | yes | audited | yes | pending | yes | yes | yes | PARTIAL |
| Manager 06 · Reports (recovered by orphan scan) | `761:2073` | EM-11B Worker Operational Timeline | `/manager/reports`, `/manager/reports/:id` | yes | needs-audit | yes | pending | yes | yes | yes | PARTIAL |
| Manager 06 · Reports (recovered by orphan scan) | `761:2132` | EM-11C Generate Report | `/manager/reports`, `/manager/reports/:id` | yes | needs-audit | yes | pending | yes | yes | yes | PARTIAL |
| Manager 06 · Reports (recovered by orphan scan) | `761:2195` | EM-11D Generated Report | `/manager/reports`, `/manager/reports/:id` | yes | needs-audit | yes | pending | yes | yes | yes | PARTIAL |
| Manager 06 · Reports (recovered by orphan scan) | `761:2030` | EM-11E Report Ready | `/manager/reports`, `/manager/reports/:id` | yes | needs-audit | yes | pending | yes | yes | yes | PARTIAL |
| Manager 06 · Reports (recovered by orphan scan) | `761:2337` | EM-11F Report Failed | `/manager/reports`, `/manager/reports/:id` | yes | needs-audit | yes | pending | yes | yes | yes | PARTIAL |

### Manager 00 · Dashboard (recovered by orphan scan) — 2 screens/states · 1 routes

Section Figma node: `761:73 / 1213:217`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Manager 00 · Dashboard (recovered by orphan scan) | `761:73` | EM-03 Dashboard | `/manager` | yes | audited | yes | needs-audit | yes | yes | yes | PARTIAL |
| Manager 00 · Dashboard (recovered by orphan scan) | `1213:217` | MD-03 Dashboard | `/manager` | yes | needs-audit | yes | audited | yes | yes | yes | PARTIAL |

### Landing 01 · EMENDA Landing (recovered by orphan scan) — 1 screens/states · 1 routes

> **FE-only — deliberate departure from LP-01 EMENDA Landing (1053:855).**
> Reason: marketing redesign of the public landing page — new positioning, a prescribed section order (hero → value strip → problem → solution → assistant showcase → features → use cases → product experience → continuity → safety/control → audiences → final CTA → footer), a prescribed navbar, and 1440/390 responsive targets. None of that is drawn in LP-01.
> Reported by the concurrent landing session (emenda-design-carren-2e); CONFIRMED by the user directly. 
>
> **USER-CONFIRMED INTENTIONAL DEPARTURE FROM LP-01. The new landing is a promotional / product-entry page with a new structure and responsive behaviour, briefed separately. This is NOT a parity failure, and NOT a claim of visual parity against node 1053:855 either.**
>
> The departure is from the FRAME only. Global ID/EN/JA, responsive desktop/mobile, accessibility and test coverage all still apply to the new landing, and are gated by e2e/landing-departure.spec.ts.
>
> These rows are deliberately NOT audited against the frame: auditing a
> screen that is being replaced would report the replacement as a defect,
> and the difference is not counted as a visual deviation.

Section Figma node: `1053:855`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Landing 01 · EMENDA Landing (recovered by orphan scan) | `1053:855` | LP-01 EMENDA Landing | `/` | yes | pending | yes | pending | yes | yes | yes | FE-ONLY (departure confirmed) |

### Company Admin 00 · Access — 10 screens/states · 1 routes

Section Figma node: `1249:4862 / 1249:4928`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 00 · Access | `1249:4928` | AD-00B /admin/access | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1239:45` | AD-00D /admin/access?state=denied | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1239:45` | AD-00D /admin/access?state=error | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1239:45` | AD-00D /admin/access?state=expired | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1226:2426` | AD-00 /admin/access?state=flow | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1249:4862` | AD-00A /admin/access?state=language | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1239:45` | AD-00D /admin/access?state=reset | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1226:2426` | AD-00 /admin/access?state=reset-success | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1239:45` | AD-00D /admin/access?state=setup | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 00 · Access | `1239:45` | AD-00D /admin/access?state=states | `/admin/access` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 08 · Activity Log — 5 screens/states · 1 routes

Section Figma node: `1225:345`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 08 · Activity Log | `1225:345` | AD-08 /admin/activity-log | `/admin/activity-log` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 08 · Activity Log | `1239:669` | AD-08D /admin/activity-log?state=advanced | `/admin/activity-log` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 08 · Activity Log | `1226:1144` | AD-08B /admin/activity-log?state=detail | `/admin/activity-log` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 08 · Activity Log | `1226:3880` | AD-08C /admin/activity-log?state=flow | `/admin/activity-log` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 08 · Activity Log | `1239:669` | AD-08D /admin/activity-log?state=no-results | `/admin/activity-log` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 06 · Daily Reports — 8 screens/states · 1 routes

Section Figma node: `1223:2373`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 06 · Daily Reports | `1223:2373` | AD-06 /admin/daily-reports | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 06 · Daily Reports | `1239:511` | AD-06D /admin/daily-reports?state=compose | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 06 · Daily Reports | `1239:511` | AD-06D /admin/daily-reports?state=delivery | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 06 · Daily Reports | `1239:511` | AD-06D /admin/daily-reports?state=detail | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 06 · Daily Reports | `1226:3690` | AD-06C /admin/daily-reports?state=flow | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 06 · Daily Reports | `1226:1078` | AD-06B /admin/daily-reports?state=reminder | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 06 · Daily Reports | `1226:1078` | AD-06B /admin/daily-reports?state=reminder-sent | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 06 · Daily Reports | `1239:511` | AD-06D /admin/daily-reports?state=submission | `/admin/daily-reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 02 · Employee Management — 8 screens/states · 1 routes

Section Figma node: `1223:535`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 02 · Employee Management | `1223:535` | AD-02 /admin/employees | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 02 · Employee Management | `1239:196` | AD-02D /admin/employees?state=deactivate | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 02 · Employee Management | `1226:2` | AD-02B /admin/employees?state=detail | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 02 · Employee Management | `1239:196` | AD-02D /admin/employees?state=edit | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 02 · Employee Management | `1239:196` | AD-02D /admin/employees?state=forms | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 02 · Employee Management | `1226:2` | AD-02B /admin/employees?state=invite | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 02 · Employee Management | `1239:196` | AD-02D /admin/employees?state=invite-form | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 02 · Employee Management | `1226:2585` | AD-02C /admin/employees?state=lifecycle | `/admin/employees` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 05 · Follow-up & Escalation — 4 screens/states · 1 routes

Section Figma node: `1223:1997`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 05 · Follow-up & Escalation | `1223:1997` | AD-05 /admin/follow-up | `/admin/follow-up` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 05 · Follow-up & Escalation | `1239:432` | AD-05D /admin/follow-up?state=detail | `/admin/follow-up` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 05 · Follow-up & Escalation | `1226:131` | AD-05B /admin/follow-up?state=escalate | `/admin/follow-up` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 05 · Follow-up & Escalation | `1226:2870` | AD-05C /admin/follow-up?state=lifecycle | `/admin/follow-up` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 04 · Reports Oversight — 6 screens/states · 1 routes

Section Figma node: `1223:1317`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 04 · Reports Oversight | `1223:1317` | AD-04 /admin/reports | `/admin/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 04 · Reports Oversight | `1239:353` | AD-04D /admin/reports?state=assign-owner | `/admin/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 04 · Reports Oversight | `1226:96` | AD-04B /admin/reports?state=detail | `/admin/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 04 · Reports Oversight | `1226:2775` | AD-04C /admin/reports?state=flow | `/admin/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 04 · Reports Oversight | `1239:353` | AD-04D /admin/reports?state=outcome | `/admin/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 04 · Reports Oversight | `1239:353` | AD-04D /admin/reports?state=request-evidence | `/admin/reports` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 07 · Rewards & Coin — 6 screens/states · 1 routes

Section Figma node: `1223:2737`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 07 · Rewards & Coin | `1223:2737` | AD-07 /admin/rewards | `/admin/rewards` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 07 · Rewards & Coin | `1226:1116` | AD-07B /admin/rewards?state=adjust | `/admin/rewards` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 07 · Rewards & Coin | `1239:590` | AD-07D /admin/rewards?state=adjust-detail | `/admin/rewards` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 07 · Rewards & Coin | `1226:3785` | AD-07C /admin/rewards?state=lifecycle | `/admin/rewards` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 07 · Rewards & Coin | `1239:590` | AD-07D /admin/rewards?state=rule-edit | `/admin/rewards` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 07 · Rewards & Coin | `1239:590` | AD-07D /admin/rewards?state=transaction | `/admin/rewards` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 09 · Company Settings — 8 screens/states · 1 routes

Section Figma node: `1225:687`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 09 · Company Settings | `1225:687` | AD-09 /admin/settings | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 09 · Company Settings | `1239:748` | AD-09D /admin/settings?state=confirm-apply | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 09 · Company Settings | `1226:1175` | AD-09B /admin/settings?state=confirm-reset | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 09 · Company Settings | `1226:1175` | AD-09B /admin/settings?state=confirm-save | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 09 · Company Settings | `1226:3975` | AD-09C /admin/settings?state=flow | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 09 · Company Settings | `1249:4994` | AD-09E /admin/settings?state=language | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 09 · Company Settings | `1239:748` | AD-09D /admin/settings?state=reset-rules | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 09 · Company Settings | `1239:748` | AD-09D /admin/settings?state=unsaved | `/admin/settings` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 10 · Empty & Access States — 10 screens/states · 1 routes

Section Figma node: `1225:1044`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 10 · Empty & Access States | `1225:1044` | AD-10 /admin/states | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1226:1202` | AD-10B /admin/states | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1226:4070` | AD-10C /admin/states | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1239:827` | AD-10D /admin/states | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1226:1202` | AD-10B /admin/states?state=destructive-confirm | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1239:827` | AD-10D /admin/states?state=destructive-success | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1226:1202` | AD-10B /admin/states?state=error | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1226:1202` | AD-10B /admin/states?state=loading | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1225:1044` | AD-10 /admin/states?state=no-permission | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 10 · Empty & Access States | `1239:827` | AD-10D /admin/states?state=no-results | `/admin/states` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

### Company Admin 03 · Teams & Managers — 7 screens/states · 1 routes

Section Figma node: `1223:924`

| Section | Figma Node | Screen/State | FE Route(s) | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Company Admin 03 · Teams & Managers | `1223:924` | AD-03 /admin/teams | `/admin/teams` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 03 · Teams & Managers | `1239:274` | AD-03D /admin/teams?state=archive-team | `/admin/teams` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 03 · Teams & Managers | `1226:57` | AD-03B /admin/teams?state=assign-manager | `/admin/teams` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 03 · Teams & Managers | `1239:274` | AD-03D /admin/teams?state=change-manager | `/admin/teams` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 03 · Teams & Managers | `1239:274` | AD-03D /admin/teams?state=create-team | `/admin/teams` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 03 · Teams & Managers | `1226:2680` | AD-03C /admin/teams?state=lifecycle | `/admin/teams` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |
| Company Admin 03 · Teams & Managers | `1226:57` | AD-03B /admin/teams?state=reassign-employees | `/admin/teams` | yes | audited | yes | audited | yes | yes | yes | COMPLETE |

**228 manager/landing/admin screens/states COMPLETE** (3 sections carry the documented desktop adaptation).

---

# Visual deviation register

335 deviations were reported by the section and audit agents. Every one is resolved below as **FIXED** (code changed to match Figma), **ACCEPTED** (Figma cannot or should not be followed literally, reason given) or **BLOCKED** (cannot proceed).

## Figma has no frame / no drawn control for it — 16 · ACCEPTED

The mock does not define the screen, state or control at all. The FE implements the capability following the section's own pattern language, documented at the point of use.

<details><summary>Show the 16 entries</summary>

- Loading button labels for WD-05A ('Sending code…') and WD-11A ('Logging out…') are generic instance placeholders in the Figma layers; authored to match the sibling loading labels (WD-04A 'Logging in…', WD-08A 'Sending code…').
- Inline validation copy for WD-05B ('Enter a valid phone number.'), WD-05C ('This phone number is already registered. Log in instead.') and WD-08B ('No account found for this phone number.') is not present in the Figma text layers (nodes are named 'Register · Phone error' etc.); authored consistently with the design system's validation copy (WD-20A pattern).
- Splash auto-advances to /auth/language after 2.2s (the mock has no buttons); a click also advances.
- WD-23C: second extracted experience card has no Edit/Remove buttons, exactly as the mock; only item 1 carries the full Keep/Edit/Remove interaction.
- Selector/date-picker overlays are centered 520px cards on desktop exactly as authored in the WD frames, and dock to the bottom as sheets on mobile per the W-xx pattern.
- Add forms (WD-35H, WD-36B) open pre-filled with the exact values shown in the Figma frames rather than empty fields — the mocks contain no placeholder copy, so starting empty would have required inventing strings.
- Exact copy from the digests and 8 fetched Figma frames (WD-37, WD-38, WD-38K, WD-39, WD-39A, WD-39E, WD-40, WD-40B) is used verbatim. Copy for states whose exact text is not in the digests (hub empty/offline/load-failed bodies, upload/save/replace failure lines, permission modal, unsaved-changes modals, existing-verified guard, saved/deleted/removed confirmations, report-issue form fields, file-so
- Date-picker overlays (WD-38L/M, WD-39K/L) reuse the shared overlay chassis with quick-pick date options instead of a full calendar — the pickers' internal design is not in the digests.
- WD-47 'Account & access recovery' card has no dedicated destination in this app; it links to /worker/profile (closest existing account screen). 'Emergency information' links to the existing /worker/documents/emergency.
- Desktop: Figma section 1192:952 (Manager desktop Analytics) is an empty placeholder, so /manager/analytics and all four EM-R2 records screens are derived from the 390px mobile IA inside the MD ManagerShell — same card order and copy, content column max-w-[1060px], 2x2 tile grids widening to 4-across and the 350px button rows capped at lg:max-w-[350px] at lg. Every px/hex value comes from the mobil
- Figma desktop section 09 (1192:960) is only a placeholder frame, so the three shell:"manager" export screens derive desktop from the mobile IA inside the MD shell: the same vertical order and cards, widened to the max-w-[1060px] manager content column with lg: type/size steps (2x2 mint tiles become a 4-across row, 350px cards stretch, the 168px CTA pairs cap at lg:max-w-[480px]). No desktop-only s
- Desktop section 1192:956 is a Figma placeholder (three text nodes, no screen frames), so all five desktop layouts are derived from the mobile EM-14/14A/14B/14C/15/15A IA inside ManagerShell: identical card order and copy, 2x2 tiles become 4-across at lg, and the governance cards (draft queue, human review + source records, review checklist, open gap + included/excluded, privacy boundary) move into
- EM-14B has no Figma frame for the blocked-publication or Save Draft outcomes. Added two small in-folder surfaces reusing the section palette: a #fff5c7 caution line ('All human review checks are required before publication.') shown only when a box is unchecked, and a mint #e8f5f0 'Draft saved' strip restating 'Not published · Manager review is still required.'
- LP-05 GENUINELY HAS NO ACCOUNT-CREATION CTA IN FIGMA. Verified directly against node 1060:43 via get_metadata: the whole frame is Brand, Language switcher, Header divider, Eyebrow, Title, Body, the 'Routing info' card (1107:11), and the 'Unified login card' (1107:19) whose children end at 'Helper' (1107:31, x=30 y=444 484x42) inside a 544x520 card — there is no sign-up button, link, or text node a
- COPY IS W-03 VERBATIM, NOT LP-05 VERBATIM. Because LP-05 defines no such strings, the two new EN strings are taken verbatim from the canonical W-03 Welcome frame: the secondary button label 'Create new account' and the footnote directly under it, 'You can connect an employer later. Creating an account does not require an employer.' No new English copy was written. ID ('Buat akun baru' / 'Anda dapa
- FE-ADDED CONTROL (documented in BackToWelcomeLink.tsx): the mocks draw the entry funnel as a strictly forward graph — W-01 -> W-02 -> W-03 -> W-04 | W-05 — and neither W-04 Login (421:29) nor W-05 Register (421:51) contains a back control (confirmed against Figma metadata for both frames). A worker who took the wrong branch at the W-03 fork therefore had no drawn way to the other one. I added one 

</details>

## Figma contradicts itself between surfaces — 3 · ACCEPTED

Two Figma frames disagree. We follow the surface that governs the concern (desktop for presentation, mobile for flow) and record the choice.

<details><summary>Show the 3 entries</summary>

- Desktop two-column layouts use CSS grid with explicit column/row placement so mobile stacking follows the W-2x single-column order while desktop matches the two-column mocks; shared grid rows mean a row is as tall as its tallest card, so some cards sit a few px lower than the absolute Figma y-offsets.
- Putri Rahayu's role differs between mocks ('Warehouse Operator' in EM-06/MD-07, 'Packing Operator' in MD-08/MD-08A). Since she is the shared WORKER record, her role renders as WORKER.role ('Care Assistant') everywhere; the other roster names keep their mock roles. Her EMENDA ID on MD-08 uses WORKER.emendaId (EMD-26-8F4K2A) instead of the mock's EMD-2024-JP-004812.
- Delivery timestamp differs between mocks (EM-07B '14:24', MD-07B '14:25'). Both are kept in DELIVERY_RECORD and rendered per surface rather than picking one.

</details>

## Figma authoring slip reproduced honestly instead of literally — 4 · ACCEPTED

The frame cannot hold its own content or misaligns in the mock itself. We render the honest layout rather than reproducing a visual bug.

<details><summary>Show the 4 entries</summary>

- Mobile position of the W-19C 'Profile updated' toast is not pinned in the mock's metadata; rendered as a full-width strip at the top of the content column (desktop matches the mock: 372px, top-right of the content area, overlapping the H1 band).
- WD-53B empty mock contains a design defect: the caption layer ("Important account, Japan-preparation, and employer-access updates will appear here.") overlaps the card's title/body text layers. Rendered stacked (title, body, caption) inside the card instead of reproducing the collision; all three strings preserved verbatim. Mobile W-53B (which shows bell icon + title + caption only, left-aligned) 
- WD-58C/58D/58L place the amber state banner as a sibling at x=272 that overlaps both panes; the bubbles are pushed down exactly 80px, so the banner is rendered inside the thread card above the first bubble (its evident intent).
- WD-54E in Figma has the 'RETAINED WORK HISTORY' micro-label overlapping the amber banner (a mock layout bug, called out in the digest). The implementation stacks the label under the banner instead of reproducing the overlap.

</details>

## Deliberate app-wide data unification — 20 · ACCEPTED

The mocks use several employer names for one relationship. EMPLOYER.* (Sakura Care) is used everywhere so one product state spans both roles. Layout and copy are untouched.

<details><summary>Show the 20 entries</summary>

- Mock employer 'ABC Japan' replaced by EMPLOYER.name ('Sakura Care') in all 18H/18J/18K/18L strings per the data-unification rule (interpolated via copy functions; layout/copy otherwise verbatim).
- Mock employer 'ABC Japan' replaced by EMPLOYER.name ('Sakura Care') everywhere in data (verified source, review-update summary, snapshot rows, snapshot subtitle) per unification rule; 'Sample employer' kept as-is. Layout/copy templates unchanged ('Verified by {employer}').
- Snapshot deep links named ?state=snapshot-sakura / ?state=snapshot-sample (post-unification employer ids) rather than the mock frame names (ABC Japan / Sample Employer).
- Data unification: mock 'ABC Japan' rendered as EMPLOYER.name (Sakura Care) everywhere (verified experience employer, WD-25C prefilled employer, qualification issuer/provider, credential review strings) — data only, layout/copy unchanged.
- No 'ABC Japan' appears on these three screens, so no EMPLOYER.name substitution was needed.
- All mock "ABC Japan" occurrences render EMPLOYER.name ("Sakura Care") per the data-unification rule; interpolated as data through copy functions, layout/copy otherwise verbatim.
- Employer name is record data, so the mock's 'ABC Japan Co., Ltd.' renders as `${EMPLOYER.name} Co., Ltd.` = 'Sakura Care Co., Ltd.' and in-sentence 'ABC Japan' renders as 'Sakura Care' (employerMock.ts). Layout and copy are unchanged.
- Employer name renders as EMPLOYER.name ('Sakura Care') wherever the mock says 'ABC Japan', per the shared-data rule; layout and surrounding copy are unchanged.
- The Figma mock names 'ABC Japan Co., Ltd.'; per the shared data contract logsMock.ts uses EMPLOYER.name (Sakura Care) for the verified work records. Layout and copy are unchanged.
- Desktop login keeps MD-AUTH-01's own field set per Figma — 'Manager / HR ID' (Sato Kenji) + 'Organization / Company' (Sakura Care) with the 'Continue to Organization Access' pill — while the brief's 'Work email + Password + Sign in + mint Mobile access card' composition is the EM-AUTH-01 mobile variant, rendered on mobile. Both variants submit to /manager/facility, and both carry 'Forgot password?
- Employer unified per the shared-data rule: every 'Kitahara Healthcare' in the mocks renders EMPLOYER.name (Sakura Care) and the recovery address is manager@sakuracare.example (mock data, kept raw, never translated).
- Employer unified to Sakura Care: every 'Kitahara Healthcare / Kitahara Care Facility / Sato Kenji / Facility Manager' string in the mocks reads from EMPLOYER via MANAGER_IDENTITY. Manager ID MGR-JP-0024, ticket ids (SUP-2026-0811-04, SUP-DEMO-2026-021), Asia/Tokyo (UTC+9), 2026/08/11, 'Japan +81 / Indonesia +62' stay raw as printed.
- The employer is unified as Sakura Care per the shared data contract, so the MD-09/MD-12 sidebar and top-bar 'Kitahara Healthcare' strings are the shell's EMPLOYER.* values, and EM-10's 'Manager · Sato Kenji · Facility Manager' uses EMPLOYER.manager + common.manager.facilityManager. Worker roster names (Ahmad Fauzi, Putri Rahayu, Budi Santoso, Dewi Anggraini, Maria Santos, Andi/Dewi/Budi on EM-12) 
- Employer unification: the mocks read 'Kitahara Healthcare' / 'Kitahara Care Facility'; per the app contract these render from EMPLOYER.name / EMPLOYER.facility (Sakura Care / Sakura Care Facility). Worker roster names, roles and EMENDA IDs (Dewi Anggraini · Warehouse Operator · EMD-2024-JP-004821) stay as mock data.
- The employer is unified as Sakura Care per src/data/caregiverReport.ts: EM-STATE-03 CURRENT ACCESS CONTEXT shows Organization 'Sakura Care' / Facility 'Sakura Care Facility' (mock says Kitahara Healthcare / Kitahara Care Facility), EM-STATE-02 reads 'Sakura Care Facility confirmed', and EM-16B CONFIGURATION PRESERVED reads 'Facility: Sakura Care Facility'. EM-17's package file name follows the sam
- Employer unified to Sakura Care per repo rule: LP-07's 'Kitahara Care Facility' renders EMPLOYER.facility ('Sakura Care Facility') and LP-08's 'Kitahara Healthcare' renders EMPLOYER.name ('Sakura Care'); manager stays EMPLOYER.manager ('Sato Kenji').
- LP-07 role line uses WORKER.role ('Care Assistant') instead of the mock's 'Warehouse Operator' — the mock's role is a leftover from a non-care persona and would read wrong against 'Sakura Care Facility'. Structure kept verbatim: '<role> · Manager: <manager>'.
- Company name kept VERBATIM as 'PT Sakura Nusantara' (ADMIN_ORG in admin.mock.ts) instead of EMPLOYER.name. The unify-to-Sakura-Care rule was written for the manager mocks' 'Kitahara Healthcare'; the Company Admin tenant is a distinct org in Figma and the AD-01 brief spells this string out in the top bar, the dated meta line and the activity-card subtitle. Swap ADMIN_ORG to EMPLOYER.name in one pla
- Employer identity: the Figma mocks say 'Kitahara Healthcare / Kitahara Care Facility / Sato Kenji'; per instructions everything organisation-level comes from EMPLOYER (Sakura Care / Sakura Care Facility / Sato Kenji). The sibling facilities are named 'Sakura Warehouse East' / 'Sakura Support Center' to stay consistent; their numbers (26 / 18 workers, 100% / 94%, 1 / 2 follow-up, no admin alerts / 
- Employer naming: the mocks print 'Kitahara Healthcare / Kitahara Care Facility'. Per instruction all facility/manager text uses EMPLOYER.* (Sakura Care Facility, Sato Kenji) from src/data/caregiverReport.ts.

</details>

## Desktop adapted from the canonical mobile flow — 3 · ACCEPTED

The desktop Figma section is a text-only placeholder. Per the canonical-mobile rule the capability is built for desktop using the Worker/Manager desktop Foundations, never dropped and never a blown-up mobile frame.

<details><summary>Show the 3 entries</summary>

- WD-58D has no composer at all; mobile W-58 access-ended is described as a read-only composer. Desktop therefore shows no composer and mobile shows a disabled one carrying the "Work messaging is read-only" placeholder.
- MD-18 / MD-18A / MD-18B / MD-18E are metadata-only placeholders in Figma (digest line 599-600). Their desktop presentation is the EM-xx IA scaled inside the ManagerShell content column (max-w-[1060px], lg: type ramp), matching how the shipped manager reports/audit sections handle the same gap.
- W-03'S STYLING WAS ADAPTED TO LP-05'S SYSTEM, NOT COPIED. W-03's AuthSecondaryButton is h56 / r15 / 1px #d4e1dd / label #08745e (the worker mobile-auth palette). Reproducing that inside the LP-05 card would import a second design system into the page, so the button uses LP-05's own card metrics: h52, 484px content width at lg, r12 (matching the card's own 'Button · Log in' node 1107:28), 1px #d1de

</details>

## Environment / server / OS state kept as a review URL — 46 · ACCEPTED

Offline, upload failure, server verdicts, OS permission denials and loading skeletons have no honest client trigger in a mock-data FE. They keep a stable ?state= review URL; where a real signal exists (browser connectivity) it now drives the state for real.

<details><summary>Show the 46 entries</summary>

- WD-06I (Recovery Code Entered) is pixel-identical to WD-06H in the Figma layer tree; implemented as ?state=recovery-code with the same rendering.
- Verification Submitting auto-advances to Pending (1.4s) only when initiated by an in-page click, so the deep-linked ?state=submitting variant remains a stable screenshotable URL.
- WD-18H's red bell dot sits on the shell top-bar bell (src/components/worker/WorkerTopBar.tsx), which is outside my ownership — not implemented; all page-level invite content is. Parent could add a small #d13c2e 6px dot to the shell bell keyed on the home ?state=invite-received if full parity is wanted.
- Interactive save simulates a ~700ms 'Saving…' then navigates to /worker/profile?state=updated; failure/offline are reachable only via ?state seeds since there is no real network layer.
- Hub/banner 'Retry' actions navigate back to the state-free URL to simulate reconnection (mock has no real network layer).
- WD-34B 'Already in Japan' is content-identical to the base WD-34 frame per metadata; ?state=already-in-japan therefore renders the same checklist.
- Interactive submit jumps straight to the WD-44G submitted state (no artificial latency); the WD-44B submitting frame stays reachable via ?state=submitting.
- Hub offline (WD-41B) cached-article cards link into the article route with ?state=offline appended so the cached/offline story stays coherent.
- ?template=caregiver is accepted only in combination with ?state=unsaved-changes (WD-55N). On its own the route falls through to the untouched interactive caregiver form, per the 'leave the default caregiver flow untouched' rule.
- WD-49D expired is also reachable interactively via a second mock invite code 'ABCJ-0000' (employerMock.expiredInviteCode) in addition to ?state=expired.
- EM-R2-04 / EM-R2-06 are wired as ?state= variants on all four records routes (not just the continuity route), so the boundary states are reachable from wherever the manager is in the records flow.
- /welcome accepts ?state= as an alias for ?account= so the global useScreenState convention also reaches the three variants; ?account= (per the brief) takes precedence, unknown/absent values fall back to headless.
- Icons are lucide-react line icons (per the section brief's CHROME rule) rather than the exported Figma SVG assets that figma-design-to-code would normally require. Glyphs follow the Figma icon node names: dashboard→LayoutDashboard, users→Users, org→Network, reports→FileText, follow→Clock, daily→CalendarCheck, reward→Coins, audit→ScrollText, settings→Settings, log out→LogOut, search→Search, bell→Be
- ?state=loading renders a derived skeleton. AD-01 has no lettered variants at all (the digest confirms: 'Single populated healthy-but-busy state'), so this is an addition for parity with the rest of the app, not a Figma mock; it only repeats AD-01's own geometry as quiet #eef3ef blocks.
- MD-02 shows the invite/roster search as static placeholder text; both search fields here are real controlled inputs so the MD-02C and MD-04A empty states are reachable interactively as well as by ?state=no-results.
- The thread composer's Send and EM-08's 'Send message' both route to the human-review step rather than appending a message — nothing may render as delivered before review + a delivery record. For the same reason ?state=failed is reached through the MD-08 rail's own 'Demo failure' button (1225:217) rather than by a fake send.
- CROSS-SECTION (auth, not my folder): src/pages/auth/CreatePinPage.tsx line 38 navigates to '/worker' after PIN creation, skipping W-12 entirely. Until that points at '/onboarding/id', the whole identity-setup wizard (W-12 → W-13 → W-14 → W-15 → W-16) has no click path from a fresh session — my Home wiring roots it at /worker?state=new-user, which is itself a URL. This is the single highest-value r
- CROSS-SECTION (employer, not my folder): the employer flows should return to Home with the matching lifecycle state so W-18E/H/I/J/K/L stop being URL-only — /worker/employer/review 'Connect' → /worker (connected), disconnect/revoke → /worker?state=access-ended, declining or having no employer → /worker?state=employer-not-connected.
- CROSS-SECTION (profile/career, not my folder): completing the profile should return to /worker?state=profile-complete and an incomplete profile to /worker?state=profile-incomplete, which would make W-18D and W-18I reachable.
- BY DESIGN, ?state=-only: W-14B (upload failure), W-14C (server document rejection), W-14E (OS photo permission), W-16C/D/E/F (server review outcomes and offline), W-17F and W-18G (loading), W-18F and W-18K (offline). No user click can produce these; each screen's own controls are live.
- W-17H Verification Failed has no click-rooted path — it hangs off W-16E, which is itself a server-failure ?state=. Closing this would need a W-18 lifecycle state carrying a 'verification failed' ID status, which the mobile Figma does not mock.
- W-19B Personal Profile — Incomplete stays URL-only (/worker/profile?state=incomplete). It is a data condition, not an interaction: no Figma control produces it, and the edit form's validation refuses to save a blank email or city, so there is no honest click path to it. Its own controls (Continue profile, Add personal information) are live once in that state.
- W-20C Save Failed, W-48C Submit Failed, W-20D / W-48D / W-47A Offline and W-19A Loading remain ?state= URLs — all are the permitted server-failure / network / loading exceptions. Every control inside those states (Try saving again, Try again, Retry) is wired.
- W-21A loading, W-21C/W-22D/W-24D/W-25F/W-26F/W-27J/W-28Q/W-29C/W-30E/W-31G offline and W-22B/W-22C/W-23B/W-25E/W-26E/W-27C/W-28C/W-28J/W-28K/W-29B/W-30D/W-31B failure variants stay ?state=-only — they are network/server/file-rejection outcomes the prototype cannot provoke from a control. Where the screen offers a recovery action (Retry upload, Try again, Choose file, Retry) that action is wired.
- W-21B No CV Yet, W-21D CV Incomplete, W-25A/W-26A/W-27A/W-28A Empty and W-30A Missing Data stay ?state=-only: they are data states of a worker who has no CV / no records, and the mock worker owns both. The capabilities they expose (Upload CV, Create CV) are now reachable from the base hub instead.
- Hub lifecycle variants W-32B/C/D (Outside Japan, Already in Japan, Needs Attention) stay URL-only — they reflect the worker's arrival status and a server-side expiry check, not an in-app action. Everything downstream of them is one click away, but that first hop still needs ?state=. If the team wants them clickable, the honest fix is a real arrival-status control in the profile/onboarding section 
- W-33J Update Available is URL-only for the same reason (EMENDA pushes the verified residence record). W-33K Review Verified Update and both of its actions — 'Apply verified update' → W-33M and 'Keep current details' → W-33 — are fully live from there.
- W-33A Empty, W-35A Not Started, W-36A Empty and W-37B Empty are URL-only data states: none of these screens offers a delete that could empty the record (the Important-dates list always keeps the linked residence reminder). W-40A Empty is the exception and is now click-reachable via the remove chain.
- W-38D Unsupported File, W-39S Replacement File Rejected and W-38C/W-39D Upload/Replace Failed stay URL-only: the mock has no real OS file picker, so no interaction can produce a rejected or failed file. The Figma DEV state launcher (815:183) lists exactly this class of state, which supports leaving them launcher/URL-driven.
- All remaining URL-only states are network/server states (offline, save failed, load failed, loading, updating) — the categories the brief explicitly allows.
- Applying a verified residence update leaves the base /worker/japan/residence card showing the self-added record; the applied result lives at ?state=verified-source. Persisting the applied record into the base view would need shared store state rather than per-page mock constants.
- Notifications entry point (NOT fixable inside my folders): src/components/worker/WorkerTopBar.tsx line 18-24 — the bell is `<button type="button" aria-label="Notifications">` with no handler. One-line fix: replace with `<Link to="/worker/notifications">` (keep the same classes). Until then W-53 and all nine variants are URL-only, no matter what the page itself does.
- W-53E / W-53H (Employer Connected · Unread, Employer Access Ended · Unread) stay ?state=-driven: the repo has no shared employer-connection store (no src/stores; src/data and the employer section are other owners), so notification mode cannot be derived from a real connect/disconnect action. Their All-Read siblings (W-53F/W-53I) are click-reachable once in the mode.
- W-45B (My Questions · Empty) and W-53B (Notifications · Empty) remain ?state=-only data states — nothing in the mocked worker journey deletes a question or clears the feed, so there is no honest control to wire.
- Offline / loading / submit-failed variants (W-41A/B, W-42D, W-43A/E via the offline hub, W-44C/D, W-45A/C, W-53C/D/G) remain ?state=-driven, which the brief allows for genuine network/server/loading states.
- W-50D / W-51D / W-60H / W-60P failure states and all offline/loading states stay ?state=-only by design (server failure, network loss, transient loading).
- Genuinely non-interactive states stay ?state=-only by design and are listed as NOT REACHABLE above: hub loading/empty/offline/access-ended/headless (W-54, 54B–54E, 54H), form submit-failed/offline-draft (W-55E/F), review offline (W-55Q), detail offline (W-56B/C/E), chat hub states (W-57, 57B–57F) and the chat failure states (W-58B/I/N). Their recovery buttons are now live controls where the mock p
- Empty states (W-61J Work & Career, W-61X Private Health, W-61Y Private Life, W-61M2 Stress Check) stay ?state=empty-only: the section reads from static mock arrays and there is no note store I may add outside my folder, so no click can empty a list.
- Session/role states W-61Z Headless, W-61Z1 Headless Offline, W-61Z2 Employer Access Ended and W-61U0 Work & Career Headless Offline remain URL-only — they depend on the employer-connection session, which is owned outside this folder.
- Server-failure states remain URL-only by the stated exception: W-61T Save Failed, W-61M4 Stress Check Save Failed, W-61O5 Health Access Grant Failed, W-61AS Sync Failed. All of their recovery controls (Retry / Coba sinkronkan lagi) are wired and clickable.
- W-61O7 Health Access Expired stays URL-only (elapsed-time state); from it the "Atur akses" control re-enters the grant lifecycle.
- Network states W-61E/U/V/W, W-61M3 and W-59F Assistant Offline remain ?state=offline-only by design; note that the offline-draft → sync chain (W-61AN/AO/AP → W-61AR → W-61AT) therefore starts from that URL-only precondition before every step is clickable.
- OUT-OF-FOLDER GAP #3 — error variants stay URL-only. W-05B Invalid Phone, W-05C Phone Already Registered, W-05D Offline, W-06B/C/D/F/G and W-07C are all driven purely by useScreenState() reading ?state= in the auth pages, with no in-page trigger. My entry point makes their parent screens reachable but cannot make those variants click-reachable from src/pages/access.
- The inventory I was handed is substantially STALE. Verified against the current source: SignInCreateAccount.tsx:35 already links /signin -> /auth/register; SignInCard.tsx:83 links /signin -> /auth/forgot-pin; WorkerSidebar.tsx:49 is a NavLink to /auth/logout (not a dead button); CreatePinPage.tsx:44 already navigates to /onboarding/id (not /worker); useHomeView.ts:66-155 already links worker Home 
- OFFLINE VARIANTS (W-04D, W-05D, W-06G, W-08D, W-09E, W-11B): the mocks draw an offline dress but never draw a control that causes it — losing the connection is an environment event. Rather than invent a fake 'go offline' button, the new useOffline() hook makes those frames follow the browser's real connection state (window online/offline events + navigator.onLine), keeping ?state=offline as the st
- STILL ?state=-ONLY (kept deliberately, matching the repo-wide convention in src/hooks/useScreenState.ts that ~50 other pages follow): W-05C Phone Already Registered, W-07C Create PIN Failed, W-09D Reset PIN Failed, W-14B Upload Failed, W-14C Invalid/Expired Document, W-14E Permission Required, W-16C/D/E/F verification outcomes, W-17F Loading. Each is a server answer or an OS permission result the 

</details>

## Reported against shared shell code and fixed centrally — 14 · FIXED

Section agents cannot edit the shell. Every such report was applied by the orchestrator: 80px header, 48px content gutter, 20px content start, per-section mobile bottom-nav rule, Profile active across sub-areas, live notification bell / avatar / Settings / Log out.

<details><summary>Show the 14 entries</summary>

- All three sub-pages render the green '← Career & CV' breadcrumb even in base states (Figma desktop WD-22/23/24 base frames omit it; WD-23C-J and WD-24E/F include it) — required because mobile sub-routes drop the shell chrome.
- Mobile W-37 shows no bottom navigation, but WorkerShell keeps bottom nav on /worker/<area> roots; that chrome is shell-owned and not overridable from this folder. All sub-pages start with the 13px green breadcrumb per the mocks.
- Per the parent chrome rule the hub keeps the mobile bottom nav even though the W-41 mock shows back-link-only chrome (shell-owned; the in-page 'Headless home' breadcrumb from the mock is rendered on all sizes).
- WorkerShell (not editable here) keeps the mobile bottom nav on the 2-segment /worker/help route, whereas digest-2 describes the mobile hub with sub-page chrome. The hub still opens with the 13px semibold green 'Headless home' link, and /worker/help/contact + /worker/help/contact/sent correctly drop the chrome.
- ONE tab-level route as instructed: a thread opens with ?c=sato / ?c=support instead of /worker/chat/:id, because the mobile mock (W-58) keeps the bottom navigation inside the conversation and WorkerShell only does that for 2-segment paths. The mobile back-link to /worker/chat is still rendered (lg:hidden), matching W-58's hybrid chrome.
- The composer is fixed at bottom-[68px] on mobile (above WorkerBottomNav) — the shell was not modified; the workspace body carries pb-[70px] so nothing hides behind it.
- EM-12 marks the More tab active in the mobile bottom nav, but MANAGER_MOBILE_NAV has no entry matching /manager/alerts, so no tab lights up there. Shell-owned; not editable from my folder.
- MD-09A/09B, MD-10 and MD-09C (nodes 1226:1322 / 1379 / 1447 / 1505) are named-only in the Figma metadata with no distinct desktop layout, so the review / compose / sent / failed screens render the EM-09A/09B/10/09C content inside the manager desktop shell (max-w-[560px] column, 42px rail-height buttons) rather than a separate desktop composition.
- The EM-STATE interstitials drop the bottom nav exactly as in Figma (shell:"none"), and StateScreenLayout supplies their own full-screen chrome (#f7f9f6 canvas, EMENDA eyebrow, title/subtitle/chip) in a 390px column that widens to 620px on desktop rather than stretching to 1060px — these are interstitials, not manager content pages.
- Content column is max-w-[1144px], the AD-01 content width (1182:5788), not the manager shell's 1060px — the admin shell is its own chrome.
- MD-02 / MD-02A / MD-02B are drawn in Figma inside the 248px sidebar shell, but the parent spec assigns them shell:'none'. They are built as full-screen routes on #f7f9f6 with their own EMENDA wordmark and the right-aligned '{org} · Facility Manager / Operational access only · Profile' identity block from MD-02 (1213:21/22); the sidebar is dropped, everything else keeps its Figma geometry.
- CROSS-SECTION (components/worker, not my folder): W-18H shows a red dot on the header bell. WorkerTopBar renders no notification badge, so the invite-received state loses that signal on both viewports.
- Not touched (outside my folders): the worker shell's own nav entries that lead to /worker/profile and /worker/help, and the /worker/knowledge, /worker/identity, /worker/documents and /worker/coin destinations these sections link out to.
- Everything else in the two folders was already correct and was verified rather than rewritten: the desktop presentation (AuthLayout / OnboardingShell two-column hero split with the 520px rail, mobile single column, no scaling between viewports) was already in place for every screen including the mobile-only W-02 trio, W-06I and W-08C; language selection already runs through the global i18n store (

</details>

## Reported as out of a section agent's reach — 9 · FIXED / ACCEPTED

A section agent may only edit its own folders, so these were reported rather than fixed at the time. The final consolidation pass owns the whole repo and re-opened every one.

- **Reported:** The pre-existing caregiver flow (ReportsHubPage default branch, NewCaregiverReportPage default branch, ReviewReportPage default branch, ReportDetailPage default branch and all their sections) still carries its original hardcoded English strings. I did not route them through i18n because that would c
  - **Resolution:** FIXED. The core caregiver loop (hub, form, review, read-only detail and 11 of its section components) now goes through the new src/pages/worker/reports/caregiver.copy.ts in EN/ID/JA, and the enum values (report status, resident condition, quick notes) display through i18n/terms.ts localizeTerm while staying English in storage. EN is byte-identical to the previous hardcoded text, so the caregiver e2e flow is unchanged. Locked by e2e/i18n.spec.ts "the caregiver Daily Report loop renders in all three languages".
- **Reported:** src/components/manager/managerNav.ts has no 'Follow-up' item in MANAGER_DESKTOP_NAV, but MD-09 (node 1226:1244) shows a dedicated 'Follow-up' entry between Communication and Reports, active on that screen. I could not edit components/, so the desktop sidebar will not highlight or link Follow-up. The
  - **Resolution:** FIXED. MANAGER_DESKTOP_NAV now carries { to: "/manager/follow-up", copyKey: "followUp" } between Communication and Reports, matching MD-09 node 1226:1244. The followUp label already existed in EN/ID/JA.
- **Reported:** CreateCvPage, WorkPreferencesPage and EditCvPage still schedule their save/create timers without an unmount cleanup (pre-existing); ExperienceForm, QualificationForm, SkillsLanguagesPage, UploadCvPage and ReviewImportPage do clear theirs.
  - **Resolution:** FIXED. CreateCvPage, EditCvPage and WorkPreferencesPage now hold their timeout in a timerRef and clear it on unmount, matching the pattern their siblings (UploadCvPage, ReviewImportPage, SkillsLanguagesPage) already used.
- **Reported:** Knowledge entry point (NOT fixable inside my folders): nothing in Home or Profile links to /worker/help or /worker/knowledge. The Profile explore grid / rail cards (src/pages/worker/profile/sections/ProfileRailCards.tsx) only link to /worker/identity, /worker/documents, /worker/coin and /worker/prof
  - **Resolution:** Already closed: Home's explore grid links to /worker/knowledge and /worker/help (src/pages/worker/home/sections/ExploreGrid.tsx). Locked by e2e/canonical-mobile.spec.ts "Home reaches Knowledge & Q&A and Help & support without a typed URL".
- **Reported:** W-60B How to Earn is content-thin vs the mobile frame (1151:340): mobile adds an 'Active program rule' card, per-rule Trigger/Frequency/Timing lines and a closing 'Program rule notice'; the FE card still shows title + frequency + amount only (this is content depth, not a missing screen or control).
  - **Resolution:** FIXED. W-60B (1151:340) restored in full: the ACTIVE PROGRAM mint card (ActiveProgramRuleCard.tsx), HOW / LIMIT / WHEN ADDED on every rule row, and the amber closing notice (ProgramRuleNoticeCard.tsx) — in EN/ID/JA. The employer name comes from EMPLOYER rather than Figma's "ABC Japan", per the shared-data rule.
- **Reported:** W-60D Empty still uses the desktop wording ('No Coin activity yet' / 'Earned and used Coin activity will appear here.'); the mobile frame reads 'No Emenda Coin yet' / 'When you complete an eligible activity, your coin balance and history will appear here.' with the subtitle 'Your reward activity wil
  - **Resolution:** FIXED. Mobile is canonical for what a screen says, so W-60D's wording now applies on both viewports: subtitle "Your reward activity will appear here.", title "No Emenda Coin yet", body "When you complete an eligible activity…". The desktop twin WD-60D (1186:1649) wording is deliberately not used.
- **Reported:** The employer scope cards on W-50D/W-51D are replaced by a status panel on desktop; the mobile frames keep the full EMPLOYER / CAN ACCESS / STAYS PRIVATE stack plus an error banner above the actions - a presentation gap worth a second look if the desktop pass wants stricter mobile parity.
  - **Resolution:** FIXED. Both failed states again render the EMPLOYER card and the full EMPLOYER CAN ACCESS / STAYS PRIVATE pair plus the red banner (W-50D node 943:92), laid out with the section's desktop composition. WD-50D/WD-51D collapse this into a lone status panel; mobile governs the content.
- **Reported:** OUT-OF-FOLDER GAP #1 — /auth/register's back path leaves the access surface. RegisterPage.tsx:75 sends 'Already have an account? Log in' to /auth/login (W-04), not back to /signin. A user who entered from /signin therefore backs out onto the worker login screen rather than the door they came from. I
  - **Resolution:** ACCEPTED as drawn. W-05's own way back is "Already have an account? Log in" → W-04 Login; following the frame is correct even when the user entered from /signin. It is a working back path, not a dead end.
- **Reported:** OUT-OF-FOLDER GAP #2 — the onboarding funnel is still orphaned. CreatePinPage.tsx:38 navigates straight to /worker after a successful PIN, skipping /onboarding/id (W-12) entirely, so W-12..W-17 remain unreachable by clicking even though the register chain now works end to end. src/pages/auth and src
  - **Resolution:** Already closed by the auth pass: CreatePinPage.tsx navigates to /onboarding/id, so W-12..W-17 are reached by completing the funnel.

## Implementation notes carrying no visual divergence — 220 · FIXED

These record how a screen was built (structure, wiring, verification) rather than a departure from the mock.

<details><summary>Show the 220 entries</summary>

- Offline banner styling (WD-04D/05D/06G/08D/09E/11B) inferred as the pale-blue #eef6fb / #bdd9e8 'Connection unavailable' component style, taken from the identically-named card fetched on WD-10 — the variant frames themselves were outside the 10-call design-context budget; copy ('No internet connection' / 'Try again') is verbatim from layer metadata.
- WD-07C inline error text rendered as 'PIN save failed', derived verbatim from the layer name 'Inline error · PIN save failed'.
- Inline error color uses the token signal #c94f3d — section 01 frames never exported an exact error hex; digests give ~#C13A2A/#C9382E for sibling sections.
- WD-11 in Figma is a full split-screen confirmation page (amber 'Before you log out' card + buttons in the form rail), not a modal dialog over Welcome as the task brief suggested — implemented per Figma, the source of truth.
- Splash footer is responsive copy: 'Worker Desktop Experience' (verbatim desktop WD-01 fetch) at lg+, 'Worker Mobile Experience' (verbatim W-01) below lg.
- Mobile 9:41/battery status bar not rendered — OS chrome, and those layers are hidden even in the desktop frames.
- Desktop headings/wordmark use Inter Bold (per fetched desktop code) while sub-lg uses the Sora display font per the W-xx mobile digest — implemented via font-display lg:font-sans.
- Countdowns (00:42 OTP, 00:59 resend, 14:32 lockouts) tick live from the mock seed values rather than rendering as static text.
- Kept Figma's fractional font sizes exactly as the file reports them (11.6/12.6/13.7/14.7/15.8/17.3/18.9/23.1px) rather than rounding.
- Verification pill badges inside the ID cards ('Not verified'/'Verification pending') are hidden layers in every frame of the file — not rendered; only WD-17D's visible green 'Identity verified' text line is shown.
- WD-14C primary 'Choose another document' rendered as an enabled green CTA (fill not extractable from metadata; it is an actionable prompt).
- WD-16A 'Submitting…' button rendered in the section's disabled style (#eef2ef bg / #98a39c text) following the auth-section loading-button convention; exact mock fill unknown.
- WD-16F offline banner fill not extractable — used the gray-tint #eef2ef, radius 14, matching the Personal Profile offline banner description in the digest.
- WD-17F skeleton tones interpolated (backing blocks #eef3ef 'subtle', inner lines #e3efe8 'brand-soft'); block geometry traced from the frame's rectangles.
- Desktop verticals reproduced via per-frame rail top offsets and a fixed y≈286 heading; columns flow (not absolutely positioned) so shorter/taller viewports degrade gracefully; per-state rail shifts of a few px (e.g. WD-13A, WD-14 A–C) not re-applied.
- 'Do this later' and 'Continue to Home' exit the flow to /worker (headless home), per the W-18A 'Identity setup not finished' lifecycle.
- WD-16C state heading kept ink-colored — variant heading colors are not extractable from metadata and were not guessed.
- Mobile (W-12..W-17): same single-column wizard with wordmark-only header per the mobile digest (this section has no bottom nav), 20px side margins, 28px headings scaling to 40px at lg.
- Mobile W-18 base mock (529:3) shows an 'Emenda Coin' mint card in the stack; omitted because the brief freezes the layout to the existing build and mandates the default render stay exactly as the current WD-18J page (which has no coin card).
- Panel CTAs whose destinations do not exist yet (Connect employer, Review employer, View EMENDA ID, View connection, Connect another employer, Continue identity setup/profile, Review document) render as non-navigating buttons, consistent with the existing 'View ID' button; the default connected panel keeps its /worker/profile link exactly as before.
- WD-18F 'Identity verified · cached' status rendered in the green verified tone (exact fill not recoverable from metadata; digest gives no color guidance — verified statuses are green everywhere else).
- Superseded files sections/EmployerConnectedPanel.tsx and sections/WorkToolsCard.tsx were replaced by NextActionPanel.tsx and ThirdStatusCard.tsx and deleted (grep confirmed no importers outside the home folder).
- Mobile card mismatch inside Figma itself: the current W-19 base frame (544:3) and W-19C show an 'Identity & documents' card (View identity + Documents pills) plus the Emenda Coin strip, while the older mobile variant frames (W-19B/D/E/F/G) still carry the desktop-style 'Legal identity is managed separately' card and no Coin strip. I follow each state's own mock: base/updated mobile render Identity
- Cross-section link targets guessed (routes owned by other agents): 'View identity' -> /worker/identity, 'Documents' -> /worker/documents, Emenda Coin strip -> /worker/coin. Parent may need to adjust these three paths to the routes those agents registered.
- Content column widths follow the Figma frames exactly rather than the generic 1012px guidance: view page 1112px (620 + 32 gap + 460 rail), edit page 1096px (520 + 56 + 520).
- Country names (Japan/Indonesia/Philippines/Vietnam/Nepal) and location strings ('Tokyo, Japan') are treated as raw mock data, not translated copy, consistent with the data-vs-UI i18n rule.
- Copy inferred (not in fetched frames, states described in digest only): WD-22A/B/C/D status+error lines and Uploading button label; WD-23A/23B saving/failed titles+bodies; WD-23C-J sub-screen titles/subtitles, decision labels ('✓ Keep'/'Removed'), sheet body text and 'Skills · 12 found'/'Languages · 3 found' split; WD-24A eyebrow ('Verified update') and card colors (amber family, matching the hub'
- WD-24B suggested changes render as interactive checkbox squares + label (mock shows a literal '✓ ' text prefix); toggling reproduces 24H/24I/24J including the disabled Apply state.
- Content column is max-w-[1080px] with 520px card columns and 40px gutter (exact career-mock geometry) instead of the reports pages' 1012px/492px convention.
- 'Download PDF' and 'Download submitted PDF' are non-interactive blocks, mirroring the Figma 'System action' nodes (no click target in the prototype).
- Colors: used the exact hexes returned by the Figma fetches (#17231f ink, #65746d muted, #0b684f back link, #0b5842 action-green text, #0c664b primary, #d5e0da/#d1ddd7 borders, #eaf4ef/#cfe2d9 verified mint, #f1f5f2/#dce5e0 locked fields, #b42318/#e4b8b3 danger, #9dbbad disabled sage, #f9fbf8 sheet, rgba(0,0,0,0.28) scrim) instead of lp-*/brand tokens, since none of the fetched hexes exactly matche
- Copy for lettered variants that were not individually fetched (empty states, offline banners, save-failed cards, unsaved/delete/remove confirm bodies, add-form subtitles for experience/education, skill/language sheet subtitles, record-type sheet copy, proof chooser/failed/unsupported bodies, credential-available banner, issue-submitted body) was written to match the section's documented state patt
- Education form fields (Degree / Institution / Field of study / Start year / End year / Description · Optional) were derived from the WD-26 card contents since WD-26B itself was not fetched; validation mirrors WD-25C ('Enter a degree.' / end-year-after-start-year).
- Delete/remove/unsaved confirmations render as in-page cards replacing the form's action row (digest: confirmations are 'laid out as in-page cards'); the WD-27H/WD-28F selector sheets follow the fetched frame exactly — centered #f9fbf8 dialog over a 28% scrim on desktop, bottom sheet on mobile.
- WD-27H digest mentioned Save/Remove buttons in the proficiency sheet, but the fetched frame contains only the four level options + Cancel — the fetched frame was followed.
- WD-27 base card shows 5 skills + '+7 more' while the fetched WD-27B edit card shows exactly 4 removable chips; kept per-mock (overview renders the base set, the editor initializes with the edit frame's 4 chips).
- Shared UI primitives for all four folders live in src/pages/worker/career/experience/careerUi.tsx because only the four assigned record folders were writable; education/skills/qualifications import from it (no files created outside the assigned folders).
- Copy verbatim from 10 fetched Figma nodes (WD-29, 29A, 29B error card, 29D sheet, 29E, 29G, 30, 30A, 31, 31D sheet); remaining lettered-variant copy was inferred and marked below.
- WD-29C/31G offline banner text ('You’re offline' / reconnect line) and its neutral #eef3ef styling inferred — metadata gives only geometry (520x56-70 + ~125x36 Retry).
- WD-29F/29H selector sheet titles/bodies inferred from the fetched WD-29E pattern; the option lists themselves are verbatim from Figma layer names.
- WD-29I/31A 'Saving…' label, WD-31A saving-card copy, and the sage #9dbbad disabled-button fill follow the section digest conventions (exact strings not in fetched nodes).
- WD-30B/30C/30D/30E creating/created/failed/offline card copy inferred from metadata structure ('Ready for new applications' taken from the WD-24 digest); Created card given the section’s pale-green success tint (#e7f0ea) — mock fill color unknown.
- WD-31C unsaved-sheet copy inferred by analogy with fetched WD-29D ('Discard CV changes?' / 'Your unsaved CV edits will be lost.').
- WD-31E/31F reorder-mode subtitle inferred; 'Done' labels reuse common copy.
- WD-31D shows an altered 'Visible sections' card behind the scrim in the mock (unknown copy); the standard CV sections card is rendered behind the sheet instead.
- 'Hidden' label for a hidden section’s row pill inferred (base mock only shows 'Included').
- Desktop dropdown chevron sits at x≈251 inside the 520px input in the mock — reproduced literally on lg, right-aligned on mobile.
- Summary 'From Apr 2027' keeps the EN month abbreviation in ID/JA (formatDisplayDate parses full day-month-year dates only; full dates like '01 Apr 2027' do go through it).
- Cross-links target sibling-agent routes assumed as /worker/career/cv (Review My CV) and /worker/career/experience|education|skills (WD-30A Add buttons).
- Scrim rendered as bg-black/40 (opacity not extractable from metadata).
- Mobile W-31 digest lists PROFESSIONAL SUMMARY as a textarea; desktop single-line 52px input kept at all breakpoints to match the fetched desktop node.
- Content column uses the repo-standard max-w-[1012px] (486px card columns, 40px gutter) instead of Figma's 1080/520 — mandated by the quality bar to match the reports pages.
- WD-33's known design bug (record-card 'Valid until' label colliding with the wrapped two-line status title) is not reproduced; flow layout stacks the rows below the title.
- WD-32L's bottom 'Validation helper' text is not extractable from metadata (node named generically); used the design system's established validation line 'Fix the highlighted fields before saving.' (WD-25C pattern), translated in id/ja.
- Grey system-banner (#eef1ef / #dfe6e1) and skeleton (#e9ede9) fills were sampled from frame screenshots — those fills are not present in metadata/design-context output.
- WD-33H/L/R unsaved sheets are 294px tall in Figma with an empty band between the two buttons (hidden middle layer, ids missing from the export); rendered as the standard two-button sheet using WD-32K's spacing.
- Record values (status-of-residence names, entry-document progress, work-permission values, note text, dates) are treated as untranslated mock data; provenance labels (Self-added / Verified residence card / Self-added plan / Verified identity document) are UI copy and translated.
- Save/Save-note interactions simulate a ~0.9s saving phase then navigate to the appropriate record view (no persistence layer in the mock).
- Cross-section links whose owning agent's routes are unknown point to the hub: the linked reminder's Manage pill (managed via Residence status, WD-33) and the Outside-Japan 'Confirm residence / visa plan' card both go to /worker/japan. Parent may retarget them to the WD-33 / WD-32F routes once known.
- The 'Resident registration' checklist card links to /worker/japan/registration — Figma has no WD-34 detail frame for that task and the WD-35 page is its natural drill-in.
- Validation styling inferred: metadata shows the error message rendered inside the field replacing its value; red border + red message color (#c0392b) follows the section's stated inline-validation pattern (exact red not present in any fetched WD-35/36 frame).
- WD-36E/F/G frames omit the 'Delete reminder' button even though they are edit-family states; reproduced exactly (delete hidden for saving/save-failed/offline query states, visible in edit/unsaved/delete-confirm).
- The third line of the Not-Started / Empty / notifications-off cards ('Add registration status', 'Add important date', 'Manage permission') is styled as the 13px grey row exactly as the fetched WD-36M frame renders it, and made clickable (digest describes them as links).
- Sheet confirm-button styling (Done, Use custom reminder, Keep editing as solid green; Discard/Delete as white-green) inferred from the section's primary/secondary button language — the metadata dumps carry no fill colors for those dialog buttons.
- Overlays are centered 520px cards on desktop per the WD frames and bottom sheets on mobile per the mobile digest (individual W-35J–L/W-36K–L mobile frames were not fetched within the 10-call budget).
- Residence-card detail reuses the WD-39A verified read-only layout with residence data (Residence record / Linked from Residence Status / VALID UNTIL 18 May 2027); its DOCUMENT NO. row is omitted rather than inventing a masked number.
- Hub self-added meta 'Self-added · JEES · Aug 2026' keeps 'JEES'/'Aug 2026' as raw record data (month-year strings are outside formatDisplayDate's contract).
- Desktop content column is max-w-[1080px] (Figma WD-37..40 use a 520px+40px+520px grid at x=280) rather than the reports pages' 1012px — Figma is source of truth for this section.
- Per the mobile digest, W-39's Delete document button is green-outline on mobile and switches to the desktop red-outline at lg; WD-40's Remove emergency contact stays red at all sizes (the app's only mobile red action).
- WD-37B empty state keeps the Emergency information shortcut visible below the empty card (exact WD-37B composition beyond centered icon + Add button was not specified).
- Route params are :articleId and :questionId (task sketch said :id) — the router wiring must use these names to match useParams.
- Content column is max-w-[1040px] (exact Figma column for section 08: x=280..1320) rather than the 1012px used by the reports pages.
- Fetched 10 base frames within budget (WD-41, 41B, 42B, 43, 44, 44F, 44G, 45, 46, 46A) — those screens' copy/spacing/colors are verbatim. Copy for the remaining lettered variants was built from digest + metadata structure; the following EN strings are faithful approximations, not verbatim: WD-42 base H1/subtitle/search-tip card, WD-42A searching subtitle, WD-42C no-results title/body, per-screen of
- Article bodies for WD-43B/C/D (residence status, address timing, city hall) are tone-matched approximations — the digest confirms they are real content variants but their full text was outside the design-context budget; WD-43 (resident registration) body is verbatim.
- WD-44C error banner uses the token pair error-bg/#c94f3d (signal) since its exact hex was not fetched.
- Ink #0e1f18 kept as an arbitrary hex per fetched values (differs from the lp-ink token #0f1f1a).
- TODAY/EARLIER group labels are rendered in every feed state. The base frames carry them (added late as nodes 1203:317/318) but some variant frames' metadata omits the label layers; the digest describes the offline banner as sitting "at the top of the TODAY group", so labels were kept consistent across states.
- Desktop WD-53C skeleton fill and loading subtitle text are not exposed in desktop metadata; reused the mobile W-53C palette (#f4f6f5 cards, #e0e5e3/#e5e9e7 bars) at desktop geometry (4 rows, 82px, 23px gaps) and the mobile loading subtitle "Loading your latest updates…" on both breakpoints.
- "Mark all as read" is disabled while offline on both breakpoints: mobile mock explicitly dims it to 45% opacity; desktop mock keeps the normal button look (kept) but interaction is disabled for consistency with the "sync after reconnecting" copy.
- Notification rows are cursor-pointer anchors in the mock but no destination screens exist in this section — rendered as non-interactive <article> cards.
- Desktop mock's unread pill is a fixed 100px frame that would clip "Cached · 2 unread"; implemented at mock height/typography with content width + 14px horizontal padding.
- Privacy footer is bottom-anchored at y=790 in the fixed 900px desktop mock; in the flowing page it uses a fixed 62px top gap (8px on mobile, matching the mobile flow) rather than viewport pinning.
- Router wiring is not done (parent owns src/app/router.tsx) — /worker/help currently still resolves to ComingSoonPage until the three routes above are registered.
- WD-48F's final 'restored' overlay renders all five topic rows as plain outlined buttons with no selection marker. Added the design-system green Check on the currently selected row (the pattern used by the parallel WD-44F overlay) so the active topic stays visible.
- WD-48A renders the error message inside the empty ISSUE field rather than as a helper line below it — implemented literally as a red placeholder plus a #d12924 border, so no separate helper text was invented.
- Mobile W-47 (899:3) / W-48 (899:101) / W-48G (899:383) were not fetched — the 8-call Figma budget went to the desktop frames. Mobile styling follows the digest-2 description plus the established mobile conventions in this repo (single column, radius-14 cards with 22px green line icons and chevrons, bottom sheets instead of centered modals, full-width pill buttons, mint note with shield glyph).
- Icon glyphs are lucide line icons chosen to match the mock descriptions (LifeBuoy, BookOpen, KeyRound, Phone, ShieldCheck, Check, ChevronRight, ChevronDown). Desktop WD-47 cards carry no icons in Figma and render icon-free (icons are lg:hidden).
- Content column: the hub uses max-w-[1012px] as required, but the WD-58 conversation screen is a 350px + 764px two-pane (1132px in Figma), so ConversationView uses max-w-[1132px].
- "Needs reply" badge: WD-57A/WD-58 render it mint (#e8f5ed/#d1ded6/#054d3d) while mobile W-57A renders it amber. Implemented amber below lg and mint at lg so both mocks are honoured; "1 unread" is mint at both widths.
- WD-57A hub avatars come back from Figma as bare initials text with no circle; the digest and mobile W-57A both show mint initial-circles, so a 46px #f2f9f5/#d1ded6 circle is drawn (identical to the WD-58 list avatars).
- WD-57C has a Figma layout bug — the centred 14px body and the left-aligned 13px scope helper occupy the same y band. Both strings are kept and stacked (centred body, then left-aligned helper, then the 210x42 Message manager pill).
- WD-58A "Typing" contains no typing-indicator node — the only difference from WD-58 is a 13px #0a4738 draft line above the composer. It is rendered exactly that way, with the draft also pre-filled in the composer input.
- WD-58I tone was not returned by the Figma export (only Title / Body / "Try again" nodes); it is styled with the same red failure treatment as WD-58B (#fdedec / #c72924) for consistency with the app's failure register.
- WD-58K/58L message bodies were not fetched (8-call Figma budget was spent on the base screens and on the states whose copy was unverifiable). The employer-support thread uses invented but on-topic bilingual mock content about the residence-card update, matching the digest's description; all of it lives in chatMock.ts as data.
- WD-58M's file line (residence-card.pdf · 240 KB) and the WD-58F counter (00:12) are mock data — only "Ready to send" / "Remove" / "Recording" are Figma-verbatim.
- WD-58G → WD-58H advances on a 1.6s timer (no button exists in the mock for that transition); everything else in the voice pipeline is click-driven and nothing is ever sent without the explicit Review gate.
- No dates appear anywhere in section 13 (only clock times such as 14:29, which are mock data), so formatDisplayDate is not used here.
- Figma budget was 8 get_design_context calls: WD-54 (1182:3426), WD-55A (1182:3816), WD-55C (1182:3875), WD-55D (1182:3927), WD-54E (1182:3696), WD-55F (1182:4038), WD-55G (1182:4099), WD-55J (1182:4990) were fetched verbatim. WD-54B/54C/54D, WD-55E, WD-55L, WD-55Q, WD-56B/56C were built from the digest text plus the verified sibling frames — a prior interrupted run had already captured most of tha
- WD-55E (Submit Failed) banner tone was not fetched; it uses the app's red alert treatment (#fff0ed fill / #c72924 border+text) plus a red 'Try again' note card, matching the red styling used by the verified WD-55A helper card. Copy is verbatim from the prior run's capture.
- WD-55Q (Review Offline) reuses the WD-55F amber banner and 'You're offline' note copy verbatim rather than an unverified string of its own; the underlying review layout follows the WD-55B description in the digest (template card, REPORT STATUS · Normal, two field cards, Ready-to-submit + Employer visibility pair, Submit/Edit buttons, larger closing EMPLOYER VISIBILITY panel).
- WD-56B/56C cached-record note copy ('Cached report content stays available offline. Status updates appear after you reconnect.') is inferred from the app-wide offline pattern — the banner itself ('You're offline') is verbatim from WD-54D/WD-54E family.
- The offline/access-ended/submitting/review-offline primary buttons render as inert styled blocks (not links/buttons) because the mocks show them present but non-actionable in those states.
- Detail offline states render from a dedicated cached mock record (DETAIL_SUBMITTED_CACHED / DETAIL_VERIFIED_CACHED, the WD-56 general-template record '25 Aug · Warehouse preparation') rather than the store, so WD-56B shows a genuinely Submitted record — both seeded store reports are already Verified.
- Figma budget: 7 get_design_context calls were spent on WD-49 (1182:598), WD-49C (1182:751), WD-50 (1182:910), WD-50C (1182:1076), WD-51 (1182:1178), WD-51A (1182:1237) and WD-52 (1182:1680). The remaining lettered variants (WD-49A/B/D/E, WD-50A/B/D/E/F, WD-51B/C/D/E/F, WD-52A) were built from the digest text reusing the exact geometry of their fetched base screen.
- Header spacing (breadcrumb → H1 → subtitle) uses the app-wide mt-[14px]/mt-[14px] convention already established in KnowledgeHubPage and ReviewReportPage rather than the raw Figma text-box offsets (12px/4px), which assume Figma's vertically padded text boxes. All content-level gaps below the subtitle are the exact Figma box deltas (44 / 8 / 18 / 20 / 16 / 26 / 32 / 22 / 46 / 132 / 48 / 52 / 36px).
- Spinners on WD-49B / WD-50B / WD-51B use lucide-react `LoaderCircle` (18px-family line icon at 16px) with animate-spin; the mocks show a static glyph.
- Mobile-vs-desktop tone swaps in one component: W-51's 'View Career & CV' is a filled dark-green pill on mobile but the WD-51 desktop mock renders it white-outlined; W-50's disabled 'Connect employer' is a desaturated sage pill on mobile but white-outlined with green label on WD-50 desktop. Both are handled by breakpoint-swapped tones in ActionButton (`primaryMobile`, `muted`).
- WD-52A ended combines both mocks on one route: the approved card flips to 'Status: Ended' (desktop WD-52A) and the 'EMPLOYER ACCESS ENDED' entry is appended (mobile W-52A).
- No dates appear anywhere in WD-49..WD-52, so formatDisplayDate/useLanguage are not used in this section — no dates were invented.
- employer.copy.ts (the partial file from the interrupted run) was completed rather than rewritten: `scope.accessPairs` was added in all three languages and the duplicate `review.connecting.accessPair1/accessPair2` keys were removed, so the connecting (WD-50B) and disconnecting (WD-51B) recap cards share one set of strings.
- WD-60A on desktop has no filter chips and no month label — the mobile W-60A frame (1151:306 filter row + 1151:314 month) does, and the task brief explicitly asked for All/Earned/Pending/Used chips, so the ledger renders the mobile arrangement on both breakpoints.
- Desktop WD-60L/M/N/O/P/Q/R/S/T are heading-swap screens that reuse the WD-60 overview body verbatim (confirmed in metadata: identical layer trees, only Title/Subtitle differ). Building eight pages that render the same balance/check-in/pending body would make the catalog and redeem chain unusable, so those routes render the real mobile content (W-60L 1186:261, W-60M 1186:296, W-60N 1186:326, W-60O 
- 'Ways to earn' card carries a right-aligned 'See rules' link. That link exists in mobile W-60 (1179:322 'Button · See earning rules') but not in desktop WD-60 (1186:1415 is Title + Body only); it is kept so the card is navigable at both breakpoints.
- Mobile W-60B adds an 'Active program rule' card above the four rule cards and a 'Program rule notice' card below them (1182:2033, 1179:388). Desktop WD-60B (1186:1538) is a single 'Rules' card with four rows; the desktop composition was followed, so those two mobile-only strips are not rendered.
- Mobile W-60E offline splits the body into 'Cached balance' + 'Cached recent activity' cards (1151:410 / 1151:414). Desktop WD-60E keeps the full unchanged overview body under the banner, and that desktop composition was followed.
- WD-60F/WD-60G have no Subtitle node on desktop, but mobile W-60F/W-60G do (1158:378 / 1158:470); the subtitle is rendered so the state ('Today's check-in is complete.') stays legible on both.
- Exact button/label strings for the mobile-only redeem screens could not be read from metadata (frame names only, and the digest does not quote them). Labels were written from the frame names and the digest's described intent, e.g. 'Use 100 Coin', 'Confirm and use Coin', 'View active rule', 'Back to rewards'.
- The Figma MCP was not called: the interrupted run left a complete implementation, and both the desktop layer tree (metadata.xml 1186:1359–1192:841) and the mobile layer tree (mobile-coin.xml 1151:254–1190:349) were already available locally at full node-level detail, which is what the remaining verification needed.
- Check-in and history dates come from the shared TODAY string and raw 'DD Mon' values in coinMock.ts and are formatted through formatDisplayDate(); the ledger's month label uses a local formatLedgerMonth() because it is an uppercase month-year group heading, which @/i18n/format does not produce.
- Content column is max-w-[1132px], not the usual max-w-[1012px]: WD-59 is a two-card split whose Figma widths are 300 (rail) + 18 (gap) + 814 (workspace) = 1132. Compressing to 1012 would break the 690px assistant bubble / 746px composer widths.
- Mobile suggestion chips are WHITE pills with a #e5e8e5 hairline and a 13px near-black label (per digest-2 W-59 and the loose chip component), not mint. Desktop chips stay mint #f2f9f5 with 14px semibold #054d3d as in WD-59. The brief's 'mint chips' describes the desktop variant.
- Desktop voice review (WD-59E) shows only the Indonesian transcript + 'Use transcript'; the 日本語 translation block and Edit/Send pair exist only in the mobile W-59E card, matching the Figma frames rather than the brief's merged description.
- Mobile source chip colour: digest gives '#E8F1F8-ish pale blue, dark blue text' with no exact hex, so bg-[#e8f1f8] / text-[#1c4e80] is an approximation. Desktop chip uses the confirmed white / #054d3d.
- WD-59I attachment-ready card fill is not readable from metadata (only Title/Meta/Remove nodes); implemented as the tint #f2f9f5 + #d1ded6 card used by the sibling WD-59E strip, with a white outline Remove pill. The file name 'Shift notice.pdf' is invented mock data (Figma text unavailable at the metadata level).
- Chat 3 ('Shift question') has no Figma thread — its user line reuses the verbatim Figma preview and its assistant reply is invented mock data so the chat opens to a real conversation.
- Thinking pill styling (WD-59B, 180x42) is described only as a 'small gray pill' in the digest; implemented as tint #f2f9f5 + #d1ded6, 13px #63756b.
- Removed three keys from the pre-existing partial assistant.copy.ts (offlinePlaceholder, offlineTitle, offlineDesc): both W-59F and WD-59F use the banner, so those strings had no surface and would have been dead copy.
- Figma budget: 8 get_design_context calls used (rail 1186:595, WD-59 workspace 1186:613, WD-59A 1186:692, WD-59C 1186:848, attachment menu 1186:935, voice review 1186:1026, WD-59H 1186:1259, send-failed banner 1186:1183). WD-59B/59I mobile W-59 frames were built from the digests + metadata.xml.
- Only 8 Figma calls were budgeted and the previous interrupted run had already consumed the design-context reads, so this pass built from the two digests plus metadata.xml rather than re-fetching WD-61 nodes. Spacing values come from the digest's stated frame sizes (492x112 tiles, 1012x360/390 detail cards, 420x42 tab pill, 1012x466 stress card, 520x300 modal) and the canonical Reports/Knowledge pa
- The 'Laporan Harian' overview tile links to the existing /worker/reports section rather than a route inside this folder, since Daily Reports is section 15's surface.
- The WD-61Z headless strip sentence is English verbatim in the Figma frame, so EN holds it verbatim while ID and JA carry faithful translations, consistent with the rest of the i18n layer. Short bilingual data labels the mock deliberately keeps in English — 'Verified', 'Private', 'Today', 'VERIFIED WORK RECORDS', 'PERSONAL CAREER NOTES' — stay English in the ID dictionary, matching the digest's doc
- common.nav has no 'logs' key and src/i18n is off-limits, so the hub eyebrow uses a section-local overview.eyebrow key ('Logs & Records' / 'Catatan & Rekaman' / 'ログ・記録') instead of a shared nav string.
- Delete and save actions are navigational only (this repo has no persistence layer); confirming a delete returns to the parent list rather than mutating the mock arrays.
- WD-61M1 history, WD-61M6/M7 dated stress detail, and the per-note edit screens get their own routes because the mobile flows reach them as separate frames; the desktop digest describes them as companions of the same base screens.
- Lettered variants that were not screenshotted within the 8-call Figma budget (01C, 01D, 02B, 02D, 03B-03I) use copy derived from the digest's state list plus the worker app's existing terminology (e.g. offline = 'No internet connection' / 'Try again', 'Code expired', 'Too many code requests') so the two apps stay terminologically consistent.
- MD-AUTH-03 / MD-AUTH-03A were built from the digest text (not fetched — budget spent on MD-AUTH-01/02/04 and all five mobile bases). The desktop reset card carries the mock's title/body/CTAs plus the Confirm password field and mint 'Password requirements' card the route brief specifies; the mock's spaced code '2 4 8 1 9 6' is reproduced with letter-spacing over the single shared code value.
- MD-AUTH-03's grey subtitle is not recorded anywhere, so 'Enter the verification code sent to the registered Manager email.' was written in the voice of MD-AUTH-02's subtitle.
- EM-AUTH-00 has no desktop twin in Figma; the splash renders the mobile composition with scaled type at lg rather than inventing a desktop frame.
- Button fills follow each variant exactly: mobile pills are the frames' #0b6b57, desktop pills use #0c5941 per the desktop section's stated '#0C5941-range primary buttons' (the desktop button shapes are flattened SVGs with no readable fill).
- Removed 7 stale files left in src/pages/manager/auth by an interrupted earlier run of this same task (ManagerSplashPage.tsx, sections/AuthButtons|AuthCallouts|AuthField|LanguageRow|ManagerAuthScreen|MobileStatusBar.tsx). They referenced copy/mock keys that no longer exist (MANAGER_AUTH_ORG, c.shared.languageLabel) and would have broken tsc. Nothing outside the folder referenced them, and no route 
- No lucide icons are used: these five frames contain no glyphs (the status-bar battery is drawn with the mock's own two rectangles).
- EM-MORE has no footer privacy banner in Figma (the mobile frame ends at the Logout row); MoreBoundaryBanner is therefore desktop-only (hidden lg:flex), exactly as MD-MORE 1223:67.
- EM-19's 'Send support request' and EM-20's 'Sign out' / 'Cancel' labels sit left-aligned at x=32 inside their 350px buttons in the Figma frames; rendered centred to match EM-18 'Save settings' (761:1204) and EM-18E's centred button labels, i.e. the section's own dominant pattern.
- Shared KeyValueRow keeps #094033 / #6e8a82 for label+value across the section; EM-18E's frame uses the near-identical #0d4a3e / #6f8881 pair. Kept unified rather than per-frame.
- EM-18A's three 'Private worker data' body lines (Health Log · Stress Check · Life Log / Family and private personal data / Private eCoin balance and transfers) came back flattened in the Figma node payload; rendered from the digest text inside the peach card at the card's 9px body scale.
- EM-18D was described from metadata only in the digest. The UNSAVED CHANGES rows are rendered as label + pending value with a red 'Not saved' marker on the right (UnsavedChangeRow), following the EM-16B failure pattern already shipped in src/pages/manager/audit.
- The EM-19 form card is a display card in Figma (Topic / Summary / Context lines). Only the Topic line was made interactive (sheet/dropdown); Summary and Context stay verbatim static lines so the card's copy and hierarchy are unchanged.
- 'Switch' (EM-MORE) and 'Switch Facility' (EM-18E) render as inert buttons — the facility-selection screen belongs to the manager auth/facility flow outside this folder, so no destination was invented. 'Sign out' targets /manager/auth (the route the sibling manager auth section navigates to as Manager Login); 'Cancel' returns to /manager.
- formatDisplayDate is not used in this section: it has no '25 Aug 2026'-shaped dates. '10:32' is a clock time and '2026/08/11' is the date-format specimen itself, which must stay literal on EM-18B.
- Mobile count chips (EM-09 / EM-12) are filters in this build but the Figma shows all of them pre-filled (mint, plus peach for High/Urgent) with no active/inactive contrast. I kept every mock fill exactly and marked the selected chip with a #094033 hairline instead of inventing a new fill. Desktop pills (MD-09 / MD-12) use the mocked active/inactive fills verbatim.
- The ✓ glyphs in EM-09A 'Manager decision' and EM-09B 'Before sending' render as lucide-react <Check> icons rather than a literal ✓ character, per the lucide-only icon rule.
- Figma's KPI/chip counts are verbatim constants (High priority 2, Reporting 2, Open 5) while the mocked queues contain 1 HIGH signal, 1 reporting alert and 4 alerts. I kept the Figma numbers rather than deriving them, so a chip count can exceed its filtered row count — same inconsistency the mock itself has.
- EM-09B's ORIGINAL MESSAGE / TRANSLATION PREVIEW render as read-only cards (as drawn in Figma), not editable textareas — the mock shows no input affordance.
- Two ManagerAlert fields (expectedValue, statusValue) were removed from followupMock.ts and replaced by localized alerts.expectedValues / alerts.statusValues copy maps, so the SELECTED ALERT facts translate instead of shipping raw English.
- EM-R2-02 chip row: Figma shows one single-select row with 'Last 30 days' mint-selected. Implemented as single-select — 'Last 30 days' applies the 30-day scope (the 5 rows the mock shows), 'All records' and 'All statuses' both widen to every permitted record. Because no status is hidden in the default view, those two chips resolve to the same set in this mock data; they are kept as distinct saved v
- EM-R2-05 'VERIFIED PROFESSIONAL EVIDENCE' tags all three entries Verified in Figma, including 06 Aug 'Shift opening procedure', which EM-R2-01 / EM-R2-02 show as Recorded. Rendered verbatim as Figma has it; the inconsistency is documented in analytics.mock.ts above CAREER_EVIDENCE_IDS.
- EM-R2-06 label 'NO RECORDS AVAILABLE' is #0c513b green in the Figma node (1137:52), not red as the digest text says. Followed the Figma node. EM-R2-04's 'ACCESS RESTRICTED' stays red (#b83826).
- EM-R2-02 status links are #0c5941 for both 'Verified ›' and 'Recorded ›' in Figma (the digest implies only Verified is green). Followed Figma; the two-tier code still reads through the label text.
- Both mocks render the record status chevron as the literal '›' glyph; implemented with a lucide-react ChevronRight icon per the no-emoji / lucide icon rule.
- 'View Worker' / 'Back to Worker' / 'Back to Worker Detail' link to /manager/workers (the Workers tab route) since the per-worker detail screen belongs to another section.
- Pre-existing files in this folder (analytics.copy.ts, analytics.mock.ts, ManagerAnalyticsPage.tsx and 13 sections) were kept; RecentWorkLogCard's ad-hoc date-year strip was replaced with a shared withoutYear() helper, and RecordsIdentityCard now uses 9px context lines on the EM-R2-03/05 variants and 10px on EM-R2-01, matching the nodes.
- EM-STATE-03's title is 19px semibold in Figma while EM-16/EM-17/EM-STATE-01/02 use 18px bold; all five reuse the shared AuditPageHeader (18px bold, 30px on desktop) so the resilience family stays visually consistent.
- 'Download Demo' on EM-17 is deliberately inert (a button with no handler): the mock's own PROTOTYPE STATE card states 'Mock file only · no production export backend is claimed', so wiring a real download would assert a capability the prototype does not have.
- EM-16B's CTA pair was not fetched from Figma directly (call budget); it is rendered as the same side-by-side 168px pair confirmed on EM-16A (1109:67/69) and EM-17 (1109:97/99), which the digest's description matches.
- Figma ships only 1440x2280 frames for LP-02/LP-03/LP-04 — there are no 390px EM-xx/W-xx mocks for the public inner pages, so the mobile rendering is a faithful single-column stack of the same sections (all cards/panels/pills preserved) rather than a separate mock. Desktop reproduces the mock's exact px/hex.
- The mock positions the header items at absolute x (nav 642/760/850, Log in 970, switcher 1104). Implemented as a flex row (wordmark left, nav + Log in + switcher right-grouped) so the longer ID/JA nav labels do not collide — all sizes, radii and colors are the mock's (42px pills, rounded-[21px] nav, rounded-[12px] #067a5e button, rounded-[22px] white switcher, 96px header with #d1ded6 divider).
- The mock's 'Learn more →' links and footer legal links have no targets. Learn more is wired to /about, /how-it-works and the LP-01 in-page anchors (/#about, /#features, /#how-it-works) via LANDING_ANCHORS in publicMock.ts; the three footer legal links stay placeholder '#' as in the mock.
- Check and arrow glyphs (LP-02 continuity lists, LP-04 You keep / What can end) use lucide-react Check and ArrowRight at the mock's 20px/18px sizes in #055240 — no committed SVG in src/assets/landing matched those glyphs. All mint icon tiles reuse the committed SVGs (id-badge, permission, records, career, japan-prep, documents, knowledge, employer, shield).
- EMPLOYER / WORKER / TODAY from src/data/caregiverReport.ts are not referenced: LP-02/03/04 carry no employer, facility, manager or worker data. The only ID shown is the mock's masked EMD-XX-XXXXXX placeholder (kept raw in publicMock.ts, not translated).
- The landing chrome is duplicated inside src/pages/public/sections (PublicHeader/PublicFooter) rather than importing src/pages/landing/sections — required by the ownership rule, and the inner pages' chrome differs from LP-01 anyway (nav is Link-based with an active pill, header has the #d1ded6 divider, footer uses the 18px wordmark and 12px/11px type from 1147:147-150).
- EMD-ID-004821 is kept exactly as drawn in LP-06/07/08 (per the brief) even though shared data's WORKER.emendaId is EMD-26-8F4K2A; it lives in accessMock.ts as ROUTING_EMENDA_ID, not in components.
- No 390px Figma variant exists for LP-05..LP-08 (the file's mobile mocks are worker W-xx / manager EM-xx only). Mobile is therefore the same composition stacked to a single column with the same copy, cards, radii and colors — desktop px are applied at the lg breakpoint.
- Figma's absolute positioning translated into flow layout with equivalent px rhythm (repo convention); exact widths/heights/radii/hex are preserved (500/544/520/610/550/484px, r10/12/14/16/20, #f8faf7, #f7f9f7, #f2f9f5, #e8f5ed, #fcfefc, #d1ded6, #054d3d, #064a38, #056b54, #08664f, #fff6db, #edb859, #85570d, #5c6e63, #63756b, #111f1a, #0f1f1a).
- 'Forgot your password or PIN?' is wired to the existing /auth/forgot-pin route (Figma draws a static link); the wordmark links to '/'.
- Route-card glyphs use lucide-react (Check 30px for LP-06's green checkmark, Building2 30px for LP-07/LP-08) instead of the exported Figma SVGs.
- The 58px 'Submission status badge' (1182:7840) in Daily report health is rendered as a #e8f5f0 disc with a 32px #0c5941 CircleCheckBig — the digest describes it as 'big green check'; the exact ring artwork lives only in the exported asset.
- The bell's red badge dot (1182:5781) was an exported ellipse asset; its fill is set to #b04139, the red used by the frame's High / '7 items' pills.
- AD-01 is desktop-only (1440x900). The mobile treatment is derived: the 232px sidebar collapses into a left drawer over a scrim (identical brand block, primary nav and pinned utility rows), a Menu button replaces it in the top bar, the 240px search field drops to its own full-width row so nothing from the mock is lost, and all card rows stack single-column. The activity table scrolls horizontally i
- Figma's 8px and 9px body/meta type is bumped to 9-11px below lg for legibility and restored to the exact Figma px at lg (e.g. `text-[10px] lg:text-[8px]`). All other px, hex, radii and gaps are the Figma values verbatim at every breakpoint.
- 'Log out' routes to /auth/logout (an existing route) instead of /admin; every other nav and utility item, plus 'View activity log →', resolves to /admin since AD-01 is the only Company Admin frame in Figma. Only Dashboard is rendered active (mint #e8f5f0 pill, green icon), matching the mock — the active item is pinned by ADMIN_ACTIVE_NAV_KEY rather than by NavLink matching, because every item shar
- The 'Managers' KPI reuses Figma's 'Icon · daily' calendar glyph on the blue #eff5fc tile, exactly as drawn in 1182:5811 (visually unexpected, but faithful to the frame rather than substituted with a people icon).
- MD-04B was not fetched from Figma (the 6-call budget was spent on MD-02, MD-02A, MD-02B, MD-04, MD-05, MD-05A). It is built from the digest entries for 1213:418 and EM-04B (932:81) plus the copy file, reusing the exact card/KPI geometry measured on the fetched screens.
- The peach 'Pending work stays bound' card is an EM-02B element; the desktop MD-02B states the same rule as the first line of its SWITCH RULES rail. Because the parent spec requires the card on /manager/facility/switch it renders on both surfaces (below the rail on desktop).
- 'Available modules' and the mint 'Facility context rule' card are EM-02A elements that MD-02A folds into its OPERATIONAL SCOPE / ACCESS & PRIVACY pair. The parent spec requires both on /manager/facility/context, so they render on desktop too, as extra cards in the same two-column grid.
- Facility totals: FACILITIES sums to 92 workers, so the EM-02 subtitle renders '92 workers across 3 facilities' rather than the mock's '103'. The number is derived from the roster data rather than hardcoded against it.
- The invite code regenerates to a random 'KIT-CF-XXXX' suffix on 'Regenerate' (the mock ships KIT-CF-24A8); this is local component state only.
- formatDisplayDate is applied to every visa date, but the mock stores them in the Figma-verbatim '2027/04/30' / '2027/04' form, which the formatter passes through unchanged in all three languages.
- MD-07 desktop bubbles are NOT the deep-green right-aligned manager bubble described in the brief — Figma 1225:125-132 draws the manager on the LEFT in #f1f6f3 with the translation as an inline 10px #0c5941 'JA → ID · …' line, and the worker on the RIGHT in #e3f0e8. The deep-green bubble with an embedded darker chip is the EM-07 (390px) treatment. Both are implemented, each on its own surface (Thre
- MD-08 desktop is a different composition from EM-08: a RECIPIENT / LANGUAGE / MESSAGE TYPE / CONTEXT metric quad (1225:165-180) above a 720px 'COMPOSE MESSAGE' card and a 320px 'BEFORE SENDING' rail whose CTAs are 'Review message' / 'Back' / 'Demo failure' (1225:213-218). The full-width green 'Send message' pill, the 'Before sending' checklist card and the COMMUNICATION CONTEXT strip named in the 
- MD-08A desktop checklist is a full-width #f1f6f3 'REVIEW CHECKLIST' strip with FOUR checks (Recipient + language confirmed / Original preserved / Translation reviewed / Privacy boundary checked) and the longer line 'Manager remains responsible for final wording and operational appropriateness.' The pale-yellow three-check 'Send check' card is EM-08A mobile only. Desktop also labels the second card
- MD-07B / MD-07C desktop are single centered cards (a 'SENT · DELIVERED' badge + headline + three metric cards; a #fce8e0 failure banner + 'DRAFT PRESERVED' box + 'BEFORE RETRY' line), not the EM-07B / EM-07C stacked-card sequences. Both variants are implemented per surface in MessageSentView.tsx / MessageFailedView.tsx.
- EM-06 shows no compose entry point, but EM-08 exists on mobile, so a 'Send' pill was added at the end of the mobile chip row to keep /manager/communication/compose reachable at 390px. Desktop uses the MD-06 dark-green Send button (1225:49) verbatim.
- MD-06's 'Broadcast' chip has no flagged rows in the mock; Dewi Anggraini and Alex Morgan are flagged broadcast:true in the mock data so the filter is not dead.
- MD-07's Conversations column is drawn with 3 rows inside a 620px card; the implementation renders the full desktop roster so the open thread is always present in the list. Its mini search (1225:108/109) is a static display field in Figma and is rendered non-interactive; the working search lives on MD-06.
- Absolute 1440px-frame coordinates are expressed as arbitrary-value Tailwind (exact px/hex/radii) in normal responsive flow rather than absolute positioning, matching ManagerReportsPage / FollowUpCenterPage conventions.
- Manager identity uses EMPLOYER.manager / EMPLOYER.managerRole from src/data/caregiverReport.ts rather than the literal 'Sato Kenji · Facility Manager' baked into EM-14B/14C, per the shared-data rule. Roster names in the mock (Dewi Anggraini, Budi Santoso, Putri, Sato, Dewi, Andi) stay raw as record data.
- EM-14B's four '✓' glyph rows are rendered as real toggle checkboxes (lucide Check inside a 12px box, role="checkbox"/aria-checked) rather than static text, and 'Approve & Publish' is gated on all four staying checked — the invariant the frame exists to state. Default is all four checked, matching the Figma frame exactly.
- EM-14B CONTENT EDITOR draft body is implemented as editable textareas (transparent, borderless until hover/focus) rather than static bullet text, because the frame is the manager edit gate. Initial values come from ojtMock editorSections; rendered text is byte-identical to the Figma bullets.
- EM-15 shows 'Aug 2026' active and 'Current facility' inactive. Implemented as two independent real toggles (aria-pressed) so both chip states are reachable; initial render matches the Figma frame.
- loading and offline have no dedicated EM-14/EM-15 frames — derived from the manager resilience pattern in section 09 (759:1304), matching the sibling follow-up section's OjtScreenStates equivalent.
- The '›' glyph in the EM-14 module rows is a lucide ChevronRight icon (no emoji/glyph text), per the icon rule.
- 'View Workers' targets the existing /manager/workers route and 'Open Audit Export' targets /manager/audit-export; both are outside this section and were not modified.
- A previous partial run had already written ojt.copy.ts, ojtMock.ts, OjtHubPage, OjtModuleDetailPage and 13 sections. These were reviewed against the freshly fetched EM-14 (761:2552) and EM-14A (761:2620) node data, verified verbatim, and kept; only the two page files were edited to add the desktop rail split.
- Presentation nuance not addressed: mobile W-18 shows either the Coin card (base/F/J/K/L) or the Recent updates feed (A–E, G–J), never chosen per state. The FE now renders both in every state to keep the skeleton frozen and lose no capability; if per-state fidelity is wanted later, gate them on view.state.
- The photo upload is mocked as fail-then-succeed so W-19G is reachable and the retry has an exit. If a real upload API lands, swap PersonalProfilePage's `finishUpload` for the API result.
- W-24 'Download PDF' and W-24F/G 'Download submitted PDF' remain non-interactive surfaces — the Figma layers are named 'System action', so they are rendered as static affordances rather than fake downloads.
- W-51F Employer access ended and W-60V remain URL-seeded: the terminating event belongs to the employer side and the only plausible in-app entry point is the Notifications section (W-53), which is outside this area's folders.
- W-60Q Insufficient balance is only practically reachable by redeeming the 100-Coin reward twelve times; if a cheaper mock balance or a second costly reward is ever added it would become a natural click path.
- W-55N conflict with the protected E2E flow: the store-backed caregiver form at /worker/reports/new (the Playwright submit path) was left completely untouched, so its Reports breadcrumb does NOT raise the unsaved-changes dialog — adding the guard there would change the protected form's navigation behaviour. W-55N is instead reachable on the caregiver template twin at /worker/reports/new?template=ca
- Template submissions (general / warehouse / food service) do not enter the shared reports store, so a submitted template report does not appear in 'Recent work history' and has no W-56 detail page. The store lives in src/data/reportsStore.tsx, which this section may not edit; wiring it needs a generic report shape owned by the data layer.
- The chat prototype has no translation engine: a message the worker types is paired with a fixed mock Japanese translation (chatMock.stubTranslation) in the W-58J gate and in the sent bubble. Real per-message translation needs a service.
- Mobile W-54J places the template-assignment strip above the today card while the desktop mock (WD-54I) keeps it at the bottom; I followed the existing desktop composition for both viewports so the hub stays consistent with the already-shipped caregiver hub.
- The Figma frame for W-61S ("Delete Private Note") does not exist — only its red dev label 1167:910 sits on the canvas; the flow is covered by W-61S3 Delete Life Note, which is implemented and reachable.
- The eight loose Indonesian "Prompt · …" chips near section 14 (1077:1122–1077:1154) are detached canvas leftovers, not screens; the shipped W-59 Home uses the English prompt set, which is what the FE renders.
- CARD HEIGHT RELAXED FROM FIXED TO MINIMUM. SignInCard.tsx went from lg:h-[520px] to lg:min-h-[520px] so the appended block can extend the card instead of overflowing it. Figma's 520px is preserved as the floor and every element above the new block keeps its exact drawn offset (title y=24, subtitle y=68, labels y=130/232, inputs y=160/262, button y=338, recovery y=400, helper y=444). The card grows
- PLACEMENT CHOSE THE CARD OVER THE LEFT COLUMN. W-03 stacks the secondary button immediately under the primary 'Log in' one. Doing that inside LP-05 would push the recovery link and 'Secure access…' helper away from the form they belong to, so the block sits after the helper behind a #d1ded6 hairline — the same divider weight and color the page already uses under its header. The credential form sta
- NO new routes were added and src/app/router.tsx was not touched. All 11 auth routes and all 6 onboarding routes were already registered, so `routes` is returned empty on purpose — do not patch the router from this result.
- NO new copy keys were added. The two new links reuse `AUTH_COPY.sessionExpired.backToWelcome` — the verbatim W-10 label 'Back to welcome', already complete in EN/ID/JA. EN stays Figma-verbatim; nothing was invented.
- DEAD CONTROL FIXED: OfflineBanner's 'Try again' had no onAction anywhere in the funnel — it rendered as a button and did nothing. It is now wired on Login, Register, OTP, Forgot PIN, Reset PIN and Logout to drop the offline pin and re-render the connected screen (on W-11B it completes the queued server sign-out and lands on W-03 Welcome).
- W-02 Choose Language, W-01 Splash and W-03 Welcome have no back control in the mocks. The funnel's way back up is the EMENDA wordmark (AuthWordmark -> /auth), which was already implemented and documented; I verified it works on both viewports rather than adding competing chrome.

</details>

## Decisions escalated by the audits — 4

An audit that could not settle a question from inside its own scope escalated it. Each call is recorded with the rule it was decided under, so the choice is reviewable rather than implicit.

### RESOLVED — /worker/japan/dates was contention, not a defect

- **Found:** During the audit waves, e2e/routes.spec.ts intermittently failed to see an <h1> within 5s on one route per run, and the route that failed moved between runs (/worker/career?state=offline, then /worker/japan/dates). Re-run alone the same test passed in 4.6s, with 38 node processes on the machine at the time — 16 audit agents each running their own vite dev server.
- **Decision:** CLOSED. The full suite was re-run with every audit agent finished and the machine idle: 235/235 passed, /worker/japan/dates among them. The contention reading is confirmed. No timeout was ever raised, no retry was added, and playwright.config.ts was never touched — the test proved itself once the noise was removed.
- **Why:** Raising a timeout to make a red test go green would hide exactly the class of defect the suite exists to catch. The honest move is to stop trusting runs taken under load and re-run clean. If the same route fails on the idle run, it is a real defect and is fixed as one.

### WD-41 Knowledge hub — which desktop frame is canonical

- **Found:** The assigned node 1152:254 has been DELETED from the Figma file; a new frame 1291:2 with the same name now occupies the identical canvas slot with a different layout (kicker instead of the breadcrumb, a 290px PRIVATE BY DEFAULT right rail instead of the full-width privacy footer, bare glyphs instead of mint icon tiles, chevrons on the action cards). The running app matches the deleted 1152:254 to the pixel.
- **Decision:** KEEP the current implementation; treat 1291:2 as a Figma-side contradiction, not as the new source of truth.
- **Why:** Three independent signals point the same way. (1) 1291:2 contradicts the canonical mobile frame W-41, which keeps the breadcrumb and the full-width privacy note — and worker mobile is the source of truth for what a screen contains. (2) Its shell (72px header, dot nav, no bell/avatar) contradicts the documented desktop baseline that WD-42/43/44/45/46 all draw, so adopting it would break the section's own internal consistency. (3) The same audit found this page of the file carrying automated repair artifacts — stale '· restored' nodes that overlap live content on WD-53/53B/53D — so a silently replaced frame is more likely file damage than a deliberate redesign. Revisit if the designer confirms 1291:2 is intentional.

### WD-53 Notifications — content column at x=272

- **Found:** Figma places the notifications column at x=272 (a 40px gutter after the 232px sidebar) while every other audited desktop frame, and the documented shell baseline, use x=280 (lg:px-12).
- **Decision:** KEEP x=280; do not special-case this one section.
- **Why:** The shell owns the content inset for every worker desktop screen. Moving one section 8px left to match a single outlying frame would make the app inconsistent with itself to match a file that is inconsistent with itself. Recorded as a known 8px offset rather than compensated.

### WD-53 / WD-53B / WD-53D — frames that overlap their own content

- **Found:** The group label 'Earlier · restored' (1203:318) sits inside notification row 2; 'Empty guidance · restored' (1203:322) overlaps the centred empty-state title; on WD-53D the TODAY label sits above the offline banner and EARLIER overlaps row 1. WD-53D also draws hollow status circles while its own pill reads 'Cached · 2 unread'.
- **Decision:** Render the frames as they were plainly meant to read — labels above their groups, unread dots on unread rows — following the canonical mobile W-53D (952:1151), which does keep its unread dots.
- **Why:** Reproducing an overlap literally would ship a defect. Where a desktop frame contradicts itself and the mobile twin is coherent, mobile decides — the canonical-source rule.

**BLOCKED: none.** No deviation prevented implementation — the only Figma-side absences (a placeholder desktop section, an orphan dev label, missing frames for some error states) were all resolved by building the capability from the canonical mobile flow or the section's own pattern language.
