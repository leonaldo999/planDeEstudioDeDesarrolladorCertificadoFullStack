/* Verificador de requisitos para préstamos */

// Explicación paso a paso:

// 1. Definimos las variables para los requisitos de ingresos y puntaje de crédito para cada tipo de préstamo.
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

// 2. Creamos la función getLoanMessage que toma el ingreso anual y el puntaje de crédito como parámetros.
const getLoanMessage = (annualIncome, creditScore) => {
  // 3. Dentro de la función, usamos una serie de declaraciones if-else para verificar si el solicitante cumple con los requisitos para cada tipo de préstamo.
  
  // 4. Si el solicitante cumple con los requisitos para un préstamo de dúplex, se devuelve un mensaje indicando que es elegible para ese préstamo.
  if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
    return "Eres elegible para un préstamo de dúplex.";
    // 5. Si el solicitante cumple con los requisitos para un préstamo de condominio, se devuelve un mensaje indicando que es elegible para ese préstamo.
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
    // 6. Si el solicitante cumple con los requisitos para un préstamo de automóvil, se devuelve un mensaje indicando que es elegible para ese préstamo.
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
    // 7. Si el solicitante no cumple con los requisitos para ningún préstamo, se devuelve un mensaje indicando que no califica para ningún préstamo.
  } else {
    return "You don't qualify for any loans.";
  }

}

// 8. Finalmente, llamamos a la función getLoanMessage con diferentes combinaciones de ingresos y puntajes de crédito para probar los mensajes de salida.
const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
