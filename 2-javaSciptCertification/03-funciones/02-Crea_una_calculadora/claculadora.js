// Crea una calculadora

// const addTwoAndSeven = () => {
//   return 2 + 7;
// }
// console.log(addTwoAndSeven());


// function addThreeAndFour () {
//   return 3 + 4;
// }
// console.log(addThreeAndFour());

/* <========================================> */

// Suma
const calculateSum = (num1, num2) => {
  return num1 + num2;
}
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));


// Resta
const calculateDifference = (num1, num2) => {
  return num1 - num2;
}
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));


// Multiplicacion
const calculateProduct = (num1, num2) => {
  return num1 * num2;
}
console.log(calculateProduct(13, 5));


// Division
const calculateQuotient = (num1, num2) => {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));


// Raíz cuadrada
const calculateSquare = (num) => {
  return Math.pow(num, 2);
}
console.log(calculateSquare(2));
console.log(calculateSquare(9));


// Raíz cúbica
const calculateSquareRoot = (num) => {
  return Math.sqrt(num);
}
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
