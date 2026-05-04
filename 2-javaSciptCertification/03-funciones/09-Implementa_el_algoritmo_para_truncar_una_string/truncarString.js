// Truncar una string

// Definición de la función truncateString que toma dos parámetros: stg (la cadena de texto) y num (el número límite de caracteres)
function truncateString(stg, num) {
  // Verificar si la longitud de la cadena es mayor que el número especificado
  if (stg.length > num) {
    // Si es mayor, cortar la cadena desde el índice 0 hasta num y agregar "..." al final
    return stg.slice(0, num) + "...";
  }
  // Si no es mayor, devolver la cadena original sin cambios
  return stg;
}

// Pruebas de la función con diferentes casos
// Caso 1: Cadena larga truncada a 8 caracteres
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Caso 2: Cadena larga truncada a 11 caracteres
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
// Caso 3: Cadena con longitud exacta (no se trunca)
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// Caso 4: Cadena con longitud mayor que la especificada (no se trunca porque num es mayor que length)
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
// Caso 5: Cadena corta truncada a 1 carácter
console.log(truncateString("A-", 1));
// Caso 6: Cadena truncada a 2 caracteres
console.log(truncateString("Absolutely Longer", 2));

