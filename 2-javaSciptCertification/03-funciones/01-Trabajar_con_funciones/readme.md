<!-- Teoria -->
# Trabajar con funciones

En esta sección, aprenderás a declarar funciones, a pasarles argumentos y a devolver valores. Las funciones son una parte fundamental de la programación en JavaScript, ya que te permiten organizar tu código en bloques reutilizables y mantenerlo limpio y legible.

---

## Tema 1: ¿Cuál es el propósito de las funciones y cómo funcionan?

Las funciones son fragmentos de código reutilizables que realizan una tarea específica o calculan un valor. Piensa en las funciones como una máquina que toma unos datos de entrada, realiza algunas operaciones con ellos y, a continuación, genera unos datos de salida. A continuación, te mostramos un ejemplo de cómo declarar una función:

- **Example code**

  ```js
  function greet() {
    console.log("Hello, Jessica!");
  }
  ```

En este ejemplo, hemos declarado una función llamada `greet`. Dentro de esa función, tenemos un `console.log` que muestra el mensaje `¡Hola, Jessica!`. Si intentáramos ejecutar este código, no veríamos aparecer el mensaje en la consola. Esto se debe a que necesitamos llamar a la función.

Una llamada a una función, o invocación, es cuando realmente usamos o ejecutamos la función. Para llamar a una función, tendrás que hacer referencia al nombre de la función seguido de un par de paréntesis:

- **Example code**

  ```js
  function greet() {
    console.log("Hello, Jessica!");
  }
  
  greet(); // "Hello, Jessica!"
  ```

Ahora el mensaje `¡Hola, Jessica!` se registrará en la consola. Pero, ¿y si quisiéramos que el mensaje dijera `¡Hola, Nick!` o `¡Hola, Anna!`? No queremos escribir una nueva función cada vez que saludemos a un usuario diferente. En su lugar, podemos crear una función reutilizable que utilice parámetros y argumentos.

Los parámetros actúan como marcadores de posición para los valores que se pasarán a la función cuando se la llame. Permiten que las funciones acepten entradas y trabajen con ellas. Los argumentos son los valores reales que se pasan a la función cuando se la llama. Aquí hay una versión actualizada de la función `greet` que utiliza parámetros y argumentos:

- **Example code**

  ```js
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice"); // Hello, Alice!
  greet("Nick"); // Hello, Nick!
  ```

El `name` actúa como parámetro, mientras que llos strings `Alice` y `Nick` actúan como argumentos. Ahora tenemos una función reutilizable que se puede usar decenas de veces a lo largo de nuestro código con diferentes argumentos.

Cuando una función termina su ejecución, siempre devuelve un valor. Por defecto, el valor de retorno será `undefined`. He aquí un ejemplo:

- **Example code**

  ```js
  function doSomething() {
    console.log("Doing something...");
  }
  
  let result = doSomething();
  console.log(result); // undefined
  ```

Si necesitas que tu función devuelva un valor específico, tendrás que utilizar la instrucción `return`. A continuación te mostramos un ejemplo del uso de la instrucción `return` para devolver la suma de dos valores:

- **Example code**

  ```js
  function calculateSum(num1, num2) {
    return num1 + num2;
  }
  
  console.log(calculateSum(3, 4)); // 7
  ```

A menudo utilizarás la instrucción `return`, ya que así podrás usar el valor devuelto por la función más adelante en tu código.

Hasta ahora hemos trabajado con funciones con nombre, pero también puedes crear lo que se conoce como una función anónima. Una función anónima es una función sin nombre que se puede asignar a una variable de esta manera:

- **Example code**

  ```js
  const sum = function (num1, num2) {
    return num1 + num2;
  };
  
  console.log(sum(3, 4)); // 7
  ```

En este ejemplo, tenemos una variable `const` llamada `sum` a la que le asignamos una función anónima que devuelve la suma de `num1` y `num2`. A continuación, podemos llamar a `sum` y pasarle los números `3` y `4` para obtener el resultado `7`.

Las funciones admiten parámetros por defecto, lo que te permite establecer valores predeterminados para los parámetros. Estos valores por defecto se utilizan si se llama a la función sin un argumento para ese parámetro. He aquí un ejemplo:

- **Example code**

  ```js
  function greetings(name = "Guest") {
    console.log("Hello, " + name + "!");
  }
  
  greetings(); // Hello, Guest!
  greetings("Anna"); // Hello, Anna!
  ```

En este ejemplo, si no se proporciona ningún argumento para `name`, el valor predeterminado es `Guest`.

En resumen, las funciones te permiten escribir código reutilizable y organizado. Pueden recibir entradas (parámetros), realizar acciones y devolver resultados.

---

## Cuestionario 1

1. **¿Cuál es el resultado del siguiente código?**

    ```js
    function mystery(a, b = 3) {
      return a * b;
    }
    console.log(mystery(4));
    ```

    - [ ] a) `12` //correcto
    - [x] b) `7`
    - [ ] c) `undefined`
    - [ ] d) `NaN`

2. **¿Cuál de las siguientes opciones es la forma correcta de llamar (o invocar) a la función `sum`?**

    ```js
    function sum(num1, num2) {
      return num1 + num2
    }
    ```

    - [ ] a) `()sum>`
    - [ ] b) `()sum()`
    - [x] c) `sum()` //correcto
    - [ ] d) `<sum>`

3. **¿Cuál es el valor de retorno predeterminado de una función si no se especifica ninguna instrucción `return`?**

    - [ ] a) `null`
    - [ ] b) `0`
    - [x] c) `undefined` //correcto
    - [ ] d) Un string vacía.

[☝️](#trabajar-con-funciones)

---

## Tema 2: ¿Qué son las funciones flecha y cómo funcionan?

En la lección anterior, aprendiste a trabajar con funciones, que son fragmentos de código reutilizables que ayudan a que tu código sea más modular, más fácil de mantener y más eficiente. Todos los ejemplos anteriores utilizaban la sintaxis habitual de las funciones, como esta:

- **Example code**

  ```js
  function greetings(name) {
    console.log("Hello, " + name + "!");
  }
  ```

Sin embargo, otra forma de escribir funciones en JavaScript es crear una expresión de función flecha. A continuación te mostramos cómo puedes refactorizar el ejemplo anterior para utilizar la sintaxis de las funciones flecha:

- **Example code**

  ```js
  const greetings = (name) => {
    console.log("Hello, " + name + "!");
  };
  ```

En este ejemplo revisado, estamos creando una variable `const` llamada `greetings` y asignándole una función anónima. La mayor parte de la sintaxis te resultará familiar, salvo por la ausencia de la palabra clave `function` y la incorporación de la flecha (`=>`) entre el parámetro `name` y el cuerpo de la función. Si tu lista de parámetros solo contiene un parámetro, puedes eliminar los paréntesis de la siguiente manera:

- **Example code**

  ```js
  const greetings = name => {
    console.log("Hello, " + name + "!");
  };
  ```

Si tu función flecha no tiene parámetros, debes usar los paréntesis de esta manera:

- **Example code**

  ```js
  const greetings = () => {
    console.log("Hello");
  };
  ```

Cuando empezaste a aprender sobre las funciones, tenías que escribir el cuerpo de la función entre llaves. Pero si el cuerpo de tu función solo contiene una línea de código, puedes eliminar las llaves de esta manera:

- **Example code**

  ```js
  const greetings = name => console.log("Hello, " + name + "!");
  ```

Es importante señalar que eliminar los paréntesis y las llaves en la sintaxis de las funciones normales no funcionará. Si intentas hacer algo como esto, obtendrás errores:

- **Example code**

  ```js
  // This will produce syntax errors 
  function greetings name console.log("Hello, " + name + "!");
  ```

Este tipo de funciones de una sola línea solo funcionan si se utiliza la sintaxis de funciones flecha. Otro concepto clave es la instrucción `return`. A continuación se muestra un ejemplo del uso de la sintaxis de funciones flecha para calcular el área:

- **Example code**

  ```js
  const calculateArea = (width, height) => {
    const area = width * height;
      return area;
  };
  
  console.log(calculateArea(5, 3)); // 15
  ```

Estamos creando una variable dentro de la función llamada `area` y luego devolvemos esa variable. Pero podríamos simplificar un poco nuestro código y devolver el resultado del cálculo directamente:

- **Example code**

  ```js
  const calculateArea = (width, height) => {
    return width * height;
  }; 
  
  console.log(calculateArea(5, 3)); // 15
  ```

Si intentaras eliminar las llaves y colocar el cálculo en la misma línea, aparecería el siguiente mensaje de error: `Uncaught SyntaxError: Unexpected token 'return'`:

- **Example code**

  ```js
  const calculateArea = (width, height) => return width * height;
  ```

La razón por la que aparece este error es que debes eliminar la instrucción `return`. Cuando elimines esa instrucción `return`, el error desaparecerá y la función seguirá devolviendo el resultado del cálculo de forma implícita.

- **Example code**

  ```js
  const calculateArea = (width, height) => return width * height;
  ```

Entonces, ¿cuándo se debe usar la sintaxis de las funciones flecha? Bueno, depende. Muchos desarrolladores la usan sistemáticamente en sus proyectos personales. Sin embargo, cuando se trabaja en equipo, la elección suele depender de si el código existente utiliza funciones normales o funciones flecha. En lecciones futuras, veremos cuándo usar funciones flecha y cuándo evitarlas.

---

## Cuestionario 2

1. **¿Cuál es la forma correcta de escribir una función flecha que tome dos parámetros y devuelva su suma?**

    - [ ] a) `(a, b) => { a + b }`
    - [x] b) `(a, b) => a + b` //correcto
    - [ ] c) `(a, b) => return a + b`
    - [ ] d) `a, b => a + b`

2. **¿Cuál es la forma correcta de escribir una función flecha que no tome parámetros y devuelva la cadena `Hola`?**

    - [x] a) `() => "Hello"` //correcto
    - [ ] b) `=> "Hello"`
    - [ ] c) `() => { "Hello" }`
    - [ ] d) `() => return "Hello"`

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let multiply = (a, b = 1) => a * b;

    console.log(multiply(5));
    console.log(multiply(5, 2));
    ```

    - [x] a) `5, 10` //correcto
    - [ ] b) `1, 2`
    - [ ] c) `undefined, 10`
    - [ ] d) Esto generará un error.

[☝️](#trabajar-con-funciones)

---

## Tema 3: ¿Qué es el ámbito en programación y cómo funcionan los ámbitos global, local y de bloque?

El ámbito en programación se refiere a la visibilidad y accesibilidad de las variables en diferentes partes del código. Determina dónde se puede acceder a las variables o modificarlas. En JavaScript, comprender el ámbito es fundamental para escribir código limpio, eficiente y sin errores. Existen tres tipos principales de ámbito: el ámbito global, el ámbito local y el ámbito de bloque.

El ámbito global es el ámbito más externo en un programa de JavaScript. Se puede acceder a las variables declaradas en el ámbito global desde cualquier parte del código, incluso dentro de funciones y bloques. A estas variables se les suele llamar variables globales. Si bien las variables globales pueden ser convenientes, deben usarse con moderación, ya que pueden provocar conflictos de nombres y hacer que el código sea más difícil de mantener. A continuación, se muestra un ejemplo de una variable global:

- **Example code**

  ```js
  let globalVar = "I'm a global variable";

  function printGlobalVar() {
      console.log(globalVar);
  }
  
  printGlobalVar(); // "I'm a global variable"
  ```

En este ejemplo, `globalVar` se declara en el ámbito global y se puede acceder a ella desde dentro de la función `printGlobalVar`.

El ámbito local, por otro lado, se refiere a las variables a las que solo se puede acceder dentro de una función. A continuación se muestra un ejemplo de ámbito local:

- **Example code**

  ```js
  function greet() {
      let message = "Hello, local scope!";
      console.log(message);
  }
  
  greet(); // "Hello, local scope!"
  // console.log(message); // This will throw an error
  ```

En este código, `message` es una variable local dentro de la función `greet`. Se puede utilizar dentro de la función, pero intentar acceder a ella fuera de la función provocará un error.

El ámbito de bloque es un concepto introducido con las palabras clave `let` y `const` en ES6. Un bloque es cualquier sección de código entre llaves `{}`, como en las sentencias `if`, los bucles `for` o los bucles `while`. El concepto de los bucles se explicará en una próxima lección.

Las variables declaradas con `let` o `const` dentro de un bloque solo son accesibles dentro de ese bloque. A continuación, se muestra un ejemplo de ámbito de bloque:

- **Example code**

  ```js
  if (true) {
      let blockVar = "I'm in a block";
      console.log(blockVar); // "I'm in a block"
  }
  console.log(blockVar); // This will throw an error
  ```

En este ejemplo, solo se puede acceder a `blockVar` dentro del bloque `if`. Si intentas acceder a ella fuera del bloque, se producirá un error. Comprender estos diferentes tipos de ámbito es esencial para gestionar la accesibilidad de las variables y evitar efectos secundarios no deseados en tu código.

Las variables globales deben usarse con moderación, ya que pueden provocar conflictos de nombres y dificultar el mantenimiento de tu código. Las variables locales ayudan a mantener aisladas las diferentes partes de tu código, lo cual es especialmente útil en programas más grandes. El ámbito de bloque con let y const proporciona un control aún más preciso sobre la accesibilidad de las variables, lo que ayuda a prevenir errores y hace que tu código sea más predecible. Dominar estos conceptos básicos de ámbito global, local y de bloque te proporcionará una base sólida para comprender temas más avanzados.

---

## Cuestionario 3

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let x = 10;

    function printX() {
        let x = 20;
        console.log(x);
    }
    
    printX();
    console.log(x);
    ```

    - [ ] a) `20`, `20`
    - [x] b) `20`, `10` //correcto
    - [ ] c) `10`, `10`
    - [ ] d) `10`, `20`

2. **¿Cuál será el resultado de intentar acceder a `blockVar` fuera de su bloque en el siguiente código?**

    ```js
    if (true) {
        let blockVar = "Hello";
    }
    console.log(blockVar);
    ```

    - [ ] a) Imprimirá `"Hello"`.
    - [ ] b) Imprimirá  `undefined`.
    - [x] c) Dará un `ReferenceError`. //correcto
    - [ ] d) Imprimirá `null`.

3. **¿Cuál de las siguientes opciones describe correctamente el ámbito de una variable declarada con `let` en el nivel superior de un script (fuera de cualquier función o bloque)?**

    - [ ] a) Ámbito de función.
    - [ ] b) Ámbito de bloque.
    - [x] c) Ámbito global. //correcto
    - [ ] d) Ámbito local.

[☝️](#trabajar-con-funciones)

---
