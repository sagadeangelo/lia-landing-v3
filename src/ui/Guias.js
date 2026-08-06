export const Guias = {
  render() {
    return /* html */ `
      <section id="guias" class="lia-section" aria-labelledby="guias-title" style="background: rgba(255,255,255,0.01);">
        <div class="lia-container">
          <div class="lia-grid-2">
            <div class="lia-card lia-card--glow" style="padding: var(--space-6); text-align: center;">
              <div style="font-size: 4rem; margin-bottom: var(--space-4);">📚</div>
              <h3 class="lia-h4">Guías Premium</h3>
              <p class="lia-body lia-text-muted">Desarrolladas por expertos EGEL</p>
            </div>
            <div class="lia-stack lia-stack--lg">
              <div class="lia-eyebrow">Paso 2: Prepárate</div>
              <h2 id="guias-title" class="lia-h2">Guías de Estudio LIA</h2>
              <p class="lia-lead">Una vez que conoces tus debilidades, atácalas con el material de estudio más preciso del mercado.</p>
              <ul class="lia-list" style="list-style: none; padding: 0;">
                <li style="margin-bottom: var(--space-2); display: flex; gap: var(--space-2);"><span style="color: var(--accent-secondary)">✔</span> Resúmenes ejecutivos</li>
                <li style="margin-bottom: var(--space-2); display: flex; gap: var(--space-2);"><span style="color: var(--accent-secondary)">✔</span> Ejercicios resueltos paso a paso</li>
                <li style="margin-bottom: var(--space-2); display: flex; gap: var(--space-2);"><span style="color: var(--accent-secondary)">✔</span> Acceso offline y multiplataforma</li>
              </ul>
              <div class="lia-actions">
                <a href="#" class="lia-btn lia-btn--secondary" data-modal data-modal-title="Guías de Estudio" data-modal-desc="Las guías de estudio estarán disponibles próximamente." data-modal-icon="📖">📖 Adquirir Guía</a>
              </div>
            </div>
          </div>
          <div style="text-align: center; margin-top: var(--space-2xl);">
             <a href="#ecosistema" class="lia-body" style="color: var(--text-muted); text-decoration: underline; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 4px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                Volver al ecosistema
             </a>
          </div>
        </div>
      </section>
    `;
  }
};
