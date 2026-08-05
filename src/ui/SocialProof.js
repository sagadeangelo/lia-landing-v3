export const SocialProof = {
  render() {
    return /* html */ `
      <section class="lia-section lia-social-proof" aria-labelledby="proof-title">
        <div class="lia-container">
          <div class="lia-section__header">
            <h2 id="proof-title" class="lia-h2">Resultados reales creados con LIA</h2>
            <p class="lia-lead">La IA no crea por ti. Te impulsa a terminar lo que empezaste.</p>
          </div>
          <div class="lia-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-6); text-align: center;">
            <div class="lia-card lia-card--glow" style="padding: var(--space-6);">
              <span class="lia-chip" style="margin-bottom: var(--space-4);">Publicado</span>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--accent-primary); margin-bottom: var(--space-2);">24h</div>
              <h4 class="lia-h4">Publicado en Amazon</h4>
              <p class="lia-body">De manuscrito final a estar disponible en la tienda líder mundial en menos de un día.</p>
            </div>
            <div class="lia-card lia-card--glow" style="padding: var(--space-6);">
              <span class="lia-chip" style="margin-bottom: var(--space-4);">Resultado destacado</span>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--accent-secondary); margin-bottom: var(--space-2);">+50,000</div>
              <h4 class="lia-h4">Palabras escritas</h4>
              <p class="lia-body">Productividad y claridad absoluta. LIA potencia tu capacidad de enfoque.</p>
            </div>
            <div class="lia-card lia-card--glow" style="padding: var(--space-6);">
              <span class="lia-chip" style="margin-bottom: var(--space-4);">Caso real</span>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--accent-primary); margin-bottom: var(--space-2);">1 Sesión</div>
              <h4 class="lia-h4">De idea a manuscrito</h4>
              <p class="lia-body">Estructura, capítulos y maquetación listos para exportar. Avance real en tiempo récord.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
