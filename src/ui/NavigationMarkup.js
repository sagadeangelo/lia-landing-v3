/**
 * LIA OS — Navigation Markup
 * Sprint 1: Marcado semántico de la barra premium.
 * Editar aquí el copy de links sin tocar el orquestador.
 */
export const NavigationMarkup = {
  render() {
    return /* html */ `
      <nav id="lia-nav" class="lia-nav" aria-label="Navegación principal">
        <div class="lia-nav__inner">

          <a href="#top" class="lia-nav__brand" aria-label="LIA-Tech · Inicio">
            <span class="lia-nav__logo" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 20V4M20 20V4M4 12h16M12 4v16"/>
              </svg>
            </span>
            <span class="lia-nav__wordmark">
              LIA<span>-Tech</span>
            </span>
          </a>

          <ul class="lia-nav__links" role="list">
            <li><a href="#como-funciona" class="lia-nav__link lia-nav__link--active">Cómo funciona</a></li>
            <li><a href="#biblioteca" class="lia-nav__link">Biblioteca</a></li>
            <li><a href="#vision" class="lia-nav__link">Visión</a></li>
            <li><a href="#autor" class="lia-nav__link">El Proyecto</a></li>
          </ul>

          <div class="lia-nav__actions">
            <a href="#early-access" class="lia-btn lia-btn--sm lia-btn--primary">
              <span>Acceso Anticipado</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
              </svg>
            </a>
            <button type="button" class="lia-nav__toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="lia-mobile-menu">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

        </div>

        <!-- R3: Placeholder a11y — aria-controls siempre apunta a un nodo existente.
             El comportamiento mobile se implementa en un sprint dedicado. -->
        <div id="lia-mobile-menu" class="lia-mobile-menu" role="dialog" aria-modal="true" aria-label="Menú móvil" hidden></div>
      </nav>
    `;
  },
};
