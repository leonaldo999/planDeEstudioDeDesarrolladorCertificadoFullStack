# Trabajando con enlaces

En estos videos de lecciones, aprenderá sobre los enlaces, el atributo de destino, diferentes estados de enlace, rutas absolutas y relativas, y más.

## ¿Cuáles son los diferentes Target de atributos de destino y cómo funcionan?

¿Cuáles son los diferentes tipos de atributos de `target` y cómo funcionan?

Quizás hayas visto el atributo de `target` en elementos de anclaje o enlaces. Este importante atributo indica al navegador dónde abrir la URL del elemento de anclaje:

- **Codigo ejemplo**

  ```html
  <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
  ```

Hay cuatro valores posibles importantes para este atributo. Tenga en cuenta que cada valor va precedido de un guion bajo.

El primer valor es `_self`, que es el valor predeterminado. Abre el enlace en el contexto de navegación actual. En la mayoría de los casos, será la pestaña o ventana actual.

El segundo valor es `_blank`, que abre el enlace en un nuevo contexto de navegación. Normalmente, se abre en una nueva pestaña. Sin embargo, algunos usuarios pueden configurar sus navegadores para que se abran en una nueva ventana.

El tercer valor es `_parent`, que abre el enlace en el contexto principal del contexto actual. Por ejemplo, si su sitio web tiene un `iframe`, un valor `_parent` en ese `iframe` se abriría en la pestaña/ventana de su sitio web, no en el marco incrustado.

El cuarto valor es `_top`, que abre el enlace en el contexto de navegación superior (es decir, el contexto principal del contexto principal). Es similar a `_parent`, pero el enlace siempre se abrirá en la pestaña/ventana completa del navegador, incluso con marcos incrustados anidados.

Hay un quinto valor, llamado `_unfencedTop`, que actualmente se utiliza para la API experimental FencedFrame. Al momento de este video, probablemente aún no tengas motivos para usarlo.

Seleccionar el valor `target` correcto para controlar la llegada de tus usuarios es un factor importante al crear un sitio web.

## Questionario 1

- **¿Cuántos valores target actuales existen para elegir?**

  - a) 2
  - b) 4 // correcto
  - c) 3
  - d) 1

- **¿Dónde se abrirá un enlace con target="_blank"?**

  - a) En una nueva ventana o pestaña. // correcto
  - b) En la misma ventana o pestaña.
  - c) En su segundo monitor.
  - d) En la computadora de Camperchan.

- **¿Cuál es el comportamiento predeterminado cuando no se establece un `target`?**

  - a) Se abre en una nueva ventana o pestaña.
  - b) Se abre en el contexto principal.
  - c) Se abre en la misma ventana o pestaña. // correcto
  - d) No abre.

## ¿Cuál es la diferencia entre rutas absolutas y relativas?

Una ruta es una cadena que especifica la ubicación de un archivo o directorio en un sistema de archivos. En desarrollo web, las rutas permiten a los desarrolladores enlazar a recursos como imágenes, hojas de estilo, scripts y otras páginas web. Existen rutas absolutas y relativas; ambas son esenciales al especificar la ubicación de archivos dentro de un sistema de archivos. Analicemos ambas para que pueda decidir cuál usar y cuándo.

Una ruta absoluta es un enlace completo a un recurso. Comienza desde el directorio raíz, incluye todos los demás directorios y, finalmente, el nombre del archivo y la extensión. El "directorio raíz" se refiere al directorio o carpeta de nivel superior en una jerarquía.

Una ruta absoluta también incluye el protocolo (que puede ser `http`, `https`, `file`) y el nombre de dominio si el recurso está en la web. Aquí tiene un ejemplo de una ruta absoluta que enlaza con el logotipo de freeCodeCamp:

- **Codigo ejemplo**

  ```html
  <a href="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg">
    View fCC Logo
  </a>
  ```

En este ejemplo, el protocolo es `https`, el nombre de dominio es `design-style-guide.freecodecamp.org` y el nombre de archivo es `fcc_secondary_small.svg`.

¿Qué ocurre si el recurso al que quieres enlazar mediante una ruta absoluta se encuentra en tu equipo local? A continuación, te explicamos cómo enlazar al archivo `about.html` con una ruta absoluta:

- **Codigo ejemplo**

  ```html
  <p>
    Read more on the
    <a
      href="/Users/user/Desktop/fCC/script-code/absolute-vs-relative-paths/pages/about.html"
      >About Page</a
      >
  </p>
  ```

Se ve así porque vamos a la carpeta `Users`, luego a la carpeta `user`, luego a la carpeta `Desktop`, luego a la carpeta `fCC`, luego a la carpeta `script-code`, luego a la carpeta `absolute-vs-relative-paths`, y finalmente a la carpeta `páges` para finalmente obtener el archivo `about.html`.

Así se ve la URL absoluta en la barra de direcciones del navegador:

- **Codigo ejemplo**

  ```text
  file:///Users/user/Desktop/fCC/script-code/absolute-vs-relative-paths/pages/about.html
  ```

La URL incluye el protocolo, `file://`. También incluye la ruta, que se ve así: `/Users/user/Desktop/fCC/script-code/absolute-vs-relative-paths/pages/`, y representa la serie de carpetas que llevan al archivo. Finalmente, también incluye `about.html`, que es el nombre del archivo y la extensión.

Ahora, veamos la ruta relativa. Una ruta relativa especifica la ubicación de un archivo en relación con el directorio del archivo actual. No incluye el protocolo ni el nombre de dominio, lo que la hace más corta y flexible para los enlaces internos dentro del mismo sitio web. Aquí hay un ejemplo de cómo enlazar a la página `about.html` desde la página `contact.html`, ambas en la misma carpeta:

- **Codigo ejemplo**

  ```html
  <p>
    Read more on the
    <a href="about.html">About Page</a>
  </p>
  ```

Imagina que estás en la página `contact.html` y, como la página `about.html` está en el mismo lugar, simplemente obtienes el nombre del archivo. Este es un ejemplo del uso de una ruta de archivo relativa.

Entonces, ¿qué deberías usar y cuándo: una ruta absoluta o una relativa? Estas son las reglas que debes seguir:

- Utilice rutas absolutas al enlazar a un recurso alojado en un sitio web externo.

- Utilice rutas absolutas cuando necesite que el enlace a una página o recurso funcione de forma coherente, independientemente de la ubicación del documento dentro del sitio.

- Utilice rutas relativas al enlazar a recursos dentro del mismo sitio web.

- Utilice rutas relativas si desea mantener su código más limpio y fácil de mantener durante el desarrollo.

- Utilice rutas relativas durante las pruebas locales para garantizar que los enlaces funcionen sin conexión a internet.

## Questionario 2

- **¿Cuales son los dos tipos de caminos?**

  - a) Caminos resueltos y absolutos.
  - b) Caminos absolutos y últimos.
  - c) Caminos relativos y únicos.
  - d) Rutas absolutas y relativas. // correcto

- **¿Cómo vincularse a un recurso disponible sólo en Internet?**

  - a) Ruta absoluta. // correcto
  - b) Ruta relativa.
  - c) Rutas relativas y absolutas.
  - d) Ninguna de las anteriores.

- **¿Qué protocolo se utiliza para una ruta absoluta en una máquina local?**

  - a) `http://`
  - b) `https://`
  - c) `file://` // correcto
  - d) `localhost`

## ¿Cuál es la diferencia entre barras, un punto simple y un punto doble en la sintaxis de ruta?

Quizás hayas visto enlaces como `/public/logo.png`, `./script.js` o `../styles.css`. Pero ¿qué significan estos tipos especiales de enlaces? Se llaman rutas de archivo. Hay tres sintaxis clave que debes conocer. Primero está la barra diagonal, que puede ser una barra invertida (`\`) o una barra diagonal (`/`) según el sistema operativo. Segundo es el punto simple (`.`). Y finalmente, el punto doble (`..`).

La barra diagonal se conoce como el "separador de rutas". Se utiliza para indicar una separación de texto entre nombres de carpetas o archivos. Así es como tu ordenador sabe que `naomis-files/` apunta a un directorio con el mismo nombre, mientras que `naomis/files/` apunta a un directorio de `files` dentro del directorio `naomis`.

Un punto simple apunta al directorio actual y dos puntos al directorio principal. Normalmente verás un punto simple para asegurar que la ruta se reconozca como una ruta relativa. Recuerda que aprendiste en una lección anterior sobre rutas relativas y absolutas.

Sin embargo, los puntos dobles son mucho más comunes para acceder a archivos fuera del directorio de trabajo actual.

- **Codigo ejemplo**

  ```text
  my-app/
  ├─ public/
  │  ├─ favicon.ico
  │  ├─ index.html
  ├─ src/
  │  ├─ index.css
  │  ├─ index.js
  ```

Si tu archivo `public/index.html` necesitara cargar el archivo `favicon.ico`, usarías una ruta relativa con un solo punto para acceder al directorio actual: `./favicon.ico`. Si tu archivo `public/index.html` necesitara cargar el archivo `index.css`, usarías una ruta relativa con dos puntos para navegar primero al directorio principal `my-app`, luego al directorio `src` y finalmente a tu archivo: `../src/index.css`.

## ¿Cuál opción es una ruta absoluta?

- **¿Cuál opción es una ruta absoluta?**

  - a) `/public/styles.css` // correcto
  - b) `./script.js`
  - c) `../src/nav.html`
  - d) `https://freecodecamp.org`

- **¿Qué opción es una ruta relativa al directorio actual?**

  - a) `/public/styles.css`
  - b) `./script.js` // correcto
  - c) `../src/nav.html`
  - d) `https://freecodecamp.org`

- **¿Cuál opción es una ruta relativa al directorio principal?**

  - a) `/public/styles.css`
  - b) `./script.js`
  - c) `../src/nav.html` // correcto
  - d) `https://freecodecamp.org`

## ¿Cuáles son los diferentes estados de enlace y por qué son importantes?

Quizás hayas visto que un enlace en una página web se vuelve morado después de hacer clic. Esto se debe a que el estado del enlace ha cambiado, por lo que se le aplica un estilo diferente. Un enlace puede tener cinco estados diferentes.

El primero es el estado predeterminado: `:link`. Este estado representa un enlace que el usuario aún no ha visitado, hecho clic ni interactuado. Puedes considerar este estado como el que proporciona los estilos base para todos los enlaces de tu página. Los demás estados se basan en él.

El segundo estado es `:visited`, que se aplica cuando un usuario ya ha visitado la página enlazada. Por defecto, esto cambia el color del enlace a morado, pero puedes usar CSS para ofrecer una indicación visual diferente al usuario. Esto es útil para que alguien sepa que ya ha leído parte de tu documentación o que el sitio es confiable porque lo ha usado antes.

El tercer estado es `:hover`. Este estado se aplica cuando un usuario pasa el cursor sobre un enlace. Este estado es útil para destacar un enlace y garantizar que el usuario realmente tenga la intención de hacer clic en él.

Luego tenemos `:focus`. Este estado se aplica cuando nos centramos en un enlace.

Y finalmente, tenemos `:active`. Este estado se aplica a los enlaces que el usuario activa. Esto suele significar hacer clic en el enlace con el botón principal del ratón (clic izquierdo), en la mayoría de los casos. Este estado puede ser útil para mostrar al usuario que el elemento en el que hizo clic es interactivo.

Al usar estos estados para dar estilo a tus enlaces, debes escribir tu CSS en un orden específico: `link`, `visited`, `hover`, `focus` y, finalmente, `active`.

Ahora ya sabes cómo darle a los enlaces de tu página tu propio estilo, a la vez que proporcionas la información importante que el usuario necesita sobre el estado de cada enlace.

## Questionario 4

- **¿Cuál es el estado predeterminado de un enlace?**

  - a) `:link` // correcto
  - b) `:visited`
  - c) `:hover`
  - d) `:active`

- **¿Qué estado se aplica mientras un usuario hace clic en el enlace?**

  - a) `:link`
  - b) `:visited`
  - c) `:hover`
  - d) `:active` // correcto

- **¿En qué orden debes diseñar tus enlaces?**

  - a) `visited`, `link`, `active`, `hover`.
  - b) `link`, `active`, `hover`, `visited`.
  - c) `hover`, `active`, `link`, `visited`.
  - d) `link`, `visited`, `hover`, `active`. // correcto
