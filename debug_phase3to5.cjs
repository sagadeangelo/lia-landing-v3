/**
 * FASE 3 - Validación del HTML generado por _mountLayout()
 * FASE 4 - Validación global de pointer-events vía computedStyle
 * FASE 5 - Validación de listeners activos
 */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Capturar errores de consola
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(3500);

  // =========================================================
  // FASE 3: Validar HTML del DOM real
  // =========================================================
  console.log('\n=== FASE 3: Estructura HTML del DOM renderizado ===');

  const domAudit = await page.evaluate(() => {
    const appLayer = document.getElementById('app-layer');
    const main = document.getElementById('lia-main');
    const nav = document.getElementById('lia-nav');

    // Chequear nodos directos de #app-layer
    const appChildren = Array.from(appLayer?.children || []).map(el => ({
      tag: el.tagName,
      id: el.id,
      class: el.className
    }));

    // Chequear si hay etiquetas abiertas / nodos de texto sueltos
    const mainChildTags = Array.from(main?.children || []).map(el => ({
      tag: el.tagName,
      id: el.id,
      class: el.className.slice(0, 60)
    }));

    // elementFromPoint en el centro
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const topEl = document.elementFromPoint(cx, cy);
    const topPath = [];
    let cursor = topEl;
    while (cursor && cursor !== document.documentElement) {
      topPath.push({ tag: cursor.tagName, id: cursor.id, class: (cursor.className || '').slice(0, 60) });
      cursor = cursor.parentElement;
    }

    // ¿Existen los botones importantes en el DOM?
    const buttons = {
      heroCtaPrimary: !!document.querySelector('.lia-hero__actions a.lia-btn--primary'),
      heroCtaSecondary: !!document.querySelector('.lia-hero__actions a.lia-btn--secondary'),
      navBrand: !!document.querySelector('a.lia-nav__brand'),
      navLinks: document.querySelectorAll('a.lia-nav__link').length,
      earlyAccessBtn: !!document.querySelector('#early-access button[type="submit"]'),
      earlyAccessForm: !!document.querySelector('#early-access form'),
    };

    return {
      appLayerExists: !!appLayer,
      mainExists: !!main,
      navExists: !!nav,
      appChildren,
      mainChildCount: main?.children.length,
      mainChildTags,
      topElementPath: topPath,
      buttons,
    };
  });

  console.log('DOM Audit:', JSON.stringify(domAudit, null, 2));

  // =========================================================
  // FASE 4: Verificar pointer-events en elementos críticos
  // =========================================================
  console.log('\n=== FASE 4: Computed pointer-events en elementos críticos ===');

  const pointerAudit = await page.evaluate(() => {
    const targets = [
      { sel: 'html', label: 'html' },
      { sel: 'body', label: 'body' },
      { sel: '#app-layer', label: '#app-layer' },
      { sel: '#lia-main', label: '#lia-main' },
      { sel: '.lia-hero', label: '.lia-hero' },
      { sel: '.lia-hero__actions', label: '.lia-hero__actions' },
      { sel: '.lia-hero__actions a.lia-btn--primary', label: 'Hero CTA Primary' },
      { sel: 'a.lia-nav__brand', label: 'Nav Brand' },
      { sel: 'a.lia-nav__link', label: 'Nav Link' },
      { sel: '#early-access button[type="submit"]', label: 'EarlyAccess Submit' },
      { sel: '#early-access form', label: 'EarlyAccess Form' },
    ];

    return targets.map(t => {
      const el = document.querySelector(t.sel);
      if (!el) return { label: t.label, exists: false };
      const s = window.getComputedStyle(el);
      return {
        label: t.label,
        exists: true,
        pointerEvents: s.pointerEvents,
        zIndex: s.zIndex,
        position: s.position,
        overflow: s.overflow,
        visibility: s.visibility,
        opacity: s.opacity,
      };
    });
  });

  console.log('Pointer Audit:', JSON.stringify(pointerAudit, null, 2));

  // =========================================================
  // FASE 5: Verificar que los listeners existen realmente
  // =========================================================
  console.log('\n=== FASE 5: Validación de listeners y eventos ===');

  // Inyectar un listener de prueba y verificar si los clicks llegan a document
  const clickEventTest = await page.evaluate(() => {
    const results = {
      documentClickFired: false,
      bodyClickFired: false,
      heroCtaClickFired: false,
    };

    // Listener global en document
    const docHandler = (e) => {
      results.documentClickFired = true;
      results.clickTarget = { tag: e.target.tagName, id: e.target.id, class: (e.target.className || '').slice(0, 60) };
    };
    document.addEventListener('click', docHandler, { once: true, capture: true });

    // Disparar click programático en el Hero CTA
    const heroBtn = document.querySelector('.lia-hero__actions a.lia-btn--primary');
    if (heroBtn) {
      heroBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    }

    return results;
  });

  console.log('Click Event Test:', JSON.stringify(clickEventTest, null, 2));

  // Verificar si AnchorSmooth capturó el click (se llama preventDefault)
  const anchorTest = await page.evaluate(() => {
    let defaultPrevented = false;
    let propagationStopped = false;
    let anchorFound = false;

    const probeHandler = (e) => {
      const a = e.target.closest('a[href]');
      if (a) {
        anchorFound = true;
        defaultPrevented = e.defaultPrevented;
      }
    };

    // Escuchar DESPUÉS de AnchorSmooth (que usa capture: false)
    document.addEventListener('click', probeHandler);

    const navLink = document.querySelector('a.lia-nav__link');
    if (navLink) {
      navLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    }

    document.removeEventListener('click', probeHandler);

    return { anchorFound, defaultPrevented };
  });

  console.log('AnchorSmooth Test:', JSON.stringify(anchorTest, null, 2));

  // =========================================================
  // FASE 5b: Verificar si AnchorSmooth tiene el destino en el DOM
  // =========================================================
  const anchorTargetTest = await page.evaluate(() => {
    const navLinks = Array.from(document.querySelectorAll('a.lia-nav__link'));
    return navLinks.map(a => {
      const href = a.getAttribute('href') || '';
      const target = href.startsWith('#') ? href.slice(1) : null;
      const targetEl = target ? document.getElementById(target) : null;
      return {
        href,
        target,
        targetExists: !!targetEl,
        targetTag: targetEl?.tagName
      };
    });
  });

  console.log('Anchor Target Test:', JSON.stringify(anchorTargetTest, null, 2));

  // =========================================================
  // FASE 5c: Simular click real en Hero CTA con detección de navegación
  // =========================================================
  console.log('\n=== FASE 5c: Click real en Hero CTA con Playwright ===');
  
  try {
    // El Hero CTA está en viewport solo si no se ha scrolleado
    const heroBtn = page.locator('.lia-hero__actions a.lia-btn--primary').first();
    const box = await heroBtn.boundingBox();
    console.log('Hero CTA bounding box:', JSON.stringify(box));
    
    // Verificar si está dentro del viewport visible
    const vpHeight = page.viewportSize()?.height || 600;
    const inViewport = box ? (box.y >= 0 && box.y < vpHeight) : false;
    console.log('Hero CTA in viewport:', inViewport, '| vpHeight:', vpHeight);
    
    if (inViewport && box) {
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      console.log('Mouse click dispatched on Hero CTA');
    }
  } catch (e) {
    console.log('Hero CTA click error:', e.message);
  }

  // =========================================================
  // Console Errors
  // =========================================================
  console.log('\n=== Console Errors ===');
  console.log(consoleErrors);

  await browser.close();
})();
