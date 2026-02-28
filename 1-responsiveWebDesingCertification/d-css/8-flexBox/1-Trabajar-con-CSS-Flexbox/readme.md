# Trabajar con CSS Flexbox

## Navegación

- [Trabajar con CSS Flexbox](#trabajar-con-css-flexbox)
  - [Navegación](#navegación)
  - [Introducción](#introducción)
  - [Tema 1: ¿Qué es CSS Flexbox y cuándo se debe utilizar?](#tema-1-qué-es-css-flexbox-y-cuándo-se-debe-utilizar)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cuáles son algunas propiedades flexibles comunes y cómo funcionan?](#tema-2-cuáles-son-algunas-propiedades-flexibles-comunes-y-cómo-funcionan)
  - [Cuestionario 2](#cuestionario-2)

---

## Introducción

En este proyecto, se trabajará con CSS Flexbox para crear un diseño de página web que se adapte a diferentes tamaños de pantalla. Se utilizarán las propiedades de Flexbox para organizar y alinear los elementos de la página de manera eficiente.

---

## Tema 1: ¿Qué es CSS Flexbox y cuándo se debe utilizar?

CSS Flexbox es un modelo de diseño unidimensional que permite organizar elementos en filas y columnas dentro de un contenedor. También permite controlar su orden y orientación. Los desarrolladores web lo utilizan para crear sitios web y aplicaciones web adaptables que se ajustan a diferentes tamaños y orientaciones de pantalla. Nos referimos a Flexbox como un modelo de diseño unidimensional porque se centra en organizar elementos a lo largo de un solo eje a la vez. El eje puede ser horizontal o vertical.

Hay dos conceptos clave que debes conocer antes de empezar a trabajar con Flexbox: contenedor flexible y elemento flexible.

Un contenedor flexible es un elemento HTML con un diseño flexible. Puedes organizar y alinear elementos de diversas formas dentro de un contenedor flexible. Para convertir un elemento HTML en un contenedor flexible, debes añadir `display: flex` a sus estilos CSS.

Los elementos flexibles son los hijos directos de un contenedor flexible. Estos elementos se pueden organizar y alinear dentro de un contenedor flexible en función de sus propiedades. También pueden reducirse o expandirse para adaptarse al espacio disponible.

Este es un ejemplo con un contenedor `main` y tres elementos `div` secundarios:

- **Codigo Ejemplo**
  
  ```html
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```

Si solo se establece el ancho, el alto y el color de fondo de estos elementos div en la hoja de estilos CSS, cada elemento secundario se colocará en su propia fila, ya que el contenedor no es flexible por defecto.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Pero si agregas `display: flex` al contenedor main, los elementos `div` se reorganizarán para ajustarse a la misma fila y se reducirán si es necesario (para ver las vistas previas, activa el editor interactivo):

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Por defecto, un contenedor flexible será un elemento de nivel de bloque, por lo que el contenedor en sí mismo estará en su propia fila en relación con otros elementos y contenedores.

Ahora que sabes más sobre los contenedores flexibles y los elementos flexibles, también debes conocer las propiedades flexibles. Estas propiedades determinan cómo se organizarán, redimensionarán y distribuirán los elementos flexibles dentro del contenedor flexible. Algunas de las más utilizadas son `flex-direction`, `justify-content`, `align-items` y `flex-wrap`.

Genial. Ahora hablemos un poco sobre el modelo flexible. Este modelo define cómo se organizan los elementos flexibles dentro de un contenedor flexible. Cada contenedor flexible tiene dos ejes:

- El eje principal.
- El eje transversal.

La orientación de estos ejes determina cómo las diferentes propiedades afectarán al diseño y la distribución de los elementos flexibles. Por defecto, el eje principal de un contenedor flexible es horizontal y el eje transversal es vertical. Los elementos flexibles se organizan en la dirección del eje principal. El eje transversal es perpendicular al eje principal.

La propiedad `flex-direction` establece la dirección del eje principal. El valor predeterminado de `flex-direction` es `row`, que coloca todos los elementos flexibles en la misma fila, en la dirección del idioma predeterminado de tu navegador (de izquierda a derecha o de derecha a izquierda):

- **Codigo Ejemplo**
  
  ```css
  flex-direction: row; /* Default */
  ```

Para invertir los elementos de la fila, puede utilizar `flex-direction: row-reverse`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    flex-direction: row-reverse; 
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Esto invertirá el orden de los elementos flexibles. Si desea alinear los elementos flexibles verticalmente, solo tiene que establecer `flex-direction` en `column` en el contenedor flexible. Esto cambiará la dirección del eje principal:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    flex-direction: column; 
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Ahora los elementos div se alinearán verticalmente porque el eje principal será vertical y el eje transversal será horizontal.

También puede invertir el orden de los elementos flexibles verticalmente con `flex-direction: column-reverse`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    flex-direction: column-reverse; 
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

CSS flexbox es un potente modelo de diseño que proporciona una forma flexible y eficiente de organizar elementos dentro de un contenedor. Al comprender los conceptos clave de los contenedores flexibles, los elementos flexibles y las diversas propiedades flexibles, puede crear sitios web dinámicos y receptivos que se adapten a diferentes tamaños y orientaciones de pantalla.

---

## Cuestionario 1

1. **¿Cuál es el objetivo principal de CSS Flexbox?**

    - [ ] a) Para controlar el tamaño de fuente de los elementos de texto.
    - [x] b) Para crear diseños adaptables y dinámicos. //correcto
    - [ ] c) Para definir el color de los elementos.
    - [ ] d) Para ajustar el espaciado entre elementos.

2. **¿Cuál de las siguientes propiedades CSS se utiliza para controlar la dirección en la que se organizan los elementos secundarios dentro de un contenedor flexible?**

    - [ ] a) `flex-wrap`
    - [ ] b) `align-items`
    - [ ] c) `justify-content`
    - [x] d) `flex-direction` //correcto

3. **En el modelo flexible, ¿cuál es la relación entre el eje principal y el eje transversal?**

    - [ ] a) El eje principal siempre es horizontal, mientras que el eje transversal siempre es vertical.
    - [ ] b) El eje principal siempre es vertical, mientras que el eje transversal siempre es horizontal.
    - [x] c) El eje principal y el eje transversal siempre son perpendiculares entre sí. //correcto
    - [ ] d) El eje principal y el eje transversal siempre son paralelos entre sí.

[☝️](#trabajar-con-css-flexbox)

---

## Tema 2: ¿Cuáles son algunas propiedades flexibles comunes y cómo funcionan?

Las propiedades flexibles son propiedades que se pueden aplicar a contenedores flexibles para determinar la distribución de los elementos secundarios. Cubriremos algunas de las más utilizadas: `flex-wrap`, `justify-content` y `align-items`.

Comencemos con `flex-wrap`. Esta propiedad determina cómo se ajustan los elementos flexibles dentro de un contenedor flexible para adaptarse al espacio disponible. `flex-wrap` puede tomar tres valores posibles: `nowrap`, `wrap` y `wrap-reverse`. `nowrap` es el valor predeterminado: los elementos flexibles no se ajustarán a una nueva línea, incluso si su ancho excede el ancho del contenedor.

En el código siguiente, tenemos tres elementos `div`. Centrémonos en el `width`. El contenedor `main`, bordeado en rojo, tiene un `width` de `200px`, mientras que sus tres elementos `div` secundarios combinados tienen un `width` de `240px` (`80px` cada uno):

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    width: 200px;
    display: flex;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

El ancho de los elementos `div` excede el ancho de su contenedor, pero por defecto se reducirán para ajustarse al espacio disponible. Si desea ajustarlos cuando excedan el ancho de su contenedor, puede establecer `flex-wrap: wrap` en el contenedor flexible:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Los elementos `div` se reorganizarán en filas cuando superen el ancho de su contenedor. Puede envolver los elementos flexibles en orden inverso con `flex-wrap: wrap-reverse`. La propiedad `flex-flow` es una propiedad abreviada para `flex-direction` y `flex-wrap`. En este ejemplo, establecemos `flex-direction` en `column` y `flex-wrap` en `wrap-reverse`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    width: 200px;
    display: flex;
    flex-flow: column wrap-reverse;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Genial. Ahora hablemos de `justify-content`. `justify-content` alinea los elementos secundarios a lo largo del eje principal del contenedor flexible. Si asignas el valor `flex-start` a `justify-content`, los elementos flexibles se alinearán con el inicio del eje principal. Esto puede ser horizontal o vertical:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    justify-content: flex-start;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Con `justify-content: flex-end`, los elementos flexibles se alinean al final del eje principal, horizontal o verticalmente.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    justify-content: flex-end;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Para centrar los elementos flexibles a lo largo del eje principal, puede utilizar `justify-content: center`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    justify-content: center;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Para distribuir los elementos de manera uniforme a lo largo del eje principal, puedes utilizar `justify-content: space-between`. Esto añadirá algo de espacio entre los elementos flexibles si es necesario.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    justify-content: space-between;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

`justify-content: space-around` distribuye los elementos flexibles de manera uniforme dentro del eje principal, añadiendo un espacio antes del primer elemento y después del último. Este espacio adicional es la mitad del espacio entre cada par de elementos adyacentes. Si solo hay un elemento que distribuir, se centrará.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    justify-content: space-around;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Y por último, pero no menos importante, tenemos `justify-content: space-evenly`, que distribuye los elementos de manera uniforme a lo largo del eje principal. El espacio entre los elementos y el espacio antes y después del primer y último elemento son exactamente iguales:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    display: flex;
    justify-content: space-evenly;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Genial. Ahora ya sabes cómo distribuir elementos flexibles a lo largo del eje principal. Pero quizá también quieras distribuirlos a lo largo del eje transversal. Recuerda que el eje transversal es perpendicular al eje principal. Puedes hacerlo con la propiedad `align-items`. Para centrar los elementos a lo largo del eje transversal, solo tienes que añadir `align-items: center` al contenedor flexible:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    height: 300px;
    display: flex;
    align-items: center;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

En este ejemplo, los elementos flexibles se centran a lo largo del eje transversal, que es vertical por defecto. Si el eje transversal es horizontal, se centrarán horizontalmente. Por el contrario, `align-items: flex-start` alinea los elementos con el inicio del eje transversal:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    height: 300px;
    display: flex;
    align-items: flex-start;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Lo contrario es `align-items: flex-end`. Esto alineará los elementos flexibles al final del eje transversal, vertical u horizontalmente.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <main>
    <div id="first-div"></div>
    <div id="second-div"></div>
    <div id="third-div"></div>
  </main>
  ```
  
  ```css
  main {
    height: 300px;
    display: flex;
    align-items: flex-end;
    border: 2px solid red;
  }
  
  div {
    width: 80px;
    height: 50px;
  }
  
  #first-div {
    background-color: #4d70b2;
  }
  
  #second-div {
    background-color: #5c4db2;
  }
  
  #third-div {
    background-color: #4da3b2;
  }
  ```

Para estirar los elementos flexibles a lo largo del eje transversal, puede utilizar `align-items: stretch`. Esto también funciona con elementos cuyo tamaño se ajusta automáticamente, como aquellos sin `width` o `height` definidos, o con solo un `width` o `height` mínimos. Los elementos flexibles se estirarán para llenar el contenedor en la dirección del eje transversal.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box">Three</div>
  </div>
  ```
  
  ```css
  .container {
    display: flex;
    align-items: stretch; 
    border: 2px solid #444;
    height: 200px; 
  }
  
  .box {
    width: 100px;           
    border: 1px solid #888;
    background-color: lightblue;
  }
  ```

Y, por último, puedes utilizar la propiedad `align-self` para asignar una alineación diferente en el eje transversal a un elemento flexible individual. Por ejemplo, puedes estirarlo con `align-self: stretch`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box special">Three</div>
  </div>
  ```
  
  ```css
  .container {
    display: flex;
    align-items: flex-start; 
    border: 2px solid #444;
    height: 200px; 
  }
  
  .box {
    width: 100px;
    border: 1px solid #888;
    background-color: lightblue;
    margin: 4px;
  }
  
  .special {
    align-self: stretch; 
    background-color: lightcoral;
  }
  ```

Puede centrarlo con `align-self: center`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box special">Three</div>
  </div>
  ```
  
  ```css
  .container {
    display: flex;
    align-items: flex-start; 
    border: 2px solid #444;
    height: 200px; 
  }
  
  .box {
    width: 100px;
    border: 1px solid #888;
    background-color: lightblue;
    margin: 4px;
  }
  
  .special {
    align-self: center; 
    background-color: lightcoral;
  }
  ```

Puede alinearlo con el inicio del eje transversal con `align-self: flex-start`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box special">Three</div>
  </div>
  ```
  
  ```css
  .container {
    display: flex;
    align-items: flex-start; 
    border: 2px solid #444;
    height: 200px; 
  }
  
  .box {
    width: 100px;
    border: 1px solid #888;
    background-color: lightblue;
    margin: 4px;
  }
  
  .special {
    align-self: flex-start; 
    background-color: lightcoral;
  }
  ```

O puede alinearlo al final del eje transversal con `align-self: flex-end`.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <div class="box">One</div>
    <div class="box">Two</div>
    <div class="box special">Three</div>
  </div>
  ```
  
  ```css
  .container {
    display: flex;
    align-items: flex-start; 
    border: 2px solid #444;
    height: 200px; 
  }
  
  .box {
    width: 100px;
    border: 1px solid #888;
    background-color: lightblue;
    margin: 4px;
  }
  
  .special {
    align-self: flex-end; 
    background-color: lightcoral;
  }
  ```

Hay otras propiedades y valores flexibles entre los que puedes elegir para crear el diseño adaptable que imaginas, pero estos son los más utilizados. Con estas propiedades flexibles de CSS y tus nuevos conocimientos sobre el modelo flexible de CSS, puedes empezar a crear diseños adaptables para ofrecer una experiencia de usuario fluida e inclusiva en todos los dispositivos.

---

## Cuestionario 2

1. **¿Qué propiedad CSS se utiliza para alinear horizontalmente (por defecto) los elementos secundarios dentro de un contenedor flexible?**

    - [ ] a) `flex-direction`
    - [x] b) `justify-content` //correcto
    - [ ] c) `align-items`
    - [ ] d) `flex-wrap`

2. **¿Qué propiedad CSS se utiliza para alinear los elementos secundarios verticalmente (por defecto) dentro de un contenedor flexible?**

    - [ ] a) `flex-direction`
    - [ ] b) `justify-content`
    - [x] c) `align-items` //correcto
    - [ ] d) `flex-wrap`

3. **¿Cuáles de las siguientes propiedades se pueden combinar en la propiedad `flex-flow`?**

    - [ ] a) `flex-direction` y `justify-content`
    - [ ] b) `flex-direction` y `align-items`
    - [ ] c) `flex-direction` y `align-content`
    - [x] d) `flex-direction` y `flex-wrap` //correcto

[☝️](#trabajar-con-css-flexbox)

---
