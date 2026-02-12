# Diseñar una tarjeta de felicitación

En este taller, practicarás el uso de diferentes pseudo-clases y pseudo-elementos mediante el diseño de una tarjeta de felicitación. Se te ha proporcionado el código HTML básico.

---

## Paso 1

> Comienza el taller vinculando el archivo `styles.css`.

- **Codigo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Greeting Card</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    </body>
  </html>
  ```

---

## Paso 2

> Cree un elemento `div` con el `id` `greeting-card` y la `class` `card`.
>
> Dentro del elemento `div`, añada un `h1` con el texto `Happy Birthday!` A continuación, añada un elemento de `párrafo` con una `clase` llamada `message` y el texto `Wishing you all the happiness and joy on your special day!`

- **Codigo**

  ```html
  <div id="greeting-card" class="card">
    <h1>Happy Birthday!</h1>
    <p class="message">
      Wishing you all the happiness and joy on your special day!
    </p>
  </div>
  ```

---

## Paso 3

Ahora es el momento de dar estilo a tu tarjeta de felicitación.

> Añade un selector para el elemento `body` y, a continuación:

- cambia la `font-family` a `Arial` seguida de `sans-serif` genérica,
- añade un `padding` de `40px` en todos los lados,
- establece la propiedad `text-align` en `center`.

- **Codigo**

  ```css
  body{
    font-family: Arial, sans-serif;
    padding: 40px;
    text-align: center;
  }
  ```

---

## Paso 4

> Ahora es el momento de añadir algo de color. Dale al `body` un `background-color` `brown` y también dale al `.card` un `background-color` `white`.

- **Codigo**

  ```css
  body{
    font-family: Arial, sans-serif;
    padding: 40px;
    text-align: center;
    /* code */
    background-color: brown;
  }

  .card{
    background-color: white;
    /* code */
  }
  ```

---

## Paso 5

> Asigna a `.card` un `max-width` de `400px`, un `padding` de `40px` en todos los lados y un `margin` de `0` en la parte superior e inferior y `auto` en la izquierda y la derecha (usa la propiedad abreviada).

- **Codigo**

  ```css
  body{
    font-family: Arial, sans-serif;
    padding: 40px;
    text-align: center;
    background-color: brown;
  }

  .card{
    background-color: white;
    /* code */
    max-width: 400px;
    padding: 40px;
    margin: 0 auto;
    /* code */
  }
  ```

---

## Paso 6

> El elemento `.card` necesita un poco más de estilo: agrega un `border-radius` de `10px` y un `box-shadow` con un valor de `0 4px 8px gray`.

- **Codigo**

  ```css
  body{
    font-family: Arial, sans-serif;
    padding: 40px;
    text-align: center;
    background-color: brown;
  }

  .card{
    background-color: white;
    max-width: 400px;
    padding: 40px;
    margin: 0 auto;
    /* code */
    border-radius: 10px;
    box-shadow: 0 4px 8px gray;
    /* code */
  }
  ```

---

## Paso 7

> Ahora agrega un nuevo `div` debajo del elemento `.message`. El nuevo `div` debe tener un atributo de `class` `card-links`.

- **Codigo**

  ```html
  <div id="greeting-card" class="card">
    <h1>Happy Birthday!</h1>
    <p class="message">
      Wishing you all the happiness and joy on your special day!
    </p>
    <!-- code -->
    <div class="card-links"></div>
    <!-- code -->
  </div>
  ```

---

## Paso 8

> Agrega dos elementos `a` dentro del elemento `.card-links`.
>
> El primero debe tener el texto `Send Card`, una `class` `send-link` y un `href` de `#send`.
>
> El segundo debe tener el texto `Share on Social Media`, una `class` `share-link` y un `href` de `#share`.

- **Codigo**

  ```html
  <div id="greeting-card" class="card">
    <h1>Happy Birthday!</h1>
    <p class="message">
      Wishing you all the happiness and joy on your special day!
    </p>
    <div class="card-links">
      <!-- code -->
      <a href="#send" class="send-link">Send Card</a>
      <a href="#share" class="share-link">Share on Social Media</a>
      <!-- code -->
    </div>
  </div>
  ```

---

## Paso 9

> Agregue dos elementos de `section`, uno tras otro. El primero debe tener un `id` de `send`, el segundo debe tener un `id` de `share`.

- **Codigo**

  ```html
  </body>
    <div id="greeting-card" class="card">
      <h1>Happy Birthday!</h1>
      <p class="message">
        Wishing you all the happiness and joy on your special day!
      </p>
      <div class="card-links">
        <a href="#send" class="send-link">Send Card</a>
        <a href="#share" class="share-link">Share on Social Media</a>
      </div>
    </div>
    <!-- code -->
    <section id="send"></section>
    <section id="share"></section>
    <!-- code -->
  </body>
  ```

---

## Paso 10

> Agrega un `h2` a `#send` que contenga el texto `Sending your card...`, luego agrega un elemento `p` con el texto `Card successfully sent to your recipient!`.

- **Codigo**

  ```html
  </body>
    <div id="greeting-card" class="card">
    </div>
    <section id="send">
      <!-- code -->
      <h2>Sending your card...</h2>
      <p>
        Card successfully sent to your recipient!
      </p>
      <!-- code -->
    </section>
    <section id="share"></section>
  </body>
  ```

---

## Paso 11

¡Es hora de rellenar la segunda sección!

> Añade un elemento `h2` al elemento `#share` que contenga el texto `Sharing your card...`, luego añade un elemento `p` con el texto `Your card was shared on social media!`.

- **Codigo**

  ```html
  </body>
    <div id="greeting-card" class="card">
    </div>
    <section id="send">
      <h2>Sending your card...</h2>
      <p>
        Card successfully sent to your recipient!
      </p>
    </section>
    <section id="share">
      <!-- code -->
      <h2>Sharing your card...</h2>
      <p>
        Your card was shared on social media!
      </p>
      <!-- code -->
    </section>
  </body>
  ```

---

## Paso 12

> Agrega un nuevo selector que cambie el `background-color` del elemento `.card` a `khaki` cuando se pase el cursor por encima.

- **Codigo**

  ```css
  .card{
    background-color: white;
    max-width: 400px;
    padding: 40px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px gray;
  }

  /* code */
  .card:hover{
    background-color: khaki;
  }
  /* code */
  ```

---

## Paso 13

La propiedad `transform` puede transformar el aspecto del elemento. Por ejemplo, si le asignas un valor de `scale(0.9)`, el elemento se reducirá un 10 %.

- **Codigo Ejemplo**

  ```css
  p {
    transform: scale(0.9);
  }
  ```

> Agregue una propiedad de `transform` al selector `.card:hover` y configúrela en `scale(1.1)`.

- **Codigo**

  ```css
  .card{
    background-color: white;
    max-width: 400px;
    padding: 40px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px gray;
  }

  .card:hover{
    background-color: khaki;
    /* code */
    transform: scale(1.1);
    /* code */
  }
  ```

---

## Paso 14

Cuando se pasa el cursor por encima de los elementos `a`, el color del fondo cambia a otro color. Puede regular cómo se produce esa transición con la propiedad `transition`:

- **Codigo Ejemplo**

  ```css
  a {
    transition: color 1s linear;
  }
  ```

Los valores que acepta la propiedad `transition` son, en orden, la propiedad a la que se aplica la transición, la duración de la transición y, a continuación, la sincronización.

Si hay varias propiedades que tienen una transición, puede escribir los valores de cada una separados por una coma:

- **Codigo Ejemplo**

  ```css
  p {
    transition: property1 0.1s, property2 0.6s linear;
  }
  ```

Si se omite un valor, como el tiempo para la primera propiedad, se aplica un valor predeterminado.

> Añádalo al selector `.card` `transition: transform 0.3s, background-color 0.3s ease`.

Pruébelo, la transición al pasar el cursor está completa.

- **Codigo**

  ```css
  .card{
    background-color: white;
    max-width: 400px;
    padding: 40px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px gray;
    /* code */
    transition: transform 0.3s, background-color 0.3s ease
    /* code */
  }

  .card:hover{
    background-color: khaki;
    transform: scale(1.1);
  }
  ```

---

## Paso 15

Puedes agregar un emoji delante del título utilizando el pseudo-elemento `::before` del elemento `h1`.

> Crea un selector `h1::before`, asígnale una propiedad de `content` y establece su valor en `"🥳 "` (ten en cuenta que hay un espacio después del emoji).

- **Codigo**

  ```css
  .card{
  }

  .card:hover{
    background-color: khaki;
    transform: scale(1.1);
  }

  /* code */
  h1::before {
    content: "🥳 ";
  }
  /* code */
  ```

---

## Paso 16

Ahora puedes hacer algo similar para añadir el emoji también después del título.

Crea un selector que apunte al pseudoelemento `::after` del elemento `h1`. Dale una propiedad de `content` y establece su valor en `" 🥳"` (ten en cuenta que hay un espacio antes del emoji).

- **Codigo**

  ```css
  .card{
  }

  .card:hover{
    background-color: khaki;
    transform: scale(1.1);
  }

  h1::before {
    content: "🥳 ";
  }

  /* code */
  h1::after {
    content: " 🥳";
  }
  /* code */
  ```

---

## Paso 17

El elemento `.message` necesita algo de estilo. Dale:

- un `font-size` de `1.2em`,
- un `margin-bottom` de `20px`.

- **Codigo**

  ```css
  h1::before {
    content: "🥳 ";
  }

  h1::after {
    content: " 🥳";
  }

  /* code */
  .message {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  /* code */
  ```

---

## Paso 18

> Agrega un selector `.card-links` y establece la propiedad `margin-top` en `20px`.

Puedes agregar `display: flex` para configurar un elemento para que use flexbox. Aprenderás más sobre flexbox más adelante en el curso, puedes considerar esto como una pequeña vista previa.

> Para espaciar los dos enlaces de manera que tengan el mismo espacio alrededor, agrega una propiedad `display` establecida en `flex` y una propiedad `justify-content` establecida en `space-around`.

- **Codigo**

  ```css
  h1::before {
    content: "🥳 ";
  }

  h1::after {
    content: " 🥳";
  }

  .message {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  /* code */
  .card-links {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  /* code */
  ```

---

## Paso 19

> Selecciona los elementos `a` dentro de `.card-links` y asígnales:

- una propiedad `text-decoration` establecida en `none`.
- una propiedad `font-size` establecida en `1em`.
- una propiedad `padding` establecida en 10px `20px`.
- una propiedad `border-radius` establecida en `5px`.
- una propiedad `color` establecida en `white`.
- una propiedad `background-color` establecida en `midnightblue`i.

- **Codigo**

  ```css
  .card-links {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

  /* code */
  .card-links a {
    text-decoration: none;
    font-size: 1em;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    background-color: midnightblue;
  }
  /* code */
  ```

---

## Paso 20

Cree un selector de pseudo-clase que apunte a los elementos `.card-links a` cuando se pase el cursor por encima.

> El `background-color` debería cambiar a `orangered`.

- **Codigo**

  ```css
  .card-links {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

  .card-links a {
    text-decoration: none;
    font-size: 1em;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    background-color: midnightblue;
  }

  /* code */
  .card-links a:hover{
    background-color: orangered;
  }
  /* code */
  ```

---

## Paso 21

> Agrega una propiedad de `transition` al selector `.card-links a` y asígnale un valor de `background-color 0.3s ease`.

- **Codigo**

  ```css
  .card-links {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

  .card-links a {
    text-decoration: none;
    font-size: 1em;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    background-color: midnightblue;
    /* code */
    transition: background-color 0.3s ease;
    /* code */
  }

  .card-links a:hover{
    background-color: orangered;
  }
  ```

---

## Paso 22

> Agrega un nuevo selector que apunte a los elementos `.card-links a` cuando estén activos(`:active`). Establece el `background-color` en `midnightblue`.

- **Codigo**

  ```css
  .card-links a {
    text-decoration: none;
    font-size: 1em;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    background-color: midnightblue;
    transition: background-color 0.3s ease;
  }

  .card-links a:hover{
    background-color: orangered;
  }

  /* code */
  .card-links a:active {
    background-color: midnightblue;
  }
  /* code */
  ```

---

## Paso 23

> Agrega un nuevo selector que apunte a los elementos `.card-links a` cuando estén enfocados(`:focus`). Establece la propiedad outline en `2px solid yellow`.

- **Codigo**

  ```css
  .card-links a:hover{
    background-color: orangered;
  }

  .card-links a:active {
    background-color: midnightblue;
  }

  /* code */
  .card-links a:focus {
    outline: 2px solid yellow;
  }
  /* code */
  ```

---

## Paso 24

> Cree un nuevo selector que apunte a los elementos `.card-links a` si ya han sido visitados. Establezca la propiedad `color` en `crimson`.

- **Codigo**

  ```css
  .card-links a:hover{
    background-color: orangered;
  }

  .card-links a:active {
    background-color: midnightblue;
  }

  .card-links a:focus {
    outline: 2px solid yellow;
  }
  
  /* code */
  .card-links a:visited{
    color: crimson;
  }
  /* code */
  ```

---

## Paso 25

Cree un selector para los elementos de la `section` y asígneles:

- una propiedad de `margin` establecida en `20px auto`,
- un `max-width` establecido en `600px`,
- una propiedad de `background-color` establecida en `whitesmoke`,
- una propiedad de `padding` establecida en `20px`,
- una propiedad de `border-radius` establecida en `10px`.

- **Codigo**

  ```css
  .card-links a:visited{
    color: crimson;
  }

  /* code */
  section {
    margin: 20px auto;
    max-width: 600px;
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
  }
  /* code */
  ```

---

## Paso 26

Otro valor que se puede utilizar para la propiedad `transform` es `skewX`, esta función inclina el elemento horizontalmente.

- **Codigo Ejemplo**

  ```css
  div {
    transform: skewX(7deg);
  }
  ```

> Agregue un selector que apunte a los elementos de la `section` al pasar el cursor por encima. Establezca la propiedad de `transform` en `skewX(10deg)`.

- **Codigo**

  ```css
  section {
    margin: 20px auto;
    max-width: 600px;
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
  }

  /* code */
  section:hover {
    transform: skewX(10deg);
  }
  /* code */
  ```

---

## Paso 27

> Como último paso para completar este proyecto, agrega una propiedad `display` establecida en `none` al selector de `section`.
>
> Después, crea un selector `section:target` y agrega allí una propiedad `display` establecida en `block` para que los elementos de la `section` solo sean visibles cuando se haga clic en los enlaces.

- **Codigo**

  ```css
  section {
    margin: 20px auto;
    max-width: 600px;
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
    /* code */
    display: none;
    /* code */
  }

  section:hover {
    transform: skewX(10deg);
  }

  /* code */
  section:target{
    display: block;
  }
  /* code */
  ```

---
