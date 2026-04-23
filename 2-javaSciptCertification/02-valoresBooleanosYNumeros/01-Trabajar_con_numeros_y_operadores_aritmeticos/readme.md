# Trabajar con números y operadores aritméticos

En JavaScript, los números se representan utilizando el tipo de datos `number`. Este tipo de datos puede representar tanto números enteros como números de punto flotante (decimales). Además, JavaScript proporciona una variedad de operadores aritméticos que te permiten realizar operaciones matemáticas con estos números.

---

## Tema 1: ¿Qué es el tipo `Number` en JavaScript y cuáles son los diferentes tipos de números disponibles?

El tipo `Number` es uno de los tipos de datos más utilizados en JavaScript y en otros lenguajes de programación. Los números pueden parecer sencillos, pero hay mucho que explorar en lo que respecta a los números en JavaScript. Así que vamos a profundizar en el tema. En JavaScript, el tipo de datos `Number` representa un valor numérico.

A diferencia de muchos otros lenguajes de programación que separan los números enteros y los números de punto flotante en tipos diferentes, JavaScript utiliza un tipo `Number` unificado para representar los números. Esto significa que puedes trabajar con números enteros, decimales e incluso valores numéricos especiales, todos bajo el mismo tipo de datos `Number`.

Aquí tienes un ejemplo básico que muestra que los números enteros, los números de punto flotante y los números negativos son todos del tipo `Number`:

- **Example code**

  ```js
  const wholeNumber = 50;
  const decimalNumber = 4.5;
  const negativeNumber = -7;

  console.log(typeof wholeNumber); // number
  console.log(typeof decimalNumber); // number
  console.log(typeof negativeNumber); // number
  ```

El tipo `Number` de JavaScript incluye diversos tipos de valores numéricos, que van desde simples números enteros y números de punto flotante hasta casos especiales como `Infinity` y `NaN` (por sus siglas en inglés, "Not a Number"). Analicemos los principales tipos con los que te encontrarás. Los números enteros son números sin parte fraccionaria ni decimal. Pueden ser positivos, negativos o cero. A continuación, te mostramos algunos ejemplos:

- **Example code**

  ```js
  const positiveInteger = 100;
  const negativeInteger = -25;
  const zero = 0;

  console.log(typeof positiveInteger); // number
  console.log(typeof negativeInteger); // number
  console.log(typeof zero); // number
  ```

Los números de punto flotante son números con decimales. Los desarrolladores de JavaScript suelen referirse a ellos simplemente como `floats`. Los `floats` resultan útiles cuando se necesita mayor precisión, como al trabajar con medidas o divisas. A continuación, te mostramos algunos ejemplos:

- **Example code**

  ```js
  const floatingPointNumber = 4.5;
  const anotherFloat = 89.56;
  const oneMoreFloat = 16.462;
  
  console.log(typeof floatingPointNumber); // number
  console.log(typeof anotherFloat); // number
  console.log(typeof oneMoreFloat); // number
  ```

JavaScript puede representar números que superan el límite máximo mediante el valor `Infinity`. Esto ocurre cuando intentas dividir un número entre cero o, en raras ocasiones, cuando se supera el límite superior del tipo `Number`. A continuación, te mostramos un ejemplo:

- **Example code**

  ```js
  const infiniteNumber = 1 / 0;
  console.log(infiniteNumber); // Infinity
  console.log(typeof infiniteNumber); // number
  ```

A veces, en JavaScript, algunas operaciones matemáticas no dan como resultado un número válido. Por ejemplo, si intentas realizar una operación matemática con algo que no es un número, obtendrás `NaN`, que significa "Not a Number" (no es un número):

- **Example code**

  ```js
  const notANumber = 'hello world' / 2;
  console.log(notANumber); // NaN
  ```

Sorprendentemente, el tipo de `NaN` también es `Number`:

- **Example code**

  ```js
  const notANumber = 'hello world' / 2;
  console.log(typeof notANumber); // number
  ```

Además del sistema decimal estándar (base 10), JavaScript también admite números en diferentes bases, como binaria, octal y hexadecimal. El binario es un sistema de base 2 que utiliza solo los dígitos 1 y 0. El octal es un sistema de base 8 que utiliza solo los dígitos del 0 al 7. El hexadecimal es un sistema de base 16 que utiliza los dígitos del 0 al 9 y las letras de la a a la f, como se ve en los colores hexadecimales de CSS.

---

## Cuestionario 1

1. **¿Cuál de las siguientes opciones describe mejor el tipo `Number` de JavaScript?**

    - [ ] a) Solo incluye números enteros.
    - [x] b) Abarca tanto números enteros como números de punto flotante, además de casos especiales como el infinito y NaN. //correcto
    - [ ] c) Se limita a operaciones aritméticas simples.
    - [ ] d) Excluye valores especiales como el infinito y NaN.

2. **¿Cuándo resultan más útiles los números de punto flotante en JavaScript?**

    - [ ] a) Al trabajar con números enteros.
    - [ ] b) Cuando necesitas realizar operaciones aritméticas sencillas.
    - [x] c) Cuando necesitas mayor precisión, como en mediciones o divisas. //correcto
    - [ ] d) Cuando trabajas exclusivamente con números enteros.

3. **¿En qué situaciones puedes encontrarte con el valor `Infinity` en JavaScript?**

    - [ ] a) Al multiplicar dos números cualesquiera.
    - [ ] b) Cuando un número supera el límite inferior del tipo `Number`.
    - [ ] c) Al concatenar strings.
    - [x] d) Al dividir un número entre cero o al superar el límite superior del tipo `Number`. //correcto

[☝️](#trabajar-con-números-y-operadores-aritméticos)

---

## Tema 2: ¿Cuáles son los diferentes operadores aritméticos en JavaScript?

JavaScript ofrece herramientas para realizar operaciones aritméticas básicas con números, como la suma, la resta, la multiplicación y la división. JavaScript también incluye operadores para operaciones aritméticas más complejas, como el resto y la elevación a una potencia.

Todas estas herramientas se denominan operadores aritméticos. Veamos estos operadores en detalle, cómo usarlos y cómo combinarlos.

El operador de suma es el signo más (`+`). El operador de suma te permite hallar el total de dos o más números. En las operaciones de suma, el orden de los números no importa:

- **Example code**

  ```js
  const num1 = 10;
  const num2 = 5;
  const num3 = 15;
  
  const result1 = num1 + num2;
  const result2 = num2 + num1;
  const result3 = num2 + num1 + num3;
  
  console.log(result1); // 15
  console.log(result2); // 15
  console.log(result3); // 30
  ```

El operador de resta es el signo menos (`-`). Permite calcular la diferencia entre dos números. Usa el signo menos cuando quieras restar un número de otro, normalmente uno más pequeño de uno más grande:

- **Example code**

  ```js
  const difference = 10 - 5;
  console.log(difference); // 5
  ```

Si el número más pequeño aparece primero, obtendrás un resultado negativo:

- **Example code**

  ```js
  const difference = 5 - 10;
  console.log(difference); // -5
  ```

También puedes asignar los números a variables y realizar la resta utilizando los nombres de las variables:

- **Example code**

  ```js
  const num1 = 10;
  const num2 = 5;
  const result = num1 - num2;
  
  console.log(result); // 5
  ```

En JavaScript, el operador de multiplicación se representa con un asterisco (`*`) y se utiliza para calcular el producto de dos o más números. El orden de los números que se multiplican no importa:

- **Example code**

  ```js
  const num1 = 10;
  const num2 = 5;
  const num3 = 15;
  
  const result1 = num1 * num2;
  const result2 = num2 * num1;
  const result3 = num2 * num1 * num3;
  
  console.log(result1); // 50
  console.log(result2); // 50
  console.log(result3); // 750
  ```

En JavaScript, el operador de división es la barra (`/`), que difiere del símbolo de división utilizado en las matemáticas tradicionales (`÷`). Las operaciones de división se realizan con el operador de división. En este caso, el orden de los números que se dividen es importante:

- **Example code**

  ```js
  const num1 = 10;
  const num2 = 5;
  const num3 = 15;
  
  const result1 = num1 / num2;
  const result2 = num2 / num1;
  const result3 = num2 / num1 / num3;
  
  console.log(result1); // 2
  console.log(result2); // 0.5
  console.log(result3); // 0.03333333333333333
  ```

Es importante tener en cuenta que, si intentas dividir entre cero, JavaScript devolverá `Infinity`:

- **Example code**

  ```js
  const result = 10 / 0; 

  console.log(result); // Infinity
  ```

Asegúrate de evitar ese tipo de cálculos para no obtener resultados inesperados en tu código.

El operador de resto, representado por el signo de porcentaje (`%`), devuelve el resto de una división. En matemáticas, el resto es el valor que queda después de realizar una división:

- **Example code**

  ```js
  const num1 = 10;
  const num2 = 3;
  const remainder = num1 % num2;
  
  console.log(remainder); // 1
  ```

El operador de elevamiento a una potencia, representado por dos asteriscos (`**`), eleva un número a la potencia de otro:

- **Example code**

  ```js
  const num1 = 2;
  const num2 = 3;
  
  const exponent = num1 ** num2;
  console.log(exponent); // 8
  ```

Es posible combinar operadores en una misma operación o expresión:

- **Example code**

  ```js
  const result = 10 + 5 * 2 - 8 / 4;
  console.log(result); // 18
  ```

Cuando se combinan diferentes operadores en una misma expresión, el motor de JavaScript sigue un sistema denominado precedencia de operadores para determinar el orden de las operaciones. La precedencia de operadores determina el orden en que se ejecutan las operaciones en las expresiones. Aprenderás más sobre la precedencia de operadores en lecciones futuras.

---

## Cuestionario 2

1. **¿Cuál de los siguientes operadores debes usar para restar un número de otro?**

    - [ ] a) `+`
    - [x] b) `-` //correcto
    - [ ] c) `*`
    - [ ] d) `/`

1. **¿Cuál es el resultado del siguiente código?**

    ```js
    const result = 4 / 0;
    console.log(result);
    ```

    - [x] a) `Infinity` //correcto
    - [ ] b) `4`
    - [ ] c) `1`
    - [ ] d) `16`

1. **¿Cuál es el resultado del siguiente código?**

    ```js
    const remainder = 5 % 3;
    console.log(remainder);
    ```

    - [ ] a) `15`
    - [x] b) `2` //correcto
    - [ ] c) `3`
    - [ ] d) `1.6666666666666667`

[☝️](#trabajar-con-números-y-operadores-aritméticos)

---

## Tema 3: ¿Qué sucede cuando intentas realizar cálculos con números y strings?

JavaScript es un lenguaje en el que las cosas a veces funcionan de maneras sorprendentes, o incluso extrañas. Una de esas sorpresas ocurre cuando mezclas números y strings en los cálculos. Lo primero que probablemente intentes es sumar un número y un string. En JavaScript, el operador `+` tiene una doble función. Se encarga tanto de la suma como de la concatenación de strings, que es una forma de unir dos strings.

Cuando usas `+` con un número y una string, JavaScript decide tratarlos a ambos como strings y los une. Si compruebas el tipo del resultado con el operador `typeof`, verás que efectivamente es una string:

- **Example code**

  ```js
  const result = 5 + '10';
  
  console.log(result); // 510
  console.log(typeof result); // string
  ```

¿Qué crees que pasará si cambias el orden del `5` y el `'10'`?

- **Example code**

  ```js
  const result = '10' + 5;
  
  console.log(result); // 105
  console.log(typeof result); // string
  ```

Como puedes ver, ha pasado lo mismo. JavaScript interpreta `'10'` como un string y `5` como un número, por lo que convierte el número en un string y los une. A esto se le conoce como coerción de tipos. La coerción de tipos se produce cuando un valor de un tipo de datos se convierte en otro.

Las cosas se ponen más interesantes cuando intentas realizar otras operaciones aritméticas como la resta, la multiplicación o la división con un string y un número. En estos casos, JavaScript intenta convertir el string en un número antes de hacer el cálculo: ¡otra conversión de tipos! Esto es lo que sucede:

- **Example code**

  ```js
  const subtractionResult = '10' - 5;
  console.log(subtractionResult); // 5
  console.log(typeof subtractionResult); // number
  
  const multiplicationResult = '10' * 2;
  console.log(multiplicationResult); // 20
  console.log(typeof multiplicationResult); // number
  
  const divisionResult = '20' / 2;
  console.log(divisionResult); // 10
  console.log(typeof divisionResult); // number
  ```

En los ejemplos anteriores, JavaScript convierte correctamente el string `'10'` o `'20'` en un número y, a continuación, realiza el cálculo. Como resultado, `'10' - 5` da `5`, `'10' * 2` da `20` y `'20' / 2` da `10`.

Pero, ¿qué pasa si el string no parece un número? Veamos qué ocurre en ese caso:

- **Example code**

  ```js
  const subtractionResult = 'abc' - 5;
  console.log(subtractionResult); // NaN
  console.log(typeof subtractionResult); // number
  
  const multiplicationResult = 'abc' * 2;
  console.log(multiplicationResult); // NaN
  console.log(typeof multiplicationResult); // number
  
  const divisionResult = 'abc' / 2;
  console.log(divisionResult); // NaN
  console.log(typeof divisionResult); // number
  ```

En los ejemplos anteriores, la cadena `'abc'` no representa un valor numérico válido, por lo que JavaScript no puede convertirla en un número significativo. Cuando dicha conversión falla, JavaScript devuelve `NaN`, que significa "Not a Number" (No es un número). `NaN` es un valor especial del tipo `Number` que representa un número no válido o irrepresentable.

¿Qué pasa si realizas operaciones aritméticas con un booleano (`true` o `false`)? Veamos qué sucede. JavaScript trata a los booleanos como números en las operaciones matemáticas: `true` se convierte en `1` y `false` se convierte en `0`.

- **Example code**

  ```js
  const result1 = true + 1;
  console.log(result1); // 2
  console.log(typeof result1); // number
  
  const result2 = false + 1;
  console.log(result2); // 1
  console.log(typeof result2); // number
  
  const result3 = 'Hello' + true;
  console.log(result3); // "Hellotrue"
  console.log(typeof result3); // string
  ```

En los dos primeros ejemplos, `true + 1` dio como resultado `2`, y `false + 1` dio como resultado `1`. En el tercer ejemplo, `'Hello' + true`, JavaScript convirtió `true` en un string y la concatenó con `'Hello'`, lo que dio como resultado `'Hellotrue'`, que es un string.

En cuanto a `null` y `undefined`, JavaScript trata `null` como `0` y `undefined` como `NaN` en las operaciones matemáticas:

- **Example code**

  ```js
  const result1 = null + 5;
  console.log(result1); // 5
  console.log(typeof result1); // number
  
  const result2 = undefined + 5;
  console.log(result2); // NaN
  console.log(typeof result2); // number
  ```

JavaScript suele realizar conversiones de tipos, lo que implica convertir automáticamente tipos de datos como números, strings y valores booleanos, a veces de formas inesperadas. Comprender estas conversiones es fundamental para evitar errores y escribir código robusto en tus proyectos.

---

## Cuestionario 3

1. **¿Qué sucede cuando ejecutas el siguiente código?**

    ```js
    const result = 3 + "19";
    ```

    - [ ] a) JavaScript ignora el string y solo realiza la operación con el número.
    - [ ] b) JavaScript genera un error cuando se intenta mezclar strings y números en operaciones aritméticas.
    - [x] c) JavaScript convierte el número `3` en el string `"3"`, concatena las dos strings y asigna el valor `"319"` a `result`. //correcto
    - [ ] d) JavaScript convierte el string `"19"` en el número `19`, realiza la operación y asigna el valor `22` a `result`.

2. **¿Qué sucede cuando ejecutas el siguiente código?**

    ```js
    const result = "6" - 4;
    ```

    - [ ] a) La conversión falla y JavaScript devuelve `NaN`.
    - [ ] b) JavaScript convierte el número `4` en el string `"4"`, concatena los dos strings y asigna el valor `"64"` a `result`.
    - [ ] c) Se asigna el valor `Infinity` a `result`.
    - [x] d) JavaScript convierte la string `"6"` en el número `6`, realiza la operación y asigna el valor `2` a `result`. //correcto

3. **¿Qué sucede cuando se realizan operaciones aritméticas con un valor booleano (`true` o `false`) en JavaScript?**

    - [ ] a) JavaScript genera un error.
    - [x] b) JavaScript ignora el valor booleano y solo realiza la operación con los números. //correcto
    - [ ] c) JavaScript trata a `true` como `1` y a `false` como `0` en las operaciones aritméticas.
    - [ ] d) JavaScript convierte el valor booleano en un string antes de realizar la operación.

[☝️](#trabajar-con-números-y-operadores-aritméticos)

---
