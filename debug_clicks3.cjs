const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  
  const btn = page.locator("text=Explorar biblioteca").first();
  const box = await btn.boundingBox();
  console.log("Button BoundingBox:", box);
  
  const vh = await page.evaluate(() => window.innerHeight);
  const vw = await page.evaluate(() => window.innerWidth);
  console.log("Viewport:", vw, "x", vh);
  
  await browser.close();
})();
