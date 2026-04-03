# Crea una revista

En este taller, crearás una página de revista utilizando un comunicado de prensa de una versión anterior del plan de estudios de freeCodeCamp.

## Paso 1

>> Comienza agregando un elemento de `link` para la hoja de estilos de fuentes `https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap`, un `link` para la hoja de estilos de FontAwesome `https://use.fontawesome.com/releases/v5.8.2/css/all.css` y un `link` para tu hoja de estilos `./styles.css`.

Tu hoja de estilos de fuentes cargará tres fuentes distintas: `Anton`, `Baskervville` y `Raleway`.

- **code:**

  ```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <link rel="stylesheet" href="./styles.css">
  ```

## Paso 2

>> Dentro del elemento `body`, crea un elemento `main`. A continuación, dentro de ese elemento, crea una `section` con la `class` `heading`.

- **code:**

  ```html
  <main>
    <section class="heading"></section>
  </main>
  ```

## Paso 3

>> Dentro de tu elemento `.heading`, crea un elemento `header` con la clase `hero`.
>
>> En ese elemento, crea un elemento `img` con el atributo `src` establecido en `https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png`, el atributo `alt` establecido en `freecodecamp logo` y la clase establecida en `hero-img`.

El atributo `loading` de un elemento `img` se puede establecer en `lazy` para indicarle al navegador que no recupere el recurso de la imagen hasta que sea necesario (es decir, cuando el usuario se desplace hasta que la imagen aparezca en pantalla). Como beneficio adicional, los elementos de carga diferida no se cargarán hasta que se hayan cargado los elementos que no son de carga diferida; esto significa que los usuarios con conexiones a Internet lentas pueden ver el contenido de tu página sin tener que esperar a que se carguen las imágenes.

>> Asigna a tu nuevo elemento `img` un atributo `loading` establecido en `lazy`.

- **code:**

  ```html
  <main>
    <section class="heading">
      <!-- code -->
      <header class="hero">
        <img src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png" alt="freecodecamp logo" class="hero-img" loading="lazy">
      </header>
      <!-- code -->
    </section>
  </main>
  ```

## Paso 4

>> Después del elemento `img`, agrega un elemento `h1` con la clase `hero-title` y el texto `OUR NEW CURRICULUM`, seguido de un elemento `p` con la clase `hero-subtitle` y el texto `Our efforts to restructure our curriculum with a more project-based focus`.

- **code:**

  ```html
  <main>
    <section class="heading">
      <header class="hero">
        <img src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png" alt="freecodecamp logo" class="hero-img" loading="lazy">
        <!-- code -->
        <h1 class="hero-title">OUR NEW CURRICULUM</h1>
        <p class="hero-subtitle">
          Our efforts to restructure our curriculum with a more project-based focus
        </p>
        <!-- code -->
      </header>
    </section>
  </main>
  ```

## Paso 5

>> Tu imagen ocupa mucho espacio en este momento. Para ver mejor en qué estás trabajando, agrega un atributo `width` al elemento `img`, con un valor de `400`.

Lo eliminarás más adelante, cuando hayas terminado de trabajar en el CSS.

- **code:**

  ```html
  <main>
    <section class="heading">
      <header class="hero">
        <!-- code -->
        <img src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png" alt="freecodecamp logo" class="hero-img" loading="lazy" width="400">
        <!-- code -->
        <h1 class="hero-title">OUR NEW CURRICULUM</h1>
        <p class="hero-subtitle">
          Our efforts to restructure our curriculum with a more project-based focus
        </p>
      </header>
    </section>
  </main>
  ```

## Paso 6

>> Después del elemento de `header`, crea un elemento `div` con la clase `author`.
>
>> Dentro de ese elemento `div`, crea un elemento `p` con la clase `author-name` y asignale el texto `By freeCodeCamp`. Envuelve la parte `freeCodeCamp` en un elemento `a` con el atributo `href` establecido en `https://freecodecamp.org` y el atributo `target` establecido en `_blank`.
>
>> Debajo de eso, agrega un segundo elemento `p` con la clase `publish-date` y el texto `March 7, 2019`.

- **code:**

  ```html
  <div class="author">
    <p class="author-name">
      By <a href="https://freecodecamp.org" target="_blank">freeCodeCamp</a>
    </p>
    <p class="publish-date">
      March 7, 2019
    </p>
  </div>
  ```

## Paso 7

>> El encabezado _HTTP_ `Referer` contiene información sobre la dirección o _URL_ de la página desde la que un usuario podría estar visitando tu sitio. Esta información se puede utilizar en herramientas de análisis para rastrear, por ejemplo, cuántos usuarios de tu página visitan _freecodecamp.org_. Al establecer el atributo `rel` en `noreferrer`, se omite esta información de la solicitud _HTTP_. Asigna a tu elemento `a` un atributo `rel` con el valor `noreferrer`.

- **code:**

  ```html
  <div class="author">
    <p class="author-name">
      <!-- code -->
      By <a href="https://freecodecamp.org" target="_blank"  rel="noreferrer">freeCodeCamp</a>
      <!-- code -->
    </p>
    <p class="publish-date">
      March 7, 2019
    </p>
  </div>
  ```

## Paso 8

>> Debajo del elemento `.author`, crea un nuevo elemento `div` con la clase `social-icons`.
>
>> Añade cinco elementos `a` dentro de ese nuevo `div` y asígnales los siguientes atributos `href`.

1. El primer elemento `a` debe tener un atributo `href` con el valor `https://www.facebook.com/freecodecamp`.
2. El segundo elemento `a` debe tener un atributo `href` con el valor `https://twitter.com/freecodecamp`.
3. El tercer elemento `a` debe tener un atributo `href` establecido en `https://instagram.com/freecodecamp`.
4. El cuarto elemento `a` debe tener un atributo `href` establecido en `https://www.linkedin.com/school/free-code-camp`.
5. El quinto elemento `a` debe tener un atributo `href` establecido en `https://www.youtube.com/freecodecamp`.

- **code:**

  ```html
  <div class="social-icons">
    <a href="https://www.facebook.com/freecodecamp"></a>
    <a href="https://twitter.com/freecodecamp"></a>
    <a href="https://instagram.com/freecodecamp"></a>
    <a href="https://www.linkedin.com/school/free-code-camp"></a>
    <a href="https://www.youtube.com/freecodecamp"></a>
  </div>
  ```

## Paso 9

Dentro de cada uno de tus nuevos elementos `a`, añade un elemento `i` y asígnales las siguientes clases:

Tu primer elemento `i` debe tener la clase `fab fa-facebook-f`
Tu segundo elemento `i` debe tener la clase `fab fa-twitter`
Tu tercer elemento `i` debe tener la clase `fab fa-instagram`
Tu cuarto elemento `i` debe tener la clase `fab fa-linkedin-in`
Tu quinto elemento `i` debe tener la clase `fab fa-youtube`

- **code:**

  ```html
  <div class="social-icons">
    <!-- code -->
    <a href="https://www.facebook.com/freecodecamp">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com/freecodecamp">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/freecodecamp">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com/school/free-code-camp">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.youtube.com/freecodecamp">
      <i class="fab fa-youtube"></i>
    </a>
    <!-- code -->
  </div>
  ```

## Paso 10

>> Debajo del elemento `.heading`, crea un nuevo elemento `section` con la clase `text`. Dentro de este, crea un elemento `p` con la clase `first-paragraph` y el siguiente texto:

- **Example Code**

  ```text
  Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges, you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only changing the optional coding challenges.
  ```

- **code:**

  ```html
  <section class="text">
    <p class="first-paragraph">
      Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges,
      you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are
      not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only
      changing the optional coding challenges.
    </p>
  </section>
  ```

## Paso 11

>> Crea otro elemento `p` debajo del elemento `.first-paragraph` y asignale el siguiente texto:

- **Example Code**

  ```text
  After years - years - of pondering these two problems and how to solve them, I slipped, hit my head on the sink, and when I came to I had a revelation! A vision! A picture in my head! A picture of this! This is what makes time travel possible: the flux capacitor!
  ```

- **code:**

  ```html
  <section class="text">
    <p class="first-paragraph">...
    </p>
    <!-- code -->
    <p class="first-paragraph">
      After years - years - of pondering these two problems and how to solve them, I slipped, hit my head on the sink, and when I came to I had a revelation! A vision! A picture in my head! A picture of this! This is what makes time travel possible: the flux capacitor!
    </p>
    <!-- code -->
  </section>
  ```

## Paso 12

>> Añade un tercer elemento `p` al final de tu elemento `.text` y asignale el siguiente texto:

- **Example Code**

  ```text
  It wasn't as dramatic as Doc's revelation in Back to the Future. It just occurred to me while I was going for a run. The revelation: the entire curriculum should be a series of projects. Instead of individual coding challenges, we'll just have projects, each with their own seamless series of tests. Each test gives you just enough information to figure out how to get it to pass. (And you can view hints if that isn't enough.)
  ```

- **code:**

  ```html
  <section class="text">
    <p class="first-paragraph">...
    </p>
    <p class="first-paragraph">...
    </p>
    <!-- code -->
    <p>
      It wasn't as dramatic as Doc's revelation in Back to the Future. It just occurred to me while I was going for a run. The revelation: the entire curriculum should be a series of projects. Instead of individual coding challenges, we'll just have projects, each with their own seamless series of tests. Each test gives you just enough information to figure out how to get it to pass. (And you can view hints if that isn't enough.)
    </p>
    <!-- code -->
  </section>
  ```

## Paso 13

>> Después de los tres elementos `p` que hay dentro de tu elemento `.text`, crea un elemento `blockquote`. Dentro de este, añade un elemento `hr`, un elemento `p` con la clase `quote` y un segundo elemento `hr`.
>
>> Asigna al elemento `.quote` el texto: `The entire curriculum should be a series of projects`.

- **code:**

  ```html
  <section class="text">
    <p class="first-paragraph">...
    </p>
    <p class="first-paragraph">...
    </p>
    <p>...
    </p>
    <!-- code -->
    <blockquote>
        <hr>
        <p class="quote">
          The entire curriculum should be a series of project
        </p>
        <hr>
      </blockquote>
    <!-- code -->
  </section>
  ```

## Paso 14

>> Debajo del elemento `blockquote`, agrega otro elemento `p` con el siguiente texto:

- **Example Code**

  ```text
  No more walls of explanatory text. No more walls of tests. Just one test at a time, as you build up a working project. Over the course of passing thousands of tests, you build up projects and your own understanding of coding fundamentals. There is no transition between lessons and projects, because the lessons themselves are baked into projects. And there's plenty of repetition to help you retain everything because - hey - building projects in real life has plenty of repetition.
  ```

- **code:**

  ```html
  <section class="text">
    <p class="first-paragraph">...
    </p>
    <p class="first-paragraph">...
    </p>
    <p>...
    </p>
    <blockquote>...
    </blockquote>
    <!-- code -->
    <p>
      No more walls of explanatory text. No more walls of tests. Just one test at a time, as you build up a working project. Over the course of passing thousands of tests, you build up projects and your own understanding of coding fundamentals. There is no transition between lessons and projects, because the lessons themselves are baked into projects. And there's plenty of repetition to help you retain everything because - hey - building projects in real life has plenty of repetition.
    </p>
    <!-- code -->
  </section>
  ```

## Paso 15

>> Crea un quinto elemento `p` al final de tu elemento `.text` y asignale el siguiente texto:

- **Example Code**

  ```text
  The main design challenge is taking what is currently paragraphs of explanation and instructions and packing them into a single test description text. Each project will involve dozens of tests like this. People will be coding the entire time, rather than switching back and forth from "reading mode" to "coding mode".
  ```

- **code:**

  ```html
  <section class="text">
    <p class="first-paragraph">...
    </p>
    <p class="first-paragraph">...
    </p>
    <p>...
    </p>
    <blockquote>...
    </blockquote>
    <p>...
    </p>
    <!-- code -->
    <p>
      The main design challenge is taking what is currently paragraphs of explanation and instructions and packing them into a single test description text. Each project will involve dozens of tests like this. People will be coding the entire time, rather than switching back and forth from "reading mode" to "coding mode".
    </p>
    <!-- code -->
  </section>
  ```

## Paso 16

>> Crea un último elemento `p` al final de tu elemento `.text` y asignale el siguiente texto:

- **Example Code**

  ```text
  Instead of a series of coding challenges, people will be in their code editor passing one test after another, quickly building up a project. People will get into a real flow state, similar to what they experience when they build the required projects at the end of each certification. They'll get that sense of forward progress right from the beginning. And freeCodeCamp will be a much smoother experience.
  ```

- **code:**

  ```html
  <section class="text">
    <p class="first-paragraph">...
    </p>
    <p class="first-paragraph">...
    </p>
    <p>...
    </p>
    <blockquote>...
    </blockquote>
    <p>...
    </p>
    <p>...
    </p>
    <!-- code -->
    <p>
      Instead of a series of coding challenges, people will be in their code editor passing one test after another, quickly building up a project. People will get into a real flow state, similar to what they experience when they build the required projects at the end of each certification. They'll get that sense of forward progress right from the beginning. And freeCodeCamp will be a much smoother experience.
    </p>
    <!-- code -->
  </section>
  ```

## Paso 17

>> Debajo del elemento `.text`, crea un nuevo elemento `section` y asígnale la clase `text-with-images`. Dentro de este, crea un elemento `article` con la clase `brief-history` y un elemento `aside` con la clase `image-wrapper`.

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history"></article>
    <aside class="image-wrapper"></aside>
  </section>
  ```

## Paso 18

>> Dentro del elemento `article`, crea un elemento `h3` con la clase `list-title` y el texto `A Brief History`. Debajo, crea un elemento `p` con el texto `Of the Curriculum`. A continuación, crea un elemento `ul` con la clase `lists`.

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history">
      <!-- code -->
      <h3 class="list-title">A Brief History</h3>
      <p>
        Of the Curriculum
      </p>
      <ul class="lists"></ul>
      <!-- code -->
    </article>
    <aside class="image-wrapper"></aside>
  </section>
  ```

## Paso 19

>> Dentro de tu elemento `ul`, crea seis elementos `li`. Añade un elemento `h4` con la clase `list-subtitle` y un elemento `p` a cada uno de tus elementos `li`.
>
>> A continuación, asigna a los elementos `h4` y `p` el siguiente contenido de texto, en orden, de modo que cada `h4` utilice lo que aparece a la izquierda de los dos puntos y cada `p` utilice lo que aparece a la derecha:

- `V1 - 2014`: `We launched freeCodeCamp with a simple list of 15 resources, including Harvard's CS50 and Stanford's Database Class.`
- `V2 - 2015`: `We added interactive algorithm challenges.`
- `V3 - 2015`: `We added our own HTML+CSS challenges (before we'd been relying on General Assembly's Dash course for these).`
- `V4 - 2016`: `We expanded the curriculum to 3 certifications, including Front-End, Back-End, and Data Visualization. They each had 10 required projects, but only the Front-End section had its own challenges. For the other certs, we were still using external resources like Node School.`
- `V5 - 2017`: `We added the back-end and data visualization challenges.`
- `V6 - 2018`: `We launched 6 new certifications to replace our old ones. This was the biggest curriculum improvement to date.`

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history">
      <h3 class="list-title">A Brief History</h3>
      <p>
        Of the Curriculum
      </p>
      <ul class="lists">
      <!-- code -->
        <li>
          <h4 class="list-subtitle">V1 - 2014</h4>:
          <p>
            We launched freeCodeCamp with a simple list of 15 resources, including Harvard's CS50 and Stanford's Database Class.
          </p>
        </li>
        <li>
          <h4 class="list-subtitle">V2 - 2015</h4>
          <p>
            We added interactive algorithm challenges.
          </p>
        </li>
        <li>
          <h4 class="list-subtitle">V3 - 2015</h4>
          <p>
            We added our own HTML+CSS challenges (before we'd been relying on General Assembly's Dash course for these).
          </p>
        </li>
        <li>
          <h4 class="list-subtitle">V4 - 2016</h4>
          <p>
            We expanded the curriculum to 3 certifications, including Front-End, Back-End, and Data Visualization. They each had 10 required projects, but only the Front-End section had its own challenges. For the other certs, we were still using external resources like Node School.
          </p>
        </li>
        <li>
          <h4 class="list-subtitle">V5 - 2017</h4>
          <p>
            We added the back-end and data visualization challenges.
          </p>
        </li>
        <li>
          <h4 class="list-subtitle">V6 - 2018</h4>
          <p>
            We launched 6 new certifications to replace our old ones. This was the biggest curriculum improvement to date.
          </p>
        </li>
      <!-- code -->
      </ul>
    </article>
    <aside class="image-wrapper"></aside>
  </section>
  ```

## Paso 20

>> Dentro del elemento `aside`, crea dos elementos `img`, un elemento `blockquote` y un tercer elemento `img`. Asigna al elemento `blockquote` una clase con el nombre `image-quote`.

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history">...
    </article>
    <aside class="image-wrapper">
      <!-- code -->
      <img>
      <img>
      <blockquote class="image-quote"></blockquote>
      <img>
      <!-- code -->
    </aside>
  </section>
  ```

## Paso 21

>> Dentro del elemento `.image-wrapper`, asigna a tu primer elemento `img` un atributo `src` con el valor `https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png`, un atributo `alt` con `image of the quote machine project`, una clase `image-1`, un atributo `loading` con el valor `lazy`, un atributo `width` con el valor `600` y un atributo `height` con el valor `400`.

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history">...
    </article>
    <aside class="image-wrapper">
      <!-- code -->
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="image of the quote machine project" class="image-1" loading="lazy" width="600" height="400">
      <!-- code -->
      <img>
      <blockquote class="image-quote"></blockquote>
      <img>
    </aside>
  </section>
  ```

## Paso 22

>> Dentro de tu elemento `.image-wrapper`, asigna al segundo elemento `img` un atributo `src` con el valor `https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png`, un atributo `alt` con la descripción `image of a calculator project`, un atributo `loading` con el valor `lazy`, una clase con el nombre `image-2`, un atributo `width` con el valor `400` y un atributo `height` con el valor `400`.

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history">...
    </article>
    <aside class="image-wrapper">
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="image of the quote machine project" class="image-1" loading="lazy" width="600" height="400">
      
      <!-- code -->
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png" alt="image of a calculator project" class="image-2" loading="lazy" width="400" height="400">
      <!-- code -->
      
      <blockquote class="image-quote"></blockquote>
      <img>
    </aside>
  </section>
  ```

## Paso 23

>> Dentro de tu elemento `.image-wrapper`, asigna a tu tercer elemento `img` un src de `https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg`, un `alt` de `four people working on code`, un atributo `loading` de `lazy`, una clase establecida en `image-3`, un atributo `width` establecido en `600` y un atributo `height` establecido en `400`.

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history">...
    </article>
    <aside class="image-wrapper">
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="image of the quote machine project" class="image-1" loading="lazy" width="600" height="400">
      
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png" alt="image of a calculator project" class="image-2" loading="lazy" width="400" height="400">
      
      <blockquote class="image-quote"></blockquote>
      <!-- code -->
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg" alt="four people working on code" class="image-3" loading="lazy" width="600" height="400">
      <!-- code -->
    </aside>
  </section>
  ```

## Paso 24

>> Dentro del elemento `.image-quote`, anida un elemento `hr`, un elemento `p` y un segundo elemento `hr`. Asigna al elemento `p` una clase con el nombre `quote` y el texto: `The millions of people who are learning to code through freeCodeCamp will have an even better resource to help them learn these fundamentals.`.

- **code:**

  ```html
  <section class="text text-with-images">
    <article class="brief-history">...
    </article>
    <aside class="image-wrapper">
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png" alt="image of the quote machine project" class="image-1" loading="lazy" width="600" height="400">
      
      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png" alt="image of a calculator project" class="image-2" loading="lazy" width="400" height="400">
      
      <blockquote class="image-quote">
      <!-- code -->
        <hr>
        <p class="quote">
          The millions of people who are learning to code through freeCodeCamp will have an even better resource to help them learn these fundamentals.
        </p>
        <hr>
      <!-- code -->
      </blockquote>

      <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg" alt="four people working on code" class="image-3" loading="lazy" width="600" height="400">
    </aside>
  </section>
  ```

## Paso 25

>> Para comenzar con el CSS, normaliza las reglas de CSS aplicando el selector `*` a todos los elementos, incluidos los pseudo-selectores `::before` y `::after`.
>
>> Establece las propiedades `padding` y `margin` en `0` y configura la propiedad `box-sizing` en `!`.

- **code:**

  ```css
  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ```

## Paso 26

>> Crea un selector `html` y asígnale una propiedad `font-size` con un valor del `62.5%`. Esto establecerá el tamaño de fuente predeterminado de tu página web en `10px` (el valor predeterminado del navegador es `16px`).

**Esto te facilitará el trabajo con unidades `rm` más adelante, ya que `2rem` equivaldría a 20 píxeles.**

- **code:**

  ```css
  html{
    font-size: 62.5%;
  }
  ```

## Paso 27

Crea un selector de `body`. Establece la propiedad `font-family` en `Baskervville`, con una alternativa de `serif`. Establece la propiedad `color` en `linen` y la propiedad `background-color` en `rgb(20, 30, 40)`.

- **code:**

  ```css
  body {
    font-family: Baskervville, serif;
    color: linen;
    background-color: rgb(20, 30, 40);
  }
  ```

## Paso 28

>> Crea un selector `h1` y establece la propiedad `font-family` en `Anton`, con `sans-serif` como alternativa.

- **code:**

  ```css
  h1 {
    font-family: Anton, sans-serif;
  }
  ```

## Paso 29

>> Crea un selector `h2, h3, h4, h5, h6`. Asigna a este selector la propiedad `font-family` con el valor `Raleway` y una alternativa de `sans-serif`.

- **code:**

  ```css
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Raleway, sans-serif;
  }
  ```

## Paso 30

>> Crea un selector `a` y asígnale la propiedad `text-decoration` con el valor `none` y la propiedad `color` con el valor `linen`.

- **code:**

  ```css
  a {
    text-decoration: none;
    color: linen;
  }
  ```

## Paso 31

Ahora ya estás listo para empezar a crear el diseño de cuadrícula (`grid`). En lecciones anteriores aprendiste que CSS Grid ofrece un diseño bidimensional basado en cuadrículas, lo que te permite centrar elementos tanto horizontal como verticalmente, sin perder el control para realizar acciones como superponer elementos.

>> Empieza creando un selector `main` y asignándole la propiedad `display` con el valor `grid`.

- **code:**

  ```css
  main{
    display: grid;
  }
  ```

## Paso 32

Ahora puedes aplicar estilos al diseño de tu cuadrícula. CSS Grid es similar a Flexbox en que cuenta con una propiedad especial tanto para los elementos padres como para los hijos.

>> En este caso, tu elemento padre es el elemento `main`. Configura el contenido para que tenga un diseño de tres columnas agregando una propiedad `grid-template-columns` con un valor de `1fr 94rem 1fr`. Esto creará tres columnas en las que la columna del medio tendrá un ancho de `94rem`, y la primera y la última columna ocuparán cada una `1fr` del espacio restante en el contenedor de la cuadrícula.

- **code:**

  ```css
  main{
    display: grid;
    /* code */
    grid-template-columns: 1fr 94rem 1fr;
    /* code */
  }
  ```

## Paso 33

Utiliza la función `minmax` para que tus columnas se adapten a cualquier dispositivo. La función `minmax` toma dos argumentos: el primero es el valor mínimo y el segundo, el máximo. Estos valores pueden ser una longitud, un porcentaje, `fr` o incluso una palabra clave como `max-content`.

>> Envuelve cada uno de los valores ya definidos de la propiedad `grid-template-columns` en una función `minmax`, utilizando cada valor como segundo argumento. El primer argumento debe ser `2rem`, `min-content` y `2rem,` respectivamente.

- **code:**

  ```css
  main{
    display: grid;
    /* code */
    grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
    /* code */
  }
  ```

## Paso 34

>> Para añadir espacio entre las filas en el diseño de cuadrícula, puedes utilizar la propiedad `row-gap`. Asigna al selector `main` un valor de `3rem` para la propiedad `row-gap`.

- **code:**

  ```css
  main{
    display: grid;
    grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
    /* code */
    row-gap: 3rem;
    /* code */
  }
  ```

## Paso 35

Tu revista tendrá tres secciones principales. Ya has definido el diseño general en la regla `main`, pero puedes ajustar la ubicación en las reglas secundarias.

Una opción es la propiedad `grid-column`, que es una forma abreviada de `grid-column-start` y `grid-column-end`. La propiedad `grid-column` le indica al elemento de la cuadrícula en qué línea de la cuadrícula debe comenzar y terminar.

>> Crea una regla `.heading` y establece la propiedad `grid-column` en`2 / 3`. Esto le indicará al elemento `.heading` que comience en la línea 2 de la cuadrícula y termine en la línea 3.

- **code:**

  ```css
  .heading {
    grid-column: 2 / 3;
  }
  ```

## Paso 36

> Crea un selector `.text` y asígnale una propiedad `grid-column` con el valor `2/3`.

- **code:**

  ```css
  .text {
    grid-column: 2 / 3;
  }
  ```

## Paso 37

Para tener un mayor control sobre el diseño de tu contenido, puedes anidar una cuadrícula CSS dentro de otra cuadrícula CSS.

>> Establece la propiedad `display` de tu selector `.heading` en `grid`.

- **code:**

  ```css
  .heading {
    grid-column: 2 / 3;
    /* code */
    display: grid;
    /* code */
  }
  ```

## Paso 38

Ahora puedes aplicar estilos al contenido del elemento `.heading` con CSS Grid.

La función `repeat()` de CSS se utiliza para repetir un valor, en lugar de escribirlo manualmente, y resulta útil para los diseños de cuadrícula. Por ejemplo, establecer la propiedad `grid-template-columns` en `repeat(20, 200px)` crearía 20 columnas de `200px` de ancho cada una.

>> Asigna a tu elemento `.heading` una propiedad `grid-template-columns` establecida en `repeat(2, 1fr)` para crear dos columnas de igual ancho.

- **code:**

  ```css
  .heading {
    grid-column: 2 / 3;
    display: grid;
    /* code */
    grid-template-columns: repeat(2, 1fr);
    /* code */
  }
  ```

## Paso 39

>> Aplica a tu selector `.heading` la propiedad `row-gap` con un valor de `1.5rem`.

- **code:**

  ```css
  .heading {
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* code */
    row-gap: 1.5rem;
    /* code */
  }
  ```

## Paso 40

Recuerda que la propiedad `grid-column` determina en qué columnas comienza y termina un elemento. Puede haber ocasiones en las que no estés seguro de cuántas columnas tendrá tu cuadrícula, pero quieras que un elemento termine en la última columna. Para ello, puedes usar `-1` como columna final.

>> Crea un selector `.hero` y asígnale una propiedad `grid-column` establecida en `1 / -1`. Esto le indicará al elemento que ocupe todo el ancho de la cuadrícula.

- **code:**

  ```css
  .hero {
    grid-column: 1 / -1;
  }
  ```

## Paso 41

>> Asigna al selector `.hero` la propiedad `position` con el valor `relative`.

- **code:**

  ```css
  .hero {
    grid-column: 1 / -1;
    /* code */
    position: relative;
    /* code */
  }

## Paso 42

>> Debes eliminar el atributo de `width` temporal antes de escribir el CSS para tu `.hero-img`.

- **code:**

  ```html
  <!-- code -->
  <img
    src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
    alt="freecodecamp logo"
    loading="lazy"
    class="hero-img"
  />
  <!-- code -->
  <h1 class="hero-title">OUR NEW CURRICULUM</h1>
  <p class="hero-subtitle">
    Our efforts to restructure our curriculum with a more project-based
    focus
  </p>
  ```

## Paso 43

>> Crea un selector `img` y asígnale una propiedad `width` con un valor del `100%`, y una propiedad `object-fit` con el valor `cover`.

La propiedad `object-fit` indica al navegador cómo colocar el elemento dentro de su contenedor. En este caso, el valor `cover` hará que la imagen ocupe todo el contenedor, recortándose según sea necesario para mantener la relación de aspecto.

- **code:**

  ```css
  img {
    width: 100%;
    object-fit: cover;
  }
  ```

## Paso 44

>> Crea un selector `.hero-title` y asígnale la propiedad `text-align` con el valor `center`, la propiedad `color` con el valor `orangered` y la propiedad `font-size` con el valor `8rem`.

- **code:**

  ```css
  .hero-title {
    text-align: center;
    color: orangered;
    font-size: 8rem;
  }
  ```

## Paso 45

>> También hay que aplicar estilos al subtítulo. Crea un selector `.hero-subtitle` y asígnale una propiedad `font-size` con un valor de `2.4rem`, una propiedad `color` con el valor `orangered` y una propiedad `text-align` con el valor `center`.

- **code:**

  ```css
  .hero-subtitle {
    font-size: 2.4rem;
    color: orangered;
    text-align: center;
  }
  ```

## Paso 46

>> Crea un selector `.author` y asígnale una propiedad `font-size` con un valor de `2rem` y una propiedad `font-family` con el valor `Raleway`, con `sans-serif` como alternativa.

- **code:**

  ```css
  .author {
    font-size: 2rem;
    font-family: Raleway, sans-serif;
  }
  ```

## Paso 47

>> Crea un selector `.author-name a:hover` y asígnale la propiedad `background-color` con el valor `#306203`.

Esto creará un efecto al pasar el cursor solo para el elemento `a` dentro de `.author-name`, mostrando el verde original de freeCodeCamp en el fondo.

- **code:**

  ```css
  .author-name a:hover{
    background-color: #306203;
  }
  ```

## Paso 48

>> Crea un selector `.publish-date` y asígnale la propiedad de color `rgba(255, 255, 255, 0.5)`.

- **code:**

  ```css
  .publish-date {
    color: rgba(255, 255, 255, 0.5);
  }
  ```

## Paso 49

>> Crea un selector `.social-icons`. Asigna a este selector la propiedad `display` con el valor `grid` y la propiedad `font-size` con el valor `3rem`.

- **code:**

  ```css
  .social-icons {
    display: grid;
    font-size: 3rem;
  }
  ```

## Paso 50

>> A diferencia de Flexbox, la configuración predeterminada de CSS Grid creará filas adicionales según sea necesario. Asigna al selector `.social-icons` la propiedad `grid-template-columns` con el valor `repeat(5, 1fr)` para organizar los íconos en una sola fila.

- **code:**

  ```css
  .social-icons {
    display: grid;
    font-size: 3rem;
    /* code */
    grid-template-columns: repeat(5, 1fr);
    /* code */
  }
  ```

## Paso 51

Si quisieras añadir más íconos de redes sociales, pero mantenerlos en la misma fila, tendrías que actualizar `grid-template-columns` para crear columnas adicionales. Como alternativa, puedes usar la propiedad `grid-auto-flow`.

Esta propiedad toma como primer valor `row` o `column`, con un segundo valor opcional `dense`. `grid-auto-flow` utiliza un algoritmo de colocación automática para ajustar el diseño de la cuadrícula. Si la configuras en `column`, le indicarás al algoritmo que cree nuevas columnas para el contenido según sea necesario. El valor `dense` permite que el algoritmo retroceda y llene los huecos de la cuadrícula con elementos más pequeños, lo que puede hacer que los elementos aparezcan desordenados.

>> Para tu selector `.social-icons`, configura la propiedad `grid-auto-flow` en `column`.

- **code:**

  ```css
  .social-icons {
    display: grid;
    font-size: 3rem;
    grid-template-columns: repeat(5, 1fr);
    /* code */
    grid-auto-flow: column;
    /* code */
  }
  ```

## Paso 52

Ahora, el algoritmo de colocación automática se activará cuando añadas un nuevo elemento de icono. Sin embargo, el algoritmo establece por defecto el ancho de la nueva columna en `auto`, lo que no coincidirá con tus columnas actuales.

>> Puedes anular esto con la propiedad `grid-auto-columns`. Asigna al selector `.social-icons` una propiedad `grid-auto-columns` con el valor `1fr`.

- **code:**

  ```css
  .social-icons {
    display: grid;
    font-size: 3rem;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    /* code */
    grid-auto-columns: 1fr;
    /* code */
  }
  ```

## Paso 53

Al igual que con Flexbox, con CSS Grid puedes alinear el contenido de los elementos de la cuadrícula mediante las propiedades `align-items` y `justify-items`. La propiedad `align-items` alinea los elementos secundarios a lo largo del eje de las columnas, mientras que la propiedad `justify-items` los alinea a lo largo del eje de las filas.

Asigna al selector `.social-icons` la propiedad `align-items` con el valor `center`.

- **code:**

  ```css
  .social-icons {
    display: grid;
    font-size: 3rem;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    /* code */
    align-items: center;
    /* code */
  }
  ```

## Paso 54

>> Aplica al selector `.text` una propiedad `font-size` con un valor de `1.8rem` y una propiedad `letter-spacing` con un valor de `0.6px`.

- **code:**

  ```css
  .text {
    grid-column: 2 / 3;
    /* code */
    font-size: 1.8rem;
    letter-spacing: 0.6px;
    /* code */
  }
  ```

## Paso 55

Tu elemento `.text` no es una cuadrícula CSS, pero puedes crear columnas dentro de un elemento sin usar la cuadrícula, mediante la propiedad `column-width`.

>> Asigna a tu selector `.text` una propiedad `column-width` con un valor de `25rem`.

- **code:**

  ```css
  .text {
    grid-column: 2 / 3;
    font-size: 1.8rem;
    letter-spacing: 0.6px;
    /* code */
    column-width: 25rem;
    /* code */
  }
  ```

## Paso 56

Las revistas suelen utilizar texto justificado en sus contenidos impresos para estructurar el diseño y controlar el flujo del contenido. Aunque esto funciona en formato impreso, el texto justificado en los sitios web puede suponer un problema de accesibilidad, por ejemplo, al presentar dificultades para las personas con dislexia.

>> Para que tu proyecto tenga el aspecto de una revista impresa, asigna al selector `.text` la propiedad `text-align` con el valor `justify`.

- **code:**

  ```css
  .text {
    grid-column: 2 / 3;
    font-size: 1.8rem;
    letter-spacing: 0.6px;
    column-width: 25rem;
    /* code */
    text-align: justify;
    /* code */
  }
  ```

## Paso 57

El pseudo-selector `::first-letter` te permite seleccionar la primera letra del contenido de texto de un elemento.

>> Crea un selector `.first-paragraph::first-letter` y establece la propiedad `font-size` en `6rem.` Además, asigna a la propiedad `color` el valor `orangered` para que destaque.

- **code:**

  ```css
  .first-paragraph::first-letter {
    font-size: 6rem;
    color: orangered;
  }
  ```

## Paso 58

>> El otro texto se ha desplazado de su lugar. Colócalo en su posición asignando al selector `.first-paragraph::first-letter` la propiedad `float` con el valor `left` y la propiedad `margin-right` con el valor `1rem`.

- **code:**

  ```css
  .first-paragraph::first-letter {
    font-size: 6rem;
    color: orangered;
    /* code */
    float: left;
    margin-right: 1rem;
    /* code */
  }
  ```

## Paso 59

>> Crea un selector `hr` y asígnale una propiedad `margin` con los valores `1.5rem 0`.

- **code:**

  ```css
  hr {
    margin: 1.5rem 0;
  }
  ```

## Paso 60

>> Para darle color a la línea horizontal `hr`, debes ajustar la propiedad `border`. Asigna al selector `hr` una propiedad `border` con el valor `1px solid rgba(120, 120, 120, 0.6)`.

- **code:**

  ```css
  hr {
    margin: 1.5rem 0;
    /* code */
    border: 1px solid rgba(120, 120, 120, 0.6);
    /* code */
  }
  ```

## Paso 61

>> Crea un selector `.quote`. Asigna a este selector la propiedad `color` con el valor `#00beef`, la propiedad `font-size` con el valor `2.4rem` y la propiedad `text-align` con el valor `center`.

- **code:**

  ```css
  .quote {
    color: #00beef;
    font-size: 2.4rem;
    text-align: center;
  }
  ```

## Paso 62

>> Para que el texto de la cita destaque más, asigna al selector `.quote` la propiedad `font-family` con el valor `Raleway` y, como alternativa, `sans-serif`.

- **code:**

  ```css
  .quote {
    color: #00beef;
    font-size: 2.4rem;
    text-align: center;
    /* code */
    font-family: Raleway, sans-serif;
    /* code */
  }
  ```

## Paso 63

Una cita no es realmente una cita sin las comillas adecuadas. Puedes añadirlas con los pseudo-selectores de CSS.

>> Crea un selector `.quote::before` y establece la propiedad `content` en `"` seguido de un espacio.

Además, crea un selector `.quote::after` y establece la propiedad `content` en `"` precedido de un espacio.

- **code:**

  ```css
  .quote::before {
    content: '" ';
  }
  
  .quote::after {
    content: ' "';
  }
  ```

## Paso 64

Ahora es el momento de aplicar estilos a tu tercera `section`. Ten en cuenta que tiene los valores `text` y `text-with-images` para el atributo `class`, lo que significa que ya está heredando los estilos de tu regla `.text`.

>> Crea un selector `.text-with-images` y establece la propiedad `display` en `grid`.

- **code:**

  ```css
  .text-with-images {
    display: grid;
  }
  ```

## Paso 65

>> Necesitarás una columna para el texto y otra para las imágenes. Asigna a la selector `.text-with-images` la propiedad `grid-template-columns` con los valores `1fr 2fr`. Además, establece la propiedad `column-gap` en `3rem` para aumentar el espacio entre las columnas.

- **code:**

  ```css
  .text-with-images {
    display: grid;
    /* code */
    grid-template-columns: 1fr 2fr;
    column-gap: 3rem;
    /* code */
  }
  ```

## Paso 66

>> Aplica al selector `.text-with-images` la propiedad `margin-bottom` con un valor de `3rem`.

- **code:**

  ```css
  .text-with-images {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 3rem;
    /* code */
    margin-bottom: 3rem;
    /* code */
  }
  ```

## Paso 67

>> Crea un selector `.lists` y establece la propiedad `list-style-type` en `none`. Esto eliminará las viñetas de los elementos de la lista.

- **code:**

  ```css
  .lists {
    list-style-type: none;
  }
  ```

## Paso 68

>> Aplica al selector `.lists` una propiedad `margin-top` con un valor de `2rem`.

- **code:**

  ```css
  .lists {
    list-style-type: none;
    /* code */
    margin-top: 2rem;
    /* code */
  }
  ```

## Paso 69

>> Crea una regla `.lists li` para aplicar el estilo a los elementos de la lista dentro del elemento `.lists`. Asigna a esta regla una propiedad `margin-bottom` con un valor de `1.5rem`.

- **code:**

  ```css
  .lists li {
    margin-bottom: 1.5rem;
  }
  ```

## Paso 70

>> Crea un selector `.list-title, .list-subtitle` y establece la propiedad de `color` en `#00beef`.

- **code:**

  ```css
  .list-title, .list-subtitle {
    color: #00beef;
  }
  ```

## Paso 71

Es hora de dar estilo a la última sección de la revista: las imágenes.

>> Las imágenes están envueltas en un elemento `aside` que utiliza la clase `image-wrapper`, así que crea un selector `.image-wrapper`. Establece la propiedad `display` en `grid`.

- **code:**

  ```css
  .image-wrapper {
    display: grid;
  }
  ```

## Paso 72

Las imágenes deben estar dispuestas en un diseño de dos columnas y tres filas.

>> Aplica al selector `.image-wrapper` la propiedad `grid-template-columns` con el valor `2fr 1fr` y la propiedad `grid-template-rows` con el valor `repeat(3, min-content)`. De esta forma, las filas de la cuadrícula se ajustarán en altura según el contenido, pero las columnas mantendrán un ancho fijo basado en el contenedor.

- **code:**

  ```css
  .image-wrapper {
    display: grid;
    /* code */
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, min-content);
    /* code */
  }
  ```

## Paso 73

La propiedad `gap` es una forma abreviada de establecer el valor de `column-gap` y `row-gap` al mismo tiempo. Si se le asigna un valor, establece tanto `column-gap` como `row-gap` en ese valor. Si se le asignan dos valores, establece `row-gap` en el primer valor y `column-gap` en el segundo.

>> Asigna al selector `.image-wrapper` una propiedad `gap` establecida en `2rem`.

- **code:**

  ```css
  .image-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, min-content);
    /* code */
    gap: 2rem;
    /* code */
  }
  ```

## Paso 74

La propiedad `place-items` se puede utilizar para establecer los valores de `align-items` y `justify-items` al mismo tiempo. La propiedad `place-items` admite uno o dos valores. Si se proporciona un solo valor, este se aplica tanto a la propiedad `align-items` como a la propiedad `justify-items`. Si se proporcionan dos valores, el primero se aplica a la propiedad `align-items` y el segundo a la propiedad `justify-items`.

> Asigna al selector `.image-wrapper` una propiedad `place-items` establecida en `center`.

- **code:**

  ```css
  .image-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(3, min-content);
    gap: 2rem;
    /* code */
    place-items: center;
    /* code */
  }
  ```

## Paso 75

>> Crea una regla `.image-1, .image-3` y asígnale la propiedad `grid-column` con los valores `1 / -1`. Esto hará que la primera y la tercera imagen ocupen todo el ancho de la cuadrícula.

- **code:**

  ```css
  .image-1, .image-3 {
    grid-column: 1 / -1;
  }
  ```

## Paso 76

Ahora que el diseño de la revista está terminado, debes hacer que sea adaptativo.

>> Empieza con una consulta `@media` `only screen` con un `max-width` de `720px`. Dentro de ella, crea un selector `.image-wrapper` y asígnale la propiedad `grid-template-columns` con un valor de `1fr`.

Esto agrupará las tres imágenes en una sola columna en pantallas más pequeñas.

- **code:**

  ```css
  @media only screen and (max-width: 720px) {
    .image-wrapper {
      grid-template-columns: 1fr;
    }
  }
  ```

## Paso 77

>> Crea otra consulta `@media` `only screen` con un `max-width` de `600px`. Dentro de ella, crea una regla `.text-with-images` y asígnale la propiedad `grid-template-columns` con el valor `1fr`.

Esto reducirá el área de texto inferior a una sola columna en pantallas más pequeñas.

- **code:**

  ```css
  @media only screen and (max-width: 600px) {
    .text-with-images {
      grid-template-columns: 1fr;
    }
  }
  ```

## Paso 78

>> Crea una tercera consulta `@media` `only screen` con un `max-width` de `550px`. Dentro de ella, crea un selector `.hero-title` con un `font-size` de `6rem`, un selector `.hero-subtitle, .author, .quote, .list-title` con un `font-size` de `1.8rem`, un selector `.social-icons` con un `font-size` de `2rem` y un selector `.text` con un `font-size` de `1.6rem`.

- **code:**

  ```css
  @media only screen and (max-width: 550px) {
    .hero-title {
      font-size: 6rem;
    }
  
    .hero-subtitle,
    .author,
    .quote,
    .list-title {
      font-size: 1.8rem;
    }
  
    .social-icons {
      font-size: 2rem;
    }
  
    .text {
      font-size: 1.6rem;
    }
  }
  ```

## Paso 79

>> Crea una última consulta `@media` `only screen` con un `max-width` de `420px`. Dentro de ella, crea un selector `.hero-title` con la propiedad `font-size` establecida en `4.5rem`.

- **code:**

  ```css
  @media only screen and (max-width: 420px) {
    .hero-title {
      font-size: 4.5rem;
    }
  }
  ```

**¡Felicidades! Tu revista ya está terminada.**
