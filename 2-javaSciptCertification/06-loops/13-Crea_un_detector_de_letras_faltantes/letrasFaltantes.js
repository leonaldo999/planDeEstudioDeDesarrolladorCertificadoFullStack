/* Crea un detector de letras faltantes */

function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    let prevCode = str.charCodeAt(i - 1);
    let currentCode = str.charCodeAt(i);

    // Si la diferencia no es 1, falta una letra
    if (currentCode - prevCode > 1) {
      return String.fromCharCode(prevCode + 1);
    }
  }
  return undefined;
}

// Pruebas
console.log(fearNotLetter("abce")); // "d"
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("stvwx")); // "u"
console.log(fearNotLetter("bcdf")); // "e"
console.log(fearNotLetter("abc")); // undefined

