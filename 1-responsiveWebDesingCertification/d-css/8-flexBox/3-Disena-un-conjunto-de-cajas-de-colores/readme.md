# Diseña un conjunto de cajas de colores

En este desafío, tu tarea es diseñar un conjunto de cajas de colores utilizando Flexbox. Las cajas deben estar organizadas en una fila y cada caja debe tener un color diferente. Además, las cajas deben ser del mismo tamaño y deben ocupar todo el ancho disponible.

---

## Paso 1

> Para empezar, dentro del elemento `body`, añade un elemento `header`. Anida un elemento `h1` dentro del elemento header con el texto `Colored Boxes Layout`.

- **Codigo**

  ```html
    <header>
      <h1>Colored Boxes Layout</h1>
    </header>
  ```

## Paso 2

Ahora vincule su archivo styles.css al documento HTML.

- **Codigo**

  ```html
    <link rel="stylesheet" href="./styles.css">
  ```

## Paso 3

> Ahora es el momento de añadir algunas reglas CSS al archivo `styles.css`. Comience creando un selector para el elemento `h1`.
>
> Centre el contenido del elemento `h1` estableciendo su propiedad `text-align` en `center`. Cree también una propiedad `margin-bottom` con el valor `10px` para añadir un margen entre la parte inferior del elemento `h1` y cualquier elemento HTML que se encuentre debajo.

- **Codigo**

  ```css
    h1 {
      text-align: center;
      margin-bottom: 10px;
    }
  ```

## Paso 4

> Ahora agrega un elemento `div` con la clase `flex-container` debajo de tu encabezado. A continuación, crea seis elementos `div` con la clase `box` dentro del `div` que acabas de crear.

Recuerda que el atributo class se utiliza a menudo para hacer referencia a un nombre de clase en una hoja de estilos. En este caso, todos los elementos `div` tendrán el mismo estilo según la definición de estilo .flex-container y `.box`.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  ```

## Paso 5

> Dentro de cada elemento `.box`, agrega un elemento `h2` con el texto `Box` seguido de un espacio y un número secuencial que comience por `1`.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box">
        <h2>Box 1</h2>
      </div>
      <div class="box">
        <h2>Box 2</h2>
      </div>
      <div class="box">
        <h2>Box 3</h2>
      </div>
      <div class="box">
        <h2>Box 4</h2>
      </div>
      <div class="box">
        <h2>Box 5</h2>
      </div>
      <div class="box">
        <h2>Box 6</h2>
      </div>
    </div>
  ```

## Paso 6

> Ahora es el momento de crear el nombre del color para los recuadros. Para ello, añade un elemento `p` debajo de cada elemento `h2` con estos nombres de colores en orden: `Red`, `Orange`, `Yellow`, `Green`, `Blue`, y `Indigo`. Un color para cada recuadro.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box">
        <h2>Box 1</h2>
        <p>Red</p>
      </div>
      <div class="box">
        <h2>Box 2</h2>
        <p>Orange</p>
      </div>
      <div class="box">
        <h2>Box 3</h2>
        <p>Yellow</p>
      </div>
      <div class="box">
        <h2>Box 4</h2>
        <p>Green</p>
      </div>
      <div class="box">
        <h2>Box 5</h2>
        <p>Blue</p>
      </div>
      <div class="box">
        <h2>Box 6</h2>
        <p>Indigo</p>
      </div>
    </div>
  ```

## Paso 7

Ahora vas a aplicar estilo a los elementos `div` con la clase `box`. Primero crea un selector de clase `.box` y añade la propiedad `max-height` con el valor `120px` al selector de clase `box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
  }
  ```

## Paso 8

> Sin salir del selector `.box`, agrega la propiedad `color` con el valor `#000`. Esto hará que todo el texto de los elementos `.box` tenga el color `#000`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
  }
  ```

## Paso 9

> Agrega la propiedad `border` con el valor `1px solid #000` al selector `.box`. La propiedad `border` se utiliza para crear un contorno visible alrededor de un elemento. Se puede personalizar en términos de `border-width`, `border-style` y `border-color`.

En este caso, `1px` es el `border-width`, que define el grosor del mismo. `Solid` es el `border-style` y establece su apariencia (solid, dashed, dotted, etc.). Y `#000` es el `border-colo`, que define su color.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    /* code */
    border: 1px solid #000;
    /* code */
  }
  ```

## Paso 10

La propiedad `display` controla cómo se representa un elemento en la página. Cuando se define con el valor `flex`, se habilita el modo de diseño flexbox, que permite controlar la disposición y alineación de los elementos dentro del contenedor.

> Ahora agrega la propiedad `display` con el valor `flex` al selector `.box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    /* code */
    display: flex;
    /* code */
  }
  ```

## Paso 11

La propiedad `flex` controla el tamaño y el comportamiento de los elementos dentro de un contenedor flexible. Se compone de tres propiedades: `flex-grow`, `flex-shrink` y `flex-basis`.

> Ahora agrega la propiedad `flex` con el valor `1 1 100px` al selector `.box`. Esto hará que cada cuadro comience en `100px`, lo que les permitirá crecer para llenar el espacio disponible o reducirse cuando sea necesario.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    /* code */
    flex: 1 1 100px;
    /* code */
  }
  ```

## Paso 12

La propiedad `flex-direction` controla cómo se organizan los elementos flexibles dentro de su contenedor. El valor predeterminado es `row`, que organiza los elementos horizontalmente de izquierda a derecha. Esta propiedad solo funciona en elementos con `display: flex` o `display: inline-flex`.

Con el valor `column`, los elementos se apilan verticalmente de arriba abajo. Otros valores posibles son `row`, `row-reverse` y `column-reverse`.

> Ahora agrega la propiedad `flex-direction` con el valor `column` al selector `.box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    /* code */
    flex-direction: column;
    /* code */
  }
  ```

## Paso 13

La propiedad `align-items` alinea los elementos flexibles a lo largo del eje transversal (perpendicular al eje principal).

> Ahora agrega la propiedad `align-items` con el valor `center` al selector `.box`. Dado que la clase `box` tiene `flex-direction: column`, el eje transversal es horizontal, por lo que `center` centrará los elementos horizontalmente dentro del cuadro.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    flex-direction: column;
    /* code */
    align-items: center;
    /* code */
  }
  ```

## Paso 14

> Ahora agrega la propiedad `margin` con el valor `10px` al selector `.box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    flex-direction: column;
    align-items: center;
    /* code */
    margin: 10px;
    /* code */
  }
  ```

## Paso 15

La propiedad `font-weight` controla el grosor de la fuente.

> Ahora agrega la propiedad `font-weight` con un valor `bold` al selector `.box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    /* code */
    font-weight: bold;
    /* code */
  }
  ```

## Paso 16

> Agrega la propiedad `font-size` con el valor `1.125rem` al selector `.box`.

La propiedad `font-size` especifica el tamaño del texto. Se puede establecer utilizando diferentes unidades, como píxeles, em, rem, porcentajes, etc., lo que la hace flexible para diseños adaptables.

En este caso, el valor utiliza unidades `rem`, que son relativas al elemento `html` raíz, no al elemento padre. Esto significa que el tamaño de la fuente se mantiene constante y no se ve afectado por los tamaños de los elementos padres, lo que lo hace más predecible para los diseños.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    /* code */
    font-size: 1.125rem;
    /* code */
  }
  ```

## Paso 17

La propiedad `border-radius` redondea las esquinas del borde de un elemento. Puedes especificar:

- Un valor para aplicar a las cuatro esquinas.

- Dos valores, el primero para la esquina superior izquierda/inferior derecha y el segundo para la esquina superior derecha/inferior izquierda.

- Tres valores, correspondientes a la esquina superior izquierda, superior derecha/inferior izquierda e inferior derecha.

- Cuatro valores, que establecen el radio del borde en el sentido de las agujas del reloj a partir de la esquina superior izquierda.

> Ahora agregue la propiedad `border-radius` con el valor `5px` al selector `.box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 1.125rem;
    /* code */
    border-radius: 5px;
    /* code */
  }
  ```

## Paso 18

La propiedad `order` especifica el orden de un elemento flexible en relación con otros elementos flexibles dentro del mismo contenedor. De forma predeterminada, todos los elementos flexibles tienen un valor de `orden` `0`, lo que significa que aparecen en el orden en que están escritos en el HTML. Los elementos con valores de `orden` más bajos aparecen primero, mientras que los elementos con valores más altos aparecen al final.

> Agregue la propiedad `order` con el valor `0` al selector .`box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 1.125rem;
    border-radius: 5px;
    /* code */
    order: 0;
    /* code */
  }
  ```

## Paso 19

> Cree un selector `.flex-container` y establezca la propiedad `display` en el valor `flex`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    flex: 1 1 100px;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 1.125rem;
    border-radius: 5px;
    order: 0;
  }
  /* code */
  .flex-container{
    display: flex;
  }
  /* code */
  ```

## Paso 20

La propiedad `flex-wrap` define si los elementos flexibles se ajustan a una sola línea o pueden ajustarse a varias líneas.

De forma predeterminada, los elementos flexibles tienen un valor de `nowrap`, lo que significa que permanecen en una sola línea incluso si desbordan el contenedor. El valor `wrap`, por el contrario, hace que los elementos flexibles se ajusten a nuevas líneas cuando no caben en el ancho del contenedor, creando un diseño más flexible y receptivo.

> Para continuar, agregue la propiedad `flex-wrap` con el valor `wrap` al selector de clase `.flex-container`.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    /* code */
    flex-wrap: wrap;
    /* code */
  }
  ```

## Paso 21

> Ahora establecerás el ancho y el alto del elemento `.flex-container`. Para ello, añade la propiedad `width` con el valor `70%` y la propiedad `height` con el valor `600px`.

Al definir las propiedades `width` y `height`, se establecerá el ancho y el alto que el `div` ocupará en su elemento padre, en este caso el elemento `body`.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    /* code */
    width: 70%;
    height: 600px;
    /* code */
  }
  ```

## Paso 22

Para terminar de diseñar la clase `flex-container`, agrega la propiedad `padding` con un valor de `10px` y la propiedad `margin` con un valor de `20px auto`.

Recuerda: `padding` agrega espacio dentro del elemento (entre el borde y el contenido), mientras que `margin` agrega espacio fuera del elemento (entre el borde y otros elementos).

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 600px;
    /* code */
    padding: 10px;
    margin: 20px auto;
    /* code */
  }
  ```

## Paso 23

Ahora vas a utilizar la propiedad `align-content`. Esta propiedad controla la disposición de los elementos a lo largo del eje transversal. Aunque el valor predeterminado de `align-content` es `stretch`, las opciones más relevantes que puedes utilizar para `align-content` son: `space-between`, `start`, `center`, `end`, `space-around` y `space-evenly`.

> Agregue la propiedad `align-content` con el valor `space-between` para ver cómo se alinearán los cuadros en el elemento `.flex-container`.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 600px;
    padding: 10px;
    margin: 20px auto;
    /* code */
    align-content: space-between;
    /* code */
  }
  ```

## Paso 24

> Ahora prueba con otro valor de alineación. Cambia el valor de `align-content` de `space-between` a `start`.

Con el valor `start`, los elementos se agrupan hacia el borde inicial del contenedor de alineación.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 600px;
    padding: 10px;
    margin: 20px auto;
    /* code */
    align-content: start;
    /* code */
  }
  ```

## Paso 25

> Lo siguiente en la lista es el valor `center`. Cambie el valor de `align-content` de `start` a `center`.

Con el valor `center`, los elementos se agruparán en el centro del contenedor de alineación.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 600px;
    padding: 10px;
    margin: 20px auto;
    /* code */
    align-content: center;
    /* code */
  }
  ```

## Paso 26

> Ahora, para ver cómo funciona el valor `end`, cambia el valor de `align-content` de `center` a `end`.

Con el valor `end`, los elementos se colocarán al final del contenedor de alineación.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 600px;
    padding: 10px;
    margin: 20px auto;
    /* code */
    align-content: end;
    /* code */
  }
  ```

## Paso 27

> Con el valor `space-around`, los elementos se distribuyen uniformemente dentro del contenedor de alineación. Para verlo en acción, cambia el valor de `align-content` de `end` a `space-around`.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 600px;
    padding: 10px;
    margin: 20px auto;
    /* code */
    align-content: space-around;
    /* code */
  }
  ```

## Paso 28

> Ahora vas a comprobar el último valor de alineación. Cambia el valor de `align-content` de `space-around` a `space-evenly`.

Con el valor `space-evenly`, los elementos se distribuyen uniformemente dentro del contenedor de alineación. El espacio entre todos los elementos es exactamente el mismo, incluido el espacio al principio y al final.

- **Codigo**

  ```css
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 600px;
    padding: 10px;
    margin: 20px auto;
    /* code */
    align-content: space-evenly;
    /* code */
  }
  ```

## Paso 29

La propiedad `flex` controla el tamaño y el comportamiento de los elementos dentro de un contenedor flexible. Se compone de tres propiedades: `flex-grow`, `flex-shrink` y `flex-basis`.

La propiedad `flex-grow` controla cuánto espacio adicional debe ocupar el elemento flexible si hay espacio libre disponible en el contenedor.

> Ahora, volviendo al selector `.box`, cambia el primer número en `flex` (correspondiente al valor `flex-grow`) de `1` a `0`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    /* code */
    flex: 0 1 100px;
    /* code */
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 1.125rem;
    border-radius: 5px;
    order: 0;
  }
  ```

## Paso 30

El segundo valor de la propiedad `flex` establece la propiedad `flex-shrink`. Esta propiedad controla cuánto se reducirá el elemento flex cuando no haya suficiente espacio en el contenedor para todos los elementos.

> Sin salir del selector `.box`, cambia el segundo valor de `flex` de `1` a `0`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    /* code */
    flex: 0 0 100px;
    /* code */
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 1.125rem;
    border-radius: 5px;
    order: 0;
  }
  ```

## Paso 31

El último valor de la propiedad `flex` establece la propiedad `flex-basis`. Esta propiedad establece el tamaño inicial de un elemento flexible antes de que crezca o se reduzca.

> Por último, cambia el último valor en `flex` de `100px` a `150px` dentro de tu selector `.box`.

- **Codigo**

  ```css
  .box {
    max-height: 120px;
    color: #000;
    border: 1px solid #000;
    display: flex;
    /* code */
    flex: 0 0 150px;
    /* code */
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 1.125rem;
    border-radius: 5px;
    order: 0;
  }
  ```

## Paso 32

> Vuelve al archivo `html` y añade la clase `box1` al primer `div` con la clase `box`.

- **Codigo**

  ```html
    <div class="flex-container">
      <!-- code -->
      <div class="box box1">
      <!-- code -->
        <h2>Box 1</h2>
      </div>
      <div class="box">
        <h2>Box 2</h2>
      </div>
      <div class="box">
        <h2>Box 3</h2>
      </div>
      <div class="box">
        <h2>Box 4</h2>
      </div>
      <div class="box">
        <h2>Box 5</h2>
      </div>
      <div class="box">
        <h2>Box 6</h2>
      </div>
    </div>
  ```

## Paso 33

> Ahora vas a organizar los recuadros dentro de tu contenedor flexbox. Primero, crea un selector `.box1` y añádele la propiedad `background` con el valor `#f16e79`.
>
> A continuación, añade la propiedad `order` con el valor `1`. Verás que el primer `box` se desplaza al final. Esto ocurre porque la clase del recuadro ya tiene un valor de `orden 0`, y los elementos con valores de orden más altos aparecen más tarde.
>
> Añade también la propiedad `flex-grow` con un valor de `1`. Esto hará que el cuadro crezca para llenar el espacio adicional en su línea.

- **Codigo**

  ```css
  .box1 {
    /* code */
    background: #f16e79;
    order: 1;
    flex-grow: 1;
    /* code */
  }
  ```

## Paso 34

> Vuelve al archivo `html` y añade la clase `box2` al segundo elemento `.box`.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box box1">
        <h2>Box 1</h2>
      </div>
      <!-- code -->
      <div class="box box2">
      <!-- code -->
        <h2>Box 2</h2>
      </div>
      <div class="box">
        <h2>Box 3</h2>
      </div>
      <div class="box">
        <h2>Box 4</h2>
      </div>
      <div class="box">
        <h2>Box 5</h2>
      </div>
      <div class="box">
        <h2>Box 6</h2>
      </div>
    </div>
  ```

## Paso 35

> Dentro de tu archivo `styles.css`, crea un selector `.box2` y añádele la propiedad `background` con el valor `#f4a261`.
>
> Además, añade la propiedad `order` con un valor de `0`.

- **Codigo**

  ```css
  .box2 {
    /* code */
    background: #f4a261;
    order: 0;
    /* code */
  }
  ```

## Paso 36

En tu archivo `html`, agrega la clase `box3` al tercer elemento `.box`.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box box1">
        <h2>Box 1</h2>
      </div>
      <div class="box box2">
        <h2>Box 2</h2>
      </div>
      <!-- code -->
      <div class="box box3">
      <!-- code -->
        <h2>Box 3</h2>
      </div>
      <div class="box">
        <h2>Box 4</h2>
      </div>
      <div class="box">
        <h2>Box 5</h2>
      </div>
      <div class="box">
        <h2>Box 6</h2>
      </div>
    </div>
  ```

## Paso 37

> Ahora, para continuar con el estilo de tus cajas, crea un nuevo selector `.box3` y añádele la propiedad `background` con el valor `#ffd166`.
>
> A continuación, añade la propiedad `order` con un valor de `2` a tu nuevo selector. Verás que esta caja se mueve después del elemento `.box1`.
>
> Añade también la propiedad `flex-shrink` con un valor de `3`. Esto significa que este cuadro se reducirá tres veces más que los demás cuadros cuando no haya suficiente espacio en su línea.

- **Codigo**

  ```css
  .box3 {
    /* code */
    background: #ffd166;
    order: 2;
    flex-shrink: 3;
    /* code */
  }
  ```

## Paso 38

Dentro del archivo `html`, agrega la clase `box4` a tu cuarto elemento `.box`.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box box1">
        <h2>Box 1</h2>
      </div>
      <div class="box box2">
        <h2>Box 2</h2>
      </div>
      <div class="box box3">
        <h2>Box 3</h2>
      </div>
      <!-- code -->
      <div class="box box4">
      <!-- code -->
        <h2>Box 4</h2>
      </div>
      <div class="box">
        <h2>Box 5</h2>
      </div>
      <div class="box">
        <h2>Box 6</h2>
      </div>
    </div>
  ````

## Paso 39

> Ahora crea un selector `.box4` y añádele la propiedad `background` con el valor `#4caf50`.
>
> A continuación, añade la propiedad `order` con un valor de `3` al selector `.box4`. Verás que este cuadro se mueve después del que tiene la clase `box3`.

- **Codigo**

  ```css
  .box4 {
    /* code */
    background: #4caf50;
    order: 3;
    /* code */
  }
  ```

## Paso 40

Agrega la clase box5 a tu quinto elemento .box.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box box1">
        <h2>Box 1</h2>
      </div>
      <div class="box box2">
        <h2>Box 2</h2>
      </div>
      <div class="box box3">
        <h2>Box 3</h2>
      </div>
      <div class="box box4">
        <h2>Box 4</h2>
      </div>
      <!-- code -->
      <div class="box box5">
      <!-- code -->
        <h2>Box 5</h2>
      </div>
      <div class="box">
        <h2>Box 6</h2>
      </div>
    </div>
  ````

## Paso 41

> Ahora crea un selector `.box5` y añádele la propiedad `background` con el valor `#457b9d`.
>
> A continuación, añade la propiedad `order` con un valor de `4` a tu nuevo selector. Verás que este cuadro se mueve después del que tiene la clase `box4`.

- **Codigo**

  ```css
  .box5 {
    /* code */
    background: #457b9d;
    order: 4;
    /* code */
  }
  ```

## Paso 42

> Por último, agrega la clase `box6` al último de tus elementos `.box`.

- **Codigo**

  ```html
    <div class="flex-container">
      <div class="box box1">
        <h2>Box 1</h2>
      </div>
      <div class="box box2">
        <h2>Box 2</h2>
      </div>
      <div class="box box3">
        <h2>Box 3</h2>
      </div>
      <div class="box box4">
        <h2>Box 4</h2>
      </div>
      <div class="box box5">
        <h2>Box 5</h2>
      </div>
      <!-- code -->
      <div class="box box6">
      <!-- code -->
        <h2>Box 6</h2>
      </div>
    </div>
  ````

## Paso 43

> Cree un selector `.box6` y añádale la propiedad `background` con el valor `#3f51b5`.
>
> A continuación, añada la propiedad `order` con un valor de `5` a su nuevo selector. Verá que el elemento `.box6` se mueve después del elemento `.box5`.
>
> Además, añada la propiedad `flex-grow` con un valor de `1`. Esto hará que el cuadro 6 crezca hasta llenar el espacio restante en el contenedor.

- **Codigo**

  ```css
  /* code */
  .box6 {
    background: #3f51b5;
    order: 5;
    flex-grow: 1;
  }
  /* code */
  ```

**¡Con esto, el taller de cajas de colores ha terminado!**
