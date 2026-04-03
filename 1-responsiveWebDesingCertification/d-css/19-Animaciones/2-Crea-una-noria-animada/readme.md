# Crea una noria animada

En este desafío, crearás una noria animada utilizando HTML y CSS. La noria debe tener un diseño atractivo y estar animada para simular su movimiento.

---

## Paso 1

> > Para empezar, agrega un elemento de enlace al archivo ./styles.css.

- **code:**

  ```html
  <link rel="stylesheet" href="./styles.css">
  ```

## Paso 2

> > Añade un elemento `div` dentro del elemento `body` y asígnale la clase `wheel`.
>
> > Dentro de tu nuevo elemento `div`, añade seis elementos `span` con la clase `line` y seis elementos `div` con la clase `cabin`.

- **code:**

  ```html
  <div class="wheel">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
    <div class="cabin"></div>
  </div>
  ```

---

## Paso 3

> > Crea un selector para tu elemento `.wheel`. Empieza por establecer el `border` en `2px solid black`, el `border-radius` en `50%` y el `margin-left` en `50px`.

- **code:**

  ```css
  .wheel {
    border: 2px solid black;
    border-radius: 50%;
    margin-left: 50px;
  }
  ```

---

## Paso 4

> > Establece la propiedad `position` del selector `.wheel` en `absolute`. Establece tanto el `height` como el `width` en `55vw`.

- **code:**

  ```css
  .wheel {
    border: 2px solid black;
    border-radius: 50%;
    margin-left: 50px;
    /* code */
    position: absolute;
    height: 55vw;
    width: 55vw;
    /* code */
  }
  ```

---

## Paso 5

> > Asigna a tu selector `.wheel` las propiedades `max-height` y `max-width`, ambas con un valor de `500px`.

- **code:**

  ```css
  .wheel {
    border: 2px solid black;
    border-radius: 50%;
    margin-left: 50px;
    position: absolute;
    height: 55vw;
    width: 55vw;
    /* code */
    max-height: 500px;
    max-width: 500px;
    /* code */
  }
  ```

---

## Paso 6

> > Crea un selector para tus elementos `.line`. Empieza por establecer el `background-color` en `black`, el `width` en `50%` y la `height` en `2px`.

- **code:**

  ```css
  .line {
    background-color: black;
    width: 50%;
    height: 2px;
  }
  ```

---

## Paso 7

> > Establece la propiedad `position` del selector `.line` en `absolute`, la propiedad `left` en `50%` y la propiedad `top` en `50%`.

- **code:**

  ```css
  .line {
    background-color: black;
    width: 50%;
    height: 2px;
    /* code */
    position: absolute;
    left: 50%;
    top: 50%;
    /* code */
  }
  ```

---

## Paso 8

La propiedad `transform-origin` se utiliza para establecer el punto alrededor del cual se aplica una transformación CSS. Por ejemplo, cuando se aplica una transformación de `rotate` (como harás más adelante en este proyecto), `transform-origin` determina alrededor de qué punto se gira el elemento.

> > Asigna al selector `.line` una propiedad `transform-origin` de `0% 0%`. Esto desplazará el punto de origen a 0% desde la izquierda y 0% desde la parte superior, estableciéndolo en la esquina superior izquierda del elemento.

- **code:**

  ```css
  .line {
    background-color: black;
    width: 50%;
    height: 2px;
    position: absolute;
    left: 50%;
    top: 50%;
    /* code */
    transform-origin: 0% 0%;
    /* code */
  }
  ```

---

## Paso 9

> > Crea un selector para seleccionar tu segundo elemento `.line`. Establece la propiedad `transform` en `rotate(60deg)`.

Recuerda que la propiedad `transform` te permite manipular la forma de un elemento. En este caso, al usar el valor `rotate(60deg)`, el elemento girará 60 grados en sentido horario alrededor de su punto de origen de transformación.

- **code:**

  ```css
  .line:nth-of-type(2) {
    transform: rotate(60deg);
  }
  ```

---

## Paso 10

Utilizando el mismo patrón, crea un selector independiente para la tercera `.line`, la cuarta `.line`, la quinta `.line` y la sexta `.line`.

> > Establece la propiedad `transform` de la tercera `.line` en `rotate(120deg)`, la de la cuarta en `rotate(180deg)`, la de la quinta en `rotate(240deg)` y la de la sexta en `rotate(300deg)`.

- **code:**

  ```css
  .line:nth-of-type(2) {
    transform: rotate(60deg);
    /* code */
    .line:nth-of-type(3) {
      transform: rotate(120deg);
    }
    .line:nth-of-type(4) {
      transform: rotate(180deg);
    }
    .line:nth-of-type(5) {
      transform: rotate(240deg);
    }
    .line:nth-of-type(6) {
      transform: rotate(300deg);
    }
    /* code */
  }
  ```

---

## Paso 11

> > Crea un selector `.cabin`. Establece el `background-color` en `red`, el `width` en un `20%` y la `height` en un `20%`.

- **code:**

  ```css
  .cabin {
    background-color: red;
    width: 20%;
    height: 20%;
  }
  ```

---

## Paso 12

> > Asigna al elemento `.cabin` una `position` `absolute` y un `border` `2px solid`.

- **code:**

  ```css
  .cabin {
    background-color: red;
    width: 20%;
    height: 20%;
    /* code */
    position: absolute;
    border: 2px solid;
    /* code */
  }
  ```

---

## Paso 13

> > Configura el elemento `.cabin` para que tenga una propiedad `transform-origin` de `50% 0%`. Esto establecerá el punto de origen con un desplazamiento del `50%` desde la izquierda y del `0%` desde la parte superior, situándolo en el centro del borde superior del elemento.

- **code:**

  ```css
  .cabin {
    background-color: red;
    width: 20%;
    height: 20%;
    position: absolute;
    border: 2px solid;
    /* code */
    transform-origin: 50% 0%;
    /* code */
  }
  ```

---

## Paso 14

> > Es hora de colocar las cabinas alrededor de la rueda. Selecciona el primer elemento `.cabin`. Establece la propiedad `right` en `-8.5%` y la propiedad `top` en `50%`.

- **code:**

  ```css
  .cabin:nth-of-type(1) {
    right: -8.5%;
    top: 50%;
  }
  ```

---

## Paso 15

> > Siguiendo el patrón, selecciona los siguientes elementos `.cabin` y aplícales las reglas específicas:

- El segundo elemento `.cabin` debe tener la propiedad `right` establecida en `17%` y la propiedad `top` en `93.5%`.
- El tercer elemento `.cabin` debe tener la propiedad `right` establecida en `67%` y la propiedad `top` en `93.5%`.
- El cuarto `.cabin` debe tener la propiedad `left` establecida en `-8,5%` y la propiedad `top` establecida en `50%`.
- El quinto `.cabin` debe tener la propiedad `left` establecida en `17%` y la propiedad `top` establecida en `7%`.
- El sexto `.cabin` debe tener la propiedad `right` establecida en `17%` y la propiedad `top` establecida en `7%`.

- **code:**

  ```css
  .cabin:nth-of-type(2) {
    right: 17%;
    top: 93.5%;
  }
  .cabin:nth-of-type(3) {
    right: 67%;
    top: 93.5%;
  }
  .cabin:nth-of-type(4) {
    left: -8.5%;
    top: 50%;
  }
  .cabin:nth-of-type(5) {
    left: 17%;
    top: 7%;
  }
  .cabin:nth-of-type(6) {
    right: 17%;
    top: 7%;
  }
  ```

---

## Paso 16

La regla `@keyframes` se utiliza para definir el flujo de una animación CSS. Dentro de la regla `@keyframes`, puedes crear selectores para puntos específicos de la secuencia de animación, como el `0%` o el `25%`, o utilizar `from` y `to` para definir el inicio y el final de la secuencia.

Las reglas `@keyframes` requieren que se les asigne un nombre, que se utiliza en otras reglas para hacer referencia a ellas. Por ejemplo, la regla `@keyframes` `freeCodeCamp { }` se llamaría freeCodeCamp.

> > Es hora de empezar a animar. Crea una regla `@keyframes` llamada `wheel`.

- **code:**

  ```css
  @keyframes wheel {
    
  }
  ```

---

## Paso 17

> > Ahora debes definir cómo debe comenzar tu animación. Para ello, crea una regla del `0%` dentro de la regla `@keyframes wheel`. Las propiedades que establezcas en este selector anidado se aplicarán al inicio de tu animación.

A modo de ejemplo, esta sería una regla del `12%`:

- **Example Code:**

  ```css
  @keyframes freecodecamp {
    12% {
      color: green;
    }
  }
  ```

- **code:**

  ```css
  @keyframes wheel {
    /* code */
    0% {
      
    }
    /* code */
  }
  ```

---

## Paso 18

> > Aplica a la regla `0%` una propiedad de `transform` con el valor `rotate(0deg)`. De este modo, la animación comenzará sin rotación.

- **code:**

  ```css
  @keyframes wheel {
    0% {
      /* code */
      transform: rotate(0deg);
      /* code */
    }
  }
  ```

---

## Paso 19

> > Ahora asigna un selector `100%` a la regla `@keyframes wheel`. Dentro de ella, configura la propiedad `transform` con el valor `rotate(360deg)`. Al hacer esto, tu animación completará ahora una rotación completa.

- **code:**

  ```css
  @keyframes wheel {
    0% {
      transform: rotate(0deg);
    }
    /* code */
    100% {
      transform: rotate(360deg);
    }
    /* code */
  }
  ```

---

## Paso 20

> > La propiedad `animation-name` se utiliza para vincular una regla `@keyframes` a un selector CSS. El valor de esta propiedad debe coincidir con el nombre de la regla `@keyframes`. Asigna a tu selector `.wheel` una propiedad `animation-name` con el valor `wheel`.
>
> > La propiedad `animation-duration` se utiliza para establecer la duración de la secuencia de la animación. El tiempo debe especificarse en segundos (`s`) o milisegundos (`ms`). Configura tu selector `.wheel` para que tenga una propiedad `animation-duration` de `10s`.

- **code:**

  ```css
  .wheel {
    border: 2px solid black;
    border-radius: 50%;
    margin-left: 50px;
    position: absolute;
    height: 55vw;
    width: 55vw;
    max-height: 500px;
    max-width: 500px;
    /* code */
    animation-name: wheel;
    animation-duration: 10s;
    /* code */
  }
  ```

---

## Paso 21

> > La propiedad `animation-iteration-count` establece cuántas veces debe repetirse la animación. Se puede establecer en un número concreto o en `infinite` para que la animación se repita indefinidamente. Tu noria no debe detenerse nunca, así que configura el selector `.wheel` para que tenga un valor de `animation-iteration-count` igual a `infinite`.
>
> > La propiedad `animation-timing-function` establece cómo debe progresar la animación a lo largo del tiempo. Existen varios valores diferentes para esta propiedad, pero lo que quieres es que la animación de la noria se ejecute al mismo ritmo de principio a fin. Establece `animation-timing-function` en `linear` en tu selector `.wheel`.

- **code:**

  ```css
  .wheel {
    border: 2px solid black;
    border-radius: 50%;
    margin-left: 50px;
    position: absolute;
    height: 55vw;
    width: 55vw;
    max-height: 500px;
    max-width: 500px;
    animation-name: wheel;
    animation-duration: 10s;
    /* code */
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    /* code */
  }
  ```

---

## Paso 22

> > Crea otra regla `@keyframes` con el nombre `cabins`. Utiliza las mismas propiedades que en tu `@keyframes wheel`, copiando tanto la regla del `0%` como la del `100%`, pero establece la propiedad `transform` del selector del `100%` en `rotate(-360deg)`.

- **code:**

  ```css
  @keyframes cabins {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  ```

---

## Paso 23

Con el selector `.wheel`, creaste cuatro propiedades diferentes para controlar la animación. Para el selector `.cabin`, puedes usar la propiedad `animation` para configurarlas todas a la vez.

> > Establece la propiedad `animation` de la regla `.cabin` en `cabins 10s linear infinite`. Esto configurará las propiedades `animation-name`, `animation-duration`, `animation-timing-function` y `animation-iteration-count` en ese orden.

- **code:**

  ```css
  .cabin {
    background-color: red;
    width: 20%;
    height: 20%;
    position: absolute;
    border: 2px solid;
    transform-origin: 50% 0%;
    /* code */
    animation: cabins 10s linear infinite;
    /* code */
  }
  ```

---

## Paso 24

Para que la animación de la cabina parezca un movimiento oscilante más natural, puedes utilizar la función de temporización `ease-in-out`. Este ajuste hará que la animación comience y termine a un ritmo más lento, pero se mueva más rápido en la parte central del ciclo.

> > Cambia `linear` por `ease-in-out` en el selector `.cabin`.

- **code:**

  ```css
  .cabin {
    background-color: red;
    width: 20%;
    height: 20%;
    position: absolute;
    border: 2px solid;
    transform-origin: 50% 0%;
    /* code */
    animation: cabins 10s ease-in-out infinite;
    /* code */
  }
  ```

---

## Paso 25

> > Puedes usar reglas `@keyframes` para controlar algo más que la transformación de un elemento. En el selector `0%` de tus `@keyframes cabins`, establece el `background-color` en `yellow`.

- **code:**

  ```css
  @keyframes cabins {
    0% {
      transform: rotate(0deg);
      /* code */
      background-color: yellow;
      /* code */
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  ```

---

## Paso 26

> > Entre los selectores del `0%` y el `100%`, agrega un selector del `50%`. Este se aplicará en la mitad del ciclo de animación. Establece el `background-color` en `purple`.

- **code:**

  ```css
  @keyframes cabins {
    0% {
      transform: rotate(0deg);
      background-color: yellow;
    }
    /* code */
    50% {
      background-color: purple;
    }
    /* code */
    100% {
      transform: rotate(-360deg);
    }
  }
  ```

---

## Paso 27

Dado que la animación se reproduce en bucle infinito y los colores inicial y final no son los mismos, la transición se ve entrecortada cuando pasa del rojo al amarillo.

> > Para empezar a solucionar esto, elimina el `background-color` del selector `0%`.

- **code:**

  ```css
  @keyframes cabins {
    0% {
      transform: rotate(0deg);
      /* code */
      Se elimina background-color
      /* code */
    }
    50% {
      background-color: purple;
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  ```

---

## Paso 28

> > Crea un nuevo selector del `25%` entre los selectores del `0%` y del `50%`. Asigna a este nuevo selector la propiedad `background-color` con el valor `yellow`.

- **code:**

  ```css
  @keyframes cabins {
    0% {
      transform: rotate(0deg);
    }
    /* code */
    25% {
      background-color: yellow;
    }
    /* code */
    50% {
      background-color: purple;
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  ```

---

## Paso 29

> > Por último, crea un nuevo selector del `75%` entre los selectores del `50%` y del `100%`. Asigna a este nuevo selector una propiedad `background-color` con el color `yellow`.

**Con esto, tu animación será mucho más fluida y tu noria estará terminada.**

- **code:**

  ```css
  @keyframes cabins {
    0% {
      transform: rotate(0deg);
    }
    25% {
      background-color: yellow;
    }
    50% {
      background-color: purple;
    }
    /* code */
    75% {
      background-color: yellow;
    }
    /* code */
    100% {
      transform: rotate(-360deg);
    }
  }
  ```

---
