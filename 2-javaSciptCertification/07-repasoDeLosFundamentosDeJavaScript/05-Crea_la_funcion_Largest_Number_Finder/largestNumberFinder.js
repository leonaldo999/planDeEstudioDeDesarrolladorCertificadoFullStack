// Crea la función Largest Number Finder
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