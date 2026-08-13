# Implementar una función para eliminar valores

En este laboratorio, crearás una función que toma un array inicial como primer argumento, seguido de uno o más argumentos adicionales que representan los valores que se deben eliminar.

---

## Historias de usuario

1. Debes tener una función `destroyer`a que acepte un array y uno o más argumentos adicionales.

2. La función `destroyer` debe devolver un nuevo array que excluya todos los elementos del primer argumento que coincidan con cualquiera de los argumentos siguientes.

3. La función debe aceptar un número indeterminado de argumentos.

---

## Resultado

```js
// Implementar una función para eliminar valores
function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}

// Ejemplos de prueba:
console.log(destroyer([1, 2, 3, 2, 4], 2)); // Devuelve [1, 3, 4]
console.log(destroyer(["apple", "banana", "apple"], "apple")); // Devuelve ["banana"]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
```
