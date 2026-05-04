// Herramienta para verificar el final de una String

// Opcion 1: función principal que comprueba si una cadena termina con otra cadena.
function confirmEnding(strgChek, strgAgai) {
  // strgChek es la cadena principal que vamos a verificar.
  // strgAgai es la cadena que debe encontrarse al final de strgChek.

  // Tomamos el final de la cadena principal con slice.
  // Usamos la longitud de strgAgai para extraer exactamente esa cantidad de caracteres del final.
  if (strgChek.slice(-strgAgai.length) === strgAgai) {
    // Si la parte final de strgChek coincide con strgAgai, devolvemos true.
    return true;
  } else {
    // Si no coincide, devolvemos false.
    return false;
  }
}


// Opcion 2
// Versión simplificada (Refactorizada):
// function confirmEnding(strgChek, strgAgai) {
//   return strgChek.slice(-strgAgai.length) === strgAgai;
// }


// Opcion 3
// Usando el método .substring()
// function confirmEnding(strgChek, strgAgai) {
//   // Calculamos dónde empieza el final restando longitudes
//   let start = strgChek.length - strgAgai.length;

//   // Extraemos desde ese punto hasta el final
//   if (strgChek.substring(start) === strgAgai) {
//     return true;
//   } else {
//     return false;
//   }
// }


// Llamadas de prueba:
// Cada console.log imprime el resultado de verificar si la cadena termina con la subcadena indicada.
console.log(confirmEnding("Bastian", "n")); // → true
console.log(confirmEnding("Congratulation", "on")); // → true
console.log(confirmEnding("Open sesame", "sage")); // → false



