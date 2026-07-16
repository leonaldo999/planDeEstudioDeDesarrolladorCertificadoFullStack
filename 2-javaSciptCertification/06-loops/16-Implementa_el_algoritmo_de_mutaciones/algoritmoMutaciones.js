// Implementa el algoritmo de mutaciones

function mutation(arr) {
  // Convertir ambas cadenas a minúsculas para ignorar mayúsculas y minúsculas
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  // Recorrer cada letra de la segunda cadena
  for (let i = 0; i < str2.length; i++) {
    // Verificar si la letra actual de str2 está presente en str1
    if (str1.indexOf(str2[i]) === -1) {
      // Si no se encuentra la letra, devolver false
      return false;
    }
  }

  // Si todas las letras de str2 están presentes en str1, devolver true
  return true;
}

// Pruebas
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"]));   // false
console.log(mutation(["Alien", "line"]));  // true