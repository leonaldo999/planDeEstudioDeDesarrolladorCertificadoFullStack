# Crea la función Largest Number Finder

En este laboratorio, crearás una función que devuelva un array compuesto por el número más grande de cada subarray proporcionado.

Recuerda que puedes recorrer un array con un simple bucle `for` y acceder a cada elemento mediante la sintaxis de array `arr[i]`.

---

## Casos de uso

1. Debes crear una función `largestOfAll` que tome como argumento un array de arrays.

2. La función debe devolver un array que contenga el número más grande de cada subarray.

---

```js
function largestOfAll(arr) {
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
    let mayor = arr[i][0];

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > mayor) {
        mayor = arr[i][j];
      }
    }

    resultado.push(mayor);
  }

  return resultado;
}

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
```
