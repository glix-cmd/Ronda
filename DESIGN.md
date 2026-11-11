---
name: Ronda (nombre provisional) · RondaTomasa
description: Venta asistida en sala para hostelería en Madrid, contada como un cartel de sala hecho a mano.
colors:
  amarillo: "#FDF250"
  amarillo-portada: "#FFE94D"
  amarillo-boton: "#FFDA30"
  negro: "#000000"
  blanco: "#FFFFFF"
  rosa-coral: "#F17F96"
  turquesa: "#159C9F"
  rojo-rotulador: "#C83A2D"
  rojo-texto: "#A3261B"
  gris-texto: "#3D3D3D"
  noche-pared: "#0F0F0D"
  noche-rosa: "#2B1219"
  noche-blanco: "#171716"
  noche-turquesa: "#0B2D2F"
  rosa-claro-noche: "#F7A3B4"
  pan: "#F2B260"
  cafe: "#4A2C1F"
typography:
  display:
    fontFamily: "Just Me Again Down Here, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(3.2rem, 7.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
  headline:
    fontFamily: "Just Me Again Down Here, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(2.8rem, 6vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 0.98
  mano:
    fontFamily: "Just Me Again Down Here, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(1.7rem, 2.4vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Lato, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 900
    lineHeight: 1.25
  body:
    fontFamily: "Lato, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Lato, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  a-mano: "255px 18px 225px 18px / 18px 225px 18px 255px"
  a-mano-s: "14px 4px 16px 5px / 5px 16px 4px 14px"
  papel: "3px 6px 4px 8px"
  mancha: "46px 22px 52px 28px / 26px 48px 22px 54px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  column-gap: "clamp(16px, 2.4vw, 32px)"
  section: "clamp(88px, 11vw, 150px)"
  container: "1280px"
  header: "76px"
components:
  cta:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.amarillo-boton}"
    typography: "{typography.label}"
    rounded: "{rounded.a-mano}"
    padding: "12px 22px 12px 24px"
    height: "52px"
  cta-sobre-oscuro:
    backgroundColor: "{colors.amarillo-boton}"
    textColor: "{colors.negro}"
    rounded: "{rounded.a-mano}"
    padding: "12px 22px 12px 24px"
  pegatina:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    rounded: "{rounded.a-mano-s}"
    padding: "9px 16px 11px"
  recorte:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    rounded: "{rounded.a-mano-s}"
    padding: "10px 10px 8px"
  comanda:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    padding: "22px 22px 28px"
  formulario:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.negro}"
    rounded: "{rounded.mancha}"
    padding: "clamp(26px, 3.2vw, 46px)"
  opcion:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.negro}"
    rounded: "{rounded.a-mano-s}"
    height: "44px"
  opcion-marcada:
    backgroundColor: "{colors.negro}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.a-mano-s}"
    height: "44px"
---

# Design System: Ronda (nombre provisional) · RondaTomasa

<!-- Variante aparte (noviembre de 2026). Referencia de estilo fijada por el usuario: el cartel cubano hecho a mano de la web de La Negra Tomasa de Sol; solo el estilo, sin su logotipo, textos, fotos ni temática. La variante nocturna sigue en ronda-web. -->

## Overview

**Creative North Star: "El cartel de sala"**

La web parece el cartel que alguien del local pega en la pared antes del servicio, escrito con rotulador y lleno de recortes. Los bloques de color son planos e intensos: amarillo, rosa coral, blanco, turquesa y negro. Pasan de uno a otro con bordes de papel rasgado y se apoyan en una textura de pared pintada o de papel. Encima van los papeles: comandas de bloc, recortes con cinta adhesiva, pegatinas y una polaroid sin foto. Todo lo dibujado se traza con rotulador negro y se rodea o señala en rojo.

La jerarquía nace del contraste entre una letra manuscrita grande y expresiva y un texto funcional pequeño en Lato, claro y sobrio. El tono es festivo pero útil: el collage acompaña el contenido sin taparlo. El formulario, los datos y las reglas se leen igual de bien que en una web sobria.

La variante noche apaga las paredes (negro, vino, verde oscuro) y deja los papeles como papeles: los recortes, las comandas, las pegatinas y el formulario siguen siendo claros. Lo que se rechaza explícitamente es la plantilla SaaS, el lujo nocturno de la otra variante y cualquier tópico cubano o musical que no tenga que ver con Ronda.

**Key Characteristics:**
- Bloques planos de amarillo, rosa coral, turquesa, blanco y negro con borde de papel rasgado.
- Titulares en Just Me Again Down Here; texto, datos y botones en Lato.
- Collage dibujado a mano en SVG: copa, caña, panera, café, flan, estrellas, flechas, sellos.
- Rojo de rotulador para rodear, subrayar y marcar lo pendiente.
- Botón negro con borde irregular y flecha a mano; una sola llamada a la acción.
- Lo dibujado se traza solo al aparecer; los papeles se enderezan al pasar el ratón.

## Colors

Una paleta de cartel: tres colores de pared, el negro de la tinta y un rojo de rotulador.

### Primary
- **Amarillo cartel** (amarillo, amarillo-portada): la pared por defecto de la portada, de «En sala» y de «Opiniones», la cabecera fija y el panel del formulario.
- **Amarillo botón** (amarillo-boton): el texto del botón negro, el relleno del botón sobre fondos oscuros, la pegatina de WhatsApp y las ilustraciones (cerveza, panera, flan).

### Secondary
- **Rosa coral** (rosa-coral): la pared de «La oportunidad» y «El equipo», la cinta adhesiva, las sillas del plano y el rotulador de la variante noche.
- **Turquesa** (turquesa): la pared del contacto, la cinta adhesiva y la taza de café. Sobre turquesa, el texto siempre es negro (el blanco no llega a AA).

### Tertiary
- **Rojo rotulador** (rojo-rotulador): óvalos, subrayados, círculos de las horas, la ruta del plano, los números de los pasos y las marcas de visto. Solo para trazos y textos grandes.
- **Rojo texto** (rojo-texto): la versión legible del rojo para textos pequeños (etiquetas de mesa, errores, «Pendiente»), con 6,3:1 sobre amarillo.

### Neutral
- **Negro tinta** (negro): texto, trazos, bordes, botón principal, interludio y pie.
- **Blanco papel** (blanco): recortes, comandas, pegatinas, polaroids, la pared de «Cómo funciona», «Ventajas» y «Preguntas», y el texto sobre negro.
- **Gris texto** (gris-texto): texto secundario sobre papel blanco.
- **Paredes de noche** (noche-pared, noche-rosa, noche-blanco, noche-turquesa): los mismos bloques en la variante noche, con texto blanco y titulares en amarillo o rosa.
- **Tonos de ilustración** (pan, cafe): solo dentro de los dibujos.

### Named Rules
**The Papel Es Papel Rule.** Todo lo que es un papel pegado (recorte, comanda, pegatina, polaroid, bloc, formulario, página legal) conserva su color claro y su tinta negra también en la variante noche. Solo cambian las paredes.

**The Rotulador Rojo Rule.** El rojo sirve para rodear, subrayar, señalar o marcar lo pendiente. Nunca rellena un bloque ni se usa para texto corrido.

**The Pendiente a la Vista Rule.** Todo dato ficticio o sin definir lleva su marca: un resaltado, la etiqueta «Pendiente» o los rótulos «Ejemplo», «Ilustración» o «foto real pendiente». Viene de las versiones anteriores y no se negocia.

## Typography

**Display Font:** Just Me Again Down Here (con Segoe Print y Bradley Hand), a 400.
**Body Font:** Lato (con ui-sans-serif y system-ui), a 400, 700 y 900, más cursiva 400.

**Character:** Una letra de rotulador con mucha personalidad contra una sans humanista que no hace ruido. Las dos son libres (OFL) y se alojan en el propio sitio.

### Hierarchy
- **Display** (manuscrita, clamp 3.2–6rem, 0.92): el h1 de la portada, con «la ronda» rodeada a rotulador.
- **Headline** (manuscrita, clamp 2.8–4.4rem, 0.98): los h2 de sección y el «¿Otra ronda?» del interludio.
- **Mano** (manuscrita, clamp 1.7–2.1rem): lo que dice el especialista en las comandas, las horas del bloc, las pegatinas, las notas («o pídela por WhatsApp») y los rasgos del equipo.
- **Title** (Lato 900, 1.2rem): los h3 de pasos, reglas y ventajas, y las preguntas frecuentes (Lato 700).
- **Body** (Lato 400, 1.0625rem, 1.65): todo el texto corrido.
- **Label** (Lato 900, 0.78rem, 0.12em, mayúsculas): botones, navegación móvil, etiquetas de comanda y de formulario, la barra de prototipo.

### Named Rules
**The Abre Bien Rule.** Los signos de apertura «¿» y «¡» de la manuscrita son diminutos y se leen como una «s». Se toman de Lato mediante una `@font-face` con `unicode-range` U+00A1 y U+00BF dentro de la misma familia.

**The Mano Para Hablar Rule.** La manuscrita es para titulares y para lo que se dice en voz alta (preguntas, notas, nombres). Las instrucciones, los datos y el texto legal van siempre en Lato.

## Layout

La rejilla es de 12 columnas, con un contenedor de 1280px, márgenes de clamp(20px, 5vw, 64px) y secciones de clamp(88px, 11vw, 150px) de aire. La composición es de cartel:
- en la portada, el titular va centrado y cuatro recortes se clavan en las esquinas;
- el resto de secciones son editoriales y asimétricas, con titular a un lado y papeles al otro;
- en «En sala», el plano queda fijo junto a la columna de comandas y reglas.

La cabecera mide 76px (64px en móvil) y es fija y amarilla. Por debajo de 1080px:
- la navegación pasa a un desplegable manuscrito, con velo oscuro detrás;
- los recortes de la portada forman una fila bajo el titular;
- todas las rejillas pasan a una columna.

Por debajo de 760px:
- desaparecen el botón de la cabecera y el sello;
- aparece la barra fija inferior con el botón y WhatsApp;
- el plano muestra una clave fija o un rótulo vivo con lo que se dice en cada parada.

**The Borde Rasgado Rule.** Las secciones no se separan con líneas rectas: cada bloque entra con un borde de papel rasgado de 18px de su propio color, hecho con una máscara SVG que se repite.

## Elevation & Depth

No hay sombras. La profundidad sale del collage: papeles girados unos grados, cinta adhesiva semitransparente que los sujeta, bordes rasgados que pisan el bloque anterior, una mancha amarilla con goterones detrás del formulario y un ligero desplazamiento de los recortes con el ratón y de la textura del contacto al hacer scroll.

**The Sin Sombra Rule.** Nada flota con `box-shadow`. Si algo tiene que destacar, se gira, se pega con cinta o se recorta con borde negro.

## Shapes

Las formas son de mano alzada. Los botones y las pegatinas usan radios asimétricos que imitan un borde dibujado (a-mano y a-mano-s). Los papeles tienen esquinas casi rectas e irregulares, y las comandas acaban en zigzag de papel arrancado. El formulario es una mancha de radios desiguales sobre una salpicadura. Los trazos SVG pasan por un filtro de rotulador (`feTurbulence` + `feDisplacementMap`, escala 2.6) que les quita la regularidad. Los bordes son de 2 a 2.5px en negro.

## Components

### Buttons
- **Shape:** borde irregular de mano (a-mano), con 2.5px de borde y un giro de -1.2°.
- **Primary:** fondo negro y texto amarillo, Lato 900 en mayúsculas, con una flecha dibujada. Sobre paredes oscuras se invierte: fondo amarillo y texto negro.
- **Hover / Focus:** el fondo se vacía, el texto toma el color de la pared, el botón gira a +0.8° y crece al 103 %, y la flecha avanza 5px. Al pulsar se queda al 96 %. Mientras envía, la flecha garabatea.
- **Icon buttons:** cuadrados de 44px con borde a mano que giran al pasar el ratón.

### Chips
- **Pegatinas de datos:** papel blanco con borde negro, etiqueta en rojo de Lato y dato en manuscrita, giradas entre -3° y 1.6°.
- **Opciones de franja:** papel blanco con borde a mano; al marcarlas pasan a fondo negro y texto blanco.
- **Etiqueta «Pendiente»:** mayúsculas en rojo con borde a mano.

### Cards / Containers
- **Recortes:** papel blanco, borde negro, cinta rosa o turquesa, dibujo SVG y pregunta en manuscrita.
- **Bloc (Mesa 6):** papel rayado con margen rosa; las horas con ocasión van rodeadas en rojo.
- **Comandas:** papel blanco con cabecera de línea discontinua y final en zigzag, giradas ±1°.
- **Polaroid:** marco blanco con trama de puntos y el rótulo «foto real pendiente».

### Inputs / Fields
- **Style:** línea inferior negra de 2.5px sobre el amarillo del formulario, con la etiqueta en mayúsculas encima.
- **Focus:** la línea pasa a rojo, el campo se aclara con un velo blanco y la etiqueta se vuelve roja.
- **Error / Disabled:** línea y mensaje en rojo texto, con una sacudida corta al enviar. Casillas cuadradas a mano con visto negro sobre amarillo. El modo demostración se anuncia en una nota de papel con borde rojo discontinuo y nunca finge un envío.

### Navigation
- **Cabecera:** amarilla y fija, con la marca a la izquierda, los enlaces en Lato 700 y el tema y el botón a la derecha. Al bajar aparece un trazo ondulado como borde y una barra de progreso roja.
- **Enlaces:** al pasar el ratón o al estar en su sección se dibuja debajo un garabato rojo.
- **Desplegable móvil:** enlaces en manuscrita de 2.3rem separados por líneas discontinuas, con el botón al final. Mientras está abierto, el resto de la página queda inerte bajo un velo.
- **Marca:** «Ronda» en manuscrita dentro de un lazo dibujado con un punto rojo, que se mueve al pasar el ratón.

### Plano de sala (signature)
Un mapa dibujado a rotulador: barra amarilla, cocina punteada, mesas blancas con sillas rosas y la ruta del especialista en rojo. El punto recorre la ruta y se para en las mesas 2, 5, 6 y 8, donde aparece un bocadillo manuscrito. La lista de comandas usa los mismos números de mesa.

### Interludio «¿Otra ronda?» (signature)
Un bloque negro con la pregunta en amarillo, subrayada en rosa, estrellas y destellos, y una copa y una caña dibujadas en tiza que brindan al pasar el ratón.

## Do's and Don'ts

### Do:
- **Do** mantener una sola llamada a la acción, «Solicitar propuesta», con WhatsApp como canal alternativo para lo mismo.
- **Do** usar texto negro sobre amarillo, rosa y turquesa. Sobre turquesa nunca uses texto blanco.
- **Do** separar los bloques con el borde rasgado y apoyarlos en la textura de pared o de papel, que se multiplica sobre el color.
- **Do** dibujar con trazos SVG de 2.4 a 3.4px, con el filtro de rotulador, y hacer que los trazos se dibujen solos al aparecer (`pathLength="1"`).
- **Do** animar solo `transform`, `opacity` y el trazo, con la curva de entrada de fondo `cubic-bezier(0, .33, .07, 1.03)` para los recortes, y anular todo con `prefers-reduced-motion`.
- **Do** rotular cada hueco de foto real como pendiente.

### Don't:
- **Don't** copiar el logotipo, los textos, las fotos ni la temática cubana o musical del referente. Del referente se toma solo el estilo.
- **Don't** usar sombras ni vidrio, ni degradados en el texto.
- **Don't** poner antetítulos encima de los titulares.
- **Don't** escribir párrafos, datos ni texto legal en manuscrita.
- **Don't** usar el rojo rotulador (#C83A2D) para texto pequeño; para eso está el rojo texto (#A3261B).
- **Don't** oscurecer los papeles en la variante noche.
- **Don't** inventar personas, clientes, opiniones, cifras ni precios.
