# Trabajar con los medios de comunicación (MEDIA)

En estos videos de lecciones, aprenderá a trabajar con recursos multimedia como elementos de `audio` y `video`, `SVG`, cómo optimizarlos y más.

## ¿Qué son los elementos reemplazados y cuáles son algunos ejemplos?

Un elemento reemplazado es un elemento cuyo contenido está determinado por un recurso externo, no por el propio CSS. CSS, u hojas de estilo en cascada, se utiliza para añadir estilos a una página web. Ejemplos comunes de elementos reemplazados incluyen los elementos de imagen, iframe y vídeo.

Con los elementos reemplazados, se puede controlar la posición o el diseño de un elemento. Sin embargo, el CSS no puede modificar directamente su contenido. Esto podría explicarse más fácilmente con algunos ejemplos. Considere el elemento de imagen, que incrusta una imagen en su página web:

- **Codigo ejemplo**

  ```html
  <img src="example-img-url" alt="Descriptive text goes here">
  ```

El elemento en sí se reemplaza con el objeto externo: la imagen. Tu CSS puede controlar aspectos como la posición de la imagen o aplicarle un filtro, pero no puedes modificarla. Un ejemplo más robusto podría ser el elemento `iframe`, que integra un sitio externo en tu página web:

- **Codigo ejemplo**

  ```html
  <iframe src="https://www.example.com" title="Example Site"></iframe>
  ```

Ejemplos comunes del uso del elemento `iframe` serían incrustar mapas o vídeos de YouTube en la página. El elemento se reemplaza por el objeto externo: el sitio. Tu CSS puede cambiar la posición del sitio incrustado, pero no puedes modificar su contenido. Para profundizar un poco más, si el sitio incrustado tiene un elemento `h1`, tu CSS no podrá aplicar estilo a ese elemento `h1`. No puedes cambiar el tamaño, el color de la fuente, etc.

Existen otros elementos reemplazados, como `video` y `embed`. Algunos elementos se comportan como elementos reemplazados en circunstancias específicas. Aquí tienes un ejemplo de un elemento de `input` con el atributo `type` establecido en `img`:

- **Codigo ejemplo**

  ```html
  <input type="image" alt="Descriptive text goes here" src="example-img-url">
  ```

Este tipo de entrada se considera un elemento reemplazado, pero otros tipos de entrada, como texto o correo electrónico, no son elementos reemplazados.

## Questionario 1

- **¿Qué puedes diseñar en un elemento reemplazado?**

  - a) El tamaño de la letra.
  - b) El diseño o posicionamiento. // correcto
  - c) El color de un texto específico.
  - d) Todas.
  
- **¿Con qué se reemplaza un elemento reemplazado?**

  - a) Un objeto externo. // correcto
  - b) Otro elemento.
  - c) Algo de CSS.
  - d) Asamblea.
  
- **¿Cuál de estos es un elemento reemplazado?**

  - a) h1.
  - b) p.
  - c) inframe. // correcto
  - d) a.

## ¿Cuáles son las formas habituales de optimizar los recursos multimedia?

Hay tres factores a considerar al usar recursos multimedia, como imágenes, en tus páginas web: el tamaño, el formato y la compresión.

Primero, hablemos del tamaño de tus imágenes. Al crear un sitio web, a menudo estilizas las imágenes para que se muestren en un tamaño específico. Por ejemplo, podrías tener una imagen con una resolución de `640x480`. `640` representa el ancho, mientras que 480 representa la altura en píxeles. Al preparar tu imagen, querrás escalarla a `640x480` para que se ajuste a ese estilo. Si publicas una imagen de `1920x1080`, pero la diseñas para que sea mucho más pequeña, estás obligando a tus usuarios a descargar datos innecesarios. Una resolución menor resulta en un tamaño de archivo menor.

El siguiente aspecto a considerar es el formato del archivo. Dos de los formatos de archivo más comunes son `PNG` y `JPG`, pero estos ya no son los formatos más ideales para mostrar imágenes. A menos que necesite compatibilidad con navegadores antiguos, debería considerar usar un formato más optimizado, como `WEBP` o `AVIF`.

Finalmente, puede ejecutar algoritmos de compresión en sus imágenes. Un algoritmo de compresión se utiliza para reducir el tamaño de los archivos o datos. Existen opciones como pngcrush para comprimir sus imágenes localmente, o puede usar herramientas de compresión en línea. Sin embargo, cabe destacar que ciertos formatos de archivo, como `JPG`, no son sin pérdida. Sin pérdida significa que los datos originales se pueden reconstruir perfectamente a partir de los datos comprimidos. Si intenta comprimir una imagen `JPG`, la calidad se degradará. Debe tener en cuenta todos estos aspectos al seleccionar imágenes para sus páginas web.

## Questionario 2

- **¿Cómo deberías escalar o dimensionar tus imágenes?**

  - a) Las imágenes deben ser más pequeñas que el tamaño representado en la página.
  - b) Las imágenes deben ser más grandes que el tamaño representado en la página.
  - c) Sus imágenes deben tener la misma escala que el tamaño representado en la página. // correcto
  - d) No importa, usa el tamaño que desees.

- **¿Cuál de los siguientes NO es un tipo de archivo de imagen válido?**

  - a) TS. // correcto
  - b) PNG.
  - c) JPG.
  - d) WEBP.

- **¿Qué formato de archivo nunca debes comprimir?**

  - a) WEBP.
  - b) PNG.
  - c) JPG. // correcto
  - d) GIF.

## ¿Cuáles son los diferentes tipos de licencias de imagen y cómo funcionan?

Las imágenes se consideran `propiedad intelectual`, lo que significa que están protegidas por las `normas de derechos de autor`, que suelen pertenecer a su creador.
Por defecto, las imágenes se publican con todos los derechos reservados.
El creador, o en ocasiones el editor, posee todos los derechos de autor de la imagen.

Esto significa que no puedes usarlas en tu página web a menos que cumplas una de estas **tres condiciones**: *obtener permiso por escrito del titular de los derechos de autor*, *adquirir una licencia del titular de los derechos de autor* o *incorporar la imagen de forma que se considere un uso legítimo*.

**Este tercer punto es un poco confuso**. El uso legítimo requiere que el uso de la imagen sea limitado y transformador. Algunos ejemplos de uso legítimo serían comentar o reseñar el arte, o crear una parodia de la imagen.

Algunas imágenes pueden publicarse bajo una `licencia permisiva`, como la licencia `Creative Commons` o la licencia `BSD` que utiliza `freeCodeCamp`. Estas imágenes están disponibles para su uso en tu sitio web, pero deberás leer la licencia para comprender las normas que debes seguir al usarlas. Por ejemplo, es posible que se le exija que su sitio web sea de código abierto o que no se le permita modificar la imagen de ninguna manera.

**Finalmente**, algunas imágenes pueden estar disponibles en el `dominio público`. Una imagen de `dominio público` no tiene derechos de autor asociados y se puede usar libremente sin restricciones.
Las imágenes con licencia `Creative Commons 0` se consideran de `dominio público`.

La mayoría de los motores de búsqueda permiten filtrar los resultados de imágenes por licencia. También existen sitios como `Pixabay` y `Unsplash`, que ofrecen imágenes gratuitas. Tenga siempre en cuenta los derechos de autor y las licencias al usar una imagen en su sitio web.

## Questionario 3

- **¿Cuál es la licencia predeterminada para las imágenes?**

  - a) Reservados todos los derechos. // correcto
  - b) Licencia permisiva.
  - c) Dominio público.
  - d) Creative Commons.

- **¿Qué licencia libera obras al dominio público?**

  - a) MIT
  - b) BSD
  - c) Creative Commons
  - d) Creative Commons 0 // correcto

- **¿Cómo puedo encontrar imágenes que estoy autorizado a utilizar?**

  - a) Busca imágenes en Google y úsalas libremente.
  - b) Utilice sitios web como Pixabay o Unsplash. // correcto
  - c) Utilice cualquier imagen de las redes sociales siempre que dé crédito.
  - d) Puedes utilizar cualquier imagen siempre que no tenga marca de agua.

## ¿Qué son los SVG y cuándo debes usarlos?

**¿Qué son los SVG y cuándo deberías usarlos?**

Primero, necesitas entender cómo funcionan las imágenes. Los formatos de imagen comunes como `PNG` y `JPG` se clasifican como formatos raster. Esto significa que están basados n píxeles, y los datos rastrean el valor de color de cada píxel.

Una gran desventaja de las imágenes raster es que no se escalan bien. Si alguna vez has intentado agrandar un PNG, puede que hayas visto que se pixela o se ve borroso.

Un SVG es un tipo diferente de imagen. SVG significa gráfico vectorial escalable. Un gráfico vectorial rastrea datos basados en rutas y ecuaciones para trazar puntos, líneas y curvas. Esto significa que un gráfico vectorial, como un SVG, se puede escalar a cualquier tamaño sin afectar la calidad.

Los SVG tienen la ventaja adicional de almacenar datos en XML. Esto significa que puedes usarlos directamente en tu código como HTML sin formato con el elemento SVG. También significa que puedes cambiar el color de la imagen mediante programación.

Entonces, ¿cuándo querrías usar un SVG? Un excelente ejemplo de uso son los iconos. Si quieres crear viñetas personalizadas o añadir iconos a tus enlaces para representar plataformas de redes sociales, usar SVG es la mejor opción. Una de las bibliotecas de iconos más populares, Font Awesome, utiliza imágenes SVG para sus iconos. Los SVG también son ideales para logotipos de páginas web, ya que se escalan perfectamente. Te permiten adaptar tu diseño a cualquier diseño responsivo que necesites. La próxima vez que tengas un SVG local, prueba a abrirlo con un editor de texto y experimenta con el código.

## Questionario 4

- **¿Qué es una imagen rasterizada?**

  - a) Una imagen que almacena rutas, líneas, puntos y curvas.
  - b) Una imagen que almacena datos de color para cada píxel. // correcto
  - c) Todas las imágenes son imágenes rasterizadas.
  - d) Una imagen fácilmente escalable.

- **¿Qué es una imagen vectorial?**

  - a) Una imagen que almacena rutas, líneas, puntos y curvas. // correcto
  - b) Una imagen que almacena datos de color para cada píxel.
  - c) Todas las imágenes son imágenes vectoriales.
  - d) Una imagen que no es fácilmente escalable.

- **¿Cómo almacena datos un SVG?**

  - a) Como píxeles.
  - b) Como binario.
  - c) Como hexadecimal.
  - d) Como XML. // correcto

## ¿Cuáles son las funciones de los elementos de audio y vídeo en HTML y cómo funcionan?

¿Cuáles son las funciones de los elementos de `audio` y `vídeo` HTML y cómo funcionan?

Los elementos de `audio` y `vídeo` permiten añadir sonido y `vídeo` a los documentos HTML. El elemento de audio admite formatos de audio populares como MP3, WAV y OGG. El elemento de `vídeo` admite los formatos MP4, OGG y WebM.

Para incluir `audio` en la página web, se puede usar el elemento de audio con el atributo `src` que indica la ubicación del archivo de audio:

- **Codigo ejemplo**

  ```html
  <audio src="CrystalizeThatInnerChild.mp3"></audio>
  ```

Si intenta ejecutar este ejemplo, verá que no aparece nada en la página. Sin embargo, si la inspecciona con las herramientas de desarrollo, verá que el elemento de `audio` sí está presente. Si desea ver el reproductor de `audio` en la página, puede agregarlo con el atributo "`controls`":

- **Codigo ejemplo**

  ```html
  <audio src="CrystalizeThatInnerChild.mp3" controls></audio>
  ```

El atributo "`controls`" permite a los usuarios gestionar la reproducción de audio, incluyendo el ajuste del volumen, la pausa y la reanudación de la reproducción. Este atributo `controls` es un booleano que se puede añadir a un elemento para habilitar los controles de reproducción integrados. Si se omite, no se mostrará ningún control.

Además de los atributos "`src`" y "`controls`", existen otros atributos que mejoran la funcionalidad del elemento de `audio`. El atributo "`loop`" es un booleano que permite que el audio se reproduzca continuamente. A continuación, se muestra un ejemplo del uso del atributo "`loop`" para reproducir una canción de Quincy Larson titulada "Can't stay down":

- **Codigo ejemplo**

  ```html
  <audio
    src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
    loop
    controls>
  </audio>
  ```

Cuando la canción llega al final, se repetirá y se reproducirá desde el principio. Otro atributo que puedes usar es el atributo `muted`. Cuando está presente en el elemento de `audio`, este atributo booleano iniciará el audio `muted`. Aquí tienes un ejemplo del uso del atributo `muted`:

- **Codigo ejemplo**

  ```html
  <audio
    src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
    loop
    controls
    muted
  ></audio>
  ```

Al iniciar la canción en el navegador, no se oirá nada. Para escuchar la música, deberá hacer clic en el icono de volumen.

En cuanto a los tipos de archivos de audio, existen diferencias según el navegador que los admita. Para ello, puede usar elementos `source` dentro del elemento de `audio` y el navegador seleccionará la primera fuente que reconozca. A continuación, se muestra un ejemplo de uso de varios elementos `source` para un elemento de `audio`:

- **Codigo ejemplo**

  ```html
  <audio controls>
    <source src="audio.ogg" type="audio/ogg" />
    <source src="audio.wav" type="audio/wav" />
    <source src="audio.mp3" type="audio/mpeg" />
  </audio>
  ```

El navegador comenzará con el tipo ogg y, si no puede reproducir el audio, pasará al siguiente tipo de la lista.

Todos los atributos que hemos aprendido hasta ahora también son compatibles con el elemento de `video`. A continuación, se muestra un ejemplo de uso de un elemento de `video` con los atributos de `loop`, `controls` y `muted`:

- **Codigo ejemplo**

  ```html
  <video
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    loop
    controls
    muted>
  </video>
  ```

Para el atributo `src` (o fuente), usamos un video llamado "Big Buck Bunny" de archive.org. Si desea mostrar una imagen mientras se descarga el video, puede usar el atributo `poster`. Este atributo no está disponible para elementos de `audio` y es exclusivo del elemento `video`. A continuación, se muestra un ejemplo del uso del atributo `poster` con contenido proporcionado por `peach.blender.org`:

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

Este ejemplo también utiliza el atributo de `width` para establecer el ancho en `620px` para que el video se ajuste mejor a la pantalla.

## Questionario 5

- **¿Qué atributo permite que el audio comience en un estado silenciado?**

  - a) mute
  - b) quiet
  - c) puse
  - d) muted // correcto

- **¿Qué atributo te permite ver los botones de reproducción y pausa?**

  - a) loop
  - b) controls // correcto
  - c) detailis
  - d) muted

- **¿Cuál es el propósito del atributo poster en el elemento video?**

  - a) Para configurar la fuente de vídeo.
  - b) Para controlar la reproducción del vídeo.
  - c) Para mostrar una imagen mientras se descarga el vídeo. // correcto
  - d) Para silenciar el vídeo.

## ¿Cómo se incrustan vídeos en una página usando el elemento `iframe`?

Primero, ¿qué es exactamente el elemento `iframe`? `iframe` significa marco en línea. Es un elemento en línea que se utiliza para incrustar otro contenido HTML directamente en la página HTML. Ese contenido HTML puede ser un vídeo,un mapa, otro elemento HTML o incluso otras páginas web. Así es como se ve la sintaxis del elemento `iframe`:

- **Codigo ejemplo**

  ```html
  <iframe
    src="video-url"
    width="width-value"
    height="height-value"
    allowfullscreen
  ></iframe>
  ```

El atributo `src` especifica la URL de la página que desea incrustar. El atributo `width` especifica el ancho del `iframe`. El atributo `height` especifica la altura del `iframe`. El atributo `allowfullscreen` permite al usuario mostrar el `iframe` en modo de pantalla completa. También es recomendable especificar un atributo `title` para el `iframe`, ya que es importante para la accesibilidad.

Para incrustar un vídeo en un `iframe`, puede copiarlo directamente de servicios de vídeo populares como YouTube y Vimeo, o definirlo usted mismo con el atributo `src` apuntando a la URL de ese vídeo. A continuación, se muestra un ejemplo de incrustación de un curso popular de freeCodeCamp desde YouTube:

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

Puedes personalizar el `iframe` según tus necesidades o incluso definir uno propio copiando el enlace del vídeo de YouTube y pegándolo como URL. La advertencia es que debes reemplazar `https://youtu.be` por `https://youtube.com/embed/`.

`youtu.be` es el dominio al copiar el enlace para compartir y `youtube.com/embed/` es el dominio necesario para incrustar vídeos con el elemento `iframe`. Aquí tienes un ejemplo:

- **Codigo ejemplo**

  ```html
  <iframe
    src="https://youtube.com/embed/gp5H0Vw39yw?si=Rb_2nDK6abv1iIAM"
    title="freeCodeCamp Typescript Course"
    width="500"
    height="285"
    allowfullscreen
  ></iframe>
  ```

Tenga en cuenta que el video puede provenir de cualquier lugar. No es necesario que provenga de plataformas de video como YouTube y Vimeo. Aquí hay un video de Pixabay incrustado con el elemento `iframe`:

- **Codigo ejemplo**

  ```html
  <h1>A Video from Pixabay Embedded with the iframe Element</h1>

  <iframe
    src="https://cdn.pixabay.com/video/2022/07/24/125310-733046613_large.mp4"
    width="500"
    height="285"
  ></iframe>
  ```

No olvides que también puedes incrustar un mapa, otra página web o HTML directo dentro del elemento `iframe`. Aquí tienes un mapa que pude incrustar con el elemento `iframe`:

- **Codigo ejemplo**

  ```html
  <h1>A Map from Openstreetmap.org Embedded with the iframe Element</h1>

  <iframe
    width="425"
    height="350"
    src="https://www.openstreetmap.org/export/embed.html?bbox=3.006134033203125%2C6.150112578753815%2C3.6357879638671875%2C6.749850810550778&amp;layer=mapnik"
    style="border: 1px solid black"
  >
  </iframe>
  <br />
  <small>
    <a href="https://www.openstreetmap.org/#map=11/6.4501/3.3210">
      View Larger Map
    </a>
  </small>
  ```

Si desea insertar HTML directo dentro del elemento `iframe`, deberá utilizar el atributo `srcdoc` en lugar de `src`.

## Questionario 6

- **¿Qué significa iframe?**

  - a) Marco internacional.
  - b) Formulario en línea.
  - c) Marco en línea. // correcto
  - d) Elemento de formulario en línea.

- **¿Qué atributo del elemento iframe especifica la ubicación de lo que desea incrustar?**

  - a) src // correcto
  - b) url
  - c) frameborder
  - d) cross-origin

- **¿Qué atributo del elemento iframe utilizas en lugar de src si quieres incrustar HTML directo?**

  - a) html
  - b) document
  - c) srcweb
  - d) srcdoc // correcto
