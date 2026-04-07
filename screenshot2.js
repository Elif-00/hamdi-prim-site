const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const filePath = 'file:///' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  const sections = [
    { scroll: 1100, name: 'saison' },
    { scroll: 2200, name: 'engagements' },
    { scroll: 3600, name: 'reseaux' },
    { scroll: 5200, name: 'faq' },
  ];

  for (const s of sections) {
    await page.evaluate(y => window.scrollTo(0, y), s.scroll);
    await new Promise(r => setTimeout(r, 700));
    await page.screenshot({ path: `screenshot_${s.name}.png`, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  }

  await browser.close();
  console.log('Done');
})();
