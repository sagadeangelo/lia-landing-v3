export const Footer = {
  render() {
    return /* html */ `
      <footer class="lia-footer" style="border-top: 1px solid var(--border-subtle); padding: var(--space-8) 0; margin-top: var(--space-8);">
        <div class="lia-container">
          <div style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--space-4);">
            <div style="display: flex; align-items: center; gap: var(--space-2); color: var(--text-main); font-weight: 700;">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" style="color: var(--accent-primary);">
                <path d="M4 20V4M20 20V4M4 12h16M12 4v16"/>
              </svg>
              <span>LIA-Tech</span>
            </div>
            <p class="lia-body lia-text-muted">© 2025 LIA – Plataforma de Creación y Lectura con IA. Todos los derechos reservados.</p>
            <div style="display: flex; gap: var(--space-4); flex-wrap: wrap; justify-content: center;">
              <a href="#" class="lia-body lia-text-muted" style="text-decoration: underline;">Privacidad (Plataforma)</a>
              <a href="#" class="lia-body lia-text-muted" style="text-decoration: underline;">Privacidad (Servicios y Motor AI)</a>
              <a href="#" class="lia-body lia-text-muted" style="text-decoration: underline;">Condiciones de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
