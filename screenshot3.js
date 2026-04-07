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
  await new Promise(r => setTimeout(r, 1000));

  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Page height:', pageHeight);

  // Screenshot sans clip = capture le viewport actuel
  const snapPoints = [700, 1800, 3000, 4200, 5400, 6600, 7800];
  for (let i = 0; i < snapPoints.length; i++) {
    const y = snapPoints[i];
    if (y >= pageHeight) break;
    await page.evaluate(y => window.scrollTo(0, y), y);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: `snap_${i}.png` }); // pas de clip
  }

  await browser.close();
  console.log('Done');
})();
