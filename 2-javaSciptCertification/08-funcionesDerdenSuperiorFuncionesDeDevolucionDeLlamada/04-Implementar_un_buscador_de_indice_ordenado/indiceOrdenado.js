// Implementar un buscador de índice ordenado
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex(element => element >= num);

  if (index === -1) {
    return arr.length;
  }

  return index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
