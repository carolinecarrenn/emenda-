/* Show the exact character-level divergence for a single route. */
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const route = process.argv[2] || 'integration-data';
const browser = await chromium.launch();

const grab = async (file) => {
  const page = await browser.newPage();
  await page.goto(`${pathToFileURL(resolve(process.cwd(), file)).href}#/${route}`);
  await page.evaluate(() => window.dispatchEvent(new HashChangeEvent('hashchange')));
  await page.waitForTimeout(60);
  const html = await page.evaluate(() => document.getElementById('app').innerHTML);
  await page.close();
  return html;
};

const a = await grab('_build/index.pre-refactor.html');
const b = await grab('index.html');
await browser.close();

let i = 0;
while (i < a.length && i < b.length && a[i] === b[i]) i++;
let j = 0;
while (j < a.length - i && j < b.length - i && a[a.length - 1 - j] === b[b.length - 1 - j]) j++;

const show = (s) => JSON.stringify(s);
console.log(`route: ${route}   baseline ${a.length}   candidate ${b.length}`);
console.log(`first divergence at char ${i}`);
console.log(`context   : ${show(a.slice(Math.max(0, i - 60), i))}`);
console.log(`baseline  : ${show(a.slice(i, a.length - j))}`);
console.log(`candidate : ${show(b.slice(i, b.length - j))}`);
console.log(`after     : ${show(a.slice(a.length - j, a.length - j + 60))}`);
