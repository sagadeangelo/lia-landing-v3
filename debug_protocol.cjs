const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173/');
  
  // Wait for OS to boot
  await page.waitForTimeout(3500); 

  console.log("=== FASE 1: Verificación del Overlay ===");
  
  const overlayData = await page.evaluate(() => {
    const el = document.getElementById('lia-cinematic-intro');
    if (!el) return { exists: false };
    
    const styles = window.getComputedStyle(el);
    const centerEl = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    
    return {
      exists: true,
      styles: {
        display: styles.display,
        visibility: styles.visibility,
        opacity: styles.opacity,
        pointerEvents: styles.pointerEvents,
        zIndex: styles.zIndex,
        position: styles.position
      },
      centerElement: centerEl ? {
        tagName: centerEl.tagName,
        id: centerEl.id,
        className: centerEl.className
      } : null
    };
  });
  
  console.log("Overlay Data:", JSON.stringify(overlayData, null, 2));

  console.log("\n=== FASE 2: Prueba de Eliminación ===");
  
  // Pruebas ANTES de remover
  let beforeClicks = [];
  
  try {
    const heroBtn = await page.$('.lia-section--hero a.lia-btn--primary');
    if (heroBtn) {
      await heroBtn.click({ timeout: 1000 });
      beforeClicks.push("Hero CTA (antes): Clicked");
    } else {
      beforeClicks.push("Hero CTA (antes): Not found");
    }
  } catch (e) {
    beforeClicks.push("Hero CTA (antes): Error " + e.message);
  }

  // Ahora remover
  await page.evaluate(() => {
    const el = document.getElementById('lia-cinematic-intro');
    if (el) el.remove();
  });
  console.log("Overlay eliminado.");
  await page.waitForTimeout(500); // Darle tiempo a la vista

  let afterClicks = [];
  // Prueba botones de nuevo
  try {
    const heroBtn = await page.$('.lia-section--hero a.lia-btn--primary');
    if (heroBtn) {
      await heroBtn.click({ timeout: 1000, force: false });
      afterClicks.push("Hero CTA (después): Clicked");
    }
  } catch (e) {
    afterClicks.push("Hero CTA (después): Error " + e.message);
  }
  
  try {
    const navBtn = await page.$('a.lia-nav__link[href="#lia-train"]');
    if (navBtn) {
      await navBtn.click({ timeout: 1000, force: false });
      afterClicks.push("Navbar CTA (después): Clicked");
    }
  } catch (e) {
    afterClicks.push("Navbar CTA (después): Error " + e.message);
  }
  
  try {
    const earlyAccessSubmit = await page.$('#early-access button[type="submit"]');
    if (earlyAccessSubmit) {
      // Capturamos el alert
      let alertFired = false;
      page.once('dialog', async dialog => {
        alertFired = true;
        await dialog.dismiss();
      });
      await earlyAccessSubmit.click({ timeout: 1000, force: false });
      afterClicks.push("EarlyAccess (después): Clicked, Alert fired: " + alertFired);
    }
  } catch (e) {
    afterClicks.push("EarlyAccess (después): Error " + e.message);
  }

  console.log("Before Clicks:", beforeClicks);
  console.log("After Clicks:", afterClicks);

  await browser.close();
})();
