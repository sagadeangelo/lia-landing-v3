# LAUNCH CHECKLIST V3 (RC-1)

## Infraestructura
- [ ] Configurar dominio principal en el proveedor.
- [ ] Emitir y forzar certificado SSL (HTTPS).
- [ ] Configurar DNS en Cloudflare (Proxy activo).
- [ ] Configurar reglas de caché y minificación en CDN.
- [ ] Configurar redirecciones 301 (ej. www a non-www, o de la antigua V1 a la V3).

## SEO
- [ ] Generar y subir `sitemap.xml`.
- [ ] Configurar `robots.txt` para permitir indexación.
- [ ] Validar meta tags principales (Title, Description, Keywords) en `index.html`.
- [ ] Validar etiquetas Open Graph (OG) y Twitter Cards para compartir en redes.
- [ ] Asegurar que los assets de favicon (`.svg`, `.ico`, `.png`, `apple-touch-icon`) estén presentes.
- [ ] Configurar URL canonical en el `head`.

## Analytics
- [ ] Insertar tag de Google Analytics (GA4).
- [ ] Insertar script de Microsoft Clarity para mapas de calor.
- [ ] Dar de alta la propiedad en Google Search Console.
- [ ] (Opcional) Configurar Pixel de Meta/TikTok si hay campañas activas.

## Performance
- [ ] Comprimir y optimizar imágenes (.webp/.avif recomendados).
- [ ] Implementar *lazy loading* en imágenes y videos (ej. `loading="lazy"`, o poster).
- [ ] Correr auditoría de Google Lighthouse y obtener >90 en Performance.
- [ ] Validar Core Web Vitals (FCP, LCP, CLS, INP) en producción.

## Comercial
- [ ] Validar recepción de datos del formulario Early Access.
- [ ] Integrar proveedor de envío transaccional (ej. Resend, SendGrid) si aplica.
- [ ] Configurar correos automáticos (autorespondedores de bienvenida).
- [ ] Validar que el botón de WhatsApp abra el chat con el mensaje pre-llenado correcto.
- [ ] Verificar que todos los CTAs apunten a los destinos y anclas correctas.

## Legal
- [ ] Activar banner de consentimiento de Cookies (RGPD/CCPA).
- [ ] Subir / Enlazar página de Política de Privacidad.
- [ ] Subir / Enlazar página de Términos y Condiciones.

## QA Final
- [ ] **Desktop**: Validar renderizado y Continuum en pantallas 1080p, 1440p, 4K.
- [ ] **Tablet**: Validar breakpoints (iPad Portrait/Landscape).
- [ ] **Mobile Android**: Probar Chrome y navegador nativo.
- [ ] **Mobile iPhone**: Probar Safari y scroll elástico (iOS 15+).
- [ ] **Navegadores**: Probar en Google Chrome.
- [ ] **Navegadores**: Probar en Safari.
- [ ] **Navegadores**: Probar en Firefox.
- [ ] **Navegadores**: Probar en Microsoft Edge.
