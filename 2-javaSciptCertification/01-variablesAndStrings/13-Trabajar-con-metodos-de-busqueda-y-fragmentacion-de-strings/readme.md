# Trabajar con métodos de búsqueda y fragmentación de strings

En esta sección, aprenderás a usar métodos de búsqueda y fragmentación de strings para manipular texto en JavaScript. Estos métodos te permiten encontrar la posición de caracteres o subcadenas dentro de una cadena, así como dividir una cadena en partes más pequeñas.

---

## Tema 1: ¿Cómo se puede comprobar si una String contiene una subString?

Al trabajar con Strings en JavaScript, hay muchos casos en los que puede ser necesario comprobar si un String contiene un subString específica, es decir, una parte más pequeña de es String.

Por ejemplo, es posible que quieras verificar si la entrada de un usuario incluye una palabra o un carácter específico antes de realizar alguna acción. Una forma de lograrlo es utilizando el método `includes()`.

El método `includes()` se utiliza para verificar si una String contiene un subString específica. Si el subString se encuentra dentro del String, el método devuelve `true` de lo contrario, devuelve `false`.

Esta es la sintaxis básica:

- **Example code**

  ```js
  string.includes(searchValue);
  ```

En cuanto a la sintaxis, `searchValue` es el subString que quieres buscar dentro del String. Y aquí tienes un ejemplo:

- **Example code**

  ```js
  let phrase = "JavaScript is awesome!";
  let result = phrase.includes("awesome");
  
  console.log(result);  // true
  ```

En este ejemplo, la palabra `awesome` aparece dentro del string `JavaScript is awesome!`, por lo que el método `includes()` devuelve `true`.

Es importante tener en cuenta que el método `includes()` distingue entre mayúsculas y minúsculas. Esto significa que se requiere una coincidencia exacta de los caracteres, incluyendo su mayúscula o minúscula.

Por ejemplo:

- **Example code**

  ```js
  let phrase = "JavaScript is awesome!";
  let result = phrase.includes("Awesome");
  
  console.log(result);  // false
  ```

Dado que `Awesome` (con `A` mayúscula) no coincide con `awesome` (con `a` minúscula), el resultado es `false`.

También puedes usar el método `includes()` para comprobar si hay una subString que comience en un índice específico de la String, indicando un segundo parámetro:

- **Example code**

  ```js
  let text = "Hello, JavaScript world!";
  let result = text.includes("JavaScript", 7);
  
  console.log(result);  // true
  ```

En este caso, la búsqueda de la subcadena `JavaScript` comienza en la séptima posición de la cadena, lo que garantiza que se omitan todos los caracteres anteriores a esa posición.

El método `includes()` solo devuelve un resultado `true` o `false`. No proporciona información sobre dónde se encuentra la subcadena dentro de la cadena ni cuántas veces aparece. Si necesitas ese nivel de detalle, otros métodos, como el método `indexOf()`, podrían ser más adecuados.

---

## Cuestionario 1

1. **¿Qué devuelve el método `includes()` cuando se encuentra una subString en una String?**

    - [ ] a) El índice de la subString.
    - [ ] b) La longitud de la subString.
    - [x] c) `true` //correcto
    - [ ] d) `false`

2. **¿Cuál de las siguientes afirmaciones sobre el método `includes()` es correcta?**

    - [ ] a) No distingue entre mayúsculas y minúsculas.
    - [x] b) Distinge entre mayúsculas y minúsculas. //correcto
    - [ ] c) Reemplaza la subcadena encontrada por otro valor.
    - [ ] d) Devuelve el número de veces que aparece la subcadena.

3. **¿Qué resultado dará el siguiente código?**

    ```js
    let message = "JavaScript is great!";
    let result = message.includes("script");
    console.log(result);
    ```

    - [ ] a) `true`
    - [x] b) `false` //correcto
    - [ ] c) `undefined`
    - [ ] d) Da un error.

[☝️](#trabajar-con-métodos-de-búsqueda-y-fragmentación-de-strings)

---

## Tema 2: ¿Cómo se extrae una subString de una String?

Al trabajar con Strings en JavaScript, a menudo es necesario extraer una parte o subString de una String más largo.

Por ejemplo, es posible que quieras extraer parte de una palabra, una secuencia específica de caracteres o simplemente un fragmento de una oración.

JavaScript ofrece varios métodos para esta tarea, siendo uno de los más utilizados el método `slice()`.

El método `slice()` te permite extraer una parte de un String y devuelve un nuevo String, sin modificar el String original. Toma dos parámetros: el índice de inicio y el índice de finalización opcional.

Esta es la sintaxis básica:

- **Example code**

  ```js
  string.slice(startIndex, endIndex);
  ```

`startIndex` es la posición en la que comienza la extracción. `endIndex` es la posición en la que termina la extracción. Si no se especifica, la función `slice()` extrae hasta el final del string.

Veamos un ejemplo sencillo de cómo extraer parte de un string:

- **Example code**

  ```js
  let message = "Hello, world!";
  let greeting = message.slice(0, 5);
  
  console.log(greeting);  // Hello
  ```

En este ejemplo, `slice(0, 5)` extrae los caracteres que van desde el índice `0` hasta el índice `5`, sin incluir este último. Como resultado, se extrae la palabra `Hello`.

Si se omite el segundo parámetro, `slice()` extraerá todo desde el índice inicial hasta el final del string:

- **Example code**

  ```js
  let message = "Hello, world!";
  let world = message.slice(7);
  
  console.log(world);  // world!
  ```

Aquí, la función `slice(7)` extrae el string desde el índice `7` hasta el final del string, lo que da como resultado `world!`.

También puedes usar números negativos como índices. Cuando usas un número negativo, se cuenta hacia atrás desde el final del string:

- **Example code**

  ```js
  let message = "JavaScript is fun!";
  let lastWord = message.slice(-4);
  
  console.log(lastWord);  // fun!
  ```

En este caso, `slice(-4)` extrae los últimos cuatro caracteres del string, lo que nos da `fun!`.

Supongamos que quieres extraer una sección del centro de un string. Puedes indicar tanto el índice inicial como el final para controlar con precisión qué parte del string deseas:

- **Example code**

  ```js
  let message = "I love JavaScript!";
  let language = message.slice(7, 17);
  
  console.log(language);  // JavaScript
  ```

Aquí, `slice(7, 17)` extrae el subString que comienza en el índice `7` y termina justo antes del índice `17`, que es la palabra `JavaScript`.

El método `slice()` es una herramienta muy útil para extraer partes de un String en JavaScript.

Se especifican los índices de inicio y fin, y el método devuelve un nuevo String que contiene la parte extraída.

Con opciones para índices positivos, negativos y omitidos, puedes adaptarlo a diversas situaciones sin alterar el String original.

---

## Cuestionario 2

1. **¿Qué resultado dará el siguiente código?**

    ```js
    let text = "JavaScript is awesome!";
    let result = text.slice(0, 9);
    
    console.log(result);
    ```

    - [ ] a) `JavaScript`
    - [x] b) `JavaScrip` //correcto
    - [ ] c) `Java`
    - [ ] d) `awesome`

2. **¿Cuál de las siguientes afirmaciones sobre el método `slice()` es correcta?**

    - [ ] a) Modifica el String original.
    - [x] b) Devuelve un nueva String que contiene la parte extraída. //correcto
    - [ ] c) Incluye el índice final en el subString extraída.
    - [ ] d) No admite índices negativos.

3. **¿Qué resultado devolverá el siguiente código?**

    ```js
    let sentence = "Learning JavaScript is fun!";
    let extracted = sentence.slice(9, -5);
    
    console.log(extracted);
    ```

    - [x] a) `JavaScript is` //correcto
    - [ ] b) `JavaScript`
    - [ ] c) `Learning`
    - [ ] d) `fun!`

[☝️](#trabajar-con-métodos-de-búsqueda-y-fragmentación-de-strings)

---
