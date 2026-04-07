const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const filePath = 'file:///' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    document.querySelectorAll('.rv').forEach(el => el.classList.add('vis'));
  });
  await new Promise(r => setTimeout(r, 800));

  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'hero.png' });

  await page.evaluate(() => window.scrollTo(0, 7500));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'footer.png' });

  await browser.close();
  console.log('Done');
})();
