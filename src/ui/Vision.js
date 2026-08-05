export const Vision = {
  render() {
    return /* html */ `
      <section id="vision" class="lia-section lia-vision" aria-labelledby="vision-title">
        <div class="lia-container">
          <div class="lia-grid-2">
            <div class="lia-vision__content">
              <div class="lia-eyebrow">Nuestra Visión</div>
              <h2 id="vision-title" class="lia-h2" style="margin-bottom: var(--space-4);">El futuro de la lectura es inmersivo</h2>
              <p class="lia-lead" style="margin-bottom: var(--space-6);">
                No solo leas… vive la historia. Cada historia nace de un autor. LIA solo amplifica su impacto. <br>
                <strong>No es magia. Es enfoque con las herramientas correctas.</strong>
              </p>
              
              <div style="display: flex; flex-direction: column; gap: var(--space-4);">
                <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                  <span style="font-size: 1.5rem;">🎧</span>
                  <div>
                    <strong style="display: block; color: var(--text-main); margin-bottom: var(--space-1);">Lectura inmersiva</strong>
                    <p class="lia-body">Libros con sonido envolvente y ambientación visual.</p>
                  </div>
                </div>
                <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                  <span style="font-size: 1.5rem;">🎮</span>
                  <div>
                    <strong style="display: block; color: var(--text-main); margin-bottom: var(--space-1);">Gamificación</strong>
                    <p class="lia-body">Gana puntos y mantén tu racha diaria al leer.</p>
                  </div>
                </div>
                <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                  <span style="font-size: 1.5rem;">🧠</span>
                  <div>
                    <strong style="display: block; color: var(--text-main); margin-bottom: var(--space-1);">Motor IA Celestya</strong>
                    <p class="lia-body">Analiza narrativas y crea ambientes en tiempo real.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="lia-vision__visual" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: var(--space-6); backdrop-filter: blur(10px);">
              <div style="display: flex; gap: var(--space-2); margin-bottom: var(--space-6);">
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #ff5f56;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e;"></span>
                <span style="width: 12px; height: 12px; border-radius: 50%; background: #27c93f;"></span>
              </div>
              <p class="lia-body" style="color: var(--accent-secondary); margin-bottom: var(--space-4);">🎵 Reproduciendo: Tema de Tensión de "Proyecto Ditóx"</p>
              
              <div style="display: flex; gap: 4px; height: 40px; align-items: center; justify-content: center; margin-bottom: var(--space-6);">
                <span style="width: 4px; height: 20%; background: var(--accent-primary); border-radius: 2px;"></span>
                <span style="width: 4px; height: 60%; background: var(--accent-primary); border-radius: 2px;"></span>
                <span style="width: 4px; height: 100%; background: var(--accent-primary); border-radius: 2px;"></span>
                <span style="width: 4px; height: 40%; background: var(--accent-primary); border-radius: 2px;"></span>
                <span style="width: 4px; height: 80%; background: var(--accent-primary); border-radius: 2px;"></span>
              </div>
              
              <div class="lia-chip" style="margin-bottom: var(--space-4); display: block; text-align: center;">🔥 Racha: 12 días | Puntos: 1540</div>
              <p class="lia-body" style="font-size: 0.75rem; text-align: center; color: var(--text-muted);">Powered by Motor de Inteligencia Artificial Celestya</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
