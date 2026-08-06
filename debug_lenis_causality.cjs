/**
 * INSTRUMENTACIÓN COMPLETA - Causalidad Lenis
 *
 * Objetivo: Determinar si Lenis realmente consume o modifica
 * eventos de pointerdown / click / submit.
 *
 * Estrategia:
 *   1. Registrar listeners en TODOS los nodos (window, document, html, body, form, button)
 *      en CAPTURE y BUBBLE para cada evento.
 *   2. Parchear Lenis.onPointerDown, Lenis.onVirtualScroll, Lenis.onClick
 *      para ver exactamente qué ejecuta.
 *   3. Verificar si event.preventDefault() o stopPropagation() se llaman
 *      durante un click normal en un botón.
 */

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const allLogs = [];
  page.on('console', msg => {
    if (msg.text().startsWith('[PROBE]') || msg.text().startsWith('[LENIS]') || msg.text().startsWith('[LAYER]')) {
      allLogs.push(msg.text());
    }
  });
  page.on('pageerror', err => allLogs.push('[PAGEERROR] ' + err.message));

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(3500);

  // =========================================================
  // INSTRUMENTACIÓN GLOBAL
  // =========================================================
  await page.evaluate(() => {
    const T = (msg) => console.log('[PROBE] ' + msg);

    // Patch para detectar preventDefault / stopPropagation en CUALQUIER evento
    function wrapEvent(e, source) {
      const origPreventDefault = e.preventDefault.bind(e);
      const origStop = e.stopPropagation.bind(e);
      const origStopImmediate = e.stopImmediatePropagation.bind(e);

      e.preventDefault = function() {
        T(`[${source}] preventDefault() called on "${e.type}" | target=${e.target?.tagName}#${e.target?.id}`);
        origPreventDefault();
      };
      e.stopPropagation = function() {
        T(`[${source}] stopPropagation() called on "${e.type}" | target=${e.target?.tagName}`);
        origStop();
      };
      e.stopImmediatePropagation = function() {
        T(`[${source}] stopImmediatePropagation() called on "${e.type}" | target=${e.target?.tagName}`);
        origStopImmediate();
      };
    }

    // Helper para registrar listener en un nodo con descripción completa del evento
    function probe(node, eventType, label, phase) {
      node.addEventListener(eventType, (e) => {
        T(`[LAYER:${phase}] ${label} | evt="${eventType}" | target=${e.target?.tagName}#${e.target?.id} | currentTarget=${e.currentTarget?.tagName||'window'}#${e.currentTarget?.id||''} | defaultPrevented=${e.defaultPrevented} | cancelBubble=${e.cancelBubble} | phase=${e.eventPhase}`);
      }, { capture: phase === 'CAPTURE' });
    }

    // =========================================================
    // Registrar en todos los nodos, ambas fases
    // =========================================================
    const nodes = [
      { node: window, label: 'WINDOW' },
      { node: document, label: 'DOCUMENT' },
      { node: document.documentElement, label: 'HTML' },
      { node: document.body, label: 'BODY' },
    ];
    const events = ['pointerdown', 'pointerup', 'click', 'submit'];

    nodes.forEach(({ node, label }) => {
      events.forEach(evt => {
        probe(node, evt, label, 'CAPTURE');
        probe(node, evt, label, 'BUBBLE');
      });
    });

    // Form y button dinámicos — los buscamos ahora que el DOM está listo
    const form = document.querySelector('#early-access form');
    const button = document.querySelector('#early-access button[type="submit"]');
    if (form) {
      events.forEach(evt => {
        probe(form, evt, 'FORM#early-access', 'CAPTURE');
        probe(form, evt, 'FORM#early-access', 'BUBBLE');
      });
    }
    if (button) {
      events.forEach(evt => {
        probe(button, evt, 'BUTTON[submit]', 'CAPTURE');
        probe(button, evt, 'BUTTON[submit]', 'BUBBLE');
      });
    }

    // =========================================================
    // PARCHEAR LENIS DIRECTAMENTE
    // =========================================================
    const lenis = window.LIA_OS?.get('scroll')?.lenis;
    if (!lenis) {
      T('[LENIS] WARNING: Lenis instance NOT found');
    } else {
      T('[LENIS] Instance found. Patching handlers...');

      // Parchear onPointerDown
      const origOnPointerDown = lenis.onPointerDown;
      if (origOnPointerDown) {
        lenis.onPointerDown = function(event) {
          T(`[LENIS] onPointerDown CALLED | type=${event.type} | button=${event.button} | target=${event.target?.tagName}#${event.target?.id}`);
          wrapEvent(event, 'LENIS.onPointerDown');
          const result = origOnPointerDown.call(this, event);
          T(`[LENIS] onPointerDown RETURNED | defaultPrevented=${event.defaultPrevented} | cancelBubble=${event.cancelBubble}`);
          return result;
        };
        // Re-registrar el listener con el handler parcheado
        const wrapper = lenis.options?.wrapper;
        if (wrapper) {
          wrapper.removeEventListener('pointerdown', origOnPointerDown);
          wrapper.addEventListener('pointerdown', lenis.onPointerDown);
          T('[LENIS] onPointerDown re-registered on wrapper');
        }
      } else {
        T('[LENIS] onPointerDown NOT found (may be an arrow fn bound to instance)');
      }

      // Parchear onVirtualScroll
      const origOnVirtualScroll = lenis.onVirtualScroll;
      if (origOnVirtualScroll) {
        lenis.onVirtualScroll = function(data) {
          const { event } = data;
          T(`[LENIS] onVirtualScroll CALLED | evtType=${event?.type} | target=${event?.target?.tagName}`);
          wrapEvent(event, 'LENIS.onVirtualScroll');
          const result = origOnVirtualScroll.call(this, data);
          T(`[LENIS] onVirtualScroll RETURNED | defaultPrevented=${event?.defaultPrevented}`);
          return result;
        };
        T('[LENIS] onVirtualScroll patched');
      }

      // Parchear onClick (solo activo si options.anchors está activado)
      const origOnClick = lenis.onClick;
      if (origOnClick) {
        lenis.onClick = function(event) {
          T(`[LENIS] onClick CALLED | target=${event.target?.tagName}#${event.target?.id} | href=${event.target?.getAttribute?.('href')}`);
          wrapEvent(event, 'LENIS.onClick');
          const result = origOnClick.call(this, event);
          T(`[LENIS] onClick RETURNED | defaultPrevented=${event.defaultPrevented}`);
          return result;
        };
        T('[LENIS] onClick patched');
      }

      // Verificar qué wrapper y element tiene Lenis configurado
      T(`[LENIS] wrapper = ${lenis.options?.wrapper === window ? 'window' : lenis.options?.wrapper?.tagName + '#' + lenis.options?.wrapper?.id}`);
      T(`[LENIS] options.anchors = ${lenis.options?.anchors}`);
      T(`[LENIS] options.smoothWheel = ${lenis.options?.smoothWheel}`);
      T(`[LENIS] options.syncTouch = ${lenis.options?.syncTouch}`);
    }

    T('[SETUP] All probes installed');
  });

  // =========================================================
  // TEST 1: Click en EarlyAccess button (con scroll previo)
  // =========================================================
  console.log('\n=== TEST 1: EarlyAccess button click ===');
  allLogs.length = 0;

  await page.evaluate(() => {
    const el = document.querySelector('#early-access button[type="submit"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await page.waitForTimeout(400);

  const submitBox = await page.locator('#early-access button[type="submit"]').first().boundingBox();
  console.log('Button bounding box:', submitBox);

  let dialog1Fired = false;
  page.once('dialog', async d => { dialog1Fired = true; await d.dismiss(); });

  if (submitBox) {
    // Llenar el formulario primero
    await page.evaluate(() => {
      const inp = document.querySelector('#early-access input[type="email"]');
      if (inp) {
        // Simular input nativo
        inp.value = 'test@example.com';
        inp.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
    await page.mouse.click(submitBox.x + submitBox.width / 2, submitBox.y + submitBox.height / 2);
    await page.waitForTimeout(1000);
  }

  console.log('--- LOG COMPLETO TEST 1 ---');
  allLogs.forEach(l => console.log(l));
  console.log('Dialog fired:', dialog1Fired);

  // =========================================================
  // TEST 2: Verificar si el submit dispara a través de JS
  // =========================================================
  console.log('\n=== TEST 2: dispatchEvent submit programático ===');
  allLogs.length = 0;

  let dialog2Fired = false;
  page.once('dialog', async d => { dialog2Fired = true; await d.dismiss(); });

  const submitResult = await page.evaluate(() => {
    const form = document.querySelector('#early-access form');
    if (!form) return { error: 'no form' };

    // ¿Tiene el inline onsubmit?
    const hasInlineOnSubmit = !!form.onsubmit;

    // Disparar el submit directamente
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(submitEvent);

    return {
      hasInlineOnSubmit,
      defaultPrevented: submitEvent.defaultPrevented,
    };
  });

  await page.waitForTimeout(500);
  console.log('Submit result:', submitResult);
  console.log('Dialog 2 fired:', dialog2Fired);
  console.log('--- LOG TEST 2 ---');
  allLogs.forEach(l => console.log(l));

  // =========================================================
  // TEST 3: Verificar si Lenis previene el click propagation
  // USANDO un botón SIMPLE fuera de formularios
  // =========================================================
  console.log('\n=== TEST 3: Click en Nav Link con logs completos ===');
  allLogs.length = 0;

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  const navLinkBox = await page.locator('a.lia-nav__link').first().boundingBox();
  if (navLinkBox) {
    await page.mouse.click(navLinkBox.x + navLinkBox.width / 2, navLinkBox.y + navLinkBox.height / 2);
    await page.waitForTimeout(600);
  }

  console.log('--- LOG COMPLETO TEST 3 (Nav Link) ---');
  allLogs.forEach(l => console.log(l));

  // =========================================================
  // TEST 4: ¿El onsubmit INLINE del form está siendo ignorado?
  // =========================================================
  console.log('\n=== TEST 4: Inspección del onsubmit inline ===');
  const formInspect = await page.evaluate(() => {
    const form = document.querySelector('#early-access form');
    if (!form) return { error: 'no form' };

    return {
      hasOnSubmitProperty: typeof form.onsubmit,
      onsubmitString: form.getAttribute('onsubmit'),
      innerHTML_first100: form.innerHTML.slice(0, 150),
      formElementCount: form.elements.length,
    };
  });
  console.log('Form inspection:', JSON.stringify(formInspect, null, 2));

  // =========================================================
  // TEST 5: Click programático vs Mouse.click diferencia
  // =========================================================
  console.log('\n=== TEST 5: Diferencia entre dispatchEvent y mouse.click ===');
  allLogs.length = 0;

  // Volvemos al EarlyAccess
  await page.evaluate(() => {
    const el = document.querySelector('#early-access button[type="submit"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await page.waitForTimeout(300);

  let dialog5Fired = false;
  page.once('dialog', async d => { dialog5Fired = true; await d.dismiss(); });

  const clickResult = await page.evaluate(() => {
    const btn = document.querySelector('#early-access button[type="submit"]');
    if (!btn) return { error: 'no button' };

    // Click programático puro (sin mouse real)
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
    btn.dispatchEvent(clickEvent);

    return {
      clicked: true,
      defaultPrevented: clickEvent.defaultPrevented,
      cancelBubble: clickEvent.cancelBubble,
    };
  });

  await page.waitForTimeout(500);
  console.log('Click result:', clickResult);
  console.log('Dialog 5 fired:', dialog5Fired);
  console.log('--- LOG TEST 5 ---');
  allLogs.forEach(l => console.log(l));

  await browser.close();
})();
