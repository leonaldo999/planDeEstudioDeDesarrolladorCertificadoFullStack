# Cómo trabajar con el objeto de argumentos y los parámetros REST

En este artículo, aprenderás sobre el objeto `arguments` y los parámetros REST en JavaScript. Estos conceptos te permitirán trabajar con funciones que aceptan un número variable de argumentos, lo que es útil cuando no sabes de antemano cuántos argumentos se pasarán a una función.

---

## Tema 1: ¿Qué es el objeto `arguments`?

Como recordarás de lecciones y talleres anteriores, puedes crear funciones con varios parámetros y llamar a esa función con argumentos.

Aquí tienes un recordatorio:

- **Example code**

  ```js
  // function definition
  function getSum(num1, num2) {
    return num1 + num2;
  }
  
  // function call
  getSum(3, 4); // 7
  ```

Pero, ¿qué pasa si tienes una función a la que se le pasan más argumentos de los que se definieron para aceptar?

- **Example code**

  ```js
  // function definition
  function getSum(num1, num2) {
    return num1 + num2;
  }
  
  // function call with extra argument
  console.log(getSum(3, 4, 5)); // 7
  ```

JavaScript no generará un error en este caso. En cambio, ignorará el argumento adicional y simplemente sumará los números `3` y `4`. Las funciones que aceptan un número variable de argumentos se conocen como funciones variádicas.

Si estás trabajando con funciones variádicas, puedes utilizar el objeto `arguments`. Este objeto, similar a un array, contiene los valores de los argumentos pasados a la función.

Aquí tienes un ejemplo:

- **Example code**

  ```js
  function logArgs() {
    for (const arg of arguments) {
      console.log(arg);
    }
  }
  
  logArgs(1, 2, 3);
  // result:
  // 1
  // 2
  // 3
  
  logArgs("example"); // "example"
  ```

Dado que el objeto `arguments` es similar a un array, puedes acceder a un argumento en un índice específico de la siguiente manera:

- **Example code**

  ```js
  function getArg() {
    return arguments[1];
  }
  
  console.log(getArg(2, 4, 6)); // 4
  ```

También puedes usar la propiedad `length` de esta manera para obtener el número de argumentos con los que se invocó la función:

- **Example code**

  ```js
  function getArgs() {
    return arguments.length;
  }
  
  console.log(getArgs("Example")); // 1
  console.log(getArgs("Another", "Example")); // 2
  ```

Aunque el objeto `arguments` parece comportarse como un array real, no cuenta con métodos de Array integrados, como `includes` o `push`. Para tener acceso a esos métodos, primero tendrías que convertir el objeto `arguments` en un array real utilizando algo como `slice`, `Array.from()` o el operador de expansión:

- **Example code**

  ```js
  function hasCat() {
    return [...arguments].includes("cat");
  }
  
  console.log(hasCat("dog", "chicken", "cat")); // true
  console.log(hasCat("dog", "chicken", "horse")); // false
  ```

Aunque es posible trabajar con el objeto de `arguments` en el caso de las funciones variádicas, las aplicaciones modernas de JavaScript suelen utilizar la sintaxis de los parámetros residuales. Aprenderás más sobre esto en una lección futura.

---

## Cuestionario 1

1. **¿Qué es una función variádica?**

    - [ ] a) Las funciones que aceptan dos argumentos.
    - [x] b) Las funciones que aceptan un número variable de argumentos. //correcto
    - [ ] c) Las funciones que aceptan un solo argumento.
    - [ ] d) Las funciones que aceptan más de tres argumentos.

2. **¿Qué es el objeto `arguments`?**

    - [ ] a) Un diccionario especial que contiene los valores de los argumentos pasados a una función.
    - [x] b) Un objeto similar a un array que contiene los valores de los argumentos pasados a una función. //correcto
    - [ ] c) Una variable que contiene únicamente el primer argumento pasado a una función.
    - [ ] d) Un array verdadero que se actualiza automáticamente cuando se reasignan los parámetros de una función.

3. **¿Por qué no se pueden usar métodos integrados de Array, como `includes` o `push`, en el objeto `arguments`?**

    - [ ] a) El objeto `arguments` siempre está vacío, a menos que se inicialice explícitamente.
    - [ ] b) JavaScript bloquea automáticamente las llamadas a métodos en el objeto `arguments` por razones de rendimiento.
    - [ ] c) Los métodos `includes` o `push` no funcionan de manera confiable en el objeto `arguments`, por lo que se deben evitar.
    - [x] d) El objeto `arguments` no es un array real, por lo que no cuenta con esos métodos integrados. //correcto

[☝️](#cómo-trabajar-con-el-objeto-de-argumentos-y-los-parámetros-rest)

---

## Tema 2: ¿Qué son los parámetros por defecto y en qué se diferencian del objeto `arguments`?

En la lección anterior, aprendiste a trabajar con el objeto `arguments`, que es un objeto similar a un array que contiene los valores de los argumentos pasados a la función.

- **Example code**

  ```js
  function logArgs() {
    for (const arg of arguments) {
      console.log(arg);
    }
  }
  
  logArgs(1, 2, 3);
  // result:
  // 1
  // 2
  // 3
  ```

Si bien esta es una forma válida de acceder y trabajar con un conjunto variable de argumentos desde una función, las aplicaciones modernas de JavaScript utilizan, en su lugar, la sintaxis del parámetro _rest_.

A continuación se muestra un ejemplo actualizado que utiliza la sintaxis del parámetro _rest_ en lugar del objeto `arguments`:

- **Example code**

  ```js
  function logArgs(...args) {
    for (const arg of args) {
      console.log(arg);
    }
  }
  
  logArgs(1, 2, 3);
  // result:
  // 1
  // 2
  // 3
  ```

En este ejemplo actualizado ya no se hace referencia directa al objeto `arguments`. En su lugar, el último parámetro de la definición de la función va precedido de tres puntos. Esto hace que este parámetro residual se coloque dentro de un objeto `Array`. Puedes darle el nombre que quieras a este parámetro residual. Solo asegúrate de que sea el último parámetro en la definición de la función, así:

- **Example code**

  ```js
  function exampleFunction(a, b, ...restOfArgs) {
    // some code here
  }
  
  function anotherFunction(x, y, ...theArgs) {
    // some code here
  }
  ```

Existen algunas restricciones adicionales al utilizar la sintaxis del parámetro resto. Una de ellas es que las definiciones de funciones solo pueden tener un parámetro resto. Por lo tanto, el siguiente ejemplo se consideraría inválido.

- **Example code**

  ```js
  // Won't work
  
  function badFunction(...args, ...moreArgs) {
    // some code here
  }
  ```

La siguiente restricción es que no se permiten comas finales después del parámetro _rest_: `function exampleFunction(a, b, ...restOfArgs, )`.

Otra restricción es que el parámetro _rest_ no puede tener un valor por defecto. De lo contrario, se generará un `SyntaxError`.

- **Example code**

  ```js
  function badFunction(...args = [1,2]){
    // some code here
  }
  ```

Entonces, ¿cuáles son algunas de las diferencias entre el objeto `arguments` y los parámetros restantes?

Una diferencia clave es que el objeto `arguments` no es un array real, por lo que no admite métodos como `includes`, `pop` y `push`. Sin embargo, el parámetro restante es una instancia de `Array`. Por lo tanto, puedes utilizar métodos de array integrados válidos sin necesidad de convertirlo primero en un array real.

- **Example code**

  ```js
  function hasCat(...args) {
    return args.includes("cat");
  }
  
  console.log(hasCat("dog", "chicken", "cat")); // true
  console.log(hasCat("dog", "chicken", "horse")); // false
  ```

---

## Cuestionario 2

1. **¿Cuál de las siguientes opciones es la forma correcta de utilizar la sintaxis del parámetro _rest_ en la definición de una función?**

    - [ ] a)
          ```js
          function logArgs([args]) {
            for (const arg of args) {
              console.log(arg);
            }
          }
          ```
    - [ ] b)
          ```js
          function logArgs(>>>args) {
            for (const arg of args) {
              console.log(arg);
            }
          }
          ```
    - [x] c) //correcto
          ```js
          function logArgs(...args) {
            for (const arg of args) {
              console.log(arg);
            }
          }
          ```
    - [ ] d)
          ```js
          function logArgs(<<<args) {
            for (const arg of args) {
              console.log(arg);
            }
          }
          ```

2. **¿Cuál de las siguientes opciones es una restricción al utilizar la sintaxis de los parámetros _rest_?**

    - [x] a) Solo se puede tener un parámetro _rest_ por definición de función. //correcto
    - [ ] b) Se debe colocar el parámetro _rest_ al principio de la lista de parámetros de la función.
    - [ ] c) Se deben tener dos parámetros _rest_ por definición de función.
    - [ ] d) Solo se pueden usar parámetros _rest_ en funciones flecha.

3. **¿Cuál es la diferencia clave entre el objeto `arguments` y los parámetros restantes?**

    - [ ] a)  Solo puedes usar métodos integrados de array, como `push` y `pop`, en el parámetro restante, mientras que el objeto `arguments` acepta todos los métodos integrados de array.
    - [ ] b)  No puedes usar métodos integrados de array, como `push` y `pop`, en el parámetro restante, pero esos métodos sí se pueden usar en el objeto `arguments`.
    - [ ] c)  El objeto `arguments` es una instancia de `Array`, mientras que el parámetro restante es de tipo similar a un array.
    - [x] d)  El parámetro _rest_ es una instancia de `Array`, mientras que el objeto `arguments` es similar a un array. //correcto

[☝️](#cómo-trabajar-con-el-objeto-de-argumentos-y-los-parámetros-rest)

---
