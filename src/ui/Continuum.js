/**
 * LIA OS — Continuum Module
 * Sprint 3: "La Revelación"
 * 
 * Este módulo orquesta la transición desde el Hero hacia el ecosistema.
 * Mantiene el concepto central de "Continuidad": sin cajas, sin tarjetas,
 * revelando primero la función y luego la identidad.
 */

export const Continuum = {
  /**
   * Devuelve el HTML semántico de la sección Continuum.
   * @returns {string}
   */
  render() {
    return /* html */ `
      <section id="lia-continuum" class="lia-section lia-continuum" aria-labelledby="lia-continuum-title">
        <h2 id="lia-continuum-title" class="lia-visually-hidden">El ecosistema continuo de LIA</h2>

        <div class="lia-container">
          
          <!-- NODO 1: Platform (El Núcleo) -->
          <article class="lia-node lia-node--platform">
            <div class="lia-node__visual" aria-hidden="true"></div>
            <div class="lia-node__content">
              <p class="lia-node__function">
                Todo comienza con <em>un núcleo inteligente</em> capaz de entender contexto, 
                razonar sobre la complejidad y orquestar soluciones a escala.
              </p>
              <div class="lia-node__identity">LIA Platform</div>
            </div>
          </article>

          <!-- NODO 2: EmployX (La Oportunidad) -->
          <article class="lia-node lia-node--employx">
            <div class="lia-node__visual" aria-hidden="true"></div>
            <div class="lia-node__content">
              <p class="lia-node__function">
                Esa inteligencia se conecta con el ecosistema profesional, 
                emparejando <em>el talento perfecto con la oportunidad correcta</em> 
                sin intermediarios estáticos.
              </p>
              <div class="lia-node__identity">LIA EmployX</div>
            </div>
          </article>

          <!-- NODO 3: Train (La Evolución) -->
          <article class="lia-node lia-node--train">
            <div class="lia-node__visual" aria-hidden="true"></div>
            <div class="lia-node__content">
              <p class="lia-node__function">
                El talento no es estático; evoluciona. 
                Un entorno donde <em>el conocimiento se refina y transfiere</em> 
                adaptándose al ritmo de quien aprende.
              </p>
              <div class="lia-node__identity">LIA Train</div>
            </div>
          </article>

          <!-- NODO 4: Staylo (La Sutileza) -->
          <article class="lia-node lia-node--staylo">
            <div class="lia-node__visual" aria-hidden="true"></div>
            <div class="lia-node__content">
              <p class="lia-node__function">
                La tecnología desaparece en el estilo de vida. 
                La inteligencia se vuelve <em>orgánica, personal y adaptada</em> 
                a los espacios cotidianos.
              </p>
              <div class="lia-node__identity">LIA Staylo</div>
            </div>
          </article>

          <!-- NODO 5: Publish (El Legado) -->
          <article class="lia-node lia-node--publish">
            <div class="lia-node__visual" aria-hidden="true"></div>
            <div class="lia-node__content">
              <p class="lia-node__function">
                Y finalmente, el ciclo culmina. 
                Las ideas se materializan y distribuyen, permitiendo 
                que <em>el legado creativo se construya sin barreras</em>.
              </p>
              <div class="lia-node__identity">LIA Publish</div>
            </div>
          </article>

        </div>
      </section>
    `;
  }
};
