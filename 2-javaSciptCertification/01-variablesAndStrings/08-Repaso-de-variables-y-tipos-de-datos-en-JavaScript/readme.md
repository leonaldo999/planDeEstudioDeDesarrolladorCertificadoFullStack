# Repaso de variables y tipos de datos en JavaScript

## Navegación

- [Repaso de variables y tipos de datos en JavaScript](#repaso-de-variables-y-tipos-de-datos-en-javascript)
  - [Navegación](#navegación)
  - [Tema1: Trabajar con HTML, CSS y JavaScript](#tema1-trabajar-con-html-css-y-javascript)
  - [Tema2: Tipos de datos en JavaScript](#tema2-tipos-de-datos-en-javascript)
  - [Tema3: Variables en JavaScript](#tema3-variables-en-javascript)
  - [Tema4: Convenciones para nombrar variables](#tema4-convenciones-para-nombrar-variables)
  - [Tema5: Los `Stings` y la inmutabilidad de los `Stings` en JavaScript](#tema5-los-stings-y-la-inmutabilidad-de-los-stings-en-javascript)
  - [Tema6: Concatenación de string en JavaScript](#tema6-concatenación-de-string-en-javascript)
  - [Tema7: Registro de mensajes con `console.log()`](#tema7-registro-de-mensajes-con-consolelog)
  - [Los puntos y comas en JavaScript](#los-puntos-y-comas-en-javascript)
  - [Tema9: Comentarios en JavaScript](#tema9-comentarios-en-javascript)
  - [Tema10: JavaScript como lenguaje de tipado dinámico](#tema10-javascript-como-lenguaje-de-tipado-dinámico)
  - [Tema11: Uso del operador `typeof`](#tema11-uso-del-operador-typeof)

---

En esta sección, repasaremos los conceptos básicos de las variables y los tipos de datos en JavaScript, que son fundamentales para cualquier programador que quiera trabajar con este lenguaje.

## Tema1: Trabajar con HTML, CSS y JavaScript

Mientras que HTML y CSS proporcionan la estructura de un sitio web, JavaScript aporta interactividad a los sitios web al permitir funcionalidades complejas, como gestionar la entrada de datos del usuario, animar elementos e incluso crear aplicaciones web completas.

---

## Tema2: Tipos de datos en JavaScript

Los tipos de datos ayudan al programa a identificar el tipo de datos con los que está trabajando, ya sea un número, texto u otro tipo de dato.

- **Número**: Un número representa tanto valores enteros como de punto flotante. Algunos ejemplos de números enteros son 7, 19 y 90.

- **Punto flotante**: Un número de punto flotante es un número con un punto decimal. Algunos ejemplos son 3,14, 0,5 y 0,0001.

- **Cadena**: Una cadena es una secuencia de caracteres, o texto, entre comillas. `"Me gusta programar"` y `"JavaScript es divertido"` son ejemplos de cadenas.

- **Booleano**: Un booleano representa uno de dos valores posibles: `verdadero` o `falso`. Puedes usar un booleano para representar una condición, como `isLoggedIn = true`.

- **`Underfined` y `null`**: Un valor `Underfined` es una variable que se ha declarado pero a la que no se le ha asignado un valor. Un valor `null` es un valor vacío, o una variable a la que se le ha asignado intencionalmente un valor `null`.

- **Objeto**: Un objeto es una colección de pares clave-valor. La clave es el nombre de la propiedad, y el valor es el valor de la propiedad.

En este caso, el objeto `pet` tiene tres propiedades o claves: `nombre`, `edad` y `tipo`. Los valores son `Fluffy`, `3` y `perro`, respectivamente.

- **Example code**

  ```js
  let pet = {
    name: "Fluffy",
    age: 3,
    type: "dog"
  };
  ```

- **Symbol**: El tipo de datos **Symbol** es un valor único e inmutable que puede utilizarse como identificador de las propiedades de un objeto.

En el siguiente ejemplo, se crean dos símbolos con la misma descripción, pero no son iguales.

- **Example code**

  ```js
  const crypticKey1= Symbol("saltNpepper");
  const crypticKey2= Symbol("saltNpepper");
  console.log(crypticKey1 === crypticKey2); // false
  ```

- `BigInt`: Cuando el número es demasiado grande para el tipo de datos Number, puedes utilizar el tipo de datos `BigInt` para representar números enteros de longitud arbitraria.

Para crear un `BigInt`, basta con añadir una `n` al final del número.

- **Example code**

  ```js
  const veryBigNumber = 1234567890123456789012345678901234567890n;
  ```

---

## Tema3: Variables en JavaScript

- Las variables se pueden declarar utilizando la palabra clave `let`.

- **Example code**

  ```js
  let cityName;
  ```

- Para asignar un valor a una variable, puedes usar el operador de asignación =.

- **Example code**

  ```js
  cityName = "New York";
  ```

- A las variables declaradas con `let` se les puede asignar un nuevo valor.

- **Example code**

  ```js
  let cityName = "New York";
  cityName = "Los Angeles";
  console.log(cityName); // Los Angeles
  ```

- Además de `let`, también puedes usar `const` para declarar una variable. Sin embargo, a una variable `const` no se le puede asignar un nuevo valor.

- **Example code**

  ```js
  const cityName = "New York";
  cityName = "Los Angeles"; // TypeError: Assignment to constant variable.
  ```

- Las variables declaradas con `const` se utilizan para declarar constantes que no pueden modificarse en ningún punto del código, como `PI` o `MAX_SIZE`.

---

## Tema4: Convenciones para nombrar variables

- Los nombres de las variables deben ser descriptivos y significativos.

- Los nombres de las variables deben seguir el formato camelCase, como `cityName`, `isLoggedIn` y `veryBigNumber`.

- Los nombres de las variables no deben comenzar con un número. Deben comenzar con una letra, `_` o `$`.

- Los nombres de las variables no deben contener espacios ni caracteres especiales, excepto `_` y `$`.

- Los nombres de las variables no deben ser palabras clave reservadas.

- Los nombres de las variables distinguen entre mayúsculas y minúsculas. `age` y `Age` son variables diferentes.

---

## Tema5: Los `Stings` y la inmutabilidad de los `Stings` en JavaScript

- Los `Stings` son secuencias de caracteres entre comillas. Se pueden crear utilizando comillas simples o dobles.

- **Example code**

  ```js
  let correctWay = 'This is a string';
  let alsoCorrect = "This is also a string";
  ```

- Los `Stings` son inmutables en JavaScript. Esto significa que, una vez creada una cadena, no se pueden modificar los caracteres que contiene. Sin embargo, sí se puede reasignar un nuevo valor a la cadena.

- **Example code**

  ```js
  let firstName = "John";
  firstName = "Jane"; // Reassigning the string to a new value
  ```

---

## Tema6: Concatenación de string en JavaScript

- La concatenación es el proceso de unir varias string o de combinar string con variables que contienen texto. El operador `+` es uno de los métodos más sencillos y más utilizados para concatenar string.

- **Example code**

  ```js
  let studentName = "Asad";
  let studentAge = 25;
  let studentInfo = studentName + " is " + studentAge + " years old.";
  console.log(studentInfo); // Asad is 25 years old.
  ```

- Si necesitas añadir o concatenar texto a una cadena existente, puedes utilizar el operador `+=`. Esto resulta útil cuando deseas ampliar una cadena añadiéndole más texto a lo largo del tiempo.

- **Example code**

  ```js
  let message = "Welcome to programming, ";
  message += "Asad!";
  console.log(message); // Welcome to programming, Asad!
  ```

- Otra forma de concatenar cadenas es utilizando el método `concat()`. Este método une dos o más cadenas.

- **Example code**

  ```js
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName.concat(" ", lastName);
  console.log(fullName); // John Doe
  ```

---

## Tema7: Registro de mensajes con `console.log()`

- El método `console.log()` se utiliza para registrar mensajes en la consola. Es una herramienta útil para depurar y probar tu código.

- **Example code**

  ```js
  console.log("Hello, World!");
  // Output: Hello, World!
  ```

---

## Los puntos y comas en JavaScript

- Los puntos y comas se utilizan principalmente para marcar el final de una instrucción. Esto ayuda al motor de JavaScript a distinguir las instrucciones individuales, lo cual es fundamental para una ejecución correcta.

- **Example code**

  ```js
  console.log("Hello, World!");
  // Output: Hello, World!
  ```

- Los puntos y comas ayudan a evitar ambigüedades en la ejecución del código y garantizan que las instrucciones se cierren correctamente.

---

## Tema9: Comentarios en JavaScript

- El motor de JavaScript ignora cualquier línea de código que esté comentada. Los comentarios se utilizan para explicar el código, tomar notas o desactivar temporalmente el código.

- Los comentarios de una sola línea se crean utilizando `//`.

- **Example code**

  ```js
  // This is a single-line comment and will be ignored by the JavaScript engine
  ```

- Los comentarios de varias líneas se crean utilizando `/*` para iniciar el comentario y `*/` para terminarlo.

- **Example code**

  ```js
  /*
  This is a multi-line comment.
  It can span multiple lines.
  */
  ```

---

## Tema10: JavaScript como lenguaje de tipado dinámico

- JavaScript es un lenguaje de tipado dinámico, lo que significa que no es necesario especificar el tipo de datos de una variable al declararla. El motor de JavaScript determina automáticamente el tipo de datos en función del valor asignado a la variable.

- **Example code**

  ```js
  let error = 404; // JavaScript treats error as a number
  error = "Not Found"; // JavaScript now treats error as a string
  ```

- Otros lenguajes, como C#, que no son de tipado dinámico, darían lugar a un error:

- **Example code**

  ```js
  int error = 404; // value must always be an integer
  error = "Not Found"; // This would cause an error in C#
  ```

---

## Tema11: Uso del operador `typeof`

- El operador `typeof` se utiliza para comprobar el tipo de datos de una variable. Devuelve una cadena que indica el tipo de la variable.

- **Example code**

  ```js
  let age = 25;
  console.log(typeof age); // "number"
  
  let isLoggedIn = true;
  console.log(typeof isLoggedIn); // "boolean"
  ```

- Sin embargo, hay una peculiaridad bien conocida en JavaScript en lo que respecta al valor `null`. El operador `typeof` devuelve `"object"` para los valores `null`.

- **Example code**

  ```js
  let user = null;
  console.log(typeof user); // "object"
  ```
