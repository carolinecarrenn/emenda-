/* Prove the refactor changed structure, not output.
   Renders every route in every language from the pre-refactor snapshot and from the
   freshly built file, then compares the resulting markup byte for byte. */
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';

const BASELINE = process.argv[2] || '_build/index.pre-refactor.html';
const CANDIDATE = process.argv[3] || 'index.html';
for (const f of [BASELINE, CANDIDATE]) {
  if (!existsSync(f)) { console.error(`missing: ${f}`); process.exit(2); }
}

const ROUTES = [
  'home', 'product', 'pillars', 'feature-catalog', 'follow-up-lifecycle', 'modules',
  'pillar/identity-access', 'pillar/organization-connection', 'pillar/communication-translation',
  'pillar/work-records', 'pillar/measurement-analytics', 'pillar/consent-privacy',
  'pillar/notifications-administration', 'pillar/health-life-data', 'pillar/value-external-layer',
  'solutions', 'for-workers', 'for-managers', 'for-organizations',
  'industries', 'industry/caregiving', 'industry/construction', 'industry/manufacturing-food',
  'industry/logistics',
  'platform', 'emenda-assistant', 'architecture', 'integration-data', 'security-privacy', 'deployment',
  'resources', 'build-evidence', 'roadmap', 'implementation', 'faq',
  'company', 'business-model', 'market-positioning', 'comparison', 'request-demo',
];
const LANGS = ['en', 'id', 'ja'];

const browser = await chromium.launch();

async function capture(file) {
  const url = pathToFileURL(resolve(process.cwd(), file)).href;
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

  const out = new Map();
  for (const lang of LANGS) {
    for (const route of ROUTES) {
      await page.goto(`${url}#/${route}`);
      await page.evaluate((l) => {
        setLanguage(l);
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }, lang);
      await page.waitForTimeout(40);
      out.set(`${lang} ${route}`, await page.evaluate(() => {
        /* The scroll-reveal observer adds .in as elements enter the viewport, which
           makes innerHTML timing-dependent. Clear it so the comparison sees markup only. */
        document.querySelectorAll('.reveal.in').forEach((e) => e.classList.remove('in'));
        return {
        /* line endings are formatting, not content: the baseline file is CRLF
           and the rebuilt one is LF, so compare on normalised newlines. */
        html: document.getElementById('app').innerHTML.split('\r\n').join('\n'),
        nav: [...document.querySelectorAll('.nav-link.active')].map((a) => a.dataset.page).join(','),
        };
      }));
    }
  }
  await page.close();
  return { out, errors };
}

const a = await capture(BASELINE);
const b = await capture(CANDIDATE);
await browser.close();

let same = 0;
const diffs = [];
for (const [key, av] of a.out) {
  const bv = b.out.get(key);
  if (!bv) { diffs.push([key, 'missing in candidate']); continue; }
  if (av.html === bv.html && av.nav === bv.nav) { same++; continue; }
  const why = av.html === bv.html ? `nav ${av.nav || '-'} -> ${bv.nav || '-'}`
    : `markup ${av.html.length} -> ${bv.html.length} chars`;
  diffs.push([key, why]);
}

console.log(`compared ${a.out.size} route/language renders`);
console.log(`identical: ${same}`);
console.log(`different: ${diffs.length}`);
for (const [k, why] of diffs.slice(0, 40)) console.log(`  ${k.padEnd(44)} ${why}`);
if (a.errors.length) console.log(`\nbaseline JS errors: ${a.errors.length}\n  ${a.errors.slice(0, 5).join('\n  ')}`);
if (b.errors.length) console.log(`\ncandidate JS errors: ${b.errors.length}\n  ${b.errors.slice(0, 5).join('\n  ')}`);
else console.log('\ncandidate: no JS errors');

process.exit(diffs.length === 0 && b.errors.length === 0 ? 0 : 1);
