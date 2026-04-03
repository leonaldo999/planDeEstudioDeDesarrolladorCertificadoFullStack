# Diseña la maquetación de un periódico

---

## Historias de usuario

1. Tu página debe contener un elemento `main` con la clase `newspaper-layout`.

2. El elemento `.newspaper-layout` debe incluir un `header` con la clase `title` que contenga una etiqueta `h1` para mostrar el nombre del periódico.

3. El elemento `.newspaper-layout` debe incluir un `article` con la clase `feature-article` para el artículo de noticias principal.

4. El elemento `.feature-article` debe incluir un elemento `h2` para el título del artículo, seguido de un elemento `p` para el contenido del artículo.

5. Debes agregar tres elementos `article` más para artículos más pequeños, con las clases `small-article1`, `small-article2` y `small-article3`.

6. Cada uno de los artículos más pequeños debe incluir un elemento `h3` para el título del artículo, seguido de un elemento `p` para el contenido del artículo.

7. El `.newspaper-layout` debe incluir un elemento `article` con la clase `secondary-article` para una sección de noticias adicional.

8. El `.secondary-article` debe incluir un elemento `h2` para el título del artículo, seguido de un elemento `p` para el contenido del artículo.

9. El diseño `.newspaper-layout` debe incluir una `figure` con la clase `cover-image` para mostrar una imagen que represente el contenido del periódico.

10. Los elementos con las clases `title`, `feature-article`, `secondary-article`, `cover-image`, `small-article1`, `small-article2` y `small-article3` deben tener la propiedad `grid-area` establecida con el mismo nombre de clase.

11. Tu `.newspaper-layout` debe usar CSS Grid con una propiedad `grid-template-areas` para definir la disposición de las secciones:

    - El .title debe ocupar toda la fila superior.

    - El .feature-article debe ocupar dos columnas en la segunda fila, con el .cover-image en la tercera columna.

    - El .secondary-article debe ocupar dos columnas en la tercera fila, con el .cover-image en la tercera columna.

    - Los tres artículos pequeños deben aparecer en la cuarta fila.

12. El `.newspaper-layout` debe tener una propiedad `grid-template-columns` que divida el espacio en tres columnas iguales.

13. Debes establecer la propiedad `grid-template-rows` del .`newspaper-layout` en `auto` para la primera fila y dividir el espacio restante en partes iguales para las demás filas.

14. Debes agregar un espacio entre los elementos de la cuadrícula.

15. Asegúrate de que la imagen dentro de `.cover-image` quepa en el espacio designado configurando su `max-width` en `100%`.

Nota: Asegúrate de vincular tu hoja de estilos en tu HTML y aplicar tu CSS.
