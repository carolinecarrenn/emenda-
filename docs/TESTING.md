# EMENDA frontend — testing guide

How to run this app and reach every screen in it.

> **There is no backend, and no real authentication.** Every screen renders
> from mock data in `src/data/**` and each section's own `*.mock.ts`. The login
> forms accept a prefilled value and navigate; they do not verify anyone. Treat
> every credential below as **display data**, not a secret — none of it grants
> access to anything.

---

## 1. Running it

```bash
npm install
npm run dev          # http://localhost:5173
```

Production build, which is what the test suite runs against:

```bash
npm run build
npm run preview      # http://localhost:4173
```

Checks:

```bash
npx tsc -b           # types
npx oxlint src e2e   # lint
npx playwright test  # 235 tests
```

Playwright starts its own preview server, so `npm run preview` need not be
running first.

---

## 2. Test identities

These are the fixed mock records the whole app shares. The same worker and the
same employer appear on the worker side and the manager side, so one action is
visible from both roles.

| Role | Value | Where it comes from |
|---|---|---|
| Worker | **Putri Rahayu** · Care Assistant · Day shift | `src/data/caregiverReport.ts` |
| Worker EMENDA ID | **EMD-26-8F4K2A** | same |
| Employer | **Sakura Care** · Sakura Care Facility | same |
| Manager | **Sato Kenji** · Facility Manager | same |
| Company Admin | **Nadia** · PT Sakura Nusantara | `src/pages/admin/admin.mock.ts` |
| "Today" in all mock data | **25 Aug 2026** | `src/data/caregiverReport.ts` |

### Codes and inputs

| What | Value | Used on |
|---|---|---|
| Login PIN | **482913** | `/auth/login` — prefilled; any other 6 digits shows *"Incorrect PIN…"* inline, staying on the page |
| OTP code | **482913** | `/auth/otp` — first three digits are prefilled, type `913` to complete |
| Phone | **+62 812 3456 7890** | `/auth/register`, shown masked as `+62 812••••7890` |
| Employer invite code | **ABCJ-7K2M** | `/worker/employer/connect` |
| Manager invite code | **KIT-CF-24A8** | `/manager/workers/invite` |

Nothing validates against a server. The PIN and OTP are checked against those
constants purely so the "wrong code" screens are reachable.

---

## 3. The main flow to try first

The caregiver daily-report loop is the product's core, and it crosses both
roles:

1. `/worker/reports` → **New Daily Report**
2. Fill Resident and Care notes → **Review report** → **Submit Daily Report**
3. The report appears under **Recent work history**, with its own detail page
4. `/manager/reports` → the same report is now in the manager's queue

Submitted reports persist in `localStorage` under `emenda-caregiver-reports`.
To start clean:

```js
localStorage.removeItem("emenda-caregiver-reports");
```

---

## 4. Languages

Three languages, switchable from the header on any public page and from
`/auth/language`:

**English · Bahasa Indonesia · 日本語**

The choice is stored in `localStorage` under `emenda-language` and survives a
reload. Switching language must never reset your route, your form draft, a
submitted report, or a consent choice — that is covered by
`e2e/i18n.spec.ts`.

Note that **record data is deliberately not translated**: names, EMENDA IDs,
employer names and dates stay as written. Enum-like values (report status,
resident condition, quick notes) do translate — see `src/i18n/terms.ts`.

---

## 5. Reaching states that need no server

Loading spinners, offline banners, server failures and OS permission prompts
cannot be produced by clicking in a mock-data app. They are reachable by a URL
parameter instead, which is also how the test suite exercises them:

```
/worker/reports/new?state=validation-error
/worker/coin?state=empty
/worker/employer?state=failed
/admin?state=loading
/manager/auth?state=invalid
```

The convention is read by `src/hooks/useScreenState.ts`. Every such state is
listed against its screen in [`parity-matrix.md`](./parity-matrix.md), so if
you need one that is not obvious, look the screen up there rather than
guessing.

Two other parameters exist: `?template=` on the report form (caregiver /
general / warehouse / food), and `?view=` on `/onboarding/id/my-id`.

---

## 6. What to look at, by role

| Role | Entry | Notable |
|---|---|---|
| Public site | `/` | marketing home, `/use-cases`, `/organizations`, `/help` |
| Public (Figma parity) | `/features` | the audited LP-03 page |
| Worker | `/worker` | reports, career & CV, Japan prep, documents, knowledge, chat, assistant, coin, logs |
| Manager | `/manager` | dashboard, reports, follow-up, communication, workers, analytics, audit export |
| Company Admin | `/admin` | employees, teams, reports, follow-up, daily reports, rewards, activity log, settings |
| Auth | `/auth` | splash → language → welcome → login / register → OTP → PIN |
| Onboarding | `/onboarding/id` | EMENDA ID identity flow |

Every route is enumerated in `e2e/routes.spec.ts`, which asserts that each one
renders its own `<h1>` without hitting the router error boundary.

---

## 7. Viewports

The app is built for two widths, from two different Figma sources:

- **1440 desktop** — sidebar shell, multi-column
- **390 mobile** — single column; hub screens keep the bottom nav, sub-pages drop it

They are one responsive route, never a scaled copy of each other. If a screen
looks wrong, check which width you are at before filing it.

---

## 8. What is verified, and what is not

At the current commit:

- `tsc`, `oxlint` and the production build are clean
- **235/235** Playwright tests pass on an idle machine
- all **133** static desktop routes render at 1440 with no JS error and no horizontal overflow

Figma parity is tracked per screen/state in [`parity-matrix.md`](./parity-matrix.md):

| Status | Count | Meaning |
|---|---|---|
| COMPLETE | 631 | compared frame-to-frame on both viewports, and it matches |
| ACCEPTED | 43 | a documented exception, each with its reason |
| PARTIAL | 128 | audited on one viewport, **not yet** on the other |
| FE-ONLY | 4 | user-confirmed intentional departures from LP-01 / LP-02 / LP-04 |

**PARTIAL does not mean broken.** It means no one has yet compared that exact
frame at that exact width, so the row carries no verdict either way. Most of
the remaining PARTIAL rows are on the Manager side.

The four FE-ONLY rows are `/`, `/about` and `/how-it-works`, which now serve
the marketing site by decision. Their audited Figma implementations are
retained in `src/pages/public/**` as evidence that those designs were built —
do not delete them to tidy the folder.

---

## 9. Reporting a problem

Useful in a report, in rough order of value:

1. **Route and width** — `/worker/coin/earn` at 390, not "the coin page"
2. **The Figma node**, if the matrix lists one for that screen
3. Whether it reproduces after `localStorage.clear()` and a reload
4. Language, if it only happens in one

If a screen's row reads PARTIAL for your viewport, it may simply not have been
audited there yet — worth checking the matrix before writing it up as a
regression.
