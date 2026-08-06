/**
 * FASE 6 DEEP - Diagnóstico de posicionamiento del Hero
 * Objetivo: ¿Por qué el Hero CTA está en y:857 si debería estar en pantalla completa?
 */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // visible para captura
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  const consoleMessages = [];
  page.on('console', msg => consoleMessages.push({ type: msg.type(), text: msg.text() }));

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(3500);

  console.log('\n=== FASE 6: Diagnóstico de posicionamiento del Hero ===');

  const heroGeometry = await page.evaluate(() => {
    const hero = document.getElementById('lia-hero');
    const heroActions = document.querySelector('.lia-hero__actions');
    const heroContent = document.querySelector('.lia-hero__content');
    const heroTitle = document.querySelector('.lia-hero__title');
    const heroPrimBtn = document.querySelector('.lia-hero__actions a.lia-btn--primary');
    const heroVeil = document.querySelector('.lia-hero__veil');

    const getInfo = (el, label) => {
      if (!el) return { label, exists: false };
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        label,
        exists: true,
        rect: { top: Math.round(rect.top), left: Math.round(rect.left), width: Math.round(rect.width), height: Math.round(rect.height) },
        computedStyles: {
          position: style.position,
          zIndex: style.zIndex,
          pointerEvents: style.pointerEvents,
          opacity: style.opacity,
          visibility: style.visibility,
          minHeight: style.minHeight,
          height: style.height,
          paddingTop: style.paddingTop,
          transform: style.transform,
          display: style.display,
          overflow: style.overflow,
        }
      };
    };

    // ¿Hay algún elemento que cubre exactamente el viewport?
    const elementsAtCenter = [];
    // Recorrer la pila completa de elements bajo el cursor
    const cx = window.innerWidth / 2;
    const cy = 400; // Mitad de pantalla aprox

    // Simular click propagation
    let propagationBlocked = false;
    const testHandler = (e) => {
      propagationBlocked = e.defaultPrevented || !e.bubbles;
    };
    document.addEventListener('click', testHandler, { once: true });

    return {
      windowSize: { innerWidth: window.innerWidth, innerHeight: window.innerHeight },
      scrollY: window.scrollY,
      hero: getInfo(hero, '#lia-hero'),
      heroActions: getInfo(heroActions, '.lia-hero__actions'),
      heroContent: getInfo(heroContent, '.lia-hero__content'),
      heroTitle: getInfo(heroTitle, '.lia-hero__title'),
      heroPrimaryBtn: getInfo(heroPrimBtn, 'Hero CTA Primary'),
      heroVeil: getInfo(heroVeil, '.lia-hero__veil'),
    };
  });

  console.log('Hero Geometry:', JSON.stringify(heroGeometry, null, 2));

  // ¿Hay algún scroll activo empujando el hero hacia abajo?
  const scrollInfo = await page.evaluate(() => {
    return {
      scrollY: window.scrollY,
      documentScrollTop: document.documentElement.scrollTop,
      bodyScrollTop: document.body.scrollTop,
      lenisScrollY: window.lenis ? window.lenis.scroll : 'NO LENIS',
      lenisInstance: !!window.lenis,
      LIA_OS_scroll: window.LIA_OS ? !!window.LIA_OS.get('scroll') : 'NO LIA_OS',
    };
  });
  console.log('Scroll Info:', JSON.stringify(scrollInfo, null, 2));

  // ¿El hero tiene padding-top igual a su propia height?
  const heroCSS = await page.evaluate(() => {
    const hero = document.getElementById('lia-hero');
    if (!hero) return null;
    const s = window.getComputedStyle(hero);

    // Buscar el contenedor que wrappea todo
    const heroBefore = window.getComputedStyle(hero, '::before');
    const heroAfter = window.getComputedStyle(hero, '::after');

    return {
      heroHeight: hero.offsetHeight,
      heroClientHeight: hero.clientHeight,
      heroBoundingTop: hero.getBoundingClientRect().top,
      heroBoundingBottom: hero.getBoundingClientRect().bottom,
      paddingTop: s.paddingTop,
      marginTop: s.marginTop,
      beforeContent: heroBefore.content,
      beforeHeight: heroBefore.height,
      afterContent: heroAfter.content,
    };
  });
  console.log('Hero CSS Detail:', JSON.stringify(heroCSS, null, 2));

  // ¿El lenis está activado y está anclando el scroll artificialmente?
  const lenisDetail = await page.evaluate(() => {
    if (!window.LIA_OS) return { error: 'No LIA_OS' };
    const scrollModule = window.LIA_OS.get('scroll');
    if (!scrollModule) return { error: 'No scroll module' };
    return {
      hasLenis: !!scrollModule.lenis,
      lenisScrollY: scrollModule.lenis ? scrollModule.lenis.scroll : null,
      lenisVelocity: scrollModule.lenis ? scrollModule.lenis.velocity : null,
      lenisIsScrolling: scrollModule.lenis ? scrollModule.lenis.isScrolling : null,
      lenisTarget: scrollModule.lenis ? scrollModule.lenis.targetScroll : null,
    };
  });
  console.log('Lenis Detail:', JSON.stringify(lenisDetail, null, 2));

  // Tomar captura de pantalla para ver qué se muestra
  await page.screenshot({ path: 'debug_viewport.png', fullPage: false });
  console.log('Screenshot saved: debug_viewport.png');

  console.log('\n=== Console Messages ===');
  consoleMessages.forEach(m => console.log(`[${m.type}] ${m.text}`));

  await browser.close();
})();
