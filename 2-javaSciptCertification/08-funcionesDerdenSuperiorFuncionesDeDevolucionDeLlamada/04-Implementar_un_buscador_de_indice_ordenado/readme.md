# Implementar un buscador de índice ordenado

_En este laboratorio crearás una función que devuelva el índice más bajo en el que se debe insertar un valor en un array una vez que este se haya ordenado en orden ascendente._

---

## Historias de usuario

1. Debes tener una función `getIndexToIns` que tome dos argumentos: un array y un número.

2. Debes utilizar el método `sort` para ordenar el array en orden ascendente.

3. Tu función `getIndexToIns` debe devolver el índice más bajo en el que se debe insertar el número utilizando el método `findIndex`.

4. Tu función `getIndexToIns` siempre debe devolver un número.

---

### Sugerencia

El método `findIndex` es un método integrado de las matrices en JavaScript. Toma una función de llamada de retorno y devuelve el índice del primer elemento que cumple con la condición. Tanto `findIndex` como `sort` son funciones de orden superior.

**Ejemplos:**

- `getIndexToIns([1, 2, 3, 4], 1.5)` debería devolver `1` porque `1.5` es mayor que `1` (índice `0`) y menor que `2` (índice `1`).
- `getIndexToIns([20, 3, 5], 19)` debería devolver `2` porque, tras ordenar la lista a `[3, 5, 20]`, `19` es menor que `20` (índice `2`) y mayor que `5` (índice `1`).

---

## Solución

```js
// Implementar un buscador de índice ordenado
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex(element => element >= num);

  if (index === -1) {
    return arr.length;
  }

  return index;
}
```
