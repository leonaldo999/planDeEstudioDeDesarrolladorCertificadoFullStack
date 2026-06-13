# Implementa el algoritmo Chunky Monkey

El algoritmo Chunky Monkey divide un array (primer argumento) en grupos de longitud determinada (segundo argumento) y devuelve un array bidimensional que contiene estos grupos como subarrays.

---

## Historias de usuario

1. Escribe una función llamada `chunkArrayInGroups` que tome un array como primer argumento y un número como segundo argumento. La función debe dividir el array en arrays más pequeños de longitud igual al segundo argumento y devolverlas como un array bidimensional.

---

```js
function chunkArrayInGroups(arr, size) {
  // Cambia solo el código debajo de esta línea
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
  // Cambia solo el código encima de esta línea
}

// Pruebas
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]]

```
