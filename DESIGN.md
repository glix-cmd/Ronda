# Ronda (nombre provisional) · DESIGN.md

Dirección (v3): **«producto en primer plano»**, inspirada en la estética de las webs de café de especialidad (referencia: el concepto «Wake the Beans», con un grano flotando sobre un vaso). En Ronda el producto es la ronda: un **vaso de vermut** con hielo y naranja, una **aceituna en su palillo** que flota encima y, detrás, la pregunta que hace el especialista en cada mesa: **«¿Otra ronda?»** en letra gigante.

El resto de la web conserva la limpieza de la v2: secciones en tono hueso con mucho aire, una sola familia para el texto y un único color de acción. La parte llamativa se concentra en la portada, la cinta de franjas y los números de los pasos.

La referencia no se pudo abrir (Pinterest bloquea el acceso automático), así que la composición se ha interpretado a partir de su descripción. La ilustración es original y no hay fotos ni personas inventadas.

## Color

| Token | Claro | Oscuro | Rol |
|---|---|---|---|
| `--c-banda` | `#1A100E` | `#0C0706` | Espresso: portada, cabecera, aviso de prototipo, equipo y pie (oscuros en los dos temas) |
| `--c-hero-brillo` | `#5A170F` | — | Halo cálido detrás del vaso |
| `--c-hero-gigante` | `#EADBCB` | — | Palabra gigante «¿Otra ronda?» |
| `--c-fondo` / `--c-fondo-2` | `#FBF8F4` / `#F3EDE5` | `#120C0A` / `#171010` | Hueso: fondo y secciones alternas |
| `--c-superficie` / `-2` | `#FFFFFF` / `#F1EAE1` | `#1E1513` / `#271C19` | Tarjetas, formulario, plano |
| `--c-texto` / `-2` / `-3` | `#1C1411` / `#4A3F3A` / `#6B5F58` | `#F4ECE4` / `#D2C4BA` / `#A8998F` | Texto (17:1 / 9,6:1 / 5,8:1) |
| `--c-linea` / `-2` / `--c-borde-ui` | `#E9E1D8` / `#D9CEC2` / `#8F8279` | `#2E221E` / `#3D2E29` / `#8E7F76` | Separadores, bordes, campos |
| `--c-primario` | `#A3271B` | `#F2876A` | **Vermut, único color de acción**: botones, cinta, números, ruta del plano |
| `--c-banda-primario` | `#F08F6E` | igual | El mismo acento sobre espresso (botones de cabecera y portada) |
| `--c-pendiente` | `#FEF3C7` con `#7A3E00` | `#3D2E06` con `#FCE7A6` | Etiqueta «Pendiente» |

Ilustración: vermut `#C9512A → #9A2316 → #4A0B07`, naranja `#F8B24B`, aceituna `#C4CC6A → #3A4512`, pimiento `#D23A1F`, palillo `#F0D8AE`.

## Tipografía

- **Anton** (400): solo para lo gigante. Se usa en «¿Otra ronda?» de la portada y del pie, en la cinta de franjas y en los números 01–04. Son 19 KB.
- **Plus Jakarta Sans** (variable 200–800): titulares, texto, botones y formularios. Son 27 KB.
- Las dos están alojadas en `assets/fonts/`, con licencia OFL.
- Escala de texto: 13 · 15 · 17 · 19 · 22 · 44 (h2) · 56 (h1 de portada). Display: `min(15vw, 212px)`.

## Composición de la portada

1. Antetítulo centrado.
2. Escena: «¿Otra ronda?» en Anton, centrado a la altura del líquido. El vaso va delante y el vermut es translúcido, así que la «R» se ve a través de la bebida. La aceituna cae al cargar la página y luego flota suavemente, con su sombra sobre el líquido.
3. Línea de «mesa» bajo el vaso.
4. Debajo, dos columnas: el h1 a la izquierda; la entrada, la llamada a la acción y los datos clave a la derecha.

En el móvil, «¿Otra / ronda?» ocupa dos líneas y el vaso se estrecha para dejar ver las letras.

## Espaciado, forma y movimiento

- Escala de 8. Sección `clamp(72px, 9vw, 120px)`. Ancho de 1180 px.
- Radios de 6, 10 y 14 px. Sombras mínimas.
- Movimiento: entrada de la palabra y del vaso, caída y flotación de la aceituna, cinta continua (se pausa al pasar el ratón) y la ruta del plano. Con `prefers-reduced-motion` todo queda quieto y visible.

## Componentes

- **Cabecera y aviso de prototipo** en espresso, fijos, iguales en los dos temas.
- **Cinta** de franjas en vermut: menú del mediodía, viernes noche, vermú del domingo, terrazas, fechas señaladas y eventos.
- **Pasos** con números gigantes en Anton.
- **En sala**: el plano animado de la ruta, fijo al desplazarse en escritorio, junto a cuatro comandas en una rejilla de 2×2.
- Ventajas, equipo, preguntas, contacto y páginas legales como en la v2, con la paleta nueva.
- **Pie** con «¿Otra ronda?» gigante en tono apagado.
