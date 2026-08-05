export const AppShowcase = {
  render() {
    const MICROSOFT_STORE_URL = '#';
    
    return /* html */ `
      <section id="staylo" class="lia-section" aria-labelledby="showcase-title">
        <div class="lia-container" style="text-align: center;">
          <h2 id="showcase-title" class="lia-visually-hidden">LIA Staylo App</h2>
          
          <div class="lia-card lia-card--glow" style="padding: 0; border-radius: var(--radius-lg); overflow: hidden; max-width: 1024px; margin: 0 auto; background: rgba(255,255,255,0.03); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.05); position: relative; box-shadow: 0 24px 48px rgba(0,0,0,0.4);">
            <video width="100%" controls preload="metadata" style="display: block; aspect-ratio: 16/9; object-fit: cover;">
              <source src="/apps/lia-staylo/media/lia-staylo-trailer.mp4" type="video/mp4">
              Tu navegador no soporta el tag de video.
            </video>
          </div>
          
          <div style="margin-top: var(--space-8);">
            <p class="lia-h3" style="color: var(--accent-secondary); margin-bottom: var(--space-4);">✨ La IA no crea por ti. Te impulsa a terminar tu historia.</p>
            <div style="display: inline-flex; flex-direction: column; align-items: center; gap: var(--space-4); background: rgba(255,255,255,0.02); padding: var(--space-6) var(--space-8); border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.04);">
              <p class="lia-lead" style="color: var(--text-primary); font-weight: 500; letter-spacing: 0.02em;">Disponible en Microsoft Store</p>
              <a href="${MICROSOFT_STORE_URL}" class="lia-btn lia-btn--primary" style="min-width: 200px; font-weight: 600; font-size: 1.1rem; padding: 0.8rem 1.5rem; justify-content: center;">Descargar</a>
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
