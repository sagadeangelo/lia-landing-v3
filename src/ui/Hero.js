/**
 * LIA OS — Hero Module
 * Sprint 2: Experiencia sensorial.
 *
 * El Hero contiene:
 * - Copy principal
 * - CTAs
 * - Banner rotativo del ecosistema
 * - Visual / orb
 */

import { EcosystemBanner } from './EcosystemBanner.js';

export const Hero = {
  /**
   * Devuelve el HTML semántico del contenido del Hero.
   *
   * @returns {string}
   */
  render() {
    return /* html */ `
      <!-- COLUMNA IZQUIERDA: Copy + CTAs + Banner -->
      <div class="lia-hero__content">

        <div class="lia-hero__badge" role="status" aria-live="polite">
          <span
            class="lia-hero__pulse"
            aria-hidden="true"
          ></span>

          <span class="lia-hero__badge-label">
            Tu creatividad primero. La tecnología solo acelera el camino.
          </span>
        </div>

        <p class="lia-eyebrow lia-hero__eyebrow">
          Plataforma para Autores Independientes
        </p>

        <h1
          id="lia-hero-title"
          class="lia-hero__title lia-text-balance"
        >
          Escribe tu libro.<br>
          <em>Publícalo sin fricción. Sin perder tu voz.</em>
        </h1>

        <p class="lia-lead lia-hero__lead lia-text-pretty">
          LIA potencia tu proceso creativo — sin reemplazar tu voz como autor.
          Escribe a la velocidad del pensamiento.
        </p>

        <div class="lia-hero__actions">

          <a
            href="#early-access"
            class="lia-btn lia-btn--primary"
            data-lia-action="explore"
          >
            <span>⭐ Acceso anticipado</span>

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>

          <a
            href="#biblioteca"
            class="lia-btn lia-btn--secondary"
            data-lia-action="philosophy"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <path d="M12 8v4M12 16h.01"/>
            </svg>

            <span>📚 Explorar biblioteca</span>
          </a>

        </div>

        <!-- BANNER ROTATIVO DEL ECOSISTEMA -->
        <div class="lia-hero__ecosystem-slot">
          ${EcosystemBanner.render()}
        </div>

      </div>

      <!-- COLUMNA DERECHA: Ecosistema VIVO -->
      <div
        class="lia-hero__visual"
        aria-hidden="true"
      >

        <!-- Capa 0: halo exterior -->
        <div class="lia-hero__aura">

          <div class="lia-hero__aura-core"></div>

          <div class="lia-hero__aura-corona"></div>

        </div>

        <!-- Campo de energía exterior -->
        <div class="lia-hero__shell"></div>

        <!-- Conexión lumínica -->
        <div class="lia-hero__tether"></div>

        <!-- Orb principal -->
        <div class="lia-hero__orb">

          <div class="lia-hero__orb-envmap"></div>

          <div class="lia-hero__grain"></div>

          <div class="lia-hero__glint lia-hero__glint--a"></div>
          <div class="lia-hero__glint lia-hero__glint--b"></div>
          <div class="lia-hero__glint lia-hero__glint--c"></div>
          <div class="lia-hero__glint lia-hero__glint--d"></div>

        </div>

        <!-- Anillos -->
        <div class="lia-hero__ring lia-hero__ring--outer"></div>
        <div class="lia-hero__ring lia-hero__ring--mid"></div>
        <div class="lia-hero__ring lia-hero__ring--inner"></div>

        <!-- Orbiters -->
        <div class="lia-hero__orbiters">

          <span
            class="lia-hero__orbiter lia-hero__orbiter--1"
          ></span>

          <span
            class="lia-hero__orbiter lia-hero__orbiter--2"
          ></span>

          <span
            class="lia-hero__orbiter lia-hero__orbiter--3"
          ></span>

          <span
            class="lia-hero__orbiter lia-hero__orbiter--4"
          ></span>

          <span
            class="lia-hero__orbiter lia-hero__orbiter--5"
          ></span>

          <span
            class="lia-hero__orbiter lia-hero__orbiter--6"
          ></span>

        </div>

        <!-- Core -->
        <div class="lia-hero__core">

          <div class="lia-hero__core-shine"></div>

          <div class="lia-hero__core-flare"></div>

        </div>

        <!-- Spotlight -->
        <div class="lia-hero__spotlight"></div>

      </div>
    `;
  },
};