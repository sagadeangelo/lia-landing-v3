export const ModalManager = {
  render() {
    return /* html */ `
      <div id="lia-modal-overlay" class="lia-modal-overlay" aria-hidden="true" style="
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px);
        z-index: 9999; display: flex; align-items: center; justify-content: center;
        opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
      ">
        <div id="lia-modal-content" class="lia-modal-content" role="dialog" aria-modal="true" style="
          background: var(--surface-1, #111); border: 1px solid var(--border-subtle, #333);
          border-radius: var(--radius-lg, 12px); padding: var(--space-8, 2rem);
          max-width: 400px; width: 90%; text-align: center;
          transform: translateY(20px); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        ">
          <div id="lia-modal-icon" style="font-size: 3rem; margin-bottom: 1rem;"></div>
          <h3 id="lia-modal-title" class="lia-h4" style="margin-bottom: 0.5rem;"></h3>
          <p id="lia-modal-desc" class="lia-body lia-text-muted" style="margin-bottom: 1.5rem;"></p>
          <button id="lia-modal-close" class="lia-btn lia-btn--primary" style="width: 100%;">Entendido</button>
        </div>
      </div>
    `;
  },
  
  init() {
    const overlay = document.getElementById('lia-modal-overlay');
    const closeBtn = document.getElementById('lia-modal-close');
    
    if (!overlay || !closeBtn) return;
    
    const closeModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      const content = document.getElementById('lia-modal-content');
      if (content) content.style.transform = 'translateY(20px)';
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    
    window.LIA_OS.showModal = (title, desc, icon = '⏳') => {
      document.getElementById('lia-modal-title').textContent = title;
      document.getElementById('lia-modal-desc').textContent = desc;
      document.getElementById('lia-modal-icon').textContent = icon;
      
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      const content = document.getElementById('lia-modal-content');
      if (content) content.style.transform = 'translateY(0)';
    };
    
    // En lugar de un listener global, adjuntamos eventos específicamente a los elementos
    const modalButtons = document.querySelectorAll('[data-modal]');
    modalButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Evitar que AnchorSmooth atrape el click
        const title = btn.getAttribute('data-modal-title') || 'Próximamente';
        const desc = btn.getAttribute('data-modal-desc') || 'Disponible próximamente en LIA-Tech.';
        const icon = btn.getAttribute('data-modal-icon') || '⏳';
        window.LIA_OS.showModal(title, desc, icon);
      });
    });
  }
};
