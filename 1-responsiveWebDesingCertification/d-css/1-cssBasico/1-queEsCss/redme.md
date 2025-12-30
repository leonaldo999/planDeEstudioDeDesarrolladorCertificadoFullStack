# Que es CSS

Los siguientes videos de conferencias tratan sobre CSS. Aprenderá qué es CSS y su función en la web, una regla CSS y su anatomía, las tres formas de escribir CSS y cuándo usar cada una, elementos en línea y en bloque, y muchos más.

## ¿Qué es CSS y cuál es su papel en la web?

CSS, que significa Hojas de Estilo en Cascada, es un componente crucial del desarrollo web moderno. Es un lenguaje de marcado que se utiliza para aplicar estilos a HTML.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css" />

  <nav class="navbar">
      <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
  </nav>
  ```

  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f4f4f4;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem 2rem;
    color: white;
  }
  
  .navbar .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #ff9800;
  }
  ```

En términos más simples, si HTML es la estructura de una página web, CSS es lo que la hace lucir bien.

La función principal de CSS es separar el contenido de una página web de su presentación visual.

Esta separación permite a los desarrolladores web crear sitios web más flexibles y fáciles de mantener.

Con CSS, puedes controlar el diseño, los colores, las fuentes y la apariencia visual general de las páginas web sin alterar la estructura HTML.

Consideremos una analogía sencilla. Si imaginamos un sitio web como una casa, HTML sería la base y el marco, mientras que CSS sería la pintura, el papel tapiz y la decoración que hacen que la casa sea visualmente atractiva y única.

CSS funciona seleccionando elementos HTML y aplicándoles estilos.

Estos estilos pueden incluir propiedades como color, tamaño de fuente y muchas más. Al cambiar estas propiedades, puedes modificar drásticamente la apariencia de una página web sin modificar su contenido.

Uno de los aspectos más poderosos de CSS es su capacidad para crear diseños responsivos.

Esto significa que con CSS puedes hacer que tu sitio web se vea genial en cualquier dispositivo, ya sea una computadora de escritorio, una tableta o un teléfono inteligente.

CSS le permite ajustar diseños, tamaños de fuente y otros elementos visuales según el tamaño de la pantalla del dispositivo que visualiza el sitio web.

Otra característica importante de CSS es su naturaleza en cascada, de donde proviene la palabra "cascading" en su nombre.

Esto significa que los estilos se pueden heredar y anular, lo que permite una estructura jerárquica de estilos.

CSS también admite el uso de hojas de estilo externas.

Esto significa que puedes mantener todas tus reglas de estilo en un archivo separado, que luego puede vincularse a múltiples páginas HTML.

Esta función mejora considerablemente la facilidad de mantenimiento de los sitios web, especialmente los más grandes. En lugar de tener que cambiar los estilos en cada página, puedes realizar cambios en un solo archivo CSS que afectarán a todas las páginas enlazadas.

En el mundo del desarrollo web, CSS juega un papel vital en la creación de sitios web visualmente atractivos, responsivos y fáciles de usar.

Permite a los desarrolladores transformar documentos HTML simples en experiencias web atractivas que captan la atención de los usuarios y mejoran su interacción con el contenido web.

---

## Cuestionario 1

- **1.¿Cuál es el propósito principal de CSS en el desarrollo web?**

  - [ ] a) Para estructurar el contenido de las páginas web.
  - [ ] b) Para manejar la lógica del lado del servidor.
  - [x] c) Separar la presentación de un documento de su contenido. //correcto
  - [ ] d) Para gestionar las operaciones de la base de datos.

- **2.¿Cómo contribuye CSS al diseño web responsivo?**

  - [ ] a) Mediante el manejo de la autenticación de usuarios.
  - [x] b) Permitiendo ajustes de diseño y estilo según el tamaño de la pantalla del dispositivo. //correcto
  - [ ] c) Mejorando el tiempo de respuesta del servidor.
  - [ ] d) Comprimiendo archivos de imagen.

- **3.¿Qué se entiende por naturaleza "en cascada" de CSS?**

  - [ ] a) Se refiere a la forma en que cae el agua en el fondo de un sitio web.
  - [ ] b) Significa que los archivos CSS deben organizarse en un orden específico.
  - [x] c) Permite heredar y anular estilos de forma jerárquica. //correcto
  - [ ] d) Describe qué tan rápido se carga el CSS en un navegador.

---

## ¿Cuál es la Anatomía Básica de una Regla CSS?

CSS es responsable de los estilos de una página web. Todos estos estilos se componen de varias reglas CSS.

Una regla CSS se compone de dos partes principales: un selector y un bloque de declaración.

Echemos un vistazo a la sintaxis básica:

- **Codigo Ejm**
  
  ```css
  selector {
    property: value;
  }
  ```

Un selector es un patrón utilizado en CSS para identificar y orientar elementos HTML específicos para el estilo.

Ejemplos de selectores incluyen selectores de tipo, selectores de clase y selectores de ID.

Las llaves proporcionadas en la sintaxis básica se conocen como bloque de declaración. Un bloque de declaración aplica un conjunto de estilos para un selector o selectores determinados.

Dentro del bloque de declaraciones, tendrá una serie de declaraciones. Cada declaración consta de una propiedad y un valor.

La propiedad es el identificador CSS que especifica qué característica se está diseñando. Un ejemplo de una propiedad sería la propiedad background-color.

El valor sería la configuración específica aplicada a esa propiedad. Por ejemplo, si la propiedad es `background-color`, un valor podría ser `purple`, que establece el color de fondo en `purple`.

Después de cada nombre de propiedad, debe colocar dos puntos y, después de cada valor, debe tener un punto y coma.

Ahora que conoces la sintaxis de una regla CSS, echemos un vistazo a un ejemplo.

- **Codigo Ejm**
  
  ```css
  p {
    color: blue;
  }
  ```

En esta regla CSS, un selector de tipo se dirige a todos los elementos de párrafo de la página.

Dentro del bloque de declaración, hay una declaración.

La declaración consiste en la propiedad `color` con un valor establecido en `blue`. Esto cambiará el color del texto de todos los elementos del párrafo a `blue`.

Si desea aplicar el mismo conjunto de estilos a varios selectores, puede crear una lista de selectores con cada selector separado por una coma.

Aquí hay un ejemplo de estilo de múltiples selectores:

- **Codigo Ejm**
  
  ```css
  #title,
  .subheading {
    color: navy;
  }
  ```

En esta lista de selectores, hay un selector de `id` que apunta al elemento HTML con el valor de `id` de `title`. Todos los selectores de `id` deben comenzar con un símbolo hash `#`.

Luego hay una coma seguida de un selector de `class` que apunta a todos los elementos HTML con el valor de `class` de `subheading`. Todos los selectores de clase deben comenzar con un punto `.`

Toda la lista de selectores recibirá el mismo estilo, con el color del texto establecido en `navy`.

---

## Cuestionario 2

- **1.¿Cuál es el propósito de un selector en una regla CSS?**

  - [ ] a) Para aplicar estilos a elementos HTML.
  - [x] b) Para determinar a qué elementos HTML se aplicará la regla. //correcto
  - [ ] c) Para definir las propiedades y valores de estilo específicos.
  - [ ] d) Para crear nuevos elementos HTML.

- **2.¿Cuál de las siguientes reglas CSS cambia correctamente el color del texto de todos los elementos del párrafo a `blue`?**

  - [ ] a)  

      ```css
        p {
          background-color: blue;
        }
      ```

  - [x] b)  
//correcto

      ```css
        p {
          color: blue;
        }
      ```

  - [ ] c)

      ```css
        .p {
          color: blue;
        }
      ```

  - [ ] d)

      ```css
        #p {
          color: blue;
        }
      ```

- **3.Dada la siguiente regla CSS, ¿cuál será el tamaño del texto del elemento HTML de destino?**
  
  ```css
    h1 {
      color: green;
      font-size: 24px;
    }
  ```

  - [ ] a) `green`
  - [ ] b) `24px` //correcto
  - [x] c) `16px`
  - [ ] d) `font-size`

---

## ¿Para qué se utiliza el elemento Meta Viewport?

El elemento meta viewport es un componente crucial en el diseño web responsivo.

Es un elemento meta HTML especial que proporciona al navegador instrucciones sobre cómo controlar las dimensiones y la escala de la página en diferentes dispositivos, especialmente en teléfonos móviles y tabletas.

Echemos un vistazo a la sintaxis básica del elemento meta viewport:

- **Codigo Ejm**
  
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

Este elemento suele ubicarse en la sección `head` del documento HTML. Pero ¿qué significa cada parte del elemento?

Esta sección `width=device-width` indica al navegador que ajuste el ancho de la página al ancho de la pantalla del dispositivo. Esto es esencial para crear diseños adaptables a diferentes tamaños de pantalla.

Establece el `initial-scale=1.0` nivel de zoom inicial al cargar la página por primera vez. Un valor de 1.0 significa que la página se muestra con zoom `100%`, sin escala.

Al utilizar el elemento meta viewport, garantiza que sus páginas web se muestren correctamente en dispositivos móviles.

Sin ella, los navegadores móviles normalmente mostrarán la página con el ancho de una pantalla de escritorio y luego la reducirán, lo que puede generar una mala experiencia de usuario con texto pequeño y difícil de leer.

El elemento meta viewport también le permite controlar si los usuarios pueden acercar o alejar sus páginas web.

Si bien es posible deshabilitar el zoom con el atributo `user-scalable=no`, generalmente se recomienda evitarlo por razones de accesibilidad.

Muchos usuarios confían en la capacidad de hacer zoom para una mejor legibilidad, especialmente aquellos con discapacidades visuales.

He aquí un ejemplo de lo que no se debe hacer:

- **Codigo Ejm**
  
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  ```

En cambio, es mejor diseñar su sitio web para que responda y sea legible en diferentes niveles de zoom, garantizando que todos los usuarios puedan acceder cómodamente a su contenido.

El elemento meta viewport juega un papel crucial en la creación de sitios web optimizados para dispositivos móviles.

Garantiza que sus diseños responsivos cuidadosamente elaborados se muestren como está previsto en varios dispositivos, brindando una mejor experiencia de usuario para todos los visitantes de su sitio.

---

## Cuestionario 3

- **1.¿Cuál es el propósito principal de la etiqueta `<meta name="viewport">`?**

  - [ ] a) Para mejorar la velocidad de carga del sitio web.
  - [x] b) Para controlar las dimensiones y la escala de la página en diferentes dispositivos. //correcto
  - [ ] c) Proporcionar descripciones de páginas para motores de búsqueda.
  - [ ] d) Para habilitar la funcionalidad de JavaScript.

- **2.¿Qué hace `width=device-width` en la etiqueta `<meta name="viewport">`?**

  - [ ] a) Establece el ancho de todas las imágenes para que coincida con el ancho del dispositivo.
  - [x] b) Le dice al navegador que ajuste el ancho de la página al ancho de la pantalla del dispositivo. //correcto
  - [ ] c) Ajusta el tamaño de la fuente según el ancho del dispositivo.
  - [ ] d) Limita el ancho máximo de la página web.

- **3.¿Por qué generalmente se recomienda evitar su uso `user-scalable=no`en la etiqueta `<meta name="viewport">`?**

  - [ ] a) Puede provocar que el sitio web se bloquee en ciertos dispositivos.
  - [ ] b) Evita que los motores de búsqueda indexen el sitio web.
  - [x] c) Puede crear problemas de accesibilidad para los usuarios que necesitan hacer zoom. //correcto
  - [ ] d) Hace que el sitio web se cargue más lento en dispositivos móviles.

---

## ¿Cuáles Son Algunos Estilos Predeterminados del Navegador Aplicados a HTML?

Cuando comiences a trabajar con HTML y CSS, notarás que algunos estilos se aplican a tus páginas web incluso antes de escribir CSS. Estos estilos se denominan "estilos predeterminados del navegador" o "estilos de agente de usuario".

Estos estilos predeterminados del navegador proporcionan un formato básico para garantizar que los elementos HTML se muestren de manera legible en todos los navegadores.

Sin embargo, estos estilos pueden variar ligeramente de un navegador a otro, por lo que es importante comprenderlos al diseñar un aspecto coherente para su sitio web.

Echemos un vistazo a algunos estilos predeterminados comunes del navegador aplicados a varios elementos HTML.

Los encabezados son uno de los elementos HTML más utilizados y tienen un estilo predeterminado para tener tamaños y pesos variables.

Por ejemplo, `h1` (el encabezado de nivel más alto) suele estar en negrita y tener un tamaño de fuente mayor en comparación con los encabezados de nivel inferior como `h2`, `h3`, etc.

Estas etiquetas de encabezado ayudan a definir la jerarquía y estructura de su contenido.

El siguiente ejemplo muestra los seis elementos de encabezado de `h1` a `h6`.

- **Codigo Ejm**
  
  ```html
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  ```

Otro elemento con estilos predeterminados es el elemento hr, que crea una regla horizontal que a menudo se usa para separar visualmente secciones de contenido. Los navegadores generalmente aplican un estilo de línea simple a este elemento.

Para entenderlo mejor, veamos este ejemplo de código:

- **Codigo Ejm**
  
  ```html
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <hr>
  <p>Paragraph 3</p>
  <p>Paragraph 4</p>
  ```

La regla horizontal aparece como una línea delgada con espaciado por encima y por debajo del texto para distinguir entre secciones de contenido.

A continuación, veremos el elemento `blockquote`.

Las citas en bloque se utilizan para indicar una sección de texto que es una cita de otra fuente. Los navegadores suelen agregar sangría y, a veces, ponen el texto en cursiva.

La sangría ayuda a diferenciar las citas en bloque del resto del texto, dejando en claro que este contenido se cita de otra fuente.

Echemos un vistazo a este ejemplo de código:

- **Codigo Ejm**
  
  ```html
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <blockquote>I think, therefore I am. (Rene Descartes)</blockquote>
  <p>Paragraph 3</p>
  <p>Paragraph 4</p>
  ```

En el ejemplo anterior, el elemento blockquote producirá una sangría en el texto, aplicada por los estilos predeterminados del navegador.

Otro elemento con estilos predeterminados es el elemento de anclaje (`<a>`), que tiene un estilo predeterminado de color azul y subrayado para que sea reconocible como un enlace.

Echemos un vistazo al siguiente ejemplo HTML:

- **Codigo Ejm**
  
  ```html
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <a href="https://freecodecamp.org/">Visit the freeCodeCamp learn page</a>
  <p>Paragraph 3</p>
  <p>Paragraph 4</p>
  ```

El código anterior tiene cuatro elementos de párrafo con un elemento de anclaje en el medio. El elemento de anclaje tiene un estilo azul con un subrayado para mostrar a los usuarios que vayan a la página de aprendizaje de FreeCodeCamp.

Finalmente, veremos los elementos de la lista desordenada y ordenada.

Los navegadores agregan formato básico a las listas, incluida la sangría y las viñetas o números, según si está utilizando una lista desordenada (`ul`) o una lista ordenada (`ol`).

Echemos un vistazo a un ejemplo:

- **Codigo Ejm**
  
  ```html
  <p>Sample Paragraph</p>
  <ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ol>
  <ul>
    <li>item</li>
    <li>another item</li>
    <li>yet another item</li>
  </ul>
  <p>Ending Paragraph</p>
  ```

En el ejemplo de código anterior, estamos usando una lista desordenada y una lista ordenada. Ambas listas estarán ligeramente sangradas a la derecha de forma predeterminada.

Para todos estos ejemplos, vio cómo el navegador aplicaba espaciado predeterminado, tamaños de fuente variables y pesos a estos elementos HTML.

En conferencias posteriores, aprenderá cómo restablecer algunos de estos estilos predeterminados mediante un restablecimiento de CSS.

---

## Cuestionario 4

- **1.¿Cuál es el estilo predeterminado que se aplica a las etiquetas de encabezado (`h1` a `h6`) en la mayoría de los navegadores?**

  - [ ] a) Todos tienen el mismo tamaño y peso.
  - [x] b) Tienen diferentes tamaños y pesos, siendo h1 el más grande y audaz. //correcto
  - [ ] c) `h1` está en cursiva y `h6` subrayado.
  - [ ] d) Todas las etiquetas de encabezado están centradas de forma predeterminada.

- **2.¿Cómo el elemento `hr` se ve normalmente por defecto en la mayoría de los navegadores?**

  - [x] a) Una línea delgada horizontal con espacio arriba y abajo. //correcto
  - [ ] b) Una línea discontinua que abarca todo el ancho de la página.
  - [ ] c) Una línea negra gruesa sin espacio.
  - [ ] d) Una barra de color que separa secciones.

- **3.¿Cómo se suelen diseñar de forma predeterminada las etiquetas de anclaje (`a`) en los navegadores?**

  - [ ] a) `bold` y `green`.
  - [x] b) `underline` y `blue`. //correcto
  - [ ] c) `italic` y `red`.
  - [ ] d) `underline` y `purple`

---

## ¿Qué Son CSS en Línea, Interno y Externo, y Cuándo Debería Usar Cada Uno?

CSS se puede aplicar a una página web de tres formas principales: en línea, interna o externa.

Cada método tiene su propio caso de uso, ventajas y limitaciones, y saber cuándo usar cada uno es esencial para escribir código limpio, eficiente y fácil de mantener.

Analicemos los tres tipos de CSS y cuándo debe usarlos.

CSS en línea se escribe directamente dentro de un elemento HTML utilizando el atributo `style`. Aplica estilos a un elemento específico.

Aquí hay un ejemplo usando CSS en línea:

- **Codigo Ejm**
  
  ```html
  <p style="color: red;">This is an inline-styled paragraph.</p>
  ```

En este ejemplo, estamos usando el atributo `style` para establecer el texto del párrafo en `red`.

CSS en línea generalmente se usa para estilos rápidos y únicos o para anular otros estilos para un elemento específico.

Sin embargo, debe evitarse en la mayoría de los casos porque puede saturar el HTML y dificultar el mantenimiento del código.

La mayoría de las veces, es mejor usar CSS interno o externo para mantener sus estilos organizados y fáciles de mantener.

El CSS interno se escribe dentro de las etiquetas de estilo dentro de la sección principal de un documento HTML. Aplica estilos a toda la página y es útil cuando necesita aplicar estilo a un solo documento.

Aquí hay un ejemplo de CSS interno:

- **Codigo Ejm**
  
  ```html
  <head>
    <style>
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>This paragraph is styled using internal CSS.</p>
  </body>
  ```

En el ejemplo anterior, el CSS interno aplica texto azul a todos los elementos `p` de la página.

El CSS interno se usa mejor cuando necesita aplicar estilos a una página específica en lugar de a varias páginas. Es útil para sitios web de una sola página o cuando los estilos no necesitan reutilizarse en ningún otro lugar.

Sin embargo, existen algunas desventajas, como no promover la reutilización en varias páginas. Además, al igual que CSS en línea, mezcla HTML y CSS, lo que dificulta el mantenimiento del código en proyectos más grandes.

CSS externo está escrito por separado archivo `.css` y vinculado al documento HTML utilizando el elemento `link` en la sección `head`.

Le permite diseñar varias páginas de manera consistente y es el método preferido en el desarrollo web profesional.

Aquí está la parte HTML de nuestro ejemplo de código:

- **Codigo Ejm**
  
  ```html
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <p>This paragraph is styled using external CSS.</p>
  </body>
  ```

En una conferencia anterior, aprendió que el elemento `link` tiene un atributo `rel` que especifica la relación entre el documento actual y el recurso vinculado, como vincular a una hoja de estilo o un recurso externo.

Por otro lado, el atributo `href` especifica la URL del recurso vinculado, indicando de dónde se debe recuperar el recurso.

Aquí la parte CSS del mismo ejemplo en un archivo separado llamado `style.css`.

- **Codigo Ejm**
  
  ```css
  p {
    color: green;
  }
  ```

Este ejemplo se dirige a todos los elementos de párrafo de la página y establece el color del texto en verde.

CSS externo es ideal para proyectos grandes en los que desea mantener un estilo coherente en varias páginas.

Promueve la separación de preocupaciones al hacer que HTML maneje la estructura y CSS maneje el estilo, lo que hace que el código sea más fácil de mantener y escalar.

Comprender cuándo usar cada tipo de CSS es crucial para un desarrollo web eficiente y efectivo.

En la mayoría de los casos, CSS externo debería ser su enfoque preferido, especialmente para proyectos más grandes y complejos.

---

## Cuestionario 5

- **1.¿Cuándo es más apropiado utilizar CSS en línea?**

  - [ ] a) Para dar estilo a todos los párrafos de un documento.
  - [x] b) Para anular estilos rápidamente en un solo elemento. //correcto
  - [ ] c) Para diseñar un sitio web completo.
  - [ ] d) Para separar preocupaciones en grandes proyectos.

- **2.¿Qué tipo de CSS es el más adecuado para aplicar estilos a una sola página web?**

  - [ ] a) CSS en línea.
  - [ ] b) CSS externo.
  - [x] c) CSS interno. //correcto
  - [ ] d) CSS universal.

- **3.¿Por qué se prefiere el CSS externo en proyectos más grandes?**

  - [ ] a) Permite realizar cambios de estilo rápidos y únicos.
  - [ ] b) Aplica estilos solo a un elemento específico.
  - [x] c) Promueve la separación de preocupaciones y la reutilización en múltiples páginas. //correcto
  - [ ] d) Hace que el HTML sea más complicado.

---

## ¿Cómo funcionan el Ancho y la Altura?

En CSS, las propiedades de `width` y `height` se utilizan para controlar las dimensiones de los elementos en una página web.

Estas propiedades se pueden definir en diferentes unidades, como píxeles (`px`), porcentajes (`%`), unidades de ventana gráfica (`vw`, `vh`) y más.

La propiedad `width` especifica el ancho de un elemento. Si no especifica un ancho, el valor predeterminado se establece en `auto`. Esto significa que el elemento ocupará todo el ancho de su contenedor principal.

La propiedad `height` especifica la altura de un elemento. Del mismo modo, la altura es `auto` de forma predeterminada, lo que significa que se ajustará al contenido interno.

Aquí hay un ejemplo usando las propiedades `width` y `height`:

- **Codigo Ejm**
  
  ```html
  <head>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: skyblue
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
  ```

En este ejemplo, tenemos un elemento `div` con clase llamado `box`. Este elemento ocupará `100px` de alto y ancho, mientras que el color de fondo será `skyblue`.

Los píxeles son una unidad de medida de tamaño fijo en CSS, que proporciona un control preciso sobre las dimensiones.

La propiedad `min-width` especifica el ancho mínimo que puede tener un elemento. Incluso si el contenido interno es más pequeño, el elemento no se reducirá por debajo de este valor.

La `min-height` especifica la altura mínima que puede tener un elemento. Asegura que el elemento no sea más corto que el valor establecido.

Aquí hay un ejemplo:

- **Codigo Ejm**
  
  ```html
  <head>
    <style>
      .box {
        width: 50px;
        min-width: 100px;
        height: 50px;
        min-height: 100px;
        background-color: lightcoral;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
  ```

El ejemplo anterior demuestra cómo funcionan `min-width` y `min-height`.

Aunque la caja tiene su `width` y `height` establecidos en 50px, en realidad será de `100px` por `100px`. Esto se debe a que el `min-width` y el `min-height` se establecen en `100px`, que son más grandes que el `width` y `height` especificados.

Recuerde, si `min-width` o `min-height` son más grandes que `width` o `height`, anularán los valores más pequeños. Esto asegura que los elementos no se vuelvan demasiado pequeños, lo cual es importante para mantener un diseño consistente y utilizable.

El `max-width` especifica el ancho máximo al que puede crecer un elemento, incluso si hay suficiente espacio para que sea más ancho.

El `max-height` especifica la altura máxima a la que puede crecer un elemento, independientemente del tamaño del contenido.

Aquí hay un ejemplo:

- **Codigo Ejm**
  
  ```html
  <head>
    <style>
      .box {
        width: 200px;
        max-width: 150px;
        height: 200px;
        max-height: 150px;
        background-color: lightgreen;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
  ```

El ejemplo anterior demuestra cómo `max-width` y `max-height` anulan `width` y `height`. Aunque la caja está configurada en `200px` por `200px`, en realidad será de `150px` por `150px`. Esto se debe a que `max-width` y `max-height` están configurados en `150px`, que es más pequeño.

Recuerde, cuando `max-width` o `max-height` son más pequeños que `width` o `height`, tienen prioridad. Esto es importante para controlar el tamaño máximo de los elementos en sus diseños.

CSS prioriza el `min-width` y la `min-height` sobre el `width` y la `height`. `max-width` y `max-height` restringen las dimensiones si los valores exceden sus límites.

Por ejemplo, si establece `width` en `600px` y `max-width` en `500px`, el elemento estará limitado a `500px` de ancho. El `max-width` anula la configuración más amplia, manteniendo el elemento dentro del tamaño máximo especificado.

Esto garantiza que los elementos permanezcan dentro de los rangos de tamaño deseados, independientemente de los valores estándar de ancho y alto.

---

## Cuestionario 6

- **1.¿Qué pasará si estableces `width: 600px;` y `max-width: 500px;` en un elemento div?**

  - [ ] a) El elemento será 600px de ancho.
  - [x] b) El elemento será 500px de ancho. //correcto
  - [ ] c) El elemento será 550px de ancho.
  - [ ] d) El elemento será 100px de ancho.

- **2.Si establece `min-height: 200px` y `height: 150px` en un elemento, ¿cuál será el `height` del elemento?**

  - [ ] a) `150px`
  - [ ] b) `100px`
  - [x] c) `200px` //correcto
  - [ ] d) `250px`

- **3.¿Cuál de las siguientes NO es una unidad válida utilizada con la propiedad de ancho?**

  - [x] a) `hv` //correcto
  - [ ] b) `px`
  - [ ] c) `%`
  - [ ] d) `vw`

---

## ¿Cuáles son los diferentes tipos de combinadores CSS?

Los combinadores CSS se utilizan para definir la relación entre selectores en CSS. Ayudan a seleccionar elementos en función de su relación con otros elementos, lo que permite un estilo más preciso y eficiente.

Analizaremos algunos combinadores CSS principales y sus casos de uso, comenzando por el combinador descendiente.

Un combinador descendiente se utiliza para seleccionar elementos que coinciden con el segundo selector si están anidados dentro de un elemento antecesor que coincide con el primer selector. Un antecesor puede ser un elemento padre o el padre de un padre.

Para comprender mejor cómo funciona, veamos un ejemplo.

- **Codigo Ejm**

  ```html
  <link rel="stylesheet" href="styles.css">

  <figure>
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Relaxing Cat">
    <figcaption>A relaxing cat with a border</figcaption>
  </figure>
  ```

  ```css
  figure img {
    border: 4px solid red;
  }
  ```

En el ejemplo anterior, utilizamos el combinador descendiente para seleccionar todos los elementos de imagen dentro de los elementos de `figure` y aplicar un borde `solid red` en los cuatro lados.

Tenga en cuenta que se utiliza un `espacio` entre el selector padre y el selector hijo.

En este caso, la `figure` sería el padre y el `img` sería el hijo.

Si tuviera varias imágenes dentro de un elemento `figure`, utilizar el combinador descendiente sería una buena forma de aplicar un borde negro sólido alrededor de cada una de esas imágenes.

Otro tipo de combinador sería el combinador hijo.

El combinador hijo (`>`) en CSS se utiliza para seleccionar elementos que son hijos directos de un elemento padre específico.

Este combinador se dirige solo a elementos con un padre específico, lo que hace que tus reglas CSS sean más precisas y evita el estilo no deseado de elementos anidados más profundos.

Echemos un vistazo al siguiente ejemplo HTML:

- **Codigo Ejm**

  ```html
  <div class="container">
    <p>First</p>
    <div>
      <p>Second</p>
    </div>
    <div>
      <p>Third</p>
    </div>
  </div>
  ```

En la estructura HTML anterior, la clase `container` se aplica a un elemento `div`.

Dentro de este contenedor, hay un elemento `p` hijo directo (`Primero`), seguido de dos elementos `div` adicionales, cada uno de los cuales contiene un elemento `p` (`Segundo` y `Tercero`).

El primer elemento `p` es un elemento secundario directo del elemento `.container`, mientras que los otros dos elementos `p` están anidados dentro de otros elementos `div`, lo que los convierte en descendientes más profundos.

Para aplicar estilos solo al elemento secundario directo de la clase `container`, puede utilizar el combinador secundario de la siguiente manera:

- **Codigo Ejm**

  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <p>First</p>
    <div>
      <p>Second</p>
    </div>
    <div>
      <p>Third</p>
    </div>
  </div>
  ```
  
  ```css
  .container > p {
    color: blue;
  }
  ```

En el ejemplo anterior, solo estamos apuntando al hijo directo de la clase `container`. Esto le dará al hijo directo el color de texto `blue`.

Debido a que los otros dos elementos de párrafo están anidados dentro de elementos `div`, no se consideran hijos directos de la clase `container` y no obtendrán el color de texto azul.

Otro combinador común sería el combinador de hermanos siguientes.

El combinador de hermanos siguientes (`+`) en CSS selecciona un elemento que sigue inmediatamente a un elemento hermano especificado. Este combinador es útil cuando se desea aplicar estilos a un elemento que sigue directamente a otro elemento, lo que permite aplicar estilos específicos en función de la posición del elemento con respecto a sus hermanos.

Veamos el siguiente ejemplo HTML:

- **Codigo Ejm**

  ```html
  <figure>
    <img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
    />
    <figcaption>A cute orange cat lying on its back.</figcaption>
  </figure>
  ```

Aquí tenemos un elemento `figure` que contiene un elemento `img` seguido de un elemento `figcaption`. El elemento `figcaption` es el hermano inmediato del elemento `img`.

Si desea aplicar un borde negro alrededor del elemento `figcaption`, puede utilizar el combinador next-sibling de la siguiente manera:

- **Codigo Ejm**

  ```html
  <link rel="stylesheet" href="styles.css">

  <figure>
    <img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
    />
    <figcaption>A cute orange cat lying on its back.</figcaption>
  </figure>
  ```

  ```css
  img + figcaption {
    border: 4px solid black;
  }
  ```

En este ejemplo, el combinador de elemento hermano siguiente (`+`) selecciona el elemento `figcaption` que sigue inmediatamente al elemento `img`. La regla CSS aplicada añade un `borde negro sólido de 4 píxeles` alrededor del `figcaption`.

Otro combinador común es el combinador de elemento hermano posterior.

El combinador de elemento hermano posterior (`~`) en CSS selecciona todos los elementos hermanos de un elemento especificado que vienen después de él.

A diferencia del combinador de elemento hermano siguiente, que solo selecciona el elemento hermano inmediatamente posterior, el combinador de elemento hermano posterior (`~`) puede seleccionar cualquier elemento hermano que siga al elemento especificado, lo que ofrece una mayor flexibilidad en el estilo.

Veamos el siguiente ejemplo HTML:

- **Codigo Ejm**

  ```html
  <div class="container">
    <h2>Subheading</h2>
    <p>First paragraph.</p>
    <p>Second paragraph.</p>
    <p>Third paragraph.</p>
    <p>Another paragraph element</p>
  </div>
  ```

En esta estructura HTML, tenemos un elemento `h2` seguido de cuatro elementos de párrafo. Los elementos de párrafo son hermanos del elemento `h2`.

Si quieres aplicar un estilo a todos los elementos de párrafo que vienen después del elemento `h2`, puedes utilizar el combinador de hermanos posteriores de la siguiente manera:

- **Codigo Ejm**

  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <h2>Subheading</h2>
    <p>First paragraph.</p>
    <p>Second paragraph.</p>
    <p>Third paragraph.</p>
    <p>Another paragraph element</p>
  </div>
  ```

  ```css
  h2 ~ p {
    color: green;
  }
  ```

En este ejemplo, todos los elementos de párrafo que siguen al elemento `h2` tendrán el color de texto verde.

El combinador de hermanos posteriores (`~`) se dirige a todos los hermanos de párrafo que aparecen después del elemento `h2`, independientemente de si son hermanos inmediatos.

En conclusión, comprender y utilizar varios combinadores CSS le permite aplicar estilos precisos a sus elementos HTML, lo que mejora el control y la flexibilidad de su diseño.

Al dominar estos selectores, podrás crear reglas de estilo más sofisticadas y específicas que mejorarán tanto la apariencia como la funcionalidad de tus páginas web.

---

## Cuestionario 7

- **1.¿Qué regla CSS aplicará estilo a todos los elementos span que se encuentren dentro de elementos div, independientemente de cuántas veces estén anidados?**

  - [ ] a)  

      ```css
        
      div > span {
        color: red;
      }
      ```

  - [ ] b)  

      ```css
      div + span {
        color: red;
      }
      ```

  - [ ] c)

      ```css
      div ~ span {
        color: red;
      }
      ```

  - [x] d)
//correcto

      ```css
      div span {
        color: red;
      }
      ```

- **2.¿Qué regla CSS aplicará estilo solo a los elementos li hijos directos de los elementos ul?**

  - [x] a)  
//correcto

      ```css
        
      ul > li {
        font-weight: bold;
      }
      ```

  - [ ] b)  

      ```css
      ul li {
        font-weight: bold;
      }
      ```

  - [ ] c)

      ```css
      ul + li {
        font-weight: bold;
      }
      ```

  - [ ] d)

      ```css
      ul ~ li {
        font-weight: bold;
      }
      ```

- **3.¿Qué regla CSS aplicará el estilo al primer elemento `p` que sigue inmediatamente a cualquier elemento `h1`?**

  - [ ] a)  

      ```css
        
      h1 > p {
        margin-top: 0;
      }
      ```

  - [x] b)  
//correcto

      ```css
      h1 + p {
        margin-top: 0;
      }
      ```

  - [ ] c)

      ```css
      h1 ~ p {
        margin-top: 0;
      }
      ```

  - [ ] d)

      ```css
      h1 p {
        margin-top: 0;
      }
      ```

---

## ¿Cuál es la diferencia entre los elementos en línea y los elementos de nivel de bloque?

En HTML y CSS, los elementos se clasifican como elementos en línea o elementos de nivel de bloque, y esta clasificación determina cómo se comportan en el diseño del documento.

Comprender esta diferencia es fundamental para controlar cómo se muestra el contenido en una página web.

Los elementos de nivel de bloque son elementos que ocupan todo el ancho disponible por defecto, extendiéndose a lo largo del ancho de su contenedor.

Estos elementos siempre comienzan en una nueva línea y empujan el resto del contenido a la siguiente línea, creando un `bloque` de contenido.

Los elementos de nivel de bloque tienen la propiedad CSS `display: block;` aplicada de forma predeterminada. Esta propiedad garantiza que el elemento se extienda para llenar el ancho del contenedor y aparezca en una nueva línea.

Algunos elementos de nivel de bloque comunes son los elementos `div`, los párrafos, los encabezados, las listas ordenadas, las listas desordenadas y los elementos de sección.

A continuación se muestra un ejemplo de código de un elemento de nivel de bloque:

- **Codigo Ejm**

  ```html
  <p style="border: 2px solid red;">
    First paragraph
  </p>
  <p>Second paragraph</p>
  ```

En este ejemplo, tenemos dos elementos de párrafo, el primero de los cuales tiene un borde rojo alrededor.

Los dos elementos de párrafo no comparten la misma línea porque son elementos de nivel de bloque por defecto.

Por lo tanto, ambos elementos de párrafo ocuparán todo el ancho de su contenedor, que en este caso es el elemento `body`.

Los elementos de nivel de bloque son ideales cuando se desea que el contenido se apile verticalmente, como párrafos, secciones o bloques de contenido más grandes. Se utilizan comúnmente para definir el diseño y la estructura de una página web.

Los elementos en línea, a diferencia de los elementos de nivel de bloque, solo ocupan el ancho que necesitan y no comienzan en una nueva línea. Estos elementos fluyen dentro del contenido, lo que permite que el texto y otros elementos en línea aparezcan junto a ellos.

Los elementos en línea tienen la propiedad CSS `display: inline;` aplicada de forma predeterminada. Esta propiedad garantiza que el elemento permanezca dentro del flujo del contenido y no se rompa en una nueva línea.

Los elementos en línea comunes son los elementos `span`, `anchor` e `img`.

A continuación se muestra un ejemplo para comprender mejor los elementos en línea:

- **Codigo Ejm**

  ```html
  <p>This is a
    <span style="color: red; border: 2px solid green;">red</span>
    word inside a paragraph.
  </p>
  ```

En este ejemplo, tenemos un elemento `span` anidado dentro de un elemento párrafo. El elemento `span` tiene un color de texto `red` con un borde `green` alrededor para que puedas ver mejor la palabra resaltada.

Como puede ver, el elemento `span` solo ocupa el espacio de la palabra «red» y no empuja el contenido siguiente a una nueva línea.

Los elementos en línea se utilizan mejor para dar estilo a partes más pequeñas de texto o contenido dentro de una línea, como enfatizar una palabra, crear hipervínculos o aplicar estilos específicos a partes de un párrafo.

---

## Cuestionario 8

- **1.¿Cuál es el comportamiento predeterminado de los elementos a nivel de bloque en CSS?**

  - [ ] a) Ocupan tanto ancho como sea necesario y se mantienen dentro del flujo del contenido.
  - [x] b) Ocupan todo el ancho de su contenedor y comienzan una nueva línea. //correcto
  - [ ] c) Sólo se utilizan para imágenes y enlaces.
  - [ ] d) Siempre están alineados al centro de la página.

- **2.¿Cuál de los siguientes es un ejemplo de un elemento en línea?**

  - [ ] a) `div`
  - [ ] b) `p`
  - [x] c) `span` //correcto
  - [ ] d) `section`

- **3.¿Cómo se puede cambiar el comportamiento de un elemento a nivel de bloque para que se comporte como un elemento en línea?**

  - [ ] a) `display: inline-block;`
  - [ ] b) `display: flex;`
  - [x] c) `display: inline;` //correcto
  - [ ] d) `display: none;`

---

## ¿Cómo funciona el bloque en línea y en qué se diferencia de los elementos en línea y de bloque?

Al trabajar con CSS, a menudo te encuentras con tres tipos diferentes de comportamientos de visualización para los elementos: `inline`, `block`, y `inline-block`.

Cada una de estas propiedades afecta a la forma en que se posicionan los elementos y a cómo interactúan con otros elementos de la página.

En esta lección, nos centraremos en cómo funciona la propiedad `inline-block` y en qué se diferencia de los elementos inline y de nivel de bloque.

Los elementos de nivel de bloque se comportan como grandes contenedores o «bloques» que ocupan todo el ancho de su contenedor principal. Siempre comienzan en una nueva línea y su altura y anchura se pueden ajustar.

Los elementos inline solo ocupan el espacio que necesitan. Fluyen dentro del contenido circundante y no se dividen en una nueva línea.

La propiedad `inline-block` es un híbrido de estos dos comportamientos. Al igual que los elementos inline, los elementos `inline-block` permanecen en el flujo del texto sin comenzar en una nueva línea.

Sin embargo, a diferencia de los elementos inline, se puede ajustar el ancho y el alto de un elemento `inline-block`, tal y como se haría con los elementos de nivel de bloque.

En resumen, la diferencia clave entre inline e inline-block es que el tamaño de los elementos inline no se puede controlar, mientras que los elementos inline-block permiten un control total sobre las dimensiones sin dejar de estar alineados con el resto del contenido.

Veamos un ejemplo.

- **Codigo Ejm**

  ```html
  <link href="styles.css" rel="stylesheet">

  <div class="container">
    <span class="inline-block-element element1">Inline-Block</span>
    <span class="inline-block-element element2">Inline-Block</span>
  </div>
  ```

  ```css
  .inline-block-element {
    display: inline-block;
    width: 150px;
    height: 100px;
  }
  
  .element1 {
    background-color: lightblue;
  }
  
  .element2 {
    background-color: lightgreen;
  }
  ```
  
  En el ejemplo anterior, tenemos un div con una clase de contenedor. Dentro de ese elemento div, tenemos dos elementos span.

Cada uno de los elementos span está configurado para mostrarse como inline-block y también tiene un ancho y una altura establecidos.

Los elementos inline-block aparecerán uno al lado del otro porque se comportan como elementos inline, pero también tienen un ancho y una altura específicos, lo que les da propiedades similares a las de los elementos block.

Sin embargo, si eliminas la propiedad display: inline-block, no se aplicarán ni el ancho ni el alto, aunque los hayas definido claramente.

Aquí está el CSS revisado:

- **Codigo Ejm**

  ```html
  <link href="styles.css" rel="stylesheet">

  <div class="container">
    <span class="inline-block-element element1">Span element</span>
    <span class="inline-block-element element2">Span element</span>
  </div>
  ```

  ```css
  .inline-block-element {
    width: 150px;
    height: 100px;
  }
  
  .element1 {
    background-color: lightblue;
  }
  
  .element2 {
    background-color: lightgreen;
  }
  ```
