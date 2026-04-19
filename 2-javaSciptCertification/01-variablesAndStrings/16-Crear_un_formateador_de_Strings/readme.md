# Crear un formateador de Strings

En este taller, practicarás el uso de diversos métodos de strings que se utilizan para dar formato a los strings.

---

## Paso 1

>> Empieza creando una variable llamada `userInput` y asígnale el siguiente valor: `"   Hello World!   "`.

- **Code**
  
  ```js
  const userInput = "   Hello World!   ";
  ```

---

## Paso 2

>> A continuación, agrega un `console.log()` con el string `"Original input:"`.

- **Code**
  
  ```js
  console.log("Original input:");
  ```

---

## Paso 3

>> Debajo de tu primer `console.log()`, agrega otro `console.log()` para mostrar el valor de la variable `userInput` en la consola.

- **Code**
  
  ```js
  console.log(userInput);
  ```

---

## Paso 4

>> El valor de `userInput` tiene algunos espacios de más a ambos extremos del string. Para crear un nueva string sin esos espacios, puedes usar el método `trim()`.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  const sentence = "  Learning about the trim method.  ";
  sentence.trim(); // "Learning about the trim method."
  ```

>> Crea una variable llamada `cleanedInput` y asígnale el resultado de aplicar el método `trim()` a la variable `userInput`.

- **Code**
  
  ```js
  const cleanedInput = userInput.trim();
  ```

---

## Paso 5

Ahora es el momento de ver el resultado.

>> Empieza añadiendo un `console.log()` con la cadena `"Result of trimming whitespace from both ends:"`.
>
>> A continuación, debajo de ese `console.log()`, añade otro `console.log()` con la variable `cleanedInput`.

- **Code**
  
  ```js
  console.log("Result of trimming whitespace from both ends:");
  console.log(cleanedInput);
  ```

---

## Paso 6

Habrá ocasiones en las que quieras eliminar solo los espacios al principio del string. Ahí es donde resulta útil el método `trimStart()`.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  const sentence = "  I love learning.  ";
  sentence.trimStart(); // "I love learning.  "
  ```

Recuerda que los strings son inmutables. Este método creará un nuevo string con el resultado, sin modificar la original.

>> Crea una variable llamada `trimmedStart` y asígnale el resultado de aplicar el método `trimStart()` a la variable `userInput`.

- **Code**
  
  ```js
  const trimmedStart = userInput.trimStart();
  ```

---

## Paso 7

Ahora es el momento de ver los resultados de eliminar los espacios en blanco al principio del string.

>> Debajo de tu variable `trimmedStart`, agrega un `console.log()` con el string `"After using the trimStart() method, leading spaces removed:"`.
>
>> A continuación, debajo de ese `console.log()`, agrega otro `console.log()` con la variable `trimmedStart`.

- **Code**
  
  ```js
  console.log("After using the trimStart() method, leading spaces removed:");
  console.log(trimmedStart);
  ```

---

## Paso 8

Para eliminar los espacios en blanco al final de un string, puedes utilizar el método `trimEnd()`.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  const sentence = "  I love learning.  ";
  sentence.trimEnd(); // "  I love learning."
  ```

>> Crea una variable llamada `trimmedEnd` y asígnale el resultado de aplicar el método `trimEnd()` a la variable `userInput`.

- **Code**
  
  ```js
  const trimmedEnd = userInput.trimEnd();
  ```

---

## Paso 9

Ahora es el momento de ver los resultados de eliminar los espacios al final del string.

>> Debajo de tu variable `trimmedEnd`, agrega un `console.log()` con el string `"After using the trimEnd() method, trailing spaces removed:"`.
>
>> Luego, debajo de ese `console.log()`, agrega otro `console.log()` con la variable `trimmedEnd`.

- **Code**
  
  ```js
  console.log("After using the trimEnd() method, trailing spaces removed:");
  console.log(trimmedEnd);
  ```

---

## Paso 10

Habrá ocasiones en las que necesites crear un nuevo string con un formato de mayúsculas y minúsculas diferente.

Para crear un nuevo string con todas las letras en mayúsculas, puedes utilizar el método `toUpperCase()`.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  const sentence = "I love to code!";
  sentence.toUpperCase(); // "I LOVE TO CODE!"
  ```

>> Crea una variable llamada `upperCaseInput` y asígnale el resultado de aplicar el método `toUpperCase()` a la variable `cleanedInput`.

- **Code**
  
  ```js
  const upperCaseInput = cleanedInput.toUpperCase();
  ```

---

## Paso 11

Ahora es el momento de ver los resultados.

>> Debajo de tu variable `upperCaseInput`, agrega un `console.log()` con el string `"Result of using the toUpperCase() method:"`.
>
>> Luego, debajo de ese `console.log()`, agrega otro `console.log()` con la variable `upperCaseInput`.

- **Code**
  
  ```js
  console.log("Result of using the toUpperCase() method:");
  console.log(upperCaseInput);
  ```

---

## Paso 12

Si necesitas crear un nuevo string en la que todas las letras estén en minúsculas, puedes utilizar el método `toLowerCase()`.

>> Empieza por crear una variable llamada `lowerCaseInput` y asígnale el resultado de aplicar el método `toLowerCase()` a la variable `cleanedInput`.
>
>> A continuación, registra la string `"Result of using the toLowerCase() method:"`.
>
>> Por último, agrega otro `console.log()` para la variable `lowerCaseInput`.

- **Code**
  
  ```js
  const lowerCaseInput = cleanedInput.toLowerCase();
  console.log("Result of using the toLowerCase() method:");
  console.log(lowerCaseInput);
  ```

---

## Paso 13

Habrá ocasiones en las que necesites utilizar varios métodos para crear un nuevo string. En los siguientes pasos, utilizarás algunos de los métodos que has aprendido hasta ahora para crear un nuevo string que utilice la convención de nomenclatura camelCase.

>> Empieza por crear una variable llamada `lowercaseWord` y asígnale el string `"camelcase"`.
>
>> Debajo de esa variable `lowercaseWord`, crea otra variable llamada `camelCasedVersion` y, por ahora, asígnale un string vacía.
>
>> Debajo de esa variable `camelCasedVersion`, agrega un `console.log()` con la string `"Camel cased version:"` seguido de otro `console.log()` para la variable `camelCasedVersion`.

- **Code**
  
  ```js
  const lowercaseWord = "camelcase";
  const camelCasedVersion = "";
  console.log("Camel cased version:");
  console.log(camelCasedVersion);
  ```

---

## Paso 14

Como recordarás de lecciones y talleres anteriores, puedes extraer partes de un string utilizando el método `slice()`.

A continuación te lo recordamos:

- **Example Code**
  
  ```js
  const str = "abcd";
  str.slice(0, 3); // "abc"
  ```

>> Debes modificar la asignación actual de `camelCasedVersion` sustituyendo el string vacío por `lowercaseWord.slice(0, 5)`.

Ahora deberías ver la palabra `"camel"` en la consola.

- **Code**
  
  ```js
  const camelCasedVersion = lowercaseWord.slice(0, 5);
  ```

---

## Paso 15

Como recordarás de lecciones anteriores, la convención de nomenclatura camelCase comienza con una letra minúscula en la primera palabra, y cada palabra posterior empieza con una letra mayúscula seguida de letras minúsculas.

Aquí tienes algunos ejemplos a modo de recordatorio:

- **Example Code**
  
  ```js
  freeCodeCamp
  camelCase
  learningIsFun
  ```

La segunda palabra de la variable `lowercaseWord` es `"case"`. Para acceder a la letra `c` de esa palabra, puedes usar `lowercaseWord[5]`.

>> Actualiza la asignación `camelCasedVersion` para usar el operador `+` y concatenar `lowercaseWord.slice(0, 5)` con el resultado de aplicar el método correcto para convertir a mayúsculas la letra `c` de `lowercaseWord[5]`.

Ahora deberías ver «camelC» en la consola.

- **Code**
  
  ```js
  const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase();
  ```

---

## Paso 16

En este momento, tu variable `camelCasedVersion` contiene el valor `camelC`. Sin embargo, el resultado deseado es `camelCase`.

Para obtener las letras restantes, puedes utilizar el método `slice()` con un índice negativo. Recuerda que el uso de índices negativos indica al método `slice()` que extraiga a partir del final.

Aquí tienes un ejemplo de referencia:

- **Example Code**
  
  ```js
  const str = "abcd";
  str.slice(-2); // cd
  ```

>> Actualiza la asignación de `camelCasedVersion` para que también concatene `lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase()` con el resultado de aplicar el método `slice()` a `lowercaseWord`. Pasa el número `-3` como argumento al método `slice()`.

- **Code**
  
  ```js
  const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);
  ```

---

**¡Y con ese último cambio, tu taller ha terminado!**
