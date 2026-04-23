# Crear un transformador de strings

En este taller, practicarás el uso de los métodos `replace()`, `replaceAll()` y `repeat()` mediante la creación de una aplicación para transformar cadenas.

---

## Paso 1

>> Para empezar, crea una variable llamada `originalString` y asígnale el valor `"I love cats."`.

- **Code**
  
  ```js
  const originalString = "I love cats.";
  ```

---

## Paso 2

>> Debajo de la variable `originalString`, agrega un `console.log()` con la cadena `"Original string:"`.
>
>> Luego, debajo de ese `console.log()`, agrega otro `console.log()` con la variable `originalString`.

- **Code**
  
  ```js
  console.log("Original string:");
  console.log(originalString);
  ```

---

## Paso 3

En una lección anterior, aprendiste sobre el método `replace()`, que se utiliza para localizar un subString dentro de un String y sustituirla por otro valor.

Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  const text = "I love JavaScript!";
  const newText = text.replace("JavaScript", "coding");
  // Result: "I love coding!"
  ```

Recuerda que los Strings son inmutables, lo que significa que, en ese ejemplo, el texto original no se modifica. En su lugar, se crea un nuevo String.

>> Crea una nueva variable llamada `replacedString` y asígnale `originalString.replace("cats", "dogs")`.

- **Code**
  
  ```js
  const replacedString = originalString.replace("cats", "dogs");
  ```

---

## Paso 4

Ahora es el momento de ver el resultado tras usar el método `replace()`.

>> Empieza añadiendo un `console.log()` con el valor `"After using the replace() method:"`.
>
>> A continuación, debajo de ese `console.log()`, añade otro `console.log()` con la variable `replacedString`.

Echa un vistazo a la consola y deberías ver que la nueva frase dice `"I love dogs."` en lugar de la original `"I love cats."`.

- **Code**
  
  ```js
  console.log("After using the replace() method:");
  console.log(replacedString);
  ```

---

## Paso 5

Ahora es el momento de trabajar con un nuevo método de cadena.

>> Empieza creando una nueva variable llamada `exampleSentence` y asígnale la cadena `"I love cats and cats are so much fun!"`.
>
>> A continuación, debajo de esa variable, escribe en la consola `"Original sentence:"`. Después, debajo de ese `console.log()`, añade otro `console.log()` con la variable `exampleSentence`.

- **Code**
  
  ```js
  const exampleSentence = "I love cats and cats are so much fun!";
  console.log("Original sentence:");
  console.log(exampleSentence);
  ```

---

## Paso 6

>> A continuación, crea una nueva variable llamada `dogsOnlySentence` y asígnale el valor `exampleSentence.replace("cats", "dogs")`.
>
>> Después, debajo de esa variable, registra en la consola `"Replacing all occurrences of cats with dogs:"`. Debajo de ese `console.log()`, agrega otro `console.log()` para la variable `dogsOnlySentence`.

Ahora deberías ver el texto `"I love dogs and cats are so much fun!"` registrado en la consola. Pero ese no es el resultado deseado. En el siguiente paso, aprenderás cómo corregirlo para que el texto diga `"I love dogs and dogs are so much fun!"`.

- **Code**
  
  ```js
  const dogsOnlySentence = exampleSentence.replace("cats", "dogs");
  console.log("Replacing all occurrences of cats with dogs:");
  console.log(dogsOnlySentence);
  ```

---

## Paso 7

Para obtener el resultado deseado `"I love dogs and dogs are so much fun!"`, tendrás que utilizar el método `replaceAll()` en lugar del método `replace()`. Este método devuelve un nuevo String en la que se han sustituido todas las coincidencias del subString.

>> Modifica el código `exampleSentence.replace("cats", "dogs")` para utilizar el método `replaceAll()` en su lugar. Ahora deberías ver el texto correcto en la consola.

- **Code**
  
  ```js
  // Code
  const dogsOnlySentence = exampleSentence.replaceAlle("cats", "dogs");
  // Code
  console.log("Replacing all occurrences of cats with dogs:");
  console.log(dogsOnlySentence);
  ```

---

## Paso 8

Ahora es el momento de trabajar con un nuevo método de string.

>> Empieza creando una variable llamada `learningSentence` y asígnale la string `"I love learning!"`.
>
>> A continuación, debajo de esa variable, escribe en la consola `"Original learning sentence:"`. Debajo de ese `console.log()`, añade otro `console.log()` para la variable `learningSentence`.

- **Code**
  
  ```js
  const learningSentence = "I love learning!";
  console.log("Original learning sentence:");
  console.log(learningSentence);
  ```

---

## Paso 9

Sería bueno que la palabra `"love"` se repitiera tres veces en la frase `"I love learning!"`.

Como recordarás de una lección anterior, puedes repetir un string un número específico de veces utilizando el método `repeat()`. Aquí tienes un ejemplo:

- **Example Code**
  
  ```js
  const word = "Hello!";
  const repeatedWord = word.repeat(3);
  
  console.log(repeatedWord);  // "Hello!Hello!Hello!"
  ```

Dado que los strings son inmutables, este método no modificará el string original. Devolverá un nuevo string con el contenido repetido.

>> Crea una variable llamada `repeatedLove` y asígnale `"love ".repeat(3)`. A continuación, muestra en la consola el contenido de la variable `repeatedLove` para que puedas ver el resultado.

- **Code**
  
  ```js
  const repeatedLove = "love ".repeat(3);
  console.log(repeatedLove);
  ```

---

## Paso 10

>> Sería bueno ver esa palabra repetida en una oración. Crea una nueva variable llamada `newSentence` y asígnale el resultado de concatenar la palabra `"I "` con la variable `repeatedLove`, seguido de la concatenación del string `" learning."`. A continuación, muestra el contenido de la variable `newSentence` en la consola. Puedes elegir entre usar el operador + o literales de plantilla para la concatenación de strings.

Ahora deberías ver el texto `"I love love love  learning."`.

>[!NOTE]
> Hay un espacio extra después del último `"love"`, lo cual es correcto. En el último paso, eliminarás ese espacio extra.

- **Code**
  
  ```js
  const newSentence = "I " + repeatedLove + " learning."
  console.log(newSentence);
  ```

---

## Paso 11

Como se mencionó en el paso anterior, hay un espacio de más después de la última palabra `"love"` en la frase `"I love love love learning"`. Para eliminar ese espacio de más, puedes usar el método `trimEnd()`.

Al final del método `"love ".repeat(3)`, encadena el método `trimEnd()`. Puedes encadenar métodos de esta manera:

- **Example Code**
  
  ```js
  .firstMethod().secondMethod()
  ```

>> Ahora, cuando revises la consola, deberías ver que se ha eliminado el espacio sobrante.

- **Code**
  
  ```js
  const repeatedLove = "love ".repeat(3).trimEnd();
  ```

---

**¡Y con ese último cambio, tu taller ya está listo!**
