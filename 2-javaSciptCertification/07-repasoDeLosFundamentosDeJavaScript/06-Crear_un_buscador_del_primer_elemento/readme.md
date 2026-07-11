# Crear un buscador del primer elemento

En este laboratorio, crearás una función que recorra un array y devuelva el primer elemento que pase una función de prueba (también conocida como "prueba de verdad").

La función recorrerá el array y evaluará cada elemento utilizando la función de prueba proporcionada. Al final, devolverá el primer elemento para el que la función de prueba devuelva `true`.

**Ejemplo**:

```js
findElement([1, 3, 5, 8], (num) => num % 2 === 0); // returns 8
findElement([1, 3, 5], (num) => num % 2 === 0); // returns undefined
```

---

## Historias de usuario

1. Debes tener una función llamada `findElement` que acepte un array y una función como argumentos.

2. La función debe devolver el primer elemento del array que supere una prueba de veracidad. Esto significa que, al llamar a la función `func` pasada como argumento, dado un elemento `x`, la prueba de veracidad se supera si `func(x)` es verdadero.

3. Si ningún elemento supera la prueba, la función debe devolver `undefined`.

---

```js
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
}

console.log(findElement([1, 3, 5, 8], num => num % 2 === 0));// returns 8
console.log(findElement([1, 3, 5], num => num % 2 === 0));  // returns undefined
```
