# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Propietarios y responsables de restaurantes, bares, cafeterías y otros locales de hostelería de Madrid. Buscan cubrir sus franjas de más trabajo (comidas, cenas, fines de semana, fechas señaladas) sin incorporar a nadie a su plantilla, y llegan a la web para entender el servicio y solicitar una propuesta.

## Product Purpose

Ronda (nombre provisional) es una empresa nueva de Madrid que asigna a los locales especialistas de venta asistida en sala durante franjas de 3 a 6 horas. Recorren las mesas, detectan lo que falta y ofrecen con tacto productos de la carta del local: otra bebida, pan, café, postre. La web es un prototipo comercial; tiene éxito cuando un hostelero entiende el servicio y solicita una propuesta, por formulario o por WhatsApp.

## Positioning

No es un camarero más ni un vendedor que presiona. Es venta asistida: atenta, ágil y sin agobiar, con personal de Ronda acordado por escrito con la empresa y limitado a franjas concretas.

## Operating Context

- Contacto por el formulario «Solicitar propuesta» (Web3Forms, pendiente de clave, en modo demostración) o por WhatsApp (número pendiente).
- Proceso: solicitud, conocimiento de la sala, propuesta por escrito y servicio.

## Capabilities and Constraints

- Sitio estático (HTML, CSS y JS sin dependencias) preparado para Vercel. Misma arquitectura que `yassin-barber-web`. Fuentes alojadas en el propio sitio, sin peticiones a terceros.
- Campos del formulario confirmados: nombre, local, tipo de local, zona, franjas de interés, correo o teléfono, mensaje y privacidad. El usuario decidió no añadir un calendario de reserva.
- Pendiente de definir, y la web no debe darlo por hecho:
  - el modelo contractual y laboral (cesión de trabajadores, ETT o contrata);
  - tarifas;
  - condiciones de la colaboración inicial;
  - ausencias y cambios de personal;
  - proceso de selección;
  - datos fiscales, domicilio, teléfono, WhatsApp y redes sociales.
- No garantizar aumentos de ventas ni resultados.

## Brand Commitments

- Nombre provisional «Ronda» y logotipo de aro con punto (la ronda por las mesas). Textos en español, con el tono de la web actual.
- Llamada principal única: «Solicitar propuesta». WhatsApp es un canal alternativo para la misma solicitud.
- Puesto: «especialista de venta asistida en sala».
- Referencia visual vinculante (noviembre de 2026): la estética del concepto «The Nocturne» (editorial de lujo, nocturna y cinematográfica). Se toma **solo el estilo**, sin su marca, sus textos ni su testimonio.
- Tema oscuro por defecto, con una variante clara elegible.

## Evidence on Hand

- No hay fotos propias, clientes, testimonios, cifras ni precios. Las imágenes son atmósferas generadas, rotuladas como ilustración, con los huecos de foto real marcados.
- No hay opiniones: la sección queda como espacio reservado.
- Dominio y correo de ejemplo (`ronda.example`).

## Product Principles

1. Honestidad de prototipo: todo dato ficticio o pendiente se marca a la vista.
2. Una sola acción: todo lleva a solicitar una propuesta.
3. Tacto antes que presión, tanto en los textos como en el ritmo de la página.
4. Explicar el servicio desde el punto de vista del hostelero: su sala y sus horas punta.

## Accessibility & Inclusion

WCAG 2.1 AA: contraste suficiente, foco visible, navegación completa con teclado, `prefers-reduced-motion` respetado y textos alternativos.
