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
    document.querySelectorAll('[data-target]').forEach(el => {
      const t = parseFloat(el.dataset.target);
      const sx = el.dataset.suffix || '';
      el.textContent = (t % 1 !== 0 ? t.toFixed(1) : t) + sx;
      el.dataset.done = '1';
    });
  });
  await new Promise(r => setTimeout(r, 1000));

  const snaps = [0, 700, 1400, 2100, 2800, 3500, 4200, 4900, 5600, 6300, 7000, 7700];
  for (let i = 0; i < snaps.length; i++) {
    await page.evaluate(y => window.scrollTo(0, y), snaps[i]);
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `final_${i}.png` });
  }
  await browser.close();
  console.log('Done');
})();
