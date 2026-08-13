# La palabra clave var y el hoisting

En este módulo, exploraremos la palabra clave `var` y el concepto de hoisting en JavaScript. Comprender estos conceptos es fundamental para escribir código limpio y evitar errores comunes.

---

## Tema 1: ¿Qué es la palabra clave `var` y por qué ya no se recomienda usarla?

La palabra clave `var` en JavaScript es una de las formas originales de declarar variables. Ha formado parte del lenguaje desde sus inicios y, durante muchos años, siguió siendo el método principal para crear variables. Sin embargo, a medida que JavaScript evolucionó y los desarrolladores adquirieron más experiencia con el lenguaje, se hicieron evidentes ciertos inconvenientes del uso de `var`, lo que llevó a la introducción de `let` y `const` en 2015.

Cuando declaras una variable con `var`, esta adquiere un ámbito de función o un ámbito global. Esto significa que, si declaras una variable dentro de una función usando `var`, solo se puede acceder a ella dentro de esa función. Sin embargo, si la declaras fuera de cualquier función, se convierte en una variable global a la que se puede acceder en todo el script. Este comportamiento a veces puede dar lugar a resultados inesperados y hacer que tu código sea más difícil de entender.

Un problema con `var` es que permite redeclarar la misma variable varias veces sin generar un error. Esto puede provocar sobrescrituras accidentales y dificultar la depuración.

- **Example code**

  ```js
  var num = 5;
  console.log(num); // 5
  
  // This is allowed and doesn't throw an error
  var num = 10;
  console.log(num); // 10
  ```

El problema más importante de `var` es que no tiene ámbito de bloque. Las variables declaradas con `var` dentro de un bloque, como una instrucción `if` o un bucle `for`, siguen siendo accesibles fuera de ese bloque.

- **Example code**

  ```js
  if (true) {
    var num = 5;
  }
  console.log(num); // 5
  ```

Este comportamiento puede provocar fugas de variables no intencionales y hacer que tu código sea más propenso a errores.

Debido a estos problemas, el desarrollo moderno de JavaScript ha dejado de lado en gran medida el uso de `var` para dar paso a `let` y `const`. Estas palabras clave ofrecen un ámbito de bloque que se ajusta mejor a cómo funciona el ámbito en muchos otros lenguajes de programación.

Además, no permiten la redeclaración dentro del mismo ámbito, lo que ayuda a evitar sobrescrituras accidentales.

Si bien `var` sigue formando parte de JavaScript y funciona en todos los navegadores, por lo general se recomienda utilizar `let` y `const` en el desarrollo moderno de JavaScript. Estas palabras clave ofrecen reglas claras de ámbito, ayudan a evitar errores comunes y hacen que el comportamiento de tu código sea más predecible.

---

## Cuestionario 1

1. **¿Cuál es el ámbito de una variable declarada con `var` fuera de cualquier función?**

    - [ ] a) Ámbito de bloque.
    - [ ] b) Ámbito de función.
    - [x] c) Ámbito de global. //correcto
    - [ ] d) Ámbito de módulo.

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    var x = 10;
    
    if (true) {
      var x = 20;
      console.log(x);
    }
    
    console.log(x);
    ```

    - [ ] a) 10
             10

    - [x] b) //correcto
             20
             20

    - [ ] c) 10
             20

    - [ ] d) 20
             10

3. **¿Cuál de las siguientes opciones NO es una razón para evitar el uso de `var` en JavaScript moderno?**

    - [ ] a) `var` permite redeclarar variables en el mismo ámbito.

    - [x] b) `var` no es compatible con los navegadores modernos. //correcto

    - [ ] c) Las variables `var` tienen ámbito de función, no de bloque.

    - [ ] d) Las variables `var` se elevan.

[☝️](#la-palabra-clave-var-y-el-hoisting)

---

## Tema 2: ¿Qué es el hoisting?

El **hoisting** es un comportamiento de JavaScript que suele confundir a los principiantes, pero entenderlo puede ayudarte a evitar errores sutiles en tu código. En términos sencillos, el **hoisting** es el comportamiento predeterminado de JavaScript de mover las declaraciones al inicio de sus respectivos ámbitos durante la fase de compilación, antes de que se ejecute el código.

Para entender el **hoisting**, es importante saber que JavaScript se ejecuta en dos fases: la fase de compilación y la fase de ejecución. Durante la fase de compilación, el motor de JavaScript revisa tu código y configura el espacio de memoria para las variables y las funciones. Aquí es donde entra en juego el **hoisting**.

Comencemos con el **hoisting** de variables: cuando declaras una variable usando la palabra clave `var`, JavaScript eleva la declaración al inicio de su ámbito. Sin embargo, es fundamental tener en cuenta que solo se eleva la declaración, no la inicialización. Esto significa que puedes usar una variable en tu código antes de haberla declarado, pero su valor será `undefined` hasta que realmente le asignes un valor.

- **Example code**

  ```js
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
  ```

En este código, aunque usamos `x` antes de declararlo, no aparece un error, sino que obtenemos el valor `undefined`. Esto se debe a que JavaScript eleva la declaración `var x` al inicio de su ámbito, pero no la inicialización `x = 5`. Es como si el código se reescribiera así:

- **Example code**

  ```js
  var x;
  console.log(x); // undefined
  x = 5;
  console.log(x); // 5
  ```

El `hoisting` de funciones funciona de manera un poco diferente. Cuando declaras una función utilizando la sintaxis de declaración de `function`, tanto el nombre como el cuerpo de la función se elevan. Esto significa que puedes llamar a una función antes de haberla declarado en tu código. A continuación te presento un ejemplo de `hoisting` de funciones:

- **Example code**

  ```js
  sayHello(); // "Hello, World!"

  function sayHello(){
    console.log("Hello, World!");
  }
  ```

En este caso, podemos llamar a `sayHello()` antes de su declaración porque toda la función se eleva al inicio de su ámbito.

Es importante señalar que la elevación funciona de manera diferente con las declaraciones `let` y `const` introducidas en ES6.

- **Example code**

  ```js
  console.log(y); // Throws a ReferenceError
  let y = 10;
  ```

Estas declaraciones se elevan, pero no se inicializan y no puedes acceder a ellas antes de la declaración real en tu código. A esto se le suele llamar _zona muerta temporal_.

Entender el hoisting puede ayudarte a escribir código más limpio y predecible. Sin embargo, confiar en el hoisting puede hacer que tu código sea más difícil de leer y mantener. Como práctica recomendada, se aconseja declarar tus variables al inicio de su ámbito y tus funciones antes de usarlas, independientemente del hoisting. Esto hace que el comportamiento de tu código sea más explícito y más fácil de entender para los demás, incluido tu yo futuro.

---

## Cuestionario 2

1. **¿Qué sucede cuando se eleva una variable declarada con `var`?**

    - [ ] a)  Tanto la declaración como la inicialización se mueven al principio del código.
    - [x] b)  Solo la declaración se mueve al principio del código. //correcto
    - [ ] c)  La variable no se eleva en absoluto.
    - [ ] d)  La variable se elimina del código.

2. **¿En qué se diferencia el hoisting de funciones del hoisting de variables?**

    - [ ] a) Las funciones no se someten a hoisting.
    - [ ] b) Solo se somete a hoisting el nombre de la función.
    - [x] c) Tanto el nombre como el cuerpo de la función se someten a hoisting. //correcto
    - [ ] d) El hoisting de funciones solo funciona con funciones de flecha.

3. **Qué sucede si intentas acceder a una variable declarada con `let` antes de que aparezca su declaración en el código?**

    - [ ] a)  Devuelve `undefined`.
    - [x] b)  Genera un `ReferenceError`. //correcto
    - [ ] c)  Devuelve `null`.
    - [ ] d)  Funciona sin problemas.

[☝️](#la-palabra-clave-var-y-el-hoisting)

---
