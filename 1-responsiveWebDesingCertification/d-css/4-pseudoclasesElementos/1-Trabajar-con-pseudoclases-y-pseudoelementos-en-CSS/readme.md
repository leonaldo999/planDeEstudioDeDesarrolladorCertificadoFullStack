# Trabajar con pseudoclas y pseudo-elementos en css

---

## Navegación

- [Trabajar con pseudoclas y pseudo-elementos en css](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué son las `pseudo-clases` y cómo funcionan?](#tema-1-qué-son-las-pseudo-clases-y-cómo-funcionan)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cuáles son algunos ejemplos de pseudoclases de acción del usuario?](#tema-2-cuáles-son-algunos-ejemplos-de-pseudoclases-de-acción-del-usuario)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Cuáles son algunos ejemplos de pseudoclases de entrada(`input`)?](#tema-3-cuáles-son-algunos-ejemplos-de-pseudoclases-de-entradainput)
  - [Cuestionario 3](#cuestionario-3)
  - [Tema 4: ¿Cuáles son algunos ejemplos de pseudo-clases de ubicación?](#tema-4-cuáles-son-algunos-ejemplos-de-pseudo-clases-de-ubicación)
  - [Cuestionario 4](#cuestionario-4)
  - [Tema 5: ¿Cuáles son algunos ejemplos de pseudo-clases con estructura-árbol?](#tema-5-cuáles-son-algunos-ejemplos-de-pseudo-clases-con-estructura-árbol)
  - [Cuestionario 5](#cuestionario-5)
  - [Tema 6: ¿Cuáles son algunos ejemplos de pseudo-clases funcionales?](#tema-6-cuáles-son-algunos-ejemplos-de-pseudo-clases-funcionales)
  - [Cuestionario 6](#cuestionario-6)
  - [Tema 7: ¿Qué son los `pseudo-elementos` y cómo funcionan?](#tema-7-qué-son-los-pseudo-elementos-y-cómo-funcionan)
  - [Cuestionario 7](#cuestionario-7)

---

Las pseudoclases y los pseudoelementos en CSS son herramientas poderosas que permiten aplicar estilos a elementos en estados específicos o a partes específicas de un elemento sin necesidad de modificar el HTML. A continuación, se describen las diferencias entre ambos y cómo utilizarlos.

---

## Tema 1: ¿Qué son las `pseudo-clases` y cómo funcionan?

Las `pseudo-clases` son palabras clave CSS especiales que permiten seleccionar un elemento en función de su estado o posición específicos. El estado o la posición del elemento pueden incluir:

- Cuando está activo.
- Cuando se pasa el cursor por encima con el ratón.
- Cuando es el primer elemento secundario de un elemento principal.
- Cuando es el último elemento secundario de un elemento principal.
- Cuando se ha visitado un enlace.
- Cuando está desactivado.

Para utilizar una pseudoclase, se añade al selector utilizando dos puntos (`:`) seguidos del nombre de la pseudoclase:

- **Codigo Ejemplo**

  ```css
  selector:pseudo-class {
  /* CSS properties */
  }
  ```

Veamos cómo se puede utilizar una `pseudo-clase` para representar cada uno de los estados y posiciones que ya hemos mencionado.

La pseudoclase `:active` permite seleccionar el estado activo de un elemento, como al hacer clic en un botón:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button>Example Button</button>
  ```

  ```css
  button:active {
    background: greenyellow;
  }
  ```

La pseudoclase `:hover` define el estado de desplazamiento de un elemento. Un ejemplo sería pasar el cursor sobre un botón o un enlace:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <a href="#">Hover over me!</a>  
  ```

  ```css
  a:hover {
    text-decoration: none;
    color: white;
    background: crimson;
  }
  ```

La pseudoclase `:first-child` selecciona un elemento que es el primer hijo de su elemento padre. A continuación se muestra un ejemplo de cómo seleccionar el primer elemento de párrafo en un contenedor `div`:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="container">
    <p>first child</p>
    <p>second child</p>
    <p>third child</p>
    <p>last child</p>
  </div>  
  ```

  ```css
  .container p:first-child {
    background: lightcoral;
    padding: 0.4rem;
  }
  ```

El primer elemento de párrafo de ese `div` recibirá el color de fondo `lightcoral` y un `padding` de `0,4rem` en los cuatro lados.

La pseudoclase `:last-child` se dirige al último elemento que es hijo de su padre. A continuación se muestra un ejemplo de cómo dirigirse al último elemento de párrafo del elemento `div` contenedor:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="container">
    <p>first child</p>
    <p>second child</p>
    <p>third child</p>
    <p>last child</p>
  </div> 
  ```

  ```css
  .container p:last-child {
    background: lightcoral;
    padding: 0.4rem;
  }
  ```

La pseudoclase `:visited` te permite aplicar estilos a un enlace que el usuario ya ha visitado:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <a href="https://www.example.com" target="_blank">Visit Example.com</a> 
  ```

  ```css
  a:visited {
    color: purple;
  }
  ```

La pseudoclase `:disabled` te permite aplicar estilos a un elemento interactivo en modo deshabilitado:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button disabled>Disabled Button</button>
  ```

  ```css
  button:disabled {
    background-color: lightgray;  
  }
  ```

Como puedes ver, las pseudoclases te permiten aplicar estilos a los elementos en función de las interacciones del usuario, como pasar el cursor por encima o visitar un enlace. Esto hace que tu sitio web resulte más interactivo.

_Además de las pseudoclases ya mencionadas, hay otras como:_

- :focus
- :first-of-type
- :last-of-type
- :nth-of-type
- :modal
- :enabled
- :checked
- :required, y más.

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Cuestionario 1

- **1. ¿Qué hace la pseudoclase `:hover` en CSS?**

  - [x] a) Selecciona un elemento cuando se hace clic en él.
  - [x] b) Selecciona un elemento cuando se pasa el cursor por encima con el ratón. //correcto
  - [ ] c) Selecciona el primer elemento secundario de un elemento principal.
  - [ ] d) Selecciona un enlace después de haberlo visitado.

- **2. ¿Qué son las pseudo-clases?**

  - [x] a) Son palabras clave CSS especiales que te permiten seleccionar un elemento en función de su estado o posición. //correcto
  - [ ] b) Se utilizan para crear nuevos elementos HTML.
  - [ ] c) Cambian el contenido de un elemento.
  - [ ] d) Son sustitutos de las clases en HTML.

- **3. ¿Qué hace la pseudo-clase `:disabled` en CSS?**

  - [x] a) Aplica un estilo a un elemento cuando está desactivado. //correcto
  - [ ] b) Aplica un estilo a un elemento cuando se pasa el cursor por encima.
  - [ ] c) Estiliza el primer elemento secundario de un elemento principal.
  - [ ] d) Aplica un estilo a un enlace después de haber sido visitado.

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Tema 2: ¿Cuáles son algunos ejemplos de pseudoclases de acción del usuario?

La retroalimentación del usuario es un elemento crucial del diseño web. Por ejemplo, es importante que los usuarios reciban señales visuales cuando interactúan con elementos de un sitio web, como al pasar el cursor sobre un botón o hacer clic en un enlace. Esta retroalimentación ayuda a los usuarios a comprender el estado de los elementos interactivos, como indicar si un enlace ha sido visitado o no.

Las pseudoclases de acción del usuario en CSS son palabras clave especiales que permiten proporcionar este tipo de retroalimentación sin necesidad de JavaScript u otros lenguajes de programación.

Estas pseudo-clases incluyen `:hover`, `:activ`e, `:focus` y `:visited`, entre otras. Permiten cambiar la apariencia de los elementos en función de las interacciones del usuario, mejorando así la experiencia general del usuario.

Veamos algunas de las pseudoclases de acción del usuario que tenemos y cómo funcionan.

La pseudoclase `:active` aplica estilos cuando el usuario activa un elemento. Por ejemplo, cuando el usuario hace clic en un botón o un enlace, proporciona una respuesta visual inmediata, mostrando a los usuarios que sus acciones están siendo reconocidas.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <a href="#">Example link</a>
  ```

  ```css
  a:active {
    color: crimson;
  }
  ```

La pseudo-clase `:hover` se activa cuando un usuario pasa el cursor por encima de un elemento con el ratón u otro dispositivo señalador. Los desarrolladores suelen utilizarla para crear una respuesta visual en botones, enlaces o cualquier elemento que deba responder a la atención del usuario. Aquí hay un botón sobre el que el usuario pasaría el cursor antes de hacer clic:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button class="btn">Hover Over Me</button>
  ```

  ```css
  .btn:hover {
    background-color: darkgreen;
    color: white;
    cursor: pointer;
  }
  ```

La pseudo-clase `:focus` aplica estilos cuando un elemento obtiene el foco, normalmente mediante la navegación con el teclado o cuando un usuario hace clic en un campo de entrada de un formulario. Esto no solo sirve para proporcionar información, sino que también es fundamental para la accesibilidad. Garantiza que los usuarios que dependen en gran medida del teclado puedan identificar fácilmente con qué elemento están interactuando.

A continuación se muestra un ejemplo de un campo de entrada que obtiene el foco cuando se hace clic en él o se navega hasta él con el teclado:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <input type="text" />
  </form>
  ```

  ```css
  input:focus {
    outline: 2px solid darkgreen;
    border-radius: 4px;
  }
  ```

La pseudo-clase `:visited` se aplica a los enlaces que el usuario ha visitado. Esto puede resultar útil para ayudar a los usuarios a distinguir entre las páginas que ya han visitado y las que aún no han visitado. A continuación se muestra un ejemplo de cómo cambiar el color del texto de anclaje a cian cuando se visita el enlace:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <a href="https://www.example.com" target="_blank">Visit Example.com</a>
  ```

  ```css
  a:visited {
    color: cyan;
  }
  ```

La pseudoclase `:checked` en CSS te permite aplicar estilos a elementos de formulario como casillas de verificación y botones de opción cuando están seleccionados (marcados). Esta pseudoclase es útil para personalizar la apariencia de estos elementos y mejorar la experiencia del usuario, aunque los navegadores proporcionan estilos predeterminados para ellos.

Aquí tienes un ejemplo con una casilla de verificación para aceptar los términos de un sitio web.

>[!NOTE]
> Parte del CSS de este ejemplo utiliza propiedades que aún no se han tratado. Esto es solo para darte una idea de cómo crear una casilla de verificación personalizada. Aprenderás cómo funciona todo esto en futuras lecciones y talleres.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <label>
    Agree <input class="checkbox" type="checkbox" />
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

En este ejemplo, utilizamos la propiedad `appearance` establecida en `none` para eliminar el estilo predeterminado que aplica el navegador a los campos de entrada de casillas de verificación. Cuando el usuario marque la casilla, esta tendrá un color de fondo `green`.

_Otros ejemplos de pseudoclases de acción son:_

- `:focus-within`: para aplicar estilos a un elemento cuando este o cualquiera de sus descendientes tienen el foco.
- `:enabled`: para seleccionar botones de formulario u otros elementos que estén habilitados actualmente.
- `:disabled`: para seleccionar botones de formulario u otros elementos que estén deshabilitados.
- `:target`: para aplicar estilos a un elemento que sea el destino de un fragmento de URL (la parte de una URL que aparece después del símbolo `#`).

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Cuestionario 2

- **1. ¿Qué te permiten hacer las pseudo-clases de acción del usuario?**

  - [ ] a) Permiten animaciones y transiciones.
  - [ ] b) Te permiten modificar la estructura DOM de manera dinámica.
  - [x] c) Te permiten proporcionar comentarios al usuario sin depender de JavaScript.  //correcto
  - [ ] d) Te permiten dar estilo al último elemento de una lista.

- **2. ¿Qué hace la pseudo-clase `:checked` en CSS?**

  - [ ] a) Selecciona un elemento cuando está desactivado.
  - [ ] b) Selecciona un elemento cuando se pasa el cursor por encima.
  - [x] c) Estiliza elementos como casillas de verificación o botones de opción que están marcados. //correcto
  - [ ] d) Aplica un estilo a un elemento cuando este obtiene el foco.

- **3. ¿Qué hace la pseudoclase `:focus`?**

  - [ ] a) Selecciona un elemento cuando se pasa el cursor por encima con el ratón.
  - [x] b) Aplica estilos cuando un elemento obtiene el foco, normalmente mediante la navegación con el teclado o un clic. //correcto
  - [ ] c) Selecciona un elemento después de enviar un formulario.
  - [ ] d) Aplica estilos a un elemento cuando está desactivado.

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Tema 3: ¿Cuáles son algunos ejemplos de pseudoclases de entrada(`input`)?

La apariencia y el comportamiento de los elementos de entrada son importantes a la hora de crear formularios web. Un formulario con entradas que responden a las acciones del usuario contribuye en gran medida a mejorar la experiencia del usuario y no debe causar confusión ni frustración.

CSS proporciona varias pseudo-clases de entrada que pueden hacer que tus formularios sean más intuitivos y fáciles de usar. Veamos estas pseudoclases en detalle.

La pseudo-clase `:focus` le permite seleccionar un elemento de entrada cuando un usuario lo selecciona o hace clic en él, llamando la atención sobre el campo de entrada activo. Esto ayuda a los usuarios a identificar fácilmente dónde están escribiendo en ese momento:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <input type="text" />
  </form>
  ```
  
  ```css
  input:focus {
    border: 2px solid crimson;
    outline: none;
  }
  ```

Como su nombre indica, la pseudoclase `:hover` se activa cuando el usuario coloca el cursor sobre un elemento. Proporciona información visual antes de que el usuario interactúe con el campo de entrada, alertándole de manera efectiva de que el campo está listo para actuar.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <input type="text" />
  </form>
  ```
  
  ```css
  input:hover {
    background-color: orange;
  }
  ```

En el ejemplo anterior, el fondo del elemento de entrada cambia a color naranja cuando el usuario pasa el cursor por encima, lo que le indica que el campo está listo para interactuar.

La pseudo-clase :checked te permite aplicar un estilo diferente a un botón de radio o una casilla de verificación cuando el usuario lo selecciona. De esta manera, el usuario puede ver fácilmente qué opción ha elegido.

Aquí hay un ejemplo con una casilla de verificación para aceptar los términos de un sitio web.

>[!NOTE]
> Parte del CSS de este ejemplo utiliza propiedades que aún no se han tratado. Esto es solo para darte una idea de cómo crear una casilla de verificación personalizada. Aprenderás cómo funciona todo esto en futuras lecciones y talleres.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <label>
    Agree <input class="checkbox" type="checkbox" />
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

`:required` selecciona los elementos de entrada que tienen el atributo `required`. Indica al usuario que debe rellenar el campo para enviar el formulario.

A continuación se muestra un ejemplo con un formulario que tiene algunos campos de entrada obligatorios:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form action="#">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
  
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" />
  
    <button type="submit">Submit</button>
  </form>
  ```
  
  ```css
  input:required {
    border: 2px solid orange;
  }
  ```

Al validar formularios, puede utilizar la pseudo-clase `:valid` para aplicar estilos a los campos de entrada que cumplen los criterios de validación, y `:invalid` para aplicar estilos a los campos de entrada que no cumplen los criterios. Normalmente, se utiliza el color verde para las entradas válidas y el rojo para las entradas no válidas.

A continuación se muestra un ejemplo en el que se utiliza la pseudoclase `:valid`:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
  </form> 
  ```
  
  ```css
  input:valid {
    border-color: green;
  }
  ```

A continuación se muestra un ejemplo del uso de la pseudoclase `:invalid`:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
  </form> 
  ```
  
  ```css
  input:invalid {
    border-color: crimson;
  }
  ```

La pseudoclase `:disabled` te permite seleccionar y aplicar estilos a los elementos de entrada que están deshabilitados. Estos elementos tienen el atributo `disabled`, que impide a los usuarios interactuar con ellos. Cuando una entrada está deshabilitada, no se puede hacer clic en ella, seleccionarla ni editarla.

A continuación se muestra un ejemplo de una etiqueta y un elemento de entrada deshabilitado.

En el CSS, nos centramos en esa entrada deshabilitada y le damos un color de fondo `lightgray` y cambiamos el puntero del cursor a `not-allowed`.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <form>
    <label for="name">Name:</label>
    <input class="text-input" type="text" id="name" name="name" disabled />
  </form> 
  ```
  
  ```css
  .text-input:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
  ```

El `cursor: not-allowed;` el valor de la propiedad CSS cambia la apariencia del cursor para indicar que no se permite realizar una acción.

Cuando se aplica a un elemento, muestra un cursor con un símbolo de círculo tachado (normalmente un círculo con una línea diagonal que lo atraviesa) para indicar a los usuarios que el elemento no es interactivo o que no se puede hacer clic en él ni interactuar con él.

_A continuación se muestran otros ejemplos de pseudoclases de entrada y lo que hacen:_

- `:autofill`: aplica estilos a los campos de entrada que el navegador rellena automáticamente con los datos guardados.
- `:optional`: aplica estilos a los elementos de entrada que no son obligatorios y pueden dejarse vacíos.
- `:in-range` y `:out-of-range`: aplican estilos a los elementos en función de si sus valores están dentro o fuera de los límites especificados.

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Cuestionario 3

- **1. ¿Qué te permite hacer la pseudo-clase `:focus`?**

  - [ ] a) Te permite resaltar varios elementos al mismo tiempo.
  - [x] b) Te permite aplicar estilos a un elemento de entrada cuando se selecciona o se hace clic en él. //correcto
  - [ ] c) Te permite enviar automáticamente un formulario cuando se hace clic en un campo de entrada.
  - [ ] d) Te permite reordenar elementos en un formulario de manera dinámica.

- **2. ¿Para qué se pueden utilizar las pseudo-clases `:valid` e `:invalid` en la validación de formularios?**

  - [ ] a) Te permiten restablecer todos los campos de entrada automáticamente.
  - [x] b) Te permiten proporcionar diferentes estilos para las entradas en función de si cumplen los criterios de validación. //correcto
  - [ ] c) Te permiten desactivar el envío de formularios si se deja algún campo sin rellenar.
  - [ ] d) Te permiten cambiar el texto del marcador de posición de forma dinámica.

- **3. ¿Qué pseudo-clase te permite aplicar estilos a los campos de entrada que deben completarse antes de enviar el formulario?**

  - [ ] a) `:optional`
  - [ ] b) `:disabled`
  - [x] c) `:required` //correcto
  - [ ] d) `:checked`

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Tema 4: ¿Cuáles son algunos ejemplos de pseudo-clases de ubicación?

Las pseudo-clases de ubicación se utilizan para aplicar estilos a enlaces y elementos que se encuentran dentro del documento actual. Ofrecen una forma de aplicar estilos en función de si un enlace ha sido visitado o si un elemento está actualmente seleccionado.

Algunos ejemplos de pseudo-clases de ubicación son:

- `:link`
- `:visited`
- `:any-link`
- `:local-link`
- `:target`

Veamos más detenidamente cada una de estas pseudoclases.

La pseudo-clase `:link` te permite seleccionar todos los enlaces no visitados de una página web. Puedes utilizarla para aplicar un estilo diferente a los enlaces antes de que el usuario haga clic en ellos. Por ejemplo, es posible que quieras que todos los enlaces no visitados sean de color azul o del color principal de tu sitio web:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <a target="_blank" href="https://www.example.com">Visit Example.com</a>
  ```
  
  ```css
  a:link {
    color: magenta;
  }
  ```

En este caso, cualquier enlace en el que el usuario aún no haya hecho clic aparecerá en color magenta. Una vez que el usuario hace clic en el enlace, el estilo `:link` deja de aplicarse y la pseudoclase `:visited` toma el relevo. La pseudoclase `:visited` entra en juego después de que el usuario haga clic en el enlace, por lo que puede utilizarla para seleccionar los enlaces en los que el usuario ya ha hecho clic.

A continuación se muestra un ejemplo de cómo cambiar el estado del enlace visitado al color `purple`:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <a target="_blank" href="https://www.example.com">Visit Example.com</a>
  ```
  
  ```css
  a:visited {
    color: purple;
  }
  ```

La pseudoclase `:visited` ayuda a los usuarios a distinguir entre los enlaces que han visitado y los que no.

La pseudoclase `:any-link` es una combinación de las pseudoclases `:link` y `:visited`. Por lo tanto, coincide con cualquier elemento de anclaje con un atributo `href`, independientemente de si se ha visitado o no.

A continuación se muestra un ejemplo de cómo cambiar el color del enlace para la pseudoclase `:any-link` a `crimson`:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <a target="_blank" href="https://www.example.com">Visit Example.com</a>
  ```
  
  ```css
  a:any-link {
    color: crimson;
  }
  ```

La pseudoclase `:local-link` se aplica a los enlaces que apuntan al mismo documento. Puede resultar útil cuando se desea diferenciar los enlaces internos de los externos. Actualmente, ningún navegador es compatible con la pseudoclase `:local-link`.

La pseudoclase `:target` selecciona un elemento que coincide con el identificador de fragmento de la URL actual, por ejemplo, `#section1`. Es muy útil para páginas con navegación dentro de la página.

A continuación se muestra un ejemplo HTML que representa una navegación dentro de la página. El CSS utiliza la pseudoclase `:target` para aplicar estilo a la sección que coincide con el lugar al que navega el usuario:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <nav id="table-of-contents">
    <ul>
      <li><a href="#section1">Introduction</a></li>
      <li><a href="#section2">Features</a></li>
    </ul>
  </nav>
  
  <section id="section1">
    <h2>Introduction</h2>
    <p>This is the introduction section.</p>
  </section>
  
  <section id="section2">
    <h2>Features</h2>
    <p>This section describes the features.</p>
  </section>
  ```
  
  ```css
  section:target {
    background-color: green;
    border: 2px solid green;
    padding: 10px;
  }
  ```

Cuando el usuario haga clic en uno de los enlaces de navegación, el color de fondo de la sección correspondiente cambiará a verde.

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Cuestionario 4

- **1. ¿Qué pseudo-clase te permite aplicar estilos a un elemento que coincida con el identificador de fragmento de la URL actual, como `#section1`?**

  - [ ] a) `:hover`
  - [ ] b) `:focus`
  - [x] c) `:target` //correcto
  - [ ] d) `:checked`

- **2. ¿Cuándo son especialmente útiles las pseudo-clases de ubicación?**

  - [ ] a) Al aplicar estilos a los elementos basándose en sus relaciones entre hermanos.
  - [x] b) Al aplicar estilos basados en si un enlace ha sido visitado o si un elemento está actualmente enfocado. //correcto
  - [ ] c) Al aplicar estilos a los elementos basándose en los atributos de su elemento padre.
  - [ ] d) Al ajustar el diseño de una página web de forma dinámica.

- **3. ¿Qué pseudoclase está diseñada para seleccionar enlaces que apuntan al mismo documento, pero que actualmente no es compatible con ningún navegador?**

  - [ ] a) `:any-link`
  - [x] b) `:local-link` //correcto
  - [ ] c) `:visited`
  - [ ] d) `:target`

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Tema 5: ¿Cuáles son algunos ejemplos de pseudo-clases con estructura-árbol?

Las pseudo-clases con estructura de árbol te permiten seleccionar y aplicar estilos a los elementos en función de su posición dentro del árbol del documento. El árbol del documento hace referencia a la estructura jerárquica de los elementos en un documento HTML.

_A continuación se muestra una lista de pseudo`-clases con estructura de árbol(Tree-structural):_

- `:root`
- `:empty`
- `:nth-child(n)`
- `:nth-last-child(n)`
- `:first-child`
- `:last-child`
- `:only-child`
- `:nth-of-type`
- `:first-of-type`
- `:last-of-type`
- `:only-of-type`

Veamos más de cerca cada una de las pseudo-clases con estructura de árbol, acompañadas de ejemplos.

La pseudo-clase `:root` suele ser el elemento `html` raíz. Te ayuda a seleccionar el nivel más alto del documento para que puedas aplicar un estilo común a todo el documento.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <h1>Welcome to My Website</h1>
  <p>This is a sample paragraph to demonstrate the :root pseudo-class.</p>
  ```
  
  ```css
  :root {
    background: black;
    color: aliceblue;
  }
  ```

La pseudoclase `:root` también se utiliza habitualmente para establecer variables CSS:

- **Codigo Ejemplo**

  ```css
  :root {
    --main-font: 'Arial, sans-serif';
    --primary-color: blue; 
    --secondary-color: green; 
  }
  ```

Con las variables CSS, puedes almacenar valores y reutilizarlos en tu hoja de estilos. Más adelante aprenderás más sobre ellas.

Los elementos vacíos, es decir, los elementos que no tienen hijos más que espacios en blanco, también se incluyen en el árbol del documento. Por eso existe una pseudoclase `:empty` para seleccionar los elementos vacíos. Por ejemplo, este código HTML tiene dos elementos de lista vacíos. Con la pseudoclase `:empty`, puedes aplicar un estilo diferente a los elementos de lista vacíos:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <ul>
    <li>Item 1</li>
    <li></li> <!-- This list is empty -->
    <li>Item 2</li>
    <li></li> <!-- Another empty list -->
    <li>Item 3</li>
  </ul>
  ```
  
  ```css
  :empty {
    background: black;
  }
  ```

Lo más práctico que se puede hacer con los elementos vacíos de la lista es probablemente no mostrarlos en absoluto:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <ul>
    <li>Item 1</li>
    <li></li> <!-- This list is empty -->
    <li>Item 2</li>
    <li></li> <!-- Another empty list -->
    <li>Item 3</li>
  </ul>
  ```
  
  ```css
  :empty {
    display: none;
  }
  ```

`:nth-child(n)` te permite seleccionar elementos según su posición dentro de un elemento padre, mientras que `:nth-last-child(n)` te permite seleccionar elementos contando desde el final. La `n` puede ser un número específico o una palabra clave como `odd` (impar) o `even` (par). Esto es increíblemente útil para aplicar estilos a las celdas de una tabla según su posición: par e impar.

Aquí hay un ejemplo HTML de una tabla con la lista de precios de frutas. El CSS utiliza la pseudoclase `:nth-child` para seleccionar las celdas de la tabla en función de las posiciones impares y pares:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <table>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Apple</td>
      <td>$1.00</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$0.50</td>
    </tr>
    <tr>
      <td>Orange</td>
      <td>$0.80</td>
    </tr>
  </table>
  ```
  
  ```css
  th,
  td {
    border: 1px solid lightgray;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: orangered;
  }
  
  tr:nth-child(odd) {
    background-color: lightgreen;
  }
  ```

Las pseudoclases `:first-child`, `:last-child` y `:only-child` actúan sobre los elementos dentro de un contenedor padre o sobre todo el documento.

- `:first-child` selecciona el primer elemento de un elemento padre o del documento.
- `:last-child` selecciona el último elemento de un elemento padre o del documento.
- `:only-child` selecciona el único elemento de un elemento padre o del documento.

El uso de las pseudoclases `:first-child` y `:last-child` seleccionará tanto el `Item 1` como el `Item 3` en este ejemplo:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```
  
  ```css
  li:first-child {
    background-color: orangered;
  }
  
  li:last-child {
    background-color: lightgreen;
  }
  ```

Si tienes más listas desordenadas en la página, debes ser más específico con la selección:

Para mostrarte cómo funciona la pseudoclase `:only-child`, aquí tienes un ejemplo HTML con dos elementos `div` separados. El uso de la pseudoclase `:only-child` garantiza que solo se seleccione el elemento `div` con un único elemento secundario:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <div class="container">
    <div>This is the only item in this container.</div>
  </div>
  
  <div class="container">
    <div>This is one of two items in this container.</div>
    <div>Here is the second item.</div>
  </div>
  ```
  
  ```css
  .container div:only-child {
    border: 2px solid crimson;
    padding: 10px;
    background-color: lightblue;
  }
  ```

Las pseudoclases `:first-of-type` y `:last-of-type` seleccionan la primera y última aparición de un tipo de elemento específico dentro de su elemento padre. Son útiles para aplicar estilos únicos a la primera o última instancia de ese tipo de elemento entre sus hermanos.

En el ejemplo siguiente, `:first-of-type` y `:last-of-type` se aplican al primer elemento y al último elemento dentro del elemento `section`:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />

  <section>
    <h2>Introduction</h2>
    <p>This is the first paragraph in the first section</p>
    <p>This is the second paragraph in the first section</p>
  </section>
  <section>
    <h2>Details</h2>
    <p>This is the first paragraph in the second section.</p>
    <p>This is the second paragraph in the second section.</p>
  </section>
  ```
  
  ```css
  section p:first-of-type {
    background-color: lightgreen;
  }
  
  section p:last-of-type {
    background-color:lightblue;
  }
  ```

`:nth-of-type(n)` te permite seleccionar un elemento específico dentro de su elemento padre en función de su posición entre los elementos hermanos del mismo tipo. Por ejemplo, en el siguiente código HTML, `:nth-of-type(2)` selecciona el segundo elemento del contenedor:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />

  <div class="container">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
  </div>
  ```
  
  ```css
  p:nth-of-type(2) {
    color: red;
    font-weight: bold;
  }
  ```

`:only-of-type` selecciona un elemento si es el único de su tipo dentro de su elemento padre. Esto puede ser útil para resaltar elementos individuales o garantizar que tengan un estilo diferente cuando no forman parte de un grupo.

En el ejemplo siguiente, hay dos elementos `div`, uno de los cuales tiene un único elemento. El CSS solo se aplica al primer contenedor:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />

  <div class="container">
    <p>The only paragraph</p>
  </div>
  
  <div class="container">
    <p>The first paragraph</p>
    <p>The second paragraph</p>
  </div>
  ```
  
  ```css
  p:only-of-type {
    border: 4px solid green;
  }
  ```

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Cuestionario 5

- **1. ¿Cuál es la diferencia entre las pseudo-clases `:first-of-type` y `:last-of-type`?**

  - [ ] a) `:first-of-type` apunta al primer elemento de un tipo específico dentro de su elemento padre, mientras que `:last-of-type` apunta al último elemento de un tipo diferente.
  - [ ] b) `:first-of-type` y `:last-of-type` apuntan a la primera aparición de un elemento, pero en diferentes secciones del documento.
  - [x] c) `:first-of-type` selecciona la primera aparición de un tipo de elemento específico dentro de su elemento padre, mientras que `:last-of-type` selecciona la última aparición de ese mismo tipo de elemento dentro de su elemento padre. //correcto
  - [ ] d) `:last-of-type` aplica estilos al primer y último elemento del documento, mientras que `:last-of-type` aplica estilos a todos los elementos de un tipo específico.

- **2. ¿Cuál es la diferencia entre las pseudo-clases `:first-child` y `:last-child`?**

  - [ ] a) `:first-child` apunta al primer elemento dentro de su elemento padre, mientras que `:last-child` apunta al último elemento dentro de un elemento padre diferente.
  - [x] b) `:first-child` apunta al primer elemento dentro de su elemento padre, mientras que `:last-child` apunta al último elemento dentro del mismo elemento padre. //correcto
  - [ ] c) `:first-child` apunta al primer elemento de un tipo específico dentro de su elemento padre, mientras que `:last-child` apunta al último elemento de un tipo diferente dentro de su elemento padre.
  - [ ] d) `:first-child` apunta al primer y último elemento dentro de un elemento padre, mientras que :`last-child` apunta a todos los demás elementos.

- **3. ¿Qué pseudo-clase te permite seleccionar elementos que no tienen hijos, incluidos aquellos que solo contienen espacios en blanco?**

  - [x] a) `:empty` //correcto
  - [ ] b) `:first-child`
  - [ ] c) `:last-child`
  - [ ] d) `:only-of-type`

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Tema 6: ¿Cuáles son algunos ejemplos de pseudo-clases funcionales?

Las pseudo-clases funcionales te permiten seleccionar elementos basándote en condiciones o relaciones más complejas. A diferencia de las pseudo-clases normales, que se centran en elementos basándose en un estado, por ejemplo, `:hover`, `:focus`, las pseudo-clases funcionales aceptan argumentos entre paréntesis, de ahí el nombre de pseudoclases funcionales«`functional pseudo-classes`».

Algunos ejemplos de pseudo-clases funcionales son:

- `:is()`
- `:where()`
- `:has()`
- `:not()`

Veamos más detenidamente cada una de estas pseudoclases funcionales con ejemplos.

La pseudoclase `:is()` es útil cuando se desea aplicar un estilo a un grupo de elementos que comparten algunas características, pero no todas. Por ejemplo, es posible que desee aplicar un estilo a diferentes tipos de botones en su sitio web, incluidos elementos de `button`, enlaces con estilo de botón y `input` con tipos de `submit` y `reset`. A continuación se muestra un ejemplo que lo ilustra. Sin la función `:is()`, tendría que escribir un selector complejo como este:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button>Example Button</button>
  <a href="#" class="button">Link styled like a button</a>
  <input type="submit" value="Submit" />
  <input type="reset" value="Reset" />
  ```
  
  ```css
  button,
  a.button,
  input[type='submit'],
  input[type='reset'] {
    background-color: darkblue;
    color: white;
    border: 1px solid darkblue;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    margin: 5px;
    font-size: 16px;
    text-align: center;
  }
  
  button:hover,
  a.button:hover,
  input[type='submit']:hover,
  input[type='reset']:hover {
    background-color: blue;
    border-color: blue;
  }
  ```

Con la función `:is()`, puedes escribir un selector más compacto y comprensible como este:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button>Example Button</button>
  <a href="#" class="button">Link styled like a button</a>
  <input type="submit" value="Submit" />
  <input type="reset" value="Reset" />
  ```
  
  ```css
  :is(button, a.button, input[type='submit'], input[type='reset']) {
    background-color: darkblue;
    color: white;
    border: 1px solid darkblue;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    margin: 5px;
    font-size: 16px;
    text-align: center;
  }
  
  :is(button, a.button, input[type='submit'], input[type='reset']):hover {
    background-color: blue;
    border-color: blue;
  }
  ```

La pseudo-clase `:where()` funciona de manera similar a `:is()`, pero no aumenta la especificidad de los selectores. Esto la hace ideal para aplicar estilos sin afectar la especificidad de otras reglas.

Por ejemplo, puedes usar la función `:where()` para aplicar un `margin` y un `padding` cero a los elementos de encabezado. Esto garantiza que el restablecimiento no interfiera con estilos más específicos que puedas aplicar más adelante. Aquí tienes un ejemplo:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <h1>Page Title</h1>
  <h2>Subtitle</h2>
  <h3>A point</h3>
  
  <p>Example paragraph.</p>
  <p>Example paragraph.</p>
  <p>Example paragraph.</p>
  ```
  
  ```css
  :where(h1, h2, h3) {
    margin: 0;
    padding: 0;
  }
  ```

Diseñar un elemento padre en función del estado de sus elementos hijos era todo un reto hasta que se introdujo la pseudoclase `:has()`. Esta permite aplicar estilos a un elemento padre en función de la presencia o el estado de sus elementos hijos.

Por ejemplo, el siguiente CSS solo se aplicará a cualquier elemento `article` que contenga un `h2`:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <article>
    <h2>Subheading</h2>
    <p>Lorem ipsum dolor sit amet.</p>
  </article>
  
  <article>
    <h3>A point</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
  </article>
  ```
  
  ```css
  article:has(h2) {
    border: 2px solid hotpink;
  }
  ```

La pseudo-clase `:not()` es ideal para situaciones en las que se desea aplicar estilos a un grupo de elementos, excluyendo una o más excepciones específicas. En el CSS siguiente, cualquier botón que no sea un botón principal tendrá un fondo gris:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button class="primary">Primary Button</button>
  <button class="secondary">Secondary Button</button>
  <button class="danger">Another Secondary Button</button>
  ```
  
  ```css
  button {
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    color: white;
  }
  
  button.primary {
    background-color: deepskyblue;
  }
  
  button:not(.primary) {
    background-color: grey;
  }
  ```

  [☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Cuestionario 6

- **1. ¿Qué pseudo-clase funciona como `:is()`, pero no añade ninguna especificidad a tus selectores?**

  - [ ] a) `:not()`
  - [ ] b) `:has()`
  - [x] c) `:where()` //correcto
  - [ ] d) `:empty`

- **2. ¿Cuál de estas no es una pseudo-clase funcional?**

  - [ ] a) `:is()`
  - [x] b) `:first-child` //correcto
  - [ ] c) `:has()`
  - [ ] d) `:where()`

- **3. ¿Qué pseudo-clase es perfecta para una situación en la que se desea aplicar estilos a un grupo de elementos sin una o dos excepciones?**

  - [ ] a) `:has()`
  - [ ] b) `:is()`
  - [x] c) `:not()` //correcto
  - [ ] d) `:where()`

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Tema 7: ¿Qué son los `pseudo-elementos` y cómo funcionan?

Uno de los aspectos más interesantes de CSS es el uso de `pseudo-elementos`. En este contexto, «_pseudo_» significa «_no real_», por lo que los `pseudo-elementos` son elementos virtuales o sintéticos que no coinciden directamente con ningún elemento HTML real. Permiten aplicar estilos a partes específicas de un elemento o insertar contenido sin añadir HTML adicional.

Para aplicar un pseudoelemento, adjúntelo al selector del elemento original utilizando dos puntos dobles (`::`). Tenga en cuenta que el selector puede ser de cualquier tipo, como un selector de clase o de ID. Así es como se ve la sintaxis básica de los `pseudo-elementos`:

- **Codigo Ejemplo**

  ```css
  selector::pseudo-element {
    property: value;
  }
  ```

Este doble punto es lo que distingue a los pseudo-elementos de las pseudo-clases, que utilizan un solo punto.

Los pseudo-elementos permiten aplicar estilos a partes específicas del contenido de un elemento o insertar contenido antes o después de él, pero no pueden existir de forma independiente. El elemento al que se adjunta un pseudo-elemento se denomina elemento de origen.

Comencemos por ver algunos ejemplos de los pseudo-elementos `::before` y `::after`. Como sus nombres indican, `::before` permite insertar contenido justo antes del contenido del elemento, mientras que `::after` permite insertar contenido después de él.

Aquí hay un ejemplo de un elemento de botón. En el CSS, utilizaremos el posicionamiento absoluto y el pseudo-elemento `::before` para añadir una estrella antes del texto `Learn More` del botón. Aprenderás más sobre el posicionamiento absoluto en futuras lecciones.

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button class="cta-button">Learn More</button>
  ```
  
  ```css
  .cta-button {
    background-color: lightseagreen;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    position: relative;
  }
  
  .cta-button::before {
    content: "⭐";
    position: absolute;
    left: 3px;
    top: 8px;
    font-size: 0.75rem;
  }
  ```

La propiedad `content` se utiliza para representar el contenido que desea añadir antes del texto del botón. En este ejemplo, añadimos una estrella. Observará que no solo puede insertar contenido, sino también aplicarle estilos. A continuación se muestra un ejemplo del pseudoelemento `::after` con el mismo botón:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button class="cta-button">Learn More</button>
  ```
  
  ```css
  .cta-button {
    background-color: orange;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    position: relative;
  }
  
  .cta-button::after {
    content: '➡️';
    position: absolute;
    right: 5px;
    bottom: 6px;
    font-size: 1.125rem;
    transition: transform 0.3s ease;
  }
  ```

En el pseudo-elemento `::after`, la propiedad `transition` se utiliza para animar los cambios durante `0,3s` segundos con un efecto de suavizado, creando una transformación suave y gradual en lugar de repentina. Aprenderás más sobre la propiedad `transition` en futuras lecciones.

También puedes adjuntar una pseudo-clase al contenido que insertes en otro contenido con los pseudo-elementos `::before` y `::after`. Por ejemplo, un estado de desplazamiento para el contenido. Aquí tienes un ejemplo:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <button class="cta-button">Learn More</button>
  ```
  
  ```css
  .cta-button {
    background-color: orange;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    position: relative;
  }
  
  .cta-button::after {
    content: "➡️";
    position: absolute;
    right: 5px;
    bottom: 6px;
    font-size: 1.125rem;
    transition: transform 0.3s ease;
  }
  
  .cta-button:hover::after {
    transform: translateX(2px);
  }
  ```

Con `transform: translateX(2px)` en el estado hover, el contenido se desplaza `2px` hacia la derecha cada vez que el usuario pasa el cursor por encima del botón. La propiedad transition en el propio `::after` garantiza que el proceso dure `0,3s`.

Eso es lo que hace la propiedad `transform` te permite rotar, inclinar, escalar o trasladar un elemento en una dirección concreta. Aprenderás más sobre ello en futuras lecciones.

En el siguiente ejemplo, veremos el pseudo-elemento `::first-letter`. El pseudo-elemento `::first-letter` se aplica a la primera letra del contenido de un elemento, lo que te permite darle estilo. Aquí tienes un ejemplo de un párrafo de texto. Si queremos dar estilo a la primera letra, podemos usar el pseudo-elemento `::first-letter` de esta manera:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <p>freeCodeCamp lets you learn to code without having to pay.</p>
  ```
  
  ```css
  p::first-letter {
    font-size: 4rem;
  }
  ```

En el último ejemplo, veremos el pseudoelemento `::marker`, que te permite seleccionar el marcador, la viñeta o la numeración de los elementos de la lista para aplicarles estilos. El pseudoelemento `::marker` ofrece una forma de mejorar la identidad de marca de tu sitio web personalizando los marcadores de la lista para que coincidan con tu esquema de colores.

A continuación se muestra un ejemplo de una lista desordenada y una lista ordenada. Para cambiar el color y el tamaño del marcador de los elementos de la lista, puede utilizar el pseudoelemento `::marker` de la siguiente manera:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  <ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
    <li>Unordered list item 3</li>
    <li>Unordered list item 4</li>
  </ul>
  
  <ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
    <li>Ordered list item 3</li>
    <li>Ordered list item 4</li>
  </ol>
  ```
  
  ```css
  li::marker {
    color: crimson;
    font-size: 1.5em;
    font-weight: bold;
  }
  ```

En esta lección solo hemos visto algunos pseudo-elementos. Pero hay muchos más, como `::placeholder`, `::spelling-error` y `::selection`, que te animo a explorar por tu cuenta.

<!-- -------------BONUS---------------- -->

> [!IMPORTANT]
> Este contenido adicional es el explorado por cuenta propia 💡

A continuación se muestra un ejemplo de un campo de texto con texto de ayuda (placeholder). Para cambiar el color, tamaño o estilo del texto del placeholder, puede utilizar el pseudo-elemento `::placeholder` de la siguiente manera:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />
  
  <form>
    <input type="text" placeholder="Escribe tu nombre aquí" />
    <input type="email" placeholder="Ingresa tu correo electrónico" />
  </form>
  ```
  
  ```css
  input::placeholder {
    color: gray;
    font-style: italic;
    opacity: 0.7;
  }
  ```

A continuación se muestra un ejemplo de un párrafo editable donde el navegador detecta errores ortográficos. Para cambiar el estilo visual de las palabras marcadas como error de ortografía, puede utilizar el pseudoelemento `::spelling-error` de la siguiente manera:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />

  <p contenteditable="true">
    Este es un texxto con erroor ortografico.
  </p>
  ```
  
  ```css
  ::spelling-error {
    text-decoration: underline;
    text-decoration-color: red;
    background-color: rgba(255, 0, 0, 0.1);
  }
  ```

A continuación se muestra un ejemplo de texto seleccionable. Para cambiar el color del fondo y del texto cuando el usuario selecciona contenido con el mouse o teclado, puede utilizar el pseudoelemento `::selection` de la siguiente manera:

- **Codigo Ejemplo**

  ```html
  <link rel="stylesheet" href="styles.css" />

  <p>
    Selecciona este texto para ver cómo cambia su estilo gracias al pseudoelemento ::selection.
  </p>
  ```
  
  ```css
  ::selection {
    background-color: #1e90ff;
    color: white;
  }
  ```

  [☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---

## Cuestionario 7

- **1. ¿Cuál de las siguientes opciones describe mejor la relación entre los pseudo-elementos y su elemento originario?**

  - [ ] a) Los pseudo-elementos pueden existir independientemente del elemento originario.
  - [ ] b) Los pseudo-elementos siempre deben declararse antes del elemento originario.
  - [x] c) Los pseudo-elementos dependen del elemento originario y no pueden existir de forma independiente. //correcto
  - [ ] d) Los pseudo-elementos se utilizan para crear nuevos elementos HTML.

- **2. ¿Cuál de estas opciones distingue correctamente los pseudo-elementos de las pseudo-clases?**

  - [ ] a) Los pseudo-elementos utilizan un solo signo de dos puntos, mientras que las pseudo-clases utilizan dos signos de dos puntos.
  - [x] b) Los pseudo-elementos utilizan dos puntos dobles, mientras que las pseudo-clases utilizan un solo punto. //correcto
  - [ ] c) Tanto los pseudo-elementos como las pseudo-clases utilizan la misma notación con dos puntos.
  - [ ] d) Las pseudo-clases requieren dos puntos dobles, mientras que los pseudo-elementos no.

- **3. ¿Cuál de las siguientes opciones describe mejor la función de los pseudoelementos en CSS?**

  - [ ] a) Añaden nuevos elementos HTML al documento.
  - [x] b) Estilizan partes específicas del contenido de un elemento sin añadir etiquetas HTML adicionales. //correcto
  - [ ] c) Reemplazan todo el contenido de un elemento por contenido nuevo.
  - [ ] d) Modifican la estructura del documento HTML.

[☝️](#trabajar-con-pseudoclas-y-pseudo-elementos-en-css)

---
