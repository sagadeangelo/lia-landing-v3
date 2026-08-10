const PRODUCTS = [
  {
    id: 'train',
    eyebrow: '\uD83C\uDF93 LIA-TRAIN',
    title: '\u00bfPasar\u00EDas tu EGEL hoy?',
    description:
      'Simulador profesional \u00B7 hasta 120 reactivos \u00B7 diagn\u00F3stico autom\u00E1tico',
    cta: 'DESCUBRE SI PASAR\u00CDAS \u2192',
    href: '/simulador/',
    external: false,
  },
  {
    id: 'staylo',
    eyebrow: '\u270D\uFE0F LIA-STAYLO',
    title: 'Escribe sin perder tu voz.',
    description:
      'Escritura asistida por IA para desarrollar tus historias.',
    cta: 'DESCUBRE STAYLO \u2192',
    href: '#apps',
    external: false,
  },
  {
    id: 'employx',
    eyebrow: '\uD83D\uDCBC LIA-EMPLOYX',
    title: 'Tu pr\u00F3ximo trabajo empieza aqu\u00ED.',
    description:
      'Agentes de IA para automatizar tu b\u00FAsqueda laboral 24/7.',
    cta: 'CONOCE EMPLOYX \u2192',
    href: '#apps',
    external: false,
  },
  {
    id: 'make',
    eyebrow: '\uD83C\uDFA8 LIA-MAKE',
    title: 'Crea. Dise\u00F1a. Hazlo realidad.',
    description:
      'Crea aplicaciones con inteligencia artificial, sin programar.',
    cta: 'DESCUBRE LIA-MAKE \u2192',
    href: '#apps',
    external: false,
  },
  {
    id: 'publish',
    eyebrow: '\uD83D\uDCDA LIA-PUBLISH',
    title: 'Publica tu libro en minutos.',
    description:
      'EPUB \u00B7 edici\u00F3n digital \u00B7 portadas con IA \u00B7 Amazon',
    cta: 'PUBLICA TU LIBRO \u2192',
    href: '#publish',
    external: false,
  },
];

const ROTATION_TIME = 20000;

const EcosystemBanner = {
  index: 0,
  timer: null,
  initialized: false,
  paused: false,

  render() {
    const product = PRODUCTS[0];

    return `
      <section
        id="lia-ecosystem-banner"
        class="lia-ecosystem-banner"
        data-product="${product.id}"
        aria-label="Aplicaciones de LIA-Tech"
      >
        <div class="lia-ecosystem-banner__glow"></div>

        <a
          class="lia-ecosystem-banner__link"
          href="${product.href}"
          ${product.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
          data-ecosystem-link
        >

          <button
            type="button"
            class="lia-ecosystem-banner__arrow lia-ecosystem-banner__arrow--prev"
            data-ecosystem-prev
            aria-label="Aplicaci\u00F3n anterior"
          >
            \u2039
          </button>

          <div class="lia-ecosystem-banner__content">

            <div class="lia-ecosystem-banner__copy">

              <div
                class="lia-ecosystem-banner__eyebrow"
                data-ecosystem-eyebrow
              >
                ${product.eyebrow}
              </div>

              <div
                class="lia-ecosystem-banner__title"
                data-ecosystem-title
              >
                ${product.title}
              </div>

              <div
                class="lia-ecosystem-banner__description"
                data-ecosystem-description
              >
                ${product.description}
              </div>

            </div>

            <div
              class="lia-ecosystem-banner__cta"
              data-ecosystem-cta
            >
              ${product.cta}
            </div>

          </div>

          <button
            type="button"
            class="lia-ecosystem-banner__arrow lia-ecosystem-banner__arrow--next"
            data-ecosystem-next
            aria-label="Siguiente aplicaci\u00F3n"
          >
            \u203A
          </button>

          <div
            class="lia-ecosystem-banner__dots"
            role="tablist"
            aria-label="Seleccionar aplicaci\u00F3n"
            data-ecosystem-dots
          >
            ${PRODUCTS.map(
              (item, i) => `
                <button
                  type="button"
                  class="lia-ecosystem-banner__dot ${i === 0 ? 'is-active' : ''}"
                  data-ecosystem-dot="${i}"
                  role="tab"
                  aria-label="${item.title}"
                  aria-selected="${i === 0}"
                ></button>
              `
            ).join('')}
          </div>

          <div class="lia-ecosystem-banner__progress">
            <span data-ecosystem-progress></span>
          </div>

        </a>
      </section>
    `;
  },

  injectStyles() {
    if (document.getElementById('lia-ecosystem-banner-styles')) {
      return;
    }

    const style = document.createElement('style');

    style.id = 'lia-ecosystem-banner-styles';

    style.textContent = `
      .lia-ecosystem-banner {
        --banner-accent: #ffd400;
        --banner-accent-rgb: 255, 212, 0;
        position: relative;
      }

      .lia-ecosystem-banner[data-product="train"] {
        --banner-accent: #ffd400;
        --banner-accent-rgb: 255, 212, 0;
      }

      .lia-ecosystem-banner[data-product="staylo"] {
        --banner-accent: #ff4de1;
        --banner-accent-rgb: 255, 77, 225;
      }

      .lia-ecosystem-banner[data-product="employx"] {
        --banner-accent: #00d9ff;
        --banner-accent-rgb: 0, 217, 255;
      }

      .lia-ecosystem-banner[data-product="make"] {
        --banner-accent: #a855f7;
        --banner-accent-rgb: 168, 85, 247;
      }

      .lia-ecosystem-banner[data-product="publish"] {
        --banner-accent: #61ff9a;
        --banner-accent-rgb: 97, 255, 154;
      }

      .lia-ecosystem-banner__link {
        position: relative;
        display: block;
        color: inherit;
        text-decoration: none;
        transition:
          border-color .35s ease,
          box-shadow .35s ease;
      }

      .lia-ecosystem-banner__arrow {
        position: absolute;
        z-index: 5;
        top: 50%;
        transform: translateY(-50%);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.18);
        background: rgba(5,7,18,.78);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        line-height: 1;
        cursor: pointer;
        opacity: .75;
        transition:
          opacity .2s ease,
          transform .2s ease,
          border-color .2s ease,
          color .2s ease;
      }

      .lia-ecosystem-banner__arrow:hover {
        opacity: 1;
        color: var(--banner-accent);
        border-color: var(--banner-accent);
        transform: translateY(-50%) scale(1.08);
      }

      .lia-ecosystem-banner__arrow--prev {
        left: 14px;
      }

      .lia-ecosystem-banner__arrow--next {
        right: 14px;
      }

      .lia-ecosystem-banner__dots {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 6;
      }

      .lia-ecosystem-banner__dot {
        width: 7px;
        height: 7px;
        padding: 0;
        border: 0;
        border-radius: 999px;
        background: rgba(255,255,255,.22);
        cursor: pointer;
        transition:
          width .3s ease,
          background .3s ease,
          box-shadow .3s ease,
          transform .2s ease;
      }

      .lia-ecosystem-banner__dot:hover {
        transform: scale(1.25);
        background: rgba(255,255,255,.6);
      }

      .lia-ecosystem-banner__dot.is-active {
        width: 24px;
        background: var(--banner-accent);
        box-shadow:
          0 0 8px rgba(var(--banner-accent-rgb), .8),
          0 0 18px rgba(var(--banner-accent-rgb), .45);
      }

      .lia-ecosystem-banner__progress {
        position: absolute;
        left: 4%;
        right: 4%;
        bottom: 3px;
        height: 2px;
        overflow: hidden;
        background: rgba(255,255,255,.06);
        border-radius: 999px;
      }

      .lia-ecosystem-banner__progress span {
        display: block;
        width: 0;
        height: 100%;
        background: var(--banner-accent);
        box-shadow: 0 0 8px var(--banner-accent);
        animation: liaEcosystemProgress 20s linear forwards;
      }

      .lia-ecosystem-banner--paused
        .lia-ecosystem-banner__progress span {
        animation-play-state: paused;
      }

      .lia-ecosystem-banner--changing
        .lia-ecosystem-banner__copy {
        opacity: .25;
        transform: translateY(3px);
      }

      .lia-ecosystem-banner__copy {
        transition:
          opacity .25s ease,
          transform .25s ease;
      }

      @keyframes liaEcosystemProgress {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }

      @media (max-width: 767px) {
        .lia-ecosystem-banner__arrow {
          width: 25px;
          height: 25px;
          font-size: 19px;
        }

        .lia-ecosystem-banner__arrow--prev {
          left: 8px;
        }

        .lia-ecosystem-banner__arrow--next {
          right: 8px;
        }

        .lia-ecosystem-banner__dots {
          bottom: 10px;
          gap: 7px;
        }

        .lia-ecosystem-banner__dot {
          width: 6px;
          height: 6px;
        }

        .lia-ecosystem-banner__dot.is-active {
          width: 19px;
        }
      }
    `;

    document.head.appendChild(style);
  },

  init() {
    if (this.initialized) return;

    const root = document.getElementById(
      'lia-ecosystem-banner'
    );

    if (!root) {
      console.warn(
        '[EcosystemBanner] #lia-ecosystem-banner no encontrado.'
      );
      return;
    }

    const link = root.querySelector(
      '[data-ecosystem-link]'
    );

    const eyebrow = root.querySelector(
      '[data-ecosystem-eyebrow]'
    );

    const title = root.querySelector(
      '[data-ecosystem-title]'
    );

    const description = root.querySelector(
      '[data-ecosystem-description]'
    );

    const cta = root.querySelector(
      '[data-ecosystem-cta]'
    );

    const progress = root.querySelector(
      '[data-ecosystem-progress]'
    );

    const prev = root.querySelector(
      '[data-ecosystem-prev]'
    );

    const next = root.querySelector(
      '[data-ecosystem-next]'
    );

    const dots = [
      ...root.querySelectorAll(
        '[data-ecosystem-dot]'
      ),
    ];

    if (
      !link ||
      !eyebrow ||
      !title ||
      !description ||
      !cta ||
      !progress ||
      !prev ||
      !next ||
      dots.length !== PRODUCTS.length
    ) {
      console.warn(
        '[EcosystemBanner] Elementos internos incompletos.'
      );
      return;
    }

    this.initialized = true;

    this.injectStyles();

    const restartProgress = () => {
      progress.style.animation = 'none';

      void progress.offsetWidth;

      progress.style.animation =
        'liaEcosystemProgress 20s linear forwards';
    };

    const updateDots = () => {
      dots.forEach((dot, i) => {
        const active = i === this.index;

        dot.classList.toggle(
          'is-active',
          active
        );

        dot.setAttribute(
          'aria-selected',
          String(active)
        );
      });
    };

    const update = (
      newIndex,
      animate = true
    ) => {
      this.index =
        (newIndex + PRODUCTS.length) %
        PRODUCTS.length;

      const product =
        PRODUCTS[this.index];

      if (animate) {
        root.classList.add(
          'lia-ecosystem-banner--changing'
        );
      }

      window.setTimeout(
        () => {
          eyebrow.textContent =
            product.eyebrow;

          title.textContent =
            product.title;

          description.textContent =
            product.description;

          cta.textContent =
            product.cta;

          link.href =
            product.href;

          if (product.external) {
            link.target = '_blank';
            link.rel =
              'noopener noreferrer';
          } else {
            link.removeAttribute(
              'target'
            );

            link.removeAttribute(
              'rel'
            );
          }

          root.dataset.product =
            product.id;

          updateDots();
          restartProgress();

          root.classList.remove(
            'lia-ecosystem-banner--changing'
          );
        },
        animate ? 220 : 0
      );
    };

    const schedule = () => {
      window.clearTimeout(
        this.timer
      );

      restartProgress();

      if (this.paused) {
        return;
      }

      this.timer =
        window.setTimeout(
          () => {
            update(
              this.index + 1,
              true
            );

            schedule();
          },
          ROTATION_TIME
        );
    };

    const goTo = (index) => {
      update(index, true);
      schedule();
    };

    const pause = () => {
      this.paused = true;

      root.classList.add(
        'lia-ecosystem-banner--paused'
      );

      window.clearTimeout(
        this.timer
      );

      progress.style.animationPlayState =
        'paused';
    };

    const resume = () => {
      this.paused = false;

      root.classList.remove(
        'lia-ecosystem-banner--paused'
      );

      progress.style.animationPlayState =
        'running';

      schedule();
    };

    prev.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        goTo(this.index - 1);
      }
    );

    next.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        goTo(this.index + 1);
      }
    );

    dots.forEach((dot) => {
      dot.addEventListener(
        'click',
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          const targetIndex =
            Number(
              dot.dataset
                .ecosystemDot
            );

          goTo(targetIndex);
        }
      );
    });

    root.addEventListener(
      'mouseenter',
      pause
    );

    root.addEventListener(
      'mouseleave',
      resume
    );

    root.addEventListener(
      'focusin',
      pause
    );

    root.addEventListener(
      'focusout',
      (event) => {
        if (
          !root.contains(
            event.relatedTarget
          )
        ) {
          resume();
        }
      }
    );

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          window.clearTimeout(
            this.timer
          );
        } else if (!this.paused) {
          schedule();
        }
      }
    );

    update(
      this.index,
      false
    );

    schedule();
  },
};

export { EcosystemBanner };


