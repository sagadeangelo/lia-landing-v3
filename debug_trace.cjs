/**
 * FASES 1-8: INSTRUMENTACIÓN COMPLETA DE EJECUCIÓN
 *
 * Objetivo: Trazar el call stack REAL para cada tipo de botón.
 * - No hipótesis. Solo logs de ejecución.
 */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  // =========================================================
  // FASE 7 - Captura de errores globales ANTES de cargar
  // =========================================================
  const runtimeErrors = [];
  const unhandledRejections = [];
  const allLogs = [];

  page.on('console', msg => {
    allLogs.push({ type: msg.type(), text: msg.text() });
  });
  page.on('pageerror', err => {
    runtimeErrors.push({ message: err.message, stack: err.stack });
  });

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(3500);

  // =========================================================
  // FASE 2 - Instrumentación en tiempo de ejecución
  // Wrappear los handlers existentes con logs
  // =========================================================
  await page.evaluate(() => {
    window.__DEBUG_TRACE__ = [];
    const trace = (msg) => {
      window.__DEBUG_TRACE__.push(msg);
      console.log('[TRACE]', msg);
    };

    // --- Instrumentar AnchorSmooth ---
    const anchorModule = window.LIA_OS?.get('anchor');
    if (anchorModule && anchorModule._onClick) {
      const originalOnClick = anchorModule._onClick.bind(anchorModule);
      anchorModule._onClick = function(e) {
        trace('[ANCHOR_SMOOTH] _onClick triggered');
        trace(`[ANCHOR_SMOOTH] e.target = ${e.target.tagName}#${e.target.id}.${e.target.className}`);

        const a = e.target.closest('a[href]');
        trace(`[ANCHOR_SMOOTH] closest a[href] = ${a ? a.getAttribute('href') : 'null'}`);

        if (!a) { trace('[ANCHOR_SMOOTH] RETURN: no anchor found'); return; }
        if (a.hasAttribute('data-lia-no-smooth')) { trace('[ANCHOR_SMOOTH] RETURN: data-lia-no-smooth'); return; }

        const href = a.getAttribute('href') || '';
        trace(`[ANCHOR_SMOOTH] href = "${href}"`);

        if (!href.startsWith('#')) { trace('[ANCHOR_SMOOTH] RETURN: not a hash link'); return; }
        if (href === '#') { trace('[ANCHOR_SMOOTH] RETURN: href is bare #'); return; }

        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
          trace('[ANCHOR_SMOOTH] RETURN: modifier key pressed'); return;
        }

        const target = href.slice(1);
        trace(`[ANCHOR_SMOOTH] target id = "${target}"`);

        if (target !== 'top') {
          const el = document.getElementById(target);
          trace(`[ANCHOR_SMOOTH] getElementById("${target}") = ${el ? el.tagName + '#' + el.id : 'null'}`);
          if (!el) { trace('[ANCHOR_SMOOTH] RETURN: target element not found — leaving to browser'); return; }
        }

        trace('[ANCHOR_SMOOTH] calling e.preventDefault()');
        e.preventDefault();

        const lenis = this.scroll?.lenis;
        trace(`[ANCHOR_SMOOTH] lenis available = ${!!lenis}`);
        if (lenis) {
          trace(`[ANCHOR_SMOOTH] calling lenis.scrollTo(top)`);
        }

        return originalOnClick.call(this, e);
      };

      // Re-registrar el listener envuelto
      document.removeEventListener('click', anchorModule._onClick);
      document.addEventListener('click', anchorModule._onClick, { passive: false });
      trace('[SETUP] AnchorSmooth instrumented');
    } else {
      trace('[SETUP] WARNING: AnchorSmooth NOT found in LIA_OS modules');
    }

    // --- Instrumentar el formulario de EarlyAccess ---
    const form = document.querySelector('#early-access form');
    if (form) {
      trace('[SETUP] EarlyAccess form found, adding submit listener');
      form.addEventListener('submit', (e) => {
        trace('[EARLY_ACCESS_FORM] submit event fired');
        trace(`[EARLY_ACCESS_FORM] defaultPrevented before handler: ${e.defaultPrevented}`);
      }, true); // capture: true para ejecutar ANTES del inline handler
    } else {
      trace('[SETUP] WARNING: EarlyAccess form NOT found');
    }

    // --- Captura global de TODOS los clicks ---
    document.addEventListener('click', (e) => {
      const el = e.target;
      trace(`[GLOBAL_CLICK] target: ${el.tagName}#${el.id}.${(el.className || '').slice(0, 50)}`);
      trace(`[GLOBAL_CLICK] composedPath[0]: ${e.composedPath()[0]?.tagName}`);
      trace(`[GLOBAL_CLICK] defaultPrevented: ${e.defaultPrevented}`);
      trace(`[GLOBAL_CLICK] cancelable: ${e.cancelable}`);
    }, { capture: true }); // capture: true → primero en ejecutar

    // --- Captura de errores en runtime ---
    window.addEventListener('error', (e) => {
      trace(`[RUNTIME_ERROR] ${e.message} at ${e.filename}:${e.lineno}`);
    });
    window.addEventListener('unhandledrejection', (e) => {
      trace(`[UNHANDLED_REJECTION] ${e.reason}`);
    });

    trace('[SETUP] Instrumentation complete');
  });

  // =========================================================
  // FASE 1 - Traza Hero CTA (href="#early-access")
  // =========================================================
  console.log('\n=== FASE 1A: Hero CTA click (href="#early-access") ===');
  await page.evaluate(() => { window.__DEBUG_TRACE__ = []; });

  // Hacer click directamente por coordenadas en el centro del botón
  // Primero scrollear para que esté visible
  await page.evaluate(() => {
    const btn = document.querySelector('.lia-hero__actions a.lia-btn--primary');
    if (btn) btn.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(300);

  const heroBox = await page.locator('.lia-hero__actions a.lia-btn--primary').first().boundingBox();
  console.log('Hero CTA box after scroll:', heroBox);

  if (heroBox) {
    await page.mouse.click(heroBox.x + heroBox.width / 2, heroBox.y + heroBox.height / 2);
    await page.waitForTimeout(500);
  }

  const trace1 = await page.evaluate(() => window.__DEBUG_TRACE__);
  console.log('Hero CTA Trace:', JSON.stringify(trace1, null, 2));

  // =========================================================
  // FASE 1B: Nav Link click (href="#biblioteca")
  // =========================================================
  console.log('\n=== FASE 1B: Nav Link click (href="#biblioteca") ===');
  await page.evaluate(() => { window.__DEBUG_TRACE__ = []; });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  const navLinkBox = await page.locator('a.lia-nav__link[href="#biblioteca"]').first().boundingBox();
  console.log('Nav Link box:', navLinkBox);

  if (navLinkBox) {
    await page.mouse.click(navLinkBox.x + navLinkBox.width / 2, navLinkBox.y + navLinkBox.height / 2);
    await page.waitForTimeout(500);
  }

  const trace2 = await page.evaluate(() => window.__DEBUG_TRACE__);
  console.log('Nav Link Trace:', JSON.stringify(trace2, null, 2));

  // =========================================================
  // FASE 5: EarlyAccess form submit
  // =========================================================
  console.log('\n=== FASE 5: EarlyAccess form submit ===');
  await page.evaluate(() => { window.__DEBUG_TRACE__ = []; });

  // Scrollear al EarlyAccess
  await page.evaluate(() => {
    const el = document.getElementById('early-access');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(400);

  // Llenar el email
  const emailInput = page.locator('#early-access input[type="email"]').first();
  await emailInput.fill('test@test.com');
  await page.waitForTimeout(200);

  // Click en el submit
  const submitBox = await page.locator('#early-access button[type="submit"]').first().boundingBox();
  console.log('EarlyAccess submit box:', submitBox);

  let dialogFired = false;
  let dialogMessage = '';
  page.once('dialog', async dialog => {
    dialogFired = true;
    dialogMessage = dialog.message();
    await dialog.dismiss();
  });

  if (submitBox) {
    await page.mouse.click(submitBox.x + submitBox.width / 2, submitBox.y + submitBox.height / 2);
    await page.waitForTimeout(1000); // esperar suficiente para el alert
  }

  const trace5 = await page.evaluate(() => window.__DEBUG_TRACE__);
  console.log('EarlyAccess Trace:', JSON.stringify(trace5, null, 2));
  console.log('Dialog fired:', dialogFired, '| message:', dialogMessage);

  // =========================================================
  // FASE 6: AnchorSmooth - verificar si lenis.scrollTo ejecuta
  // =========================================================
  console.log('\n=== FASE 6: AnchorSmooth scrollTo verification ===');
  const lenisScrollTest = await page.evaluate(() => {
    window.__DEBUG_TRACE__ = [];
    const trace = (msg) => { window.__DEBUG_TRACE__.push(msg); };

    const anchor = window.LIA_OS?.get('anchor');
    if (!anchor) return { error: 'No anchor module' };

    const scrollModule = window.LIA_OS?.get('scroll');
    const lenis = scrollModule?.lenis;

    const scrollYBefore = lenis?.scroll ?? window.scrollY;

    // Disparar click en un anchor con target conocido
    const navLink = document.querySelector('a.lia-nav__link');
    if (navLink) {
      navLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    }

    return {
      hasAnchorModule: !!anchor,
      hasLenis: !!lenis,
      scrollYBefore,
      navLinkHref: navLink?.getAttribute('href'),
      traceAtCall: window.__DEBUG_TRACE__,
    };
  });
  await page.waitForTimeout(800);
  const lenisScrollAfter = await page.evaluate(() => ({
    scrollY: window.scrollY,
    lenisScroll: window.LIA_OS?.get('scroll')?.lenis?.scroll,
  }));

  console.log('Lenis Scroll Test:', JSON.stringify(lenisScrollTest, null, 2));
  console.log('After 800ms - scroll position:', lenisScrollAfter);

  // =========================================================
  // FASE 3 - Buscar retornos prematuros y silent catches
  // =========================================================
  console.log('\n=== FASE 3: Retornos prematuros en AnchorSmooth ===');
  const anchorModuleState = await page.evaluate(() => {
    const anchor = window.LIA_OS?.get('anchor');
    return {
      active: anchor?.active,
      hasScroll: !!anchor?.scroll,
      hasLenis: !!anchor?.scroll?.lenis,
      offset: anchor?.offset,
      duration: anchor?.duration,
    };
  });
  console.log('AnchorSmooth module state:', anchorModuleState);

  // =========================================================
  // FASE 4 - ¿Listener registrado o perdido?
  // =========================================================
  console.log('\n=== FASE 4: Verificación de registro de listeners ===');
  const listenerCheck = await page.evaluate(() => {
    // El único modo de verificar listeners en JS puro es via getEventListeners (solo disponible en DevTools)
    // Alternativa: verificar via flag en el objeto
    const anchor = window.LIA_OS?.get('anchor');
    const nav = window.LIA_OS?.get('nav');
    const heroFx = window.LIA_OS?.get('heroFx');
    const continuumFx = window.LIA_OS?.get('continuumFx');

    return {
      modules: Array.from(window.LIA_OS?.modules?.keys() || []),
      anchorActive: anchor?.active,
      navEl: nav?.el?.id || nav?.el?.tagName || 'no el',
      heroFxActive: typeof heroFx?.raf === 'function',
      continuumFxActive: typeof continuumFx?.raf === 'function',
    };
  });
  console.log('Listener check:', JSON.stringify(listenerCheck, null, 2));

  // =========================================================
  // FASE 8 - Cronología de boot
  // =========================================================
  console.log('\n=== FASE 8: Logs del boot LIA_OS ===');
  console.log('All console logs:');
  allLogs.forEach(l => console.log(`  [${l.type}] ${l.text}`));

  console.log('\nRuntime Errors:', JSON.stringify(runtimeErrors, null, 2));

  await browser.close();
})();
