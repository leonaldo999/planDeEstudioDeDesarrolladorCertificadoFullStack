# Crea una calculadora de factorial

Un factorial es el producto de un número entero y todos los números enteros menores que él. Por ejemplo, el factorial de `5` es `5 * 4 * 3 * 2 * 1 = 120`. En este laboratorio, crearás una calculadora de factorial que solicite un número al usuario y calcule el factorial de ese número.

---

## Historias de usuario

- Debes declarar una variable `num` y asignarle un número de tu elección. El número asignado debe estar comprendido entre `1` y `20`, ambos inclusive.

- Crea una función llamada `factorialCalculator` que tome un número como argumento y devuelva el factorial de ese número.

- Dentro de la función, declare una variable `result` y asígnele el valor `1`. Utilizando un bucle, recorra todos los números desde el `1` hasta el número de entrada (ambos inclusive) y, para cada número, multiplique la variable `result` por el número actual y asigne el resultado a la variable `result`. Puede elegir entre utilizar un bucle `for`, un bucle `while` o un bucle `do...while`.

- Debes llamar a la función `factorialCalculator` con `num` como argumento y asignar el resultado a la variable `factorial`.

- Debes almacenar el resultado final en el formato `Factorial of [num] is [factorial]` y asignarlo a la variable `resultMsg`.

- Debes mostrar el valor de `resultMsg` en la consola.

---

```js
// ============================================
// 1. Declarar variable num (entre 1 y 20)
// ============================================
const num = 5;

// ============================================
// 2. Crear función factorialCalculator
// ============================================
function factorialCalculator(numero) {
  // 3. Declarar variable result = 1
  let result = 1;

  // Usando bucle for para calcular el factorial
  for (let i = 1; i <= numero; i++) {
    result = result * i;
  }

  // Retornar el resultado
  return result;
}

// ============================================
// 4. Llamar a la función y asignar a factorial
// ============================================
const factorial = factorialCalculator(num);

// ============================================
// 5. Almacenar en el formato requerido
// ============================================
const resultMsg = 'Factorial of ' + num + ' is ' + factorial;

// ============================================
// 6. Mostrar en la consola
// ============================================
console.log(resultMsg);
```
