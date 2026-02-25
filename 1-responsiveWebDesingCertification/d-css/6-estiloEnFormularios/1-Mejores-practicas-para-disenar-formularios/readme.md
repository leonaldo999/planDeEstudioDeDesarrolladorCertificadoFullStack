# Mejores prácticas para diseñar formularios

---

## Navegación

- [Mejores prácticas para diseñar formularios](#mejores-prácticas-para-diseñar-formularios)
  - [Navegación](#navegación)
  - [Introducción](#introducción)
  - [Tema 1: ¿Cuáles son algunas de las mejores prácticas para diseñar Text Inputs?](#tema-1-cuáles-son-algunas-de-las-mejores-prácticas-para-diseñar-text-inputs)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cuándo se debe utilizar `appearance: none` para resolver problemas de estilo en campos de búsqueda y casillas de verificación?](#tema-2-cuándo-se-debe-utilizar-appearance-none-para-resolver-problemas-de-estilo-en-campos-de-búsqueda-y-casillas-de-verificación)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Cuáles son los problemas más comunes al aplicar estilos a elementos de Input especiales?](#tema-3-cuáles-son-los-problemas-más-comunes-al-aplicar-estilos-a-elementos-de-input-especiales)
  - [Cuestionario 3](#cuestionario-3)

---

## Introducción

En este módulo, aprenderás las mejores prácticas para diseñar formularios efectivos y atractivos. Un formulario bien diseñado no solo mejora la experiencia del usuario, sino que también aumenta la tasa de conversión. A continuación, se presentan algunas recomendaciones clave para diseñar formularios:

---

## Tema 1: ¿Cuáles son algunas de las mejores prácticas para diseñar Text Inputs?

Al igual que con todos los elementos de texto, debes asegurarte de que los estilos que apliques a los Text Inputs sean accesibles. Esto significa que el tamaño de la fuente debe ser adecuado y que el color debe contrastar lo suficiente con el fondo.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <form class="accessible-form">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" placeholder="Enter your username">
    <button type="submit">Submit</button>
  </form>
  ```
  
  ```css
  body {
    background-color: #f9fafb;
    color: #222;
    padding: 2rem;
  }
  
  .accessible-form {
    max-width: 320px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    border: 2px solid #555;
    border-radius: 4px;
    background-color: #fff;
    color: #111;
  }
  
  input[type="text"]:focus {
    outline: 3px solid #1e90ff;
    border-color: #1e90ff;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover,
  button:focus {
    background-color: #187bcd;
  }
  ```

Sin embargo, el marcador de posición suele olvidarse. Es importante recordar que también se trata de texto y que probablemente tendrás que cambiar el estilo para garantizar que sea legible.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <form class="accessible-form">
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="you@example.com">
    <button type="submit">Submit</button>
  </form>
  ```
  
  ```css
  body {
    background-color: #f9fafb;
    color: #222;
    padding: 2rem;
  }
  
  .accessible-form {
    max-width: 320px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  input[type="email"] {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    border: 2px solid #555;
    border-radius: 4px;
    background-color: #fff;
    color: #111;
  }
  
  input[type="email"]::placeholder {
    color: #555; 
    opacity: 1; 
    font-style: italic;
  }
  
  input[type="email"]:focus {
    outline: 3px solid #1e90ff;
    border-color: #1e90ff;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover,
  button:focus {
    background-color: #187bcd;
  }
  ```

Otra cosa a tener en cuenta es que debes permitir al usuario modificar la entrada. Por ejemplo, si se trata de un área de texto, no debes eliminar la posibilidad de cambiar su tamaño. La entrada también debe escalarse adecuadamente cuando el usuario amplíe la página.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <form class="accessible-form">
    <label for="message">Your message</label>
    <textarea id="message" name="message" placeholder="Type your message here..."></textarea>
    <button type="submit">Send</button>
  </form>
  ```
  
  ```css
  body {
    background-color: #f9fafb;
    color: #222;
    padding: 2rem;
    line-height: 1.5;
  }
  
  .accessible-form {
    max-width: 480px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  textarea {
    width: 100%;
    min-height: 120px;
    padding: 0.8rem;
    font-size: 1rem;
    border: 2px solid #555;
    border-radius: 4px;
    background-color: #fff;
    color: #111;
    resize: both; 
    box-sizing: border-box; 
  }
  
  textarea::placeholder {
    color: #555;
    opacity: 1;
  }
  
  textarea:focus {
    outline: 3px solid #1e90ff;
    border-color: #1e90ff;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover,
  button:focus {
    background-color: #187bcd;
  }
  ```

Los elementos de entrada también pueden recibir el foco. Cuando edites tus estilos, debes asegurarte de mantener un indicador visible cuando el elemento reciba el foco, como un borde en negrita.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <form class="accessible-form">
    <label for="name">Full name</label>
    <input type="text" id="name" name="name" placeholder="Enter your full name">
  
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="you@example.com">
  
    <button type="submit">Submit</button>
  </form>
  ```
  
  ```css
  body {
    background-color: #f9fafb;
    color: #222;
    padding: 2rem;
  }
  
  .accessible-form {
    max-width: 360px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    border: 2px solid #666;
    border-radius: 4px;
    background-color: #fff;
    color: #111;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  
  input::placeholder {
    color: #555;
    opacity: 1;
  }
  
  input:focus {
    border-color: #1e90ff;      
    box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4); 
    outline: none;              
  }
  
  button {
    margin-top: 1.5rem;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover,
  button:focus {
    background-color: #187bcd;
  }
  ```

Además, hay que tener en cuenta el estado de error. Cuando el texto del usuario no supera la validación de entrada, aparece un indicador visual que muestra que hay algún problema.

Para que el mensaje de error se actualice dinámicamente, es necesario utilizar JavaScript, que aprenderás en lecciones posteriores.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <form class="accessible-form">
    <label for="email">Email address</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="you@example.com" 
      aria-describedby="email-error"
    >
    <p id="email-error" class="error-message">
      Please enter a valid email address.
    </p>
  
    <button type="submit">Submit</button>
  </form>
  
  <script src="index.js"></script>
  ```
  
  ```css
  body {
    background-color: #f9fafb;
    color: #222;
    padding: 2rem;
    font-family: system-ui, sans-serif;
  }
  
  .accessible-form {
    max-width: 360px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  input[type="email"] {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    border: 2px solid #666;
    border-radius: 4px;
    background-color: #fff;
    color: #111;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  
  input::placeholder {
    color: #555;
    opacity: 1;
  }
  
  input:focus {
    border-color: #1e90ff;
    box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4);
    outline: none;
  }
  
  input.error {
    border-color: #d93025;
    background-color: #fff5f5;
  }
  
  input.error:focus {
    border-color: #d93025;
    box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.4);
  }
  
  .error-message {
    color: #d93025;
    font-size: 0.95rem;
    margin-top: 0.4rem;
  }
  
  button {
    margin-top: 1.5rem;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    background-color: #1e90ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover,
  button:focus {
    background-color: #187bcd;
  }
  ```

A medida que le das a tu elemento tu toque personal, debes asegurarte de que el estado de error siga siendo perceptible y que no se parezca al indicador de enfoque. Teniendo todo esto en cuenta, ahora puedes crear formularios de usuario cautivadores.

---

## Cuestionario 1

1. **Al diseñar los campos de entrada de texto, ¿cuál de las siguientes opciones NO se menciona como factor clave para la accesibilidad?**

    - [ ] a) Tamaño de la fuente.
    - [ ] b) Contraste de color con el fondo.
    - [ ] c) Legibilidad del texto de marcador de posición.
    - [x] d) Velocidad de animación de las transiciones de enfoque. //correcto

2. **¿Qué se recomienda con respecto a la capacidad de cambio de tamaño de un campo de `textarea` input?**

    - [ ] a) Eliminar la posibilidad de cambiar el tamaño para lograr un aspecto uniforme.
    - [x] b) Permitir al usuario cambiar el tamaño. //correcto
    - [ ] c) Cambiar el tamaño automáticamente en función de la longitud del contenido.
    - [ ] d) Bloquear el tamaño después de la carga inicial de la página.

3. **¿Cómo se debe diseñar el estado de error de una entrada?**

    - [ ] a) Debe ser idéntico al estado de enfoque.
    - [ ] b) Debe ser sutil para no distraer al usuario.
    - [x] c) Debe ser perceptible y diferenciarse del indicador de enfoque. //correcto
    - [ ] d) Solo debe indicarse mediante texto, no mediante estilos visuales.

[☝️](#mejores-prácticas-para-diseñar-formularios)

---

## Tema 2: ¿Cuándo se debe utilizar `appearance: none` para resolver problemas de estilo en campos de búsqueda y casillas de verificación?

Aprendamos cuándo utilizar `appearance: none` para resolver problemas de estilo en campos de búsqueda, casillas de verificación y botones de opción.

Los navegadores aplican un estilo predeterminado a muchos elementos. En el caso de los elementos de entrada, la capacidad de aplicarles estilos con CSS puede resultar bastante limitada. Por lo tanto, es posible que desee utilizar `appearance: none` para ocultar aspectos del elemento predeterminado y crear uno propio. Por ejemplo, esto ocultaría las casillas de verificación predeterminadas para un campo de entrada de casilla de verificación, lo que le permitiría utilizar indicadores personalizados, como una marca verde y una X roja, para mostrar el estado. En el caso de un campo de entrada de búsqueda, los navegadores basados en WebKit mostrarán un icono de búsqueda predeterminado y un botón de cancelar. Ocultar estos elementos le permite crear sus propios indicadores que aparecerían en todos los navegadores.

Aquí tienes un ejemplo de una casilla de verificación personalizada:

NOTA: Parte del CSS de este ejemplo utiliza propiedades que aún no se han tratado. Esto es solo para darte una idea de cómo crear una casilla de verificación personalizada. Aprenderás cómo funciona todo esto en futuras lecciones y talleres.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <label>
      <input class="checkbox" type="checkbox" /> Agree
    </label>
  </form>
  ```
  
  ```css
  .checkbox {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: all 0.25s ease;
    vertical-align: middle; 
  }
  
  .checkbox:hover {
    border-color: #888;
  }
  
  .checkbox:checked {
    background-color: #4caf50;
    border-color: #4caf50;
  }
  
  .checkbox:checked::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  .checkbox:focus {
    outline: 2px solid #90caf9;
    outline-offset: 2px;
  }
  ```

WebKit es un motor de software que ayuda a los navegadores web a mostrar sitios web. Navegadores como Safari utilizan WebKit para garantizar que las páginas web se vean y funcionen correctamente. La propiedad CSS `appearance: none` te ofrece un control total sobre el estilo, pero hay algunas cosas que debes tener en cuenta. Los componentes interactivos predeterminados de los elementos de entrada incluyen características como indicadores de enfoque y de error, que debes asegurarte de que no se pierdan.

Crear un estilo coherente en todas las plataformas es una buena razón para utilizar esta propiedad. También puede utilizarla para asegurarse de que los objetivos táctiles en un dispositivo móvil sean lo suficientemente grandes o que los colores de una casilla de verificación tengan suficiente contraste.

---

## Cuestionario 2

1. **¿Cuál es el objetivo principal de utilizar `appearance: none` en los inputs?**

    - [ ] a) Para mejorar los tiempos de carga de la página.
    - [ ] b) Para ocultar completamente el elemento input.
    - [x] c) Para eliminar el estilo predeterminado del navegador y permitir un estilo personalizado. //correcto
    - [ ] d) Para hacer que el elemento input no sea interactivo.

2. **¿Cuál de las siguientes opciones NO se menciona como ventaja de utilizar la `appearance: none` en los elementos `input`?**

    - [ ] a) Creación de un estilo coherente en todas las plataformas.
    - [ ] b) Posibilidad de personalizar los indicadores de las casillas de verificación.
    - [x] c) Mejora de la seguridad en el envío de formularios. //correcto
    - [ ] d) Activación de objetivos táctiles más grandes en dispositivos móviles.

3. **¿Qué inconveniente potencial del uso de la `appearance: none` se menciona en la lección?**

    - [ ] a) Puede hacer que la entrada deje de funcionar.
    - [ ] b) Puede ralentizar considerablemente la página.
    - [x] c) Puede eliminar funciones predeterminadas importantes, como los indicadores de enfoque. //correcto
    - [ ] d) No es compatible con todos los navegadores modernos.

[☝️](#mejores-prácticas-para-diseñar-formularios)

---

## Tema 3: ¿Cuáles son los problemas más comunes al aplicar estilos a elementos de Input especiales?

Veamos algunos de los problemas más comunes al intentar aplicar estilos a elementos de entrada especiales, como las entradas de `datetime-local` y de `color`.

Estos tipos especiales de entradas se basan en pseudoelementos complejos para crear elementos como los selectores de fecha y color. Esto supone un reto importante a la hora de diseñar estas entradas. Uno de los retos es que, dado que el diseño predeterminado depende totalmente del navegador, el CSS que hace que el selector se vea bien en un navegador puede producir un resultado muy diferente en otro.

Aquí hay un ejemplo de una entrada de color:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <form>
    <label for="favorite-color">Pick your favorite color:</label>
    <input type="color" id="favorite-color" name="favorite-color">
  </form>
  ```
  
  ```css
  input {
    padding: 8px 12px;
    margin: 8px 0;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  
  input[type="color"] {
    width: 60px;
    height: 40px;
    padding: 0;
    border: 2px solid #555;
    border-radius: 4px;
    cursor: pointer;
  }
  ```

Otra puede ser la complejidad del pseudoelemento. Consideremos el selector de fecha: hay muchas partes móviles y la compleja estructura del pseudoelemento puede suponer un reto importante a la hora de aplicar el estilo a las áreas correctas.

Aquí tenemos un ejemplo de entrada de fecha:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <form>
    <label for="birthdate">Select your birthdate:</label>
    <input type="date" id="birthdate" name="birthdate">
  </form>
  ```
  
  ```css
  input {
    padding: 8px 12px;
    margin: 8px 0;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  
  input[type="date"] {
    padding: 6px 10px;
    border: 2px solid #555;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    background-color: #4CAF50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  ```

Por supuesto, con estos elementos complejos, también corres el riesgo de perder accidentalmente funciones importantes al aplicarle estilos manualmente. No solo podrías perder indicadores importantes como el estado de enfoque o el elemento seleccionado, sino que también podrías romper el selector por completo.

Por estas razones, muchos desarrolladores confían por completo en bibliotecas JavaScript o componentes personalizados en lugar de utilizar los componentes integrados del navegador.

---

## Cuestionario 3

1. **¿Cuál es uno de los principales retos a la hora de diseñar elementos de entrada especiales como `datetime-local` y `color`?**

    - [ ] a) Estos elementos no son compatibles con todos los navegadores.
    - [x] b) Su funcionalidad depende de pseudoelementos complejos. //correcto
    - [ ] c) Requieren JavaScript adicional para funcionar correctamente.
    - [ ] d) No se les puede aplicar ningún estilo con CSS.

2. **¿Por qué el CSS escrito para dar estilo a un elemento de entrada especial puede funcionar de manera diferente en distintos navegadores?**

    - [ ] a) Los diferentes navegadores utilizan diferentes motores JavaScript.
    - [x] b) El estilo predeterminado depende del navegador. //correcto
    - [ ] c) Algunos navegadores no admiten estos tipos de entrada.
    - [ ] d) Las propiedades CSS funcionan de manera diferente en cada navegador.

3. **¿Qué enfoque adoptan muchos desarrolladores para abordar los retos que plantea el diseño de elementos de entrada complejos?**

    - [ ] a) Evitan por completo el uso de estos tipos de entrada.
    - [ ] b) Utilizan prefijos CSS específicos del navegador.
    - [x] c) Dependen de bibliotecas JavaScript o componentes personalizados. //correcto
    - [ ] d) Utilizan únicamente estilos en línea para estos elementos.

[☝️](#mejores-prácticas-para-diseñar-formularios)

---
