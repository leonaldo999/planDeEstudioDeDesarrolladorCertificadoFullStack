# Trabajar con bucles

En este articulo, aprenderás a usar bucles para ejecutar un bloque de código varias veces.

---

## Tema 1: ¿Cómo funcionan los bucles y la iteración en JavaScript?

En programación, los bucles se utilizan para repetir un bloque de código varias veces.

Un ejemplo de bucle sería cuando estás diseñando un programa que necesita mostrar una lista de elementos. Podrías usar un bucle para mostrar cada uno de los elementos de la lista.

Otro ejemplo sería cuando estás diseñando un juego y quieres mover un personaje por la pantalla. Podrías usar un bucle para mover el personaje una cierta cantidad de píxeles cada vez que se ejecute el bucle.

En JavaScript, hay varios tipos de bucles que puedes usar. En esta lección, veremos el bucle for. Esta es la sintaxis básica de un bucle for:

- **Example code**

  ```js
  for (initialization; condition; increment or decrement) {
    // code block to be executed
  }
  ```

La instrucción de inicialización se ejecuta antes de que comience el bucle. Normalmente se utiliza para inicializar una variable contadora. Una variable contadora es una variable que se utiliza para llevar la cuenta de cuántas veces se ha ejecutado el bucle.

La instrucción de condición se evalúa antes de cada iteración del bucle. Una iteración es una sola pasada por el bucle.

Si la condición es verdadera, se ejecuta el bloque de código dentro del bucle. Si la condición es falsa, el bucle se detiene y se pasa al siguiente bloque de código.

La última parte del bucle es la instrucción de incremento/decremento. Esta instrucción se ejecuta después de cada iteración del bucle. Se utiliza normalmente para incrementar o decrementar la variable contador.

- **Example code**

  ```js
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

En la primera parte del ejemplo anterior, inicializamos una variable contadora `i` con el valor `0`. Es una convención habitual utilizar `i` como variable contadora en un bucle `for`.

La siguiente parte consiste en comprobar la condición. En este caso, la condición comprueba si `i` es menor que `5`. Dado que `i` es `0`, la condición es verdadera y se ejecuta el bloque de código dentro del bucle.

El bloque de código dentro del bucle sirve para registrar el valor de `i` en la consola. El valor de `i` es `0`, por lo que la consola mostrará el valor `0`.

Luego se ejecuta la instrucción de incremento. En este caso, incrementamos `i` en `1`. Así que ahora `i` es `1`.

A continuación, verificamos la condición nuevamente, que consiste en comprobar si `i` es menor que `5`. Dado que `i` ahora es `1`, la condición sigue siendo verdadera, y el bloque de código dentro del bucle se ejecuta de nuevo.

Seguimos repitiendo este proceso hasta que la condición sea falsa. En este caso, cuando `i` es `5`, la condición es falsa y el bucle se detiene.

Cuando trabajes con bucles, debes tener cuidado de no crear una condición que sea siempre verdadera. Si lo haces, el bucle se ejecutará para siempre y tu programa se bloqueará. Esto se conoce como un bucle infinito.

Es posible crear bucles `for` anidados. Un bucle anidado es aquel en el que se coloca un bucle dentro de otro. Más adelante veremos ejemplos de cuándo podría ser conveniente hacer esto.

Los bucles pueden ser útiles en programación cuando necesitas repetir un bloque de código un cierto número de veces. Aunque trabajar con bucles `for` puede resultar complicado al principio, con la práctica le tomarás el truco.

---

## Cuestionario 1

1. **¿Cuál es el propósito de la instrucción de inicialización en un bucle `for`?**

    - [ ] a) Para ejecutar código repetidamente.
    - [ ] b) Para comprobar si el bucle debe seguir ejecutándose.
    - [x] c) Para establecer una variable contadora antes de que comience el bucle. //correcto
    - [ ] d) Para incrementar o decrementar la variable contadora.

2. **¿Qué sucede si la condición de un bucle `for` siempre es `true`?**

    - [ ] a) El bucle se ejecutará un número limitado de veces.
    - [ ] b) El bucle se ejecutará una vez y luego se detendrá.
    - [ ] c) El bucle nunca se ejecutará.
    - [x] d) El bucle se ejecutará indefinidamente y podría provocar que el programa se bloquee. //correcto

3. **En el siguiente ejemplo de bucle `for`, ¿cuál será el resultado?**

    ```js
    for (let i = 2; i <= 6; i += 2) {
      console.log(i);
    }
    ```

    - [x] a) `2, 4, 6` //correcto
    - [ ] b) `2, 3, 4, 5, 6`
    - [ ] c) `2, 4, 6, 8`
    - [ ] d) `1, 2, 3, 4, 5, 6`

[☝️](#trabajar-con-bucles)

---

## Tema 2: ¿Cómo funciona el bucle `for...of` y cuándo se debe usar?

El bucle `for...of` se utiliza cuando necesitas recorrer los valores de un objeto iterable. Algunos ejemplos de objetos iterables son los arrays y los strings.

Esta es la sintaxis básica del bucle `for...of`:

- **Example code**

  ```js
  for (variable of iterable) {
    // code block to be executed
  }
  ```

La variable del ejemplo representa el valor actual del iterable sobre el que se está ejecutando el bucle.

Si tienes un array de números, la variable sería el número actual del array. Si tienes un string, la variable sería el carácter actual del string.

Veamos algunos ejemplos para que puedas entender mejor cómo funciona el bucle `for...of`.

En este primer ejemplo tenemos un array de números y queremos recorrer cada número y registrarlo en la consola.

- **Example code**

  ```js
  const numbers = [1, 2, 3, 4, 5];
  
  for (const num of numbers) {
    console.log(num);
  }
  ```

Hemos creado una variable llamada `num` que representará el número actual de la matriz. En la primera iteración, `num` será 1; en la segunda, `num` será `2`, y así sucesivamente.

Dentro del bucle, estamos mostrando el número actual en la consola.

Aquí hay otro ejemplo en el que tenemos un string y queremos recorrer cada carácter y mostrarlo en la consola.

- **Example code**

  ```js
  const str = 'freeCodeCamp';

  for (let char of str) {
    console.log(char);
  }
  ```

En este ejemplo, hemos creado una variable llamada `char` que representará el carácter actual del string.

En cada iteración, el bucle mostrará el carácter actual en la consola.

Es importante tener en cuenta que puedes usar `let` o `const` al declarar la variable en un bucle `for...of`.

Sin embargo, si vas a usar `const`, asegúrate de que el valor de la variable no cambie dentro del bucle. Si lo hace, obtendrás un error.

Aquí hay un ejemplo del uso de `const` que da como resultado un error:

- **Example code**

  ```js
  const numbers = [1, 2, 3, 4, 5];

  for (const num of numbers) {
    console.log(num);
    num = num + 1; // This will cause an error
  }
  ```

En este ejemplo, intentamos modificar el valor de `num` dentro del bucle. Como hemos declarado `num` con `const`, aparecerá un error. Por lo tanto, si necesitas modificar el valor de la variable dentro del bucle, utiliza `let` en su lugar.

Veamos un último ejemplo con una matriz de objetos.

- **Example code**

  ```js
  const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 40 }
  ];
  
  for (const person of people) {
    console.log(`${person.name} is ${person.age} years old`);
  }
  ```

En este ejemplo, tenemos un array de objetos llamada `people`. Cada objeto tiene una propiedad de `name` y otra de `age`.

Al recorrer el array, creamos una variable llamada `person` que representará al objeto actual del array.

Dentro del bucle, estamos mostrando un mensaje en la consola.

El primer mensaje será `John is 30 years old`, el segundo mensaje será `Jane is 25 years old` y el tercer mensaje será `Jim is 40 years old`.

Los bucles `for...of` son muy útiles cuando necesitas recorrer los valores de un iterable, como un array o un string. Además, son fáciles de leer y pueden hacer que tu código sea más conciso.

---

## Cuestionario 2

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    const colors = ['red', 'green', 'blue'];
    
    for (const color of colors) {
      console.log(color);
    }
    ```

    - [x] a)  red
              green
              blue //correcto
    - [ ] b)  red
              red
              red
    - [ ] c)  color
              color
              color
    - [ ] d)  blue
              blue
              red
              red
              green
              green

1. **¿Qué pasa si intentas reasignar un valor a una variable declarada con `const` dentro de un bucle `for...of`?**

    - [ ] a) El valor se ha reasignado correctamente.
    - [ ] b) El bucle omitirá la iteración en la que se produce la reasignación.
    - [x] c) Se producirá un error. //correcto
    - [ ] d) El bucle terminará inmediatamente.

1. **En el siguiente fragmento de código, ¿qué se registra en la consola?**

    - [ ] a)  APPLE
              APPLE
              APPLE
    - [ ] b)  apple
              banana
              cherry
    - [x] c)  APPLE
              BANANA
              CHERRY //correcto
    - [ ] d)  FRUIT
              FRUIT
              FRUIT

[☝️](#trabajar-con-bucles)

---

## Tema 3: ¿Qué es el bucle `for...in` y cuándo se debe usar?

El bucle `for...in` es ideal cuando necesitas recorrer las propiedades de un objeto. Este bucle recorrerá todas las propiedades enumerables de un objeto, incluidas las propiedades heredadas y las propiedades no numéricas.

Una propiedad heredada es una propiedad que se hereda de la cadena de prototipos del objeto. Una propiedad no numérica es una propiedad que no es un número ni una cadena que se pueda convertir en un número.

Esta es la sintaxis básica de un bucle `for...in`:

- **Example code**

  ```js
  for (variable in object) {
    // code block to be executed
  }
  ```

La variable del ejemplo representa la propiedad actual del objeto sobre el que se está ejecutando el bucle.

Veamos algunos ejemplos para que puedas entender mejor cómo funciona el bucle `for...in`.

En este primer ejemplo tenemos un objeto `fruit` y queremos recorrer cada una de sus propiedades y mostrar su valor en la consola.

- **Example code**

  ```js
  const fruit = {
    name: 'apple',
    color: 'red',
    price: 0.99
  };
  
  for (const prop in fruit) {
    console.log(fruit[prop]);
  }
  ```

La variable `prop` representa la propiedad actual del objeto. Se utiliza `fruit[prop]` para acceder al valor de cada propiedad.

En la primera iteración, `prop` será `name`. En la segunda iteración, `prop` será `color`, y así sucesivamente.

Los resultados que se registrarán en la consola serán `apple`, `red` y `0.99`.

En este segundo ejemplo, tenemos un objeto anidado y queremos recorrer cada propiedad y registrar el valor en la consola.

- **Example code**

  ```js
  const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };
  ```

La propiedad `address` es un objeto en sí misma. El bucle `for...in` también recorrerá las propiedades del objeto `person` y mostrará todo el objeto `address` en la consola.

Este será el resultado que aparecerá en la consola:

- **Example code**

  ```bash
  John
  30
  { street: '123 Main St', city: 'Anytown', state: 'CA' }
  ```

Si quieres recorrer las propiedades del objeto `address`, puedes anidar otro bucle `for...in` dentro del primero.

- **Example code**

  ```js
  const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };
  
  function isObject(obj) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
  }
  
  for (const prop in person) {
    if (isObject(person[prop])) {
      for (const nestedProp in person[prop]) {
        console.log(person[prop][nestedProp]);
      }
    } else {
      console.log(person[prop]);
    }
  }
  ```

En este ejemplo, tenemos una función personalizada llamada `isObject` que comprueba si el valor es un objeto.

El método `Array.isArray` se utiliza para verificar si el valor es un array. Al colocar el operador lógico NOT (`¡`) delante del método, estamos verificando si el valor no es un array.

La razón por la que no podemos simplemente usar `typeof` equals `'object'` es porque los arrays también se consideran objetos en JavaScript. Queremos excluir los arrays de la verificación.

Además, debido a un error histórico en JavaScript, `typeof null` devuelve `'object'`. Por lo tanto, también queremos excluir los valores `null` de la comprobación.

Si la condición es verdadera, anidamos otro bucle `for...in` que recorrerá las propiedades del objeto anidado y registrará el valor en la consola.

La variable `nestedProp` representa la propiedad actual del objeto anidado.

Así es como se verá el resultado modificado en la consola:

- **Example code**

  ```bash
  "John"
  30
  "123 Main St"
  "Anytown"
  "CA"
  ```

Un bucle `for...in` resulta útil cuando necesitas recorrer las propiedades de un objeto.

No se recomienda utilizar un bucle `for...in` para recorrer los elementos de un array. En su lugar, utiliza un bucle `for...of` u otros métodos de array como `forEach`, `map`, `filter` y `reduce`, que aprenderás en lecciones futuras.
