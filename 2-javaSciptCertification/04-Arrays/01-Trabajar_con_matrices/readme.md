# Trabajar con matrices (`Arrays`)

## Navegación

- [trabajar-con-matrices](#trabajar-con-matrices-arrays)

---

En esta sección, aprenderás a trabajar con matrices (`arrays`) en JavaScript. Las matrices son estructuras de datos que pueden almacenar múltiples valores en una sola variable. Son muy útiles para organizar y manipular conjuntos de datos.

---

## Tema 1: ¿Cuáles son las características principales de los Arrays en JavaScript?

Un Arrays en JavaScript es una colección ordenada de valores, cada uno de los cuales se identifica mediante un índice numérico. Los valores de un Array en JavaScript pueden ser de diferentes tipos de datos, incluyendo números, strings, valores booleanos, objetos e incluso otros Arrays.

Para crear un Arrays en JavaScript, puedes usar corchetes [] y separar los valores con comas. Aquí tienes un ejemplo:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "orange"];
  ```

En este ejemplo, declaramos una variable llamada `fruits` y le asignamos un array que contiene tres valores de tipo string: `apple`, `banana` y `orange`.

Una de las características clave de los arrays es que se indexan a partir de cero, lo que significa que el primer elemento de un array tiene el índice `0`, el segundo tiene el índice `1`, y así sucesivamente. Puedes acceder a elementos individuales de un array utilizando su índice. Por ejemplo:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "orange"];
  console.log(fruits[0]); // "apple"
  console.log(fruits[2]); // "orange"
  ```

En este ejemplo, usamos el índice `0` para acceder al primer elemento (`apple`) y el índice 2 para acceder al tercer elemento (`orange`).

Los arrays en JavaScript tienen una propiedad especial llamada `length` que devuelve el número de elementos del array. Puedes acceder a esta propiedad utilizando la palabra clave `length`. Por ejemplo:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "orange"];
  console.log(fruits.length); // 3
  ```

Otra característica clave de los arrays en JavaScript es que son dinámicas, lo que significa que su tamaño puede cambiar después de crearlas. Puedes agregar o eliminar elementos de un array utilizando diversos métodos de arrays, como `push()`, `pop()`, `shift()`, `unshift()`, `splice()` y otros. Estos métodos se explicarán en las próximas lecciones.

Los arrays de JavaScript son versátiles y útiles para el almacenamiento de datos dentro de tus programas. A lo largo de este módulo, podrás ver de primera mano cómo trabajar con matrices te ayudará a gestionar y manipular colecciones de datos de manera eficiente.

---

## Cuestionario 1

1. **¿Cuál de las siguientes afirmaciones NO es cierta con respecto a los arrays de JavaScript?**

    - [ ] a) Se indexan a partir del cero. //correcto
    - [x] b) Son una colección desordenada de valores.
    - [ ] c) Pueden contener otro array como valor.
    - [ ] d) Son dinámicas y su tamaño puede cambiar después de crearlas

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers[2]);
    ```

    - [ ] a) `2`
    - [x] b) `3` //correcto
    - [ ] c) `4`
    - [ ] d) `5`

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let colors = ["red", "green", "blue"];
    console.log(colors.length);
    ```

    - [ ] a) `2`
    - [x] b) `3` //correcto
    - [ ] c) `4`
    - [ ] d) `undefined`

[☝️](#trabajar-con-matrices-arrays)

---

## Tema 2: ¿Cómo se accede y se actualizan los elementos de un array?

En la lección anterior, se te presentó por primera vez el trabajo con arrays y cómo acceder a los diferentes elementos de las mismas. A continuación, te recordamos cómo acceder al segundo elemento de un array:

- **Example code**

  ```js
  const fruits = ["apple", "banana", "cherry"];

  console.log(fruits[1]); // "banana"
  ```

Dado que los índices de los arrays comienzan en cero, el primer elemento se encuentra en el índice `0`, el segundo en el índice `1`, y así sucesivamente. Es importante tener en cuenta que, si intentas acceder a un índice que no existe en la matriz, JavaScript devolverá `undefined`.

- **Example code**

  ```js
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits[3]); // undefined
  ```

En este ejemplo, no existe el índice `3` en el array `fruits`. Por lo tanto, el registro mostrará `undefined`. Ahora, veamos cómo actualizar elementos en un array. Puedes actualizar un elemento asignándole un nuevo valor a un índice específico.

- **Example code**

  ```js
  let fruits = ["apple", "banana", "cherry"];
  fruits[1] = "blueberry";
  console.log(fruits); // ["apple", "blueberry", "cherry"]
  ```

En este ejemplo, hemos sustituido `banana` por `blueberry` en el índice `1`. Este método te permite modificar cualquier elemento del Array, siempre y cuando conozcas su índice. También puedes añadir nuevos elementos a un Array asignando un valor a un índice que aún no exista:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "cherry"];
  fruits[3] = "date";
  console.log(fruits); // ["apple", "banana", "cherry", "date"]
  ```

Sin embargo, hay que tener cuidado al hacerlo. Si asignas un valor a un índice que es mucho mayor que la longitud actual de la matriz, crearás elementos indefinidos para los índices intermedios, lo que puede provocar un comportamiento inesperado. A medida que sigas trabajando con JavaScript, descubrirás que estas formas de acceder y actualizar elementos de una matriz son fundamentales para muchas tareas de programación. Ya sea que estés creando una simple lista de tareas pendientes o procesando estructuras de datos complejas, estas habilidades te resultarán muy valiosas.

---

## Cuestionario 2

1. **Si tienes una matriz, por ejemplo `let numbers = [10, 20, 30, 40, 50]`, ¿qué valor devolverá `numbers[2]`?**

    - [ ] a) `20`
    - [x] b) `30` //correcto
    - [ ] c) `40`
    - [ ] d) `2`

2. **¿Qué sucede si intentas acceder a un elemento de una matriz con un índice que no existe?**

    - [ ] a) Lanza un error.
    - [ ] b) Devuelve `null`.
    - [x] c) Devuelve `undefined`. //correcto
    - [ ] d) Devuelve el último elemento del array.

3. **¿Cuál es el índice que se utiliza para representar el primer elemento de un array?**

    - [ ] a) `5`
    - [ ] b) `2`
    - [x] c) `0` //correcto
    - [ ] d) `1`

[☝️](#trabajar-con-matrices-arrays)

---

## Tema 3: ¿Cómo se agregan y eliminan elementos del principio y del final de un array?

Los arrays en JavaScript son dinámicos, lo que significa que puedes agregar o eliminar elementos de ellos fácilmente. Existen cuatro métodos principales para agregar y eliminar elementos del principio y del final de un array: `push()`, `pop()`, `shift()` y `unshift()`. Analicemos cada uno de estos métodos en detalle.

El método `push()` se utiliza para agregar uno o más elementos al final de un array. El valor de retorno del método `push()` es la nueva longitud del array. A continuación, se muestra un ejemplo de cómo agregar una nueva fruta al array de `fruits` existente:

- **Example code**

  ```js
  const fruits = ["apple", "banana"];
  const newLength = fruits.push("orange");
  console.log(newLength); // 3
  console.log(fruits); // ["apple", "banana", "orange"]
  ```

En este ejemplo, comenzamos con un array llamada `fruits` que contiene dos elementos. A continuación, utilizamos el método `push()` para añadir el string `orange` al final de la array.

Quizás hayas notado que estamos usando `const` al declarar el array `fruits`. Pero, ¿por qué es posible agregar más elementos a este array `fruits` si `fruits` es una constante? Esto es posible porque declarar un array con la palabra clave `const` crea una referencia al array. Si bien el array en sí es mutable y se puede modificar, no puedes reasignar un nuevo valor a la constante `fruits`, como esto:

- **Example code**

  ```js
  const fruits = ["apple", "banana"];
  fruits = ["This", "will", "not", "work"];
  console.log(fruits); // Uncaught TypeError: Assignment to constant variable. 
  ```

El siguiente método que veremos es el método `pop()`. El método `pop()` elimina el último elemento de un array y devuelve ese elemento. Además, modifica el array original. Así es como funciona:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "orange"];
  let lastFruit = fruits.pop();
  console.log(fruits); // ["apple", "banana"]
  console.log(lastFruit); // "orange"
  ```

En este ejemplo, comenzamos con un array de tres frutas. El método `pop()` elimina el último elemento (`orange`) del array y lo devuelve. El array original de `fruits` queda modificado y ahora contiene solo dos elementos.

El método `unshift()` agrega uno o más elementos al principio de un array y devuelve su nueva longitud. Funciona de manera similar a `push()`, pero modifica el inicio de la array en lugar del final. A continuación, un ejemplo:

- **Example code**

  ```js
  let numbers = [2, 3];
  let newLength = numbers.unshift(1);
  console.log(numbers); // [1, 2, 3]
  console.log(newLength); // 3
  ```

En este ejemplo, usamos `unshift()` para añadir el número `1` al principio del array `numbers`. El método devuelve la nueva longitud del array, que es `3`.

Por último, el método `shift()` elimina el primer elemento de un array y devuelve ese elemento. Es similar a `pop()`, pero actúa al principio del array en lugar de al final. Así es como funciona:

- **Example code**

  ```js
  let colors = ["red", "green", "blue"];
  let firstColor = colors.shift();
  console.log(colors); // ["green", "blue"]
  console.log(firstColor); // "red"
  ```

En este ejemplo, comenzamos con un array de tres colores. El método `shift()` elimina el primer elemento (`red`) del array y lo devuelve. El array de `colors` original queda modificada y ahora contiene solo dos elementos.

Ten en cuenta que, mientras que `push()` y `unshift()` pueden agregar varios elementos a la vez, `pop()` y `shift()` eliminan solo un elemento cada vez.

---

## Cuestionario 3

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let arr = [1, 2, 3];
    arr.push(4);
    arr.unshift(0);
    console.log(arr);
    ```

    - [ ] a) `[1, 2, 3, 4, 0]`
    - [x] b) `[0, 1, 2, 3, 4]` //correcto
    - [ ] c) `[0, 4, 1, 2, 3]`
    - [ ] d) `[4, 0, 1, 2, 3]`

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    let arr = ["a", "b", "c", "d"];
    let first = arr.shift();
    let last = arr.pop();
    console.log(first, last, arr);
    ```

    - [x] a) `"a" "d" ["b", "c"]` //correcto
    - [ ] b) `"d" "a" ["b", "c"]`
    - [ ] c) `"a" "b" ["c", "d"]`
    - [ ] d) `"b" "c" ["a", "d"]`

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let arr = ["a", "b", "c"];
    arr.unshift("x", "y");
    arr.pop();
    console.log(arr);
    ```

    - [x] a) `["x", "y", "a", "b"]` //correcto
    - [ ] b) `["x", "y", "a", "b", "c"]`
    - [ ] c) `["a", "b", "x", "y"]`
    - [ ] d) `["y", "x", "a", "b"]`

[☝️](#trabajar-con-matrices-arrays)

---

## Tema 3: ¿Cuál es la diferencia entre los arrays unidimensionales y los bidimensionales?

En programación, los arrays son estructuras de datos fundamentales que se utilizan para almacenar conjuntos de elementos. Comprender la diferencia entre los arrays unidimensionales y los bidimensionales es crucial para organizar y manipular datos de manera eficaz. Exploremos estos conceptos de una forma que resulte fácil de entender para los principiantes.

Un array unidimensional, a menudo llamado simplemente array, es como una sola fila de casillas. Imagina que tienes una fila de casilleros en una estación de tren. Cada casillero puede contener un objeto, y puedes acceder a cualquier casillero directamente si conoces su número.

En términos de programación, se accede a cada elemento de un array unidimensional utilizando un único índice. Por ejemplo, en JavaScript, podrías crear y utilizar un array unidimensional como este:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "cherry", "date"];
  console.log(fruits[2]); // "cherry"
  ```

Aquí, `fruits` es un array unidimensional. Puedes imaginártela como una sola fila de nombres de frutas. Para acceder a cualquier fruta, se utiliza un número (el índice) entre corchetes.

Ahora, pasemos a los arrays bidimensionales. Si un array unidimensional es como una sola fila de casilleros, un array bidimensional es como una cuadrícula de casilleros: varias filas y columnas. En programación, un array bidimensional es esencialmente un array de arrays. Se utiliza para representar datos que tienen una estructura natural similar a una cuadrícula, como un tablero de ajedrez, una hoja de cálculo o los píxeles de una imagen.

Para acceder a un elemento en un array bidimensional, necesitas dos índices: uno para la fila y otro para la columna. Aquí tienes un ejemplo de cómo puedes crear y utilizar un array bidimensional en JavaScript:

- **Example code**

  ```js
  let chessboard = [
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["r", "n", "b", "q", "k", "b", "n", "r"]
  ];
  
  console.log(chessboard[0][3]); // "Q"
  ```

En este ejemplo, `chessboard` es un array bidimensional que representa la disposición inicial de una partida de ajedrez. Para acceder a la reina (`Q`) en la fila superior, utilizamos dos índices: `[0][3]`. El primer índice, `0`, selecciona la primera fila, y el segundo índice, `3`, selecciona la cuarta columna de esa fila.

La diferencia clave entre los arrays unidimensionales y bidimensionales radica en cómo se accede y se organizan los datos. Los arrays unidimensionales utilizan un solo índice y son adecuadas para datos lineales como listas o secuencias. Las arrays bidimensionales utilizan dos índices y son ideales para estructuras de datos en forma de cuadrícula.

Vale la pena señalar que, en JavaScript, los arrays bidimensionales son en realidad arrays de arrays. Esto significa que cada elemento del array externo es en sí mismo una array. Esta estructura anidada permite una gran flexibilidad, pero también requiere un manejo cuidadoso para evitar errores.

A medida que avances en tu trayectoria como programador, descubrirás que la elección entre arrays unidimensionales y bidimensionales depende de la naturaleza de tus datos y de cómo necesites manipularlos.

Los arrays unidimensionales son más sencillas y suficientes para muchas tareas, mientras que los arrays bidimensionales resultan indispensables cuando se trata de datos más complejos y estructurados.

---

## Cuestionario 4

1. **¿Cuántos índices se necesitan para acceder a un elemento de un array bidimensional?**

    - [ ] a) Uno.
    - [x] b) Dos. //correcto
    - [ ] c) Tres.
    - [ ] d) Depende del tamaño del array.

2. **¿Qué tipo de estructura de datos se representa mejor con un array unidimensional?**

    - [ ] a) Una cuadrícula de números.
    - [x] b) Una lista de elementos. //correcto
    - [ ] c) Una tabla de información.
    - [ ] d) Un modelo 3D.

3. **En JavaScript, ¿qué es, en esencia, un array bidimensional?**

    - [ ] a) Un tipo de datos especial integrado en el lenguaje
    - [x] b) Un array de arrays. //correcto
    - [ ] c) Una lista enlazada de arrays.
    - [ ] d) Un objeto array.

[☝️](#trabajar-con-matrices-arrays)

---

## Tema 5: ¿Qué es la desestructuración de arrays y cómo funciona?

La desestructuración de arrays es una característica de JavaScript que permite extraer valores de arrays y asignarlos a variables de una manera más concisa y legible. Ofrece una sintaxis práctica para descomponer los elementos de un array en distintas variables.

Esta técnica resulta especialmente útil al trabajar con arrays y funciones que devuelven varios valores. A continuación, se muestra un ejemplo del uso de la desestructuración de arrays:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "orange"];

  let [first, second, third] = fruits;
  
  console.log(first);  // "apple"
  console.log(second); // "banana"
  console.log(third);  // "orange"
  ```

En este ejemplo, tenemos un array llamada `fruits` con tres elementos. Mediante la desestructuración de arrays, asignamos el primer elemento a la variable `first`, el segundo a `second` y el tercero a `third`. Esto nos permite acceder fácilmente a los elementos individuales del array sin necesidad de utilizar la notación de índice.

Así es como quedaría si accedieras a cada uno de esos elementos por su índice en lugar de utilizar la desestructuración de arrays:

- **Example code**

  ```js
  const fruits = ["apple", "banana", "orange"];

  const first = fruits[0];
  const second = fruits[1];
  const third = fruits[2];
  
  console.log(first); // "apple"
  console.log(second); // "banana"
  console.log(third); // "orange"
  ```

La desestructuración de arrays también te permite omitir los elementos que no te interesan utilizando comas. Por ejemplo:

- **Example code**

  ```js
  let colors = ["red", "green", "blue", "yellow"];
  let [firstColor, , thirdColor] = colors;
  
  console.log(firstColor); // "red"
  console.log(thirdColor); // "blue"
  ```

En este ejemplo, omitimos el segundo elemento del array `colors` utilizando una coma adicional. De este modo, se asigna el color `red` a `firstColor` y el `blue` a `thirdColor`, ignorando así el `green`.

Otra característica muy útil de la desestructuración de arrays es la posibilidad de utilizar valores por defecto. Si el array tiene menos elementos que las variables a las que intentas asignar valores, puedes proporcionar valores por defecto:

- **Example code**

  ```js
  let numbers = [1, 2];
  let [a, b, c = 3] = numbers;
  
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  ```

Aquí, le asignamos el valor predeterminado `3` a `c` porque el array de `numbers` no tiene un tercer elemento.

Ahora, veamos la sintaxis rest, representada por tres puntos (`...`). Te permite capturar los elementos restantes de un array que no se han desestructurado en un nuevo array. Así es como funciona:

- **Example code**

  ```js
  let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
  let [first, second, ...rest] = fruits;
  
  console.log(first);  // "apple"
  console.log(second); // "banana"
  console.log(rest);   // ["orange", "mango", "kiwi"]
  ```

En este ejemplo, `first` y `second` capturan los dos primeros elementos del array `fruits`, mientras que `rest` captura todos los elementos restantes en un nuevo array. La sintaxis rest debe ser el último elemento del patrón de desestructuración.

La desestructuración de arrays es una potente característica que puede hacer que tu código sea más conciso y fácil de leer. Resulta especialmente útil cuando se trabaja con arrays y cuando necesitas extraer elementos específicos de una array.

---

## Cuestionario 5

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let numbers = [1, 2, 3, 4, 5];
    let [a, , b, ...rest] = numbers;
    console.log(a, b, rest);
    ```

    - [ ] a) `1 2 [3, 4, 5]`
    - [x] b) `1 3 [4, 5]` //correcto
    - [ ] c) `1 2 [4, 5]`
    - [ ] d) `1 3 [2, 4, 5]`

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    let colors = ["red", "green", "blue"];
    let [primary, secondary, tertiary, quaternary = "yellow"] = colors;
    console.log(quaternary);
    ```

    - [ ] a) `undefined`
    - [ ] b) `null`
    - [x] c) `"yellow"` //correcto
    - [ ] d) Esto generará un error.

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let fruits = ["apple", "banana", "orange", "grape"];
    let [first, ...rest, last] = fruits;
    console.log(first, rest, last);
    ```

    - [ ] a) `"apple" ["banana", "orange"] "grape"`
    - [ ] b) `"apple" ["banana", "orange", "grape"] undefined`
    - [x] c) Esto provocará un `SyntaxError`. //correcto
    - [ ] d) `"apple" [] "grape"`

[☝️](#trabajar-con-matrices-arrays)

---

## Tema 6: ¿Cómo se pueden utilizar los métodos de strings y arrays para invertir un string?

Invertir un string es una tarea habitual en programación que se puede llevar a cabo en JavaScript utilizando una combinación de métodos de strings y arrays. El proceso consta de tres pasos principales:

- Dividir el string en un array de caracteres.
- Invertir el array.
- Volver a unir los caracteres en un string.

Veamos cada uno de estos pasos utilizando los métodos `split()`, `reverse()` y `join()`.

El primer paso para invertir un string es convertirlo en un array de caracteres individuales. Podemos hacerlo utilizando el método `split()`. El método `split()` divide un string en un array de substrings y especifica dónde debe ocurrir cada división basándose en un separador dado. Si no se proporciona ningún separador, el método devuelve un array que contiene le string original como un único elemento. Algunos ejemplos de separadores comunes son:

- Un string vacío (`""`), que divide el string en caracteres individuales.

- Un espacio simple (`" "`), que divide el string dondequiera que haya espacios.

- Un guión (`"-"`), que divide el string en cada guión.

A continuación, se muestra un ejemplo del uso del método `split` para crear un array de caracteres:

- **Example code**

  ```js
  let str = "hello";
  let charArray = str.split("");
  console.log(charArray); // ["h", "e", "l", "l", "o"]
  ```

En este ejemplo, utilizamos `split("")` (pasándole un string vacío) para convertir el string `hello` en un array con sus caracteres individuales. Una vez que tenemos un array de caracteres, podemos usar el método `reverse()` para invertir el orden de los elementos del array.

El método `reverse()` es un método de array que invierte una array en su lugar. Esto significa que modifica el array original en lugar de crear una nueva. Así es como podemos usarlo:

- **Example code**

  ```js
  let charArray = ["h", "e", "l", "l", "o"];
  charArray.reverse();
  console.log(charArray); // ["o", "l", "l", "e", "h"]
  ```

En este ejemplo, la función `reverse()` invierte el orden de los elementos de `charArray`, pasando de `["h", "e", "l", "l", "o"]` a `["o", "l", "l", "e", "h"]`.

El paso final es convertir el array de caracteres invertido de nuevo en un string. Podemos lograrlo utilizando el método `join()`. El método `join()` crea y devuelve un nuevo string concatenando todos los elementos de un array, separados por un string separador especificado. Si quieres unir los caracteres sin ningún separador, puedes usar un string vacío como argumento. Aquí tienes un ejemplo:

- **Example code**

  ```js
  let reversedArray = ["o", "l", "l", "e", "h"];
  let reversedString = reversedArray.join("");
  console.log(reversedString); // "olleh"
  ```

En este ejemplo, `join("")` (al que se le pasa un string vacío como argumento) combina todos los caracteres del array en una sola string sin ningún separador entre ellos.

Recuerda que las strings en JavaScript son inmutables, lo que significa que no puedes invertir directamente una string modificándola. Por eso necesitamos convertirla en un array, invertir el array y luego volver a convertirlo en una string. Esta combinación de métodos de strings y arrays ofrece una forma potente y flexible de manipular strings en JavaScript.

---

## Cuestionario 6

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let str = "coding";
    let reversed = str.split("").reverse().join("");
    console.log(reversed);
    ```

    - [ ] a) `coding`
    - [x] b) `gnidoc` //correcto
    - [ ] c) `["g", "n", "i", "d", "o", "c"]`
    - [ ] d) `undefined`

2. **¿Cuál será el resultado de "hello".split("")?**

    - [ ] a) `"hello"`
    - [ ] b) `["hello"]`
    - [x] c) `["h", "e", "l", "l", "o"]` //correcto
    - [ ] d) `"h,e,l,l,o"`

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let word = "hello";
    let chars = word.split("");
    chars.reverse();
    console.log(chars.join("-"));
    ```

    - [ ] a) `hello`
    - [x] b) `o-l-l-e-h` //correcto
    - [ ] c) `olleh`.
    - [ ] d) `["o", "l", "l", "e", "h"]`

[☝️](#trabajar-con-matrices-arrays)

---
