# Trabajar con operadores unarios y bit a bit

En esta sección, exploraremos los operadores unarios y bit a bit en JavaScript, que son herramientas poderosas para manipular datos a nivel de bits y realizar operaciones específicas en valores individuales.

---

## Tema 1: ¿Qué son los operadores unarios y cómo funcionan?

Los operadores unarios actúan sobre un solo operando para realizar operaciones como la conversión de tipos, la manipulación de valores o la comprobación de ciertas condiciones. Veamos algunos operadores unarios comunes y cómo funcionan.

El operador unario `+` convierte su operando en un número. Si el operando ya es un número, permanece sin cambios.

- **Example code**

  ```js
  const str = '42';
  const strToNum = +str;
  
  console.log(strToNum); // 42
  console.log(typeof str); // string
  console.log(typeof strToNum); // number
  ```

El signo `+` unario resulta útil cuando quieres asegurarte de que estás trabajando con un valor numérico. Como puedes imaginar, existe un operador de `-` unario. Este invierte el valor del operando. Funciona de manera similar al signo más unario, salvo que cambia el signo.

- **Example code**

  ```js
  const str = '42';
  const strToNegativeNum = -str;
  
  console.log(strToNegativeNum); // -42
  console.log(typeof str); // string
  console.log(typeof strToNegativeNum); // number
  ```

El operador lógico NOT, representado por un signo de exclamación (`!`), es otro operador unario. Invierte el valor booleano de su operando. Así, si el operando es `true`, se convierte en `false`, y si es `false`, se convierte en `true`.

- **Example code**

  ```js
  let isOnline = true;
  console.log(!isOnline); // false
  
  let isOffline = false;
  console.log(!isOffline); // true
  ```

El operador NOT bit a bit es un operador unario que se utiliza con menos frecuencia. Representado por una tilde, `~`, invierte la representación binaria de un número. Las computadoras almacenan los números en formato binario (1 y 0). El operador `~` invierte cada bit, lo que significa que cambia todos los 1 a 0 y todos los 0 a 1. Aprenderás más sobre el sistema binario y los bits en una lección futura.

- **Example code**

  ```js
  const num = 5; // The binary for 5 is 00000101

  console.log(~num); // -6
  ```

En este ejemplo, `5` se convirtió en `-6` porque al aplicar el operador `~` a `5`, se obtiene `-(5 + 1)`, lo que equivale a `-6` debido a la representación en complemento a dos. El complemento a dos es una forma en que las computadoras representan los números negativos en binario. Probablemente no usarás el NOT bit a bit con frecuencia, a menos que estés trabajando en tareas de programación de bajo nivel, como la manipulación directa de bits.

La palabra clave `void` es un operador unario que evalúa una expresión y devuelve un valor `undefined`.

- **Example code**

  ```js
  const result = void (2 + 2);

  console.log(result); // undefined
  ```

La palabra `void` también se utiliza habitualmente en los hipervínculos para impedir la navegación:

- **Example code**

  ```html
  <a href="javascript:void(0);">Click Me</a>
  ```

Por último, está el operador `typeof`, del que ya aprendiste en lecciones anteriores. Este devuelve el tipo de su operando como un string.

- **Example code**

  ```js
  const value = 'Hello world';

  console.log(typeof value); // string
  ```

---

## Cuestionario 1

1. **¿Para qué sirven los operadores unarios?**

    - [ ] a) Actúan sobre dos operandos para realizar operaciones aritméticas.
    - [x] b) Actúan sobre un solo operando para realizar tareas como la conversión de tipos, la manipulación de valores o la comprobación de condiciones. //correcto
    - [ ] c) Comparan dos valores para determinar si son iguales.
    - [ ] d) Solo realizan operaciones aritméticas.

1. **¿Qué hace el operador `typeof`?**

    - [ ] a) Convierte un valor en un string.
    - [x] b) Devuelve el tipo de su operando como un string. //correcto
    - [ ] c) Comprueba si dos valores son iguales.
    - [ ] d) Compara dos variables para realizar una conversión de tipos.

1. **¿¿Cómo funciona el operador `NOT` bit a bit en JavaScript?**

    - [ ] a) Multiplica el valor por `2`.
    - [ ] b) RSuma `1` al valor.
    - [x] c) Invierte cada bit, convirtiendo todos los `1` en `0` y todos los `0` en `1`. //correcto
    - [ ] d) Comprueba si el valor es positivo o negativo.

[☝️](#trabajar-con-operadores-unarios-y-bit-a-bit)

---

## Tema 2: ¿Qué son los operadores bit a bit y cómo funcionan?

Los operadores bit a bit en JavaScript son operadores especiales que operan sobre las representaciones binarias de los números. Para entender los operadores bit a bit, primero debemos comprender el concepto de bits y números binarios. En informática, un bit es la unidad más básica de información. Solo puede tener dos valores: `0` o `1`. El sistema binario es un sistema numérico que utiliza únicamente estos dos dígitos para representar todos los números.

Por ejemplo, la representación binaria del número decimal `10` es `1010`. En este sistema, cada dígito representa una potencia de `2`, comenzando por el dígito más a la derecha y aumentando a medida que nos desplazamos hacia la izquierda.

| Digito: | 1 | 0 | 1 | 0 |
| :---: | :---: | :---: | :---: | :---: |
| Potencia de 2: | 1.2³ | 0.2² | 1.2¹ | 0.2⁰ |
| Valor: | 8 | 0 | 2 | 0 |

En la tabla anterior, la primera fila muestra el número binario `1010`, la segunda fila muestra la potencia de `2` que representa cada posición binaria y la tercera fila muestra el resultado de cada multiplicación. Si sumas todos los valores de la tercera fila, el total es `10`.

Ahora, profundicemos en los operadores bit a bit. Estos operadores realizan operaciones sobre las representaciones binarias de los números. JavaScript ofrece varios operadores bit a bit, entre ellos AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), desplazamiento a la izquierda (`<<`) y desplazamiento a la derecha (`>>`).

El operador bit a bit AND (`&`) devuelve un `1` en cada posición de bit en la que los bits correspondientes de ambos operandos sean `1`. He aquí un ejemplo:

- **Example code**

  ```js
  let a = 5;  // Binary: 101
  let b = 3;  // Binary: 011
  console.log(a & b);  // 1 (Binary: 001)
  ```

En este ejemplo, realizamos una operación AND bit a bit entre `5` (`101` en binario) y `3` (`011` en binario). El resultado es `1` (`001` en binario) porque solo el bit más a la derecha es `1` en ambos números.

El operador OR bit a bit (`|`) devuelve un `1` en cada posición de bit en la que los bits correspondientes de uno o ambos operandos sean `1`. Por ejemplo:

- **Example code**

  ```js
  let a = 5;  // Binary: 101
  let b = 3;  // Binary: 011
  console.log(a | b);  // 7 (Binary: 111)
  ```

En este caso, el resultado es `7` (`111` en binario) porque al menos uno de los bits es `1` en cada posición.

El operador XOR (`^`) bit a bit devuelve un `1` en cada posición de bit en la que los bits correspondientes de uno de los operandos, pero no de ambos, sean `1`. Por ejemplo:

- **Example code**

  ```js
  let a = 5;  // Binary: 101
  let b = 3;  // Binary: 011
  console.log(a ^ b);  // 6 (Binary: 110)
  ```

El resultado es `6` (`110` en binario) porque el primer y el segundo bit contando desde la derecha son diferentes en los dos números.

El operador NOT bit a bit (`~`) invierte todos los bits de su operando. Por ejemplo:

- **Example code**

  ```js
  let a = 5;  // Binary: 101
  console.log(~a);  // -6
  ```

Esto puede parecer sorprendente, pero se debe a la forma en que se representan los números negativos en binario utilizando el complemento a dos.

El operador de desplazamiento a la izquierda (`<<`) desplaza todos los bits hacia la izquierda un número determinado de posiciones. Por ejemplo:

- **Example code**

  ```js
  let a = 5;  // Binary: 101
  console.log(a << 1);  // 10 (Binary: 1010)
  ```

Aquí, todos los bits se desplazan una posición hacia la izquierda, lo que equivale a multiplicar el número por `2`.

El operador de desplazamiento a la derecha (`>>`) desplaza todos los bits hacia la derecha. Por ejemplo:

- **Example code**

  ```js
  let a = 5;  // Binary: 101
  console.log(a >> 1);  // 2 (Binary: 10)
  ```

Aquí, todos los bits se desplazan una posición hacia la derecha, lo que equivale a dividir el número entre `2` y redondear hacia abajo.

Los operadores bit a bit se utilizan a menudo en la programación de bajo nivel y en la criptografía. Aunque quizá no sean tan habituales en la programación cotidiana con JavaScript, comprenderlos puede resultar útil para ciertas tareas especializadas y puede ayudarte a profundizar en tu comprensión del funcionamiento de las computadoras a un nivel fundamental.

---

## Cuestionario 2

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let a = 5;  // Binary: 101
    let b = 3;  // Binary: 011
    console.log(a & b);
    ```

    - [ ] a) `8`
    - [x] b) `1` //correcto
    - [ ] c) `7`
    - [ ] d) `15`

2. **¿Cuál será el resultado de la siguiente operación?**

    ```js
    let x = 8;  // Binary: 1000
    console.log(x << 2);
    ```

    - [ ] a) `4`
    - [ ] b) `16`
    - [x] c) `32` //correcto
    - [ ] d) `2`

3. **¿Cuál es la representación binaria del número `6`?**

    - [ ] a) `101`
    - [x] b) `110` //correcto
    - [ ] c) `111`
    - [ ] d) `100`

[☝️](#trabajar-con-operadores-unarios-y-bit-a-bit)

---
