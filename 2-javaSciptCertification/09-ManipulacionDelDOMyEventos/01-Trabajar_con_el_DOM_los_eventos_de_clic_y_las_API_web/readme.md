# Trabajar con el DOM, los eventos de clic y las API web

En este articulo, exploraremos cómo trabajar con el DOM (Document Object Model), manejar eventos de clic y utilizar las API web en JavaScript. Aprenderás a interactuar con elementos HTML, responder a eventos de usuario y aprovechar las capacidades de las API web para mejorar la funcionalidad de tus aplicaciones web.

## Tema 1: ¿Qué es una API y qué son las API web?

Vamos a aprender qué son las API y por qué son esenciales para el desarrollo web. API son las siglas de «Application Programming Interface» (interfaz de programación de aplicaciones). Las API establecen un conjunto de reglas y protocolos que permiten a las aplicaciones de software comunicarse entre sí e intercambiar datos de forma eficiente.

Puedes considerarlas como construcciones que permiten a los desarrolladores crear funcionalidades más complejas a partir de bloques de construcción más sencillos que ya están implementados.

Existen varios tipos de API. Las API web están diseñadas específicamente para aplicaciones web. Hay diferentes tipos de API web para el desarrollo de JavaScript del lado del cliente. No forman parte del propio JavaScript.

Este tipo de API suelen dividirse en dos categorías principales: API de navegador y API de terceros.

Las API de navegador exponen datos del navegador. Como desarrollador web, puedes acceder a estos datos y manipularlos mediante JavaScript.

También proporcionan acceso a diversas funcionalidades, como manipular la estructura del sitio web, gestionar eventos, trabajar con el almacenamiento y comunicarte con la red.

Algunos ejemplos de API de navegador de uso común son:

La API DOM, que puedes utilizar para manipular elementos HTML, sus estilos y atributos. Aprenderás mucho más sobre el DOM en las próximas lecciones. Es un concepto fundamental en el desarrollo web.

La API de almacenamiento, para guardar datos de forma local en el dispositivo del usuario.

Y mucho más.

Existen diversas API de navegador que puedes utilizar para gestionar las interacciones del usuario y obtener más información del navegador, como la ubicación actual del usuario.

También puedes trabajar con otros tipos de elementos, como vídeo y audio.

Las API de los navegadores pueden ser herramientas útiles para crear potentes aplicaciones web. Ya vienen integradas en el navegador.

Pero también puedes utilizar API de terceros, que no vienen integradas en el navegador de forma predeterminada. Para utilizarlas, necesitas obtener su código de alguna manera. Normalmente, incluyen documentación detallada que explica cómo utilizar sus servicios.

Un ejemplo es la API de Google Maps, que puedes utilizar para mostrar mapas interactivos en tu sitio web.

Existen varios tipos de API web de terceros, entre las que se incluyen API meteorológicas, API de redes sociales, API de pago, API de datos, API de traducción y muchas más. Solo tienes que encontrar la API que se adapte a tus necesidades.

Las API web son herramientas esenciales para crear aplicaciones web modernas capaces de interactuar con diversos servicios y fuentes de datos. Al aprender a aprovechar su potencial, ampliarás tu conjunto de herramientas para crear sitios web dinámicos y atractivos.

---

## Cuestionario 1

1. **¿Cuál es el objetivo principal de una API?**

    - [ ] a) Crear nuevos lenguajes de programación.
    - [ ] b) Proporcionar una interfaz de usuario para las aplicaciones.
    - [x] c) Permitir la comunicación entre diferentes aplicaciones de software. //correcto
    - [ ] d) Almacenar y administrar datos.

2. **¿Cuál es la diferencia entre una API general y una API web?**

    - [ ] a) Las API generales solo se usan para aplicaciones web, mientras que las API web se pueden usar para cualquier tipo de aplicación.
    - [x] b) Las API web están diseñadas específicamente para interactuar con navegadores web y servidores. //correcto
    - [ ] c) No hay diferencia entre las API generales y las API web.
    - [ ] d) Las API generales se usan para la comunicación externa dentro de una aplicación, mientras que las API web se usan para la comunicación interna.

3. **¿De qué manera las API web simplifican el desarrollo de aplicaciones web?**

    - [ ] a) Al proporcionar interfaces de usuario ya preparadas.
    - [ ] b) Al eliminar la necesidad de utilizar lenguajes de programación.
    - [x] c) Al ofrecer formas estandarizadas de acceder y manipular datos y funcionalidades. //correcto
    - [ ] d) Al automatizar todo el proceso de desarrollo.

[☝️](#trabajar-con-el-dom-los-eventos-de-clic-y-las-api-web)

---

## Tema 2: ¿Qué es el DOM y cómo se accede a los elementos?

Aprendamos qué es el DOM y por qué es tan importante para el desarrollo web. DOM son las siglas de Modelo de Objetos de Documento (Document Object Model). Es una interfaz de programación que nos permite interactuar con documentos HTML.

Con el DOM, puedes agregar, modificar o eliminar elementos de una página web. Incluso puedes hacer que tu sitio web sea interactivo al configurar elementos para que detecten eventos y respondan a ellos.

En el DOM, un documento HTML se representa como un árbol de nodos. Cada nodo de elemento representa un elemento HTML del documento HTML:

- **Example code**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>DOM Example</title>
    </head>
    <body>
      <h1>What is the DOM?</h1>
      <h2>Let's learn about the DOM</h2>
    </body>
  </html>
  ```

Este es un diagrama que representa la estructura DOM básica de nuestro ejemplo:

- **Example code**

  ```txt
  Document
  ========

  HTML
  -----

  - Head
    - Title
  - Body
    - H1
    - H2 
  ```

Por supuesto, esto puede ser más detallado y complejo dependiendo de la estructura del código HTML de una página web.

El documento HTML es el nodo raíz en la jerarquía del DOM. Tiene un nodo hijo: el elemento `html`. Este es el elemento raíz del documento HTML, ya que todos los demás nodos descienden de él.

El elemento `html` tiene dos elementos hijos: `head` y `body`.

El elemento `head` contiene metadatos sobre el documento. Proporciona información esencial sobre la página web.

El elemento `body` contiene el contenido visible de la página web.

Puedes acceder a estos elementos con JavaScript, trabajar con ellos en tu código e incluso modificarlos dinámicamente. Ese es el poder del DOM y las API web.

Para acceder a estos elementos en JavaScript, puedes usar los métodos `getElementById()` y `querySelector()`. Estos métodos son API web porque proporcionan formas estandarizadas de interactuar con el DOM mediante JavaScript.

Con `getElementById()`, puedes obtener un objeto que representa el elemento HTML con el identificador (id) especificado. Recuerda que los identificadores deben ser únicos en cada documento HTML, por lo que este método solo devolverá un objeto `Element`. Aquí puedes ver un ejemplo:

- **Example code**

  ```js
  const container = document.getElementById("container");
  ```

Esta línea de código JavaScript obtiene un elemento `id` con el valor de `container` y asigna ese objeto a una constante de JavaScript. Debes pasar el `id` entre comillas como argumento. Si registras este objeto en la consola, lo verás en la salida:

- **Example code**

  ```html
  <div id="container">
    <h1>Hello, World!</h1>
    <p>Welcome to learning about the DOM.</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  console.log(container);
  ```

`querySelector()` tiene un alcance más amplio que `getElementById()`. Con `querySelector()`, puedes obtener el primer elemento del documento HTML que coincida con el selector CSS pasado como argumento.

En este ejemplo, obtendrás el elemento que coincida con el selector `section`:

- **Example code**

  ```html
  <section>
    <h2>Section Title</h2>
    <p>This is a section of the webpage.</p>
  </section>
  <script src="index.js"></script> 
  ```

- **Example code**

  ```js
  const sectionEl = document.querySelector("section");
  console.log(sectionEl);
  ```

Si quieres seleccionar un elemento por su nombre de clase usando `querySelector()`, debes anteponer un punto (`.`) al nombre de la clase. Aquí tienes un ejemplo:

- **Example code**

  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="highlight">
    <p>This content is highlighted.</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```css
  body {
    background-color: lightgray;
  }
  
  .highlight {
    background-color: yellow;
  }
  ```

- **Example code**

  ```js
  const highlightEl = document.querySelector(".highlight");
  console.log(highlightEl);
  ```

También tienes otros métodos para seleccionar varios elementos, como `getElementsByClassName()` y `querySelectorAll()`. Aprenderás más sobre ellos en lecciones futuras.

Al comprender cómo usar las API web para manipular el DOM de manera eficiente, podrás crear aplicaciones web potentes e interactivas.

---

## Cuestionario 2

1. **¿Qué es el Modelo de Objetos de Documento (DOM)?**

    - [ ] a)  Un lenguaje de programación utilizado para el desarrollo web.
    - [ ] b)  Una colección de estilos CSS.
    - [x] c)  Una representación en forma de árbol de un documento HTML. //correcto
    - [ ] d)  Un método para crear páginas web dinámicas.

2. **¿Cuál de los siguientes métodos se puede utilizar para acceder a un elemento por su identificador (id) en JavaScript?**

    - [x] a) `getElementById()` //correcto
    - [ ] b) `getElementsByClassName()`
    - [ ] c) `querySelectorAll()`
    - [ ] d) `createElement()`

3. **¿Cuál es el propósito principal del método `querySelector()`?**

    - [ ] a) Para crear un nuevo elemento en el DOM.
    - [x] b) Para seleccionar un elemento basándose en un selector CSS. //correcto
    - [ ] c) Para modificar el contenido de un elemento existente.
    - [ ] d) Para eliminar un elemento del DOM.

[☝️](#trabajar-con-el-dom-los-eventos-de-clic-y-las-api-web)

---

---

## Tema 3: ¿Cómo se relacionan los nodos DOM entre sí en el árbol DOM?

Aprendamos sobre los nodos DOM y sus relaciones en el árbol DOM.

Así como un árbol real tiene ramas grandes y pequeñas conectadas en una estructura jerárquica, los nodos DOM también tienen relaciones directas e indirectas entre sí. Usaremos este ejemplo para ilustrar estas relaciones:

- **Example code**

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>DOM Tree Example</title>
    </head>
    <body>
      <h1>Heading 1</h1>
      <p>Paragraph 1</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </body>
  </html>
  ```

Empecemos por el principio. La raíz del árbol DOM es el elemento `html`. Es el contenedor de nivel superior que alberga todo el contenido de un documento HTML. Todos los demás nodos son descendientes de este nodo raíz.

A continuación, debajo del nodo raíz, encontramos otros nodos en la jerarquía. Un nodo padre es un elemento que contiene otros elementos. Un nodo hijo es un elemento que está contenido dentro de otro elemento.

En este ejemplo, el elemento `body` es el padre del elemento `paragraph`, mientras que el elemento `paragraph` es un hijo del elemento `body`. Estos elementos se representan como nodos en el árbol DOM con las mismas relaciones.

Al igual que tenemos nodos padres y nodos hijos, también tenemos nodos hermanos. Los nodos hermanos son elementos que comparten el mismo padre. En nuestro ejemplo, dos elementos de lista comparten el mismo padre, que es la lista desordenada, por lo que son hermanos.

De manera similar, los elementos `h1` y `paragraph` son hermanos porque comparten el mismo padre, el elemento `body`.

También existen relaciones indirectas entre los distintos niveles de la jerarquía. Los nodos descendientes son elementos que se encuentran contenidos dentro de otro elemento, ya sea de manera directa o indirecta. Se considera que un elemento es descendiente de otro si se puede llegar a él descendiendo por el árbol DOM desde su antepasado.

En nuestro ejemplo, los elementos li (ítems de lista) son descendientes del elemento body, ya que están contenidos indirectamente dentro de él.

Un nodo antecesor es un elemento que se encuentra en un nivel superior de la jerarquía del árbol DOM respecto a otro elemento. En nuestro ejemplo, el elemento `body` es un antecesor de los elementos `li` de la lista.

Comprender estas relaciones es esencial para manipular y navegar por el árbol DOM utilizando JavaScript.

---

## Cuestionario 3

1. **¿Cuál de las siguientes opciones es el nodo padre del elemento `body`?**

    - [ ] a) `head`

    - [x] b) `html`  //correcto

    - [ ] c) `title`

    - [ ] d) `document`

2. **Se toman en cuenta tres elementos `li` dentro del mismo elemento `ul`:**

    - [ ] a) Nodos padres.

    - [ ] b) Nodos hijos.

    - [x] c) Nodos hermanos. //correcto

    - [ ] d) Nodos descendientes.

3. **Un elemento `p` contenido directamente dentro de un `div` es un:**

    - [ ] a) Nodo padre del `div`.

    - [x] b) Nodo hijo del `div`. //correcto

    - [ ] c) Nodo hermano del `div`.

    - [ ] d) Nodo ancestral del `div`.

[☝️](#trabajar-con-el-dom-los-eventos-de-clic-y-las-api-web)

---

## Tema 4: ¿Qué es el método `querySelectorAll()` y cuándo debes usarlo?

Veamos en qué consiste el método `querySelectorAll()`. Puedes usar este método para obtener una lista de todos los elementos DOM que coinciden con un selector CSS específico.

Así es como puedes llamar al método `querySelectorAll()`:

- **Example code**

  ```js
  document.querySelectorAll(selectors);
  ```

Llámala en el objeto `document` y pasa una cadena con los selectores CSS como argumento. El argumento debe ser una cadena válida de selectores CSS. De lo contrario, se lanzará una excepción `SyntaxError`.

`querySelectorAll()` devuelve un objeto `NodeList`, una colección de nodos que coinciden con el selector CSS especificado.

La lista contendrá un objeto `Element` por cada elemento que coincida con los selectores CSS. Si no se encuentran coincidencias, la lista estará vacía.

Los elementos aparecerán en el orden en que aparecen en el documento HTML. Por ejemplo, puedes seleccionar todos los elementos de un tipo específico:

- **Example code**

  ```js
  document.querySelectorAll("div");
  ```

Todos los elementos con una clase específica:

- **Example code**

  ```js
  document.querySelectorAll(".rounded");
  ```

Todos los elementos con un `id` específico:

- **Example code**

  ```js
  document.querySelectorAll("#logo");
  ```

O todos los elementos con un atributo específico, como todos los enlaces que dirigen a los usuarios a una _URL_ específica:

- **Example code**

  ```js
  document.querySelectorAll("a[href='https://www.freecodecamp.org/']");
  ```

También puedes usar selectores CSS más complejos, como este, que selecciona todos los elementos de una lista desordenada que tengan la clase `ingredients`:

- **Example code**

  ```js
  document.querySelectorAll("ul.ingredients li");
  ```

Dado que el método devolverá una colección de nodos, puedes asignar esta colección a una variable y usarla en tus programas para trabajar con los elementos individuales, como puedes ver en este ejemplo con la sintaxis general:

- **Example code**

  ```js
  const matches = document.querySelectorAll(selectors); 
  ```

Por ejemplo, si tienes esta lista desordenada con tres elementos:

- **Example code**

  ```html
  <ul class="ingredients">
    <li>Flour</li>
    <li>Cheese</li>
    <li>Water</li>
  </ul>
  ```

Puedes llamar al método `querySelectorAll()` para seleccionar todos los elementos de la lista desordenada que tengan la clase `ingredients` y asignar el valor devuelto a la constante `matches`:

- **Example code**

  ```js
  const matches = document.querySelectorAll("ul.ingredients li");
  ```

Esto devolverá una colección de tres nodos. Cada nodo representa un elemento de la lista:

- **Example code**

  ```js
  // NodeList(3)
  {
    0: `<li>Flour</li>`,
    1: `<li>Cheese</li>`,
    2: `<li>Water</li>`,
    length: 3,
  }
  ```

Puedes trabajar con esta colección exactamente igual que lo harías con cualquier otro array de JavaScript.

Por ejemplo, puedes mostrarlo en la consola con `console.log()`:

- **Example code**

  ```js
  console.log(matches);
  ```

También puedes verificar el tamaño de la colección con la propiedad `length`:

- **Example code**

  ```js
  console.log(matches.length);
  ```

El resultado será un número entero que representa el número de nodos de la colección:

- **Example code**

  ```tx
  3
  ```

También puedes acceder a los elementos individuales de la colección mediante sus índices correspondientes. El primer elemento estará en el índice `0`:

- **Example code**

  ```js
  console.log(matches[0]);
  console.log(matches[1]);
  console.log(matches[2]);
  ```

Este es el resultado:

- **Example code**

  ```html
  <li>Flour</li>
  <li>Cheese</li>
  <li>Water</li>
  ```

Los elementos se imprimen uno por uno en la consola.

También puedes recorrer los elementos con un ciclo `for`:

- **Example code**

  ```js
  for (let i = 0; i < matches.length; i++) {
    console.log(matches[i]);    
  }
  ```

El resultado será exactamente el mismo en este caso. Sin embargo, esto puede resultar muy útil para trabajar con todos los elementos de la colección.

El método `querySelectorAll()` de JavaScript es una herramienta poderosa para seleccionar varios elementos en función de sus selectores CSS. Con este método, puedes seleccionar elementos específicos dentro de tus páginas web y manipularlos según sea necesario.

---

## Cuestionario 4

1. **¿Cuál es el propósito principal del método `querySelectorAll()` en JavaScript?**

    - [ ] a) Crear nuevos elementos en el DOM.

    - [ ] b) Modificar el contenido de elementos existentes.

    - [x] c) Seleccionar varios elementos basándose en un selector CSS.  //correcto

    - [ ] d) Eliminar elementos del DOM.

2. **¿Qué tipo de objeto devuelve el método `querySelectorAll()`?**

    - [ ] a) `String`

    - [ ] b) `Number`

    - [x] c) `NodeList` //correcto

    - [ ] d) `Array`

3. **Al usar `querySelectorAll()` con un selector de cadena, ¿qué sucede si el selector no coincide con ningún elemento?**

    - [ ] a) Se genera un error.

    - [ ] b) Se devuelve un valor `null`.

    - [x] c) Se devuelve una `NodeList` vacía. //correcto

    - [ ] d) Se devuelve el primer elemento que coincida.

[☝️](#trabajar-con-el-dom-los-eventos-de-clic-y-las-api-web)

---

## Tema 5: ¿Cómo se crean nuevos nodos usando `innerHTML` y `createElement()`?

Veamos cómo puedes crear nodos con `innerHTML` y `createElement()`.

Comenzaremos con `innerHTML`.

`innerHTML` es una propiedad de los objetos Element que puedes usar para establecer su código HTML. Con `innerHTML`, puedes definir la estructura HTML de un elemento existente mediante una cadena, creando todos los nodos necesarios.

Este es un ejemplo. Tenemos un div vacío y le agregaremos algunos elementos en su interior utilizando la propiedad `innerHTML`:

- **Example code**

  ```html
  <div id="container">
    <!-- Add new elements here -->
  </div>
  ```

Primero, debemos seleccionar el elemento por su identificador `id`:

- **Example code**

  ```js
  const container = document.getElementById("container");
  ```

Luego, asignamos a la propiedad `innerHTML` del contenedor una cadena. Esta cadena debe contener todo el código de marcado necesario para representar los nodos y la estructura que deseas crear. Puedes imaginarlo como escribir HTML dentro de una cadena.

- **Example code**

  ```html
  <div id="container"></div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";
  ```

Estableceremos el `innerHTML` de este elemento como una lista no ordenada de ingredientes de pizza (queso y tomate).

También puedes escribir la cadena en varias líneas si eso facilita la comprensión del código. Lo importante es que el código represente con precisión la estructura HTML que quieres crear.

Después de ejecutar este código, verás la siguiente estructura HTML si inspeccionas tu código.

- **Example code**

  ```html
  <div id="container">
    <ul>
      <li>Cheese</li>
      <li>Tomato</li>
    </ul>
  </div>
  ```

Los nuevos nodos se crearon y se agregaron dinámicamente al DOM después de que se analizó la cadena.

`innerHTML` puede ser muy útil en ciertos casos. Sin embargo, presenta algunos riesgos de seguridad que debes conocer. No debes usarlo si no tienes control total sobre la cadena.

Por ejemplo, si el usuario va a ingresar la cadena, no debes usar `innerHTML` porque el usuario podría insertar contenido malicioso en tu sitio web. Por esta razón, por lo general se recomienda usar `textContent` en su lugar para insertar texto sin formato.

Otra forma de crear un nuevo nodo es utilizando el método `createElement()`. Con este nuevo método, puedes crear un nuevo elemento especificando el nombre de su etiqueta.

Por ejemplo, si quieres crear un elemento de imagen, deberías pasar la etiqueta `img` como una cadena al llamar a este método:

- **Example code**

  ```js
  document.createElement("img");
  ```

Y puedes asignar este nuevo objeto a una variable:

- **Example code**

  ```js
  const img = document.createElement("img");
  ```

El método `createElement()` devuelve un nuevo objeto `HTMLElement` si el documento es un `HTMLDocument`. De lo contrario, devuelve un objeto `Element`.

Una vez que tengas listo este nuevo elemento, puedes agregarlo al DOM como hijo de otro elemento existente mediante el método `appendChild()`, o puedes insertarlo en una ubicación específica utilizando otros métodos. Elige el que mejor se adapte a tus necesidades.

- **Example code**

  ```html
  <div id="container"></div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  const img = document.createElement("img");
  img.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
  img.alt = "A slice of lasagna on a plate.";
  container.appendChild(img);
  ```

La creación de nodos con `innerHTML` y `createElement()` te permite manipular dinámicamente la estructura y el contenido de tus sitios web. Al combinar estas técnicas, puedes desarrollar aplicaciones web interactivas.

---

## Cuestionario 5

1. **¿Cuál es el propósito principal de la propiedad `innerHTML`?**

    - [ ] a)  Actualizar elementos HTML.

    - [ ] b)  Establecer el contenido de texto de un elemento.

    - [ ] c)  Modificar los atributos de un elemento.

    - [x] d)  Inyectar contenido HTML de manera dinámica en un elemento. //correcto

2. **¿Cuál de los siguientes métodos se utiliza para crear un nuevo elemento HTML en JavaScript?**

    - [x] a) `createElement()` //correcto

    - [ ] b) `createNode()`

    - [ ] c) `appendChild()`

    - [ ] d) `getElementById()`

3. **¿Cuál es el principal riesgo de usar `innerHTML` cuando no tienes control sobre la cadena?**

    - [ ] a) Provocar un bucle infinito.

    - [x] b) La inserción de contenido malicioso. //correcto

    - [ ] c) Problemas de rendimiento.

    - [ ] d) Problemas de accesibilidad.

[☝️](#trabajar-con-el-dom-los-eventos-de-clic-y-las-api-web)

---

## Tema 6: ¿Cuál es la diferencia entre `innerText`, `textContent` e `innerHTML`?

### Introducción

Aprendamos sobre `innerText`, `textContent` e `innerHTML`.

Estas son propiedades a las que puedes acceder en JavaScript para obtener o modificar el contenido de un elemento HTML. Aunque a primera vista puedan parecer muy similares, presentan diferencias clave. La elección de la propiedad adecuada depende de tu caso de uso específico, así que vamos a profundizar en el tema.

### Comencemos con `innerText`

Entender `innerText`
`innerText` representa el contenido de texto visible del elemento HTML y sus descendientes. Esta propiedad no incluye texto oculto ni etiquetas HTML, solo el texto renderizado.

Por ejemplo, aquí puedes ver un elemento `div` que contiene dos párrafos:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p>I'm learning JavaScript</p>
  </div>
  ```

Si obtenemos una referencia a este elemento HTML en nuestro código JavaScript mediante `getElementById()`, podemos acceder a la propiedad `innerText` de este elemento:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p>I'm learning JavaScript</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  console.log(container.innerText);
  ```

Este es el texto que contiene este elemento:

- **Example code**

  ```tx
  Hello, World!
  I'm learning JavaScript
  ```

La propiedad devuelve una cadena con el texto que contiene el elemento, incluido el texto de sus elementos descendientes.

Debes tener en cuenta que `innerText` solo devuelve el texto que está visible en el momento específico en que se solicita la cadena. Si un elemento hijo está oculto, su texto no será visible.

Este es un ejemplo en el que el segundo párrafo está oculto:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p hidden>I'm learning JavaScript</p>
  </div>
  ```

Si intentamos volver a registrar el `innerText`, ahora la salida no incluirá el texto del segundo párrafo:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p hidden>I'm learning JavaScript</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  console.log(container.innerText);
  ```

Puedes establecer el atributo `innerText` de un elemento HTML de esta manera, pero esto reemplazará el texto existente y agregará un elemento de salto de línea (`br`) por cada salto de línea:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p>I'm learning JavaScript</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  container.innerText = "JavaScript is awesome!";
  ```

Dado que `innerText` toma en cuenta la visibilidad, obtener su valor desencadena un proceso llamado "reflow", que vuelve a calcular la posición de ciertos elementos en el sitio web. Este proceso puede requerir un gran esfuerzo computacional, por lo que debes evitar activarlo si es posible.

Genial. Ahora hablemos de `textContent`.

### Entender `textContent`

`textContent` devuelve el contenido de texto sin formato de un elemento, incluyendo todo el texto dentro de sus descendientes.

La diferencia más importante entre `innerText` y `textContent` es que `textContent` siempre devuelve el contenido de texto completo de un elemento HTML y sus descendientes, sin importar si está visible u oculto.

Aquí tenemos el mismo ejemplo en HTML:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p>I'm learning JavaScript</p>
  </div>
  ```

Si intentas acceder a esta propiedad, verás como resultado el texto del elemento y de sus descendientes, conservando la sangría y el espaciado:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p>I'm learning JavaScript</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  console.log(container.textContent);
  ```

Si un elemento HTML no está visible, como puedes ver aquí, donde hemos ocultado el segundo párrafo, su texto seguirá apareciendo en esta propiedad:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p hidden>I'm learning JavaScript</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  console.log(container.textContent);
  ```

`textContent` también incluirá el contenido de elementos como `script` y `style`.

Si intentas reemplazar el valor de `textContent` en un nodo, se eliminarán todos sus nodos hijos y se reemplazarán por un único nodo de texto que contenga la nueva cadena:

- **Example code**

  ```html
  <div id="container">
    <p>Hello, World!</p>
    <p hidden>I'm learning JavaScript</p>
  </div>
  <script src="index.js"></script>
  ```

- **Example code**

  ```js
  const container = document.getElementById("container");
  container.textContent = "New content";
  ```

### Comparación con `innerHTML`

Y, por último, hablemos de en qué se diferencian `textContent` e `innerText` de `innerHTML`.

Recuerda que con `innerHTML` puedes establecer el contenido HTML interno de un elemento. Esto resulta útil para inyectar nuevo código HTML en el DOM de manera dinámica.

Sin embargo, ten en cuenta que esto representa un riesgo de seguridad si no tienes control sobre la cadena, como en el caso de cadenas que contengan datos ingresados por el usuario. Si esos datos son maliciosos, pueden provocar graves problemas de seguridad.

Para evitarlo, se recomienda utilizar la propiedad `textContent` para insertar texto sin formato.

### Resumen de las diferencias clave

Las propiedades `innerText`, `textContent` e `innerHTML` en JavaScript ofrecen diferentes formas de acceder y manipular el contenido de los elementos HTML. Debes comprender las diferencias entre estas propiedades si tu objetivo es trabajar con contenido HTML en JavaScript de manera efectiva.

---

## Cuestionario 6

1. **¿Cuál de las siguientes propiedades devuelve el contenido de texto visible de un elemento HTML, excluyendo cualquier texto oculto o texto dentro de elementos ocultos?**

    - [ ] a)  `innerHTML`

    - [ ] b)  `textContent`

    - [x] c)  `innerText` //correcto

    - [ ] d)  Todo lo anterior.

2. **¿Cuál de las siguientes propiedades se puede utilizar para insertar dinámicamente nuevo contenido HTML en un elemento?**

    - [x] a) `innerHTML` //correcto

    - [ ] b) `textContent`

    - [ ] c) `innerText`

    - [ ] d) Ninguna de las anteriores.

3. **¿Cuál de las siguientes propiedades devuelve el contenido de texto sin formato de un elemento, incluyendo todo el texto dentro de los elementos hijos, sin importar si está visible u oculto?**

    - [ ] a) `innerHTML`

    - [x] b) `textContent` //correcto

    - [ ] c) `innerText`

    - [ ] d) Todo lo anterior.

[☝️](#trabajar-con-el-dom-los-eventos-de-clic-y-las-api-web)
