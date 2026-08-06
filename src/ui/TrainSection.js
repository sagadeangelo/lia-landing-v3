export const TrainSection = {
  render() {
    return /* html */ `
      <section id="lia-train" class="lia-section lia-train" aria-labelledby="train-title">
        <div class="lia-container">
          <div class="lia-grid-2">
            <div class="lia-train__content">
              <div class="lia-eyebrow">⚡ Nuevo en el ecosistema LIA</div>
              <h2 id="train-title" class="lia-h2" style="margin-bottom: var(--space-4);">¿Pasarías tu examen profesional hoy?</h2>
              <p class="lia-lead" style="margin-bottom: var(--space-4);">
                Evalúa tu nivel real con un simulador basado en el EGEL.<br>
                Sin filtros. Sin ayudas. Como el examen de verdad.
              </p>
              <ul class="lia-list" style="margin-bottom: var(--space-6); list-style: none; padding: 0;">
                <li style="margin-bottom: var(--space-2);">✔ Sin registro</li>
                <li style="margin-bottom: var(--space-2);">✔ Resultado inmediato</li>
                <li style="margin-bottom: var(--space-2);">✔ Basado en examen real</li>
              </ul>
              <div class="lia-stack lia-stack--sm" style="justify-content: center;">
                <a href="https://lia-tech.com/train" class="lia-btn lia-btn--primary" target="_blank" rel="noopener noreferrer">🎓 Descubre si pasarías hoy</a>
              </div>
            </div>
            <div class="lia-train__visual" style="background: var(--surface-2); padding: var(--space-8); border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-subtle);">
              <div style="font-size: 3rem; margin-bottom: var(--space-4);">⚡</div>
              <h3 class="lia-h4">Tu reto de hoy</h3>
              <p class="lia-body lia-text-muted">Resultados en menos de 60 segundos</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
