export const Features = {
  render() {
    return /* html */ `
      <section id="como-funciona" class="lia-section lia-features" aria-labelledby="features-title">
        <div class="lia-container">
          <div class="lia-section__header">
            <h2 id="features-title" class="lia-h2">Tu historia. Tu voz. Más rápido.</h2>
            <p class="lia-lead">Escribe, estructura y prepara tu libro para publicar manteniendo el control total. Menos fricción. Más creación.</p>
          </div>

          <div class="lia-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4);">
            <div class="lia-card lia-card--glow">
              <div class="lia-card__icon">✍️</div>
              <h3 class="lia-h4">Escribe a la velocidad del pensamiento</h3>
              <p class="lia-body">Sin bloqueos. Sin fricción. Solo avanzas.</p>
            </div>
            <div class="lia-card lia-card--glow">
              <div class="lia-card__icon">📚</div>
              <h3 class="lia-h4">Da forma a tu historia</h3>
              <p class="lia-body">Ordena tus ideas sin perder el control creativo.</p>
            </div>
            <div class="lia-card lia-card--glow">
              <div class="lia-card__icon">🎨</div>
              <h3 class="lia-h4">Portadas que atrapan miradas</h3>
              <p class="lia-body">Diseña tu libro sin depender de nadie.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
