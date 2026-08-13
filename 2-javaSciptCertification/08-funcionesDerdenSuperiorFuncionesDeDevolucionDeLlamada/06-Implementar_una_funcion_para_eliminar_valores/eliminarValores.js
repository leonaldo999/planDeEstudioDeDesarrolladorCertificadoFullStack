// Implementar una función para eliminar valores
function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}

// Ejemplos de prueba:
console.log(destroyer([1, 2, 3, 2, 4], 2)); // Devuelve [1, 3, 4]
console.log(destroyer(["apple", "banana", "apple"], "apple")); // Devuelve ["banana"]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));