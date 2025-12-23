# Crea la Pagina de Consejos Laborales de Quincy

En este taller, practicarás el uso del HTML semántico creando una página web que incluye algunos de los consejos de Quincy Larson para conseguir un trabajo como desarrollador. Ya tenemos preparada la plantilla HTML básica

---

## Paso 1

> Empieza creando un elemento `h1` con el texto `Quincy's Tips for Getting a Developer Job`.

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  ```

---

## Paso 2

> Ahora, crea un elemento `p` debajo del elemento `h1`. Dentro de este párrafo, añade el texto `Learning to code is hard, but as Quincy Larson says, You can become a developer.`.

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, You can become a developer.</p>
  ```

---

## Paso 3

En una lección anterior aprendiste que el elemento `q` se utiliza para distinguir el texto citado del contenido que lo rodea.

Aquí tienes un ejemplo:

- **Codigo Ejemplo**

  ```html
  <p>
    Nancy said, <q>Learning is fun!</q>
  </p>
  ```

La mayoría de los navegadores modernos añaden automáticamente comillas alrededor de una cita en línea cuando se utiliza el elemento `q`.

Dentro del párrafo `You can become a developer.` usa un elemento `q`, manteniendo el resto del párrafo sin cambios.

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q>You can become a developer.</q></p>
  ```

---

## Paso 4

Si la fuente de una cita es un sitio web, puede citarla con el atributo `cite`. El valor de este atributo debe ser una URL válida. Aunque este atributo no cambia la presentación de la cita en bloque, es muy útil para proporcionar a los lectores de pantalla y a los motores de búsqueda más información sobre la cita.

A continuación se muestra un ejemplo de un elemento de cita en línea con un atributo `cite`:

- **Codigo Ejemplo**

  ```html
  <p>
    Nancy said,
    <q cite="https://example.com">Learning is fun!</q>
  </p>
  ```

> Agregue el atributo `cite` al elemento de cita en línea con esta URL: `https://www.freecodecamp.org/news/learn-to-code-book/`

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  ```

---

## Paso 5

> Debajo del elemento `p`, agrega un elemento `main` e incluye tres elementos de `section` dentro de él.

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  <main>
    <section></section>
    <section></section>
    <section></section>
  </main>
  ```

---

## Paso 6

> Dentro del primer elemento de sección, agrega un elemento `h2` con el texto `Envisioning Success` (Imaginando el éxito).

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  <main>
    <section>
      <h2>Envisioning Success</h2>
    </section>
    <section></section>
    <section></section>
  </main>
  ```

---

## Paso 7

Debajo del elemento `h2`, agregarás otra cita de Quincy. Esta vez, la cita no formará parte de un párrafo más grande. En cambio, todo el párrafo será una cita. Para distinguir el texto citado de esta manera, debes utilizar el elemento de cita en bloque: `blockquote`. En el navegador, verás que el texto está ligeramente sangrado.

Aquí tienes un ejemplo de un elemento de cita en bloque con texto citado:

- **Codigo Ejemplo**

  ```html
  <blockquote>
    The first thing you should consider about education is this is an economic decision.
  </blockquote>
  ```

> Ahora, dentro de la primera sección, agrega un elemento de cita bloque debajo del elemento h2 con el texto: `Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?`

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  <main>
    <section>
      <h2>Envisioning Success</h2>
      <blockquote>
        Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
      </blockquote>
    </section>
    <section></section>
    <section></section>
  </main>
  ```

---

## Paso 8

Al igual que con el elemento de cita en línea, también se puede añadir un atributo cite a un elemento de `blockquote`.

A continuación se muestra un ejemplo de un elemento de `blockquote` con un atributo `cite`:

- **Codigo Ejemplo**

  ```html
  <blockquote cite="https://www.freecodecamp.org/news/is-college-worth-it/">
    The first thing you should consider about education is this is an economic decision.
  </blockquote>
  ```

> Ahora, agrega un atributo `cite` al elemento de cita en bloque con la URL. `https://www.freecodecamp.org/news/learn-to-code-book/`

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  <main>
    <section>
      <h2>Envisioning Success</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
      </blockquote>
    </section>
    <section></section>
    <section></section>
  </main>
  ```

---

## Paso 9

> Debajo del elemento de `blockquote`, agrega un elemento de `p` con el texto: `—Quincy Larson, How to Learn to Code and Get a Developer Job [Full Book]`

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  <main>
    <section>
      <h2>Envisioning Success</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
      </blockquote>
      <p>
        —Quincy Larson, How to Learn to Code and Get a Developer Job [Full Book]
      </p>
    </section>
    <section></section>
    <section></section>
  </main>
  ```

---

## Paso 10

Hasta ahora has estado utilizando el atributo `cite` para atribuir la fuente de la cita, pero el atributo no muestra realmente la fuente al usuario.

Si deseas atribuir la fuente visualmente, puedes añadir un elemento de cita, `cite`, fuera del elemento de bloque de cita. El elemento de cita es un elemento HTML que puedes utilizar para marcar el título de una obra creativa a la que se hace referencia, como un libro, un artículo, una canción, una película, un sitio web o un trabajo de investigación.

- **Codigo Ejemplo**

  ```html
  <div>
    <blockquote cite="https://www.freecodecamp.org/news/is-college-worth-it/">
      The first thing you should consider about education is this is an economic decision.
    </blockquote>
    <p>—Quincy Larson, <cite>Is College Still Worth it? Tips from my 20 Years in Adult Education</cite></p>
  </div>
  ```

> Dentro del elemento `p` debajo del elemento de cita en bloque, envuelva `How to Learn to Code and Get a Developer Job [Full Book]` en un elemento de `cite`.

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  <main>
    <section>
      <h2>Envisioning Success</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
      </blockquote>
      <p>
        —Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book]</cite>
      </p>
    </section>
    <section></section>
    <section></section>
  </main>
  ```

---

## Paso 11

> Dentro del segundo elemento de `section`, anida un elemento `h2` con el texto `Importance of Networking`.
>
> Debajo de este encabezado, añade un elemento de cita en bloque con un atributo `cite` con el valor: `https://www.freecodecamp.org/news/learn-to-code-book/`

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>
  <main>
    <section>
      <h2>Envisioning Success</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
      </blockquote>
      <p>
        —Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book]</cite>
      </p>
    </section>
    <section>
      <h2>Importance of Networking</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        
      </blockquote>
    </section>
    <section></section>
  </main>
  ```

---

## Paso 12

Puedes escribir el texto citado directamente dentro del elemento de cita en bloque, como hiciste en el primer elemento de `section`. También puedes envolverlo dentro de uno o más elementos de párrafo. Esto resulta útil cuando el texto tiene varios párrafos, pero quieres mantenerlos dentro del mismo elemento de cita en bloque.

Aquí tienes un ejemplo con dos párrafos:

- **Codigo Ejemplo**

  ```html
  <blockquote cite="https://www.freecodecamp.org/news/is-college-worth-it/">
    <p>So many people ask me each week: is college still worth it? In this 1-hour video I answer this question and other commonly asked questions about university.</p>
    <p>I've been in adult education for two decades at this point, and even though I'm not a labor market economist, I do feel confident enough to answer these questions.</p>
  </blockquote>
  ```

> En la segunda sección, dentro del elemento de `blockquote` existente, agrega cuatro elementos `p` con los siguientes textos, en orden:

- So much of getting a job is who you know.
- It's OK to be an introvert, but you do need to push your boundaries.
- Create GitHub, Twitter, LinkedIn, and Discord accounts.
- Go to tech meetups and conferences. Travel if you have to.

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>

  <main>
    <section>
      <h2>Envisioning Success</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
      </blockquote>
      <p>
        —Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book]</cite>
      </p>
    </section>

    <section>
      <h2>Importance of Networking</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        <p>So much of getting a job is who you know.</p>
        <p>It's OK to be an introvert, but you do need to push your boundaries.</p>
        <p>Create GitHub, Twitter, LinkedIn, and Discord accounts.</p>
        <p>Go to tech meetups and conferences. Travel if you have to.</p>
      </blockquote>
    </section>
    <section></section>
  </main>
  ```

---

## Paso 13

En el tercer y último elemento de `section`, creará la misma estructura HTML que en la sección anterior.

En primer lugar, dentro de la última sección, añada un elemento `h2` con el texto: `Importance of Building a Reputation`.

A continuación, debajo del elemento `h2`, agregue un elemento de `blockquote` con un atributo `cite` establecido en: `https://www.freecodecamp.org/news/learn-to-code-book/`

Por último, anida tres elementos de `p` dentro del elemento de cita en bloque con los siguientes textos, en este orden:

- Share short video demos of your projects.
- Keep applying to speak at bigger and bigger conferences.
- Hang out at hackerspaces and help people who are even newer to coding than you.

- **Codigo**

  ```html
  <h1>Quincy's Tips for Getting a Developer Job</h1>
  <p>Learning to code is hard, but as Quincy Larson says, <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q></p>

  <main>
    <section>
      <h2>Envisioning Success</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
      </blockquote>
      <p>
        —Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book]</cite>
      </p>
    </section>

    <section>
      <h2>Importance of Networking</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        <p>So much of getting a job is who you know.</p>
        <p>It's OK to be an introvert, but you do need to push your boundaries.</p>
        <p>Create GitHub, Twitter, LinkedIn, and Discord accounts.</p>
        <p>Go to tech meetups and conferences. Travel if you have to.</p>
      </blockquote>
    </section>

    <section>
      <h2>Importance of Building a Reputation</h2>
      <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
        <p>Share short video demos of your projects.</p>
        <p>Keep applying to speak at bigger and bigger conferences.</p>
        <p>Hang out at hackerspaces and help people who are even newer to coding than you.</p>
      </blockquote>
    </section>
  </main>
  ```

---

**Congratulations! With this you have finished this workshop.**
