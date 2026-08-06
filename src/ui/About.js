export const About = {
  render() {
    return /* html */ `
      <section id="autor" class="lia-section lia-about" aria-labelledby="about-title">
        <div class="lia-container">
          <div class="lia-grid-2">
            <div class="lia-about__visual">
              <img src="/images/manuscrito_tecnologia.png" alt="Manuscrito y Tecnología" style="width: 100%; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);" loading="lazy" />
            </div>
            <div class="lia-about__content">
              <h2 id="about-title" class="lia-h2" style="margin-bottom: var(--space-4);">Del manuscrito a la tecnología</h2>
              <p class="lia-body" style="margin-bottom: var(--space-4);">
                Soy Miguel Tovar Amaral, creador de mundos. Escribir un libro es solo la mitad del camino.
              </p>
              <p class="lia-body" style="margin-bottom: var(--space-4); color: var(--text-main); font-weight: 600;">
                El verdadero reto es lograr que alguien lo lea y se apasione por él.
              </p>
              <p class="lia-body" style="margin-bottom: var(--space-6);">
                Por eso fundé LIA. Creamos una plataforma para transformar palabras escritas en verdaderas experiencias inmersivas impulsadas por inteligencia artificial.
              </p>
              <div class="lia-actions">
                <a href="mailto:contacto@lia-tech.com" class="lia-btn lia-btn--primary">Hablemos</a>
                <a href="https://wa.link/v0m2yz" target="_blank" rel="noopener noreferrer" class="lia-btn lia-btn--secondary">Escríbeme por WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
