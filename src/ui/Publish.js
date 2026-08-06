export const Publish = {
  render() {
    return /* html */ `
      <section id="publish" class="lia-section" aria-labelledby="publish-title">
        <div class="lia-container">
          <div class="lia-grid-2">
            <div class="lia-stack lia-stack--lg">
              <div class="lia-eyebrow">LIA Publish</div>
              <h2 id="publish-title" class="lia-h2">Publica sin fricción</h2>
              <p class="lia-lead">Llevamos tu obra maestra desde el manuscrito hasta las manos de tus lectores, en digital y papel.</p>
              <ul class="lia-list" style="list-style: none; padding: 0;">
                <li style="margin-bottom: var(--space-2); display: flex; gap: var(--space-2);"><span style="color: var(--accent-primary)">✔</span> Corrección de estilo con IA</li>
                <li style="margin-bottom: var(--space-2); display: flex; gap: var(--space-2);"><span style="color: var(--accent-primary)">✔</span> Maquetación KDP (Amazon)</li>
                <li style="margin-bottom: var(--space-2); display: flex; gap: var(--space-2);"><span style="color: var(--accent-primary)">✔</span> Diseño de portadas y branding</li>
              </ul>
              <div class="lia-actions">
                <a href="#" class="lia-btn lia-btn--primary" data-modal data-modal-title="Servicios Editoriales" data-modal-desc="Los servicios editoriales de LIA Publish estarán disponibles próximamente." data-modal-icon="🚀">🚀 Ver Servicios Editoriales</a>
              </div>
            </div>
            <div class="lia-card lia-card--glow" style="padding: var(--space-6); text-align: center;">
              <div style="font-size: 4rem; margin-bottom: var(--space-4);">🚀</div>
              <h3 class="lia-h4">Tu legado</h3>
              <p class="lia-body lia-text-muted">Distribución global instantánea</p>
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
