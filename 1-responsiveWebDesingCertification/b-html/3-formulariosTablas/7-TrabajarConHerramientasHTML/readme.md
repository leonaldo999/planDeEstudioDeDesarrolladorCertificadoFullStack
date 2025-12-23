# Trabajar con herramientas HTML

En estos vídeos didácticos, aprenderás sobre las herramientas HTML y cómo te permiten escribir mejor el código. Estas herramientas incluyen validadores HTML, DOM Inspector y las herramientas de desarrollo del navegador.

## ¿Qué es un validador de HTML y cómo puede ayudarte a depurar tu código?

HTML es un lenguaje muy indulgente: los elementos se siguen mostrando aunque cometas errores, como olvidarte de incluir una etiqueta de cierre.

Digamos que tienes un elemento `h2` sin etiqueta de cierre:

- **Codigo ejemplo**

  ```html
  <h1>Article Topic</h1>
  <h2>Subheading 1 </h2>
  <h2>Subheading 2 </h2>
  
  <!-- This h2 does not have a closing tag -->
  <h2>Subheading 3
  ```

El `h2` sin etiqueta de cierre seguirá mostrándose correctamente. Esto ocurre porque los navegadores utilizan un algoritmo de análisis sintáctico que se ocupa de los errores comunes e intenta mostrar el HTML lo más fielmente posible a la intención del autor.

Pero a veces esto puede ser contraproducente. Agreguemos algunos párrafos bajo las etiquetas de encabezado 2 existentes en el código:

- **Codigo ejemplo**

  ```html
  <h1>Article Topic</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nisi.</p>
  
  <h2>Subheading 1 </h2>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, doloremque.</p>
  
  <h2>Subheading 2 </h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat.</p>
  
  <!-- This h2 does not have a closing tag -->
  <h2>Subheading 3
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, illum.</p>
  ```

Como resultado, el elemento de párrafo bajo el `h2` sin una etiqueta `h2` de cierre se representa como encabezado 2. Por eso necesitas un validador de HTML.

Un validador HTML es una herramienta que comprueba la validez de tu código HTML con respecto a las especificaciones HTML estándar. Te ayuda a identificar errores y advertencias en tu código HTML, garantizando que tus páginas web están correctamente estructuradas y cumplen con los estándares web.

Utilizar un validador de HTML no sólo te beneficia a ti y a tus futuras revisiones de código, sino también a cualquier otra persona que revise tu código, como tus compañeros de equipo y colaboradores de código abierto.

Existen varios validadores de HTML que puedes utilizar. El más aceptado es el servicio de validación de marcado `w3.org`.

Cuando visites el sitio `validator.w3.org`, puedes hacer clic en el botón `Validate by Direct Input` y pegar tu código HTML.

Al hacer clic en el botón `Check`, aparecerá una lista de resultados con los errores que hay que corregir.

Otro validador HTML que puedes utilizar es `jsonformatter.org`.

Puedes copiar y pegar tu código HTML dentro del primer editor, y cuando hagas clic en el botón `Validate`, te mostrará cualquier error que tengas en tu código.

## Questionario

- **¿Por qué el navegador muestra las etiquetas correctamente aunque se produzca un error como olvidar cerrar una etiqueta?**

  - a) A HTML no le importa cerrar una etiqueta.
  - b) El algoritmo de análisis sintáctico del navegador detecta los errores e intenta representar las etiquetas como es debido. // correcto
  - c) El algoritmo de diffing del editor de código sabe lo que el autor quiere renderizar.
  - d) HTML es lo suficientemente inteligente como para saber lo que el autor quiere mostrar.

- **¿Qué es un validador HTML?**

  - a) Una herramienta para escribir HTML.
  - b) Herramienta para ordenar el código HTML.
  - c) Una herramienta para hacer que el código HTML funcione en todos los navegadores.
  - d) Una herramienta que comprueba la validez del HTML. // correcto

- **¿Cuál de estos es un ejemplo de validador HTML?**

  - a) Validador HTML W3.org. // correcto
  - b) CSS Lint
  - c) JavaScript Debugger
  - d) Photoshop

## ¿Cómo utilizas el inspector DOM y las devtools para depurar y construir tus proyectos?

Cuando estás construyendo tus proyectos, con frecuencia te encontrarás con problemas en los que tus programas no funcionan como esperabas.

Los programadores a menudo se refieren a estos problemas como errores(`bugs`). El proceso de encontrar y corregir estos errores se conoce como depuración(`debugging`).

Para depurar tu código, necesitarás utilizar algunas herramientas proporcionadas por tu navegador.

Dos herramientas importantes son el inspector DOM y las herramientas de desarrollo.

El inspector DOM te permite inspeccionar la estructura HTML de la página en la que te encuentras.

DOM son las siglas de Document Object Model. Es una estructura en forma de árbol que representa los elementos de una página. Aprenderás más sobre el DOM en módulos posteriores.

Las herramientas de desarrollo te permiten inspeccionar el HTML, CSS y JavaScript de la página en la que te encuentras.

Veamos un ejemplo de HTML que contiene un pequeño error en el elemento ancla:

- **Codigo ejemplo**

  ```html
  <a href="https://www.freecodecamp.org/larn/">freeCodeCamp curriculum</a>
  ```

Cuando haga clic en el enlace, le llevará a una página 404. Una página 404 es una página de error que aparece cuando un usuario intenta acceder a una página web que no existe en el servidor.

La intención es que el enlace lleve al plan de estudios de freeCodeCamp.

Para ver cuál puede ser el problema, puedes utilizar las herramientas para desarrolladores.

Para abrir las herramientas de desarrollo en su navegador, puede hacer clic con el botón derecho en la página y seleccionar `Inspect`.

También puedes utilizar `Control Shift I` en el teclado de tu PC o `Command Option I` en tu Mac.

Cuando abras las herramientas para desarrolladores en Google Chrome, verás una serie de pestañas. La primera pestaña se llama `Elements`. Esta pestaña te muestra la estructura HTML de la página en la que te encuentras.

La segunda pestaña se llama `Console`. Esta pestaña te muestra cualquier error que pueda estar ocurriendo en la página.

En el caso de que tenga un enlace roto, puede comprobar la consola para ver los mensajes de error de ese enlace roto. El mensaje común que sigue apareciendo para el enlace roto es el error 404. El error 404 indica que la página no se encuentra.

Esto nos permite saber que el problema está en la URL del elemento ancla. Cuando inspeccione el valor `href` verá que hay un error tipográfico.

Ahora mismo el mensaje de consola muestra `/larn` contra un 404, pero la URL correcta debería ser `/learn`. Cuando se corrija el enlace, entonces funcionará como se espera.

Usted aprenderá más acerca de cómo trabajar con las herramientas de desarrollo a lo largo de la certificación, pero esto es sólo un breve ejemplo de cómo puede ayudarle a depurar su código.

## Questionario 2

- **¿Cómo se llama el proceso de encontrar y corregir errores en tu código?**

  - a) Scanning.
  - b) Building.
  - c) Debugging. // correcto
  - d) Scripting.

- **¿Cómo se denomina la estructura arborescente que representa los elementos de una página?**

  - a) BOM
  - b) DOM // correcto
  - c) Python
  - d) CSS

- **¿Cuál es la función de la pestaña «`elements`» en las herramientas de desarrollo?**

  - a) Le muestra la estructura HTML de la página en la que se encuentra. // correcto
  - b) Le muestra la estructura CSS de la página en la que se encuentra.
  - c) Le muestra la estructura JavaScript de la página en la que se encuentra.
  - d) Le muestra la estructura PHP de la página en la que se encuentra.
