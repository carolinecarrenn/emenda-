import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const file = pathToFileURL(resolve(process.cwd(), 'index.html')).href;
const browser = await chromium.launch();

async function fresh(width = 1280) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  page.on('pageerror', e => console.log('  PAGEERROR:', e.message));
  await page.goto(`${file}#/home`);
  await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
  await page.waitForTimeout(150);
  return page;
}

const route = p => p.evaluate(() => location.hash);

// 1. click-only path to every pillar detail page, via the pillars index
console.log('CLICK PATH — nav > Product > Pillars & Modules > each pillar card');
let page = await fresh();
await page.locator('.nav-link[data-page="product"]').hover();
await page.waitForTimeout(250);
await page.locator('nav a[href="#/pillars"]').first().click();
await page.waitForTimeout(150);
console.log('  after nav click:', await route(page));

const slugs = await page.evaluate(() =>
  [...document.querySelectorAll('#app .pillar-card')].map(a => a.getAttribute('href')));
console.log('  pillar cards on index:', slugs.length);

let clickFails = 0;
for (let i = 0; i < slugs.length; i++) {
  await page.goto(`${file}#/pillars`);
  await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
  await page.waitForTimeout(90);
  await page.locator('#app .pillar-card').nth(i).click();
  await page.waitForTimeout(120);
  const h1 = await page.locator('#app h1').first().textContent();
  const ok = (await route(page)) === slugs[i];
  if (!ok) clickFails++;
  console.log(`  ${ok ? 'ok ' : 'FAIL'} ${slugs[i].padEnd(38)} ${h1.trim().slice(0, 40)}`);
}

// 2. cross-link between pillar pages (each detail page offers three siblings)
await page.goto(`${file}#/pillar/identity-access`);
await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
await page.waitForTimeout(120);
const siblings = await page.locator('#app .pillar-card').count();
await page.locator('#app .pillar-card').first().click();
await page.waitForTimeout(120);
console.log(`\nsibling links on a pillar page: ${siblings}, first click -> ${await route(page)}`);

// 3. industries reachable by click from the home grid
await page.goto(`${file}#/home`);
await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
await page.waitForTimeout(150);
await page.locator('#home-industries .pillar-card').first().click();
await page.waitForTimeout(120);
console.log('home industry card ->', await route(page));

// 4. demo form composes a mailto without navigating away
await page.goto(`${file}#/request-demo`);
await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
await page.waitForTimeout(120);
await page.fill('#demoForm input[name="name"]', 'Test User');
await page.fill('#demoForm input[name="org"]', 'Sakura Care KK');
await page.fill('#demoForm input[name="email"]', 'test@example.com');
await page.fill('#demoForm textarea[name="problem"]', 'Shift handover notes never reach the record.');
let mailto = null;
page.on('request', r => { if (r.url().startsWith('mailto:')) mailto = r.url(); });
await page.evaluate(() => {
  window.__nav = null;
  const d = Object.getOwnPropertyDescriptor(window.Location.prototype, 'href');
  // capture instead of navigating
  document.getElementById('demoForm').addEventListener('submit', () => {}, { capture: true });
});
await page.locator('#demoForm button[type="submit"]').click();
await page.waitForTimeout(250);
const stillOnPage = await page.evaluate(() => !!document.getElementById('demoForm'));
console.log('demo form submitted, form still present:', stillOnPage);

// 5. mobile viewport
console.log('\nMOBILE 390px');
const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
for (const r of ['home', 'pillars', 'pillar/consent-privacy', 'build-evidence', 'comparison', 'industry/caregiving', 'request-demo']) {
  await m.goto(`${file}#/${r}`);
  await m.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
  await m.waitForTimeout(120);
  const o = await m.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
    sw: document.documentElement.scrollWidth,
    len: document.getElementById('app').innerHTML.length
  }));
  console.log(`  ${o.overflow ? 'OVERFLOW' : '   ok   '} ${r.padEnd(24)} scrollWidth=${o.sw} len=${o.len}`);
}

// 6. mobile menu reaches the new sections
await m.goto(`${file}#/home`);
await m.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
await m.waitForTimeout(120);
await m.locator('#burger').click();
await m.waitForTimeout(120);
await m.locator('.mobile-menu a[href="#/build-evidence"]').click();
await m.waitForTimeout(150);
console.log('  mobile menu -> build evidence:', await m.evaluate(() => location.hash),
  '| menu closed:', await m.evaluate(() => !document.getElementById('mobileMenu').classList.contains('open')));

console.log(`\nclick failures: ${clickFails}`);
await browser.close();
