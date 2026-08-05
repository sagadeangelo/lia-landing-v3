export const TrainSection = {
  render() {
    return /* html */ `
      <section id="lia-train" class="lia-section lia-train" aria-labelledby="train-title">
        <div class="lia-container">
          <!-- Product Hero -->
          <div class="lia-centered" style="margin-bottom: var(--space-4xl); padding: var(--space-4xl) 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
            <div class="lia-eyebrow" style="color: var(--accent-primary); letter-spacing: 0.1em; font-weight: 600;">LIA TRAIN</div>
            <h2 id="train-title" class="lia-h1" style="margin-bottom: var(--space-6); font-size: clamp(2.5rem, 5vw, 4.5rem); max-width: 800px; margin-left: auto; margin-right: auto; line-height: 1.1;">
              Aquí es donde aseguras tu futuro profesional.
            </h2>
            <p class="lia-lead" style="max-width: 600px; margin: 0 auto var(--space-8) auto; color: var(--text-muted); font-size: 1.25rem;">
              El ecosistema de preparación EGEL más avanzado. Simuladores en tiempo real, guías estructuradas y análisis de precisión. No dejes tu título al azar.
            </p>
            <div class="lia-stack lia-stack--sm" style="justify-content: center;">
              <a href="#comprar" class="lia-btn lia-btn--primary" style="font-size: 1.1rem; padding: 1rem 2rem; border-radius: 50px; font-weight: 600;">Comprar ahora</a>
            </div>
          </div>
          
          <!-- Features Elegantes -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-8); margin-bottom: var(--space-4xl);">
            
            <div style="padding: var(--space-6); background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.05);">
              <h3 class="lia-h4" style="margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2);">
                <span style="color: var(--accent-primary);">⚡</span> Simulador
              </h3>
              <p class="lia-body lia-text-muted">Mide tus conocimientos bajo condiciones reales de examen. Descubre tu puntaje antes del gran día.</p>
            </div>

            <div style="padding: var(--space-6); background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.05);">
              <h3 class="lia-h4" style="margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2);">
                <span style="color: var(--accent-primary);">📊</span> Resultados
              </h3>
              <p class="lia-body lia-text-muted">Reportes de precisión por área. Identifica exactamente qué temas debes repasar para aprobar.</p>
            </div>

            <div style="padding: var(--space-6); background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.05);">
              <h3 class="lia-h4" style="margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2);">
                <span style="color: var(--accent-primary);">📖</span> Guía
              </h3>
              <p class="lia-body lia-text-muted">Temarios 100% actualizados y bibliografía estructurada para tu carrera. Todo en un solo lugar.</p>
            </div>

            <div style="padding: var(--space-6); background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.05);">
              <h3 class="lia-h4" style="margin-bottom: var(--space-4); display: flex; align-items: center; gap: var(--space-2);">
                <span style="color: var(--accent-primary);">🏆</span> Casos de Éxito
              </h3>
              <p class="lia-body lia-text-muted">Únete a cientos de estudiantes que ya aseguraron su título universitario entrenando con LIA.</p>
            </div>

          </div>
          
          <div style="text-align: center; margin-top: var(--space-4xl);">
             <a href="#top" class="lia-body" style="color: var(--text-muted); text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 4px; transition: color 0.2s ease;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                Volver al inicio
             </a>
          </div>
        </div>
      </section>
    `;
  }
};
