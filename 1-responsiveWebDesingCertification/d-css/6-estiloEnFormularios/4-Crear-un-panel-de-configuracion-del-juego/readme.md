# Crear un panel de configuración del juego

En este taller, practicarás el diseño de casillas de verificación creando un panel de configuración de juegos.

---

## Paso 1

Se te ha proporcionado todo el código HTML básico (`DOCTYPE`, `html`, `head` y `body`).

> Dentro del `body`, crea un elemento `div` con un elemento `h1` anidado en su interior. Dale al elemento `h1` el texto `Game Settings`.

- **Codigo**

  ```html
  <!-- code -->
  <div>
    <h1>Game Settings</h1>
  </div>
  <!-- code -->
  ```

---

## Paso 2

> Inmediatamente después del elemento `h1`, crea cuatro elementos `label`.
>
> Dentro de cada uno de los elementos `label`, crea un elemento `input` con el atributo `type` establecido en `checkbox`.
>
> Después de cada elemento `input`, asigna a los elementos `label` los siguientes textos, en este orden: `Sound Effects`, `Background Music`, `Hard Mode`, and `Haptic Feedback`.

- **Codigo**

  ```html
  <div>
    <h1>Game Settings</h1>
    <!-- code -->
    <label for="">
      <input type="checkbox" name="" id="">
      Sound Effects
    </label>
    <label for="">
      <input type="checkbox" name="" id="">
      Background Music
    </label>
    <label for="">
      <input type="checkbox" name="" id="">
      Hard Mode
    </label>
    <label for="">
      <input type="checkbox" name="" id="">
      Haptic Feedback
    </label>
    <!-- code -->
  </div>
  ```

---

## Paso 3

Ahora comenzará a mejorar la página con algunos estilos CSS. Comience por crear el selector `body`.

> Configure el `body` para que tenga una propiedad `height` con un valor de `100vh` y una propiedad `background-color` con un valor de `#f0f0f0`.

El `height` de `100vh` hace que el `body` ocupe toda la altura de la ventana gráfica del navegador, mientras que el color de fondo gris claro proporciona una base sutil para la página.

> Por último, establezca una propiedad `text-align` con el valor `center`. Esto centrará todo el contenido en línea de la página, a menos que un elemento secundario lo anule con su propia alineación.

- **Codigo**

  ```css
  body {
    height: 100vh;
    background-color: #f0f0f0;
    text-align: center;
  }
  ```

---

## Paso 4

Ahora que ya ha diseñado el cuerpo, va a crear una tarjeta contenedora para el panel Configuración del juego.

> Para empezar, añada una clase `settings-card` a su elemento `div`.

- **Codigo**

  ```html
  <!-- code -->
  <div class="settings-card">
  <!-- code -->
    <h1>Game Settings</h1>
    <label for="">
      <input type="checkbox" name="" id="">
      Sound Effects
    </label>
    <label for="">
      <input type="checkbox" name="" id="">
      Background Music
    </label>
    <label for="">
      <input type="checkbox" name="" id="">
      Hard Mode
    </label>
    <label for="">
      <input type="checkbox" name="" id="">
      Haptic Feedback
    </label>
  </div>
  ```

---

## Paso 5

Ahora es el momento de dar estilo al contenedor `settings-card`. Crea un selector de clase para `settings-card`.

Aquí es donde se aplicará todo el formato del contenedor. Establece el `max-width` en `250px` para definir el tamaño total del contenedor.

A continuación, establece el `padding` en `20px` para que el contenido tenga espacio entre él y el borde del contenedor.

Después, crea un borde redondeado estableciendo el `border-radius` en `10px`.

A continuación, establece una `box-shadow` con los valores `0 2px 6px rgba(0,0,0,0.2)`. Esto creará un sutil efecto de «elevación» que aportará profundidad al contenedor.

- **Codigo**

  ```css
  body {
    height: 100vh;
    background-color: #f0f0f0;
    text-align: center;
  }

  /* code */
  .settings-card {
    max-width: 250px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
  /* code */
  ```

---

## Paso 6

> Dentro de tu selector `.settings-card`, establece la propiedad `margin` en `auto`.

Al establecer la propiedad `margin` en `auto`, se ajustan automáticamente los márgenes de un elemento para distribuir uniformemente el espacio restante en su contenedor, lo que se utiliza comúnmente para centrar horizontalmente los elementos de nivel de bloque.

> Por último, establece una propiedad `text-align` con el valor `left`. Esto alineará el contenido en línea, como el texto, con el lado izquierdo de su elemento contenedor.

- **Codigo**

  ```css
  body {
    height: 100vh;
    background-color: #f0f0f0;
    text-align: center;
  }

  .settings-card {
    max-width: 250px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    /* code */
    margin: auto;
    text-align: left;
    /* code */
  }
  ```

---

## Paso 7

> Ahora crea un selector `h1` y establece la propiedad `text-align` con un valor de `center`. Esto centrará tus elementos `h1`.

- **Codigo**

  ```css
  .settings-card {
    max-width: 250px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    margin: auto;
    text-align: left;
  }

  /* code */
  h1 {
    text-align: center;
  }
  /* code */
  ```

---

## Paso 8

> Necesitas dejar algo de espacio entre las casillas de verificación y las etiquetas. Empieza por utilizar el selector para `label` en tu CSS y establece una propiedad de `display` de `block`.
>
> A continuación, establece una propiedad de `margin` de `auto` para añadir espacio vertical entre los elementos. Esto creará un espacio uniforme por encima y por debajo de cada elemento, lo que ayudará a separar el contenido y mejorar la legibilidad.
>
> Por último, establezca la propiedad `cursor` en `pointer` en los elementos `label`. Esto cambiará el cursor a un icono de mano cuando el usuario pase el cursor por encima de una etiqueta, lo que indicará que el elemento es clicable y mejorará la experiencia general del usuario.

- **Codigo**

  ```css
  h1 {
    text-align: center;
  }

  /* code */
  label{
    display: block;
    margin: 8px auto;
    cursor: pointer;
  }
  /* code */
  ```

---

## Paso 9

A continuación, vas a ampliar las casillas de verificación para mejorar su visibilidad.

> Empieza por configurar un selector `input`, pero apuntando específicamente a tu `[type="checkbox"]`.

Dentro de tu selector, establece el `width` y el `height` en `20px`. Esto lo hará más grande que antes.

Y para ajustarse a la configuración del `cursor` que se estableció en las etiquetas, agrega `cursor` y asígnale el valor de `pointer`. Después de eso, cuando pases el cursor sobre las casillas de verificación, se mostrará un puntero.

- **Codigo**

  ```css
  label{
    display: block;
    margin: 8px auto;
    cursor: pointer;
  }

  /* code */
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  /* code */
  ```

---

## Paso 10

> Ahora vas a eliminar la casilla de verificación predeterminada que aplican los navegadores. Dentro de tu selector `input[type='checkbox']`, añade `appearance` con un valor de `none`.

Al establecer la propiedad `appearance` en `none`, se borrará la apariencia que el navegador aplica a las casillas de verificación, lo que te permitirá mostrar el estilo que desees.

> Después de hacerlo, dado que la casilla de verificación ya no será visible, establece un `border` con `2px` `solid` y un código hexadecimal de `#f1be32`.

- **Codigo**

  ```css
  label{
    display: block;
    margin: 8px auto;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    /* code */
    appearance: none;
    border: 2px solid #f1be32;
    /* code */
  }
  ```

---

## Paso 11

> Ahora que puedes volver a ver tu casilla de verificación, vas a finalizar algunas opciones de estilo para ella. Dale un `border-radius` añadiendo un radio de borde de `4px` a tu selector `input[type="checkbox"]`.
>
> A continuación, dale un `background-color` `white` para que el centro de la casilla de verificación destaque sobre el fondo del contenedor.

Dado que vas a configurar una transición personalizada para cuando un usuario haga clic en las casillas de verificación, establece una `transición` con el valor `all` y `0.3s` para que la transición se produzca de forma suave durante 0.3 segundos en lugar de instantáneamente.

- **Codigo**

  ```css
  label{
    display: block;
    margin: 8px auto;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    appearance: none;
    border: 2px solid #f1be32;
    /* code */
    border-radius: 4px;
    background-color: white;
    transition: all 0.3s;
    /* code */
  }
  ```

---

## Paso 12

> A continuación, establezca una propiedad `vertical-align` con un valor de `middle`.

La propiedad `vertical-align` controla cómo los elementos `inline` o `inline-block` se alinean verticalmente con el texto circundante u otros elementos inline. Se utiliza a menudo para ajustar la posición vertical de elementos como imágenes, iconos o texto dentro de una línea.

> A continuación, finalice su casilla de verificación con una propiedad `margin` de `15px`.

- **Codigo**

  ```css
  label{
    display: block;
    margin: 8px auto;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    appearance: none;
    border: 2px solid #f1be32;
    border-radius: 4px;
    background-color: white;
    transition: all 0.3s;
    /* code */
    vertical-align: middle;
    margin: 15px;
    /* code */
  }
  ```

---

## Paso 13

En una lección anterior, aprendiste sobre las pseudoclases y los pseudoelementos en CSS. Ahora vas a aplicar esos conocimientos creando un selector de tipo combinado con un selector de pseudoclase.

> Primero, comience con el formato del selector de tipo estableciéndolo como `input[type="checkbox"]` y añadiendo `:checked` al final.
>
> A continuación, asígnele un `background-color` con el valor `#f1be32`.

Por último, establezca el `border-color` con el valor `#e2a60d`.

- **Codigo**

  ```css
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    appearance: none;
    border: 2px solid #f1be32;
    border-radius: 4px;
    background-color: white;
    transition: all 0.3s;
    vertical-align: middle;
    margin: 15px;
  }

  /* code */
  input[type="checkbox"]:checked {
    background-color: #f1be32;
    border-color: #e2a60d;
  }
  /* code */
  ```

---

## Paso 14

Ahora que las casillas de verificación cambian de color cuando el usuario hace clic en ellas, vas a aplicar algunos estilos para que resulte un poco más evidente que la casilla ha sido seleccionada.

Las pseudoclases CSS se pueden encadenar. Puedes añadir una pseudoclase o un pseudoelemento tras otro para seleccionar elementos que cumplan varias condiciones.

> Cree un nuevo selector para input[type="checkbox"]. Agregue la pseudoclase `:checked` seguida del pseudoelemento `::after`. Esto le permite agregar un indicador visual cuando la casilla de verificación está marcada.
>
> A continuación, agregue `content` con el valor `"✓"`.

- **Codigo**

  ```css
  input[type="checkbox"]:checked {
    background-color: #f1be32;
    border-color: #e2a60d;
  }

  /* code */
  input[type="checkbox"]:checked::after {
    content: "✓";
  }
  /* code */
  ```

---

## Paso 15

En la declaración para el selector `input[type="checkbox"]:checked::after`, establece la `display` en `block`. Al establecer la propiedad de visualización como bloque, el elemento se convierte en un elemento de nivel de bloque, lo que significa que ocupa todo el ancho de su contenedor y comienza en una nueva línea, lo que te permite controlar su ancho, alto y espaciado más fácilmente.
>
> A continuación, establezca `text-align` en `center`. Esto centrará el contenido en línea (como texto o elementos en línea) horizontalmente dentro del bloque. El bloque seguirá ocupando todo el ancho de su contenedor, pero todo lo que haya dentro se alineará al centro.

- **Codigo**

  ```css
  input[type="checkbox"]:checked {
    background-color: #f1be32;
    border-color: #e2a60d;
  }

  input[type="checkbox"]:checked::after {
    content: "✓";
    /* code */
    display: block;
    text-align: center;
    /* code */
  }
  ```

---

## Paso 16

> Para terminar de configurar el efecto visual de tu casilla de verificación, establece la propiedad `font-weight` con un valor de `bold`. Esto aumentará la visibilidad de la marca de verificación.
>
> Ahora que es más fácil de ver, cambia el `color` a un valor de `white`. Esto cambiará el color de la marca de verificación dentro de la casilla cuando esté marcada.
>
> Por último, cambia la `line-height` a un valor de `20px`.

- **Codigo**

  ```css
  input[type="checkbox"]:checked {
    background-color: #f1be32;
    border-color: #e2a60d;
  }

  input[type="checkbox"]:checked::after {
    content: "✓";
    display: block;
    text-align: center;
    /* code */
    font-weight: bold;
    color: white;
    line-height: 20px;
    /* code */
  }
  ```

---

**¡Con eso, ya ha completado el panel de configuración del juego!**
