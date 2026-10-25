// Render /capability-statement/ from the local preview to public/<pdf>. Run after `astro build` + `astro preview --port 4322`, then rebuild.
import puppeteer from '/Users/blakehutchison/Projects/tideloc-crm/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import { existsSync } from 'node:fs';
const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium'].find(existsSync);
const url = process.argv[2]; const out = process.argv[3];
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0' });
await page.evaluateHandle('document.fonts.ready');
await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
console.log('pdf', out);
