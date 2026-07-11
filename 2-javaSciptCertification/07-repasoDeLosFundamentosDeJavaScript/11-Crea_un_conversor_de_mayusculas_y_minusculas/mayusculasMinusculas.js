// Crea un conversor de mayúsculas y minúsculas

/*
La función recibirá un text.
"I like to code"

Y debe devolver
"I Like To Code"

Eso significa que cada palabra debe cumplir dos reglas:

La primera letra → mayúscula.
El resto → minúsculas.
*/

function titleCase(str) {
  // Se divide el texto
  let texto = str.split(" ");

  // Se recorre el texto
  for (let i = 0; i < texto.length; i++) {
    // Se obtiene la palabra
    let palabra = texto[i];
    // Primera letra en mayúscula
    let primera = palabra[0].toUpperCase();
    // Resto en minúscula
    let resto = palabra.slice(1).toLowerCase();

    // Reemplazar la palabra
    texto[i] = primera + resto;
  }

  // Unir nuevamente el arreglo
  return texto.join(" ");
}

console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
