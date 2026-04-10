# Introducción a Strings

## Navegación

- [Introducción a Strings](#introducción-a-strings)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué es una String en JavaScript y qué es la inmutabilidad de los Strings?](#tema-1-qué-es-una-string-en-javascript-y-qué-es-la-inmutabilidad-de-los-strings)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Qué es la concatenación de strings y cómo se pueden concatenar strings con variables?](#tema-2-qué-es-la-concatenación-de-strings-y-cómo-se-pueden-concatenar-strings-con-variables)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Para qué sirve `console.log` y cómo funciona?](#tema-3-para-qué-sirve-consolelog-y-cómo-funciona)
  - [Cuestionario 3](#cuestionario-3)

---

En esta sección, aprenderás sobre los strings (cadenas de texto) en JavaScript, cómo se crean, manipulan y utilizan en tus programas. Los strings son una parte fundamental de la programación, ya que nos permiten trabajar con texto y mostrar información al usuario.

---

## Tema 1: ¿Qué es una String en JavaScript y qué es la inmutabilidad de los Strings?

En JavaScript, un String es una secuencia de caracteres que se utiliza para representar datos de texto. Las Strings son uno de los tipos de datos primitivos del lenguaje, junto con los `números`, los `booleanos`, `null` y `undefined`.

Para crear una String en JavaScript, puedes usar comillas simples (`'`) o comillas dobles (`"`).

A continuación, te mostramos un ejemplo de cómo crear dos variables que contienen valores de String:

- **Example code**

  ```js
  let singleQuotes = 'This is a string';
  console.log(singleQuotes);
  let doubleQuotes = "This is also a string";
  console.log(doubleQuotes);
  ```

Aunque puedes utilizar comillas simples o dobles para crear Strings, es importante ser coherente. Si un string comienza con una comilla simple, también debe terminar con una comilla simple.

Lo mismo se aplica a las comillas dobles. El siguiente ejemplo generará un error porque comienza con una comilla doble y termina con una comilla simple:

- **Example code**

  ```js
  const improperStr = "Do not do this';
  ```

Otra cosa que hay que tener en cuenta es que los Strings son inmutables. En programación, la inmutabilidad significa que, una vez que se crea algo, no se puede modificar. Por lo tanto, cuando creas una cadena, no puedes cambiar sus caracteres directamente. En su lugar, si quieres realizar cambios, debes crear una nueva cadena.

A continuación se muestra un ejemplo de cómo asignar una nueva cadena a una variable:

- **Example code**

  ```js
  let developer = "Jessica";
  console.log(developer);
  developer = "Quincy";
  console.log(developer);
  ```

Dado que los string son inmutables, no podemos actualizar la primera cadena directamente. Por eso estamos asignando una nueva cadena a la variable `developer`.

Los string son una parte importante de la programación y, en futuras lecciones, aprenderás técnicas avanzadas para manipularlas y aprovechar todo su potencial con el fin de crear aplicaciones dinámicas e interactivas.

---

## Cuestionario 1

1. **¿Cuál de las siguientes opciones es la sintaxis correcta para crear strings en JavaScript?**

    - [ ] a) `const str = <this is a string>`
    - [ ] b) `const str = [this is a string]`
    - [x] c) `const str = "this is a string"` //correcto
    - [ ] d) `const str = //this is a string//`

2. **¿Qué ocurre si una string empieza con una comilla simple y termina con una comilla doble?**

    - [ ] a) Se crea una string válida.
    - [x] b) Se producirá un error de sintaxis. //correcto
    - [ ] c) Se crea una string que contiene ambas comillas.
    - [ ] d) El intérprete de JavaScript la ignorará.

3. **¿Por qué se considera que las strings son inmutables en JavaScript?**

    - [ ] a) No se pueden crear strings utilizando variables.
    - [x] b) Una vez creada una string, no se pueden modificar sus caracteres directamente. //correcto
    - [ ] c) Las strings solo se pueden crear mediante literales.
    - [ ] d) Se pueden modificar las strings, pero solo a través de variables globales.

[☝️](#introducción-a-strings)

---

## Tema 2: ¿Qué es la concatenación de strings y cómo se pueden concatenar strings con variables?

En JavaScript, trabajar con texto es una parte esencial de la programación y, a menudo, necesitarás combinar o unir fragmentos de texto. Este proceso se denomina concatenación de strings.

En esta lección, nos centraremos en cómo funciona la concatenación de strings, concretamente utilizando el operador `+`, el operador `+=` y el método `concat()`.

El operador `+` es uno de los métodos más sencillos y más utilizados para concatenar strings. Te permite unir varias strings o combinar strings con variables que contienen texto.

He aquí un ejemplo:

- **Example code**

  ```js
  let firstName = "John";
  let lastName = "Doe";
  
  let fullName = firstName + " " + lastName; 
  console.log(fullName); // John Doe
  ```

En este ejemplo, hemos utilizado el operador `+` para concatenar las variables `firstName` y `lastName` junto con un espacio (`" "`) y formar así el nombre completo.

Una desventaja de utilizar el operador `+` para la concatenación de strings es que puede provocar problemas de espaciado si no se controla cuidadosamente el espacio entre las strings concatenadas.

A continuación se muestra un ejemplo en el que falta un espacio:

- **Example code**

  ```js
  let firstName = "John";
  let lastName = "Doe";
  
  let fullName = firstName + lastName; 
  console.log(fullName); // "JohnDoe"
  ```

Siempre que utilices el operador `+` para concatenar strings, es importante que compruebes minuciosamente si hay algún problema relacionado con los espacios.

Si necesitas añadir o concatenar texto a una string ya existente, puedes utilizar el operador `+=`. Esto resulta útil cuando quieres ampliar una string añadiéndole más texto a lo largo del tiempo.

A continuación se muestra un ejemplo de cómo concatenar una string a otra utilizando el operador `+=`:

- **Example code**

  ```js
  let greeting = 'Hello';
  greeting += ', John!';
  
  console.log(greeting); // "Hello, John!"
  ```

Es importante recordar que las strings son inmutables, lo que significa que, una vez creada una string, no se puede modificar.

En este caso, la string original `Hello` no se modifica. En su lugar, greeting ahora hace referencia a la nueva string `Hello, John!`.

Otra forma de concatenar strings es utilizando el método `concat()`.

Antes de empezar a aprender sobre el método `concat()`, es importante comprender primero qué son un método y una función a un nivel más general.

En programación, una función es un bloque de código reutilizable que realiza una tarea específica y puede invocarse con diversas entradas. Un método, por otro lado, es un tipo de función asociada a un objeto, lo que significa que opera sobre los datos contenidos en ese objeto.

En futuras lecciones, profundizaremos mucho más en cómo funcionan las funciones, los objetos y los métodos en JavaScript. Pero, por ahora, es importante comprender que JavaScript tiene docenas de métodos que puedes utilizar, como el método `concat()`.

Aquí tienes un ejemplo del uso del método `concat()` para unir dos strings:

- **Example code**

  ```js
  let str1 = 'Hello';
  let str2 = 'World';
  
  let result = str1.concat(' ', str2); 
  console.log(result); // Hello World
  ```

En este ejemplo, utilizamos el método `concat()` para unir `str1`, un espacio (`' '`) y `str2` en una sola string.

En resumen, el operador `+` es el más adecuado para concatenaciones sencillas, especialmente cuando necesitas combinar unas pocas strings o variables.

El operador `+=` resulta útil cuando se construye una string paso a paso o se añade nuevo contenido a una variable de string ya existente.

Por último, el método `concat()` resulta útil cuando necesitas concatenar varias strings.

---

## Cuestionario 2

1. **¿Cuál es el uso principal del operador `+` en la concatenación de strings?**

    - [ ] a) Para comparar dos strings.
    - [x] b) Para unir dos o más strings. //correcto
    - [ ] c) Para comprobar si dos strings son iguales.
    - [ ] d) Para eliminar caracteres de una string.

2. **¿Cuál de las siguientes opciones es la forma correcta de concatenar strings?**

    - [ ] a)
          ```js
          let greeting = "Hi";
          greeting -= " there!";
          ```
    - [ ] b)
          ```js
          let greeting = "Hi";
          greeting =+ " there!";
          ```
    - [x] c) //correcto
          ```js
          let greeting = "Hi";
          greeting += " there!";
          ```
    - [ ] d)
          ```js
          let greeting = "Hi";
          greeting == " there!";
          ```

3. **¿Cuál de las siguientes opciones es el método correcto para concatenar varias strings?**

    - [ ] a) `concatenate()`
    - [x] b) `concat()` //correcto
    - [ ] c) `concatenating()`
    - [ ] d) `concats()`

[☝️](#introducción-a-strings)

---

## Tema 3: ¿Para qué sirve `console.log` y cómo funciona?

En las lecciones anteriores ya te presentamos `console.log()`, pero en esta lección profundizaremos en su finalidad y su uso.

En JavaScript, `console.log()` es una herramienta sencilla pero potente que se utiliza para mostrar mensajes o enviar información a la consola del navegador. Los desarrolladores la utilizan principalmente para depurar e inspeccionar el código mientras trabajan en sus programas.

Puedes utilizar `console.log()` para registrar texto o variables en la consola y asegurarte de que tu código se ejecuta correctamente.

Para utilizar `console.log()`, debes llamar al método con el valor o mensaje que deseas mostrar entre paréntesis. A continuación te mostramos algunos ejemplos:

- **Example code**

  ```js
  console.log("Hello, world!");

  let num = 5;
  console.log(num); // 5
  ```

El primer ejemplo muestra `¡Hola, mundo!` en la consola del navegador, mientras que el segundo ejemplo muestra el valor `5`.

Aquí tienes otro ejemplo de cómo utilizar `console.log()`:

- **Example code**

  ```js
  let name = "Alice";
  console.log("Hello, " + name + "!"); // Hello, Alice!
  ```

También puedes pasar varios valores a `console.log()` separados por comas. Por ejemplo:

- **Example code**

  ```js
  let name = "Alice";
  let age = 25;
  console.log("Name:", name, "Age:", age); // Name: Alice Age: 25
  ```

Esto resulta útil para registrar varios datos a la vez.

El método `console.log()` te ayuda a supervisar tu código mientras se ejecuta, lo que facilita la detección de errores y la comprensión del comportamiento de tu programa.

---

## Cuestionario 3

1. **¿Qué hace el método `console.log()` en JavaScript?**

    - [ ] a) Revisa tu código en busca de errores y muestra los resultados en la consola del navegador.
    - [x] b) Se utiliza para registrar datos y mostrar el resultado en la consola del navegador. //correcto
    - [ ] c) Almacena valores tanto en una base de datos como en la consola del navegador.
    - [ ] d) Modifica el contenido HTML de la página y muestra los cambios en la consola del navegador.

2. **¿Qué se registrará en la consola?**

    ```js
    const age = 10;
    console.log(age);
    ```

    - [x] a) `10` //correcto
    - [ ] b) `"10"`
    - [ ] c) `age`
    - [ ] d) `"age"`

3. **¿Por qué es útil `console.log()` al desarrollar aplicaciones web?**

    - [ ] a) Se utiliza habitualmente para comprobar el rendimiento de una aplicación y ver los resultados en la consola.
    - [x] b) Los desarrolladores suelen utilizarlo para depurar e inspeccionar valores o expresiones en su código durante el desarrollo. //correcto
    - [ ] c) Se utiliza habitualmente para detectar errores de linting en el código y mostrarlos en la consola.
    - [ ] d) Se utiliza habitualmente para garantizar que el código JavaScript se ajusta a las mejores prácticas.

[☝️](#introducción-a-strings)

---
