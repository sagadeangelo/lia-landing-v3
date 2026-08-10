export const TrainSection = {
  render() {
    return /* html */ `
      <section id="lia-train" class="lia-section lia-train-hero" aria-labelledby="train-title" style="
        background: linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(124,58,237,0.06) 100%);
        border-top: 1px solid rgba(6,182,212,0.12);
        border-bottom: 1px solid rgba(6,182,212,0.12);
        position: relative;
        overflow: hidden;
      ">

        <!-- Fondo decorativo sutil -->
        <div aria-hidden="true" style="
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(6,182,212,0.05) 0%, transparent 70%);
        "></div>

        <div class="lia-container" style="position: relative; z-index: 1;">

          <!-- Badge superior -->
          <div style="text-align: center; margin-bottom: var(--space-6);">
            <span style="
              display: inline-flex; align-items: center; gap: var(--space-2);
              background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.25);
              border-radius: 999px; padding: 6px 18px;
              font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em;
              color: var(--accent-primary); text-transform: uppercase;
            ">
              ⚡ LIA Train — Preparación EGEL
            </span>
          </div>

          <!-- Headline principal -->
          <div style="text-align: center; max-width: 720px; margin: 0 auto var(--space-8);">
            <h2 id="train-title" class="lia-h2" style="margin-bottom: var(--space-4); font-size: clamp(2rem, 5vw, 3.25rem);">
              ¿Pasarías tu EGEL <span style="color: var(--accent-primary);">hoy</span>?
            </h2>
            <p class="lia-lead" style="margin-bottom: var(--space-6); color: var(--text-muted);">
              Simulador gratuito basado en el examen real CENEVAL.<br>
              7 carreras · 120 reactivos · Temporizador oficial · Diagnóstico por área.
            </p>

            <!-- CTAs -->
            <div style="display: flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap; margin-bottom: var(--space-8);">
              <a href="/train" id="btn-train-hero" class="lia-btn lia-btn--primary" style="font-size: 1.05rem; padding: 14px 32px;">
                🎓 Descubre si pasarías hoy
              </a>
              <a href="#guias" id="btn-guias-train" class="lia-btn lia-btn--secondary" style="font-size: 1.05rem; padding: 14px 32px;">
                📚 Ver guías EGEL
              </a>
            </div>
          </div>

          <!-- Grid de métricas + carreras -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4); max-width: 900px; margin: 0 auto;">

            <!-- Card: Métricas -->
            <div style="
              background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
              border-radius: var(--radius-lg); padding: var(--space-6);
            ">
              <div style="font-size: 1.5rem; margin-bottom: var(--space-3);">📊</div>
              <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-4);">Condiciones reales</h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--space-2);">
                <li style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-primary); font-weight: 700;">✔</span> 120 reactivos por examen
                </li>
                <li style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-primary); font-weight: 700;">✔</span> Temporizador oficial: 120 minutos
                </li>
                <li style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-primary); font-weight: 700;">✔</span> Dificultad progresiva adaptativa
                </li>
                <li style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-primary); font-weight: 700;">✔</span> Resultados por área temática
                </li>
                <li style="display: flex; align-items: center; gap: var(--space-2); font-size: 0.9rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-primary); font-weight: 700;">✔</span> Sin registro requerido
                </li>
              </ul>
            </div>

            <!-- Card: Carreras -->
            <div style="
              background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
              border-radius: var(--radius-lg); padding: var(--space-6);
            ">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-4);">
                <div>
                  <div style="font-size: 1.5rem; margin-bottom: var(--space-1);">🎓</div>
                  <h3 style="font-size: 1rem; font-weight: 700; color: var(--text-primary);">7 carreras disponibles</h3>
                </div>
                <span style="
                  background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3);
                  color: #10B981; border-radius: 999px; padding: 3px 12px;
                  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;
                ">GRATIS</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${[
                  { name: 'Sistemas / TI',       color: '#3B82F6' },
                  { name: 'Administración',       color: '#10B981' },
                  { name: 'Derecho',              color: '#F59E0B' },
                  { name: 'Contaduría',           color: '#8B5CF6' },
                  { name: 'Ing. Industrial',      color: '#06B6D4' },
                  { name: 'Psicología',           color: '#EC4899' },
                  { name: 'Enfermería',           color: '#EF4444' },
                ].map(c => `
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: ${c.color}; flex-shrink: 0;"></div>
                    <span style="font-size: 0.875rem; color: var(--text-secondary);">${c.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>

          </div><!-- /grid -->

        </div>
      </section>
    `;
  }
};
