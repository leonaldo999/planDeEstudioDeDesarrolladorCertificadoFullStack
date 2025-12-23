# Fundamentos de HTML

En estos videos de lecciones, aprenderá sobre los fundamentos de HTML, como el elemento `div`, los atributos `id` y `class`, el código HTML, las entidades HTML y más.

## ¿Qué son los elementos Div y cuándo deberías usarlos?

Ahora que entendemos qué es HTML, ¡pasemos a lo divertido! Voy a analizar el elemento de división de contenido, o dicho de otro modo, el *div*:

- **Codigo ejemplo**

  ```html
  <div></div>
  ```

Me gusta pensar en el `div` como un ser hermoso que puede ser lo que desees. Podemos asignarle `height`, `width` y `background-color` mediante CSS (o, dicho de otro modo, estilos, que abordaremos en próximas clases).

También podemos usarlo de forma muy básica, sin estilos, para unir otros elementos. Por ejemplo, podemos crear un `div`, añadirle un encabezado y un párrafo, y ahora estos dos elementos se agruparán:

- **Codigo ejemplo**

  ```html
  <div>
    <h1>I am a heading</h1>
    <p>I am a paragraph</p>
  </div>
  ```

Tenga en cuenta que podría haber mejores elementos para usar al agruparlos. Podría elegir un elemento de `section`, por ejemplo:

- **Codigo ejemplo**

  ```html
  <section>
    <h1>I am a heading</h1>
    <p>I am a paragraph</p>
  </section>
  ```

Esto se debe a que el elemento `section` tiene un significado semántico. La semántica se refiere al significado de las palabras o frases en un lenguaje. En HTML, que es un lenguaje, los elementos también tienen su propio significado semántico. Por lo tanto, si se usa un elemento `section`, el navegador captará su significado semántico y lo tratará como una sección, ya sea en computadoras de escritorio, móviles o cualquier otro dispositivo.

Ahondaremos en este tema más adelante. Por ahora, solo recuerda que el elemento `div` no tiene esta característica. Es como un fantasma misterioso. En la próxima lección, veremos qué más podemos hacer con un elemento `div`.

## Questionario 1

- **¿Qué significado semántico tiene un elemento div?**

  - a) El elemento div representa un contenedor para contenido introductorio o un conjunto de enlaces de navegación.
  - b) El elemento div define un pie de página para un documento o sección.
  - c) El div especifica el contenido de la página principal y debe ser único.
  - d) El elemento div no tiene ningún significado semántico.  // correcto

- **¿Cuál de las siguientes es la sintaxis correcta para un elemento div?**

  - a) `<divEl>content goes here</divEl>`
  - b) `<div>content goes here</div> // correcto`
  - c) `<divElement>content goes here</divElement>`
  - d) `<divGroup>content goes here</divGroup>`

- **¿Cuál de los siguientes elementos HTML se utiliza comúnmente para agrupar contenido en secciones distintas?**

  - a) section // correcto
  - b) aside
  - c) nav
  - d) h1

## ¿Qué son los ID y las clases y cuándo se deben utilizar?

Aprendamos sobre los (`IDs`)identificadores y las (`class`)clases, y cuándo usarlos.

El atributo `id` añade un identificador único a un elemento HTML. En este ejemplo, hay un elemento `h1` con el `id` `title`:

- **Codigo ejemplo**

  ```html
  <h1 id="title">Movie Review Page</h1>
  ```

Puedes usar el `ID` del `title` en tu JavaScript o CSS. Aquí tienes un ejemplo de CSS que usa el `id` del `title` para cambiar el `color` a `red`:

- **Codigo ejemplo**

  ```css
  #title {
    color: red;
  }
  ```

El símbolo de almohadilla (`#`) delante del `title` indica al equipo que desea asignar un `id` a ese valor. Los nombres de `id` no deben usarse más de una vez y siempre deben ser únicos. Otro aspecto importante sobre los valores de `id` es que no pueden contener espacios. A continuación, se muestra un ejemplo de cómo aplicar las palabras `main` y `heading` a un valor de atributo de `id`:

- **Codigo ejemplo**

  ```html
  <h1 id="main heading">Main heading</h1>
  ```

Los navegadores verán este espacio como parte del `id`, lo que generará problemas no deseados en el estilo y la creación de scripts. Los valores del atributo `id` solo deben contener letras, dígitos, guiones bajos y guiones.

A diferencia del atributo `id`, el valor del atributo `class` no necesita ser único y puede contener espacios. A continuación, se muestra un ejemplo de aplicación de una clase llamada `box` a un elemento `div`:

- **Codigo ejemplo**

  ```html
  <div class="box"></div>
  ```

Si desea agregar varios nombres de clase a un elemento, puede hacerlo separándolos con un espacio. Aquí tiene un ejemplo actualizado que aplica varias clases a un elemento `div`:

- **Codigo ejemplo**

  ```html
  <div class="box red-box"></div>
  ```

Para aplicar un conjunto de estilos a esa clase de `box`, puedes referenciarla dentro de tu CSS. Aquí tienes un ejemplo de cómo configurar las propiedades de `width`, `height` y `border` para el elemento con el nombre de `clase` `box`:

- **Codigo ejemplo**

  ```css
  .box {
    width: 200px;
    height: 200px;
    border: 2px solid black;
  }
  ```

El símbolo de punto (`.`) delante del `box` indica al ordenador que se desea apuntar a una `class` con ese valor. Al ejecutarse, el código buscará en todo el documento HTML para encontrar todos los elementos con ese nombre de clase y aplicar esos estilos.

En resumen, ¿cuándo se debe usar un `id` o una `class`? Las clases son más útiles cuando se desea aplicar un conjunto de estilos a varios elementos. Si se desea apuntar a un elemento específico, es mejor usar `id`, ya que sus valores deben ser únicos.

## Questionario 2

- **¿Cuándo debería utilizar un `id` en lugar de una `class`?**

  - a) Utilice una `class` cuando desee un identificador único que solo se aplique a un elemento.
  - b) Utilice un `id` cuando necesite un identificador único para un elemento específico y utilice una `class` cuando desee aplicar estilos o comportamientos a varios elementos.<!-- correcto -->
  - c) Utilice un `id` cuando desee aplicar estilo a múltiples elementos de manera consistente en  diferentes partes de su página web.
  - d) Utilice un `id` cuando desee aplicar estilos que puedan ser fácilmente anulados por otros  estilos en su CSS.

- **¿Qué sucede si utiliza el mismo `id` más de una vez en su HTML?**

  - a) Puede generar resultados y problemas no deseados al intentar aplicar estilos o apuntar a un elemento en JavaScript. <!-- correcto -->
  - b) El programa se bloqueará.
  - c) No pasará nada.
  - d) Aparecerá un mensaje de alerta emergente en la ventana del navegador.

- **¿Cuál de los siguientes NO es un valor correcto para el atributo id?**

  - a) `id="heading"`
  - b) `id="main-heading"`
  - c) `id="main"`
  - d) `id="main heading"` <!-- correcto -->

## ¿Qué son las entidades HTML y cuáles son algunos ejemplos comunes?

Aprendamos sobre las entidades HTML.

Una entidad HTML, o referencia de carácter, es un conjunto de caracteres que se utiliza para representar un carácter reservado en HTML.
En este ejemplo, hay un elemento de párrafo con un elemento de imagen anidado dentro:

- **Codigo ejemplo**

  ```html
  <p>This is an <img /> element</p>
  ```

El texto en pantalla debería indicar `This is an <img/> element`. Sin embargo, actualmente indica `This is an element.` Esto ocurre porque, cuando el analizador HTML detecta el símbolo menor que (`<`) seguido del nombre de una etiqueta HTML, lo interpreta como un elemento HTML.

Para solucionar este problema, puede usar entidades HTML. Aquí tiene un ejemplo actualizado que utiliza las entidades HTML correctas para los símbolos menor que y mayor que (`>`).

- **Codigo ejemplo**

  ```html
  <p>This is an &lt;img /&gt; element</p>
  ```

Este tipo de referencias de caracteres se conocen como referencias de caracteres con nombre. Las referencias con nombre empiezan con el símbolo (`&`) y terminan con punto y coma (`;`). Al usar una referencia de carácter con nombre, el analizador HTML no la confundirá con un elemento HTML real. Así se ve el elemento de párrafo actualizado en la página: `This is an <img/> element`. Ahora, los usuarios podrán ver la sintaxis completa del elemento de imagen tal como la deseaban.

Otro tipo de referencia de carácter sería la referencia numérica decimal. A continuación, se muestra un ejemplo del uso de la referencia numérica decimal para el símbolo menor que:

- **Codigo ejemplo**

  ```html
  &#60;
  ```

Esta referencia de carácter comienza con un símbolo & y una almohadilla (`#`), seguido de uno o más dígitos decimales y, finalmente, de un punto y coma.

El último tipo de referencia de carácter sería la referencia numérica hexadecimal. A continuación, se muestra un ejemplo del uso de la referencia numérica hexadecimal para el símbolo menor que:

- **Codigo ejemplo**

  ```html
  &#x3C;
  ```

Esta referencia de caracteres comienza con un símbolo &, un símbolo de almohadilla y la letra `x`. Le siguen uno o más dígitos hexadecimales ASCII y termina con un punto y coma.

¿Qué otros ejemplos de uso de entidades HTML existen? A menudo se utilizan para símbolos como el símbolo de copyright (`©`), las comillas (`"`), el símbolo de marca registrada (`™`) y el símbolo &.

## Questionario 3

- **¿Qué es una entidad HTML (referencia de carácter)?**

  - a) Un conjunto de fuentes de Google.
  - b) Un grupo de imágenes y subtítulos.
  - c) Un conjunto de caracteres utilizados para representar código JavaScript.
  - d) Un conjunto de caracteres utilizados para representar un carácter reservado en HTML. <!-- correcto -->

- **¿Cuáles son los tres tipos de referencias de personajes?**

  - a) Referencias de caracteres numéricos con nombre, romanos y hexadecimales.
  - b) Referencias de caracteres octales, nombrados y binarios.
  - c) Referencias de caracteres numéricos con nombre, decimales y hexadecimales. <!-- correcto -->
  - d) Referencias de caracteres numéricos asimétricos, decimales y hexadecimales.

- **¿Cuál de las siguientes es la sintaxis correcta para una referencia de carácter con nombre?**

  - a) `&amp;` <!-- correcto -->
  - b) `;amp;`
  - c) `&amp>>`
  - d) `&amp&`

## ¿Cuál es el papel del elemento Script en HTML y cómo puede utilizarse para vincular a archivos JavaScript externos?

Aprendamos sobre el elemento `script` y cómo usarlo para enlazar a archivos JavaScript externos.

El elemento `script` se utiliza para incrustar código ejecutable. La mayoría de los desarrolladores lo utilizan para ejecutar código JavaScript. JavaScript se utiliza para añadir interactividad a las páginas web. Ejemplos comunes de uso de JavaScript incluyen juegos interactivos, controles deslizantes de imágenes y formularios dinámicos que validan la entrada del usuario en tiempo real. A continuación, se muestra un ejemplo del uso del elemento `script` en un documento HTML:

- **Codigo ejemplo**

  ```html
  <body>
    <script>
      alert("Welcome to freeCodeCamp");
    </script>
  </body>
  ```

En este ejemplo, tenemos una `alert` que muestra el mensaje `Welcome to freeCodeCamp.` Al cargar la página, aparecerá la alerta. El usuario puede hacer clic en el botón "Aceptar" para cerrar el mensaje.

Si bien técnicamente se puede escribir todo el código JavaScript dentro de las etiquetas `script`, se recomienda enlazar a un archivo JavaScript externo. A continuación, se muestra un ejemplo del uso del elemento `script` para enlazar a un archivo JavaScript externo:

- **Codigo ejemplo**

  ```html
  <body>
    <script src="path-to-javascript-file.js"></script>
  </body>
  ```

El atributo `src` se utiliza aquí para especificar la ubicación de ese archivo JavaScript externo. `src` significa "fuente". No se recomienda colocar todo el código JavaScript dentro del documento HTML debido a la separación de tareas. Esta separación es un principio de diseño que consiste en separar los programas en secciones distintas, cada una de las cuales aborda una tarea específica. En este caso, queremos separar el código JavaScript del código HTML.

## Cuestionario 4

- **¿Qué atributo se utiliza para vincular a un archivo JavaScript externo?**

  - a) El atributo
`div`
  - b) El atributo
`defer`
  - c) El atributo
`async`
  - d) El atributo
`src` <!-- correcto -->

- **¿Qué es la separación de intereses?**

  - a) Se trata de asegurarse de que todos los miembros del equipo tengan sus propias responsabilidades claras.
  - b) Un principio de diseño en el que se separan los programas en secciones distintas y cada sección aborda una inquietud distinta. <!-- correcto -->
  - c)  El acto de combinar todos los aspectos de un programa en un solo módulo para simplificar.
  - d) Se trata de dividir las tareas entre los miembros del equipo sin tener en cuenta cómo podrían superponerse o afectarse entre sí.

- **¿Cuál de las siguientes es la sintaxis correcta para vincular a un archivo JavaScript externo?**

  - a) `<script div="path-to-javascript-file.js"> </script>`
  - b) `<script div="path-to-javascript-file.js"> </script>`
  - c)  `<script src="path-to-javascript-file.js"> </script>` <!-- correcto -->
  - d) `<script defer="path-to-javascript-file.js"> </script>`

## ¿Cuál es el papel de la meta descripción y cómo afecta al SEO?

¿Cuál es la función del elemento `meta` descripción y cómo afecta al SEO?

El SEO, u optimización para motores de búsqueda (SEO), es una práctica que optimiza las páginas web para que sean más visibles y tengan un mejor posicionamiento en los motores de búsqueda. Una forma de mejorar el SEO de tu sitio es proporcionar una breve descripción de la página web mediante el elemento meta. A continuación, se muestra un ejemplo del uso del elemento meta para definir la descripción de una página web de jardinería:

- **Codigo ejemplo**

  ```html
  <meta
    name="description"
    content="Discover expert tips and techniques for gardening in small spaces, choosing the right plants, and maintaining a thriving garden."
  />
  ```

Al establecer el atributo `name` en `description`, se garantiza que los navegadores, motores de búsqueda y otras herramientas web interpreten correctamente estos metadatos. El atributo `content` es donde se colocará la descripción. Se recomienda que las descripciones sean breves y concisas, ya que los motores de búsqueda suelen truncarlas según el diseño de la página de resultados.

Al igual que otros tipos de elementos `meta`, la descripción `meta` no será visible en la propia página web.
Un lugar donde se puede encontrar la descripción de la página es en el fragmento de la página de resultados del motor de búsqueda.
Aquí hay algunos ejemplos de fragmentos de resultados de página para los repositorios de subreddit y GitHub de freeCodeCamp:

- **Codigo ejemplo**

  ```text
  r\FreeCodeCamp: This is the official subreddit for the freeCodeCamp.org community. Learn to code for free together with millions of other people...
  ```

- **Codigo ejemplo**

  ```text
  Our full-stack web development and machine learning curriculum is completely free and self-paced. We have thousands of interactive coding challenges to help you...
  ```

En los ejemplos, las descripciones de cada página se encuentran justo debajo de los enlaces del sitio. En cuestión de segundos, los usuarios pueden hacerse una idea general de la página y decidir hacer clic en los enlaces para obtener más información.

Si bien las `meta` descripciones no afectan directamente el posicionamiento de un sitio web en los motores de búsqueda, una descripción sólida podría generar más tráfico.

## Cuestionario 5

- **¿Qué elemento se utiliza para establecer la descripción de una página web?**

  - a) `img`
  - b) `meta` <!-- correcto -->
  - c) `slot`
  - d) `figure`

- **¿Qué significa SEO?**

  - a) Optimización del motor de tragamonedas
  - b) Difusión de mejoras del sitio web
  - c) Optimización de la interacción social
  - d) Optimización de motores de búsqueda <!-- correcto -->

- **¿Dónde suele aparecer la descripción de la página?**

  - a) Dentro del elemento de `figure`.
  - b) Dentro del elemento de `footer`.
  - c) En la página de resultados del motor de búsqueda. <!-- correcto -->
  - d) En un mensaje de alerta emergente.

## ¿Cuál es el papel de las etiquetas Open Graph y cómo afectan al SEO?

El protocolo Open Graph(OG) te permite controlar cómo se muestra el contenido de tu sitio web en diversas plataformas de redes sociales, como Facebook, LinkedIn y muchas más. Al configurar estas propiedades de Open Graph, puedes incentivar a los usuarios a hacer clic e interactuar con tu contenido. Puedes configurar estas propiedades mediante una colección de elementos `meta` dentro de la sección de `head` HTML.

La primera propiedad importante de Open Graph que debes incluir es el `title`. Aquí tienes un ejemplo de cómo configurar el `title` de Open Graph para la página de inicio de freeCodeCamp:

- **Codigo ejemplo**

  ```html
  <meta content="freeCodeCamp.org" property="og:title" />
  ```

Para el atributo de `property`, deberá especificar que sea `og:title`. El atributo de `content` es donde escribirá el título que desea que se muestre en las redes sociales.

La siguiente propiedad importante de OG sería el `type`. Aquí tiene un ejemplo del uso del `type` OG para la página principal de freeCodeCamp:

- **Codigo ejemplo**

  ```html
  <meta property="og:type" content="website" />
  ```

La propiedad `type` se utiliza para representar el tipo de contenido que se comparte en redes sociales. Algunos ejemplos de este contenido son artículos, sitios web, vídeos o música.

La tercera propiedad OG importante es la `image`. A continuación, se muestra un ejemplo de cómo configurar la `image` OG para la página principal de freeCodeCamp:

- **Codigo ejemplo**

  ```html
  <meta
    content="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
    property="og:image"
  />
  ```

En este ejemplo, la imagen de Open Graph apunta al logotipo de FreeCodeCamp. Todas estas imágenes deben ser de alta calidad, con buenas dimensiones y proporciones. La mayoría de las plataformas de redes sociales incluyen criterios para los requisitos de imagen que te ayudarán a garantizar que tu contenido se visualice correctamente en su sitio. Por ejemplo, la página de documentación de developer.facebook.com indica:

"Utiliza imágenes de al menos 1200 x 630 píxeles para una mejor visualización en dispositivos de alta resolución. Como mínimo, debes usar imágenes de 600 x 315 píxeles para mostrar las publicaciones de la página de enlaces con imágenes más grandes".

La cuarta propiedad importante de OG es la `url`. Aquí tienes un ejemplo de cómo configurar la `url` de OG para la página de inicio de FreeCodeCamp:

- **Codigo ejemplo**

  ```html
  <meta property="og:url" content="https://www.freecodecamp.org" />
  ```

Hay muchas más propiedades de Open Graph que puedes configurar, como la `description`, `audio`, `video` and `locale`. Sin embargo, la `url`, `image`, `type`, and `title` de Open Graph son las más importantes.

¿Cómo afectan estas propiedades de Open Graph a la optimización para motores de búsqueda (SEO)? Cuando tu contenido se comparte en redes sociales, unas propiedades de Open Graph bien diseñadas pueden mejorar su apariencia en los feeds de los usuarios. Esto puede generar tasas de clics más altas, lo que podría indicar a los motores de búsqueda que tu contenido es relevante y atractivo.

## Questionario 6

- **¿Para qué se utilizan las propiedades de gráficos abiertos?**

  - a) Para incrustar contenido multimedia interactivo directamente en páginas web.
  - b) Para establecer cómo se verá el contenido de su sitio web en diferentes plataformas de redes sociales. <!-- correcto -->
  - c) Para generar anuncios emergentes dinámicos en sitios web.
  - d) Para cifrar datos sensibles transmitidos entre servidores web y navegadores de los usuarios.

- **¿Qué hace la `property="og:title"` en el elemento `meta`?**

  - a) Ajusta automáticamente el tamaño de fuente y el estilo del título de la página web según las preferencias del usuario.
  - b) Indica al navegador que muestre un emoticón o emoji específico como título de la página web.
  - c) Hace que la página web reproduzca un archivo de audio específico cuando el título se muestra en la pestaña del navegador.
  - d) Especifica el título del contenido de su página web cuando se comparte en plataformas de redes sociales. <!-- correcto -->

- **¿Qué hace la `property="og:type"` en el elemento meta?**

  - a) Selecciona el estilo de fuente predeterminado de la página.
  - b) Activa un anuncio emergente cuando se carga la página web.
  - c) Especifica el tipo de contenido utilizado para su página web cuando se comparte en plataformas de redes sociales. <!-- correcto -->
  - d) Cambia el color de fondo de la página web según la zona horaria del usuario.

---
