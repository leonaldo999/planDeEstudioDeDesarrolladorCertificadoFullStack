# Listas de estilos y enlaces

En esta sección, exploraremos cómo transformar elementos de navegación y organización. Aprenderá a personalizar las listas (ul, ol) eliminando viñetas predeterminadas o usando imágenes personalizadas. Además, dominaremos el diseño de enlaces, controlando sus estados mediante pseudo-clases (:hover, :active, :visited) para crear menús interactivos y una experiencia de usuario profesional y moderna.

---

## ¿Cómo se espacian los elementos de una lista utilizando el margen o la altura de línea?

Los márgenes y la altura de línea son esenciales para espaciar los elementos de una lista y mejorar así la legibilidad y el atractivo visual.

En primer lugar, ¡comencemos a espaciar los elementos de una lista utilizando márgenes!

Los márgenes se pueden utilizar para crear espacio entre los elementos de una lista aplicando propiedades de margen a los elementos `li`. Este método permite controlar el espaciado fuera de cada elemento de la lista, aumentando o disminuyendo eficazmente la distancia entre ellos.

Veamos un ejemplo de una lista desordenada con tres elementos.

- **Codigo Ejemplo**
  
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

De forma predeterminada, HTML no aplicará mucho espacio entre los elementos de la lista.

Para aplicar algo de espacio en la parte inferior de cada elemento de la lista, puede utilizar la propiedad `margin-bottom` de la siguiente manera:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

  ```css
  li {
    margin-bottom: 40px;
  }
  ```

En este ejemplo, se aplicará un margen de `40px` a la parte inferior de cada elemento de la lista dentro de la lista desordenada.

Otra forma de espaciar los elementos de la lista sería utilizar la propiedad `line-height`.

La propiedad `line-height` ajusta el espaciado vertical entre las líneas de texto dentro de un solo elemento de la lista.

Aunque afecta principalmente al espaciado entre las líneas de texto dentro de cada elemento, también puede influir indirectamente en el espaciado general entre los elementos de la lista si estos contienen solo una línea de texto.

Si los elementos de la lista tienen varias líneas de texto, la `line-height` afectará al espaciado entre esas líneas, pero no ajustará directamente el espaciado entre los elementos separados de la lista.

Para controlar el espaciado entre elementos individuales de la lista, se deben utilizar las propiedades `margin` o `padding`.

Utilizando la misma lista desordenada de antes, aquí hay un ejemplo de cómo aplicar `line-height` a los elementos de la lista:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

  ```css
  li {
    line-height: 2; 
  }
  ```

En este ejemplo, `line-height: 2;` establece la altura de línea en el doble del tamaño de la fuente, creando más espacio vertical dentro de cada elemento de la lista.

---

## Cuestionario 1

- **1.¿Qué propiedad CSS utilizarías para crear espacio entre los elementos de una lista ajustando el espacio fuera de cada elemento `li`?**

  - [ ] a) `padding`
  - [ ] b) `line-height`
  - [x] c) `margin` //correcto
  - [ ] d) `border`

- **2.Dada la regla CSS `li { margin-bottom: 15px; }`, ¿qué efecto tiene esto en los elementos de la lista?**

  - [ ] a) Añade `15px` de espacio dentro de cada elemento de la lista.
  - [ ] b) Añade `15px` de espacio entre el contenido y el `border` de cada elemento de la lista.
  - [x] c) Añade `15px` de espacio debajo de cada elemento de la lista. //correcto
  - [ ] d) Añade `15px` de espacio encima de cada elemento de la lista.

- **3.¿Qué controla la propiedad line-height en CSS?**

  - [ ] a) El `width` del contenido.
  - [ ] b) El espacio dentro del `border` de un elemento.
  - [x] c) El espacio vertical entre las líneas de texto dentro de un elemento. //correcto
  - [ ] d) El espacio fuera del `border` de un elemento.

---

## ¿Cómo funcionan las diferentes propiedades de estilo de lista?

En CSS, la propiedad `list-style` se utiliza para controlar la apariencia de las listas en una página web.

Tanto si trabajas con listas ordenadas (`ol`) como con listas desordenadas (`ul`), la propiedad `list-style` te permite personalizar cómo se muestran los elementos de la lista.

La propiedad `list-style` es en realidad una abreviatura de otras tres propiedades:

- `list-style-type`
- `list-style-position`
- `list-style-image`

Cada una de ellas desempeña un papel diferente en la definición del aspecto de las listas.

La propiedad `list-style-type` te permite definir el tipo de viñeta o número utilizado en una lista.

Para las listas no ordenadas, puedes elegir entre varios estilos de viñetas, como discos, círculos o cuadrados.

Para las listas ordenadas, puedes utilizar diferentes sistemas de numeración, como decimales, números romanos o incluso caracteres alfabéticos.

A continuación se muestra un ejemplo del uso de `list-style-type`:

- **Codigo Ejemplo**
  
  ```html
  <ul style="list-style-type: square;">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

En este ejemplo, los puntos de la lista sin ordenar se cambian por cuadrados.

La propiedad `list-style-type` es la más utilizada de las tres, ya que afecta directamente al aspecto de los puntos o números de las listas.

La propiedad `list-style-position` controla la posición de los puntos o números en relación con el contenido del elemento de la lista. Hay dos valores que se pueden utilizar: `inside` y `outside`.

Cuando se utiliza el valor `outside`, la viñeta o el número aparecen fuera del contenido, que es el comportamiento predeterminado.

Y, cuando se utiliza el valor `inside`, la viñeta o el número aparecen dentro del contenido, lo que puede hacer que el texto se ajuste y se alinee con la viñeta o el número.

A continuación se muestra un ejemplo del uso de `list-style-position`:

- **Codigo Ejemplo**
  
  ```html
  <ul style="list-style-position: inside;">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <ul style="list-style-position: outside;">
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
  </ul>
  ```

En este ejemplo, se proporcionan valores `inside` y `outside` para dos etiquetas de lista desordenada diferentes.

La propiedad `list-style-position` puede resultar útil cuando se desea controlar la alineación del contenido de la lista, especialmente en situaciones en las que hay varias líneas de texto en un solo elemento de la lista.

La propiedad `list-style-image` permite utilizar una imagen como viñeta para los elementos de la lista. Esto puede resultar útil para añadir un estilo visual único a las listas.

A continuación se muestra un ejemplo del uso de `list-style-image`:

- **Codigo Ejemplo**
  
  ```html
  <head>
    <style>
      ul {
        list-style-image: url('https://cdn.freecodecamp.org/platform/universal/freecodecamp-org-gravatar.jpeg');
        list-style-position: inside;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
  ```

En este ejemplo, los puntos se sustituyen por un logotipo personalizado de freeCodeCamp, lo que añade un toque personalizado a la lista.

Cuando utilices `list-style-image`, asegúrate de que la imagen que elijas sea pequeña y adecuada para el diseño de tu página web. Si la imagen es demasiado grande o compleja, puede dificultar la lectura de la lista.

Puede combinar las tres propiedades (`list-style-type`, `list-style-position` y `list-style-image`) en una única propiedad abreviada de estilo de lista.

El orden de los valores en la abreviatura no importa, pero los tres se pueden especificar juntos.

A continuación se muestra un ejemplo en el que se utiliza la propiedad abreviada:

- **Codigo Ejemplo**
  
  ```html
  <ul style="list-style: square inside url('https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg');">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

En este ejemplo, los elementos de la lista utilizan viñetas cuadradas, situadas dentro del contenido, con una imagen personalizada como viñeta.

Sin embargo, si la imagen no está disponible o no se muestra, se utilizarán las viñetas cuadradas como alternativa.

---

## Cuestionario 2

- **1.¿Qué propiedad de `list-style` utilizarías para cambiar las viñetas por círculos en una lista desordenada?**

  - [ ] a) `list-style-image`
  - [ ] b) `list-style-position`
  - [x] c) `list-style-type` //correcto
  - [ ] d) `list-style`

- **2.Si desea que las viñetas de una lista se alineen con el contenido del texto, ¿qué valor de `list-style-position` debe utilizar?**

  - [ ] a) `outside`
  - [x] b) `inside` //correcto
  - [ ] c) `center`
  - [ ] d) `left`

- **3.¿Qué propiedad te permite sustituir la viñeta predeterminada por una imagen personalizada?**

  - [ ] a) `list-style-type`
  - [ ] b) `list-style-position`
  - [ ] c) `list-style`
  - [x] d) `list-style-image` //correcto

---

## ¿Por qué son importantes los estilos predeterminados de los enlaces para la usabilidad en la web?

Los estilos predeterminados de los enlaces desempeñan un papel crucial en la mejora de la usabilidad y la accesibilidad en la web.

Estos estilos, normalmente azul para los enlaces no visitados y morado para los enlaces visitados, se han convertido en un estándar que los usuarios esperan y en el que confían cuando navegan por los sitios web.

El objetivo principal de los estilos predeterminados de los enlaces es proporcionar señales visuales claras que ayuden a los usuarios a distinguir entre los elementos interactivos y no interactivos de una página web.

Esta distinción es fundamental para crear una experiencia de navegación intuitiva y fácil de usar.

Consideremos los estilos predeterminados básicos para los enlaces:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="#">Example link</a>
  ```

  ```css
  a:link {
    color: blue;
    text-decoration: underline;
  }
  
  a:visited {
    color: purple;
  }
  ```

Estos estilos cumplen varias funciones importantes.

En primer lugar, el color azul de los enlaces no visitados destaca sobre la mayoría de los colores de fondo y el texto, lo que facilita su identificación. Este contraste es fundamental para que los usuarios puedan examinar rápidamente una página y encontrar elementos de navegación o información importante.

El subrayado enfatiza aún más que el texto es clicable, lo que proporciona una señal visual adicional. Esto resulta especialmente útil para los usuarios que padecen daltonismo o tienen dificultades para distinguir los colores.

El cambio de color de los enlaces visitados (normalmente a morado) ayuda a los usuarios a llevar un registro de los sitios que han visitado. Esta función es muy valiosa para navegar por sitios web grandes o realizar búsquedas, ya que evita que los usuarios vuelvan a visitar inadvertidamente las mismas páginas.

Considere este ejemplo de HTML:

- **Codigo Ejemplo**
  
  ```html
  <p>
    Learn more about 
    <a href="https://www.example.com/cats">cats</a> 
    and 
    <a href="https://www.example.com/dogs">dogs</a>.
  </p>
  ```

Sin ningún CSS personalizado, la mayoría de los navegadores mostrarán estos enlaces en azul y subrayados. Al hacer clic en uno de los enlaces, su color cambiará a morado, lo que proporcionará al usuario información inmediata sobre su historial de navegación.

Aunque es habitual que los diseñadores modifiquen estos estilos predeterminados para adaptarlos a la estética del sitio web, es fundamental mantener los principios básicos que los sustentan.

Si decide cambiar los estilos predeterminados, asegúrese de que los enlaces sigan siendo claramente distinguibles del texto normal, que haya una diferencia visible entre los enlaces visitados y los no visitados, y que los colores elegidos proporcionen un contraste suficiente con el fondo.

Por ejemplo, podría utilizar un estilo personalizado como este:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```
  
  ```css
  a:link {
    color: blue;
    text-decoration: none;
    border-bottom: 1px solid blue;
  }
  
  a:visited {
    color: purple;
    border-bottom: 1px solid purple;
  }
  ```

Esto mantiene la combinación de colores azul y morado, pero sustituye el subrayado por un borde inferior para darle un aspecto más moderno.

También es importante tener en cuenta los diferentes estados de los enlaces. Además de los estados predeterminado y visitado, los enlaces suelen tener los estados «al pasar el cursor» y «activo»:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```
  
  ```css
  a:hover {
    color: red;
  }
  
  a:active {
    color: darkorange;
  }
  ```

Estos estados proporcionan información inmediata a los usuarios cuando interactúan con los enlaces, lo que mejora la usabilidad general del sitio.

En conclusión, aunque es posible personalizar los estilos de los enlaces, deben mantenerse los principios que subyacen a los estilos predeterminados.

Estos desempeñan un papel crucial en la creación de una experiencia web usable y accesible, ya que ayudan a los usuarios a navegar e interactuar con el contenido de forma eficaz.

A la hora de diseñar los estilos de los enlaces de sus sitios web, dé siempre prioridad a la claridad y a la experiencia del usuario.

---

## Cuestionario 3

- **1.¿Por qué es importante tener un color distinto para los enlaces visitados?**

  - [ ] a) Hace que el sitio web sea más colorido.
  - [x] b) Ayuda a los usuarios a llevar un registro de las páginas que ya han visitado. //correcto
  - [ ] c) Los enlaces visitados son más importantes que los enlaces no visitados.
  - [ ] d) Es un requisito legal para los sitios web.

- **2.¿Cuál de las siguientes opciones NO suele ser el estilo predeterminado para los enlaces en la mayoría de los navegadores?**

  - [ ] a) Color azul para los enlaces no visitados.
  - [ ] b) Subraya todos los enlaces.
  - [ ] c) Color morado para los enlaces visitados.
  - [x] d) Negrita para todos los enlaces. //correcto

- **3.Al personalizar los estilos de los enlaces, ¿qué principio importante hay que mantener?**

  - [ ] a) Todos los enlaces deben ser de color azul.
  - [ ] b) Los enlaces siempre deben estar subrayados.
  - [x] c) Los enlaces deben distinguirse claramente del texto normal. //correcto
  - [ ] d) Los enlaces visitados y no visitados deben tener el mismo estilo.

---

## ¿Cómo se diseñan los diferentes estados de los enlaces?

Hay diferentes estados de un enlace, incluyendo `link`, `visited`, `hover`, `focus`, y `active`. Estos estados son importantes para ayudar a los usuarios a reconocer los enlaces y proporcionar una retroalimentación clara después de las interacciones, lo que mejora tanto la usabilidad como la accesibilidad.

El diseño de estos diferentes estados de los enlaces es crucial para la usabilidad y la accesibilidad, ya que proporciona pistas visuales sobre el estado actual del enlace. Esto ayuda a los usuarios a comprender qué enlaces han visitado, con qué enlace están interactuando y qué sucederá cuando hagan clic.

Para los usuarios con discapacidades visuales o cognitivas, estos estilos distintos pueden hacer que la navegación sea mucho más fácil e intuitiva.

Además, los estados de enlace claros mejoran la experiencia general del usuario al proporcionar información inmediata sobre las interacciones del usuario, lo que reduce la confusión y mejora la navegabilidad del sitio.

Estos estados se pueden diseñar utilizando algo llamado `pseusdo-clase` en CSS.

Una pseudoclase es una palabra clave añadida a un selector que especifica un estado especial del elemento seleccionado.

Por ejemplo, `:hover` puede cambiar el color de un botón cuando el puntero del usuario se sitúa sobre él, mientras que `:visited` puede cambiar el color de un enlace que ya ha sido visitado.

Las pseudoclases permiten aplicar estilos a los elementos en función de su estado o de la interacción del usuario con ellos, sin necesidad de añadir marcas adicionales en el HTML.

La sintaxis de una `pseudo-clase` es similar a la siguiente, donde `A` es el selector y `:B` es la `pseudo-clase`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```

Para comprender mejor cómo aplicar estilos a los diferentes estados de los enlaces, veamos algunos ejemplos.

La pseudoclase `:link` aplica estilos a los enlaces no visitados, indicando que se puede hacer clic en ellos.

A continuación se muestra un ejemplo en el que se selecciona un elemento de anclaje y se utiliza la pseudoclase `:link`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```
  
  ```css
  /* Normal state (unvisited link) */
  a:link { 
    color: red;
  }
  ```

El ejemplo anterior cambiará el color azul predeterminado del enlace a `red` cuando no se haya visitado.

`:visited` aplica estilos a los enlaces que ya se han visitado o en los que se ha hecho clic, lo que ayuda a los usuarios a realizar un seguimiento de los enlaces en los que han hecho clic anteriormente. A continuación se muestra un ejemplo de uso de la pseudoclase `:visited`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```
  
  ```css
  /* Visited link */
  a:visited {
    color: green;
  }
  ```

Este código cambiará el color del enlace a `green` cuando se haga clic en él.

`:hover` cambia el estilo del enlace cuando el usuario pasa el cursor por encima, lo que proporciona una señal visual de que el enlace es interactivo. A continuación se muestra un ejemplo de uso de la pseudoclase `:hover`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```
  
  ```css
  /* Hover state */
  a:hover {
    color: green;
  }
  ```

Este código coloreará los enlaces de `green` cuando se pase el ratón por encima.

`:focus` añade estilos alrededor del enlace cuando está enfocado, como al navegar con el teclado o al mejorar la accesibilidad.

Aquí hay un ejemplo que utiliza la propiedad `outline` para aplicar un contorno naranja sólido cuando el enlace está enfocado.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```
  
  ```css
  /* Focus state */
  a:focus {
    outline: 2px solid orange;
  }
  ```

`:active` cambia los estilos del enlace mientras se hace clic en él, lo que proporciona al usuario una respuesta inmediata de que su acción se está registrando. A continuación se muestra un ejemplo de uso de la pseudoclase `:active`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <a href="/">Example link</a>
  ```
  
  ```css
  /* Active state */
  a:active {
    color: pink;
  }
  ```

Este ejemplo de código hará que el enlace se vuelva de color `pink` inmediatamente al hacer clic en él.

---

## Cuestionario 4

- **1.¿Qué pseudoclase CSS se utiliza para aplicar estilos a los enlaces que no se han visitado?**

  - [ ] a) `:visited`
  - [x] b) `:link` //correcto
  - [ ] c) `:hover`
  - [ ] d) `:active`

- **2.¿Qué cambio visual suele implicar el estado de `:hover` en CSS?**

  - [ ] a) El enlace se hace más grande.
  - [x] b) El color del texto del enlace cambia. //correcto
  - [ ] c) El texto del enlace aparece en negrita.
  - [ ] d) El texto del enlace está subrayado.

- **3.¿Qué pseudo-clase CSS utilizarías para añadir un contorno visible alrededor de un enlace cuando se navega por él con el teclado?**

  - [ ] a) `:link`
  - [ ] b) `:hover`
  - [x] c) `:focus` //correcto
  - [ ] d) `:active`

---
