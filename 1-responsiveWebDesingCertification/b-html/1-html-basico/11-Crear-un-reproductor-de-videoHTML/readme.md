# Crear un reproductor de video HTML

En este taller, creará un _reproductor de video HTML_. Se le ha proporcionado la plantilla HTML.

---

## Paso 1

_Cree un elemento `h1` y asígnele el texto `Working with the HTML Video Element`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  ```

---

## Paso 2

_A continuación, cree un elemento de `video` debajo del `h1`. En los siguientes pasos, agregará los atributos necesarios para que el reproductor de video funcione._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video></video>
  ```

---

## Paso 3

En una lección anterior, aprendiste sobre los diferentes atributos disponibles para el elemento `video`. El atributo `width` determina el ancho del video en píxeles.

_Agrega el atributo `width` al elemento `video` con un valor de `640`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video width="640"></video>
  ```

---

## Paso 4

El atributo `loop` reiniciará el video una vez que se complete la reproducción. Piensa en un meme de Internet que se reproduce repetidamente. Si omites el atributo `loop`, el video se reproducirá una sola vez.

El atributo `loop` es un atributo booleano y no necesita un valor.

_Agrega el atributo `loop` al elemento `video`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video width="640" loop></video>
  ```

---

## Paso 5

El atributo `controls` proporciona controles de reproducción, incluyendo reproducción, rebobinado y control de volumen para el elemento de `video`.

El atributo `controls` es un atributo booleano y no necesita un valor.

_Agregue el atributo `controls` al elemento de `video`._

Ahora debería ver el elemento de video mostrado en

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video width="640" loop controls></video>
  ```

---

## Paso 6

El atributo `muted` silenciará el audio en la reproducción inicial. Si tiene `controls` habilitados, el usuario podrá activar el audio. Si se omite el atributo `muted`, el audio se reproducirá en la reproducción inicial.

El atributo `muted` es un atributo booleano y no necesita un valor.

_Agregue el atributo `muted` al elemento de `video`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video width="640" loop controls muted></video>
  ```

---

## Paso 7

El atributo `poster` es una imagen en miniatura del video. Piensa en los videos que ves en YouTube. Se muestra mientras se descarga el video. Si se omite el atributo, se muestra el primer fotograma del video durante la fase de descarga.

_Ahora, agrega el atributo `poster` con el valor `https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg` a tu elemento de `video`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video
    width="640"
    loop
    controls
    muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg">
  </video>
  ```

---

## Paso 8

Quizás hayas notado que no has enlazado al video real. Lo harás en la siguiente fase. En lo que respecta a los tipos de archivos de video, existen diferencias en la compatibilidad de los navegadores. Para solucionarlo, puedes utilizar elementos ``source`` dentro del elemento `video` y el navegador seleccionará la primera `source` compatible.

Aquí tienes un ejemplo de un elemento `source`:

- **Codigo Ejemplo**

  ```html
  <video controls width="250">
    <source src="src-url-goes-here" type="video-type-goes-here" />
  </video>
  ```

El elemento `source` es un elemento vacío, por lo que no tiene etiqueta de cierre.

_Agrega un elemento `source` dentro de tu elemento `video`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video
    width="640"
    loop
    controls
    muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg">
    <source>
  </video>
  ```

---

## Paso 9

Para especificar el recurso multimedia del video, deberá agregar el atributo `src` al elemento `source`.

_Agregue el atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video
    width="640"
    loop
    controls
    muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg">
    <source src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4">
  </video>
  ```

---

## Paso 10

Ha utilizado un archivo de vídeo con la extensión `mp4` y debe indicárselo al navegador para que sepa cómo leer el archivo.

Utilizará el atributo `type` para especificar el tipo MIME `video/mp4`.

MIME (Multipurpose Internet Mail Extensions) es un estándar para describir documentos en otros formatos además del texto ASCII, por ejemplo, audio, vídeo e imágenes.

`MP4`, conocido formalmente como `MPEG-4 Parte 14`, es un formato contenedor multimedia digital. Se utiliza ampliamente para almacenar video y audio, pero también puede incluir otros tipos de datos como subtítulos e imágenes fijas. Los archivos MP4 están diseñados para su transmisión por Internet y son compatibles con muchos dispositivos y plataformas.

_Ahora, agregue el atributo `type` y el valor `video/mp4`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>
  <video
    width="640"
    loop
    controls
    muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg">
    <source src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4" type="video/mp4">
  </video>
  ```

---

## Paso 11

Otro _type MIME_ común es el `type MIME video/webm`.

WebM es un formato de archivo multimedia audiovisual de código abierto desarrollado por Google, diseñado principalmente para contenido multimedia basado en la web. Es compatible con códecs de video como VP8, VP9 y AV1, y códecs de audio como Vorbis y Opus, lo que lo convierte en una opción popular para elementos de video y audio HTML5.

_Debajo de su primer elemento `source`, añada otro elemento `source` y asígnele un atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/labs/mapmethod.webm` y un atributo `type` con el valor `video/webm`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>

  <video width="640" loop controls muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4" type="video/mp4">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/mapmethod.webm" type="video/webm">

  </video>
  ```

---

## Paso 12

Otro _type MIME_ común es el `type MIME video/ogg.`

Ogg es un formato contenedor multimedia digital diseñado para proporcionar una transmisión y manipulación eficientes de multimedia digital. Lo mantiene la Fundación Xiph.Org y es gratuito y abierto, sin restricciones por patentes de software. Su nombre deriva de «ogging», jerga del videojuego Netrek.

_Debajo de su segundo elemento `source`, añada un tercer elemento `source` y asígnele un atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/labs/mapmethod.ogg` y un atributo `type` con el valor `video/ogg`._

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>

  <video width="640" loop controls muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4" type="video/mp4">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/mapmethod.webm" type="video/webm">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/mapmethod.ogg" type="video/ogg">

  </video>
  ```

---

## Paso 13

El último elemento `source` que agregará será para el tipo `MIME de video/quicktime`.

QuickTime es una arquitectura multimedia extensible creada por Apple, que admite la reproducción, transmisión, codificación y transcodificación de una variedad de formatos de medios digitales. Aunque no es tan popular como el formato MP4, es posible que lo necesite para la compatibilidad con aplicaciones heredadas.

Debajo de su tercer elemento `source`, añada un cuarto elemento `source` y asígnele un atributo `src` con el valor `https://cdn.freecodecamp.org/curriculum/labs/mapmethod.mov` y un atributo `type` con el valor `video/quicktime`.

- **Codigo**

  ```html
  <h1>Working with the HTML Video Element</h1>

  <video width="640" loop controls muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4" type="video/mp4">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/mapmethod.webm" type="video/webm">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/mapmethod.ogg" type="video/ogg">

    <source src="https://cdn.freecodecamp.org/curriculum/labs/mapmethod.mov" type="video/quicktime">

  </video>
  ```

---

**¡Enhorabuena! Ha completado el taller sobre reproductores de vídeo HTML.**
