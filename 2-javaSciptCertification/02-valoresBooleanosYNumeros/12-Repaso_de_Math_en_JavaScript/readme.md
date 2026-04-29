# Repaso de Math en JavaScript

## Navegación

- [Repaso de Math en JavaScript](#repaso-de-math-en-javascript)
  - [Navegación](#navegación)
  - [Tema 1: Trabajar con el tipo de datos Number](#tema-1-trabajar-con-el-tipo-de-datos-number)
  - [Tema 2: Operaciones aritméticas comunes](#tema-2-operaciones-aritméticas-comunes)
  - [Tema 3: Cálculos con números y strings](#tema-3-cálculos-con-números-y-strings)
  - [Tema 4: Precedencia de los operadores](#tema-4-precedencia-de-los-operadores)
  - [Tema 5: Operadores de incremento y decremento](#tema-5-operadores-de-incremento-y-decremento)
  - [Tema 6: Operadores de asignación compuestos](#tema-6-operadores-de-asignación-compuestos)
  - [Tema 7: Valores booleanos y la igualdad](#tema-7-valores-booleanos-y-la-igualdad)
  - [Tema 8: Operadores de comparación](#tema-8-operadores-de-comparación)
  - [Tema 9: Operadores unarios](#tema-9-operadores-unarios)
  - [Tema 10: Operadores bit a bit](#tema-10-operadores-bit-a-bit)
  - [Tema 11: Instrucciones condicionales, valores verdaderos, valores falsos y el operador ternario](#tema-11-instrucciones-condicionales-valores-verdaderos-valores-falsos-y-el-operador-ternario)
  - [Tema 12: Operadores lógicos binarios](#tema-12-operadores-lógicos-binarios)
  - [Tema 13: El objeto Math](#tema-13-el-objeto-math)
  - [Tema 14: Métodos numéricos comunes](#tema-14-métodos-numéricos-comunes)

---

En esta sección, repasaremos lo que hemos aprendido sobre el objeto Math y sus formas de trabajar con números en JavaScript. El objeto Math es un objeto incorporado que tiene propiedades y métodos para realizar operaciones matemáticas. No es un constructor, por lo que no se puede crear una instancia de Math.

## Tema 1: Trabajar con el tipo de datos Number

- **Definición**: El tipo `Number` de JavaScript incluye números enteros, números de punto flotante, `Infinity` y `NaN`. Los números de punto flotante son números con un punto decimal. `Infinity` positivo es un número mayor que cualquier otro número, mientras que `-Infinity` es un número menor que cualquier otro número. `NaN` (`Not a Number`, "No es un número") representa un valor numérico no válido, como la cadena `"Jessica"`.

---

## Tema 2: Operaciones aritméticas comunes

- **Operador de suma**: Este operador (`+`) se utiliza para calcular la suma de dos o más números.

- **Operador de resta**: Este operador (`-`) se utiliza para calcular la diferencia entre dos números.

- **Operador de multiplicación**: Este operador (`*`) se utiliza para calcular el producto de dos o más números.

- **Operador de división**: Este operador (`/`) se utiliza para calcular el cociente entre dos números.

- **División por cero**: Si intentas dividir por cero, JavaScript devolverá `Infinity`.

- **Operador de resto**: Este operador (`%`) devuelve el resto de una división.

- **Operador de exponenciación**: Este operador (`**`) eleva un número a la potencia de otro.

---

## Tema 3: Cálculos con números y strings

- **Explicación**: Cuando se utiliza el operador `+` con un número y un string, JavaScript convierte el número en un string y concatena ambos valores. Cuando se utilizan los operadores `-`, `*` o `/` con un string y un número, JavaScript convierte el string en un número y el resultado será un número. En el caso de `null` y `undefined`, JavaScript trata a `null` como `0` y a `undefined` como `NaN` en las operaciones matemáticas.

- **Example code**

  ```js
  const result = 5 + '10';

  console.log(result); // "510"
  console.log(typeof result); // string
  
  const subtractionResult = '10' - 5;
  console.log(subtractionResult); // 5
  console.log(typeof subtractionResult); // number
  
  const multiplicationResult = '10' * 2;
  console.log(multiplicationResult); // 20
  console.log(typeof multiplicationResult); // number
  
  const divisionResult = '20' / 2;
  console.log(divisionResult); // 10
  console.log(typeof divisionResult); // number
  
  const result1 = null + 5;
  console.log(result1); // 5
  console.log(typeof result1); // number
  
  const result2 = undefined + 5;
  console.log(result2); // NaN
  console.log(typeof result2); // number
  ```

---

## Tema 4: Precedencia de los operadores

- **Definición**: La precedencia de los operadores determina el orden en que se evalúan las operaciones en una expresión. Los operadores con mayor precedencia se evalúan antes que los que tienen menor precedencia. Los valores entre paréntesis se evalúan primero, y la multiplicación y la división tienen mayor precedencia que la suma y la resta. Si los operadores tienen la misma precedencia, JavaScript aplicará la asociatividad.

- **Example code**

  ```js
  const result = (2 + 3) * 4;

  console.log(result); // 20
  
  const result2 = 10 - 2 + 3;
  
  console.log(result2); // 11
  
  const result3 = 2 ** 3 ** 2;
  
  console.log(result3); // 512
  ```

- **Definición**: La asociatividad nos indica la dirección en la que se evalúa una expresión cuando existen varios operadores del mismo tipo. Define si la expresión debe evaluarse de izquierda a derecha (`left-associative`) o de derecha a izquierda (`right-associative`). Por ejemplo, el operador exponencial también es asociativo de derecha a izquierda:

- **Example code**

  ```js
  const result4 = 5 ** 4 ** 1; 
  
  console.log(result4); // 625
  ```

---

## Tema 5: Operadores de incremento y decremento

- **Operador de incremento**: Este operador se utiliza para incrementar el valor en uno. La notación prefija `++num` incrementa primero el valor de la variable y luego devuelve un nuevo valor. La notación posfija `num++` devuelve primero el valor actual de la variable y luego lo incrementa.

- **Example code**

  ```js
  let x = 5;

  console.log(++x); // 6
  console.log(x); // 6
  
  
  let y = 5;
  
  console.log(y++); // 5
  console.log(y); // 6
  ```

- **Operador de decremento**: Este operador se utiliza para reducir el valor en uno. La notación prefija y la notación posfija funcionan de la misma manera que antes con el operador de incremento.

- **Example code**

  ```js
  let num = 5;

  console.log(--num); // 4
  console.log(num--); // 4
  console.log(num); // 3
  ```

---

## Tema 6: Operadores de asignación compuestos

- **Operador de asignación de suma (`+=`)**: este operador realiza la suma de los valores y asigna el resultado a la variable.

- **Operador de asignación de resta (`-=`)**: este operador realiza la resta de los valores y asigna el resultado a la variable.

- **Operador de asignación de multiplicación (*=)**: este operador realiza la multiplicación de los valores y asigna el resultado a la variable.

- **Operador de asignación de división (`/=`)**: Este operador realiza la división de los valores y asigna el resultado a la variable.

- **Operador de asignación de resto (`%=`)**: Este operador divide una variable por el número especificado y asigna el resto a la variable.

- **Operador de asignación de exponenciación (`**=`)**: Este operador eleva una variable a la potencia del número especificado y reasigna el resultado a la variable.

- **Example code**

  ```js
  let a = 10; a += 5;   // a = 15
  let b = 20; b -= 10;  // b = 10
  let c = 5;  c *= 4;   // c = 20
  let d = 50; d /= 2;   // d = 25
  let e = 10; e %= 3;   // e = 1
  let f = 2;  f **= 3;  // f = 8
  
  console.log(a, b, c, d, e, f);
  ```

---

## Tema 7: Valores booleanos y la igualdad

- **Definición de valor booleano**: Un valor booleano es un tipo de datos que solo puede tener dos valores: true o false.
Operador de igualdad (`==`): Este operador utiliza la conversión de tipos antes de comprobar si los valores son iguales.

- **Example code**

  ```js
  console.log(5 == '5'); // true
  ```

- **Operador de igualdad estricta (`===`)**: Este operador no realiza conversión de tipos y comprueba si tanto los tipos como los valores son iguales.

- **Example code**

  ```js
  console.log(5 == '5'); // true
  ```

- **Operador de desigualdad (`!=`)**: Este operador aplica una conversión de tipos antes de comprobar si los valores son diferentes.

- **Operador de desigualdad estricta (`!==`)**: Este operador no aplica ninguna conversión de tipos y comprueba si tanto los tipos como los valores son diferentes.

- **Example code**

  ```js
  // Desigualdad Débil (!=)
  console.log(5 != '5');   // false (Son "iguales" tras conversión)
  
  // Desigualdad Estricta (!==)
  console.log(5 !== '5');  // true (Son diferentes tipos)
  ```

---

## Tema 8: Operadores de comparación

- **Operador mayor que (`>`)**: Este operador comprueba si el valor de la izquierda es mayor que el de la derecha.

- **Operador mayor que o igual a (`>=`)**: Este operador comprueba si el valor de la izquierda es mayor o igual que el de la derecha.

- **Operador menor que (`<`)**: Este operador comprueba si el valor de la izquierda es menor que el de la derecha.

- **Operador menor que o igual a (`<=`)**: Este operador comprueba si el valor de la izquierda es menor o igual que el de la derecha.

- **Example code**

  ```js
  console.log(10 > 5);   // true (Mayor que)
  console.log(10 >= 10); // true (Mayor o igual)
  console.log(3 < 8);    // true (Menor que)
  console.log(5 <= 4);   // false (Menor o igual)
  
  // Ejemplo con coerción
  console.log('20' > 10); // true
  ```

---

## Tema 9: Operadores unarios

- **Operador `Unary Plus`**: Este operador convierte su operando en un número. Si el operando ya es un número, no se modifica.

- **Example code**

  ```js
  const str = '42';
  const num = +str;
  
  console.log(num); // 42
  console.log(typeof num); // number
  ```

- **Üheargumentiline negatsioonioperaator (`-`)**: See operaator muudab operandi vastupidiseks.

- **Example code**

  ```js
  const num = 4;
  console.log(-num); // -4
  ```

- **Operador lógico NOT (`!`)**: Este operador invierte el valor booleano de su operando. Por lo tanto, si el operando es `true`, se convierte en `false`, y si es `false`, se convierte en `true`.

- **Example code**

  ```js
  const isTrue = true;
  console.log(!isTrue);    // false
  
  const isFalse = false;
  console.log(!isFalse);   // true
  
  // El truco de la doble negación (convertir a booleano real)
  console.log(!!"Hola");    // true (un string con texto es "truthy")
  console.log(!!0);         // false (el número 0 es "falsy")
  ```

---

## Tema 10: Operadores bit a bit

- **Operador AND (`&`) bit a bit**: Este operador devuelve un 1 en cada posición de bit en la que los bits correspondientes de ambos operandos sean 1.

- **Operador de asignación AND (`&=`) bit a bit**: Este operador realiza una operación AND bit a bit con el número especificado y reasigna el resultado a la variable.

- **Operador OR (`|`) bit a bit**: Este operador devuelve un 1 en cada posición de bit en la que los bits correspondientes de uno o ambos operandos sean 1.

- **Operador de asignación OR (`|=`) bit a bit**: Este operador realiza una operación OR bit a bit con el número especificado y reasigna el resultado a la variable.

- **Operador XOR (`^`) bit a bit**: Este operador devuelve un 1 en cada posición de bit para la cual los bits correspondientes de cualquiera de los operandos, pero no de ambos, sean 1.

- **Operador NOT (`~`) bit a bit**: Este operador invierte la representación binaria de un número.

- **Operador de desplazamiento a la izquierda (`<<`)**: Este operador desplaza todos los bits hacia la izquierda un número especificado de posiciones.

- **Operador de desplazamiento a la derecha (`>>`)**: Este operador desplaza todos los bits hacia la derecha.

- **Example code**

  ```js
  const isTrue = true;
  console.log(!isTrue);    // false
  
  const isFalse = false;
  console.log(!isFalse);   // true
  
  // El truco de la doble negación (convertir a booleano real)
  console.log(!!"Hola");    // true (un string con texto es "truthy")
  console.log(!!0);         // false (el número 0 es "falsy")
  ```

---

## Tema 11: Instrucciones condicionales, valores verdaderos, valores falsos y el operador ternario

- `if/else if/else`: Una instrucción `if` toma una condición y ejecuta un bloque de código si esa condición es verdadera. Si la condición es `false`, pasa al bloque `else if`. Si ninguna de esas condiciones es `true`, ejecutará la cláusula `else`. Los valores verdaderos son cualquier valor que resulte `true` cuando se evalúa en un contexto booleano, como una instrucción `if`. Los valores falsos son valores que se evalúan como `false` en un contexto booleano.

- **Example code**

  ```js
  const score = 87;

  if (score >= 90) {
   console.log('You got an A'); 
  } else if (score >= 80) {
   console.log('You got a B'); // You got a B
  } else if (score >= 70) {
   console.log('You got a C');
  } else {
   console.log('You failed! You need to study more!');
  }
  ```

- **Operador ternario**: Este operador se utiliza a menudo como una forma más concisa de escribir sentencias `if else`.

- **Example code**

  ```js
  const temperature = 30;
  const weather = temperature > 25 ? 'sunny' : 'cool';
  
  console.log(`It's a ${weather} day!`); // It's a sunny day!
  ```

---

## Tema 12: Operadores lógicos binarios

- **Operador lógico AND (`&&`)**: Este operador comprueba si ambos operandos son `true`. Si ambos son `true`, devolverá el segundo valor. Si alguno de los operandos es `falsy`, devolverá el valor `false`. Si ambos operandos son falsos, devolverá el primer valor `false`.

- **Example code**

  ```js
  const result = true && 'hello';

  console.log(result); // hello
  ```

- **Operador OR lógico (`||`)**: Este operador comprueba si al menos uno de los operandos es verdadero.

- **Operador de coalescencia nula (`??`)**: Este operador devolverá un valor solo si el primero es `null` o `undefined`.

- **Example code**

  ```js
  const userSettings = {
   theme: null,
   volume: 0,
   notifications: false,
  };
  
  let theme = userSettings.theme ?? 'light';
  console.log(theme); // light
  ```

---

## Tema 13: El objeto Math

- **El método `Math.random()`**: Este método genera un número aleatorio en formato de punto flotante entre 0 (incluido) y 1 (excluido). Esto significa que el resultado puede ser 0, pero nunca llegará a 1.

- **El método `Math.max()`**: Este método toma un conjunto de números y devuelve el valor máximo.

- **El método `Math.min()`**: Este método toma un conjunto de números y devuelve el valor mínimo.

- **El método `Math.ceil()`**: Este método redondea un valor al entero más cercano por arriba.

- **El método `Math.floor()`**: Este método redondea un valor al entero más cercano por abajo.

- **El método `Math.round()`**: Este método redondea un valor al entero más cercano.

- **Example code**

  ```js
  // Aleatorios y Extremos
  console.log(Math.random());          // ej: 0.4523...
  console.log(Math.max(5, 10, 2));    // 10
  console.log(Math.min(5, 10, 2));    // 2
  
  // Redondeos
  const val = 4.4;
  console.log(Math.ceil(val));     // 5 (Siempre arriba)
  console.log(Math.floor(val));    // 4 (Siempre abajo)
  console.log(Math.round(val));    // 4 (Al más cercano)
  console.log(Math.round(4.6));  // 5
  ```

- **El método `Math.trunc()`**: Este método elimina la parte decimal de un número y devuelve solo la parte entera, sin redondear.

- **El método `Math.sqrt()`**: Este método devuelve la raíz cuadrada de un número.

- **El método `Math.cbrt()`**: Este método devuelve la raíz cúbica de un número.

- **El método `Math.abs()`**: Este método devuelve el valor absoluto de un número.

- **El método `Math.pow()`**: Este método toma dos números y eleva el primero a la potencia del segundo.

- **Example code**

  ```js
  // Limpieza de decimales
  console.log(Math.trunc(4.9));   // 4 (Simplemente quita el .9)
  
  // Raíces y Potencias
  console.log(Math.sqrt(25));    // 5 (Raíz cuadrada)
  console.log(Math.cbrt(27));    // 3 (Raíz cúbica)
  console.log(Math.pow(2, 3));    // 8 (2 al cubo)
  
  // Valor Absoluto
  console.log(Math.abs(-15));    // 15 (Distancia al cero)
  ```

---

## Tema 14: Métodos numéricos comunes

- `isNaN()`: `NaN` significa "Not-a-Number" (no es un número). Es un valor especial que representa un resultado numérico irrepresentable o indefinido. La propiedad de la función `isNaN()` se utiliza para determinar si un valor es `NaN` o no. `Number.isNaN()` ofrece una forma más confiable de verificar la presencia de valores `NaN`, especialmente en casos en los que la conversión de tipos podría dar lugar a resultados inesperados con la función global `isNaN()`.

- **Example code**

  ```js
  console.log(isNaN(NaN));       // true
  console.log(isNaN(undefined)); // true
  console.log(isNaN({}));        // true
  
  console.log(isNaN(true));      // false
  console.log(isNaN(null));      // false
  console.log(isNaN(37));        // false
  
  
  console.log(Number.isNaN(NaN));        // true
  console.log(Number.isNaN(Number.NaN)); // true
  console.log(Number.isNaN(0 / 0));      // true
  
  console.log(Number.isNaN("NaN"));      // false
  console.log(Number.isNaN(undefined));  // false
  ```

- **El método `parseFloat()`**: Este método analiza un argumento de tipo cadena y devuelve un número de punto flotante. Está diseñado para extraer un número desde el principio de una cadena, incluso si la cadena contiene caracteres no numéricos más adelante.

- **El método `parseInt()`**: Este método analiza un argumento de tipo cadena y devuelve un entero. `parseInt()` detiene el análisis al encontrar el primer carácter que no sea un dígito. En el caso de los números de punto flotante, devuelve solo la parte entera. Si no encuentra un entero válido al inicio de la cadena, devuelve NaN.

- **El método `toFixed()`**: Este método se invoca sobre un número y toma un argumento opcional, que es el número de dígitos que aparecerán después del punto decimal. Devuelve una representación en cadena del número con el número especificado de decimales.

- **Example code**

  ```js
  // Extracción (Parsing)
  const priceStr = "19.99px";
  console.log(parseFloat(priceStr)); // 19.99
  console.log(parseInt(priceStr));   // 19 (Ignora decimales)
  
  const invalid = "Cuesta 10";
  console.log(parseInt(invalid));    // NaN (Empieza por letra)
  
  // Formato (To Fixed)
  const pi = 3.14159;
  console.log(pi.toFixed(2));        // "3.14" (Es un String!)
  ```

---
