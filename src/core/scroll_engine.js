import Lenis from 'lenis';

/**
 * LIA OS — ScrollEngine
 * Wrapper fino de Lenis para smooth scroll.
 * Sprint 1: Configuración base. Se integra con LIA_OS.raf loop central
 *           para evitar múltiples requestAnimationFrame paralelos.
 */
export class ScrollEngine {
  constructor() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    this.active = true;
  }

  /**
   * @param {number} time — tiempo desde performance.now() (RAF)
   */
  raf(time) {
    if (this.active) this.lenis.raf(time);
  }

  destroy() {
    this.active = false;
    this.lenis.destroy();
  }
}
