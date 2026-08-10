const DITOX_KINDLE_URL = 'https://www.amazon.com.mx/dp/B0D1PPN5KR';
const DITOX_PRINT_URL = 'https://www.amazon.com.mx/dp/B0D6N95PWD';

const GUARDIANES_KINDLE_URL = 'https://www.amazon.com.mx/dp/B0CXNRKZML';
const GUARDIANES_PRINT_URL = 'https://www.amazon.com.mx/dp/B0D3B42M92';

const ARTEFACTOS_KINDLE_URL = 'https://www.amazon.com.mx/dp/B0D2B4ZBJL';
const ARTEFACTOS_PRINT_URL = 'https://www.amazon.com.mx/dp/B0D29VBYB2';

const BOOKS = [
  {
    id: 'ditox',
    title: 'Ángelo & El Proyecto Ditóx',
    shortTitle: 'El Proyecto Ditóx',
    image: '/images/LIBRO1_PORTADA_PSD.png',

    summary:
      'Ángelo descubre que detrás de su propia historia existe un peligroso proyecto científico capaz de cambiar el destino de la humanidad.',

    description:
      'Ángelo es un joven marcado por secretos que ni él mismo comprende. Mientras fuerzas ocultas comienzan a mover los hilos de su destino, un peligroso proyecto científico amenaza con cambiar para siempre el futuro de la humanidad. Entre megacorporaciones, tecnología prohibida y una toxina mortal, Ángelo descubrirá que su historia comenzó mucho antes de lo que imaginaba.',

    tagline:
      'El origen de una saga donde ciencia, secretos y destino se encuentran.',

    kindle: DITOX_KINDLE_URL,
    print: DITOX_PRINT_URL
  },

  {
    id: 'guardianes',
    title: 'Ángelo & Los Guardianes de la Historia',
    shortTitle: 'Los Guardianes',
    image: '/images/LIBRO2_PORTADA_PSD.png',

    summary:
      'Ángelo y los Akineanos emprenden una búsqueda hacia Italia tras descubrir secretos protegidos durante siglos.',

    description:
      'Los Gadianes y sus aliados han puesto sus ojos en uno de los secretos más peligrosos jamás descubiertos. Mientras antiguas civilizaciones y organizaciones se enfrentan por tecnologías capaces de cambiar el destino del mundo, Ángelo y los Akineanos emprenden una búsqueda hasta Italia para encontrar unos artefactos protegidos durante siglos.',

    tagline:
      'Secretos ancestrales, antiguas civilizaciones y una búsqueda que cambiará la historia.',

    kindle: GUARDIANES_KINDLE_URL,
    print: GUARDIANES_PRINT_URL
  },

  {
    id: 'artefactos',
    title: 'Ángelo & Los Artefactos Misteriosos',
    shortTitle: 'Los Artefactos',
    image: '/images/LIBRO3_PORTADA_PSD.png',

    summary:
      'Los misteriosos artefactos salen a la luz y Ángelo se acerca al verdadero destino que lo esperaba desde el principio.',

    description:
      'La historia de Ángelo no termina aquí. Un destino que parecía imposible comienza a revelarse mientras los artefactos misteriosos salen a la luz y los Akineanos se preparan para descubrir secretos que podrían superar todo lo que la humanidad conoce. La aventura llevará a Ángelo hacia una nueva etapa, donde descubrirá que su verdadero destino apenas comienza.',

    tagline:
      'El misterio se revela y el verdadero destino de Ángelo apenas comienza.',

    kindle: ARTEFACTOS_KINDLE_URL,
    print: ARTEFACTOS_PRINT_URL
  }
];

export const Library = {
  render() {
    return /* html */ `
      <section
        id="biblioteca"
        class="lia-section lia-library"
        aria-labelledby="library-title"
      >

        <div class="lia-container">

          <div class="lia-centered lia-library-heading">

            <div class="lia-eyebrow">
              La Saga Original
            </div>

            <h2 id="library-title" class="lia-h2">
              El origen de LIA
            </h2>

            <p class="lia-lead">
              Antes de ser un ecosistema tecnológico, LIA nació como una saga de
              novelas de ciencia ficción. Conoce las historias que dieron origen
              a este universo.
            </p>

          </div>

          <div class="lia-library-grid">

            ${BOOKS.map((book) => `
              <article
                class="lia-library-card lia-card--glow"
                data-book-card="${book.id}"
              >

                <button
                  type="button"
                  class="lia-book-trigger"
                  data-book-id="${book.id}"
                  aria-label="Ver detalles de ${book.title}"
                >

                  <span class="lia-book-container">

                    <img
                      src="${book.image}"
                      alt="${book.title}"
                      class="lia-book-cover"
                      loading="lazy"
                    />

                  </span>

                </button>

                <h3 class="lia-h4 lia-book-card-title">
                  ${book.title}
                </h3>

                <p class="lia-body lia-text-muted lia-book-card-summary">
                  ${book.summary}
                </p>

                <button
                  type="button"
                  class="lia-book-details-link"
                  data-book-id="${book.id}"
                >
                  Ver detalles →
                </button>

              </article>
            `).join('')}

          </div>

          <div class="lia-library-back-home">

            <a
              href="#top"
              class="lia-body"
              style="
                color: var(--text-muted);
                text-decoration: none;
                font-size: 0.85rem;
                display: inline-flex;
                align-items: center;
                gap: 4px;
              "
            >

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>

              Volver al inicio

            </a>

          </div>

        </div>

        <!-- =========================================================
             BOOK DETAIL MODAL
             ========================================================= -->

        <div
          id="lia-book-detail"
          class="lia-book-detail-overlay"
          data-lenis-prevent
          data-lenis-prevent-wheel
          aria-hidden="true"
        >

          <div
            class="lia-book-detail-modal"
            data-lenis-prevent
            data-lenis-prevent-wheel
            role="dialog"
            aria-modal="true"
            aria-labelledby="lia-book-detail-title"
            tabindex="-1"
          >

            <!-- =====================================================
                 NAVEGACIÓN DEL DETALLE
                 ===================================================== -->

            <div
              class="lia-book-detail-navigation"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
                width: 100%;
                margin-bottom: 12px;
                position: relative;
                z-index: 5;
              "
            >

              <button
                type="button"
                id="lia-book-detail-back"
                aria-label="Volver a la Biblioteca"
                style="
                  appearance: none;
                  border: 1px solid rgba(255,255,255,0.12);
                  background: rgba(255,255,255,0.04);
                  color: var(--text-muted, #a8adbd);
                  border-radius: 999px;
                  padding: 9px 16px;
                  font: inherit;
                  font-size: 0.82rem;
                  font-weight: 600;
                  cursor: pointer;
                  display: inline-flex;
                  align-items: center;
                  gap: 7px;
                  transition:
                    color 180ms ease,
                    background 180ms ease,
                    border-color 180ms ease,
                    transform 180ms ease;
                "
              >
                ← Volver a la Biblioteca
              </button>

              <button
                type="button"
                id="lia-book-detail-close"
                class="lia-book-detail-close"
                aria-label="Cerrar"
              >
                ×
              </button>

            </div>

            <div class="lia-book-detail-layout">

              <div class="lia-book-detail-cover-wrap">

                <img
                  id="lia-book-detail-image"
                  class="lia-book-detail-cover"
                  src=""
                  alt=""
                />

              </div>

              <div
                class="lia-book-detail-info"
                data-lenis-prevent
                data-lenis-prevent-wheel
              >

                <div class="lia-eyebrow">
                  Saga de Ángelo
                </div>

                <h2
                  id="lia-book-detail-title"
                  class="lia-h2"
                ></h2>

                <p
                  id="lia-book-detail-tagline"
                  class="lia-book-detail-tagline"
                ></p>

                <p
                  id="lia-book-detail-description"
                  class="lia-body lia-text-muted lia-book-detail-description"
                ></p>

                <div class="lia-book-detail-panels">

                  <div class="lia-book-info-panel">

                    <span class="lia-book-info-icon">
                      📖
                    </span>

                    <div>
                      <strong>Edición Kindle</strong>
                      <span>Disponible en Amazon</span>
                    </div>

                  </div>

                  <div class="lia-book-info-panel">

                    <span class="lia-book-info-icon">
                      📚
                    </span>

                    <div>
                      <strong>Pasta blanda</strong>
                      <span>Disponible en Amazon</span>
                    </div>

                  </div>

                </div>

                <div class="lia-book-detail-actions">

                  <a
                    id="lia-book-detail-kindle"
                    class="lia-btn lia-btn--primary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📖 Comprar Kindle
                  </a>

                  <a
                    id="lia-book-detail-print"
                    class="lia-btn lia-btn--secondary"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📚 Comprar Pasta Blanda
                  </a>

                  <a
                    id="lia-book-detail-amazon"
                    class="lia-book-amazon-link"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver libro en Amazon →
                  </a>

                </div>

                <!-- =================================================
                     LIA — LECTURA INMERSIVA AUMENTADA
                     Próximamente / En construcción
                     ================================================= -->

                <div
                  class="lia-book-detail-coming-soon"
                  style="
                    width: 100%;
                    margin-top: 24px;
                    border-radius: 14px;
                    overflow: hidden;
                    border: 1px solid rgba(168, 85, 247, 0.28);
                    background: rgba(8, 10, 25, 0.72);
                    box-shadow:
                      0 12px 34px rgba(0, 0, 0, 0.22),
                      0 0 28px rgba(168, 85, 247, 0.10);
                  "
                >

                  <img
                    src="/images/lia-coming-soon.png"
                    alt="LIA — Lectura Inmersiva Aumentada — En construcción"
                    loading="lazy"
                    style="
                      display: block;
                      width: 100%;
                      height: auto;
                      max-height: 140px;
                      object-fit: cover;
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    `;
  },

  init() {

    const overlay =
      document.getElementById('lia-book-detail');

    if (!overlay) return;

    const modal =
      overlay.querySelector('.lia-book-detail-modal');

    const modalInfo =
      overlay.querySelector('.lia-book-detail-info');

    const closeButton =
      document.getElementById('lia-book-detail-close');

    const backButton =
      document.getElementById('lia-book-detail-back');

    const title =
      document.getElementById('lia-book-detail-title');

    const tagline =
      document.getElementById('lia-book-detail-tagline');

    const description =
      document.getElementById('lia-book-detail-description');

    const image =
      document.getElementById('lia-book-detail-image');

    const kindle =
      document.getElementById('lia-book-detail-kindle');

    const print =
      document.getElementById('lia-book-detail-print');

    const amazon =
      document.getElementById('lia-book-detail-amazon');

    let previousBodyOverflow = '';
    let previousBodyPosition = '';
    let previousBodyTop = '';
    let previousBodyWidth = '';
    let previousScrollY = 0;

    /*
     * ---------------------------------------------------------
     * Bloqueo real del documento
     * ---------------------------------------------------------
     */

    const lockPageScroll = () => {

      previousScrollY =
        window.scrollY ||
        window.pageYOffset ||
        0;

      previousBodyOverflow =
        document.body.style.overflow;

      previousBodyPosition =
        document.body.style.position;

      previousBodyTop =
        document.body.style.top;

      previousBodyWidth =
        document.body.style.width;

      document.body.style.overflow = 'hidden';

      document.body.style.position = 'fixed';

      document.body.style.top =
        `-${previousScrollY}px`;

      document.body.style.width = '100%';

      document.documentElement.classList.add(
        'lia-book-modal-open'
      );

      document.body.classList.add(
        'lia-book-modal-open'
      );
    };

    const unlockPageScroll = () => {

      document.body.style.overflow =
        previousBodyOverflow;

      document.body.style.position =
        previousBodyPosition;

      document.body.style.top =
        previousBodyTop;

      document.body.style.width =
        previousBodyWidth;

      document.documentElement.classList.remove(
        'lia-book-modal-open'
      );

      document.body.classList.remove(
        'lia-book-modal-open'
      );

      window.scrollTo(
        0,
        previousScrollY
      );
    };

    /*
     * ---------------------------------------------------------
     * Protección adicional contra Lenis
     * ---------------------------------------------------------
     */

    const preventWheelEscape = (event) => {

      if (
        !overlay.classList.contains('is-open')
      ) {
        return;
      }

      const target =
        event.target instanceof Element
          ? event.target
          : null;

      if (!target) return;

      const scrollable =
        target.closest(
          '.lia-book-detail-modal, .lia-book-detail-info, .lia-book-detail-description'
        );

      if (!scrollable) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      event.stopPropagation();
    };

    overlay.addEventListener(
      'wheel',
      preventWheelEscape,
      {
        capture: true,
        passive: false
      }
    );

    /*
     * ---------------------------------------------------------
     * Touch / trackpad
     * ---------------------------------------------------------
     */

    const preventTouchEscape = (event) => {

      if (
        overlay.classList.contains('is-open')
      ) {
        event.stopPropagation();
      }

    };

    overlay.addEventListener(
      'touchmove',
      preventTouchEscape,
      {
        capture: true,
        passive: true
      }
    );

    /*
     * ---------------------------------------------------------
     * Abrir libro
     * ---------------------------------------------------------
     */

    const openBook = (bookId) => {

      const book =
        BOOKS.find(
          (item) => item.id === bookId
        );

      if (!book) return;

      title.textContent =
        book.title;

      tagline.textContent =
        book.tagline;

      description.textContent =
        book.description;

      image.src =
        book.image;

      image.alt =
        book.title;

      kindle.href =
        book.kindle;

      print.href =
        book.print;

      amazon.href =
        book.kindle;

      /*
       * Resetear posición interna antes de mostrarlo.
       */

      if (modal) {
        modal.scrollTop = 0;
      }

      if (modalInfo) {
        modalInfo.scrollTop = 0;
      }

      overlay.scrollTop = 0;

      lockPageScroll();

      overlay.classList.add(
        'is-open'
      );

      overlay.setAttribute(
        'aria-hidden',
        'false'
      );

      requestAnimationFrame(() => {

        if (modal) {
          modal.focus();
        }

      });
    };

    /*
     * ---------------------------------------------------------
     * Cerrar libro
     * ---------------------------------------------------------
     */

    const closeBook = () => {

      overlay.classList.remove(
        'is-open'
      );

      overlay.setAttribute(
        'aria-hidden',
        'true'
      );

      unlockPageScroll();
    };

    /*
     * ---------------------------------------------------------
     * Volver a la Biblioteca
     * ---------------------------------------------------------
     */

    const returnToLibrary = () => {

      closeBook();

      requestAnimationFrame(() => {

        const librarySection =
          document.getElementById('biblioteca');

        if (!librarySection) return;

        librarySection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      });

    };

    /*
     * ---------------------------------------------------------
     * Botones de los libros
     * ---------------------------------------------------------
     */

    document
      .querySelectorAll(
        '.lia-book-trigger, .lia-book-details-link'
      )
      .forEach((element) => {

        element.addEventListener(
          'click',
          (event) => {

            event.preventDefault();
            event.stopPropagation();

            openBook(
              element.dataset.bookId
            );

          }
        );

      });

    /*
     * ---------------------------------------------------------
     * Volver a Biblioteca
     * ---------------------------------------------------------
     */

    if (backButton) {

      backButton.addEventListener(
        'click',
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          returnToLibrary();

        }
      );

    }

    /*
     * ---------------------------------------------------------
     * Cerrar con X
     * ---------------------------------------------------------
     */

    if (closeButton) {

      closeButton.addEventListener(
        'click',
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          closeBook();

        }
      );

    }

    /*
     * ---------------------------------------------------------
     * Cerrar haciendo click fuera
     * ---------------------------------------------------------
     */

    overlay.addEventListener(
      'click',
      (event) => {

        if (
          event.target === overlay
        ) {
          closeBook();
        }

      }
    );

    /*
     * ---------------------------------------------------------
     * ESC
     * ---------------------------------------------------------
     */

    document.addEventListener(
      'keydown',
      (event) => {

        if (
          event.key === 'Escape' &&
          overlay.classList.contains('is-open')
        ) {

          event.preventDefault();

          closeBook();

        }

      }
    );

  }
};