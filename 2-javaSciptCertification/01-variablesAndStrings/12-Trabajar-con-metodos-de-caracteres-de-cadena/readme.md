# Trabajar con métodos de caracteres de String

En esta sección, aprenderás a usar métodos de caracteres de cadena para manipular y trabajar con cadenas de texto en JavaScript. Los métodos de caracteres de cadena son funciones integradas que te permiten realizar diversas operaciones en cadenas, como buscar, reemplazar, dividir, unir y más.

---

## ¿Qué es *ASCII* y cómo funciona con `charCodeAt()` y `fromCharCode()`?

En programación, es fundamental comprender cómo se representan los caracteres como números. Aquí es donde entra en juego *ASCII*. *ASCII*, abreviatura de *American Standard Code for Information Interchange* `(Código Estándar Americano para el Intercambio de Información)`, es un estándar de codificación de caracteres que se utiliza en las computadoras para representar texto. Asigna un valor numérico a cada carácter, que es reconocido universalmente por las máquinas.

En esta lección, exploraremos qué es *ASCII*, cómo funciona y cómo los métodos de JavaScript como `charCodeAt()` y `fromCharCode()` se relacionan con la codificación de caracteres. Si bien los strings de JavaScript utilizan Unicode *(UTF-16)* internamente, los valores *ASCII* coinciden con los primeros 128 caracteres Unicode, por lo que los ejemplos basados en *ASCII* funcionan en JavaScript.

*ASCII* es un sistema para codificar caracteres como letras, dígitos y símbolos en valores numéricos. Cada carácter se asigna a un número específico.

Por ejemplo, la letra mayúscula `A` se representa con el número `65` en *ASCII*, mientras que la minúscula `a` se representa con el `97`. Esta codificación permite a las computadoras almacenar y manipular texto.

El estándar ASCII abarca 128 caracteres, entre los que se incluyen:

- Letras mayúsculas y minúsculas del alfabeto inglés (A-Z, a-z).
- Números (0-9).
- Signos de puntuación y símbolos comunes (!, @, #, etc.).
- Caracteres de control (como salto de línea y tabulación).

En JavaScript, puedes acceder al código numérico de un carácter utilizando el método `charCodeAt()`. Este método devuelve la unidad de código UTF-16 del carácter en un índice especificado. Para los primeros 128 caracteres, este valor coincide con el código *ASCII*.

Veamos un ejemplo:

- **Example code**

  ```js
  let letter = "A";
  console.log(letter.charCodeAt(0));  // 65
  ```

En este ejemplo, `A` es el primer carácter del string, y al llamar a `charCodeAt(0)` se obtiene su código numérico (que coincide con su valor *ASCII* para los caracteres latinos básicos), `65`.

También puedes usar este método con otros caracteres para averiguar sus valores numéricos:

- **Example code**

  ```js
  let symbol = "!";
  console.log(symbol.charCodeAt(0));  // 33
  ```

En este caso, el código numérico del signo de exclamación `!` se devuelve como `33` (lo cual coincide con su valor ASCII).

Mientras que `charCodeAt()` te ayuda a recuperar el código numérico de un carácter, el método `fromCharCode()` te permite hacer lo contrario: convertir una unidad de código UTF-16 (que coincide con ASCII para los caracteres básicos) en su carácter correspondiente.

Veamos cómo funciona:

- **Example code**

  ```js
  let char = String.fromCharCode(65);
  console.log(char);  //  A
  ```

En este ejemplo, `fromCharCode(65)` convierte el código numérico `65` (que corresponde al valor ASCII de la letra `A`) de nuevo en el carácter `A`.

Otro ejemplo sería convertir el número `97` en su letra minúscula correspondiente:

- **Example code**

  ```js
  let char = String.fromCharCode(97);
  console.log(char);  // a
  ```

Estos métodos resultan especialmente útiles cuando necesitas manipular o comparar caracteres en función de sus valores numéricos.

Por ejemplo, puedes usar `charCodeAt()` para comprobar si un carácter es mayúscula, minúscula o un dígito comparando su valor *ASCII*.

Por otro lado, `fromCharCode()` se puede utilizar para generar caracteres de forma dinámica a partir de sus códigos *ASCII*.

---

## Cuestionario 1

1. **¿Qué devuelve el método `charCodeAt()` cuando se aplica a un string en JavaScript?**

    - [ ] a) El número de caracteres del string.
    - [ ] b) El índice de un carácter en el string.
    - [x] c) La unidad de código UTF-16 de un carácter en el índice especificado. //correcto
    - [ ] d) La representación hexadecimal de un carácter.

2. **¿Qué resultado dará el siguiente código?**

    ```js
    console.log(String.fromCharCode(66));
    ```

    - [x] a) `B` //correcto
    - [ ] b) `b`
    - [ ] c) `6`
    - [ ] d) `A`

3. **¿Cuál de las siguientes opciones es un ejemplo de la utilidad de la codificación de caracteres en la programación?**

    - [ ] a) Para comprobar si un valor es `null` o `undefined`.
    - [ ] b) Para calcular la longitud de una string.
    - [ ] c) Para convertir un número en un valor de punto flotante.
    - [x] d) Para manipular caracteres en función de sus valores numéricos. //correcto

[☝️](#trabajar-con-métodos-de-caracteres-de-string)

---
