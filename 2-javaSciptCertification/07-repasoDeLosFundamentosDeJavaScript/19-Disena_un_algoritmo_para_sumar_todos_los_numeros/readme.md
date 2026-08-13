# Diseña un algoritmo para sumar todos los números

En este laboratorio, deberás diseñar un algoritmo para sumar todos los números.

---

## Historias de usuario

1. Debes tener una función llamada `sumAll` que acepte un array de dos números.

2. `sumAll([n, m])` debe devolver la suma de `n` y `m` más la suma de todos los números que se encuentran entre ellos. El número más bajo no siempre aparecerá primero. Por ejemplo, `sumAll([4,1])` debe devolver `10` porque la suma de todos los números entre `1` y `4` (ambos inclusive) es `10`.

---

## Solucíon

```js
// Diseña un algoritmo para sumar todos los números
function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5]));  // 45

```
