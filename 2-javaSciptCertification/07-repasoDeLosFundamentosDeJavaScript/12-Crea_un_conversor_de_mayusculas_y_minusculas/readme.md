# Crea un convertidor a mayúscula inicial

En este laboratorio crearás una función que convierta una cadena a mayúscula inicial. La mayúscula inicial significa que la primera letra de cada palabra está en mayúscula y el resto de la palabra está en minúsculas.

`"Web Development Is Awesome"` es un ejemplo de una cadena con mayúscula inicial.

---

## Historias de usuario

1. Debes tener una función `titleCase` que tome una cadena como argumento.

2. La función `titleCase` debe devolver una cadena en la que la primera letra de cada palabra esté en mayúscula y el resto de la palabra en minúsculas.

3. `titleCase("I like to code")` debe devolver `"I Like To Code"`.

4. `titleCase("javaScript is fun")` debe devolver `"Javascript Is Fun"`.

---

### Solucion

```js
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

```
