const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  
  await page.evaluate(() => {
    window.preventCalls = [];
    const original = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function() {
      window.preventCalls.push(this.type + " prevented by " + new Error().stack.split("\n")[2].trim());
      original.call(this);
    };
  });
  
  const btn = page.locator("button[type=submit]").first();
  await btn.scrollIntoViewIfNeeded();
  await btn.click({ force: true });
  
  await page.waitForTimeout(1000);
  
  const preventLogs = await page.evaluate(() => window.preventCalls);
  console.log("Prevent default calls on form button:", preventLogs);
  
  await browser.close();
})();
