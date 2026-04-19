# Trabajar con stings en JavaScript

## Navegación

- [Trabajar con stings en JavaScript](#trabajar-con-stings-en-javascript)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué es la notación entre corchetes y cómo se accede a los caracteres de un String?](#tema-1-qué-es-la-notación-entre-corchetes-y-cómo-se-accede-a-los-caracteres-de-un-string)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Cómo se crea un salto de línea en un Strings y se escapan caracteres?](#tema-2-cómo-se-crea-un-salto-de-línea-en-un-strings-y-se-escapan-caracteres)
  - [Cuestionario 2](#cuestionario-2)
  - [Tema 3: ¿Qué son los literales de plantilla y qué es la interpolación de Strings?](#tema-3-qué-son-los-literales-de-plantilla-y-qué-es-la-interpolación-de-strings)
  - [Cuestionario 3](#cuestionario-3)
  - [Tema 4: ¿Cómo se puede encontrar la posición de una subString dentro de una String?](#tema-4-cómo-se-puede-encontrar-la-posición-de-una-substring-dentro-de-una-string)
  - [Cuestionario 4](#cuestionario-4)
  - [Tema 5: ¿Qué es el método `prompt()` y cómo funciona?](#tema-5-qué-es-el-método-prompt-y-cómo-funciona)
  - [Cuestionario 5](#cuestionario-5)

---

En esta sección, aprenderás a trabajar con strings en JavaScript. Un string es una secuencia de caracteres que se utiliza para representar texto. En JavaScript, los strings se pueden crear utilizando comillas simples (' '), comillas dobles (" ") o backticks (` `).

---

## Tema 1: ¿Qué es la notación entre corchetes y cómo se accede a los caracteres de un String?

En JavaScript, los Strings se tratan como secuencias de caracteres, y se puede acceder a cada carácter de un String mediante la notación entre corchetes. Esto te permite recuperar un carácter específico de un String en función de su posición, lo que se denomina su índice.

Un índice es la posición de un carácter dentro de un String, y se cuenta a partir de cero. Esto significa que el primer carácter de una String tiene un índice de `0`, el segundo carácter tiene un índice de `1`, y así sucesivamente.

Por ejemplo, en el String `hello`, el carácter `h` está en el índice `0`, `e` está en el índice `1`, `l` está en el índice `2`, y así sucesivamente.

La notación entre corchetes utiliza corchetes (`[]`) y el índice del carácter al que se desea acceder. Veamos un ejemplo:

- **Example code**

  ```js
  let greeting = "hello";
  console.log(greeting[1]); // "e"
  ```

En este ejemplo, podemos acceder al carácter en el índice `1`, que es la letra `e`.

Para obtener el último carácter de un String, puedes usar la longitud del String menos uno. La propiedad `length` de un String indica cuántos caracteres contiene, por lo que, para acceder al último carácter, debes restar uno de la longitud:

- **Example code**

  ```js
  let greeting = "hello";
  console.log(greeting[greeting.length - 1]); // "o"
  ```

En este caso, la `length` de `hello` es `5`, y el último carácter (`o`) se encuentra en el índice `4`, que es `5 - 1`.

Si quieres obtener varios caracteres, puedes usar la notación entre corchetes de esta manera:

- **Example code**

  ```js
  let greeting = "hello";
  let firstTwo = greeting[0] + greeting[1]; // "he"
  console.log(firstTwo);
  ```

En este ejemplo, estamos concatenando el primer y el segundo carácter mediante la notación entre corchetes para formar la cadena `he`.

La notación entre corchetes resulta útil cuando necesitas acceder a caracteres específicos de una cadena, como por ejemplo para extraer las iniciales de un nombre o comprobar una letra concreta con fines de validación.

---

## Cuestionario 1

1. **¿Cuál es el índice de la letra `"r"` en la cadena `"JavaScript"`?**

    - [ ] a) `2`
    - [ ] b) `4`
    - [x] c) `6` //correcto
    - [ ] d) `8`

2. **¿Cómo se accede al último carácter de una cadena utilizando la notación entre corchetes?**

    - [ ] a) `string[length]`
    - [ ] b) `string[string.length]`
    - [x] c) `string[string.length - 1]` //correcto
    - [ ] d) `string[string - 1]`

3. **¿Qué te permite hacer la notación entre corchetes con las cadenas en JavaScript?**

    - [ ] a) Añadir nuevos caracteres a la cadena.
    - [ ] b) Cambiar el tipo de datos de la cadena.
    - [x] c) Acceder a caracteres específicos de la cadena utilizando su índice. //correcto
    - [ ] d) Convertir la cadena en una matriz de caracteres.

[☝️](#trabajar-con-stings-en-javascript)

---

## Tema 2: ¿Cómo se crea un salto de línea en un Strings y se escapan caracteres?

Al trabajar con Strings en JavaScript, hay ocasiones en las que es necesario incluir caracteres especiales que, de lo contrario, el motor de JavaScript podría malinterpretar.

Dos tareas comunes consisten en crear un salto de línea dentro de una String y escapar ciertos caracteres (como las comillas) para asegurarse de que aparezcan correctamente.

En muchos lenguajes de programación, incluido JavaScript, se puede crear un salto de línea en una String utilizando un carácter especial llamado secuencia de escape. La secuencia de escape más común para los saltos de línea es `\n`.

Por ejemplo, si quieres dividir una String en varias líneas, usarías `\n` donde quieras que comience la nueva línea:

- **Example code**

  ```js
  let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
  console.log(poem);
  ```

La secuencia de escape `\n` le indica a JavaScript que inserte un salto de línea en ese punto, lo que hace que la String se muestre en varias líneas.

Otro concepto importante al trabajar con Strings es el escape de caracteres. A veces, necesitas incluir en tu String caracteres que JavaScript suele utilizar para otros fines, como las comillas.

Si simplemente usas comillas dentro de una String sin escapar, puede causar un error porque JavaScript pensará que estás intentando terminar la String.

Por ejemplo, esto causará un error:

- **Example code**

  ```js
  let statement = "She said, "Hello!"";
  ```

JavaScript se confunde porque cree que el String termina después de la palabra `"said"`, pero tú quieres que las comillas que rodean `"Hello!"` formen parte del String.

Para solucionar esto, puedes escapar las comillas internas colocando una barra invertida (`\`) delante de ellas:

- **Example code**

  ```js
  let statement = "She said, \"Hello!\"";
  console.log(statement); // She said, "Hello!"
  ```

La barra invertida le indica a JavaScript que trate las comillas como caracteres literales, para que aparezcan correctamente en el resultado.

También puedes escapar otros caracteres especiales, como la propia barra invertida (`\\`) o las comillas simples dentro de una cadena rodeada de comillas simples (`\'`).

Aquí tienes otro ejemplo con comillas simples:

- **Example code**

  ```js
  let quote = 'It\'s a beautiful day!';
  console.log(quote); // It's a beautiful day!
  ```

Al escapar la comilla simple con `\'`, JavaScript sabe que debe incluirla como parte de la String en lugar de terminar la String antes de tiempo.

El escape y la creación de saltos de línea son esenciales a la hora de dar formato a la salida o manejar caracteres especiales en Strings. Estas técnicas te ayudan a evitar errores y garantizan que tu texto se muestre exactamente como esperabas.

---

## Cuestionario 2

1. **¿Cuál de las siguientes secuencias de escape usarías para crear una nueva línea en un String?**

    - [ ] a) `\\`
    - [ ] b) `\t`
    - [x] c) `\n` //correcto
    - [ ] d) `/"`

2. **¿Por qué es necesario escapar ciertos caracteres dentro de una String?**

    - [ ] a) Para realizar operaciones matemáticas con la String.
    - [x] b) Para evitar errores de sintaxis y garantizar que los caracteres especiales se incluyan en la String.
    - [ ] c) Para combinar dos Strings diferentes en una sola.
    - [ ] d) Para convertir la String a mayúsculas.

3. **¿Cómo se pueden incluir correctamente comillas simples dentro de una String que ya está entre comillas simples?**

    - [ ] a) Usa comillas simples dentro de comillas dobles.
    - [x] b) Usa el carácter `\` antes de las comillas que quieras incluir. //correcto
    - [ ] c) Usa `\n` para dividir la String.
    - [ ] d) JavaScript no permite comillas dentro de otras comillas.

[☝️](#trabajar-con-stings-en-javascript)

---

## Tema 3: ¿Qué son los literales de plantilla y qué es la interpolación de Strings?

En JavaScript, los literales de plantilla son una forma potente y flexible de trabajar con Strings. A diferencia de las Strings normales, que utilizan comillas simples (`'`) o dobles (`"`), los literales de plantilla se definen con comillas invertidas (```).

Permiten manipular Strings más fácilmente, incluyendo la incorporación de variables directamente dentro de una String, una característica conocida como interpolación de Strings.

Los literales de plantilla facilitan la creación de Strings que abarcan varias líneas o incluyen expresiones (como variables o incluso código JavaScript) directamente dentro de la String.

Aquí hay un ejemplo de un literal de plantilla:

- **Example code**

  ```js
  const name = "Alice";
  const greeting = `Hello, ${name}!`;
  
  console.log(greeting);
  ```

Fíjate en el uso de comillas invertidas en lugar de comillas simples o dobles. La sintaxis `${name}` es un ejemplo de interpolación de Strings, en la que el valor de la variable `name` se inserta directamente en la String.

La interpolación de Strings te permite incrustar variables y expresiones dentro de una String. Esto supone una mejora significativa con respecto al método anterior, en el que se concatenaban Strings y variables utilizando el operador `+`.

Aquí tienes un ejemplo que utiliza la concatenación de Strings y el operador más (`+`):

- **Example code**

  ```js
  const name = "Alice";
  const age = 25;
  const message = "My name is " + name + " and I am " + age + " years old.";
  console.log(message); 
  ```

Y aquí hay un ejemplo en el que se utilizan literales de plantilla e interpolación de Strings:

- **Example code**

  ```js
  const name = "Alice";
  const age = 25;
  const message = `My name is ${name} and I am ${age} years old.`;
  console.log(message); 
  ```

Como puedes ver, la interpolación de Strings con literales de plantilla es mucho más clara y fácil de leer, especialmente cuando trabajas con varias variables.

Otra gran ventaja de los literales de plantilla es que admiten Strings de varias líneas. Con las Strings normales, tendrías que usar caracteres de escape (\n) para crear nuevas líneas. Con los literales de plantilla, basta con escribir la String en varias líneas y el formato se conserva:

- **Example code**

  ```js
  let poem = `Roses are red,
  Violets are blue,
  JavaScript is fun,
  And so are you.`;
  
  console.log(poem);
  ```

Otra característica de los literales de plantilla es que permiten incrustar expresiones JavaScript directamente dentro de la String, como en este ejemplo:

- **Example code**

  ```js
  const song = "Bohemian Rhapsody";
  const score = 9.5;
  const highestScore = 10;
  const output = `One of my favorite songs is "${song}". I rated it ${
    (score / highestScore) * 100
  }%.`;
  console.log(output); 
  ```

Los literales de plantilla resultan especialmente útiles cuando necesitas incluir variables o expresiones en Strings, dar formato a Strings complejas o trabajar con texto de varias líneas. Son más concisos y legibles en comparación con la concatenación tradicional de Strings.

---

## Cuestionario 3

1. **¿Cuál de los siguientes símbolos se utiliza para definir un literal de plantilla?**

    - [ ] a) Comillas simples (`'`)
    - [ ] b) Comillas dobles (`"`)
    - [x] c) Comillas invertidas (```) //correcto
    - [ ] d) Corchetes (`[]`)

2. **¿Para qué se utiliza la interpolación de Strings en los literales de plantilla?**

    - [ ] a) Para combinar varias Strings sin variables.
    - [x] b) Para insertar variables y expresiones directamente en una String. //correcto
    - [ ] c) Para convertir una String en un número.
    - [ ] d) Para crear funciones que manipulen Strings.

3. **¿Cuál de las siguientes características de los literales de plantilla los hace más adecuados para escribir Strings de varias líneas en comparación con las Strings normales?**

    - [ ] a) Los literales de plantilla convierten automáticamente todas las letras a mayúsculas.
    - [x] b) Los literales de plantilla conservan los saltos de línea sin necesidad de caracteres de escape. //correcto
    - [ ] c) Los literales de plantilla permiten realizar operaciones matemáticas con Strings.
    - [ ] d) Los literales de plantilla requieren menos memoria para almacenar Strings.

[☝️](#trabajar-con-stings-en-javascript)

---

## Tema 4: ¿Cómo se puede encontrar la posición de una subString dentro de una String?

Al trabajar con Strings en JavaScript, puede haber ocasiones en las que necesites localizar la posición de una subString específica dentro de una String más grande.

Una subString es una secuencia de caracteres que aparece dentro de una String más grande. Por ejemplo, en la String `hello world`, `hello` y `world` son subStrings.

Para localizar la posición de una subString dentro de una String, puedes utilizar el método `indexOf()`. El método `indexOf()` en JavaScript te permite buscar una subString dentro de una String.

Si se encuentra la subString, `indexOf()` devuelve el índice (o posición) de la primera aparición de esa subString. Si no se encuentra la subString, `indexOf()` devuelve `-1`, lo que indica que la búsqueda no tuvo éxito.

El método `indexOf()` toma dos argumentos: el primero es la subString que quieres encontrar dentro de la String más grande, y el segundo es una posición inicial opcional para la búsqueda. Si no proporcionas una posición inicial, la búsqueda comenzará al inicio de la String.

En este contexto, un argumento es un valor que le das a una función o método cuando lo llamas, lo que permite que esa función o método realice su tarea utilizando la información específica que proporcionas. Aprenderás más sobre los argumentos en lecciones futuras.

Aquí hay un ejemplo del uso del método `indexOf()` para encontrar la posición de la String `awesome`:

- **Example code**

  ```js
  let sentence = "JavaScript is awesome!";
  let position = sentence.indexOf("awesome!");
  console.log(position); // 14
  ```

En este ejemplo, la palabra `awesome` comienza en el índice `14` del String `JavaScript is awesome!`, por lo que el método `indexOf()` devuelve `14`.

Ahora, veamos qué sucede cuando no se encuentra la subString:

- **Example code**

  ```js
  let sentence = "JavaScript is awesome!";
  let position = sentence.indexOf("fantastic");
  console.log(position); // -1
  ```

Dado que la palabra `fantastic` no aparece en el String, el método devuelve `-1`.

También puedes especificar dónde comenzar la búsqueda dentro del String proporcionando un segundo argumento a `indexOf()`. A continuación, te mostramos un ejemplo:

- **Example code**

  ```js
  let sentence = "JavaScript is awesome, and JavaScript is powerful!";
  let position = sentence.indexOf("JavaScript", 10);
  console.log(position); // 27
  ```

En este caso, la búsqueda de `JavaScript` comienza a partir del décimo carácter, por lo que la segunda aparición de `JavaScript` se encuentra en el índice `27`.

Es importante tener en cuenta que el método `indexOf()` distingue entre mayúsculas y minúsculas.

En este ejemplo, lo siguiente devolvería `-1` porque la letra `F` mayúscula no se encuentra en el String `freeCodeCamp`.

- **Example code**

  ```js
  console.log("freeCodeCamp".indexOf("F")) // -1
  ```

El uso de `indexOf()` puede resultar muy útil cuando necesitas comprobar si una subString está presente en una String y determinar su posición para realizar operaciones posteriores.

---

## Cuestionario 4

1. **¿Qué devuelve el método `indexOf` si el subString no se encuentra en el String?**

    - [ ] a) 0
    - [ ] b) La longitud de la cadena.
    - [x] c) -1 //correcto
    - [ ] d) La posición del primer carácter.

2. **¿Cómo se puede utilizar `indexOf` para buscar una subString que comience en una posición específica dentro de la String?**

    - [ ] a) Utilizando el primer argumento para especificar la posición inicial.
    - [x] b) Utilizando el segundo argumento para especificar la posición inicial. //correcto
    - [ ] c) Utilizando un método adicional.
    - [ ] d) Modificando primero la String.

3. **¿Qué valor devolverá `indexOf()` en este ejemplo?**

    ```js
    const str = "I am learning JavaScript.";
    str.indexOf("Javascript");
    ```

    - [ ] a) 14
    - [ ] b) 2
    - [x] c) -1 //correcto
    - [ ] d) 13

[☝️](#trabajar-con-stings-en-javascript)

---

## Tema 5: ¿Qué es el método `prompt()` y cómo funciona?

El método `prompt()` es una parte importante de la interacción de JavaScript con el usuario. Es una de las formas más sencillas de obtener información del usuario a través de un pequeño cuadro de diálogo emergente.

A menudo lo verás utilizado en casos en los que la página web necesita un dato del usuario, como un nombre o cualquier otro tipo de entrada de texto.

Entonces, ¿qué hace exactamente el método `prompt()`? Abre un cuadro de diálogo que solicita al usuario que introduzca algo y, a continuación, devuelve el texto introducido por el usuario como un string.

El método `prompt()` toma dos argumentos: el primero es el mensaje que aparecerá dentro del cuadro de diálogo, normalmente solicitando al usuario que introduzca información. Y el segundo es un valor predeterminado que es opcional y que rellenará el campo de entrada inicialmente.

- **Example code**

  ```js
  prompt(message, default);
  ```

Aquí tienes un ejemplo de cómo funciona.

> [!NOTE]
> Este ejemplo incluye código que aún no has aprendido. No te preocupes por intentar entender todo lo que hay en el código. Solo sirve para ilustrar cómo funciona el método `prompt()` y garantizar que el mensaje no aparezca inmediatamente al cargar la página, lo cual podría resultar molesto.

- **Example code**

  ```html
  <button id="prompt-btn">Show Prompt</button>
  <p id="output"></p>
  <script src="index.js"></script>
  ```

  ```js
  const btn = document.getElementById("prompt-btn");
  const output = document.getElementById("output");
  btn.addEventListener("click", () => {
    const userName = prompt("What is your name?", "Guest");
    output.textContent = "Hello, " + userName + "!";
  });
  ```

En este ejemplo, cuando el usuario hace clic en el botón, el método `prompt()` muestra un cuadro de diálogo con el mensaje `What is your name?` y un campo de entrada que inicialmente contiene el valor `Guest`.

Si el usuario escribe su nombre y pulsa "Ok", la variable `userName` almacenará el valor introducido. Si el usuario pulsa "Cancel", la variable `userName` se establecerá en `null`. El valor `null` indica que el usuario no ha introducido ningún dato. El párrafo de salida mostrará entonces un mensaje de saludo utilizando el nombre proporcionado o `null` si el usuario canceló. En lecciones futuras aprenderás técnicas para evitar mostrar `null` cuando un usuario cancele el mensaje.

Ten en cuenta que el método `prompt()` detendrá la ejecución del script hasta que el usuario interactúe con el cuadro de diálogo.

Esto significa que el resto de tu código JavaScript no se ejecutará hasta que el usuario proporcione una entrada y haga clic en "Ok", o cancele el mensaje.

Otro punto a tener en cuenta es que, si bien `prompt()` es útil para pruebas rápidas o aplicaciones pequeñas, generalmente se evita en aplicaciones web modernas y complejas debido a su naturaleza disruptiva y a su comportamiento inconsistente en diferentes navegadores.

Al comprender el método `prompt()`, obtienes una forma sencilla de interactuar con los usuarios y recuperar información directamente a través del navegador, aunque tal vez no se utilice ampliamente en aplicaciones web modernas.

---

## Cuestionario 5

1. **¿Qué hace el método `prompt()` en JavaScript?**

    - [x] a) Muestra una ventana emergente en la que se solicita una entrada del usuario y devuelve dicha entrada como un string. //correcto
    - [ ] b) Registra un mensaje en la consola.
    - [ ] c) Abre una nueva ventana del navegador.
    - [ ] d) Detiene la ejecución del script.

2. **¿Qué sucede si el usuario cancela el cuadro de diálogo de solicitud?**

    - [ ] a) El script se interrumpe.
    - [x] b) El método `prompt` devuelve `null`. //correcto
    - [ ] c) El método `prompt` devuelve una cadena vacía.
    - [ ] d) El script continúa con el valor predeterminado.

3. **¿Para qué sirve el segundo argumento opcional del método `prompt()`?**

    - [ ] a) Especificar el texto del botón de cancelación.
    - [x] b) Establecer un valor predeterminado en el campo de entrada. //correcto
    - [ ] c) Establecer un límite de tiempo para la entrada.
    - [ ] d) Cambiar el color del cuadro de diálogo.

[☝️](#trabajar-con-stings-en-javascript)

---
