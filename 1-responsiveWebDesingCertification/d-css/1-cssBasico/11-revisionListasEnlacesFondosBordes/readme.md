# Revisión de listas, enlaces, fondos y bordes

Este bloque dominamos la estructura y estética de los contenedores web:

- **Listas y Enlaces**: Son la base de la navegación. Las listas (`<ul>`, `<li>`) organizan la información, mientras que los enlaces (`<a>`) crean la interactividad. Se personalizan eliminando estilos por defecto (`list-style: none`, `text-decoration: none`) y gestionando sus estados visuales con pseudo-clases como `:hover`.

- **Fondos (`Backgrounds`)**: Gestionan la capa visual profunda. Permiten usar colores, imágenes o degradados, controlando su escala (`cover`, `contain`), repetición y comportamiento ante el scroll (`fixed`).

- **Bordes y Geometría**: Definen los límites físicos de los elementos. Mientras que `border` añade grosor y estilo al Modelo de Caja, `border-radius` suaviza la interfaz. El `outline` actúa como un contorno externo que no desplaza otros elementos, siendo clave para la accesibilidad.

---

## Estilo de las listas

- **Propiedad `line-height`**: esta propiedad se utiliza para crear espacio entre las líneas de texto. Los valores aceptados para `line-height` incluyen la palabra clave `normal`, números, porcentajes y unidades de longitud como la unidad `em`.

- **Propiedad `list-style-type`**: esta propiedad se utiliza para especificar el marcador de un elemento de la lista. Los valores aceptables pueden incluir un círculo, un disco o un decimal.

- **Propiedad `list-style-position`**: esta propiedad se utiliza para establecer la posición del marcador de la lista. Los únicos dos valores aceptables son inside y outside.

- **Propiedad `list-style-image`**: esta propiedad se utiliza para emplear una imagen como marcador de elemento de lista. Un caso de uso habitual es utilizar la función `url` con un valor establecido en una ubicación de imagen válida.

---

## Espaciar elementos de lista utilizando `margin`

- Además de la `line-height`, los márgenes también se pueden utilizar en CSS para mejorar el espaciado y la legibilidad de los elementos de lista.

- Los márgenes crean espacio fuera de cada elemento `li`, lo que permite controlar el espacio entre los elementos de la lista.

- `margin-bottom` se utiliza para crear espacio debajo de cada elemento de la lista. Por ejemplo, `margin-bottom: 10px`; creará un espacio de 10 píxeles debajo de cada elemento de la lista.

---

## Enlaces de estilo

- `pseudo-clase`: es una palabra clave que se añade a un selector y que permite seleccionar elementos en función de un estado concreto. Entre los estados más comunes se encuentran los estados `:hover`, `:visited` y `:focus`.

- `pseudo-clase :link`: esta pseudoclase se utiliza para aplicar estilos a los enlaces que el usuario aún no ha visitado.

- `pseudo-clase :visited`: esta pseudoclase se utiliza para aplicar estilos a los enlaces que el usuario ya ha visitado.

- `pseudo-clase :hover`: esta pseudoclase se utiliza para aplicar estilos a los elementos sobre los que el usuario está pasando el cursor activamente.

- `pseudo-clase :focus`: esta pseudoclase se utiliza para aplicar estilos a un elemento cuando recibe el foco. Algunos ejemplos serían los elementos de `input` o `select` en los que se hace clic o se pulsa la tecla Tab para enfocarlos.

- `pseudo-clase :active`: esta pseudoclase se utiliza para aplicar estilos a un elemento que ha sido activado por el usuario. Un ejemplo común sería cuando el usuario hace clic en un botón.

---

## Trabajar con Backgrounds y Borders

- **Propiedad `background-size`**: esta propiedad se utiliza para establecer el tamaño del fondo de un elemento. Algunos valores comunes son `cover`, para que la imagen de fondo cubra todo el elemento, y `contain`, para que la imagen de fondo se ajuste al elemento.

- **Propiedad `background-repeat`**: esta propiedad se utiliza para determinar cómo se deben repetir las imágenes de fondo a lo largo de los ejes horizontal y vertical. El valor predeterminado de `background-repeat` es `repeat`, lo que significa que la imagen se repetirá tanto horizontal como verticalmente. También se puede especificar que no haya repetición utilizando la propiedad `no-repeat`.

- **Propiedad `background-position`**: esta propiedad se utiliza para especificar la posición de la imagen de fondo. Se puede establecer en una longitud específica, un porcentaje o valores de palabras clave como top, `bottom`, `left`, `right` y `center`.

- **Propiedad `background-attachment`**: esta propiedad se utiliza para especificar si la imagen de fondo debe desplazarse con el contenido o permanecer fija en su lugar. Los valores principales son `scroll` (predeterminado), donde la imagen de fondo se desplaza con el contenido, y `fixed`, donde la imagen de fondo permanece en la misma posición en la pantalla.

- **Propiedad `background-image`**: esta propiedad se utiliza para establecer la imagen de fondo de un elemento. Se pueden establecer varias imágenes de fondo al mismo tiempo y utilizar las funciones `url`, `radial-gradient` o `linear-gradient` como valores.

- **Propiedad `background`**: es la propiedad abreviada para establecer todas las propiedades de fondo en una sola declaración. A continuación se muestra un ejemplo de cómo establecer la imagen de fondo y configurarla para que no se repita: `background: no-repeat url("example-url-goes-here");`

- **Buen contraste entre los colores de fondo y de primer plano**: es importante asegurarse de que los colores de fondo y de primer plano tengan un buen contraste para que el texto sea legible. Las Pautas de Accesibilidad al Contenido en la Web (WCAG) recomiendan una relación de contraste mínima de 4,5:1 para el texto normal y de 3:1 para el texto grande.

---

## Bordes

- **Propiedad `border-top`**: Esta propiedad se utiliza para establecer los estilos del borde superior de un elemento. `border-top: 3px solid blue;` establece un borde azul sólido de 3-píxeles de ancho en la parte superior del elemento.

- **Propiedad `border-right`**: Esta propiedad se utiliza para establecer los estilos del borde derecho de un elemento. `border-right: 2px solid red;` establece un borde rojo sólido de 2-píxeles de ancho en el lado derecho del elemento.

- **Propiedad `border-bottom`**: Esta propiedad se utiliza para establecer los estilos del borde inferior de un elemento. `border-bottom: 1px dashed green;` establece un borde verde discontinuo de 1-píxel de ancho en la parte inferior del elemento.

- **Propiedad `border-left`**: esta propiedad se utiliza para establecer los estilos del borde izquierdo de un elemento. `border-left: 4px dotted orange;` establece un borde naranja punteado de 4-píxeles de ancho en el lado izquierdo del elemento.

- **Propiedad `border`**: esta es la propiedad abreviada para establecer el ancho, el estilo y el color del borde de un elemento. `border: 1px solid black;` establece un borde negro sólido de 1-píxel de ancho.

- **Propiedad `border-radius`**: esta propiedad se utiliza para crear esquinas redondeadas para el borde de un elemento.

- **Propiedad `border-style`**: esta propiedad se utiliza para establecer el estilo del borde de un elemento. Algunos valores aceptados son `solid`, `dashed`, `dotted`, y `double`.

---

## Degradados

- **Función `linear-gradient()`**: esta función CSS se utiliza para crear una transición entre varios colores a lo largo de una línea recta.

- **Función `radial-gradient()`**: esta función CSS crea una imagen que irradia desde un punto concreto, como un círculo o una elipse, y realiza una transición gradual entre varios colores.

---
