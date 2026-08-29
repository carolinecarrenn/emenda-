import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const file = pathToFileURL(resolve(process.cwd(), 'index.html')).href;

const ROUTES = [
  'home','product','pillars','feature-catalog','follow-up-lifecycle','modules',
  'pillar/identity-access','pillar/organization-connection','pillar/communication-translation',
  'pillar/work-records','pillar/measurement-analytics','pillar/consent-privacy',
  'pillar/notifications-administration','pillar/health-life-data','pillar/value-external-layer',
  'solutions','for-workers','for-managers','for-organizations',
  'industries','industry/caregiving','industry/construction','industry/manufacturing-food','industry/logistics',
  'platform','emenda-assistant','architecture','integration-data','security-privacy','deployment',
  'resources','build-evidence','roadmap','implementation','faq',
  'company','business-model','market-positioning','comparison',
  'dev','dev/documents','dev/requirements','dev/frontend','dev/parity','dev/testing','dev/portal',
  'dev/doc/feature-catalog','dev/doc/mvp-requirements','dev/doc/ai-agent',
  'dev/doc/business','dev/doc/competition','dev/doc/data-platform'
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const errors = [];
page.on('pageerror', e => errors.push(['pageerror', page.url(), e.message]));
page.on('console', m => { if (m.type() === 'error') errors.push(['console', page.url(), m.text()]); });

let fails = 0;
for (const r of ROUTES) {
  await page.goto(`${file}#/${r}`);
  await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
  await page.waitForTimeout(90);
  const info = await page.evaluate(() => {
    const app = document.getElementById('app');
    const h = app.querySelector('h1,h2');
    return {
      len: app.innerHTML.length,
      heading: h ? h.textContent.trim().slice(0, 62) : '(none)',
      failed: app.innerHTML.includes('Page could not be rendered'),
      active: [...document.querySelectorAll('.nav-link.active')].map(a => a.dataset.page).join(',') || '-'
    };
  });
  const bad = info.failed || info.len < 800;
  if (bad) fails++;
  console.log(`${bad ? 'FAIL' : ' ok '} ${r.padEnd(36)} ${String(info.len).padStart(7)}  nav:${info.active.padEnd(11)} ${info.heading}`);
}

// interaction checks on home
await page.goto(`${file}#/home`);
await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
await page.waitForTimeout(150);

const tabsBefore = await page.locator('.tabpane.on').getAttribute('data-tab');
await page.locator('.tabbtn[data-tab="chat"]').click();
const tabsAfter = await page.locator('.tabpane.on').getAttribute('data-tab');
console.log(`\ntabs: ${tabsBefore} -> ${tabsAfter} ${tabsAfter === 'chat' ? 'OK' : 'FAIL'}`);

const accOpenBefore = await page.locator('.acc-item.open').count();
await page.locator('.acc-item').nth(3).locator('.acc-q').click();
const accOpenAfter = await page.locator('.acc-item.open').count();
console.log(`accordion: ${accOpenBefore} -> ${accOpenAfter} open ${accOpenAfter === 2 ? 'OK' : 'FAIL'}`);

// language switch survives on a v16 page
await page.goto(`${file}#/build-evidence`);
await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
await page.waitForTimeout(120);
await page.locator('.lang-btn[data-lang="id"]').first().click();
await page.waitForTimeout(150);
const idText = await page.evaluate(() => document.getElementById('app').textContent.includes('Bukti') || document.getElementById('app').textContent.includes('repository'));
const stillThere = await page.evaluate(() => document.getElementById('app').innerHTML.length);
console.log(`lang switch on build-evidence: len=${stillThere} content=${idText ? 'OK' : 'CHECK'}`);

// Click-reachability. A screen counts as covered only when it can be reached by
// clicking, so collect links from the chrome AND from every rendered page body —
// a page linked only from another page's content is still reachable.
await page.goto(`${file}#/home`);
await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
await page.waitForTimeout(120);
const chromeHrefs = await page.evaluate(() =>
  [...document.querySelectorAll('nav a[href^="#/"], .mobile-menu a[href^="#/"], footer a[href^="#/"]')]
    .map(a => a.getAttribute('href').slice(2))
);

const bodyHrefs = new Set();
for (const r of ROUTES) {
  await page.goto(`${file}#/${r}`);
  await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
  await page.waitForTimeout(40);
  for (const h of await page.evaluate(() =>
    [...document.querySelectorAll('#app a[href^="#/"]')].map(a => a.getAttribute('href').slice(2))
  )) bodyHrefs.add(h);
}

const notInChrome = ROUTES.filter(r => !chromeHrefs.includes(r));
const unreachable = notInChrome.filter(r => !bodyHrefs.has(r));
console.log(`\nnot in nav/footer/mobile (reachable from a page body): ${notInChrome.filter(r => bodyHrefs.has(r)).join(', ') || 'none'}`);
console.log(`unreachable by clicking anywhere: ${unreachable.length ? unreachable.join(', ') : 'none'}`);

console.log(`\nroutes failing: ${fails}/${ROUTES.length}`);
if (errors.length) {
  console.log('\nJS errors:');
  for (const e of errors.slice(0, 15)) console.log(' ', e[0], '|', e[2]);
} else {
  console.log('\nno JS errors');
}
await browser.close();
