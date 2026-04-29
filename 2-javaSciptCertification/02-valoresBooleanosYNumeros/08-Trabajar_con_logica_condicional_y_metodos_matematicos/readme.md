# Trabajar con lógica condicional y métodos matemáticos

En esta sección, aprenderás a usar la lógica condicional y los métodos matemáticos para resolver problemas y tomar decisiones en tu código.

---

## Tema 1: ¿Qué son las sentencias condicionales y cómo funcionan las sentencias `if`, `else if` y `else`?

Las sentencias condicionales te permiten tomar decisiones en tu código JavaScript. Permiten que tu programa fluya de una manera determinada en función de ciertas condiciones. Veamos cómo funcionan `if`, `else if`, `else` y el operador ternario para que puedas controlar el flujo de tu código.

Una instrucción `if` toma una condición y ejecuta un bloque de código si esa condición es verdadera. Los valores verdaderos son cualquier valor que resulte `true` cuando se evalúa en un contexto booleano, como una instrucción `if`. Estos son algunos ejemplos de valores verdaderos:

- strings de caracteres no vacías, por ejemplo, `hola`

- cualquier número que no sea `0` ni `-0`, por ejemplo, `4`, `-5` y otros

- matrices

- objetos

- el valor booleano `true`

Por otro lado, los valores falsos son aquellos que se evalúan como `false` en un contexto booleano. JavaScript tiene pocos valores falsos, lo que hace que sean fáciles de recordar. Estos son algunos de ellos:

- booleano `false`

- `0` (cero)

- `""` (cadena vacía)

- `null`

- `undefined`

- `NaN` (No es un número)

Ahora que ya tenemos una idea básica de los valores true y false, veamos cómo funcionan con las sentencias `if`. En este primer ejemplo, utilizamos un par de sentencias `if` para comprobar si los valores son true o false:

- **Example code**

  ```js
  if (null) {
    console.log("This will not run.");
  }
  
  if ("freeCodeCamp") {
    console.log("This will run.");
  }
  ```

Dado que `null` es un valor falso, el mensaje dentro del bloque nunca se registrará en la consola. Sin embargo, en la segunda instrucción `if`, la cadena `freeCodeCamp` es un valor verdadero y se considerará como tal en este contexto booleano de la instrucción `if`. Como resultado, el mensaje `This will run.` se registrará en la consola.

Veamos algunos ejemplos más sobre cómo funcionan las sentencias `if` con diferentes operadores de comparación. Aquí hay un ejemplo del uso de una sentencia `if` para verificar si el usuario tiene derecho a votar:

- **Example code**

  ```js
  const age = 22;
  
  if (age >= 18) {
   console.log("You're eligible to vote"); // You're eligible to vote
  }
  ```

En este ejemplo, dado que la `age` es actualmente `22`, esto significa que la condición se evaluará como `true`, ya que `22` es mayor o igual a `18`. Por lo tanto, el mensaje `You're eligible to vote` se registrará en la consola. Si modificamos el ejemplo para que la `age` sea ahora `15`, la condición se evaluará como `false` y el mensaje no se registrará en la consola:

- **Example code**

  ```js
  const age = 15;

  if (age >= 18) {
   console.log("You're eligible to vote"); // Code not running because age is less than 18
  }
  ```

Cuando una condición es `false`, puedes usar una cláusula `else`:

- **Example code**

  ```js
  const age = 15;

  if (age >= 18) {
   console.log("You're eligible to vote");
  } else {
   console.log("You're not eligible to vote"); // You're not eligible to vote
  }
  ```

En este ejemplo, `15` no es mayor o igual que `18`, por lo que la condición sería `false`. En este caso, se ejecutará el código dentro del bloque `else`.

Si quieres comprobar varias condiciones, puedes usar un bloque `else if`. Esto permite que tu programa elija entre más de dos rutas.

- **Example code**

  ```js
  const score = 87;

  if (score >= 90) {
   console.log('You got an A'); 
  } else if (score >= 80) {
   console.log('You got a B'); // You got a B
  } else if (score >= 70) {
   console.log('You got a C');
  } else {
   console.log('You failed! You need to study more!');
  }
  ```

Dado que el `score` actual es `87`, se registraría en la consola el mensaje `You got a B`.

El operador ternario es una forma compacta de escribir sentencias `if/else` sencillas. Consta de tres partes: una condición, un resultado si la condición es verdadera y un resultado si es falsa. Esta es la sintaxis básica:

- **Example code**

  ```js
  condition ? expressionIfTrue : expressionIfFalse;
  ```

Aquí tienes un ejemplo sobre las temperaturas meteorológicas en grados Celsius:

- **Example code**

  ```js
  const temperature = 30;
  const weather = temperature > 25 ? 'sunny' : 'cool';
  
  console.log(`It's a ${weather} day!`);
  ```

Si la `temperature` es superior a `25`, el código anterior registra `It's a sunny day!`. Si la `temperature` es inferior o igual a `25`, registra `It's a cool day!`.

Entonces, ¿cuál deberías usar entre una instrucción `if` y un ternario? Usa un ternario cuando se trate de una sola condición o una sola expresión, o cuando quieras una sintaxis compacta para una lógica simple. Usa instrucciones `if/else` cuando se trate de condiciones complejas y múltiples instrucciones, ya que el código se vuelve ilegible si anidas ternarios.

---

## Cuestionario 1

1. **¿Cuál es la forma más concisa de escribir sentencias `if/else` sencillas?**

    - [ ] a) Usando la sentencia switch.
    - [ ] b) Usando un bucle while.
    - [ ] c) Todas las operaciones se realizan en el orden en que aparecen.
    - [x] d) La resta tiene precedencia sobre todas las demás operaciones. //correcto

1. **¿Cómo se pueden comprobar varias condiciones en una instrucción `if`?**

    - [ ] a) Solo utilizando una instrucción switch.
    - [ ] b) Utilizando un bucle while.
    - [x] c) Utilizando un bloque `else if` para elegir entre más de dos rutas. //correcto
    - [ ] d) Utilizando el operador ternario.

1. **¿Cuál es la finalidad del bloque «else» en una instrucción `if`?**

    - [ ] a) Se ejecuta cuando la condición de la instrucción if es verdadera.
    - [x] b) Ejecuta un bloque de código cuando la condición de la instrucción if no es verdadera. //correcto
    - [ ] c) Comprueba si varias condiciones son verdaderas.
    - [ ] d) Siempre se ejecuta antes del bloque if.

[☝️](#trabajar-con-lógica-condicional-y-métodos-matemáticos)

---

## Tema 2: ¿Qué son los operadores lógicos binarios y cómo funcionan?

Los operadores lógicos binarios te ayudan a evaluar dos expresiones y devuelven un resultado en función de su veracidad. Veamos los tres operadores lógicos binarios más comunes: el AND lógico, el OR lógico y el operador de coalescencia nula.

El operador lógico AND se representa con un doble símbolo (`&&`). Comprueba si ambos operandos son verdaderos y devuelve un resultado. Si ambos operandos son verdaderos, devuelve el segundo valor, es decir, el de la derecha:

- **Example code**

  ```js
  const result = true && 'hello';

  console.log(result); // hello
  ```

En el ejemplo anterior, el texto `hello` se registra en la consola porque ambos operandos son `true`. Si alguno de los operandos es falso, devuelve el valor falso:

- **Example code**

  ```js
  const result = 0 && 3;

  console.log(result); // 0
  ```

Dado que `0` es un valor falso, el número `0` se registra en la consola. Y si ambos operandos son falsos, devuelve el primer valor falso:

- **Example code**

  ```js
  const result = false && 0;

  console.log(result); // false
  ```

Dado que `false` es un valor que se interpreta como verdadero, `false` se registra en la consola. El operador lógico AND resulta útil cuando se desea comprobar varias condiciones y asegurarse de que todas sean verdaderas antes de continuar. A continuación, se muestra un ejemplo:

- **Example code**

  ```js
  if (2 < 3 && 3 < 4) {
   console.log('The if block runs'); 
  } else {
   console.log('The else block runs');
  } 
  ```

En esta condición, dado que `2` es menor que `3` Y `3` es menor que `4`, se registrará en la consola la frase `The if block runs`.

El operador lógico OR comprueba si al menos uno de los operandos es verdadero. Si el primer operando es verdadero, devuelve ese valor:

- **Example code**

  ```js
  const result = 'This is truthy' || false;
  
  console.log(result); // This is truthy
  ```

Si el primer operando es falso, pero el segundo es verdadero, el segundo valor se registrará en la consola:

- **Example code**

  ```js
  const result = 0 || 'This is truthy';

  console.log(result); // This is truthy
  ```

Es habitual utilizar el operador lógico OR en sentencias `if/else` de esta manera:

- **Example code**

  ```js
  let userInput;

  if (userInput || 'Guest') {
   console.log('A user is present');
  } else {
   console.log('No user detected');
  }
  ```

Como no le asignamos un valor a la variable `userInput`, actualmente está `undefined`. La condición de la instrucción `if` comprueba si la variable `userInput` o el string `Guest` son valores lógicos verdaderos. Dado que el string `Guest` es verdadera en un contexto booleano como este, se registrará en la consola el string `A user is present`.

El operador de coalescencia nula es más sofisticado que el OR lógico y el AND lógico. Representado por un doble signo de interrogación (`??`), resulta útil en situaciones en las que se desea devolver un valor solo si el primero es `null` o `undefined`. A continuación, se muestra un ejemplo del uso del operador de coalescencia nula:

- **Example code**

  ```js
  const result = null ?? 'default';

  console.log(result); // default
  ```

Dado que `null` es un valor nulo, se registraría el string `default` en la consola. El operador de coalescencia nula resulta increíblemente útil en situaciones en las que `null` o `undefined` son los únicos valores que deben activar un valor de reserva o predeterminado. A continuación se muestra un ejemplo sobre cómo gestionar la configuración de preferencias de un usuario:

- **Example code**

  ```js
  const userSettings = {
   theme: null,
   volume: 0,
   notifications: false,
  };
  
  let theme = userSettings.theme ?? 'light';
  console.log(theme); // light
  ```

En el ejemplo anterior, tenemos un objeto llamado `userSettings` que contiene las propiedades `theme`, `volume` y `notifications`. Accedemos a la propiedad `theme` utilizando la notación de puntos, como en `userSettings.theme`. En una lección futura aprenderás más sobre cómo trabajar con objetos. Dado que el `theme` del usuario está actualmente establecido en `null`, se registrará la cadena `light` en la consola.

---

## Cuestionario 2

1. **¿Cómo funciona el operador lógico AND (`&&`)?**

    - [ ] a) Comprueba si ambos operandos son `false`.
    - [x] b) Comprueba si ambos operandos son `true` y devuelve un resultado. //correcto
    - [ ] c) Devuelve `true` si uno de los operandos es `true`.
    - [ ] d) Ignora el segundo operando.

2. **¿Qué hace el operador de coalescencia nula (`??`)?**

    - [ ] a) Devuelve el primer valor, independientemente de si es nulo o indefinido.
    - [x] b) Devuelve el segundo valor solo si el primero es nulo o indefinido. //correcto
    - [ ] c) Comprueba si ambos valores son iguales.
    - [ ] d) Compara dos valores para realizar una conversión de tipos.

3. **¿Cómo funciona el operador lógico OR (`||`) en JavaScript?**

    - [ ] a) Comprueba si ambos operandos son valores lógicos verdaderos.
    - [ ] b) Devuelve true solo si ambos operandos son falsos.
    - [x] c) Comprueba si al menos uno de los operandos es un valor lógico verdadero. //correcto
    - [ ] d) Devuelve true solo si ambos operandos son valores lógicos verdaderos.

[☝️](#trabajar-con-lógica-condicional-y-métodos-matemáticos)

---

## Tema 3: ¿Qué es el objeto `Math` en JavaScript y cuáles son algunos de sus métodos más comunes?

Al adentrarte en JavaScript, descubrirás rápidamente que realizar operaciones matemáticas es una tarea habitual. Si bien los operadores aritméticos básicos pueden encargarse de cálculos sencillos, JavaScript ofrece un objeto `Math` integrado para abordar retos matemáticos más complejos.

Esta práctica herramienta proporciona una variedad de métodos que facilitan la realización de cálculos avanzados y la manipulación de números. Exploremos estos métodos y veamos cómo pueden simplificar tu experiencia de programación.

El método `Math.random()` genera un número aleatorio de punto flotante entre `0` (incluido) y `1` (excluido). Esto significa que el resultado posible puede ser `0`, pero nunca llegará realmente a `1`. Aquí hay un ejemplo que utiliza el método `Math.random()`:

- **Example code**

  ```js
  const randomNum = Math.random();

  console.log(randomNum);
  // any number between 0 and 1 – 0 inclusive and 1 exclusive
  ```

`Math.min()` y `Math.max()` toman un conjunto de números y devuelven el valor mínimo y el valor máximo, respectivamente. A continuación se muestra un ejemplo del funcionamiento de ambos métodos:

- **Example code**

  ```js
  const smallest = Math.min(1, 5, 3, 9);
  console.log(smallest); // 1
  
  const largest = Math.max(1, 5, 3, 9);
  console.log(largest); // 9
  ```

El primer `console.log()` mostrará el número `1`, ya que el `1` es el más pequeño de esa lista de números. Y el segundo `console.log()` mostrará el número `9`, ya que el `9` es el más grande de esa lista.

Si quisieras redondear los números hacia arriba o hacia abajo al entero más cercano, podrías usar los métodos `Math.ceil()` y `Math.floor()`. Aquí tienes un ejemplo de cómo usar `Math.ceil()`:

- **Example code**

  ```js
  console.log(Math.ceil(4.3)); // 5
  ```

La función `Math.ceil()` redondeará `4,3` al entero más cercano, que en este caso es `5`. Ahora, veamos cómo redondear un número hacia abajo:

- **Example code**

  ```js
  console.log(Math.floor(4.7)); // 4
  ```

`Math.floor()` redondeará `4,7` hacia abajo al entero más cercano, que en este caso es `4`. `Math.round()` es una combinación de `Math.ceil()` y `Math.floor()`. Redondea un número al entero más cercano, teniendo en cuenta el punto decimal:

- **Example code**

  ```js
  console.log(Math.round(2.3)); // 2
  console.log(Math.round(4.5)); // 5
  console.log(Math.round(4.8)); // 5
  ```

Por lo tanto, si el punto decimal es menor que `5`, el número se redondea hacia abajo. Y si el punto decimal es `5` o mayor, el número se redondea hacia arriba. Una aplicación práctica de `Math.floor()` y `Math.random()` es generar un número aleatorio entre dos números enteros. Esta es la sintaxis para hacerlo:

- **Example code**

  ```js
  const max = 10;
  const min = 5;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  ```

La generación de un número aleatorio entre `20` y `1` se haría así:

- **Example code**

  ```js
  const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumBtw1And20);
  ```

Otro método útil de `Math` sería el método `Math.trunc()`. `Math.trunc()` elimina la parte decimal de un número y devuelve solo la parte entera, sin redondear:

- **Example code**

  ```js
  console.log(Math.trunc(2.9)); // 2
  console.log(Math.trunc(9.1)); // 9
  ```

Si necesitas calcular la raíz cuadrada o la raíz cúbica de un número, puedes utilizar los métodos `Math.sqrt()` y `Math.cbrt()`, respectivamente:

- **Example code**

  ```js
  console.log(Math.sqrt(81)); // 9
  console.log(Math.cbrt(27)); // 3
  ```

La primera instrucción de registro mostrará el valor `9`, ya que la raíz cuadrada de `81` es `9`, mientras que la segunda instrucción de registro mostrará el valor `3`, ya que la raíz cúbica de `27` es `3`. Si necesitas obtener el valor absoluto de un número, puedes utilizar el método `Math.abs()`:

- **Example code**

  ```js
  console.log(Math.abs(-5)); // 5
  console.log(Math.abs(5)); // 5
  ```

`Math.abs()` devuelve el valor absoluto de un número, convirtiendo los números negativos en positivos. El último método que veremos será el método `Math.pow()`:

- **Example code**

  ```js
  console.log(Math.pow(2, 3)); // 8
  console.log(Math.pow(8, 2)); // 64
  ```

`Math.pow()` toma dos números y eleva el primero a la potencia del segundo. Hay muchos más métodos que pertenecen al objeto `Math`, que puedes explorar por tu cuenta. Sin embargo, estos son solo algunos de los más utilizados en los códigos de JavaScript.

---

## Cuestionario 3

1. **¿Qué hace la función `Math.floor()`?**

    - [ ] a) Redondea un número al entero superior más cercano.
    - [x] b) Redondea un número al entero inferior más cercano, independientemente de la posición de la coma decimal. //correcto
    - [ ] c) Redondea un número al entero par más cercano.
    - [ ] d) Redondea un número según la posición de la coma decimal.

2. **¿Por qué se considera que `Math.round()` es un híbrido entre `Math.ceil()` y `Math.floor()`?**

    - [ ] a) Solo redondea los números hacia arriba, como `Math.ceil()`.
    - [ ] b) Redondea los números hacia abajo, como `Math.floor()`.
    - [x] c) Redondea los números al entero más cercano, utilizando tanto el redondeo hacia arriba como hacia abajo dependiendo del decimal. //correcto
    - [ ] d) Ignora el punto decimal.

3. **¿Cuál es la diferencia entre `Math.min()` y `Math.max()`?**

    - [ ] a) `Math.min()` devuelve el valor máximo, y `Math.max()` devuelve el valor mínimo.
    - [x] b) `Math.min()` devuelve el número más pequeño, y `Math.max()` devuelve el número más grande de un conjunto. //correcto
    - [ ] c) Ambos devuelven el mismo valor.
    - [ ] d) `Math.min()` redondea los números hacia abajo, y `Math.max()` redondea los números hacia arriba.

[☝️](#trabajar-con-lógica-condicional-y-métodos-matemáticos)

---
