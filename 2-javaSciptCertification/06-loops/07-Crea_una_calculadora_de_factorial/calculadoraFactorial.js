// ============================================
// 1. Declarar variable num (entre 1 y 20)
// ============================================
const num = 5;

// ============================================
// 2. Crear función factorialCalculator
// ============================================
function factorialCalculator(numero) {
  // 3. Declarar variable result = 1
  let result = 1;

  // Usando bucle for para calcular el factorial
  for (let i = 1; i <= numero; i++) {
    result = result * i;
  }

  // Retornar el resultado
  return result;
}

// ============================================
// 4. Llamar a la función y asignar a factorial
// ============================================
const factorial = factorialCalculator(num);

// ============================================
// 5. Almacenar en el formato requerido
// ============================================
const resultMsg = 'Factorial of ' + num + ' is ' + factorial;

// ============================================
// 6. Mostrar en la consola
// ============================================
console.log(resultMsg);