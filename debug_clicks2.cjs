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
  
  const debugInfo = await page.evaluate(({x, y}) => {
    const els = document.elementsFromPoint(x, y);
    const bodyStyles = window.getComputedStyle(document.body);
    const htmlStyles = window.getComputedStyle(document.documentElement);
    const appLayer = document.getElementById("app-layer");
    const appLayerStyles = appLayer ? window.getComputedStyle(appLayer) : null;
    
    return {
      elementsAtPoint: els.map(el => {
        const style = window.getComputedStyle(el);
        return el.tagName + (el.id ? "#" + el.id : "") + " | pointer-events: " + style.pointerEvents;
      }),
      bodyPointerEvents: bodyStyles.pointerEvents,
      htmlPointerEvents: htmlStyles.pointerEvents,
      appLayerPointerEvents: appLayerStyles ? appLayerStyles.pointerEvents : "N/A"
    };
  }, {x, y});
  
  console.log("Debug Info:", debugInfo);
  
  await browser.close();
})();
