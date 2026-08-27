# EMENDA — Figma → FE Parity Plan

> **Canonical-source rule (supersedes earlier inventory assumptions).**
> The **Worker MOBILE Figma** (page `290:2`, `W-xx`) is the source of truth for
> flow, screen/state coverage, journey order, action hierarchy and navigation
> intent. The **desktop Figma** (`712:2`, `WD-xx`) governs desktop presentation
> only. A capability present on mobile must exist on desktop too — adapted to
> the desktop design system, recorded as *"Desktop visual adapted from
> canonical mobile flow using desktop Foundations"*, never `BLOCKED`.
> Never scale between viewports; one shared router/store/i18n/session.
> A screen counts as covered only when it is reachable **by clicking**, not by
> typing a URL.
>
> This rule exists because a route-level inventory missed a real screen: the
> unified Sign in shipped without any Create Account entry point although
> Figma defines that flow. Inventory is therefore re-derived from Figma per
> section, never from the route list.
>
> **Parity matrix format** (screen/state level):
> `Section | Figma Node | Screen/State | FE Route | Mobile Flow | Mobile Visual | Desktop Flow | Desktop Visual | ID | EN | JA | Status`
> `COMPLETE` requires all columns to hold — not merely that a route renders.

Figma file: `IZZYiAlNAdYAAcX2z5AtOm` ("full-emenda"). Status values:
COMPLETE · PARTIAL · NOT IMPLEMENTED · BLOCKED (reason documented).

Conventions
- Desktop + mobile are one responsive route; mobile follows the W-/EM- mobile
  mocks (hub keeps bottom nav, `/area/sub` pages drop chrome, bottom sheets on
  mobile), never a shrunken desktop.
- **Global i18n (ID / EN / 日本語)**: all UI/system copy flows through
  `src/i18n/` — `defineSectionCopy`/`useSectionCopy` per section (TypeScript
  enforces all three languages per key = dev-time missing-translation
  detection; runtime fallback = EN), shared strings in `common.ts`, enum
  display values in `terms.ts`, date presentation via `format.ts`. Language
  persists in localStorage (`emenda-language`, swappable for a backend pref),
  switches without reload and never resets route/state/drafts/stores.
  User-generated content, proper nouns, EMENDA IDs and official Japanese
  terms are never auto-translated. Selectors: landing header, /auth/language
  (WD-02), manager locale settings (wave 2).
- i18n DoD: every route has ID+EN+JA copy · no hardcoded system text ·
  switch works without reload · persists after refresh · route/state stay put
  on switch · desktop and mobile share one translation source · fallback
  documented (EN) · missing translations fail `tsc`.
- Non-interactive Figma state variants map to `?state=<name>` URLs; interactive
  states use real UI + mock stores.
- Mock data lives beside each section (`<section>Mock.ts`) or in `src/data/`
  for cross-role stores, isolated from UI for later API swap.

> **Status columns in the tables below are the ORIGINAL PLAN (pre-implementation).**
> The authoritative, screen/state-level result now lives in
> [`parity-matrix.md`](./parity-matrix.md) — 716 screens/states, 0 PARTIAL,
> 0 NOT IMPLEMENTED — together with the deviation register at the end of that
> file. The tables here are kept for the Figma node map and route plan.

## Page 03/02 — Worker (desktop WD-xx `712:2` · mobile W-xx `290:2`)

| # | Figma Section | Nodes (desktop / mobile) | FE Route base | Initial status |
|---|---|---|---|---|
| 01 | Worker Auth & Account Access (WD-01..11) | 712:3 / 464:677 | `/auth/*` (splash, language, welcome, login, register, otp, create-pin, forgot-pin, reset-pin, session-expired, logout) | NOT IMPLEMENTED |
| 02 | EMENDA ID & Identity (WD-12..17) | 712:4 / 468:2 | `/onboarding/id/*` (ready, details, reference, review, verification, my-id, qr, share) | NOT IMPLEMENTED |
| 03 | Headless Home (WD-18 A–L) | 712:5 / 529:2 | `/worker` (+13 `?state=` variants) | PARTIAL (WD-18J built) |
| 04 | Personal Profile (WD-19..20) | 712:6 / 544:2 | `/worker/profile`, `/worker/profile/edit` (+avatar & country overlays) | NOT IMPLEMENTED (stub) |
| 05 | Career & CV (WD-21..31) | 712:7 / 547:2 | `/worker/career/*` (hub, upload, import-review, cv, experience, education, skills, qualifications, preferences, create, edit) | NOT IMPLEMENTED |
| 06 | Visa/Japan Prep (WD-32..36) | 712:8 / 626:2 | `/worker/japan/*` (hub, visa-plan, residence, readiness+tasks, registration, dates) | NOT IMPLEMENTED |
| 07 | Documents & Emergency (WD-37..40) | 1024:234 / 758:2 | `/worker/documents/*` (list, add, :id detail, emergency) | NOT IMPLEMENTED |
| 08 | Knowledge & Q&A (WD-41..46) | 1152:253 / 852:2 | `/worker/knowledge/*` (hub, search, article/:id, ask, questions, questions/:id) | NOT IMPLEMENTED |
| 09 | Help & Support (WD-47..48) | 1182:2 / 899:2 | `/worker/help`, `/worker/help/contact` (+sent) | NOT IMPLEMENTED |
| 10 | Connect Employer & Consent (WD-49..52) | 1182:597 / 917:2 | `/worker/employer/*` (connect, review, connection, history) | NOT IMPLEMENTED |
| 11 | Notifications (WD-53) | 1182:2767 / 952:830 | `/worker/notifications` (+mode/read/offline states) | NOT IMPLEMENTED |
| 12 | Reports (WD-54..56) | 1182:3425 / 972:66 | `/worker/reports/*` | PARTIAL (caregiver flow COMPLETE; remaining states: headless, loading, offline, submit-failed, unsaved, other templates) |
| 13 | Chat (WD-57..58) | 1182:6077 / 1034:130 | `/worker/chat`, `/worker/chat/:id` (+voice pipeline, translation review states) | NOT IMPLEMENTED (stub) |
| 14 | EMENDA Assistant (WD-59) | 1186:553 / loose 1084:496+ | `/worker/assistant` (+conversation, history, sources, voice states) | NOT IMPLEMENTED (stub) |
| 15 | Emenda Coin (WD-60) | 1186:1358 / 1151:253 | `/worker/coin/*` (overview, check-in, history, earn, use, rewards, redeem, rules) | NOT IMPLEMENTED |
| 16 | Logs & Records (WD-61) | 1187:253 / 1163:253 | `/worker/logs/*` (overview, work, health, stress-check, life + consent flows; Indonesian copy) | NOT IMPLEMENTED |

## Page 04/05 — Manager (mobile EM-xx `751:2` · desktop MD-xx `1192:927`)

| # | Figma Section | Nodes | FE Route base | Initial status |
|---|---|---|---|---|
| 01 | Entry & Recovery (EM-AUTH, MD-AUTH) | 751:3 / 1192:928 | `/manager/auth/*` | NOT IMPLEMENTED |
| 02 | Workspace & Core Ops (EM-02..05, MD-02..05) | 759:1276 / 1192:932 | `/manager/facility`, `/manager` (dashboard), `/manager/workers`, `/manager/workers/:id`, visa detail | PARTIAL (dashboard COMPLETE) |
| 03 | Navigation & Account (EM-MORE/18, MD-MORE/18) | 759:1280 / 1192:936 | `/manager/more`, `/manager/profile`, `/manager/settings` (+role, locale) | NOT IMPLEMENTED (stub) |
| 04 | Communication (EM-06..08) | 759:1284 / 1225:2 | `/manager/communication`, `/:id`, compose/review/sent/failed | NOT IMPLEMENTED (stub) |
| 05 | Follow-up & Alerts (EM-09/10/12, MD-09/12) | 759:1288 / 1192:944 | `/manager/follow-up/*`, `/manager/alerts` | NOT IMPLEMENTED (stub) |
| 06 | Reports (EM-11) | 759:1292 / placeholder | `/manager/reports/*` | PARTIAL (list+detail COMPLETE; generator/timeline states pending) — desktop mock BLOCKED (Figma placeholder), derived from mobile |
| 07 | Analytics & Continuity (EM-13, EM-R2) | 759:1296 / placeholder | `/manager/analytics`, `/manager/workers/:id/records/*` | NOT IMPLEMENTED |
| 08 | OJT & Human Rights DD (EM-14/15) | 759:1300 / placeholder | `/manager/knowledge-ojt/*`, `/manager/human-rights-dd/*` | NOT IMPLEMENTED |
| 09 | Audit & Resilience (EM-16/17, EM-STATE) | 759:1304 / placeholder | `/manager/audit-export/*` (+offline/reconnect states) | NOT IMPLEMENTED |
| 10 | Settings, Support & Session (EM-18C/19/20) | 759:1308 / placeholder | `/manager/settings` outcomes, `/manager/support/*`, logout | NOT IMPLEMENTED |
| 11 | Access / Empty Boundaries (EM-STATE-03, EM-R2-04/06) | 759:1312 / placeholder | boundary states under workers/records | NOT IMPLEMENTED |

Manager-desktop mocks exist only for sections 01–05 (+ MD-06..12 comm/follow-up);
sections 06–11 desktop are text-only placeholders in Figma → desktop derived
from mobile IA inside the MD shell (documented, not BLOCKED for FE).

## Page 05 — Unified Landing & Access (`1053:853`)

| Screen | Node | FE Route | Initial status |
|---|---|---|---|
| LP-01 Landing | 1053:855 | `/` | COMPLETE |
| LP-02 About / LP-03 Features / LP-04 How it works | 1147:3/18/33 | `/about`, `/features`, `/how-it-works` | NOT IMPLEMENTED |
| LP-05 Unified Sign in | 1060:43 | `/signin` | NOT IMPLEMENTED (stub) |
| LP-06/07/08 Post-auth routing | 1053:981/1012/1107:50 | `/welcome` (+`?account=` variants) | NOT IMPLEMENTED |

## Page 06 — Company Admin (`1182:5690`)

| Screen | Node | FE Route | Initial status |
|---|---|---|---|
| AD-01 Dashboard | 1182:5692 | `/admin` | NOT IMPLEMENTED |
| AD-SCOPE board | 1192:972 | (design governance doc — not a product screen) | BLOCKED (not a screen) |

## Pages 00/01 — Foundations & Shared Components

Documentation/library pages, not product screens. Tokens live in
`src/index.css`; components are implemented in-context per screen. Status:
COMPLETE (as code foundations), no routes.

---

## Auth re-audit (2026-08-26) — result of the reported Create Account gap

The user reported that the unified Sign in had no way to create an account.
A dedicated inventory agent re-read **every** auth node in Figma (148 screens
across mobile W-01..W-17, desktop WD-01..WD-17 and the whole Landing & Access
page) instead of trusting the route list. Findings:

1. **LP-05 genuinely has no sign-up affordance in Figma.** Node `1060:43` was
   enumerated child by child: brand, language switcher, divider, eyebrow,
   title, body, the "Routing info" panel (`1107:11`) and the login card
   (`1107:19`) whose children end at the helper `1107:31`. Grepping the whole
   Landing & Access page for *sign up / create account / register / get
   started* returned **zero** matches. So this was never "a Figma element we
   skipped".
2. **The real defect was navigational**: the entire worker auth funnel was
   orphaned from the public site. `/auth` had no inbound link; `/auth/welcome`
   — the one screen carrying **"Create new account"** (`421:25` mobile,
   `744:78` desktop) — was unreachable, and with it Register, the signup OTP
   branch, Create PIN and the whole W-12..W-17 onboarding funnel.

**Decision (per the canonical-mobile rule).** The capability exists on mobile,
so it must exist on the access surface too. A `Create new account` door was
added inside the LP-05 card with W-03's **verbatim** copy ("Create new
account" + "You can connect an employer later. Creating an account does not
require an employer.") re-drawn in LP-05's own design system (h52 / 484px /
r12 / `#d1ded6` hairline / `#056b54` label — the card's own metrics), placed
below the helper behind the page's own divider so the credential form stays
primary. Documented in `SignInCreateAccount.tsx` and `access.copy.ts`.

Also closed: back legs W-04/W-05 → W-03 (the mocks draw a forward-only graph
and leave the fork one-way), a real `useOffline()` hook so the offline dresses
follow the browser's actual connection instead of being URL-only, a dead
"Try again" control on the offline banner, and the worker sidebar's dead
Settings / Log out buttons (now `NavLink`s) plus the inert notification bell
and avatar in the worker top bar.

Covered by `e2e/auth-flow.spec.ts` (6 tests): the Create Account door,
Register → OTP → Create PIN → onboarding **by clicking only**, both fork back
paths, language persistence through the chain and across a reload, sidebar
Log out, and the same door at 390px.
