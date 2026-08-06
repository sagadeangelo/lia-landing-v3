const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  
  const btn = page.locator("text=Cómo funciona").first();
  const box = await btn.boundingBox();
  console.log("Navbar link BoundingBox:", box);
  
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  
  const debugInfo = await page.evaluate(({x, y}) => {
    const els = document.elementsFromPoint(x, y);
    return els.map(el => {
      const style = window.getComputedStyle(el);
      return el.tagName + (el.id ? "#" + el.id : "") + (el.className && typeof el.className==="string" ? "." + el.className.split(" ").join(".") : "") + " | pointer-events: " + style.pointerEvents;
    });
  }, {x, y});
  
  console.log("Elements at point:", debugInfo);
  
  await browser.close();
})();
