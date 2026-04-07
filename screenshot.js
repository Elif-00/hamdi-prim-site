const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const filePath = 'file:///' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  // Hero screenshot
  await page.screenshot({ path: 'screenshot_hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

  // Scroll to produits
  await page.evaluate(() => window.scrollTo(0, 900));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshot_produits.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

  await browser.close();
  console.log('Screenshots done');
})();
