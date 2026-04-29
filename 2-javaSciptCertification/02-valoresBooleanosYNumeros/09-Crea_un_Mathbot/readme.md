# Crea un Mathbot

En este taller, repasarás el uso de los diferentes métodos del objeto `Math` mediante la creación de un Mathbot. Este Mathbot registrará algunas operaciones matemáticas y mensajes en la consola con el fin de enseñarte sobre el objeto `Math` de JavaScript.

---

## Paso 1

>> Para este primer paso, empieza por crear una variable llamada `botName` y asígnale el valor de string `"MathBot"`.
>
>> A continuación, crea otra variable llamada `greeting` y asígnale la frase `"Hi there! My name is [botName goes here] and I am here to teach you about the Math object!"`. En lugar del marcador de posición [`botName` va aquí], usa la variable `botName`.

Puedes usar literales de plantilla o concatenación de strings con el operador `+` para lograrlo.

Finalmente, registra la variable ``greeting`` en la consola.

- **Code**
  
  ```js
  const botName = "MathBot";

  const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
  
  console.log(greeting);
  
  ```

---

## Paso 2

En la siguiente parte del taller veremos cómo funciona el método `Math.random()`.

>> Empieza añadiendo otro `console.log()` que muestre en la consola el string `"The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1."`.

- **Code**
  
  ```js
  const botName = "MathBot";

  const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
  
  console.log(greeting);
  // code
  console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");
  // code
  
  ```

---

## Paso 3

Ahora es el momento de generar un número aleatorio utilizando el método `Math.random()`.

>> Crea una variable llamada `randomNum` y asígnale el valor resultante de llamar al método `Math.random()`.
>
>> A continuación, muestra el valor de la variable `randomNum` en la consola.

Intenta añadir un espacio en el código para volver a ejecutar el bot y ver los diferentes números aleatorios que se generan.

- **Code**
  
  ```js
  const botName = "MathBot";

  const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
  
  console.log(greeting);
  console.log("The `Math.random()` method returns a pseudo random number greater than or equal to 0 and less than 1.");
  
  // code
  const randomNum = Math.random();
  console.log(randomNum);
  // code
  ```

---

## Paso 4

La siguiente parte del taller consiste en repasar cómo generar un número aleatorio entre dos valores.

>> Empieza añadiendo otro `console.log()` que muestre el mensaje `"Now, generate a random number between two values."` en la consola.
>
>> A continuación, crea una variable llamada `min` y asígnale el valor `1`; crea también una variable llamada `max` y asígnale el valor `100`.

En el siguiente paso, generarás un número aleatorio entre estos dos valores.

- **Code**
  
  ```js
  console.log("Now, generate a random number between two values.");
  const min = 1;
  const max =100;
  ```

---

## Paso 5

La fórmula para generar un número aleatorio entre dos valores es la siguiente:

- **Example Code**
  
  ```js
  Math.random() * (maximum - minimum) + minimum;
  ```

Esto generará un resultado que es un número de punto flotante comprendido entre dos valores.

>> Crea una variable llamada `randomNum2` y asígnale el resultado de generar un valor entre los valores `min` y `max`.

A continuación, muestra la variable `randomNum2` en la consola para ver el resultado. Intenta actualizar la página para ver resultados diferentes.

- **Code**
  
  ```js
  console.log("Now, generate a random number between two values.");
  const min = 1;
  const max =100;
  
  // code
  const randomNum2 = Math.random() * (max - min) + min;
  console.log(randomNum2);
  // code

  ```

---

## Paso 6

Hasta ahora, solo has trabajado con números de punto flotante y el número `0`.

En la siguiente parte del taller, repasarás cómo utilizar el método `Math.floor()`.

>> Empieza añadiendo un `console.log()` que muestre el mensaje `"The Math.floor() method rounds the value down to the nearest whole integer."`.

- **Code**
  
  ```js
  console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
  ```

---

## Paso 7

Como aprendiste en las lecciones anteriores, el método Math.floor() redondea el valor hacia abajo al entero más cercano.

- **Example Code**
  
  ```js
  const price = 10.99;
  Math.floor(price); // 10
  ```

>> Crea una variable llamada `numRoundedDown` y asígnale el resultado de redondear hacia abajo el número de punto flotante `6.7` al entero más cercano.
>
>> A continuación, muestra el valor de la variable `numRoundedDown` en la consola para ver el resultado.

- **Code**
  
  ```js
  console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
  // code
  const numRoundedDown = Math.floor(6.7);
  console.log(numRoundedDown);
  // code
  ```

---

## Paso 8

La siguiente parte del taller consiste en repasar cómo generar un número entero aleatorio entre dos valores.

>> Empieza añadiendo otro `console.log()` que muestre el mensaje `"Now, generate a random integer between two values."` en la consola.

En el siguiente paso, generarás un número entero aleatorio entre los valores de las variables `min` y `max` que ya has creado.

- **Code**
  
  ```js
  console.log("Now, generate a random integer between two values.");
  ```

---

## Paso 9

La fórmula para generar un número entero aleatorio entre dos valores es la siguiente:

- **Example Code**
  
  ```js
  Math.floor(Math.random() * (maximum - minimum) + minimum);
  ```

Esto generará un resultado que es un número entero comprendido entre dos valores.

>> Crea una variable llamada `randomInt` y asígnale el resultado de generar un valor entre los valores `min` y `max`.
>
>> A continuación, muestra la variable `randomInt` en la consola para ver el resultado. Intenta actualizar la página para ver resultados diferentes.

- **Code**
  
  ```js
  console.log("Now, generate a random integer between two values.");
  // code
  const randomInt = Math.floor(Math.random() * (max - min) + min);
  console.log(randomInt);
  // code
  ```

---

## Paso 10

Ahora es el momento de repasar cómo funciona el método `Math.ceil()`.

>> Empieza por escribir en la consola el string `"The Math.ceil() method rounds the value up to the nearest whole integer."`.

- **Code**
  
  ```js
  console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
  ```

---

## Paso 11

En las lecciones anteriores, aprendiste a utilizar el método `Math.ceil()` de la siguiente manera:

- **Example Code**
  
  ```js
  const price = 10.01;
  Math.ceil(price); // 11
  ```

El método `Math.ceil()` redondea el valor al entero más cercano.

>> Crea una variable llamada `numRoundedUp` y asígnale el resultado de redondear el número de punto flotante `3.2` al entero más cercano.
>
>> A continuación, muestra la variable `numRoundedUp` en la consola para ver el resultado.

- **Code**
  
  ```js
  console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");
  // code
  const numRoundedUp = Math.ceil(3.2);
  console.log(numRoundedUp);
  // code
  ```

---

## Paso 12

En la siguiente parte del taller veremos cómo redondear números al entero más cercano.

>> Empieza añadiendo un `console.log()` que muestre el mensaje`"The Math.round() method rounds the value to the nearest whole integer."` en la consola.

- **Code**
  
  ```js
  console.log("The Math.round() method rounds the value to the nearest whole integer.");
  ```

---

## Paso 13

En lecciones anteriores, aprendiste que el método `Math.round()` redondea el valor al entero más cercano.

Aquí tienes algunos ejemplos:

- **Example Code**
  
  ```js
  Math.round(6.7); // 7
  Math.round(3.2); // 3
  ```

Esto difiere de los métodos `Math.floor()` y `Math.ceil()`, que redondean hacia abajo y hacia arriba al entero más cercano, respectivamente.

>> Crea una nueva variable llamada `numRounded` y asigna el resultado de redondear el número `2.7`. A continuación, muestra el valor de `numRounded` en la consola.
>
>> Debajo de eso, crea otra variable nueva llamada `numRounded2` y asigna el resultado de redondear el número `11.2`. Luego, registra el valor de `numRounded2` en la consola.

- **Code**
  
  ```js
  console.log("The Math.round() method rounds the value to the nearest whole integer.");
  // code
  const numRounded = Math.round(2.7);
  console.log(numRounded);
  const numRounded2 = Math.round(11.2);
  console.log(numRounded2);
  // code
  ```

---

## Paso 14

En la última parte del taller, repasarás cómo obtener los valores mínimo y máximo de un conjunto de números.

>> Empieza añadiendo un `console.log()` que muestre el mensaje `"The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range."` en la consola.

- **Code**
  
  ```js
  console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
  ```

---

## Paso 15

En las lecciones anteriores, aprendiste a obtener los valores máximo y mínimo de un rango de números como este:

- **Example Code**
  
  ```js
  Math.max(1, 2, 3, 4, 5); // 5
  Math.min(1, 2, 3, 4, 5); 
  ```

>> Crea una variable llamada `maxNum` y asígnale el resultado de calcular el número máximo entre los números `3, 125, 55 y 24`. A continuación, muestra el valor de `maxNum` en la consola.
>
>> Debajo de eso, crea una variable llamada `minNum` y asígnale el resultado de hallar el número mínimo entre los números `6, 90, 14, 90 y 2`. Luego, registra el valor de `minNum` en la consola.

- **Code**
  
  ```js
  console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");
  // code
  const maxNum = Math.max(3, 125, 55, 24);
  console.log(maxNum);
  const minNum = Math.min(6, 90, 14, 90 , 2);
  console.log(minNum);
  // code
  ```

---

## Paso 16

>> En el último paso del taller, escribirás el mensaje `"It was fun learning about the different Math methods with you!"` en la consola.

- **Code**
  
  ```js
  cconsole.log("It was fun learning about the different Math methods with you!");
  ```

---

**¡Y con este último cambio, ya has completado el taller MathBot!**
