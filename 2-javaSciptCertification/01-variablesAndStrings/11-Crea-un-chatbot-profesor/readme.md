# Crea un chatbot profesor

En este taller, seguirás aprendiendo sobre cadenas de caracteres creando un chatbot profesor.

---

## Paso 1

>> Para empezar, añade una instrucción en la `console` con el mensaje `"Hi there!"`.

- **Code**
  
  ```js
  console.log("Hi there!");
  ```

---

## Paso 2

Ahora es el momento de establecer el nombre del bot.

>> Crea una variable llamada `botName` y asígnale el valor de string `"teacherBot"`.

- **Code**
  
  ```js
  const botName = "teacherBot";
  ```

---

## Paso 3

Ahora es el momento de crear un saludo utilizando la variable `botName`.

En lecciones anteriores, aprendiste a concatenar strings utilizando literales de plantilla de esta manera:

- **Example Code**
  
  ```js
  const name = "John";

  // "Hello, John!"
  `Hello, ${name}!`;
  ```

>> Empieza por crear una variable llamada `greeting`.
>
>> A continuación, utilizando la sintaxis de literales de plantilla, asigna una cadena que diga `My name is`, seguida de la variable `botName` y terminando con un punto (`.`).
>
>> Por último, muestra el contenido de la variable `greeting` en la consola.

- **Code**
  
  ```js
  const greeting = `My name is ${botName}.`
  console.log(greeting);
  ```

---

## Paso 4

El siguiente paso es crear algunas variables más que se utilizarán en futuros mensajes del bot.

>> Crea una variable llamada `subject` y asígnale el valor de cadena `"JavaScript"`.
>
>> A continuación, crea una variable llamada `topic` y asígnale el valor de cadena `"strings"`.

- **Code**
  
  ```js
  const subject = "JavaScript";
  const topic = "strings";
  ```

---

## Paso 5

Ahora es el momento de utilizar las variables que creaste en el paso anterior.

En lecciones anteriores, aprendiste a trabajar con literales de plantilla de esta manera:

- **Example Code**
  
  ```js
  const name = "John";
  const age = 30;
  
  // My name is John and I am 30 years old.
  `My name is ${name} and I am ${age} years old.`;
  ```

>> Empieza por crear una variable de `sentence`.
>
>> Utilizando la sintaxis de literales de plantilla, asigna la cadena `Today, you will learn about [topic variable goes here] in [subject variable goes here].` a la variable de `sentence`.
>
>> Sustituye los marcadores de posición `[topic variable goes here]` y `[subject variable goes here]` por las variables de `topic` y `subject` y la sintaxis `${}`.
>
>> Por último, registra la variable de `sentence` en la consola.

- **Code**
  
  ```js
  const sentence = `Today, you will learn about ${topic} in ${subject}.`
  console.log(sentence);
  ```

---

## Paso 6

En esta siguiente parte del proyecto, el bot te enseñará a trabajar con la propiedad `length` de los strings.

>> Empieza creando una nueva variable llamada `strLengthIntro`.
>
>> Luego, usando la sintaxis de literal de plantilla, asigna la cadena `Here is an example of using the length property on the word [subject].` a la variable `strLengthIntro`.
>
>> Reemplaza `[subject]` por la variable `subject` como lo hiciste anteriormente.
>
>> Por último, registra la variable `strLengthIntro` en la consola.

- **Code**
  
  ```js
  const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`
  console.log(strLengthIntro);
  ```

---

## Paso 7

Para obtener la longitud de un String, puedes utilizar la propiedad `length`. Esta propiedad devuelve el número de caracteres que contiene la String.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  const greeting = "Hello, world!";

  // Output: 13
  console.log(greeting.length);
  ```

>> Empieza utilizando la propiedad `length` para obtener la longitud de la String `subject` y registra ese valor en la consola.

- **Code**
  
  ```js
  console.log(subject.length);
  ```

---

## Paso 8

Ahora es el momento de obtener la longitud del string `topic`.

Puedes usar literales de plantilla dentro de las instrucciones `console` de esta manera:

- **Example Code**
  
  ```js
  const developer = "Jessica";
  console.log(`Hello, my name is ${developer}.`);
  ```

>> Empieza por mostrar en la consola el mensaje `Here is an example of using the length property on the word [topic].`.
>
>> Recuerda sustituir `[topic]` por la variable `topic` y utilizar la sintaxis adecuada para los literales de plantilla, tal y como hiciste en los pasos anteriores.
>
>> A continuación, añade una segunda instrucción `console.log` que muestre en la consola la longitud de la cadena `topic`.

- **Code**
  
  ```js
  console.log(`Here is an example of using the length property on the word ${topic}.`);
  console.log(topic.length);
  ```

---

## Paso 9

La siguiente parte de este taller consiste en repasar cómo acceder a los caracteres de una cadena.

>> Empieza mostrando en la consola el mensaje `Here is an example of accessing the first letter in the word [subject].`.
>
>> Recuerda sustituir `[subject]` por la variable `subject` y utilizar la sintaxis adecuada para los literales de plantilla, tal y como hiciste en los pasos anteriores.

- **Code**
  
  ```js
  console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
  ```

---

## Paso 10

En las lecciones anteriores, aprendiste a acceder a los caracteres de un string de esta manera:

- **Example Code**
  
  ```js
  const firstName = "Jessica";
  // returns "J"
  firstName[0];
  ```

Recuerda que los índices comienzan en `0`, por lo que la primera letra de un string siempre estará en el índice `0`.

>> Empieza añadiendo otra instrucción de `console`.
>
>> Dentro de la instrucción de `console`, muestra la primera letra de la variable `subject` utilizando la notación entre corchetes y el índice correcto.

- **Code**
  
  ```js
  console.log(subject[0]);
  ```

---

## Paso 11

Ahora es el momento de acceder a la segunda letra de la variable `subject`.

>> Empieza añadiendo una instrucción de `console` que muestre el mensaje `Here is an example of accessing the second letter in the word [subject].`. Recuerda sustituir `[subject]` por el valor real de la variable `subject` y utilizar la sintaxis correcta de los literales de plantilla.
>
>> A continuación, añade otra instrucción de `console` que muestre la segunda letra de la variable `subject` utilizando la notación entre corchetes y el número de índice correcto.

- **Code**
  
  ```js
  console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
  console.log(subject[1]);
  ```

---

## Paso 12

Ahora es el momento de acceder al último carácter de un String.

>> Empieza añadiendo otra instrucción de consola que muestre el mensaje `Here is an example of accessing the last letter in the word [subject].`.
>
>> Recuerda sustituir `[subject]` por el valor real de la variable `subject` y utilizar la sintaxis correcta de los literales de plantilla.

- **Code**
  
  ```js
  console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
  ```

---

## Paso 13

En las lecciones anteriores, aprendiste a acceder al último carácter de una cadena de esta manera:

- **Example Code**
  
  ```js
  const firstName = "Jessica";

  // returns "a"
  firstName[firstName.length - 1];
  ```

`string.length - 1` siempre te dará el último índice de una cadena.

>> Crea una nueva variable llamada `lastCharacter` y asígnale el valor del último carácter de la variable `subject`.
>
>> A continuación, muestra el valor de la variable `lastCharacter` en la consola.

- **Code**
  
  ```js
  const lastCharacter = subject[subject.length - 1]
  console.log(lastCharacter);
  ```

---

## Paso 14

En la última parte del taller, repasarás cómo hallar la posición en el índice de una subcadena dentro de una cadena. Recuerda que una subcadena es una parte de una cadena.

>> Empieza creando una variable llamada `learningIsFunSentence` y asígnale el valor de cadena `"Learning is fun."`..

- **Code**
  
  ```js
  const learningIsFunSentence = "Learning is fun.";
  ```

---

## Paso 15

>> El siguiente paso es añadir otra instrucción de consola que muestre el string `"Here are examples of finding the positions of substrings in the sentence."`.

- **Code**
  
  ```js
  console.log("Here are examples of finding the positions of substrings in the sentence.");
  ```

---

## Paso 16

En las lecciones anteriores, aprendiste a utilizar el método indexOf de la siguiente manera:

- **Example Code**
  
  ```js
  const sentence = "I love to learn.";

  // returns index 2
  console.log(sentence.indexOf("love"));
  
  // returns -1
  console.log(sentence.indexOf("hate"));
  ```

Recuerda que el método `indexOf` devuelve la posición en la que aparece por primera vez un subString dentro de un String. Si no encuentra la subString, devuelve `-1`.

>> Agrega una nueva instrucción de consola que muestre el resultado de aplicar el método `indexOf` a la variable `learningIsFunSentence` para encontrar la posición del subString `"Learning"`.

- **Code**
  
  ```js
  console.log(learningIsFunSentence.indexOf("Learning"));
  ```

---

## Paso 17

>> A continuación, agrega una nueva instrucción de `console` que muestre el resultado de aplicar el método `indexOf` a la variable `learningIsFunSentence` para encontrar la posición de la subcadena `"fun"`.
>
>> Debajo de esa instrucción de `console`, agrega otra instrucción de `console` que muestre el resultado de aplicar el método `indexOf` para encontrar la posición de la subcadena `"learning"`.

Toma nota de lo que muestra la última instrucción de `console`.

- **Code**
  
  ```js
  console.log(learningIsFunSentence.indexOf("fun"));
  console.log(learningIsFunSentence.indexOf("learning"));
  ```

---

## Paso 18

La última instrucción de la consola muestra `-1` porque la subcadena `"learning"` no se encuentra en la frase `"Learning is fun"`.

El método `indexOf` distingue entre mayúsculas y minúsculas. Por lo tanto, el subString `"learning"` no es igual a el subString `"Learning"`.

Ahora que ya entiendes cómo funcionan algunos métodos comunes de strings, puedes completar el taller registrando un último mensaje en `console`.

>> Agrega una instrucción `console` que muestre el mensaje `"I hope you enjoyed learning today."` en consola.

- **Code**
  
  ```js
  console.log("I hope you enjoyed learning today.");
  ```

---

**¡Y con ese mensaje final, has completado el taller!**
