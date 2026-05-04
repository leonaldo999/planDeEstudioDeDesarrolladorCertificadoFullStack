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

// ===== SUMA =====
/* Declarar una función flecha que recibe dos parámetros (num1 y num2) y retorna la suma de ambos números */ 
const calculateSum = (num1, num2) => {
  return num1 + num2;
}
// Ejecutar la función calculateSum con diferentes valores y mostrar el resultado
console.log(calculateSum(2, 5));      // Resultado esperado: 7
console.log(calculateSum(10, 10));    // Resultado esperado: 20
console.log(calculateSum(5, 5));      // Resultado esperado: 10


// ===== RESTA =====
/* Declarar una función flecha que recibe dos parámetros (num1 y num2) y retorna la resta de num1 menos num2 */
const calculateDifference = (num1, num2) => {
  return num1 - num2;
}
// Ejecutar la función calculateDifference con diferentes valores y mostrar el resultado
console.log(calculateDifference(22, 5));   // Resultado esperado: 17
console.log(calculateDifference(12, 1));   // Resultado esperado: 11
console.log(calculateDifference(17, 9));   // Resultado esperado: 8


// ===== MULTIPLICACIÓN =====
/* Declarar una función flecha que recibe dos parámetros (num1 y num2) y retorna la multiplicación de ambos números */
const calculateProduct = (num1, num2) => {
  return num1 * num2;
}
// Ejecutar la función calculateProduct con diferentes valores y mostrar el resultado
console.log(calculateProduct(13, 5));      // Resultado esperado: 65


// ===== DIVISIÓN =====
/* Declarar una función flecha que recibe dos parámetros (num1 y num2) y retorna la división de num1 entre num2, con validación para evitar división por cero */
const calculateQuotient = (num1, num2) => {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}
// Ejecutar la función calculateQuotient con diferentes valores y mostrar el resultado
console.log(calculateQuotient(7, 11));     // Resultado esperado: 0.636...
console.log(calculateQuotient(3, 0));      // Resultado esperado: "Error: Division by zero"


// ===== RAÍZ CUADRADA (Potencia) =====
/* Declarar una función flecha que recibe un parámetro (num) y retorna el resultado de elevar num al cuadrado (num²) usando Math.pow */
const calculateSquare = (num) => {
  return Math.pow(num, 2);
}
// Ejecutar la función calculateSquare con diferentes valores y mostrar el resultado
console.log(calculateSquare(2));           // Resultado esperado: 4
console.log(calculateSquare(9));           // Resultado esperado: 81


// ===== RAÍZ CUADRADA (Square Root) =====
/* Declarar una función flecha que recibe un parámetro (num) y retorna la raíz cuadrada del número usando Math.sqrt */
const calculateSquareRoot = (num) => {
  return Math.sqrt(num);
}
// Ejecutar la función calculateSquareRoot con diferentes valores y mostrar el resultado
console.log(calculateSquareRoot(25));      // Resultado esperado: 5
console.log(calculateSquareRoot(100));     // Resultado esperado: 10
