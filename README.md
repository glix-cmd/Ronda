# Ronda · prototipo de web comercial

Prototipo de web comercial de una empresa nueva de Madrid que lleva **especialistas de venta asistida en sala** a restaurantes, bares y otros locales de hostelería en franjas de alta demanda (de 3 a 6 horas).

> **«Ronda» es un nombre provisional.** Hace la ronda por las mesas y ofrece «otra ronda» sin prometer resultados. Antes de usarlo, comprueba en la OEPM que la marca está libre y que el dominio está disponible.

Es un sitio estático (HTML, CSS y JavaScript sin dependencias) con la misma arquitectura que `yassin-barber-web`. Está preparado para publicarse en Vercel. El diseño («sala de noche»: editorial nocturno, oscuro por defecto con variante clara) está documentado en `DESIGN.md`; los datos del producto, en `PRODUCT.md`.

> **Dónde están los archivos.** El proyecto GLIX de claude.ai solo guarda archivos de texto (`claude/ronda-web/`). Las fuentes `.woff2`, las imágenes (`.avif`, `.webp`, `.png`) y `favicon.ico` van en el paquete completo `ronda-web.zip`, que es el que hay que subir a Vercel.

## Estructura

```
index.html          Portada: oportunidad, cómo funciona, en sala, ventajas, equipo, opiniones (maqueta), preguntas, contacto
404.html            Página de error con atajos (rutas absolutas «/», pensadas para Vercel)
aviso-legal.html    Aviso legal (LSSI art. 10). Datos PENDIENTES
privacidad.html     Política de privacidad (RGPD / LOPDGDD). Datos y base jurídica PENDIENTES
cookies.html        Política de cookies: la web no usa cookies; solo guarda el tema si lo eliges
robots.txt, sitemap.xml, favicon.svg, favicon.ico, apple-touch-icon.png, site.webmanifest
vercel.json         URLs limpias, cabeceras de seguridad (CSP, HSTS…), caché y «noindex» de prototipo
assets/css/site.css Tokens (oscuro por defecto y variante clara) y componentes
assets/js/tema.js   Aplica el tema antes de pintar (evita parpadeo)
assets/js/site.js   Menú a pantalla completa, tema, animaciones, luces de la portada, plano animado, formulario, WhatsApp, redes
assets/js/config.js ← AQUÍ se configuran el formulario, WhatsApp y las redes
assets/img/         Imagen para redes (1200×630) e iconos de la app
assets/img/atmosfera/  Atmósferas de sala generadas (AVIF y WebP, 2 tamaños) con su origen en un .json al lado
assets/fonts/       Bodoni Moda (titulares) y Hanken Grotesk (texto) alojadas aquí (sin Google Fonts), licencia OFL
herramientas/       Generador de las atmósferas (placas.html + render-placas.js). No se publica
.vercelignore       Deja fuera de la publicación los archivos de trabajo
```

## Qué es ficticio o está pendiente

| Dato | Estado |
|---|---|
| Nombre «Ronda» y logotipo | Provisional |
| Dominio `ronda.example` | Ficticio (dominio reservado que no existe). Está en canonical, Open Graph, JSON-LD, `robots.txt` y `sitemap.xml` |
| Correo `hola@ronda.example` | Ficticio, no funciona |
| Teléfono, dirección y datos fiscales | Pendientes (no se inventan) |
| WhatsApp | Pendiente: sin número, los botones avisan de que falta configurarlo |
| Redes sociales | Pendientes: los iconos solo aparecen si se configuran |
| Tarifas | Pendientes: la web no muestra precios |
| Condiciones de la colaboración inicial, ausencias y cambios de asignación | Pendientes: marcadas con la etiqueta «Pendiente» |
| Proceso de selección y formación del equipo | Pendiente |
| Opiniones | Maqueta vacía: no hay testimonios ni clientes inventados |
| Semana tipo y «Mesa 6» | Ejemplos ilustrativos, rotulados como tales |
| Imágenes de sala, barra, mesa y retrato | Atmósferas generadas por código (velas y luces desenfocadas, sin personas reales). Rotuladas «Atmósfera generada · foto real pendiente»: sustitúyelas por fotos propias con el mismo encuadre |

Todo lo pendiente se ve en la web con la marca ámbar (`.pendiente`), la etiqueta «Pendiente» o los rótulos «Prototipo», «Ejemplo» e «Ilustración».

## Antes de publicar

1. **Modelo contractual y laboral (lo más importante).** Que una empresa ponga a su personal a trabajar dentro del local de otra puede considerarse **cesión ilegal de trabajadores** (art. 43 del Estatuto de los Trabajadores) si no se hace a través de una empresa de trabajo temporal autorizada (Ley 14/1994) o mediante una contrata real, con organización y dirección propias (art. 42 ET). La respuesta de las preguntas frecuentes sobre quién organiza el trabajo está marcada como pendiente hasta que una asesoría laboral defina el modelo. Revisa también:
   - las responsabilidades del local, que puede responder solidaria o subsidiariamente de salarios y cotizaciones (art. 42.2 ET y art. 16.3 de la Ley 14/1994). Por eso la web **no** dice que el local quede libre de obligaciones;
   - el convenio colectivo aplicable (art. 42.6 ET);
   - la coordinación de actividades empresariales en prevención de riesgos (art. 24 de la Ley 31/1995 y RD 171/2004);
   - las condiciones de la «colaboración inicial», que es un acuerdo comercial y **no** el periodo de prueba de un contrato de trabajo (art. 14 ET).
2. **Dominio.** Sustituye `https://ronda.example` por el dominio real en todos los archivos:
   `grep -rl ronda.example . | xargs sed -i 's#https://ronda.example#https://www.TU-DOMINIO.es#g'`
   Sustituye también el correo `hola@ronda.example` en `index.html`.
3. **Quitar el «noindex».** `vercel.json` envía `X-Robots-Tag: noindex, nofollow` para que el prototipo no se indexe con datos ficticios. Bórralo al publicar la versión real.
4. **Formulario (Web3Forms).** Crea una clave en https://web3forms.com con el correo de la empresa y pégala en `web3formsKey` de `assets/js/config.js`. Sin clave, el formulario valida pero **no envía** y avisa de que está en modo demostración. Protección antispam incluida: casilla trampa invisible, tiempo mínimo de rellenado y el `botcheck` de Web3Forms. Si llega spam, activa el hCaptcha de Web3Forms y añade su dominio a la CSP de `vercel.json`.
5. **WhatsApp y redes.** Rellena `whatsapp` (solo dígitos, con 34 delante) y las URL de las redes en `config.js`.
6. **Textos legales.** Completa lo marcado como pendiente en `aviso-legal.html`, `privacidad.html`, `cookies.html` y en la información básica del formulario (`index.html`), y haz que lo revise un profesional. Si se añaden analítica, mapas o vídeos incrustados, hará falta un sistema de consentimiento de cookies.
7. **Fotos.** Sustituye las atmósferas de `assets/img/atmosfera/` por fotografías reales (con permiso de las personas que salgan) en los mismos tamaños y formatos, y quita los rótulos «Atmósfera generada».
8. **Marca.** Comprueba la disponibilidad de «Ronda» en la OEPM y del dominio antes de invertir en ellos.

## Publicar en Vercel

1. Sube esta carpeta a un repositorio de GitHub (o usa `vercel` desde la terminal en esta carpeta).
2. En Vercel: *Add New → Project* e importa el repositorio. No hace falta comando de build (Framework: *Other*).
3. Añade el dominio en *Settings → Domains*. Vercel emite el certificado y sirve HTTPS automáticamente. Comprueba después que la web carga con `https://` y que `http://` redirige. HTTPS no se ha podido comprobar en local.
4. Tras publicar la versión real, da de alta el sitio y el `sitemap.xml` en Google Search Console.

## Probar en local

Sírvela con un servidor local desde esta carpeta, por ejemplo `python -m http.server 8000`, y abre http://localhost:8000. Si abres `index.html` con doble clic también funciona, pero el navegador puede bloquear las fuentes propias y la página 404 no se puede probar así.
