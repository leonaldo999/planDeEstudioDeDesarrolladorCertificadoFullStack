# Trabajar con números y métodos numéricos comunes

En esta sección, aprenderás a trabajar con números y métodos numéricos comunes en JavaScript. Descubrirás cómo realizar operaciones matemáticas, redondear números y utilizar funciones numéricas para mejorar tus habilidades de programación.

---

## Tema 1: ¿Cómo funciona isNaN?

En JavaScript, `NaN` significa *"Not a Number"* (No es un número). Es un valor especial que representa un resultado numérico irrepresentable o indefinido. `NaN` es una propiedad del objeto global y también se considera un tipo de número en JavaScript, lo que a primera vista puede parecer contradictorio.

`NaN` suele ser el resultado de operaciones que deberían devolver un número, pero que no pueden producir un valor numérico significativo. Por ejemplo:

- **Example code**

  ```js
  let result = 0 / 0;
  console.log(result); // NaN
  ```

En este caso, dividir cero por cero no tiene sentido matemático, por lo que JavaScript devuelve `NaN`. Una propiedad peculiar de `NaN` es que no es igual a nada, ni siquiera a sí mismo:

- **Example code**

  ```js
  console.log(NaN === NaN); // false
  ```

Este comportamiento único hace que resulte complicado comprobar si un valor es `NaN` utilizando los operadores de comparación estándar. Para solucionar esto, JavaScript ofrece la función `isNaN()`. La propiedad `isNaN()` se utiliza para determinar si un valor es `NaN` o no. Sin embargo, es importante comprender cómo funciona `isNaN()`, ya que en ocasiones puede producir resultados inesperados. Así es como se comporta `isNaN()`:

- **Example code**

  ```js
  console.log(isNaN(NaN));       // true
  console.log(isNaN(undefined)); // true
  console.log(isNaN({}));        // true
  
  console.log(isNaN(true));      // false
  console.log(isNaN(null));      // false
  console.log(isNaN(37));        // false
  
  console.log(isNaN("37"));      // false: "37" is converted to 37
  console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
  console.log(isNaN(""));        // false: empty string is converted to 0
  console.log(isNaN(" "));       // false: string with a space is converted to 0
  
  console.log(isNaN("blabla"));  // true: "blabla" is not a number
  ```

Como puedes ver, `isNaN()` primero intenta convertir el parámetro en un número. Si no puede convertirlo, devuelve `true`. Este comportamiento puede dar lugar a resultados inesperados, especialmente cuando se trata de strings que pueden transformarse en números.

Debido a estas posibles inconsistencias, ES6 (la sexta edición de JavaScript, lanzada en 2015) introdujo `Number.isNaN()`. Este método no intenta convertir el parámetro en un número antes de realizar la comprobación. Solo devuelve `true` si el valor es exactamente `NaN`:

- **Example code**

  ```js
  console.log(Number.isNaN(NaN));        // true
  console.log(Number.isNaN(Number.NaN)); // true
  console.log(Number.isNaN(0 / 0));      // true
  
  console.log(Number.isNaN("NaN"));      // false
  console.log(Number.isNaN(undefined));  // false
  console.log(Number.isNaN({}));         // false
  console.log(Number.isNaN("blabla"));   // false
  ```

La función `number.isNaN()` ofrece una forma más confiable de detectar valores `NaN`, especialmente en los casos en que la conversión de tipos podría dar lugar a resultados inesperados con la función global `isNaN()`. En la práctica, al trabajar con operaciones numéricas o entradas de usuario que deberían ser números, a menudo es necesario comprobar si hay valores `NaN` para gestionar los errores o las entradas inesperadas de manera adecuada. Por ejemplo:

- **Example code**

  ```js
  let a = 0;
  let b = 0;
  let result = a / b;
  
  if (Number.isNaN(result)) {
    result = "Error: Division resulted in NaN";
  }
  
  console.log(result); // "Error: Division resulted in NaN"
  ```

En este ejemplo, utilizamos `Number.isNaN()` para detectar los casos en los que la operación de división da como resultado un NaN, lo que nos permite gestionar esta situación de forma adecuada. Comprender qué es un `NaN` y cómo detectarlo correctamente es fundamental para escribir código JavaScript robusto, especialmente al realizar operaciones matemáticas o al analizar las entradas de los usuarios.

---

## Cuestionario 1

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    console.log(isNaN("123"));
    ```

    - [ ] a) `true`
    - [x] b) `false` //correcto
    - [ ] c) `undefined`
    - [ ] d) `NaN`

2. **¿Cuál de las siguientes opciones comprueba correctamente si un valor es exactamente `NaN`?**

    - [ ] a) `value === NaN`
    - [ ] b) `isNaN(value)`
    - [x] c) `Number.isNaN(value)` //correcto
    - [ ] d) `value.isNaN()`

3. **¿Cuál es el resultado de `NaN === NaN`?**

    - [ ] a) `true`
    - [x] b) `false` //correcto
    - [ ] c) `undefined`
    - [ ] d) `Error`

[☝️](#trabajar-con-números-y-métodos-numéricos-comunes)

---

## Tema 2: ¿Cómo funcionan los métodos `parseFloat()` y `parseInt()`?

`parseFloat()` y `parseInt()` son dos métodos esenciales en JavaScript para convertir cadenas en números. Estos métodos resultan especialmente útiles al trabajar con entradas del usuario o al procesar datos que se presentan en formato de cadena pero que deben tratarse como valores numéricos.

Comencemos con `parseFloat()`. Este método analiza un argumento de cadena y devuelve un número de punto flotante. Está diseñado para extraer un número del principio de una cadena, incluso si la cadena contiene caracteres no numéricos más adelante. Recuerda que los números de punto flotante son números con decimales. Así es como funciona `parseFloat()`:

- **Example code**

  ```js
  console.log(parseFloat("3.14"));     // 3.14
  console.log(parseFloat("3.14 abc")); // 3.14
  console.log(parseFloat("3.14.5"));   // 3.14
  console.log(parseFloat("abc 3.14")); // NaN
  ```

Como puedes ver, `parseFloat()` comienza a analizar desde el principio del string y continúa hasta que encuentra un carácter que no puede formar parte de un número de punto flotante. Si no encuentra un número válido al inicio del string, devuelve `NaN` (Not a Number).

`parseInt()`, por otro lado, analiza un argumento de cadena y devuelve un entero. Al igual que `parseFloat()`, comienza desde el principio del string, pero se detiene en el primer carácter que no sea un dígito. Así es como funciona `parseInt()`:

- **Example code**

  ```js
  console.log(parseInt("42"));       // 42
  console.log(parseInt("42px"));     // 42
  console.log(parseInt("3.14"));     // 3
  console.log(parseInt("abc123"));   // NaN
  ```

`parseInt()` detiene el análisis al encontrar el primer carácter que no sea un dígito. En el caso de los números de punto flotante, devuelve únicamente la parte entera. Si no encuentra un entero válido al principio del string, devuelve `NaN`.

Ambos métodos presentan algunos comportamientos dignos de mención. Ignoran los espacios en blanco iniciales:

- **Example code**

  ```js
  console.log(parseFloat("  3.14"));  // 3.14
  console.log(parseInt("  42"));      // 42
  ```

Toman en cuenta los signos más y menos al principio del string:

- **Example code**

  ```js
  console.log(parseFloat("+3.14"));  // 3.14
  console.log(parseInt("-42"));      // -42
  ```

Cabe señalar que, si bien estos métodos son potentes, tienen algunas limitaciones. Por ejemplo, no admiten directamente todos los formatos numéricos, como la notación científica. Para necesidades de análisis más complejas, es posible que debas recurrir a técnicas o bibliotecas adicionales.

En conclusión, `parseFloat()` y `parseInt()` son herramientas valiosas para convertir cadenas en números en JavaScript. Comprender cómo funcionan y sus comportamientos específicos te permite manejar datos numéricos de manera más efectiva en tus aplicaciones, especialmente al trabajar con entradas de usuario o fuentes de datos externas.

---

## Cuestionario 2

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    console.log(parseInt("10.99"));
    ```

    - [ ] a) `10.99`
    - [x] b) `10` //correcto
    - [ ] c) `11`
    - [ ] d) `NaN`

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    console.log(parseInt("  -42abc"));
    ```

    - [x] a) `-42` //correcto
    - [ ] b) `NaN`
    - [ ] c) `42`
    - [ ] d) `-42abc`

3. **¿Qué valor devuelve `parseFloat("3.14.15")`?**

    - [ ] a) `3.1415`
    - [x] b) `3.14` //correcto
    - [ ] c) `NaN`
    - [ ] d) `3`

[☝️](#trabajar-con-números-y-métodos-numéricos-comunes)

---

## Tema 3: ¿Qué es el método `toFixed()` y cómo funciona?

El método `.toFixed()` es una función integrada de JavaScript que formatea un número utilizando la notación de punto fijo. Resulta especialmente útil cuando necesitas controlar el número de decimales de un número, sobre todo para mostrar valores monetarios o al trabajar con medidas precisas.

El método `.toFixed()` se invoca sobre un número y toma un argumento opcional, que es el número de dígitos que aparecerán después del punto decimal. Devuelve una representación en forma de string del número con el número especificado de decimales. A continuación, se muestra un ejemplo básico de cómo funciona `.toFixed()`:

- **Example code**

  ```js
  let num = 3.14159;
  console.log(num.toFixed(2)); // "3.14"
  ```

En este caso, estamos limitando el número de decimales a dos. Por lo tanto, `3.14159` se convierte en `3.14`. Es importante señalar que `.toFixed()` devuelve un string, no un número. Esto se debe a que el método está pensado principalmente para dar formato a los números con fines de visualización, no para realizar cálculos posteriores.

El método `.toFixed()` redondea el número al valor más cercano que se puede representar con el número de decimales especificado. Es importante comprender este comportamiento de redondeo:

- **Example code**

  ```js
  console.log((3.14159).toFixed(3));  // "3.142"
  console.log((3.14449).toFixed(3));  // "3.144"
  console.log((3.14550).toFixed(3));  // "3.146"
  ```

Como puedes ver, `.toFixed()` redondea hacia arriba cuando el siguiente dígito es `5` o más, y hacia abajo en los demás casos. Si llamas a `.toFixed()` sin argumentos, el valor predeterminado es `0` decimales:

- **Example code**

  ```js
  let num = 3.14159;
  console.log(num.toFixed()); // "3"
  ```

El método `.toFixed()` puede resultar especialmente útil al realizar cálculos financieros o al mostrar precios:

- **Example code**

  ```js
  let price = 19.99;
  let taxRate = 0.08;
  let total = price + (price * taxRate);
  
  console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"
  ```

En este ejemplo, `.toFixed(2)` garantiza que el total siempre se muestre con dos decimales, lo cual es habitual para las divisas en muchos países.

En conclusión, el método `.toFixed()` es una herramienta muy útil para dar formato a los números en JavaScript, sobre todo cuando necesitas controlar la visualización de los decimales. Aunque se utiliza principalmente para dar formato a la salida, recuerda cómo funciona, especialmente cuando se requieran cálculos precisos.

---

## Cuestionario 3

1. **¿Cuál será el resultado del siguiente código?**

    ```js
    let num = 5.678;
    console.log(num.toFixed(1));
    ```

    - [x] a) `"5.7"` //correcto
    - [ ] b) `"5.6"`
    - [ ] c) `5.7`
    - [ ] d) `5.6`

2. **¿Cuál será el resultado del siguiente código?**

    ```js
    let num1 = 12.345;
    let num2 = 67.891;
    
    console.log((num1 + num2).toFixed(2));
    ```

    - [ ] a) `"80.23"`
    - [x] b) `"80.24"` //correcto
    - [ ] c) `"80.25"`
    - [ ] d) `"80.26"`

3. **¿Qué sucede si llamas a `toFixed()` sin ningún argumento?**

    - [ ] a) Lanza un error.
    - [x] b) Devuelve el número original sin cambios. //correcto
    - [ ] c) Devuelve el número redondeado al entero más cercano.
    - [ ] d) Devuelve una representación en forma de cadena del número sin decimales.

[☝️](#trabajar-con-números-y-métodos-numéricos-comunes)

---
