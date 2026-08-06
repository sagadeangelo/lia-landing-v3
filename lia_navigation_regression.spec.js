import { test, expect } from '@playwright/test';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4174';
const tests = [
  { name: 'Navbar Cómo funciona', selector: 'a.lia-nav__link:has-text("Cómo funciona")', expectedHash: '#como-funciona' },
  { name: 'Navbar Biblioteca', selector: 'a.lia-nav__link:has-text("Biblioteca")', expectedHash: '#biblioteca' },
  { name: 'Navbar Visión', selector: 'a.lia-nav__link:has-text("Visión")', expectedHash: '#vision' },
  { name: 'Navbar El Proyecto', selector: 'a.lia-nav__link:has-text("El Proyecto")', expectedHash: '#autor' },
  { name: 'Navbar Acceso Anticipado', selector: 'a.lia-btn:has-text("Acceso Anticipado")', expectedHash: '#early-access' },
  { name: 'Hero Explorar biblioteca', selector: '#lia-hero a:has-text("Explorar biblioteca")', expectedHash: '#biblioteca' },
  { name: 'Hero Acceso Anticipado', selector: '#lia-hero a:has-text("Acceso Anticipado")', expectedHash: '#early-access' },
];

test.describe('LIA Landing navigation regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForLoadState('networkidle');
  });

  for (const t of tests) {
    test(t.name, async ({ page }) => {
      const locator = page.locator(t.selector).first();
      await expect(locator, `Selector not found: ${t.selector}`).toHaveCount(1);

      const href = await locator.getAttribute('href');
      expect(href, `Expected href for ${t.name}`).toBe(t.expectedHash);

      const target = href?.startsWith('#') ? href.slice(1) : null;
      expect(target, `Expected a hash href for ${t.name}`).toBeTruthy();
      await expect(page.locator(`#${target}`), `Target section not found: ${target}`).toHaveCount(1);

      const initialY = await page.evaluate(() => window.scrollY);
      await locator.click({ timeout: 10000 });
      await page.waitForTimeout(250);
      await page.waitForFunction(
        ([targetId]) => {
          const el = document.getElementById(targetId);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top >= -120 && rect.top <= window.innerHeight / 2;
        },
        [target],
        { timeout: 10000 }
      );
    });
  }
});
