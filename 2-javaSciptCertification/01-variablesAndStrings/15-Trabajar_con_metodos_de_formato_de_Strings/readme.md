# Trabajar con métodos de formato de Strings

En esta sección, aprenderás a trabajar con métodos de formato de Strings en JavaScript. Estos métodos te permiten modificar y formatear Strings de diversas maneras, como cambiar su caso, eliminar espacios en blanco o reemplazar partes del String.

---

## Tema 1: ¿Cómo se puede cambiar el formato de mayúsculas y minúsculas de un String?

Al trabajar con Strings en JavaScript, hay muchas situaciones en las que puede ser necesario ajustar el formato de mayúsculas y minúsculas del texto, como por ejemplo, convertir todas las letras a mayúsculas para un título o convertir el texto a minúsculas para mantener la uniformidad.

Afortunadamente, JavaScript facilita esta tarea con dos métodos integrados: `toUpperCase()` y `toLowerCase()`.

El método `toUpperCase()` convierte todos los caracteres a mayúsculas y devuelve un nuevo String con todos los caracteres en mayúsculas. Esto es útil cuando se desea resaltar texto o crear coherencia en el formato de los Strings.

- **Example code**

  ```js
  let greeting = "Hello, World!";
  let uppercaseGreeting = greeting.toUpperCase();
  console.log(uppercaseGreeting);  // "HELLO, WORLD!"
  ```

En este código, el método `toUpperCase()` transforma todo el string en mayúsculas.

El string original permanece sin cambios porque `toUpperCase()` devuelve un nueva string, en lugar de modificar la original.

Por otro lado, el método `toLowerCase()` convierte todos los caracteres de un string a minúsculas. Esto resulta útil cuando necesitas estandarizar la entrada, como al comparar texto proporcionado por el usuario o al realizar verificaciones que no distinguen entre mayúsculas y minúsculas.

Veamos un ejemplo:

- **Example code**

  ```js
  let shout = "I AM LEARNING JAVASCRIPT!";
  let lowercaseShout = shout.toLowerCase();
  console.log(lowercaseShout);  // "i am learning javascript!"
  ```

El método `toLowerCase()` convierte todos los caracteres a minúsculas, lo que suaviza el tono del string, sin modificar el string original.

En resumen, los métodos `toUpperCase()` y `toLowerCase()` de JavaScript son herramientas poderosas para transformar strings en mayúsculas o minúsculas.

Estos métodos son especialmente útiles para estandarizar la entrada de texto, realizar comparaciones que no distingan entre mayúsculas y minúsculas, y garantizar la coherencia del diseño.

Con estos métodos sencillos pero eficaces, puedes manejar la manipulación de texto de una manera más controlada y predecible.

---

## Cuestionario 1

1. **¿Qué hace el método `toUpperCase()` cuando se aplica a una string en JavaScript?**

    - [ ] a) Convierte solo la primera letra del string a mayúscula.
    - [x] b) Convierte todos los caracteres del string a mayúsculas. //correcto
    - [ ] c) Convierte todos los caracteres del string a minúsculas.
    - [ ] d) Invierte el orden del string.

2. **¿Qué resultado dará el siguiente código?**

    ```js
    let phrase = "JavaScript is Fun!";
    console.log(phrase.toLowerCase());
    ```

    - [ ] a) `JAVASCRIPT IS FUN!`
    - [ ] b) `JavaScript is fun!`
    - [x] c) `javascript is fun!` //correcto
    - [ ] d) `Javascript Is Fun!`

3. **¿En qué situación serías más propenso a usar el método `toLowerCase()`?**

    - [x] a) Cuando quieras asegurarte de que la entrada del usuario esté estandarizada para realizar comparaciones que no distingan entre mayúsculas y minúsculas. //correcto
    - [ ] b) Cuando necesites poner en mayúscula la primera letra de cada palabra de una oración.
    - [ ] c) Cuando quieras reemplazar los espacios de un strina por guiones bajos.
    - [ ] d) Cuando quieras invertir el orden de los caracteres de un strina.

[☝️](#trabajar-con-métodos-de-formato-de-strings)

---

## Tema 2: ¿Cómo se pueden eliminar los espacios en blanco de un string?

Al trabajar con strings en JavaScript, es habitual encontrarse con espacios en blanco no deseados al principio o al final de un string. Los espacios en blanco pueden interferir en operaciones como la comparación, el almacenamiento o la visualización, por lo que es importante saber cómo eliminarlos de manera eficiente.

En esta lección, exploraremos cómo puedes eliminar los espacios en blanco utilizando los métodos `trim()`, `trimStart()` y `trimEnd()` de JavaScript.

Los espacios en blanco se refieren a espacios, tabulaciones o saltos de línea que aparecen en un string pero que no son caracteres visibles. Por ejemplo:

- **Example code**

  ```js
  let greeting = "   Hello, world!   ";
  ```

En este caso, hay espacios antes y después del texto visible, `Hello, world!`.

El método `trim()` es la forma más habitual de eliminar los espacios en blanco tanto al principio como al final de un string. A continuación se muestra un ejemplo:

- **Example code**

  ```js
  let message = "   Hello!   ";
  console.log(message); // "   Hello!   "
  let trimmedMessage = message.trim();
  console.log(trimmedMessage);  // "Hello!"
  ```

En este caso, el método `trim()` elimina todos los espacios al principio y al final, dejando solo `Hello!`. Ten en cuenta que `trim()` no afecta a los espacios en blanco que haya dentro del string (entre palabras, por ejemplo).

A veces, es posible que solo quieras eliminar los espacios en blanco del principio o del final de un string, pero no de ambos. Aquí es donde entran en juego `trimStart()` y `trimEnd()`.

`trimStart()` elimina los espacios en blanco del principio (o inicio) del string.

- **Example code**

  ```js
  let greeting = "   Hello!   ";
  console.log(greeting);  // "   Hello!   "
  let trimmedStart = greeting.trimStart();
  console.log(trimmedStart);  // "Hello!   "
  ```

`trimEnd()` elimina los espacios en blanco del final del string.

- **Example code**

  ```js
  let greeting = "   Hello!   ";
  console.log(greeting);  // "   Hello!   "
  let trimmedEnd = greeting.trimEnd();
  console.log(trimmedEnd);  // "   Hello!"
  ```

Estos métodos te permiten controlar con mayor precisión qué parte del string deseas limpiar.

En resumen, eliminar los espacios en blanco es una parte esencial del trabajo con strings en JavaScript. Tanto si deseas limpiar los datos de entrada como si quieres garantizar comparaciones de strings coherentes, puedes utilizar `trim()` para eliminar los espacios en blanco de ambos extremos de un string, o bien utilizar `trimStart()` y `trimEnd()` para centrarte en un extremo específico.

---

## Cuestionario 2

1. **¿Qué hace el método `trim()` con un String en JavaScript?**

    - [ ] a) Elimina todos los espacios dentro de un String.
    - [x] b) Elimina todos los espacios en blanco del principio y del final de un String. //correcto
    - [ ] c) Elimina solo los espacios entre palabras.
    - [ ] d) Reemplaza todos los caracteres de un String por espacios en blanco.

2. **¿Qué método usarías si solo quisieras eliminar los espacios en blanco del principio de un string?**

    - [ ] a) `trim()`
    - [ ] b) `trimEnd()`
    - [x] c) `trimStart()` //correcto
    - [ ] d) `replace()`

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let str = "   Code   ";
    console.log(str.trimEnd());
    ```

    - [ ] a) `"Code"`
    - [x] b) `"   Code"` //correcto
    - [ ] c) `"Code   "`
    - [ ] d) `" Code "`

[☝️](#trabajar-con-métodos-de-formato-de-strings)

---
