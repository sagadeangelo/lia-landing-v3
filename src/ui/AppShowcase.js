const STAYLO_STORE_URL =
  'https://apps.microsoft.com/detail/9pjbzk9sf26h';

const STAYLO_VIDEO_URL =
  '/apps/lia-staylo/media/lia-staylo-trailer.mp4';

export const AppShowcase = {

  render() {

    return /* html */ `
      <section
        id="app-showcase"
        class="lia-section lia-app-showcase"
        aria-labelledby="app-showcase-title"
      >

        <div class="lia-container">

          <div class="lia-grid-2 lia-app-showcase-grid">

            <!-- =====================================================
                 INFORMACIÓN DE LIA-STAYLO
                 ===================================================== -->

            <div class="lia-stack lia-stack--lg">

              <div class="lia-eyebrow">
                LIA-Staylo
              </div>

              <h2
                id="app-showcase-title"
                class="lia-h2"
              >
                Tu historia. Tu universo. Tu forma de crear.
              </h2>

              <p class="lia-lead">
                Una experiencia de escritura asistida por IA diseñada
                para ayudarte a desarrollar tus historias sin perder
                tu propia voz.
              </p>

              <p class="lia-body lia-text-muted">
                ✨ La IA no crea por ti. Te impulsa a terminar tu historia.
              </p>

              <!-- ===================================================
                   MICROFEATURES
                   =================================================== -->

              <div
                class="lia-app-showcase-features"
                style="
                  display: grid;
                  gap: 10px;
                  margin-top: 4px;
                "
              >

                <div
                  class="lia-body lia-text-muted"
                  style="
                    display: flex;
                    align-items: center;
                    gap: 10px;
                  "
                >
                  <span
                    aria-hidden="true"
                    style="font-size: 1.05rem;"
                  >
                    ✍️
                  </span>

                  <span>
                    Escribe manteniendo tu propia voz.
                  </span>
                </div>

                <div
                  class="lia-body lia-text-muted"
                  style="
                    display: flex;
                    align-items: center;
                    gap: 10px;
                  "
                >
                  <span
                    aria-hidden="true"
                    style="font-size: 1.05rem;"
                  >
                    🧠
                  </span>

                  <span>
                    Desarrolla ideas y personajes con IA.
                  </span>
                </div>

                <div
                  class="lia-body lia-text-muted"
                  style="
                    display: flex;
                    align-items: center;
                    gap: 10px;
                  "
                >
                  <span
                    aria-hidden="true"
                    style="font-size: 1.05rem;"
                  >
                    🚀
                  </span>

                  <span>
                    Lleva tus historias hasta el final.
                  </span>
                </div>

              </div>

              <!-- ===================================================
                   MICROSOFT STORE
                   =================================================== -->

              <div
                class="lia-app-showcase-actions"
                style="
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                  gap: 14px;
                  margin-top: 8px;
                "
              >

                <a
                  href="${STAYLO_STORE_URL}"
                  class="lia-btn lia-btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🛍️ Descargar desde Microsoft Store
                </a>

                <a
                  href="${STAYLO_STORE_URL}"
                  class="lia-body lia-text-muted"
                  style="
                    font-size: 0.875rem;
                    text-decoration: underline;
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Microsoft Store →
                </a>

              </div>

            </div>


            <!-- =====================================================
                 VIDEO LIA-STAYLO
                 ===================================================== -->

            <div
              class="lia-app-showcase-video"
              style="
                position: relative;
                width: 100%;
                max-width: 720px;
                margin-inline: auto;
              "
            >

              <div
                style="
                  position: relative;
                  width: 100%;
                  overflow: hidden;
                  border-radius: 24px;
                  background:
                    radial-gradient(
                      circle at center,
                      rgba(139, 92, 246, 0.12),
                      rgba(7, 8, 18, 0.92) 70%
                    );
                  border: 1px solid rgba(255,255,255,0.10);
                  box-shadow:
                    0 24px 70px rgba(0,0,0,0.35),
                    0 0 50px rgba(139,92,246,0.10);
                "
              >

                <video
                  class="lia-staylo-video"
                  src="${STAYLO_VIDEO_URL}"
                  controls
                  playsinline
                  preload="metadata"
                  poster="/images/LIA-STAYLO-POSTER.png"
                  style="
                    display: block;
                    width: 100%;
                    height: auto;
                    aspect-ratio: 16 / 9;
                    object-fit: cover;
                    background: #080a14;
                  "
                >
                  Tu navegador no puede reproducir este video.
                </video>

              </div>

              <div
                style="
                  margin-top: 10px;
                  text-align: center;
                  font-size: 0.75rem;
                  color: var(--text-muted, #8f94a8);
                  opacity: 0.8;
                "
              >
                LIA-Staylo · Tu historia. Tu universo.
              </div>

            </div>

          </div>

        </div>

      </section>
    `;
  }

};