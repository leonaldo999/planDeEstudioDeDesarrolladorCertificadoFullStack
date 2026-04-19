# Crear un inspector de Strings

En este taller, practicarás el uso de los métodos `includes()` y `slice()`.

## Paso 1

>> Para empezar, crea una variable llamada `fccSentence` y asígnale al string `"freeCodeCamp is a great place to learn web development."`.

- **Code**
  
  ```js
  const fccSentence = "freeCodeCamp is a great place to learn web development.";
  ```

---

## Paso 2

>> Utiliza `console.log()` para escribir en la consola: `"Here are some examples of the includes() method:"`.

- **Code**
  
  ```js
  console.log("Here are some examples of the includes() method:");
  ```

---

## Paso 3

Como recordarás de las lecciones anteriores, el método `includes()` comprueba si un String contiene un subString específica y devuelve `true` o `false`.

A continuación se muestra un ejemplo en el que se utiliza el método `includes()`:

- **Example Code**
  
  ```js
  const text = "Hello World";
  const hasHello = text.includes("Hello");
  console.log(hasHello); // true
  ```

>> Crea una variable llamada `hasFreeCodeCamp`. A continuación, asígnale el resultado de aplicar el método `includes()` a `fccSentence` para comprobar si contiene `freeCodeCamp`.

- **Code**
  
  ```js
  const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
  ```

---

## Paso 4

>> Ahora utiliza una plantilla literal o la concatenación de cadenas para registrar en la consola el mensaje `fccSentence.includes("freeCodeCamp") returns <hasFreeCodeCamp> because the word "freeCodeCamp" is in the sentence.` Reemplaza `<hasFreeCodeCamp>` por el valor real de la variable.

- **Code**
  
  ```js
  console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);
  ```

---

## Paso 5

Ahora es el momento de ver qué sucede cuando NO se encuentra la subString.

>> Crea una variable llamada `hasJavaScript`. A continuación, asígnale el resultado de usar el método `includes()` para comprobar si `fccSentence` incluye `"JavaScript"`.
>
>> A continuación, usa una plantilla literal o la concatenación de Strings para registrar en la consola el mensaje `fccSentence.includes("JavaScript") returns <hasJavaScript> because the word "JavaScript" is not in the sentence.` Reemplaza `<hasJavaScript>` por el valor real de la variable.

- **Code**
  
  ```js
  const hasJavaScript = fccSentence.includes("JavaScript");
  console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);
  ```

---

## Paso 6

El método `includes()` distingue entre mayúsculas y minúsculas, lo que significa que diferencia entre letras en mayúscula y en minúscula.

>> Crea una variable llamada `hasLowercaseFCC`. A continuación, asígnale el resultado de usar el método `includes()` para comprobar si `fccSentence` incluye `"freecodecamp"` (todo en minúsculas).
>
>> A continuación, utiliza una plantilla literal o la concatenación de strings para registrar el mensaje `fccSentence.includes("freecodecamp") returns <hasLowercaseFCC> because includes is case-sensitive.` Reemplaza `<hasLowercaseFCC>` por el valor real de la variable.

- **Code**
  
  ```js
  const hasLowercaseFCC = fccSentence.includes("freecodecamp");
  console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);
  ```

---

## Paso 7

Ahora vas a explorar el método `slice()`, que extrae una parte de un string.

>> Crea una variable llamada `message` y asígnale el string `"Welcome to freeCodeCamp!"`.
>
>> A continuación, utiliza `console.log()` para mostrar en la consola el mensaje `"Here are some examples of the slice() method:"`.

- **Code**
  
  ```js
  const message = "Welcome to freeCodeCamp!";
  console.log("Here are some examples of the slice() method:");
  ```

---

## Paso 8

El método `slice()` extrae una sección de un string. Toma dos argumentos: el índice inicial (incluido) y el índice final (no incluido).

A continuación se muestra un ejemplo:

- **Example Code**
  
  ```js
  const greeting = "Hello World";
  const firstWord = greeting.slice(0, 5);
  console.log(firstWord); // "Hello"
  ```

Los índices de las strings comienzan en 0. En la string `message`, el carácter en el índice `11` es `f` (el inicio de `"freeCodeCamp"`).

>> Crea una variable llamada `platform`. A continuación, asígnale el resultado de la operación `message.slice(11, 23)` para extraer `"freeCodeCamp"`.

- **Code**
  
  ```js
  const platform = message.slice(11, 23);
  ```

---

## Paso 9

Ahora es el momento de registrar en la consola el resultado de usar el método `slice()`.

>> Utiliza un literal de plantilla o la concatenación de cadenas para registrar en la consola el mensaje `The word "<platform>" was sliced from the message.`. Reemplaza `<platform>` por el valor real de la variable.

- **Code**
  
  ```js
  console.log(`The word "${platform} "was sliced from the message.`);
  ```

---

## Paso 10

Puedes usar `slice()` para extraer parte del principio de una string.

>> Crea una variable llamada `greetingWord`. Luego, asígnale el resultado de usar `message.slice(0, 7)` para extraer la primera palabra `"Welcome"`.
>
>> A continuación, usa una plantilla literal o la concatenación de strings para registrar el mensaje `The first word is "<greetingWord>".` en la consola. Reemplaza `<greetingWord>` por el valor real de la variable.

- **Code**
  
  ```js
  const greetingWord = message.slice(0, 7);
  console.log(`The first word is "${greetingWord}".`);
  ```

---

## Paso 11

El método `slice()` puede utilizar índices negativos para contar desde el final de la cadena. `-1` hace referencia al último carácter.

A continuación se muestra un ejemplo:

- **Example Code**
  
  ```js
  const text = "JavaScript";
  const lastThree = text.slice(-3);
  console.log(lastThree); // "ipt"
  ```

>> Crea una variable llamada `endPunctuation`. A continuación, asígnale el resultado de usar `message.slice(-1)` para extraer el último carácter.
>
>> Después, utiliza un literal de plantilla o la concatenación de cadenas para registrar en la consola el mensaje `The ending punctuation mark is a "<endPunctuation>"`. Reemplaza `<endPunctuation>` por el valor real de la variable.

- **Code**
  
  ```js
  const endPunctuation = message.slice(-1);
  console.log(`The ending punctuation mark is a "${endPunctuation}"`);
  ```

---

## Paso 12

>> Como paso final, añade una instrucción `console.log()` con el mensaje: `"Workshop complete! You now know how to use includes() and slice()."`.

- **Code**
  
  ```js
  console.log("Workshop complete! You now know how to use includes() and slice().");
  ```

---

**¡Felicidades! Has completado el taller sobre el Inspector de cadenas.**
