export const AppShowcase = {
  render() {
    return /* html */ `
      <section class="lia-section" aria-labelledby="showcase-title">
        <div class="lia-container" style="text-align: center;">
          <h2 id="showcase-title" class="lia-visually-hidden">LIA Staylo App</h2>
          <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-subtle); box-shadow: 0 15px 40px rgba(0,0,0,0.4); max-width: 900px; margin: 0 auto; background: #000;">
            <video width="100%" controls poster="/public/apps/lia-staylo/media/lia-staylo-poster.png" style="display: block;">
              <source src="/public/apps/lia-staylo/media/lia-staylo-trailer.mp4" type="video/mp4">
              Tu navegador no soporta el tag de video.
            </video>
          </div>
          <p class="lia-body" style="color: var(--accent-secondary); margin-top: var(--space-4); font-weight: 600;">✨ La IA no crea por ti. Te impulsa a terminar tu historia.</p>
          <a href="#" class="lia-body lia-text-muted" style="font-size: 0.875rem; text-decoration: underline;">Disponible ahora en Microsoft Store</a>
        </div>
      </section>
    `;
  }
};
