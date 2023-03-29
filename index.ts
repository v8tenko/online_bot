import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
	executablePath: '/usr/bin/chromium-browser',
	args: ['--no-sandbox']
});
const page = await browser.newPage();

await page.goto('https://web.telegram.org/k');

await page.screenshot();

await browser.close();
