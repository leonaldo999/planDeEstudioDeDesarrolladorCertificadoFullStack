# Que es HTML

En esta videoconferencia, se le presentará HTML (lenguaje de marcado de hipertexto), un lenguaje de marcado para crear páginas web.

Aprenderá sobre la función de HTML en la web, su sintaxis básica y qué son los atributos HTML.

## ¿Qué es HTML y qué papel desempeña en la web?

**HTML**, que significa **Lenguaje de Marcado de Hipertexto**, es un lenguaje de marcado para crear páginas web. Cuando visitas un sitio web y ves contenido como párrafos, encabezados, enlaces, imágenes y vídeos, eso es HTML. HTML representa el contenido y la estructura de una página web mediante el uso de elementos. Aquí tienes un ejemplo de un elemento de párrafo:

- **Codigo ejemplo**

  ```html
  <p>Hello</p>
  ```

La mayoría de los elementos tienen una etiqueta de apertura y una de cierre. A veces, estas etiquetas se denominan etiquetas de inicio y fin. Entre estas dos etiquetas, se encuentra el contenido. Este contenido puede ser texto u otros elementos HTML. Tanto las etiquetas de apertura como las de cierre empiezan con un corchete angular izquierdo (`<`) y terminan con un corchete angular derecho (`>`), con el nombre de la etiqueta entre estos corchetes. A continuación, se muestra un análisis más detallado de las etiquetas de apertura y cierre de párrafo:

- **Codigo ejemplo**

  ```html
  <p>
  ```

- **Codigo ejemplo**

  ```html
  </p>
  ```

Lo que distingue una etiqueta de apertura de una de cierre es la barra diagonal (`/`) que se coloca inmediatamente después del corchete angular izquierdo en la etiqueta de cierre. Algunos elementos HTML no tienen etiqueta de cierre. Estos se conocen como elementos vacíos. A continuación, se muestra un ejemplo de un elemento de imagen que es un elemento vacío:

- **Codigo ejemplo**

  ```html
  <img/>
  ```

Tenga en cuenta que este elemento de imagen no tiene etiqueta de cierre ni contenido. Los elementos vacíos no pueden tener contenido y solo tienen una etiqueta de inicio. Si desea mostrar una imagen, deberá incluir un par de atributos dentro de su elemento de imagen. Un atributo es un valor especial que se utiliza para ajustar el comportamiento de un elemento HTML. A continuación, se muestra un ejemplo de un elemento de imagen con un atributo `src` (o fuente):

- **Codigo ejemplo**

  ```html
  <img src="image location" />
  ```

El atributo `src` se utiliza para especificar la ubicación de la imagen. Para los elementos de imagen, se recomienda incluir otro atributo llamado `alt`. A continuación, se muestra un ejemplo de un elemento de imagen con los atributos `src` y `alt`:

- **Codigo ejemplo**

  ```html
  <img src="example-cat-img-url" alt="Cat sleeping in the grass">
  ```

El atributo `alt` se utiliza para proporcionar un texto breve y descriptivo para las imágenes. En este caso, el texto descriptivo es "Gato durmiendo en el césped".

Así que quizás te preguntes si HTML por sí solo es suficiente para crear un sitio web. Bueno, la respuesta es: depende. Si estás creando un pequeño proyecto práctico que solo muestra texto e imágenes, HTML por sí solo podría ser suficiente. Sin embargo, si estás creando un sitio web profesional moderno, necesitarás HTML, CSS y JavaScript.

HTML se utiliza para el contenido y la estructura. CSS se utiliza para el estilo. JavaScript se utiliza para añadir interactividad a tus páginas web. Una buena analogía para esto es comparar HTML, CSS y JavaScript con un edificio completo. HTML representa los bloques, el hormigón y los hierros que forman las paredes. Son los cimientos que fortalecen el edificio. CSS representa el diseño interior y exterior que embellece la casa. JavaScript representa el sistema eléctrico y de agua que garantiza el acceso ininterrumpido a agua y electricidad.

## ¿Qué son los atributos y cómo funcionan?

Un atributo es un valor que se coloca dentro de la etiqueta de apertura de un elemento HTML. Los atributos proporcionan información adicional sobre el elemento o especifican su comportamiento. A continuación, se muestra la sintaxis básica de un atributo:

- **Codigo ejemplo**

  ```html
  <element attribute="value"></element>
  ```

El nombre del atributo va seguido de un signo igual (`=`) y un valor entre comillas. El valor puede ser una cadena o un número, según el atributo.

Veamos algunos ejemplos de atributos HTML comunes. El primer ejemplo es el atributo `href`, que se utiliza para especificar la URL de un enlace:

- **Codigo ejemplo**

  ```html
  <a href="https://www.example-website.com">Visit our website</a>
  ```

Sin este atributo, el enlace no funcionaría porque no habría URL de destino. Por lo tanto, debe incluir este atributo `href` para que el enlace funcione. Otros atributos comunes son `src` (fuente) y `alt` (alternativa), que se utilizan para especificar la fuente de una imagen y proporcionar un texto descriptivo alternativo, respectivamente.

- **Codigo ejemplo**

  ```html
  <img src="image.jpg" alt="A beautiful image" />
  ```

Al igual que el atributo `href`, el atributo `src` es obligatorio porque especifica el archivo de imagen que se mostrará. El atributo `alt` no es obligatorio, pero se recomienda por motivos de accesibilidad. Accesibilidad significa garantizar que todas las personas, incluidas las personas con discapacidad, puedan usar y comprender elementos como sitios web, aplicaciones y espacios físicos. Aprenderá más sobre accesibilidad en las próximas clases.

Algunos atributos tienen una sintaxis un poco peculiar, como el atributo `checked` que se muestra aquí:

- **Codigo ejemplo**

  ```html
  <input type="checkbox" checked />
  ```

En el siguiente ejemplo, tenemos un `input` de entrada con el atributo `type` establecido en `checkbox`. Las entradas se utilizan para recopilar datos de los usuarios y el atributo `type` especifica el tipo de entrada. En este caso, se trata de una casilla de verificación. Aprenderá más sobre el funcionamiento de las entradas en las próximas clases. El atributo `checked` se utiliza para especificar que la casilla de verificación debe estar marcada por defecto. El atributo `checked` no requiere un valor. Si está presente, la casilla de verificación estará marcada por defecto. Si no está presente, la casilla de verificación estará desmarcada. Esto se conoce como atributo booleano. Aprenderá más sobre los booleanos en general en la sección de JavaScript. Existen varios atributos booleanos comunes que encontrará en HTML, como `disabled`, `readonly` y `required`. Estos atributos se utilizan para especificar el estado de un elemento, como si está deshabilitado, es de solo lectura o es obligatorio.

HTML tiene muchos atributos que pueden utilizarse para personalizar el comportamiento y la apariencia de los elementos en una página web. Comprender cómo usar los atributos es esencial para crear contenido web interactivo y accesible. En las próximas conferencias, aprenderá sobre más atributos HTML y cómo usarlos de manera efectiva en sus proyectos de desarrollo web.

## ¿Cuál es la función del elemento de enlace en HTML y cómo puede utilizarse para crear vínculos a hojas de estilo externas?

Aprendamos sobre el elemento `link` y cómo usarlo para enlazar a hojas de estilo externas.

El elemento `link` se utiliza para enlazar a recursos externos, como hojas de estilo e iconos del sitio web. A continuación, se muestra la sintaxis básica para usar el elemento `link` en un archivo CSS externo:

- **Codigo ejemplo**

  ```html
  <link rel="stylesheet" href="./styles.css" />
  ```

El atributo `rel` se utiliza para especificar la relación entre el recurso enlazado y el documento HTML. En este caso, debemos especificar que este recurso enlazado es una hoja de `stylesheet`.

Se recomienda separar el HTML y el CSS en archivos diferentes. Los desarrolladores usarán el elemento `link` para su archivo CSS externo en lugar de escribir todo en el documento HTML.

El atributo `href` se utiliza para especificar la ubicación de la URL del recurso externo.

El punto seguido de una barra diagonal en el ejemplo indica al ordenador que busque el archivo `styles.css` en la carpeta o directorio actual.

El elemento `link` debe colocarse dentro del elemento `head`, como se muestra en el siguiente ejemplo:

- **Codigo ejemplo**

  ```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Examples of the link element</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  ```

A menudo verás varios elementos de `link` dentro de una base de código profesional que enlazan a diferentes hojas de estilo, fuentes e iconos. Aquí tienes un ejemplo del uso del elemento de `link` para enlazar a una fuente externa de Google llamada Playwright Cuba:

- **Codigo ejemplo**

  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
  rel="stylesheet" /> 
  ```

Las fuentes de Google son un conjunto de fuentes personalizadas gratuitas y de código abierto que puedes usar en cualquier proyecto. Puedes elegir las fuentes que quieras usar y Google te proporcionará el código HTML y CSS necesario. En este ejemplo, el valor de `preconnect` del atributo `rel` indica al navegador que cree una conexión temprana con el valor especificado en el atributo `href`. Esto se hace para acelerar los tiempos de carga de estos recursos externos.

Otro uso común del elemento `link` es enlazar a iconos. Aquí tienes un ejemplo de enlace a un favicon:

- **Codigo ejemplo**

  ```html
  <link rel="icon" href="favicon.ico" />
  ```

Un favicon, abreviatura de icono favorito, es un pequeño icono que suele aparecer en la pestaña del navegador junto al título del sitio. Muchos sitios web usan un favicon para mostrar el icono de su marca.

## ¿Qué es un código HTML estándar y por qué es importante?

Aprendamos sobre el HTML repetitivo.

¿Te preguntas qué es el HTML repetitivo? Es como una plantilla predefinida para tus páginas web. Piensa en ella como los cimientos de una casa. Un HTML repetitivo incluye la estructura básica y los elementos esenciales que todo documento HTML necesita. Te ahorra tiempo y te ayuda a garantizar que tus páginas estén configuradas correctamente. Aquí tienes un ejemplo:

- **Codigo ejemplo**

  ```html
  <!DOCTYPE html>

  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0" />
      <title>freeCodeCamp</title>
      <link rel="stylesheet" href="./styles.css" />
    </head>
    <body>
    </body>
  </html>
  ```

Analicemos las partes clave de este código repetitivo. Primero, está la declaración `DOCTYPE`:

- **Codigo ejemplo**

  ```html
  <!DOCTYPE html>
  ```

Indica a los navegadores qué versión de HTML se está utilizando. A continuación, viene la etiqueta `html`:

- **Codigo ejemplo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <!--All other elements go inside here-->
  </html>
  ```

Esto envuelve todo tu contenido y permite especificar el idioma de tu página. Dentro de la etiqueta `html`, encontrarás dos secciones principales: un `head` y un `body`.

- **Codigo ejemplo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <!--Important metadata goes here-->
    </head>
    <body>
      <!--Headings, paragraphs, images, etc. go inside here-->
    </body>
  </html>
  ```

La sección `head` contiene información importante detrás de escena:

- **Codigo ejemplo**

  ```html
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Title Goes Here</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  ```

Los metadatos de tu sitio, contenidos en los elementos `meta`, contienen detalles sobre aspectos como la codificación de caracteres y cómo sitios web como Twitter deben previsualizar el enlace de tu página. El título de tu sitio, que se encuentra en el elemento `title`, determina el texto que aparece en la pestaña o ventana del navegador. Finalmente, normalmente enlazarás las hojas de estilo externas de tu página en la sección de `head` mediante elementos de `link`.

La sección `body` es donde se ubica todo tu contenido:

- **Codigo ejemplo**

  ```html
  <body>
    <h1>I am a main title</h1>
    <p>Example paragraph text</p>
  </body>
  ```

Esto es lo que los visitantes ven realmente en tu página web.

Ahora bien, ¿por qué es importante un texto repetitivo? Garantiza que tus páginas estén correctamente estructuradas y funcionen correctamente en diferentes navegadores. Usar un texto repetitivo te ayuda a evitar errores comunes y a seguir las mejores prácticas. Es un excelente punto de partida para cualquier proyecto web. Recuerda que puedes personalizar tu propio texto repetitivo para adaptarlo a tus necesidades. A medida que ganes experiencia, puedes añadir tus propios elementos o metaetiquetas preferidos. A medida que vayas mejorando tu texto repetitivo, descubrirás que te ahorra tiempo al iniciar nuevos proyectos.

La próxima vez que crees un nuevo archivo HTML, considera usar un texto repetitivo. Sin duda, te proporcionará una base sólida sobre la que construir.

## ¿Qué es la codificación de caracteres UTF-8 y por qué es necesaria?

`UTF-8`, o Formato de Transformación UCS 8, es una codificación de caracteres estandarizada ampliamente utilizada en la web. La codificación de caracteres es el método que utilizan las computadoras para almacenar caracteres como datos. En esencia, todo el texto de una página web es una secuencia de caracteres almacenada como uno o más bytes. En informática, un byte es una unidad de datos compuesta por 8 bits o dígitos binarios. UTF-8 admite todos los caracteres del conjunto de caracteres Unicode, incluyendo caracteres y símbolos de todos los sistemas de escritura, idiomas y símbolos técnicos. A continuación, se muestra un ejemplo del uso del elemento `meta` con el atributo `charset` para establecer la codificación de caracteres en `UTF-8`:

- **Codigo ejemplo**

  ```html
  <body>
    <meta charset="UTF-8" />
  </body>
  ```

Al configurar la codificación de caracteres en UTF-8, se garantizará que la `e` acentuada (`é`) se muestre correctamente en la página. A continuación, se muestra un ejemplo de código extendido del uso de la codificación de caracteres UTF-8:

- **Codigo ejemplo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Examples of the UTF-8 encoding</title>
    </head>
    <body>
      <p>Café</p>
    </body>
  </html>
  ```

Para cada nuevo proyecto que cree, debe incluir este elemento `meta` con el atributo `charset` establecido en `UTF-8`.
