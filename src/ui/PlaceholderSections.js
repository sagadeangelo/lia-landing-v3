/**
 * LIA OS — PlaceholderSections
 * R4: Renderiza secciones ancla vacías para que NO existan href rotos internos
 *     (#explore, #philosophy, #ecosistema, #filosofia, #productos, #docs, #acceder).
 *
 * Diseño "mínimo cero-ruido": altura uniforme + borde superior sutil.
 * Cada sección tiene un heading semántico visualmente oculto (a11y).
 * Cuando llegue el sprint de cada sección, se reemplaza su render() real
 * y se elimina aquí la entrada del array PLACEHOLDERS.
 */

const PLACEHOLDERS = [
  {
    id: 'ecosistema',
    heading: 'Ecosistema LIA',
    eyebrow: 'Sección',
    copy: 'Contenido por implementar en sprint dedicado.',
    target: 'SPRINT 2+',
  },
  {
    id: 'explore',
    heading: 'Explorar el ecosistema',
    eyebrow: 'CTA',
    copy: 'Contenido por implementar en sprint dedicado.',
    target: 'SPRINT 2+',
  },
  {
    id: 'filosofia',
    heading: 'Filosofía LIA',
    eyebrow: 'Humano+',
    copy: 'Contenido por implementar en sprint dedicado.',
    target: 'SPRINT 2+',
  },
  {
    id: 'philosophy',
    heading: 'Nuestra filosofía',
    eyebrow: 'Humano+',
    copy: 'Contenido por implementar en sprint dedicado.',
    target: 'SPRINT 2+',
  },
  {
    id: 'productos',
    heading: 'Productos',
    eyebrow: 'Oferta',
    copy: 'Contenido por implementar en sprint dedicado.',
    target: 'SPRINT 2+',
  },
  {
    id: 'docs',
    heading: 'Documentación',
    eyebrow: 'Docs',
    copy: 'Contenido por implementar en sprint dedicado.',
    target: 'SPRINT 2+',
  },
  {
    id: 'acceder',
    heading: 'Acceder al ecosistema',
    eyebrow: 'Auth',
    copy: 'Contenido por implementar en sprint dedicado.',
    target: 'SPRINT 2+',
  },
];

export const PlaceholderSections = {
  render() {
    return PLACEHOLDERS.map((p) => /* html */ `
      <section id="${p.id}" class="lia-section lia-placeholder" aria-labelledby="lia-${p.id}-title">
        <div class="lia-container lia-container--md">
          <div class="lia-placeholder__card">
            <div class="lia-placeholder__eyebrow lia-eyebrow">${p.eyebrow} · ${p.target}</div>
            <h2 id="lia-${p.id}-title" class="lia-placeholder__title lia-h3 lia-visually-hidden">${p.heading}</h2>
            <div class="lia-placeholder__title lia-h3" aria-hidden="true">${p.heading}</div>
            <p class="lia-placeholder__copy lia-body">${p.copy}</p>
            <div class="lia-chip">ID: #${p.id}</div>
          </div>
        </div>
      </section>
    `).join('\n');
  },
};
