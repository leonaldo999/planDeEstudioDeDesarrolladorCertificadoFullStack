# Trabajar con transformacione(`Transforms`), desbordamientos(`Overflow`) y filtros(`Filters`) CSS

## Navegación

- [Trabajar con transformacione(`Transforms`), desbordamientos(`Overflow`) y filtros(`Filters`) CSS](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)
  - [Navegación](#navegación)
  - [Introducción](#introducción)
  - [Tema 1: ¿Qué es el desbordamiento(`overflow`) en CSS y cómo funciona?](#tema-1-qué-es-el-desbordamientooverflow-en-css-y-cómo-funciona)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Qué es la propiedad CSS `Transform` y cómo funciona?](#tema-2-qué-es-la-propiedad-css-transform-y-cómo-funciona)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Qué es el `CSS Box Model` y cómo funciona?](#tema-3-qué-es-el-css-box-model-y-cómo-funciona)
  - [## Cuestionario 3](#-cuestionario-3)
  - [Tema 4: ¿Qué es el colapso de márgenes y cómo funciona?](#tema-4-qué-es-el-colapso-de-márgenes-y-cómo-funciona)
  - [Cuestionario 4](#cuestionario-4)
  - [Tema 5: ¿Cuál es la diferencia entre `content-box` y `border-box`?](#tema-5-cuál-es-la-diferencia-entre-content-box-y-border-box)
  - [Cuestionario 5](#cuestionario-5)
  - [Tema 6: ¿Qué es un restablecimiento de CSS y cuáles son algunos ejemplos comunes?](#tema-6-qué-es-un-restablecimiento-de-css-y-cuáles-son-algunos-ejemplos-comunes)
  - [Cuestionario 6](#cuestionario-6)
  - [Tema 7: ¿Qué es la propiedad CSS Filter y cuáles son algunos ejemplos comunes?](#tema-7-qué-es-la-propiedad-css-filter-y-cuáles-son-algunos-ejemplos-comunes)
    - [Filtro: contrast()](#filtro-contrast)
    - [Filtro: `invert()`](#filtro-invert)
    - [3. Filtro: `saturate()`](#3-filtro-saturate)
  - [Cuestionario 7](#cuestionario-7)

---

## Introducción

En esta sección, aprenderás a usar las transformaciones CSS para rotar, escalar, sesgar o trasladar elementos. También exploraremos cómo manejar el desbordamiento de contenido con la propiedad `overflow` y cómo aplicar filtros CSS para efectos visuales como desenfoque, brillo y contraste.

---

## Tema 1: ¿Qué es el desbordamiento(`overflow`) en CSS y cómo funciona?

El `overflow` se refiere a la forma en que los elementos manejan el contenido que excede o desborda el tamaño del elemento que lo contiene. Por ejemplo, el contenido de texto de un elemento `div` puede desbordarse fuera de sus bordes.

El `overflow` es bidimensional, el eje x determina el `overflow` horizontal y el eje y determina el `overflow` vertical.

Corrijamos el `overflow` en nuestro ejemplo utilizando la propiedad CSS `overflow-y`. Primero podemos ocultar el `overflow` por completo con hidden de esta manera:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  ```
  
  ```css
  div {
    height: 200px;
    overflow-y: hidden;
  }
  ```

Esto resuelve el problema del `overflow`, pero ahora el contenido adicional queda completamente inaccesible. En su lugar, podemos utilizar el desplazamiento para forzar que el elemento sea desplazable:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  ```
  
  ```css
  div {
    height: 200px;
    overflow-y: scroll;
  }
  ```

Ahora esto convierte el contenedor en un elemento desplazable, lo que permite ver todo el contenido desplazando el elemento independientemente del desplazamiento de la página. También podríamos dejar que el navegador lo gestione por sí solo con el valor `auto`. Cabe señalar que el desplazamiento vertical se considera generalmente aceptable, mientras que el desplazamiento horizontal puede ser cuestionable, ya que no suele ser una decisión de diseño habitual.

Con este conocimiento, ahora puedes controlar cómo se desborda tu contenido, lo que te da más poder sobre el diseño de tus páginas.

---

## Cuestionario 1

1. **¿A qué se refiere el término `overflow` en CSS?**

    - [ ] a) Cuando un elemento se coloca fuera de su contenedor principal.
    - [x] b) Cuando el contenido excede el tamaño del elemento que lo contiene. //correcto
    - [ ] c) Cuando hay demasiados elementos en una página.
    - [ ] d) Cuando los estilos CSS entran en conflicto entre sí.

2. **¿Qué propiedad CSS se utiliza para controlar específicamente el overflow vertical?**

    - [ ] a) `overflow`
    - [ ] b) `overflow-x`
    - [x] c) `overflow-y` //correcto
    - [ ] d) `vertical-overflow`

3. **Según la lección, ¿qué tipo de `overflow` se considera generalmente más aceptable en el diseño web?**

    - [ ] a) overflow horizontal.
    - [x] b) overflow vertical. //correcto
    - [ ] c) Ambos son igualmente aceptables.
    - [ ] d) Ninguno de los dos es aceptable.

[☝️](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)

---

## Tema 2: ¿Qué es la propiedad CSS `Transform` y cómo funciona?

La propiedad CSS `Transform` es una potente herramienta que te permite modificar la presentación visual de los elementos de tu página web sin afectar al diseño de los demás elementos. Te permite aplicar diversas transformaciones a los elementos, como rotarlos, escalarlos, inclinarlos o trasladarlos (moverlos) en un espacio 2D o 3D.

La propiedad `transform` funciona aplicando una transformación matemática al sistema de coordenadas de un elemento. Esto significa que puedes manipular la forma y la posición de un elemento manteniendo intactos su lugar original y el flujo del documento.

Veamos algunas funciones de transformación comunes. Aquí tienes un ejemplo de un elemento cuadro:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="box"></div>
  ```
  
  ```css
  body {
    border: 2px solid black;
  }
  
  .box {
    width: 200px;
    height: 200px;
    background-color: red;
  }
  ```

Hemos configurado el `body` para que tenga un borde negro sólido, de modo que puedas ver el elemento `.box` anidado dentro del elemento `body`.

La función `translate` mueve un elemento desde su posición actual. Aquí tienes un ejemplo actualizado que utiliza la función `translate`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="box"></div>
  ```
  
  ```css
  body {
    border: 2px solid black;
  }
  
  .box {
    width: 200px;
    height: 200px;
    background-color: red;
    transform: translate(50px, 100px);
  }
  ```

Esta regla CSS moverá el elemento con la clase `box` 50 píxeles a la derecha y 100 píxeles hacia abajo desde su posición original.

La función `rotate` gira un elemento alrededor de un punto fijo y este es un ejemplo del uso de la función `rotate` para el elemento `.box` anterior:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="box"></div>
  ```
  
  ```css
  .box {
    margin: 100px;
    width: 200px;
    height: 200px;
    background-color: red;
    transform: rotate(45deg);
  }
  ```

Esto girará el elemento cuarenta y cinco grados en sentido horario.

La función de `scale` le permite cambiar el tamaño de un elemento. Aquí tiene un ejemplo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="box"></div>
  ```
  
  ```css
  .box {
    margin: 100px;
    width: 200px;
    height: 200px;
    background-color: red;
    transform: scale(1.5, 2);
  }
  ```

Esto hará que el elemento sea una vez y media más ancho y dos veces más alto que su tamaño original.

Puedes combinar varias transformaciones en una sola declaración:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="box"></div>
  ```
  
  ```css
  .box {
    margin: 100px;
    width: 200px;
    height: 200px;
    background-color: red;
    transform: translate(50px, 50px) rotate(45deg) scale(1.5);
  }
  ```

Esto moverá el elemento 50 píxeles hacia la derecha y hacia abajo, lo girará 45 grados y lo escalará hasta alcanzar una vez y media su tamaño original.

Aunque la propiedad `transform` es muy útil para crear diseños visualmente atractivos, es importante tener en cuenta la accesibilidad al utilizarla. A continuación se indican algunos aspectos importantes relacionados con la accesibilidad que hay que tener en cuenta.

Es posible que los lectores de pantalla no transmitan con precisión el contenido transformado. Por ejemplo, si utiliza la `transform` para reorganizar el orden visual de los elementos, los lectores de pantalla seguirán leyendo el contenido en el orden DOM original. Esto puede causar confusión a los usuarios que dependen de los lectores de pantalla.

Cuando utilice la `scale` para cambiar el tamaño del texto, tenga cuidado de no hacerlo demasiado pequeño o demasiado grande. El texto extremadamente pequeño puede ser difícil de leer, mientras que el texto demasiado grande puede desbordar su contenedor y volverse ilegible. Por lo general, es mejor utilizar técnicas adecuadas de estilo de fuente para cambiar el tamaño del texto.

Si utiliza `transform` para efectos de animación, tenga en cuenta a los usuarios sensibles al movimiento. Las animaciones excesivas o rápidas pueden causar molestias o incluso provocar convulsiones en algunas personas. Considere la posibilidad de ofrecer a los usuarios una forma de reducir o desactivar las animaciones. Cuando utilice transformaciones 3D, recuerde que no todos los usuarios perciben la profundidad de la misma manera. Asegúrese de que cualquier información crítica que se transmita a través de efectos 3D también esté disponible en formato 2D o mediante texto.

Si utiliza la `transform` para ocultar o revelar contenido, asegúrese de que el contenido siga siendo accesible para los lectores de pantalla y la navegación por teclado. El contenido oculto debe estar realmente oculto, por ejemplo, utilizando `display: none;` o `visibility: hidden;`, en lugar de simplemente moverlo fuera de la pantalla.

Cuando aplique la `transform` a elementos interactivos como botones o enlaces, asegúrese de que el área clicable siga siendo intuitiva y fácil de seleccionar. Un botón transformado drásticamente puede resultar visualmente confuso o difícil de pulsar, especialmente para los usuarios con discapacidades motoras.

En conclusión, aunque la propiedad de `transform` CSS es una herramienta poderosa para crear diseños web visualmente dinámicos, es esencial utilizarla de manera responsable teniendo en cuenta la accesibilidad. Pruebe siempre los elementos transformados con diversas tecnologías de asistencia y considere la posibilidad de proporcionar formas alternativas de acceder a la información o a las funciones que puedan verse afectadas por las transformaciones.

---

## Cuestionario 2

1. **¿Cuál de las siguientes opciones NO es motivo de preocupación al utilizar transformaciones CSS en términos de accesibilidad?**

    - [ ] a) Es posible que los lectores de pantalla no transmitan con precisión el orden visual de los elementos transformados.
    - [ ] b) El texto transformado puede quedar demasiado pequeño o demasiado grande para leerlo cómodamente.
    - [x] c) Las transformaciones siempre mejoran la accesibilidad de un sitio web. //correcto
    - [ ] d) El uso excesivo de transformaciones para animaciones puede causar molestias a algunos usuarios.

2. **¿Qué problema potencial debe tener en cuenta al utilizar transformaciones 3D?**

    - [ ] a) Las transformaciones 3D siempre hacen que los sitios web se carguen más lentamente.
    - [x] b) No todos los usuarios perciben la profundidad de la misma manera, lo que puede afectar a la comprensión. //correcto
    - [ ] c) La mayoría de los navegadores modernos no admiten las transformaciones 3D.
    - [ ] d) Las transformaciones 3D hacen que el texto sea ilegible automáticamente.

3. **Al utilizar la transformación para ocultar contenido, ¿qué se debe garantizar en materia de accesibilidad?**

    - [ ] a) Utilice siempre colores vivos para que el contenido transformado destaque.
    - [ ] b) Utilice solo transformaciones 2D para ocultar contenido.
    - [x] c) Asegúrese de que el contenido siga siendo accesible para los lectores de pantalla y la navegación con el teclado. //correcto
    - [ ] d) Nunca oculte contenido utilizando transformaciones.

[☝️](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)

---

## Tema 3: ¿Qué es el `CSS Box Model` y cómo funciona?

El modelo de caja CSS es un concepto fundamental para el desarrollo web. Define cómo se estructuran y posicionan los elementos HTML. Si entiendes este modelo, podrás controlar el tamaño, el espaciado y la apariencia de los elementos de tu sitio web.

En el modelo de caja CSS, cada elemento está rodeado por una caja. Esta caja consta de cuatro elementos: el área de contenido, el relleno, el borde y el margen.

El área de contenido es la parte más interna del cuadro. Es el espacio que contiene el contenido real de un elemento, como texto o imágenes.

El `padding` es el área inmediatamente posterior al área de contenido. Es el espacio entre el área de contenido y el borde de un elemento. Con el relleno, puedes agregar espacio alrededor del contenido para mejorar su legibilidad. Puedes establecer diferentes valores para el relleno superior, derecho, inferior e izquierdo con la propiedad `padding`.

Este es un ejemplo con la propiedad abreviada `padding`, en el que establecemos el relleno superior en quince píxeles, el relleno derecho en cinco píxeles, el relleno inferior en dos píxeles y el relleno izquierdo en ocho píxeles:

- **Codigo Ejemplo**
  
  ```css
  padding: 15px 5px 2px 8px;
  ```

El `borde` es el contorno exterior o el perfil de un elemento en el modelo de caja CSS. Es el límite visual del elemento. Puedes personalizar el estilo, el ancho, el color y otras propiedades del borde utilizando la propiedad `border`. A continuación se muestra un ejemplo en el que establecemos el borde con un ancho de cinco píxeles, el estilo en sólido y el color en azul:

- **Codigo Ejemplo**
  
  ```css
  border: 5px solid blue;
  ```

Si omites un valor, se utilizará la propiedad predeterminada de ese valor. Es decir, `medium` para el ancho, `none` para el estilo y el color actual para el color.

Puedes establecer estas tres propiedades directamente en la propiedad abreviada `border` si deseas que todos los lados sean exactamente iguales. Pero si deseas asignar un estilo diferente a cada lado, puedes utilizar las propiedades `border-width`, `border-style` y `border-color`.

- **Codigo Ejemplo**
  
  ```css
  border-width: 2px 4px 7px 12px;
  border-style: dashed solid solid dashed;
  border-color: blue red green black;
  ```

Puedes escribir hasta cuatro valores para cada una de estas propiedades. Se aplicarán en secuencia en el sentido de las agujas del reloj, comenzando por la parte superior. Si solo escribes un valor, se aplicará a los cuatro lados.

Por último, el `margin` es el espacio fuera del borde de un elemento. Determina la distancia entre un elemento y otros elementos a su alrededor. Puedes establecer diferentes valores de margen para los lados superior, derecho, inferior e izquierdo del elemento utilizando la propiedad `margin`.

Así, en este ejemplo, el margen superior es de tres píxeles, el margen derecho es de doce píxeles, el margen inferior es de nueve píxeles y el margen izquierdo es de siete píxeles:

- **Codigo Ejemplo**
  
  ```css
  margin: 3px 12px 9px 7px;
  ```

Estos cuatro componentes son esenciales para calcular el ancho y la altura totales de un elemento.

En las próximas lecciones, aprenderás más sobre cómo lo gestiona el navegador y cómo puedes personalizarlo. El modelo de caja CSS es un concepto fundamental para el desarrollo web.

Comprender cómo interactúan estos componentes y cómo contribuyen a las dimensiones de un elemento es esencial para implementar diseños web.

---

## ## Cuestionario 3

1. **¿Qué componente del modelo de caja CSS define el espacio entre el área de contenido y el borde?**

    - [ ] a) `margin`
    - [x] b) `padding` //correcto
    - [ ] c) `content`
    - [ ] d) `border`

2. **¿Qué componente del modelo de caja CSS especifica el espacio fuera del borde de un elemento?**

    - [x] a) `margin` //correcto
    - [ ] b) `padding`
    - [ ] c) `content`
    - [ ] d) `border`

3. **¿Qué componente del modelo de caja CSS crea un contorno visible alrededor de un elemento?**

    - [ ] a) `margin`
    - [ ] b) `padding`
    - [ ] c) `content`
    - [x] d) `border` //correcto

[☝️](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)

---

## Tema 4: ¿Qué es el colapso de márgenes y cómo funciona?

El colapso de márgenes es un concepto fundamental en CSS que a menudo confunde a los principiantes en el desarrollo web.

Este comportamiento se produce cuando los márgenes verticales de elementos adyacentes se superponen, lo que da como resultado un único margen igual al mayor de los dos.

Comprender el colapso de márgenes es importante para controlar con precisión el espaciado y el diseño en el diseño web. Veamos cómo funciona el colapso de márgenes y exploremos algunos escenarios comunes en los que se produce.

En CSS, cuando dos márgenes verticales entran en contacto entre sí, se colapsan, lo que significa que, en lugar de sumarse, el margen más grande prevalece y determina el espacio entre los elementos. Este comportamiento se aplica solo a los márgenes verticales (superior e inferior) y no a los márgenes horizontales (izquierdo y derecho). Veamos un ejemplo para ilustrar este concepto:

- **Codigo Ejemplo**
  
  ```html
  <style>
    .box1 {
      margin-bottom: 20px;
      background-color: lightblue;
    }
    .box2 {
      margin-top: 30px;
      background-color: lightgreen;
    }
  </style>
  
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  ```

En este ejemplo, cabría esperar que el espacio total entre `.box1` y `.box2` fuera de 50 píxeles (20 píxeles más 30 píxeles). Sin embargo, debido al colapso de los márgenes, el espacio real será de 30 píxeles, que es el mayor de los dos márgenes.

Como vimos en el ejemplo anterior, los márgenes de los elementos hermanos adyacentes se colapsarán. Este es el caso más sencillo de colapso de márgenes. Veamos más casos en los que puede producirse el colapso de márgenes.

Los márgenes también pueden colapsarse entre un elemento padre y su primer o último hijo. Si no hay borde, relleno, contenido en línea o espacio libre para separar el margen del padre del del hijo, se colapsarán.

- **Codigo Ejemplo**
  
  ```html
  <style>
    .parent {
      margin-top: 40px;
      background-color: lightyellow;
    }
    .child {
      margin-top: 30px;
      background-color: lightpink;
    }
  </style>
  
  <div class="parent">
    <div class="child">Child element</div>
  </div>
  ```

En este caso, cabría esperar que el elemento secundario estuviera a 70 píxeles de la parte superior (40 píxeles más 30 píxeles). Sin embargo, los márgenes se colapsan y se utiliza el margen más grande, de 40 píxeles.

Si un elemento no tiene contenido, relleno ni borde, sus márgenes superior e inferior pueden colapsarse en un solo margen.

- **Codigo Ejemplo**
  
  ```html
  <style>
    .empty-block {
      margin-top: 20px;
      margin-bottom: 10px;
      height: 0;
    }
    .next-block {
      background-color: lightgray;
    }
  </style>
  
  <div class="empty-block"></div>
  <div class="next-block">Next block</div>
  ```

En este ejemplo, los márgenes superior e inferior del `empty-block` se fusionan en un único margen de 20 píxeles, el mayor de los dos.

A continuación se muestra un ejemplo de cómo evitar la fusión utilizando el relleno:

- **Codigo Ejemplo**
  
  ```html
  <style>
    .parent {
      margin-top: 40px;
      padding-top: 1px;
      background-color: lightyellow;
    }
    .child {
      margin-top: 30px;
      background-color: lightpink;
    }
  </style>
  
  <div class="parent">
    <div class="child">Child element</div>
  </div>
  ```

En este caso, el relleno de un píxel en el elemento padre evita que el margen se colapse, lo que da como resultado un espacio total de 71 píxeles desde la parte superior del elemento padre hasta la parte superior del contenido del elemento hijo.

Comprender el colapso de márgenes es importante para controlar con precisión el diseño y el espaciado en CSS. Aunque a veces puede dar lugar a resultados inesperados, se trata de una característica diseñada para crear un espaciado más agradable estéticamente y coherente en los documentos. Si sabes cuándo se produce el colapso de márgenes y cómo evitarlo cuando sea necesario, podrás crear diseños más predecibles y fáciles de mantener en tus diseños web.

## Cuestionario 4

1. **¿En qué dirección se produce el colapso del margen?**

    - [ ] a) Solo márgenes horizontales.
    - [x] b) Solo márgenes verticales. //correcto
    - [ ] c) Márgenes horizontales y verticales.
    - [ ] d) Márgenes diagonales.

2. **¿Qué sucede cuando dos elementos adyacentes tienen valores de margen diferentes?**

    - [ ] a) Los márgenes se suman.
    - [ ] b) Se utiliza el margen más pequeño.
    - [x] c) Se utiliza el margen más grande. //correcto
    - [ ] d) Se utiliza el promedio de los dos márgenes.

3. **¿Cuál de las siguientes opciones NO evitará el colapso del margen entre un elemento padre y su primer elemento hijo?**

    - [ ] a) Añadir un `border` al elemento padre.
    - [ ] b) Establecer `padding-top: 1px;` en el elemento padre.
    - [ ] c) Usar `display: inline-block;` en el elemento hijo.
    - [x] d) Establecer `margin-top: 0;` en el elemento hijo. //correcto

[☝️](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)

---

## Tema 5: ¿Cuál es la diferencia entre `content-box` y `border-box`?

La propiedad `box-sizing` se puede establecer en `content-box` o `border-box` para controlar cómo se calculan el ancho y el alto de los elementos.

Esta propiedad se puede establecer en el selector universal (`*`) para aplicarla a todos los elementos del documento:

- **Codigo Ejemplo**
  
  ```css
  * {
    box-sizing: border-box;
  }
  ```

El valor predeterminado de la propiedad `box-sizing` es `content-box`, pero puede elegir `border-box` si lo necesita. Primero exploraremos `content-box` y luego pasaremos a `border-box`.

Para comprender cómo funcionan los modelos, debe estar familiarizado con los cuatro conceptos básicos del modelo de caja CSS. Repasémoslos rápidamente.

- El área de contenido es el espacio ocupado por el contenido del elemento.
- El relleno es el espacio entre el área de contenido y el borde.
- El borde es el contorno que rodea el área de contenido y el relleno.
- El margen es el espacio fuera del borde que separa el elemento de otros elementos.

En el modelo `content-box`, el ancho y el alto que establezcas para un elemento determinan las dimensiones del área de contenido, pero no incluyen el relleno, el borde ni el margen. Utiliza `content-box` cuando necesites un control preciso sobre el área de contenido. Cuando establece el `width` y `height`, solo está estableciendo el tamaño del contenido en sí.

Para encontrar el ancho total del elemento, deberá sumar el relleno izquierdo y derecho, y los bordes izquierdo y derecho. Del mismo modo, el alto total de un elemento se puede encontrar sumando el alto del contenido, el relleno superior e inferior, y los bordes superior e inferior.

Por ejemplo, aquí tenemos un selector de tipo CSS para todos los elementos `div`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div></div>
  ```
  
  ```css
  div {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 4px solid black;
  }
  ```

En este caso, si se utiliza `content-box`, el área de contenido será de 300 píxeles por 200 píxeles. El tamaño total renderizado incluye el relleno y los bordes; por ejemplo, el ancho total = 300 píxeles (contenido) + 40 píxeles (relleno) + 8 píxeles (bordes) = 348 píxeles; la altura total se calcula de la misma manera.

¡Genial! Ahora exploremos `border-box`. Es diferente porque el ancho y el alto que estableces incluyen el contenido, el relleno y el borde del elemento (pero no su margen). Utiliza `border-box` cuando quieras que el tamaño total del elemento permanezca fijo incluso si cambian el relleno o los bordes, lo que suele ser útil en diseños adaptables.

Con `border-box`, el relleno y los bordes se incluyen dentro del tamaño especificado del elemento. El `width` y `height` que establezcas se convierten en las dimensiones totales del elemento: contenido + relleno + borde; los márgenes siguen excluidos.

En el siguiente ejemplo, hay dos elementos `div` con las mismas dimensiones pero con valores de `box-sizing` diferentes. Observa cómo esto da como resultado tamaños totales diferentes cuando se ven en el navegador:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="box" id="red-div"></div>
  <div class="box" id="blue-div"></div>
  ```
  
  ```css
  .box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 4px solid black;
    margin: 10px;
  }
  
  #red-div {
    box-sizing: content-box;
    background-color: red;
  }
  
  #blue-div {
    box-sizing: border-box;
    background-color: blue;
  }
  ```

Se puede observar que ambos tienen el mismo `width`, `height`, `padding`, `border` y `margin`. Las únicas diferencias están en los colores y el valor de la propiedad `box-sizing`. Esta pequeña diferencia tiene un impacto muy importante en las dimensiones finales.

La elección entre `content-box` y `border-box` depende realmente de las necesidades específicas de su proyecto. Aunque `border-box` es cada vez más popular por su simplicidad y flexibilidad, es importante comprender ambos modelos para implementar diseños CSS eficaces.

---

## Cuestionario 5

1. **¿Cuál de las siguientes opciones es el valor predeterminado de la propiedad box-sizing en la mayoría de los navegadores?**

    - [x] a) `content-box` //correcto
    - [ ] b) `border-box`
    - [ ] c) `padding-box`
    - [ ] d) `margin-box`

2. **¿Cuál es la principal ventaja de utilizar `border-box` para crear diseños adaptables?**

    - [ ] a) Complica los cálculos.
    - [ ] b) Permite un control más preciso sobre las dimensiones de los elementos.
    - [x] c) Garantiza que los elementos mantengan sus dimensiones especificadas independientemente de los cambios en el `padding` o`border`. //correcto
    - [ ] d) Mejora la compatibilidad con los navegadores.

3. **En el modelo de `content-box`, ¿qué representa el `widht` especificado de un elemento?**

    - [ ] a) El `width` total del elemento, incluyendo el `padding`, el `border` y el `margin`.
    - [x] b) El `width` del área de contenido únicamente. //correcto
    - [ ] c) El `width` del `border`.
    - [ ] d) El `width` del `padding`.

[☝️](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)

---

## Tema 6: ¿Qué es un restablecimiento de CSS y cuáles son algunos ejemplos comunes?

Un restablecimiento de CSS es una hoja de estilos que elimina todo o parte del formato predeterminado que los navegadores web aplican a los elementos HTML. Por ejemplo, es posible que haya notado que ciertos elementos, como los párrafos y los encabezados, ya tienen márgenes predeterminados, incluso si no los define explícitamente en sus hojas de estilos personalizadas.

También verás esto con varias propiedades en una amplia gama de elementos HTML. Los diferentes navegadores también pueden aplicar diferentes estilos predeterminados a los elementos HTML. Es posible que los estilos predeterminados en Google Chrome no sean exactamente los mismos que en Mozilla Firefox o Microsoft Edge. Esto puede dar lugar a estilos inconsistentes entre los navegadores, lo que debes evitar en la medida de lo posible.

Para solucionar esto, un restablecimiento de CSS elimina los estilos predeterminados. Al eliminar todos o algunos de los estilos predeterminados, puede obtener una base coherente para su diseño y minimizar las posibles inconsistencias entre navegadores y dispositivos. La eliminación de los estilos predeterminados también puede facilitar el proceso de diseño, ya que solo verá los estilos que haya aplicado explícitamente en sus hojas de estilo personalizadas. Hay dos enfoques principales para los restablecimientos de CSS: puede definir restablecimientos de CSS personalizados o utilizar restablecimientos de CSS de terceros.

Los restablecimientos CSS personalizados son hojas de estilo que se crean desde cero para adaptarse a las necesidades de su proyecto. De esta manera, puede controlar los estilos específicos que se restablecerán con mucha flexibilidad. Sin embargo, también es necesario invertir tiempo en desarrollar y mantener las hojas de estilo. A continuación, se muestra un ejemplo de una regla CSS muy común para restablecer el margen y el relleno de todos los elementos HTML:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <h1>Example Heading</h1>
  <p>This is a paragraph.</p>
  ```
  
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

Normalmente se escribe en la parte superior de la hoja de estilos CSS. El selector asterisco es un selector comodín que coincide con todos los elementos HTML, por lo que tendrán un margen predeterminado de cero y un relleno predeterminado de cero en los cuatro lados. Esto te dará un punto de partida y luego podrás personalizarlos en selectores CSS más específicos más adelante en la hoja de estilos.

Puede utilizar este enfoque para seleccionar cualquier elemento HTML y restablecer sus estilos predeterminados. Solo tiene que crear una hoja de estilos personalizada y utilizar los selectores CSS adecuados para que coincidan con los elementos y establecer los estilos.

Pero este puede ser un proceso que requiere mucho tiempo. Si quieres ahorrar tiempo, también puedes utilizar un restablecimiento CSS de terceros. Estas hojas de estilo ya están preconstruidas, por lo que solo tienes que descargarlas y añadirlas directamente a tu proyecto. Un buen ejemplo de restablecimiento CSS de terceros es `Normalize.css`. Esta hoja de estilo normaliza los estilos de una amplia gama de elementos HTML, al tiempo que mantiene algunos estilos predeterminados útiles, especialmente aquellos que son importantes para la accesibilidad. También corrige errores comunes e inconsistencias de estilo.

Otra opción es `sanitize.css`. Se trata de una biblioteca CSS que puedes utilizar para garantizar que los estilos predeterminados sean coherentes en todos los principales navegadores modernos. Esta biblioteca se ha desarrollado junto con `Normalize.css`, por lo que ambas evolucionan juntas. También cuenta con hojas de estilo individuales que puedes descargar para fines específicos, como normalizar formularios y tipografía.

Hay muchas opciones disponibles, pero debes elegir las que mejor se adapten a las necesidades de tu proyecto. También puedes combinar ambos enfoques utilizando restablecimientos CSS de terceros con restablecimientos personalizados.

Cuando se trabaja con restablecimientos CSS, también es importante tener en cuenta la accesibilidad. Tu aplicación web debe ser accesible para todos. Por lo tanto, no debe restablecer estilos que puedan ser útiles para lectores de pantalla u otras tecnologías de asistencia. También debe tener en cuenta el impacto que estas hojas de estilo adicionales pueden tener en el rendimiento de sus aplicaciones, ya que deben descargarse antes de aplicar los estilos personalizados.

Al eliminar los estilos predeterminados, los restablecimientos CSS le proporcionan un punto de partida en blanco para implementar su diseño. Esto da como resultado una experiencia de usuario más uniforme y coherente en todos los navegadores y dispositivos.

---

## Cuestionario 6

1. **¿Cuál es el objetivo principal de un restablecimiento de CSS?**

    - [ ] a) Para agregar estilos predeterminados a los elementos HTML.
    - [x] b) Para establecer una base coherente para el estilo, reduciendo las variaciones específicas de cada navegador. //correcto
    - [ ] c) Para crear diseños adaptables.
    - [ ] d) Para mejorar el rendimiento del sitio web.

2. **¿Cuál de los siguientes es un restablecimiento popular de navegadores de terceros?**

    - [x] a) Normalize.css //correcto
    - [ ] b) Reset.css
    - [ ] c) Skeleton
    - [ ] d) Foundation

3. **¿Cuál es la principal ventaja de utilizar un restablecimiento CSS personalizado en lugar de uno de terceros?**

    - [x] a) Mayor flexibilidad y control sobre los estilos. //correcto
    - [ ] b) Mejora de la compatibilidad con los navegadores.
    - [ ] c) Implementación más sencilla.
    - [ ] d) Tiempos de carga más rápidos.

[☝️](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)

---

## Tema 7: ¿Qué es la propiedad CSS Filter y cuáles son algunos ejemplos comunes?

La propiedad CSS Filter es una potente herramienta que permite aplicar efectos gráficos a los elementos de una página web. Resulta especialmente útil para ajustar la presentación visual de imágenes, fondos e incluso texto sin modificar el recurso original.

La propiedad filter se puede utilizar para crear diversos efectos, como desenfoque, cambio de color y ajustes de contraste. Veamos cómo funciona la propiedad filter y exploremos algunos ejemplos comunes. La sintaxis básica de una propiedad filter es muy sencilla:

- **Codigo Ejemplo**
  
  ```css
  selector {
    filter: function(amount);
  }
  ```

Aquí, la `function` representa el efecto de filtro específico que desea aplicar, y la `amount` suele ser un valor que determina la intensidad del efecto. Veamos ahora algunas funciones de filtro comunes y sus usos.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: blur(2px);
  }
  ```

La función de `blur` aplica un desenfoque gaussiano al elemento, cuya intensidad se especifica en píxeles y representa el radio del desenfoque. Esta regla CSS aplicará un desenfoque de 2 píxeles a todas las imágenes de la página. El efecto de `blur` puede ser útil para crear profundidad en tu diseño o para ocultar partes de una imagen.

La función de `brightness` ajusta el brillo del elemento. Un valor del `0%` hará que el elemento sea completamente negro, mientras que los valores superiores al `100%` aumentarán el brillo.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: brightness(150%);
  }
  ```

Esta regla CSS aumenta el brillo del elemento de imagen en un `50%`. Los ajustes de brillo se pueden utilizar para resaltar las imágenes o crear un efecto descolorido.

La función de `grayscale` convierte el elemento a escala de grises. La cantidad se define como un porcentaje, donde `100%` es completamente escala de grises y `0%` deja la imagen sin cambios.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: grayscale(100%);
  }
  ```

Esta regla convertirá el elemento de imagen a escala de grises completa. `grayscale` se puede utilizar para crear un aspecto vintage o restar importancia a ciertos elementos de una página.

La función `sepia` aplica un tono sepia al elemento. Al igual que la escala de grises, utiliza un valor porcentual:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: sepia(80%);
  }
  ```

Esta regla aplica un efecto sepia del `80%` al elemento de imagen. El efecto sepia es ideal para crear un aspecto vintage o antiguo.

La función de `hue-rotate` aplica una rotación de tono al elemento. El valor se define en grados y representa una rotación alrededor del círculo cromático.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: hue-rotate(90deg);
  }
  ```

Esta regla gira el tono del elemento de imagen `90` grados. La rotación del tono se puede utilizar para crear efectos psicodélicos o para ajustar la combinación de colores general de una imagen.

Uno de los aspectos más potentes de la propiedad del `filter` es la capacidad de combinar múltiples efectos. Puede aplicar varios filtros al mismo elemento separándolos con espacios:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: contrast(150%) brightness(110%) sepia(30%);  
  }
  ```

Esta regla aplica un mayor contraste, un ligero aumento del brillo y un sutil efecto sepia al elemento de la imagen.

Al combinar filtros, puedes crear efectos visuales complejos y únicos que se adapten a tus necesidades de diseño. La propiedad de filtro CSS es una herramienta versátil que permite la manipulación visual creativa de los elementos web.

Aunque hemos cubierto algunas de las funciones de filtro más comunes, hay otras disponibles, como `contrast`, `invert`, y `saturate`. Al igual que con cualquier función potente, es importante tener cuidado con la forma en que se utilizan los filtros para mejorar el diseño sin abrumar a los usuarios ni comprometer la accesibilidad.

<!-- -------------BONUS---------------- -->

> [!IMPORTANT]
> Este contenido adicional es el explorado por cuenta propia 💡

### Filtro: contrast()

Este filtro ajusta la diferencia entre las áreas oscuras y claras. Un valor del 0% dejará la imagen gris plana, mientras que valores altos la hacen más vibrante y agresiva.
  
- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: contrast(200%); 
  }
  ```

---

### Filtro: `invert()`

Este es de los más locos. Invierte todos los colores de la imagen. El naranja se vuelve azul, el blanco se vuelve negro. Un valor de `100%` es un negativo perfecto.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: invert(100%); 
  }
  ```

---

### 3. Filtro: `saturate()`

Controla qué tan "vivos" son los colores. `0%` es blanco y negro (como el grayscale), mientras que valores altos (como `500%`) hacen que los colores sean súper intensos y brillantes.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
  ```
  
  ```css
  img {
    filter: saturate(300%);
  }
  ```

---

## Cuestionario 7

1. **¿Cuál de las siguientes reglas CSS convertiría una imagen completamente a `grayscale`?**

    - [x] a) `filter: grayscale(100%);` //correcto
    - [ ] b) `filter: gray(100%);`
    - [ ] c) `filter: gray(100);`
    - [ ] d) `filter: black-and-white(true);`

2. **¿Cuál sería el efecto de aplicar el `filter: brightness(0%);` a un elemento?**

    - [ ] a) Haría que el elemento fuera completamente blanco.
    - [x] b) Haría que el elemento fuera completamente negro. //correcto
    - [ ] c) No tendría ningún efecto sobre el elemento.
    - [ ] d) Invertiría los colores del elemento.

3. **¿Cómo combinarías un efecto de desenfoque de 5 píxeles con un efecto sepia del 50 %?**

    - [ ] a) `filter: blur(5px) + sepia(50%);`
    - [ ] b) `filter: blur(5px), sepia(50%);`
    - [x] c) `filter: blur(5px) sepia(50%);` //correcto`
    - [ ] d) `filter: blur(5px) && sepia(50%);

[☝️](#trabajar-con-transformacionetransforms-desbordamientosoverflow-y-filtrosfilters-css)

---
