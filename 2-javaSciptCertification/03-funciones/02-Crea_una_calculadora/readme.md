# Crea una calculadora

En este taller, repasarás cómo trabajar con funciones mediante la creación de una aplicación de calculadora.

---

## Paso 1

En lecciones anteriores, aprendiste a declarar funciones de esta manera:

- **Example Code**
  
  ```js
  // función habitual
  function myFunction() {
  
  }
  
  // función flecha
  const myArrowFunction = () => {
  
  }
  ```

>> Empieza por crear una función llamada `addTwoAndSeven`.

Puedes elegir entre usar la sintaxis de función normal o la sintaxis de función flecha.

- **Code**
  
  ```js
  const addTwoAndSeven = () => {}
  ```

---

## Paso 2

Uno de los conceptos que aprendiste en las lecciones anteriores fue cómo devolver valores desde una función.

A continuación te recordamos cómo devolver un valor desde una función:

- **Example Code**
  
  ```js
  function myFunction() {
    return "Hello World";
  }
  ```

>> Dentro de tu función `addTwoAndSeven`, devuelve la suma de `2` y `7`.

- **Code**
  
  ```js
  const addTwoAndSeven = () => {
    return 2 + 7;
  }
  ```

---

## Paso 3

En las lecciones anteriores, aprendiste cómo llamar (invocar) a una función. Llamar a una función significa ejecutar el código que hay dentro de ella.

A continuación te recordamos cómo llamar a una función:

- **Example Code**
  
  ```js
  function myFunction() {
    return "Hello World";
  }
  
  // function call
  myFunction();
  ```

>> Añade una instrucción `console.log` y, dentro de ella, llama a la función `addTwoAndSeven`.

Ahora deberías ver la suma de 2 y 7 en la consola.

- **Code**
  
  ```js
  const addTwoAndSeven = () => {
    return 2 + 7;
  }

  /* <==== code ====>*/
  console.log(addTwoAndSeven());
  /* <==== code ====>*/
  ```

---

## Paso 4

Ahora es el momento de añadir otra función.

>> Declara una función llamada `addThreeAndFour` que devuelva la suma de `3` y `4`.
>
>> A continuación, llama a la función `addThreeAndFour` dentro de un `console.log` para ver el resultado.

- **Code**
  
  ```js
  function addThreeAndFour () {
    return 3 + 4;
  }
  console.log(addThreeAndFour());
  ```

---

## Paso 5

Aunque las funciones funcionan como se esperaba, hay mucha repetición en tu código.

Dado que estás creando una calculadora, no te conviene tener que crear una función para cada combinación posible de números que quieras sumar.

Sería mejor crear una única función reutilizable que pueda sumar dos números cualesquiera.

>> Elimina todo el código que has escrito hasta ahora.

En el siguiente paso, repasarás cómo trabajar con parámetros y argumentos en las funciones.

- **Code**
  
  ```js
  /* <==== code ====>*/
  Se elinina código
  /* <==== code ====>*/
  ```

---

## Paso 6

En las lecciones anteriores, aprendiste a trabajar con parámetros de función.

Un parámetro de función es una variable que se define en la declaración de la función y actúa como un marcador de posición.

A continuación, te mostramos un ejemplo de una función que tiene un parámetro:

- **Example Code**
  
  ```js
  // The parameter is `name`
  function greetUser(name) {
    return `Hello, ${name}!`;
  }
  ```

>> Declara una función llamada `calculateSum` que toma dos parámetros, `num1` y `num2`.

- **Code**
  
  ```js
  function calculateSum(num1, num2) {
    
  }
  ```

---

## Paso 7

>> Dentro de tu función `calculateSum`, tendrás que devolver la suma de los dos parámetros.

- **Code**
  
  ```js
  function calculateSum(num1, num2) {
  /* <==== code ====>*/
    return num1 + num2;
  /* <==== code ====>*/
  }
  ```

---

## Paso 8

La ventaja de las funciones es que se pueden invocar con diferentes argumentos, lo que te permite reutilizar el mismo código con distintos valores.

A continuación se muestran algunos ejemplos de llamadas a funciones con diferentes argumentos de string:

- **Example Code**
  
  ```js
  // function definition
  function greetUser(name) {
    console.log(`Hello ${name}!`);
  }
  
  // function calls
  greetUser("John"); // "Hello John!"
  greetUser("Jane"); // "Hello Jane!"
  ```

>> Añade un `console.log` que llame a la función `calculateSum` con los argumentos `2` y `5`.

- **Code**
  
  ```js
  function calculateSum(num1, num2) {
    return num1 + num2;
  }
  /* <==== code ====>*/
  console.log(calculateSum(2, 5));
  /* <==== code ====>*/
  ```

---

## Paso 9

Para seguir probando tu función `calculateSum`, tendrás que llamarla con diferentes argumentos.

>> Añade otro `console.log` que llame a la función `calculateSum` con los argumentos `10` y `10`.
>
>> Debajo de ese `console.log`, añade otro `console.log` que llame a la función `calculateSum` con los argumentos `5` y `5`.

- **Code**
  
  ```js
  function calculateSum(num1, num2) {
    return num1 + num2;
  }
  console.log(calculateSum(2, 5));
  /* <==== code ====>*/
  console.log(calculateSum(10, 10));
  console.log(calculateSum(5, 5));
  /* <==== code ====>*/
  ```

---

## Paso 10

Ahora que tu calculadora puede sumar dos números, es hora de crear una función que reste dos números.

>> Declara una función llamada `calculateDifference` que tome dos parámetros, `num1` y `num2`.
>
>> Dentro de la función, devuelve la diferencia entre los dos parámetros.

- **Code**
  
  ```js
  function calculateDifference(num1, num2) {
    return num1 - num2;
  }
  ```

---

## Paso 11

Ahora es el momento de probar tu función `calculateDifference`.

>> Empieza añadiendo un `console.log` que llame a la función `calculateDifference` con los argumentos `22` y `5`.
>
>> A continuación, añade un segundo `console.log` que llame a la función `calculateDifference` con los argumentos `12` y `1`.
>
>> Por último, añade un tercer `console.log` que llame a la función `calculateDifference` con los argumentos `17` y `9`.

- **Code**
  
  ```js
  function calculateDifference(num1, num2) {
    return num1 - num2;
  }
  /* <==== code ====>*/
  console.log(calculateDifference(22, 5));
  console.log(calculateDifference(12, 1));
  console.log(calculateDifference(17, 9));
  /* <==== code ====>*/
  ```

---

## Paso 12

Ahora es el momento de añadir la función de multiplicación a tu calculadora.

>> Declara una función llamada `calculateProduct` que tome dos parámetros, `num1` y `num2`.
>
>> Dentro de la función, devuelve la multiplicación de los dos parámetros.
>
>> A continuación, añade un `console.log` que llame a la función `calculateProduct` con los argumentos `13` y `5`.

- **Code**
  
  ```js
  function calculateProduct(num1, num2) {
    return num1 * num2;
  }
  
  console.log(calculateProduct(13, 5));
  ```

---

## Paso 13

El siguiente paso es añadir la función de división a tu calculadora.

>> Declara una función llamada `calculateQuotient` que tome dos parámetros, `num1` y `num2`.
>
>> Dentro de la función, devuelve la división de los dos parámetros.
>
>> A continuación, añade un `console.log` que llame a la función `calculateQuotient` con los argumentos `7` y `11`.

- **Code**
  
  ```js
  function calculateQuotient(num1, num2) {
    return num1 / num2;
  }
  
  console.log(calculateQuotient(7, 11));
  ```

---

## Paso 14

Tu función `calculateQuotient` parece funcionar correctamente, pero hay un caso que aún no has probado.

>> Añade un `console.log` que llame a la función `calculateQuotient` con los argumentos `3` y `0`.

Asegúrate de fijarte bien en el resultado de esta llamada.

- **Code**
  
  ```js
  function calculateQuotient(num1, num2) {
    return num1 / num2;
  }
  
  console.log(calculateQuotient(7, 11));
  /* <==== code ====>*/
  console.log(calculateQuotient(3, 0));
  /* <==== code ====>*/
  ```

---

## Paso 15

Si miras en la consola, verás el valor `Infinity`. `Infinity` es un valor especial en JavaScript que representa un número mayor que cualquier otro.

La división por cero no es una operación válida en matemáticas.

>> Para tener en cuenta este caso extremo, debes actualizar tu función `calculateQuotient` para que compruebe si `num2` es cero.
>
>> Si lo es, la función debe devolver el string `"Error: Division by zero"`. De lo contrario, debe devolver el resultado de dividir `num1` entre `num2`.

- **Code**
  
  ```js
  function calculateQuotient(num1, num2) {
  /* <==== code ====>*/
    if (num2 === 0) {
      return "Error: Division by zero";
    } else {
      return num1 / num2;
    }
  /* <==== code ====>*/
  }
  
  console.log(calculateQuotient(7, 11));
  console.log(calculateQuotient(3, 0));
  ```

---

## Paso 16

Sería bueno que tu calculadora pudiera calcular el cuadrado de un número. El cuadrado de un número es ese número multiplicado por sí mismo.

Para calcular el cuadrado de un número en JavaScript, puedes usar el método `Math.pow()`. El método `Math.pow()` toma dos argumentos: el número base y el exponente.

También puedes usar el operador de exponenciación (`**`) para calcular el cuadrado de un número.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  // base number is 5 
  // the exponent is 2
  Math.pow(5, 2); // 25
  
  // using the exponentiation operator
  5 ** 2; // 25
  ```

>> Declara una función llamada `calculateSquare` que toma un parámetro `num` y devuelve el cuadrado de `num`.

- **Code**
  
  ```js
  function calculateSquare(num) {
    return num ** 2;
  }
  ```

---

## Paso 17

Para probar tu función `calculateSquare`, tendrás que llamarla un par de veces.

>> Añade un `console.log` que llame a la función `calculateSquare` con el argumento `2`.
>
>> A continuación, añade otro `console.log` que llame a la función `calculateSquare` con el argumento `9`.

- **Code**
  
  ```js
  function calculateSquare(num) {
    return num ** 2;
  }
  /* <==== code ====>*/
  console.log(calculateSquare(2));
  console.log(calculateSquare(9));
  /* <==== code ====>*/
  ```

---

## Paso 18

La última función que añadiremos a tu calculadora será la de la raíz cuadrada.

Un cuadrado es un número multiplicado por sí mismo. Por lo tanto, la raíz cuadrada sería el número que, al multiplicarse por sí mismo, da como resultado el número original.

Por ejemplo, la raíz cuadrada de `9` es `3`, ya que `3 × 3 = 9`.

Para obtener la raíz cuadrada de un número en JavaScript, puedes usar el método *Math.sqrt()*.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  // result: 3
  Math.sqrt(9);
  ```

>> Declara una función llamada `calculateSquareRoot` que toma un parámetro `num` y devuelve la raíz cuadrada de `num`.

- **Code**
  
  ```js
  function calculateSquareRoot(num) {
    return Math.sqrt(num);
  }
  ```

---

## Paso 19

En el último paso del taller, tendrás que probar tu función `calculateSquareRoot`.

>> Añade un primer `console.log` que llame a la función `calculateSquareRoot` con el argumento `25`.
>
>> A continuación, añade un segundo `console.log` que llame a la función `calculateSquareRoot` con el argumento `100`.

- **Code**
  
  ```js
  function calculateSquareRoot(num) {
    return Math.sqrt(num);
  }
  /* <==== code ====>*/
  console.log(calculateSquareRoot(25));
  console.log(calculateSquareRoot(100));
  /* <==== code ====>*/
  ```

---

**¡Y con estos cambios, tu aplicación de calculadora ya está lista!**
