/**
 * LIA OS — Cosmic Background Module
 * Sprint 2: Sistema de iluminación atmosférica.
 *           Renderizado visual 100% CSS (sin WebGL en Sprint 2).
 *           Añade foco lumínico sobre la zona del Hero.
 *
 * Responsabilidad:
 *   - Inyectar el markup del fondo una única vez.
 *   - Ajustar luces en función de pointer movement (micro-interacción).
 *   - Exponer puntos de extensión para futuras capas (WebGL, partículas).
 */
export class CosmicBackground {
  /**
   * @param {HTMLElement} mount — nodo contenedor (normalmente <body>)
   */
  constructor(mount) {
    this.mount = mount;
    if (!this.mount) {
      console.warn('[CosmicBackground] mount no encontrado.');
      this.active = false;
      return;
    }

    this.layer = this._buildLayer();
    this.mount.prepend(this.layer);

    this._lightsEl = this.layer.querySelector('.lia-bg__lights');
    this._bloomEl = this.layer.querySelector('.lia-bg__bloom');
    this._heroFocusEl = this.layer.querySelector('.lia-bg__hero-focus');
    this._purpleEl = this.layer.querySelector('.lia-bg__light--purple');
    this._cyanEl = this.layer.querySelector('.lia-bg__light--cyan');
    this._pinkEl = this.layer.querySelector('.lia-bg__light--pink');

    this._target = { x: 0, y: 0 };
    this._current = { x: 0, y: 0 };
    this._t = 0;
    this._bindPointer();
    this.active = true;
  }

  destroy() {
    window.removeEventListener('pointermove', this._onPointer);
    this.layer?.remove();
    this.active = false;
  }

  /**
   * Invocado por el RAF loop central de LIA_OS.
   * No debe hacer su propio requestAnimationFrame.
   * @param {number} time — performance.now()
   */
  raf(time) {
    if (!this.active) return;
    const ease = 0.05;
    this._current.x += (this._target.x - this._current.x) * ease;
    this._current.y += (this._target.y - this._current.y) * ease;
    this._t = time * 0.001;

    if (this._lightsEl) {
      const dx = this._current.x * 2.6;
      const dy = this._current.y * 2.6;
      this._lightsEl.style.transform = `translate3d(${dx}%, ${dy}%, 0)`;
    }

    if (this._bloomEl) {
      const dx = this._current.x * 4.6;
      const dy = this._current.y * 4.6;
      const pulse = 1 + Math.sin(this._t * 0.9) * 0.012;
      this._bloomEl.style.transform = `translate(calc(-50% + ${dx}%), calc(-50% + ${dy}%)) scale(${pulse})`;
      this._bloomEl.style.setProperty(
        '--hero-focus-a',
        (0.085 + Math.abs(this._current.x+this._current.y) * 0.012).toFixed(3)
      );
      this._bloomEl.style.setProperty(
        '--hero-focus-b',
        (0.055 + Math.abs(this._current.x*this._current.y) * 0.022).toFixed(3)
      );
    }

    if (this._heroFocusEl) {
      // Hero focus light: atraído más suavemente por el pointer
      const dx = this._current.x * 2.2;
      const dy = this._current.y * 2.0;
      const pulse = 1 + Math.sin(this._t * 0.7) * 0.018;
      this._heroFocusEl.style.transform = `translate(calc(-50% + ${dx}%), calc(-50% + ${dy}%)) scale(${pulse})`;
      this._heroFocusEl.style.setProperty(
        '--hero-focus-a',
        (0.085 + Math.abs(this._current.x) * 0.022 + Math.abs(this._current.y) * 0.014).toFixed(3)
      );
      this._heroFocusEl.style.setProperty(
        '--hero-focus-b',
        (0.055 + Math.abs(this._current.x+this._current.y) * 0.032).toFixed(3)
      );
    }

    // Luces individuales: cada una tiene su propio drift adicional por pointer (individualidad)
    if (this._purpleEl) {
      this._purpleEl.style.translate = `${this._current.x * -1.8}% ${this._current.y * -1.2}%`;
    }
    if (this._cyanEl) {
      this._cyanEl.style.translate = `${this._current.x * 1.4}% ${this._current.y * 2.0}%`;
    }
    if (this._pinkEl) {
      this._pinkEl.style.translate = `${this._current.x * 0.8}% ${this._current.y * -1.6}%`;
    }
  }

  _buildLayer() {
    const el = document.createElement('div');
    el.className = 'lia-bg';
    el.setAttribute('role', 'presentation');
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = /* html */ `
      <div class="lia-bg__void"></div>
      <div class="lia-bg__lights">
        <div class="lia-bg__light lia-bg__light--purple"></div>
        <div class="lia-bg__light lia-bg__light--cyan"></div>
        <div class="lia-bg__light lia-bg__light--pink"></div>
      </div>
      <div class="lia-bg__hero-focus"></div>
      <div class="lia-bg__bloom"></div>
      <div class="lia-bg__vignette"></div>
      <div class="lia-bg__grain"></div>
    `;
    return el;
  }

  _bindPointer() {
    window.addEventListener('pointermove', this._onPointer, { passive: true });
  }

  _onPointer = (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this._target.x = (e.clientX / w - 0.5) * 2;
    this._target.y = (e.clientY / h - 0.5) * 2;
  };
}
