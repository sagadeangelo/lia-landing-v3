/**
 * LIA OS — Navigation Module
 * Sprint 1: Glassmorph nav con reveal/hide on scroll,
 *           solidify después de umbral, mobile toggle stub.
 *
 * Responsabilidad única: gestionar estado visual de la navegación.
 * No orquesta navegación de rutas (ese es trabajo del RouterModule venidero).
 */
export class Navigation {
  /**
   * @param {HTMLElement} root — elemento <nav> ya renderizado en el DOM
   * @param {{ solidThreshold?: number, hideThreshold?: number }} options
   */
  constructor(root, options = {}) {
    this.root = root;
    if (!this.root) {
      console.warn('[Navigation] root no encontrado; módulo desactivado.');
      this.active = false;
      return;
    }

    this.solidThreshold = options.solidThreshold ?? 24;
    this.hideThreshold = options.hideThreshold ?? 600;

    this._lastScrollY = 0;
    this._ticking = false;

    this._bind();
    this._applyState(window.scrollY);
    this.active = true;
  }

  _bind() {
    window.addEventListener('scroll', this._onScroll, { passive: true });
  }

  destroy() {
    window.removeEventListener('scroll', this._onScroll);
    this.active = false;
  }

  _onScroll = () => {
    if (this._ticking) return;
    window.requestAnimationFrame(() => {
      this._applyState(window.scrollY);
      this._ticking = false;
    });
    this._ticking = true;
  };

  _applyState(y) {
    const goingDown = y > this._lastScrollY;
    const pastSolid = y > this.solidThreshold;
    const canHide = y > this.hideThreshold && goingDown;

    this.root.classList.toggle('lia-nav--solid', pastSolid);
    this.root.classList.toggle('lia-nav--hidden', canHide);

    this._lastScrollY = Math.max(0, y);
  }
}
