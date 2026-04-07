# Introducción a JavaScript

## Navegación

- [Introducción a JavaScript](#introducción-a-javascript)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué es JavaScript y cómo funciona con HTML y CSS?](#tema-1-qué-es-javascript-y-cómo-funciona-con-html-y-css)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Qué es un tipo de datos y cuáles son los diferentes tipos de datos en JavaScript?](#tema-2-qué-es-un-tipo-de-datos-y-cuáles-son-los-diferentes-tipos-de-datos-en-javascript)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Qué son las variables y cuáles son las pautas para nombrarlas en JavaScript?](#tema-3-qué-son-las-variables-y-cuáles-son-las-pautas-para-nombrarlas-en-javascript)
  - [Cuestionario 3](#cuestionario-3)
  - [Tema 4: ¿En qué se diferencian let y const en cuanto a la declaración, asignación y reasignación de variables?](#tema-4-en-qué-se-diferencian-let-y-const-en-cuanto-a-la-declaración-asignación-y-reasignación-de-variables)
  - [Cuestionario 4](#cuestionario-4)

---

JavaScript es un lenguaje de programación que se utiliza principalmente para crear contenido interactivo en sitios web. Fue creado por Brendan Eich en 1995 y se ha convertido en uno de los lenguajes de programación más populares del mundo.

---

## Tema 1: ¿Qué es JavaScript y cómo funciona con HTML y CSS?

JavaScript es un potente lenguaje de programación que aporta interactividad y comportamiento dinámico a los sitios web.

Mientras que HTML y CSS son lenguajes de marcado que se utilizan para estructurar el contenido y aplicar estilos a los elementos de una página, JavaScript va más allá al permitir funcionalidades más complejas, como gestionar las entradas del usuario, animar elementos e incluso crear aplicaciones web completas.

Por ejemplo, cuando haces clic en un botón, envías un formulario o pasas el cursor por encima de un menú, JavaScript determina cómo se comporta la página.

Aquí tienes un ejemplo de cómo funcionan estos tres juntos:

- **Example code**

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <button onclick="alert('Button clicked!')">Click me</button>
  </body>
  </html>
  ```

En este ejemplo, se utiliza HTML para definir el contenido: un encabezado (un elemento `h1`) y un botón (el elemento `button`).

Se utiliza CSS para aplicar estilos al encabezado, como, por ejemplo, poner el texto en verde. Se utiliza JavaScript para mostrar un mensaje de alerta cuando se hace clic en el botón.

En resumen, HTML proporciona la estructura, CSS añade el estilo y JavaScript habilita el comportamiento, creando así una experiencia web completa e interactiva.

---

## Cuestionario 1

1. **¿Qué papel desempeña JavaScript en el desarrollo web en comparación con HTML y CSS?**

    - [ ] a) JavaScript aporta estructura a la página web y garantiza que el código esté libre de errores.
    - [ ] b) JavaScript proporciona los estilos de la página web y formatea automáticamente el código.
    - [x] c) JavaScript aporta funcionalidad interactiva y comportamiento dinámico a la página web. //correcto
    - [ ] d) JavaScript solo se utiliza para crear animaciones avanzadas para aplicaciones web.

2. **¿Cómo suele interactuar JavaScript con el HTML y el CSS en una página web?**

    - [ ] a) JavaScript añade más estilos al archivo CSS y más elementos al archivo HTML.
    - [ ] b) JavaScript crea una nueva versión del HTML para la página, de modo que el código HTML se ejecute más rápido.
    - [x] c) JavaScript interactúa con la página para cambiar el contenido y los estilos de forma dinámica. //correcto
    - [ ] d) JavaScript solo funciona en el back-end y rara vez se utiliza en el front-end.

3. **¿Cuál de las siguientes afirmaciones es cierta en cuanto a la relación entre JavaScript, HTML y CSS?**

    - [ ] a) HTML y CSS son lenguajes de programación, mientras que JavaScript es un lenguaje de marcado.
    - [x] b) HTML y CSS son lenguajes de marcado, mientras que JavaScript es un lenguaje de programación. //correcto
    - [ ] c) JavaScript puede sustituir a HTML y CSS.
    - [ ] d) JavaScript no funciona con HTML y CSS.

[☝️](#introducción-a-javascript)

---

## Tema 2: ¿Qué es un tipo de datos y cuáles son los diferentes tipos de datos en JavaScript?

En JavaScript, un tipo de datos es el tipo de valor que se almacena, como un número o una cadena de texto.

Una variable es un contenedor con nombre que almacena un valor de un tipo de datos específico, lo que te permite hacer referencia a él y manipularlo en todo el código.

Quizás recuerdes haber trabajado con variables como estas en clase de matemáticas:

- **Example code**

  ```txt
  x = 2
  y = 4
  
  x + y
  ```

Pudiste crear variables como `x` e `y` y luego hacer referencia a ellas a lo largo de tu programa y realizar operaciones matemáticas como la suma. Se trata de un concepto similar en programación. Puedes crear tus propios nombres de variables y asignarles valores. Estos valores serán de diferentes tipos de datos.

Los tipos de datos ayudan al programa a comprender el tipo de datos con los que está trabajando, ya sea un número, texto o cualquier otra cosa.

JavaScript tiene varios tipos de datos básicos que usarás en tus programas. Exploraremos cada tipo de datos con mayor detalle en lecciones futuras. Por ahora, aquí tienes una breve introducción a los diferentes tipos de datos en JavaScript.

El primer tipo de datos que veremos es el tipo `Number`.

Un `Number` representa tanto valores enteros como de punto flotante. Algunos ejemplos de números enteros son `7`, `19` y `90`.

>[!NOTE]
`console.log()` es una función que muestra información en la consola, que es una parte de tu navegador web utilizada para depurar código. Aprenderás más sobre `console.log()` en lecciones futuras. Además, los símbolos `//` se utilizan para añadir comentarios en tu código. Los comentarios son notas para ti mismo u otros programadores que se ignoran cuando se ejecuta el código.

Activa el editor interactivo e intenta cambiar algunos de los números enteros para ver cómo se actualiza en la consola.

- **Example code**

  ```js
  // Examples of integers
  console.log(3);
  console.log(5);
  console.log(-67);
  ```

Un número de coma flotante es un número que tiene un punto decimal. Algunos ejemplos de números de coma flotante son `3.14` y `5.2`.

- **Example code**

  ```js
  // Examples of floating point numbers
  console.log(3.14);
  console.log(7.2);
  console.log(-14.5);
  ```

El siguiente tipo de datos es una `String`.

Una `String` es una secuencia de caracteres, o texto, entre comillas. A continuación se muestra un ejemplo de cadena con comillas dobles:

- **Example code**

  ```js
  console.log("I love to code!");
  ```

Aquí hay un ejemplo en el que se utilizan comillas simples:

- **Example code**

  ```js
  console.log('I love to code!');
  ```

A menudo utilizarás cadenas de caracteres para representar nombres, etiquetas, mensajes de alerta, etc.

Otro tipo de datos que se utiliza en JavaScript es el tipo `booleano`.

Un valor `booleano` representa uno de dos valores: `true` o `false`. Por ejemplo, un programa podría comprobar si un usuario ha iniciado sesión (`true`) o no (`false`) y cambiar la página en función de ello. Si el usuario ha iniciado sesión, probablemente querrás mostrarle la página del panel de control. De lo contrario, querrás mostrarle la página de inicio de sesión.

Los siguientes dos tipos de datos utilizados en JavaScript son `undefined` y `null`.

`undefined` significa que se ha declarado una variable, pero aún no se le ha asignado un valor. Aprenderás más sobre esto en la próxima lección.

`null` significa que la variable se ha establecido intencionalmente en «nada» y no contiene ningún valor. Exploraremos más sobre cómo funciona esto en lecciones futuras.

Los últimos tres tipos de datos son de naturaleza más compleja. Estos son objetos, símbolos y `BigInt`.

Un `Object` es una colección de pares clave-valor.

- **Example code**

  ```js
  {
    name: "Alice",
    age: 30
  };
  ```

Los objetos son ideales para agrupar información relacionada. En un módulo posterior aprenderás más sobre cómo trabajar con objetos.

Un `Symbol` es un tipo especial de valor en JavaScript que siempre es único y no se puede modificar. Se suele utilizar para crear etiquetas o identificadores únicos para las propiedades:

- **Example code**

  ```js
  Symbol('mySymbol');
  ```

`BigInt` se utiliza para números muy grandes que superan el límite del tipo Number:

- **Example code**

  ```js
  1234567890123456789012345678901234567890n;
  ```

En este ejemplo, creamos un `BigInt` añadiendo un `n` al final de un número muy grande.

`Symbol` y `BigInt` son dos tipos que se utilizan con menos frecuencia, pero que es importante conocer.

Comprender estos tipos de datos te ayuda a manejar y trabajar con diversos tipos de datos en tus programas, ya que cada tipo tiene sus propias características y comportamientos.

---

## Cuestionario 2

1. **¿Cuál de las siguientes opciones es un tipo de datos de cadena?**

    - [x] a) `"Hello"` //correcto
    - [ ] b) `42`
    - [ ] c) `false`
    - [ ] d) `null`

2. **¿Qué tipo de datos representa un valor que puede ser `verdadero` o `falso`?**

    - [ ] a) `Number`
    - [ ] b) `String`
    - [x] c) `Boolean` //correcto
    - [ ] d) `Undefined`

3. **Si se ha declarado una variable pero no se le ha asignado un valor, ¿cuál es su tipo de datos?**

    - [ ] a) `String`
    - [ ] b) `Number`
    - [x] c) `Undefined` //correcto
    - [ ] d) `Null`

[☝️](#introducción-a-javascript)

---

## Tema 3: ¿Qué son las variables y cuáles son las pautas para nombrarlas en JavaScript?

En JavaScript, las variables actúan como contenedores para almacenar datos a los que puedes acceder y modificar a lo largo de tu programa.

Puedes pensar en las variables como cajas que contienen valores. Con las variables, puedes llevar un registro de elementos como números o texto y hacer referencia a estos valores siempre que los necesites en tu programa.

Una forma de declarar una variable en JavaScript es usar la palabra clave `let`. Aprenderás más sobre la palabra clave `let`, así como otras formas de declarar variables, en lecciones futuras.

Aquí hay un ejemplo del uso de `let` para declarar una variable llamada `age`:

- **Example code**

  ```js
  let age;
  ```

En este momento, la variable «age» no tiene ningún valor asignado. Si intentas usarla, devolverá «undefined», lo que significa que no tiene ningún valor.

Aquí tienes un ejemplo.

> [!NOTE]
> `console.log()` es una función que muestra información en la consola, que es una parte de tu navegador web utilizada para depurar código. Aprenderás más sobre `console.log()` en lecciones futuras. Además, los símbolos `//` se utilizan para añadir comentarios en tu código. Los comentarios son notas para ti mismo u otros programadores que se ignoran cuando se ejecuta el código.

- **Example code**

  ```js
  let age;
  console.log(age); // undefined
  ```

Para asignar un valor a una variable, debes utilizar el operador de asignación de la siguiente manera:

- **Example code**

  ```js
  let age = 25;
  ```

Ahora, cuando utilices la variable `age`, te devolverá el valor `25`.

- **Example code**

  ```js
  let age = 25;
  console.log(age); // 25
  ```
  
El operador de asignación tiene el aspecto de un signo igual (`=`), pero no comprueba si hay igualdad. En lecciones futuras aprenderás cuáles son los operadores correctos para comprobar la igualdad.

El operador de asignación se utiliza para asignar un valor a una variable. Este proceso de asignar un valor a una variable se conoce como inicialización.

Una ventaja de usar la palabra clave `let` para declarar variables es que puedes reasignarles valores. En programación, la reasignación significa darle un nuevo valor a una variable que ya tiene uno.

Aquí hay un ejemplo de reasignación del valor de la variable `age`.

- **Example code**

  ```js
  let age = 25;
  console.log(age); // 25
  age = 30;
  console.log(age); // 30
  ```

Ahora la variable `age` tiene el valor `30`. Fíjate en que no ha sido necesario volver a usar la palabra clave `let`, ya que la variable `age` ya estaba declarada, por lo que no hay necesidad de declararla por segunda vez.

Al utilizar la reasignación, solo necesitas hacer referencia al nombre de la variable. La reasignación es útil porque te permite actualizar y cambiar el valor almacenado en una variable mientras se ejecuta el programa. Un buen ejemplo de esto sería actualizar los puntos en un juego.

Nombrar variables puede parecer sencillo, pero existen algunas reglas y mejores prácticas para garantizar que tu código sea legible y funcional.

Los nombres de tus variables deben describir lo que representan los datos. Por ejemplo, en lugar de usar un nombre como `x`, un nombre más descriptivo, como `age` o `points`, hace que tu código sea más fácil de entender.

- **Example code**

  ```js
  // Bad variable names
  let x = 10;
  let y = "John";
  
  // Good variable names
  let age = 10;
  ```

Las variables en JavaScript deben comenzar con una letra, un guión bajo (`_`) o un signo de dólar (`$`). No pueden comenzar con un número.

- **Example code**

  ```js
  // Valid variable names
  let age;
  let _score;
  let $total;
  
  // Invalid variable names
  let 1stPlace; // starts with a number
  ```

Los nombres de las variables distinguen entre mayúsculas y minúsculas, lo que significa que la palabra `age` escrita íntegramente en minúsculas y la palabra `Age` con la `A` mayúscula se consideran variables diferentes.

- **Example code**

  ```js
  let age = 25;
  let Age = 30;
  console.log(age); // 25
  console.log(Age); // 30
  ```

Por eso es importante seguir una convención de nomenclatura coherente, como camelCase. En camelCase, la primera palabra se escribe íntegramente en minúsculas y cada palabra posterior comienza con una letra mayúscula.

A continuación, se muestra un ejemplo del uso de la convención de nomenclatura camelCase para una variable:

- **Example code**

  ```js
  let thisIsCamelCase;
  let anotherExampleVariable;
  let freeCodeCampStudents;
  ```

Hay ciertas palabras clave en JavaScript que no se pueden usar como nombres de variables, como `let`, `const`, `function` o `return`, ya que están reservadas para el propio lenguaje.

También debes evitar usar caracteres especiales como signos de exclamación (`!`) o símbolos de arroba (`@`) en los nombres de tus variables. Lo mejor es que los nombres de las variables sean legibles utilizando letras, números, guiones bajos o signos de dólar.

Si sigues estas pautas, tu código será más limpio y manejable a medida que aumente su complejidad.

---

## Cuestionario 3

1. **¿Qué palabra clave usarías para declarar una variable en JavaScript cuando tienes pensado actualizar su valor más adelante?**

    - [ ] a) `set`
    - [x] b) `let` //correcto
    - [ ] c) `declarate`
    - [ ] d) `variable`

2. **¿Cuál de las siguientes opciones es un nombre de variable válido en JavaScript?**

    - [ ] a) `1stPlace`
    - [ ] b) `total-score!`
    - [x] c) `player1Score` //correcto
    - [ ] d) `const`

3. **¿Por qué es importante usar nombres descriptivos para tus variables?**

    - [ ] a) Es un requisito de JavaScript.
    - [x] b) Los nombres descriptivos hacen que tu código sea más fácil de entender y mantener. //correcto
    - [ ] c) Los nombres descriptivos hacen que el código se ejecute más rápido.
    - [ ] d) Los nombres descriptivos te permiten evitar el uso de `let`.

[☝️](#introducción-a-javascript)

---

## Tema 4: ¿En qué se diferencian let y const en cuanto a la declaración, asignación y reasignación de variables?

Al trabajar con JavaScript, a menudo declararás variables para almacenar datos que planeas utilizar a lo largo de tu programa.

En JavaScript moderno, `let` y `const` son las formas preferidas de declarar variables, pero difieren en cómo manejan la asignación y reasignación de valores.

En esta lección, exploraremos en qué se diferencian `let` y `const` en la declaración, asignación y reasignación de variables.

La palabra clave `let` te permite declarar variables que se pueden actualizar o reasignar más adelante. Puedes pensar en `let` como un contenedor flexible: una vez que has almacenado un valor en él, puedes cambiar ese valor según sea necesario a lo largo de tu programa.

Aquí tienes un ejemplo de cómo declarar y asignar una variable con `let`:

- **Example code**

  ```js
  let score = 10;
  ```

En este caso, se declara la variable `score` y se le asigna el valor `10`. Si quieres actualizar el valor más adelante, puedes hacerlo fácilmente:

- **Example code**

  ```js
  let score = 10;
  console.log(score); // 10
  score = 20;
  console.log(score); // 20
  ```

Ahora, `score` tiene el valor `20`. Esto hace que `let` sea especialmente útil cuando sabes que el valor de una variable cambiará a medida que se ejecute el programa.

Por otro lado, `const` se utiliza para declarar variables que son constantes. Una vez que asignas un valor a una variable declarada con `const`, no puedes volver a asignarle otro.

Esto hace que `const` sea ideal para valores que no quieres cambiar accidentalmente durante la ejecución de tu programa.

Aquí tienes un ejemplo de cómo declarar y asignar una variable con `const`:

- **Example code**

  ```js
  const maxScore = 100;
  console.log(maxScore); // 100
  ```

Una vez que se le asigna el valor `100` a `maxScore`, no se puede modificar:

- **Example code**

  ```js
  maxScore = 200; // This will result in an error
  ```

Si intentas reasignar un valor a una variable `const`, aparecerá un error en la consola de JavaScript, ya que las variables `const` son inmutables una vez que se les ha asignado un valor.

Puedes declarar una variable `let` sin asignarle un valor de inmediato, y asignarle un valor más adelante:

- **Example code**

  ```js
  let age;
  console.log(age); // undefined
  age = 25;
  console.log(age); // 25
  ```

Las variables declaradas con `const` deben recibir un valor en el momento de la declaración. Si intentas declarar una variable `const` sin asignarle un valor, aparecerá un error:

- **Example code**

  ```js
  const age; // Error: Missing initializer in const declaration
  ```

Debes usar `let` cuando necesites declarar variables que se volverán a asignar más adelante. Por ejemplo, para llevar un registro de una puntuación que cambia o actualizar un valor a lo largo del tiempo en tu programa.

Usa `const` cuando quieras declarar variables que deben permanecer constantes, como valores de configuración o ajustes que no deben modificarse accidentalmente.

También puedes usar la palabra clave `var`, pero ya no es tan recomendable. `var` es similar a `let`, excepto que tiene un alcance más amplio, lo que es más probable que cause problemas en tu programa.

---

## Cuestionario 4

1. **¿Qué sucede si intentas reasignar un valor a una variable declarada con `const`?**

    - [ ] a) El valor cambiará sin problemas.
    - [ ] b) El valor original se actualizará, pero se mostrará una advertencia.
    - [x] c) Se generará un error porque las variables `const` no se pueden reasignar. //correcto
    - [ ] d) El nuevo valor se ignorará y el valor original permanecerá igual.

2. **¿Cuál de las siguientes opciones es la forma correcta de asignar el número `100` a una constante llamada `maxScore`?**

    - [ ] a) `const maxScore === 100;`
    - [x] b) `const maxScore = 100;` //correcto
    - [ ] c) `const maxScore <= 100;`
    - [ ] d) `const maxScore == 100;`

3. **¿Se puede declarar una variable `const` sin asignarle un valor?**

    - [ ] a) Sí, pero hay que asignarle un valor más adelante.
    - [x] b) No, las variables `const` deben inicializarse en el momento de la declaración. //correcto
    - [ ] c) Sí, pero solo se puede asignar un número como valor inicial.
    - [ ] d) No, las variables `const` deben declararse y reasignarse en la misma línea.

[☝️](#introducción-a-javascript)

---
