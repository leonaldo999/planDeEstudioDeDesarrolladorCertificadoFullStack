# Trabajar con operadores de comparación y booleanos

En esta sección, aprenderás a usar operadores de comparación para comparar valores y obtener resultados booleanos (`true` o `false`). Estos operadores son fundamentales para tomar decisiones en tu código y controlar el flujo de ejecución.

---

## Tema 1: ¿Qué son los valores booleanos y cómo funcionan con los operadores de igualdad y desigualdad?

En una lección anterior, ya te introdujimos al concepto de los valores booleanos, pero en esta lección profundizaremos en cómo funcionan los valores booleanos y cómo funcionan los operadores de igualdad y desigualdad.

Los booleanos son un tipo de datos que solo admite los valores `true` y `false`. Son útiles porque te permiten realizar acciones basadas en ciertas condiciones. Los booleanos son esenciales cuando quieres evaluar si algo debe suceder o no, como decidir si alguien puede acceder a una determinada función de tu aplicación. A continuación, te mostramos un ejemplo en el que se asigna el valor `true` a una variable llamada `isOldEnoughToDrive`:

- **Example code**

  ```js
  let isOldEnoughToDrive = true;

  console.log(isOldEnoughToDrive); // true
  ```

Puedes usar esta variable dentro de una condición de la siguiente manera:

- **Example code**

  ```js
  let isOldEnoughToDrive = true;

  if (isOldEnoughToDrive) {
   console.log("You're old enough to drive"); // You're old enough to drive
  } else {
   console.log("Sorry, you are not old enough to drive");
  }
  ```

Una instrucción condicional te ayuda a tomar decisiones en tu código en función de una condición. En este ejemplo se utiliza lo que se conoce como una instrucción `if/else`.

Si `isOldEnoughToDrive` es `true`, entonces la frase `You're old enough to drive` se registrará en la consola. De lo contrario, si `isOldEnoughToDrive` es `false`, entonces la frase `Sorry, you are not old enough to drive` se registrará en la consola. Dado que la variable `isOldEnoughToDrive` está establecida en `true`, la primera frase se registrará en la consola. Aprenderás más sobre las sentencias `if/else` en una lección futura.

Para comparar dos valores, puedes usar el operador de igualdad o el de igualdad estricta. El resultado de la comparación será un valor booleano, ya sea `true` o `false`. Aquí tienes un ejemplo del uso del operador de igualdad para comparar una cadena y un número. El operador de igualdad se representa con un doble signo de igual (`==`).

- **Example code**

  ```js
  console.log(5 == "5"); // true
  ```

En este ejemplo, JavaScript convierte la cadena `"5"` en el número `5` y luego comprueba si son iguales. Dado que ambos valores son ahora iguales, el resultado es verdadero. El operador de igualdad utiliza la conversión de tipos antes de comprobar si cada valor es igual.

Esto difiere del operador de igualdad estricta, que no realiza la conversión de tipos. El operador de igualdad estricta verificará si los tipos son los mismos y si los valores son los mismos. A continuación se muestra un ejemplo en el que se utiliza el operador de igualdad estricta para comparar un número y una cadena. Este operador se representa con un triple signo de igualdad (`===`).

- **Example code**

  ```js
  console.log(5 === '5'); // false
  ```

La siguiente comparación dará un resultado `false`, ya que el tipo de datos string no es el mismo que el tipo de datos Number. Si necesitas comprobar si un valor no es igual a otro, puedes utilizar los operadores de desigualdad o de desigualdad estricta. A continuación se muestra un ejemplo del uso del operador de desigualdad (`!=`) para comparar un número con un string.

- **Example code**

  ```js
  console.log(5 != "5"); // false
  ```

En este ejemplo, el resultado sería `false` porque el operador de desigualdad primero convierte el valor del string en un número y luego compara los valores. Dado que los valores serían iguales, devolverá `false`. Si intentaras usar el operador de desigualdad estricta, obtendrías un resultado diferente. El operador de desigualdad estricta se representa con un signo de exclamación seguido de dos signos de igualdad (`!==`).

- **Example code**

  ```js
  console.log(5 !== "5"); // true
  ```

El resultado sería `true` porque el operador de desigualdad estricta no realiza ninguna conversión de tipos. Dado que el número `5` no es igual al string `"5"`, el resultado es `true`.

Se considera una buena práctica utilizar los operadores de desigualdad y de igualdad estrictos siempre que sea posible, ya que no realizan conversiones de tipos. En la mayoría de los casos, en los proyectos profesionales, verás códigos que suelen preferir estos dos operadores frente a los operadores de desigualdad y de igualdad.

---

## Cuestionario 1

1. **¿Cuál es el uso principal de los valores booleanos en JavaScript?**

    - [ ] a) Para almacenar números y strings de caracteres.
    - [ ] b) Para realizar operaciones aritméticas.
    - [x] c) Para representar valores `true` o `false` y tomar decisiones basadas en condiciones. //correcto
    - [ ] d) Para recorrer matrices.

2. **¿Por qué es recomendable utilizar la igualdad estricta (`===`) en lugar de la igualdad normal (`==`) en JavaScript?**

    - [ ] a) Convierte los tipos de datos automáticamente.
    - [ ] b) Permite comparar tipos diferentes sin problemas.
    - [x] c) Comprueba tanto el valor como el tipo, lo que ofrece resultados más predecibles. //correcto
    - [ ] d) Es más rápido que la igualdad normal.

3. **¿Qué sucede cuando se utiliza la igualdad simple (`==`) en JavaScript?**

    - [ ] a) Solo compara los valores sin realizar ninguna conversión de tipos.
    - [x] b) Realiza una conversión de tipos, transformando los valores al mismo tipo antes de compararlos. //correcto
    - [ ] c) Comprueba tanto el valor como el tipo, al igual que la igualdad estricta (`===`).
    - [ ] d) Genera un error si los tipos no coinciden.

[☝️](#trabajar-con-operadores-de-comparación-y-booleanos)

---

## Tema 2: ¿Qué son los operadores de comparación y cómo funcionan?

Los operadores de comparación te permiten comparar dos valores y devuelven un resultado `true` o `false`. A continuación, puedes utilizar el resultado para tomar una decisión o controlar el flujo de tu programa. Las comparaciones se utilizan en sentencias `if`, bucles y muchas otras situaciones en las que necesitas tomar decisiones basadas en determinadas condiciones. Veamos cuáles son los operadores de comparación más comunes y cómo funcionan.

El operador mayor que, representado por un corchete angular (`>`), comprueba si el valor de la izquierda es mayor que el de la derecha:

- **Example code**

  ```js
  let a = 6;
  let b = 9;
  
  console.log(a > b); // false
  console.log(b > a); // true
  ```

El operador "mayor o igual que", representado por un corchete y el signo igual (`>=`), comprueba si el valor de la izquierda es mayor o igual que el de la derecha:

- **Example code**

  ```js
  let a = 6;
  let b = 9;
  let c = 6;
  
  console.log(a >= b); // false
  console.log(b >= a); // true
  console.log(a >= c); // true
  ```

El operador "menor que", representado por un corchete angular izquierdo (`<`), funciona de manera similar al `>`, pero a la inversa. Comprueba si el valor de la izquierda es menor que el de la derecha:

- **Example code**

  ```js
  let a = 6;
  let b = 9;
  
  console.log(a < b); // true
  console.log(b < a); // false
  ```

El operador "menor o igual que", representado por un corchete izquierdo y el signo igual (`<=`), comprueba si el valor de la izquierda es menor o igual que el de la derecha:

- **Example code**

  ```js
  let a = 6;
  let b = 9;
  let c = 6;
  
  console.log(a <= b); // true
  console.log(b <= a); // false
  console.log(a <= c); // true
  ```

---

## Cuestionario 2

1. **¿Qué hace el operador "mayor o igual que" (`>=`) en JavaScript?**

    - [ ] a) Comprueba si el valor de la izquierda es estrictamente mayor que el de la derecha.
    - [x] b) Comprueba si el valor de la izquierda es mayor o igual que el de la derecha. //correcto
    - [ ] c) Comprueba si el valor de la derecha es mayor que el de la izquierda.
    - [ ] d) Comprueba si ambos valores son iguales.

2. **¿En qué situaciones se suelen utilizar los operadores de comparación en JavaScript?**

    - [ ] a) Solo en operaciones aritméticas.
    - [x] b) En sentencias if, bucles y otras situaciones que requieran tomar decisiones basadas en condiciones. //correcto
    - [ ] c) Solo al trabajar con strings de caracteres.
    - [ ] d) Al definir funciones.

3. **¿Qué dos operadores de JavaScript evitan la conversión de tipos?**

    - [ ] a) `==` y `!=`.
    - [x] b) `===` y `!==`. //correcto
    - [ ] c) `>` y `<`.
    - [ ] d) `<=` y `>=`.

[☝️](#trabajar-con-operadores-de-comparación-y-booleanos)

---
