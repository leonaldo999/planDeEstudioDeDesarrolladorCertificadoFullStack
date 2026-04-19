# Trabajar con métodos de modificación de Strings

En esta sección, aprenderás a trabajar con métodos de modificación de Strings en JavaScript. Estos métodos te permiten modificar y transformar Strings de diversas maneras, como eliminar espacios en blanco, reemplazar partes del String o cambiar su formato.

---

## Tema 1: ¿Cómo se pueden sustituir partes de un string por otra?

En JavaScript, hay muchos casos en los que puede ser necesario sustituir una parte de un string por otro string.

Por ejemplo, es posible que necesites actualizar la información de un usuario en una URL, cambiar el formato de las fechas o corregir errores en contenido generado por el usuario.

El método `replace()` en JavaScript te permite buscar un valor específico (como una palabra o un carácter) en un string y reemplazarlo por otro valor. El método devuelve un nuevo string con el reemplazo y deja la original sin cambios, ya que los strings de JavaScript son inmutables.

Esta es la sintaxis básica:

- **Example code**

  ```js
  string.replace(searchValue, newValue);
  ```

`searchValue` es el valor que quieres buscar en el string. Puede ser un string o una expresión regular (regex), que describe patrones en el texto. Esto te permite buscar y manipular strings de una manera flexible y eficaz. Aprenderás más sobre las expresiones regulares en lecciones futuras.

`newValue` es el valor que sustituirá a `searchValue`. Aquí tienes un ejemplo sencillo:

- **Example code**

  ```js
  let text = "I love JavaScript!";
  console.log(text); // "I love JavaScript!"
  let newText = text.replace("JavaScript", "coding");
  console.log(newText);  // "I love coding!"
  ```

En este ejemplo, la palabra `JavaScript` se encuentra dentro del string y se reemplaza por `coding`.

El método `replace()` distingue entre mayúsculas y minúsculas, lo que significa que solo encontrará coincidencias exactas del `searchValue`. Por ejemplo:

- **Example code**

  ```js
  let sentence = "I enjoy working with JavaScript.";
  console.log(sentence);  // "I enjoy working with JavaScript."
  let updatedSentence = sentence.replace("javascript", "coding");
  console.log(updatedSentence);  // "I enjoy working with JavaScript."
  ```

En este caso, dado que `javascript` (con `j` minúscula) no coincide con `JavaScript` (con `J` mayúscula), no se realiza la sustitución.

Por defecto, el método `replace()` solo sustituye la primera aparición del `searchValue`. Si el valor aparece varias veces en la cadena, solo se sustituirá la primera:

- **Example code**

  ```js
  let phrase = "Hello, world! Welcome to the world of coding.";
  console.log(phrase);  // "Hello, world! Welcome to the world of coding."
  let updatedPhrase = phrase.replace("world", "universe");
  console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."
  ```

Fíjate en que solo se reemplaza la primera aparición de `world` por `universe`.

El método `replace()` de JavaScript es una herramienta potente y flexible para la manipulación de strings.

Te permite reemplazar partes específicas de una string, ya sea que se trate de caracteres individuales, palabras o patrones complejos mediante expresiones regulares.

Aunque es ideal para reemplazos sencillos, comprender su distinción entre mayúsculas y minúsculas y su comportamiento predeterminado (como reemplazar solo la primera aparición) puede ayudarte a utilizarlo de manera más eficaz.

---

## Cuestionario 1

1. **¿Cuál es el comportamiento predeterminado del método `replace()` en JavaScript?**

    - [ ] a) Reemplaza todas las apariciones del valor de búsqueda.
    - [x] b) Reemplaza solo la primera aparición del valor de búsqueda. //correcto
    - [ ] c) No hace nada si no se encuentra el valor de búsqueda.
    - [ ] d) Reemplaza cada dos apariciones del valor de búsqueda.

2. **¿Qué resultado dará el siguiente código?**

    ```js
    let phrase = "freeCodeCamp is awesome!";
    let updatedPhrase = phrase.replace("freecodecamp", "fCC");
    
    console.log(updatedPhrase);
    ```

    - [ ] a) `fcc is awesome!"`
    - [ ] b) `"fCC is awesome!"`
    - [x] c) `"freeCodeCamp is awesome!"` //correcto
    - [ ] d) `undefined`

3. **¿Qué resultado dará el siguiente código?**

    ```js
    let phrase = "Good morning, morning people!";
    let updatedPhrase = phrase.replace("morning", "evening");
    
    console.log(updatedPhrase);
    ```

    - [ ] a) `"Good morning, evening people!""Code"`
    - [x] b) `"Good evening, morning people!"` //correcto
    - [ ] c) `"Good evening, evening people!"`
    - [ ] d) `"Good morning, morning people!"`

[☝️](#trabajar-con-métodos-de-modificación-de-strings)

---

## Tema 2: ¿Cómo se puede repetir un string x veces?

Al trabajar con JavaScript, es posible que te encuentres con situaciones en las que necesites repetir un string un número específico de veces.

Ya sea que estés generando patrones repetitivos o simplemente duplicando texto, el método `repeat()` ofrece una forma sencilla y eficaz de lograrlo.

El método `repeat()` es una función integrada en JavaScript que te permite repetir un string un número determinado de veces. Esta es la sintaxis básica:

- **Example code**

  ```js
  string.repeat(count);
  ```

`string` es el string que quieres repetir, y `count` es el número de veces que quieres que se repita el string. Aquí tienes un ejemplo:

- **Example code**

  ```js
  let word = "Hello!";
  let repeatedWord = word.repeat(3);
  console.log(repeatedWord);  // "Hello!Hello!Hello!"
  ```

En este caso, la cadena `Hello!` se repite tres veces, lo que da como resultado `Hello!Hello!Hello!`.

Aunque el método `repeat()` es útil, hay algunas excepciones y limitaciones que debes tener en cuenta.

El parámetro `count` debe ser un número no negativo. Si pasas un número negativo, JavaScript generará un error `RangeError`.

- **Example code**

  ```js
  let word = "Test";
  console.log(word.repeat(-1));  // Throws RangeError: Invalid count value
  ```

El `count` debe ser un número finito. Si intentas repetir una cadena un número infinito de veces o utilizas `Infinity` como recuento, también obtendrás un error `RangeError`.

En JavaScript, `Infinity` es un valor especial que representa una cantidad infinita. Se utiliza para denotar números que son mayores que cualquier número finito.

- **Example code**

  ```js
  let word = "Test";
  console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value
  ```

Si el recuento no es un número entero (por ejemplo, un decimal como `2,5`), el método `repeat()` lo redondeará hacia abajo al entero más cercano.

- **Example code**

  ```js
  let word = "Test";
  console.log(word.repeat(2.5));  // "TestTest"
  ```

Si pasas `0` como recuento, el método repeat() devolverá un `string` vacía.

- **Example code**

  ```js
  let word = "Test";
  console.log(word.repeat(0));  // ""
  ```

El método `repeat()` puede simplificar las tareas que implican la duplicación de strings, lo que hace que tu código sea más conciso y legible.

Ya sea que estés generando patrones de texto repetidos o llenando un espacio con caracteres, `repeat()` te puede ahorrar tener que escribir bucles o código más complejo.

No estás limitado a pasar un número directamente al método `repeat()`. También puedes pasar una variable que almacene un valor numérico.

- **Example code**

  ```js
  let count = 4;
  let word = "Test";
  let repeatedWord = word.repeat(count);
  console.log(repeatedWord); // TestTestTestTest
  ```

En este ejemplo, la variable `count` almacena el número de repeticiones. Esto puede resultar útil cuando el número de repeticiones depende de la entrada del usuario o de otros valores dinámicos del programa.

---

## Cuestionario 2

1. **¿Cuál es el resultado de ejecutar `"Hello".repeat(3);` en JavaScript?**

    - [x] a) `"HelloHelloHello"` //correcto
    - [ ] b) `"Hello Hello Hello"`
    - [ ] c) `"Hello!"`
    - [ ] d) `"HelloHello"`

2. **¿Qué sucede si intentas llamar a `repeat()` con un número negativo?**

    - [ ] a) La cadena se repite una vez.
    - [ ] b) La cadena se repite tantas veces como sea el valor absoluto del número negativo.
    - [x] c) Se genera un error `RangeError`. //correcto
    - [ ] d) Se devuelve una cadena vacía.

3. **Si llamas a `"*".repeat(0)`, ¿cuál es el resultado?**

    - [ ] a) `"*"`
    - [x] b) `""` //correcto
    - [ ] c) `null`
    - [ ] d) `"*****"`

[☝️](#trabajar-con-métodos-de-modificación-de-strings)

---
