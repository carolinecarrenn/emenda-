import { chromium } from "@playwright/test";

import { readFileSync } from "node:fs";

const out = process.argv[2];
const targets = JSON.parse(readFileSync(process.argv[3], "utf8"));
const browser = await chromium.launch();

for (const t of targets) {
  const page = await browser.newPage({
    viewport: { width: t.w ?? 1440, height: t.h ?? 900 },
  });
  await page.goto(`http://localhost:4173${t.url}`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${out}/${t.name}.png`,
    fullPage: t.full ?? false,
  });
  await page.close();
}

await browser.close();
console.log("done");
