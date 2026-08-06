/**
 * LIA OS — Hero Module
 * Sprint 2: Experiencia sensorial. Copy intacto.
 *
 * Capas añadidas (markup decorativo — ARIA hidden):
 *   · Intro veil (fade from black · revelación cinemática 2.2s)
 *   · Halo exterior volumétrico dual (aura + corona)
 *   · Orb atmosférico + grano interno + specular envmap
 *   · Glints especulares múltiples (4 puntos de luz errantes)
 *   · Anillos (3): exterior horario, medio anti-horario, interno horario lento
 *   · Orbiters (6 satélites): cada uno con su propia órbita y velocidad
 *   · Campo de energía exterior (energy shell · pulsa con respiración)
 *   · Núcleo / chispa central (cerca del usuario · Z+)
 *   · Conexión lumínica (tether): filamento que conecta fondo ↔ núcleo
 *   · Spotlight radial que sigue al puntero (HeroFX controla transform+opacity)
 *
 * Copy — INTACTO. Ninguna línea de texto nueva.
 */
export const Hero = {
  /**
   * Devuelve el HTML semántico de la sección Hero.
   * @returns {string}
   */
  render() {
    return /* html */ `
      <section id="lia-hero" class="lia-section lia-section--hero lia-hero" aria-labelledby="lia-hero-title">

        <!-- INTRO VEIL: capa de revelación cinemática (negro → transparente) -->
        <div class="lia-hero__veil" aria-hidden="true"></div>

        <div class="lia-container">
          <div class="lia-hero__grid">

            <!-- COLUMNA IZQUIERDA: Copy + CTAs — COPY 100% INTACTO -->
            <div class="lia-hero__content">

              <div class="lia-hero__badge" role="status" aria-live="polite">
                <span class="lia-hero__pulse" aria-hidden="true"></span>
                <span class="lia-hero__badge-label">Tu creatividad primero. La tecnología solo acelera el camino.</span>
              </div>

              <p class="lia-eyebrow lia-hero__eyebrow">Plataforma para Autores Independientes</p>

              <h1 id="lia-hero-title" class="lia-hero__title lia-text-balance">
                Escribe tu libro.<br>
                <em>Publícalo sin fricción. Sin perder tu voz.</em>
              </h1>

              <p class="lia-lead lia-hero__lead lia-text-pretty">
                LIA potencia tu proceso creativo — sin reemplazar tu voz como autor. Escribe a la velocidad del pensamiento.
              </p>

              <div class="lia-hero__actions">
                <a href="#early-access" class="lia-btn lia-btn--primary" data-lia-action="explore">
                  <span>⭐ Acceso anticipado</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#biblioteca" class="lia-btn lia-btn--secondary" data-lia-action="philosophy">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4M12 16h.01"/>
                  </svg>
                  <span>📚 Explorar biblioteca</span>
                </a>
              </div>

              <dl class="lia-hero__meta" aria-label="Métricas del ecosistema">
                <div class="lia-hero__stat" data-stat="0">
                  <dt class="lia-hero__stat-label">Módulos activos</dt>
                  <dd class="lia-hero__stat-value">06</dd>
                </div>
                <div class="lia-hero__stat" data-stat="1">
                  <dt class="lia-hero__stat-label">Filosofía</dt>
                  <dd class="lia-hero__stat-value">Humano+</dd>
                </div>
                <div class="lia-hero__stat" data-stat="2">
                  <dt class="lia-hero__stat-label">Stack</dt>
                  <dd class="lia-hero__stat-value">HTML·CSS·JS</dd>
                </div>
              </dl>

            </div>

            <!-- COLUMNA DERECHA: Ecosistema VIVO -->
            <div class="lia-hero__visual" aria-hidden="true">

              <!-- Capa 0 (más lejana): halo exterior volumétrico dual -->
              <div class="lia-hero__aura">
                <div class="lia-hero__aura-core"></div>
                <div class="lia-hero__aura-corona"></div>
              </div>

              <!-- Capa 0.5: campo de energía exterior (shell) -->
              <div class="lia-hero__shell"></div>

              <!-- Capa 1: Tether / conexión lumínica desde fondo hasta núcleo -->
              <div class="lia-hero__tether"></div>

              <!-- Capa 2: Orb (atmosfera principal) -->
              <div class="lia-hero__orb">
                <div class="lia-hero__orb-envmap"></div>
                <div class="lia-hero__grain"></div>
                <!-- 4 glints especulares errantes -->
                <div class="lia-hero__glint lia-hero__glint--a"></div>
                <div class="lia-hero__glint lia-hero__glint--b"></div>
                <div class="lia-hero__glint lia-hero__glint--c"></div>
                <div class="lia-hero__glint lia-hero__glint--d"></div>
              </div>

              <!-- Capa 3: Anillos (3) con profundidades Z diferenciadas -->
              <div class="lia-hero__ring lia-hero__ring--outer"></div>
              <div class="lia-hero__ring lia-hero__ring--mid"></div>
              <div class="lia-hero__ring lia-hero__ring--inner"></div>

              <!-- Capa 4: Orbiters (6 satélites) — órbitas elípticas individuales -->
              <div class="lia-hero__orbiters">
                <span class="lia-hero__orbiter lia-hero__orbiter--1"></span>
                <span class="lia-hero__orbiter lia-hero__orbiter--2"></span>
                <span class="lia-hero__orbiter lia-hero__orbiter--3"></span>
                <span class="lia-hero__orbiter lia-hero__orbiter--4"></span>
                <span class="lia-hero__orbiter lia-hero__orbiter--5"></span>
                <span class="lia-hero__orbiter lia-hero__orbiter--6"></span>
              </div>

              <!-- Capa 5 (más cercana): Core / chispa central → Z máxima -->
              <div class="lia-hero__core">
                <div class="lia-hero__core-shine"></div>
                <div class="lia-hero__core-flare"></div>
              </div>

              <!-- Capa 6: Spotlight radial que sigue al puntero -->
              <div class="lia-hero__spotlight"></div>

            </div>

          </div>
        </div>
      </section>
    `;
  },
};
