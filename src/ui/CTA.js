export const CTA = {
  render() {
    return /* html */ `
      <section class="lia-section" aria-labelledby="cta-title">
        <div class="lia-container">
          <div style="background: var(--surface-2); padding: var(--space-8); border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-subtle);">
            <p class="lia-body" style="color: var(--accent-secondary); margin-bottom: var(--space-4); font-weight: 700;">💬 La IA no crea por ti. Te impulsa a terminar tu historia.</p>
            <h2 id="cta-title" class="lia-h2" style="margin-bottom: var(--space-4);">¿Listo para escribir tu historia a tu manera?</h2>
            <p class="lia-lead" style="margin-bottom: var(--space-6);">LIA no escribe por ti. Te da velocidad, estructura y claridad para terminar tu libro.</p>
            <div class="lia-actions" style="justify-content: center;">
              <a href="#como-funciona" class="lia-btn lia-btn--primary">Crear mi libro ahora</a>
              <a href="mailto:contacto@lasagadeangelo.com.mx" class="lia-btn lia-btn--secondary">Contactar soporte</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
