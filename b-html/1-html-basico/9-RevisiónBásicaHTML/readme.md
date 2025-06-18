# Revisión básica de HTML

Antes de evaluar tus conocimientos de HTML, primero debes repasar los conceptos.

Abre esta página para repasar el código HTML, los elementos de `audio` y `video`, los diferentes valores de los atributos de `target` y más.

## Fundamentos de HTML

- **Función de HTML**: HTML representa el contenido y la estructura de la página web.

- **Elementos HTML**: Los elementos son los componentes básicos de un documento HTML. Representan encabezados, párrafos, enlaces, imágenes y más. La mayoría de los elementos HTML constan de una etiqueta de apertura (`<elementName>`) y una etiqueta de cierre (`</elementName>`).

  - **Codigo ejemplo**

    ```html
    <elementName>Content goes here</elementName>
    ```

- **Elementos vacíos**: Estos elementos no pueden tener contenido y solo tienen una etiqueta de inicio. Algunos ejemplos son los elementos `img` y `meta`.

  - **Codigo ejemplo**

    ```html
    <img>
    <meta>
    ```

  Es común ver algunas bases de código que incluyen una barra diagonal `/` dentro del elemento void. Ambas son aceptables:

  - **Codigo ejemplo**

    ```html
    <img>
    <img/>
    ```

- **Atributos**: Un atributo es un valor que se coloca dentro de la etiqueta de apertura de un elemento HTML. Los atributos proporcionan información adicional sobre el elemento o especifican su comportamiento. A continuación, se muestra la sintaxis básica de un atributo:

  - **Codigo ejemplo**

    ```html
    <element attribute="value"></element>
    ```

  Un atributo booleano puede estar presente o ausente en una etiqueta HTML. Si está presente, el valor es verdadero; de lo contrario, es falso. Ejemplos de atributos booleanos incluyen "`disabled`", "`readonly`" y "`required`".

- **Comentarios**: Los comentarios se utilizan en programación para dejar notas en el código para usted y otros desarrolladores. A continuación, se muestra la sintaxis de un comentario en HTML:

  - **Codigo ejemplo**

    ```html
    <!--This is an HTML comment.-->
    ```

## Elementos comunes de HTML

- **Elementos de encabezado**: HTML cuenta con seis elementos de encabezado. Los elementos de encabezado `h1` a `h6` se utilizan para indicar la importancia del contenido que se encuentra debajo. Cuanto menor sea el número, mayor será la importancia; por lo tanto, los elementos `h2` tienen menor importancia que los `h1`.

  - **Codigo ejemplo**

    ```html
    <h1>most important heading element</h1>
    <h2>second most important heading element</h2>
    <h3>third most important heading element</h3>
    <h4>fourth most important heading element</h4>
    <h5>fifth most important heading element</h5>
    <h6>least important heading element</h6>
    ```

- **Elementos de párrafo**: se utiliza para los párrafos de una página web.

  - **Codigo ejemplo**
  
    ```html
      <p>This is a paragraph element.</p>
    ```

- **Elementos `img`**: El elemento `img` se utiliza para añadir imágenes a la página web. El atributo `src` se utiliza para especificar la ubicación de la imagen. Para los elementos de imagen, se recomienda incluir otro atributo llamado `alt`. A continuación, se muestra un ejemplo de un elemento `img` con los atributos `src` y `alt`:

  - **Codigo ejemplo**
  
      ```html
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
      ```

- **Elemento `body`**: este elemento se utiliza para representar el contenido del documento HTML.

  - **Codigo ejemplo**
  
      ```html
      <body>
        <h1>CatPhotoApp</h1>
        <p>This is a paragraph element.</p>
      </body>    
      ```

- **Elementos `section`**: Este elemento se utiliza para dividir el contenido en secciones más pequeñas.

  - **Codigo ejemplo**
  
      ```html
      <section>
      <h2>About Me</h2>
      <p>Hi, I am Jane Doe and I am a web developer.</p>
    </section>   
      ```

- **Elementos `div`**: Este elemento es un elemento HTML genérico sin significado semántico. Se utiliza como contenedor genérico para otros elementos HTML.

  - **Codigo ejemplo**
  
      ```html
      <div>
        <h1>I am a heading</h1>
        <p>I am a paragraph</p>
      </div>  
      ```

- **Elementos de anclaje (a)**: Estos elementos se utilizan para crear enlaces a una página web. El atributo `href` especifica la ubicación del enlace al hacer clic.

  - **Codigo ejemplo**
  
      ```html
      <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a>
      ```

- **Elementos de lista desordenados (`ul`) y ordenados (`ol`)**: para crear una lista con viñetas de elementos, debe utilizar el elemento ul con uno o más elementos li anidados en su interior de la siguiente manera:

  - **Codigo ejemplo**
  
    ```html
    <ul>
      <li>catnip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    ```

  Para crear una lista ordenada de elementos debes utilizar el elemento `ol`:

  - **Codigo ejemplo**
  
    ```html
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
    ```

- **Elemento énfasis (`em`)**: se utiliza para colocar énfasis en un fragmento de texto.

  - **Codigo ejemplo**
  
    ```html
    <p>Cats <em>love</em> lasagna.</p> 
    ```

- **Elemento de strong importancia (`strong`)**: este elemento se utiliza para colocar un `strong` énfasis en el texto para indicar un sentido de urgencia y seriedad.

  - **Codigo ejemplo**
  
    ```html
    <p>
      <strong>Important:</strong> Before proceeding, make sure to wear your safety goggles. 
    </p> 
    ```

- **Elementos `figure` y `figcaption`**: El elemento `figure` se utiliza para agrupar contenido como imágenes y diagramas. El elemento `figcaption` se utiliza para representar un título para dicho contenido dentro del elemento `figure`.

  - **Codigo ejemplo**
  
    ```html
    <figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
      <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
    </figure>
    ```

- **Elemento `main`**: Este elemento se utiliza para representar el contenido principal de una página web.

- **Elemento `footer`**: Este elemento se coloca al final del documento HTML y suele contener información de derechos de autor y otros enlaces importantes a la página.

  - **Codigo ejemplo**
  
    ```html
    <footer>
      <p>
        No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
      </p>
    </footer>
    ```

## Identificadores y agrupación

- `id`: Identificadores únicos para elementos HTML. Los nombres de id solo deben usarse una vez por documento HTML.

  - **Codigo ejemplo**
  
    ```html
    <h1 id="title">Movie Review Page</h1>
    ```

  Los nombres de id no pueden tener espacios. Si su nombre de id contiene varias palabras, puede usar guiones entre ellas, como se muestra a continuación:

  - **Codigo ejemplo**
  
    ```html
    <div id="red-box"></div>
    ```

- **Clases**: Las clases se utilizan para agrupar elementos según su estilo y comportamiento.

  - **Codigo ejemplo**
  
    ```html
    <div class="box"></div>
    ```

  A diferencia de los ID, puedes reutilizar el mismo nombre de clase en todo el documento HTML. El valor de clase también puede tener espacios como este:

  - **Codigo ejemplo**
  
    ```html
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
    ```

## Caracteres especiales y enlaces

- **Entidades HTML**: Una entidad HTML, o referencia de carácter, es un conjunto de caracteres que se utiliza para representar un carácter reservado en HTML. Algunos ejemplos son el símbolo (`&amp;`) y el símbolo menor que (`&lt;`).

  - **Codigo ejemplo**
  
    ```html
    <p>This is an &lt;img /&gt; element</p>
    ```

- **Elemento de `link`**: Este elemento se utiliza para enlazar a recursos externos, como hojas de estilo e iconos del sitio. A continuación, se muestra la sintaxis básica para usar el elemento de `link` en un archivo CSS externo:

  - **Codigo ejemplo**
  
    ```html
    <link rel="stylesheet" href="./styles.css" />
    ```

  El atributo `rel` se utiliza para especificar la relación entre el recurso vinculado y el documento HTML. El atributo `href` se utiliza para especificar la ubicación de la URL del recurso externo.

- **Elemento `script`**: este elemento se utiliza para incrustar código ejecutable.

  - **Codigo ejemplo**
  
    ```html
    <body>
      <script>
        alert("Welcome to freeCodeCamp");
      </script>
    </body>
    ```

  Aunque técnicamente puedes escribir todo tu código JavaScript dentro de las etiquetas de `script`, se recomienda enlazar a un archivo JavaScript externo. A continuación, se muestra un ejemplo del uso del elemento `script` para enlazar a un archivo JavaScript externo:

  - **Codigo ejemplo**
  
    ```html
    <script src="path-to-javascript-file.js"></script>
    ```

  El atributo `src` se utiliza aquí para especificar la ubicación de ese archivo JavaScript externo.

## Texto repetitivo y codificación

- **Texto repetitivo HTML**: Este texto repetitivo incluye la estructura básica y los elementos esenciales que todo documento HTML necesita.

  - **Codigo ejemplo**
  
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>freeCodeCamp</title>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <!--Headings, paragraphs, images, etc. go inside here-->
      </body>
    </html>
    ```

- **`!DOCTYPE`**: Indica a los navegadores la versión de HTML que se utiliza.

- **Elemento `html`**: Representa el elemento de nivel superior o la raíz de un documento HTML. Para especificar el idioma del documento, se debe usar el atributo `lang`.

- **Elemento `head`**: La sección `head` contiene metadatos importantes, información que los navegadores y los motores de búsqueda necesitan en segundo plano.

- **Elementos `meta`**: Representan los metadatos de su sitio web. Contienen detalles sobre aspectos como la codificación de caracteres, cómo sitios web como Twitter deben previsualizar el enlace de la página, etc.

- **Elemento `title`**: Define el texto que aparece en la pestaña o ventana del navegador.

- **Codificación de caracteres `UTF-8`**: `UTF-8`, o Formato de Transformación UCS 8, es una codificación de caracteres estandarizada ampliamente utilizada en la web. La codificación de caracteres es el método que utilizan las computadoras para almacenar caracteres como datos. El atributo `charset` se utiliza dentro de un elemento `meta` para establecer la codificación de caracteres en `UTF-8`.

## SEO y redes sociales

- **SEO**: La optimización para motores de búsqueda (SEO) es una práctica que optimiza las páginas web para que sean más visibles y tengan un mejor posicionamiento en los motores de búsqueda.

- **Elemento `meta` (descripción)**: Se utiliza para proporcionar una breve descripción de la página web y mejorar el SEO.

  - **Codigo ejemplo**
  
    ```html
    <meta
      name="description"
      content="Discover expert tips and techniques for gardening in small spaces, choosing the right plants, and maintaining a thriving garden."
    />
    ```

- **Etiquetas Open Graph**: El protocolo Open Graph te permite controlar cómo se muestra el contenido de tu sitio web en diversas plataformas de redes sociales, como Facebook, LinkedIn y muchas más.

  Al configurar estas propiedades de Open Graph, puedes incentivar a los usuarios a hacer clic e interactuar con tu contenido. Puedes configurar estas propiedades mediante una colección de `meta` dentro de la sección de `head` HTML.

- **Propiedad `og:title`**: Se utiliza para configurar el título que se muestra en las publicaciones en redes sociales.

  - **Codigo ejemplo**
  
    ```html
    <meta content="freeCodeCamp.org" property="og:title" />
    ```

- **Propiedad `og:type`**: La propiedad type se utiliza para representar el tipo de contenido que se comparte en redes sociales. Ejemplos de este contenido incluyen artículos, sitios web, vídeos o música.

  - **Codigo ejemplo**
  
    ```html
    <meta property="og:type" content="website" />
    ```

- **Propiedad `og:image`**: Se utiliza para establecer la imagen que se muestra en las publicaciones en redes sociales.

  - **Codigo ejemplo**
  
    ```html
    <meta
      content="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
      property="og:image"
    />
    ```

- **Propiedad `og:url`**: se utiliza para establecer la URL en la que los usuarios harán clic para las publicaciones en las redes sociales.

  - **Codigo ejemplo**
  
    ```html
    <meta property="og:url" content="https://www.freecodecamp.org" />
    ```

## Elementos multimedia y optimización

- **Elementos reemplazados**: Un elemento reemplazado es un elemento cuyo contenido está determinado por un recurso externo, en lugar del propio CSS. Un ejemplo sería un elemento `iframe`. `iframe` significa marco en línea. Es un elemento en línea que se utiliza para incrustar otro contenido HTML directamente en la página HTML.

  - **Codigo ejemplo**
  
    ```html
    <iframe src="https://www.example.com" title="Example Site"></iframe>
    ```

  Puede incluir el atributo `allowfullscreen` que permite al usuario mostrar el iframe en modo de pantalla completa.

  - **Codigo ejemplo**
  
    ```html
    <iframe
      src="video-url"
      width="width-value"
      height="height-value"
      allowfullscreen
    ></iframe>
    ```

  Para incrustar un vídeo en un `iframe`, puedes copiarlo directamente desde plataformas de vídeo populares como YouTube y Vimeo, o definirlo tú mismo con el atributo `src` que apunta a la URL del vídeo. Aquí tienes un ejemplo de incrustación de un curso popular de FreeCodeCamp desde YouTube:

  - **Codigo ejemplo**
  
    ```html
    <h1>A freeCodeCamp YouTube Video Embedded with the iframe Element</h1>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    ```

  Existen otros elementos reemplazados, como el `video` y `embed`. Algunos elementos se comportan como elementos reemplazados en circunstancias específicas. A continuación, se muestra un ejemplo de un elemento de `input` con el atributo de `type` establecido en `image`:

  - **Codigo ejemplo**
  
    ```html
    <input type="image" alt="Descriptive text goes here" src="example-img-url">
    ```

- **Optimización de medios**: Hay tres herramientas a considerar al usar medios, como imágenes, en sus páginas web: el tamaño, el formato y la compresión. Se utiliza un algoritmo de compresión para reducir el tamaño de los archivos o datos.

- **Formatos de imagen**: Dos de los formatos de archivo más comunes son PNG y JPG, pero ya no son los formatos más ideales para mostrar imágenes. A menos que necesite compatibilidad con navegadores antiguos, debería considerar usar un formato más optimizado, como WEBP o AVIF.

- **Licencias de imagen**: Una imagen de dominio público no tiene derechos de autor asociados y se puede usar libremente sin restricciones. Las imágenes con licencia Creative Commons 0 se consideran de dominio público. Algunas imágenes pueden publicarse bajo una licencia permisiva, como la licencia Creative Commons o la licencia BSD que utiliza freeCodeCamp.

- **SVG**: Los gráficos vectoriales escalables rastrean datos basándose en rutas y ecuaciones para trazar puntos, líneas y curvas. Esto significa que un gráfico vectorial, como un SVG, se puede escalar a cualquier tamaño sin afectar la calidad.

## Integración multimedia

- **Elementos de `audio` y `video`**: Los elementos de `audio` y `video` permiten añadir sonido y `video` a documentos HTML. El elemento de `audio` es compatible con formatos de `audio` populares como MP3, WAV y OGG. El elemento de `video` es compatible con MP4, OGG y WebM.

  - **Codigo ejemplo**
  
    ```html
    <audio src="CrystalizeThatInnerChild.mp3"></audio>
    ```

  Si desea ver el reproductor de audio en la página, puede agregar el elemento de `audio` con el atributo de `controls`:

  - **Codigo ejemplo**
  
    ```html
    <audio src="CrystalizeThatInnerChild.mp3" controls></audio>
    ```

  El atributo "`controls`" permite a los usuarios gestionar la reproducción de audio, incluyendo el ajuste del volumen, la pausa y la reanudación de la reproducción. Este atributo booleano se puede añadir a un elemento para habilitar los `controls` de reproducción integrados. Si se omite, no se mostrarán controles.

- **Atributo `loop`**: El atributo `loop` es un atributo booleano que permite que el audio se reproduzca continuamente.

  - **Codigo ejemplo**
  
    ```html
    <audio
      src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
      loop
      controls
    ></audio>
    ```

- **Atributo `mute`**: cuando está presente en el elemento de `audio`, el atributo booleano `mute` iniciará el audio en un estado silenciado.

  - **Codigo ejemplo**
  
    ```html
    <audio
      src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
      loop
      controls
      muted
    ></audio>
    ```

- **Elemento `source`**: En cuanto a los tipos de archivos de audio, existen diferencias según el tipo que admitan los navegadores. Para ello, puede usar elementos `source` dentro del elemento de `audio` y el navegador seleccionará la primera fuente que comprenda. A continuación, se muestra un ejemplo del uso de varios elementos `source` para un elemento de `audio`:

  - **Codigo ejemplo**
  
    ```html
    <audio controls>
      <source src="audio.ogg" type="audio/ogg" />
      <source src="audio.wav" type="audio/wav" />
      <source src="audio.mp3" type="audio/mpeg" />
    </audio>
    ```

  Todos los atributos que hemos aprendido hasta ahora también son compatibles con el elemento de `video`. A continuación, se muestra un ejemplo de uso de un elemento de `video` con los atributos de `loop`, `controls` y `mute`:

  - **Codigo ejemplo**
  
    ```html
    <video
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      loop
      controls
      muted
    ></video>
    ```

- **Atributo de `poster`**: Si desea mostrar una imagen mientras se descarga el video, puede usar el atributo de `poster`. Este atributo no está disponible para elementos de `audio` y es exclusivo del elemento de `video`.

  - **Codigo ejemplo**
  
    ```html
    <video
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      loop
      controls
      muted
      poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      width="620"
    ></video>
    ```

## Tipos de atributos de destino

- **Atributo de `target`**: Este atributo indica al navegador dónde abrir la URL del elemento de anclaje. Existen cuatro valores importantes para este atributo: `_self`, `_blank`, `_parent` y `_top`. Existe un quinto valor, llamado `_unfencedTop`, que actualmente se utiliza para la API experimental `FencedFrame`. Probablemente aún no tenga motivos para usarlo.

- **Valor de `_self`**: Este es el valor predeterminado del atributo de `target`. Abre el enlace en el contexto de navegación actual. En la mayoría de los casos, será la pestaña o ventana actual.

  - **Codigo ejemplo**
  
    ```html
    <a href="https://freecodecamp.org" target="_self">Visit freeCodeCamp</a>
    ```

- **Valor `_blank`**: Abre el enlace en un nuevo contexto de navegación. Normalmente, se abre en una nueva pestaña. Sin embargo, algunos usuarios configuran sus navegadores para que se abra en una nueva ventana.

  - **Codigo ejemplo**
  
    ```html
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
    ```

- **Valor `_parent`**: Abre el enlace en el elemento principal del contexto actual. Por ejemplo, si su sitio web tiene un iframe, un valor `_parent` en ese iframe se abriría en la pestaña/ventana de su sitio web, no en el marco incrustado.

  - **Codigo ejemplo**
  
    ```html
    <a href="https://freecodecamp.org" target="_parent">Visit freeCodeCamp</a>
    ```

- **Valor `_top`**: Abre el enlace en el contexto de navegación superior (por ejemplo, "el padre del padre"). Es similar a `_parent`, pero el enlace siempre se abrirá en la pestaña/ventana completa del navegador, incluso con marcos incrustados anidados.

  - **Codigo ejemplo**
  
    ```html
    <a href="https://freecodecamp.org" target="_top">Visit freeCodeCamp</a>
    ```

## Rutas absolutas vs. relativas

- **Definición de ruta(Paths)**: Una ruta es una cadena que especifica la ubicación de un archivo o directorio en un sistema de archivos. En desarrollo web, las rutas permiten a los desarrolladores enlazar a recursos como imágenes, hojas de estilo, scripts y otras páginas web.

- **Sintaxis de ruta(Paths)**: Hay tres sintaxis clave que conviene conocer. La primera es la barra diagonal, que puede ser una barra invertida (`\`) o una barra diagonal (`/`) según el sistema operativo. La segunda es el punto simple (.). Y, por último, el punto doble (`..`). La barra diagonal se conoce como el "separador de ruta". Se utiliza para indicar una separación de texto entre nombres de carpetas o archivos. Un punto simple apunta al directorio actual y dos puntos al directorio principal.

  - **Codigo ejemplo**
  
    ```text
    public/index.html
    ./favicon.ico
    ../src/index.css
    ```

- **Ruta absoluta**: Una ruta absoluta es un enlace completo a un recurso. Comienza en el directorio raíz, incluye todos los demás directorios y, finalmente, el nombre del archivo y la extensión. El "directorio raíz" se refiere al directorio o carpeta de nivel superior en una jerarquía. Una ruta absoluta también incluye el protocolo (que puede ser `http`, `https`, `file`) y el nombre de dominio si el recurso está en la web. A continuación, se muestra un ejemplo de una ruta absoluta que enlaza con el logotipo de freeCodeCamp:

  - **Codigo ejemplo**
  
    ```html
    <a href="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg">
      View fCC Logo
    </a>
    ```

- **Ruta relativa**: Una ruta relativa especifica la ubicación de un archivo en relación con el directorio del archivo actual. No incluye el protocolo ni el nombre de dominio, lo que la hace más corta y flexible para enlaces internos dentro del mismo sitio web. A continuación, se muestra un ejemplo de cómo enlazar a la página `about.html` desde la página `contact.html`, ambas en la misma carpeta:

  - **Codigo ejemplo**
  
    ```html
    <p>
      Read more on the
      <a href="about.html">About Page</a>
    </p>
    ```

## Estados de los enlaces(link)

- `:link`: Este es el estado predeterminado. Representa un enlace que el usuario aún no ha visitado, hecho clic ni interactuado. Este estado proporciona los estilos básicos para todos los enlaces de la página. Los demás estados se basan en él.

- `:visited`: Se aplica cuando el usuario ya ha visitado la página enlazada. Por defecto, el enlace se vuelve morado, pero se puede usar CSS para ofrecer una indicación visual diferente al usuario.

- `:hover`: Este estado se aplica cuando el usuario pasa el cursor sobre un enlace. Es útil para destacar un enlace y garantizar que el usuario realmente tenga la intención de hacer clic.

- `:focus`: Este estado se aplica cuando nos centramos en un enlace.

- `:active`: Este estado se aplica a los enlaces que el usuario activa. Esto suele significar hacer clic en el enlace con el botón izquierdo del ratón, en la mayoría de los casos.
