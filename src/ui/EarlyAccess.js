export const EarlyAccess = {
  render() {
    return /* html */ `
      <section id="early-access" class="lia-section" aria-labelledby="early-access-title">
        <div class="lia-container lia-container--md" style="text-align: center;">
          <div class="lia-card lia-card--glow" style="padding: var(--space-8); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center;">
            <div style="position: absolute; top: -50px; left: -50px; width: 150px; height: 150px; background: var(--accent-primary); filter: blur(80px); opacity: 0.2; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -50px; right: -50px; width: 150px; height: 150px; background: var(--accent-secondary); filter: blur(80px); opacity: 0.2; pointer-events: none;"></div>
            
            <div class="lia-chip" style="margin-bottom: var(--space-4);">🚀 Early Access V3</div>
            <h2 id="early-access-title" class="lia-h2" style="margin-bottom: var(--space-4);">Únete a la evolución de LIA</h2>
            <p class="lia-lead" style="margin-bottom: var(--space-6); max-width: 600px; color: var(--text-muted);">
              Estamos preparando el lanzamiento de la nueva plataforma cognitiva. Regístrate para asegurar tu lugar y recibir acceso anticipado exclusivo.
            </p>
            
            <form class="lia-form" style="display: flex; gap: var(--space-3); width: 100%; max-width: 480px; flex-direction: column;" onsubmit="event.preventDefault(); alert('Gracias por registrarte. Te contactaremos pronto.');">
              <input type="email" placeholder="Tu correo electrónico" required style="width: 100%; height: 52px; border-radius: 12px; border: 1px solid var(--border-subtle); background: rgba(0,0,0,0.4); padding: 0 var(--space-4); color: var(--text-main); font-family: var(--lia-sans-body); font-size: 1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--accent-secondary)'" onblur="this.style.borderColor='var(--border-subtle)'">
              <button type="submit" class="lia-btn lia-btn--primary" style="width: 100%; justify-content: center;">
                <span>Solicitar Acceso</span>
              </button>
            </form>
            <p class="lia-body" style="font-size: 0.75rem; color: var(--text-muted); margin-top: var(--space-4);">Sin spam. Solo invitaciones a la plataforma real.</p>
          </div>
        </div>
      </section>
    `;
  }
};
