# Plan de Migración SPRINT 4 - LIA OS Landing

**Objetivo:** Integrar el contenido existente de la landing anterior (`lia-landing`) dentro de la nueva arquitectura visual y cognitiva (LIA OS / Sprint 1-3), sin crear nuevas funcionalidades ni experimentar. Se trata de una migración directa, inteligente y adaptativa.

---

## 1. Inventario y Clasificación de Elementos

### 🧩 Componentes y Secciones
| Elemento Anterior | Estado en Nueva Landing (Sprints 1-3) | Clasificación | Acción |
| :--- | :--- | :--- | :--- |
| **Header / Nav** | Ya existe `Navigation.js` | 3. Fusionar con Sprint 3 | Integrar los enlaces a la nueva navegación. |
| **Hero Section** | Ya existe `Hero.js` y `HeroFX.js` | 3. Fusionar con Sprint 3 | Migrar copy ("Escribe tu libro...") al nuevo Hero y conectar CTAs. |
| **LIA-Train (Premium)** | No existe | 2. Adaptar al nuevo diseño | Convertir en una sección tipo tarjeta dentro del ecosistema. |
| **App Showcase (Staylo)**| No existe | 2. Adaptar al nuevo diseño | Recrear el layout de video usando la nueva interfaz Continuum. |
| **Cómo funciona (Features)**| No existe (Placeholder `#ecosistema`) | 2. Adaptar al nuevo diseño | Migrar el "Bento grid" a componentes CSS del nuevo sistema. |
| **Biblioteca de LIA** | No existe (Placeholder `#productos`) | 2. Adaptar al nuevo diseño | Renderizar el grid de libros usando el layout oscuro con bordes sutiles. |
| **Casos de Éxito** | No existe | 2. Adaptar al nuevo diseño | Transformar tarjetas de métricas usando `lia-card`. |
| **Visión (Lectura Inmersiva)**| No existe (Placeholder `#philosophy`) | 2. Adaptar al nuevo diseño | Traducir el 'glass-mockup' a la nueva estética. |
| **CTA Final** | No existe | 2. Adaptar al nuevo diseño | Convertir a una sección destacada antes del Footer. |
| **Autor (El Proyecto)** | No existe | 2. Adaptar al nuevo diseño | Estilizar con los nuevos tokens (tipografía, espacios). |
| **Footer** | No existe | 2. Adaptar al nuevo diseño | Crear `Footer.js` siguiendo el esquema modular. |

### 🎯 CTAs y Botones
| CTA | Destino | Clasificación | Acción |
| :--- | :--- | :--- | :--- |
| "Comenzar gratis" / "Crear mi libro ahora" | `#como-funciona` / auth | 2. Adaptar | Estilizar como `lia-btn-primary`. |
| "Explorar biblioteca" | `#biblioteca` | 2. Adaptar | Estilizar como `lia-btn-secondary`. |
| "Descubre si pasarías hoy" | `https://lia-tech.com/train` | 2. Adaptar | Enlace externo, mantener como botón neón o `primary`. |
| "Leer y vivir experiencia →" | `libro[1,2,3].html` | 5. Posponer | Temporalmente deshabilitar o mantener href clásico hasta que se migren esas páginas. |
| Botones de Contacto / WhatsApp | `mailto:` / `wa.link` | 2. Adaptar | Mantener funcionalidad. |

### 📝 Formularios
- No se encontraron formularios HTML nativos en la landing anterior. 
- *Clasificación:* 1. Mantener sin cambios (no hay acciones requeridas).

### 💼 Servicios / Productos Mencionados
| Producto | Clasificación | Acción |
| :--- | :--- | :--- |
| **LIA (Plataforma)** | 1. Mantener | Núcleo del copy. |
| **LIA-Train** | 2. Adaptar | Mantener sección adaptada. |
| **LIA-Staylo (App)** | 2. Adaptar | Mantener sección de video. |
| **Motor IA Celestya** | 1. Mantener | Mantener mención en la visión. |

### 📄 Páginas Extra (Sub-páginas)
| Página | Clasificación | Acción |
| :--- | :--- | :--- |
| `libro1.html`, `libro2.html`, `libro3.html` | 5. Posponer | No se migrarán en este Sprint. Solo se actualizarán los enlaces. |
| `apps/lia-staylo/index.html` | 5. Posponer | Mantener en subdirectorio si se copia `apps/`. |
| Legales (`privacidad.html`, etc.) | 5. Posponer | Mantener HTML original o copiar directamente en `public/`. |
| Blog (`blog.html`, etc.) | 5. Posponer | No migrar su UI todavía, mantener estático si se requiere. |

### 🔗 Enlaces y Anclas
- Los enlaces internos (`#como-funciona`, `#biblioteca`, `#vision`, `#autor`) deben reemplazar o coexistir con los Placeholders actuales (`#ecosistema`, `#filosofia`, `#productos`, etc.).
- *Clasificación:* 3. Fusionar con Sprint 3. Modificaremos el `NavigationMarkup.js` para usar las anclas reales de los contenidos que vamos a migrar.

### 🖼️ Imágenes
| Archivo | Clasificación | Acción |
| :--- | :--- | :--- |
| `images/logo.png` | 2. Adaptar | Reemplazar por el logo SVG o nuevo asset, o importar a `public/assets`. |
| `images/lia-mockup.png` | 1. Mantener | Importar a la nueva ruta pública. |
| Portadas de Libros (3) | 1. Mantener | Importar a la nueva ruta pública. |
| `images/manuscrito_tecnologia.png` | 1. Mantener | Importar a la nueva ruta pública. |
| `apps/lia-staylo/media/lia-staylo-poster.png` | 1. Mantener | Importar video y póster. |

### 🎥 Videos
| Archivo | Clasificación | Acción |
| :--- | :--- | :--- |
| `lia-staylo-trailer.mp4` | 1. Mantener | Importar a la nueva ruta `public/media/` o equivalente y actualizar rutas relativas. |

### 🔍 SEO (Meta Tags)
| Elemento | Clasificación | Acción |
| :--- | :--- | :--- |
| Título: *LIA \| Plataforma para Escritores...* | 3. Fusionar | Actualizar el `index.html` actual del V3 con el título y description de la V1. |
| Meta Description / Keywords | 3. Fusionar | Agregar al `index.html`. |
| Open Graph (OG) | 3. Fusionar | Agregar datos sociales de la antigua web. |

---

## 2. Estrategia de Migración (Plan de Acción)

1. **Setup de Assets**: Copiar la carpeta `images/`, `apps/lia-staylo/media/` de la antigua V1 hacia la carpeta `public/` de la nueva V3.
2. **SEO & Meta**: En `index.html` (V3), sobrescribir los metas básicos con los óptimos encontrados en la antigua landing.
3. **Navegación (NavigationMarkup.js)**: Actualizar los enlaces de la navbar para que coincidan con los nuevos IDs reales (ej. `#como-funciona`, `#biblioteca`, `#vision`, `#autor`).
4. **Hero (Hero.js)**: Reemplazar el copy de placeholder por el copy oficial: *"Escribe tu libro. Publícalo sin fricción. Sin perder tu voz."*
5. **Componentización de Secciones**: Crear módulos JS bajo `src/ui/` para:
   - `LiaTrainSection.js`
   - `AppShowcase.js`
   - `Features.js` (Cómo funciona)
   - `Library.js` (Biblioteca)
   - `SocialProof.js` (Casos de éxito)
   - `Vision.js` (Lectura inmersiva)
   - `About.js` (Autor y CTA)
   - `Footer.js`
6. **Estilos (CSS)**: Extraer los layouts base del `style.css` anterior y transformarlos en clases utilitarias o reglas de componentes en `src/styles/` (`components.css`, `layout.css`), asegurando que utilicen las variables CSS del modo oscuro (`_variables.css`).
7. **Eliminación de Placeholders**: Remover `PlaceholderSections.js` o vaciar su arreglo, e instanciar los nuevos componentes directamente en `LIA_OS.js`.
8. **Revisión**: Asegurarse de no añadir lógica JS nueva (ej. carruseles dinámicos no existentes), limitándose a la UI y la funcionalidad de scroll/Continuum del Sprint 3.

**ESTADO DEL DOCUMENTO:** Aprobado para guiar la ejecución. No se debe programar hasta que el usuario lo indique.
