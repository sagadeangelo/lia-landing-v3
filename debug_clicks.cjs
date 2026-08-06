const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:5173/");
  await page.waitForLoadState("networkidle");
  
  // Find "Explorar biblioteca" button
  const btn = page.locator("text=Explorar biblioteca").first();
  const box = await btn.boundingBox();
  if (!box) {
    console.log("Button not found");
    await browser.close();
    return;
  }
  
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  
  const topElement = await page.evaluate(({x, y}) => {
    const el = document.elementFromPoint(x, y);
    if (!el) return "None";
    
    let path = el.tagName;
    if (el.id) path += "#" + el.id;
    if (el.className && typeof el.className === "string") path += "." + el.className.split(" ").join(".");
    
    const style = window.getComputedStyle(el);
    return {
      path,
      pointerEvents: style.pointerEvents,
      zIndex: style.zIndex
    };
  }, {x, y});
  
  console.log("Top element at button coordinates:", topElement);
  
  await browser.close();
})();
