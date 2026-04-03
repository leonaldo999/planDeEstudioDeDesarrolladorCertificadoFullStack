# Crea un pingüino Flappy

En este desafío, crearás una animación de un pingüino volando utilizando HTML y CSS. Para lograr esto, usarás posicionamiento absoluto para colocar los elementos en su lugar y una animación de keyframes para hacer que el pingüino aletee sus alas.

---

## Paso 1

Crearás un alegre pingüino Flappy y, de paso, seguirás practicando con las transformaciones y animaciones CSS.

> > Empieza por vincular tu hoja de estilos a la página.

- **code:**

  ```html
  <link rel="stylesheet" href="./styles.css">
  ```

---

## Paso 2

> > Selecciona el elemento `body` para establecer el `background` con un degradado lineal con un ángulo de 45 grados en sentido horario, que comience en `rgb(118, 201, 255)` y termine en `rgb(247, 255, 222)`.

- **code:**

  ```css
  body {
    background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  }
  ```

---

## Paso 3

> > Normaliza el tamaño de tu página eliminando el `margiin` y el `padding` del elemento `body`.

- **code:**

  ```css
  body {
    background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
    /* code */
    margin: 0;
    padding: 0;
    /* code */
  }
  ```

---

## Paso 4

> > Normaliza tu página estableciendo el `width` en `100%` y la `height` en `100vh`.

- **code:**

  ```css
  body {
    background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
    margin: 0;
    padding: 0;
    /* code */
    width: 100%;
    height: 100vh;
    /* code */
  }
  ```

---

## Paso 5

> > Elimina las barras de desplazamiento horizontal y vertical utilizando una sola propiedad.

- **code:**

  ```css
  body {
    background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    /* code */
    overflow: hidden;
    /* code */
  }
  ```

---

## Paso 6

> > Dentro del elemento `body`, agrega un elemento `div` con la clase `ground`.

- **code:**

  ```html
  <div class="ground"></div>
  ```

---

## Paso 7

> > Selecciona el elemento `.ground` y configura su `width` para que ocupe todo el ancho de la ventana gráfica. A continuación, configura la `height` en `400px`.

- **code:**

  ```css
  .ground {
    width: 100vw;
    height: 400px;
  }
  ```

---

## Paso 8

> > Aplica al elemento `.ground` un `background` con un degradado lineal con un ángulo de 90 grados en sentido horario, que comience en `rgb(88, 175, 236)` y termine en `rgb(182, 255, 255)`.

- **code:**

  ```css
  .ground {
    width: 100vw;
    height: 400px;
    /* code */
    background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
    /* code */
  }
  ```

---

## Paso 9

> > Dado que el elemento `.ground` ocupará el tercer lugar en el contexto de superposición del diseño de la página, establece su `z-index` en `3` y su `position` en `absoluta`.

- **code:**

  ```css
  .ground {
    width: 100vw;
    height: 400px;
    background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
    /* code */
    z-index: 3;
    position: absolute;
    /* code */
  }
  ```

---

## Paso 10

> > Por encima del elemento `.ground`, agrega un elemento `div` con la clase `penguin`. Este elemento `div` contendrá Flappy Penguin.

- **code:**

  ```html
  <body>
    <!-- code -->
    <div class="penguin"></div>
    <!-- code -->
    <div class="ground"></div>
  </body>
  ```

---

## Paso 11

> > Selecciona el elemento `.penguin` y establece su `width` y `height` en `300px`.

- **code:**

  ```css
  .penguin {
    width: 300px;
    height: 300px;
  }
  ```

---

## Paso 12

> > Utiliza la propiedad `margin` para centrar horizontalmente el elemento `.penguin` y establece el margen superior `margin-top` en `75px`.

- **code:**

  ```css
  .penguin {
    width: 300px;
    height: 300px;
    /* code */
    margin: auto;
    margin-top: 75px;
    /* code */
  }
  ```

---

## Paso 13

Para crear un poco de paisaje en el fondo, vas a agregar dos montañas.

> > Por encima del elemento `.penguin`, agrega un `div` con la clase `left-mountain`.

- **code:**

  ```html
  <body>
    <!-- code -->
    <div class="left-mountain"></div>
    <!-- code -->
    <div class="penguin"></div>
    <div class="ground"></div>
  </body>
  ```

---

## Paso 14

> > Selecciona el elemento `.left-mountain` y establece su `width` y `height` en `300px`. A continuación, configura el `background` con un degradado lineal que comience en `rgb(203, 241, 228)` y termine en `rgb(80, 183, 255)`.

- **code:**

  ```css
  .left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
  }
  ```

---

## Paso 15

> > Para evitar que la montaña empuje el elemento `.ground`, ajusta su `posición` de manera que no ocupe espacio en el diseño de la página.

- **code:**

  ```css
  .left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
    /* code */
    position: absolute;
    /* code */
  }
  ```

---

## Paso 16

Para que la montaña se vea más como una montaña, puedes usar la función de transformación de `skew()`, que toma dos argumentos. El primero es el ángulo de _skewX()_ del eje _x_ , y el segundo es el ángulo de _skewY()_ del eje _y_.

> > Usa la propiedad `transform` para sesgar la montaña `0deg` en el eje x y `44deg` en el eje y.

- **code:**

  ```css
  .left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
    position: absolute;
    /* code */
    transform: skew(0deg, 44deg);
    /* code */
  }
  ```

---

## Paso 17

> > Configura el nivel de apilamiento del elemento `mountain` de modo que quede justo detrás del elemento `.ground`.

- **code:**

  ```css
  .left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
    position: absolute;
    transform: skew(0deg, 44deg);
    /* code */
    z-index: 2;
    /* code */
  }
  ```

---

## Paso 18

> > Para que los elementos `mountain` y `.ground` se superpongan mejor, asigna a `mountain` un `margin-top` de `100px` y al elemento `.ground` un `margin-top` de `-58px`.

- **code:**

  ```css
  .left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
    position: absolute;
    transform: skew(0deg, 44deg);
    z-index: 2;
    /* code */
    margin-top: 100px;
    /* code */
  }
  
  .penguin {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-top: 75px;
  }
  
  .ground {
    width: 100vw;
    height: 400px;
    background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
    z-index: 3;
    position: absolute;
    /* code */
    margin-top: -58px;
    /* code */
  }
  ```

---

## Paso 19

> > Para crear el efecto de una cordillera, agrega otra montaña creando un nuevo elemento `div` inmediatamente después de `.left-mountain` y asigna a ese nuevo elemento la clase `back-mountain`.

- **code:**

  ```html
  <body>
    <div class="left-mountain"></div>
    <!-- code -->
    <div class="back-mountain"></div>
    <!-- code -->
    <div class="penguin"></div>
    <div class="ground"></div>
  </body>
  ```

---

## Paso 20

> > Selecciona el elemento `.back-mountain` y establece su `width` y `height` en `300px`. A continuación, configura el `background` con un degradado lineal que comience en `rgb(203, 241, 228)` y termine en `rgb(47, 170, 255)`.

- **code:**

  ```css
  .back-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
  }
  ```

---

## Paso 21

> > Configura la propiedad `position` del elemento `.back-mountain` para evitar que ocupe espacio en el diseño de la página.

- **code:**

  ```css
  .back-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
    /* code */
    position: absolute;
    /* code */
  }
  ```

---

## Paso 22

> > Cambia el nivel de pila del elemento `.back-mountain` para que quede justo detrás del elemento `.left-mountain`.

- **code:**

  ```css
  .back-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
    position: absolute;
    /* code */
    z-index: 1;
    /* code */
  }
  ```

---

## Paso 23

> > Gira el elemento `.back-mountain` `45deg` en sentido horario. A continuación, asígnale una propiedad `left` de `110px` y una propiedad `top` de `225px`.

- **code:**

  ```css
  .back-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
    position: absolute;
    z-index: 1;
    /* code */
    transform: rotate(45deg);
    left: 110px;
    top: 225px;
    /* code */
  }
  ```

---

## Paso 24

> > Para terminar el fondo, agrega un sol creando un nuevo elemento `div` inmediatamente después del elemento `.back-mountain` y asígnale la clase `sun`.

- **code:**

  ```html
  <body>
    <div class="left-mountain"></div>
    <div class="back-mountain"></div>
    <!-- code -->
    <div class="sun"></div>
    <!-- code -->
    <div class="penguin"></div>
    <div class="ground"></div>
  </body>
  ```

---

## Paso 25

> > Asigna al elemento `.sun` un `width` y `height` de `200px`, y un `background-color` de `yellow`.

- **code:**

  ```css
  .sun {
    width: 200px;
    height: 200px;
    background-color: yellow;
  }
  ```

---

## Paso 26

> > Configura la propiedad `position` del sol para evitar que ocupe espacio en el diseño de la página, y establece el `border-radius` de manera que la forma del sol sea un círculo.

- **code:**

  ```css
  .sun {
    width: 200px;
    height: 200px;
    background-color: yellow;
    /* code */
    position: absolute;
    border-radius: 50%;
    /* code */
  }
  ```

---

## Paso 27

> > Coloca el sol en la esquina superior derecha de la pantalla, de modo que `75px` de sus bordes superior y derecho queden fuera de la pantalla.

- **code:**

  ```css
  .sun {
    width: 200px;
    height: 200px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    /* code */
    top: -75px;
    right: -75px;
    /* code */
  }
  ```

---

## Paso 28

Tu pingüino constará de dos secciones principales: la cabeza y el cuerpo.

> > Dentro de `.penguin`, agrega dos nuevos elementos `div`. El primero con la clase `penguin-head` y el segundo con la clase `penguin-body`.

- **code:**

  ```html
  <div class="penguin">
    <div class="penguin-head"></div>
    <div class="penguin-body"></div>
  </div>
  ```

---

## Paso 29

> > Cambia el nivel de superposición del elemento `.penguin` para que aparezca delante del elemento `.ground`, y asígnale una `position` de `relative`.

- **code:**

  ```css
  .penguin {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-top: 75px;
    /* code */
    position: relative;
    z-index: 4;
    /* code */
  }
  ```

---

## Paso 30

> > Selecciona el elemento `.penguin-head` y asígnale un `width` equivalente a la mitad del de su elemento padre, y una `height` del `45%`. A continuación, configura el `background` con un degradado lineal a `45deg`, que comience en `gray` y termine en `rgb(239, 240, 228)`.

- **code:**

  ```css
  .penguin-head {
    width: 50%;
    height: 45%;
    background: linear-gradient(45deg, gray,
    rgb(239, 240, 228));
  }
  ```

---

## Paso 31

La mayoría de los pingüinos no tienen la cabeza cuadrada.

> > Dale al pingüino una cabeza ligeramente ovalada estableciendo el radio de las esquinas superiores en un `70%` y el de las esquinas inferiores en un `65%`.

- **code:**

  ```css
  .penguin-head {
    width: 50%;
    height: 45%;
    background: linear-gradient(45deg, gray,
    rgb(239, 240, 228));
    /* code */
    border-radius: 70% 70% 65% 65%;
    /* code */
  }
  ```

---

## Paso 32

> > Selecciona el elemento `.penguin-body` y asígnale un `width` de `53%`, y un `height` de `45%`. A continuación, configura el `backgroun` con un `linear-gradient` de `45deg`, con los valores `rgb(134, 133, 133)` desde el `0%`, `rgb(234, 231, 231)` desde el `25%` y `white` desde el `67%`.

- **code:**

  ```css
  .penguin-body {
    width: 53%;
    height: 45%;
    background: linear-gradient(45deg, rgb(134, 133, 133) 0%, rgb(234, 231, 231) 25%, white 67%);
  }
  ```

---

## Paso 33

Otro dato interesante sobre los pingüinos es que no tienen el cuerpo cuadrado.

> > Utiliza la propiedad `border-radius` con los valores `80% 80% 100% 100%` para darle al pingüino un cuerpo ligeramente redondeado.

- **code:**

  ```css
  .penguin-body {
    width: 53%;
    height: 45%;
    background: linear-gradient(45deg, rgb(134, 133, 133) 0%, rgb(234, 231, 231) 25%, white 67%);
    /* code */
    border-radius: 80% 80% 100% 100%;
    /* code */
  }
  ```

---

## Paso 34

> > Selecciona todos los elementos descendientes del elemento `.penguin` y asígnales una `position` de `absolute`.

- **code:**

  ```css
  .penguin * {
    position: absolute;
  }
  ```

---

## Paso 35

> > Coloca el elemento `.penguin-head` a un `10%` de la parte superior y a un `25%` de la izquierda de su elemento padre.

- **code:**

  ```css
  .penguin-head {
    width: 50%;
    height: 45%;
    background: linear-gradient(45deg, gray,
    rgb(239, 240, 228));;
    border-radius: 70% 70% 65% 65%;
    /* code */
    top: 10%;
    left: 25%;
    /* code */
  }
  ```

---

## Paso 36

> > Coloca el elemento `.penguin-body` a un `40%` de la parte superior y a un `23.5%` de la izquierda de su elemento padre.

- **code:**

  ```css
  .penguin-body {
    width: 53%;
    height: 45%;
    background: linear-gradient(45deg, rgb(134, 133, 133) 0%, rgb(234, 231, 231) 25%, white 67%);
    border-radius: 80% 80% 100% 100%;
    /* code */
    top: 40%;
    left: 23.5%;
    /* code */
  }
  ```

---

## Paso 37

> > Cambia el nivel de superposición del elemento `.penguin-head` para que aparezca delante del elemento `.penguin-body`.

- **code:**

  ```css
  .penguin-body {
    width: 53%;
    height: 45%;
    background: linear-gradient(45deg, rgb(134, 133, 133) 0%, rgb(234, 231, 231) 25%, white 67%);
    border-radius: 80% 80% 100% 100%;
    top: 40%;
    left: 23.5%;
    /* code */
    z-index: 1;
    /* code */
  }
  ```

---

## Paso 38

> > Para añadir una cresta al cuerpo del pingüino, crea un pseudoelemento que sea el primer elemento secundario del elemento `.penguin-body`. Establece la propiedad `content` del pseudoelemento en una cadena vacía.

- **code:**

  ```css
  .penguin-body::before{
    content: "";
  }
  ```

---

## Paso 39

> > Posiciona el pseudoelemento en relación con su antecesor posicionado más cercano.

- **code:**

  ```css
  .penguin-body::before{
    content: "";
    /* code */
    position: absolute;
    /* code */
  }
  ```

---

## Paso 40

> > Asigna al pseudoelemento un `width` equivalente a la mitad del de su elemento padre, una `height` del `45%` y un `background-color` de `gray`.

- **code:**

  ```css
  .penguin-body::before{
    content: "";
    position: absolute;
    /* code */
    width: 50%;
    height: 45%;
    background-color: gray;
    /* code */
  }
  ```

---

## Paso 41

> > Coloca el pseudoelemento a un `10%` de la parte superior y a un `25%` de la izquierda de su elemento padre.

- **code:**

  ```css
  .penguin-body::before{
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
    background-color: gray;
    /* code */
    top: 10%;
    left: 25%;
    /* code */
  }
  ```

---

## Paso 42

> > Redondea la cresta asignando a las esquinas inferiores del pseudoelemento un radio del `100%`, dejando las esquinas superiores al `0%`.

- **code:**

  ```css
  .penguin-body::before{
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
    background-color: gray;
    top: 10%;
    left: 25%;
    /* code */
    border-radius: 0% 0% 100% 100%;
    /* code */
  }
  ```

---

## Paso 43

> > Aumenta la transparencia del pseudoelemento en un `30%`.

- **code:**

  ```css
  .penguin-body::before{
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
    background-color: gray;
    top: 10%;
    left: 25%;
    border-radius: 0% 0% 100% 100%;
    /* code */
    opacity: 70%;
    /* code */
  }
  ```

---

## Paso 44

> > Empieza a crear la cara del pingüino añadiendo dos elementos `div` dentro de `.penguin-head` y asignándoles a ambos la clase `face`.

- **code:**

  ```html
  <div class="penguin-head">
    <!-- code -->
    <div class="face"></div>
    <div class="face"></div>
    <!-- code -->
  </div>
  ```

---

## Paso 45

> > Asigna a los elementos `.face` un `width` del `60%`, una `height` del `70%` y un `background-color` de `white`.

- **code:**

  ```css
  .face {
    width: 60%;
    height: 70%;
    background-color: white;
  }
  ```

---

## Paso 46

> > Aplica un radio del `70%` a las esquinas superiores de los elementos `.face` y un radio del `60%` a las esquinas inferiores.

- **code:**

  ```css
  .face {
    width: 60%;
    height: 70%;
    background-color: white;
    /* code */
    border-radius: 70% 70% 60% 60%;
    /* code */
  }
  ```

---

## Paso 47

> > Coloca los elementos `.face` de manera que queden a un `15%` de la parte superior.

- **code:**

  ```css
  .face {
    width: 60%;
    height: 70%;
    background-color: white;
    border-radius: 70% 70% 60% 60%;
    /* code */
    top: 15%;
    /* code */
  }
  ```

---

## Paso 48

Actualmente, los dos elementos `.face` están superpuestos.

> > Soluciona esto añadiendo la clase `left` al primer elemento `.face` y la clase `right` al segundo elemento `.face`.

- **code:**

  ```html
  <div class="penguin-head">
    <!-- code -->
    <div class="face left"></div>
    <div class="face right"></div>
    <!-- code -->
  </div>
  ```

---

## Paso 49

> > Selecciona el elemento `.face` con la clase `left` y colócalo un `5%` a la izquierda de su elemento padre.

- **code:**

  ```css
  .face.left {
    left: 5%;
  }
  ```

---

## Paso 50

> > Selecciona el elemento `.face` con la clase `right` y colócalo un `5%` a la derecha de su elemento padre.

- **code:**

  ```css
  .face.left {
    left: 5%;
  }
  /* code */
  .face.right {
    right: 5%;
  }
  /* code */
  ```

---

## Paso 51

> > Debajo del elemento `.face.right`, agrega un elemento `div` con la clase `chin`.

- **code:**

  ```html
  <div class="penguin-head">
    <div class="face left"></div>
    <div class="face right"></div>
    <!-- code -->
    <div class="chin"></div>
    <!-- code -->
  </div>
  ```

---

## Paso 52

> > Selecciona el elemento `.chin` y asígnale un `width` del `90%`, una `height` del `70%` y un `background-color` de `white`.

- **code:**

  ```css
  .chin {
    width: 90%;
    height: 70%;
    background-color: white;
  }
  ```

---

## Paso 53

> > Coloca el elemento `.chin` de manera que quede a un `25%` de la parte superior y a un `5%` de la izquierda de su elemento padre. A continuación, aplica un radio de `70%` a las esquinas superiores y un radio de `100%` a las esquinas inferiores.

- **code:**

  ```css
  .chin {
    width: 90%;
    height: 70%;
    background-color: white;
    /* code */
    top: 25%;
    left: 5%;
    border-radius: 70% 70% 100% 100%;
    /* code */
  }
  ```

---

## Paso 54

Hasta ahora, los elementos `.face` y `.chin` tienen el mismo color de fondo.

> > Crea una propiedad CSS personalizada llamada `--penguin-face` y asígnale el color `white`.

- **code:**

  ```css
  :root{
    --penguin-face: white;
  }
  ```

---

## Paso 55

>> Cuando sea necesario, reemplaza los valores de las propiedades por tu variable `--penguin-face`.

- **code:**

  ```css
  .face {
    width: 60%;
    height: 70%;
    /* code */
    background-color: var(--penguin-face);
    /* code */
    border-radius: 70% 70% 60% 60%;
    top: 15%;
  }
  
  .face.left {
    left: 5%;
  }
  
  .face.right {
    right: 5%;
  }
  
  .chin {
    width: 90%;
    height: 70%;
    /* code */
    background-color: var(--penguin-face);
    /* code */
    top: 25%;
    left: 5%;
    border-radius: 70% 70% 100% 100%;
  }
  ```

---

## Paso 56

> > Debajo del elemento `.chin`, agrega dos elementos `div`, cada uno con la clase `eye`. Además, asigna al primer elemento `.eye` la clase `left` y al segundo elemento `.eye` la clase `right`.

- **code:**

  ```html
  <div class="penguin-head">
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="chin"></div>
    <!-- code -->
    <div class="eye left"></div>
    <div class="eye right"></div>
    <!-- code -->
  </div>
  ```

---

## Paso 57

> > Selecciona los elementos `.eye` y asígnales un `width` del `15%`, una `height` del `17%` y un `background-color` de `black`.

- **code:**

  ```css
  .eye {
    width: 15%;
    height: 17%;
    background-color: black;
  }
  ```

---

## Paso 58

> > Coloca los elementos `.eye` a un `45%` de la parte superior de su elemento padre y aplica un radio de `50%` a todas las esquinas.

- **code:**

  ```css
  .eye {
    width: 15%;
    height: 17%;
    background-color: black;
    /* code */
    top: 45%;
    border-radius: 50%;
    /* code */
  }
  ```

---

## Paso 59

> > Selecciona el elemento `.eye` con la clase `left` y colócalo al `25%` de la izquierda de su elemento padre. A continuación, selecciona el elemento `.eye` con la clase `right` y colócalo al `25%` de la derecha de su elemento padre.

- **code:**

  ```css
  .eye.left {
    left: 25%;
  }
  
  .eye.right {
    right: 25%;
  }
  ```

---

## Paso 60

> > Dentro de cada elemento `.eye`, agrega un `div` con la clase `eye-lid`.

- **code:**

  ```html
  <div class="penguin-head">
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="chin"></div>
    <div class="eye left">
      <!-- code -->
      <div class="eye-lid"></div>
      <!-- code -->
    </div>
    <div class="eye right">
      <!-- code -->
      <div class="eye-lid"></div>
      <!-- code -->
    </div>
  </div>
  ```

---

## Paso 61

> > Selecciona los elementos `.eye-lid` y asígnales un `width` del `150%`, una `height` del `100%` y un `background-color` de `--penguin-face`.

- **code:**

  ```css
  .eye-lid {
    width: 150%;
    height: 100%;
    background-color: var(--penguin-face);
  }
  ```

---

## Paso 62

> > Coloca los elementos `.eye-lid` a un `25%` de la parte superior y a `-23%` de la izquierda de sus elementos padres. A continuación, aplica un radio de `50%` a todas las esquinas.

- **code:**

  ```css
  .eye-lid {
    width: 150%;
    height: 100%;
    background-color: var(--penguin-face);
    /* code */
    top: 25%;
    left: -23%;
    border-radius: 50%;
    /* code */
  }
  ```

---

## Paso 63

> > Debajo del elemento `.eye.right`, agrega dos elementos `div`, cada uno con la clase `blush`. Además, asigna al primer elemento `.blush` la clase `left` y al segundo elemento `.blush` la clase `right`.

- **code:**

  ```html
  <div class="penguin-head">
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="chin"></div>
    <div class="eye left">
      <div class="eye-lid"></div>
    </div>
    <div class="eye right">
      <div class="eye-lid"></div>
    </div>
    <!-- code -->
    <div class="blush left"></div>
    <div class="blush right"></div>
    <!-- code -->
  </div>
  ```

---

## Paso 64

> > Selecciona los elementos `.blush` y asígnales un `width` del `15%`, una `height` del `10%` y un `background-color` de `pink`.

- **code:**

  ```css
  .blush {
    width: 15%;
    height: 10%;
    background-color: pink;
  }
  ```

---

## Paso 65

> > Coloca los elementos `.blush` a una distancia del `65%` desde la parte superior de su elemento padre y aplica un radio de `50%` a todas las esquinas.

- **code:**

  ```css
  .blush {
    width: 15%;
    height: 10%;
    background-color: pink;
    /* code */
    top: 65%;
    border-radius: 50%;
    /* code */
  }
  ```

---

## Paso 66

> > Selecciona el elemento `.blush` con la clase `left` y colócalo un `15%` a la izquierda de su elemento padre. A continuación, selecciona el elemento `.blush` con la clase `right` y colócalo un `15%` a la derecha de su elemento padre.

- **code:**

  ```css
  .blush.left {
    left: 15%;
  }
  
  .blush.right {
    right: 15%;
  }
  ```

---

## Paso 67

> > Debajo del elemento `.blush.right`, agrega dos elementos `div`, cada uno con la clase `beak`. Además, asigna al primer elemento `.beak` la clase `top` y al segundo elemento `.beak` la clase `bottom`.

- **code:**

  ```html
  <div class="penguin-head">
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="chin"></div>
    <div class="eye left">
      <div class="eye-lid"></div>
    </div>
    <div class="eye right">
      <div class="eye-lid"></div>
    </div>
    <div class="blush left"></div>
    <div class="blush right"></div>
    <!-- code -->
    <div class="beak top"></div>
    <div class="beak bottom"></div>
    <!-- code -->
  </div>
  ```

---

## Paso 68

> > Selecciona los elementos `.beak` y asígnales una `height` del `10%`, un `bacground-color` de `orange` y un radio de `50%` en todas las esquinas.

- **code:**

  ```css
  .beak {
    height: 10%;
    background-color: orange;
    border-radius: 50%;
  }
  ```

---

## Paso 69

> > Selecciona el elemento `.beak` con la clase `top`, asígnale un `width` del `20%` y colócalo a un `60%` de la parte superior y a un `40%` de la izquierda de su elemento padre.

- **code:**

  ```css
  .beak.top {
    width: 20%;
    top: 60%;
    left: 40%;
  }
  ```

---

## Paso 70

> > Selecciona el elemento `.beak` con la clase `bottom` y asígnale un `width` un `4%` menor que el de `.beak.top`, un `5%` más alejado de la parte superior y un `2%` más alejado de la izquierda de su elemento padre que `.beak.top`.

- **code:**

  ```css
  .beak.bottom {
    width: 16%;
    top: 65%;
    left: 42%;
  }
  ```

---

## Paso 71

> > El cuerpo del pingüino se ve un poco soso. Dale un toque de estilo añadiendo un elemento `div` con la clase `shirt`, justo antes del elemento `.penguin-body`.

- **code:**

  ```html
  <div class="penguin">
    <div class="penguin-head">
      <div class="face left"></div>
      <div class="face right"></div>
      <div class="chin"></div>
      <div class="eye left">...
      </div>
      <div class="eye right">...
      </div>
      <div class="blush left"></div>
      <div class="blush right"></div>
      <div class="beak top"></div>
      <div class="beak bottom"></div>
    </div>
    <!-- code -->
    <div class="shirt"></div>
    <!-- code -->
    <div class="penguin-body"></div>
  </div>
  ```

---

## Paso 72

> > Dentro del elemento `.shirt`, agrega un `div` con el siguiente emoji como contenido: 💜

- **code:**

  ```html
  <div class="penguin">
    <div class="penguin-head">
      <div class="face left"></div>
      <div class="face right"></div>
      <div class="chin"></div>
      <div class="eye left">...
      </div>
      <div class="eye right">...
      </div>
      <div class="blush left"></div>
      <div class="blush right"></div>
      <div class="beak top"></div>
      <div class="beak bottom"></div>
    </div>
    <div class="shirt">
      <!-- code -->
      <div>💜</div>
      <!-- code -->
    </div>
    <div class="penguin-body"></div>
  </div>
  ```

---

## Paso 73

> > Dentro de `.shirt`, después del elemento `div`, agrega un elemento `p` con el siguiente contenido: `I CSS`

- **code:**

  ```html
  <div class="penguin">
    <div class="penguin-head">
      <div class="face left"></div>
      <div class="face right"></div>
      <div class="chin"></div>
      <div class="eye left">...
      </div>
      <div class="eye right">...
      </div>
      <div class="blush left"></div>
      <div class="blush right"></div>
      <div class="beak top"></div>
      <div class="beak bottom"></div>
    </div>
    <div class="shirt">
      <div>💜</div>
      <!-- code -->
      <p>I CSS</p>
      <!-- code -->
    </div>
    <div class="penguin-body"></div>
  </div>
  ```

---

## Paso 74

> > Selecciona el elemento `.shirt` y establece su `font-zise` en `25px`, la `font-family` en `Helvetica` con una alternativa de `sans-serif`, y el `font-weight` en `bold`.

- **code:**

  ```css
  .shirt {
    font: bold 25px Helvetica, sans-serif;
  }
  ```

---

## Paso 75

En algunos navegadores, el emoji del corazón puede verse ligeramente diferente al del paso anterior. Esto se debe a que algunas de las propiedades del carácter fueron anuladas por el estilo `font-weight: bold`.

> > Para solucionarlo, selecciona el elemento `div` que contiene el emoji del corazón y establece su propiedad `font-weight` en su valor original.

- **code:**

  ```css
  .shirt {
    font: bold 25px Helvetica, sans-serif;
  }
  /* code */
  .shirt div {
    font-weight: normal;
  }
  /* code */
  ```

---

## Paso 76

> > Coloca el elemento `div` con el emoji del corazón a `22.5px` de la parte superior y a `12px` de la izquierda de su elemento padre.

- **code:**

  ```css
  .shirt {
    font: bold 25px Helvetica, sans-serif;
  }
  .shirt div {
    font-weight: normal;
    /* code */
    top: 22.5px;
    left: 12px;
    /* code */
  }
  ```

---

## Paso 77

> > Coloca el elemento `.shirt` a `165px` de la parte superior y a `127.5px` de la izquierda de su elemento padre. A continuación, aumenta su orden de superposición para que aparezca por encima del elemento `.penguin-body`.

- **code:**

  ```css
  .shirt {
    font: bold 25px Helvetica, sans-serif;
    top: 165px;
    /* code */
    left: 127.5px;
    z-index: 1;
    /* code */
  }
  .shirt div {
    font-weight: normal;
    top: 22.5px;
    left: 12px;
  }
  ```

---

## Paso 78

> > Para dar el toque final a la camiseta, establece el `color` en `#6a6969`.

- **code:**

  ```css
  .shirt {
    font: bold 25px Helvetica, sans-serif;
    top: 165px;
    left: 127.5px;
    z-index: 1;
    /* code */
    color: #6a6969;
    /* code */
  }
  .shirt div {
    font-weight: normal;
    top: 22.5px;
    left: 12px;
  }
  ```

---

## Paso 79

Dato curioso: los pingüinos no pueden mantenerse de pie sin al menos dos patas.

> > Dentro del elemento `.penguin-body`, agrega dos elementos `div`, cada uno con la clase `foot`. Asigna al primer `.foot` la clase `left` y al segundo `.foot` la clase `right`.

- **code:**

  ```html
  <div class="penguin-body">
    <div class="foot left"></div>
    <div class="foot right"></div>
  </div>
  ```

---

## Paso 80

> > Selecciona los elementos `.foot` y asígnales un `width` del `15%`, una ``height` del `30%` y un `background-color` de `orange`.

- **code:**

  ```css
  .foot {
    width: 15%;
    height: 30%;
    background-color: orange;
  }
  ```

---

## Paso 81

> > Coloca los elementos `.foot` al `85%` de la altura de su elemento padre y aplica un radio de `50%` a todas las esquinas.

- **code:**

  ```css
  .foot {
    width: 15%;
    height: 30%;
    background-color: orange;
    /* code */
    top: 85%;
    border-radius: 50%;
    /* code */
  }
  ```

---

## Paso 82

El pico y las patas del pingüino son del mismo color.

> > Crea una nueva variable CSS personalizada llamada `--penguin-picorna` y sustituye por ella todos los valores de las propiedades correspondientes.

- **code:**

  ```css
  :root {
    --penguin-face: white;
    --penguin-picorna: orange;
  }
  
  body {
    background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
    position: absolute;
    transform: skew(0deg, 44deg);
    z-index: 2;
    margin-top: 100px;
  }
  
  .back-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
    position: absolute;
    z-index: 1;
    transform: rotate(45deg);
    left: 110px;
    top: 225px;
  }
  
  .sun {
    width: 200px;
    height: 200px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    top: -75px;
    right: -75px;
  }
  
  .penguin {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-top: 75px;
    z-index: 4;
    position: relative;
  }
  
  .penguin * {
    position: absolute;
  }
  
  .penguin-head {
    width: 50%;
    height: 45%;
    background: linear-gradient(
      45deg,
      gray,
      rgb(239, 240, 228)
    );
    border-radius: 70% 70% 65% 65%;
    top: 10%;
    left: 25%;
    z-index: 1;
  }
  
  .face {
    width: 60%;
    height: 70%;
    background-color: var(--penguin-face);
    border-radius: 70% 70% 60% 60%;
    top: 15%;
  }
  
  .face.left {
    left: 5%;
  }
  
  .face.right {
    right: 5%;
  }
  
  .chin {
    width: 90%;
    height: 70%;
    background-color: var(--penguin-face);
    top: 25%;
    left: 5%;
    border-radius: 70% 70% 100% 100%;
  }
  
  .eye {
    width: 15%;
    height: 17%;
    background-color: black;
    top: 45%;
    border-radius: 50%;
  }
  
  .eye.left {
    left: 25%;
  }
  
  .eye.right {
    right: 25%;
  }
  
  .eye-lid {
    width: 150%;
    height: 100%;
    background-color: var(--penguin-face);
    top: 25%;
    left: -23%;
    border-radius: 50%;
  }
  
  .blush {
    width: 15%;
    height: 10%;
    background-color: pink;
    top: 65%;
    border-radius: 50%;
  }
  
  .blush.left {
    left: 15%;
  }
  
  .blush.right {
    right: 15%;
  }
  
  .beak {
    height: 10%;
    /* code */
    background-color: var(--penguin-picorna);
    /* code */
    border-radius: 50%;
  }
  
  .beak.top {
    width: 20%;
    top: 60%;
    left: 40%;
  }
  
  .beak.bottom {
    width: 16%;
    top: 65%;
    left: 42%;
  }
  
  .shirt {
    font: bold 25px Helvetica, sans-serif;
    top: 165px;
    left: 127.5px;
    z-index: 1;
    color: #6a6969;
  }
  
  .shirt div {
    font-weight:  initial;
    top: 22.5px;
    left: 12px;
  }
  
  .penguin-body {
    width: 53%;
    height: 45%;
    background: linear-gradient(
      45deg,
      rgb(134, 133, 133) 0%,
      rgb(234, 231, 231) 25%,
      white 67%
    );
    border-radius: 80% 80% 100% 100%;
    top: 40%;
    left: 23.5%;
  }
  
  .penguin-body::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
    background-color: gray;
    top: 10%;
    left: 25%;
    border-radius: 0% 0% 100% 100%;
    opacity: 70%;
  }
  
  .foot {
    width:  15%;
    height: 30%;
    /* code */
    background-color: var(--penguin-picorna);
    /* code */
    top: 85%;
    border-radius: 50%;
  }
  ```

---

## Paso 83

> > Selecciona el elemento `.foot` con la clase `left` y colócalo un `25%` a la izquierda de su elemento padre. A continuación, selecciona el elemento `.foot` con la clase `right` y colócalo un `25%` a la derecha de su elemento padre.

- **code:**

  ```css
  .foot.left {
    left: 25%;
  }
  
  .foot.right {
    right: 25%;
  }
  ```

---

## Paso 84

> > Para que las patas del pingüino tengan un aspecto más propio de un pingüino, gira la pata izquierda `80deg` y la derecha `-80deg`.

- **code:**

  ```css
  .foot.left {
    left: 25%;
    /* code */
    rotate: 80deg;
    /* code */
  }
  
  .foot.right {
    right: 25%;
    /* code */
    rotate: -80deg;
    /* code */
  }
  ```

---

## Paso 85

> > Cambia el orden de superposición de los elementos `.foot` para que aparezcan debajo del elemento `.penguin-body`.

- **code:**

  ```css
  .foot {
    width: 15%;
    height: 30%;
    background-color: var(--penguin-picorna);
    top: 85%;
    border-radius: 50%;
    /* code */
    z-index: -1;
    /* code */
  }
  ```

---

## Paso 86

Dato curioso: los pingüinos no pueden volar sin alas.

> > Dentro de `.penguin-body`, antes de los elementos `.foot`, agrega dos elementos `div`, cada uno con la clase `arm`. Asigna al primer `.arm` la clase `left` y al segundo `.arm` la clase `right`.

- **code:**

  ```html
  <div class="penguin-body">
    <!-- code -->
    <div class="arm left"></div>
    <div class="arm right"></div>
    <!-- code -->
    <div class="foot left"></div>
    <div class="foot right"></div>
  </div>
  ```

---

## Paso 87

> > Selecciona los elementos `.arm` y asígnales un `width` del `30%`, una `height` del `60%` y un `background` con un degradado lineal de `90deg` en el sentido de las agujas del reloj, que comience en `gray` y termine en `rgb(209, 210, 199)`.

- **code:**

  ```css
  .arm {
    width: 30%;
    height: 60%;
    background: linear-gradient(90deg, gray, rgb(209, 210, 199));
  }
  ```

---

## Paso 88

> > Crea una variable CSS personalizada llamada `--penguin-skin` y asígnale el valor `gray`. A continuación, sustituye todos los valores de las propiedades pertinentes por ese valor.

- **code:**

  ```css
  :root {
    --penguin-face: white;
    --penguin-picorna: orange;
    --penguin-skin: gray;
  }
  
  body {
    background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
    position: absolute;
    transform: skew(0deg, 44deg);
    z-index: 2;
    margin-top: 100px;
  }
  
  .back-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
    position: absolute;
    z-index: 1;
    transform: rotate(45deg);
    left: 110px;
    top: 225px;
  }
  
  .sun {
    width: 200px;
    height: 200px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    top: -75px;
    right: -75px;
  }
  
  .penguin {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-top: 75px;
    z-index: 4;
    position: relative;
  }
  
  .penguin * {
    position: absolute;
  }
  
  .penguin-head {
    width: 50%;
    height: 45%;
    background: linear-gradient(
      45deg,
      /* code */
      var(--penguin-skin),
      /* code */
      rgb(239, 240, 228)
    );
    border-radius: 70% 70% 65% 65%;
    top: 10%;
    left: 25%;
    z-index: 1;
  }
  
  .face {
    width: 60%;
    height: 70%;
    background-color: var(--penguin-face);
    border-radius: 70% 70% 60% 60%;
    top: 15%;
  }
  
  .face.left {
    left: 5%;
  }
  
  .face.right {
    right: 5%;
  }
  
  .chin {
    width: 90%;
    height: 70%;
    background-color: var(--penguin-face);
    top: 25%;
    left: 5%;
    border-radius: 70% 70% 100% 100%;
  }
  
  .eye {
    width: 15%;
    height: 17%;
    background-color: black;
    top: 45%;
    border-radius: 50%;
  }
  
  .eye.left {
    left: 25%;
  }
  
  .eye.right {
    right: 25%;
  }
  
  .eye-lid {
    width: 150%;
    height: 100%;
    background-color: var(--penguin-face);
    top: 25%;
    left: -23%;
    border-radius: 50%;
  }
  
  .blush {
    width: 15%;
    height: 10%;
    background-color: pink;
    top: 65%;
    border-radius: 50%;
  }
  
  .blush.left {
    left: 15%;
  }
  
  .blush.right {
    right: 15%;
  }
  
  .beak {
    height: 10%;
    background-color: var(--penguin-picorna);
    border-radius: 50%;
  }
  
  .beak.top {
    width: 20%;
    top: 60%;
    left: 40%;
  }
  
  .beak.bottom {
    width: 16%;
    top: 65%;
    left: 42%;
  }
  
  .shirt {
    font: bold 25px Helvetica, sans-serif;
    top: 165px;
    left: 127.5px;
    z-index: 1;
    color: #6a6969;
  }
  
  .shirt div {
    font-weight:  initial;
    top: 22.5px;
    left: 12px;
  }
  
  .penguin-body {
    width: 53%;
    height: 45%;
    background: linear-gradient(
      45deg,
      rgb(134, 133, 133) 0%,
      rgb(234, 231, 231) 25%,
      white 67%
    );
    border-radius: 80% 80% 100% 100%;
    top: 40%;
    left: 23.5%;
  }
  
  .penguin-body::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
      /* code */
    background-color: var(--penguin-skin);
      /* code */
    top: 10%;
    left: 25%;
    border-radius: 0% 0% 100% 100%;
    opacity: 70%;
  }
  
  .arm {
    width: 30%;
    height: 60%;
    background: linear-gradient(
      90deg,
      /* code */
      var(--penguin-skin),
      /* code */
      rgb(209, 210, 199)
    );
  }
  ```

---

## Paso 89

> > Selecciona el elemento `.arm` con la clase `left` y colócalo al `35%` de la parte superior y al `5%` de la izquierda de su elemento padre. A continuación, selecciona el elemento `.arm` con la clase `right` y colócalo al `0%` de la parte superior y al `-5%` de la derecha de su elemento padre.

- **code:**

  ```css
  .arm.left {
    top: 35%;
    left: 5%;
  }
  
  .arm.right {
    top: 0%;
    right: -5%;
  }
  ```

---

## Paso 90

> > Dentro del selector `.arm.left`, cambia el origen de la función de `transform` para que sea la esquina superior izquierda de su elemento padre.

- **code:**

  ```css
  .arm.left {
    top: 35%;
    left: 5%;
    /* code */
    transform-origin: top left; 
    /* code */
  }
  
  .arm.right {
    top: 0%;
    right: -5%;
  }
  ```

---

## Paso 91

> > Para mantener el degradado lineal en el lado correcto del brazo izquierdo del pingüino, primero gíralo `130deg` y, a continuación, invierte el eje X.

- **code:**

  ```css
  .arm.left {
    top: 35%;
    left: 5%;
    transform-origin: top left;
    /* code */
    transform: rotate(130deg) scaleX(-1);
    /* code */
  }
  
  .arm.right {
    top: 0%;
    right: -5%;
  }
  ```

---

## Paso 92

> > Gira el brazo derecho `45deg` en sentido antihorario.

- **code:**

  ```css
  .arm.right {
    top: 0%;
    right: -5%;
    /* code */
    transform: rotate(-45deg);
    /* code */
  }
  ```

---

## Paso 93

Dato curioso: la mayoría de las aletas, si no todas, no tienen forma rectangular de forma natural.

> > Aplica un radio del `30%` a las esquinas superior izquierda, superior derecha e inferior derecha de los elementos `.arm`, y un radio del `120%` a la esquina inferior izquierda.

- **code:**

  ```css
  .arm {
    width: 30%;
    height: 60%;
    background: linear-gradient(90deg, var(--penguin-skin), rgb(209, 210, 199));
    /* code */
    border-radius: 30% 30% 30% 120%;
    /* code */
  }
  ```

---

## Paso 94

> > Cambia el orden de superposición de los elementos `.arm` para que aparezcan detrás del elemento `.penguin-body`.

- **code:**

  ```css
  .arm {
    width: 30%;
    height: 60%;
    background: linear-gradient(90deg, var(--penguin-skin), rgb(209, 210, 199));
    border-radius: 30% 30% 30% 120%;
    /* code */
    z-index: -1;
    /* code */
  }
  ```

---

## Paso 95

Ahora vas a utilizar animaciones CSS para hacer que el pingüino salude con la mano.

> > Define un nuevo `@keyframes` llamado `wave`.

- **code:**

  ```css
  @keyframes wave {
    
  }
  ```

---

## Paso 96

> > Establece cuatro puntos de referencia para la `wave`, comenzando en el `10%` y con incrementos del `10%`.

- **code:**

  ```css
  @keyframes wave {
    10% {}
    20% {}
    30% {}
    40% {}
  }
  ```

---

## Paso 97

> > Dentro del primer punto de referencia, gira `110deg` y mantén la escala del brazo izquierdo.

- **code:**

  ```css
  @keyframes wave {
    10% {
      /* code */
      transform: rotate(110deg) scaleX(-1);
      /* code */
    }
    20% {}
    30% {}
    40% {}
  }
  ```

---

## Paso 98

> > En el segundo punto de referencia, gira `130deg` y mantén la escala del brazo izquierdo.

- **code:**

  ```css
  @keyframes wave {
    10% {
      transform: rotate(110deg) scaleX(-1);
    }
    20% {
      /* code */
      transform: rotate(130deg) scaleX(-1);
      /* code */
    }
    30% {}
    40% {}
  }
  ```

---

## Paso 99

> > Para el tercer y cuarto punto de referencia, repita el patrón de `transform` una vez más.

- **code:**

  ```css
  @keyframes wave {
    10% {
      transform: rotate(110deg) scaleX(-1);
    }
    20% {
      transform: rotate(130deg) scaleX(-1);
    }
    30% {
      /* code */
      transform: rotate(110deg) scaleX(-1);
      /* code */
    }
    40% {
      /* code */
      transform: rotate(130deg) scaleX(-1);
      /* code */
    }
  }
  ```

---

## Paso 100

> > Aplica la animación de `wave` al brazo izquierdo. Haz que la animación dure `3s`, se repita infinitamente y tenga una función de temporización lineal.

- **code:**

  ```css
  .arm.left {
    top: 35%;
    left: 5%;
    transform-origin: top left;
    transform: rotate(130deg) scaleX(-1);
    /* code */
    animation: wave 3s infinite linear;
    /* code */
  }
  ```

---

## Lección 101

> > Selecciona el elemento `.penguin` cuando esté activo y aumenta su tamaño en un `50%` en ambas dimensiones.

- **code:**

  ```css
  .penguin:active {
    transform: scale(1.5);
  }
  ```

---

## Paso 102

Cuando activas el elemento `.penguin`, puede parecer que se puede arrastrar. No es así.

> > Deja esto claro a los usuarios estableciendo la propiedad `cursor` del elemento activo en `not-allowed`.

- **code:**

  ```css
  .penguin:active {
    transform: scale(1.5);
    /* code */
    cursor: not-allowed;
    /* code */
  }
  ```

---

## Paso 103

> > Modifica el comportamiento de la `transition` del elemento `.penguin` durante la transformación para que tenga una duración de `1s`, una función de tiempo `ease-in-out` y un retraso de `0ms`.

- **code:**

  ```css
  .penguin {
    width: 300px;
    height: 300px;
    margin: auto;
    margin-top: 75px;
    z-index: 4;
    position: relative;
    /* code */
    transition: transform 1s ease-in-out 0ms;
    /* code */
  }
  ```

---

## Paso 104

> > Por último, calcula la altura del elemento `.ground` restando la altura del elemento `.penguin` de la altura de la ventana gráfica.

- **code:**

  ```css
  .ground {
    width: 100vw;
    /* code */
    height: calc(100vh - 300px);
    /* code */
    background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
    z-index: 3;
    position: absolute;
    margin-top: -58px;
  }
  ```

---

**¡Felicidades! Has completado el taller de Flappy Penguin.**
