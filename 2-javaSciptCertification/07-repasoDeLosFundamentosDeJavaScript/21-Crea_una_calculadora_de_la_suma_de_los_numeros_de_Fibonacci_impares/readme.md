# Crea una calculadora de la suma de los números de Fibonacci impares

En este laboratorio, crearás una calculadora de la suma de los números de Fibonacci impares que calcula la suma de todos los números de Fibonacci impares menores o iguales a un entero positivo dado.

---

## Historias de usuario

1. Debes tener una función `sumFibs` que acepte un número como argumento.

2. La función `sumFibs` debe devolver la suma de todos los números de Fibonacci impares que sean menores o iguales al número dado.

3. La secuencia de Fibonacci comienza con `0` y `1`, y cada número siguiente es la suma de los dos anteriores.

4. Solo se deben sumar los números de Fibonacci impares.

---

## Solucíon

```js
// Crea una calculadora de la suma de los números de Fibonacci impares
function sumFibs(num) {
  let currentNumber = 1;
  let previousNumber = 0;
  let totalSum = 0;

  while (currentNumber <= num) {
    if (currentNumber % 2 !== 0) {
      totalSum += currentNumber;
    }

    let nextNumber = currentNumber + previousNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }

  return totalSum;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));

```
