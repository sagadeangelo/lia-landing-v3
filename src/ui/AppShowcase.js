const STAYLO_STORE_URL = 'https://apps.microsoft.com/detail/9pjbzk9sf26h';

export const AppShowcase = {
  render() {
    return /* html */ `
      <section id="app-showcase" class="lia-section" aria-labelledby="app-showcase-title">
        <div class="lia-container">
          <div class="lia-grid-2">
            <div class="lia-stack lia-stack--lg">
              <div class="lia-eyebrow">LIA-Staylo</div>
              <h2 id="app-showcase-title" class="lia-h2">Tu historia. Tu universo. Tu forma de crear.</h2>
              <p class="lia-lead">
                Una experiencia de escritura asistida por IA diseñada para ayudarte a desarrollar
                tus historias sin perder tu propia voz.
              </p>
              <p class="lia-body lia-text-muted">
                ✨ La IA no crea por ti. Te impulsa a terminar tu historia.
              </p>
              <a href="${STAYLO_STORE_URL}" class="lia-body lia-text-muted"
                 style="font-size: 0.875rem; text-decoration: underline;"
                 target="_blank" rel="noopener noreferrer">
                🛍 Disponible en Microsoft Store
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
