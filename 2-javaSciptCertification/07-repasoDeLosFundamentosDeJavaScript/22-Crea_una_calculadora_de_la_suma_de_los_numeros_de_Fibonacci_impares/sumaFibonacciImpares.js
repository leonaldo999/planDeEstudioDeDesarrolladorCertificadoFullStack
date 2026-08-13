// Crea una calculadora de la suma de los números de Fibonacci impares
function sumFibs(num) {
  let currentNumber = 1;
  let previousNumber = 0;
  let totalSum = 0;

  while (currentNumber <= num) {
    if (currentNumber % 2 !== 0) {
      totalSum += currentNumber;
    }

    let nextNumber = currentNumber + previousNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }

  return totalSum;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
