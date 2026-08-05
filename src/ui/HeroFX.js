/**
 * LIA OS — Hero Experience Module (Sprint 2 · Ecosistema VIVO)
 *
 * Responsabilidad ÚNICA: orquestar percepción de "ecosistema vivo".
 * NO toca copy. SOLO transform + opacity + CSS custom props vía RAF central.
 *
 * Profundidad Z declarada (valores negativos = más lejos del usuario):
 *   auraCorona   : -50px
 *   auraCore     : -40px
 *   shell        : -22px
 *   orb          : -18px
 *   tether       : -14px
 *   ringOuter    : -10px
 *   ringMid      : -4px
 *   ringInner    : +10px
 *   orbiters     : +4px ~ +14px (individual)
 *   core         : +22px (más cerca → "sale" de la pantalla)
 *
 * Copy parallax MICRO (1–5px máx. nunca distrae):
 *   badge    0.40x
 *   eyebrow  0.76x
 *   title    1.18x
 *   lead     1.60x
 *   actions  2.03x
 *   meta     2.37x
 *
 * Energy Surge cada 14s (sincronizado con keyframes 14s en CSS).
 * Hover CTAs → amplifica core. Hover stats → destellos por capa.
 * Pointer distorsiona aura/orb sutilmente (sub-perceptual).
 *
 * TODAS las transformaciones usan lerp 0.06 en RAF central de LIA_OS.
 */
export class HeroFX {
  constructor() {
    const root = document.getElementById('lia-hero');
    if (!root) {
      console.warn('[HeroFX] #lia-hero no encontrado; módulo desactivado.');
      this.active = false;
      return;
    }
    this.root = root;

    this._cacheRefs();
    if (!this.refs.visual) {
      this.active = false;
      return;
    }

    // Pointer targets + current smoothed
    this._target = { x: 0, y: 0, xN: 0, yN: 0 };
    this._cur = { x: 0, y: 0, xN: 0, yN: 0 };

    // Hover amplification targets (CTA + stats)
    this._hover = {
      ctaPrimary: 0,
      ctaSecondary: 0,
      stat0: 0,
      stat1: 0,
      stat2: 0,
    };
    this._hoverCur = { ...this._hover };

    // Energy surge accumulator (sincroniza 14s CSS)
    this._t = 0;

    // Orbiter parameters: 6 órbitas elípticas diferenciadas
    this._orbiters = [
      { rx: 38, ry: 14, phase: 0,        speed: 0.42, tiltX: 11, tiltY: -4,  z: 14, size: 0.92 },
      { rx: 33, ry: 21, phase: 1.1,      speed: -0.34, tiltX: -6, tiltY: 9, z: 8,  size: 0.84 },
      { rx: 44, ry: 10, phase: 2.3,      speed: 0.28, tiltX: 22, tiltY: 1,   z: 12, size: 0.70 },
      { rx: 29, ry: 27, phase: 0.7,      speed: 0.52, tiltX: -14, tiltY: -8, z: 10, size: 1.04 },
      { rx: 41, ry: 17, phase: 3.6,      speed: -0.24, tiltX: 8, tiltY: 13,  z: 6,  size: 0.74 },
      { rx: 36, ry: 20, phase: 5.1,      speed: 0.38, tiltX: -4, tiltY: -16,  z: 4,  size: 0.78 },
    ];

    this._bind();
    this.active = true;
  }

  destroy() {
    window.removeEventListener('pointermove', this._onPointer, true);
    if (this._ctaPrimary)   this._ctaPrimary.removeEventListener('pointerenter', this._onCtaPrimaryIn);
    if (this._ctaPrimary)   this._ctaPrimary.removeEventListener('pointerleave', this._onCtaPrimaryOut);
    if (this._ctaSecondary) this._ctaSecondary.removeEventListener('pointerenter', this._onCtaSecondaryIn);
    if (this._ctaSecondary) this._ctaSecondary.removeEventListener('pointerleave', this._onCtaSecondaryOut);
    this._stats.forEach(s => {
      s.el.removeEventListener('pointerenter', s.onIn);
      s.el.removeEventListener('pointerleave', s.onOut);
    });
    this.active = false;
  }

  raf(time) {
    if (!this.active) return;

    const ease = 0.06;
    this._cur.x += (this._target.x - this._cur.x) * ease;
    this._cur.y += (this._target.y - this._cur.y) * ease;
    this._cur.xN += (this._target.xN - this._cur.xN) * ease;
    this._cur.yN += (this._target.yN - this._cur.yN) * ease;
    this._t = time * 0.001;

    // Suavizar estados hover con el mismo lerp
    for (const k of Object.keys(this._hover)) {
      this._hoverCur[k] += (this._hover[k] - this._hoverCur[k]) * ease;
    }

    this._applyVisualLayers();
    this._applySpotlight();
    this._applyCopyParallax();
    this._applyRingsRotation();
    this._applyOrbiters();
    this._applyHoverReactions();
  }

  /* ------------------------------ INTERNAL ------------------------------ */

  _cacheRefs() {
    const r = this.root;
    this.refs = {
      visual: r.querySelector('.lia-hero__visual'),
      aura: r.querySelector('.lia-hero__aura'),
      auraCore: r.querySelector('.lia-hero__aura-core'),
      auraCorona: r.querySelector('.lia-hero__aura-corona'),
      shell: r.querySelector('.lia-hero__shell'),
      tether: r.querySelector('.lia-hero__tether'),
      orb: r.querySelector('.lia-hero__orb'),
      orbEnvmap: r.querySelector('.lia-hero__orb-envmap'),
      ringOuter: r.querySelector('.lia-hero__ring--outer'),
      ringMid: r.querySelector('.lia-hero__ring--mid'),
      ringInner: r.querySelector('.lia-hero__ring--inner'),
      orbiters: Array.from(r.querySelectorAll('.lia-hero__orbiter')),
      core: r.querySelector('.lia-hero__core'),
      coreShine: r.querySelector('.lia-hero__core-shine'),
      coreFlare: r.querySelector('.lia-hero__core-flare'),
      spot: r.querySelector('.lia-hero__spotlight'),
      badge: r.querySelector('.lia-hero__badge'),
      eyebrow: r.querySelector('.lia-hero__eyebrow'),
      title: r.querySelector('.lia-hero__title'),
      lead: r.querySelector('.lia-hero__lead'),
      actions: r.querySelector('.lia-hero__actions'),
      meta: r.querySelector('.lia-hero__meta'),
    };

    this._ctaPrimary   = r.querySelector('[data-lia-action="explore"]');
    this._ctaSecondary = r.querySelector('[data-lia-action="philosophy"]');
    this._stats = Array.from(r.querySelectorAll('.lia-hero__stat')).map((el, i) => ({
      el,
      idx: i,
      onIn:  () => { this._hover['stat' + i] = 1; },
      onOut: () => { this._hover['stat' + i] = 0; },
    }));
  }

  _bind() {
    this._onPointer = this._onPointer.bind(this);
    window.addEventListener('pointermove', this._onPointer, { passive: true, capture: true });

    this._onCtaPrimaryIn  = () => { this._hover.ctaPrimary = 1; };
    this._onCtaPrimaryOut = () => { this._hover.ctaPrimary = 0; };
    this._onCtaSecondaryIn  = () => { this._hover.ctaSecondary = 1; };
    this._onCtaSecondaryOut = () => { this._hover.ctaSecondary = 0; };

    if (this._ctaPrimary) {
      this._ctaPrimary.addEventListener('pointerenter', this._onCtaPrimaryIn);
      this._ctaPrimary.addEventListener('pointerleave', this._onCtaPrimaryOut);
    }
    if (this._ctaSecondary) {
      this._ctaSecondary.addEventListener('pointerenter', this._onCtaSecondaryIn);
      this._ctaSecondary.addEventListener('pointerleave', this._onCtaSecondaryOut);
    }
    this._stats.forEach(s => {
      s.el.addEventListener('pointerenter', s.onIn);
      s.el.addEventListener('pointerleave', s.onOut);
    });
  }

  _onPointer(e) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this._target.xN = (e.clientX / w - 0.5) * 2;
    this._target.yN = (e.clientY / h - 0.5) * 2;
    this._target.x = e.clientX;
    this._target.y = e.clientY;
  }

  _applyVisualLayers() {
    const {
      aura, auraCore, auraCorona, shell, tether,
      orb, orbEnvmap,
      ringOuter, ringMid, ringInner,
      core, visual,
    } = this.refs;
    if (!visual) return;

    const xN = this._cur.xN;
    const yN = this._cur.yN;

    // Rotación 3D base del contenedor visual (subtilísima)
    const rx = yN * 3.2;
    const ry = xN * -5.2;

    // Pointer distortion para aura (más fuerte = más lejos, efecto de refracción)
    const auraDx = xN * 9;
    const auraDy = yN * 6.5;
    if (auraCorona) auraCorona.style.transform = `translate3d(${auraDx*1.2}px, ${auraDy*0.9}px, -50px) scale(${1 + Math.abs(xN+yN)*0.008})`;
    if (auraCore)   auraCore.style.transform   = `translate3d(${auraDx*0.7}px, ${auraDy*0.5}px, -40px)`;
    if (aura)       aura.style.transform       = `rotateX(${rx*0.15}deg) rotateY(${ry*0.15}deg)`;

    // Shell (campo energía): sutilmente atraído por el pointer
    if (shell) {
      const sx = xN * 4;
      const sy = yN * 2.6;
      shell.style.setProperty('--shell-surge-border', (0.03 + this._hoverCur.ctaPrimary*0.08 + this._hoverCur.ctaSecondary*0.06).toFixed(3));
      shell.style.setProperty('--shell-surge-inset',  (0.015 + this._hoverCur.ctaPrimary*0.06 + this._hoverCur.ctaSecondary*0.04).toFixed(3));
      shell.style.setProperty('--shell-surge-glow',   (0.028 + this._hoverCur.ctaPrimary*0.096 + this._hoverCur.ctaSecondary*0.068).toFixed(3));
      shell.style.transform = `translate3d(${sx}px, ${sy}px, -22px) rotateX(${rx*0.25}deg) rotateY(${ry*0.25}deg)`;
    }

    // Tether: ligera curvatura con pointer
    if (tether) {
      tether.style.transform = `translateX(calc(-50% + ${xN*6.5}px))`;
      tether.style.opacity = 0.42 + 0.30 * (0.5 + Math.abs(xN)*0.5);
    }

    // Orb: distorsión leve (scale anisotrópico por pointer) + envmap drift
    if (orb) {
      const orbSx = 1 + xN * 0.008;
      const orbSy = 1 + yN * 0.008;
      orb.style.transform  = `translate3d(${xN*-4.6}px, ${yN*-3.3}px, -18px) rotateX(${rx*0.32}deg) rotateY(${ry*0.32}deg) scale(${orbSx}, ${orbSy})`;
    }
    if (orbEnvmap) {
      orbEnvmap.style.transform = `translate3d(${xN*-2}px, ${yN*-1.3}px, 0)`;
    }

    // Anillos (3) con profundidades Z diferenciadas y tilt 3D
    if (ringOuter) ringOuter.style.transform = `translate3d(${xN*3.3}px, ${yN*2.6}px, -10px) rotateX(${rx*0.55}deg) rotateY(${ry*0.55}deg) rotate(var(--lia-rot-outer, 0deg))`;
    if (ringMid)   ringMid.style.transform   = `translate3d(${xN*-2}px, ${yN*-1.3}px, -4px) rotateX(${rx*-0.42}deg) rotateY(${ry*-0.42}deg) rotate(var(--lia-rot-mid, 0deg))`;
    if (ringInner) ringInner.style.transform = `translate3d(${xN*2}px, ${yN*1.3}px, 10px)  rotateX(${rx*0.30}deg) rotateY(${ry*0.30}deg) rotate(var(--lia-rot-inner, 0deg))`;

    // Core: más reactivo al pointer + amplificación por CTAs
    if (core) {
      const ctaBoost = this._hoverCur.ctaPrimary * 1.08 + this._hoverCur.ctaSecondary * 1.04;
      const s = 1 + (ctaBoost - 1) * 0.32;
      core.style.transform = `translate3d(${xN*6.5}px, ${yN*4.6}px, 22px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`;
    }
  }

  _applySpotlight() {
    const { spot, visual } = this.refs;
    if (!spot || !visual) return;

    const rect = visual.getBoundingClientRect();
    const x = this._cur.x - rect.left;
    const y = this._cur.y - rect.top;
    const inView = x >= -80 && x <= rect.width + 80 && y >= -80 && y <= rect.height + 80;
    spot.style.opacity = inView ? '1' : '0';
    spot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${1 + (this._hoverCur.ctaPrimary+this._hoverCur.ctaSecondary)*0.11})`;
  }

  _applyCopyParallax() {
    const { badge, eyebrow, title, lead, actions, meta } = this.refs;
    const t = (a, b, k) => `translate3d(${a*k}px, ${b*k}px, 0)`;
    const x = this._cur.xN;
    const y = this._cur.yN;
    if (badge)   badge.style.transform   = t(x, y, 0.65) + ' var(--badge-post, )';
    if (eyebrow) eyebrow.style.transform = t(x, y, 1.17);
    if (title)   title.style.transform   = t(x, y, 1.82) + ' var(--title-post, )';
    if (lead)    lead.style.transform    = t(x, y, 2.47);
    if (actions) actions.style.transform = t(x, y, 3.12);
    if (meta)    meta.style.transform    = t(x, y, 3.64);
  }

  _applyRingsRotation() {
    const { ringOuter, ringMid, ringInner } = this.refs;
    if (ringOuter) {
      const deg = (this._t * 6.5) % 360;
      ringOuter.style.setProperty('--lia-rot-outer', `${deg}deg`);
    }
    if (ringMid) {
      const deg = (-this._t * 9.8) % 360;
      ringMid.style.setProperty('--lia-rot-mid', `${deg}deg`);
    }
    if (ringInner) {
      const deg = (this._t * 14.3) % 360;
      ringInner.style.setProperty('--lia-rot-inner', `${deg}deg`);
    }
  }

  _applyOrbiters() {
    const { orbiters } = this.refs;
    if (!orbiters || orbiters.length === 0) return;
    const TWO_PI = Math.PI * 2;
    const xN = this._cur.xN;
    const yN = this._cur.yN;

    for (let i = 0; i < orbiters.length; i++) {
      const el = orbiters[i];
      const p  = this._orbiters[i];
      if (!el || !p) continue;

      const theta = (this._t * p.speed + p.phase) % TWO_PI;
      const cx = Math.cos(theta) * p.rx;
      const cy = Math.sin(theta) * p.ry;

      // Aplicar 3D: rotar el punto por tiltX (alrededor de X) y tiltY (alrededor de Y)
      const radX = p.tiltX * Math.PI / 180;
      const radY = p.tiltY * Math.PI / 180;
      let px = cx;
      let py = cy;
      let pz = 0;
      // Rotate around X
      const y1 = py * Math.cos(radX) - pz * Math.sin(radX);
      const z1 = py * Math.sin(radX) + pz * Math.cos(radX);
      py = y1; pz = z1;
      // Rotate around Y
      const x2 = px * Math.cos(radY) + pz * Math.sin(radY);
      const z2 = -px * Math.sin(radY) + pz * Math.cos(radY);
      px = x2; pz = z2;

      // Pointer parallax por orbiter (escala por z de órbita)
      const parallaxK = 0.08 + (p.z / 22) * 0.14;
      px += xN * parallaxK * 9;
      py += yN * parallaxK * 6.5;

      // Profundidad del z-index final del orbiter
      const zFinal = p.z + pz * 0.6;

      // Scale de perspectiva (pseudo-Z scale)
      const perspScale = 1 + (zFinal / 120);
      const finalScale = p.size * perspScale;

      // Opacidad por profundidad (z positivo = más cerca → más opaco)
      const opacity = 0.68 + Math.max(0, zFinal) * 0.014;

      el.style.transform = `translate3d(calc(-50% + ${px}px), calc(-50% + ${py}px), ${zFinal}px) scale(${finalScale})`;
      el.style.opacity = String(Math.min(1, opacity));
      el.style.zIndex = String(Math.round(6 + zFinal));
    }
  }

  _applyHoverReactions() {
    const {
      core, coreShine, coreFlare,
      orb, auraCore, auraCorona, shell,
      ringOuter, ringMid, ringInner,
      title,
    } = this.refs;

    // Reacción combinada de CTAs
    const ctaP = this._hoverCur.ctaPrimary;
    const ctaS = this._hoverCur.ctaSecondary;

    // Stat reactions: cada stat activa una capa diferente
    const s0 = this._hoverCur.stat0;
    const s1 = this._hoverCur.stat1;
    const s2 = this._hoverCur.stat2;

    // --- Efectos en orb por stats ---
    if (orb) {
      // stat0 (Módulos activos) → bright orb
      const extraBright = 1 + s0 * 0.14;
      const extraSat     = 1 + s0 * 0.09;
      orb.style.filter = `blur(${1.5 + s0*0.8}px) brightness(${extraBright}) saturate(${extraSat})`;
    }

    // stat1 (Filosofía Humano+) → aura
    if (auraCore) {
      const scale = 1 + s1 * 0.04;
      auraCore.style.filter = `blur(${52 + s1*12}px) saturate(${1.12 + s1*0.14})`;
      auraCorona.style.transform = `translate3d(${(this._cur.xN*9)*1.2}px, ${(this._cur.yN*6.5)*0.9}px, -50px) scale(${scale + (ctaP+ctaS)*0.02})`;
    }

    // stat2 (Stack HTML·CSS·JS) → anillos + shell
    if (shell) {
      shell.style.filter = `brightness(${1 + s2*0.22})`;
    }
    if (ringOuter && s2) {
      ringOuter.style.filter = `drop-shadow(0 0 ${12 + s2*14}px rgba(124,58,237,${0.14 + s2*0.14}))`;
    }
    if (ringMid && s2) {
      ringMid.style.filter = `drop-shadow(0 0 ${9 + s2*12}px rgba(34,211,238,${0.11 + s2*0.12}))`;
    }
    if (ringInner && s2) {
      ringInner.style.filter = `drop-shadow(0 0 ${6.5 + s2*9}px rgba(255,0,225,${0.09 + s2*0.12}))`;
    }

    // CTA primary → core brilla más + shine se amplifica
    if (coreShine) {
      const k = 1 + ctaP * 0.35;
      coreShine.style.opacity = String(0.80 + ctaP * 0.06);
      coreShine.style.transform = `translateX(${ctaP*5.2}%) translateY(${ctaP*3.9}%) rotate(${30 + ctaP*6.5}deg) scale(${k})`;
    }
    if (coreFlare) {
      const baseOpacity = ctaP * 0.46 + ctaS * 0.22;
      coreFlare.style.opacity = String(baseOpacity);
      coreFlare.style.transform = `scale(${0.82 + baseOpacity * 0.48})`;
    }

    // Título: micro-resonancia con CTA primary (sub-perceptual)
    if (title) {
      const k = ctaP * 0.0078;
      title.style.setProperty('--title-post', ` scale(${1 + k})`);
    }
  }
}
