/**
 * =====================================================================
 *  LIA OS — Sistema Operativo Cognitivo
 *  Orquestador central del ecosistema Landing V3.
 *
 *  Responsabilidad:
 *    · Bootstrap del sistema.
 *    · Loop RAF único compartido por todos los motores.
 *    · Registrar y destruir módulos de forma ordenada.
 *    · Punto de exposición global (window.LIA_OS) para diagnóstico.
 *
 *  Ciclo de vida:
 *    constructor → registerModules → mount → boot
 *
 *  Prioridad documental (fuera de código):
 *    1. Genesis Protocol → 2. Concept Art → 3. Sprints
 * =====================================================================
 */

import { ScrollEngine } from './scroll_engine.js';
import { AnchorSmooth } from './anchor_smooth.js';
import { CosmicBackground } from '../ui/CosmicBackground.js';
import { Navigation } from '../ui/Navigation.js';
import { NavigationMarkup } from '../ui/NavigationMarkup.js';
import { Hero } from '../ui/Hero.js';
import { HeroFX } from '../ui/HeroFX.js';
import { Continuum } from '../ui/Continuum.js';
import { ContinuumFX } from '../ui/ContinuumFX.js';
import { Features } from '../ui/Features.js';
import { TrainSection } from '../ui/TrainSection.js';
import { Simuladores } from '../ui/Simuladores.js';
import { Guias } from '../ui/Guias.js';
import { Publish } from '../ui/Publish.js';
import { Library } from '../ui/Library.js';
import { SocialProof } from '../ui/SocialProof.js';
import { Vision } from '../ui/Vision.js';
import { AppShowcase } from '../ui/AppShowcase.js';
import { About } from '../ui/About.js';
import { CTA } from '../ui/CTA.js';
import { Footer } from '../ui/Footer.js';
import { EarlyAccess } from '../ui/EarlyAccess.js';
import { ModalManager } from '../ui/Modal.js';

const LIA_VERSION = '1.0.0-sprint-1';

export class LIA_OS {
  constructor() {
    this.version = LIA_VERSION;
    this.rafId = null;
    this.modules = new Map();
    this._booted = false;
    this._lastTime = 0;

    if (typeof window !== 'undefined') {
      window.LIA_OS = this;
    }
  }

  /**
   * Punto de entrada único. No llamar antes de DOMContentLoaded.
   * @returns {Promise<LIA_OS>}
   */
  async boot() {
    if (this._booted) {
      console.warn('[LIA_OS] boot() llamado más de una vez; se ignora.');
      return this;
    }

    this._bootStarted = performance.now();
    this._log('Booting…');

    this._mountLayout();
    ModalManager.init();
    this._registerCoreModules();
    this._registerUIModules();
    this._startRAFLoop();

    this._booted = true;
    this._log(`Boot OK · ${Math.round(performance.now() - this._bootStarted)}ms`);

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('lia-os:boot', { detail: { version: this.version } }));
    }

    return this;
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    for (const mod of this.modules.values()) {
      if (typeof mod.destroy === 'function') {
        try { mod.destroy(); } catch (e) { console.error(e); }
      }
    }
    this.modules.clear();
    this._booted = false;
  }

  /**
   * Registra un módulo con nombre. Útil para diagnóstico.
   * @param {string} name
   * @param {{ raf?: (t:number)=>void, destroy?: ()=>void, active?: boolean }} instance
   */
  register(name, instance) {
    this.modules.set(name, instance);
    return instance;
  }

  get(name) {
    return this.modules.get(name);
  }

  /* ------------------------------ PRIVADOS ----------------------------- */

  _mountLayout() {
    const body = document.body;
    if (!body) throw new Error('[LIA_OS] document.body no disponible.');

    body.id = 'top';

    const shell = document.getElementById('app-layer');
    if (!shell) throw new Error('[LIA_OS] #app-layer no encontrado en index.html.');

    shell.innerHTML = [
      NavigationMarkup.render(),
      '<main id="lia-main" class="lia-main" role="main">',
      Hero.render(),
      Continuum.render(),
      '<div style="padding-top: var(--space-4xl); position: relative; z-index: 10;">',
      '<div class="lia-container"><div class="lia-divider"></div></div>',
      Features.render(),
      TrainSection.render(),
      Simuladores.render(),
      Guias.render(),
      AppShowcase.render(),
      Publish.render(),
      Library.render(),
      SocialProof.render(),
      Vision.render(),
      About.render(),
      EarlyAccess.render(),
      '</div>',
      '</main>',
      Footer.render(),
      ModalManager.render(),
    ].join('\n');
  }

  _registerCoreModules() {
    this.register('scroll', new ScrollEngine());
    this.register('cosmic', new CosmicBackground(document.body));
    this.register('anchor', new AnchorSmooth({
      scroll: this.get('scroll'),
      offset: this._navOffsetPx(),
    }));
  }

  _registerUIModules() {
    const navEl = document.getElementById('lia-nav');
    this.register('nav', new Navigation(navEl, {
      solidThreshold: 24,
      hideThreshold: 700,
    }));
    this.register('heroFx', new HeroFX());
    this.register('continuumFx', new ContinuumFX());
  }

  _navOffsetPx() {
    try {
      const s = getComputedStyle(document.documentElement).getPropertyValue('--lia-nav-height');
      const m = /([\d.]+)px/.exec(String(s));
      if (m) return Number(m[1]);
    } catch (_) { /* noop */ }
    return 80;
  }

  _startRAFLoop() {
    const loop = (time) => {
      for (const mod of this.modules.values()) {
        if (mod && typeof mod.raf === 'function') {
          try { mod.raf(time); } catch (e) { console.error(e); }
        }
      }
      this._lastTime = time;
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  _log(...msg) {
    const prefix = `%cLIA_OS%c v${this.version}`;
    const css0 = 'background:#7C3AED;color:#FFF;padding:2px 8px;border-radius:4px;font-weight:700;letter-spacing:.04em';
    const css1 = 'color:#A5F3FC;font-weight:600';
    console.log(prefix, css0, css1, '·', ...msg);
  }
}
