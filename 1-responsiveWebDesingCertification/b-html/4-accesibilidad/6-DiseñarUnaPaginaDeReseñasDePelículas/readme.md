# Diseñar una página de reseñas de películas

En este laboratorio, crearás una página de reseñas de películas.

Practicarás conceptos como HTML semántico, atributos `alt`, listas accesibles y ocultación de contenido decorativo para lectores de pantalla mediante `aria-hidden`.

## Historias de usuario

- Debe tener un elemento `main`.

- Dentro del elemento `main`, debe tener un elemento `h1` para el título de la película.

- Debajo del elemento `h1`, debe tener un elemento `img` que muestre la carátula de la película. El elemento `img` debe tener un texto `alt` descriptivo de la imagen. Si lo desea, puede utilizar la siguiente imagen: `https://cdn.freecodecamp.org/curriculum/labs/rise-beyond-2.png`.

- Debe tener un elemento `p` que contenga una breve descripción de la película.

- Debe tener otro elemento `p` para mostrar la calificación de la película. Dentro de él, deberías tener estos elementos en el orden listado:

  - Un elemento `strong` con el texto `Movie Rating:`.

  - Un elemento `span` con un atributo `aria-hidden` establecido en `true` que contenga una representación visual de la calificación mediante estrellas `⭐⭐⭐⭐⭐⭐⭐⭐⭐☆`.

  - Un valor numérico, que representa la calificación, entre paréntesis (por ejemplo, `9.2/10`) después del span.

- Debe tener un elemento `h2` con el texto `Cast Members`.

- Debe tener un elemento `ul`.

- Dentro del elemento `ul`, debe tener varios elementos `li` que contengan cada uno un elemento `strong` para el nombre del actor seguido del nombre del personaje correspondiente precedido del texto `as`. (por ejemplo, `James Holloway como Ethan Carter`).
