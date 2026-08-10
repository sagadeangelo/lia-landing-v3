const STAYLO_STORE_URL =
  'https://apps.microsoft.com/detail/9pjbzk9sf26h';

const TRAIN_URL =
  '/simulador/';

const APPS = [
  {
    id: 'staylo',
    icon: '✍️',
    name: 'LIA-Staylo',
    status: 'DISPONIBLE',
    statusClass: 'available',

    title: 'Tu historia. Tu universo.',

    summary:
      'Escritura asistida por IA para español de México y Latinoamérica, con herramientas profesionales de gramática, puntuación y espacios, estilo y ortografía.',

    detailTitle:
      'Tu historia. Tu universo.',

    detailDescription:
      'Una experiencia de escritura asistida por IA diseñada para ayudarte a mejorar tus textos y desarrollar tus historias sin perder tu propia voz. Staylo está pensado especialmente para escritores y creadores que trabajan en español de México y Latinoamérica.',

    features: [
      {
        icon: '📝',
        title: 'Gramática',
        text: 'Concordancia, construcción de oraciones y corrección de estructuras gramaticales.'
      },
      {
        icon: '↔️',
        title: 'Puntuación y espacios',
        text: 'Comas, puntos, signos, separación de palabras y espaciado del texto.'
      },
      {
        icon: '✨',
        title: 'Estilo',
        text: 'Claridad, fluidez, consistencia y calidad profesional de redacción.'
      },
      {
        icon: '🔤',
        title: 'Ortografía',
        text: 'Corrección de palabras, acentuación y escritura normativa.'
      }
    ],

    audience:
      'Escritores, autores independientes, estudiantes, creadores de contenido y cualquier persona que quiera mejorar sus textos manteniendo su propia voz.',

    video:
      '/apps/lia-staylo/media/lia-staylo-trailer.mp4',

    action: {
      type: 'external',
      label: '🛍 Microsoft Store',
      href: STAYLO_STORE_URL
    }
  },

  {
    id: 'train',
    icon: '🎓',
    name: 'LIA-Train',
    status: 'DISPONIBLE',
    statusClass: 'available-blue',

    title: 'Prepárate para tu futuro.',

    summary:
      'Simuladores y herramientas de preparación para exámenes profesionales, incluido el EGEL, que te ayudan a estudiar, practicar y llegar mejor preparado a tu evaluación.',

    detailTitle:
      'Prepárate para tu examen profesional.',

    detailDescription:
      'LIA-Train está diseñado para ayudarte a estudiar, practicar y medir tu preparación para exámenes profesionales. Su enfoque incluye simuladores y herramientas orientadas especialmente a la preparación del EGEL.',

    features: [
      {
        icon: '🎯',
        title: 'Preparación para EGEL',
        text: 'Herramientas enfocadas en la preparación para el Examen General para el Egreso de la Licenciatura.'
      },
      {
        icon: '📝',
        title: 'Simuladores',
        text: 'Practica con experiencias de evaluación que te permiten familiarizarte con el examen.'
      },
      {
        icon: '📊',
        title: 'Evaluación',
        text: 'Identifica tus áreas de oportunidad y mide tu desempeño durante la preparación.'
      },
      {
        icon: '📚',
        title: 'Material de preparación',
        text: 'Guías y recursos para estudiar y reforzar los conocimientos que necesitas.'
      }
    ],

    audience:
      'Estudiantes y egresados que se preparan para el EGEL u otros exámenes profesionales.',

    action: {
      type: 'internal',
      label: '🚀 Abrir LIA-Train',
      href: TRAIN_URL
    }
  },

  {
    id: 'make',
    icon: '🎨',
    name: 'LIA-Make',
    status: 'EN DESARROLLO',
    statusClass: 'development',

    title: 'Crea apps. Sin programar.',

    summary:
      'Diseña y construye aplicaciones con inteligencia artificial, aunque no tengas conocimientos de código. Convierte tus ideas en apps reales con la ayuda de la IA.',

    detailTitle:
      'De una idea a una app. Sin código.',

    detailDescription:
      'LIA-Make busca permitir que cualquier persona pueda crear aplicaciones utilizando inteligencia artificial, sin necesidad de dominar lenguajes de programación. El usuario describe lo que quiere construir y trabaja con la IA para convertir esa idea en una aplicación funcional.',

    features: [
      {
        icon: '🤖',
        title: 'Construcción con IA',
        text: 'Utiliza inteligencia artificial para transformar instrucciones e ideas en componentes funcionales.'
      },
      {
        icon: '💬',
        title: 'Describe lo que quieres',
        text: 'Trabaja con la IA utilizando lenguaje natural en lugar de depender exclusivamente de código.'
      },
      {
        icon: '🎨',
        title: 'Diseña tu aplicación',
        text: 'Construye interfaces y experiencias digitales de acuerdo con la idea que tienes en mente.'
      },
      {
        icon: '🔄',
        title: 'Itera y mejora',
        text: 'Modifica tu aplicación mediante nuevas instrucciones y evoluciona el proyecto paso a paso.'
      }
    ],

    audience:
      'Personas con ideas de productos digitales, emprendedores, creadores y usuarios que quieren desarrollar aplicaciones sin tener conocimientos avanzados de programación.'
  },

  {
    id: 'publish',
    icon: '📖',
    name: 'LIA-Publish',
    status: 'PRÓXIMAMENTE',
    statusClass: 'coming',

    title: 'Publica tu libro en minutos.',

    summary:
      'Convierte tu manuscrito en EPUB, prepara tu edición digital, crea portadas con IA y publícalo en Amazon de forma sencilla.',

    detailTitle:
      'De tu manuscrito a Amazon.',

    detailDescription:
      'LIA-Publish está pensado para simplificar el proceso de autopublicación. Desde el manuscrito hasta la edición digital, la portada y la preparación para Amazon, el objetivo es que un autor pueda convertir su obra en un libro listo para publicar en pocos minutos.',

    features: [
      {
        icon: '📄',
        title: 'Conversión a EPUB',
        text: 'Prepara tu manuscrito para convertirse en un libro digital compatible con el formato EPUB.'
      },
      {
        icon: '📱',
        title: 'Edición digital',
        text: 'Organiza y prepara tu obra para su distribución como libro digital.'
      },
      {
        icon: '🎨',
        title: 'Portadas con IA',
        text: 'Genera y prepara propuestas de portada utilizando inteligencia artificial.'
      },
      {
        icon: '🛒',
        title: 'Autopublicación en Amazon',
        text: 'Simplifica el proceso de preparación de tu libro para publicarlo en Amazon.'
      }
    ],

    audience:
      'Autores independientes y escritores que quieren publicar sus libros sin depender de procesos técnicos complicados.'
  },

  {
    id: 'employx',
    icon: '💼',
    name: 'LIA-EmployX',
    status: 'EN DESARROLLO',
    statusClass: 'development-blue',

    title: 'Tu próximo trabajo. Sin buscarlo todo tú.',

    summary:
      'Agentes de IA que trabajan 24/7 para buscar empleos, analizar vacantes y encontrar oportunidades que coincidan con tu perfil profesional.',

    detailTitle:
      'Tu búsqueda laboral trabajando 24/7.',

    detailDescription:
      'LIA-EmployX busca convertir la búsqueda de empleo en un proceso asistido por agentes de inteligencia artificial. En lugar de depender exclusivamente de búsquedas manuales, los agentes pueden trabajar continuamente para descubrir oportunidades, analizar vacantes y relacionarlas con tu perfil profesional.',

    features: [
      {
        icon: '🔎',
        title: 'Búsqueda 24/7',
        text: 'Agentes de IA trabajan continuamente para encontrar nuevas oportunidades laborales.'
      },
      {
        icon: '🧠',
        title: 'Análisis de vacantes',
        text: 'Analiza requisitos y características de las posiciones para identificar oportunidades relevantes.'
      },
      {
        icon: '🎯',
        title: 'Compatibilidad con tu perfil',
        text: 'Relaciona oportunidades con tus habilidades, experiencia y objetivos profesionales.'
      },
      {
        icon: '🤖',
        title: 'Agentes de IA',
        text: 'Automatiza tareas repetitivas de la búsqueda laboral y reduce el trabajo manual.'
      }
    ],

    audience:
      'Personas que buscan empleo y quieren utilizar agentes de IA para automatizar y acelerar su búsqueda laboral.'
  }
];


const STATUS_LABELS = {
  available: 'DISPONIBLE',
  'available-blue': 'DISPONIBLE',
  development: 'EN DESARROLLO',
  'development-blue': 'EN DESARROLLO',
  coming: 'PRÓXIMAMENTE'
};


export const Apps = {

  render() {

    return /* html */ `
      <section
        id="apps"
        class="lia-section lia-apps"
        aria-labelledby="apps-title"
      >

        <div class="lia-container">

          <div
            class="lia-centered lia-apps-heading"
          >

            <div class="lia-eyebrow">
              Ecosistema LIA-Tech
            </div>

            <h2
              id="apps-title"
              class="lia-h2"
            >
              Todas tus herramientas. Un solo ecosistema.
            </h2>

            <p class="lia-lead">
              Explora las aplicaciones creadas para escribir, aprender,
              crear, publicar y llevar tus proyectos al siguiente nivel.
            </p>

          </div>


          <div class="lia-apps-grid">

            ${APPS.map((app) => `

              <article
                class="lia-app-card lia-card lia-card--glow"
                data-app-id="${app.id}"
                tabindex="0"
                role="button"
                aria-label="Ver detalles de ${app.name}"
              >

                <div class="lia-app-card-top">

                  <div class="lia-app-icon">
                    ${app.icon}
                  </div>

                  <span
                    class="lia-app-status lia-app-status--${app.statusClass}"
                  >
                    ${STATUS_LABELS[app.statusClass]}
                  </span>

                </div>


                <div class="lia-eyebrow">
                  ${app.name}
                </div>


                <h3 class="lia-h3 lia-app-card-title">
                  ${app.title}
                </h3>


                <p class="lia-body lia-text-muted lia-app-card-summary">
                  ${app.summary}
                </p>


                <div class="lia-app-card-footer">

                  ${
                    app.action
                      ? `
                        <a
                          href="${app.action.href}"
                          class="lia-btn lia-btn--primary lia-app-direct-action"
                          ${
                            app.action.type === 'external'
                              ? 'target="_blank" rel="noopener noreferrer"'
                              : ''
                          }
                        >
                          ${app.action.label}
                        </a>
                      `
                      : `
                        <span class="lia-app-details-hint">
                          Ver detalles →
                        </span>
                      `
                  }

                </div>

              </article>

            `).join('')}

            <!-- =====================================================
                 FUTURO
                 ===================================================== -->

            <article
              class="lia-app-card lia-card lia-card--future"
            >

              <div class="lia-app-icon">
                ✨
              </div>

              <div class="lia-eyebrow">
                LIA-Tech
              </div>

              <h3 class="lia-h3 lia-app-card-title">
                Y esto apenas comienza.
              </h3>

              <p class="lia-body lia-text-muted lia-app-card-summary">
                Nuevas aplicaciones, agentes y experiencias inteligentes
                se incorporarán progresivamente al ecosistema LIA-Tech.
              </p>

              <span class="lia-app-details-hint">
                Más aplicaciones próximamente
              </span>

            </article>

          </div>


          <!-- =======================================================
               APP DETAIL MODAL
               ======================================================= -->

          <div
            id="lia-app-detail"
            class="lia-app-detail-overlay"
            data-lenis-prevent
            data-lenis-prevent-wheel
            aria-hidden="true"
          >

            <div
              class="lia-app-detail-modal"
              data-lenis-prevent
              data-lenis-prevent-wheel
              role="dialog"
              aria-modal="true"
              aria-labelledby="lia-app-detail-title"
              tabindex="-1"
            >

              <div class="lia-app-detail-navigation">

                <button
                  type="button"
                  id="lia-app-detail-back"
                  class="lia-app-detail-back"
                  aria-label="Volver a Apps"
                >
                  ← Volver a Apps
                </button>


                <button
                  type="button"
                  id="lia-app-detail-close"
                  class="lia-app-detail-close"
                  aria-label="Cerrar"
                >
                  ×
                </button>

              </div>


              <div class="lia-app-detail-header">

                <div
                  id="lia-app-detail-icon"
                  class="lia-app-detail-icon"
                ></div>


                <div>

                  <div
                    id="lia-app-detail-status"
                    class="lia-app-detail-status"
                  ></div>

                  <div
                    id="lia-app-detail-name"
                    class="lia-eyebrow"
                  ></div>

                  <h2
                    id="lia-app-detail-title"
                    class="lia-h2"
                  ></h2>

                </div>

              </div>


              <div class="lia-app-detail-body">

                <div class="lia-app-detail-main">

                  <p
                    id="lia-app-detail-description"
                    class="lia-lead"
                  ></p>


                  <div
                    id="lia-app-detail-video"
                    class="lia-app-detail-video"
                    hidden
                  >
                    <video
                      id="lia-app-detail-video-player"
                      controls
                      preload="metadata"
                      playsinline
                    >
                      <source
                        id="lia-app-detail-video-source"
                        src=""
                        type="video/mp4"
                      />
                    </video>
                  </div>


                  <div class="lia-app-detail-section">

                    <div class="lia-eyebrow">
                      Características
                    </div>

                    <div
                      id="lia-app-detail-features"
                      class="lia-app-feature-grid"
                    ></div>

                  </div>


                  <div class="lia-app-detail-section">

                    <div class="lia-eyebrow">
                      ¿Para quién es?
                    </div>

                    <p
                      id="lia-app-detail-audience"
                      class="lia-body lia-text-muted"
                    ></p>

                  </div>

                </div>

              </div>


              <div
                id="lia-app-detail-actions"
                class="lia-app-detail-actions"
              ></div>

            </div>

          </div>

        </div>

      </section>
    `;
  },


  init() {

    const overlay =
      document.getElementById('lia-app-detail');

    if (!overlay) return;


    const modal =
      overlay.querySelector('.lia-app-detail-modal');


    const closeButton =
      document.getElementById('lia-app-detail-close');


    const backButton =
      document.getElementById('lia-app-detail-back');


    const title =
      document.getElementById('lia-app-detail-title');


    const name =
      document.getElementById('lia-app-detail-name');


    const icon =
      document.getElementById('lia-app-detail-icon');


    const status =
      document.getElementById('lia-app-detail-status');


    const description =
      document.getElementById('lia-app-detail-description');


    const features =
      document.getElementById('lia-app-detail-features');


    const audience =
      document.getElementById('lia-app-detail-audience');


    const actions =
      document.getElementById('lia-app-detail-actions');


    const videoWrap =
      document.getElementById('lia-app-detail-video');


    const video =
      document.getElementById('lia-app-detail-video-player');


    const videoSource =
      document.getElementById('lia-app-detail-video-source');


    let previousBodyOverflow = '';

    let previousBodyPosition = '';

    let previousBodyTop = '';

    let previousBodyWidth = '';

    let previousScrollY = 0;


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


      document.body.style.overflow =
        'hidden';

      document.body.style.position =
        'fixed';

      document.body.style.top =
        `-${previousScrollY}px`;

      document.body.style.width =
        '100%';


      document.documentElement.classList.add(
        'lia-app-modal-open'
      );

      document.body.classList.add(
        'lia-app-modal-open'
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
        'lia-app-modal-open'
      );

      document.body.classList.remove(
        'lia-app-modal-open'
      );


      window.scrollTo(
        0,
        previousScrollY
      );

    };


    const renderFeatures = (app) => {

      features.innerHTML =
        app.features
          .map((feature) => `
            <div class="lia-app-feature-card">

              <div class="lia-app-feature-icon">
                ${feature.icon}
              </div>

              <div>

                <strong>
                  ${feature.title}
                </strong>

                <p>
                  ${feature.text}
                </p>

              </div>

            </div>
          `)
          .join('');

    };


    const renderAction = (app) => {

      if (!app.action) {

        actions.innerHTML = `
          <span class="lia-app-coming-label">
            ${STATUS_LABELS[app.statusClass]}
          </span>
        `;

        return;
      }


      const external =
        app.action.type === 'external';


      actions.innerHTML = `
        <a
          href="${app.action.href}"
          class="lia-btn lia-btn--primary"
          ${
            external
              ? 'target="_blank" rel="noopener noreferrer"'
              : ''
          }
        >
          ${app.action.label}
        </a>
      `;

    };


    const openApp = (appId) => {

      const app =
        APPS.find(
          (item) => item.id === appId
        );


      if (!app) return;


      icon.textContent =
        app.icon;


      name.textContent =
        app.name;


      title.textContent =
        app.detailTitle;


      description.textContent =
        app.detailDescription;


      status.textContent =
        STATUS_LABELS[app.statusClass];


      status.className =
        `lia-app-detail-status lia-app-detail-status--${app.statusClass}`;


      audience.textContent =
        app.audience;


      renderFeatures(app);

      renderAction(app);


      if (app.video) {

        videoWrap.hidden = false;

        videoSource.src =
          app.video;

        video.load();

      } else {

        video.pause();

        videoSource.src = '';

        videoWrap.hidden = true;

      }


      if (modal) {
        modal.scrollTop = 0;
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


    const closeApp = () => {

      video.pause();


      overlay.classList.remove(
        'is-open'
      );

      overlay.setAttribute(
        'aria-hidden',
        'true'
      );


      unlockPageScroll();

    };


    const returnToApps = () => {

      closeApp();


      requestAnimationFrame(() => {

        const appsSection =
          document.getElementById('apps');


        if (!appsSection) return;


        appsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      });

    };


    document
      .querySelectorAll(
        '.lia-app-card[data-app-id]'
      )
      .forEach((card) => {

        card.addEventListener(
          'click',
          (event) => {

            if (
              event.target.closest(
                '.lia-app-direct-action'
              )
            ) {
              return;
            }


            event.preventDefault();

            event.stopPropagation();


            openApp(
              card.dataset.appId
            );

          }
        );


        card.addEventListener(
          'keydown',
          (event) => {

            if (
              event.key === 'Enter' ||
              event.key === ' '
            ) {

              if (
                event.target.closest(
                  '.lia-app-direct-action'
                )
              ) {
                return;
              }


              event.preventDefault();

              openApp(
                card.dataset.appId
              );

            }

          }
        );

      });


    if (backButton) {

      backButton.addEventListener(
        'click',
        (event) => {

          event.preventDefault();

          event.stopPropagation();

          returnToApps();

        }
      );

    }


    if (closeButton) {

      closeButton.addEventListener(
        'click',
        (event) => {

          event.preventDefault();

          event.stopPropagation();

          closeApp();

        }
      );

    }


    overlay.addEventListener(
      'click',
      (event) => {

        if (
          event.target === overlay
        ) {

          closeApp();

        }

      }
    );


    overlay.addEventListener(
      'wheel',
      (event) => {

        if (
          !overlay.classList.contains(
            'is-open'
          )
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
            '.lia-app-detail-modal'
          );


        if (!scrollable) {

          event.preventDefault();

          event.stopPropagation();

          return;

        }


        event.stopPropagation();

      },
      {
        capture: true,
        passive: false
      }
    );


    overlay.addEventListener(
      'touchmove',
      (event) => {

        if (
          overlay.classList.contains(
            'is-open'
          )
        ) {

          event.stopPropagation();

        }

      },
      {
        capture: true,
        passive: true
      }
    );


    document.addEventListener(
      'keydown',
      (event) => {

        if (
          event.key === 'Escape' &&
          overlay.classList.contains(
            'is-open'
          )
        ) {

          event.preventDefault();

          closeApp();

        }

      }
    );

  }
};
