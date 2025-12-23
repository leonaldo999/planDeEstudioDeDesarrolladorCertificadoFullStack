# Construir un centro de eventos

En este laboratorio, creará un centro de eventos y revisará elementos semánticos como header, nav, article y más.

## Objetivos

En este laboratorio, utilizarás elementos HTML semánticos para crear la estructura de una página web. Agregarás contenido e imágenes para que parezca un centro de eventos real.

Responde a las historias de usuario a continuación y completa todas las pruebas necesarias para completar el laboratorio.

## Historias de usuario

1. Debe tener un elemento de `header`.

1. Dentro del elemento de `header`, debe tener un elemento `h1` que contenga el texto `"Event Hub"` y un elemento `nav`.

1. Dentro del elemento `nav`, debe tener una lista desordenada de dos elementos con enlaces a diferentes secciones de la página. El primer elemento debe contener el texto `"Upcoming Events"` y el segundo, el texto `"Past Events"`.

1. Cada enlace debe estar representado por un elemento `a` con un atributo `href` que enlaza a la sección correspondiente de la página, `#upcoming-events` y `#past-events` respectivamente.

1. Debe tener un elemento `main` que contenga las diferentes secciones de la página.

1. Dentro del elemento `main`, debe tener dos elementos de `section`.

1. El primer elemento de `section` debe tener un atributo `id` con el valor `"upcoming-events"`.

1. Dentro de la sección `#upcoming-events`, debe tener:

    - Un elemento `h2` con el texto `"Upcoming Events"`.

    - Dos elementos de `article`. Cada `article` debe representar un evento y debe tener:

      - Un elemento `h3` para el título del evento.

      - Un elemento `p` para la descripción del evento. Puedes agregar una fecha al final si lo deseas.

1. El segundo elemento de `section` debe tener un atributo `id` con el valor `"past-events"`.

1. Dentro de la sección `#past-events`, debes tener:

    - Un elemento `h2` con el texto "Eventos Pasados".

    - Dos elementos `article`. Cada elemento `article` debe representar un evento pasado y debe tener:

      - Un elemento `h3` para el título del evento.

      - Un elemento `p` para la descripción del evento. Puedes agregar una fecha al final si lo deseas.

      - Un elemento `img` con el atributo `src` que apunta a un archivo de imagen y el atributo `alt` con una descripción de la imagen.

>[!NOTE]
> Puedes usar cualquier texto para las descripciones y fechas de los eventos. Puedes usar las siguientes URL de imagen si lo deseas:

`https://cdn.freecodecamp.org/curriculum/labs/past-event1.jpg`
`https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg`
