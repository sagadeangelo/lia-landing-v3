/**
 * DIAGNÓSTICO DE ENTORNO — Playwright
 * Recolecta todos los datos del entorno para comparación.
 */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const jsErrors = [];
  const networkRequests = [];
  page.on('pageerror', err => jsErrors.push({ message: err.message, stack: err.stack?.split('\n')[1] }));
  page.on('response', resp => {
    if (resp.url().includes('localhost:5173')) {
      networkRequests.push({ url: resp.url().replace('http://localhost:5173', ''), status: resp.status(), headers: { 'content-type': resp.headers()['content-type'], 'cache-control': resp.headers()['cache-control'] } });
    }
  });

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(3500);

  const env = await page.evaluate(() => {
    // Service Worker
    let swState = 'not supported';
    if ('serviceWorker' in navigator) {
      swState = navigator.serviceWorker.controller ? navigator.serviceWorker.controller.state : 'no active SW';
    }

    // Número de boots y registros
    const liaOS = window.LIA_OS;
    const modules = liaOS ? Array.from(liaOS.modules.keys()) : [];
    const anchorModule = liaOS?.get('anchor');

    return {
      userAgent: navigator.userAgent,
      browserVersion: navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] || 'N/A',
      cookiesEnabled: navigator.cookieEnabled,
      localStorage: Object.keys(localStorage).length,
      sessionStorage: Object.keys(sessionStorage).length,
      serviceWorker: swState,
      liaOSBooted: liaOS?._booted,
      liaOSVersion: liaOS?.version,
      liaOSBootCount: window.__LIA_BOOT_COUNT__ || 'not tracked',
      registeredModules: modules,
      moduleCount: modules.length,
      anchorActive: anchorModule?.active,
      anchorHasLenis: !!anchorModule?.scroll?.lenis,
      lenisScroll: liaOS?.get('scroll')?.lenis?.scroll,
      documentReadyState: document.readyState,
      domContentLoaded: window.__DOM_CONTENT_LOADED__ || 'not tracked',
      windowErrorHandler: typeof window.onerror,
      unhandledRejectionHandler: typeof window.onunhandledrejection,
    };
  });

  const browserVersion = await browser.version();

  console.log('=== PLAYWRIGHT ENV REPORT ===');
  console.log(JSON.stringify({
    playwrightBrowserVersion: browserVersion,
    ...env,
    jsErrors,
    networkRequests: networkRequests.slice(0, 15),
  }, null, 2));

  await browser.close();
})();
