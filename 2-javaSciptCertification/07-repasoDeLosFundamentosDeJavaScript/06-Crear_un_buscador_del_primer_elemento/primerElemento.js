// Crear un buscador del primer elemento
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

