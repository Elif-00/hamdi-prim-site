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
    // Force counter final values
    document.querySelectorAll('[data-target]').forEach(el => {
      const t = parseFloat(el.dataset.target);
      const sx = el.dataset.suffix || '';
      const dc = t % 1 !== 0;
      el.textContent = (dc ? t.toFixed(1) : t) + sx;
      el.dataset.done = '1';
    });
  });
  await new Promise(r => setTimeout(r, 1000));

  const snaps = [
    { y: 2400, name: 'engagements' },
    { y: 3800, name: 'reseaux' },
    { y: 5000, name: 'avis' },
  ];
  for (const s of snaps) {
    await page.evaluate(y => window.scrollTo(0, y), s.y);
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: `mid_${s.name}.png` });
  }
  await browser.close();
  console.log('Done');
})();
