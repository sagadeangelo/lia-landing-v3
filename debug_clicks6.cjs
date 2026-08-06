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
      window.preventCalls.push(this.type + " prevented by " + new Error().stack);
      original.call(this);
    };
  });
  
  const btn = page.locator("text=Acceso Anticipado").first();
  await btn.click({ force: true });
  
  await page.waitForTimeout(1000);
  
  const preventLogs = await page.evaluate(() => window.preventCalls);
  console.log("Prevent default calls:", preventLogs);
  
  const currentUrl = await page.url();
  console.log("Current URL after click:", currentUrl);
  
  await browser.close();
})();
