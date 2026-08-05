export const Library = {
  render() {
    return /* html */ `
      <section id="biblioteca" class="lia-section lia-library" aria-labelledby="library-title">
        <div class="lia-container">
          <div class="lia-section__header">
            <h2 id="library-title" class="lia-h2">Explora historias creadas dentro de LIA</h2>
            <p class="lia-lead">Historias reales, creadas por autores. LIA solo acelera el proceso.</p>
          </div>

          <div class="lia-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-6);">
            <!-- Libro 1 -->
            <article class="lia-card lia-card--glow">
              <img src="/public/images/LIBRO1_PORTADA_PSD.png" alt="Ángelo & El Proyecto Ditóx" style="width: 100%; border-radius: var(--radius-md); margin-bottom: var(--space-4);" />
              <div class="lia-card__content">
                <div style="display: flex; gap: var(--space-2); margin-bottom: var(--space-3);">
                  <span class="lia-chip" style="font-size: 0.75rem;">Sci-Fi / Thriller</span>
                </div>
                <h3 class="lia-h4">Ángelo & El Proyecto Ditóx</h3>
                <p class="lia-body">Un thriller de ciencia ficción donde Ángelo enfrenta una conspiración global.</p>
              </div>
            </article>

            <!-- Libro 2 -->
            <article class="lia-card lia-card--glow">
              <img src="/public/images/LIBRO2_PORTADA_PSD.png" alt="Ángelo & Los Gadianes" style="width: 100%; border-radius: var(--radius-md); margin-bottom: var(--space-4);" />
              <div class="lia-card__content">
                <div style="display: flex; gap: var(--space-2); margin-bottom: var(--space-3);">
                  <span class="lia-chip" style="font-size: 0.75rem;">Fantasía épica</span>
                </div>
                <h3 class="lia-h4">Ángelo & Los Gadianes</h3>
                <p class="lia-body">Una guerra secreta entre razas alienígenas y humanos, el legado ancestral.</p>
              </div>
            </article>

            <!-- Libro 3 -->
            <article class="lia-card lia-card--glow">
              <img src="/public/images/LIBRO3_PORTADA_PSD.png" alt="Ángelo & Los Artefactos Misteriosos" style="width: 100%; border-radius: var(--radius-md); margin-bottom: var(--space-4);" />
              <div class="lia-card__content">
                <div style="display: flex; gap: var(--space-2); margin-bottom: var(--space-3);">
                  <span class="lia-chip" style="font-size: 0.75rem;">Aventura cósmica</span>
                </div>
                <h3 class="lia-h4">Ángelo & Los Artefactos Misteriosos</h3>
                <p class="lia-body">Una travesía peligrosa en busca de artefactos cósmicos que cambiarán el planeta.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }
};
