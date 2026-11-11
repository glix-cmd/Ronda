---
name: Ronda (nombre provisional)
description: Venta asistida en sala para hostelería en Madrid. Fotograma nocturno de una sala en hora punta, a la luz de las velas.
colors:
  noche: "#090807"
  noche-superficie: "#141210"
  noche-superficie-2: "#1C1916"
  pergamino: "#F4F0E9"
  ceniza: "#A8A098"
  ceniza-tenue: "#8E867D"
  champan: "#E6CFAE"
  ambar: "#D79543"
  brasa: "#A9471F"
  filete-noche: "rgba(235,225,212,0.18)"
  filete-noche-ui: "rgba(235,225,212,0.46)"
  papel: "#F4F0E9"
  papel-superficie: "#EBE5DB"
  papel-superficie-2: "#E2DACD"
  tinta: "#15120F"
  tinta-2: "#57504A"
  tinta-3: "#645C54"
  ambar-papel: "#B8732C"
  ambar-papel-texto: "#8C4A12"
  filete-papel: "rgba(21,18,15,0.16)"
  filete-papel-ui: "rgba(21,18,15,0.52)"
  error-noche: "#E58A6C"
  error-papel: "#A3341A"
  ok-noche: "#A9C792"
  ok-papel: "#3D6B2A"
  pendiente-noche: "#E5B270"
  pendiente-papel: "#7A3F0E"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "clamp(2.7rem, 6.2vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 4.8vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "clamp(1.3rem, 1.5vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.04
  quote:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Times New Roman, serif"
    fontSize: "clamp(1.35rem, 1.9vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lg:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  hairline: "2px"
  round: "50%"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  column-gap: "clamp(16px, 2.4vw, 32px)"
  section: "clamp(96px, 12vw, 176px)"
  container: "1360px"
  header: "76px"
components:
  cta:
    textColor: "{colors.pergamino}"
    typography: "{typography.label}"
    height: "48px"
  cta-circle:
    rounded: "{rounded.round}"
    size: "52px"
  cta-circle-hover:
    backgroundColor: "{colors.ambar}"
    textColor: "{colors.noche}"
    rounded: "{rounded.round}"
    size: "52px"
  icon-button:
    textColor: "{colors.pergamino}"
    rounded: "{rounded.round}"
    size: "44px"
  input-underline:
    textColor: "{colors.pergamino}"
    rounded: "{rounded.none}"
    padding: "10px 0 11px"
    height: "46px"
  option-chip:
    textColor: "{colors.ceniza}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
    height: "44px"
  option-chip-selected:
    textColor: "{colors.pergamino}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
  tag-pendiente:
    textColor: "{colors.pendiente-noche}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  panel:
    backgroundColor: "{colors.noche-superficie}"
    textColor: "{colors.pergamino}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3.2vw, 48px)"
  whatsapp-pill:
    backgroundColor: "{colors.noche-superficie}"
    textColor: "{colors.pergamino}"
    rounded: "{rounded.pill}"
    height: "46px"
---

# Design System: Ronda (nombre provisional)

<!-- Fusionado en noviembre de 2026: el mundo «La última ronda» (rediseño nocturno, referencia de estilo «The Nocturne») sustituye al de la v4 (vermut, Anton y Plus Jakarta Sans). Se conservan de la v4 la acción única, la honestidad de prototipo y los criterios de movimiento. -->

## Overview

**Creative North Star: "La última ronda"**

La web es un fotograma de una sala llena a la hora en que alguien pasa por las mesas. Todo ocurre de noche: fondo negro cálido, luces de velas desenfocadas que suben desde el negro y una serif de trazo muy fino que se lee como el rótulo de un local con oficio. El ámbar es la única luz: la llama, la acción y lo que está pendiente. Todo lo demás es pergamino sobre negro, separado por filetes de un píxel.

La página alterna planos a sangre (portada, interludio «¿Otra ronda?», contacto) con secciones editoriales asimétricas sobre negro o sobre la superficie un punto más clara. Hay mucho aire, titulares grandes, y los datos, la navegación y las etiquetas son compactos y en mayúsculas espaciadas. El tema oscuro es el predeterminado. La variante clara cambia el negro por papel cálido en las secciones de texto, pero las fotos, el menú, la banda del equipo, el contacto y el pie siguen de noche.

De la v4 se mantiene la honestidad de prototipo: todo dato ficticio o pendiente se marca a la vista, las imágenes son atmósferas generadas y se rotulan como tales, y no hay personas, clientes ni opiniones inventadas. Lo que se rechaza explícitamente es el héroe SaaS con tarjetas, la fila de cuatro iconos con titular y texto, y el póster del vermut de la v4.

**Key Characteristics:**
- Negro cálido (#090807) con planos de velas y luz desenfocada bajo velos negros.
- Bodoni Moda 400 para titulares y frases; Hanken Grotesk para texto, datos y etiquetas.
- El ámbar es la única luz y la única acción.
- Filetes finos de bajo contraste en lugar de tarjetas, sombras y radios.
- Una sola llamada a la acción, «Solicitar propuesta», con texto discreto en mayúsculas y un círculo con flecha.
- Movimiento lento y cinematográfico, y nada si el usuario pide movimiento reducido.

## Colors

Una paleta de noche con una sola luz cálida. La variante de papel usa los mismos papeles con valores oscurecidos para que el texto llegue al contraste AA.

### Primary
- **Ámbar de vela** (ambar): la única luz y la única acción. Se usa en el relleno del círculo de la llamada a la acción al pasar el ratón, la cursiva del h1, el punto del logotipo, la ruta y el especialista del plano, las mesas activas, la barra de progreso, el anillo de «volver arriba», el foco de teclado, las casillas marcadas y las franjas reforzadas de la semana. Como texto en noche llega a 6,9:1 sobre la superficie.
- **Ámbar de papel** (ambar-papel / ambar-papel-texto): el mismo papel en la variante clara. El tono más oscuro (#8C4A12, 5,9:1) es el que se usa para texto.

### Secondary
- **Brasa** (brasa): naranja tostado para los rescoldos. Solo aparece en brillos de fondo (la banda del equipo y el menú) y nunca como texto sobre negro.

### Neutral
- **Noche** (noche): fondo de página y de todo plano a sangre.
- **Superficie de noche** y **Superficie 2** (noche-superficie, noche-superficie-2): secciones alternas, ficha de la mesa 6, plano, panel del formulario y celdas vacías.
- **Pergamino** (pergamino): texto principal y titulares.
- **Ceniza** (ceniza): texto secundario, párrafos y descripciones (7,2:1 sobre la superficie).
- **Ceniza tenue** (ceniza-tenue): etiquetas, horas y notas (5,2:1 sobre la superficie).
- **Champán** (champan): reservado para un acento en cursiva dentro de titulares o en la sección activa del menú.
- **Filete** (filete-noche): separadores y bordes de paneles. **Filete de interfaz** (filete-noche-ui): campos, casillas y círculos de botón, al menos 3:1.
- **Papel, tinta y sus filetes** (papel, papel-superficie, papel-superficie-2, tinta, tinta-2, tinta-3, filete-papel, filete-papel-ui): los mismos papeles en la variante clara.
- **Estados**: error (error-noche / error-papel), correcto (ok-noche / ok-papel) y pendiente (pendiente-noche / pendiente-papel), siempre acompañados de texto.

### Named Rules
**The Una Sola Luz Rule.** El ámbar es la única luz de la página. Si algo nuevo necesita destacar y no es una acción, un estado o la luz de una vela, usa pergamino, cursiva o tamaño, nunca otro color.

**The Noche Fija Rule.** Las fotos de ambiente, el menú, la banda del equipo, el contacto, el pie y la barra móvil son siempre de noche, también en la variante clara. Sus tokens se fuerzan con los de noche; el panel del formulario es lo único que vuelve a papel en la variante clara.

**The Pendiente a la Vista Rule.** Todo dato ficticio o sin definir lleva su marca ámbar (resaltado, etiqueta «Pendiente» con filete, o rótulo «Ejemplo», «Ilustración» o «Atmósfera generada»). Esto viene de la v4 y no se negocia.

## Typography

**Display Font:** Bodoni Moda (con Bodoni 72, Didot, Times New Roman), con redonda y cursiva, variable 400–900 y usada siempre a 400.
**Body Font:** Hanken Grotesk (con ui-sans-serif y system-ui), variable 100–900.
**Label Font:** Hanken Grotesk 500 en mayúsculas espaciadas.

**Character:** Una didona de altísimo contraste y trazo de pelo, como el rótulo de una carta de sala buena, contra una grotesca limpia y tranquila que lleva los datos sin hacer ruido. Las dos fuentes se alojan en el sitio con licencia OFL.

### Hierarchy
- **Display** (400, clamp 2.7–5.5rem, 0.98): solo el h1 de portada, centrado y en dos líneas en escritorio. «haciendo la ronda» va en cursiva ámbar.
- **Headline** (400, clamp 2.3–4.25rem, 1.04): los h2 de sección, en redonda y sin cursiva. En columnas estrechas, como la de preguntas, el tamaño baja a 3.75rem como máximo.
- **Title** (400, clamp 1.3–1.55rem): los h3 de pasos, reglas, ventajas y la ficha de la mesa.
- **Quote** (400 cursiva, clamp 1.35–1.7rem, 1.25): lo que dice el especialista en cada comanda, el remate de «La oportunidad», las preguntas del FAQ (en redonda) y los bocadillos del plano.
- **Body** (400, 1.0625rem, 1.65): texto corrido en ceniza, con unos 36rem de ancho máximo en las entradillas.
- **Label** (500, 0.75rem, 0.14–0.2em, mayúsculas): navegación, botones, datos de la portada, encabezados de comanda, campos del formulario y notas de atmósfera.

### Named Rules
**The Cursiva Escasa Rule.** La cursiva de titular es un recurso de la portada (h1) y del interludio «¿Otra ronda?». En los h2 no se usa: repetida en cada sección se convierte en tic.

**The Un Solo Peso Rule.** Bodoni Moda se usa siempre a 400. La jerarquía la dan el tamaño, la cursiva y el aire, nunca la negrita.

## Layout

La rejilla es de 12 columnas, con un contenedor de 1360px, márgenes laterales de clamp(20px, 5vw, 72px) y un espacio entre columnas de clamp(16px, 2.4vw, 32px). Las secciones tienen clamp(96px, 12vw, 176px) de aire arriba y abajo. La composición es editorial y asimétrica:
- titular en las columnas 1–9 y texto desplazado a 7–12;
- cabeceras fijas (sticky) en 1–5 junto a listas en 7–12;
- plano fijo en 7fr junto a la columna de comandas y reglas en 5fr;
- retrato vertical en 8–11 frente al texto en 1–6.

La cabecera mide 76px (64px en móvil) y se superpone a la portada, que ocupa toda la pantalla. Por debajo de 1080px las rejillas pasan a una columna y lo fijo deja de serlo. Por debajo de 760px:
- los datos de la portada se apilan en filas con filete;
- el formulario pasa a una columna;
- la llamada de la cabecera queda solo como círculo (mantiene su nombre accesible);
- aparece una barra fija abajo con «Solicitar propuesta» y WhatsApp, que se oculta en la portada y en el contacto.

**The Aire Antes que Caja Rule.** Las agrupaciones se hacen con espacio y filetes horizontales, no con tarjetas. Una caja con fondo solo se permite cuando el contenido es un objeto: la ficha de la mesa 6, el plano, la semana de ejemplo o el panel del formulario.

## Elevation & Depth

El sistema es plano y no usa sombras. La profundidad la dan las capas tonales (noche, superficie y superficie 2), los velos negros sobre las fotos a sangre y el movimiento: un paralaje lento de las fotos al hacer scroll, una escala muy lenta en la portada y luces cálidas en suspensión dibujadas en un lienzo. Las superposiciones son pocas y deliberadas: la cabecera sobre la portada, el panel translúcido del formulario sobre la mesa con velas y el marco de filete desplazado detrás del retrato.

**The Sin Sombras Rule.** No se usa `box-shadow` para elevar. Si algo necesita separarse, se le da un filete, un cambio de superficie o aire.

## Shapes

Las formas son de ángulo recto: paneles, campos, casillas, opciones, etiquetas y la semana son cuadrados (0px). Solo son redondos los elementos que representan un punto o un gesto: el círculo de la llamada a la acción (52px), los botones de icono (44px), las redes (36px), «volver arriba», el punto del logotipo, las mesas del plano y la píldora flotante de WhatsApp. El suelo y la barra del plano llevan un redondeo mínimo (2–4px en el SVG). Los bordes son siempre de 1px.

## Components

### Buttons
- **Llamada principal («Solicitar propuesta»):** texto en mayúsculas espaciadas (label, 0.2em) con un subrayado que ocupa el 30 % del ancho, seguido de un círculo de 52px con filete de interfaz y una flecha de trazo 1.4. Se repite en la cabecera (círculo de 42px), la portada, los pasos, el equipo, las preguntas, el formulario y la barra móvil.
- **Hover / Focus:** el subrayado crece hasta el 100 %. El círculo se llena de ámbar desde el centro (escala 0→1 en 0.55s, curva de deceleración), la flecha pasa a negro y avanza 3px. Al pulsar, el círculo se queda al 94 %.
- **Cargando:** la flecha desaparece y un arco ámbar gira dentro del círculo, con `aria-busy`. El texto vive en su propio elemento para que el círculo no se pierda al cambiarlo.
- **Botones de icono (tema, cerrar aviso):** círculo de 44px con filete; el icono del tema gira 20° al pasar el ratón.
- **Bloque móvil:** la misma llamada a todo el ancho con el círculo relleno de ámbar, junto a un botón cuadrado de WhatsApp.

### Chips
- **Opciones de franja:** cuadradas, de 44px de alto, con filete y texto en ceniza. Al marcarlas, el filete pasa a ámbar, el texto a pergamino y el fondo toma un 10 % de ámbar.
- **Etiqueta «Pendiente»:** mayúsculas con filete del color de pendiente y sin relleno. El resaltado de dato pendiente es un fondo ámbar al 14 % con el texto en el tono de pendiente.

### Cards / Containers
- **Corner Style:** recto (0px).
- **Background:** superficie de noche (o papel-superficie en la variante clara) para la ficha de la mesa 6, el plano y la semana. El panel del formulario usa la superficie al 90 % de opacidad sobre la foto, con un desenfoque de 14px.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** filete de 1px.
- **Internal Padding:** clamp(22px, 2.6vw, 36px) en las fichas y clamp(24px, 3.2vw, 48px) en el panel.

### Inputs / Fields
- **Style:** solo una línea inferior con filete de interfaz, sin fondo, sin radio y con 46px de alto. La etiqueta va encima, en mayúsculas espaciadas y en ceniza.
- **Focus:** la línea pasa a ámbar y a 2px, y la etiqueta del campo se vuelve ámbar. El cursor de escritura es ámbar.
- **Error / Disabled:** la línea y el mensaje se ponen en el color de error, el mensaje entra con un fundido y el campo hace una sacudida corta al enviar (no con movimiento reducido). Las casillas son cuadradas de 18px con una marca dibujada que aparece con escala. Hay un contador de caracteres que se vuelve ámbar cerca del límite. El modo demostración se anuncia en una caja de pendiente y nunca finge un envío.

### Navigation
- **Cabecera:** barra fina en tres columnas: «MENÚ» con dos líneas a la izquierda, la marca centrada (aro con punto y «Ronda» en Bodoni) y, a la derecha, el botón de tema y la llamada principal. Sobre la portada es transparente y de noche; al bajar se vuelve sólida, con filete inferior y una barra de progreso ámbar de 1px. Al pasar el ratón, el punto del logotipo «hace la ronda» y gira 150° alrededor del aro.
- **Menú:** ocupa toda la pantalla, siempre de noche, y se abre con una cortina (clip-path, 0.8s). Los enlaces son grandes en Bodoni y entran escalonados (60ms); al pasar el ratón se desplazan 14px y se vuelven ámbar. La sección actual va en cursiva champán y «Solicitar propuesta» en cursiva ámbar. Mientras está abierto, el resto de la página queda inerte y sin scroll; se cierra con Esc y el foco vuelve al botón.
- **Pie:** siempre de noche. Marca grande, tres columnas con títulos en mayúsculas espaciadas y una fila legal con las redes en círculos pequeños de filete, que se muestran como «Redes pendientes» hasta configurarlas.

### Plano de sala (signature)
Un SVG del comedor visto desde arriba (barra, cocina y ocho mesas) con la ruta del especialista dibujada como una línea de puntos ámbar. Un punto ámbar recorre la ruta y se para en las mesas 2, 5, 6 y 8, que se iluminan mientras aparece un bocadillo en pergamino con la frase en Bodoni cursiva. La lista de comandas y la de reglas que lo acompañan usan los mismos números de mesa.
- En escritorio el plano queda fijo junto a esas listas.
- En móvil, la frase de cada parada se repite debajo a tamaño legible.
- Sin animación, el plano muestra una clave fija de las cuatro mesas.
- Solo se anima cuando está a la vista.

### Planos a sangre (signature)
- **Portada:** placa de la sala de noche con velas en primer término. Entra desde negro con una escala de 1.12 a 1, luego «respira» muy despacio y tiene paralaje con el scroll y el ratón. Encima flotan luces cálidas en un lienzo.
- **Interludio «¿Otra ronda?»:** placa de la barra, con la frase en Bodoni cursiva de hasta 6rem.
- **Contacto:** placa de la mesa con velas, con paralaje.

Todas llevan la nota «Atmósfera generada · foto real pendiente». Las placas se generan con código y van virando de brasa a ámbar, de modo que nada se queda en un gris neutro.

## Do's and Don'ts

### Do:
- **Do** mantener una sola llamada a la acción, «Solicitar propuesta», con WhatsApp como canal alternativo para lo mismo. Viene de la v4.
- **Do** usar el ámbar (#D79543) solo para luz, acción, foco y estados, y su tono de papel (#8C4A12) para texto en la variante clara.
- **Do** separar con filetes de 1px (rgba(235,225,212,0.18) de noche) y con aire, antes que con cajas.
- **Do** escribir los titulares en Bodoni Moda 400, en redonda, y reservar la cursiva para el h1 y el interludio.
- **Do** animar solo `transform` y `opacity` (las excepciones son la altura del FAQ y el clip-path del menú). Las entradas usan la curva de deceleración `cubic-bezier(.22,1,.36,1)`, las salidas la de aceleración `cubic-bezier(.4,0,1,1)` y las cortinas `cubic-bezier(.65,0,.35,1)`. Todo debe poder interrumpirse y anularse con `prefers-reduced-motion`. Viene de la v4.
- **Do** rotular toda imagen generada y todo dato pendiente donde se ve.
- **Do** medir el contraste del texto sobre las fotos en el peor caso. Los velos de portada, interludio y contacto dejan todo el texto por encima de 5:1.

### Don't:
- **Don't** usar sombras, degradados en el texto, vidrio decorativo ni bordes de acento de más de 1px.
- **Don't** poner antetítulos (eyebrows) encima de los titulares, ni siquiera «Error 404». La cifra va dentro de la ilustración o en el texto.
- **Don't** volver a la fila de cuatro iconos con titular y texto. Las reglas y los principios van como lista editorial con filetes.
- **Don't** pasar las fotos de ambiente, el menú o el pie a papel en la variante clara.
- **Don't** inventar personas, clientes, opiniones, cifras ni precios. Las opiniones siguen siendo un hueco con retrato de atmósfera rotulado.
- **Don't** añadir un segundo color de acento ni usar la brasa (#A9471F) como texto sobre negro.
- **Don't** redondear paneles, campos ni casillas.
