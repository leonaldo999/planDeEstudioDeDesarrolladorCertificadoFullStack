# Implementar un _saltador de elementos_

En este laboratorio crearás una función que salte elementos en un array hasta encontrar uno que cumpla con una función de prueba específica.

Por ejemplo, para un array como `[1, 1, 1, 2, 1, 1, 1]` y una función de prueba `function(n) {return n === 2}`, el primer elemento que cumple con esta condición es el que se encuentra en el índice 3, por lo que todos los elementos anteriores deben descartarse, y el resultado debe ser los elementos restantes `[2, 1, 1, 1]`.

---

## Historias de usuario

1. Debes tener una función `dropElements` que acepte un array (`arr`) y una función (`func`) como argumentos.

2. La función `dropElements` debe recorrer el array y eliminar elementos a partir del primero hasta que `func` devuelva `true` para un elemento.

3. La función `dropElements` debe devolver los elementos restantes en el array si se cumple la condición.

4. Si la condición nunca se cumple, debe devolver un array vacío.

---

## Solucíon

```js
// Implementar un saltador de elementos
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));
console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }));
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));

```
