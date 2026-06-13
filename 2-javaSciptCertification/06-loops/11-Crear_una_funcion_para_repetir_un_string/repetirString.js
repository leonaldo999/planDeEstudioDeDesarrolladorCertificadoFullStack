/* Crear una función para repetir un string */

function repeatStringNumTimes(str, num) {
  let result = ""; // acumulador

  // si num es menor o igual a 0, devolvemos vacío
  if (num <= 0) {
    return "";
  }

  // repetimos el string num veces
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3)); 
// → "abcabcabc"

console.log(repeatStringNumTimes("hello", 1)); 
// → "hello"

console.log(repeatStringNumTimes("test", 0)); 
// → ""
