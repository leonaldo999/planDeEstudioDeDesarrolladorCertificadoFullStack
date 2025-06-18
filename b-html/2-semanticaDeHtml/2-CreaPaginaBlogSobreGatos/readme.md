# Crea una página de blog sobre gatos

En este taller, creará una página de blog solo en HTML utilizando elementos semánticos, incluidos los elementos main, nav, article y footer.

## Paso 1

En este taller, practicarás el uso de HTML semántico creando una página de blog dedicada al gato Sr. Whiskers.

Para comenzar el proyecto, añade el elemento `<!DOCTYPE html>` y un elemento html con el atributo lang de en.

Recuerda que aprendiste a crear un HTML básico como este en el módulo anterior.

- **Codigo ejemplo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <!--all other elements go here-->
  </html>
  ```

## Paso 2

Dentro del elemento `html`, agrega un elemento de `head`.

- **Codigo ejemplo**

  ```html
  <head>
  </head>
  ```

## Paso 3

Dentro del elemento `head`, anide un elemento `meta` con el atributo `charset` establecido en `"UTF-8"`.

Debajo de ese elemento `meta`, agregue un elemento `title`.

El texto del elemento `title` debe ser `Mr. Whiskers' Blog`.

- **Codigo ejemplo**

  ```html
  <head>
    <meta charset="UTF-8">
    <title>Mr. Whiskers' Blog</title>
  </head>
  ```

## Paso 4

Para preparar la creación de contenido, agrega un elemento de `body` debajo del elemento `head`.

- **Codigo ejemplo**

  ```html
  <head>
    <meta charset="UTF-8">
    <title>Mr. Whiskers' Blog</title>
  </head>
  <body>
  </body>
  ```

  ## Paso 5

La primera sección que crearás es el encabezado de la página.

El elemento `header` se utiliza para representar contenido introductorio, como la navegación de la página y otra información introductoria.

A continuación, se muestra un ejemplo con el elemento `header`:

- **Codigo ejemplo**

  ```html
  <header>
    <h1>Main Page Title Goes Here</h1>
    <img src="example-logo.png" alt="Example logo" />
  </header>
  ```

Dentro del elemento del `body`, agregue un elemento `header`.

- **Codigo ejemplo**

  ```html
  <body>
    <header>
    </header>
  </body>
  ```

## Paso 6

El `header` será responsable de mostrar el título principal, la imagen y la navegación de la página del blog.

Dentro del elemento `header`, agrega un `h1` con el texto `Welcome to Mr. Whiskers' Blog Page!`.

- **Codigo ejemplo**

  ```html
  <header>
    <h1>Welcome to Mr. Whiskers' Blog Page!</h1>
  </header>
  ```

## Paso 7

En este contenido introductorio, querrás mostrar una imagen del Sr. Whiskers con un pie de foto.

Debajo del elemento `h1`, añade un elemento `figure`.

Dentro del elemento `figure`, añade un elemento `img`.

El atributo `src` del `img` debe tener el valor "`<https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg>`" y el texto `alt` debe tener el valor `"a cat peacefully sleeping"`.

Debajo del elemento `img`, añade un `figcaption` con el texto `Mr. Whiskers Sleeping`.

- **Codigo ejemplo**

  ```html
  <body>
    <header>
      <h1>Welcome to Mr. Whiskers' Blog Page!</h1>
      <figure>
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" alt="a cat peacefully sleeping">
        <figcaption>
          Mr. Whiskers Sleeping
        </figcaption>
      </figure>
    </header>
  </body>
  ```

## Paso 8

En tu blog, los usuarios deberían poder navegar por las diferentes secciones de la página.

El elemento `nav` se utiliza para proporcionar enlaces a otras secciones del documento o del sitio web. A menudo, verás que el elemento `nav` se utiliza para menús o índices.

A continuación, se muestra un ejemplo de uso del elemento `nav`:

- **Codigo ejemplo**

  ```html
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  ```

Debajo del elemento de `figure`, añade un elemento `nav` con un elemento `ul` anidado dentro.

Dentro del elemento `ul`, añade tres elementos `li`.

- **Codigo ejemplo**

  ```html
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </nav>
  ```

## Paso 9

Dentro de cada elemento `li`, necesitará un elemento de anclaje.

Para el primer elemento de anclaje, el texto debe ser `About` y el valor del atributo `href` debe ser `#About`. El símbolo de almohadilla delante de `About` representa un `id` que se añadirá más adelante en el proyecto.

Para el segundo elemento de anclaje, el texto debe ser `Posts` y el valor del atributo `href` debe ser `#posts`.

Para el tercer elemento de anclaje, el texto debe ser `Contact` y el valor del atributo `href` debe ser `#contact`.

- **Codigo ejemplo**

  ```html
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#posts">Posts</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  ```

## Paso 10

Ahora que has terminado de crear el encabezado de la página, debes empezar a añadir el contenido principal.

Debajo `header`, añade un elemento `main`.

- **Codigo ejemplo**

  ```html
  <main>
    
  </main>
  ```

## Paso 11

La primera sección de la página será la sección `About`. Esta sección presentará a Mr. Whiskers y dará a los usuarios una idea de la temática de este blog.

Dentro del elemento `main`, añade un elemento de `section` con el atributo `id` establecido en `about`.

Dentro del elemento de `section`, añade un `h2` con el texto `About`.

- **Codigo ejemplo**

  ```html
  <main>
    <section id="about">
      <h2>About</h2>
    </section>
  </main>
  ```

## Paso 12

Debajo del elemento `h2`, añade un párrafo con el texto "`Hi there! I'm Jane Doe, a passionate writer who finds endless inspiration in the antics of my beloved cat, Mr. Whiskers.`".

Debajo del párrafo, añade otro párrafo con el texto "`His playful nature and boundless energy keeps me on my toes. I love him so much.`".

- **Codigo ejemplo**

  ```html
  <section id="about">
    <h2>About</h2>
    <p>
      Hi there! I'm Jane Doe, a passionate writer who finds endless inspiration in the antics of my beloved cat, Mr.
      Whiskers.
    </p>
    <p>
      His playful nature and boundless energy keeps me on my toes. I love him so much.
    </p>
  </section>
  ```

## Paso 13

Ahora que has añadido la sección "Acerca de", intenta hacer clic en el enlace "`About`" para que la página te lleve directamente a esa sección.

La siguiente sección del blog será una lista de publicaciones sobre Mr. Whiskers.

Añade otro elemento de `section` con el `id` `"posts"`.

Dentro del elemento de `section`, añade un elemento `h2` con el texto "`Posts`".

- **Codigo ejemplo**

  ```html
  <section id="posts">
    <h2>Posts</h2>
  </section>
  ```

## Paso 14

Para la primera entrada del blog, usarás un elemento de *article*.

El elemento de `article` representa el contenido independiente de una página web.

- **Codigo ejemplo**

  ```html
  <article>
    <h1>Example heading</h1>
    <p>Example article text</p>
  </article>
  ```

Debajo del elemento `h2`, agregue un elemento `article`.

Dentro del elemento `article`, agregue un elemento `h3` con el texto "Mr. Whiskers' First Day Home".

El uso de `h3` se debe a la importancia de mantener una jerarquía estructural adecuada para los elementos de encabezado. Dado que el subtítulo de la publicación es un elemento `h2`, el siguiente nivel en la jerarquía sería un `h3`.

- **Codigo ejemplo**

  ```html
  <section id="posts">
    <h2>Posts</h2>
    <article>
      <h3>Mr. Whiskers' First Day Home</h3>
    </article>
  </section>
  ```

## Paso 15

Esta entrada de blog contendrá un par de párrafos con texto en `Lorem Ipsum`.

`Lorem Ipsum` se usa comúnmente en desarrollo web como texto de marcador de posición. Es útil cuando quieres centrarte en la estructura básica de tus páginas web y no preocuparte por el contenido.

Aquí tienes un ejemplo de uso de `Lorem Ipsum`:

- **Codigo ejemplo**

  ```html
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, voluptates, quae, quos quibusdam dolorum quia nemo repudiandae quidem voluptatum quas. Quisquam quod, voluptates, quae, quos quibusdam dolorum quia nemo repudiandae quidem voluptatum quas.
  </p>
  ```

Debajo del elemento `h3`, agregue dos párrafos de texto `lorem ipsum`.

- **Codigo ejemplo**

  ```html
  <article>
    <h3>Mr. Whiskers' First Day Home</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      quod, voluptates, quae, quos quibusdam dolorum quia nemo repudiandae
      quidem voluptatum quas. Quisquam quod, voluptates, quae, quos
      quibusdam dolorum quia nemo repudiandae quidem voluptatum quas.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      quod, voluptates, quae, quos quibusdam dolorum quia nemo repudiandae
      quidem voluptatum quas. Quisquam quod, voluptates, quae, quos
      quibusdam dolorum quia nemo repudiandae quidem voluptatum quas.
    </p>
  </article>
  ```

## Paso 16

Para la segunda entrada del blog, deberás agregar otro elemento de `article`.

Dentro del elemento de `article`, agrega un elemento `h3` con el texto `"Mr. Whiskers' First Bath"`.

Debajo del elemento `h3`, agrega dos párrafos de texto Lorem Ipsum.

- **Codigo ejemplo**

  ```html
  <article>
    <h3>Mr. Whiskers' First Bath</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      quod, voluptates, quae, quos quibusdam dolorum quia nemo repudiandae
      quidem voluptatum quas. Quisquam quod, voluptates, quae, quos
      quibusdam dolorum quia nemo repudiandae quidem voluptatum quas.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      quod, voluptates, quae, quos quibusdam dolorum quia nemo repudiandae
      quidem voluptatum quas. Quisquam quod, voluptates, quae, quos
      quibusdam dolorum quia nemo repudiandae quidem voluptatum quas.
    </p>
  </article>
  ```

## Paso 17

Para la tercera entrada del blog, deberás agregar otro elemento de `article`.

Dentro del elemento de `article`, agrega un elemento `h3` con el texto "`Mr. Whiskers' First Birthday Party`".

Debajo del elemento `h3`, agrega dos párrafos de texto Lorem Ipsum.

- **Codigo ejemplo**

  ```html
  <article>
    <h3>Mr. Whiskers' First Birthday Party</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero minus soluta laborum dolorum voluptate
      iusto laudantium, voluptatem, dolores consectetur nisi aperiam accusantium! Consectetur tempore recusandae
      libero fuga, blanditiis ipsam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero minus soluta laborum dolorum voluptate
      iusto laudantium, voluptatem, dolores consectetur nisi aperiam accusantium! Consectetur tempore recusandae
      libero fuga, blanditiis ipsam!
    </p>
  </article>
  ```

## Paso 18

Ahora que has terminado de añadir todas las `Posts` del blog, haz clic en el enlace "`Posts`" y verás que la página te lleva a la sección correspondiente.

El último componente que debes añadir a tu blog es la sección de contacto.

Debajo del elemento `main`, añade un `footer`.

- **Codigo ejemplo**

  ```html
  <footer></footer>
  ```

## Paso 19

Dentro del `footer`, agregue un elemento de `section` con el `id` de contact.

Dentro del elemento de `section`, agregue un elemento `h2` con el texto "`Contact`".

- **Codigo ejemplo**

  ```html
  <footer>
    <section id="contact">
      <h2>Contact</h2>
    </section>
  </footer>
  ```

## Paso 20

En la sección de contacto, deberá mostrar la información de contacto del autor del blog. Para ello, utilizará el elemento "*address*".

El elemento "`address`" representa la información de contacto de una persona u organización.

Aquí se muestra un ejemplo del uso del elemento "`address`" para una dirección física. El elemento "`br`" se utiliza para crear un salto de línea en el texto.

- **Codigo ejemplo**

  ```html
  <address>
    1234 Make Believe Lane <br />
    Pretend City, USA
  </address>
  ```

Debajo del elemento `h2`, agregue un elemento de `address`.

- **Codigo ejemplo**

  ```html
  <footer>
    <section id="contact">
      <h2>Contact</h2>
      <address></address>
    </section>
  </footer>
  ```

## Paso 21

Para este paso, deberá agregar el número de teléfono y la dirección de correo electrónico del autor del blog.

Dentro del elemento de `address`, agregue un párrafo con el texto "`Phone: 555-555-5555`".

Debajo de ese párrafo, agregue otro párrafo con el texto "`Email: fake@email.com`".

- **Codigo ejemplo**

  ```html
  <footer>
    <section id="contact">
      <h2>Contact</h2>
      <address>
        <p>Phone: 555-555-5555</p>
        <p>Email: fake@email.com</p>
      </address>
    </section>
  </footer>
  ```

## Paso 22

Para mejorar la experiencia del usuario, conviene optimizar el número de teléfono para que los usuarios puedan hacer clic en él e iniciar una llamada.

Así es como puedes hacer que los números de teléfono sean cliqueables:

- **Codigo ejemplo**

  ```html
  <a href="tel:2345678912">234-567-8912</a>
  ```

Envuelva el texto `555-555-5555` en un elemento de anclaje y use `tel:` para convertirlo en un número de teléfono en el que se pueda hacer clic.

- **Codigo ejemplo**

  ```html
  <footer>
    <section id="contact">
      <h2>Contact</h2>
      <address>
        <p>Phone: <a href="tel:5555555555">555-555-5555</a></p>
        <p>Email: fake@email.com</p>
      </address>
    </section>
  </footer>
  ```

## Paso 23

De igual forma, los usuarios deberían poder hacer clic en la dirección de correo electrónico y enviar un correo desde su cliente de correo predeterminado.

Así es como puedes hacer que las direcciones de correo electrónico sean cliqueables:

- **Codigo ejemplo**

  ```html
  <a href="mailto:contact@company.com">contact@company.com</a>
  ```

Para este último paso, envuelva el texto `fake@email.com` en un elemento de ancla y use `mailto:` para convertirlo en una dirección de correo electrónico clicable.

**Con estos cambios, su página de blog ya está completa.**
