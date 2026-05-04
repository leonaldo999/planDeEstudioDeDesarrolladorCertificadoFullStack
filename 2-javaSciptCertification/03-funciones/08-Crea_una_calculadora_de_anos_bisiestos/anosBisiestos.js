// Calculadora de años bisiestos

// Paso 1: Declaramos una variable 'year' y le asignamos el valor 2000.
// Esta variable representa el año que queremos verificar si es bisiesto.
let year = 2000;

// Paso 2: Definimos una función llamada 'isLeapYear' que toma un parámetro 'year'.
// Esta función determinará si el año es bisiesto o no.
function isLeapYear(year) {
  // Paso 3: Dentro de la función, usamos una condición if para verificar las reglas de años bisiestos.
  // Un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400.
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    // Paso 4: Si la condición es verdadera, retornamos un mensaje indicando que es un año bisiesto.
    return `${year} is a leap year.`;
  } else {
    // Paso 5: Si la condición es falsa, retornamos un mensaje indicando que no es un año bisiesto.
    return `${year} is not a leap year.`;
  }
}

// Paso 6: Llamamos a la función 'isLeapYear' con el valor de 'year' (2000) y almacenamos el resultado en la variable 'result'.
let result = isLeapYear(year);

// Paso 7: Finalmente, imprimimos el resultado en la consola usando console.log.
console.log(result);