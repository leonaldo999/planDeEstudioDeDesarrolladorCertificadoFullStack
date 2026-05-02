// Celsius a Fahrenheit

// Explicación paso a paso:

// 1. Definimos una variable celsius y le asignamos el valor de 0, aunque esta variable no se utiliza en la función convertCtoF.
const celsius = 0;

// 2. Creamos la función convertCtoF que toma un parámetro celsius, que representa la temperatura en grados Celsius que queremos convertir a Fahrenheit.
const convertCtoF = celsius => {
  // 3. Dentro de la función, calculamos la temperatura en Fahrenheit utilizando la fórmula de conversión: F = C * (9/5) + 32.
  const fahrenheit = celsius * (9 / 5) + 32;
  // 4. La función devuelve el valor calculado de Fahrenheit.
  return fahrenheit;
}

// 5. Finalmente, llamamos a la función convertCtoF con diferentes valores de Celsius (0, 100 y -40) y mostramos los resultados en la consola.
console.log(convertCtoF(0));   // 32
console.log(convertCtoF(100)); // 212
console.log(convertCtoF(-40)); // -40


