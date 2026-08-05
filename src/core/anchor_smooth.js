/**
 * LIA OS — AnchorSmoothModule
 * R5: Intercepta todos los <a href="#..."> internos y usa Lenis.scrollTo()
 *     para evitar doble scroll (nativo + smooth) y desincronización con Lenis.
 *
 * Compatibilidad:
 *   · href="#top"             → scroll a 0
 *   · href="#section-id"      → scroll al nodo
 *   · href="#" o href vacío   → ignora (eslabón)
 *   · href="http(s)://..."    → ignora (externo)
 *   · data-lia-no-smooth      → opt-out por anchor
 *   · shift/ctrl/meta-click   → ignora (gesto de abrir en pestaña)
 */
export class AnchorSmooth {
  /**
   * @param {object} options
   * @param {import('./scroll_engine.js').ScrollEngine} options.scroll — instancia ScrollEngine
   * @param {number} [options.offset] — offset px desde el tope (por nav sticky)
   * @param {number} [options.duration] — duración Lenis en segundos
   */
  constructor({ scroll, offset = 0, duration = 1.1 } = {}) {
    this.scroll = scroll;
    this.offset = offset;
    this.duration = duration;

    if (!this.scroll || !this.scroll.lenis) {
      console.warn('[AnchorSmooth] Scroll/Lenis no disponible; se usa scroll nativo.');
      this.active = false;
      return;
    }

    this._onClick = this._onClick.bind(this);
    document.addEventListener('click', this._onClick, { passive: false });
    this.active = true;
  }

  destroy() {
    document.removeEventListener('click', this._onClick);
    this.active = false;
  }

  _onClick(e) {
    const a = e.target.closest('a[href]');
    if (!a) return;

    if (a.hasAttribute('data-lia-no-smooth')) return;

    const href = a.getAttribute('href') || '';

    if (!href.startsWith('#')) return;
    if (href === '#') return;

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.button !== undefined && e.button !== 0)) {
      return;
    }

    const target = href.slice(1);
    if (!target) return;

    let top = 0;

    if (target !== 'top') {
      const el = document.getElementById(target);
      if (!el) {
        // Anchor roto a pesar de PlaceholderSections: dejamos pasar al browser
        // para que registre error en consola y QA lo detecte.
        return;
      }
      const rect = el.getBoundingClientRect();
      top = Math.max(0, window.scrollY + rect.top - this.offset);
    }

    e.preventDefault();

    this.scroll.lenis.scrollTo(top, {
      duration: this.duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Focus secuencial a11y: mandamos foco al destino si es sección / heading
    try {
      const destEl = target === 'top' ? document.body : document.getElementById(target);
      if (destEl && destEl !== document.activeElement) {
        const focusable =
          destEl.querySelector('h1, h2, h3, [tabindex="0"], a, button') || destEl;
        if (!focusable.hasAttribute('tabindex')) focusable.setAttribute('tabindex', '-1');
        focusable.focus({ preventScroll: true });
      }
    } catch (_) {
      /* no-op */
    }
  }
}
