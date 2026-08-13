# Trabajar con funciones de orden superior y callbacks

En esta artículo, exploraremos el concepto de funciones de orden superior y cómo se utilizan las funciones de devolución de llamada (callbacks) en JavaScript. Aprenderemos cómo estas funciones permiten un enfoque más flexible y modular para escribir código.

## Tema 1: ¿Qué es una función de devolución de llamada y cómo funciona con el método `forEach`?

En JavaScript, una función de devolución de llamada es una función que se pasa como argumento a otra función, de modo que la función externa pueda invocarla en un momento específico.

Este concepto es fundamental para comprender muchos aspectos de JavaScript, incluido el funcionamiento del método `forEach`.****

Comencemos por entender qué es una función de devolución de llamada en un contexto sencillo.

Imagina que tienes una función y que, dentro de ella, quieres hacer algo varias veces. En lugar de escribir todo el código en una sola función grande, puedes pasar una segunda función (la de retorno de llamada) para que se ejecute cada vez que necesites que se realice esa acción específica. Esto permite un código más flexible y modular.

Ahora, presentemos el método `forEach`. `forEach` es un método integrado para las matrices en JavaScript. Te permite iterar sobre cada elemento de una matriz y realizar una operación en cada uno de ellos. La operación que deseas realizar se define en una función de retorno de llamada que le proporcionas a `forEach`.

Aquí hay un ejemplo de cómo funciona `forEach` con una función de retorno de llamada:

- **Example code**

  ```js
  let numbers = [1, 2, 3, 4, 5];

  numbers.forEach(function(number) {
    console.log(number * 2);
  });
  ```

En este ejemplo, tenemos un array de números. Utilizamos el método `forEach` en este array y le pasamos una función de llamada de retorno como argumento a `forEach`.

Esta función de llamada de retorno toma un parámetro, que representa cada elemento del array. El método `forEach` llamará a esta función de llamada de retorno una vez por cada elemento del array.

En este caso, la función de llamada de retorno multiplica cada número por 2 y registra el resultado. Por lo tanto, cuando se ejecute este código, mostrará:

- **Example code**

  ```js
  2
  4
  6
  8
  10
  ```

Es importante entender que la función de retorno se invoca una vez por cada elemento del array, en orden. `forEach` se encarga del bucle por ti, así que no tienes que escribir un bucle `for` tú mismo.

También puedes usar una función de flecha como función de retorno, lo que puede hacer que tu código sea aún más conciso:

- **Example code**

  ```js
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach(number => console.log(number * 2));
  ```

Esto hace exactamente lo mismo que el ejemplo anterior, pero con menos código.

La función de llamada de retorno en `forEach` puede aceptar hasta tres argumentos: el elemento actual, el índice del elemento actual y el array sobre el que se invocó `forEach`.

Aquí hay un ejemplo en el que se utilizan los tres:

- **Example code**

  ```js
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach((number, index, array) => {
    console.log(`Element ${number} is at index ${index} in array ${array}`);
  });
  ```

Esto registraría información sobre cada elemento, su índice y el array original.

Es importante comprender las funciones de devolución de llamada y los métodos como `forEach` a medida que avanzas en JavaScript. Estos conceptos constituyen la base de muchos otros conceptos más avanzados del lenguaje, especialmente en la programación asincrónica, que aprenderás en lecciones futuras.

---

## Cuestionario 1

1. **¿Cuál es el propósito principal de una función de callback de llamada en JavaScript?**

    - [ ] a) Crear un nuevo array.
    - [x] b) Permitir que una función ejecute otro fragmento de código más adelante.
    - [ ] c) Definir una nueva variable.
    - [ ] d) Reemplazar un bucle `for`. //correcto

2. **¿Cuántas veces se invoca la función de retorno en `forEach`?**

    - [ ] a) Una vez.
    - [ ] b) Dos veces.
    - [x] c) Una vez por cada elemento del array. //correcto
    - [ ] d) Depende del tamaño del array.

3. **¿Cuál de las siguientes opciones NO es un parámetro que se puede pasar a la función de llamada de retorno en `forEach`?**

    - [ ] a) El elemento actual.
    - [ ] b) El índice del elemento actual.
    - [ ] c) El array sobre el que se invocó `forEach`
    - [x] d) La longitud del array. //correcto

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---

## Tema 2: ¿Qué son las funciones de orden superior?

Las funciones de orden superior son un concepto poderoso en JavaScript que puede mejorar significativamente tus habilidades de programación y hacer que tu código sea más flexible y reutilizable.

En esencia, una función de orden superior es una función que toma una o más funciones como argumentos, devuelve una función, o ambas cosas.

Para entender las funciones de orden superior, consideremos primero que las funciones son "_ciudadanos de primera clase_" en JavaScript. Esto significa que las funciones pueden tratarse como cualquier otro valor: pueden asignarse a variables, pasarse como argumentos a otras funciones y devolverse desde funciones. Esta flexibilidad es lo que permite la creación y el uso de funciones de orden superior.

Un uso común de las funciones de orden superior es abstraer operaciones complejas.

Por ejemplo, podrías tener una función que realice una operación específica en cada elemento de un array. En lugar de escribir funciones separadas para diferentes operaciones, puedes crear una función de orden superior que tome la operación como argumento. Esto te permite reutilizar la misma estructura de función con diferentes comportamientos.

Aquí hay un ejemplo para ilustrar este concepto:

- **Example code**

  ```js
  function operateOnArray(arr, operation) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(operation(arr[i]));
  }
    return result;
  }
  
  function double(x) {
      return x * 2;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let doubledNumbers = operateOnArray(numbers, double);
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  ```

En este ejemplo, `operateOnArray` es una función de orden superior. Toma un array y una función (operación) como argumentos. Luego aplica la operación a cada elemento del array. La función `double` se pasa como argumento a `operateOnArray`, lo que demuestra cómo las funciones pueden utilizarse como valores.

Las funciones de orden superior también pueden devolver funciones. Esto resulta particularmente útil para crear funciones especializadas a partir de otras más generales. A este concepto se le suele llamar "_fábricas de funciones_". He aquí un ejemplo:

- **Example code**

  ```js
  function multiplyBy(factor) {
    return function(number) {
      return number * factor;
    }
  }
  
  let double = multiplyBy(2);
  let triple = multiplyBy(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15
  ```

En este caso, `multiplyBy` es una función de orden superior que devuelve una nueva función. Esta nueva función se especializa en función del factor que se le pasa a `multiplyBy`. Esto nos permite crear funciones de multiplicación personalizadas con facilidad.

Las funciones de orden superior no son solo un concepto teórico, sino que se utilizan ampliamente en JavaScript.

Muchos métodos integrados para matrices en JavaScript, como `map()`, `filter()` y `reduce()`, son funciones de orden superior. Estos métodos toman una función como argumento y la aplican a los elementos del array de diversas maneras. Aprenderás más sobre estos métodos en lecciones futuras.

El uso de funciones de orden superior puede dar lugar a un código más declarativo y más fácil de entender.

En lugar de describir paso a paso cómo realizar una tarea (programación imperativa), las funciones de orden superior te permiten describir lo que quieres lograr (programación declarativa). Esto puede hacer que tu código sea más legible y fácil de mantener.

A medida que sigas trabajando con JavaScript, te encontrarás con funciones de orden superior y las usarás con frecuencia. Son una parte clave de la programación funcional en JavaScript y son esenciales para escribir código limpio, eficiente y flexible.

Comprender y utilizar las funciones de orden superior mejorará significativamente tu capacidad para escribir programas de JavaScript sofisticados y elegantes.

---

## Cuestionario 2

1. **¿Cuál de las siguientes opciones describe mejor una función de orden superior?**

    - [ ] a)  Una función que solo opera con números.
    - [ ] b)  Una función cuya ejecución lleva mucho tiempo.
    - [x] c)  Una función que toma otra función como argumento o devuelve una función. //correcto
    - [ ] d)  Una función que solo se puede invocar una vez.

2. **¿Cuál es una de las principales ventajas de usar funciones de orden superior?**

    - [ ] a) Siempre hacen que el código se ejecute más rápido.
    - [x] b) Permiten crear código más flexible y reutilizable. //correcto
    - [ ] c) Reducen la cantidad de variables que se necesitan en un programa.
    - [ ] d) Eliminan la necesidad de usar bucles en JavaScript

3. **En el contexto de las funciones de orden superior, ¿qué significa que las funciones sean "_ciudadanos de primera clase_" en JavaScript?**

    - [ ] a) Las funciones son más importantes que otros tipos de datos.
    - [ ] b) Las funciones solo se pueden definir en el nivel superior de un programa.
    - [x] c) Las funciones se pueden tratar como cualquier otro valor, lo que incluye pasarlas como argumentos. //correcto
    - [ ] d) Las funciones tienen automáticamente un mayor rendimiento que el resto del código.

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---

## Tema 3: ¿Qué es el método `map` y cómo funciona?

El método `map` es una función poderosa y muy utilizada en JavaScript que opera sobre arreglos. Está diseñada para crear un nuevo arreglo al aplicar una función determinada a cada elemento del arreglo original.

Este método no modifica el arreglo original, sino que devuelve un nuevo arreglo que contiene los resultados de la función aplicada a cada elemento.

A continuación se muestra un ejemplo del uso del método `map` en un arreglo de números:

- **Example code**

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((num) => num * 2);
  console.log(numbers); // [1, 2, 3, 4, 5]
  console.log(doubled); // [2, 4, 6, 8, 10]
  ```

Para crear un nuevo array en el que cada número se duplique, utilizamos el método `map`. El método `map` acepta una función de llamada de retorno, la cual se ejecuta sobre cada uno de los elementos del array.

En este caso, cada número del array se multiplicará por 2. El resultado será un nuevo array con los números `2, 4, 6, 8 y 10`.

La función de llamada de retorno puede aceptar hasta tres argumentos.

El primer argumento es el elemento actual que se está procesando.

- **Example code**

  ```js
  const numbers = [3, 4, 5, 6, 7].map((element) => {
    console.log("Element:", element);
    return element * 2;
  });
  ```

El segundo argumento es el índice del elemento que se está procesando actualmente.

- **Example code**

  ```js
  const numbers = [3, 4, 5, 6, 7].map((element, index) => {
    console.log("Element:", element);
    console.log("Index:", index);
    return element * 2;
  });
  ```

El tercer argumento es el array sobre el que se aplica el método `map`.

- **Example code**

  ```js
  const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
    console.log("Element:", element);
    console.log("Index:", index);
    console.log("Array:", array);
    return element * 2;
  });
  ```

Comprender y utilizar de manera efectiva el método `map` puede mejorar significativamente tu capacidad para trabajar con matrices en JavaScript. En las próximas lecciones, profundizaremos en usos más avanzados de `map` y exploraremos cómo puede ser una herramienta poderosa para crear programas dinámicos y eficientes.

---

## Cuestionario 3

1. **¿Qué devuelve el método `map`?**

    - [ ] a)  El array original, modificado.

    - [x] b)  Un nuevo array con el mismo número de elementos que el original.  //correcto

    - [ ] c)  Un solo valor.

    - [ ] d)  No devuelve nada, solo modifica el array original.

2. **¿Cuántos argumentos puede recibir la función de llamada de retorno en `map`?**

    - [ ] a) Uno. El elemento actual.

    - [ ] b) Dos. El elemento actual y su índice.

    - [x] c) Tres. El elemento actual, su índice y el array original. //correcto

    - [ ] d) Depende de cómo se llame a `map`.

3. **¿Cuál de las siguientes opciones NO es un uso correcto del método `map`?**

    - [ ] a) Convertir un array de cadenas a mayúsculas.

    - [ ] b) Duplicar cada número de un array.

    - [x] c) Eliminar elementos específicos de un array. //correcto

    - [ ] d) Extraer una propiedad de cada objeto de un array.

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---

## Tema 4: ¿Qué es el método `filter` y cómo funciona?

El método `filter` se utiliza para crear un nuevo array con los elementos que cumplen una condición específica, lo que lo hace útil para extraer elementos de manera selectiva según ciertos criterios.

En este ejemplo, utilizamos el método `filter` para crear un nuevo array que contenga únicamente números pares:

- **Example code**

  ```js
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  
  console.log(evenNumbers); // [2, 4, 6, 8, 10]
  ```

En este ejemplo, el método `filter` aplica una función de llamada de retorno a cada elemento del array de números. La función de llamada de retorno verifica si cada número es par utilizando el operador de resto (`%`).

Si el número es par, la función devuelve `true`, y ese número se incluye en el nuevo array. Si es impar, la función devuelve `false`, y ese número se excluye.

Al igual que el método `map`, la función de devolución de llamada del método `filter` acepta los mismos tres argumentos: el elemento actual que se está procesando, el índice y el array.

Es importante señalar que, si ningún elemento pasa la prueba, el método `filter` devuelve un array vacío.

- **Example code**

  ```js
  const numbers = [2, 4, 6, 8].filter((num) => num > 10);

  console.log(numbers); // []
  ```

El método `filter` es increíblemente versátil y se puede utilizar en muchos casos. Puedes usarlo para eliminar valores nulos o indefinidos de un array, para filtrar objetos según sus propiedades o para implementar una función de búsqueda.

A continuación te mostramos un ejemplo del uso del método `filter` para devolver un array de objetos que correspondan a personas menores de 30 años.

- **Example code**

  ```js
  const developers = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 25 }
  ];
  
  const youngPeople = developers.filter((person) => person.age < 30);
  console.log(youngPeople);
  
  // [{ name: "Alice", age: 25 }, { name: "David", age: 25 }]
  ```

A lo largo del resto de este plan de estudios, utilizarás los métodos `map` y `filter` con mucha frecuencia. Por lo tanto, familiarizarte con ellos no solo agilizará tu proceso de programación, sino que también te ayudará a escribir código más limpio y eficiente.

---

## Cuestionario 4

1. **¿Qué devuelve el método `filter` si ningún elemento del array cumple con la condición?**

    - [ ] a)  `null`

    - [x] b)  `undefined`

    - [ ] c)  Un array vacio.  //correcto

    - [ ] d)  El array original.

2. **¿Cuál de las siguientes opciones describe mejor el propósito de la función de devolución de llamada en el método `filter`?**

    - [ ] a) Transformar cada elemento del array.

    - [x] b) Determinar qué elementos deben incluirse en el nuevo array. //correcto

    - [ ] c) Ordenar los elementos del array.

    - [ ] d) Calcular un único valor a partir de todos los elementos del array.

3. **¿Cómo afecta el método `filter` al array original sobre el que se aplica?**

    - [ ] a) Modifica el array original en el mismo lugar.

    - [ ] b) Elimina elementos del array original.

    - [x] c) No afecta en absoluto al array original. //correcto

    - [ ] d) Ordena el array original.

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---

## Tema 5: ¿Qué es el método `reduce` y cómo funciona?

El método `reduce` es una función de JavaScript que te permite procesar un array y condensarlo en un solo valor. Este valor único puede ser un número, una cadena, un objeto o incluso otro array.

Se llama `reduce` porque reduce un array a un solo resultado. Aunque al principio pueda parecer complicado, entender `reduce` puede simplificar enormemente tu código en muchas situaciones.

En esencia, `reduce` funciona aplicando una función a cada elemento del array, en orden, y pasando el resultado de cada cálculo al siguiente. A esta función se le suele llamar _"función reductora"_.

La _"función reductora"_ toma dos parámetros principales: un acumulador y el valor actual. El acumulador es donde se almacena el resultado acumulado de las operaciones, y el valor actual es el elemento del array que se está procesando.

Veamos un ejemplo para ilustrar cómo funciona `reduce`:

- **Example code**

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  
  console.log(sum); // 15
  ```

En este ejemplo, usamos `reduce` para obtener la suma de todos los números del array.

La función reductora toma el acumulador (que comienza en 0, tal como lo especifica el segundo argumento de `reduce`) y le suma cada número.

El resultado de cada suma se convierte en el nuevo acumulador para la siguiente iteración.

El método `reduce` también puede tomar un valor inicial como su segundo argumento. Este es el valor con el que comienza el acumulador. En el ejemplo anterior, lo establecimos en 0.

Si no proporcionas un valor inicial, `reduce` utilizará el primer elemento del array como acumulador inicial y comenzará el proceso a partir del segundo elemento.

Una de las grandes ventajas de `reduce` es su flexibilidad. Como tú defines la función reductora, tienes control total sobre cómo se procesa el array y qué tipo de resultado quieres obtener. Esto hace que `reduce` sea extremadamente poderoso, pero también puede hacer que sea un poco difícil de entender al principio.

Con la práctica, le tomarás el truco al método `reduce`.

---

## Cuestionario 5

1. **¿Qué hace el método `reduce` con un array?**

    - [ ] a)  Aumenta el tamaño del array.

    - [ ] b)  Elimina elementos del array.

    - [x] c)  Transforma el array en un solo valor.  //correcto

    - [ ] d)  Ordena los elementos del array.

2. **En el método `reduce`, ¿qué es el acumulador?**

    - [ ] a) El resultado final de la operación `reduce`.

    - [ ] b) El elemento que se está procesando actualmente.

    - [ ] c) Una variable temporal que se utiliza para los cálculos.

    - [x] d) El resultado provisional de la operación `reduce`. //correcto

3. **¿Qué pasa si no le das un valor inicial al método `reduce`?**

    - [ ] a) Lanza un error.

    - [ ] b) Utiliza 0 como valor inicial.

    - [x] c) Utiliza el primer elemento del array como valor inicial. //correcto

    - [ ] d) Devuelve el array sin cambios.

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---

## Tema 6: ¿Qué es el encadenamiento de métodos y cómo funciona?

El encadenamiento de métodos es una técnica que consiste en llamar a varios métodos uno tras otro. Puedes utilizar el encadenamiento de métodos con muchos tipos de valores en JavaScript, incluyendo cadenas, matrices y objetos. Aunque las cadenas son valores primitivos, JavaScript las envuelve temporalmente en un objeto `String` cuando utilizas un método de cadena.

Veamos un ejemplo en el que se utilizan diferentes métodos de cadena:

- **Example code**

  ```js
  const result = "  Hello, World!  "
    .trim()
    .toLowerCase()
    .replace("world", "JavaScript");
  
  console.log(result); // "hello, JavaScript!"
  ```

En este ejemplo, comenzamos con una cadena y realizamos tres operaciones en secuencia: eliminamos los espacios en blanco, convertimos a minúsculas y reemplazamos la cadena `world` por `JavaScript`. Cada método devuelve una nueva cadena, que se convierte en el argumento de la siguiente llamada al método.

El encadenamiento de métodos puede mejorar significativamente la legibilidad del código cuando se trabaja con operaciones complejas.

Por ejemplo, consideremos este ejemplo que utiliza los métodos `filter`, `map` y `reduce`:

- **Example code**

  ```js
  const transactions = [
    { amount: 100, type: "credit" },
    { amount: 20, type: "cash" },
    { amount: 150, type: "credit" },
    { amount: 50, type: "cash" },
    { amount: 75, type: "credit" }
  ];
  
  const totalCreditWithBonus = transactions
    .filter((transaction) => transaction.type === "credit")
    .map((transaction) => transaction.amount * 1.1)
    .reduce((sum, amount) => sum + amount, 0);
  
  console.log(totalCreditWithBonus); // 357.5
  ```

En este ejemplo, tenemos un array de transacciones en el que cada objeto tiene un monto y un tipo de pago (tarjeta de crédito o efectivo).

Primero filtramos las transacciones y creamos un nuevo array que contiene únicamente las transacciones con tarjeta de crédito. Luego, encadenamos el método `map` al resultado filtrado y, para cada monto de transacción, lo multiplicamos por `1.1`, lo que representa un bono del `10%`.

Después, tomamos ese resultado y encadenamos el método `reduce` para sumar cada uno de los montos, lo que da como resultado `357.5`.

Si bien el encadenamiento de métodos puede hacer que el código sea más conciso y legible, es importante utilizarlo con prudencia.

Las cadenas muy largas pueden volverse difíciles de depurar, ya que no queda claro de inmediato qué paso de la cadena podría estar causando un problema. A menudo es una buena práctica dividir las cadenas muy largas en varios pasos para mayor claridad y una depuración más sencilla.

También puedes encadenar métodos en un objeto. En este caso, cada método devuelve `this`, que hace referencia al objeto actual, lo que permite que el siguiente método de la cadena se ejecute sobre él.

- **Example code**

  ```js
  const calculator = {
    total: 0,
    add(n) {
      this.total += n;
      return this;
    },
    multiply(n) {
      this.total *= n;
      return this;
    },
    subtract(n) {
      this.total -= n;
      return this;
    },
    getResult() {
      return this.total;
    }
  };
  
  const result = calculator.add(5).multiply(2).subtract(3).getResult();
  console.log(result); // 7
  ```

De esta manera, cada método devuelve el mismo objeto, por lo que puedes seguir encadenando llamadas una tras otra.

---

## Cuestionario 6

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let str = "  HELLO world  ";
    let result = str.trim().toLowerCase().split(' ');
    console.log(result);
    ```

    - [ ] a)  `["HELLO", "world"]`

    - [x] b)  `["hello", "world"]` //correcto

    - [ ] c)  `"hello world"`

    - [ ] d)  `[" HELLO", "world "]`

2. **En el contexto del encadenamiento de métodos, ¿qué debería devolver normalmente un método para permitir que el encadenamiento continúe?**

    - [ ] a) `undefined`

    - [ ] b) `null`

    - [x] c) El objeto en sí (`this`). //correcto

    - [ ] d) Un nuevo objeto.

3. **¿Cuál será el resultado del siguiente código?**

    ```js
    let obj = {
        value: 1,
        increment: function() {
            this.value++;
            return this;
        },
        double: function() {
            this.value *= 2;
            return this;
        },
        getValue: function() {
            return this.value;
        }
    };
    
    let result = obj.increment().double().increment().getValue();
    console.log(result);
    ```

    - [ ] a) 2

    - [ ] b) 3

    - [ ] c) 4

    - [x] d) 5 //correcto

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---

## Tema 7: ¿Cómo funciona el método `sort`?

Existen muchas formas diferentes de ordenar datos en programación. En esta lección, nos enfocaremos en el método `sort` integrado en JavaScript.

El método `sort` se utiliza para ordenar los elementos de un array y devuelve una referencia al array ordenado. No se realiza ninguna copia, ya que los elementos se ordenan en su lugar.

Esta es la sintaxis básica del método `sort`:

- **Example code**

  ```js
  array.sort(compareFunction);
  ```

La función `compareFunction` es un parámetro opcional que especifica una función que define el orden de clasificación. Más adelante veremos cómo usar una función de comparación al ordenar números.

### Ordenación de cadenas

En este primer ejemplo, tenemos un array de cadenas en orden aleatorio.

- **Example code**

  ```js
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  ```

Nuestro objetivo es ordenar el array en orden alfabético. Podemos hacerlo llamando al método sort en el array fruits.

- **Example code**

  ```js
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  
  console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
  ```

El resultado será un array de frutas ordenadas alfabéticamente, comenzando por la manzana.

### Ordenación de números

En el siguiente ejemplo, queremos ordenar el siguiente array de números:

- **Example code**

  ```js
  const numbers = [414, 200, 5, 10, 3];
  ```

Si intentamos usar el método `sort` en este array de números, obtendremos resultados inesperados.

- **Example code**

  ```js
  const numbers = [414, 200, 5, 10, 3];
  numbers.sort();
  
  console.log(numbers); // [10, 200, 3, 414, 5]
  ```

Esperábamos ver el resultado `[3, 5, 10, 200, 414]`, pero en cambio obtuvimos `[10, 200, 3, 414, 5]`.

Esto se debe a que el método `sort` convierte los elementos en cadenas y luego compara sus secuencias de valores de unidades de código UTF-16.

Las unidades de código UTF-16 son los valores numéricos que representan los caracteres en la cadena. Ejemplos de unidades de código UTF-16 son los números `65`, `66` y `67`, que representan los caracteres `A`, `B` y `C`, respectivamente.

Por lo tanto, el número `200` aparece antes que el número `3` en el array, ya que la cadena `200` viene antes que la cadena `3` al comparar sus unidades de código UTF-16.

La solución a este problema es proporcionar una función de comparación al método `sort`.

A continuación se muestra un ejemplo de cómo ordenar el array `numbers` utilizando una función de comparación:

- **Example code**

  ```js
  const numbers = [414, 200, 5, 10, 3];
  numbers.sort((a, b) => a - b);
  
  console.log(numbers); // [3, 5, 10, 200, 414]
  ```

Los parámetros `a` y `b` son los dos elementos que se comparan. La función de comparación debe devolver un valor negativo si `a` debe ir antes que `b`, un valor positivo si `a` debe ir después de `b` y cero si `a` y `b` son iguales.

La primera comparación es entre los números `414` y `200`. El resultado de `414 - 200` es `214`, que es un valor positivo. Esto significa que `414` debe ir después de `200` en el array ordenado.

La siguiente comparación es entre los números `200` y `5`. El resultado de `200 - 5` es `195`, que es un valor positivo. Esto significa que `200` debe ir después de `5` en el array ordenado.

Repetimos este proceso para todos los elementos del array, y el resultado es un array ordenado de números.

### Manejo de valores `undefined` y posiciones vacías

También es importante entender cómo el método `sort` maneja los valores `undefined` y las posiciones vacías en un array.

Cuando el método `sort` encuentra un valor `undefined`, no pasa ese valor a la función de comparación. En su lugar, los valores `undefined` se mueven automáticamente al final del array.

A continuación se muestra un ejemplo que ilustra cómo `sort` maneja un array con un valor `undefined`:

- **Example code**

  ```js
  const fruits = ["Banana", undefined, "Apple", "Mango"];
  fruits.sort();
  
  console.log(fruits); // ["Apple", "Banana", "Mango", undefined]
  ```

Observa que el valor `undefined` se coloca al final de la matriz ordenada, después de todos los demás elementos.

De manera similar, cuando el método `sort` encuentra un espacio vacío en una matriz dispersa, conserva ese espacio vacío y lo mueve al final de la matriz. Si hay tanto valores `undefined` como espacios vacíos, los valores `undefined` aparecerán primero, seguidos de los espacios vacíos al final.

A continuación se muestra un ejemplo que ilustra este comportamiento:

- **Example code**

  ```js
  const arr = [, undefined, "banana", "apple"];
  arr.sort();
  
  console.log(arr); // ["apple", "banana", undefined, empty]
  ```

En este ejemplo, las cadenas `apple` y `banana` se ordenan primero alfabéticamente. Luego, el valor `undefined` se coloca después de ellas. Por último, se conserva el espacio vacío al final del array.

Aunque existen muchas otras formas de ordenar datos en programación, el método `sort` de JavaScript puede resultar útil y eficiente en muchos casos en los que se necesita ordenar un array de elementos.

---

## Cuestionario 7

1. **¿Qué hace el método `sort` en JavaScript?**

    - [ ] a)  Crea una copia del array y ordena esa copia.

    - [x] b)  Ordena los elementos de un array sin moverlos de su lugar. //correcto

    - [ ] c)  Solo ordena números.

    - [ ] d)  Por defecto, ordena los elementos en orden descendente.

1. **¿Por qué los números no se ordenan como se espera al usar el método `sort` sin una función de comparación?**

    - [ ] a) El método sort no puede ordenar números.

    - [ ] b) Los elementos se comparan como cadenas basándose en unidades de código UTF-16. //correcto

    - [x] c) El método sort distingue entre mayúsculas y minúsculas.

    - [ ] d) El método solo funciona con cadenas.

1. **¿Qué debería devolver una función de comparación si `a` debe ir después de `b`?**

    - [ ] a) Un valor negativo.

    - [ ] b) Cero.

    - [ ] c) Un valor positivo. //correcto

    - [x] d) undefined

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---

## Tema 8: ¿Cómo funcionan los métodos `every()` y `some()`?

Cuando trabajas con matrices en JavaScript, a menudo te interesa verificar si todos los elementos de una matriz cumplen con una condición determinada, o si al menos un elemento cumple con esa condición.

Ahí es donde los métodos `every()` y `some()` resultan útiles. Estos métodos son herramientas poderosas que pueden simplificar tu código y hacerlo más legible.

Comencemos con el método `every()`. Este método comprueba si todos los elementos de un array pasan una prueba implementada por una función proporcionada. En términos más sencillos, verifica si cada uno de los elementos de tu array cumple con una condición que tú especifiques.

El método `every()` devuelve `true` si la función proporcionada devuelve `true` para todos los elementos del array. Si algún elemento no pasa la prueba, el método devuelve inmediatamente `false` y deja de revisar los elementos restantes.

Aquí hay un ejemplo para ilustrar cómo funciona `every()`:

- **Example code**

  ```js
  const numbers = [2, 4, 6, 8, 10];
  const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);
  
  console.log(hasAllEvenNumbers); // true
  ```

En este ejemplo, estamos verificando si todos los números del array son pares. La función que le pasamos a `every()` verifica si cada número es divisible por `2` sin resto. Dado que todos los números de nuestro array son, de hecho, pares, `hasAllEvenNumbers` será verdadero.

Ahora, veamos el método `some()`.

Mientras que `every()` verifica si todos los elementos cumplen una condición, `some()` verifica si al menos un elemento cumple la condición. El método `some()` devuelve `true` tan pronto como encuentra un elemento que cumple la condición. Si ningún elemento cumple la condición, devuelve `false`.

Aquí hay un ejemplo de cómo funciona `some()`:

- **Example code**

  ```js
  const numbers = [1, 3, 5, 7, 8, 9];
  const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);
  
  console.log(hasSomeEvenNumbers); // true
  ```

En este ejemplo, estamos verificando si algún número del array es par. La función que pasamos a `some()` es la misma que antes. Aunque la mayoría de los números de nuestro array son impares, `hasEven` será `true` porque hay al menos un número par (`8`) en el array.

Tanto `every()` como `some()` son muy útiles cuando necesitas validar datos o verificar ciertas condiciones en tus arrays. A menudo pueden reemplazar bucles y sentencias condicionales más extensos, lo que hace que tu código sea más limpio y expresivo.

Es importante señalar que ambos métodos dejan de ejecutarse tan pronto como pueden determinar el resultado. En el caso de `every()`, esto significa que se detiene tan pronto como encuentra un resultado `false`. En el caso de `some()`, se detiene tan pronto como encuentra un resultado `true`. Esto puede ser beneficioso para el rendimiento, especialmente con arreglos grandes.

---

## Cuestionario 8

1. **¿Qué devuelve el método `every` si todos los elementos del array cumplen con la condición dada?**

    - [ ] a)  `false`

    - [x] b)  `true` //correcto

    - [ ] c)  `undefined`

    - [ ] d)  Depende de la condición.

2. **Si usas el método `some` en un array vacío, ¿qué valor devolverá?**

    - [ ] a) `true`

    - [ ] b) `false` //correcto

    - [x] c) `undefined`

    - [ ] d) El método solo funciona con cadenas.

3. **¿Qué método usarías para verificar si al menos un elemento de un array es mayor que `10`?**

    - [ ] a) `every`

    - [x] b) `some` //correcto

    - [ ] c) `filter`

    - [ ] d) `map`

[☝️](#trabajar-con-funciones-de-orden-superior-y-callbacks)

---
