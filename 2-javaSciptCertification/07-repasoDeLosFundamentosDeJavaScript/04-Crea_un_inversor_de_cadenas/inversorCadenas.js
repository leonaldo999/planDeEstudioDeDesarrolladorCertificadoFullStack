function reverseString(str) {
  const letras = str.split("");
  const invertido = letras.reverse();
  const resultado = invertido.join("");

  return resultado;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("abc")); // "cba"