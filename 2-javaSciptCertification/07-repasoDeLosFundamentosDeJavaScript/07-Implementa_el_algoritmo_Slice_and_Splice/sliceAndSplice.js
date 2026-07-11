// Implementa el algoritmo Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let copia = arr2.slice();
  copia.splice(n, 0, ...arr1);
  return copia;
}


console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
