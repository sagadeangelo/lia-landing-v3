export const Library = {
  render() {
    return /* html */ `
      <section id="biblioteca" class="lia-section lia-library" aria-labelledby="library-title">
        <style>
          .lia-book-container {
            width: 100%;
            max-width: 220px;
            margin-bottom: var(--space-6);
            perspective: 1200px;
          }
          .lia-book-cover {
            width: 100%;
            height: auto;
            border-radius: 4px 8px 8px 4px;
            box-shadow: 
              inset 4px 0 10px rgba(0,0,0,0.1),
              inset -1px 0 2px rgba(255,255,255,0.3),
              5px 5px 15px rgba(0,0,0,0.3),
              15px 15px 30px rgba(0,0,0,0.1);
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            transform-origin: center left;
            transform: rotateY(-15deg);
          }
          .lia-book-container:hover .lia-book-cover {
            transform: rotateY(-5deg) scale(1.05);
            box-shadow: 
              inset 4px 0 10px rgba(0,0,0,0.1),
              inset -1px 0 2px rgba(255,255,255,0.4),
              8px 12px 25px rgba(0,0,0,0.4),
              20px 25px 40px rgba(0,0,0,0.2);
          }
          .lia-library-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: var(--space-6);
            background: rgba(255,255,255,0.01);
            border: 1px solid rgba(255,255,255,0.03);
            border-radius: var(--radius-lg);
            transition: background 0.3s ease, border-color 0.3s ease;
          }
          .lia-library-card:hover {
            background: rgba(255,255,255,0.03);
            border-color: rgba(255,255,255,0.08);
          }
        </style>
        <div class="lia-container">
          <div class="lia-centered" style="margin-bottom: var(--space-4xl);">
            <div class="lia-eyebrow">La Saga Original</div>
            <h2 id="library-title" class="lia-h2" style="margin-bottom: var(--space-4);">El origen de LIA</h2>
            <p class="lia-lead" style="max-width: 600px;">
              Antes de ser un ecosistema tecnológico, LIA nació como una saga de novelas de ciencia ficción. Conoce la historia que lo empezó todo.
            </p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-8);">
            
            <!-- Libro 1 -->
            <div class="lia-library-card lia-card--glow">
              <div class="lia-book-container">
                <img src="/images/LIBRO1_PORTADA_PSD.png" alt="Ángelo & El Proyecto Ditóx" class="lia-book-cover" loading="lazy" />
              </div>
              <h3 class="lia-h4" style="margin-bottom: var(--space-2);">Ángelo & El Proyecto Ditóx</h3>
              <p class="lia-body lia-text-muted" style="margin-bottom: var(--space-6); flex-grow: 1;">El inicio de la aventura en un mundo dominado por megacorporaciones y tecnología prohibida.</p>
              <div class="lia-stack lia-stack--sm" style="width: 100%;">
                <a href="#" class="lia-btn lia-btn--sm lia-btn--primary" data-modal data-modal-title="Amazon Kindle" data-modal-desc="📚 Próximamente disponible en Amazon Kindle." data-modal-icon="📚">📚 Comprar Kindle</a>
                <a href="#" class="lia-btn lia-btn--sm lia-btn--secondary" data-modal data-modal-title="Amazon (Pasta Blanda)" data-modal-desc="Próximamente disponible en formato físico." data-modal-icon="📚">📚 Comprar Pasta Blanda</a>
                <a href="#" class="lia-body" style="font-size: 0.85rem; text-decoration: none; color: var(--text-muted); transition: color 0.2s ease; margin-top: var(--space-2); display: inline-block;" data-modal data-modal-title="Muestra Gratuita" data-modal-desc="El primer capítulo estará disponible muy pronto." data-modal-icon="📖">📖 Leer muestra</a>
              </div>
            </div>

            <!-- Libro 2 -->
            <div class="lia-library-card lia-card--glow">
              <div class="lia-book-container">
                <img src="/images/LIBRO2_PORTADA_PSD.png" alt="Ángelo & Los Guardianes de la Historia" class="lia-book-cover" loading="lazy" />
              </div>
              <h3 class="lia-h4" style="margin-bottom: var(--space-2);">Ángelo & Los Guardianes</h3>
              <p class="lia-body lia-text-muted" style="margin-bottom: var(--space-6); flex-grow: 1;">La continuación que expande el universo hacia secretos ancestrales y nuevas amenazas.</p>
              <div class="lia-stack lia-stack--sm" style="width: 100%;">
                <a href="#" class="lia-btn lia-btn--sm lia-btn--primary" data-modal data-modal-title="Amazon Kindle" data-modal-desc="📚 Próximamente disponible en Amazon Kindle." data-modal-icon="📚">📚 Comprar Kindle</a>
                <a href="#" class="lia-btn lia-btn--sm lia-btn--secondary" data-modal data-modal-title="Amazon (Pasta Blanda)" data-modal-desc="Próximamente disponible en formato físico." data-modal-icon="📚">📚 Comprar Pasta Blanda</a>
                <a href="#" class="lia-body" style="font-size: 0.85rem; text-decoration: none; color: var(--text-muted); transition: color 0.2s ease; margin-top: var(--space-2); display: inline-block;" data-modal data-modal-title="Muestra Gratuita" data-modal-desc="El primer capítulo estará disponible muy pronto." data-modal-icon="📖">📖 Leer muestra</a>
              </div>
            </div>

            <!-- Libro 3 -->
            <div class="lia-library-card lia-card--glow">
              <div class="lia-book-container">
                <img src="/images/LIBRO3_PORTADA_PSD.png" alt="Ángelo & Los Artefactos Misteriosos" class="lia-book-cover" loading="lazy" />
              </div>
              <h3 class="lia-h4" style="margin-bottom: var(--space-2);">Ángelo & Los Artefactos</h3>
              <p class="lia-body lia-text-muted" style="margin-bottom: var(--space-6); flex-grow: 1;">El cierre épico de la trilogía original, donde todo el misterio se resuelve.</p>
              <div class="lia-stack lia-stack--sm" style="width: 100%;">
                <a href="#" class="lia-btn lia-btn--sm lia-btn--primary" data-modal data-modal-title="Amazon Kindle" data-modal-desc="📚 Próximamente disponible en Amazon Kindle." data-modal-icon="📚">📚 Comprar Kindle</a>
                <a href="#" class="lia-btn lia-btn--sm lia-btn--secondary" data-modal data-modal-title="Amazon (Pasta Blanda)" data-modal-desc="Próximamente disponible en formato físico." data-modal-icon="📚">📚 Comprar Pasta Blanda</a>
                <a href="#" class="lia-body" style="font-size: 0.85rem; text-decoration: none; color: var(--text-muted); transition: color 0.2s ease; margin-top: var(--space-2); display: inline-block;" data-modal data-modal-title="Muestra Gratuita" data-modal-desc="El primer capítulo estará disponible muy pronto." data-modal-icon="📖">📖 Leer muestra</a>
              </div>
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
