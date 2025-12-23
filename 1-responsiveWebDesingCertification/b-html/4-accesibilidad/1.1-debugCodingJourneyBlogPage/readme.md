# Página del blog "Debug Coding Journey"

---

## Paso 1

Camperbot ha creado una página de blog sobre programación, pero parece que la página tiene algunos problemas de accesibilidad y malas prácticas. Tu trabajo en este taller es solucionar estos problemas para Camperbot.

El primer conjunto de errores tiene que ver con el uso de los encabezados. En una lección anterior, aprendiste que lo mejor es utilizar solo un `h1` por página. Pero parece que Camperbot está utilizando varios `h1`.

> Deja el `<h1>Welcome to Camperbot's Blog</h1>` tal cual y cambia los demás elementos `h1` a elementos `h2`.

- **Codigo**

  ```html
  <div>
    <h2 id="post1">My Journey Learning to Code</h2>
    <p>I started learning to code a few months ago and it's been a wild ride!</p>
    
    <h4>Early Challenges</h4>
    <p>At first, syntax was really confusing.</p>
    
    <h4>Breakthroughs</h4>
    <p>Eventually things started to click.</p>
  </div>

  <div>
    <h2 id="post2">Accessibility Matters</h2>
    <p>Today I learned that not everyone uses the web the same way I do.</p>

    <h5>Screen Readers</h5>
    <p>These tools help visually impaired users browse websites.</p>
  </div>

  <div>
    <h2 id="post3">What's Next?</h2>
    <p>I'm excited to dive into JavaScript and build interactive features!</p>

    <h3>Coming soon: My first JavaScript project!</h3>
    <p>Stay tuned for some exciting interactive blog features.</p>
  </div>
  ```

---

## Paso 2

Parece que todavía hay algunos problemas con el uso de los encabezados en la página. Si observas el primer elemento `div`, hay dos elementos `h4` que se utilizan como subtítulos. Una práctica más adecuada sería utilizar elementos `h3` para estos subtítulos, ya que están un nivel por debajo del elemento `h2`.

> Cambia los dos elementos `h4` por elementos `h3`.

- **Codigo**

  ```html
  <div>
    <h2 id="post1">My Journey Learning to Code</h2>
    <p>I started learning to code a few months ago and it's been a wild ride!</p>
    
    <h3>Early Challenges</h3>
    <p>At first, syntax was really confusing.</p>
    
    <h3>Breakthroughs</h3>
    <p>Eventually things started to click.</p>
  </div>
  ```

---

## Paso 3

En la segunda sección de la publicación, se utiliza un elemento `h5`. Sería más adecuado utilizar un elemento `h3` en este caso.

> Cambie el elemento `h5` por un elemento `h3`.

- **Codigo**

  ```html
  <div>
    <h2 id="post2">Accessibility Matters</h2>
    <p>Today I learned that not everyone uses the web the same way I do.</p>

    <h3>Screen Readers</h3>
    <p>These tools help visually impaired users browse websites.</p>
  </div>
  ```

---

## Paso 4

Debajo del título principal de la página, hay una sección de navegación que contiene enlaces a cada entrada del blog.

> Esta sección debe estar envuelta en un elemento `nav` para indicar su propósito como punto de referencia de navegación.

- **Codigo**

  ```html
  <nav>
    <h2>Navigation</h2>
    <ul>
      <li><a href="#post1">My Journey</a></li>
      <li><a href="#post2">Accessibility</a></li>
      <li><a href="#post3">Next Steps</a></li>
    </ul>
  </nav>
  ```

---

## Paso 5

En la página del blog, hay un total de tres entradas de blog envueltas dentro de elementos `div` genéricos. Pero sería mejor utilizar elementos semánticos para envolver cada entrada.

> Cambie cada elemento `div` que envuelve cada entrada del blog por un elemento `article`.

- **Codigo**

  ```html
  <article>
    <h2 id="post1">My Journey Learning to Code</h2>
    <p>I started learning to code a few months ago and it's been a wild ride!</p>

    <h3>Early Challenges</h3>
    <p>At first, syntax was really confusing.</p>

    <h3>Breakthroughs</h3>
    <p>Eventually things started to click.</p>
  </article>

  <article>
    <h2 id="post2">Accessibility Matters</h2>
    <p>Today I learned that not everyone uses the web the same way I do.</p>

    <h3>Screen Readers</h3>
    <p>These tools help visually impaired users browse websites.</p>
  </article>

  <article>
    <h2 id="post3">What's Next?</h2>
    <p>I'm excited to dive into JavaScript and build interactive features!</p>

    <h3>Coming soon: My first JavaScript project!</h3>
    <p>Stay tuned for some exciting interactive blog features.</p>
  </article>
  ```

---

## Paso 6

> Dado que toda la sección que contiene las entradas del blog representa el contenido principal de la página, debe estar envuelta en un elemento `<main>`. Esto ayuda a los lectores de pantalla y otras tecnologías de asistencia a comprender mejor la estructura de la página.

- **Codigo**

  ```html
  <main>
    <article>
      <h2 id="post1">My Journey Learning to Code</h2>
      <p>I started learning to code a few months ago and it's been a wild ride!</p>

      <h3>Early Challenges</h3>
      <p>At first, syntax was really confusing.</p>

      <h3>Breakthroughs</h3>
      <p>Eventually things started to click.</p>
    </article>

    <article>
      <h2 id="post2">Accessibility Matters</h2>
      <p>Today I learned that not everyone uses the web the same way I do.</p>

      <h3>Screen Readers</h3>
      <p>These tools help visually impaired users browse websites.</p>
    </article>

    <article>
      <h2 id="post3">What's Next?</h2>
      <p>I'm excited to dive into JavaScript and build interactive features!</p>

      <h3>Coming soon: My first JavaScript project!</h3>
      <p>Stay tuned for some exciting interactive blog features.</p>
    </article>
  </main>
  ```

---

## Paso 7

Para la última parte del taller, hay que hacer algunos cambios en la sección de contacto que aparece en la parte inferior.

> El primer cambio consistiría en envolver la sección de contacto dentro de un elemento de `<footer>`. Esto ayudará a los lectores de pantalla a identificar esta sección como el pie de página de la página.

- **Codigo**

  ```html
  <footer>
    <h3>Contact Me</h3>
    <p>Email me at camperbot@blog.io</p>
  </footer>
  ```

---

## Paso 8

Ahora mismo, la sección del `<footer>` tiene un encabezado `h3`. Sin embargo, debería ser un encabezado `h2` para mantener una jerarquía de encabezados adecuada.

> Cambie el `h3` por un `h2`.

- **Codigo**

  ```html
  <footer>
    <h2>Contact Me</h2>
    <p>Email me at camperbot@blog.io</p>
  </footer>
  ```

---

## Paso 9

El último cambio será en el texto del correo electrónico dentro del pie de página. En lecciones y talleres anteriores, aprendiste a trabajar con el enlace mailto de esta manera:

- **Codigo Ejemplo**

  ```html
  <p>Email me at <a href="mailto:janedoe@email.com">janedoe@email.com</a></p>
  ```

Comience por envolver la dirección de correo electrónico <camperbot@blog.io> dentro de un elemento de anclaje. A continuación, añada el atributo href al elemento de anclaje y establézcalo como mailto:camperbot@blog.io.

- **Codigo**

  ```html
  <footer>
    <h2>Contact Me</h2>
    <p>Email me at <a href="mailto:camperbot@blog.io">camperbot@blog.io</a></p>
  </footer>
  ```

---

**Con este último cambio, ¡habrá resuelto con éxito todos los problemas de la página del blog!**
