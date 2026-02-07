# Trabajar con unidades relativas y absolutas

---

## Navegación

- [Trabajar con unidades relativas y absolutas](#trabajar-con-unidades-relativas-y-absolutas)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué son las unidades absolutas en CSS y cuándo se deben utilizar?](#tema-1-qué-son-las-unidades-absolutas-en-css-y-cuándo-se-deben-utilizar)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Qué son los porcentajes en CSS y cuándo se deben utilizar?](#tema-2-qué-son-los-porcentajes-en-css-y-cuándo-se-deben-utilizar)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Qué son los `em` y los `rem` en CSS y cuándo se deben usar?](#tema-3-qué-son-los-em-y-los-rem-en-css-y-cuándo-se-deben-usar)
  - [Cuestionario 3](#cuestionario-3)
  - [Tema 4: ¿Qué son las unidades `vh` y `vw`, y cuándo se deben utilizar?](#tema-4-qué-son-las-unidades-vh-y-vw-y-cuándo-se-deben-utilizar)
  - [Cuestionario 4](#cuestionario-4)
  - [Tema 5: ¿Qué es la función `calc()` y cómo funciona?](#tema-5-qué-es-la-función-calc-y-cómo-funciona)
  - [Cuestionario 5](#cuestionario-5)

---

En CSS, las unidades de medida son fundamentales para definir tamaños, márgenes, paddings y otros aspectos del diseño web. Existen dos tipos principales de unidades: absolutas y relativas.

---

## Tema 1: ¿Qué son las unidades absolutas en CSS y cuándo se deben utilizar?

Al diseñar sus páginas, trabajará con diferentes propiedades como anchuras, alturas, rellenos, márgenes y mucho más. Al definir estas propiedades, deberá especificar las unidades de medida de longitud que desea utilizar.

Hay dos tipos de unidades que puedes usar para definir estas propiedades: unidades relativas y unidades absolutas. En esta lección, nos centraremos únicamente en las unidades absolutas.

Las unidades de longitud absolutas tienen una longitud fija y no son relativas a nada más. Relativas significa que la longitud es relativa a otra cosa, como el tamaño de la pantalla o el tamaño del elemento principal. Hablaremos más sobre las unidades relativas en las próximas lecciones.

La unidad absoluta más común es el píxel (px). Los píxeles son una unidad de medida de tamaño fijo en CSS, que proporciona un control preciso sobre las dimensiones. Esto significa que 1 px siempre es igual a 1/96 de pulgada.

Es importante tener en cuenta que, aunque 1 px está estandarizado como 1/96 de pulgada a efectos del diseño CSS, el tamaño físico real de un píxel puede variar en función de la pantalla.

Veamos un ejemplo del uso de píxeles para establecer el ancho y el alto de un cuadro:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="box"></div>
  ```

  ```css
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  ```

En este ejemplo, tenemos un cuadro rojo con un ancho y una altura establecidos en `100px`. Las dimensiones de este cuadro permanecerán iguales independientemente de los cambios relacionados con el tamaño de la pantalla.

Por lo tanto, si estás en un dispositivo con una pantalla pequeña, el cuadro seguirá teniendo `100px` de ancho. Si estás en una pantalla de escritorio grande, el cuadro seguirá teniendo `100px` de ancho.

Entonces, ¿cuándo debes usar unidades absolutas como los píxeles? Bueno, depende de la situación. Pero, en general, usarás píxeles cuando necesites un control preciso sobre las dimensiones, el espaciado y el diseño de los elementos. A veces, puedes usar píxeles para los márgenes, el relleno y los bordes.

Aquí tienes un ejemplo del uso de píxeles para establecer el margen de dos cuadros:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="box"></div>
  <div class="box"></div>
  ```

  ```css
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 10px;
  }
  ```

Recuerda que el margen es el espacio fuera del cuadro. Por lo tanto, en este ejemplo, el cuadro tendrá un margen de 10 píxeles en todos los lados.

_Otros tipos de unidades absolutas son los siguientes:_

- La unidad `in` (pulgadas), que equivale a 96 píxeles.

- La unidad `cm` (centímetros), que equivale a 25,2/64 de pulgada.

- La unidad `mm` (milímetros), que equivale a 1/10 de centímetro.

- La unidad `q` (cuarto de milímetro), que equivale a 1/40 de centímetro.

- La unidad `pc` (picas), que equivale a 1/6 de pulgada.

- La unidad `pt` (puntos), que equivale a 1/72 de pulgada.

La mayoría de estas unidades se utilizan para impresión y no para pantallas.

Aunque la unidad más común que se utiliza es el píxel, es importante saber que existen otras unidades absolutas.

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Cuestionario 1

- **1.¿Qué es un píxel?**

  - [x] a) Una unidad de medida de tamaño fijo absoluto en CSS, que proporciona un control preciso sobre las dimensiones. //correcto
  - [ ] b) Una unidad de medida relativa en CSS.
  - [ ] c) Una unidad de medida relativa al tamaño de la pantalla.
  - [ ] d) Una unidad de medida relativa al tamaño del elemento principal.

- **2.¿Cuáles son los dos tipos de unidades que se pueden utilizar para definir propiedades en CSS?**

  - [ ] a) `margins` y `padding`.
  - [ ] b) `cm` y `mm`.
  - [x] c) `absolute` y `relative` units. //correcto
  - [ ] d) `picas` y `points`.

- **3.¿Cuál de las siguientes opciones NO es una unidad de medida absoluta en CSS?**

  - [ ] a) `pt`
  - [x] b) `rem` //correcto
  - [ ] c) `in`
  - [ ] d) `px`

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Tema 2: ¿Qué son los porcentajes en CSS y cuándo se deben utilizar?

Los porcentajes en CSS son unidades relativas que permiten definir tamaños, dimensiones y otras propiedades como una proporción de su elemento principal. Cuando se utiliza un valor porcentual, básicamente se está diciendo: «Haz que esto sea el X % de su contenedor».

Por ejemplo, si se establece `width: 50%` en un elemento, este ocupará la mitad del ancho de su contenedor principal. Esto hace que los porcentajes sean increíblemente útiles para crear diseños adaptables que se ajustan a diferentes tamaños de pantalla.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="container">
    <div class="box"></div>
  </div>
  ```

  ```css
  .container {
    width: 400px;
    height: 200px;
    background-color: lightgray;
  }
  
  .box {
    width: 50%;
    height: 100%;
    background-color: red;
  }
  ```

Los porcentajes son ideales para crear diseños fluidos que se ajustan a diferentes tamaños de pantalla. Por ejemplo, establecer un contenedor con un `width: 80%` garantiza que ocupe el 80 % del ancho de su elemento principal, independientemente del dispositivo.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="parent">
    <div class="child"></div>
  </div>
  ```

  ```css
  .parent {
    width: 100%;
    height: 300px;
    background-color: lightblue;
  }
  
  .child {
    width: 80%;
    height: 100%;
    background-color: red;
  }
  ```

El uso de porcentajes para imágenes flexibles es otra práctica habitual. Al aplicar max-width: 100% a las imágenes, se permite que se reduzcan en pantallas más pequeñas manteniendo su relación de aspecto.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <img src="https://placehold.co/150x150" alt="Example Product Image" />
  ```

  ```css
  img {
    max-width: 100%;
    height: auto;
  }
  ```

Aunque es menos habitual, también se pueden utilizar porcentajes para los tamaños de fuente con el fin de crear tipografías escalables. Por ejemplo, `font-size: 120%` haría que el texto fuera un 20 % más grande que el tamaño de fuente de su elemento padre.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="text-container">
    Parent text.
    <p class="text">This is some example text.</p>
  </div>
  ```

  ```css
  .text-container {
    font-size: 16px;
  }
  
  .text {
    font-size: 120%;
  }
  ```

Los porcentajes pueden resultar especialmente útiles para el centrado vertical. A continuación se muestra un ejemplo de cómo se pueden utilizar los porcentajes con la propiedad `transform` para centrar un elemento verticalmente.

En este ejemplo, el elemento se coloca al 50 % de la parte superior de su contenedor y, a continuación, se utiliza `transform` para moverlo hacia arriba la mitad de su propia altura, centrándolo así verticalmente.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="centered"></div>
  ```

  ```css
  .centered {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 300px;
    background-color: red;
  }
  ```

En futuras lecciones aprenderás más detalles sobre cómo funcionan el posicionamiento absoluto y las propiedades de transformación.

Recuerda que los porcentajes siempre son relativos a algo. En el caso de las propiedades horizontales, como el `width`, son relativos al ancho del elemento padre. En el caso de las propiedades verticales, como el `height`, suelen ser relativos a la altura del elemento padre (si se ha especificado).

Sin embargo, ten cuidado al anidar elementos con dimensiones basadas en porcentajes, ya que esto puede dar lugar a resultados inesperados. Además, ten en cuenta que las alturas basadas en porcentajes pueden ser complicadas si el elemento padre no tiene una altura definida.

En resumen, los porcentajes en CSS son herramientas poderosas para crear diseños flexibles y adaptables. Úsalos cuando quieras que los elementos se escalen proporcionalmente a sus contenedores o cuando necesites diseños que se adapten perfectamente a diferentes tamaños de pantalla.

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Cuestionario 2

- **1.¿Qué sucede si se establece `width: 50%` en un elemento cuyo padre tiene un `width` de `300px`?**

  - [x] a) El elemento tendrá un ancho de `150px`.  //correcto
  - [ ] b) El elemento tendrá un ancho de `50px`.
  - [ ] c) El elemento tendrá un ancho de `600px`.
  - [ ] d) El elemento no tendrá ancho.

- **2.En la siguiente regla CSS, ¿en qué afecta el valor porcentual?**
  
  ```css
  .box {
    margin-top: 10%;
  }
  ```

  - [ ] a) El ancho del elemento.
  - [ ] b) La altura del elemento.
  - [x] c) El margen superior del elemento. //correcto
  - [ ] d) El tamaño de fuente del elemento.

- **3.¿Cuál de los siguientes NO es un buen caso de uso para los valores porcentuales en CSS?**

  - [ ] a) Configuración del `width` de un contenedor adaptable.
  - [ ] b) Definición del `border-radius` de un elemento circular.
  - [ ] c) Escalar una imagen dentro de su contenedor.
  - [x] d) Especificar la `line-height` del texto. //correcto

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Tema 3: ¿Qué son los `em` y los `rem` en CSS y cuándo se deben usar?

En la lección anterior, aprendimos sobre las unidades de longitud absolutas, como los píxeles. Aunque las unidades absolutas pueden ser útiles en determinadas situaciones, habrá ocasiones en las que querrás usar unidades relativas.

En esta lección, aprenderemos sobre dos unidades relativas: em y rem.

Las unidades em son relativas al tamaño de fuente del elemento. Si usas em para la propiedad font-size, el tamaño del texto será relativo al tamaño de fuente del elemento padre.

Para entender mejor cómo funciona esto, veamos un ejemplo:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <p class="para">I am a paragraph element</p>
  
  <div class="blue-box"></div>
  ```

  ```css
  .para {
    font-size: 20px;
    margin-bottom: 1.5em;
    border: 2px solid red;
  }
  
  .blue-box {
    background-color: blue;
    color: white;
    padding: 10px;
    width: 100px;
    height: 100px;
  }
  ```

Para el HTML, tenemos un elemento párrafo y un elemento `div`. El elemento párrafo tiene una clase `para`, y el elemento div tiene una clase `blue-box`.

Para la clase `para`, establecemos el `font-size` en `20px` y el `margin-bottom` en `1.5em`. Esto significa que el margen será 1.5 veces el tamaño de fuente del elemento párrafo. `1.5em` da como resultado un margen de 30 píxeles en la parte inferior del párrafo. También hemos establecido un `border` en `2px solid red` para que puedas ver mejor los márgenes.

Para la clase `blue-box`, hemos establecido el color de fondo en `blue`, el color del texto en `white` y el `padding` en `10px` en los cuatro lados.

En el ejemplo, habrá un espacio claro entre la parte inferior del elemento de párrafo y el cuadro azul.

Entonces, ¿qué sucede si eliminamos la propiedad `font-size` de la clase `para`?

Bueno, el margen inferior será relativo al tamaño de fuente del elemento padre. En este caso, el elemento padre es el elemento body, que tiene un tamaño de fuente predeterminado de `16px`.

Un buen ejemplo del uso de `em`s sería cuando se trabaja con componentes modulares como botones o tarjetas. Al utilizar unidades `em`, se garantiza que todos los aspectos del componente (como el relleno, el margen y los bordes) se escalen proporcionalmente con el tamaño de la fuente, manteniendo unas proporciones coherentes.

Hasta ahora, hemos estado estableciendo el tamaño de la fuente de un elemento utilizando píxeles. Sin embargo, esto plantea algunos retos para los usuarios.

En la configuración del navegador, se puede controlar el tamaño de fuente predeterminado.

Las personas con discapacidad visual pueden aumentar el tamaño de la fuente para facilitar la lectura. Pero si se establecen píxeles para los tamaños de fuente en los diseños web, el texto no se escalará proporcionalmente con el resto del contenido.

Una forma de abordar este problema es utilizar unidades `rem` para la tipografía. Una unidad `rem` es relativa al tamaño de fuente del elemento raíz, que es el elemento `html`.

Por defecto, el tamaño de fuente del elemento `html` es de `16px`. Si el usuario aumenta el tamaño de fuente en la configuración de su navegador, el tamaño de fuente del elemento `html` aumentará y todas las unidades `rem` se escalarán proporcionalmente.

A continuación se muestra un ejemplo del uso de la unidad `rem` para el tamaño de fuente en lugar de píxeles:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <p>This is regular text.</p>
  <p class="para">This text is slightly larger.</p>
  ```

  ```css
  .para {
    font-size: 1.2rem;
    margin-bottom: 1.5em;
    border: 2px solid red;
  }
  ```

Al establecer el tamaño de fuente en `1.2rem`, el tamaño de fuente del elemento párrafo será 1.2 veces el tamaño de fuente del elemento raíz. Si el usuario no ha cambiado el tamaño de fuente predeterminado, el tamaño de fuente del elemento párrafo será de `19.2px`, ya que es 1.2 veces `16px`.

Entonces, ¿cuándo se deben utilizar las unidades `rem`? Las unidades `rem` son preferibles a los píxeles para la tipografía porque se escalan proporcionalmente con la configuración del navegador del usuario. Esto hace que su contenido sea más accesible para los usuarios con discapacidad visual.

Las unidades `rem` también pueden ayudar a mantener un espaciado y un diseño coherentes entre los diferentes elementos.

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Cuestionario 3

- **1. ¿A qué se refiere la unidad `em`?**

  - [ ] a) El tamaño de fuente del elemento `figure`.
  - [x] b) El `font-size` del elemento o del elemento principal. //correcto
  - [ ] c) El `font-size` del elemento `root`.
  - [ ] d) El `font-size` del elemento `img`.

- **2. ¿Por qué se prefieren las unidades `rem` a los píxeles para la tipografía?**

  - [ ] a) Siempre se deben utilizar píxeles para la tipografía.
  - [ ] b) Hacen que tus diseños sean más coloridos.
  - [x] c) Se ajustan proporcionalmente a la configuración del navegador del usuario. //correcto
  - [ ] d) Aumentan el rendimiento del sitio web.

- **3. ¿A qué se refieren las unidades `rem`?**

  - [ ] a) El `fontsize` del elemento figure.
  - [ ] b) El `fontsize` del elemento o del elemento principal.
  - [ ] c) El `fontsize` del elemento img.
  - [x] d) El `fontsize` del elemento root //correcto

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Tema 4: ¿Qué son las unidades `vh` y `vw`, y cuándo se deben utilizar?

En CSS, `vh` y `vw` son unidades relativas a la ventana gráfica que permiten dimensionar los elementos en función de las dimensiones de la ventana del navegador. Estas unidades son especialmente útiles para crear diseños adaptables que se ajustan a diferentes tamaños de pantalla.

`vh` significa «altura de la ventana gráfica», y `1vh` equivale al 1 % de la altura de la ventana gráfica.

Del mismo modo, `vw` significa «ancho de la ventana gráfica», y `1 vw` equivale al 1 % del ancho de la ventana gráfica.

Esto significa que si estableces la altura de un elemento en `100vh`, ocupará toda la altura de la ventana gráfica, independientemente de las dimensiones reales en píxeles del dispositivo.

Estas unidades son especialmente útiles cuando se desea crear diseños a pantalla completa o elementos que mantengan una proporción específica de la pantalla.

Por ejemplo, es posible que desee utilizarlas para crear una sección principal que siempre ocupe toda la pantalla (para interactuar con el ejemplo, deberá habilitar el editor interactivo).

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />

  <section class="hero">
    <h1>100vh / 100vw Example</h1>
    <p>This section fills the entire browser window.</p>
  </section>
  ```

  ```css
  body {
    margin: 0;
    font-family: sans-serif;
    border: 5px dashed #333;
  }
  
  .hero {
    height: 100vh;
    width: 100vw;
    background-color: #add8e6; 
    padding: 2em;
  }
  
  .hero h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }
  
  .hero p {
    font-size: 1em;
  }
  ```

Este CSS garantiza que la sección principal siempre tenga exactamente el tamaño de la ventana gráfica, independientemente del tamaño de la pantalla del dispositivo.

Las unidades `vh` y `vw` también se pueden utilizar en tipografía para crear tamaños de texto adaptables.

Vea el editor interactivo y pruebe a ajustar el tamaño de la ventana de vista previa para ver cómo se escala el texto con el tamaño de la ventana gráfica:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <h1>Responsive Heading</h1>
  <p>The h1 heading scales with the viewport width.</p>
  ```

  ```css
  h1 {
    font-size: 5vw;
  }
  ```

Esto establecerá el tamaño de fuente de los elementos `h1` al 5 % del ancho de la ventana gráfica, lo que permitirá que el texto se adapte perfectamente al tamaño de la ventana del navegador.

Una de las ventajas de las unidades `vh` y `vw` es que responden a los cambios en el tamaño de la ventana gráfica en tiempo real. Esto significa que, si un usuario cambia el tamaño de la ventana de su navegador, los elementos dimensionados con estas unidades se ajustarán en consecuencia sin necesidad de recargar la página. Sin embargo, es importante utilizar estas unidades con prudencia. Establecer los tamaños de fuente únicamente con unidades vw, por ejemplo, puede hacer que el texto sea demasiado pequeño en pantallas estrechas o demasiado grande en pantallas anchas.

Otra consideración es que, en los dispositivos móviles, la altura de la ventana gráfica puede cambiar cuando aparece o desaparece la barra de direcciones del navegador, lo que puede provocar cambios inesperados en el diseño si se utilizan mucho las unidades `vh`.

En resumen, las unidades `vh` y `vw` son herramientas poderosas para crear diseños y elementos responsivos que se adaptan al tamaño de la ventana gráfica. Son particularmente útiles para secciones a pantalla completa, mantener relaciones de aspecto y crear diseños que se escalan suavemente. Sin embargo, deben utilizarse con cuidado y, a menudo, en combinación con otras técnicas CSS para garantizar la mejor experiencia de usuario en todos los dispositivos.

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Cuestionario 4

- **1. ¿Qué representa `50vh` en CSS?**

  - [ ] a) 50 pixels.
  - [x] b) La mitad de la altura de la ventana gráfica. //correcto
  - [ ] c) 50 % de la altura del elemento principal.
  - [ ] d) La mitad del ancho de la ventana gráfica.

- **2. ¿Cuál de los siguientes es un caso de uso válido para las unidades `vw`?**

  - [ ] a) Establecer un ancho fijo para una barra lateral.
  - [ ] b) Definición del ancho máximo de una imagen.
  - [x] c) Crear un elemento cuadrado que ocupe siempre el 20 % del ancho de la ventana gráfica. //correcto
  - [ ] d) Establecer la `line-height` del texto del párrafo.

- **3. ¿Qué problema potencial podría surgir al utilizar unidades `vh` para elementos de diseño críticos en dispositivos móviles?**

  - [ ] a) No son compatibles con navegadores móviles antiguos.
  - [x] b) Pueden provocar cambios en el diseño cuando aparece o desaparece la barra de direcciones del navegador móvil. //correcto
  - [ ] c) Hacen que el sitio web se cargue más lentamente en los dispositivos móviles.
  - [ ] d) No funcionan con pantallas táctiles.

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Tema 5: ¿Qué es la función `calc()` y cómo funciona?

Con la función `calc()`, puedes realizar cálculos directamente en tus hojas de estilo para determinar los valores de las propiedades de forma dinámica. Esto significa que puedes crear interfaces de usuario flexibles y receptivas calculando las dimensiones en función del tamaño de la ventana gráfica u otros elementos.

`calc()` es una función CSS. Aprenderás más sobre las funciones cuando comiences a estudiar JavaScript, pero en esta lección aprenderás los conceptos básicos que necesitas saber para comprender cómo funciona `calc()`.

Una función es un bloque de código que realiza una tarea específica. Algunas funciones ya están definidas en CSS, por lo que puedes utilizarlas directamente y pasarles los valores necesarios para personalizar cómo se realizarán sus tareas.

En el mundo de la programación, cuando ejecutamos la tarea realizada por una función, decimos que «llamamos» a la función. Los valores que pasamos a la función se conocen como argumentos.

Como puedes ver en el código siguiente, para llamar a una función, se escribe su nombre seguido de los argumentos entre paréntesis, separados por comas. No debe haber espacio entre el nombre de la función y el paréntesis de apertura:

- **Codigo Ejemplo**

  ```js
  function(argument1, argument2, argument3)
  ```

Una función puede necesitar solo un valor para saber qué hacer. En ese caso, solo tomará un argumento. Eso es lo que ocurre con la función `calc()`. Toma un argumento porque necesita saber qué calcular.

Para ello, se pasa algo llamado expresión como argumento. Una expresión es una combinación de valores y operadores que produce un resultado.

Así es como se puede llamar a la función `calc()`. Se escribe el nombre calc, seguido de paréntesis, y dentro de los paréntesis se escribe la expresión:

- **Codigo Ejemplo**

  ```js
  calc(expression)
  ```

La expresión se evalúa para calcular el resultado final. «Evaluar» solo significa que los valores y operadores se convierten en un único valor entre bastidores. El resultado se asigna a la propiedad CSS donde se realiza el cálculo.

Puedes realizar cálculos con valores que representen longitud, ángulo, tiempo, porcentajes, números y colores. También puedes combinar diferentes unidades, como `px`, porcentajes`%` y `em`s.

Con los números, todos los valores de la expresión, también llamados operandos, deben tener sus unidades correspondientes, como `px`, `em` y porcentaje (`%`). Dependiendo del operador, diferentes operandos pueden tener diferentes unidades.

Puedes utilizar los operadores de suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`) en la expresión.

Si hay varios operandos y operadores, `calc()` seguirá la regla estándar de precedencia de operadores. También puedes añadir paréntesis para establecer el orden de las operaciones si es necesario.

En el ejemplo siguiente, puedes ver un `div` con el texto `Hello, World!`.

Utilizando el selector de tipo CSS para seleccionar el `div`, puedes darle estilo con texto blanco y fondo azul oscuro:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div>Hello, World!</div>
  ```
  
  ```css
  div {
    color: white;
    background-color: #1b1b32;
    width: calc(50% - 20px);
  }
  ```

La novedad aquí es que el ancho se calcula dinámicamente. Observe cómo llamamos a la función `calc()` y pasamos una expresión como argumento. La expresión tiene dos operandos con unidades diferentes y un operador, el operador de resta.

El porcentaje es una unidad relativa. El valor (`50%`) vendrá determinado por el ancho del contenedor principal. A continuación, se resta `20px` del valor. El resultado de esta expresión determinará el ancho del `div`.

El ancho del div es aproximadamente la mitad del ancho total de su contenedor, y si cambia el tamaño del contenedor principal, el ancho se recalculará automáticamente.

Esa es la ventaja clave de utilizar `calc()`. Puedes determinar el valor de una propiedad CSS de forma dinámica en función de diferentes aspectos de la aplicación o la ventana gráfica.

La expresión también puede contener funciones y variables CSS si necesitas utilizarlas en tus cálculos. Aprenderás más sobre las variables CSS en las próximas lecciones.

Genial. Ahora que ya conoces los fundamentos de la función `calc()`, veamos algunas de sus mejores prácticas.

En primer lugar, debes rodear los operadores de suma (`+`) y resta (`-`) con espacios en blanco.

Por ejemplo, la expresión siguiente no sería válida porque el operador de resta se encuentra inmediatamente antes del segundo operando.

- **Codigo Ejemplo**

  ```js
  calc(100% -30px)
  ```

El operador de resta (`-`) debe estar rodeado de espacios en blanco, como se muestra aquí. Al añadir los espacios en blanco se creará una expresión válida.

- **Codigo Ejemplo**

  ```js
  calc(100% - 30px)
  ```

Esto no es necesario para los operadores de multiplicación y división, pero es muy recomendable.

También puede anidar llamadas a la función `calc()` si necesita realizar cálculos y utilizar esos resultados en otros cálculos.

Además, si utiliza el valor cero para representar la longitud en la expresión que pasa a la función `calc()`, debe incluir las unidades. Por ejemplo, esta expresión no sería válida:

- **Codigo Ejemplo**

  ```js
  calc(100% - 0)
  ```

Tendrías que agregar las unidades, como px.

- **Codigo Ejemplo**

  ```js
  calc(100% - 0px)
  ```

También debe saber que, actualmente, si utiliza los operadores de multiplicación o división, uno de los operandos debe carecer de unidades. En el caso del operador de división, concretamente el operando derecho debe carecer de unidades. Esta no sería una expresión válida porque ambos operandos tienen unidades (píxeles). Uno de los operandos, ya sea 5 o 50, debe carecer de unidades:

- **Codigo Ejemplo**

  ```js
  calc(5px * 50px)
  ```

Deberías omitir las unidades en una de ellas. Ambas alternativas serían válidas:

- **Codigo Ejemplo**

  ```js
  calc(5 * 50px)
  calc(5px * 50)
  ```

Y este es un ejemplo con el operador de división. Esta no sería una expresión válida, ya que ambos tienen unidades:

- **Codigo Ejemplo**

  ```js
  calc(50% / 5%)
  ```

Debes eliminar la unidad del operando derecho cuando tengas el operador de división:

- **Codigo Ejemplo**

  ```js
  calc(50% / 5)
  ```

La función `calc()` puede resultarte muy útil como desarrollador web. Con esta función, puedes establecer valores de propiedad de forma dinámica para crear diseños flexibles y adaptables.

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---

## Cuestionario 5

- **1. ¿Cuáles de las siguientes operaciones se pueden realizar utilizando la función `calc()` en CSS?**

  - [ ] a) Solo suma y resta.
  - [ ] b) Solo multiplicación y división.
  - [x] c) Suma, resta, multiplicación y división. //correcto
  - [ ] d) Solo adiciones.

- **2. ¿Qué tipos de valores se pueden utilizar como operandos dentro de la expresión pasada a la función `calc()`?**

  - [ ] a) Solo píxeles.
  - [ ] b) Solo porcentajes.
  - [x] c) Píxeles, porcentajes, `em` y otras unidades compatibles. //correcto
  - [ ] d) Solo números enteros.

- **3. ¿Cómo se puede utilizar la función `calc()` para crear un diseño adaptable?**

  - [ ] a) Estableciendo anchos fijos para los elementos.
  - [ ] b) Utilizando exclusivamente consultas de medios.
  - [x] c) Calculando las dimensiones de los elementos en función del tamaño de la ventana gráfica u otros elementos. //correcto
  - [ ] d) Utilizando HTML para ajustar dinámicamente los tamaños de los elementos.

[☝️](#trabajar-con-unidades-relativas-y-absolutas)

---
