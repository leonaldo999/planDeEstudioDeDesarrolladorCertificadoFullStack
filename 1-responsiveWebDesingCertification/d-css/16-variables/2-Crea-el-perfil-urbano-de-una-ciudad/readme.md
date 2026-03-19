# Crea el perfil urbano de una ciudad

En este ejercicio, crearás un perfil urbano de una ciudad utilizando variables CSS para definir los colores y estilos de los elementos. El objetivo es practicar el uso de variables para mantener un diseño consistente y fácil de modificar.

---

## Paso 1

>> ¡Bienvenido al proyecto «CSS Variables Skyline»! Empieza añadiendo un elemento de enlace que apunte a tu archivo `styles.css` dentro del elemento `head`.

- **code:**

  ```html
  <link rel="stylesheet" href="styles.css">
  ```

## Paso 2

>> En CSS, puedes seleccionar todos los elementos con un asterisco. Añade un borde a todos los elementos utilizando el selector `*` y asignándole un `border` con un valor `1px solid black`. Este es un truco que ayuda a visualizar la ubicación y el tamaño de los elementos. Lo eliminarás más adelante.

- **code:**

  ```css
  * {
    border: 1px solid black;
  }
  ```

## Paso 3

>> Añade también la propiedad `box-sizing: border-box` a todos los elementos. De esta forma, el borde que has añadido no aumentará el tamaño de tus elementos.

- **code:**

  ```css
  * {
    border: 1px solid black;
    box-sizing: border-box;
  }
  ```

## Paso 4

>> Puedes ver el elemento `body` (es el cuadro más interno de la página); el cuadro que lo rodea es el elemento HTML. Haz que el elemento `body` ocupe todo el área de visualización asignándole una altura de 100vh. Elimina el margen predeterminado del elemento `body` estableciendo el margen en `0`. Por último, establece la propiedad `overflow` en `hidden` para ocultar las barras de desplazamiento que aparecen cuando algún contenido se sale del área de visualización.

- **code:**

  ```css
  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }
  ```

## Paso 5

>> Crea un elemento `div` en el `body` con la clase `background-buildings`. Este servirá de contenedor para un grupo de edificios.

- **code:**

  ```html
  <div class="background-buildings"></div>
  ```

## Paso 6

>> Asigna al elemento `.background-buildings` un `width` y una `height` del `100%` para que ocupe todo el ancho y la altura de su elemento padre, el `body`.

- **code:**

  ```css
  .background-buildings {
    width: 100%;
    height: 100%;
  }
  ```

## Paso 7

>> Incluye una etiqueta `div` con la clase `bb1` dentro del contenedor de edificios de fondo. Abre el archivo `styles.css` y asigna a `.bb1` un `width` del `10%` y una `height` del `70%`. "bb" significa «edificio de fondo»; este será tu primer edificio.

- **code:**

  ```html
  <div class="background-buildings">
    <div class="bb1"></div>
  </div>
  ```

  ```css
  .bb1 {
    width: 10%;
    height: 70%;
  }
  ```

## Paso 8

>> Incluye cuatro elementos `div` dentro del contenedor `.bb1`. Asigna a cada uno de ellos las clases `bb1a`, `bb1b`, `bb1c` y `bb1d`, en ese orden. Este edificio tendrá cuatro secciones.

- **code:**

  ```html
  <div class="background-buildings">
    <div class="bb1">
      <div class="bb1a"></div>
      <div class="bb1b"></div>
      <div class="bb1c"></div>
      <div class="bb1d"></div>
    </div>
  </div>
  ```

## Paso 9

>> Asigna a las partes de tu edificio propiedades de `width` y `height` con estos valores: `70%` y `10%` a `.bb1a`, `80%` y `10%` a `.bb1b`, `90%` y `10%` a `.bb1c`, y `100%` y `70%` a `.bb1d`. Recuerda que estos porcentajes son relativos al elemento padre y ten en cuenta que las alturas sumarán un 100 %, llenando verticalmente el contenedor.

- **code:**

  ```css
  .bb1a {
    width: 70%;
    height: 10%;
  }

  .bb1b {
    width: 80%;
    height: 10%;
  }

  .bb1c {
    width: 90%;
    height: 10%;
  }

  .bb1d {
    width: 100%;
    height: 70%;
  }
  ```

## Paso 10

>> Centra los elementos de tu diseño convirtiendo el elemento .`bb1` en un elemento padre de Flexbox. Usa las propiedades `flex-direction` y `align-items` para centrar los elementos hijos.

- **code:**

  ```css
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ```
  
## Paso 11

>> Ahora tienes algo que se parece a un edificio. Estás listo para crear tu primera variable. En lecciones anteriores aprendiste que las declaraciones de variables comienzan con dos guiones (`-`) y se les asigna un nombre y un valor de la siguiente manera: `--nombre-de-la-variable: valor;`. En la regla de la clase `bb1`, crea una variable llamada `--building-color1` y asígnale el valor `#999`.

- **code:**

  ```css
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    --building-color1: #999;
  }
  ```

## Paso 12

Para utilizar una variable, escribe el nombre de la variable entre paréntesis precedido de `var`, de la siguiente manera: `var(--nombre-de-la-variable)`. El valor que le hayas asignado a la variable se aplicará a la propiedad en la que la utilices.

>> Añade la variable `--building-color1` que creaste en el paso anterior como valor de la propiedad `background-color` de la clase `.bb1a`.

- **code:**

  ```css
  .bb1a {
    width: 70%;
    height: 10%;
    background-color: var(--building-color1);
  }
  ```

## Paso 13

>> Utiliza la misma variable que el `background-color` de las clases `.bb1b`, `.bb1c` y `.bb1d` para rellenar el resto del edificio.

- **code:**

  ```css
  .bb1b {
    width: 80%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1c {
    width: 90%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1d {
    width: 100%;
    height: 70%;
    background-color: var(--building-color1);
  }
  ```

## Paso 14

>> Cambia el valor de tu variable de `#999` a `#aa80ff` y verás cómo se aplica en todos los lugares donde has utilizado la variable. Esta es la principal ventaja de usar variables: poder cambiar rápidamente muchos valores en tu hoja de estilos con solo modificar el valor de una variable.

- **code:**

  ```css
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    --building-color1: #aa80ff;
  }
  ```

## Paso 15

Tu primer edificio ya se ve bastante bien. Inserta tres nuevos elementos `div` dentro del contenedor `.background-buildings` y asígnales las clases `bb2`, `bb3` y `bb4`, en ese orden. Estos serán tres edificios más para el fondo.

- **code:**

  ```html
  <div class="background-buildings">
    <div class="bb1">
      <div class="bb1a"></div>
      <div class="bb1b"></div>
      <div class="bb1c"></div>
      <div class="bb1d"></div>
    </div>
    <div class="bb2">
    </div>
    <div class="bb3">
    </div>
    <div class="bb4">
    </div>

  </div>
  ```

## Paso 16

>> Asigna a los nuevos edificios las siguientes propiedades de `width` y `height`: `10%` y `50%` para `.bb2`, `10%` y `55%` para `.bb3`, y `11%` y `58%` para `.bb4`. En este proyecto utilizarás casi exclusivamente unidades basadas en porcentajes y algo de Flexbox, por lo que todo será totalmente adaptativo.

- **code:**

  ```css
  .bb2 {
    width: 10%;
    height: 50%;
  }
  
  .bb3 {
    width: 10%;
    height: 55%;
  }
  
  .bb4 {
    width: 11%;
    height: 58%;
  }
  ```

## Paso 17

>> Actualmente, los edificios están apilados unos encima de otros. Alinea los edificios convirtiendo el elemento `.background-buildings` en un elemento padre flexbox. Usa las propiedades `align-items` y `justify-content` para distribuir los edificios de manera uniforme a lo largo de la parte inferior del elemento.

- **code:**

  ```css
  .background-buildings {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
  }
  ```

## Paso 18

>> Los edificios están demasiado separados. Acércalos añadiendo dos elementos `div` vacíos en la parte superior del elemento `.background-buildings`, otros dos en la parte inferior y uno más entre `.bb3` y `.bb4`. Estos se añadirán como elementos espaciados uniformemente a lo largo del contenedor, lo que acercará los edificios al centro.

- **code:**

  ```html
  <div class="background-buildings">
    
    <div></div>
    <div></div>
    <div class="bb1">
      <div class="bb1a"></div>
      <div class="bb1b"></div>
      <div class="bb1c"></div>
      <div class="bb1d"></div>
    </div>
    <div class="bb2">
    </div>
    <div class="bb3">
    </div>
    <div></div>
    <div class="bb4">
    </div>
    <div></div>
    <div></div>

  </div>
  ```

## Paso 19

>> Crea una nueva variable debajo de tu variable `--building-color1`. Nombra tu nueva variable `--building-color2` y asígnale el valor `#66cc99`. A continuación, establécela como el valor de `background-color` de `.bb2`

- **code:**

  ```css
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
  }
  
  .bb1a {
    width: 70%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1b {
    width: 80%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1c {
    width: 90%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1d {
    width: 100%;
    height: 70%;
    background-color: var(--building-color1);
  }
  
  .bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2);
  }
  ```

## Paso 20

>> Eso no funcionó. Debes añadir un valor de reserva a una variable colocándolo como segundo argumento cuando utilices la variable, de la siguiente manera: `var(--nombre-de-la-variable, valor-de-reserva)`. La propiedad utilizará el valor de reserva cuando haya un problema con la variable. Añade un valor de reserva de color `green` a la propiedad `background-color` de `.bb2`.

- **code:**

  ```css
  .bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2, green);
  }
  ```

## Paso 21

>> Crea una nueva variable debajo de las demás llamada `--building-color3` y asígnale el valor `#cc6699`. A continuación, utilízala como `background-color` de la clase `.bb3` y asígnale un valor alternativo de color `pink`.

- **code:**

  ```css
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    /* code */
    --building-color3: #cc6699;
    /* code */
  }
  
  .bb1a {
    width: 70%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1b {
    width: 80%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1c {
    width: 90%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1d {
    width: 100%;
    height: 70%;
    background-color: var(--building-color1);
  }
  
  .bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2, green);
  }
  
  .bb3 {
    width: 10%;
    height: 55%;
    /* code */
    background-color: var(--building-color3, pink);
    /* code */
  } 
  ```

## Paso 22

>> Eso no funcionó, porque las variables que declaraste en `.bb1` no se transmiten a los elementos hermanos `.bb2` y `.bb3`. Así es como funciona el CSS. Por eso, las variables suelen declararse en el selector `:root`. Este es el selector de más alto nivel en CSS; al colocar tus variables ahí, podrás usarlas en cualquier parte. Agrega el selector `:root` al principio de tu hoja de estilos y mueve todas tus declaraciones de variables allí.

- **code:**

  ```css
    /* code */
  :root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
  }
    /* code */
    
  * {
    border: 1px solid black;
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }
  
  .background-buildings {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
  }
  
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ```

## Paso 23

>> Ahora que ya has solucionado los errores y los edificios tienen los colores correctos, puedes eliminar los valores de reserva en los dos lugares donde se utilizaron. Hazlo ahora mismo.

- **code:**

  ```css
  .bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2);
  }
  
  .bb3 {
    width: 10%;
    height: 55%;
    background-color: var(--building-color3);
  }
  ```

## Paso 24

>> Crea otra variable llamada `--building-color4` y asígnale el valor `#538cc6`. Asegúrate de que, esta vez, se encuentre dentro del selector `:root`. A continuación, utilízala para rellenar el último edificio.

- **code:**

  ```css
  :root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
    /* code */
    --building-color4: #538cc6;
    /* code */
  }
  
  * {
    border: 1px solid black;
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }
  
  .background-buildings {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
  }
  
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bb1a {
    width: 70%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1b {
    width: 80%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1c {
    width: 90%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1d {
    width: 100%;
    height: 70%;
    background-color: var(--building-color1);
  }
  
  .bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2);
  }
  
  .bb3 {
    width: 10%;
    height: 55%;
    background-color: var(--building-color3);
  }
  
  .bb4 {
    width: 11%;
    height: 58%;
    /* code */
    background-color: var(--building-color4);
    /* code */
  }
  ```

## Paso 25

>> Los edificios del fondo ya se ven bastante bien. Crea un nuevo elemento `div` debajo del elemento `.background-buildings` y asígnale la clase `foreground-buildings`. Este será otro contenedor para más edificios.

- **code:**

  ```html
  <div class="background-buildings">
    
    <div></div>
    <div></div>
    <div class="bb1">
      <div class="bb1a"></div>
      <div class="bb1b"></div>
      <div class="bb1c"></div>
      <div class="bb1d"></div>
    </div>
    <div class="bb2">
    </div>
    <div class="bb3">
    </div>
    <div></div>
    <div class="bb4">
    </div>
    <div></div>
    <div></div>

  </div>

  <!-- code -->
  <div class="foreground-buildings"></div>
  <!-- code -->
  ```

## Paso 26

>> Quieres que el contenedor `.foreground-buildings` quede directamente encima del elemento `.background-buildings`. Asigna un `width` y una `height` del `100%`, establece la `position` en `absolute` y la propiedad `top` en `0`. De esta forma, tendrá el mismo tamaño que el cuerpo y su punto de inicio se situará en la esquina superior izquierda.

- **code:**

  ```css
  .foreground-buildings{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  ```

## Paso 27

>> Incluye seis elementos `div` dentro de `.foreground-buildings` y asígnales las clases `fb1` a `fb6`, en ese orden. _"fb"_ significa _"foreground building"_. Estos serán seis edificios más para el primer plano.

- **code:**

  ```html
  <div class="foreground-buildings">
    <div class="fb1"></div>
    <div class="fb2"></div>
    <div class="fb3"></div>
    <div class="fb4"></div>
    <div class="fb5"></div>
    <div class="fb6"></div>
  </div>
  ```

## Paso 28

>> Asigna a los seis nuevos elementos los siguientes valores de `width` y `height`: `10%` y `60%` a `.fb1`, `10%` y `40%` a `.fb2`, `10%` y `35%` a `.fb3`, `8%` y `45%` a `.fb4`, `10%` y `33%` a `.fb5`, y `9%` y `38%` a `.fb6`.

- **code:**

  ```css
  .fb1 {
    width: 10%;
    height: 60%;
  }
  .fb2 {
    width: 10%;
    height: 40%;
  }
  .fb3 {
    width: 10%;
    height: 35%;
  }
  .fb4 {
    width: 8%;
    height: 45%;
  }
  .fb5 {
    width: 10%;
    height: 33%;
  }
  .fb6 {
    width: 9%;
    height: 38%;
  }
  ```

## Paso 29

>> Añade las mismas propiedades y valores de `display`, `align-items` y `justify-content` a `.foreground-buildings` que utilizaste en `.background-buildings`. De nuevo, esto utilizará Flexbox para distribuir los edificios de manera uniforme a lo largo de la parte inferior de su contenedor.

- **code:**

  ```css
  .foreground-buildings{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    /* code */
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    /* code */
  }
  ```

## Paso 30

>> Debes optimizar tu código. Mueve las propiedades y los valores de `position` y `top` de `.foreground-buildings` a `.background-buildings`. A continuación, selecciona tanto `.background-buildings` como `.foreground-buildings`, de modo que esos estilos se apliquen a ambos elementos. Puedes usar una coma (`,`) para separar los selectores de esta manera: `selector1, selector2`.

- **code:**

  ```css
  .background-buildings, .foreground-buildings {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
  }
  ```

## Paso 31

>> Ahora que ya lo has hecho, puedes eliminar la antigua declaración `.foreground-buildings` y todas sus propiedades, ya que ya no son necesarias.

- **code:**

  ```css
  /* code */
  Se elimina la declaración .foreground-buildings y todas sus propiedades, ya que ya no son necesarias.
  /* code */
  ```

## Paso 32

>> El horizonte está tomando forma. Asigna el color de fondo a los edificios del primer plano. Usa la variable `--building-color1` para los edificios `.fb3` y `.fb4`, `--building-color2` para `.fb5`, `--building-color3` para .`fb2` y `.fb6`, y `--building-color4` para `.fb1`.

- **code:**

  ```css
  .fb1 {
    width: 10%;
    height: 60%;
    /* code */
    background-color: var(--building-color4);
    /* code */
  }
  
  .fb2 {
    width: 10%;
    height: 40%;
    /* code */
    background-color: var(--building-color3);
    /* code */
  }
  
  .fb3 {
    width: 10%;
    height: 35%;
    /* code */
    background-color: var(--building-color1);
    /* code */
  }
  
  .fb4 {
    width: 8%;
    height: 45%;
    /* code */
    background-color: var(--building-color1);
    /* code */
  }
  
  .fb5 {
    width: 10%;
    height: 33%;
    /* code */
    background-color: var(--building-color2);
    /* code */
  }
  
  .fb6 {
    width: 9%;
    height: 38%;
    /* code */
    background-color: var(--building-color3);
    /* code */
  }
  ```

## Paso 33

>> Vuelve a juntar los edificios añadiendo dos elementos `div` vacíos tanto en la parte superior como en la inferior del elemento `.foreground-buildings`, y uno más entre `.fb2` y `.fb3`.

- **code:**

  ```html
  <div class="foreground-buildings">
    <div></div>
    <div></div>
    <div class="fb1"></div>
    <div class="fb2"></div>
    <div></div>
    <div class="fb3"></div>
    <div class="fb4"></div>
    <div class="fb5"></div>
    <div class="fb6"></div>
    <div></div>
    <div></div>
  </div>
  ```

## Paso 34

>> Cambia la posición de `.fb4` con respecto a su ubicación actual utilizando `position` en `relative` y un `left` de `10%`. Haz lo mismo con `.fb5`, pero utiliza `right` en lugar de `left`. Esto cubrirá el espacio en blanco que queda entre los edificios.

- **code:**

  ```css
  .fb4 {
    width: 8%;
    height: 45%;
    background-color: var(--building-color1);
  /* code */
    position: relative;
    left: 10%;
  /* code */
  }
  
  .fb5 {
    width: 10%;
    height: 33%;
    background-color: var(--building-color2);
  /* code */
    position: relative;
    right: 10%;
  /* code */
  }
  ```

## Paso 35

>> Tu código está empezando a ser bastante largo. Agrega un comentario encima de la clase `.fb1` que diga `FOREGROUND BUILDINGS - "fb" stands for "foreground building"` para ayudar a que la gente entienda tu código. Encima de la clase `.bb1`, agrega otro comentario que diga `BACKGROUND BUILDINGS - "bb" stands for "background building"`. Si no lo recuerdas, los comentarios en CSS se ven así: `/* Comentario aquí */`.

- **code:**

  ```css
  /* BACKGROUND BUILDINGS - "bb" stands for "background building" */
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bb1a {
    width: 70%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1b {
    width: 80%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1c {
    width: 90%;
    height: 10%;
    background-color: var(--building-color1);
  }
  
  .bb1d {
    width: 100%;
    height: 70%;
    background-color: var(--building-color1);
  }
  
  .bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2);
  }
  
  .bb3 {
    width: 10%;
    height: 55%;
    background-color: var(--building-color3);
  }
  
  .bb4 {
    width: 11%;
    height: 58%;
    background-color: var(--building-color4);
  }
  
  /* FOREGROUND BUILDINGS - "fb" stands for "foreground building" */
  .fb1 {
    width: 10%;
    height: 60%;
    background-color: var(--building-color4);
  }
  ```

## Paso 36

>> Crea una nueva variable en `:root` llamada `--window-color1` y asígnale el valor `black`. Este será el color secundario para los edificios morados.

- **code:**

  ```css
  :root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
    --building-color4: #538cc6;
    /* code */
    --window-color1: black;
    /* code */
  }
  ```

## Paso 37

En un módulo anterior aprendiste que los `gradients` en CSS son una forma de crear una transición entre colores a lo largo de un elemento. Se aplican a la propiedad `background` y la sintaxis es la siguiente:

- **Example Code**

  ```css
  gradient-type(
    color1,
    color2
  );
  ```

En el ejemplo, el `color1` aparece en la parte superior, el `color2` en la parte inferior y, entre ambos, se produce una transición uniforme de uno a otro.

>> En `.bb1a`, agrega una propiedad de `background` debajo de la propiedad `background-color`. Configúrala como un degradado de tipo `linear-gradient` que utilice `--building-color1` como primer color y `--window-color1` como segundo.

- **code:**

  ```css
  .bb1a {
    width: 70%;
    height: 10%;
    background-color: var(--building-color1);
    /* code */
    background: linear-gradient(
      var(--building-color1),
      var(--window-color1)
    );
    /* code */
  }
  ```

## Paso 38

>> Quieres añadir el mismo degradado a las dos secciones siguientes. En lugar de hacerlo, crea un nuevo selector de clase llamado `bb1-window` y traslada las propiedades y los valores de `height` y `background` de `.bb1a` al nuevo selector de clase.

- **code:**

  ```css
  /* code */
  .bb1-window {
    height: 10%;
    background: linear-gradient(var(--building-color1),
        var(--window-color1));
  }
  /* code */
  
  .bb1a {
    width: 70%;
    background-color: var(--building-color1);
  }
  ```

## Paso 39

>> Añade la nueva clase `bb1-window` a los elementos `.bb1a`, `.bb1b` y `.bb1c`. De esta forma, se les aplicará el degradado.

- **code:**

  ```html
  <div class="bb1">
    <div class="bb1a bb1-window"></div>
    <div class="bb1b bb1-window"></div>
    <div class="bb1c bb1-window"></div>
    <div class="bb1d"></div>
  </div>
  ```

## Paso 40

>> Ya no necesitas las propiedades `height` ni `background-color` en `.bb1a`, `.bb1b` o `.bb1c`, así que elimínalas.

- **code:**

  ```css
  .bb1a {
    width: 70%;
  }
  
  .bb1b {
    width: 80%;
  }
  
  .bb1c {
    width: 90%;
  }
  ```

## Paso 41

>> Los _Gradients_ pueden tener tantos colores como quieras, así:

- **Example Code**

  ```css
  gradient-type(
    color1,
    color2,
    color3
  );
  ```

>> Añade un `linear-gradient` a `.bb1d` con el `orange` como primer color, `--building-color1` como segundo y `--window-color1` como tercero. Recuerda aplicar el degradado a la propiedad `background`.

- **code:**

  ```css
  .bb1d {
    width: 100%;
    height: 70%;
    background-color: var(--building-color1);
    background: linear-gradient(
      orange,
      var(--building-color1),
      var(--window-color1)
    );
  }
  ```

## Paso 42

>> Está un poco oculto detrás de los edificios del primer plano, pero ahí se puede ver el degradado de tres colores. Como ahora lo vas a utilizar, elimina la propiedad `background-color` de `.bb1d`.

- **code:**

  ```css
  .bb1d {
    width: 100%;
    height: 70%;
    background: linear-gradient(
      orange,
      var(--building-color1),
      var(--window-color1)
    );
  }
  ```

## Paso 43

Puedes especificar dónde quieres que finalice una transición de degradado añadiéndola al color de la siguiente manera:

- **Example Code**

  ```css
  gradient-type(
    color1,
    color2 20%,
    color3
  );
  ```

Aquí, se aplicará una transición del `color1` al `color2` entre el `0%` y el `20%` del elemento, y luego se pasará al `color3` en el resto.

>> Añade un `80%` al color `--building-color1` del degradado `.bb1d` para que puedas verlo en acción.

- **code:**

  ```css
  .bb1d {
    width: 100%;
    height: 70%;
    background: linear-gradient(
      orange,
    /* code */
      var(--building-color1) 80%,
    /* code */
      var(--window-color1)
    );
  }
  ```

## Paso 44

>> Elimina el color `orange` del degradado `.bb1d` y cambia el `80%` a `50%`. De este modo, `--building-color1` aparecerá en color sólido en la mitad superior y luego dará paso a `--window-color1` en la mitad inferior.

- **code:**

  ```css
  .bb1d {
    width: 100%;
    height: 70%;
    background: linear-gradient(
    /* code */
      var(--building-color1) 50%, 
      var(--window-color1)
    /* code */
    );
  }
  ```

## Paso 45

>> Incluye dos nuevos elementos `div` dentro de `.bb2` y asígnales las clases `bb2a` y `bb2b`, en ese orden. Estas serán las dos secciones de este edificio.

- **code:**

  ```html
  <div class="bb2">
    <div class="bb2a"></div>
    <div class="bb2b"></div>
  </div>
  ```

## Paso 46

>> Asigna a `.bb2b` un `width` y una `height` del `100%` para que ocupe todo el contenedor del edificio. Más adelante añadirás algo en la parte superior.

- **code:**

  ```css
  .bb2b {
    width: 100%;
    height: 100%;
  }
  ```

## Paso 47

>> Crea una nueva variable en `:root` llamada `window-color2` con el valor `#8cd9b3`. Se utilizará como color secundario para este edificio.

- **code:**

  ```css
  :root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
    --building-color4: #538cc6;
    --window-color1: black;
    /* code */
    --window-color2: #8cd9b3;
    /* code */
  }
  ```

## Paso 48

Las transiciones de degradado suelen pasar gradualmente de un color a otro. Cuando se necesita un cambio más brusco, la transición se puede realizar con un corte brusco como este:

- **Example Code**

  ```css
  linear-gradient(
    var(--first-color) 0%,
    var(--first-color) 40%,
    var(--second-color) 40%,
    var(--second-color) 80%
  );
  ```

>> Añade un `linear-gradient` a `.bb2b` que utilice `--building-color2` del `0%` al `6%` y `--window-color2` del `6%` al `9%`.

- **code:**

  ```css
  .bb2b {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      var(--building-color2) 0%,
      var(--building-color2) 6%,
      var(--window-color2) 6%,
      var(--window-color2) 9%
    );
  }
  ```

## Paso 49

>> Puedes ver el cambio brusco de color en la parte superior de la sección. Cambia el tipo de degradado de `linear-gradient` a `repeating-linear-gradient` para esta sección. Esto hará que los cuatro colores del degradado se repitan hasta llegar a la parte inferior del elemento, lo que te dará unas rayas y te ahorrará tener que añadir un montón de elementos para crearlas.

- **code:**

  ```css
  .bb2b {
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      var(--building-color2) 0%,
      var(--building-color2) 6%,
      var(--window-color2) 6%,
      var(--window-color2) 9%
    );
  }
  ```

## Paso 50

>> En los siguientes pasos, vas a utilizar algunos trucos con los bordes CSS para convertir la sección .`bb2a` en un triángulo en la parte superior del edificio. Primero, elimina el `background-color` de `.bb2`, ya que ya no lo necesitas.

- **code:**

  ```css
  .bb2 {
    width: 10%;
    height: 50%;
  }
  ```

## Paso 51

>> Crea y añade las siguientes propiedades al archivo `.bb2a`:

- **Example Code**

  ```css
  margin: auto;
  width: 5vw;
  height: 5vw;
  border-top: 1vw solid #000;
  border-bottom: 1vw solid #000;
  border-left: 1vw solid #999;
  border-right: 1vw solid #999;
  ```

Una vez que los hayas añadido, verás que el borde grueso de un elemento crea unos ángulos donde se unen dos lados. Vas a utilizar ese borde inferior como la parte superior del edificio.

- **code:**

  ```css
  .bb2a {
    margin: auto;
    width: 5vw;
    height: 5vw;
    border-top: 1vw solid #000;
    border-bottom: 1vw solid #000;
    border-left: 1vw solid #999;
    border-right: 1vw solid #999;
  }
  ```

## Paso 52

>> A continuación, elimina el `width` y el `height` de `.bb2a`, y cambia `border-left` y `border-right` para que utilicen `5vw` en lugar de `1vw`. El elemento tendrá ahora un tamaño nulo y los bordes se unirán en el centro.

- **code:**

  ```css
  .bb2a {
    margin: auto;
    border-top: 1vw solid #000;
    border-bottom: 1vw solid #000;
    border-left: 5vw solid #999;
    border-right: 5vw solid #999;
  }
  ```

## Paso 53

>> A continuación, cambia los dos `#999` de `.bb2a` por `transparente`. Esto hará que los bordes izquierdo y derecho sean invisibles.

- **code:**

  ```css
  .bb2a {
    margin: auto;
    border-top: 1vw solid #000;
    border-bottom: 1vw solid #000;
    /* code */
    border-left: 5vw solid transparent;
    border-right: 5vw solid transparent;
    /* code */
  }
  ```

## Paso 54

>> Elimina las propiedades y los valores de `margin` y `border-top` de `.bb2a` para convertirlo en un triángulo que forme la parte superior del edificio.

- **code:**

  ```css
  .bb2a {
    /* code */
    Se eliminan las propiedades y los valores de margin y border-top para convertirlo en un triángulo que forme la parte superior del edificio.
    /* code */
    border-bottom: 1vw solid #000;
    border-left: 5vw solid transparent;
    border-right: 5vw solid transparent;
  }
  ```

## Paso 55

>> Por último, en la propiedad `border-bottom` de `.bb2a`, cambia el valor de `1vw` por `5vh` y sustituye el color `#000` por tu variable `--building-color2`.

_¡Ya está, ahora se ve bien! En cualquier momento de este proyecto, puedes comentar o eliminar la propiedad de borde que agregaste a todos los elementos al principio para ver cómo se verán los edificios cuando se elimine al final._

- **code:**

  ```css
  .bb2a {
    /* code */
    border-bottom: 5vh solid var(--building-color2);
    /* code */
    border-left: 5vw solid transparent;
    border-right: 5vw solid transparent;
  }
  ```

## Paso 56

>> ¡Pasemos al siguiente edificio! Crea una nueva variable llamada `--window-color3` en :root y asígnale el valor `#d98cb3`. Este será el color secundario para los edificios rosas.

- **code:**

  ```css
    :root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
    --building-color4: #538cc6;
    --window-color1: black;
    --window-color2: #8cd9b3;
    /* code */
    --window-color3: #d98cb3;
    /* code */
  }
  ```

## Paso 57

>> Hasta ahora, todos los degradados que has creado iban de arriba hacia abajo; esa es la dirección predeterminada. Puedes especificar otra dirección añadiéndola antes de los colores, de esta manera:

- **Example Code:**

  ```css
  gradient-type(
    direction,
    color1,
    color2
  );
  ```

>> Rellena `.bb3` con un `repeating-linear-gradient`. Usa `90deg` como dirección, tu `building-color3` para los dos primeros colores y `window-color3` al `15%` para el tercero. Cuando no especifiques una distancia para un color, se utilizarán los valores que tengan sentido. En este caso, los dos primeros colores serán por defecto `0%`y `7,5%`, ya que comienza en `0%` y `7,5%` es la mitad del `15%`.

- **code:**

  ```css
  .bb3 {
    width: 10%;
    height: 55%;
    background-color: var(--building-color3);
    background: repeating-linear-gradient(
      90deg,
      var(--building-color3),
      var(--building-color3),
      var(--window-color3) 15%
    );
  }
  ```

## Paso 58

>> Elimina la propiedad y el valor de `background-color` de `.bb3`, ya que ahora estás utilizando el degradado como fondo.

- **code:**

  ```css
  .bb3 {
    width: 10%;
    height: 55%;
    /* code */
    Se elimina la propiedad y el valor de background-color, ya que ahora estás utilizando el degradado como fondo.
    /* code */
    background: repeating-linear-gradient(
      90deg,
      var(--building-color3),
      var(--building-color3),
      var(--window-color3) 15%
    );
  }
  ```

## Paso 59

>> El siguiente elemento tendrá tres secciones. Anida tres elementos `div` dentro de `.bb4`. Asígnales las clases `bb4a`, `bb4b` y `bb4c` en ese orden.

- **code:**

  ```html
  <div class="bb4">
    <div class="bb4a"></div>
    <div class="bb4b"></div>
    <div class="bb4c"></div>
  </div>
  ```

## Paso 60

>> Asigna a los nuevos elementos `div` los siguientes valores de `width` y `height`: `3%` y `10%` para `.bb4a`, `80%` y `5%` para `.bb4b`, y `100%` y `85%` para `.bb4c`.

- **code:**

  ```css
  .bb4a {
    width: 3%;
    height: 10%;
  }
  
  .bb4b {
    width: 80%;
    height: 5%;
  }
  
  .bb4c {
    width: 100%;
    height: 85%;
  }
  ```

## Paso 61

>> Elimina la propiedad `background-color` y su valor de `.bb4`, y añádelos a las tres nuevas secciones `.bb4a`, `.bb4b` y `.bb4c`, de modo que solo se rellenen esas secciones.

- **code:**

  ```css
  .bb4 {
    width: 11%;
    height: 58%;
  }
  
  .bb4a {
    width: 3%;
    height: 10%;
    /* code */
    background-color: var(--building-color4);
    /* code */
  }
  
  .bb4b {
    width: 80%;
    height: 5%;
    /* code */
    background-color: var(--building-color4);
    /* code */
  }
  
  .bb4c {
    width: 100%;
    height: 85%;
    /* code */
    background-color: var(--building-color4);
    /* code */
  }
  ```

## Paso 62

>> Quieres que `.bb4` comparta las propiedades de `.bb1` que centran las secciones. En lugar de duplicar ese código, crea una nueva clase encima del comentario de construcción del fondo llamada `building-wrap`. Déjala vacía por ahora; esta clase se utilizará en varios lugares para ahorrarte algo de trabajo de programación.

- **code:**

  ```css
  /* code */
  .building-wrap {
    
  }
  /* code */
  ```

## Paso 63

>> Traslada las propiedades y los valores de `display`, `flex-direction` y `align-items` de `.bb1` a la nueva clase `building-wrap`.

- **code:**

  ```css
  /* code */
  .building-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* code */
  
  /* BACKGROUND BUILDINGS - "bb" stands for "background building" */
  .bb1 {
    width: 10%;
    height: 70%;
  }
  ```

## Paso 64

>> Añade la nueva clase `building-wrap` a los elementos `.bb1` y `.bb4`. Esto aplicará las propiedades de centrado a los edificios que lo necesiten.

- **code:**

  ```html
  <!-- code -->
  <div class="bb1 building-wrap">
  <!-- code -->
    <div class="bb1a bb1-window"></div>
    <div class="bb1b bb1-window"></div>
    <div class="bb1c bb1-window"></div>
    <div class="bb1d"></div>
  </div>

  <!-- code -->
  <div class="bb4 building-wrap">
  <!-- code -->
    <div class="bb4a"></div>
    <div class="bb4b"></div>
    <div class="bb4c"></div>
  </div>
  ```

## Paso 65

>> Crea una nueva variable llamada `--window-color4` en `:root` y asígnale el valor `#8cb3d9`. Este será el color secundario para la última construcción del fondo.

- **code:**

  ```css
  :root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
    --building-color4: #538cc6;
    --window-color1: black;
    --window-color2: #8cd9b3;
    --window-color3: #d98cb3;
    /* code */
    --window-color4: #8cb3d9;
    /* code */
  }
  ```

## Paso 66

>> Incluye cuatro nuevos elementos `div` dentro de `.bb4c` y asígnales a todos la clase `bb4-window`. Estas serán las ventanas de este edificio.

- **code:**

  ```html
  <div class="bb4c">
    <div class="bb4-window"></div>
    <div class="bb4-window"></div>
    <div class="bb4-window"></div>
    <div class="bb4-window"></div>
  </div>
  ```

## Paso 67

>> Asigna a la clase `bb4-window` un `width` del `18%`, una `height` del `90%` y añade tu variable `--window-color4` como `background-color`.

- **code:**

  ```css
  .bb4-window {
    width: 18%;
    height: 90%;
    background-color: var(--window-color4);
  }
  ```

## Paso 68

>> Las ventanas están apiladas unas encima de otras a la izquierda de la sección, detrás del edificio morado. Agrega una nueva clase debajo de `.building-wrap` llamada `window-wrap`. Configura `.window-wrap` como un contenedor _flexbox_ y utiliza las propiedades `align-items` y `justify-content` para centrar verticalmente sus elementos hijos y distribuirlos de manera uniforme dentro de su contenedor principal, respectivamente.

- **code:**

  ```css
  .window-wrap {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  ```

## Paso 69

>> Añade la nueva clase `window-wrap` al elemento `.bb4c`.

- **code:**

  ```html
  <div class="bb4c window-wrap">
    <div class="bb4-window"></div>
    <div class="bb4-window"></div>
    <div class="bb4-window"></div>
    <div class="bb4-window"></div>
  </div>
  ```

## Paso 70

>> _¡Se ve bien!_ ¡Pasemos a los edificios del primer plano! Divide el edificio `.fb1` en tres secciones anidando tres nuevos elementos `div` dentro de él. Asígnales las clases `fb1a`, `fb1b` y `fb1c`, en ese orden.

- **code:**

  ```html
  <div class="fb1">
    <div class="fb1a"></div>
    <div class="fb1b"></div>
    <div class="fb1c"></div>
  </div>
  ```

## Paso 71

>> Asigna a `.fb1b` un `width` del `60%` y una `height` del `10%`, y a `.fb1c` un `width` del `100%` y una `height` del `80%`.

- **code:**

  ```css
  .fb1b {
    width: 60%;
    height: 10%;
  }
  
  .fb1c {
    width: 100%;
    height: 80%;
  }
  ```

## Paso 72

>> Añade la clase `building-wrap` al elemento `.fb1` para centrar las secciones.

- **code:**

  ```html
  <div class="fb1 building-wrap">
    <div class="fb1a"></div>
    <div class="fb1b"></div>
    <div class="fb1c"></div>
  </div>
  ```

## Paso 73

>> Cambia la propiedad y el valor de `background-color` de `.fb1` a `.fb1b`.

- **code:**

  ```css
  .fb1 {
    width: 10%;
    height: 60%;
  }
  
  .fb1b {
    width: 60%;
    height: 10%;
    background-color: var(--building-color4);
  }
  ```

## Paso 74

No te preocupes por el espacio de la parte inferior; todo se desplazará hacia abajo más adelante, cuando le des algo de altura al elemento de la parte superior del edificio.

>> Añade un `repeating-linear-gradient` a `.fb1c` con un ángulo de `90deg`, con tu `--building-color4` del `0%` al `10%` y transparente del `10%` al `15%`.

- **code:**

  ```css
  .fb1c {
    width: 100%;
    height: 80%;
    /* code */
    background: repeating-linear-gradient(
      90deg,
      var(--building-color4) 0%,
      var(--building-color4) 10%,
      transparent 10%,
      transparent 15%
    );
    /* code */
  }
  ```

## Paso 75

Puedes añadir varios degradados a un elemento separándolos con una coma (`,`) de esta manera:

- **Example Code:**

  ```css
  gradient1(
    colors
  ),
  gradient2(
    colors
  );
  ```

>> Añade un `repeating-linear-gradient` a `.fb1c` debajo del que ya está ahí; utiliza tu `--building-color4` del `0%` al `10%` y `--window-color4` del `10%` al `90%`. Esto rellenará el espacio detrás del degradado que agregaste en último lugar.

- **code:**

  ```css
  .fb1c {
    width: 100%;
    height: 80%;
    background: repeating-linear-gradient(
      90deg,
      var(--building-color4) 0%,
      var(--building-color4) 10%,
      transparent 10%,
      transparent 15%
    ),
    repeating-linear-gradient(
      var(--building-color4) 0%,
      var(--building-color4) 10%,
      var(--window-color4) 10%,
      var(--window-color4) 90%
    );
  }
  ```

## Paso 76

>> Vas a utilizar algunos trucos más con los bordes para la sección superior. Añade un borde inferior (`border-bottom`) con un valor de `7vh solid var(--building-color4)` a `.fb1a`. Esto colocará un borde de `7vh` de altura en la parte inferior. Pero como el elemento tiene un tamaño nulo, solo se verá como una línea de 2 píxeles de ancho, derivada del borde de 1 píxel que tienen todos los elementos.

- **code:**

  ```css
  .fb1a {
    /* code */
    border-bottom: 7vh solid var(--building-color4);
    /* code */
  }
  ```

## Paso 77

Al aumentar el tamaño de los bordes izquierdo y derecho, el borde inferior se ampliará hasta alcanzar el ancho total de ambos bordes.

>> Añade `2vw solid transparent` como valor de las propiedades `border-left` y `border-right` de `.fb1a`.

Aunque serán invisibles, esto hará que el borde inferior tenga un ancho de 4vw.

- **code:**

  ```css
  .fb1a {
    border-bottom: 7vh solid var(--building-color4);
    /* code */
    border-left: 2vw solid transparent;
    border-right: 2vw solid transparent;
    /* code */
  }
  ```

## Paso 78

>> _¡Pasemos al siguiente elemento!_ Anida dos elementos `div` dentro de `.fb2` y asígnales las clases `fb2a` y `fb2b`, en ese orden.

- **code:**

  ```html
  <div class="fb2">
    <!-- code -->
    <div class="fb2a"></div>
    <div class="fb2b"></div>
    <!-- code -->
  </div>
  ```

## Paso 79

>> Asigna a `.fb2a` un `width` del `100%` y a `.fb2b` un `width` del `100%` y una `height` del `75%`.

- **code:**

  ```css
  .fb2a {
    width: 100%;
  }
  
  .fb2b {
    width: 100%;
    height: 75%;
  }
  ```

## Paso 80

>> Incluye tres elementos `div` dentro de `.fb2b` y asígnales la clase `fb2-window`. Estas serán las ventanas de esta sección del edificio.

- **code:**

  ```html
  <div class="fb2b">
    <!-- code -->
    <div class="fb2-window"></div>
    <div class="fb2-window"></div>
    <div class="fb2-window"></div>
    <!-- code -->
  </div>
  ```

## Paso 81

>> Añade tu clase de `window-wrap` a `.fb2b` para posicionar los nuevos elementos de la ventana.

- **code:**

  ```html
    <!-- code -->
  <div class="fb2b window-wrap">
    <!-- code -->
    <div class="fb2-window"></div>
    <div class="fb2-window"></div>
    <div class="fb2-window"></div>
  </div>
  ```

## Paso 82

>> Asigna a los elementos de la `.fb2-window` un `width` del `22%`, una `height` del `100%` y un `background-color` que coincida con tu variable `--window-color3`.

- **code:**

  ```css
  .fb2-window {
    width: 22%;
    height: 100%;
    background-color: var(--window-color3);
  }
  ```

## Paso 83

>> Cambia la propiedad y el valor de `background-color` de `.fb2` a `.fb2b` para que solo se coloree la sección y no el contenedor.

- **code:**

  ```css
  .fb2 {
    width: 10%;
    height: 40%;
  }
  
  .fb2a {
    width: 100%;
  }
  
  .fb2b {
    width: 100%;
    height: 75%;
    /* code */
    background-color: var(--building-color3);
    /* code */
  }
  ```

## Paso 84

>> Para `.fb2a`, agrega un borde inferior (`border-bottom`) de `10vh solid var(--building-color3)`, y un borde izquierdo (`border-left`) y derecho (`border-right`) de `1vw solid transparent`. En esta ocasión, el truco del borde creará una forma trapezoidal.

- **code:**

  ```css
  .fb2a {
    width: 100%;
    /* code */
    border-bottom: 10vh solid var(--building-color3);
    border-left: 1vw solid transparent;
    border-right: 1vw solid transparent;
    /* code */
  }
  ```

## Paso 85

>> Para el siguiente edificio, anida cuatro elementos `div` dentro de `.fb3` con las clases `fb3a`, `fb3b`, `fb3a` de nuevo y `fb3b` de nuevo, en ese orden. Este edificio tendrá cuatro secciones, y las dos superiores serán casi idénticas a las dos inferiores.

- **code:**

  ```html
  <div class="fb3">
    <!-- code -->
    <div class="fb3a"></div>
    <div class="fb3b"></div>
    <div class="fb3a"></div>
    <div class="fb3b"></div>
    <!-- code -->
  </div>
  ```

## Paso 86

>> Asigna al elemento `.fb3a` un `width` del `80%` y una `height` del `15%`. A continuación, asigna al elemento `.fb3b` un `width` del `100%` y una `height` del `35%`.

- **code:**

  ```css
  .fb3a {
    width: 80%;
    height: 15%;
  }
  
  .fb3b {
    width: 100%;
    height: 35%;
  }
  ```

## Paso 87

>> Elimina la propiedad y el valor de `background-color` de `.fb3`, y añádelos a `.fb3a` y `.fb3b`.

- **code:**

  ```css
  .fb3 {
    width: 10%;
    height: 50%;
  }
  
  .fb3a {
    width: 80%;
    height: 15%;
    /* code */
    background-color: var(--building-color1);
    /* code */
  }
  
  .fb3b {
    width: 100%;
    height: 35%;
    /* code */
    background-color: var(--building-color1);
    /* code */
  }
  ```

## Paso 88

>> Añade tu clase `building-wrap` al elemento `.fb3` para centrar las secciones.

- **code:**

  ```html
  <!-- code -->
  <div class="fb3 building-wrap">
  <!-- code -->
    <div class="fb3a"></div>
    <div class="fb3b"></div>
    <div class="fb3a"></div>
    <div class="fb3b"></div>
  </div>
  ```

## Paso 89

>> Incluye tres nuevos elementos `div` dentro del primer elemento `.fb3a`. Asigna a cada uno de ellos la clase `fb3-window`. Estos serán las ventanas de esta sección.

- **code:**

  ```html
  <!-- code -->
  <div class="fb3 building-wrap">
  <!-- code -->
    <div class="fb3a">
      <div class="fb3-window"></div>
      <div class="fb3-window"></div>
      <div class="fb3-window"></div>
    </div>
    <div class="fb3b"></div>
    <div class="fb3a"></div>
    <div class="fb3b"></div>
  </div>
  ```

## Paso 90

>> Asigna a los elementos de la `fb3-window` un `width` del `25%`, un `height` del `80%` y utiliza tu variable `--window-color1` como valor del `background-color`.

- **code:**

  ```css
  .fb3-window {
    width: 25%;
    height: 80%;
    background-color: var(--window-color1);
  }
  ```

## Paso 91

>> Añade la clase `window-wrap` al elemento `.fb3a` para centrar y espaciar las ventanas.

- **code:**

  ```html
  <!-- code -->
  <div class="fb3a window-wrap">
  <!-- code -->
    <div class="fb3-window"></div>
    <div class="fb3-window"></div>
    <div class="fb3-window"></div>
  </div>
  ```

## Paso 92

>> Con las variables CSS puedes modificar valores sin tener que buscar por toda la hoja de estilos. Cambia el valor de `--window-color1` a `#bb99ff`.

- **code:**

  ```css
  :root {
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
    --building-color4: #538cc6;
    /* code */
    --window-color1: #bb99ff;
    /* code */
    --window-color2: #8cd9b3;
    --window-color3: #d98cb3;
    --window-color4: #8cb3d9;
  }
  ```

## Paso 93

>> Solo quedan tres edificios más. Inserta dos nuevos elementos `div` dentro del elemento `.fb4` y asígnales las clases `fb4a` y `fb4b`, en ese orden. Recuerda que, en cierto modo, has intercambiado la posición de `.fb4` y `.fb5`, por lo que ahora estás trabajando en el edificio morado situado más a la derecha.

- **code:**

  ```html
  <div class="fb4">
    <!-- code -->
    <div class="fb4a"></div>
    <div class="fb4b"></div>
    <!-- code -->
  </div>
  ```

## Paso 94

>> Asigna a `.fb4b` un `width` del `100%` y una `height` del `89%`.

- **code:**

  ```css
  .fb4b {
    width: 100%;
    height: 89%;
  }
  ```

## Paso 95

>> Añade tu variable `--building-color1` como valor de la propiedad `background-color` de `.fb4b`. A continuación, elimina la propiedad `background-color` de `.fb4`.

- **code:**

  ```css
  .fb4 {
    width: 10%;
    height: 60%;
  }
  
  .fb4b {
    width: 100%;
    height: 89%;
    /* code */
    background-color: var(--building-color1);
    /* code */
  }
  ```

## Paso 96

>> Incluye seis elementos `div` dentro de `.fb4b` y asígnales a todos la clase `fb4-window`.

- **code:**

  ```html
  <div class="fb4">
    <div class="fb4a"></div>
    <div class="fb4b">
      <!-- code -->
      <div class="fb4-window"></div>
      <div class="fb4-window"></div>
      <div class="fb4-window"></div>
      <div class="fb4-window"></div>
      <div class="fb4-window"></div>
      <div class="fb4-window"></div>
      <!-- code -->
    </div>
  </div>
  ```

## Paso 97

>> Asigna a los elementos de la `.fb4-window` un `width` del `30%`, una `height` del `10%` y un `border-radius` de `50%`. Esto creará unas ventanas circulares para este edificio.

- **code:**

  ```css
  /* code */
  .fb4-window {
    width: 30%;
    height: 10%;
    border-radius: 50%;
  }
  /* code */
  ```

## Paso 98

>> Rellena las ventanas con el color secundario de este edificio. Añade también un `margin` del `10%` para dejar algo de espacio alrededor de las ventanas.

- **code:**

  ```css
  .fb4-window {
    width: 30%;
    height: 10%;
    border-radius: 50%;
    /* code */
    background-color: var(--window-color1);
    margin: 10%;
    /* code */
  }
  ```

## Paso 99

>> Las ventanas están apiladas unas encima de otras en el edificio morado situado más a la derecha. Convierte el edificio en un elemento padre de Flexbox y utiliza la propiedad `flex-wrap` para colocar las ventanas una al lado de la otra, y desplázalas hacia abajo a una nueva fila cuando no quepan.

- **code:**

  ```css
  .fb4b {
    width: 100%;
    height: 89%;
    background-color: var(--building-color1);
    /* code */
    display: flex;
    flex-wrap: wrap;
    /* code */
  }
  ```

## Paso 100

>> Este edificio tendrá otro triángulo en la parte superior. Aplica a la sección superior un borde superior (`border-top`) de `5vh solid transparent`, y un borde izquierdo (`border-left`) de `8vw`, `solid`, utilizando como color la variable de color del edificio.

- **code:**

  ```css
  /* code */
  .fb4a {
    border-top: 5vh solid transparent;
    border-left: 8vw solid var(--building-color1);
  }
  /* code */
  ```

## Paso 101

>> _¡Pasemos al siguiente edificio!_ Es el verde que se ve en primer plano. Aplícale un `repeating-linear-gradient` con el color del edificio del `0%` al `5%`, y `transparent` del `5%` al `10%`.

- **code:**

  ```css
  .fb5 {
    width: 10%;
    height: 60%;
    background-color: var(--building-color2);
    position: relative;
    right: 10%;
    /* code */
    background: repeating-linear-gradient(
      var(--building-color2) 0%,
      var(--building-color2) 5%,
      transparent 5%,
      transparent 10%
    );
    /* code */
  }
  ```

## Paso 102

>> Añade otro `repeating-linear-gradient` debajo del que acabas de añadir. Establece una dirección de `90deg`, utiliza el color del edificio del `0%` al `12%` y el color de las ventanas del `12%` al `44%`. Esto creará un montón de ventanas rectangulares.

- **code:**

  ```css
  .fb5 {
    width: 10%;
    height: 60%;
    background-color: var(--building-color2);
    position: relative;
    right: 10%;
    background: repeating-linear-gradient(
      var(--building-color2) 0%,
      var(--building-color2) 5%,
      transparent 5%,
      transparent 10%
    ),
    /* code */
    repeating-linear-gradient(
      90deg,
      var(--building-color2) 0%,
      var(--building-color2) 12%,
      var(--window-color2) 12%,
      var(--window-color2) 44%
    );
    /* code */
  }
  ```

## Paso 103

>> Ya no necesitas el `background-color` para este edificio, así que puedes eliminar esa propiedad.

- **code:**

  ```css
  .fb5 {
    width: 10%;
    height: 60%;
    /* code */
    Se elimina la propiedad background-color, ya que ahora estás utilizando los degradados como fondo.
    /* code */
    position: relative;
    right: 10%;
    background: repeating-linear-gradient(
      var(--building-color2) 0%,
      var(--building-color2) 5%,
      transparent 5%,
      transparent 10%
    ),
    repeating-linear-gradient(
      90deg,
      var(--building-color2) 0%,
      var(--building-color2) 12%,
      var(--window-color2) 12%,
      var(--window-color2) 44%
    );
  }
  ```

## Paso 104

>> _¡Por fin! ¡Has llegado al último edificio!_ Añádele un `repeating-linear-gradient` con una dirección de `90deg`. Usa el color del edificio del `0%` al `10%` y el color transparente del `10%` al `30%`.

- **code:**

  ```css
  .fb6 {
    width: 9%;
    height: 38%;
    background-color: var(--building-color3);
    /* code */
    background: repeating-linear-gradient(
      90deg,
      var(--building-color3) 0%,
      var(--building-color3) 10%,
      transparent 10%,
      transparent 30%
    );
    /* code */
  }
  ```

## Paso 105

>> Añade otro `repeating-linear-gradient` a este edificio; hazlo igual que el que acabas de añadir, pero sin la dirección de `90deg` y utilizando el color de la ventana en lugar de los dos colores `transparent`.

- **code:**

  ```css
  .fb6 {
    width: 9%;
    height: 38%;
    background-color: var(--building-color3);
    background: repeating-linear-gradient(
      90deg,
      var(--building-color3) 0%,
      var(--building-color3) 10%,
      transparent 10%,
      transparent 30%
    ),
    /* code */
    repeating-linear-gradient(
      var(--building-color3) 0%,
      var(--building-color3) 10%,
      var(--window-color3) 10%,
      var(--window-color3) 30%
    )
    /* code */
    ;
  }
  ```

## Paso 106

>> Ahora puedes eliminar el `background-color` de este edificio, ya que no es necesario.

- **code:**

  ```css
  .fb6 {
    width: 9%;
    height: 38%;
    /* code */
    Se elimina la propiedad background-color, ya que ahora estás utilizando los degradados como fondo.
    /* code */
    background: repeating-linear-gradient(
      90deg,
      var(--building-color3) 0%,
      var(--building-color3) 10%,
      transparent 10%,
      transparent 30%
    ),
    repeating-linear-gradient(
      var(--building-color3) 0%,
      var(--building-color3) 10%,
      var(--window-color3) 10%,
      var(--window-color3) 30%
    )
    ;
  }
  ```

## Paso 107

>> Bien, ya están listos los edificios. Vuelve al selector `*` y elimina el `border` que aplicaste a todo al principio; así, los edificios quedarán bien integrados.

- **code:**

  ```css
  * {
    /* code */
    Se elimina la propiedad border que se aplicó a todo al principio, para que los edificios queden bien integrados.
    /* code */
    box-sizing: border-box;
  }
  ```

## Paso 108

>> Añade `sky` como segunda clase al elemento `.background-buildings`. Vas a crear un fondo para el horizonte.

- **code:**

  ```html
  <!-- code -->
  <div class="background-buildings sky">
  <!-- code -->
    <div class="bb1 building-wrap">
      <div class="bb1a bb1-window"></div>
      <div class="bb1b bb1-window"></div>
      <div class="bb1c bb1-window"></div>
      <div class="bb1d"></div>
    </div>
    <div class="bb2a"></div>
    <div class="bb3"></div>
    <div class="bb4 building-wrap">
      <div class="bb4a"></div>
      <div class="bb4b"></div>
      <div class="bb4c window-wrap">
        <div class="bb4-window"></div>
        <div class="bb4-window"></div>
        <div class="bb4-window"></div>
        <div class="bb4-window"></div>
      </div>
    </div>
  </div>
  ```

## Paso 109

>> Aplica un `radial-gradient` a la clase `sky`. Usa `#ffcf33` del `0%` al `20%`, `#ffff66` en el `21%` y `#bbeeff` en el `100%`. Esto añadirá un degradado circular al fondo, que será tu sol.

- **code:**

  ```css
  .sky {
    background: radial-gradient(
      #ffcf33 0%,
      #ffcf33 20%,
      #ffff66 21%,
      #bbeeff 100%
    );
  }
  ```

## Paso 110

>> En la parte superior de la lista de colores del degradado del cielo, donde se suele indicar la dirección del degradado, añade `circle closest-corner at 15% 15%,`. Esto desplazará el inicio del degradado al `15%` desde la parte superior izquierda. Hará que termine en la _esquina más cercana_ (`closest-corner`) y mantendrá una forma _circular_ (`circle`). Estas son algunas palabras clave integradas en los degradados para describir su comportamiento.

- **code:**

  ```css
  .sky {
    background: radial-gradient(
      /* code */
      circle closest-corner at 15% 15%,
      /* code */
      #ffcf33 0%,
      #ffcf33 20%,
      #ffff66 21%,
      #bbeeff 100%
    );
  }
  ```

## Paso 111

>> En el módulo anterior aprendiste que las consultas de medios se pueden utilizar para modificar estilos en función de determinadas condiciones, y tienen este aspecto:

- **Example code:**

  ```css
  @media (condition) {
  
  } 
  ```

>> Añade una consulta de medios vacía (`@media query`) al final de tu hoja de estilos con la condición `max-width: 1000px`. Los estilos que se añadan aquí se aplicarán cuando el documento tenga un ancho de 1000 píxeles o menos.

- **code:**

  ```css
  @media (max-width: 1000px) {
    
  }
  ```

## Paso 112

>> Copia y pega toda la clase `sky`, junto con todas sus propiedades y valores, en la consulta de medios. Vas a crear otra combinación de colores para el horizonte que cambie de día a noche.

_Nota: Tendrás que desplazarte más allá de la zona editable para copiar la clase._

- **code:**

  ```css
  @media (max-width: 1000px) {
    .sky {
      /* code */
      background: radial-gradient(
        circle closest-corner at 15% 15%,
        #ffcf33 0%,
        #ffcf33 20%,
        #ffff66 21%,
        #bbeeff 100%
      );
      /* code */
    }
  }
  ```

## Paso 113

>> En la clase `sky` de la consulta de medios, cambia los dos valores de color `#ffcf33` por `#ccc`, el `#ffff66` por `#445` y el `#bbeeff` por `#223`. A continuación, puedes cambiar el tamaño de la ventana para ver cómo cambia el color del fondo.

- **code:**

  ```css
  @media (max-width: 1000px) {
    .sky {
      background: radial-gradient(
        circle closest-corner at 15% 15%,
        /* code */
        #ccc 0%,
        #ccc 20%,
        #445 21%,
        #223 100%
        /* code */
      );
    }
  }
  ```

## Paso 114

>> Añade un selector `:root` al principio de tu consulta de medios. A continuación, redefine las cuatro variables `--building-color` para que utilicen el valor `#000` en ese punto.

- **code:**

  ```css
  @media (max-width: 1000px) {
    /* code */
    :root {
      --building-color1: #000;
      --building-color2: #000;
      --building-color3: #000;
      --building-color4: #000;
    }
    /* code */

    .sky {
      background: radial-gradient(
        circle closest-corner at 15% 15%,
        #ccc 0%,
        #ccc 20%,
        #445 21%,
        #223 100%
      );
    }
  }
  ```

## Paso 115

>> Por último, en el selector `:root` de la consulta de medios, redefine las cuatro variables `--window-color` para que utilicen el valor `#777`.

_Cuando hayas terminado, cambia el tamaño de la ventana y observa cómo pasa del día a la noche._

Las variables se utilizan principalmente con colores, y así es como las has usado aquí. Sin embargo, se les puede asignar cualquier valor y utilizarlas en cualquier propiedad.

- **code:**

  ```css
  @media (max-width: 1000px) {
    :root {
      --building-color1: #000;
      --building-color2: #000;
      --building-color3: #000;
      --building-color4: #000;
      /* code */
      --window-color1: #777;
      --window-color2: #777;
      --window-color3: #777;
      --window-color4: #777;
      /* code */
    }

    .sky {
      background: radial-gradient(
        circle closest-corner at 15% 15%,
        #ccc 0%,
        #ccc 20%,
        #445 21%,
        #223 100%
      );
    }
  }
  ```

**¡Tu proyecto se ve genial!**
