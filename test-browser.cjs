const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
        console.error('PAGE ERROR:', msg.text());
    }
  });

  page.on('pageerror', error => {
    console.error('PAGE ERROR EXCEPTION:', error.message);
  });

  page.on('requestfailed', request => {
    console.error(`REQUEST FAILED: ${request.url()} - ${request.failure().errorText}`);
  });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await browser.close();
})();
