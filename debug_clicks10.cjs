const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  
  const btn = page.locator("text=Acceso Anticipado").first();
  await btn.click({ force: true });
  
  await page.waitForTimeout(2000);
  
  const finalScroll = await page.evaluate(() => window.scrollY);
  console.log("Final scroll after clicking Acceso Anticipado:", finalScroll);
  
  await browser.close();
})();
