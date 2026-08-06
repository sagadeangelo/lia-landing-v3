const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  
  const initialScroll = await page.evaluate(() => window.scrollY);
  console.log("Initial scroll:", initialScroll);
  
  await page.evaluate(() => {
    window.LIA_OS.get("scroll").lenis.scrollTo(500, { immediate: true });
  });
  
  await page.waitForTimeout(500);
  
  const finalScroll = await page.evaluate(() => window.scrollY);
  console.log("Final scroll:", finalScroll);
  
  await browser.close();
})();
