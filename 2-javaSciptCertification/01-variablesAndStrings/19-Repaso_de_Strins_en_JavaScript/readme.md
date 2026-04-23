# Repaso de Strins en JavaScript

## Navegación

- [Repaso de Strins en JavaScript](#repaso-de-strins-en-javascript)
  - [Navegación](#navegación)
  - [Tema 1: Conceptos básicos sobre strings](#tema-1-conceptos-básicos-sobre-strings)
  - [Tema 2: Literales de plantilla (strings de plantilla) e interpolación de strings](#tema-2-literales-de-plantilla-strings-de-plantilla-e-interpolación-de-strings)
  - [Tema 3: ASCII, el método `charCodeAt()` y el método `fromCharCode()`](#tema-3-ascii-el-método-charcodeat-y-el-método-fromcharcode)
  - [Tema 4: Otros métodos comunes de Strings](#tema-4-otros-métodos-comunes-de-strings)

---

En esta sección, repasaremos algunos conceptos básicos sobre las cadenas de texto (strings) en JavaScript. Las cadenas de texto son una secuencia de caracteres que se utilizan para representar texto en un programa. En JavaScript, las cadenas de texto se pueden crear utilizando comillas simples (' '), comillas dobles (" ") o backticks (` `).

---

## Tema 1: Conceptos básicos sobre strings

- **Definición**: Un string es una secuencia de caracteres entre comillas simples, comillas dobles o comillas invertidas. Los strings son tipos de datos primitivos y son inmutables. La inmutabilidad significa que, una vez creada un string, no se puede modificar.

- **Acceso a los caracteres de un string**: Para acceder a un carácter de un string, puedes usar la notación entre corchetes y pasar el número de índice. Un índice es la posición de un carácter dentro de un string, y se cuenta a partir de cero.

- **Example code**

  ```js
  const developer = "Jessica";
  console.log(developer[0]); // J
  ```

- **`\n` (Carácter de salto de línea)**: Puedes crear un salto de línea en un string utilizando el carácter de salto de línea `\n`.

- **Example code**

  ```js
  const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
  console.log(poem);
  ```

- **Caracteres de escape en strings**: Puedes convertir los caracteres de un string en caracteres de escape colocando barras invertidas (`\`) delante de las comillas.

- **Example code**

  ```js
  const statement = "She said, \"Hello!\"";
  console.log(statement); // She said, "Hello!"
  ```

---

## Tema 2: Literales de plantilla (strings de plantilla) e interpolación de strings

- **Definición**: Los literales de plantilla se definen con comillas invertidas (`). Permiten manipular strings más fácilmente, incluyendo la inserción directa de variables dentro de una string, una característica conocida como interpolación de strings.

- **Example code**

  ```js
  const name = "Jessica";
  const greeting = `Hello, ${name}!`; 
  console.log(greeting); // "Hello, Jessica!"
  ```

---

## Tema 3: ASCII, el método `charCodeAt()` y el método `fromCharCode()`

- **ASCII**: ASCII (Código Estándar Americano para el Intercambio de Información) es un estándar de codificación de caracteres que se utiliza para representar caracteres básicos del inglés mediante valores numéricos. En lecciones anteriores se presentan los métodos `charCodeAt()` y `fromCharCode()` con ejemplos basados en ASCII.

- **Unicode**: Los strings de JavaScript utilizan Unicode internamente, concretamente la codificación UTF-16. Para los primeros 128 caracteres (letras latinas básicas, dígitos y símbolos comunes), los valores Unicode coinciden con los códigos ASCII. Por eso los ejemplos basados en ASCII siguen funcionando en JavaScript.

- **El método `charCodeAt()`**: Este método devuelve la unidad de código UTF-16 del carácter en un índice especificado. Para los caracteres latinos básicos, este valor coincide con el código ASCII.

- **Example code**

  ```js
  const letter = "A";
  console.log(letter.charCodeAt(0));  // 65
  ```

- **El método `fromCharCode()`**: Este método convierte un código ASCII en su carácter correspondiente.

- **Example code**

  ```js
  const char = String.fromCharCode(65);
  console.log(char);  // A
  ```

---

## Tema 4: Otros métodos comunes de Strings

- **El método `indexOf`**: Este método se utiliza para buscar un subString dentro de un String. Si se encuentra la subString, `indexOf` devuelve el índice (o posición) de la primera aparición de dicha subString. Si no se encuentra la subString, `indexOf` devuelve -1, lo que indica que la búsqueda no tuvo éxito.

- **Example code**

  ```js
  const text = "The quick brown fox jumps over the lazy dog.";
  console.log(text.indexOf("fox")); // 16
  console.log(text.indexOf("cat")); // -1
  ```

- **El método `includes()`**: Este método se utiliza para comprobar si un String contiene un subString específico. Si el subString se encuentra dentro del String, el método devuelve true. De lo contrario, devuelve false.

- **Example code**

  ```js
  const text = "The quick brown fox jumps over the lazy dog.";
  console.log(text.includes("fox")); // true
  console.log(text.includes("cat")); // false
  ```

- **El método `slice()`**: Este método extrae una parte de un string y devuelve un nuevo string, sin modificar el string original. Toma dos parámetros: el índice inicial y el índice final (opcional).

- **Example code**

  ```js
  const text = "freeCodeCamp";
  console.log(text.slice(0, 4));  // "free"
  console.log(text.slice(4, 8));  // "Code"
  console.log(text.slice(8, 12)); // "Camp"
  ```

- **El método `toUpperCase()`**: Este método convierte todos los caracteres a mayúsculas y devuelve una nueva cadena con todos los caracteres en mayúsculas.

- **Example code**

  ```js
  const text = "Hello, world!";
  console.log(text.toUpperCase()); // "HELLO, WORLD!"
  ```

- El método toLowerCase(): Este método convierte todos los caracteres de un string a minúsculas.

- **Example code**

  ```js
  const text = "HELLO, WORLD!"
  console.log(text.toLowerCase()); // "hello, world!"
  ```

- **El método `replace()`**: Este método te permite buscar un valor específico (como una palabra o un carácter) en un string y sustituirlo por otro valor. El método devuelve un nuevo string con la sustitución y deja la original sin cambios, ya que los strings de JavaScript son inmutables.

- **Example code**

  ```js
  const text = "I like cats";
  console.log(text.replace("cats", "dogs")); // "I like dogs"
  ```

- **El método `replaceAll()`**: Este método permite buscar todas las apariciones de un valor específico (una palabra, un carácter o un patrón) en un string y sustituirlas por otro valor. Funciona igual que `replace()`, pero en lugar de detenerse tras la primera coincidencia, actualiza todas las coincidencias que encuentre en el string.

- **Example code**

  ```js
  const text = "I love cats and cats are so much fun!";
  console.log(text.replaceAll("cats", "dogs")); // "I love dogs and dogs are so much fun!"
  ```

- **El método `repeat()`**: Este método se utiliza para repetir un string un número determinado de veces.

- **Example code**

  ```js
  const text = "Hello";
  console.log(text.repeat(3)); // "HelloHelloHello"
  ```

- **El método `trim()`**: Este método se utiliza para eliminar los espacios en blanco tanto al principio como al final de un string.

- **Example code**

  ```js
  const text = "  Hello, world!  ";
  console.log(text.trim()); // "Hello, world!"
  ```

- **El método `trimStart()`**: Este método elimina los espacios en blanco del principio (o "inicio") del string.

- **Example code**

  ```js
  const text = "  Hello, world!  ";
  console.log(text.trimStart()); // "Hello, world!  "
  ```

- **El método `trimEnd()`**: Este método elimina los espacios en blanco del final del string.

- **Example code**

  ```js
  const text = " Hello, world! ";
  console.log(text.trimEnd()); // "  Hello, world!"
  ```

- **El método `prompt()`**: Este método del `window` se utiliza para obtener información del usuario a través de un cuadro de diálogo. Este método toma dos argumentos. El primer argumento es el mensaje que aparecerá dentro del cuadro de diálogo, que normalmente solicita al usuario que introduzca información. El segundo es un valor predeterminado, que es opcional y que rellenará inicialmente el campo de entrada.

- **Example code**

  ```js
  const answer = window.prompt("What's your favorite animal?"); // This will change depending on what the user answers
  ```

---
